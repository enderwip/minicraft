const l=lui,n=l.hook_dom,q=l.hook_effect,ja=l.hook_memo,ka=l.hook_rerender,t=l.hook_static,x=l.node,E=l.node_dom,la=l.now,F=Math,G=F.PI,J=180/G,K=F.floor,L=F.round,Q=F.max,R=F.cos,S=F.sin,ma=[0,7960953,8370002,7885881,8553090,9927501,4539717,6311215,3113506,12094592,14145495],oa=()=>{const a={K:na(),ka:8,la:32,ma:8};for(let e=0;16>e;e+=2)a.K[T(e,4,0)]=3,a.K[T(0,4,e)]=3;["X   XXX XXX XXX","X     X X X   X","X   XXX XXX XXX","X     X X     X","XXX XXX X   XXX"].forEach((e,b,d)=>{b=d.length-b;e.split("").forEach((c,
g)=>{"X"===c&&(a.K[T(g+1,4,b)]=6)})});return a},T=(a,e,b)=>((e|0)<<8)+((a-(0>a)&15)<<4)+(b-(0>b)&15),na=()=>{const a=new Uint8Array(16384),e=[6,3,3,3,2];for(let b=-1,d=0;d<e.length;++d){const c=e[d];for(let g=0;16>g;++g)for(let f=0;16>f;++f)a[++b]=c}return a},pa=(a,e)=>{const b={canvas:e,$:null,aa:null,ba:"",u:!1,ca:0,V:0,ea:setInterval(()=>{b.ca=b.V;b.V=0},1E3),i:a};U(b);return b},U=a=>{var e=a.canvas.width=a.i.v,b=a.canvas.height=a.i.A;a=(a.aa=(a.$=a.canvas.getContext("2d")).createImageData(e,b)).data;
e=a.length;for(b=3;b<e;b+=4)a[b]=255},qa=()=>({L:!1,M:!1,j:!1,W:0,g:{o:0,J:0,s:0,N:0,O:10,P:0,B:0,D:0,G:0,l:0,U:0},h:null,m:10,X:1,Y:1,v:0,A:0,da:null,time:0,Z:0,T:80,H:64,ga:oa()}),ra=(a,e)=>{onmousemove=b=>{a.j||(a.g.l=2*(b.clientX/a.X-.5)*G,a.g.U=(.5-b.clientY/a.Y)*G)};a.h=pa(a,e);a.da=setInterval(()=>{a.j||(a.time=(a.time+1)%24E3,a.Z=1/24E3*(a.time+6E3)%1)},50)},V=a=>{const e=Q(1,L(a.X/a.m)),b=Q(1,L(a.Y/a.m));if(e!==a.v||b!==a.A)a.v=e,a.A=b,a.h&&(a.h.u=!0,U(a.h))};
function sa({i:a}){n("div[className=menu]");return[E("h1[innerText=Men\u00fc]"),E("div[className=settings]",null,[E("label[innerText=Aufl\u00f6sung:]",null,[E("input[type=range][min=1][max=100][step=1]",{value:101-a.m,onchange:t(e=>{a.m=101-Number(e.target.value);V(a)})})]),E("label[innerText=Blickwinkel:]",null,[E("input[type=range][min=1][max=180][step=1]",{value:a.T,onchange:t(e=>{a.T=Number(e.target.value);a.h.u=!0})})]),E("label[innerText=Sichtweite:]",null,[E("input[type=range][min=1][max=128][step=1]",
{value:a.H,onchange:t(e=>{a.H=Number(e.target.value);a.h.u=!0})})])]),E("div",null,[E("button[innerText=Zur\u00fcck]",{onclick:t(()=>{a.j=a.M=!1})})])]}
function ta({fa:a}){const e=n("div[className=game]"),b=ja(qa);q(()=>(a.i=b,()=>{onmousemove=null;clearInterval(b.da);clearInterval(b.h.ea);return a.i=null}));q((d,c)=>(b.X=Q(1,d),b.Y=Q(1,c),V(b)),[e.offsetWidth,e.offsetHeight]);q(d=>{if(b.W&&!b.j){var c=b.g,g=Q(.01*(d-b.W),1);c.B*=.8;c.D*=.8;c.G*=.8;c.B+=(R(c.l)*c.o+S(c.l)*c.s)*g;c.D+=c.J*g;c.G+=(-S(c.l)*c.o+R(c.l)*c.s)*g;c.N+=c.B*g;c.O+=c.D*g;c.P+=c.G*g}if(b.h){c=b.h;++c.V;const W=c.aa;var f=c.i,k=f.g;const ua=f.ga;c.ba=f.L?"Minicraft 0.1.7 "+K(c.ca).toString().padStart(2,
"\u00a0")+" fps, T: "+K(24*f.Z).toString().padStart(2,"0")+":"+K(24*f.Z%1*60).toString().padStart(2,"0")+"; "+(f.j&&500>d%1E3?"":f.time)+"\nR: "+f.v+"x"+f.A+" (x"+f.m+"), C: 1, D: "+f.H+"\nE: 0/0\n\nPosition: "+k.N.toFixed(2)+" "+k.O.toFixed(2)+" "+k.P.toFixed(2)+"\nAngle: "+(k.l*J).toFixed(2)+" "+(k.U*J).toFixed(2)+"\nBlock: 0 0 0\nChunk: 0 0 0 in 0 0\nFacing: 0":"";if(!f.j||c.u){c.u=!1;g=W.data;var u=f.v,v=f.A,va=f.H,wa=.5*u,xa=.5*v,X=1/u,Y=1/v,y=k.l,z=k.U,Z=k.N,aa=k.O;k=k.P;var ba=R(y);y=S(y);
var ca=R(-z);z=S(-z);var w=f.T/45;f=u<v?w*u*Y:w;w=v<u?w*v*X:w;var H=0;for(let M=0;M<v;++M)for(let N=0;N<u;++N){var A=(N-wa)*X*f,B=(xa-M)*Y*w;const da=B*ca-z;var r=ca+B*z;B=A*ba+r*y;A=r*ba-A*y;r=8696319;let I=1,ea=va;for(let p=0;3>p;++p){var m=0===p?B:1===p?da:A;const C=1/(0>m?-m:m),fa=B*C,ha=da*C,ia=A*C;var h=0===p?Z%1:1===p?aa%1:k%1;h=0>h?-h:h;h=0<m?1-h:h;let O=Z+fa*h,D=aa+ha*h,P=k+ia*h;h*=C;for(0===p?O+=0>m?-.5:.5:1===p?D+=0>m?-.5:.5:P+=0>m?-.5:.5;h<ea;)if(m=0>D||64<=D?0:ua.K[T(O,D,P)],0===m)O+=
fa,D+=ha,P+=ia,h+=C;else{r=ma[m];I=1-(p+2)%3*.2;ea=h;break}}g[H]=(r>>16&255)*I;g[++H]=(r>>8&255)*I;g[++H]=(r&255)*I;H+=2}c.$.putImageData(W,0,0)}}b.W=d},[la()]);ka();return[E("canvas",{R:t(d=>{ra(b,d)})}),b.h&&b.L&&E("div[className=diagnostics]",{innerText:b.h.ba}),b.M&&x(sa,{i:b,ha:b.m,ia:b.T,ja:b.H})]}
l.init(()=>{const a=t({i:null}),e=t(b=>{var d;if(!(d=!a.i))a:{d=a.i;var c=b.keyCode;if("keydown"===b.type)switch(c){case 27:d.j=d.M=!d.M;break;case 16:d.g.J=-.1;break;case 32:d.g.J=.1;break;case 65:d.g.o=-.1;break;case 68:d.g.o=.1;break;case 80:d.j=!d.j;break;case 83:d.g.s=-.1;break;case 87:d.g.s=.1;break;case 114:d.L=!d.L;break;default:d=!0;break a}else switch(c){case 16:case 32:d.g.J=0;break;case 65:case 68:d.g.o=0;break;case 83:case 87:d.g.s=0;break;default:d=!0;break a}d=!1}return d||(b.preventDefault(),
!1)});return[{onkeydown:e,onkeyup:e},[x(ta,{fa:a})]]});
