import {
	dom_define,
} from '../etc/lui.js';

import {
	BLOCK_COLORS,
	BLOCK_TYPE_AIR,
	BLOCK_TYPE_FACE_LABELS,
	CHUNK_HEIGHT,
	CHUNK_HEIGHT_L2,
	CHUNK_WIDTH_L2,
	COORDINATE_OFFSET,
	GAMEMODE_CREATIVE,
	PLAYER_FOCUS_DISTANCE_CREATIVE,
	PLAYER_FOCUS_DISTANCE_NORMAL,
	SKY_COLOR,
} from '../etc/constants.js';
import {
	VERSION,
} from '../etc/env.js';
import {
	clearInterval_,
	document_,
	Math_ceil,
	Math_cos,
	Math_floor,
	Math_min,
	Math_PI_180d,
	Math_sin,
	Math_sqrt,
	number_padStart2,
	number_square,
	number_toFixed2,
	setInterval_,
	Uint32Array_,
} from '../etc/helpers.js';
import {
	world_block_get,
} from './m_world.js';
import {
	TILES_COUNT,
	TILES_RESOLUTION,
	TILES_RESOLUTION_LOG2,
	TILE_BOOKSHELF,
	TILE_DIRT,
	TILE_GRASS_SIDE,
	TILE_GRASS_TOP,
	TILE_LOG_SIDE,
	TILE_LOG_TOP,
	TILE_PLANKS,
} from '../etc/textures.js';

// parse png
export let tiles_data = null;
let tiles_data_onload = null;
let tiles_image = new Image();
tiles_image.crossOrigin = 'anonymous';
tiles_image.onload = () => {
	const canvas_temp = document_.createElement('canvas');
	canvas_temp.width = 1 << TILES_RESOLUTION_LOG2;
	canvas_temp.height = TILES_COUNT << TILES_RESOLUTION_LOG2;
	const context = canvas_temp.getContext('2d');
	context.drawImage(tiles_image, 0, 0);
	dom_define('tile', 'div[className=bitmap]', {
		S: {
			backgroundImage: `url(${canvas_temp.toDataURL()})`,
		},
	});
	tiles_data = new Uint32Array_(
		context.getImageData(
			0, 0,
			1 << TILES_RESOLUTION_LOG2,
			TILES_COUNT << TILES_RESOLUTION_LOG2
		).data.buffer
	);
	tiles_data_onload && tiles_data_onload();
	tiles_image = tiles_data_onload = null;
}
tiles_image.src = ASSETS + 'blocks.webp';

export const renderer_create = (game, canvas_element) => {
	const model = {
		canvas_element,
		canvas_context: canvas_element.getContext('2d', {
			alpha: false,
			desynchronized: true,
		}),
		canvas_surface: null,
		diagnostics: '',
		flag_dirty: false,
		fps: 0,
		fps_counter: 0,
		fps_interval: setInterval_(() => (
			model.fps = model.fps_counter,
			model.fps_counter = 0
		), 1e3),
		game,
	};
	if (tiles_data === null) {
		tiles_data_onload = () => model.flag_dirty = true;
	}
	renderer_canvas_init(model);
	return model;
}

export const renderer_destroy = model => (
	clearInterval_(model.fps_interval)
);

export const renderer_render = (model, now) => {
	++model.fps_counter;

	const {
		canvas_context,
		canvas_surface,
		game,
	} = model;
	const {
		config,
		flag_hud,
		player,
		resolution_x,
		resolution_y,
		world,
	} = game;

	//let check_count = 0;

	if (
		!world.flag_paused ||
		model.flag_dirty
	) {
		model.flag_dirty = false;

		const canvas_surface_data = canvas_surface.data;

		const {
			view_distance,
		} = config;
		const {
			angle_h,
			angle_v,
			block_focus_x,
			block_focus_z,
			position_x,
			position_y,
			position_z,
		} = player;
		const block_focus_y = flag_hud ? player.block_focus_y : -1;
		const {
			blocks,
			size_l2,
		} = world;
		const flag_textures = config.flag_textures && tiles_data !== null;
		tiles_data = /** @type {Uint32Array!} */ (tiles_data);
		const resolution_x_1d = 1 / resolution_x;
		const resolution_y_1d = 1 / resolution_y;
		const resolution_x_h = resolution_x >> 1;
		const resolution_y_h = resolution_y >> 1;
		const resolution_min = Math_min(resolution_x, resolution_y);
		const cursor_cross = resolution_min > 32;
		const pixel_focus_x = resolution_x_h;
		const pixel_focus_y = resolution_y_h;
		const angle_h_cos = Math_cos(angle_h);
		const angle_h_sin = Math_sin(angle_h);
		const angle_v_cos = Math_cos(-angle_v);
		const angle_v_sin = Math_sin(-angle_v);
		const fov = config.view_angle / 45;// TODO
		const fov_x = resolution_x < resolution_y ? fov * resolution_x * resolution_y_1d : fov;
		const fov_y = resolution_y < resolution_x ? fov * resolution_y * resolution_x_1d : fov;
		const resolution_x_1d__fov_x = resolution_x_1d * fov_x;
		const resolution_y_1d__fov_y = resolution_y_1d * fov_y;
		const position_x_shifted = position_x + COORDINATE_OFFSET;
		const position_y_shifted = position_y + COORDINATE_OFFSET;
		const position_z_shifted = position_z + COORDINATE_OFFSET;
		const position_x_shifted_rest = position_x_shifted % 1;
		const position_y_shifted_rest = position_y_shifted % 1;
		const position_z_shifted_rest = position_z_shifted % 1;
		const world_width_l2 = CHUNK_WIDTH_L2 + size_l2;
		const world_width_m1 = (1 << world_width_l2) - 1;

		let focus_distance_min =
			player.gamemode === GAMEMODE_CREATIVE
			?	PLAYER_FOCUS_DISTANCE_CREATIVE
			:	PLAYER_FOCUS_DISTANCE_NORMAL;
		let canvas_surface_data_index =
			player.block_focus_x =
			player.block_focus_z =
			player.block_focus_face = 0;
		player.block_focus_y = -1;

		for (let canvas_y = 0; canvas_y < resolution_y; ++canvas_y) {
			const canvas_y_relative = (resolution_y_h - canvas_y) * resolution_y_1d__fov_y;

			const step_y_raw = canvas_y_relative * angle_v_cos - angle_v_sin;
			const step_z_rot = canvas_y_relative * angle_v_sin + angle_v_cos;
			const step_z_rot_sin = step_z_rot * angle_h_sin;
			const step_z_rot_cos = step_z_rot * angle_h_cos;

			for (let canvas_x = 0; canvas_x < resolution_x; ++canvas_x) {
				const canvas_x_relative = (canvas_x - resolution_x_h) * resolution_x_1d__fov_x;

				const step_x_raw = step_z_rot_sin + angle_h_cos * canvas_x_relative;
				const step_z_raw = step_z_rot_cos - angle_h_sin * canvas_x_relative;

				let pixel_color = SKY_COLOR;
				let pixel_factor = 1.0;

				let check_distance_min = view_distance;
				// step for each x, y, z
				for (let dim = 0; dim < 3; ++dim) {
					// https://jsben.ch/AqXcR
					let step_dim = step_z_raw;
					if (dim === 0) step_dim = step_x_raw;
					if (dim === 1) step_dim = step_y_raw;

					// https://jsben.ch/hKgi4
					const step_normal = 1 / (step_dim < 0 ? -step_dim : step_dim);
					const step_x = step_x_raw * step_normal;
					const step_y = step_y_raw * step_normal;
					const step_z = step_z_raw * step_normal;
					const step_diagonal = Math_sqrt(
						step_x * step_x +
						step_y * step_y +
						step_z * step_z
					);

					// calculate distance to first intersection to then start on it
					let offset = position_z_shifted_rest;
					if (dim === 0) offset = position_x_shifted_rest;
					if (dim === 1) offset = position_y_shifted_rest;
					if (step_dim > 0) offset = 1 - offset;

					let check_x = position_x_shifted + step_x * offset - ((dim === 0)&(step_dim < 0)|0);
					let check_y = position_y_shifted + step_y * offset - ((dim === 1)&(step_dim < 0)|0);
					let check_z = position_z_shifted + step_z * offset - ((dim === 2)&(step_dim < 0)|0);
					let check_distance = step_diagonal * offset;

					// add steps until collision or out of range
					// https://jsben.ch/kM67J
					for (
						let check_x_int, check_y_int, check_z_int, block;
						check_distance < check_distance_min;
						check_x += step_x,
						check_y += step_y,
						check_z += step_z,
						check_distance += step_diagonal
					) {
						if (check_y < COORDINATE_OFFSET) {
							if (step_y < 0) break;
							continue;
						}
						if (check_y >= COORDINATE_OFFSET + CHUNK_HEIGHT) {
							if (step_y > 0) break;
							continue;
						}
						//++check_count;
						if (
							(
								block = blocks[
									(
										(
											check_x_int = check_x & world_width_m1
										) << world_width_l2 |
										(
											check_z_int = check_z & world_width_m1
										)
									) << CHUNK_HEIGHT_L2 |
									(
										check_y_int = check_y & (CHUNK_HEIGHT - 1)
									)
								]
							) !== BLOCK_TYPE_AIR
						) {
							// collision

							if (
								canvas_y === pixel_focus_y &&
								canvas_x === pixel_focus_x &&
								check_distance <= focus_distance_min
							) {
								// set focus
								player.block_focus_x = check_x_int;
								player.block_focus_y = check_y_int;
								player.block_focus_z = check_z_int;
								player.block_focus_face = (step_dim < 0) | dim << 1;
								focus_distance_min = check_distance;
							}

							// calculate color
							if (flag_textures) {
								// shift so that block id 1 => tile 0
								--block;

								if (dim === 1) {
									if (block === TILE_LOG_SIDE)
										block = TILE_LOG_TOP;
									else if (block === TILE_BOOKSHELF)
										block = TILE_PLANKS;
									else if (
										block === TILE_GRASS_TOP &&
										step_y > 0
									) block = TILE_DIRT;
								}
								else if (block === TILE_GRASS_TOP)
									block = TILE_GRASS_SIDE;

								// pick pixel
								const texture_pixel = tiles_data[
									block << (TILES_RESOLUTION_LOG2 * 2) |
									(
										// y
										(
											dim === 1
											?	check_z
											:	check_y
										) * TILES_RESOLUTION & (TILES_RESOLUTION - 1)
									) << TILES_RESOLUTION_LOG2 |
									// x
									(
										dim === 1
										?	check_x
										:	(
											step_dim > 0
											?	check_x - check_z
											:	check_z - check_x
										) + COORDINATE_OFFSET
									) * TILES_RESOLUTION & (TILES_RESOLUTION - 1)
								];

								// transparent pixel?
								if (texture_pixel >>> 24 === 0) continue;

								// solid pixel
								pixel_color = texture_pixel & 0xffffff;
							}
							else pixel_color = BLOCK_COLORS[block];

							check_distance_min = check_distance;
							pixel_factor = (
								// fake shadow to see edges
								(
									dim === 0
									?	.8
									: dim === 2
									?	.6
									: step_dim > 0
									?	.4
									:	1
								) +
								// highlight if focussed
								(
									check_y_int !== block_focus_y ||
									check_x_int !== block_focus_x ||
									check_z_int !== block_focus_z
									?	0
									:	.2
								)
							);
							break;
						}

						// no collision
					}
				}

				canvas_surface_data[canvas_surface_data_index] =
					(pixel_color & 0xff) * pixel_factor;
				canvas_surface_data[++canvas_surface_data_index] =
					((pixel_color >> 8) & 0xff) * pixel_factor;
				canvas_surface_data[++canvas_surface_data_index] =
					(pixel_color >> 16) * pixel_factor;
				canvas_surface_data_index += 2;
			}
		}

		// cursor
		if (
			flag_hud &&
			!cursor_cross
		) {
			canvas_surface_data[
				canvas_surface_data_index =
					(resolution_x * pixel_focus_y + pixel_focus_x) << 2
			] += 128;
			canvas_surface_data[++canvas_surface_data_index] += 128;
			canvas_surface_data[++canvas_surface_data_index] += 128;
		}

		canvas_context.putImageData(canvas_surface, 0, 0);

		if (
			flag_hud &&
			cursor_cross
		) {
			const cross_width_h = Math_ceil(
				resolution_min * .05
			);
			const cross_width = cross_width_h << 1;
			canvas_context.fillRect(
				resolution_x_h - cross_width_h,
				resolution_y_h - 1,
				cross_width,
				2
			);
			canvas_context.fillRect(
				resolution_x_h - 1,
				resolution_y_h - cross_width_h,
				2,
				cross_width_h - 1
			);
			canvas_context.fillRect(
				resolution_x_h - 1,
				resolution_y_h + 1,
				2,
				cross_width_h - 1
			);
		}
	}

	model.diagnostics = (
		game.flag_diagnostics
		?	'Minicraft ' + VERSION + ' ' + (
				number_padStart2(model.fps, '\xa0')
			) + ' fps, T: ' + (
				number_padStart2(world.time_f * 24, '0')
			) + ':' + (
				number_padStart2((((world.time_f * 24) % 1) * 60), '0')
			) + '; ' + (
				world.flag_paused &&
				now % 1e3 < 500
				?	''
				:	world.time
			) + '\n' +

			'R: ' + resolution_x + 'x' + resolution_y +
			' (x' + config.resolution_scaling + '), D: ' + config.view_distance + ', ' +
			//'S: ' + check_count + ', ' +
			'C: ' + world.chunks_checklist_index + '/' + world.chunks_checklist.length + ', ' +
			'M: ' + (
				number_square(
					1 << (CHUNK_WIDTH_L2 + world.size_l2)
				)
				* CHUNK_HEIGHT >> 10
			) + 'k\n' +
			'E: 0/0 M: ' + player.gamemode + '\n\n' +

			'Position: ' + (
				number_toFixed2(player.position_x)
			) + ' ' + (
				number_toFixed2(player.position_y)
			) + ' ' + (
				number_toFixed2(player.position_z)
			) + '\n' +

			'Angle: ' + (
				number_toFixed2(player.angle_h * Math_PI_180d)
			) + ' ' + (
				number_toFixed2(player.angle_v * Math_PI_180d)
			) + '\n' +
			'Block: ' + (
				player.block_focus_y < 0
				?	0
				:	player.block_focus_x + ' ' +
					player.block_focus_y + ' ' +
					player.block_focus_z + ' ' +
					BLOCK_TYPE_FACE_LABELS[player.block_focus_face] + ': ' +
					world_block_get(
						world,
						player.block_focus_x,
						player.block_focus_y,
						player.block_focus_z
					)
			) + '\n' +
			'Chunk abs: ' + (
				Math_floor(player.position_x) >> CHUNK_WIDTH_L2
			) + ' ' + (
				Math_floor(player.position_z) >> CHUNK_WIDTH_L2
			) + ' ' + (
				Math_floor(player.position_y) >> CHUNK_WIDTH_L2
			) + ' rel: ' + (
				world.focus_x
			) + ' ' + (
				world.focus_z
			) + ' ' + (
				world.focus_y
			)
		:	''
	);
}

export const renderer_canvas_init = model => {
	(
		model.canvas_surface = model.canvas_context.createImageData(
			model.canvas_element.width = model.game.resolution_x,
			model.canvas_element.height = model.game.resolution_y
		)
	).data.fill(0xff);
	model.canvas_context.fillStyle = 'rgba(255,255,255,.5)';
}
