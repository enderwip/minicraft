const w=lui,z=w.hook_dom,C=w.hook_effect,aa=w.hook_memo,ba=w.hook_model,ca=w.hook_rerender,D=w.hook_static,G=w.node,J=w.node_dom,da=w.node_map,ea=w.now,fa=window,ka=document,K=Math,la=K.PI,ma=.5*la,sa=180/la,M=K.floor,ta=K.ceil,ua=K.round,va=K.min,O=K.max,wa=K.cos,xa=K.sin,Ca=K.sqrt,Da=String.fromCharCode,Ea=JSON,Fa=localStorage,Ga=Uint8Array,Ha=Uint32Array,Ia=Map,Ja=setTimeout,Ka=setInterval,La=clearInterval,Ma=()=>!1,Na=({I:{time:a,value:c},Ea:e})=>(z("div",{innerText:c,S:{opacity:va(1,1-.001*(e-
a-4500))}}),null);function Oa({u:a,Ea:c}){z("div[className=messages]");const e=c-5E3;return[da(Na,a.slice(-10).filter(b=>b.time>e),{Ea:c})]}
const Pa=[0,8487297,4305266,4349313,8092539,5342114,7039851,3561583,4172910,6384533,15526888,10671324,8092798,16447200,4151672,1970708,8092539,9686227,9126695,15198183,5567485,14541182,7920469,662956,14936813],Qa=Pa.length,Ra="WEBTSN".split(""),Sa=a=>{a+=32;33<a&&39>a?a++:38<a&&44>a?a+=2:43<a&&127>a?a+=3:126<a&&55258>a?a+=37:55295<a&&(a+=8485);return Da(a)},Ta=a=>a-(63743<a?8517:159<a?69:46<a&&130>a?35:40<a&&46>a?34:34<a&&40>a?33:32),Va=()=>{var a=Ua;const c=a.length,e=new Ia,b=u=>{m=m<<1|u&1;15===
++p&&(h+=Sa(m),m=p=0)},g=()=>{for(let u=0;u<l;++u)b(0)},k=u=>{b(u);b(u>>1);b(u>>2);b(u>>3);b(u>>4);b(u>>5);b(u>>6);b(u>>7)},n=()=>{0===--t&&(t=1<<l++)},f=()=>{if(x)x=!1;else{let u=r.id;for(let H=0;H<l;H++)b(u>>H)}};let d=a[0],h="",m=0,p=2,l=2,t=2,v=2,r={id:v++,ia:new Ia},x=!0;k(d);e.set(d,r);for(let u=1;u<c;++u){const H=r.ia.get(d=a[u]);H?r=H:(f(),e.has(d)||(n(),g(),k(d),e.set(d,{id:v++,ia:new Ia}),x=!0),r.ia.set(d,{id:v++,ia:new Ia}),r=e.get(d),n())}f();e.has(d)||(n(),g(),k(d));n();b(1);--l;g();
return h+=Sa(m<<15-p)},Wa=a=>{var c=Ua;if(!a)return null;const e=a.length,b=()=>{p+=(v>>--r&1)<<l++;0===r&&(r=15,v=Ta(a.charCodeAt(t++)))};let g=[0,1],k=1,n=3,f=2,d=null;var h=null;let m=0,p=0;h=2;let l=0,t=0,v=Ta(a.charCodeAt(t++)),r=15;for(;l<h;)b();if(1===p)return null;for(p=l=0;8>l;)b();d=[p];g[2]=d;for(c[m++]=p;t<=e;){h=f;for(p=l=0;l<h;)b();if(0===p){for(p=l=0;8>l;)b();g[n]=[p];p=n++;0===--k&&(k=1<<f++)}else if(1===p)return c;h=p<g.length?g[p]:d.concat(d[0]);for(let x=0;x<h.length;x++)c[m++]=
h[x];g[n++]=d.concat(h[0]);d=h;0===--k&&(k=1<<f++)}return null},P=new Ha(1024),Ua=new Ga(P.buffer),Xa=new Ia,Ya=(a,c,e,b,g)=>{const k=a.o;a.Z[(c<<k+4|b)<<6|e]=g;a.A[(c>>4<<k|b>>4)<<2|e>>4].K=!0},lb=(a,c,e)=>{const b=O(va(c.G,63),0)>>4,g=M(c.B)>>4;c=M(c.H)>>4;if(e||a.na!==b||a.ca+a.ma!==g||a.da+a.oa!==c)e=1<<a.o,a.na=b,a.ca=g-(a.ma=(65536+g)%e),a.da=c-(a.oa=(65536+c)%e),jb(a);kb(a)},jb=a=>{const c=a.ma,e=a.na,b=a.oa,g=a.o,k=`${g} ${c} ${b} ${e}`;let n=Xa.get(k);if(null==n){const f=1<<g;Xa.set(k,n=
a.A.map(({x:d,y:h,z:m},p)=>{var l=d-c;l*=l;var t=m-b;t*=t;var v=d-c-f;let r=v*v,x=v=0;r<l&&(l=r,v=-f);d=d-c+f;(r=d*d)<l&&(l=r,v=f);d=m-b-f;(r=d*d)<t&&(t=r,x=-f);m=m-b+f;(r=m*m)<t&&(t=r,x=f);h-=e;return{Ka:l+t+h*h,Ha:p,ca:v,da:x}}).sort((d,h)=>d.Ka-h.Ka))}a.ja=n;a.$=0},mb=(a,c,e,b)=>`minicraft.world.${a.id}:${c}/${e}`+(0<b?"/"+b:""),nb=(a,c)=>{const e=a.va;var b=a.o;const g=c.y,k=(256<<b)-256;for(let n=0,f=-1,d=((c.x<<b+4|c.z)<<6|g)<<2;16>n;++n){for(b=0;16>b;++b)P[++f]=e[d],P[++f]=e[++d],P[++f]=e[++d],
P[++f]=e[++d],d+=13;d+=k}Fa.setItem(mb(a,c.fa,c.sa,g),Va());c.K=!1},kb=a=>{var c=a.A,e=a.ja,b=a.ca;const g=a.da,k=e.length;for(;a.$<k;){var n=e[a.$++];const l=c[n.Ha];var f=l.loaded,d=l.x,h=l.y,m=l.z;const t=b+n.ca+d;n=g+n.da+m;if(!f||t!==l.fa||n!==l.sa){l.K&&nb(a,l);l.loaded=!0;var p=Wa(Fa.getItem(mb(a,l.fa=t,l.sa=n,h)));if(f||0===h||p){c=a.va;b=a.o;e=(256<<b)-256;d=((d<<b+4|m)<<6|h)<<2;if(p)for(let v=0,r=-1;16>v;++v){for(f=0;16>f;++f)c[d]=P[++r],c[++d]=P[++r],c[++d]=P[++r],c[++d]=P[++r],d+=13;d+=
e}else for(m=0;16>m;++m){for(p=0;16>p;++p)c[d]=0<h?0:50397446,c[++d]=0<h?0:131843,f?(c[++d]=0,c[++d]=0,d+=13):d+=15;d+=e}if(0===(t|n|h)){for(h=1;h<Qa;++h)Ya(a,h%9,7,M(h/9),h);l.K=!1}break}}}};let ob=null,pb=new Image;pb.crossOrigin="anonymous";pb.onload=()=>{var a=ka.createElement("canvas");a.width=256;a.height=26;a=a.getContext("2d");a.drawImage(pb,0,0);pb=null;ob=new Ha(a.getImageData(0,0,256,26).data.buffer)};pb.src=ASSETS+"blocks.png";
const rb=(a,c)=>{const e={xa:c,wa:null,Ga:null,Ja:"",P:!1,La:0,ya:0,Ua:Ka(()=>(e.La=e.ya,e.ya=0),1E3),i:a};qb(e);return e},qb=a=>{var c=a.xa.width=a.i.qa,e=a.xa.height=a.i.ra;c=(a.Ga=(a.wa=a.xa.getContext("2d")).createImageData(c,e)).data;a.wa.fillStyle="rgba(255,255,255,.5)";a=c.length;for(e=3;e<a;e+=4)c[e]=255};let sb=0;
const tb=()=>{const a={Z:null,va:null,A:null,ja:null,$:0,ma:0,na:0,oa:0,id:0,ca:0,da:0,o:0,Oa:.5,Pa:8.5,Qa:.5};return{l:null,ka:!1,h:!0,la:!1,Ma:null,za:0,aa:new Set,Aa:"",j:0,u:[],g:{ta:0,Fa:0,ua:0,v:0,ga:0,ha:0,N:0,J:-1,O:0,X:null,Y:null,Na:9,pa:0,B:a.Oa,G:a.Pa,H:a.Qa,U:0,V:0,W:0},m:null,Ba:1,Ca:1,qa:0,ra:0,Ra:null,time:0,Da:0,s:a}},ub=(a,c)=>{a.m=rb(a,c);a.Ra=Ka(()=>{a.h||(a.time=(a.time+1)%24E3,a.Da=1/24E3*(a.time+6E3)%1,lb(a.s,a.g,!1))},50)},vb=a=>{var c=a.g,e=(a=a.aa).has(-12)||a.has(65);a=
a.has(-13)||a.has(68);c.ta=e===a?0:.1-.2*e},wb=a=>{var c=a.g,e=(a=a.aa).has(-15)||a.has(16);a=a.has(-14)||a.has(32);c.Fa=e===a?0:.1-.2*e},xb=a=>{var c=a.g,e=(a=a.aa).has(-11)||a.has(83);a=a.has(-10)||a.has(87);c.ua=e===a?0:.1-.2*e},zb=(a,c,e)=>{const b=a.aa,g=a.g;if(e){if(b.has(c))return!1;b.add(c);const n=g.N;var k=g.J;e=g.O;switch(c){case -1:0<=k&&(0===g.pa?Ya(a.s,n,k,e,0):yb(a,[n,k,e],!1));break;case -2:case 71:0<=k&&(c=a.s,g.Na=0>k||63<k?0:c.Z[(n<<c.o+4|e)<<6|k]);break;case -3:if(0<=k)if(0===
g.pa){c=n;switch(g.ha){case 0:--c;break;case 1:++c;break;case 2:--k;break;case 3:++k;break;case 4:--e;break;default:++e}0<=k&&64>k&&Ya(a.s,c&(1<<4+a.s.o)-1,k,e&(1<<4+a.s.o)-1,g.Na)}else yb(a,[n,k,e],!0);break;case 27:a.j?(a.h=!1,a.j=0):(a.h=!0,a.j=1);break;case -15:case -14:case 16:case 32:wb(a);break;case -12:case -13:case 65:case 68:vb(a);break;case 80:a.h=!a.h;break;case -11:case -10:case 83:case 87:xb(a);break;case 84:if(!a.j){a.j=2;for(const f of b)zb(a,f,!1)}break;case 114:a.ka=!a.ka;break;
default:return!1}}else{if(!b.delete(c))return!1;switch(c){case -15:case -14:case 16:case 32:wb(a);break;case -12:case -13:case 65:case 68:vb(a);break;case -11:case -10:case 83:case 87:xb(a)}}a.Aa=[...b].join();return!0},Z=(a,c)=>{(a.u=a.u.slice(-49)).push({id:++sb,time:ea(),value:c})},yb=(a,c,e)=>{e?a.g.Y=c:a.g.X=c;Z(a,`${e?"second":"first"} position: ${c.join(" ")}`)};
function Ab({actions:{Sa:a,Ia:c},l:e,i:b}){z("div[className=menu]");return[J("h1[innerText=Men\u00fc]"),J("div[className=settings]",null,[J("button",{innerText:"Oberfl\u00e4chen: "+(e.T?"Texturiert":"Einfarbig"),onclick:D(()=>a(g=>({T:!g.T})))}),J("label[innerText=Aufl\u00f6sung:]",null,[J("input[type=range][min=1][max=100][step=1]",{value:101-e.L,onchange:D(g=>c({L:101-Number(g.target.value)}))})]),J("label[innerText=Blickwinkel:]",null,[J("input[type=range][min=1][max=180][step=1]",{value:e.ea,
onchange:D(g=>c({ea:Number(g.target.value)}))})]),J("label[innerText=Sichtweite:]",null,[J("input[type=range][min=1][max=128][step=1]",{value:e.M,onchange:D(g=>c({M:Number(g.target.value)}))})]),J("label[innerText=Mausempfindlichkeit:]",null,[J("input[type=range][min=1][max=15][step=1]",{value:e.ba,onchange:D(g=>c({ba:Number(g.target.value)}))})])]),J("center",null,[J("button[innerText=Zur\u00fcck]",{onclick:D(g=>(b.j=0,"mouse"===g.pointerType?b.Ma.requestPointerLock():b.h=!1))})])]}
const Bb=({I:{value:a}})=>(z("div",{innerText:a}),null);
function Cb({i:a,u:c}){z("div[className=menu terminal]");const e=D({history:null});C(b=>{b&&Ja(()=>e.history.scrollTop=1E9,0)},[c.length&&c[c.length-1].id]);return[J("div[className=history]",{R:D(b=>{e.history=b})},[da(Bb,c)]),J("input[enterkeyhint=send][mozactionhint=send][name=message][required]",D({onkeydown:b=>{var g=b.keyCode;b=b.target;if(13===g){if(g=b.value)if("/"===g.charAt(0)){g=g.substr(1).split(" ");var k=g.shift();switch(k){case "clear":a.u=[];break;case "exit":a.h=!1;a.j=0;break;case "help":Z(a,
"commands: clear, exit, help, spawn, version, /regen");break;case "spawn":a.g.B=a.s.Oa;a.g.G=a.s.Pa;a.g.H=a.s.Qa;a.m.P=!0;break;case "version":Z(a,"Minicraft 0.5.4");break;case "/exit":a.g.pa=0;Z(a,"normal mouse mode");break;case "/expand":a.g.X&&a.g.Y?k=!0:(Z(a,"selection required"),k=!1);k&&("vert"===g[0]?(a.g.X[1]=0,a.g.Y[1]=63,Z(a,"selection expanded")):Z(a,"only vert supported"));break;case "/pos1":case "/pos2":yb(a,[M(a.g.B),M(a.g.G),M(a.g.H)],"/pos2"===k);break;case "/regen":g=a.s;k=g.A[g.ja[g.$=
0].Ha];Fa.removeItem(mb(g,k.fa,k.sa,k.y));k.K=!1;++k.fa;kb(g);Z(a,"regenerate chunk");a.m.P=!0;break;case "/show":Z(a,`first: ${a.g.X?a.g.X.join(" "):"none"}, second: ${a.g.Y?a.g.Y.join(" "):"none"}`);break;case "/wand":a.g.pa=1;Z(a,"primary+secondary button for selection");break;default:Z(a,"unknown command: "+k)}}else Z(a,"<me> "+g);b.value=""}else 27===g&&(a.h=!1,a.j=0)},R:b=>Ja(()=>b.focus(),0)}))]}
const Db=[["place",-3],["pick",-2],["up",-14],["down",-15],["T",84],["F3",114],["...",27]],Eb=[["up",-10],["down",-11],["left",-12],["right",-13],["center",-1]];
function Fb({i:a}){const c=a.aa;z("div[className=touch]",D({ontouchstart:e=>{e.preventDefault();const b=Number(e.target.dataset.code);if(null!=b&&zb(a,b,!0)){const g=e.changedTouches[0].identifier,k=n=>{n.changedTouches[0].identifier===g&&(removeEventListener("touchend",k),zb(a,b,!1))};addEventListener("touchend",k)}}}));return[J("div[className=top]",null,Db.map(([e,b])=>J(`div[innerText=${e}]`,{D:{code:b},F:{button:!0,active:c.has(b)}}))),J("div[className=move]",null,Eb.map(([e,b])=>J("div",{D:{code:b},
F:{button:!0,[e]:!0,active:c.has(b)}})))]}
function Gb({actions:a,l:c,Va:e}){const b=aa(tb),g=ea(),k=z("div[className=game]",aa(()=>{const f=d=>0!==b.j||(b.la=!1,ka.pointerLockElement===k?b.h||zb(b,-1-d.button,"mousedown"===d.type):b.Ma.requestPointerLock(),d.preventDefault(),!1);return{onmousedown:f,onmousemove:d=>{if(!b.h&&!b.j){const h=b.l.ba*la/O(b.Ba,b.Ca);b.g.v=(b.g.v+d.movementX*h+100*la)%(2*la);b.g.ga=O(-ma,va(ma,b.g.ga-d.movementY*h))}},onmouseup:f,ontouchstart:d=>{b.la=!0;b.j||(b.h=!1,d.preventDefault())}}})),n=ka.pointerLockElement===
k;C(()=>(b.Ma=k,e.i=b,()=>{La(b.Ra);La(b.m.Ua);return e.i=null}));C(()=>{b.l=c;b.m&&(b.m.P=!0);const f=b.g,d=b.s;var h=b.l.M;h=17>h?2:49>h?3:113>h?4:241>h?5:497>h?6:1009>h?7:2033>h?8:4081>h?9:8177>h?10:16369>h?11:32753>h?12:13;if(d.o!==h){if(d.A)for(var m of d.A)m.K&&nb(d,m);m=1<<(d.o=h);const p=d.A=[];for(let l=0;l<m;++l)for(let t=0;t<m;++t)for(let v=0;4>v;++v)p.push({K:!1,loaded:!1,x:l,y:v,z:t,fa:0,sa:0});d.Z=new Ga((d.va=new Ha(m<<h+12+2-2)).buffer);lb(d,f,!0)}},[c]);C((f,d,h)=>{b.Ba=O(1,f*h);
b.Ca=O(1,d*h);d=b.l.L;f=O(1,ua(b.Ba/d));d=O(1,ua(b.Ca/d));if(f!==b.qa||d!==b.ra)b.qa=f,b.ra=d,b.m&&(b.m.P=!0,qb(b.m))},[k.offsetWidth,k.offsetHeight,fa.devicePixelRatio||1,c.L]);C(()=>{n||b.h||b.j||(b.j=1);b.h=!n},[n]);C(f=>n&&f&&ka.exitPointerLock(),[b.h||b.j]);C(()=>{if(b.za&&!b.h){var f=b.g,d=va(5,.01*(g-b.za));f.U-=.1*f.U*d;f.V-=.1*f.V*d;f.W-=.1*f.W*d;f.U+=(wa(f.v)*f.ta+xa(f.v)*f.ua)*d;f.V+=f.Fa*d;f.W+=(-xa(f.v)*f.ta+wa(f.v)*f.ua)*d;f.B+=f.U*d;f.G+=f.V*d;f.H+=f.W*d}if(b.m){f=b.m;++f.ya;var h=
f.wa,m=f.Ga;d=f.i;const ha=d.l,q=d.g,L=d.qa,N=d.ra,I=d.s;if(!d.h||f.P){f.P=!1;const T=m.data,Ib=ha.M;var p=q.v,l=q.ga;const Jb=q.N,Kb=q.J,Lb=q.O;var t=q.B,v=q.G,r=q.H;const Mb=I.Z;var x=I.o;const Nb=ha.T&&null!==ob;var u=1/L,H=1/N,A=L>>1;const U=N>>1,Za=va(L,N),$a=32<Za,ab=wa(p);p=xa(p);const bb=wa(-l);l=xa(-l);var V=ha.ea/45;const Ob=u*(L<N?V*L*H:V);u=H*(N<L?V*N*u:V);t+=65536;v+=65536;r+=65536;H=t%1;V=v%1;const Pb=r%1;x=4+x;const cb=(1<<x)-1;let db=5,Q=q.N=q.O=q.ha=0;q.J=-1;for(let na=0;na<N;++na){var oa=
(U-na)*u;const eb=oa*bb-l;var ya=oa*l+bb;oa=ya*p;ya*=ab;for(let pa=0;pa<L;++pa){var ia=(pa-A)*Ob;const fb=oa+ab*ia;ia=ya-p*ia;let ja=16757124,qa=1,gb=Ib;for(let y=0;3>y;++y){let E=ia;0===y&&(E=fb);1===y&&(E=eb);var R=1/(0>E?-E:E);const ra=fb*R,S=eb*R;R*=ia;const hb=Ca(ra*ra+S*S+R*R);var B=Pb;0===y&&(B=H);1===y&&(B=V);0<E&&(B=1-B);let W=t+ra*B,X=v+S*B,Y=r+R*B;B*=hb;0===y&&(W+=.5-(0>E|0));1===y&&(X+=.5-(0>E|0));2===y&&(Y+=.5-(0>E|0));for(let za,Aa,Ba,F;B<gb;W+=ra,X+=S,Y+=R,B+=hb)if(65536>X){if(0>S)break}else if(65600<=
X){if(0<S)break}else if(0!==(F=Mb[((za=W&cb)<<x|(Ba=Y&cb))<<6|(Aa=X&63)])){na===U&&pa===A&&B<=db&&(q.N=za,q.J=Aa,q.O=Ba,q.ha=0>E|y<<1,db=B);if(Nb){--F;1===y?6===F?F=25:13===F?F=4:1===F&&0<S&&(F=2):1===F&&(F=24);const ib=ob[F<<8|(16*(1===y?Y:X)&15)<<4|16*(1===y?W:(0<E?W-Y:Y-W)+65536.5)&15];if(0===ib>>>24)continue;ja=ib&16777215}else ja=Pa[F];gb=B;qa=(0===y?.8:2===y?.6:0<E?.4:1)+(Aa!==Kb||za!==Jb||Ba!==Lb?0:.2);break}}T[Q]=(ja&255)*qa;T[++Q]=(ja>>8&255)*qa;T[++Q]=(ja>>16)*qa;Q+=2}}$a||(T[Q=L*U+A<<2]+=
128,T[++Q]+=128,T[++Q]+=128);h.putImageData(m,0,0);$a&&(m=ta(.05*Za),h.fillRect(A-m,U-1,m<<1,2),h.fillRect(A-1,U-m,2,m-1),h.fillRect(A-1,U+1,2,m-1))}d.ka?(h=1<<4+I.o,0>q.J?A=0:(A=q.J,A=q.N+" "+q.J+" "+q.O+" "+Ra[q.ha]+": "+(0>A||63<A?0:I.Z[(q.N<<I.o+4|q.O)<<6|A])),d="Minicraft 0.5.4 "+M(f.La).toString().padStart(2,"\u00a0")+" fps, T: "+M(24*d.Da).toString().padStart(2,"0")+":"+M(24*d.Da%1*60).toString().padStart(2,"0")+"; "+(d.h&&500>g%1E3?"":d.time)+"\nR: "+L+"x"+N+" (x"+ha.L+"), D: "+ha.M+", C: "+
I.$+"/"+I.ja.length+", M: "+(h*h*64>>10)+"k\nE: 0/0\n\nPosition: "+q.B.toFixed(2)+" "+q.G.toFixed(2)+" "+q.H.toFixed(2)+"\nAngle: "+(q.v*sa).toFixed(2)+" "+(q.ga*sa).toFixed(2)+"\nBlock: "+A+"\nChunk abs: "+(M(q.B)>>4)+" "+(M(q.H)>>4)+" "+(M(q.G)>>4)+" rel: "+I.ma+" "+I.oa+" "+I.na):d="";f.Ja=d}b.za=g},[g]);ca();return[J("canvas",{R:D(f=>ub(b,f))}),2!==b.j&&G(Oa,{u:b.u,Ea:g}),b.m&&b.ka&&J("div[className=diagnostics]",{innerText:b.m.Ja}),b.la&&G(Fb,{i:b,Aa:b.Aa}),1===b.j&&G(Ab,{actions:a,l:c,i:b}),
2===b.j&&G(Cb,{i:b,u:b.u})]}
const Hb={init:()=>{const a={T:!0,ba:3,L:10,ea:80,M:64};var c=Fa.getItem("minicraft.config");if(c){c=Ea.parse(c);let e=c.flag_textures;null!=e&&(a.T=e);null!=(e=c.mouse_sensitivity)&&(a.ba=e);a.L=c.resolution_scaling;a.ea=c.view_angle;a.M=c.view_distance}return{l:a}},Ta:a=>{const c=a.l;Fa.setItem("minicraft.config",Ea.stringify({version:"0.5.4",flag_textures:c.T,mouse_sensitivity:c.ba,resolution_scaling:c.L,view_angle:c.ea,view_distance:c.M}));return a},Sa:(a,c)=>Hb.Ia(a,c(a.l)),Ia:(a,c)=>Object.assign({},
a,{l:Object.assign({},a.l,c)})};w.init(()=>{const [a,c]=ba(Hb),e=D({i:null});C(()=>{onbeforeunload=()=>{c.Ta();if(e.i){var g=e.i.s;for(const k of g.A)k.K&&nb(g,k)}}});const b=D(g=>"INPUT"===g.target.tagName||!e.i||(g.preventDefault(),zb(e.i,g.keyCode,"keydown"===g.type),e.i.la=!1));return[{onkeydown:b,onkeyup:b,oncontextmenu:Ma,ondragstart:Ma},[G(Gb,{actions:c,l:a.l,Va:e})]]});
