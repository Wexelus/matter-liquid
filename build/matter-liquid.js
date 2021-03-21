!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("matter-js")):"function"==typeof define&&define.amd?define(["matter-js"],e):"object"==typeof exports?exports.MatterLiquid=e(require("matter-js")):t.MatterLiquid=e(t.Matter)}(self,(function(t){return(()=>{"use strict";var e={716:(t,e,s)=>{s.r(e);const n=JSON.parse('{"u2":"matter-liquid","i8":"0.0.1"}');function i(t,e){if(OffscreenCanvas)return new OffscreenCanvas(t,e);const s=document.createElement("canvas");return s.height=e,s.width=t,s}var r=s(538),o=s.n(r);const c=0,u=1,h=2,l=3,a=1;function f(t){return Math.hypot(t[0],t[1])}function p(t){const e=Math.hypot(t[0],t[1]);return 0!==e?[t[0]/e,t[1]/e]:[0,0]}function d(t,e){return[t[0]*e,t[1]*e]}function m(t,e){return[t[0]/e,t[1]/e]}function g(t,e){return[e[0]+t[0],e[1]+t[1]]}function v(t,e){return[e[0]-t[0],e[1]-t[1]]}function y(t,e){return[t[0]-e[0],t[1]-e[1]]}function x(t,e,s,n,i,r){return t>s&&t<i&&e>n&&e<r}function b(t,e,s){const n=s-e;return e+((t-e)%n+n)%n}function C(t,e,s){return Math.min(Math.max(t,e),s)}function w(t,e,s){return o().Vertices.contains(t.vertices,{x:e,y:s})}function M(t,e=0){return[t.min.x-e,t.min.y-e,t.max.x+e,t.max.y+e]}function S(t,e,s,n){const i=(e[0]-t[0])*(n[1]-s[1])-(n[0]-s[0])*(e[1]-t[1]);if(0===i)return!1;const r=((n[1]-s[1])*(n[0]-t[0])+(s[0]-n[0])*(n[1]-t[1]))/i,o=((t[1]-e[1])*(n[0]-t[0])+(e[0]-t[0])*(n[1]-t[1]))/i;return r>0&&r<1&&o<1}function I(t,e){let s=-1;const{length:n}=t;for(;++s<n;)e(t[s],s)}function P(t,e,s,n){I(s,((t,s)=>{null===t||e&&!x(t[c],t[u],...e)||n(t,s)}))}function O(t,e,s){I(e,(e=>s(t[e],e)))}function j(t,e){return t.sh.getAroundCellsItems(e[c],e[u],t.p)}function R(t,e,s){!function(t,e,s){I(e,(e=>s(t[e],e)))}(t.p,j(t,e),s)}function q(t,e){for(const[s,n]of Object.entries(t))e(s,n)}function z(t,e){return v([t[c],t[u]],[e[c],e[u]])}function E(t,e){t[c]+=e[0],t[u]+=e[1]}function U(t,e,s){t[h]+=e*s[0],t[l]+=e*s[1]}function _(t,e){t[c]+=e*t[h],t[u]+=e*t[l]}function A(t,e){const[s,n]=function(t,e){const s=Math.hypot(t[0],t[1]);return d(m(t,s||1),Math.max(0,Math.min(e,s)))}([t[h],t[l]],e);t[h]=s,t[l]=n}function B(t,e,s){R(t,e,(n=>{const i=z(e,n),r=p(i),o=f(m(i,t.h));if(o<1){const t=(y=e,v([(x=n)[h],x[l]],[y[h],y[l]])),i=f((g=t,[(a=r)[0]*g[0],a[1]*g[1]]));if(i>0){const t=m(d(r,s*(1-o)*(.01*i+.01*i**2)),2);u=t,(c=e)[h]-=u[0],c[l]-=u[1],function(t,e){t[h]+=e[0],t[l]+=e[1]}(n,t)}}var c,u,a,g,y,x}))}function T(t,e,s){O(t.p,e,((e,n)=>{R(t,e,((i,r)=>{if(f(m(z(e,i),t.h))<1){const o=f(z(e,i));let c=10-o;const u=function(t,e){return`${t}.${e}`}(n,r),h=.1*c;o>10+h?c+=.03*s*(o-10-h):o<10-h&&(c-=.03*s*(10-h-o)),void 0===t.s[u]&&(t.s[u]=c)}}))})),q(t.s,((e,s)=>{Math.abs(s)>t.h&&(t.s[e]=void 0)})),q(t.s,((e,n)=>{const[i,r]=function(t){const[e,s]=t.split(".");return[+e,+s]}(e),o=t.p[i],h=t.p[r],l=z(o,h),a=p(l),g=f(l),v=n,y=m(d(a,s**2*.001*(1-v/t.h)*(v-g)),2);var x,b;b=y,(x=o)[c]-=b[0],x[u]-=b[1],E(h,y)}))}function G(t,e,s){const n=.2*t.h,i=.3*t.h;let r=0,o=0;const c=j(t,e),u=[];for(let s=0;s<c.length;s++){const n=t.p[c[s]],i=z(e,n),h=f(m(i,t.h));if(h<1){const t=1-h;r+=t**2,o+=t**3,u.push([t,i,n])}}const h=.3*(r-n),l=i*o,a=[0,0];for(let t=0;t<u.length;t++){const[e,n,i]=u[t],r=m(d(p(n),s**2*(h*e+l*e**2)),2);a[0]-=r[0],a[1]-=r[1],E(i,r)}E(e,a)}function L(t,e,s){const n=[t.position.x,t.position.y];if(t.circleRadius){return g(n,d(p(v(n,s)),t.circleRadius))}var i,r;const o=function(t,e,s){const n=t.vertices;for(let t=0;t<n.length;t++){const i=n[t],r=n[t!==n.length-1?t+1:0],o=[i.x,i.y],c=[r.x,r.y];if(S(o,c,e,s))return[o,c]}return null}(t,(i=e,(r=s)[0]!==i[0]||r[1]!==i[1]?s:n),e),c=function(t,e){const s=p(v([t[0],t[1]],[e[0],e[1]]));return[s[1],-s[0]]}(o[0],o[1]);return function(t,e,s,n){const i=(t[0]-e[0])*(s[1]-n[1])-(t[1]-e[1])*(s[0]-n[0]);if(0===i)return null;const r=t[0]*e[1]-t[1]*e[0],o=s[0]*n[1]-s[1]*n[0];return[(r*(s[0]-n[0])-(t[0]-e[0])*o)/i,(r*(s[1]-n[1])-(t[1]-e[1])*o)/i]}(o[0],o[1],e,g(e,c))}function F(t,e,s){const{p:n}=t;(e?function(t,e){return o().Query.region(t,{min:{x:e[0],y:e[1]},max:{x:e[2],y:e[3]}})}(t.w.bodies,e):t.w.bodies).forEach((e=>{const s=function(t,e,s,n){const i=[],r=s.getItemsOfCellsInBounds(e.bounds);for(let s=0;s<r.length;s++){const n=r[s],o=t[n];w(e,o[c],o[u])&&i.push(n)}return i}(n,e,t.sh);O(n,s,(t=>{const s=function(t,e){const s=[e.velocity.x,e.velocity.y],n=y([t[h],t[l]],s),i=p(n),r=y(n,i);return y(i,d(r,1))}(t,e),n=[t[c],t[u]];if(function(t,e){t[h]-=e[0],t[l]-=e[1]}(t,s),w(e,t[c],t[u])){const s=L(e,n,[t[c],t[u]]);t[c]=s[0],t[u]=s[1]}}))}))}function $(t,e,s,n){O(t.p,e,((e,i)=>{!function(t,e,s){t[h]=(t[c]-s[0])/e,t[l]=(t[u]-s[1])/e}(e,s,n[i]);const r=t.bb,o=t.w.bounds;if(t.iwx)e[c]=b(e[c],o.min.x,o.max.x);else{const t=e[c];e[c]=C(t,o.min.x,o.max.x),t!==e[c]&&(e[h]*=-r,e[l]*=r)}if(t.iwy)e[u]=b(e[u],o.min.y,o.max.y);else{const t=e[u];e[u]=C(t,o.min.y,o.max.y),t!==e[u]&&(e[h]*=r,e[l]*=-r)}t.sh.update(i,e[c],e[u])}))}function V(t,e){const s=t.store,n=[],i=t.getGravity(),r={},o=s.irc?M(s.r.bounds,s.abp):null;P(0,o,s.p,((t,o)=>{n.push(o),U(t,e,i),r[o]=[t[c],t[u]],A(t,.6*s.h),_(t,e)})),O(s.p,n,(t=>{G(s,t,e)})),F(s,o),$(s,n,e,r)}function J(t,e){const s=t.store,n=M(s.r.bounds,s.abp),i=[],r=t.getGravity(),o={};P(0,n,s.p,((t,s)=>{i.push(s),U(t,e,r)})),O(s.p,i,(t=>{B(s,t,e)})),O(s.p,i,((t,s)=>{o[s]=[t[c],t[u]],_(t,e)})),T(s,i,e),O(s.p,i,(t=>{G(s,t,e)})),$(s,i,e,o)}function N(t,e){const s=i(6*e,6*e),n=s.getContext("2d");return n.shadowColor=t,n.shadowBlur=2*e,n.fillStyle=t,n.beginPath(),n.arc(3*e,3*e,e,0,2*Math.PI),n.fill(),s}function Q(t){const e=t.r.context,s=M(t.r.bounds,t.rbp);I(t.p,((n,i)=>{if(null===n||!x(n[c],n[u],...s))return;const r=Math.floor(n[c]),o=Math.floor(n[u]),h=t.lpl[i][a],l=h.height/2;e.drawImage(h,r-l,o-l)}))}function W(t){Matter.Render.startViewTransform(t.store.r),Q(t.store)}const k=Math.trunc;function D(t,e){return`${t}.${e}`}function H(t,e){const s=t.indexOf(e);return-1!==s&&t.splice(s,1),t}class K{constructor(){this.hash={},this.prevItemCell={}}init(t){this.cellSize=t}find(t,e){return(this.hash[t]||[]).indexOf(e)}save(t,e){const s=this.hash[e];void 0===s?(this.hash[e]=[t],this.prevItemCell[t]=e):s.includes(t)||(s.push(t),this.prevItemCell[t]=e)}getCell(t,e){return this.hash[D(t,e)]||[]}_delete(t,e){const s=this.hash[e];H(s,t),delete this.prevItemCell[t],0===s.length&&delete this.hash[e]}update(t,e,s){const n=k(e/this.cellSize),i=k(s/this.cellSize),r=this.prevItemCell[t],o=D(n,i);r!==o&&(void 0!==r&&this._delete(t,r),this.save(t,o))}clear(){this.hash={},this.prevItemCell={}}insert(t,e,s){const n=D(k(e/this.cellSize),k(s/this.cellSize));this.save(t,n)}remove(t){const e=this.prevItemCell[t];this._delete(t,e)}getAroundCellsItems(t,e,s){const n=k(t/this.cellSize),i=k(e/this.cellSize),r=D(n,i);return[...this.getCell(n-1,i-1),...this.getCell(n,i-1),...this.getCell(n+1,i-1),...this.getCell(n-1,i),...H(this.hash[r]||[],r),...this.getCell(n+1,i),...this.getCell(n-1,i+1),...this.getCell(n,i+1),...this.getCell(n+1,i+1)]}fill(t){t.forEach(((t,e)=>{const s=t[c],n=t[u];this.insert(e,s,n)}))}getItemsOfCellsInBounds(t){const e=k(t.min.x/this.cellSize),s=k(t.min.y/this.cellSize),n=k(t.max.x/this.cellSize),i=k(t.max.y/this.cellSize),r=[];for(let t=s;t<=i;t++)for(let s=e;s<=n;s++){const e=D(s,t);r.push(...this.hash[e]||[])}return r}}const X=["pauseChange","particleRemove"];class Y{constructor(t){this.liquid=t,this.store=t.store,this.events=t.events}drip(t,e,s){const n=0===this.store.fpids.length?this.store.p.length:this.store.fpids.pop(),i=new Float32Array([e,s,0,0]);this.store.lpl[n]=this.store.l[t],this.store.p[n]=i,this.store.sh.insert(n,e,s)}rect(t,e,s,n,i,r=this.store.h){const o=this.liquid.getLiquidId(t),c=r/2,u=Math.max(1,Math.trunc(n/r)),h=Math.max(1,Math.trunc(i/r));for(let t=0;t<u;t++)for(let n=0;n<h;n++){const i=e+c+t*r,l=s+c+n*r;this.drip(o,i,l),t!==u-1&&n!==h-1&&this.drip(o,i+c,l+c)}}}class Z{constructor(t){this.liquid=t,this.store=t.store,this.events=t.events}dry(t){const e=this.store.p[t];this.store.p[t]=null,this.store.sh.remove(t),this.events.particleRemove(e,t,this.store.lpl[t]),this.store.fpids.push(t)}rect(t,e,s,n){this.store.p.forEach(((i,r)=>{null!==i&&x(i[c],i[u],t,e,t+s,e+n)&&this.dry(r)}))}}class tt extends class{constructor(t){this.events=function(){const t={};return X.forEach((e=>t[e]=()=>0)),t}();const e=t.radius||32,s=e*(t.particleTextureScale||.3);let n=[false,false];const i=t.worldWrapping;null!=i&&(n="boolean"==typeof i?[i,i]:i);const r={},o=t.liquids.map(((t,e)=>(t.name&&(r[t.name]=e),function(t,e){const s=t.color||"#fff";return[s,t.texture||N(s,e)]}(t,s))));this.store=Object.seal({h:e,iwx:n[0],iwy:n[1],e:t.engine,r:t.render,w:t.engine.world,irc:t.isRegionalComputing||false,l:o,lnlid:r,bb:t.bordersBounce||.8,ip:!1,g:.2,sh:new K,rbp:0,abp:0,p:[],s:{},fpids:[],lpl:{},t:0,ef:2,dt:1}),this.store.sh.init(this.store.h),this.setGravityRatio(t.gravityRatio),this.setUpdateEveryFrame(t.updateEveryFrame),this.setTimeScale(t.timeScale)}setPause(t=!0){this.store.ip=t,this.events.pauseChange(t)}setRenderBoundsPadding(t){this.store.rbp=t}setActiveBoundsPadding(t){this.store.abp=t}setGravityRatio(t=this.store.g){this.store.g=t}setUpdateEveryFrame(t=this.store.ef){this.store.ef=t}setTimeScale(t=this.store.dt){this.store.dt=t}getGravity(){return[this.store.w.gravity.x*this.store.g,this.store.w.gravity.y*this.store.g]}getParticlesCount(){return this.store.p.length-this.store.fpids.length}getLiquidId(t){return"number"==typeof t?t:this.store.lnlid[t]}}{constructor(t){super(t),this.drip=new Y(this),this.dry=new Z(this),this.renderUpdater=W,this.computeUpdater=t.isAdvancedAlgorithm?J:V,this.updateCompute=this.updateCompute.bind(this),o().Events.on(t.render,"afterRender",this.updateRender.bind(this)),this.setPause(!!t.isPaused)}updateCompute(){this.store.t++%this.store.ef==0&&this.computeUpdater(this,this.store.e.timing.timeScale*this.store.dt)}updateRender(){this.renderUpdater(this)}setPause(t=!0){t?o().Events.off(this.store.e,"afterUpdate",this.updateCompute):o().Events.on(this.store.e,"afterUpdate",this.updateCompute),super.setPause(t)}}const et={name:n.u2,version:n.i8,for:"matter-js@0.16.1",install(t){t.Liquid={create:t=>new tt(t),VirtualCanvas:i}}};Matter.Plugin.register(et)},538:e=>{e.exports=t}},s={};function n(t){var i=s[t];if(void 0!==i)return i.exports;var r=s[t]={exports:{}};return e[t](r,r.exports,n),r.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(716)})()}));