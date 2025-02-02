import {
	defer,
	defer_end,
	hook_dom,
	hook_effect,
	hook_static,
	node_dom,
} from '../etc/lui.js';

import {
	APP_VIEW_WORLDS,
	MENU_NONE,
} from '../etc/constants.js';
import {
	clearTimeout_,
	setTimeout_,
} from '../etc/helpers.js';

import {
	game_mouse_catch,
	game_save,
} from './m_game.js';

export default function Settings({
	actions: {
		config_reduce,
		config_save,
		config_set,
	},
	config,
	game,
	view_set,
}) {
	hook_effect(() => (
		game_save(game),
		config_save
	));
	hook_effect(() => {
		const timeout = setTimeout_(config_save, 1e3);

		return () => clearTimeout_(timeout);
	}, [config]);

	hook_dom('div[className=menu overlay]');

	return [
		node_dom('h1[innerText=Einstellungen]'),
		hook_static(node_dom('center', null, [
			node_dom('button[innerText=Zurück zum Spiel]', {
				onclick: () => {
					game.menu = MENU_NONE;
					game.world.flag_paused = false;
					game_mouse_catch(game);
				},
			}),
		])),
		node_dom('div[className=settings]', null, [
			node_dom('button', {
				innerText: (
					'Oberflächen:\n' +
					(config.flag_textures ? 'Texturiert' : 'Einfarbig')
				),
				onclick: hook_static(() => (
					config_reduce(config => ({
						flag_textures: !config.flag_textures,
					}))
				)),
			}),
			node_dom('label[innerText=Auflösung:]', null, [
				node_dom('input[type=range][min=1][max=100][step=1]', {
					value: 101 - config.resolution_scaling,
					onchange: hook_static(event => (
						config_set({
							resolution_scaling: 101 - Number(event.target.value),
						})
					)),
				}),
			]),
			node_dom('label[innerText=Blickwinkel:]', null, [
				node_dom('input[type=range][min=1][max=180][step=1]', {
					value: config.view_angle,
					onchange: hook_static(event => (
						config_set({
							view_angle: Number(event.target.value),
						})
					)),
				}),
			]),
			node_dom('label[innerText=Sichtweite:]', null, [
				node_dom('input[type=range][min=1][max=128][step=1]', {
					value: config.view_distance,
					onchange: hook_static(event => (
						config_set({
							view_distance: Number(event.target.value),
						})
					)),
				}),
			]),
			node_dom('label[innerText=Mausempfindlichkeit:]', null, [
				node_dom('input[type=range][min=1][max=15][step=1]', {
					value: config.mouse_sensitivity,
					onchange: hook_static(event => (
						config_set({
							mouse_sensitivity: Number(event.target.value),
						})
					)),
				}),
			]),
		]),
		hook_static(node_dom('center', null, [
			node_dom('button[innerText=Welt verlassen]', {
				onclick: () => {
					defer();
					config_set({
						world_last: -1,
					});
					view_set(APP_VIEW_WORLDS);
					defer_end();
				},
			}),
		])),
	];
}
