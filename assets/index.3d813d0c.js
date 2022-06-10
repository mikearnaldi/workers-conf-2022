var Cd=Object.defineProperty,bd=Object.defineProperties;var Ed=Object.getOwnPropertyDescriptors;var ss=Object.getOwnPropertySymbols;var Ra=Object.prototype.hasOwnProperty,Pa=Object.prototype.propertyIsEnumerable;var Sa=(t,n,o)=>n in t?Cd(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,ve=(t,n)=>{for(var o in n||(n={}))Ra.call(n,o)&&Sa(t,o,n[o]);if(ss)for(var o of ss(n))Pa.call(n,o)&&Sa(t,o,n[o]);return t},Ze=(t,n)=>bd(t,Ed(n));var hr=(t,n)=>{var o={};for(var s in t)Ra.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&ss)for(var s of ss(t))n.indexOf(s)<0&&Pa.call(t,s)&&(o[s]=t[s]);return o};const wd=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}};wd();function $l(t,n){const o=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)o[s[r]]=!0;return n?r=>!!o[r.toLowerCase()]:r=>!!o[r]}const _d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xd=$l(_d);function Mi(t){return!!t||t===""}function tt(t){if(ee(t)){const n={};for(let o=0;o<t.length;o++){const s=t[o],r=Le(s)?Sd(s):tt(s);if(r)for(const l in r)n[l]=r[l]}return n}else{if(Le(t))return t;if(qe(t))return t}}const kd=/;(?![^(]*\))/g,Td=/:(.+)/;function Sd(t){const n={};return t.split(kd).forEach(o=>{if(o){const s=o.split(Td);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function Fe(t){let n="";if(Le(t))n=t;else if(ee(t))for(let o=0;o<t.length;o++){const s=Fe(t[o]);s&&(n+=s+" ")}else if(qe(t))for(const o in t)t[o]&&(n+=o+" ");return n.trim()}function Ee(t){if(!t)return null;let{class:n,style:o}=t;return n&&!Le(n)&&(t.class=Fe(n)),o&&(t.style=tt(o)),t}const _n=t=>Le(t)?t:t==null?"":ee(t)||qe(t)&&(t.toString===Hi||!le(t.toString))?JSON.stringify(t,Fi,2):String(t),Fi=(t,n)=>n&&n.__v_isRef?Fi(t,n.value):Vn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[s,r])=>(o[`${s} =>`]=r,o),{})}:Li(n)?{[`Set(${n.size})`]:[...n.values()]}:qe(n)&&!ee(n)&&!ji(n)?String(n):n,Se={},Wn=[],kt=()=>{},Rd=()=>!1,Pd=/^on[^a-z]/,Js=t=>Pd.test(t),Ml=t=>t.startsWith("onUpdate:"),nt=Object.assign,Fl=(t,n)=>{const o=t.indexOf(n);o>-1&&t.splice(o,1)},Od=Object.prototype.hasOwnProperty,ye=(t,n)=>Od.call(t,n),ee=Array.isArray,Vn=t=>Ws(t)==="[object Map]",Li=t=>Ws(t)==="[object Set]",le=t=>typeof t=="function",Le=t=>typeof t=="string",Ll=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Ii=t=>qe(t)&&le(t.then)&&le(t.catch),Hi=Object.prototype.toString,Ws=t=>Hi.call(t),$d=t=>Ws(t).slice(8,-1),ji=t=>Ws(t)==="[object Object]",Il=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hs=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vs=t=>{const n=Object.create(null);return o=>n[o]||(n[o]=t(o))},Md=/-(\w)/g,It=Vs(t=>t.replace(Md,(n,o)=>o?o.toUpperCase():"")),Fd=/\B([A-Z])/g,Tn=Vs(t=>t.replace(Fd,"-$1").toLowerCase()),zs=Vs(t=>t.charAt(0).toUpperCase()+t.slice(1)),gr=Vs(t=>t?`on${zs(t)}`:""),Fo=(t,n)=>!Object.is(t,n),zn=(t,n)=>{for(let o=0;o<t.length;o++)t[o](n)},_s=(t,n,o)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:o})},Wr=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Oa;const Ld=()=>Oa||(Oa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let it;class Ni{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&it&&(this.parent=it,this.index=(it.scopes||(it.scopes=[])).push(this)-1)}run(n){if(this.active){const o=it;try{return it=this,n()}finally{it=o}}}on(){it=this}off(){it=this.parent}stop(n){if(this.active){let o,s;for(o=0,s=this.effects.length;o<s;o++)this.effects[o].stop();for(o=0,s=this.cleanups.length;o<s;o++)this.cleanups[o]();if(this.scopes)for(o=0,s=this.scopes.length;o<s;o++)this.scopes[o].stop(!0);if(this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Id(t){return new Ni(t)}function Hd(t,n=it){n&&n.active&&n.effects.push(t)}function jd(){return it}function Nd(t){it&&it.cleanups.push(t)}const Hl=t=>{const n=new Set(t);return n.w=0,n.n=0,n},qi=t=>(t.w&cn)>0,Ji=t=>(t.n&cn)>0,qd=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=cn},Jd=t=>{const{deps:n}=t;if(n.length){let o=0;for(let s=0;s<n.length;s++){const r=n[s];qi(r)&&!Ji(r)?r.delete(t):n[o++]=r,r.w&=~cn,r.n&=~cn}n.length=o}},Vr=new WeakMap;let Do=0,cn=1;const zr=30;let _t;const Cn=Symbol(""),Ur=Symbol("");class jl{constructor(n,o=null,s){this.fn=n,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,Hd(this,s)}run(){if(!this.active)return this.fn();let n=_t,o=nn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=_t,_t=this,nn=!0,cn=1<<++Do,Do<=zr?qd(this):$a(this),this.fn()}finally{Do<=zr&&Jd(this),cn=1<<--Do,_t=this.parent,nn=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_t===this?this.deferStop=!0:this.active&&($a(this),this.onStop&&this.onStop(),this.active=!1)}}function $a(t){const{deps:n}=t;if(n.length){for(let o=0;o<n.length;o++)n[o].delete(t);n.length=0}}let nn=!0;const Wi=[];function no(){Wi.push(nn),nn=!1}function oo(){const t=Wi.pop();nn=t===void 0?!0:t}function ht(t,n,o){if(nn&&_t){let s=Vr.get(t);s||Vr.set(t,s=new Map);let r=s.get(o);r||s.set(o,r=Hl()),Vi(r)}}function Vi(t,n){let o=!1;Do<=zr?Ji(t)||(t.n|=cn,o=!qi(t)):o=!t.has(_t),o&&(t.add(_t),_t.deps.push(t))}function Vt(t,n,o,s,r,l){const a=Vr.get(t);if(!a)return;let c=[];if(n==="clear")c=[...a.values()];else if(o==="length"&&ee(t))a.forEach((i,p)=>{(p==="length"||p>=s)&&c.push(i)});else switch(o!==void 0&&c.push(a.get(o)),n){case"add":ee(t)?Il(o)&&c.push(a.get("length")):(c.push(a.get(Cn)),Vn(t)&&c.push(a.get(Ur)));break;case"delete":ee(t)||(c.push(a.get(Cn)),Vn(t)&&c.push(a.get(Ur)));break;case"set":Vn(t)&&c.push(a.get(Cn));break}if(c.length===1)c[0]&&Kr(c[0]);else{const i=[];for(const p of c)p&&i.push(...p);Kr(Hl(i))}}function Kr(t,n){const o=ee(t)?t:[...t];for(const s of o)s.computed&&Ma(s);for(const s of o)s.computed||Ma(s)}function Ma(t,n){(t!==_t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wd=$l("__proto__,__v_isRef,__isVue"),zi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ll)),Vd=Nl(),zd=Nl(!1,!0),Ud=Nl(!0),Fa=Kd();function Kd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...o){const s=Ae(this);for(let l=0,a=this.length;l<a;l++)ht(s,"get",l+"");const r=s[n](...o);return r===-1||r===!1?s[n](...o.map(Ae)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...o){no();const s=Ae(this)[n].apply(this,o);return oo(),s}}),t}function Nl(t=!1,n=!1){return function(s,r,l){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&l===(t?n?uf:Zi:n?Yi:Gi).get(s))return s;const a=ee(s);if(!t&&a&&ye(Fa,r))return Reflect.get(Fa,r,l);const c=Reflect.get(s,r,l);return(Ll(r)?zi.has(r):Wd(r))||(t||ht(s,"get",r),n)?c:De(c)?a&&Il(r)?c:c.value:qe(c)?t?qn(c):Me(c):c}}const Gd=Ui(),Yd=Ui(!0);function Ui(t=!1){return function(o,s,r,l){let a=o[s];if(Lo(a)&&De(a)&&!De(r))return!1;if(!t&&!Lo(r)&&(Gr(r)||(r=Ae(r),a=Ae(a)),!ee(o)&&De(a)&&!De(r)))return a.value=r,!0;const c=ee(o)&&Il(s)?Number(s)<o.length:ye(o,s),i=Reflect.set(o,s,r,l);return o===Ae(l)&&(c?Fo(r,a)&&Vt(o,"set",s,r):Vt(o,"add",s,r)),i}}function Zd(t,n){const o=ye(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&Vt(t,"delete",n,void 0),s}function Qd(t,n){const o=Reflect.has(t,n);return(!Ll(n)||!zi.has(n))&&ht(t,"has",n),o}function Xd(t){return ht(t,"iterate",ee(t)?"length":Cn),Reflect.ownKeys(t)}const Ki={get:Vd,set:Gd,deleteProperty:Zd,has:Qd,ownKeys:Xd},ef={get:Ud,set(t,n){return!0},deleteProperty(t,n){return!0}},tf=nt({},Ki,{get:zd,set:Yd}),ql=t=>t,Us=t=>Reflect.getPrototypeOf(t);function rs(t,n,o=!1,s=!1){t=t.__v_raw;const r=Ae(t),l=Ae(n);o||(n!==l&&ht(r,"get",n),ht(r,"get",l));const{has:a}=Us(r),c=s?ql:o?Vl:Io;if(a.call(r,n))return c(t.get(n));if(a.call(r,l))return c(t.get(l));t!==r&&t.get(n)}function ls(t,n=!1){const o=this.__v_raw,s=Ae(o),r=Ae(t);return n||(t!==r&&ht(s,"has",t),ht(s,"has",r)),t===r?o.has(t):o.has(t)||o.has(r)}function as(t,n=!1){return t=t.__v_raw,!n&&ht(Ae(t),"iterate",Cn),Reflect.get(t,"size",t)}function La(t){t=Ae(t);const n=Ae(this);return Us(n).has.call(n,t)||(n.add(t),Vt(n,"add",t,t)),this}function Ia(t,n){n=Ae(n);const o=Ae(this),{has:s,get:r}=Us(o);let l=s.call(o,t);l||(t=Ae(t),l=s.call(o,t));const a=r.call(o,t);return o.set(t,n),l?Fo(n,a)&&Vt(o,"set",t,n):Vt(o,"add",t,n),this}function Ha(t){const n=Ae(this),{has:o,get:s}=Us(n);let r=o.call(n,t);r||(t=Ae(t),r=o.call(n,t)),s&&s.call(n,t);const l=n.delete(t);return r&&Vt(n,"delete",t,void 0),l}function ja(){const t=Ae(this),n=t.size!==0,o=t.clear();return n&&Vt(t,"clear",void 0,void 0),o}function cs(t,n){return function(s,r){const l=this,a=l.__v_raw,c=Ae(a),i=n?ql:t?Vl:Io;return!t&&ht(c,"iterate",Cn),a.forEach((p,u)=>s.call(r,i(p),i(u),l))}}function is(t,n,o){return function(...s){const r=this.__v_raw,l=Ae(r),a=Vn(l),c=t==="entries"||t===Symbol.iterator&&a,i=t==="keys"&&a,p=r[t](...s),u=o?ql:n?Vl:Io;return!n&&ht(l,"iterate",i?Ur:Cn),{next(){const{value:f,done:d}=p.next();return d?{value:f,done:d}:{value:c?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Gt(t){return function(...n){return t==="delete"?!1:this}}function nf(){const t={get(l){return rs(this,l)},get size(){return as(this)},has:ls,add:La,set:Ia,delete:Ha,clear:ja,forEach:cs(!1,!1)},n={get(l){return rs(this,l,!1,!0)},get size(){return as(this)},has:ls,add:La,set:Ia,delete:Ha,clear:ja,forEach:cs(!1,!0)},o={get(l){return rs(this,l,!0)},get size(){return as(this,!0)},has(l){return ls.call(this,l,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:cs(!0,!1)},s={get(l){return rs(this,l,!0,!0)},get size(){return as(this,!0)},has(l){return ls.call(this,l,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{t[l]=is(l,!1,!1),o[l]=is(l,!0,!1),n[l]=is(l,!1,!0),s[l]=is(l,!0,!0)}),[t,o,n,s]}const[of,sf,rf,lf]=nf();function Jl(t,n){const o=n?t?lf:rf:t?sf:of;return(s,r,l)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ye(o,r)&&r in s?o:s,r,l)}const af={get:Jl(!1,!1)},cf={get:Jl(!1,!0)},pf={get:Jl(!0,!1)},Gi=new WeakMap,Yi=new WeakMap,Zi=new WeakMap,uf=new WeakMap;function df(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ff(t){return t.__v_skip||!Object.isExtensible(t)?0:df($d(t))}function Me(t){return Lo(t)?t:Wl(t,!1,Ki,af,Gi)}function yf(t){return Wl(t,!1,tf,cf,Yi)}function qn(t){return Wl(t,!0,ef,pf,Zi)}function Wl(t,n,o,s,r){if(!qe(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const l=r.get(t);if(l)return l;const a=ff(t);if(a===0)return t;const c=new Proxy(t,a===2?s:o);return r.set(t,c),c}function Un(t){return Lo(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function Lo(t){return!!(t&&t.__v_isReadonly)}function Gr(t){return!!(t&&t.__v_isShallow)}function Qi(t){return Un(t)||Lo(t)}function Ae(t){const n=t&&t.__v_raw;return n?Ae(n):t}function Ks(t){return _s(t,"__v_skip",!0),t}const Io=t=>qe(t)?Me(t):t,Vl=t=>qe(t)?qn(t):t;function zl(t){nn&&_t&&(t=Ae(t),Vi(t.dep||(t.dep=Hl())))}function Ul(t,n){t=Ae(t),t.dep&&Kr(t.dep)}function De(t){return!!(t&&t.__v_isRef===!0)}function H(t){return Xi(t,!1)}function Ht(t){return Xi(t,!0)}function Xi(t,n){return De(t)?t:new mf(t,n)}class mf{constructor(n,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?n:Ae(n),this._value=o?n:Io(n)}get value(){return zl(this),this._value}set value(n){n=this.__v_isShallow?n:Ae(n),Fo(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Io(n),Ul(this))}}function v(t){return De(t)?t.value:t}const hf={get:(t,n,o)=>v(Reflect.get(t,n,o)),set:(t,n,o,s)=>{const r=t[n];return De(r)&&!De(o)?(r.value=o,!0):Reflect.set(t,n,o,s)}};function ep(t){return Un(t)?t:new Proxy(t,hf)}class gf{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:s}=n(()=>zl(this),()=>Ul(this));this._get=o,this._set=s}get value(){return this._get()}set value(n){this._set(n)}}function vf(t){return new gf(t)}function Df(t){const n=ee(t)?new Array(t.length):{};for(const o in t)n[o]=Bf(t,o);return n}class Af{constructor(n,o,s){this._object=n,this._key=o,this._defaultValue=s,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function Bf(t,n,o){const s=t[n];return De(s)?s:new Af(t,n,o)}class Cf{constructor(n,o,s,r){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jl(n,()=>{this._dirty||(this._dirty=!0,Ul(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const n=Ae(this);return zl(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function bf(t,n,o=!1){let s,r;const l=le(t);return l?(s=t,r=kt):(s=t.get,r=t.set),new Cf(s,r,l||!r,o)}function on(t,n,o,s){let r;try{r=s?t(...s):t()}catch(l){Gs(l,n,o)}return r}function Tt(t,n,o,s){if(le(t)){const l=on(t,n,o,s);return l&&Ii(l)&&l.catch(a=>{Gs(a,n,o)}),l}const r=[];for(let l=0;l<t.length;l++)r.push(Tt(t[l],n,o,s));return r}function Gs(t,n,o,s=!0){const r=n?n.vnode:null;if(n){let l=n.parent;const a=n.proxy,c=o;for(;l;){const p=l.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,a,c)===!1)return}l=l.parent}const i=n.appContext.config.errorHandler;if(i){on(i,null,10,[t,a,c]);return}}Ef(t,o,r,s)}function Ef(t,n,o,s=!0){console.error(t)}let xs=!1,Yr=!1;const dt=[];let Jt=0;const bo=[];let Ao=null,Ln=0;const Eo=[];let Qt=null,In=0;const tp=Promise.resolve();let Kl=null,Zr=null;function Ve(t){const n=Kl||tp;return t?n.then(this?t.bind(this):t):n}function wf(t){let n=Jt+1,o=dt.length;for(;n<o;){const s=n+o>>>1;Ho(dt[s])<t?n=s+1:o=s}return n}function np(t){(!dt.length||!dt.includes(t,xs&&t.allowRecurse?Jt+1:Jt))&&t!==Zr&&(t.id==null?dt.push(t):dt.splice(wf(t.id),0,t),op())}function op(){!xs&&!Yr&&(Yr=!0,Kl=tp.then(lp))}function _f(t){const n=dt.indexOf(t);n>Jt&&dt.splice(n,1)}function sp(t,n,o,s){ee(t)?o.push(...t):(!n||!n.includes(t,t.allowRecurse?s+1:s))&&o.push(t),op()}function xf(t){sp(t,Ao,bo,Ln)}function kf(t){sp(t,Qt,Eo,In)}function Ys(t,n=null){if(bo.length){for(Zr=n,Ao=[...new Set(bo)],bo.length=0,Ln=0;Ln<Ao.length;Ln++)Ao[Ln]();Ao=null,Ln=0,Zr=null,Ys(t,n)}}function rp(t){if(Ys(),Eo.length){const n=[...new Set(Eo)];if(Eo.length=0,Qt){Qt.push(...n);return}for(Qt=n,Qt.sort((o,s)=>Ho(o)-Ho(s)),In=0;In<Qt.length;In++)Qt[In]();Qt=null,In=0}}const Ho=t=>t.id==null?1/0:t.id;function lp(t){Yr=!1,xs=!0,Ys(t),dt.sort((o,s)=>Ho(o)-Ho(s));const n=kt;try{for(Jt=0;Jt<dt.length;Jt++){const o=dt[Jt];o&&o.active!==!1&&on(o,null,14)}}finally{Jt=0,dt.length=0,rp(),xs=!1,Kl=null,(dt.length||bo.length||Eo.length)&&lp(t)}}function Tf(t,n,...o){if(t.isUnmounted)return;const s=t.vnode.props||Se;let r=o;const l=n.startsWith("update:"),a=l&&n.slice(7);if(a&&a in s){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=s[u]||Se;d&&(r=o.map(y=>y.trim())),f&&(r=o.map(Wr))}let c,i=s[c=gr(n)]||s[c=gr(It(n))];!i&&l&&(i=s[c=gr(Tn(n))]),i&&Tt(i,t,6,r);const p=s[c+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Tt(p,t,6,r)}}function ap(t,n,o=!1){const s=n.emitsCache,r=s.get(t);if(r!==void 0)return r;const l=t.emits;let a={},c=!1;if(!le(t)){const i=p=>{const u=ap(p,n,!0);u&&(c=!0,nt(a,u))};!o&&n.mixins.length&&n.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return!l&&!c?(s.set(t,null),null):(ee(l)?l.forEach(i=>a[i]=null):nt(a,l),s.set(t,a),a)}function Zs(t,n){return!t||!Js(n)?!1:(n=n.slice(2).replace(/Once$/,""),ye(t,n[0].toLowerCase()+n.slice(1))||ye(t,Tn(n))||ye(t,n))}let Ke=null,Qs=null;function ks(t){const n=Ke;return Ke=t,Qs=t&&t.type.__scopeId||null,n}function Gl(t){Qs=t}function Yl(){Qs=null}function oe(t,n=Ke,o){if(!n||t._n)return t;const s=(...r)=>{s._d&&Qa(-1);const l=ks(n),a=t(...r);return ks(l),s._d&&Qa(1),a};return s._n=!0,s._c=!0,s._d=!0,s}function vr(t){const{type:n,vnode:o,proxy:s,withProxy:r,props:l,propsOptions:[a],slots:c,attrs:i,emit:p,render:u,renderCache:f,data:d,setupState:y,ctx:h,inheritAttrs:B}=t;let D,_;const C=ks(t);try{if(o.shapeFlag&4){const w=r||s;D=$t(u.call(w,w,f,l,y,d,h)),_=i}else{const w=n;D=$t(w.length>1?w(l,{attrs:i,slots:c,emit:p}):w(l,null)),_=n.props?i:Sf(i)}}catch(w){_o.length=0,Gs(w,t,1),D=U(pn)}let b=D;if(_&&B!==!1){const w=Object.keys(_),{shapeFlag:F}=b;w.length&&F&7&&(a&&w.some(Ml)&&(_=Rf(_,a)),b=kn(b,_))}return o.dirs&&(b=kn(b),b.dirs=b.dirs?b.dirs.concat(o.dirs):o.dirs),o.transition&&(b.transition=o.transition),D=b,ks(C),D}const Sf=t=>{let n;for(const o in t)(o==="class"||o==="style"||Js(o))&&((n||(n={}))[o]=t[o]);return n},Rf=(t,n)=>{const o={};for(const s in t)(!Ml(s)||!(s.slice(9)in n))&&(o[s]=t[s]);return o};function Pf(t,n,o){const{props:s,children:r,component:l}=t,{props:a,children:c,patchFlag:i}=n,p=l.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&i>=0){if(i&1024)return!0;if(i&16)return s?Na(s,a,p):!!a;if(i&8){const u=n.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==s[d]&&!Zs(p,d))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?Na(s,a,p):!0:!!a;return!1}function Na(t,n,o){const s=Object.keys(n);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const l=s[r];if(n[l]!==t[l]&&!Zs(o,l))return!0}return!1}function Of({vnode:t,parent:n},o){for(;n&&n.subTree===t;)(t=n.vnode).el=o,n=n.parent}const cp=t=>t.__isSuspense;function $f(t,n){n&&n.pendingBranch?ee(t)?n.effects.push(...t):n.effects.push(t):kf(t)}function ut(t,n){if(Je){let o=Je.provides;const s=Je.parent&&Je.parent.provides;s===o&&(o=Je.provides=Object.create(s)),o[t]=n}}function q(t,n,o=!1){const s=Je||Ke;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return o&&le(n)?n.call(s.proxy):n}}function Xs(t,n){return Zl(t,null,n)}const qa={};function ce(t,n,o){return Zl(t,n,o)}function Zl(t,n,{immediate:o,deep:s,flush:r,onTrack:l,onTrigger:a}=Se){const c=Je;let i,p=!1,u=!1;if(De(t)?(i=()=>t.value,p=Gr(t)):Un(t)?(i=()=>t,s=!0):ee(t)?(u=!0,p=t.some(_=>Un(_)||Gr(_)),i=()=>t.map(_=>{if(De(_))return _.value;if(Un(_))return vn(_);if(le(_))return on(_,c,2)})):le(t)?n?i=()=>on(t,c,2):i=()=>{if(!(c&&c.isUnmounted))return f&&f(),Tt(t,c,3,[d])}:i=kt,n&&s){const _=i;i=()=>vn(_())}let f,d=_=>{f=D.onStop=()=>{on(_,c,4)}};if(No)return d=kt,n?o&&Tt(n,c,3,[i(),u?[]:void 0,d]):i(),kt;let y=u?[]:qa;const h=()=>{if(!!D.active)if(n){const _=D.run();(s||p||(u?_.some((C,b)=>Fo(C,y[b])):Fo(_,y)))&&(f&&f(),Tt(n,c,3,[_,y===qa?void 0:y,d]),y=_)}else D.run()};h.allowRecurse=!!n;let B;r==="sync"?B=h:r==="post"?B=()=>We(h,c&&c.suspense):B=()=>xf(h);const D=new jl(i,B);return n?o?h():y=D.run():r==="post"?We(D.run.bind(D),c&&c.suspense):D.run(),()=>{D.stop(),c&&c.scope&&Fl(c.scope.effects,D)}}function Mf(t,n,o){const s=this.proxy,r=Le(t)?t.includes(".")?ip(s,t):()=>s[t]:t.bind(s,s);let l;le(n)?l=n:(l=n.handler,o=n);const a=Je;Qn(this);const c=Zl(r,l.bind(s),o);return a?Qn(a):bn(),c}function ip(t,n){const o=n.split(".");return()=>{let s=t;for(let r=0;r<o.length&&s;r++)s=s[o[r]];return s}}function vn(t,n){if(!qe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),De(t))vn(t.value,n);else if(ee(t))for(let o=0;o<t.length;o++)vn(t[o],n);else if(Li(t)||Vn(t))t.forEach(o=>{vn(o,n)});else if(ji(t))for(const o in t)vn(t[o],n);return t}function pp(t,n){t.shapeFlag&6&&t.component?pp(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function we(t){return le(t)?{setup:t,name:t.name}:t}const Kn=t=>!!t.type.__asyncLoader,up=t=>t.type.__isKeepAlive,Ff={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const o=so(),s=o.ctx;if(!s.renderer)return()=>{const C=n.default&&n.default();return C&&C.length===1?C[0]:C};const r=new Map,l=new Set;let a=null;const c=o.suspense,{renderer:{p:i,m:p,um:u,o:{createElement:f}}}=s,d=f("div");s.activate=(C,b,w,F,P)=>{const j=C.component;p(C,b,w,0,c),i(j.vnode,C,b,w,j,c,F,C.slotScopeIds,P),We(()=>{j.isDeactivated=!1,j.a&&zn(j.a);const se=C.props&&C.props.onVnodeMounted;se&&vt(se,j.parent,C)},c)},s.deactivate=C=>{const b=C.component;p(C,d,null,1,c),We(()=>{b.da&&zn(b.da);const w=C.props&&C.props.onVnodeUnmounted;w&&vt(w,b.parent,C),b.isDeactivated=!0},c)};function y(C){Dr(C),u(C,o,c,!0)}function h(C){r.forEach((b,w)=>{const F=rl(b.type);F&&(!C||!C(F))&&B(w)})}function B(C){const b=r.get(C);!a||b.type!==a.type?y(b):a&&Dr(a),r.delete(C),l.delete(C)}ce(()=>[t.include,t.exclude],([C,b])=>{C&&h(w=>Bo(C,w)),b&&h(w=>!Bo(b,w))},{flush:"post",deep:!0});let D=null;const _=()=>{D!=null&&r.set(D,Ar(o.subTree))};return Yo(_),mp(_),tr(()=>{r.forEach(C=>{const{subTree:b,suspense:w}=o,F=Ar(b);if(C.type===F.type){Dr(F);const P=F.component.da;P&&We(P,w);return}y(C)})}),()=>{if(D=null,!n.default)return null;const C=n.default(),b=C[0];if(C.length>1)return a=null,C;if(!xn(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return a=null,b;let w=Ar(b);const F=w.type,P=rl(Kn(w)?w.type.__asyncResolved||{}:F),{include:j,exclude:se,max:ie}=t;if(j&&(!P||!Bo(j,P))||se&&P&&Bo(se,P))return a=w,b;const de=w.key==null?F:w.key,me=r.get(de);return w.el&&(w=kn(w),b.shapeFlag&128&&(b.ssContent=w)),D=de,me?(w.el=me.el,w.component=me.component,w.transition&&pp(w,w.transition),w.shapeFlag|=512,l.delete(de),l.add(de)):(l.add(de),ie&&l.size>parseInt(ie,10)&&B(l.values().next().value)),w.shapeFlag|=256,a=w,cp(b.type)?b:w}}},dp=Ff;function Bo(t,n){return ee(t)?t.some(o=>Bo(o,n)):Le(t)?t.split(",").includes(n):t.test?t.test(n):!1}function Lf(t,n){fp(t,"a",n)}function If(t,n){fp(t,"da",n)}function fp(t,n,o=Je){const s=t.__wdc||(t.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(er(n,s,o),o){let r=o.parent;for(;r&&r.parent;)up(r.parent.vnode)&&Hf(s,n,o,r),r=r.parent}}function Hf(t,n,o,s){const r=er(n,t,s,!0);Ql(()=>{Fl(s[n],r)},o)}function Dr(t){let n=t.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),t.shapeFlag=n}function Ar(t){return t.shapeFlag&128?t.ssContent:t}function er(t,n,o=Je,s=!1){if(o){const r=o[t]||(o[t]=[]),l=n.__weh||(n.__weh=(...a)=>{if(o.isUnmounted)return;no(),Qn(o);const c=Tt(n,o,t,a);return bn(),oo(),c});return s?r.unshift(l):r.push(l),l}}const Ut=t=>(n,o=Je)=>(!No||t==="sp")&&er(t,n,o),yp=Ut("bm"),Yo=Ut("m"),jf=Ut("bu"),mp=Ut("u"),tr=Ut("bum"),Ql=Ut("um"),Nf=Ut("sp"),qf=Ut("rtg"),Jf=Ut("rtc");function Wf(t,n=Je){er("ec",t,n)}function nr(t,n){const o=Ke;if(o===null)return t;const s=sr(o)||o.proxy,r=t.dirs||(t.dirs=[]);for(let l=0;l<n.length;l++){let[a,c,i,p=Se]=n[l];le(a)&&(a={mounted:a,updated:a}),a.deep&&vn(c),r.push({dir:a,instance:s,value:c,oldValue:void 0,arg:i,modifiers:p})}return t}function dn(t,n,o,s){const r=t.dirs,l=n&&n.dirs;for(let a=0;a<r.length;a++){const c=r[a];l&&(c.oldValue=l[a].value);let i=c.dir[s];i&&(no(),Tt(i,o,8,[t.el,c,t,n]),oo())}}const hp="components",Vf="directives";function Qr(t,n){return gp(hp,t,!0,n)||t}const zf=Symbol();function Ja(t){return gp(Vf,t)}function gp(t,n,o=!0,s=!1){const r=Ke||Je;if(r){const l=r.type;if(t===hp){const c=rl(l);if(c&&(c===n||c===It(n)||c===zs(It(n))))return l}const a=Wa(r[t]||l[t],n)||Wa(r.appContext[t],n);return!a&&s?l:a}}function Wa(t,n){return t&&(t[n]||t[It(n)]||t[zs(It(n))])}function Zo(t,n,o,s){let r;const l=o&&o[s];if(ee(t)||Le(t)){r=new Array(t.length);for(let a=0,c=t.length;a<c;a++)r[a]=n(t[a],a,void 0,l&&l[a])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=n(a+1,a,void 0,l&&l[a])}else if(qe(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>n(a,c,void 0,l&&l[c]));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,i=a.length;c<i;c++){const p=a[c];r[c]=n(t[p],p,c,l&&l[c])}}else r=[];return o&&(o[s]=r),r}function zt(t,n,o={},s,r){if(Ke.isCE||Ke.parent&&Kn(Ke.parent)&&Ke.parent.isCE)return U("slot",n==="default"?null:{name:n},s&&s());let l=t[n];l&&l._c&&(l._d=!1),E();const a=l&&vp(l(o)),c=K(Ce,{key:o.key||`_${n}`},a||(s?s():[]),a&&t._===1?64:-2);return!r&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function vp(t){return t.some(n=>xn(n)?!(n.type===pn||n.type===Ce&&!vp(n.children)):!0)?t:null}const Xr=t=>t?Tp(t)?sr(t)||t.proxy:Xr(t.parent):null,Ts=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xr(t.parent),$root:t=>Xr(t.root),$emit:t=>t.emit,$options:t=>Ap(t),$forceUpdate:t=>t.f||(t.f=()=>np(t.update)),$nextTick:t=>t.n||(t.n=Ve.bind(t.proxy)),$watch:t=>Mf.bind(t)}),Uf={get({_:t},n){const{ctx:o,setupState:s,data:r,props:l,accessCache:a,type:c,appContext:i}=t;let p;if(n[0]!=="$"){const y=a[n];if(y!==void 0)switch(y){case 1:return s[n];case 2:return r[n];case 4:return o[n];case 3:return l[n]}else{if(s!==Se&&ye(s,n))return a[n]=1,s[n];if(r!==Se&&ye(r,n))return a[n]=2,r[n];if((p=t.propsOptions[0])&&ye(p,n))return a[n]=3,l[n];if(o!==Se&&ye(o,n))return a[n]=4,o[n];el&&(a[n]=0)}}const u=Ts[n];let f,d;if(u)return n==="$attrs"&&ht(t,"get",n),u(t);if((f=c.__cssModules)&&(f=f[n]))return f;if(o!==Se&&ye(o,n))return a[n]=4,o[n];if(d=i.config.globalProperties,ye(d,n))return d[n]},set({_:t},n,o){const{data:s,setupState:r,ctx:l}=t;return r!==Se&&ye(r,n)?(r[n]=o,!0):s!==Se&&ye(s,n)?(s[n]=o,!0):ye(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(l[n]=o,!0)},has({_:{data:t,setupState:n,accessCache:o,ctx:s,appContext:r,propsOptions:l}},a){let c;return!!o[a]||t!==Se&&ye(t,a)||n!==Se&&ye(n,a)||(c=l[0])&&ye(c,a)||ye(s,a)||ye(Ts,a)||ye(r.config.globalProperties,a)},defineProperty(t,n,o){return o.get!=null?t._.accessCache[n]=0:ye(o,"value")&&this.set(t,n,o.value,null),Reflect.defineProperty(t,n,o)}};let el=!0;function Kf(t){const n=Ap(t),o=t.proxy,s=t.ctx;el=!1,n.beforeCreate&&Va(n.beforeCreate,t,"bc");const{data:r,computed:l,methods:a,watch:c,provide:i,inject:p,created:u,beforeMount:f,mounted:d,beforeUpdate:y,updated:h,activated:B,deactivated:D,beforeDestroy:_,beforeUnmount:C,destroyed:b,unmounted:w,render:F,renderTracked:P,renderTriggered:j,errorCaptured:se,serverPrefetch:ie,expose:de,inheritAttrs:me,components:$e,directives:Ie,filters:Ue}=n;if(p&&Gf(p,s,null,t.appContext.config.unwrapInjectedRef),a)for(const te in a){const Q=a[te];le(Q)&&(s[te]=Q.bind(o))}if(r){const te=r.call(o,o);qe(te)&&(t.data=Me(te))}if(el=!0,l)for(const te in l){const Q=l[te],fe=le(Q)?Q.bind(o,o):le(Q.get)?Q.get.bind(o,o):kt,Pt=!le(Q)&&le(Q.set)?Q.set.bind(o):kt,Ye=k({get:fe,set:Pt});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:gt=>Ye.value=gt})}if(c)for(const te in c)Dp(c[te],s,o,te);if(i){const te=le(i)?i.call(o):i;Reflect.ownKeys(te).forEach(Q=>{ut(Q,te[Q])})}u&&Va(u,t,"c");function X(te,Q){ee(Q)?Q.forEach(fe=>te(fe.bind(o))):Q&&te(Q.bind(o))}if(X(yp,f),X(Yo,d),X(jf,y),X(mp,h),X(Lf,B),X(If,D),X(Wf,se),X(Jf,P),X(qf,j),X(tr,C),X(Ql,w),X(Nf,ie),ee(de))if(de.length){const te=t.exposed||(t.exposed={});de.forEach(Q=>{Object.defineProperty(te,Q,{get:()=>o[Q],set:fe=>o[Q]=fe})})}else t.exposed||(t.exposed={});F&&t.render===kt&&(t.render=F),me!=null&&(t.inheritAttrs=me),$e&&(t.components=$e),Ie&&(t.directives=Ie)}function Gf(t,n,o=kt,s=!1){ee(t)&&(t=tl(t));for(const r in t){const l=t[r];let a;qe(l)?"default"in l?a=q(l.from||r,l.default,!0):a=q(l.from||r):a=q(l),De(a)&&s?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:c=>a.value=c}):n[r]=a}}function Va(t,n,o){Tt(ee(t)?t.map(s=>s.bind(n.proxy)):t.bind(n.proxy),n,o)}function Dp(t,n,o,s){const r=s.includes(".")?ip(o,s):()=>o[s];if(Le(t)){const l=n[t];le(l)&&ce(r,l)}else if(le(t))ce(r,t.bind(o));else if(qe(t))if(ee(t))t.forEach(l=>Dp(l,n,o,s));else{const l=le(t.handler)?t.handler.bind(o):n[t.handler];le(l)&&ce(r,l,t)}}function Ap(t){const n=t.type,{mixins:o,extends:s}=n,{mixins:r,optionsCache:l,config:{optionMergeStrategies:a}}=t.appContext,c=l.get(n);let i;return c?i=c:!r.length&&!o&&!s?i=n:(i={},r.length&&r.forEach(p=>Ss(i,p,a,!0)),Ss(i,n,a)),l.set(n,i),i}function Ss(t,n,o,s=!1){const{mixins:r,extends:l}=n;l&&Ss(t,l,o,!0),r&&r.forEach(a=>Ss(t,a,o,!0));for(const a in n)if(!(s&&a==="expose")){const c=Yf[a]||o&&o[a];t[a]=c?c(t[a],n[a]):n[a]}return t}const Yf={data:za,props:hn,emits:hn,methods:hn,computed:hn,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:hn,directives:hn,watch:Qf,provide:za,inject:Zf};function za(t,n){return n?t?function(){return nt(le(t)?t.call(this,this):t,le(n)?n.call(this,this):n)}:n:t}function Zf(t,n){return hn(tl(t),tl(n))}function tl(t){if(ee(t)){const n={};for(let o=0;o<t.length;o++)n[t[o]]=t[o];return n}return t}function Qe(t,n){return t?[...new Set([].concat(t,n))]:n}function hn(t,n){return t?nt(nt(Object.create(null),t),n):n}function Qf(t,n){if(!t)return n;if(!n)return t;const o=nt(Object.create(null),t);for(const s in n)o[s]=Qe(t[s],n[s]);return o}function Xf(t,n,o,s=!1){const r={},l={};_s(l,or,1),t.propsDefaults=Object.create(null),Bp(t,n,r,l);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);o?t.props=s?r:yf(r):t.type.props?t.props=r:t.props=l,t.attrs=l}function ey(t,n,o,s){const{props:r,attrs:l,vnode:{patchFlag:a}}=t,c=Ae(r),[i]=t.propsOptions;let p=!1;if((s||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Zs(t.emitsOptions,d))continue;const y=n[d];if(i)if(ye(l,d))y!==l[d]&&(l[d]=y,p=!0);else{const h=It(d);r[h]=nl(i,c,h,y,t,!1)}else y!==l[d]&&(l[d]=y,p=!0)}}}else{Bp(t,n,r,l)&&(p=!0);let u;for(const f in c)(!n||!ye(n,f)&&((u=Tn(f))===f||!ye(n,u)))&&(i?o&&(o[f]!==void 0||o[u]!==void 0)&&(r[f]=nl(i,c,f,void 0,t,!0)):delete r[f]);if(l!==c)for(const f in l)(!n||!ye(n,f)&&!0)&&(delete l[f],p=!0)}p&&Vt(t,"set","$attrs")}function Bp(t,n,o,s){const[r,l]=t.propsOptions;let a=!1,c;if(n)for(let i in n){if(hs(i))continue;const p=n[i];let u;r&&ye(r,u=It(i))?!l||!l.includes(u)?o[u]=p:(c||(c={}))[u]=p:Zs(t.emitsOptions,i)||(!(i in s)||p!==s[i])&&(s[i]=p,a=!0)}if(l){const i=Ae(o),p=c||Se;for(let u=0;u<l.length;u++){const f=l[u];o[f]=nl(r,i,f,p[f],t,!ye(p,f))}}return a}function nl(t,n,o,s,r,l){const a=t[o];if(a!=null){const c=ye(a,"default");if(c&&s===void 0){const i=a.default;if(a.type!==Function&&le(i)){const{propsDefaults:p}=r;o in p?s=p[o]:(Qn(r),s=p[o]=i.call(null,n),bn())}else s=i}a[0]&&(l&&!c?s=!1:a[1]&&(s===""||s===Tn(o))&&(s=!0))}return s}function Cp(t,n,o=!1){const s=n.propsCache,r=s.get(t);if(r)return r;const l=t.props,a={},c=[];let i=!1;if(!le(t)){const u=f=>{i=!0;const[d,y]=Cp(f,n,!0);nt(a,d),y&&c.push(...y)};!o&&n.mixins.length&&n.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!l&&!i)return s.set(t,Wn),Wn;if(ee(l))for(let u=0;u<l.length;u++){const f=It(l[u]);Ua(f)&&(a[f]=Se)}else if(l)for(const u in l){const f=It(u);if(Ua(f)){const d=l[u],y=a[f]=ee(d)||le(d)?{type:d}:d;if(y){const h=Ya(Boolean,y.type),B=Ya(String,y.type);y[0]=h>-1,y[1]=B<0||h<B,(h>-1||ye(y,"default"))&&c.push(f)}}}const p=[a,c];return s.set(t,p),p}function Ua(t){return t[0]!=="$"}function Ka(t){const n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:t===null?"null":""}function Ga(t,n){return Ka(t)===Ka(n)}function Ya(t,n){return ee(n)?n.findIndex(o=>Ga(o,t)):le(n)&&Ga(n,t)?0:-1}const bp=t=>t[0]==="_"||t==="$stable",Xl=t=>ee(t)?t.map($t):[$t(t)],ty=(t,n,o)=>{if(n._n)return n;const s=oe((...r)=>Xl(n(...r)),o);return s._c=!1,s},Ep=(t,n,o)=>{const s=t._ctx;for(const r in t){if(bp(r))continue;const l=t[r];if(le(l))n[r]=ty(r,l,s);else if(l!=null){const a=Xl(l);n[r]=()=>a}}},wp=(t,n)=>{const o=Xl(n);t.slots.default=()=>o},ny=(t,n)=>{if(t.vnode.shapeFlag&32){const o=n._;o?(t.slots=Ae(n),_s(n,"_",o)):Ep(n,t.slots={})}else t.slots={},n&&wp(t,n);_s(t.slots,or,1)},oy=(t,n,o)=>{const{vnode:s,slots:r}=t;let l=!0,a=Se;if(s.shapeFlag&32){const c=n._;c?o&&c===1?l=!1:(nt(r,n),!o&&c===1&&delete r._):(l=!n.$stable,Ep(n,r)),a=n}else n&&(wp(t,n),a={default:1});if(l)for(const c in r)!bp(c)&&!(c in a)&&delete r[c]};function _p(){return{app:null,config:{isNativeTag:Rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sy=0;function ry(t,n){return function(s,r=null){le(s)||(s=Object.assign({},s)),r!=null&&!qe(r)&&(r=null);const l=_p(),a=new Set;let c=!1;const i=l.app={_uid:sy++,_component:s,_props:r,_container:null,_context:l,_instance:null,version:by,get config(){return l.config},set config(p){},use(p,...u){return a.has(p)||(p&&le(p.install)?(a.add(p),p.install(i,...u)):le(p)&&(a.add(p),p(i,...u))),i},mixin(p){return l.mixins.includes(p)||l.mixins.push(p),i},component(p,u){return u?(l.components[p]=u,i):l.components[p]},directive(p,u){return u?(l.directives[p]=u,i):l.directives[p]},mount(p,u,f){if(!c){const d=U(s,r);return d.appContext=l,u&&n?n(d,p):t(d,p,f),c=!0,i._container=p,p.__vue_app__=i,sr(d.component)||d.component.proxy}},unmount(){c&&(t(null,i._container),delete i._container.__vue_app__)},provide(p,u){return l.provides[p]=u,i}};return i}}function ol(t,n,o,s,r=!1){if(ee(t)){t.forEach((d,y)=>ol(d,n&&(ee(n)?n[y]:n),o,s,r));return}if(Kn(s)&&!r)return;const l=s.shapeFlag&4?sr(s.component)||s.component.proxy:s.el,a=r?null:l,{i:c,r:i}=t,p=n&&n.r,u=c.refs===Se?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==i&&(Le(p)?(u[p]=null,ye(f,p)&&(f[p]=null)):De(p)&&(p.value=null)),le(i))on(i,c,12,[a,u]);else{const d=Le(i),y=De(i);if(d||y){const h=()=>{if(t.f){const B=d?u[i]:i.value;r?ee(B)&&Fl(B,l):ee(B)?B.includes(l)||B.push(l):d?(u[i]=[l],ye(f,i)&&(f[i]=u[i])):(i.value=[l],t.k&&(u[t.k]=i.value))}else d?(u[i]=a,ye(f,i)&&(f[i]=a)):De(i)&&(i.value=a,t.k&&(u[t.k]=a))};a?(h.id=-1,We(h,o)):h()}}}const We=$f;function ly(t){return ay(t)}function ay(t,n){const o=Ld();o.__VUE__=!0;const{insert:s,remove:r,patchProp:l,createElement:a,createText:c,createComment:i,setText:p,setElementText:u,parentNode:f,nextSibling:d,setScopeId:y=kt,cloneNode:h,insertStaticContent:B}=t,D=(m,g,A,S=null,T=null,M=null,I=!1,$=null,L=!!g.dynamicChildren)=>{if(m===g)return;m&&!po(m,g)&&(S=z(m),ot(m,T,M,!0),m=null),g.patchFlag===-2&&(L=!1,g.dynamicChildren=null);const{type:R,ref:G,shapeFlag:V}=g;switch(R){case ta:_(m,g,A,S);break;case pn:C(m,g,A,S);break;case Br:m==null&&b(g,A,S,I);break;case Ce:Ie(m,g,A,S,T,M,I,$,L);break;default:V&1?P(m,g,A,S,T,M,I,$,L):V&6?Ue(m,g,A,S,T,M,I,$,L):(V&64||V&128)&&R.process(m,g,A,S,T,M,I,$,L,Re)}G!=null&&T&&ol(G,m&&m.ref,M,g||m,!g)},_=(m,g,A,S)=>{if(m==null)s(g.el=c(g.children),A,S);else{const T=g.el=m.el;g.children!==m.children&&p(T,g.children)}},C=(m,g,A,S)=>{m==null?s(g.el=i(g.children||""),A,S):g.el=m.el},b=(m,g,A,S)=>{[m.el,m.anchor]=B(m.children,g,A,S,m.el,m.anchor)},w=({el:m,anchor:g},A,S)=>{let T;for(;m&&m!==g;)T=d(m),s(m,A,S),m=T;s(g,A,S)},F=({el:m,anchor:g})=>{let A;for(;m&&m!==g;)A=d(m),r(m),m=A;r(g)},P=(m,g,A,S,T,M,I,$,L)=>{I=I||g.type==="svg",m==null?j(g,A,S,T,M,I,$,L):de(m,g,T,M,I,$,L)},j=(m,g,A,S,T,M,I,$)=>{let L,R;const{type:G,props:V,shapeFlag:Y,transition:ne,patchFlag:he,dirs:xe}=m;if(m.el&&h!==void 0&&he===-1)L=m.el=h(m.el);else{if(L=m.el=a(m.type,M,V&&V.is,V),Y&8?u(L,m.children):Y&16&&ie(m.children,L,null,S,T,M&&G!=="foreignObject",I,$),xe&&dn(m,null,S,"created"),V){for(const Pe in V)Pe!=="value"&&!hs(Pe)&&l(L,Pe,null,V[Pe],M,m.children,S,T,O);"value"in V&&l(L,"value",null,V.value),(R=V.onVnodeBeforeMount)&&vt(R,S,m)}se(L,m,m.scopeId,I,S)}xe&&dn(m,null,S,"beforeMount");const ke=(!T||T&&!T.pendingBranch)&&ne&&!ne.persisted;ke&&ne.beforeEnter(L),s(L,g,A),((R=V&&V.onVnodeMounted)||ke||xe)&&We(()=>{R&&vt(R,S,m),ke&&ne.enter(L),xe&&dn(m,null,S,"mounted")},T)},se=(m,g,A,S,T)=>{if(A&&y(m,A),S)for(let M=0;M<S.length;M++)y(m,S[M]);if(T){let M=T.subTree;if(g===M){const I=T.vnode;se(m,I,I.scopeId,I.slotScopeIds,T.parent)}}},ie=(m,g,A,S,T,M,I,$,L=0)=>{for(let R=L;R<m.length;R++){const G=m[R]=$?Xt(m[R]):$t(m[R]);D(null,G,g,A,S,T,M,I,$)}},de=(m,g,A,S,T,M,I)=>{const $=g.el=m.el;let{patchFlag:L,dynamicChildren:R,dirs:G}=g;L|=m.patchFlag&16;const V=m.props||Se,Y=g.props||Se;let ne;A&&fn(A,!1),(ne=Y.onVnodeBeforeUpdate)&&vt(ne,A,g,m),G&&dn(g,m,A,"beforeUpdate"),A&&fn(A,!0);const he=T&&g.type!=="foreignObject";if(R?me(m.dynamicChildren,R,$,A,S,he,M):I||fe(m,g,$,null,A,S,he,M,!1),L>0){if(L&16)$e($,g,V,Y,A,S,T);else if(L&2&&V.class!==Y.class&&l($,"class",null,Y.class,T),L&4&&l($,"style",V.style,Y.style,T),L&8){const xe=g.dynamicProps;for(let ke=0;ke<xe.length;ke++){const Pe=xe[ke],bt=V[Pe],On=Y[Pe];(On!==bt||Pe==="value")&&l($,Pe,bt,On,T,m.children,A,S,O)}}L&1&&m.children!==g.children&&u($,g.children)}else!I&&R==null&&$e($,g,V,Y,A,S,T);((ne=Y.onVnodeUpdated)||G)&&We(()=>{ne&&vt(ne,A,g,m),G&&dn(g,m,A,"updated")},S)},me=(m,g,A,S,T,M,I)=>{for(let $=0;$<g.length;$++){const L=m[$],R=g[$],G=L.el&&(L.type===Ce||!po(L,R)||L.shapeFlag&70)?f(L.el):A;D(L,R,G,null,S,T,M,I,!0)}},$e=(m,g,A,S,T,M,I)=>{if(A!==S){for(const $ in S){if(hs($))continue;const L=S[$],R=A[$];L!==R&&$!=="value"&&l(m,$,R,L,I,g.children,T,M,O)}if(A!==Se)for(const $ in A)!hs($)&&!($ in S)&&l(m,$,A[$],null,I,g.children,T,M,O);"value"in S&&l(m,"value",A.value,S.value)}},Ie=(m,g,A,S,T,M,I,$,L)=>{const R=g.el=m?m.el:c(""),G=g.anchor=m?m.anchor:c("");let{patchFlag:V,dynamicChildren:Y,slotScopeIds:ne}=g;ne&&($=$?$.concat(ne):ne),m==null?(s(R,A,S),s(G,A,S),ie(g.children,A,G,T,M,I,$,L)):V>0&&V&64&&Y&&m.dynamicChildren?(me(m.dynamicChildren,Y,A,T,M,I,$),(g.key!=null||T&&g===T.subTree)&&ea(m,g,!0)):fe(m,g,A,G,T,M,I,$,L)},Ue=(m,g,A,S,T,M,I,$,L)=>{g.slotScopeIds=$,m==null?g.shapeFlag&512?T.ctx.activate(g,A,S,I,L):_e(g,A,S,T,M,I,L):X(m,g,L)},_e=(m,g,A,S,T,M,I)=>{const $=m.component=gy(m,S,T);if(up(m)&&($.ctx.renderer=Re),vy($),$.asyncDep){if(T&&T.registerDep($,te),!m.el){const L=$.subTree=U(pn);C(null,L,g,A)}return}te($,m,g,A,T,M,I)},X=(m,g,A)=>{const S=g.component=m.component;if(Pf(m,g,A))if(S.asyncDep&&!S.asyncResolved){Q(S,g,A);return}else S.next=g,_f(S.update),S.update();else g.el=m.el,S.vnode=g},te=(m,g,A,S,T,M,I)=>{const $=()=>{if(m.isMounted){let{next:G,bu:V,u:Y,parent:ne,vnode:he}=m,xe=G,ke;fn(m,!1),G?(G.el=he.el,Q(m,G,I)):G=he,V&&zn(V),(ke=G.props&&G.props.onVnodeBeforeUpdate)&&vt(ke,ne,G,he),fn(m,!0);const Pe=vr(m),bt=m.subTree;m.subTree=Pe,D(bt,Pe,f(bt.el),z(bt),m,T,M),G.el=Pe.el,xe===null&&Of(m,Pe.el),Y&&We(Y,T),(ke=G.props&&G.props.onVnodeUpdated)&&We(()=>vt(ke,ne,G,he),T)}else{let G;const{el:V,props:Y}=g,{bm:ne,m:he,parent:xe}=m,ke=Kn(g);if(fn(m,!1),ne&&zn(ne),!ke&&(G=Y&&Y.onVnodeBeforeMount)&&vt(G,xe,g),fn(m,!0),V&&ae){const Pe=()=>{m.subTree=vr(m),ae(V,m.subTree,m,T,null)};ke?g.type.__asyncLoader().then(()=>!m.isUnmounted&&Pe()):Pe()}else{const Pe=m.subTree=vr(m);D(null,Pe,A,S,m,T,M),g.el=Pe.el}if(he&&We(he,T),!ke&&(G=Y&&Y.onVnodeMounted)){const Pe=g;We(()=>vt(G,xe,Pe),T)}(g.shapeFlag&256||xe&&Kn(xe.vnode)&&xe.vnode.shapeFlag&256)&&m.a&&We(m.a,T),m.isMounted=!0,g=A=S=null}},L=m.effect=new jl($,()=>np(R),m.scope),R=m.update=()=>L.run();R.id=m.uid,fn(m,!0),R()},Q=(m,g,A)=>{g.component=m;const S=m.vnode.props;m.vnode=g,m.next=null,ey(m,g.props,S,A),oy(m,g.children,A),no(),Ys(void 0,m.update),oo()},fe=(m,g,A,S,T,M,I,$,L=!1)=>{const R=m&&m.children,G=m?m.shapeFlag:0,V=g.children,{patchFlag:Y,shapeFlag:ne}=g;if(Y>0){if(Y&128){Ye(R,V,A,S,T,M,I,$,L);return}else if(Y&256){Pt(R,V,A,S,T,M,I,$,L);return}}ne&8?(G&16&&O(R,T,M),V!==R&&u(A,V)):G&16?ne&16?Ye(R,V,A,S,T,M,I,$,L):O(R,T,M,!0):(G&8&&u(A,""),ne&16&&ie(V,A,S,T,M,I,$,L))},Pt=(m,g,A,S,T,M,I,$,L)=>{m=m||Wn,g=g||Wn;const R=m.length,G=g.length,V=Math.min(R,G);let Y;for(Y=0;Y<V;Y++){const ne=g[Y]=L?Xt(g[Y]):$t(g[Y]);D(m[Y],ne,A,null,T,M,I,$,L)}R>G?O(m,T,M,!0,!1,V):ie(g,A,S,T,M,I,$,L,V)},Ye=(m,g,A,S,T,M,I,$,L)=>{let R=0;const G=g.length;let V=m.length-1,Y=G-1;for(;R<=V&&R<=Y;){const ne=m[R],he=g[R]=L?Xt(g[R]):$t(g[R]);if(po(ne,he))D(ne,he,A,null,T,M,I,$,L);else break;R++}for(;R<=V&&R<=Y;){const ne=m[V],he=g[Y]=L?Xt(g[Y]):$t(g[Y]);if(po(ne,he))D(ne,he,A,null,T,M,I,$,L);else break;V--,Y--}if(R>V){if(R<=Y){const ne=Y+1,he=ne<G?g[ne].el:S;for(;R<=Y;)D(null,g[R]=L?Xt(g[R]):$t(g[R]),A,he,T,M,I,$,L),R++}}else if(R>Y)for(;R<=V;)ot(m[R],T,M,!0),R++;else{const ne=R,he=R,xe=new Map;for(R=he;R<=Y;R++){const lt=g[R]=L?Xt(g[R]):$t(g[R]);lt.key!=null&&xe.set(lt.key,R)}let ke,Pe=0;const bt=Y-he+1;let On=!1,xa=0;const io=new Array(bt);for(R=0;R<bt;R++)io[R]=0;for(R=ne;R<=V;R++){const lt=m[R];if(Pe>=bt){ot(lt,T,M,!0);continue}let Ot;if(lt.key!=null)Ot=xe.get(lt.key);else for(ke=he;ke<=Y;ke++)if(io[ke-he]===0&&po(lt,g[ke])){Ot=ke;break}Ot===void 0?ot(lt,T,M,!0):(io[Ot-he]=R+1,Ot>=xa?xa=Ot:On=!0,D(lt,g[Ot],A,null,T,M,I,$,L),Pe++)}const ka=On?cy(io):Wn;for(ke=ka.length-1,R=bt-1;R>=0;R--){const lt=he+R,Ot=g[lt],Ta=lt+1<G?g[lt+1].el:S;io[R]===0?D(null,Ot,A,Ta,T,M,I,$,L):On&&(ke<0||R!==ka[ke]?gt(Ot,A,Ta,2):ke--)}}},gt=(m,g,A,S,T=null)=>{const{el:M,type:I,transition:$,children:L,shapeFlag:R}=m;if(R&6){gt(m.component.subTree,g,A,S);return}if(R&128){m.suspense.move(g,A,S);return}if(R&64){I.move(m,g,A,Re);return}if(I===Ce){s(M,g,A);for(let V=0;V<L.length;V++)gt(L[V],g,A,S);s(m.anchor,g,A);return}if(I===Br){w(m,g,A);return}if(S!==2&&R&1&&$)if(S===0)$.beforeEnter(M),s(M,g,A),We(()=>$.enter(M),T);else{const{leave:V,delayLeave:Y,afterLeave:ne}=$,he=()=>s(M,g,A),xe=()=>{V(M,()=>{he(),ne&&ne()})};Y?Y(M,he,xe):xe()}else s(M,g,A)},ot=(m,g,A,S=!1,T=!1)=>{const{type:M,props:I,ref:$,children:L,dynamicChildren:R,shapeFlag:G,patchFlag:V,dirs:Y}=m;if($!=null&&ol($,null,A,m,!0),G&256){g.ctx.deactivate(m);return}const ne=G&1&&Y,he=!Kn(m);let xe;if(he&&(xe=I&&I.onVnodeBeforeUnmount)&&vt(xe,g,m),G&6)J(m.component,A,S);else{if(G&128){m.suspense.unmount(A,S);return}ne&&dn(m,null,g,"beforeUnmount"),G&64?m.type.remove(m,g,A,T,Re,S):R&&(M!==Ce||V>0&&V&64)?O(R,g,A,!1,!0):(M===Ce&&V&384||!T&&G&16)&&O(L,g,A),S&&Pn(m)}(he&&(xe=I&&I.onVnodeUnmounted)||ne)&&We(()=>{xe&&vt(xe,g,m),ne&&dn(m,null,g,"unmounted")},A)},Pn=m=>{const{type:g,el:A,anchor:S,transition:T}=m;if(g===Ce){x(A,S);return}if(g===Br){F(m);return}const M=()=>{r(A),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(m.shapeFlag&1&&T&&!T.persisted){const{leave:I,delayLeave:$}=T,L=()=>I(A,M);$?$(m.el,M,L):L()}else M()},x=(m,g)=>{let A;for(;m!==g;)A=d(m),r(m),m=A;r(g)},J=(m,g,A)=>{const{bum:S,scope:T,update:M,subTree:I,um:$}=m;S&&zn(S),T.stop(),M&&(M.active=!1,ot(I,m,g,A)),$&&We($,g),We(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},O=(m,g,A,S=!1,T=!1,M=0)=>{for(let I=M;I<m.length;I++)ot(m[I],g,A,S,T)},z=m=>m.shapeFlag&6?z(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),ge=(m,g,A)=>{m==null?g._vnode&&ot(g._vnode,null,null,!0):D(g._vnode||null,m,g,null,null,null,A),rp(),g._vnode=m},Re={p:D,um:ot,m:gt,r:Pn,mt:_e,mc:ie,pc:fe,pbc:me,n:z,o:t};let pe,ae;return n&&([pe,ae]=n(Re)),{render:ge,hydrate:pe,createApp:ry(ge,pe)}}function fn({effect:t,update:n},o){t.allowRecurse=n.allowRecurse=o}function ea(t,n,o=!1){const s=t.children,r=n.children;if(ee(s)&&ee(r))for(let l=0;l<s.length;l++){const a=s[l];let c=r[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[l]=Xt(r[l]),c.el=a.el),o||ea(a,c))}}function cy(t){const n=t.slice(),o=[0];let s,r,l,a,c;const i=t.length;for(s=0;s<i;s++){const p=t[s];if(p!==0){if(r=o[o.length-1],t[r]<p){n[s]=r,o.push(s);continue}for(l=0,a=o.length-1;l<a;)c=l+a>>1,t[o[c]]<p?l=c+1:a=c;p<t[o[l]]&&(l>0&&(n[s]=o[l-1]),o[l]=s)}}for(l=o.length,a=o[l-1];l-- >0;)o[l]=a,a=n[a];return o}const iy=t=>t.__isTeleport,wo=t=>t&&(t.disabled||t.disabled===""),Za=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,sl=(t,n)=>{const o=t&&t.to;return Le(o)?n?n(o):null:o},py={__isTeleport:!0,process(t,n,o,s,r,l,a,c,i,p){const{mc:u,pc:f,pbc:d,o:{insert:y,querySelector:h,createText:B,createComment:D}}=p,_=wo(n.props);let{shapeFlag:C,children:b,dynamicChildren:w}=n;if(t==null){const F=n.el=B(""),P=n.anchor=B("");y(F,o,s),y(P,o,s);const j=n.target=sl(n.props,h),se=n.targetAnchor=B("");j&&(y(se,j),a=a||Za(j));const ie=(de,me)=>{C&16&&u(b,de,me,r,l,a,c,i)};_?ie(o,P):j&&ie(j,se)}else{n.el=t.el;const F=n.anchor=t.anchor,P=n.target=t.target,j=n.targetAnchor=t.targetAnchor,se=wo(t.props),ie=se?o:P,de=se?F:j;if(a=a||Za(P),w?(d(t.dynamicChildren,w,ie,r,l,a,c),ea(t,n,!0)):i||f(t,n,ie,de,r,l,a,c,!1),_)se||ps(n,o,F,p,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const me=n.target=sl(n.props,h);me&&ps(n,me,null,p,0)}else se&&ps(n,P,j,p,1)}},remove(t,n,o,s,{um:r,o:{remove:l}},a){const{shapeFlag:c,children:i,anchor:p,targetAnchor:u,target:f,props:d}=t;if(f&&l(u),(a||!wo(d))&&(l(p),c&16))for(let y=0;y<i.length;y++){const h=i[y];r(h,n,o,!0,!!h.dynamicChildren)}},move:ps,hydrate:uy};function ps(t,n,o,{o:{insert:s},m:r},l=2){l===0&&s(t.targetAnchor,n,o);const{el:a,anchor:c,shapeFlag:i,children:p,props:u}=t,f=l===2;if(f&&s(a,n,o),(!f||wo(u))&&i&16)for(let d=0;d<p.length;d++)r(p[d],n,o,2);f&&s(c,n,o)}function uy(t,n,o,s,r,l,{o:{nextSibling:a,parentNode:c,querySelector:i}},p){const u=n.target=sl(n.props,i);if(u){const f=u._lpa||u.firstChild;if(n.shapeFlag&16)if(wo(n.props))n.anchor=p(a(t),n,c(t),o,s,r,l),n.targetAnchor=f;else{n.anchor=a(t);let d=f;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){n.targetAnchor=d,u._lpa=n.targetAnchor&&a(n.targetAnchor);break}p(f,n,u,o,s,r,l)}}return n.anchor&&a(n.anchor)}const dy=py,Ce=Symbol(void 0),ta=Symbol(void 0),pn=Symbol(void 0),Br=Symbol(void 0),_o=[];let xt=null;function E(t=!1){_o.push(xt=t?null:[])}function fy(){_o.pop(),xt=_o[_o.length-1]||null}let jo=1;function Qa(t){jo+=t}function xp(t){return t.dynamicChildren=jo>0?xt||Wn:null,fy(),jo>0&&xt&&xt.push(t),t}function N(t,n,o,s,r,l){return xp(e(t,n,o,s,r,l,!0))}function K(t,n,o,s,r){return xp(U(t,n,o,s,r,!0))}function xn(t){return t?t.__v_isVNode===!0:!1}function po(t,n){return t.type===n.type&&t.key===n.key}const or="__vInternal",kp=({key:t})=>t!=null?t:null,gs=({ref:t,ref_key:n,ref_for:o})=>t!=null?Le(t)||De(t)||le(t)?{i:Ke,r:t,k:n,f:!!o}:t:null;function e(t,n=null,o=null,s=0,r=null,l=t===Ce?0:1,a=!1,c=!1){const i={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&kp(n),ref:n&&gs(n),scopeId:Qs,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return c?(na(i,o),l&128&&t.normalize(i)):o&&(i.shapeFlag|=Le(o)?8:16),jo>0&&!a&&xt&&(i.patchFlag>0||l&6)&&i.patchFlag!==32&&xt.push(i),i}const U=yy;function yy(t,n=null,o=null,s=0,r=null,l=!1){if((!t||t===zf)&&(t=pn),xn(t)){const c=kn(t,n,!0);return o&&na(c,o),jo>0&&!l&&xt&&(c.shapeFlag&6?xt[xt.indexOf(t)]=c:xt.push(c)),c.patchFlag|=-2,c}if(Cy(t)&&(t=t.__vccOpts),n){n=be(n);let{class:c,style:i}=n;c&&!Le(c)&&(n.class=Fe(c)),qe(i)&&(Qi(i)&&!ee(i)&&(i=nt({},i)),n.style=tt(i))}const a=Le(t)?1:cp(t)?128:iy(t)?64:qe(t)?4:le(t)?2:0;return e(t,n,o,s,r,a,l,!0)}function be(t){return t?Qi(t)||or in t?nt({},t):t:null}function kn(t,n,o=!1){const{props:s,ref:r,patchFlag:l,children:a}=t,c=n?Rs(s||{},n):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&kp(c),ref:n&&n.ref?o&&r?ee(r)?r.concat(gs(n)):[r,gs(n)]:gs(n):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Ce?l===-1?16:l|16:l,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor}}function W(t=" ",n=0){return U(ta,null,t,n)}function ue(t="",n=!1){return n?(E(),K(pn,null,t)):U(pn,null,t)}function $t(t){return t==null||typeof t=="boolean"?U(pn):ee(t)?U(Ce,null,t.slice()):typeof t=="object"?Xt(t):U(ta,null,String(t))}function Xt(t){return t.el===null||t.memo?t:kn(t)}function na(t,n){let o=0;const{shapeFlag:s}=t;if(n==null)n=null;else if(ee(n))o=16;else if(typeof n=="object")if(s&65){const r=n.default;r&&(r._c&&(r._d=!1),na(t,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!(or in n)?n._ctx=Ke:r===3&&Ke&&(Ke.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else le(n)?(n={default:n,_ctx:Ke},o=32):(n=String(n),s&64?(o=16,n=[W(n)]):o=8);t.children=n,t.shapeFlag|=o}function Rs(...t){const n={};for(let o=0;o<t.length;o++){const s=t[o];for(const r in s)if(r==="class")n.class!==s.class&&(n.class=Fe([n.class,s.class]));else if(r==="style")n.style=tt([n.style,s.style]);else if(Js(r)){const l=n[r],a=s[r];a&&l!==a&&!(ee(l)&&l.includes(a))&&(n[r]=l?[].concat(l,a):a)}else r!==""&&(n[r]=s[r])}return n}function vt(t,n,o,s=null){Tt(t,n,7,[o,s])}const my=_p();let hy=0;function gy(t,n,o){const s=t.type,r=(n?n.appContext:t.appContext)||my,l={uid:hy++,vnode:t,type:s,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ni(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cp(s,r),emitsOptions:ap(s,r),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=Tf.bind(null,l),t.ce&&t.ce(l),l}let Je=null;const so=()=>Je||Ke,Qn=t=>{Je=t,t.scope.on()},bn=()=>{Je&&Je.scope.off(),Je=null};function Tp(t){return t.vnode.shapeFlag&4}let No=!1;function vy(t,n=!1){No=n;const{props:o,children:s}=t.vnode,r=Tp(t);Xf(t,o,r,n),ny(t,s);const l=r?Dy(t,n):void 0;return No=!1,l}function Dy(t,n){const o=t.type;t.accessCache=Object.create(null),t.proxy=Ks(new Proxy(t.ctx,Uf));const{setup:s}=o;if(s){const r=t.setupContext=s.length>1?By(t):null;Qn(t),no();const l=on(s,t,0,[t.props,r]);if(oo(),bn(),Ii(l)){if(l.then(bn,bn),n)return l.then(a=>{Xa(t,a,n)}).catch(a=>{Gs(a,t,0)});t.asyncDep=l}else Xa(t,l,n)}else Sp(t,n)}function Xa(t,n,o){le(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:qe(n)&&(t.setupState=ep(n)),Sp(t,o)}let ec;function Sp(t,n,o){const s=t.type;if(!t.render){if(!n&&ec&&!s.render){const r=s.template;if(r){const{isCustomElement:l,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:i}=s,p=nt(nt({isCustomElement:l,delimiters:c},a),i);s.render=ec(r,p)}}t.render=s.render||kt}Qn(t),no(),Kf(t),oo(),bn()}function Ay(t){return new Proxy(t.attrs,{get(n,o){return ht(t,"get","$attrs"),n[o]}})}function By(t){const n=s=>{t.exposed=s||{}};let o;return{get attrs(){return o||(o=Ay(t))},slots:t.slots,emit:t.emit,expose:n}}function sr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ep(Ks(t.exposed)),{get(n,o){if(o in n)return n[o];if(o in Ts)return Ts[o](t)}}))}function rl(t){return le(t)&&t.displayName||t.name}function Cy(t){return le(t)&&"__vccOpts"in t}const k=(t,n)=>bf(t,n,No);function ft(t,n,o){const s=arguments.length;return s===2?qe(n)&&!ee(n)?xn(n)?U(t,null,[n]):U(t,n):U(t,null,n):(s>3?o=Array.prototype.slice.call(arguments,2):s===3&&xn(o)&&(o=[o]),U(t,n,o))}const by="3.2.36",Ey="http://www.w3.org/2000/svg",gn=typeof document!="undefined"?document:null,tc=gn&&gn.createElement("template"),wy={insert:(t,n,o)=>{n.insertBefore(t,o||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,o,s)=>{const r=n?gn.createElementNS(Ey,t):gn.createElement(t,o?{is:o}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>gn.createTextNode(t),createComment:t=>gn.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gn.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},cloneNode(t){const n=t.cloneNode(!0);return"_value"in t&&(n._value=t._value),n},insertStaticContent(t,n,o,s,r,l){const a=o?o.previousSibling:n.lastChild;if(r&&(r===l||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===l||!(r=r.nextSibling)););else{tc.innerHTML=s?`<svg>${t}</svg>`:t;const c=tc.content;if(s){const i=c.firstChild;for(;i.firstChild;)c.appendChild(i.firstChild);c.removeChild(i)}n.insertBefore(c,o)}return[a?a.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}};function _y(t,n,o){const s=t._vtc;s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?t.removeAttribute("class"):o?t.setAttribute("class",n):t.className=n}function xy(t,n,o){const s=t.style,r=Le(o);if(o&&!r){for(const l in o)ll(s,l,o[l]);if(n&&!Le(n))for(const l in n)o[l]==null&&ll(s,l,"")}else{const l=s.display;r?n!==o&&(s.cssText=o):n&&t.removeAttribute("style"),"_vod"in t&&(s.display=l)}}const nc=/\s*!important$/;function ll(t,n,o){if(ee(o))o.forEach(s=>ll(t,n,s));else if(o==null&&(o=""),n.startsWith("--"))t.setProperty(n,o);else{const s=ky(t,n);nc.test(o)?t.setProperty(Tn(s),o.replace(nc,""),"important"):t[s]=o}}const oc=["Webkit","Moz","ms"],Cr={};function ky(t,n){const o=Cr[n];if(o)return o;let s=It(n);if(s!=="filter"&&s in t)return Cr[n]=s;s=zs(s);for(let r=0;r<oc.length;r++){const l=oc[r]+s;if(l in t)return Cr[n]=l}return n}const sc="http://www.w3.org/1999/xlink";function Ty(t,n,o,s,r){if(s&&n.startsWith("xlink:"))o==null?t.removeAttributeNS(sc,n.slice(6,n.length)):t.setAttributeNS(sc,n,o);else{const l=xd(n);o==null||l&&!Mi(o)?t.removeAttribute(n):t.setAttribute(n,l?"":o)}}function Sy(t,n,o,s,r,l,a){if(n==="innerHTML"||n==="textContent"){s&&a(s,r,l),t[n]=o==null?"":o;return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=o;const i=o==null?"":o;(t.value!==i||t.tagName==="OPTION")&&(t.value=i),o==null&&t.removeAttribute(n);return}let c=!1;if(o===""||o==null){const i=typeof t[n];i==="boolean"?o=Mi(o):o==null&&i==="string"?(o="",c=!0):i==="number"&&(o=0,c=!0)}try{t[n]=o}catch{}c&&t.removeAttribute(n)}const[Rp,Ry]=(()=>{let t=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(o&&Number(o[1])<=53)}return[t,n]})();let al=0;const Py=Promise.resolve(),Oy=()=>{al=0},$y=()=>al||(Py.then(Oy),al=Rp());function Hn(t,n,o,s){t.addEventListener(n,o,s)}function My(t,n,o,s){t.removeEventListener(n,o,s)}function Fy(t,n,o,s,r=null){const l=t._vei||(t._vei={}),a=l[n];if(s&&a)a.value=s;else{const[c,i]=Ly(n);if(s){const p=l[n]=Iy(s,r);Hn(t,c,p,i)}else a&&(My(t,c,a,i),l[n]=void 0)}}const rc=/(?:Once|Passive|Capture)$/;function Ly(t){let n;if(rc.test(t)){n={};let o;for(;o=t.match(rc);)t=t.slice(0,t.length-o[0].length),n[o[0].toLowerCase()]=!0}return[Tn(t.slice(2)),n]}function Iy(t,n){const o=s=>{const r=s.timeStamp||Rp();(Ry||r>=o.attached-1)&&Tt(Hy(s,o.value),n,5,[s])};return o.value=t,o.attached=$y(),o}function Hy(t,n){if(ee(n)){const o=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{o.call(t),t._stopped=!0},n.map(s=>r=>!r._stopped&&s&&s(r))}else return n}const lc=/^on[a-z]/,jy=(t,n,o,s,r=!1,l,a,c,i)=>{n==="class"?_y(t,s,r):n==="style"?xy(t,o,s):Js(n)?Ml(n)||Fy(t,n,o,s,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Ny(t,n,s,r))?Sy(t,n,s,l,a,c,i):(n==="true-value"?t._trueValue=s:n==="false-value"&&(t._falseValue=s),Ty(t,n,s,r))};function Ny(t,n,o,s){return s?!!(n==="innerHTML"||n==="textContent"||n in t&&lc.test(n)&&le(o)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||lc.test(n)&&Le(o)?!1:n in t}const ac=t=>{const n=t.props["onUpdate:modelValue"]||!1;return ee(n)?o=>zn(n,o):n};function qy(t){t.target.composing=!0}function cc(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Jy={created(t,{modifiers:{lazy:n,trim:o,number:s}},r){t._assign=ac(r);const l=s||r.props&&r.props.type==="number";Hn(t,n?"change":"input",a=>{if(a.target.composing)return;let c=t.value;o&&(c=c.trim()),l&&(c=Wr(c)),t._assign(c)}),o&&Hn(t,"change",()=>{t.value=t.value.trim()}),n||(Hn(t,"compositionstart",qy),Hn(t,"compositionend",cc),Hn(t,"change",cc))},mounted(t,{value:n}){t.value=n==null?"":n},beforeUpdate(t,{value:n,modifiers:{lazy:o,trim:s,number:r}},l){if(t._assign=ac(l),t.composing||document.activeElement===t&&t.type!=="range"&&(o||s&&t.value.trim()===n||(r||t.type==="number")&&Wr(t.value)===n))return;const a=n==null?"":n;t.value!==a&&(t.value=a)}},Wy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ic=(t,n)=>o=>{if(!("key"in o))return;const s=Tn(o.key);if(n.some(r=>r===s||Wy[r]===s))return t(o)},Pp={beforeMount(t,{value:n},{transition:o}){t._vod=t.style.display==="none"?"":t.style.display,o&&n?o.beforeEnter(t):uo(t,n)},mounted(t,{value:n},{transition:o}){o&&n&&o.enter(t)},updated(t,{value:n,oldValue:o},{transition:s}){!n!=!o&&(s?n?(s.beforeEnter(t),uo(t,!0),s.enter(t)):s.leave(t,()=>{uo(t,!1)}):uo(t,n))},beforeUnmount(t,{value:n}){uo(t,n)}};function uo(t,n){t.style.display=n?t._vod:"none"}const Vy=nt({patchProp:jy},wy);let pc;function zy(){return pc||(pc=ly(Vy))}const Uy=(...t)=>{const n=zy().createApp(...t),{mount:o}=n;return n.mount=s=>{const r=Ky(s);if(!r)return;const l=n._component;!le(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const a=o(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function Ky(t){return Le(t)?document.querySelector(t):t}var Gy=Object.defineProperty,uc=Object.getOwnPropertySymbols,Yy=Object.prototype.hasOwnProperty,Zy=Object.prototype.propertyIsEnumerable,dc=(t,n,o)=>n in t?Gy(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Qy=(t,n)=>{for(var o in n||(n={}))Yy.call(n,o)&&dc(t,o,n[o]);if(uc)for(var o of uc(n))Zy.call(n,o)&&dc(t,o,n[o]);return t},Op="usehead",fc="head:count",br="data-head-attrs",Xy=(t,n,o)=>{const s=o.createElement(t);for(const r of Object.keys(n)){let l=n[r];r==="key"||l===!1||(r==="children"?s.textContent=l:s.setAttribute(r,l))}return s};function em(t,n){if(t instanceof HTMLElement&&n instanceof HTMLElement){const o=n.getAttribute("nonce");if(o&&!t.getAttribute("nonce")){const s=n.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=o,o===t.nonce&&t.isEqualNode(s)}}return t.isEqualNode(n)}var tm=t=>{const n=["key","id","name","property"];for(const o of n){const s=typeof t.getAttribute=="function"?t.hasAttribute(o)?t.getAttribute(o):void 0:t[o];if(s!==void 0)return{name:o,value:s}}},nm=()=>{const t=q(Op);if(!t)throw new Error("You may forget to apply app.use(head)");return t},om=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],sm=t=>{const n=[];for(const o of Object.keys(t))if(t[o]!=null){if(o==="title")n.push({tag:o,props:{children:t[o]}});else if(o==="base")n.push({tag:o,props:Qy({key:"default"},t[o])});else if(om.includes(o)){const s=t[o];Array.isArray(s)?s.forEach(r=>{n.push({tag:o,props:r})}):s&&n.push({tag:o,props:s})}}return n},yc=(t,n)=>{const o=t.getAttribute(br);if(o)for(const r of o.split(","))r in n||t.removeAttribute(r);const s=[];for(const r in n){const l=n[r];l!=null&&(l===!1?t.removeAttribute(r):t.setAttribute(r,l),s.push(r))}s.length?t.setAttribute(br,s.join(",")):t.removeAttribute(br)},rm=(t=window.document,n,o)=>{var s;const r=t.head;let l=r.querySelector(`meta[name="${fc}"]`);const a=l?Number(l.getAttribute("content")):0,c=[];if(l)for(let p=0,u=l.previousElementSibling;p<a;p++,u=(u==null?void 0:u.previousElementSibling)||null)((s=u==null?void 0:u.tagName)==null?void 0:s.toLowerCase())===n&&c.push(u);else l=t.createElement("meta"),l.setAttribute("name",fc),l.setAttribute("content","0"),r.append(l);let i=o.map(p=>Xy(p.tag,p.props,t));i=i.filter(p=>{for(let u=0;u<c.length;u++){const f=c[u];if(em(f,p))return c.splice(u,1),!1}return!0}),c.forEach(p=>{var u;return(u=p.parentNode)==null?void 0:u.removeChild(p)}),i.forEach(p=>{r.insertBefore(p,l)}),l.setAttribute("content",""+(a-c.length+i.length))},lm=()=>{let t=[],n=new Set;const o={install(s){s.config.globalProperties.$head=o,s.provide(Op,o)},get headTags(){const s=[];return t.forEach(r=>{sm(r.value).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const c=tm(a.props);if(c){let i=-1;for(let p=0;p<s.length;p++){const u=s[p],f=u.props[c.name],d=a.props[c.name];if(u.tag===a.tag&&f===d){i=p;break}}i!==-1&&s.splice(i,1)}}s.push(a)})}),s},addHeadObjs(s){t.push(s)},removeHeadObjs(s){t=t.filter(r=>r!==s)},updateDOM(s=window.document){let r,l={},a={};const c={};for(const p of o.headTags){if(p.tag==="title"){r=p.props.children;continue}if(p.tag==="htmlAttrs"){Object.assign(l,p.props);continue}if(p.tag==="bodyAttrs"){Object.assign(a,p.props);continue}c[p.tag]=c[p.tag]||[],c[p.tag].push(p)}r!==void 0&&(s.title=r),yc(s.documentElement,l),yc(s.body,a);const i=new Set([...Object.keys(c),...n]);for(const p of i)rm(s,p,c[p]||[]);n.clear(),Object.keys(c).forEach(p=>n.add(p))}};return o},am=typeof window!="undefined",cm=t=>{const n=H(t),o=nm();o.addHeadObjs(n),am&&(Xs(()=>{o.updateDOM()}),tr(()=>{o.removeHeadObjs(n),o.updateDOM()}))};const vs=Symbol("v-click-clicks"),jn=Symbol("v-click-clicks-elements"),cl=Symbol("v-click-clicks-order-map"),Ds=Symbol("v-click-clicks-disabled"),$p=Symbol("slidev-slide-scale"),Z=Symbol("slidev-slidev-context"),im=Symbol("slidev-route"),pm=Symbol("slidev-slide-context"),$n="slidev-vclick-target",Er="slidev-vclick-hidden",um="slidev-vclick-fade",wr="slidev-vclick-hidden-explicitly",fo="slidev-vclick-current",us="slidev-vclick-prior";function dm(t){return t=t||[],Array.isArray(t)?t:[t]}function mc(t,n){if(!t)return!1;const o=t.indexOf(n);return o>=0?(t.splice(o,1),!0):!1}function fm(t){return t!=null}function ym(t,n){return Object.fromEntries(Object.entries(t).map(([o,s])=>n(o,s)).filter(fm))}var Dn={theme:"default",title:"Tackling the hardest problems in JavaScript",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:1024,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev"};const Be=Dn;var Oi;const sn=(Oi=Be.aspectRatio)!=null?Oi:16/9;var $i;const En=($i=Be.canvasWidth)!=null?$i:980,Mp=Math.round(En/sn),Fp=k(()=>ym(Be.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function Ct(t,n,o){Object.defineProperty(t,n,{value:o,writable:!0,enumerable:!1})}const Sn=Me({page:0,clicks:0});let mm=[],hm=[];Ct(Sn,"$syncUp",!0);Ct(Sn,"$syncDown",!0);Ct(Sn,"$paused",!1);Ct(Sn,"$onSet",t=>mm.push(t));Ct(Sn,"$onPatch",t=>hm.push(t));Ct(Sn,"$patch",async()=>!1);function Lp(t,n,o=!1){const s=[];let r=!1,l=!1,a,c;const i=Me(n);function p(y){s.push(y)}function u(y,h){clearTimeout(a),r=!0,i[y]=h,a=setTimeout(()=>r=!1,0)}function f(y){r||(clearTimeout(c),l=!0,Object.entries(y).forEach(([h,B])=>{i[h]=B}),c=setTimeout(()=>l=!1,0))}function d(y){let h;o?o&&window.addEventListener("storage",D=>{D&&D.key===y&&D.newValue&&f(JSON.parse(D.newValue))}):(h=new BroadcastChannel(y),h.addEventListener("message",D=>f(D.data)));function B(){!o&&h&&!l?h.postMessage(Ae(i)):o&&!l&&window.localStorage.setItem(y,JSON.stringify(i)),r||s.forEach(D=>D(i))}if(ce(i,B,{deep:!0}),o){const D=window.localStorage.getItem(y);D&&f(JSON.parse(D))}}return{init:d,onPatch:p,patch:u,state:i}}const{init:gm,onPatch:vm,patch:hc,state:_r}=Lp(Sn,{page:1,clicks:0}),Rn=Me({});let Dm=[],Am=[];Ct(Rn,"$syncUp",!0);Ct(Rn,"$syncDown",!0);Ct(Rn,"$paused",!1);Ct(Rn,"$onSet",t=>Dm.push(t));Ct(Rn,"$onPatch",t=>Am.push(t));Ct(Rn,"$patch",async()=>!1);const{init:Bm,onPatch:Cm,patch:Ip,state:Ps}=Lp(Rn,{},!1),bm="modulepreload",gc={},Em="/workers-conf-2022/",ro=function(n,o){return!o||o.length===0?n():Promise.all(o.map(s=>{if(s=`${Em}${s}`,s in gc)return;gc[s]=!0;const r=s.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":bm,r||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),r)return new Promise((c,i)=>{a.addEventListener("load",c),a.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n())};function st(t,n,o){return Array.isArray(t)?(t.length=Math.max(t.length,n),t.splice(n,1,o),o):(t[n]=o,o)}function wm(t,n){if(Array.isArray(t)){t.splice(n,1);return}delete t[n]}function un(t){return jd()?(Nd(t),!0):!1}function He(...t){return k(()=>t.every(n=>v(n)))}function ct(t){return k(()=>!v(t))}function _m(t){if(!De(t))return Me(t);const n=new Proxy({},{get(o,s,r){return v(Reflect.get(t.value,s,r))},set(o,s,r){return De(t.value[s])&&!De(r)?t.value[s].value=r:t.value[s]=r,!0},deleteProperty(o,s){return Reflect.deleteProperty(t.value,s)},has(o,s){return Reflect.has(t.value,s)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Me(n)}var vc;const Bt=typeof window!="undefined",xm=t=>typeof t!="undefined",km=Object.prototype.toString,Tm=t=>typeof t=="number",Hp=t=>typeof t=="string",Os=t=>km.call(t)==="[object Object]",il=()=>+Date.now(),rn=()=>{};Bt&&((vc=window==null?void 0:window.navigator)==null?void 0:vc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Sm(t,n){function o(...s){t(()=>n.apply(this,s),{fn:n,thisArg:this,args:s})}return o}const jp=t=>t();function Rm(t=jp){const n=H(!0);function o(){n.value=!1}function s(){n.value=!0}return{isActive:n,pause:o,resume:s,eventFilter:(...l)=>{n.value&&t(...l)}}}function Pm(t,n){var o;if(typeof t=="number")return t+n;const s=((o=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",r=t.slice(s.length),l=parseFloat(s)+n;return Number.isNaN(l)?t:l+r}var Om=Object.defineProperty,$m=Object.defineProperties,Mm=Object.getOwnPropertyDescriptors,Dc=Object.getOwnPropertySymbols,Fm=Object.prototype.hasOwnProperty,Lm=Object.prototype.propertyIsEnumerable,Ac=(t,n,o)=>n in t?Om(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Im=(t,n)=>{for(var o in n||(n={}))Fm.call(n,o)&&Ac(t,o,n[o]);if(Dc)for(var o of Dc(n))Lm.call(n,o)&&Ac(t,o,n[o]);return t},Hm=(t,n)=>$m(t,Mm(n));function jm(t){if(!De(t))return Df(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const o in t.value)n[o]=vf(()=>({get(){return t.value[o]},set(s){if(Array.isArray(t.value)){const r=[...t.value];r[o]=s,t.value=r}else{const r=Hm(Im({},t.value),{[o]:s});Object.setPrototypeOf(r,t.value),t.value=r}}}));return n}function Nm(t,n=!0){so()?yp(t):n?t():Ve(t)}function qm(t,n=!0){so()?Yo(t):n?t():Ve(t)}function oa(t){so()&&Ql(t)}function Jm(t,n=1e3,o={}){const{immediate:s=!0,immediateCallback:r=!1}=o;let l=null;const a=H(!1);function c(){l&&(clearInterval(l),l=null)}function i(){a.value=!1,c()}function p(){v(n)<=0||(a.value=!0,r&&t(),c(),l=setInterval(t,v(n)))}if(s&&Bt&&p(),De(n)){const u=ce(n,()=>{s&&Bt&&p()});un(u)}return un(i),{isActive:a,pause:i,resume:p}}function Np(t=!1,n={}){const{truthyValue:o=!0,falsyValue:s=!1}=n,r=De(t),l=H(t);function a(c){return arguments.length?(l.value=c,l.value):(l.value=l.value===v(o)?v(s):v(o),l.value)}return r?a:[l,a]}var Bc=Object.getOwnPropertySymbols,Wm=Object.prototype.hasOwnProperty,Vm=Object.prototype.propertyIsEnumerable,zm=(t,n)=>{var o={};for(var s in t)Wm.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&Bc)for(var s of Bc(t))n.indexOf(s)<0&&Vm.call(t,s)&&(o[s]=t[s]);return o};function Um(t,n,o={}){const s=o,{eventFilter:r=jp}=s,l=zm(s,["eventFilter"]);return ce(t,Sm(r,n),l)}function Km(t,n,o){const s=ce(t,(...r)=>(Ve(()=>s()),n(...r)),o)}var Gm=Object.defineProperty,Ym=Object.defineProperties,Zm=Object.getOwnPropertyDescriptors,$s=Object.getOwnPropertySymbols,qp=Object.prototype.hasOwnProperty,Jp=Object.prototype.propertyIsEnumerable,Cc=(t,n,o)=>n in t?Gm(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Qm=(t,n)=>{for(var o in n||(n={}))qp.call(n,o)&&Cc(t,o,n[o]);if($s)for(var o of $s(n))Jp.call(n,o)&&Cc(t,o,n[o]);return t},Xm=(t,n)=>Ym(t,Zm(n)),eh=(t,n)=>{var o={};for(var s in t)qp.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&$s)for(var s of $s(t))n.indexOf(s)<0&&Jp.call(t,s)&&(o[s]=t[s]);return o};function th(t,n,o={}){const s=o,{eventFilter:r}=s,l=eh(s,["eventFilter"]),{eventFilter:a,pause:c,resume:i,isActive:p}=Rm(r);return{stop:Um(t,n,Xm(Qm({},l),{eventFilter:a})),pause:c,resume:i,isActive:p}}function rt(t){var n;const o=v(t);return(n=o==null?void 0:o.$el)!=null?n:o}const Ge=Bt?window:void 0,nh=Bt?window.document:void 0;function Oe(...t){let n,o,s,r;if(Hp(t[0])?([o,s,r]=t,n=Ge):[n,o,s,r]=t,!n)return rn;let l=rn;const a=ce(()=>rt(n),i=>{l(),i&&(i.addEventListener(o,s,r),l=()=>{i.removeEventListener(o,s,r),l=rn})},{immediate:!0,flush:"post"}),c=()=>{a(),l()};return un(c),c}function oh(t,n,o={}){const{window:s=Ge,ignore:r,capture:l=!0}=o;if(!s)return;const a=H(!0);let c;const i=f=>{s.clearTimeout(c);const d=rt(t),y=f.composedPath();!d||d===f.target||y.includes(d)||!a.value||r&&r.length>0&&r.some(h=>{const B=rt(h);return B&&(f.target===B||y.includes(B))})||n(f)},p=[Oe(s,"click",i,{passive:!0,capture:l}),Oe(s,"pointerdown",f=>{const d=rt(t);a.value=!!d&&!f.composedPath().includes(d)},{passive:!0}),Oe(s,"pointerup",f=>{c=s.setTimeout(()=>i(f),50)},{passive:!0})];return()=>p.forEach(f=>f())}const sh=t=>typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):t?()=>!0:()=>!1;function rh(t,n,o={}){const{target:s=Ge,eventName:r="keydown",passive:l=!1}=o,a=sh(t);return Oe(s,r,i=>{a(i)&&n(i)},l)}function lh(t={}){const{window:n=Ge}=t,o=H(0);return n&&(Oe(n,"blur",()=>o.value+=1,!0),Oe(n,"focus",()=>o.value+=1,!0)),k(()=>(o.value,n==null?void 0:n.document.activeElement))}function As(t,n={}){const{window:o=Ge}=n,s=Boolean(o&&"matchMedia"in o);let r;const l=H(!1),a=()=>{!s||(r||(r=o.matchMedia(t)),l.value=r.matches)};return Nm(()=>{a(),r&&("addEventListener"in r?r.addEventListener("change",a):r.addListener(a),un(()=>{"removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a)}))}),l}const ah={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var ch=Object.defineProperty,bc=Object.getOwnPropertySymbols,ih=Object.prototype.hasOwnProperty,ph=Object.prototype.propertyIsEnumerable,Ec=(t,n,o)=>n in t?ch(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,uh=(t,n)=>{for(var o in n||(n={}))ih.call(n,o)&&Ec(t,o,n[o]);if(bc)for(var o of bc(n))ph.call(n,o)&&Ec(t,o,n[o]);return t};function dh(t,n={}){function o(c,i){let p=t[c];return i!=null&&(p=Pm(p,i)),typeof p=="number"&&(p=`${p}px`),p}const{window:s=Ge}=n;function r(c){return s?s.matchMedia(c).matches:!1}const l=c=>As(`(min-width: ${o(c)})`,n),a=Object.keys(t).reduce((c,i)=>(Object.defineProperty(c,i,{get:()=>l(i),enumerable:!0,configurable:!0}),c),{});return uh({greater:l,smaller(c){return As(`(max-width: ${o(c,-.1)})`,n)},between(c,i){return As(`(min-width: ${o(c)}) and (max-width: ${o(i,-.1)})`,n)},isGreater(c){return r(`(min-width: ${o(c)})`)},isSmaller(c){return r(`(max-width: ${o(c,-.1)})`)},isInBetween(c,i){return r(`(min-width: ${o(c)}) and (max-width: ${o(i,-.1)})`)}},a)}const pl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ul="__vueuse_ssr_handlers__";pl[ul]=pl[ul]||{};const fh=pl[ul];function yh(t,n){return fh[t]||n}function mh(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}const hh={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function Rt(t,n,o,s={}){var r;const{flush:l="pre",deep:a=!0,listenToStorageChanges:c=!0,writeDefaults:i=!0,shallow:p,window:u=Ge,eventFilter:f,onError:d=P=>{console.error(P)}}=s,y=(p?Ht:H)(n);if(!o)try{o=yh("getDefaultStorage",()=>{var P;return(P=Ge)==null?void 0:P.localStorage})()}catch(P){d(P)}if(!o)return y;const h=v(n),B=mh(h),D=(r=s.serializer)!=null?r:hh[B],{pause:_,resume:C}=th(y,()=>b(y.value),{flush:l,deep:a,eventFilter:f});return u&&c&&Oe(u,"storage",F),F(),y;function b(P){try{P==null?o.removeItem(t):o.setItem(t,D.write(P))}catch(j){d(j)}}function w(P){if(!(P&&P.key!==t)){_();try{const j=P?P.newValue:o.getItem(t);return j==null?(i&&h!==null&&o.setItem(t,D.write(h)),h):typeof j!="string"?j:D.read(j)}catch(j){d(j)}finally{C()}}}function F(P){P&&P.key!==t||(y.value=w(P))}}function gh(t){return As("(prefers-color-scheme: dark)",t)}var vh=Object.defineProperty,Dh=Object.defineProperties,Ah=Object.getOwnPropertyDescriptors,wc=Object.getOwnPropertySymbols,Bh=Object.prototype.hasOwnProperty,Ch=Object.prototype.propertyIsEnumerable,_c=(t,n,o)=>n in t?vh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,bh=(t,n)=>{for(var o in n||(n={}))Bh.call(n,o)&&_c(t,o,n[o]);if(wc)for(var o of wc(n))Ch.call(n,o)&&_c(t,o,n[o]);return t},Eh=(t,n)=>Dh(t,Ah(n));function HE(t,n={}){var o,s;const r=(o=n.draggingElement)!=null?o:Ge,l=H((s=n.initialValue)!=null?s:{x:0,y:0}),a=H(),c=d=>n.pointerTypes?n.pointerTypes.includes(d.pointerType):!0,i=d=>{v(n.preventDefault)&&d.preventDefault(),v(n.stopPropagation)&&d.stopPropagation()},p=d=>{var y;if(!c(d)||v(n.exact)&&d.target!==v(t))return;const h=v(t).getBoundingClientRect(),B={x:d.pageX-h.left,y:d.pageY-h.top};((y=n.onStart)==null?void 0:y.call(n,B,d))!==!1&&(a.value=B,i(d))},u=d=>{var y;!c(d)||!a.value||(l.value={x:d.pageX-a.value.x,y:d.pageY-a.value.y},(y=n.onMove)==null||y.call(n,l.value,d),i(d))},f=d=>{var y;!c(d)||!a.value||(a.value=void 0,(y=n.onEnd)==null||y.call(n,l.value,d),i(d))};return Bt&&(Oe(t,"pointerdown",p,!0),Oe(r,"pointermove",u,!0),Oe(r,"pointerup",f,!0)),Eh(bh({},jm(l)),{position:l,isDragging:k(()=>!!a.value),style:k(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var xc=Object.getOwnPropertySymbols,wh=Object.prototype.hasOwnProperty,_h=Object.prototype.propertyIsEnumerable,xh=(t,n)=>{var o={};for(var s in t)wh.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&xc)for(var s of xc(t))n.indexOf(s)<0&&_h.call(t,s)&&(o[s]=t[s]);return o};function kh(t,n,o={}){const s=o,{window:r=Ge}=s,l=xh(s,["window"]);let a;const c=r&&"ResizeObserver"in r,i=()=>{a&&(a.disconnect(),a=void 0)},p=ce(()=>rt(t),f=>{i(),c&&r&&f&&(a=new ResizeObserver(n),a.observe(f,l))},{immediate:!0,flush:"post"}),u=()=>{i(),p()};return un(u),{isSupported:c,stop:u}}function Wp(t,n={}){const{immediate:o=!0,window:s=Ge}=n,r=H(!1);let l=null;function a(){!r.value||!s||(t(),l=s.requestAnimationFrame(a))}function c(){!r.value&&s&&(r.value=!0,a())}function i(){r.value=!1,l!=null&&s&&(s.cancelAnimationFrame(l),l=null)}return o&&c(),un(i),{isActive:r,pause:i,resume:c}}function Th(t,n={width:0,height:0},o={}){const s=H(n.width),r=H(n.height);return kh(t,([l])=>{s.value=l.contentRect.width,r.value=l.contentRect.height},o),ce(()=>rt(t),l=>{s.value=l?n.width:0,r.value=l?n.height:0}),{width:s,height:r}}const kc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Sh(t,n={}){const{document:o=nh,autoExit:s=!1}=n,r=t||(o==null?void 0:o.querySelector("html")),l=H(!1);let a=!1,c=kc[0];if(!o)a=!1;else for(const B of kc)if(B[1]in o){c=B,a=!0;break}const[i,p,u,,f]=c;async function d(){!a||(o!=null&&o[u]&&await o[p](),l.value=!1)}async function y(){if(!a)return;await d();const B=rt(r);B&&(await B[i](),l.value=!0)}async function h(){l.value?await d():await y()}return o&&Oe(o,f,()=>{l.value=!!(o!=null&&o[u])},!1),s&&un(d),{isSupported:a,isFullscreen:l,enter:y,exit:d,toggle:h}}function Rh(t,n,o={}){const{root:s,rootMargin:r="0px",threshold:l=.1,window:a=Ge}=o,c=a&&"IntersectionObserver"in a;let i=rn;const p=c?ce(()=>({el:rt(t),root:rt(s)}),({el:f,root:d})=>{if(i(),!f)return;const y=new IntersectionObserver(n,{root:d,rootMargin:r,threshold:l});y.observe(f),i=()=>{y.disconnect(),i=rn}},{immediate:!0,flush:"post"}):rn,u=()=>{i(),p()};return un(u),{isSupported:c,stop:u}}const Ph={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Oh(t={}){const{reactive:n=!1,target:o=Ge,aliasMap:s=Ph,passive:r=!0,onEventFired:l=rn}=t,a=Me(new Set),c={toJSON(){return{}},current:a},i=n?Me(c):c,p=new Set;function u(y,h){y in i&&(n?i[y]=h:i[y].value=h)}function f(y,h){var B,D;const _=(B=y.key)==null?void 0:B.toLowerCase(),C=(D=y.code)==null?void 0:D.toLowerCase(),b=[C,_].filter(Boolean);C&&(h?a.add(y.code):a.delete(y.code));for(const w of b)u(w,h);_==="meta"&&!h?(p.forEach(w=>{a.delete(w),u(w,!1)}),p.clear()):y.getModifierState("Meta")&&h&&[...a,...b].forEach(w=>p.add(w))}o&&(Oe(o,"keydown",y=>(f(y,!0),l(y)),{passive:r}),Oe(o,"keyup",y=>(f(y,!1),l(y)),{passive:r}));const d=new Proxy(i,{get(y,h,B){if(typeof h!="string")return Reflect.get(y,h,B);if(h=h.toLowerCase(),h in s&&(h=s[h]),!(h in i))if(/[+_-]/.test(h)){const _=h.split(/[+_-]/g).map(C=>C.trim());i[h]=k(()=>_.every(C=>v(d[C])))}else i[h]=H(!1);const D=Reflect.get(y,h,B);return n?v(D):D}});return d}function jE(t={}){const{type:n="page",touch:o=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:l=Ge,eventFilter:a}=t,c=H(r.x),i=H(r.y),p=H(null),u=B=>{n==="page"?(c.value=B.pageX,i.value=B.pageY):n==="client"&&(c.value=B.clientX,i.value=B.clientY),p.value="mouse"},f=()=>{c.value=r.x,i.value=r.y},d=B=>{if(B.touches.length>0){const D=B.touches[0];n==="page"?(c.value=D.pageX,i.value=D.pageY):n==="client"&&(c.value=D.clientX,i.value=D.clientY),p.value="touch"}},y=B=>a===void 0?u(B):a(()=>u(B),{}),h=B=>a===void 0?d(B):a(()=>d(B),{});return l&&(Oe(l,"mousemove",y,{passive:!0}),Oe(l,"dragover",y,{passive:!0}),o&&(Oe(l,"touchstart",h,{passive:!0}),Oe(l,"touchmove",h,{passive:!0}),s&&Oe(l,"touchend",f,{passive:!0}))),{x:c,y:i,sourceType:p}}var Wt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Wt||(Wt={}));function $h(t,n={}){const o=H(t),{threshold:s=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:a}=n,c=Me({x:0,y:0}),i=(P,j)=>{c.x=P,c.y=j},p=Me({x:0,y:0}),u=(P,j)=>{p.x=P,p.y=j},f=k(()=>c.x-p.x),d=k(()=>c.y-p.y),{max:y,abs:h}=Math,B=k(()=>y(h(f.value),h(d.value))>=s),D=H(!1),_=H(!1),C=k(()=>B.value?h(f.value)>h(d.value)?f.value>0?Wt.LEFT:Wt.RIGHT:d.value>0?Wt.UP:Wt.DOWN:Wt.NONE),b=P=>n.pointerTypes?n.pointerTypes.includes(P.pointerType):!0,w=[Oe(t,"pointerdown",P=>{var j,se;if(!b(P))return;_.value=!0,(se=(j=o.value)==null?void 0:j.style)==null||se.setProperty("touch-action","none");const ie=P.target;ie==null||ie.setPointerCapture(P.pointerId);const{clientX:de,clientY:me}=P;i(de,me),u(de,me),a==null||a(P)}),Oe(t,"pointermove",P=>{if(!b(P)||!_.value)return;const{clientX:j,clientY:se}=P;u(j,se),!D.value&&B.value&&(D.value=!0),D.value&&(r==null||r(P))}),Oe(t,"pointerup",P=>{var j,se;!b(P)||(D.value&&(l==null||l(P,C.value)),_.value=!1,D.value=!1,(se=(j=o.value)==null?void 0:j.style)==null||se.setProperty("touch-action","initial"))})],F=()=>w.forEach(P=>P());return{isSwiping:qn(D),direction:qn(C),posStart:qn(c),posEnd:qn(p),distanceX:f,distanceY:d,stop:F}}var Mh=Object.defineProperty,Tc=Object.getOwnPropertySymbols,Fh=Object.prototype.hasOwnProperty,Lh=Object.prototype.propertyIsEnumerable,Sc=(t,n,o)=>n in t?Mh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Ih=(t,n)=>{for(var o in n||(n={}))Fh.call(n,o)&&Sc(t,o,n[o]);if(Tc)for(var o of Tc(n))Lh.call(n,o)&&Sc(t,o,n[o]);return t};function NE(t={}){const{controls:n=!1,offset:o=0,immediate:s=!0,interval:r="requestAnimationFrame"}=t,l=H(il()+o),a=()=>l.value=il()+o,c=r==="requestAnimationFrame"?Wp(a,{immediate:s}):Jm(a,r,{immediate:s});return n?Ih({timestamp:l},c):l}function Ft(t,n,o,s={}){var r;const{passive:l=!1,eventName:a,deep:c=!1,defaultValue:i}=s,p=so(),u=o||(p==null?void 0:p.emit)||((r=p==null?void 0:p.$emit)==null?void 0:r.bind(p));let f=a;n||(n="modelValue"),f=a||f||`update:${n.toString()}`;const d=()=>xm(t[n])?t[n]:i;if(l){const y=H(d());return ce(()=>t[n],h=>y.value=h),ce(y,h=>{(h!==t[n]||c)&&u(f,h)},{deep:c}),y}else return k({get(){return d()},set(y){u(f,y)}})}function qE({window:t=Ge}={}){if(!t)return H(!1);const n=H(t.document.hasFocus());return Oe(t,"blur",()=>{n.value=!1}),Oe(t,"focus",()=>{n.value=!0}),n}function Hh({window:t=Ge,initialWidth:n=1/0,initialHeight:o=1/0}={}){const s=H(n),r=H(o),l=()=>{t&&(s.value=t.innerWidth,r.value=t.innerHeight)};return l(),qm(l),Oe("resize",l,{passive:!0}),{width:s,height:r}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",lo=t=>Vp?Symbol(t):"_vr_"+t,jh=lo("rvlm"),Rc=lo("rvd"),sa=lo("r"),zp=lo("rl"),dl=lo("rvl"),Nn=typeof window!="undefined";function Nh(t){return t.__esModule||Vp&&t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function xr(t,n){const o={};for(const s in n){const r=n[s];o[s]=Array.isArray(r)?r.map(t):t(r)}return o}const xo=()=>{},qh=/\/$/,Jh=t=>t.replace(qh,"");function kr(t,n,o="/"){let s,r={},l="",a="";const c=n.indexOf("?"),i=n.indexOf("#",c>-1?c:0);return c>-1&&(s=n.slice(0,c),l=n.slice(c+1,i>-1?i:n.length),r=t(l)),i>-1&&(s=s||n.slice(0,i),a=n.slice(i,n.length)),s=Uh(s!=null?s:n,o),{fullPath:s+(l&&"?")+l+a,path:s,query:r,hash:a}}function Wh(t,n){const o=n.query?t(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function Pc(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Vh(t,n,o){const s=n.matched.length-1,r=o.matched.length-1;return s>-1&&s===r&&Xn(n.matched[s],o.matched[r])&&Up(n.params,o.params)&&t(n.query)===t(o.query)&&n.hash===o.hash}function Xn(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Up(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const o in t)if(!zh(t[o],n[o]))return!1;return!0}function zh(t,n){return Array.isArray(t)?Oc(t,n):Array.isArray(n)?Oc(n,t):t===n}function Oc(t,n){return Array.isArray(n)?t.length===n.length&&t.every((o,s)=>o===n[s]):t.length===1&&t[0]===n}function Uh(t,n){if(t.startsWith("/"))return t;if(!t)return n;const o=n.split("/"),s=t.split("/");let r=o.length-1,l,a;for(l=0;l<s.length;l++)if(a=s[l],!(r===1||a==="."))if(a==="..")r--;else break;return o.slice(0,r).join("/")+"/"+s.slice(l-(l===s.length?1:0)).join("/")}var qo;(function(t){t.pop="pop",t.push="push"})(qo||(qo={}));var ko;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ko||(ko={}));function Kh(t){if(!t)if(Nn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jh(t)}const Gh=/^[^#]+#/;function Yh(t,n){return t.replace(Gh,"#")+n}function Zh(t,n){const o=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:n.behavior,left:s.left-o.left-(n.left||0),top:s.top-o.top-(n.top||0)}}const rr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qh(t){let n;if("el"in t){const o=t.el,s=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?s?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=Zh(r,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function $c(t,n){return(history.state?history.state.position-n:-1)+t}const fl=new Map;function Xh(t,n){fl.set(t,n)}function e5(t){const n=fl.get(t);return fl.delete(t),n}let t5=()=>location.protocol+"//"+location.host;function Kp(t,n){const{pathname:o,search:s,hash:r}=n,l=t.indexOf("#");if(l>-1){let c=r.includes(t.slice(l))?t.slice(l).length:1,i=r.slice(c);return i[0]!=="/"&&(i="/"+i),Pc(i,"")}return Pc(o,t)+s+r}function n5(t,n,o,s){let r=[],l=[],a=null;const c=({state:d})=>{const y=Kp(t,location),h=o.value,B=n.value;let D=0;if(d){if(o.value=y,n.value=d,a&&a===h){a=null;return}D=B?d.position-B.position:0}else s(y);r.forEach(_=>{_(o.value,h,{delta:D,type:qo.pop,direction:D?D>0?ko.forward:ko.back:ko.unknown})})};function i(){a=o.value}function p(d){r.push(d);const y=()=>{const h=r.indexOf(d);h>-1&&r.splice(h,1)};return l.push(y),y}function u(){const{history:d}=window;!d.state||d.replaceState(Te({},d.state,{scroll:rr()}),"")}function f(){for(const d of l)d();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:p,destroy:f}}function Mc(t,n,o,s=!1,r=!1){return{back:t,current:n,forward:o,replaced:s,position:window.history.length,scroll:r?rr():null}}function o5(t){const{history:n,location:o}=window,s={value:Kp(t,o)},r={value:n.state};r.value||l(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(i,p,u){const f=t.indexOf("#"),d=f>-1?(o.host&&document.querySelector("base")?t:t.slice(f))+i:t5()+t+i;try{n[u?"replaceState":"pushState"](p,"",d),r.value=p}catch(y){console.error(y),o[u?"replace":"assign"](d)}}function a(i,p){const u=Te({},n.state,Mc(r.value.back,i,r.value.forward,!0),p,{position:r.value.position});l(i,u,!0),s.value=i}function c(i,p){const u=Te({},r.value,n.state,{forward:i,scroll:rr()});l(u.current,u,!0);const f=Te({},Mc(s.value,i,null),{position:u.position+1},p);l(i,f,!1),s.value=i}return{location:s,state:r,push:c,replace:a}}function s5(t){t=Kh(t);const n=o5(t),o=n5(t,n.state,n.location,n.replace);function s(l,a=!0){a||o.pauseListeners(),history.go(l)}const r=Te({location:"",base:t,go:s,createHref:Yh.bind(null,t)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function r5(t){return typeof t=="string"||t&&typeof t=="object"}function Gp(t){return typeof t=="string"||typeof t=="symbol"}const Yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yp=lo("nf");var Fc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fc||(Fc={}));function eo(t,n){return Te(new Error,{type:t,[Yp]:!0},n)}function Zt(t,n){return t instanceof Error&&Yp in t&&(n==null||!!(t.type&n))}const Lc="[^/]+?",l5={sensitive:!1,strict:!1,start:!0,end:!0},a5=/[.+*?^${}()[\]/\\]/g;function c5(t,n){const o=Te({},l5,n),s=[];let r=o.start?"^":"";const l=[];for(const p of t){const u=p.length?[]:[90];o.strict&&!p.length&&(r+="/");for(let f=0;f<p.length;f++){const d=p[f];let y=40+(o.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(a5,"\\$&"),y+=40;else if(d.type===1){const{value:h,repeatable:B,optional:D,regexp:_}=d;l.push({name:h,repeatable:B,optional:D});const C=_||Lc;if(C!==Lc){y+=10;try{new RegExp(`(${C})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${h}" (${C}): `+w.message)}}let b=B?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(b=D&&p.length<2?`(?:/${b})`:"/"+b),D&&(b+="?"),r+=b,y+=20,D&&(y+=-8),B&&(y+=-20),C===".*"&&(y+=-50)}u.push(y)}s.push(u)}if(o.strict&&o.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}o.strict||(r+="/?"),o.end?r+="$":o.strict&&(r+="(?:/|$)");const a=new RegExp(r,o.sensitive?"":"i");function c(p){const u=p.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const y=u[d]||"",h=l[d-1];f[h.name]=y&&h.repeatable?y.split("/"):y}return f}function i(p){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const y of d)if(y.type===0)u+=y.value;else if(y.type===1){const{value:h,repeatable:B,optional:D}=y,_=h in p?p[h]:"";if(Array.isArray(_)&&!B)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const C=Array.isArray(_)?_.join("/"):_;if(!C)if(D)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);u+=C}}return u}return{re:a,score:s,keys:l,parse:c,stringify:i}}function i5(t,n){let o=0;for(;o<t.length&&o<n.length;){const s=n[o]-t[o];if(s)return s;o++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function p5(t,n){let o=0;const s=t.score,r=n.score;for(;o<s.length&&o<r.length;){const l=i5(s[o],r[o]);if(l)return l;o++}return r.length-s.length}const u5={type:0,value:""},d5=/[a-zA-Z0-9_]/;function f5(t){if(!t)return[[]];if(t==="/")return[[u5]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(y){throw new Error(`ERR (${o})/"${p}": ${y}`)}let o=0,s=o;const r=[];let l;function a(){l&&r.push(l),l=[]}let c=0,i,p="",u="";function f(){!p||(o===0?l.push({type:0,value:p}):o===1||o===2||o===3?(l.length>1&&(i==="*"||i==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):n("Invalid state to consume buffer"),p="")}function d(){p+=i}for(;c<t.length;){if(i=t[c++],i==="\\"&&o!==2){s=o,o=4;continue}switch(o){case 0:i==="/"?(p&&f(),a()):i===":"?(f(),o=1):d();break;case 4:d(),o=s;break;case 1:i==="("?o=2:d5.test(i)?d():(f(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&c--);break;case 2:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:o=3:u+=i;break;case 3:f(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&c--,u="";break;default:n("Unknown state");break}}return o===2&&n(`Unfinished custom RegExp for param "${p}"`),f(),a(),r}function y5(t,n,o){const s=c5(f5(t.path),o),r=Te(s,{record:t,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function m5(t,n){const o=[],s=new Map;n=Hc({strict:!1,end:!0,sensitive:!1},n);function r(u){return s.get(u)}function l(u,f,d){const y=!d,h=g5(u);h.aliasOf=d&&d.record;const B=Hc(n,u),D=[h];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of b)D.push(Te({},h,{components:d?d.record.components:h.components,path:w,aliasOf:d?d.record:h}))}let _,C;for(const b of D){const{path:w}=b;if(f&&w[0]!=="/"){const F=f.record.path,P=F[F.length-1]==="/"?"":"/";b.path=f.record.path+(w&&P+w)}if(_=y5(b,f,B),d?d.alias.push(_):(C=C||_,C!==_&&C.alias.push(_),y&&u.name&&!Ic(_)&&a(u.name)),"children"in h){const F=h.children;for(let P=0;P<F.length;P++)l(F[P],_,d&&d.children[P])}d=d||_,i(_)}return C?()=>{a(C)}:xo}function a(u){if(Gp(u)){const f=s.get(u);f&&(s.delete(u),o.splice(o.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=o.indexOf(u);f>-1&&(o.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function c(){return o}function i(u){let f=0;for(;f<o.length&&p5(u,o[f])>=0&&(u.record.path!==o[f].record.path||!Zp(u,o[f]));)f++;o.splice(f,0,u),u.record.name&&!Ic(u)&&s.set(u.record.name,u)}function p(u,f){let d,y={},h,B;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw eo(1,{location:u});B=d.record.name,y=Te(h5(f.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params),h=d.stringify(y)}else if("path"in u)h=u.path,d=o.find(C=>C.re.test(h)),d&&(y=d.parse(h),B=d.record.name);else{if(d=f.name?s.get(f.name):o.find(C=>C.re.test(f.path)),!d)throw eo(1,{location:u,currentLocation:f});B=d.record.name,y=Te({},f.params,u.params),h=d.stringify(y)}const D=[];let _=d;for(;_;)D.unshift(_.record),_=_.parent;return{name:B,path:h,params:y,matched:D,meta:D5(D)}}return t.forEach(u=>l(u)),{addRoute:l,resolve:p,removeRoute:a,getRoutes:c,getRecordMatcher:r}}function h5(t,n){const o={};for(const s of n)s in t&&(o[s]=t[s]);return o}function g5(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:v5(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function v5(t){const n={},o=t.props||!1;if("component"in t)n.default=o;else for(const s in t.components)n[s]=typeof o=="boolean"?o:o[s];return n}function Ic(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function D5(t){return t.reduce((n,o)=>Te(n,o.meta),{})}function Hc(t,n){const o={};for(const s in t)o[s]=s in n?n[s]:t[s];return o}function Zp(t,n){return n.children.some(o=>o===t||Zp(t,o))}const Qp=/#/g,A5=/&/g,B5=/\//g,C5=/=/g,b5=/\?/g,Xp=/\+/g,E5=/%5B/g,w5=/%5D/g,eu=/%5E/g,_5=/%60/g,tu=/%7B/g,x5=/%7C/g,nu=/%7D/g,k5=/%20/g;function ra(t){return encodeURI(""+t).replace(x5,"|").replace(E5,"[").replace(w5,"]")}function T5(t){return ra(t).replace(tu,"{").replace(nu,"}").replace(eu,"^")}function yl(t){return ra(t).replace(Xp,"%2B").replace(k5,"+").replace(Qp,"%23").replace(A5,"%26").replace(_5,"`").replace(tu,"{").replace(nu,"}").replace(eu,"^")}function S5(t){return yl(t).replace(C5,"%3D")}function R5(t){return ra(t).replace(Qp,"%23").replace(b5,"%3F")}function P5(t){return t==null?"":R5(t).replace(B5,"%2F")}function Ms(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function O5(t){const n={};if(t===""||t==="?")return n;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const l=s[r].replace(Xp," "),a=l.indexOf("="),c=Ms(a<0?l:l.slice(0,a)),i=a<0?null:Ms(l.slice(a+1));if(c in n){let p=n[c];Array.isArray(p)||(p=n[c]=[p]),p.push(i)}else n[c]=i}return n}function jc(t){let n="";for(let o in t){const s=t[o];if(o=S5(o),s==null){s!==void 0&&(n+=(n.length?"&":"")+o);continue}(Array.isArray(s)?s.map(l=>l&&yl(l)):[s&&yl(s)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+o,l!=null&&(n+="="+l))})}return n}function $5(t){const n={};for(const o in t){const s=t[o];s!==void 0&&(n[o]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return n}function yo(){let t=[];function n(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function o(){t=[]}return{add:n,list:()=>t,reset:o}}function en(t,n,o,s,r){const l=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const i=f=>{f===!1?c(eo(4,{from:o,to:n})):f instanceof Error?c(f):r5(f)?c(eo(2,{from:n,to:f})):(l&&s.enterCallbacks[r]===l&&typeof f=="function"&&l.push(f),a())},p=t.call(s&&s.instances[r],n,o,i);let u=Promise.resolve(p);t.length<3&&(u=u.then(i)),u.catch(f=>c(f))})}function Tr(t,n,o,s){const r=[];for(const l of t)for(const a in l.components){let c=l.components[a];if(!(n!=="beforeRouteEnter"&&!l.instances[a]))if(M5(c)){const p=(c.__vccOpts||c)[n];p&&r.push(en(p,o,s,l,a))}else{let i=c();r.push(()=>i.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${l.path}"`));const u=Nh(p)?p.default:p;l.components[a]=u;const d=(u.__vccOpts||u)[n];return d&&en(d,o,s,l,a)()}))}}return r}function M5(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nc(t){const n=q(sa),o=q(zp),s=k(()=>n.resolve(v(t.to))),r=k(()=>{const{matched:i}=s.value,{length:p}=i,u=i[p-1],f=o.matched;if(!u||!f.length)return-1;const d=f.findIndex(Xn.bind(null,u));if(d>-1)return d;const y=qc(i[p-2]);return p>1&&qc(u)===y&&f[f.length-1].path!==y?f.findIndex(Xn.bind(null,i[p-2])):d}),l=k(()=>r.value>-1&&H5(o.params,s.value.params)),a=k(()=>r.value>-1&&r.value===o.matched.length-1&&Up(o.params,s.value.params));function c(i={}){return I5(i)?n[v(t.replace)?"replace":"push"](v(t.to)).catch(xo):Promise.resolve()}return{route:s,href:k(()=>s.value.href),isActive:l,isExactActive:a,navigate:c}}const F5=we({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nc,setup(t,{slots:n}){const o=Me(Nc(t)),{options:s}=q(sa),r=k(()=>({[Jc(t.activeClass,s.linkActiveClass,"router-link-active")]:o.isActive,[Jc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const l=n.default&&n.default(o);return t.custom?l:ft("a",{"aria-current":o.isExactActive?t.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},l)}}}),L5=F5;function I5(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function H5(t,n){for(const o in n){const s=n[o],r=t[o];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((l,a)=>l!==r[a]))return!1}return!0}function qc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jc=(t,n,o)=>t!=null?t:n!=null?n:o,j5=we({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:o}){const s=q(dl),r=k(()=>t.route||s.value),l=q(Rc,0),a=k(()=>r.value.matched[l]);ut(Rc,l+1),ut(jh,a),ut(dl,r);const c=H();return ce(()=>[c.value,a.value,t.name],([i,p,u],[f,d,y])=>{p&&(p.instances[u]=i,d&&d!==p&&i&&i===f&&(p.leaveGuards.size||(p.leaveGuards=d.leaveGuards),p.updateGuards.size||(p.updateGuards=d.updateGuards))),i&&p&&(!d||!Xn(p,d)||!f)&&(p.enterCallbacks[u]||[]).forEach(h=>h(i))},{flush:"post"}),()=>{const i=r.value,p=a.value,u=p&&p.components[t.name],f=t.name;if(!u)return Wc(o.default,{Component:u,route:i});const d=p.props[t.name],y=d?d===!0?i.params:typeof d=="function"?d(i):d:null,B=ft(u,Te({},y,n,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Wc(o.default,{Component:B,route:i})||B}}});function Wc(t,n){if(!t)return null;const o=t(n);return o.length===1?o[0]:o}const N5=j5;function q5(t){const n=m5(t.routes,t),o=t.parseQuery||O5,s=t.stringifyQuery||jc,r=t.history,l=yo(),a=yo(),c=yo(),i=Ht(Yt);let p=Yt;Nn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xr.bind(null,x=>""+x),f=xr.bind(null,P5),d=xr.bind(null,Ms);function y(x,J){let O,z;return Gp(x)?(O=n.getRecordMatcher(x),z=J):z=x,n.addRoute(z,O)}function h(x){const J=n.getRecordMatcher(x);J&&n.removeRoute(J)}function B(){return n.getRoutes().map(x=>x.record)}function D(x){return!!n.getRecordMatcher(x)}function _(x,J){if(J=Te({},J||i.value),typeof x=="string"){const ae=kr(o,x,J.path),m=n.resolve({path:ae.path},J),g=r.createHref(ae.fullPath);return Te(ae,m,{params:d(m.params),hash:Ms(ae.hash),redirectedFrom:void 0,href:g})}let O;if("path"in x)O=Te({},x,{path:kr(o,x.path,J.path).path});else{const ae=Te({},x.params);for(const m in ae)ae[m]==null&&delete ae[m];O=Te({},x,{params:f(x.params)}),J.params=f(J.params)}const z=n.resolve(O,J),ge=x.hash||"";z.params=u(d(z.params));const Re=Wh(s,Te({},x,{hash:T5(ge),path:z.path})),pe=r.createHref(Re);return Te({fullPath:Re,hash:ge,query:s===jc?$5(x.query):x.query||{}},z,{redirectedFrom:void 0,href:pe})}function C(x){return typeof x=="string"?kr(o,x,i.value.path):Te({},x)}function b(x,J){if(p!==x)return eo(8,{from:J,to:x})}function w(x){return j(x)}function F(x){return w(Te(C(x),{replace:!0}))}function P(x){const J=x.matched[x.matched.length-1];if(J&&J.redirect){const{redirect:O}=J;let z=typeof O=="function"?O(x):O;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=C(z):{path:z},z.params={}),Te({query:x.query,hash:x.hash,params:x.params},z)}}function j(x,J){const O=p=_(x),z=i.value,ge=x.state,Re=x.force,pe=x.replace===!0,ae=P(O);if(ae)return j(Te(C(ae),{state:ge,force:Re,replace:pe}),J||O);const m=O;m.redirectedFrom=J;let g;return!Re&&Vh(s,z,O)&&(g=eo(16,{to:m,from:z}),Pt(z,z,!0,!1)),(g?Promise.resolve(g):ie(m,z)).catch(A=>Zt(A)?Zt(A,2)?A:fe(A):te(A,m,z)).then(A=>{if(A){if(Zt(A,2))return j(Te(C(A.to),{state:ge,force:Re,replace:pe}),J||m)}else A=me(m,z,!0,pe,ge);return de(m,z,A),A})}function se(x,J){const O=b(x,J);return O?Promise.reject(O):Promise.resolve()}function ie(x,J){let O;const[z,ge,Re]=J5(x,J);O=Tr(z.reverse(),"beforeRouteLeave",x,J);for(const ae of z)ae.leaveGuards.forEach(m=>{O.push(en(m,x,J))});const pe=se.bind(null,x,J);return O.push(pe),Mn(O).then(()=>{O=[];for(const ae of l.list())O.push(en(ae,x,J));return O.push(pe),Mn(O)}).then(()=>{O=Tr(ge,"beforeRouteUpdate",x,J);for(const ae of ge)ae.updateGuards.forEach(m=>{O.push(en(m,x,J))});return O.push(pe),Mn(O)}).then(()=>{O=[];for(const ae of x.matched)if(ae.beforeEnter&&!J.matched.includes(ae))if(Array.isArray(ae.beforeEnter))for(const m of ae.beforeEnter)O.push(en(m,x,J));else O.push(en(ae.beforeEnter,x,J));return O.push(pe),Mn(O)}).then(()=>(x.matched.forEach(ae=>ae.enterCallbacks={}),O=Tr(Re,"beforeRouteEnter",x,J),O.push(pe),Mn(O))).then(()=>{O=[];for(const ae of a.list())O.push(en(ae,x,J));return O.push(pe),Mn(O)}).catch(ae=>Zt(ae,8)?ae:Promise.reject(ae))}function de(x,J,O){for(const z of c.list())z(x,J,O)}function me(x,J,O,z,ge){const Re=b(x,J);if(Re)return Re;const pe=J===Yt,ae=Nn?history.state:{};O&&(z||pe?r.replace(x.fullPath,Te({scroll:pe&&ae&&ae.scroll},ge)):r.push(x.fullPath,ge)),i.value=x,Pt(x,J,O,pe),fe()}let $e;function Ie(){$e||($e=r.listen((x,J,O)=>{const z=_(x),ge=P(z);if(ge){j(Te(ge,{replace:!0}),z).catch(xo);return}p=z;const Re=i.value;Nn&&Xh($c(Re.fullPath,O.delta),rr()),ie(z,Re).catch(pe=>Zt(pe,12)?pe:Zt(pe,2)?(j(pe.to,z).then(ae=>{Zt(ae,20)&&!O.delta&&O.type===qo.pop&&r.go(-1,!1)}).catch(xo),Promise.reject()):(O.delta&&r.go(-O.delta,!1),te(pe,z,Re))).then(pe=>{pe=pe||me(z,Re,!1),pe&&(O.delta?r.go(-O.delta,!1):O.type===qo.pop&&Zt(pe,20)&&r.go(-1,!1)),de(z,Re,pe)}).catch(xo)}))}let Ue=yo(),_e=yo(),X;function te(x,J,O){fe(x);const z=_e.list();return z.length?z.forEach(ge=>ge(x,J,O)):console.error(x),Promise.reject(x)}function Q(){return X&&i.value!==Yt?Promise.resolve():new Promise((x,J)=>{Ue.add([x,J])})}function fe(x){return X||(X=!x,Ie(),Ue.list().forEach(([J,O])=>x?O(x):J()),Ue.reset()),x}function Pt(x,J,O,z){const{scrollBehavior:ge}=t;if(!Nn||!ge)return Promise.resolve();const Re=!O&&e5($c(x.fullPath,0))||(z||!O)&&history.state&&history.state.scroll||null;return Ve().then(()=>ge(x,J,Re)).then(pe=>pe&&Qh(pe)).catch(pe=>te(pe,x,J))}const Ye=x=>r.go(x);let gt;const ot=new Set;return{currentRoute:i,addRoute:y,removeRoute:h,hasRoute:D,getRoutes:B,resolve:_,options:t,push:w,replace:F,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:l.add,beforeResolve:a.add,afterEach:c.add,onError:_e.add,isReady:Q,install(x){const J=this;x.component("RouterLink",L5),x.component("RouterView",N5),x.config.globalProperties.$router=J,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>v(i)}),Nn&&!gt&&i.value===Yt&&(gt=!0,w(r.location).catch(ge=>{}));const O={};for(const ge in Yt)O[ge]=k(()=>i.value[ge]);x.provide(sa,J),x.provide(zp,Me(O)),x.provide(dl,i);const z=x.unmount;ot.add(x),x.unmount=function(){ot.delete(x),ot.size<1&&(p=Yt,$e&&$e(),$e=null,i.value=Yt,gt=!1,X=!1),z()}}}}function Mn(t){return t.reduce((n,o)=>n.then(()=>o()),Promise.resolve())}function J5(t,n){const o=[],s=[],r=[],l=Math.max(n.matched.length,t.matched.length);for(let a=0;a<l;a++){const c=n.matched[a];c&&(t.matched.find(p=>Xn(p,c))?s.push(c):o.push(c));const i=t.matched[a];i&&(n.matched.find(p=>Xn(p,i))||r.push(i))}return[o,s,r]}const Sr=H(!1),To=H(!1),Jn=H(!1),W5=H(!0),ml=dh(ve({xs:460},ah)),wn=Hh(),ou=Oh(),V5=k(()=>wn.height.value-wn.width.value/sn>180),su=Sh(Bt?document.body:null),Gn=lh(),z5=k(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=Gn.value)==null?void 0:t.tagName)||"")||((n=Gn.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),U5=k(()=>{var t;return["BUTTON","A"].includes(((t=Gn.value)==null?void 0:t.tagName)||"")});Rt("slidev-camera","default");Rt("slidev-mic","default");const Bs=Rt("slidev-scale",0),Xe=Rt("slidev-show-overview",!1),Rr=Rt("slidev-presenter-cursor",!0),Vc=Rt("slidev-show-editor",!1);Rt("slidev-editor-width",Bt?window.innerWidth*.4:100);const ru=Np(Xe);function zc(t,n,o,s=r=>r){return t*s(.5-n*(.5-o))}function K5(t){return[-t[0],-t[1]]}function wt(t,n){return[t[0]+n[0],t[1]+n[1]]}function At(t,n){return[t[0]-n[0],t[1]-n[1]]}function Et(t,n){return[t[0]*n,t[1]*n]}function G5(t,n){return[t[0]/n,t[1]/n]}function mo(t){return[t[1],-t[0]]}function Y5(t,n){return t[0]*n[0]+t[1]*n[1]}function Z5(t,n){return t[0]===n[0]&&t[1]===n[1]}function Q5(t){return Math.hypot(t[0],t[1])}function X5(t){return t[0]*t[0]+t[1]*t[1]}function Uc(t,n){return X5(At(t,n))}function lu(t){return G5(t,Q5(t))}function e8(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function ho(t,n,o){let s=Math.sin(o),r=Math.cos(o),l=t[0]-n[0],a=t[1]-n[1],c=l*r-a*s,i=l*s+a*r;return[c+n[0],i+n[1]]}function hl(t,n,o){return wt(t,Et(At(n,t),o))}function Kc(t,n,o){return wt(t,Et(n,o))}var{min:Fn,PI:t8}=Math,Gc=.275,go=t8+1e-4;function n8(t,n={}){let{size:o=16,smoothing:s=.5,thinning:r=.5,simulatePressure:l=!0,easing:a=X=>X,start:c={},end:i={},last:p=!1}=n,{cap:u=!0,taper:f=0,easing:d=X=>X*(2-X)}=c,{cap:y=!0,taper:h=0,easing:B=X=>--X*X*X+1}=i;if(t.length===0||o<=0)return[];let D=t[t.length-1].runningLength,_=Math.pow(o*s,2),C=[],b=[],w=t.slice(0,10).reduce((X,te)=>{let Q=te.pressure;if(l){let fe=Fn(1,te.distance/o),Pt=Fn(1,1-fe);Q=Fn(1,X+(Pt-X)*(fe*Gc))}return(X+Q)/2},t[0].pressure),F=zc(o,r,t[t.length-1].pressure,a),P,j=t[0].vector,se=t[0].point,ie=se,de=se,me=ie;for(let X=0;X<t.length;X++){let{pressure:te}=t[X],{point:Q,vector:fe,distance:Pt,runningLength:Ye}=t[X];if(X<t.length-1&&D-Ye<3)continue;if(r){if(l){let O=Fn(1,Pt/o),z=Fn(1,1-O);te=Fn(1,w+(z-w)*(O*Gc))}F=zc(o,r,te,a)}else F=o/2;P===void 0&&(P=F);let gt=Ye<f?d(Ye/f):1,ot=D-Ye<h?B((D-Ye)/h):1;if(F=Math.max(.01,F*Math.min(gt,ot)),X===t.length-1){let O=Et(mo(fe),F);C.push(At(Q,O)),b.push(wt(Q,O));continue}let Pn=t[X+1].vector,x=Y5(fe,Pn);if(x<0){let O=Et(mo(j),F);for(let z=1/13,ge=0;ge<=1;ge+=z)de=ho(At(Q,O),Q,go*ge),C.push(de),me=ho(wt(Q,O),Q,go*-ge),b.push(me);se=de,ie=me;continue}let J=Et(mo(hl(Pn,fe,x)),F);de=At(Q,J),(X<=1||Uc(se,de)>_)&&(C.push(de),se=de),me=wt(Q,J),(X<=1||Uc(ie,me)>_)&&(b.push(me),ie=me),w=te,j=fe}let $e=t[0].point.slice(0,2),Ie=t.length>1?t[t.length-1].point.slice(0,2):wt(t[0].point,[1,1]),Ue=[],_e=[];if(t.length===1){if(!(f||h)||p){let X=Kc($e,lu(mo(At($e,Ie))),-(P||F)),te=[];for(let Q=1/13,fe=Q;fe<=1;fe+=Q)te.push(ho(X,$e,go*2*fe));return te}}else{if(!(f||h&&t.length===1))if(u)for(let te=1/13,Q=te;Q<=1;Q+=te){let fe=ho(b[0],$e,go*Q);Ue.push(fe)}else{let te=At(C[0],b[0]),Q=Et(te,.5),fe=Et(te,.51);Ue.push(At($e,Q),At($e,fe),wt($e,fe),wt($e,Q))}let X=mo(K5(t[t.length-1].vector));if(h||f&&t.length===1)_e.push(Ie);else if(y){let te=Kc(Ie,X,F);for(let Q=1/29,fe=Q;fe<1;fe+=Q)_e.push(ho(te,Ie,go*3*fe))}else _e.push(wt(Ie,Et(X,F)),wt(Ie,Et(X,F*.99)),At(Ie,Et(X,F*.99)),At(Ie,Et(X,F)))}return C.concat(_e,b.reverse(),Ue)}function o8(t,n={}){var o;let{streamline:s=.5,size:r=16,last:l=!1}=n;if(t.length===0)return[];let a=.15+(1-s)*.85,c=Array.isArray(t[0])?t:t.map(({x:y,y:h,pressure:B=.5})=>[y,h,B]);if(c.length===2){let y=c[1];c=c.slice(0,-1);for(let h=1;h<5;h++)c.push(hl(c[0],y,h/4))}c.length===1&&(c=[...c,[...wt(c[0],[1,1]),...c[0].slice(2)]]);let i=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,u=0,f=i[0],d=c.length-1;for(let y=1;y<c.length;y++){let h=l&&y===d?c[y].slice(0,2):hl(f.point,c[y],a);if(Z5(f.point,h))continue;let B=e8(h,f.point);if(u+=B,y<d&&!p){if(u<r)continue;p=!0}f={point:h,pressure:c[y][2]>=0?c[y][2]:.5,vector:lu(At(f.point,h)),distance:B,runningLength:u},i.push(f)}return i[0].vector=((o=i[1])==null?void 0:o.vector)||[0,0],i}function s8(t,n={}){return n8(o8(t,n),n)}var r8=s8,l8=Object.defineProperty,Yc=Object.getOwnPropertySymbols,a8=Object.prototype.hasOwnProperty,c8=Object.prototype.propertyIsEnumerable,Zc=(t,n,o)=>n in t?l8(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,gl=(t,n)=>{for(var o in n||(n={}))a8.call(n,o)&&Zc(t,o,n[o]);if(Yc)for(var o of Yc(n))c8.call(n,o)&&Zc(t,o,n[o]);return t},i8=()=>({events:{},emit(t,...n){(this.events[t]||[]).forEach(o=>o(...n))},on(t,n){return(this.events[t]=this.events[t]||[]).push(n),()=>this.events[t]=(this.events[t]||[]).filter(o=>o!==n)}});function Fs(t,n){return t-n}function p8(t){return t<0?-1:1}function Ls(t){return[Math.abs(t),p8(t)]}function au(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var u8=2,qt=u8,ao=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var n,o;const s=this.drauu.el,r=(n=this.drauu.options.coordinateScale)!=null?n:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-l.left)*r,y:(t.pageY-l.top)*r,pressure:t.pressure}}else{const l=this.drauu.svgPoint;l.x=t.clientX,l.y=t.clientY;const a=l.matrixTransform((o=s.getScreenCTM())==null?void 0:o.inverse());return{x:a.x*r,y:a.y*r,pressure:t.pressure}}}createElement(t,n){var o;const s=document.createElementNS("http://www.w3.org/2000/svg",t),r=n?gl(gl({},this.brush),n):this.brush;return s.setAttribute("fill",(o=r.fill)!=null?o:"transparent"),s.setAttribute("stroke",r.color),s.setAttribute("stroke-width",r.size.toString()),s.setAttribute("stroke-linecap","round"),r.dasharray&&s.setAttribute("stroke-dasharray",r.dasharray),s}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(qt))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},d8=class extends ao{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=r8(t,gl({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!n.length)return"";const o=n.reduce((s,[r,l],a,c)=>{const[i,p]=c[(a+1)%c.length];return s.push(r,l,(r+i)/2,(l+p)/2),s},["M",...n[0],"Q"]);return o.push("Z"),o.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},f8=class extends ao{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,o]=Ls(t.x-this.start.x),[s,r]=Ls(t.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,s);n=l,s=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",s);else{const[l,a]=[this.start.x,this.start.x+n*o].sort(Fs),[c,i]=[this.start.y,this.start.y+s*r].sort(Fs);this.attr("cx",(l+a)/2),this.attr("cy",(c+i)/2),this.attr("rx",(a-l)/2),this.attr("ry",(i-c)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function cu(t,n){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",n),s.setAttribute("id",t),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),o.appendChild(s),o}var y8=class extends ao{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=au(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(cu(n,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${n})`),o}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:o}=t;if(this.shiftPressed){const s=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let l=s/r;l=Math.round(l),Math.abs(l)<=1?(n=this.start.x+r*l,o=this.start.y+r):(n=this.start.x+s,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-o),this.attr("x2",n),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",o)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},m8=class extends ao{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,o]=Ls(t.x-this.start.x),[s,r]=Ls(t.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,s);n=l,s=l}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-s),this.attr("width",n*2),this.attr("height",s*2);else{const[l,a]=[this.start.x,this.start.x+n*o].sort(Fs),[c,i]=[this.start.y,this.start.y+s*r].sort(Fs);this.attr("x",l),this.attr("y",c),this.attr("width",a-l),this.attr("height",i-c)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function h8(t,n){const o=t.x-n.x,s=t.y-n.y;return o*o+s*s}function g8(t,n,o){let s=n.x,r=n.y,l=o.x-s,a=o.y-r;if(l!==0||a!==0){const c=((t.x-s)*l+(t.y-r)*a)/(l*l+a*a);c>1?(s=o.x,r=o.y):c>0&&(s+=l*c,r+=a*c)}return l=t.x-s,a=t.y-r,l*l+a*a}function v8(t,n){let o=t[0];const s=[o];let r;for(let l=1,a=t.length;l<a;l++)r=t[l],h8(r,o)>n&&(s.push(r),o=r);return o!==r&&r&&s.push(r),s}function vl(t,n,o,s,r){let l=s,a=0;for(let c=n+1;c<o;c++){const i=g8(t[c],t[n],t[o]);i>l&&(a=c,l=i)}l>s&&(a-n>1&&vl(t,n,a,s,r),r.push(t[a]),o-a>1&&vl(t,a,o,s,r))}function D8(t,n){const o=t.length-1,s=[t[0]];return vl(t,0,o,n,s),s.push(t[o]),s}function Qc(t,n,o=!1){if(t.length<=2)return t;const s=n!==void 0?n*n:1;return t=o?t:v8(t,s),t=D8(t,s),t}var A8=class extends ao{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=au();const n=cu(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=Qc(this.points,1,!0),this.count=0),this.attr("d",ei(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",ei(Qc(this.points,1,!0))),!t.getTotalLength()))}};function B8(t,n){const o=n.x-t.x,s=n.y-t.y;return{length:Math.sqrt(Math.pow(o,2)+Math.pow(s,2)),angle:Math.atan2(s,o)}}function Xc(t,n,o,s){const r=n||t,l=o||t,a=.2,c=B8(r,l),i=c.angle+(s?Math.PI:0),p=c.length*a,u=t.x+Math.cos(i)*p,f=t.y+Math.sin(i)*p;return{x:u,y:f}}function C8(t,n,o){const s=Xc(o[n-1],o[n-2],t),r=Xc(t,o[n-1],o[n+1],!0);return`C ${s.x.toFixed(qt)},${s.y.toFixed(qt)} ${r.x.toFixed(qt)},${r.y.toFixed(qt)} ${t.x.toFixed(qt)},${t.y.toFixed(qt)}`}function ei(t){return t.reduce((n,o,s,r)=>s===0?`M ${o.x.toFixed(qt)},${o.y.toFixed(qt)}`:`${n} ${C8(o,s,r)}`,"")}var b8=class extends ao{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(o,s)=>{if(o&&o.length)for(let r=0;r<o.length;r++){const l=o[r];if(l.getTotalLength){const a=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const i=l.getPointAtLength(a*c/this.pathSubFactor),p=l.getPointAtLength(a*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:p.x,y1:i.y,y2:p.y,segment:c,element:s||l})}}else l.children&&n(l.children,l)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const o=this.pathFragments[n],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,s)&&(o.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,o)=>!t.includes(o))),t.length>0}lineLineIntersect(t,n){const o=t.x1,s=t.x2,r=n.x1,l=n.x2,a=t.y1,c=t.y2,i=n.y1,p=n.y2,u=(o-s)*(i-p)-(a-c)*(r-l),f=(o*c-a*s)*(r-l)-(o-s)*(r*p-i*l),d=(o*c-a*s)*(i-p)-(a-c)*(r*p-i*l),y=(h,B,D)=>h>=B&&h<=D?!0:h>=D&&h<=B;if(u===0)return!1;{const h={x:f/u,y:d/u};return y(h.x,o,s)&&y(h.y,a,c)&&y(h.x,r,l)&&y(h.y,i,p)}}};function E8(t){return{draw:new A8(t),stylus:new d8(t),line:new y8(t),rectangle:new m8(t),ellipse:new f8(t),eraseLine:new b8(t)}}var w8=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=i8(),this._models=E8(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(n)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){!this.acceptsInput(t)||(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function _8(t){return new w8(t)}const Dl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Lt=Rt("slidev-drawing-enabled",!1),JE=Rt("slidev-drawing-pinned",!1),x8=H(!1),k8=H(!1),T8=H(!1),Jo=H(!1),An=_m(Rt("slidev-drawing-brush",{color:Dl[0],size:4,mode:"stylus"})),ti=H("stylus"),iu=k(()=>Be.drawings.syncAll||Mt.value);let Wo=!1;const vo=k({get(){return ti.value},set(t){ti.value=t,t==="arrow"?(An.mode="line",An.arrowEnd=!0):(An.mode=t,An.arrowEnd=!1)}}),S8=Me({brush:An,acceptsInputTypes:k(()=>Lt.value?void 0:["pen"]),coordinateTransform:!1}),et=Ks(_8(S8));function R8(){et.clear(),iu.value&&Ip(Ne.value,"")}function pu(){var t;k8.value=et.canRedo(),x8.value=et.canUndo(),T8.value=!!((t=et.el)!=null&&t.children.length)}function P8(t){Wo=!0;const n=Ps[t||Ne.value];n!=null?et.load(n):et.clear(),Wo=!1}et.on("changed",()=>{if(pu(),!Wo){const t=et.dump(),n=Ne.value;(Ps[n]||"")!==t&&iu.value&&Ip(n,et.dump())}});Cm(t=>{Wo=!0,t[Ne.value]!=null&&et.load(t[Ne.value]||""),Wo=!1,pu()});Ve(()=>{ce(Ne,()=>{!et.mounted||P8()},{immediate:!0})});et.on("start",()=>Jo.value=!0);et.on("end",()=>Jo.value=!1);window.addEventListener("keydown",t=>{if(!Lt.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let o=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?et.redo():et.undo():t.code==="Escape"?Lt.value=!1:t.code==="KeyL"&&n?vo.value="line":t.code==="KeyA"&&n?vo.value="arrow":t.code==="KeyS"&&n?vo.value="stylus":t.code==="KeyR"&&n?vo.value="rectangle":t.code==="KeyE"&&n?vo.value="ellipse":t.code==="KeyC"&&n?R8():t.code.startsWith("Digit")&&n&&+t.code[5]<=Dl.length?An.color=Dl[+t.code[5]-1]:o=!1,o&&(t.preventDefault(),t.stopPropagation())},!1);const ni=gh(),Pr=Rt("slidev-color-schema","auto"),Al=k(()=>Be.colorSchema!=="auto"),la=k({get(){return Al.value?Be.colorSchema==="dark":Pr.value==="auto"?ni.value:Pr.value==="dark"},set(t){Al.value||(Pr.value=t===ni.value?"auto":t?"dark":"light")}}),uu=Np(la);Bt&&ce(la,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});function O8(){return[]}const Cs=H(1),bs=k(()=>je.length-1),yt=H(0),aa=H(0);function $8(){yt.value>Cs.value&&(yt.value-=1)}function M8(){yt.value<bs.value&&(yt.value+=1)}function F8(){if(yt.value>Cs.value){let t=yt.value-aa.value;t<Cs.value&&(t=Cs.value),yt.value=t}}function L8(){if(yt.value<bs.value){let t=yt.value+aa.value;t>bs.value&&(t=bs.value),yt.value=t}}const du=He(ct(z5),ct(U5),W5);function I8(t,n,o=!1){typeof t=="string"&&(t=ou[t]);const s=He(t,du);let r=0,l;const a=()=>{if(clearTimeout(l),!s.value){r=0;return}o&&(l=setTimeout(a,Math.max(1e3-r*250,150)),r++),n()};return ce(s,a,{flush:"sync"})}function H8(t,n){return rh(t,o=>{!du.value||o.repeat||n()})}function j8(){const t=O8(),{escape:n,space:o,shift:s,left:r,right:l,up:a,down:c,enter:i,d:p,g:u,o:f}=ou;new Map([{key:He(o,ct(s)),fn:ln,autoRepeat:!0},{key:He(o,s),fn:an,autoRepeat:!0},{key:He(l,ct(s),ct(Xe)),fn:ln,autoRepeat:!0},{key:He(r,ct(s),ct(Xe)),fn:an,autoRepeat:!0},{key:"pageDown",fn:ln,autoRepeat:!0},{key:"pageUp",fn:an,autoRepeat:!0},{key:He(a,ct(Xe)),fn:()=>zo(!1),autoRepeat:!0},{key:He(c,ct(Xe)),fn:Vo,autoRepeat:!0},{key:He(r,s),fn:()=>zo(!1),autoRepeat:!0},{key:He(l,s),fn:Vo,autoRepeat:!0},{key:He(p,ct(Lt)),fn:uu},{key:He(f,ct(Lt)),fn:ru},{key:He(n,ct(Lt)),fn:()=>Xe.value=!1},{key:He(u,ct(Lt)),fn:()=>Jn.value=!Jn.value},{key:He(r,Xe),fn:$8},{key:He(l,Xe),fn:M8},{key:He(a,Xe),fn:F8},{key:He(c,Xe),fn:L8},{key:He(i,Xe),fn:()=>{to(yt.value),Xe.value=!1}},...t].map(y=>[y.key,y])).forEach(y=>{y.fn&&I8(y.key,y.fn,y.autoRepeat)}),H8("f",()=>su.toggle())}const N8={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},q8=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),J8=[q8];function W8(t,n){return E(),N("svg",N8,J8)}var V8={name:"carbon-close",render:W8};function ca(t){var o,s;const n=(s=(o=t==null?void 0:t.meta)==null?void 0:o.slide)==null?void 0:s.no;return n!=null?`slidev-page-${n}`:""}const fu=we({name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;q(Z);const o=H(),s=Th(o),r=k(()=>n.width?n.width:s.width.value),l=k(()=>n.width?n.width/sn:s.height.value);n.width&&Xs(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${l.value}px`)});const a=k(()=>r.value/l.value),c=k(()=>n.scale?n.scale:a.value<sn?r.value/En:l.value*sn/En),i=k(()=>({height:`${Mp}px`,width:`${En}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=k(()=>({"select-none":!Be.selectable,"slidev-code-line-numbers":Be.lineNumbers}));return ut($p,c),(u,f)=>(E(),N("div",{id:"slide-container",ref_key:"root",ref:o,class:Fe(v(p))},[e("div",{id:"slide-content",style:tt(v(i))},[zt(u.$slots,"default")],4),zt(u.$slots,"controls")],2))}});var ia=we({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const o=Ft(t,"clicks",n),s=Ft(t,"clicksElements",n),r=Ft(t,"clicksDisabled",n),l=Ft(t,"clicksOrderMap",n);s.value.length=0,ut(im,t.route),ut(pm,t.context),ut(vs,o),ut(Ds,r),ut(jn,s),ut(cl,l)},render(){var t,n;return this.$props.is?ft(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}});const z8=["innerHTML"],yu=we({name:"DrawingPreview",props:{page:null},setup(t){return q(Z),(n,o)=>v(Ps)[t.page]?(E(),N("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(Ps)[t.page]},null,8,z8)):ue("v-if",!0)}});var U8=Object.freeze(Object.defineProperty({__proto__:null,default:yu},Symbol.toStringTag,{value:"Module"}));const K8={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},G8=["onClick"],Y8=we({name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(t,{emit:n}){const o=t;q(Z);const s=Ft(o,"modelValue",n);function r(){s.value=!1}function l(y){to(y),r()}function a(y){return y===yt.value}const c=ml.smaller("xs"),i=ml.smaller("sm"),p=4*16*2,u=2*16,f=k(()=>c.value?wn.width.value-p:i.value?(wn.width.value-p-u)/2:300),d=k(()=>Math.floor((wn.width.value-p)/(f.value+u)));return Xs(()=>{yt.value=Ne.value,aa.value=d.value}),(y,h)=>{const B=V8;return E(),N(Ce,null,[nr(e("div",K8,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tt(`grid-template-columns: repeat(auto-fit,minmax(${v(f)}px,1fr))`)},[(E(!0),N(Ce,null,Zo(v(je).slice(0,-1),(D,_)=>(E(),N("div",{key:D.path,class:"relative"},[e("div",{class:Fe(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(_+1)}]),onClick:C=>l(+D.path)},[(E(),K(fu,{key:D.path,width:v(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:oe(()=>[U(v(ia),{is:D==null?void 0:D.component,"clicks-disabled":!0,class:Fe(v(ca)(D)),route:D,context:"overview"},null,8,["is","class","route"]),U(yu,{page:+D.path},null,8,["page"])]),_:2},1032,["width"]))],10,G8),e("div",{class:"absolute top-0 opacity-50",style:tt(`left: ${v(f)+5}px`)},_n(_+1),5)]))),128))],4)],512),[[Pp,v(s)]]),v(s)?(E(),N("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[U(B)])):ue("v-if",!0)],64)}}});var Z8="/workers-conf-2022/assets/logo.b72bde5d.png";const Q8={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},X8=we({name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const o=t;q(Z);const s=Ft(o,"modelValue",n);function r(){s.value=!1}return(l,a)=>(E(),K(dp,null,[v(s)?(E(),N("div",Q8,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=c=>r())}),e("div",{class:Fe(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[zt(l.$slots,"default")],2)])):ue("v-if",!0)],1024))}});const eg={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},tg=["innerHTML"],ng=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Z8,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),W("dev ")])])],-1),og=we({name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const o=t;q(Z);const s=Ft(o,"modelValue",n),r=k(()=>typeof Be.info=="string");return(l,a)=>(E(),K(X8,{modelValue:v(s),"onUpdate:modelValue":a[0]||(a[0]=c=>De(s)?s.value=c:null),class:"px-6 py-4"},{default:oe(()=>[e("div",eg,[v(r)?(E(),N("div",{key:0,class:"mb-4",innerHTML:v(Be).info},null,8,tg)):ue("v-if",!0),ng])]),_:1},8,["modelValue"]))}}),sg=["disabled","onKeydown"],rg=we({name:"Goto",setup(t){q(Z);const n=H(),o=H(""),s=k(()=>{if(o.value.startsWith("/"))return!!je.find(a=>a.path===o.value.substring(1));{const a=+o.value;return!isNaN(a)&&a>0&&a<=Bu.value}});function r(){s.value&&(o.value.startsWith("/")?to(o.value.substring(1)):to(+o.value)),l()}function l(){Jn.value=!1}return ce(Jn,async a=>{var c,i;a?(await Ve(),o.value="",(c=n.value)==null||c.focus()):(i=n.value)==null||i.blur()}),ce(o,a=>{a.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(a,c)=>(E(),N("div",{id:"slidev-goto-dialog",class:Fe(["fixed right-5 bg-main transform transition-all",v(Jn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[nr(e("input",{ref_key:"input",ref:n,"onUpdate:modelValue":c[0]||(c[0]=i=>o.value=i),type:"text",disabled:!v(Jn),class:Fe(["outline-none bg-transparent",{"text-red-400":!v(s)&&o.value}]),placeholder:"Goto...",onKeydown:[ic(r,["enter"]),ic(l,["escape"])],onBlur:l},null,42,sg),[[Jy,o.value]])],2))}}),lg=we({name:"Controls",setup(t){q(Z);const n=Ht(),o=Ht();return(s,r)=>(E(),N(Ce,null,[U(Y8,{modelValue:v(Xe),"onUpdate:modelValue":r[0]||(r[0]=l=>De(Xe)?Xe.value=l:null)},null,8,["modelValue"]),U(rg),v(n)?(E(),K(v(n),{key:0})):ue("v-if",!0),v(o)?(E(),K(v(o),{key:1,modelValue:v(Sr),"onUpdate:modelValue":r[1]||(r[1]=l=>De(Sr)?Sr.value=l:null)},null,8,["modelValue"])):ue("v-if",!0),v(Be).info?(E(),K(og,{key:2,modelValue:v(To),"onUpdate:modelValue":r[2]||(r[2]=l=>De(To)?To.value=l:null)},null,8,["modelValue"])):ue("v-if",!0)],64))}}),ag={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cg=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),ig=[cg];function pg(t,n){return E(),N("svg",ag,ig)}var ug={name:"carbon-settings-adjust",render:pg};const dg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fg=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),yg=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),mg=[fg,yg];function hg(t,n){return E(),N("svg",dg,mg)}var gg={name:"carbon-information",render:hg};const vg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dg=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Ag=[Dg];function Bg(t,n){return E(),N("svg",vg,Ag)}var Cg={name:"carbon-download",render:Bg};const bg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Eg=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),wg=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),_g=[Eg,wg];function xg(t,n){return E(),N("svg",bg,_g)}var kg={name:"carbon-user-speaker",render:xg};const Tg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sg=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Rg=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Pg=[Sg,Rg];function Og(t,n){return E(),N("svg",Tg,Pg)}var $g={name:"carbon-presentation-file",render:Og};const Mg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fg=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Lg=[Fg];function Ig(t,n){return E(),N("svg",Mg,Lg)}var Hg={name:"carbon-pen",render:Ig};const jg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ng=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),qg=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Jg=[Ng,qg];function Wg(t,n){return E(),N("svg",jg,Jg)}var Vg={name:"ph-cursor-duotone",render:Wg};const zg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ug=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Kg=[Ug];function Gg(t,n){return E(),N("svg",zg,Kg)}var mu={name:"ph-cursor-fill",render:Gg};const Yg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zg=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Qg=[Zg];function Xg(t,n){return E(),N("svg",Yg,Qg)}var ev={name:"carbon-sun",render:Xg};const tv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nv=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),ov=[nv];function sv(t,n){return E(),N("svg",tv,ov)}var rv={name:"carbon-moon",render:sv};const lv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},av=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),cv=[av];function iv(t,n){return E(),N("svg",lv,cv)}var pv={name:"carbon-apps",render:iv};const uv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dv=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),fv=[dv];function yv(t,n){return E(),N("svg",uv,fv)}var mv={name:"carbon-arrow-right",render:yv};const hv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gv=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),vv=[gv];function Dv(t,n){return E(),N("svg",hv,vv)}var Av={name:"carbon-arrow-left",render:Dv};const Bv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cv=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),bv=[Cv];function Ev(t,n){return E(),N("svg",Bv,bv)}var wv={name:"carbon-maximize",render:Ev};const _v={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xv=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),kv=[xv];function Tv(t,n){return E(),N("svg",_v,kv)}var Sv={name:"carbon-minimize",render:Tv};const Rv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pv=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Ov=[Pv];function $v(t,n){return E(),N("svg",Rv,Ov)}var Mv={name:"carbon-checkmark",render:$v};var Qo=(t,n)=>{const o=t.__vccOpts||t;for(const[s,r]of n)o[s]=r;return o};const Fv={class:"select-list"},Lv={class:"title"},Iv={class:"items"},Hv=["onClick"],jv=we({name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const o=t;q(Z);const s=Ft(o,"modelValue",n,{passive:!0});return(r,l)=>{const a=Mv;return E(),N("div",Fv,[e("div",Lv,_n(t.title),1),e("div",Iv,[(E(!0),N(Ce,null,Zo(t.items,c=>(E(),N("div",{key:c.value,class:Fe(["item",{active:v(s)===c.value}]),onClick:()=>{var i;s.value=c.value,(i=c.onClick)==null||i.call(c)}},[U(a,{class:Fe(["text-green-500",{"opacity-0":v(s)!==c.value}])},null,8,["class"]),W(" "+_n(c.display||c.value),1)],10,Hv))),128))])])}}});var Nv=Qo(jv,[["__scopeId","data-v-427604ef"]]);const qv={class:"text-sm"},Jv=we({name:"Settings",setup(t){q(Z);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,s)=>(E(),N("div",qv,[U(Nv,{modelValue:v(Bs),"onUpdate:modelValue":s[0]||(s[0]=r=>De(Bs)?Bs.value=r:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Wv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Vv=we({name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const o=t;q(Z);const s=Ft(o,"modelValue",n,{passive:!0}),r=H();return oh(r,()=>{s.value=!1}),(l,a)=>(E(),N("div",{ref_key:"el",ref:r,class:"flex relative"},[e("button",{class:Fe({disabled:t.disabled}),onClick:a[0]||(a[0]=c=>s.value=!v(s))},[zt(l.$slots,"button",{class:Fe({disabled:t.disabled})})],2),(E(),K(dp,null,[v(s)?(E(),N("div",Wv,[zt(l.$slots,"menu")])):ue("v-if",!0)],1024))],512))}}),zv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ds={name:"VerticalDivider",setup(t){return q(Z),(n,o)=>(E(),N("div",zv))}};var Uv={render(){return[]}};const Kv={class:"icon-btn"},Gv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Yv={class:"my-auto"},Zv={class:"opacity-50"},Qv=we({name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;q(Z);const o=ml.smaller("md"),{isFullscreen:s,toggle:r}=su,l=k(()=>Bl.value?`?password=${Bl.value}`:""),a=k(()=>`/presenter/${Ne.value}${l.value}`),c=k(()=>`/${Ne.value}${l.value}`),i=H(),p=()=>{i.value&&Gn.value&&i.value.contains(Gn.value)&&Gn.value.blur()},u=k(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Ht(),d=Ht();return ro(()=>import("./DrawingControls.e93c829a.js"),[]).then(y=>d.value=y.default),(y,h)=>{const B=Sv,D=wv,_=Av,C=mv,b=pv,w=rv,F=ev,P=mu,j=Vg,se=Hg,ie=$g,de=Qr("RouterLink"),me=kg,$e=Cg,Ie=gg,Ue=ug;return E(),N("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[e("div",{class:Fe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(u)]),onMouseleave:p},[v(Nt)?ue("v-if",!0):(E(),N("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(..._e)=>v(r)&&v(r)(..._e))},[v(s)?(E(),K(B,{key:0})):(E(),K(D,{key:1}))])),e("button",{class:Fe(["icon-btn",{disabled:!v(X7)}]),onClick:h[1]||(h[1]=(..._e)=>v(an)&&v(an)(..._e))},[U(_)],2),e("button",{class:Fe(["icon-btn",{disabled:!v(Q7)}]),title:"Next",onClick:h[2]||(h[2]=(..._e)=>v(ln)&&v(ln)(..._e))},[U(C)],2),v(Nt)?ue("v-if",!0):(E(),N("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=_e=>v(ru)())},[U(b)])),v(Al)?ue("v-if",!0):(E(),N("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=_e=>v(uu)())},[v(la)?(E(),K(w,{key:0})):(E(),K(F,{key:1}))])),U(ds),v(Nt)?ue("v-if",!0):(E(),N(Ce,{key:3},[!v(Mt)&&!v(o)&&v(f)?(E(),N(Ce,{key:0},[U(v(f)),U(ds)],64)):ue("v-if",!0),v(Mt)?(E(),N("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=_e=>Rr.value=!v(Rr))},[v(Rr)?(E(),K(P,{key:0})):(E(),K(j,{key:1,class:"opacity-50"}))])):ue("v-if",!0)],64)),!v(Be).drawings.presenterOnly&&!v(Nt)?(E(),N(Ce,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=_e=>Lt.value=!v(Lt))},[U(se),v(Lt)?(E(),N("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tt({background:v(An).color})},null,4)):ue("v-if",!0)]),U(ds)],64)):ue("v-if",!0),v(Nt)?ue("v-if",!0):(E(),N(Ce,{key:5},[v(Mt)?(E(),K(de,{key:0,to:v(c),class:"icon-btn",title:"Play Mode"},{default:oe(()=>[U(ie)]),_:1},8,["to"])):ue("v-if",!0),v(G7)?(E(),K(de,{key:1,to:v(a),class:"icon-btn",title:"Presenter Mode"},{default:oe(()=>[U(me)]),_:1},8,["to"])):ue("v-if",!0),ue("v-if",!0)],64)),(E(),N(Ce,{key:6},[v(Be).download?(E(),N("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(..._e)=>v(Cl)&&v(Cl)(..._e))},[U($e)])):ue("v-if",!0)],64)),!v(Mt)&&v(Be).info&&!v(Nt)?(E(),N("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=_e=>To.value=!v(To))},[U(Ie)])):ue("v-if",!0),!v(Mt)&&!v(Nt)?(E(),K(Vv,{key:8},{button:oe(()=>[e("button",Kv,[U(Ue)])]),menu:oe(()=>[U(Jv)]),_:1})):ue("v-if",!0),v(Nt)?ue("v-if",!0):(E(),K(ds,{key:9})),e("div",Gv,[e("div",Yv,[W(_n(v(Ne))+" ",1),e("span",Zv,"/ "+_n(v(Bu)),1)])]),U(v(Uv))],34)],512)}}});var hu={render(){return[]}},gu={render(){return[]}};const Xv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},eD=we({name:"PresenterMouse",setup(t){return q(Z),(n,o)=>{const s=mu;return v(_r).cursor?(E(),N("div",Xv,[U(s,{class:"absolute",style:tt({left:`${v(_r).cursor.x}%`,top:`${v(_r).cursor.y}%`})},null,8,["style"])])):ue("v-if",!0)}}}),tD=we({name:"SlidesShow",props:{context:null},setup(t){q(Z),ce(pt,()=>{var o,s;((o=pt.value)==null?void 0:o.meta)&&pt.value.meta.preload!==!1&&(pt.value.meta.__preloaded=!0),((s=Or.value)==null?void 0:s.meta)&&Or.value.meta.preload!==!1&&(Or.value.meta.__preloaded=!0)},{immediate:!0});const n=Ht();return ro(()=>import("./DrawingLayer.d41636b9.js"),[]).then(o=>n.value=o.default),(o,s)=>(E(),N(Ce,null,[ue(" Global Bottom "),U(v(gu)),ue(" Slides "),(E(!0),N(Ce,null,Zo(v(je),r=>{var l,a;return E(),N(Ce,{key:r.path},[((l=r.meta)==null?void 0:l.__preloaded)||r===v(pt)?nr((E(),K(v(ia),{key:0,is:r==null?void 0:r.component,clicks:r===v(pt)?v(St):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Fe(v(ca)(r)),route:r,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Pp,r===v(pt)]]):ue("v-if",!0)],64)}),128)),ue(" Global Top "),U(v(hu)),v(n)?(E(),K(v(n),{key:0})):ue("v-if",!0),v(Mt)?ue("v-if",!0):(E(),K(eD,{key:1}))],64))}}),nD=we({name:"Play",setup(t){q(Z),j8();const n=H();function o(l){var a;Vc.value||((a=l.target)==null?void 0:a.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?ln():an())}nB(n);const s=k(()=>V5.value||Vc.value);Ht();const r=Ht();return ro(()=>import("./DrawingControls.e93c829a.js"),[]).then(l=>r.value=l.default),(l,a)=>(E(),N(Ce,null,[e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr,max-content]",style:tt(v(Fp))},[U(fu,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:v(pa)?v(wn).width.value:void 0,scale:v(Bs),onPointerdown:o},{default:oe(()=>[U(tD,{context:"slide"})]),controls:oe(()=>[e("div",{class:Fe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(s)?"opacity-100 right-0":"opacity-0 p-2",v(Jo)?"pointer-events-none":""]])},[U(Qv,{class:"m-auto",persist:v(s)},null,8,["persist"])],2),!v(Be).drawings.presenterOnly&&!v(Nt)&&v(r)?(E(),K(v(r),{key:0,class:"ml-0"})):ue("v-if",!0)]),_:1},8,["style","width","scale"]),ue("v-if",!0)],4),U(lg)],64))}});function vu(t){const n=k(()=>t.value.path),o=k(()=>je.length-1),s=k(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),r=k(()=>pr(s.value)),l=k(()=>je.find(d=>d.path===`${s.value}`)),a=k(()=>{var d,y,h;return(h=(y=(d=l.value)==null?void 0:d.meta)==null?void 0:y.slide)==null?void 0:h.id}),c=k(()=>{var d,y;return(y=(d=l.value)==null?void 0:d.meta)==null?void 0:y.layout}),i=k(()=>je.find(d=>d.path===`${Math.min(je.length,s.value+1)}`)),p=k(()=>je.filter(d=>{var y,h;return(h=(y=d.meta)==null?void 0:y.slide)==null?void 0:h.title}).reduce((d,y)=>(ua(d,y),d),[])),u=k(()=>da(p.value,l.value)),f=k(()=>fa(u.value));return{route:t,path:n,total:o,currentPage:s,currentPath:r,currentRoute:l,currentSlideId:a,currentLayout:c,nextRoute:i,rawTree:p,treeWithActiveStatuses:u,tree:f}}function Du(t,n,o){const s=H(0);Ve(()=>{mt.afterEach(async()=>{await Ve(),s.value+=1})});const r=k(()=>{var i,p;return s.value,((p=(i=n.value)==null?void 0:i.meta)==null?void 0:p.__clicksElements)||[]}),l=k(()=>{var i,p,u;return+((u=(p=(i=n.value)==null?void 0:i.meta)==null?void 0:p.clicks)!=null?u:r.value.length)}),a=k(()=>o.value<je.length-1||t.value<l.value),c=k(()=>o.value>1||t.value>0);return{clicks:t,clicksElements:r,clicksTotal:l,hasNext:a,hasPrev:c}}const oD=["id"],oi=we({name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(t,{emit:n}){const o=t,s=Ft(o,"clicksElements",n),r=k(()=>({height:`${Mp}px`,width:`${En}px`})),l=Ht();ro(()=>Promise.resolve().then(function(){return U8}),void 0).then(p=>l.value=p.default);const a=k(()=>o.clicks),c=Du(a,o.nav.currentRoute,o.nav.currentPage),i=k(()=>`${o.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ut(Z,Me({nav:ve(ve({},o.nav),c),configs:Be,themeConfigs:k(()=>Be.themeConfig)})),(p,u)=>{var f;return E(),N("div",{id:v(i),class:"slide-container",style:tt(v(r))},[U(v(gu)),U(v(ia),{is:(f=t.route)==null?void 0:f.component,"clicks-elements":v(s),"onUpdate:clicks-elements":u[0]||(u[0]=d=>De(s)?s.value=d:null),clicks:v(a),"clicks-disabled":!1,class:Fe(v(ca)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),v(l)?(E(),K(v(l),{key:0,page:+t.route.path},null,8,["page"])):ue("v-if",!0),U(v(hu))],12,oD)}}}),sD=we({name:"PrintSlide",props:{route:null},setup(t){var l;const n=t;q(Z);const o=Me(((l=n.route.meta)==null?void 0:l.__clicksElements)||[]),s=k(()=>n.route),r=vu(s);return(a,c)=>(E(),N(Ce,null,[U(oi,{"clicks-elements":o,"onUpdate:clicks-elements":c[0]||(c[0]=i=>De(o)?o.value=i:null),clicks:0,nav:v(r),route:v(s)},null,8,["clicks-elements","nav","route"]),v(So)?ue("v-if",!0):(E(!0),N(Ce,{key:0},Zo(o.length,i=>(E(),K(oi,{key:i,clicks:i,nav:v(r),route:v(s)},null,8,["clicks","nav","route"]))),128))],64))}});const rD={id:"print-content"},lD=we({name:"PrintContainer",props:{width:null},setup(t){const n=t;q(Z);const o=k(()=>n.width),s=k(()=>n.width/sn),r=k(()=>o.value/s.value),l=k(()=>r.value<sn?o.value/En:s.value*sn/En),a=je.slice(0,-1),c=k(()=>({"select-none":!Be.selectable,"slidev-code-line-numbers":Be.lineNumbers}));return ut($p,l),(i,p)=>(E(),N("div",{id:"print-container",class:Fe(v(c))},[e("div",rD,[(E(!0),N(Ce,null,Zo(v(a),u=>(E(),K(sD,{key:u.path,route:u},null,8,["route"]))),128))]),zt(i.$slots,"controls")],2))}});const aD=we({name:"Print",setup(t){q(Z);const n=Dn.canvasWidth,o=Math.round(n/Dn.aspectRatio)+1;function s(r,{slots:l}){if(l.default)return ft("style",l.default())}return Xs(()=>{pa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,l)=>(E(),N(Ce,null,[U(s,null,{default:oe(()=>[W(" @page { size: "+_n(v(n))+"px "+_n(o)+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:tt(v(Fp))},[U(lD,{class:"w-full h-full",style:tt({background:"var(--slidev-slide-container-background, black)"}),width:v(wn).width.value},null,8,["style","width"])],4)],64))}});const cD={class:"slidev-layout end"},iD={name:"end",setup(t){return q(Z),(n,o)=>(E(),N("div",cD," END "))}};var pD=Qo(iD,[["__scopeId","data-v-024c70b4"]]);function si(t){return t.startsWith("/")?"/workers-conf-2022/"+t.slice(1):t}function uD(t,n=!1){const o=t&&["#","rgb","hsl"].some(r=>t.indexOf(r)===0),s={background:o?t:void 0,color:t&&!o?"white":void 0,backgroundImage:o?void 0:t?n?`linear-gradient(#0005, #0008), url(${si(t)})`:`url("${si(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const dD={class:"my-auto w-full"},fD=we({name:"cover",props:{background:{default:""}},setup(t){const n=t;q(Z);const o=k(()=>uD(n.background,!0));return(s,r)=>(E(),N("div",{class:"slidev-layout cover",style:tt(v(o))},[e("div",dD,[zt(s.$slots,"default")])],4))}}),yD=e("h1",null,"Tackling the hardest problems in JavaScript",-1),mD=e("h2",null,"A gentle introduction to Effect",-1),hD=e("p",null,"Michael Arnaldi - CEO @ MATECHS",-1),gD=e("p",null,"Workers Conf 2022",-1),vD={name:"1",setup(t){const n={layout:"cover",lineNumbers:!0,canvasWidth:1024,srcSequence:"./slides/01-cover.md"};return q(Z),(o,s)=>(E(),K(fD,Ee(be(n)),{default:oe(()=>[yD,mD,hD,gD]),_:1},16))}},DD={class:"slidev-layout full w-full h-full"},ze={name:"full",setup(t){return q(Z),(n,o)=>(E(),N("div",DD,[zt(n.$slots,"default",{class:"w-full h-full"})]))}},AD=e("h1",null,"POC Like Code",-1),BD=e("p",null,[W("Building a small application that fetches a list of "),e("code",null,"TODOs"),W(" from the "),e("a",{href:"https://jsonplaceholder.typicode.com",target:"_blank",rel:"noopener"},"{JSON} Placeholder"),W(" API.")],-1),CD=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Promise<unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Promise<T>"},"Promise")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const res: Response"},"res")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>"},"fetch")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const res: Response"},"res")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Body.json(): Promise<any>"},"json")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Promise<unknown[]>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const todos: unknown[]"},"todos")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[];")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const id: number"},"id")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const todos: unknown[]"},"todos")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<unknown>.push(...items: unknown[]): number"},"push")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Promise<unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const id: number"},"id")]),e("span",{style:{color:"#858585"}},"));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const todos: unknown[]"},"todos")]),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const main: () => Promise<void>"},"main")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const todos: unknown[]"},"todos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Promise<unknown[]>"},"getTodos")]),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"]);")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const todo: unknown"},"todo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const todos: unknown[]"},"todos")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`namespace console
var console: Console`},"console")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)"},"log")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`Got a todo: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"const todo: unknown"},"todo")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"};")])])])],-1),bD={name:"2",setup(t){const n={layout:"full",srcSequence:"./slides/02-motivation.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[AD,BD,CD]),_:1},16))}},ED={class:"slidev-layout center h-full grid place-content-center"},wD={class:"my-auto"},jt={name:"center",setup(t){return q(Z),(n,o)=>(E(),N("div",ED,[e("div",wD,[zt(n.$slots,"default")])]))}},_D=e("h1",null,"From POC to Production",-1),xD=e("p",null,"Production code has to deal with reality, and reality is everything but the happy path.",-1),kD=e("p",null,"Let\u2019s see what it takes!",-1),TD={name:"3",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return q(Z),(o,s)=>(E(),K(jt,Ee(be(n)),{default:oe(()=>[_D,xD,kD]),_:1},16))}},SD=e("h1",null,"Concurrency",-1),RD=e("p",null,"Maximising efficiency requires doing things in parallel as much as possible.",-1),PD=e("p",null,"Unbounded parallelism isn\u2019t too hard:",-1),OD=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Promise<unknown>"},"getTodo"),W("s")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[W("todos"),e("data-lsp",{lsp:"const res: Response"})]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Promise"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},">[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[];")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"id"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"todos"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"push"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"getTodo"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},"));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Promise"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"all"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"todos"),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"};")])])])],-1),$D=e("p",null,"Things gets more complicated when we want to control the concurrency.",-1),MD=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Promise<unknown>"},"getTodo"),W("s")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[W("chunkSize"),e("data-lsp",{lsp:"const res: Response"})]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"todos"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[W("unknown"),e("data-lsp",{lsp:"const res: Response"})]),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[];")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#429988"}},"length"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"chunkSize"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"chunk"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"slice"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"chunkSize"),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"todos"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"push"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"}),W("Promise")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"all"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"chunk"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"map"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"getTodo"),e("span",{style:{color:"#858585"}},")))")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"todos"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"};")])])])],-1),FD={name:"4",setup(t){const n={layout:"full",srcSequence:"./slides/02-motivation.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[SD,RD,PD,OD,$D,MD]),_:1},16))}};const lr=t=>(Gl("data-v-c5bea246"),t=t(),Yl(),t),LD=lr(()=>e("h1",null,"Concurrency",-1)),ID=lr(()=>e("p",null,"Is that it?",-1)),HD=lr(()=>e("p",null,"We are not really maximising parallelism, we are simply chunking up requests\u2026 This may be better:",-1)),jD=lr(()=>e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[], limit?: number) => Promise<unknown[]>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) limit: number"},"limit")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const remaining: (readonly [number, number])[]"},"remaining")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.slice(start?: number | undefined, end?: number | undefined): number[]"},"slice")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#429988"}},[e("data-lsp",{lsp:"(property) Array<number>.length: number"},"length")]),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<readonly [number, number]>(callbackfn: (value: number, index: number, array: number[]) => readonly [number, number], thisArg?: any): (readonly [number, number])[]"},"map")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) index: number"},"index")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) index: number"},"index")]),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},[e("data-lsp",{lsp:"type const = readonly [number, number]"},"const")]),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<readonly [number, number]>.reverse(): (readonly [number, number])[]"},"reverse")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const results: unknown[]"},"results")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[];")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:`var Promise: PromiseConstructor
new <unknown[]>(executor: (resolve: (value: unknown[] | PromiseLike<unknown[]>) => void, reject: (reason?: any) => void) => void) => Promise<unknown[]>`},"Promise")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},"[]>(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) resolve: (value: unknown[] | PromiseLike<unknown[]>) => void"},"resolve")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) reject: (reason?: any) => void"},"reject")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let pending: number"},"pending")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let i: number"},"i")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let i: number"},"i")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) limit: number"},"limit")]),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let i: number"},"i")]),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(local function) fetchRemaining(): void"},"fetchRemaining")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(local function) fetchRemaining(): void"},"fetchRemaining")]),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const remaining: (readonly [number, number])[]"},"remaining")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#429988"}},[e("data-lsp",{lsp:"(property) Array<T>.length: number"},"length")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const remainingToFetchId: number"},"remainingToFetchId")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const remainingToFetchIdx: number"},"remainingToFetchIdx")]),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const remaining: (readonly [number, number])[]"},"remaining")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<readonly [number, number]>.pop(): readonly [number, number] | undefined"},"pop")]),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let pending: number"},"pending")]),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Promise<unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const remainingToFetchId: number"},"remainingToFetchId")]),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Promise<unknown>.then<void, never>(onfulfilled?: ((value: unknown) => void | PromiseLike<void>) | null | undefined, onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined): Promise<...>"},"then")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) res: unknown"},"res")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const results: unknown[]"},"results")]),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const remainingToFetchIdx: number"},"remainingToFetchIdx")]),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) res: unknown"},"res")]),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let pending: number"},"pending")]),e("span",{style:{color:"#CB7676"}},"--"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(local function) fetchRemaining(): void"},"fetchRemaining")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Promise<void>.catch<void>(onrejected?: ((reason: any) => void | PromiseLike<void>) | null | undefined): Promise<void>"},"catch")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) err: any"},"err")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) reject: (reason?: any) => void"},"reject")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) err: any"},"err")]),e("span",{style:{color:"#858585"}},"));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let pending: number"},"pending")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"==="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) resolve: (value: unknown[] | PromiseLike<unknown[]>) => void"},"resolve")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const results: unknown[]"},"results")]),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"});")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"};")])])])],-1)),ND={name:"5",setup(t){const n={layout:"full",srcSequence:"./slides/02-motivation.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[LD,ID,HD,jD]),_:1},16))}};var qD=Qo(ND,[["__scopeId","data-v-c5bea246"]]);const ar=t=>(Gl("data-v-80fbf52a"),t=t(),Yl(),t),JD=ar(()=>e("h1",null,"Interruption",-1)),WD=ar(()=>e("p",null,"Ongoing operations should be interrupted on failures:",-1)),VD=ar(()=>e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const getTodo: (id: number, opt?: {
    signal?: AbortSignal;
}) => Promise<unknown>`},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    signal?: AbortSignal | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) signal?: AbortSignal | undefined"},"signal")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface AbortSignal"},"AbortSignal")]),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Promise<T>"},"Promise")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const res: Response"},"res")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>"},"fetch")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) RequestInit.signal?: AbortSignal | null | undefined"},"signal")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    signal?: AbortSignal | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#858585"}},"?."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) signal?: AbortSignal | undefined"},"signal")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"});")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const res: Response"},"res")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Body.json(): Promise<any>"},"json")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const getTodos: (ids: number[], opt?: {
    limit?: number;
    signal?: AbortSignal;
}) => Promise<unknown[]>`},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    signal?: AbortSignal | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) limit?: number | undefined"},"limit")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) signal?: AbortSignal | undefined"},"signal")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface AbortSignal"},"AbortSignal")]),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const limit: number"},"limit")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    signal?: AbortSignal | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#858585"}},"?."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) limit?: number | undefined"},"limit")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"??"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"var AbortController: new () => AbortController"},"AbortController")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const remaining: (readonly [number, number])[]"},"remaining")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.slice(start?: number | undefined, end?: number | undefined): number[]"},"slice")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#429988"}},[e("data-lsp",{lsp:"(property) Array<number>.length: number"},"length")]),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<readonly [number, number]>(callbackfn: (value: number, index: number, array: number[]) => readonly [number, number], thisArg?: any): (readonly [number, number])[]"},"map")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) index: number"},"index")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) index: number"},"index")]),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},[e("data-lsp",{lsp:"type const = readonly [number, number]"},"const")]),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<readonly [number, number]>.reverse(): (readonly [number, number])[]"},"reverse")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const results: unknown[]"},"results")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},"[]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[];")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    signal?: AbortSignal | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#858585"}},"?."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) signal?: AbortSignal | undefined"},"signal")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    signal?: AbortSignal | undefined;
}`},"opt")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) signal?: AbortSignal"},"signal")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:'(method) AbortSignal.addEventListener<"abort">(type: "abort", listener: (this: AbortSignal, ev: Event) => any, options?: boolean | AddEventListenerOptions | undefined): void (+1 overload)'},"addEventListener")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"abort"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) AbortController.abort(): void (+1 overload)"},"abort")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"});")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:`var Promise: PromiseConstructor
new <unknown[]>(executor: (resolve: (value: unknown[] | PromiseLike<unknown[]>) => void, reject: (reason?: any) => void) => void) => Promise<unknown[]>`},"Promise")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},"[]>(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) resolve: (value: unknown[] | PromiseLike<unknown[]>) => void"},"resolve")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) reject: (reason?: any) => void"},"reject")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let pending: number"},"pending")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let i: number"},"i")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let i: number"},"i")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const limit: number"},"limit")]),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let i: number"},"i")]),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(local function) fetchRemaining(): void"},"fetchRemaining")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(local function) fetchRemaining(): void"},"fetchRemaining")]),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const remaining: (readonly [number, number])[]"},"remaining")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#429988"}},[e("data-lsp",{lsp:"(property) Array<T>.length: number"},"length")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const remainingToFetchId: number"},"remainingToFetchId")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const remainingToFetchIdx: number"},"remainingToFetchIdx")]),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const remaining: (readonly [number, number])[]"},"remaining")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<readonly [number, number]>.pop(): readonly [number, number] | undefined"},"pop")]),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let pending: number"},"pending")]),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const getTodo: (id: number, opt?: {
    signal?: AbortSignal | undefined;
} | undefined) => Promise<unknown>`},"getTodo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const remainingToFetchId: number"},"remainingToFetchId")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) signal?: AbortSignal | undefined"},"signal")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) AbortController.signal: AbortSignal"},"signal")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Promise<unknown>.then<void, never>(onfulfilled?: ((value: unknown) => void | PromiseLike<void>) | null | undefined, onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined): Promise<...>"},"then")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) res: unknown"},"res")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const results: unknown[]"},"results")]),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const remainingToFetchIdx: number"},"remainingToFetchIdx")]),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) res: unknown"},"res")]),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let pending: number"},"pending")]),e("span",{style:{color:"#CB7676"}},"--"),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(local function) fetchRemaining(): void"},"fetchRemaining")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Promise<void>.catch<void>(onrejected?: ((reason: any) => void | PromiseLike<void>) | null | undefined): Promise<void>"},"catch")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) err: any"},"err")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) AbortController.abort(): void (+1 overload)"},"abort")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) reject: (reason?: any) => void"},"reject")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) err: any"},"err")]),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"});")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"let pending: number"},"pending")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"==="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) resolve: (value: unknown[] | PromiseLike<unknown[]>) => void"},"resolve")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const results: unknown[]"},"results")]),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"});")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"};")])])])],-1)),zD=ar(()=>e("p",null,"And we still don\u2019t have interruption on program shutdown, and especially async interruption\u2026",-1)),UD={name:"6",setup(t){const n={layout:"full",srcSequence:"./slides/02-motivation.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[JD,WD,VD,zD]),_:1},16))}};var KD=Qo(UD,[["__scopeId","data-v-80fbf52a"]]);const cr=t=>(Gl("data-v-bf6c1a8c"),t=t(),Yl(),t),GD=cr(()=>e("h1",null,"Resilience on errors",-1)),YD=cr(()=>e("p",null,"Our software should be resilient on failures, especially when dealing with things like http requests or any kind of network dependent activity.",-1)),ZD=cr(()=>e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const wait: (ms: number) => Promise<unknown>"},"wait")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ms: number"},"ms")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:`var Promise: PromiseConstructor
new <unknown>(executor: (resolve: (value: unknown) => void, reject: (reason?: any) => void) => void) => Promise<unknown>`},"Promise")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) res: (value: unknown) => void"},"res")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:`function setTimeout(callback: (args: void) => void, ms?: number | undefined): NodeJS.Timeout (+2 overloads)
namespace setTimeout`},"setTimeout")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) res: (value: unknown) => void"},"res")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ms: number"},"ms")]),e("span",{style:{color:"#858585"}},"));")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const callWithRetry: <A>(fn: () => Promise<A>, opt?: {
    limit?: number;
    cap?: number;
    base?: number;
    exp?: number;
}, depth?: number) => Promise<A>`},"callWithRetry")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(type parameter) A in <A>(fn: () => Promise<A>, opt?: {
    limit?: number;
    cap?: number;
    base?: number;
    exp?: number;
}, depth?: number): Promise<A>`},"A")]),e("span",{style:{color:"#858585"}},">(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) fn: () => Promise<A>"},"fn")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Promise<T>"},"Promise")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(type parameter) A in <A>(fn: () => Promise<A>, opt?: {
    limit?: number;
    cap?: number;
    base?: number;
    exp?: number;
}, depth?: number): Promise<A>`},"A")]),e("span",{style:{color:"#858585"}},">,")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    cap?: number | undefined;
    base?: number | undefined;
    exp?: number | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) limit?: number | undefined"},"limit")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) cap?: number | undefined"},"cap")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) base?: number | undefined"},"base")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) exp?: number | undefined"},"exp")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) depth: number"},"depth")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Promise<T>"},"Promise")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(type parameter) A in <A>(fn: () => Promise<A>, opt?: {
    limit?: number;
    cap?: number;
    base?: number;
    exp?: number;
}, depth?: number): Promise<A>`},"A")]),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"try"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) fn: () => Promise<A>"},"fn")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"catch"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(local var) e: unknown"},"e")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) depth: number"},"depth")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    cap?: number | undefined;
    base?: number | undefined;
    exp?: number | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#858585"}},"?."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) limit?: number | undefined"},"limit")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"??"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"throw"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(local var) e: unknown"},"e")]),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const wait: (ms: number) => Promise<unknown>"},"wait")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var Math: Math"},"Math")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) Math.min(...values: number[]): number"},"min")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    cap?: number | undefined;
    base?: number | undefined;
    exp?: number | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#858585"}},"?."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) base?: number | undefined"},"base")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"??"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"**"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) depth: number"},"depth")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    cap?: number | undefined;
    base?: number | undefined;
    exp?: number | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#858585"}},"?."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) exp?: number | undefined"},"exp")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"??"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    cap?: number | undefined;
    base?: number | undefined;
    exp?: number | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#858585"}},"?."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) cap?: number | undefined"},"cap")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"??"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2000"),e("span",{style:{color:"#858585"}},"));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const callWithRetry: <A>(fn: () => Promise<A>, opt?: {
    limit?: number;
    cap?: number;
    base?: number;
    exp?: number;
}, depth?: number) => Promise<A>`},"callWithRetry")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) fn: () => Promise<A>"},"fn")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    limit?: number | undefined;
    cap?: number | undefined;
    base?: number | undefined;
    exp?: number | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) depth: number"},"depth")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const getTodo: (id: number, opt?: {
    signal?: AbortSignal;
}) => Promise<unknown>`},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    signal?: AbortSignal | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) signal?: AbortSignal | undefined"},"signal")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface AbortSignal"},"AbortSignal")]),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Promise<T>"},"Promise")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const callWithRetry: <any>(fn: () => Promise<any>, opt?: {
    limit?: number;
    cap?: number;
    base?: number;
    exp?: number;
}, depth?: number) => Promise<any>`},"callWithRetry")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const res: Response"},"res")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>"},"fetch")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) RequestInit.signal?: AbortSignal | null | undefined"},"signal")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) opt: {
    signal?: AbortSignal | undefined;
} | undefined`},"opt")]),e("span",{style:{color:"#858585"}},"?."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) signal?: AbortSignal | undefined"},"signal")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"});")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const res: Response"},"res")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Body.json(): Promise<any>"},"json")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) limit?: number | undefined"},"limit")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) cap?: number | undefined"},"cap")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2000"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) base?: number | undefined"},"base")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) exp?: number | undefined"},"exp")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"});")])])])],-1)),QD=cr(()=>e("p",null,"That\u2019s a simple capped exponential backoff, missing timeouts and error specializaion.",-1)),XD={name:"7",setup(t){const n={layout:"full",srcSequence:"./slides/02-motivation.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[GD,YD,ZD,QD]),_:1},16))}};var eA=Qo(XD,[["__scopeId","data-v-bf6c1a8c"]]),ir=we({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,a;const t=Ja("click"),n=Ja("after"),o=(c,i,p)=>nr(c,[[i,this.at!=null?+this.at+p:null,"",{hide:this.hide,fade:this.fade}]]);let s=(a=(l=this.$slots).default)==null?void 0:a.call(l);if(!s)return;s=dm(s);const r=c=>c.map((i,p)=>xn(i)?o(ft(i),p%this.every===0?t:n,Math.floor(p/this.every)):i);return s.length===1&&["ul","ol"].includes(s[0].type)&&Array.isArray(s[0].children)?ft(s[0],{},[r(s[0].children)]):r(s)}});const tA=e("h1",null,"We haven\u2019t even started",-1),nA=e("p",null,"We\u2019ll be needing to figure out a long list of further requirements.",-1),oA=e("ul",null,[e("li",null,"Logging"),e("li",null,"Metrics"),e("li",null,"Tracing"),e("li",null,"Dependency Injection"),e("li",null,"Etc.")],-1),sA={name:"8",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return q(Z),(o,s)=>{const r=ir;return E(),K(jt,Ee(be(n)),{default:oe(()=>[tA,nA,U(r,null,{default:oe(()=>[oA]),_:1})]),_:1},16)}}},rA=e("h1",null,"What about Maintainability?",-1),lA=e("p",null,"The code looked pretty awful even to understand, let alone extending it\u2026",-1),aA={name:"9",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return q(Z),(o,s)=>(E(),K(jt,Ee(be(n)),{default:oe(()=>[rA,lA]),_:1},16))}},cA=e("h1",null,"Welcome to Effect",-1),iA={name:"10",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(jt,Ee(be(n)),{default:oe(()=>[cA]),_:1},16))}},pA=e("h1",null,[W("Creating a "),e("code",null,"fetch"),W(" wrapper")],-1),uA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Effect"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class FetchError"},"FetchError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) FetchError._tag: "FetchError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"FetchError"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"constructor"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) FetchError.error: unknown"},"error")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect.IO<FetchError, Response>"},"request")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: RequestInfo"},"input")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type RequestInfo = string | Request"},"RequestInfo")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) init: RequestInit | undefined"},"init")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface RequestInit"},"RequestInit")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"undefined"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function tryCatchPromise<FetchError, Response>(promise: LazyArg<Promise<Response>>, onReject: (reason: unknown) => FetchError, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.IO<...>"},"tryCatchPromise")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>"},"fetch")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: RequestInfo"},"input")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) init: RequestInit | undefined"},"init")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: unknown"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"constructor FetchError(error: unknown): FetchError"},"FetchError")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: unknown"},"error")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class JsonBodyError"},"JsonBodyError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) JsonBodyError._tag: "JsonBodyError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"JsonBodyError"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"constructor"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) JsonBodyError.error: unknown"},"error")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Effect.Effect.IO<JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: Response"},"input")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Response"},"Response")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function tryCatchPromise<JsonBodyError, unknown>(promise: LazyArg<Promise<unknown>>, onReject: (reason: unknown) => JsonBodyError, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.IO<...>"},"tryCatchPromise")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Promise<T>"},"Promise")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: Response"},"input")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Body.json(): Promise<any>"},"json")]),e("span",{style:{color:"#858585"}},"(),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: unknown"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"constructor JsonBodyError(error: unknown): JsonBodyError"},"JsonBodyError")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: unknown"},"error")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")])])])],-1),dA={name:"11",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[pA,uA]),_:1},16))}},fA=e("h1",null,"Common module",-1),yA=e("p",null,[W("To simplify imports in your app it is a common pattern to have a "),e("code",null,"common.ts"),W(" module which includes a re-export of modules from both "),e("code",null,"Effect"),W(" and utilities like the following")],-1),mA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Effect"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Schedule"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@tsplus/stdlib/data/Duration"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) function pipe<A>(a: A): A (+19 overloads)
export pipe`},"pipe")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@tsplus/stdlib/data/Function"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./http"'),e("span",{style:{color:"#858585"}},";")])])])],-1),hA=e("p",null,"To be used like:",-1),gA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")])])])],-1),vA=e("p",null,[W("Pay attention to avoid cyclical dependencies by not using the "),e("code",null,"common"),W(" module in any of the modules that re-exports, tools like "),e("code",null,"eslint"),W(" and "),e("code",null,"madge"),W(" may help you prevent this mistake.")],-1),DA={name:"12",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(jt,Ee(be(n)),{default:oe(()=>[fA,yA,mA,hA,gA,vA]),_:1},16))}},AA=e("h1",null,[W("Using the "),e("code",null,"fetch"),W(" wrapper")],-1),BA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) function pipe<A>(a: A): A (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<R, E, A>.IO<Http.FetchError, Response>, Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>(a: Effect.Effect.IO<Http.FetchError, Response>, ab: (a: Effect.Effect.IO<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect<R, E, A>.IO<Http.FetchError, Response>"},"request")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const flatMap: <Response, never, Http.JsonBodyError, unknown>(f: (a: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>, __tsplusTrace?: string | undefined) => <R, E>(self: Effect.Effect<...>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Effect.Effect.IO<Http.JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAll<never, Http.FetchError | Http.JsonBodyError, unknown>(as: LazyArg<Collection<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>>, __tsplusTrace?: string | undefined): Effect.Effect<...>
export collectAll`},"collectAll")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," ")])])])],-1),CA=e("p",null,[W("Looking at the types inferred from TS we can explicitely see "),e("code",null,"getTodo"),W(" may returns:")],-1),bA=e("pre",{class:"shiki vitesse-dark",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"FetchError"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"JsonBodyError"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"unknown"),e("span",{style:{color:"#CB7676"}},">")])])])],-1),EA=e("p",null,[W("Which can be read as "),e("code",null,"one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown")],-1),wA={name:"13",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[AA,BA,CA,bA,EA]),_:1},16))}},_A=e("h1",null,"Handling Failures",-1),xA=e("p",null,"Effect programs when executed may encounter failure due to predictable circumstances that may trigger recovery procedures and unexpected exceptions.",-1),kA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Exit"},"Exit")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) function pipe<A>(a: A): A (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Todos"},"Todos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./todos"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:`const program: Effect.Effect<never, FetchError | JsonBodyError, {
    first: unknown;
    second: unknown;
}>`},"program")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`function struct<{
    first: Effect.Effect<never, FetchError | JsonBodyError, unknown>;
    second: Effect.Effect<never, FetchError | JsonBodyError, unknown>;
}>(r: Record<...> | {
    first: Effect.Effect<never, FetchError | JsonBodyError, unknown>;
    second: Effect.Effect<never, FetchError | JsonBodyError, unknown>;
}, __tsplusTrace?: string | undefined): Effect.Effect<...>`},"struct")]),e("span",{style:{color:"#858585"}},"({")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) first: Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"first")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Todos"},"Todos")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) second: Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"second")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Todos"},"Todos")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"})")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, void>"},"main")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, FetchError | JsonBodyError, {
    first: unknown;
    second: unknown;
}>, Effect.Effect<never, FetchError | JsonBodyError, void>, Effect.Effect<...>, Effect.Effect<...>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>, bc: (b: Effect.Effect<...>) => Effect.Effect<...>, cd: (c: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`const program: Effect.Effect<never, FetchError | JsonBodyError, {
    first: unknown;
    second: unknown;
}>`},"program")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const flatMap: <{
    first: unknown;
    second: unknown;
}, never, never, void>(f: (a: {
    first: unknown;
    second: unknown;
}) => Effect.Effect<never, never, void>, __tsplusTrace?: string | undefined) => <R, E>(self: Effect.Effect<R, E, {
    first: unknown;
    second: unknown;
}>) => Effect.Effect<...>`},"flatMap")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(parameter) todos: {
    first: unknown;
    second: unknown;
}`},"todos")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function logInfo(message: LazyArg<string>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.UIO<void>"},"logInfo")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"`Todos: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:`(parameter) todos: {
    first: unknown;
    second: unknown;
}`},"todos")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},")),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:'const catchTag: <"FetchError", FetchError | JsonBodyError, never, never, void>(k: "FetchError", f: (e: FetchError) => Effect.Effect<never, never, void>, __tsplusTrace?: string | undefined) => <R, A>(self: Effect.Effect<...>) => Effect.Effect<...>'},"catchTag")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"FetchError"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: FetchError"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function logError(message: LazyArg<string>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.UIO<void>"},"logError")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"`FetchError: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) error: FetchError"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},")),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:'const catchTag: <"JsonBodyError", JsonBodyError, never, never, void>(k: "JsonBodyError", f: (e: JsonBodyError) => Effect.Effect<never, never, void>, __tsplusTrace?: string | undefined) => <R, A>(self: Effect.Effect<...>) => Effect.Effect<...>'},"catchTag")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"JsonBodyError"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: JsonBodyError"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function logError(message: LazyArg<string>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.UIO<void>"},"logError")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"`JsonBodyError: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) error: JsonBodyError"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const unsafeRunAsyncWith: <never, void>(effect: Effect.Effect<never, never, void>, k: (exit: Exit.Exit<never, void>) => void, __tsplusTrace?: string | undefined) => void"},"unsafeRunAsyncWith")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, void>"},"main")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, void>"},"exit")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Exit"},"Exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function isFailure<never, void>(self: Exit.Exit<never, void>): self is Exit.Failure<never>"},"isFailure")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, void>"},"exit")]),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`namespace console
var console: Console`},"console")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Console.error(message?: any, ...optionalParams: any[]): void (+1 overload)"},"error")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`Unexpected failure: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Failure<never>"},"exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(property) Failure<never>.cause: Cause<never>"},"cause")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])])],-1),TA={name:"14",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[_A,xA,kA]),_:1},16))}},SA=e("h1",null,"Resilience on failures",-1),RA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) function pipe<A>(a: A): A (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const retrySchedule: Schedule.Schedule<Tuple<[Tuple<[number, number]>, Option<number>]>, never, unknown, Duration.Duration>"},"retrySchedule")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Schedule.Schedule<number, never, unknown, Duration.Duration>, Schedule.Schedule<Tuple<[number, number]>, never, unknown, Tuple<[Duration.Duration, number]>>, Schedule.Schedule<...>, Schedule.Schedule<...>>(a: Schedule.Schedule<...>, ab: (a: Schedule.Schedule<...>) => Schedule.Schedule<...>, bc: (b: Schedule.Schedule<...>) => Schedule.Schedule<...>, cd: (c: Schedule.Schedule<...>) => Schedule.Schedule<...>): Schedule.Schedule<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function exponential(base: Duration.Duration, factor?: number | undefined): Schedule.Schedule<number, never, unknown, Duration.Duration>"},"exponential")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function millis<10>(self: 10): Duration.Duration"},"millis")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2.0"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const either: <number, never, unknown, number>(that: Schedule.Schedule<number, never, unknown, number>) => <State, Env_1, In, Out>(self: Schedule.Schedule<State, Env_1, In, Out>) => Schedule.Schedule<...>"},"either")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function spaced(duration: LazyArg<Duration.Duration>): Schedule.Schedule<number, never, unknown, number>"},"spaced")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function seconds<1>(self: 1): Duration.Duration"},"seconds")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"))),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const compose: <unknown, Option<number>, never, Duration.Duration>(that: Schedule.Schedule<Option<number>, never, unknown, Duration.Duration>) => <State, Env_1, In>(self: Schedule.Schedule<...>) => Schedule.Schedule<...>"},"compose")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const elapsed: Schedule.Schedule<Option<number>, never, unknown, Duration.Duration>"},"elapsed")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const whileOutput: <Duration.Duration>(f: Predicate<Duration.Duration>) => <State, Env_1, In>(self: Schedule.Schedule<State, Env_1, In, Duration.Duration>) => Schedule.Schedule<...>"},"whileOutput")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const lowerThenOrEqual: (that: Duration.Duration) => (self: Duration.Duration) => boolean"},"lowerThenOrEqual")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function seconds<30>(self: 30): Duration.Duration"},"seconds")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"30"),e("span",{style:{color:"#858585"}},")))")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<R, E, A>.IO<Http.FetchError, Response>, Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>, Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>(a: Effect.Effect.IO<...>, ab: (a: Effect.Effect.IO<...>) => Effect.Effect<...>, bc: (b: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect<R, E, A>.IO<Http.FetchError, Response>"},"request")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const flatMap: <Response, never, Http.JsonBodyError, unknown>(f: (a: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>, __tsplusTrace?: string | undefined) => <R, E>(self: Effect.Effect<...>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Effect.Effect.IO<Http.JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function retry<Tuple<[Tuple<[number, number]>, Option<number>]>, never, Http.FetchError | Http.JsonBodyError, Duration.Duration>(policy: LazyArg<Schedule.Schedule<Tuple<[Tuple<...>, Option<...>]>, never, Http.FetchError | Http.JsonBodyError, Duration.Duration>>, __tsplusTrace?: string | undefined): <R, A>(self: Effect.Effect<...>) => Effect.Effect<...>"},"retry")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Schedule.Schedule<Tuple<[Tuple<[number, number]>, Option<number>]>, never, unknown, Duration.Duration>, Schedule.Schedule<Tuple<[Tuple<[number, number]>, Option<...>]>, never, Http.FetchError | Http.JsonBodyError, Duration.Duration>>(a: Schedule.Schedule<...>, ab: (a: Schedule.Schedule<...>) => Schedule.Schedule<...>): Schedule.Schedule<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const retrySchedule: Schedule.Schedule<Tuple<[Tuple<[number, number]>, Option<number>]>, never, unknown, Duration.Duration>"},"retrySchedule")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const whileInput: <Http.FetchError | Http.JsonBodyError>(f: Predicate<Http.FetchError | Http.JsonBodyError>) => <State, Env_1, Out>(self: Schedule.Schedule<...>) => Schedule.Schedule<...>"},"whileInput")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: Http.FetchError | Http.JsonBodyError"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: Http.FetchError | Http.JsonBodyError"},"error")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) _tag: "FetchError" | "JsonBodyError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"JsonBodyError"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")])])])],-1),PA=e("p",null,[W("Note how the default schedule is composed locally with "),e("code",null,"Schedule.whileInput"),W(" in order to refine its behaviour.")],-1),OA={name:"15",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(jt,Ee(be(n)),{default:oe(()=>[SA,RA,PA]),_:1},16))}},$A=e("h1",null,"Failure Escalation",-1),MA=e("p",null,[W("To control the boundaries of explicitness of errors it may happend that you want to turn failures into defect, for example in the case of "),e("code",null,"getTodo"),W(" if after the retry policy we still have an error there is pretty much nothing else we can do with it and carrying the information at the type level may be both verbose and an implementation detail leak.")],-1),FA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect.RIO<never, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<R, E, A>.IO<Http.FetchError, Response>, Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>, Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>, Effect.Effect.RIO<...>>(a: Effect.Effect.IO<...>, ab: (a: Effect.Effect.IO<...>) => Effect.Effect<...>, bc: (b: Effect.Effect<...>) => Effect.Effect<...>, cd: (c: Effect.Effect<...>) => Effect.Effect.RIO<...>): Effect.Effect.RIO<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect<R, E, A>.IO<Http.FetchError, Response>"},"request")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const flatMap: <Response, never, Http.JsonBodyError, unknown>(f: (a: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>, __tsplusTrace?: string | undefined) => <R, E>(self: Effect.Effect<...>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Effect.Effect.IO<Http.JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function retry<Tuple<[Tuple<[number, number]>, Option<number>]>, never, Http.FetchError | Http.JsonBodyError, Duration.Duration>(policy: LazyArg<Schedule.Schedule<Tuple<[Tuple<...>, Option<...>]>, never, Http.FetchError | Http.JsonBodyError, Duration.Duration>>, __tsplusTrace?: string | undefined): <R, A>(self: Effect.Effect<...>) => Effect.Effect<...>"},"retry")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Schedule.Schedule<Tuple<[Tuple<[number, number]>, Option<number>]>, never, unknown, Duration.Duration>, Schedule.Schedule<Tuple<[Tuple<[number, number]>, Option<...>]>, never, Http.FetchError | Http.JsonBodyError, Duration.Duration>>(a: Schedule.Schedule<...>, ab: (a: Schedule.Schedule<...>) => Schedule.Schedule<...>): Schedule.Schedule<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const retrySchedule: Schedule.Schedule<Tuple<[Tuple<[number, number]>, Option<number>]>, never, unknown, Duration.Duration>"},"retrySchedule")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const whileInput: <Http.FetchError | Http.JsonBodyError>(f: Predicate<Http.FetchError | Http.JsonBodyError>) => <State, Env_1, Out>(self: Schedule.Schedule<...>) => Schedule.Schedule<...>"},"whileInput")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: Http.FetchError | Http.JsonBodyError"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: Http.FetchError | Http.JsonBodyError"},"error")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) _tag: "FetchError" | "JsonBodyError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"JsonBodyError"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"function orDie<R, E, A>(self: Effect.Effect<R, E, A>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.RIO<R, A>"},"orDie")])]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")])])])],-1),LA=e("p",null,[W("We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like "),e("code",null,"Effect.catchAllCause"),W(" or turn the error into a full "),e("code",null,"Cause<E>"),W(" using "),e("code",null,"Effect.sandbox"),W(".")],-1),IA={name:"16",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(jt,Ee(be(n)),{default:oe(()=>[$A,MA,FA,LA]),_:1},16))}},HA=e("h1",null,"Interruption",-1),jA=e("p",null,"Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.",-1),NA=e("p",null,[W("The following snippet uses the "),e("code",null,"Effect.asyncInterrupt"),W(" constructor to create an interruptible fetch wrapper.")],-1),qA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Effect"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Either"},"Either")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@tsplus/stdlib/data/Either"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect<never, FetchError, Response>"},"request")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: RequestInfo"},"input")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type RequestInfo = string | Request"},"RequestInfo")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) init: RequestInit | undefined"},"init")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface RequestInit"},"RequestInit")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"undefined"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function asyncInterrupt<never, FetchError, Response>(register: (callback: (_: Effect.Effect<never, FetchError, Response>) => void) => Either.Either<Effect.Effect<R, E, A>.RIO<never, void>, Effect.Effect<...>>, __tsplusTrace?: string | undefined): Effect.Effect<...>"},"asyncInterrupt")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class FetchError"},"FetchError")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Response"},"Response")]),e("span",{style:{color:"#858585"}},">(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) resume: (_: Effect.Effect<never, FetchError, Response>) => void"},"resume")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"var AbortController: new () => AbortController"},"AbortController")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>"},"fetch")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: RequestInfo"},"input")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) init: RequestInit | undefined"},"init")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"??"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) RequestInit.signal?: AbortSignal | null | undefined"},"signal")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) AbortController.signal: AbortSignal"},"signal")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Promise<Response>.then<void, never>(onfulfilled?: ((value: Response) => void | PromiseLike<void>) | null | undefined, onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined): Promise<...>"},"then")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) response: Response"},"response")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) resume: (_: Effect.Effect<never, FetchError, Response>) => void"},"resume")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function succeed<Response>(f: LazyArg<Response>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.UIO<Response>"},"succeed")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) response: Response"},"response")]),e("span",{style:{color:"#858585"}},"));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Promise<void>.catch<void>(onrejected?: ((reason: any) => void | PromiseLike<void>) | null | undefined): Promise<void>"},"catch")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: any"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) resume: (_: Effect.Effect<never, FetchError, Response>) => void"},"resume")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function fail<FetchError>(error: LazyArg<FetchError>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.IO<FetchError, never>"},"fail")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"constructor FetchError(error: unknown): FetchError"},"FetchError")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: any"},"error")]),e("span",{style:{color:"#858585"}},")));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"});")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Either"},"Either")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function left<Effect.Effect<R, E, A>.UIO<void>>(e: Effect.Effect.UIO<void>): Either.Either<Effect.Effect.UIO<void>, never>"},"left")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function succeed<void>(f: LazyArg<void>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.UIO<void>"},"succeed")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) AbortController.abort(): void (+1 overload)"},"abort")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"});")])])])],-1),JA=e("p",null,"That\u2019s it interruption is propagated through program execution without explicitly passing signals or controllers.",-1),WA={name:"17",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(jt,Ee(be(n)),{default:oe(()=>[HA,jA,NA,qA,JA]),_:1},16))}},VA=e("h1",null,"Controlled concurrency",-1),zA=e("p",null,[W("The following snippet of code describes a program that when executed fetches a list of "),e("code",null,"TODOs"),W(" from the API in parallel, the execution will terminate at the first request failure and all ongoing requests will be interrupted.")],-1),UA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAllPar<never, Http.FetchError | Http.JsonBodyError, unknown>(as: LazyArg<Collection<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>>, __tsplusTrace?: string | undefined): Effect.Effect<...>
export collectAllPar`},"collectAllPar")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"));")])])])],-1),KA=e("p",null,[W("Controlling how many operations are allowed to run in parallel is done by using the "),e("code",null,"Effect.withParallelism"),W(" aspect.")],-1),GA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>, Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAllPar<never, Http.FetchError | Http.JsonBodyError, unknown>(as: LazyArg<Collection<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>>, __tsplusTrace?: string | undefined): Effect.Effect<...>
export collectAllPar`},"collectAllPar")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},")),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const withParallelism: (n: number, __tsplusTrace?: string | undefined) => <R, E, A>(self: Effect.Effect<R, E, A>) => Effect.Effect<R, E, A>"},"withParallelism")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"15"),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},");")])])])],-1),YA=e("p",null,"Or leave it to the caller:",-1),ZA=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAllPar<never, Http.FetchError | Http.JsonBodyError, unknown>(as: LazyArg<Collection<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>>, __tsplusTrace?: string | undefined): Effect.Effect<...>
export collectAllPar`},"collectAllPar")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"));")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const program: Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>"},"program")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>, Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>"},"getTodos")]),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"]),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const withParallelism: (n: number, __tsplusTrace?: string | undefined) => <R, E, A>(self: Effect.Effect<R, E, A>) => Effect.Effect<R, E, A>"},"withParallelism")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"))")])])])],-1),QA={name:"18",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[VA,zA,UA,KA,GA,YA,ZA]),_:1},16))}},XA=e("h1",null,"Metrics",-1),e7=e("p",null,"Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages.",-1),t7=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) function pipe<A>(a: A): A (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Metrics"')]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Todos"},"Todos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./todos"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const GetTodoCount: Metrics.Metric.Counter<number>"},"GetTodoCount")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function counter(name: string): Metrics.Metric<Type, In, Out>.Counter<number>"},"counter")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"GetTodoCount"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, FetchError | JsonBodyError, unknown>, Effect.Effect<never, FetchError | JsonBodyError, unknown>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Todos"},"Todos")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const tap: <unknown, never, never, void>(f: (a: unknown) => Effect.Effect<never, never, void>, __tsplusTrace?: string | undefined) => <R2, E2>(self: Effect.Effect<R2, E2, unknown>) => Effect.Effect<...>"},"tap")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function increment(self: Metrics.Metric<Type, In, Out>.Counter<number>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.UIO<void>"},"increment")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const GetTodoCount: Metrics.Metric.Counter<number>"},"GetTodoCount")]),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")])])])],-1),n7=e("p",null,"Or by making increment part of the metric definition:",-1),o7=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const GetTodoCount: Metrics.Metric<Metrics.MetricKeyType.CounterKey, unknown, Metrics.MetricState.CounterState>"},"GetTodoCount")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Metrics.Metric<Type, In, Out>.Counter<number>, Metrics.Metric<Metrics.MetricKeyType.CounterKey, unknown, Metrics.MetricState.CounterState>>(a: Metrics.Metric.Counter<number>, ab: (a: Metrics.Metric.Counter<...>) => Metrics.Metric<...>): Metrics.Metric<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function counter(name: string): Metrics.Metric<Type, In, Out>.Counter<number>"},"counter")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"GetTodoCount"'),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const fromConst: <number>(input: LazyArg<number>) => <Type, Out>(self: Metrics.Metric<Type, number, Out>) => Metrics.Metric<Type, unknown, Out>"},"fromConst")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const GetTodoCount: Metrics.Metric
<never, FetchError | JsonBodyError, unknown>(effect: Effect.Effect<never, FetchError | JsonBodyError, unknown>, __tsplusTrace?: string | undefined) => Effect.Effect<...>`},"GetTodoCount")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Todos"},"Todos")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"))")])])])],-1),s7={name:"19",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[XA,e7,t7,n7,o7]),_:1},16))}},r7=e("h1",null,"Tracing",-1),l7=e("p",null,[W("We are currently integrating with OpenTelemetry via the ecosystem package "),e("code",null,"@effect/otel"),W(" but we are working on a native representation of spans and tracing following the same principles applied for "),e("code",null,"Metrics")],-1),a7=e("pre",{class:"shiki vitesse-dark",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"pipe"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Todos"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./todos"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"}),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getTodo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"pipe"),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Todos"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getTodo"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"withSpanAttribute"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"id"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"withSpan"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"GetTodo"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"}),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getTodos"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"pipe"),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Todos"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getTodos"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"withSpanAttribute"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"ids"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"withSpan"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"GetTodos"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")])])])],-1),c7=e("p",null,[W("Note: This isn\u2019t yet ready but we are actively working on it! for the time being you\u2019ll find "),e("code",null,"withSpan"),W(" in the otel ecosystem package.")],-1),i7={name:"20",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[r7,l7,a7,c7]),_:1},16))}},p7=e("h1",null,"Dependency Injection",-1),u7=e("p",null,"Effect has native support for Context propagation, think of it like the React context on type-safe steroids.",-1),d7=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Chunk"},"Chunk")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) interface Tag<Service>
(alias) namespace Tag
(alias) const Tag: TagOps
import Tag`},"Tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@tsplus/stdlib/service/Tag"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface TodoRepo"},"TodoRepo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(property) TodoRepo.getTodo: (id: number) => Effect.Effect<never, never, unknown>"},"getTodo")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Effect<R, E, A>
namespace Effect`},"Effect")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(property) TodoRepo.getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>"},"getTodos")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Effect<R, E, A>
namespace Effect`},"Effect")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Chunk"},"Chunk")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Chunk<A>
namespace Chunk`},"Chunk")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},">>")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const TodoRepo: Tag<TodoRepo>"},"TodoRepo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) Tag<TodoRepo>(): Tag<TodoRepo>
import Tag`},"Tag")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface TodoRepo"},"TodoRepo")]),e("span",{style:{color:"#858585"}},">()")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const program: Effect.Effect<TodoRepo, never, number>"},"program")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function gen<Effect.GenEffect<TodoRepo, never, TodoRepo> | Effect.GenEffect<never, never, Chunk.Chunk<unknown>> | Effect.GenEffect<never, never, void>, number>(f: (i: Effect.Adapter) => Generator<...>, __tsplusTrace?: string | undefined): Effect.Effect<...>"},"gen")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#4D9375"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) $: Effect.Adapter"},"$")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const Todos: TodoRepo"},"Todos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"yield*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(parameter) $: Effect.Adapter
<TodoRepo>(_: Tag<TodoRepo>, __tsplusTrace?: string | undefined) => Effect.GenEffect<TodoRepo, never, TodoRepo> (+4 overloads)`},"$")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const TodoRepo: Tag<TodoRepo>"},"TodoRepo")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const todos: Chunk.Chunk<unknown>"},"todos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"yield*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(parameter) $: Effect.Adapter
<never, never, Chunk.Chunk<unknown>>(_: Effect.Effect<never, never, Chunk.Chunk<unknown>>, __tsplusTrace?: string | undefined) => Effect.GenEffect<never, never, Chunk.Chunk<unknown>> (+4 overloads)`},"$")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const Todos: TodoRepo"},"Todos")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(property) TodoRepo.getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>"},"getTodos")]),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},"]))")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const todo: unknown"},"todo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const todos: Chunk.Chunk<unknown>"},"todos")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"yield*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(parameter) $: Effect.Adapter
<never, never, void>(_: Effect.Effect<never, never, void>, __tsplusTrace?: string | undefined) => Effect.GenEffect<never, never, void> (+4 overloads)`},"$")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function log(message: LazyArg<string>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.UIO<void>"},"log")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"`todo: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"const todo: unknown"},"todo")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Chunk"},"Chunk")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function size<unknown>(self: Chunk.Chunk<unknown>): number"},"size")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const todos: Chunk.Chunk<unknown>"},"todos")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])])],-1),f7={name:"21",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[p7,u7,d7]),_:1},16))}},y7=e("h1",null,"Dependency Injection",-1),m7=e("p",null,[W("Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using "),e("code",null,"Layer")],-1),h7=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Layer"')]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Impl"},"Impl")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./todos-impl"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const LiveTodoRepo: Layer.Layer<never, never, TodoRepo>"},"LiveTodoRepo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`function fromEffect<TodoRepo, never, never, {
    getTodo: (id: number) => Effect.Effect<R, E, A>.RIO<never, unknown>;
    getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>;
}>(tag: Tag<...>, effect: LazyArg<...>): Layer.Layer<...>`},"fromEffect")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const TodoRepo: Tag<TodoRepo>"},"TodoRepo")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`function succeed<{
    getTodo: (id: number) => Effect.Effect<R, E, A>.RIO<never, unknown>;
    getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>;
}>(f: LazyArg<{
    getTodo: (id: number) => Effect.Effect<R, E, A>.RIO<never, unknown>;
    getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>;
}>, __tsplusTrace?: string | undefined): Effect.Effect<R, E, A>.UIO<...>`},"succeed")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"({")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) getTodo: (id: number) => Effect.Effect.RIO<never, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Impl"},"Impl")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect.RIO<never, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>"},"getTodos")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Impl"},"Impl")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>"},"getTodos")])]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}))")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, number>"},"main")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<TodoRepo, never, number>, Effect.Effect<never, never, number>>(a: Effect.Effect<TodoRepo, never, number>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const program: Effect.Effect<TodoRepo, never, number>"},"program")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const provideSomeLayer: <never, never, TodoRepo>(layer: Layer.Layer<never, never, TodoRepo>, __tsplusTrace?: string | undefined) => <R, E, A>(self: Effect.Effect<R, E, A>) => Effect.Effect<...>"},"provideSomeLayer")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const LiveTodoRepo: Layer.Layer<never, never, TodoRepo>"},"LiveTodoRepo")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const unsafeRunAsyncWith: <never, number>(effect: Effect.Effect<never, never, number>, k: (exit: Exit.Exit<never, number>) => void, __tsplusTrace?: string | undefined) => void"},"unsafeRunAsyncWith")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, number>"},"main")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, number>"},"exit")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Exit"},"Exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function isFailure<never, number>(self: Exit.Exit<never, number>): self is Exit.Failure<never>"},"isFailure")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, number>"},"exit")]),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`namespace console
var console: Console`},"console")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Console.error(message?: any, ...optionalParams: any[]): void (+1 overload)"},"error")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`Unexpected failure: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Failure<never>"},"exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(property) Failure<never>.cause: Cause<never>"},"cause")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])])],-1),g7={name:"22",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[y7,m7,h7]),_:1},16))}},v7=e("h1",null,"Dependency Injection",-1),D7=e("p",null,[W("Layers represents modules of your application and they compose very well, you could imagine having a service "),e("code",null,"TodoRepo"),W(" which constructors depends on "),e("code",null,"Http"),W(" and we have a program that uses both "),e("code",null,"TodoRepo | Http")],-1),A7=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Layer"')]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const LiveHttp: Layer.Layer<never, never, Http>"},"LiveHttp")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Layer<RIn, E, ROut>"},"Layer")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Http"},"Http")]),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>"},"LiveTodoRepo")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Layer<RIn, E, ROut>"},"Layer")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Http"},"Http")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface TodoRepo"},"TodoRepo")]),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const AppContext: Layer.Layer<never, never, TodoRepo | Http>"},"AppContext")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Layer.Layer<never, never, Http>, Layer.Layer<never, never, TodoRepo | Http>>(a: Layer.Layer<never, never, Http>, ab: (a: Layer.Layer<...>) => Layer.Layer<...>): Layer.Layer<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const LiveHttp: Layer.Layer<never, never, Http>"},"LiveHttp")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const andTo: <Http, never, TodoRepo>(that: Layer.Layer<Http, never, TodoRepo>) => <RIn, E, ROut>(self: Layer.Layer<RIn, E, ROut>) => Layer.Layer<...>"},"andTo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>"},"LiveTodoRepo")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const program: Effect.Effect<TodoRepo | Http, never, void>"},"program")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Effect<R, E, A>
namespace Effect`},"Effect")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Http"},"Http")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface TodoRepo"},"TodoRepo")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"void"),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, void>"},"main")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<TodoRepo | Http, never, void>, Effect.Effect<never, never, void>>(a: Effect.Effect<TodoRepo | Http, never, void>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const program: Effect.Effect<TodoRepo | Http, never, void>"},"program")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const provideSomeLayer: <never, never, TodoRepo | Http>(layer: Layer.Layer<never, never, TodoRepo | Http>, __tsplusTrace?: string | undefined) => <R, E, A>(self: Effect.Effect<...>) => Effect.Effect<...>"},"provideSomeLayer")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const AppContext: Layer.Layer<never, never, TodoRepo | Http>"},"AppContext")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const unsafeRunAsyncWith: <never, void>(effect: Effect.Effect<never, never, void>, k: (exit: Exit.Exit<never, void>) => void, __tsplusTrace?: string | undefined) => void"},"unsafeRunAsyncWith")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, void>"},"main")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, void>"},"exit")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Exit"},"Exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function isFailure<never, void>(self: Exit.Exit<never, void>): self is Exit.Failure<never>"},"isFailure")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, void>"},"exit")]),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`namespace console
var console: Console`},"console")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Console.error(message?: any, ...optionalParams: any[]): void (+1 overload)"},"error")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`Unexpected failure: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Failure<never>"},"exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(property) Failure<never>.cause: Cause<never>"},"cause")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])])],-1),B7={name:"23",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[v7,D7,A7]),_:1},16))}},C7=e("h1",null,"Recap!",-1),b7=e("p",null,"we\u2019ve been only scratching the surface of Effect and a lot of its power hasn\u2019t made it to this presentation but we\u2019ve seen how to deal with:",-1),E7=e("ul",null,[e("li",null,"Errors"),e("li",null,"Retries"),e("li",null,"Concurrency"),e("li",null,"Interruption"),e("li",null,"Logging"),e("li",null,"Tracing"),e("li",null,"Metrics"),e("li",null,"Dependencies")],-1),w7={name:"24",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>{const r=ir;return E(),K(jt,Ee(be(n)),{default:oe(()=>[C7,b7,U(r,null,{default:oe(()=>[E7]),_:1})]),_:1},16)}}},_7=e("h1",null,"What\u2019s in the Box?",-1),x7=e("p",null,[W("When looking into Effect you\u2019ll find a rich set of modules to deal with much more than what we\u2019ve seen, just in "),e("code",null,"@effect/core"),W(" you\u2019ll find:")],-1),k7=e("ul",null,[e("li",null,"Effect: Generic Program Definition"),e("li",null,"Cause: Representing potentially multiple failure causes of different kinds"),e("li",null,"Scope: Safe Resource Management to model things like database connections"),e("li",null,"Fiber: Low Level Concurrency Primitives"),e("li",null,"Queue: Work-Stealing Concurrent & Backpressured Queues"),e("li",null,"Hub: Like a Pub/Sub for Effects"),e("li",null,"Layer: Context Construction"),e("li",null,"Metrics: Prometheus Compatible Metrics"),e("li",null,"Tracing: OpenTelemetry Compatible Tracing")],-1),T7={name:"25",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>{const r=ir;return E(),K(ze,Ee(be(n)),{default:oe(()=>[_7,x7,U(r,null,{default:oe(()=>[k7]),_:1})]),_:1},16)}}},S7=e("h1",null,"What\u2019s in the Box?",-1),R7=e("p",null,[W("When looking into Effect you\u2019ll find a rich set of modules to deal with much more than what we\u2019ve seen, just in "),e("code",null,"@effect/core"),W(" you\u2019ll find:")],-1),P7=e("ul",null,[e("li",null,"Logger: Multi-Level & Abstract Logger"),e("li",null,"Ref: Mutable Reference to immutable State with potentially Syncronized access and updates"),e("li",null,"Schedule: Time-based Scheduling Policies"),e("li",null,"Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)"),e("li",null,"Deferred: Like a Promise of an Effect that may be fulfilled at a later point"),e("li",null,"STM: Transactional Data Structures & Coordination"),e("li",null,"Semaphore: Concurrency Control"),e("li",null,"Clock: System Clock & Time Utilities"),e("li",null,"Random: Deterministic Seeded Random Utilities"),e("li",null,"Runtime: Runtime Configuration and Runner"),e("li",null,"Supervisor: Fiber Monitoring")],-1),O7={name:"26",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>{const r=ir;return E(),K(ze,Ee(be(n)),{default:oe(()=>[S7,R7,U(r,null,{default:oe(()=>[P7]),_:1})]),_:1},16)}}};const $7=e("h1",null,"Early adopters feedback",-1),M7=e("br",null,null,-1),F7=e("p",null,[e("img",{src:"https://i.imgur.com/ZUKacox.png",alt:"Imgur"})],-1),L7={name:"27",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(ze,Ee(be(n)),{default:oe(()=>[$7,M7,F7]),_:1},16))}},I7=e("h1",null,"Thank you!",-1),H7=e("p",null,"Where to go next?",-1),j7=e("p",null,[W("Check out our "),e("a",{href:"https://www.effect.website/",target:"_blank",rel:"noopener"},"Website")],-1),N7=e("p",null,[W("Join our "),e("a",{href:"https://discord.gg/cWtHKdAXwC",target:"_blank",rel:"noopener"},"Discord"),W(" Community")],-1),q7=e("p",null,[W("Follow us on "),e("a",{href:"https://www.youtube.com/channel/UC8wNHsXmEuoikbwRdLeoJQg",target:"_blank",rel:"noopener"},"YouTube"),W(" for "),e("a",{href:"https://www.youtube.com/playlist?list=PLDf3uQLaK2B8kVv0PS1bwMwzENHpq48Ox",target:"_blank",rel:"noopener"},"Effect Time")],-1),J7=e("p",null,[W("Follow us on Twitter: "),e("a",{href:"https://twitter.com/effectTS_",target:"_blank",rel:"noopener"},"Effect"),W(", "),e("a",{href:"https://twitter.com/MichaelArnaldi",target:"_blank",rel:"noopener"},"Me"),W(", "),e("a",{href:"https://twitter.com/matechsdigital",target:"_blank",rel:"noopener"},"MATECHS")],-1),W7={name:"28",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return q(Z),(o,s)=>(E(),K(jt,Ee(be(n)),{default:oe(()=>[I7,H7,j7,N7,q7,J7]),_:1},16))}};var V7=[{path:"1",name:"page-1",component:vD,meta:{layout:"cover",title:"Tackling the hardest problems in JavaScript",lineNumbers:!0,canvasWidth:1024,srcSequence:"./slides/01-cover.md",slide:{raw:null,title:"Tackling the hardest problems in JavaScript",level:1,content:`# Tackling the hardest problems in JavaScript

## A gentle introduction to Effect

Michael Arnaldi - CEO @ MATECHS

Workers Conf 2022`,frontmatter:{layout:"cover",title:"Tackling the hardest problems in JavaScript",lineNumbers:!0,canvasWidth:1024,srcSequence:"./slides/01-cover.md"},index:0,start:0,end:13,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/01-cover.md",raw:`---
layout: cover
title: Tackling the hardest problems in JavaScript
---

# Tackling the hardest problems in JavaScript

## A gentle introduction to Effect

Michael Arnaldi - CEO @ MATECHS

Workers Conf 2022
`,title:"Tackling the hardest problems in JavaScript",level:1,content:`# Tackling the hardest problems in JavaScript

## A gentle introduction to Effect

Michael Arnaldi - CEO @ MATECHS

Workers Conf 2022`,frontmatter:{layout:"cover",title:"Tackling the hardest problems in JavaScript"},index:0,start:0,end:13},inline:{raw:`---
title: Tackling the hardest problems in JavaScript
lineNumbers: true
canvasWidth: 1024
src: ./slides/01-cover.md
---
`,title:"Tackling the hardest problems in JavaScript",level:1,content:"",frontmatter:{title:"Tackling the hardest problems in JavaScript",lineNumbers:!0,canvasWidth:1024},index:0,start:0,end:7},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/01-cover.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:bD,meta:{layout:"full",title:"POC Like Code",srcSequence:"./slides/02-motivation.md",slide:{raw:null,title:"POC Like Code",level:1,content:`# POC Like Code

Building a small application that fetches a list of \`TODOs\` from the [{JSON} Placeholder](https://jsonplaceholder.typicode.com) API.

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  
  return await res.json();
};

const getTodos = async (ids: number[]) => {
  const todos: unknown[] = [];

  for (const id of ids) {
    todos.push(await getTodo(id));
  }

  return todos;
};

const main = async () => {
  const todos = await getTodos([1, 2, 3, 4, 5]);

  for (const todo of todos) {
    console.log(\`Got a todo: \${JSON.stringify(todo)}\`);
  }
};
\`\`\``,frontmatter:{layout:"full",title:"POC Like Code",srcSequence:"./slides/02-motivation.md"},index:1,start:0,end:36,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",raw:`---
layout: full
---

# POC Like Code

Building a small application that fetches a list of \`TODOs\` from the [{JSON} Placeholder](https://jsonplaceholder.typicode.com) API.

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  
  return await res.json();
};

const getTodos = async (ids: number[]) => {
  const todos: unknown[] = [];

  for (const id of ids) {
    todos.push(await getTodo(id));
  }

  return todos;
};

const main = async () => {
  const todos = await getTodos([1, 2, 3, 4, 5]);

  for (const todo of todos) {
    console.log(\`Got a todo: \${JSON.stringify(todo)}\`);
  }
};
\`\`\`
`,title:"POC Like Code",level:1,content:`# POC Like Code

Building a small application that fetches a list of \`TODOs\` from the [{JSON} Placeholder](https://jsonplaceholder.typicode.com) API.

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  
  return await res.json();
};

const getTodos = async (ids: number[]) => {
  const todos: unknown[] = [];

  for (const id of ids) {
    todos.push(await getTodo(id));
  }

  return todos;
};

const main = async () => {
  const todos = await getTodos([1, 2, 3, 4, 5]);

  for (const todo of todos) {
    console.log(\`Got a todo: \${JSON.stringify(todo)}\`);
  }
};
\`\`\``,frontmatter:{layout:"full",title:"POC Like Code"},index:0,start:0,end:36},inline:{raw:`---
src: ./slides/02-motivation.md
---
`,content:"",frontmatter:{},index:1,start:7,end:11},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:TD,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# From POC to Production

Production code has to deal with reality, and reality is everything but the happy path. 

Let's see what it takes!
`,title:"From POC to Production",level:1,content:`# From POC to Production

Production code has to deal with reality, and reality is everything but the happy path. 

Let's see what it takes!`,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:2,start:36,end:46,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",raw:`---
layout: center
---

# From POC to Production

Production code has to deal with reality, and reality is everything but the happy path. 

Let's see what it takes!
`,title:"From POC to Production",level:1,content:`# From POC to Production

Production code has to deal with reality, and reality is everything but the happy path. 

Let's see what it takes!`,frontmatter:{layout:"center"},index:1,start:36,end:46},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:FD,meta:{layout:"full",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: full
---

# Concurrency

Maximising efficiency requires doing things in parallel as much as possible.

Unbounded parallelism isn't too hard:

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const todos: Promise<unknown>[] = [];
  for (const id of ids) {
    todos.push(getTodo(id));
  }
  return await Promise.all(todos);
};
\`\`\`

Things gets more complicated when we want to control the concurrency.

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const chunkSize = 5;
  const todos: unknown[] = [];
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize);
    todos.push(await Promise.all(chunk.map(getTodo)))
  }
  return todos;
};
\`\`\`
`,title:"Concurrency",level:1,content:`# Concurrency

Maximising efficiency requires doing things in parallel as much as possible.

Unbounded parallelism isn't too hard:

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const todos: Promise<unknown>[] = [];
  for (const id of ids) {
    todos.push(getTodo(id));
  }
  return await Promise.all(todos);
};
\`\`\`

Things gets more complicated when we want to control the concurrency.

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const chunkSize = 5;
  const todos: unknown[] = [];
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize);
    todos.push(await Promise.all(chunk.map(getTodo)))
  }
  return todos;
};
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/02-motivation.md"},index:3,start:46,end:94,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",raw:`---
layout: full
---

# Concurrency

Maximising efficiency requires doing things in parallel as much as possible.

Unbounded parallelism isn't too hard:

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const todos: Promise<unknown>[] = [];
  for (const id of ids) {
    todos.push(getTodo(id));
  }
  return await Promise.all(todos);
};
\`\`\`

Things gets more complicated when we want to control the concurrency.

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const chunkSize = 5;
  const todos: unknown[] = [];
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize);
    todos.push(await Promise.all(chunk.map(getTodo)))
  }
  return todos;
};
\`\`\`
`,title:"Concurrency",level:1,content:`# Concurrency

Maximising efficiency requires doing things in parallel as much as possible.

Unbounded parallelism isn't too hard:

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const todos: Promise<unknown>[] = [];
  for (const id of ids) {
    todos.push(getTodo(id));
  }
  return await Promise.all(todos);
};
\`\`\`

Things gets more complicated when we want to control the concurrency.

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const chunkSize = 5;
  const todos: unknown[] = [];
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize);
    todos.push(await Promise.all(chunk.map(getTodo)))
  }
  return todos;
};
\`\`\``,frontmatter:{layout:"full"},index:2,start:46,end:94},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:qD,meta:{layout:"full",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: full
---

# Concurrency

Is that it? 

We are not really maximising parallelism, we are simply chunking up requests... This may be better:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 3px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = (ids: number[], limit = 5) => {
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => reject(err));
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
\`\`\`
`,title:"Concurrency",level:1,content:`# Concurrency

Is that it? 

We are not really maximising parallelism, we are simply chunking up requests... This may be better:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 3px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = (ids: number[], limit = 5) => {
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => reject(err));
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/02-motivation.md"},index:4,start:94,end:149,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",raw:`---
layout: full
---

# Concurrency

Is that it? 

We are not really maximising parallelism, we are simply chunking up requests... This may be better:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 3px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = (ids: number[], limit = 5) => {
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => reject(err));
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
\`\`\`
`,title:"Concurrency",level:1,content:`# Concurrency

Is that it? 

We are not really maximising parallelism, we are simply chunking up requests... This may be better:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 3px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`);
  return await res.json();
};
// ---cut---
const getTodos = (ids: number[], limit = 5) => {
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => reject(err));
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
\`\`\``,frontmatter:{layout:"full"},index:3,start:94,end:149},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:KD,meta:{layout:"full",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: full
---

# Interruption

Ongoing operations should be interrupted on failures:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 11px;
}
pre .code-container .line {
  padding-bottom: 0px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>


\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, { signal: opt?.signal });
  return await res.json();
};
const getTodos = (ids: number[], opt?: { limit?: number; signal?: AbortSignal; }) => {
  const limit = opt?.limit ?? 5;
  const controller = new AbortController();
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  if (opt?.signal) {
    opt.signal.addEventListener("abort", () => {
      controller.abort();
    });
  }
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId, { signal: controller.signal }).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => {
          controller.abort();
          return reject(err);
        });
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
\`\`\`

And we still don't have interruption on program shutdown, and especially async interruption...
`,title:"Interruption",level:1,content:`# Interruption

Ongoing operations should be interrupted on failures:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 11px;
}
pre .code-container .line {
  padding-bottom: 0px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>


\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, { signal: opt?.signal });
  return await res.json();
};
const getTodos = (ids: number[], opt?: { limit?: number; signal?: AbortSignal; }) => {
  const limit = opt?.limit ?? 5;
  const controller = new AbortController();
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  if (opt?.signal) {
    opt.signal.addEventListener("abort", () => {
      controller.abort();
    });
  }
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId, { signal: controller.signal }).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => {
          controller.abort();
          return reject(err);
        });
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
\`\`\`

And we still don't have interruption on program shutdown, and especially async interruption...`,frontmatter:{layout:"full",srcSequence:"./slides/02-motivation.md"},index:5,start:149,end:215,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",raw:`---
layout: full
---

# Interruption

Ongoing operations should be interrupted on failures:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 11px;
}
pre .code-container .line {
  padding-bottom: 0px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>


\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, { signal: opt?.signal });
  return await res.json();
};
const getTodos = (ids: number[], opt?: { limit?: number; signal?: AbortSignal; }) => {
  const limit = opt?.limit ?? 5;
  const controller = new AbortController();
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  if (opt?.signal) {
    opt.signal.addEventListener("abort", () => {
      controller.abort();
    });
  }
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId, { signal: controller.signal }).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => {
          controller.abort();
          return reject(err);
        });
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
\`\`\`

And we still don't have interruption on program shutdown, and especially async interruption...
`,title:"Interruption",level:1,content:`# Interruption

Ongoing operations should be interrupted on failures:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 11px;
}
pre .code-container .line {
  padding-bottom: 0px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>


\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, { signal: opt?.signal });
  return await res.json();
};
const getTodos = (ids: number[], opt?: { limit?: number; signal?: AbortSignal; }) => {
  const limit = opt?.limit ?? 5;
  const controller = new AbortController();
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  if (opt?.signal) {
    opt.signal.addEventListener("abort", () => {
      controller.abort();
    });
  }
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId, { signal: controller.signal }).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => {
          controller.abort();
          return reject(err);
        });
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
\`\`\`

And we still don't have interruption on program shutdown, and especially async interruption...`,frontmatter:{layout:"full"},index:4,start:149,end:215},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:eA,meta:{layout:"full",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: full
---

# Resilience on errors

Our software should be resilient on failures, especially when dealing with things like http requests or any kind of network dependent activity.

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 2px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const callWithRetry = async <A>(
  fn: () => Promise<A>,
  opt?: { limit?: number; cap?: number; base?: number; exp?: number; },
  depth = 0
): Promise<A> => {
  try {
    return await fn();
  } catch (e) {
    if (depth > (opt?.limit ?? 10)) {
      throw e;
    }
    await wait(Math.min((opt?.base ?? 2) ** depth * (opt?.exp ?? 10), opt?.cap ?? 2000));
    return callWithRetry(fn, opt, depth + 1);
  }
};

const getTodo = (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> =>
  callWithRetry(async () => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, { signal: opt?.signal });
    return await res.json();
  }, { limit: 10, cap: 2000, base: 2, exp: 10 });
\`\`\`

That's a simple capped exponential backoff, missing timeouts and error specializaion.
`,title:"Resilience on errors",level:1,content:`# Resilience on errors

Our software should be resilient on failures, especially when dealing with things like http requests or any kind of network dependent activity.

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 2px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const callWithRetry = async <A>(
  fn: () => Promise<A>,
  opt?: { limit?: number; cap?: number; base?: number; exp?: number; },
  depth = 0
): Promise<A> => {
  try {
    return await fn();
  } catch (e) {
    if (depth > (opt?.limit ?? 10)) {
      throw e;
    }
    await wait(Math.min((opt?.base ?? 2) ** depth * (opt?.exp ?? 10), opt?.cap ?? 2000));
    return callWithRetry(fn, opt, depth + 1);
  }
};

const getTodo = (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> =>
  callWithRetry(async () => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, { signal: opt?.signal });
    return await res.json();
  }, { limit: 10, cap: 2000, base: 2, exp: 10 });
\`\`\`

That's a simple capped exponential backoff, missing timeouts and error specializaion.`,frontmatter:{layout:"full",srcSequence:"./slides/02-motivation.md"},index:6,start:215,end:266,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",raw:`---
layout: full
---

# Resilience on errors

Our software should be resilient on failures, especially when dealing with things like http requests or any kind of network dependent activity.

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 2px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const callWithRetry = async <A>(
  fn: () => Promise<A>,
  opt?: { limit?: number; cap?: number; base?: number; exp?: number; },
  depth = 0
): Promise<A> => {
  try {
    return await fn();
  } catch (e) {
    if (depth > (opt?.limit ?? 10)) {
      throw e;
    }
    await wait(Math.min((opt?.base ?? 2) ** depth * (opt?.exp ?? 10), opt?.cap ?? 2000));
    return callWithRetry(fn, opt, depth + 1);
  }
};

const getTodo = (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> =>
  callWithRetry(async () => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, { signal: opt?.signal });
    return await res.json();
  }, { limit: 10, cap: 2000, base: 2, exp: 10 });
\`\`\`

That's a simple capped exponential backoff, missing timeouts and error specializaion.
`,title:"Resilience on errors",level:1,content:`# Resilience on errors

Our software should be resilient on failures, especially when dealing with things like http requests or any kind of network dependent activity.

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 2px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const callWithRetry = async <A>(
  fn: () => Promise<A>,
  opt?: { limit?: number; cap?: number; base?: number; exp?: number; },
  depth = 0
): Promise<A> => {
  try {
    return await fn();
  } catch (e) {
    if (depth > (opt?.limit ?? 10)) {
      throw e;
    }
    await wait(Math.min((opt?.base ?? 2) ** depth * (opt?.exp ?? 10), opt?.cap ?? 2000));
    return callWithRetry(fn, opt, depth + 1);
  }
};

const getTodo = (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> =>
  callWithRetry(async () => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, { signal: opt?.signal });
    return await res.json();
  }, { limit: 10, cap: 2000, base: 2, exp: 10 });
\`\`\`

That's a simple capped exponential backoff, missing timeouts and error specializaion.`,frontmatter:{layout:"full"},index:5,start:215,end:266},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:sA,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# We haven't even started
We'll be needing to figure out a long list of further requirements.

<v-clicks>

- Logging
- Metrics
- Tracing
- Dependency Injection
- Etc.

</v-clicks>
`,title:"We haven't even started",level:1,content:`# We haven't even started
We'll be needing to figure out a long list of further requirements.

<v-clicks>

- Logging
- Metrics
- Tracing
- Dependency Injection
- Etc.

</v-clicks>`,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:7,start:266,end:283,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",raw:`---
layout: center
---

# We haven't even started
We'll be needing to figure out a long list of further requirements.

<v-clicks>

- Logging
- Metrics
- Tracing
- Dependency Injection
- Etc.

</v-clicks>
`,title:"We haven't even started",level:1,content:`# We haven't even started
We'll be needing to figure out a long list of further requirements.

<v-clicks>

- Logging
- Metrics
- Tracing
- Dependency Injection
- Etc.

</v-clicks>`,frontmatter:{layout:"center"},index:6,start:266,end:283},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:aA,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# What about Maintainability?

The code looked pretty awful even to understand, let alone extending it...

`,title:"What about Maintainability?",level:1,content:`# What about Maintainability?

The code looked pretty awful even to understand, let alone extending it...`,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:8,start:283,end:292,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",raw:`---
layout: center
---

# What about Maintainability?

The code looked pretty awful even to understand, let alone extending it...

`,title:"What about Maintainability?",level:1,content:`# What about Maintainability?

The code looked pretty awful even to understand, let alone extending it...`,frontmatter:{layout:"center"},index:7,start:283,end:292},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/02-motivation.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:iA,meta:{layout:"center",title:"Welcome to Effect",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:null,title:"Welcome to Effect",level:1,content:"# Welcome to Effect",frontmatter:{layout:"center",title:"Welcome to Effect",srcSequence:"./slides/03-intro-to-effect.md"},index:9,start:0,end:6,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Welcome to Effect
`,title:"Welcome to Effect",level:1,content:"# Welcome to Effect",frontmatter:{layout:"center",title:"Welcome to Effect"},index:0,start:0,end:6},inline:{raw:`---
src: ./slides/03-intro-to-effect.md
---
`,content:"",frontmatter:{},index:2,start:11,end:15},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:dA,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Creating a \`fetch\` wrapper

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Effect from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Effect.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
\`\`\`
`,title:"Creating a `fetch` wrapper",level:1,content:`# Creating a \`fetch\` wrapper

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Effect from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Effect.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:10,start:6,end:42,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Creating a \`fetch\` wrapper

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Effect from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Effect.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
\`\`\`
`,title:"Creating a `fetch` wrapper",level:1,content:`# Creating a \`fetch\` wrapper

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Effect from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Effect.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
\`\`\``,frontmatter:{layout:"full"},index:1,start:6,end:42},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:DA,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Common module

To simplify imports in your app it is a common pattern to have a \`common.ts\` module which includes a re-export of modules from both \`Effect\` and utilities like the following

\`\`\`ts twoslash
// @filename: http.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/02-http"
// @filename: common.ts
// ---cut---
export * as Effect from "@effect/core/io/Effect";
export * as Schedule from "@effect/core/io/Schedule";
export * as Duration from "@tsplus/stdlib/data/Duration";
export { pipe } from "@tsplus/stdlib/data/Function";
export * as Http from "./http";
\`\`\`

To be used like:

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http } from "./common";
\`\`\`

Pay attention to avoid cyclical dependencies by not using the \`common\` module in any of the modules that re-exports, tools like \`eslint\` and \`madge\` may help you prevent this mistake.
`,title:"Common module",level:1,content:`# Common module

To simplify imports in your app it is a common pattern to have a \`common.ts\` module which includes a re-export of modules from both \`Effect\` and utilities like the following

\`\`\`ts twoslash
// @filename: http.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/02-http"
// @filename: common.ts
// ---cut---
export * as Effect from "@effect/core/io/Effect";
export * as Schedule from "@effect/core/io/Schedule";
export * as Duration from "@tsplus/stdlib/data/Duration";
export { pipe } from "@tsplus/stdlib/data/Function";
export * as Http from "./http";
\`\`\`

To be used like:

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http } from "./common";
\`\`\`

Pay attention to avoid cyclical dependencies by not using the \`common\` module in any of the modules that re-exports, tools like \`eslint\` and \`madge\` may help you prevent this mistake.`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:11,start:42,end:79,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Common module

To simplify imports in your app it is a common pattern to have a \`common.ts\` module which includes a re-export of modules from both \`Effect\` and utilities like the following

\`\`\`ts twoslash
// @filename: http.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/02-http"
// @filename: common.ts
// ---cut---
export * as Effect from "@effect/core/io/Effect";
export * as Schedule from "@effect/core/io/Schedule";
export * as Duration from "@tsplus/stdlib/data/Duration";
export { pipe } from "@tsplus/stdlib/data/Function";
export * as Http from "./http";
\`\`\`

To be used like:

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http } from "./common";
\`\`\`

Pay attention to avoid cyclical dependencies by not using the \`common\` module in any of the modules that re-exports, tools like \`eslint\` and \`madge\` may help you prevent this mistake.
`,title:"Common module",level:1,content:`# Common module

To simplify imports in your app it is a common pattern to have a \`common.ts\` module which includes a re-export of modules from both \`Effect\` and utilities like the following

\`\`\`ts twoslash
// @filename: http.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/02-http"
// @filename: common.ts
// ---cut---
export * as Effect from "@effect/core/io/Effect";
export * as Schedule from "@effect/core/io/Schedule";
export * as Duration from "@tsplus/stdlib/data/Duration";
export { pipe } from "@tsplus/stdlib/data/Function";
export * as Http from "./http";
\`\`\`

To be used like:

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http } from "./common";
\`\`\`

Pay attention to avoid cyclical dependencies by not using the \`common\` module in any of the modules that re-exports, tools like \`eslint\` and \`madge\` may help you prevent this mistake.`,frontmatter:{layout:"center"},index:2,start:42,end:79},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:wA,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Using the \`fetch\` wrapper

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(() => ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError, unknown>
\`\`\`

Which can be read as \`one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown\`
`,title:"Using the `fetch` wrapper",level:1,content:`# Using the \`fetch\` wrapper

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(() => ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError, unknown>
\`\`\`

Which can be read as \`one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:12,start:79,end:113,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Using the \`fetch\` wrapper

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(() => ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError, unknown>
\`\`\`

Which can be read as \`one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown\`
`,title:"Using the `fetch` wrapper",level:1,content:`# Using the \`fetch\` wrapper

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(() => ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError, unknown>
\`\`\`

Which can be read as \`one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown\``,frontmatter:{layout:"full"},index:3,start:79,end:113},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:TA,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Handling Failures

Effect programs when executed may encounter failure due to predictable circumstances that may trigger recovery procedures and unexpected exceptions.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, Exit, pipe } from "./common";
import * as Todos from "./todos";

export const program = Effect.struct({
  first: Todos.getTodo(1),
  second: Todos.getTodo(2)
})

export const main = pipe(
  program,
  Effect.flatMap((todos) => Effect.logInfo(() => \`Todos: \${JSON.stringify(todos)}\`)),
  Effect.catchTag("FetchError", (error) => Effect.logError(() => \`FetchError: \${JSON.stringify(error)}\`)),
  Effect.catchTag("JsonBodyError", (error) => Effect.logError(() => \`JsonBodyError: \${JSON.stringify(error)}\`))
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`
`,title:"Handling Failures",level:1,content:`# Handling Failures

Effect programs when executed may encounter failure due to predictable circumstances that may trigger recovery procedures and unexpected exceptions.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, Exit, pipe } from "./common";
import * as Todos from "./todos";

export const program = Effect.struct({
  first: Todos.getTodo(1),
  second: Todos.getTodo(2)
})

export const main = pipe(
  program,
  Effect.flatMap((todos) => Effect.logInfo(() => \`Todos: \${JSON.stringify(todos)}\`)),
  Effect.catchTag("FetchError", (error) => Effect.logError(() => \`FetchError: \${JSON.stringify(error)}\`)),
  Effect.catchTag("JsonBodyError", (error) => Effect.logError(() => \`JsonBodyError: \${JSON.stringify(error)}\`))
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:13,start:113,end:153,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Handling Failures

Effect programs when executed may encounter failure due to predictable circumstances that may trigger recovery procedures and unexpected exceptions.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, Exit, pipe } from "./common";
import * as Todos from "./todos";

export const program = Effect.struct({
  first: Todos.getTodo(1),
  second: Todos.getTodo(2)
})

export const main = pipe(
  program,
  Effect.flatMap((todos) => Effect.logInfo(() => \`Todos: \${JSON.stringify(todos)}\`)),
  Effect.catchTag("FetchError", (error) => Effect.logError(() => \`FetchError: \${JSON.stringify(error)}\`)),
  Effect.catchTag("JsonBodyError", (error) => Effect.logError(() => \`JsonBodyError: \${JSON.stringify(error)}\`))
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`
`,title:"Handling Failures",level:1,content:`# Handling Failures

Effect programs when executed may encounter failure due to predictable circumstances that may trigger recovery procedures and unexpected exceptions.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, Exit, pipe } from "./common";
import * as Todos from "./todos";

export const program = Effect.struct({
  first: Todos.getTodo(1),
  second: Todos.getTodo(2)
})

export const main = pipe(
  program,
  Effect.flatMap((todos) => Effect.logInfo(() => \`Todos: \${JSON.stringify(todos)}\`)),
  Effect.catchTag("FetchError", (error) => Effect.logError(() => \`FetchError: \${JSON.stringify(error)}\`)),
  Effect.catchTag("JsonBodyError", (error) => Effect.logError(() => \`JsonBodyError: \${JSON.stringify(error)}\`))
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full"},index:4,start:113,end:153},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:OA,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Resilience on failures

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    )
  );
\`\`\`

Note how the default schedule is composed locally with \`Schedule.whileInput\` in order to refine its behaviour.
`,title:"Resilience on failures",level:1,content:`# Resilience on failures

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    )
  );
\`\`\`

Note how the default schedule is composed locally with \`Schedule.whileInput\` in order to refine its behaviour.`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:14,start:153,end:191,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Resilience on failures

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    )
  );
\`\`\`

Note how the default schedule is composed locally with \`Schedule.whileInput\` in order to refine its behaviour.
`,title:"Resilience on failures",level:1,content:`# Resilience on failures

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    )
  );
\`\`\`

Note how the default schedule is composed locally with \`Schedule.whileInput\` in order to refine its behaviour.`,frontmatter:{layout:"center"},index:5,start:153,end:191},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:IA,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Failure Escalation

To control the boundaries of explicitness of errors it may happend that you want to turn failures into defect, for example in the case of \`getTodo\` if after the retry policy we still have an error there is pretty much nothing else we can do with it and carrying the information at the type level may be both verbose and an implementation detail leak.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts

import { Effect, Http, Schedule, Duration, pipe } from "./common"

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

// ---cut---

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    ),
    Effect.orDie
  );
\`\`\`

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like \`Effect.catchAllCause\` or turn the error into a full \`Cause<E>\` using \`Effect.sandbox\`.
`,title:"Failure Escalation",level:1,content:`# Failure Escalation

To control the boundaries of explicitness of errors it may happend that you want to turn failures into defect, for example in the case of \`getTodo\` if after the retry policy we still have an error there is pretty much nothing else we can do with it and carrying the information at the type level may be both verbose and an implementation detail leak.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts

import { Effect, Http, Schedule, Duration, pipe } from "./common"

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

// ---cut---

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    ),
    Effect.orDie
  );
\`\`\`

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like \`Effect.catchAllCause\` or turn the error into a full \`Cause<E>\` using \`Effect.sandbox\`.`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:15,start:191,end:234,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Failure Escalation

To control the boundaries of explicitness of errors it may happend that you want to turn failures into defect, for example in the case of \`getTodo\` if after the retry policy we still have an error there is pretty much nothing else we can do with it and carrying the information at the type level may be both verbose and an implementation detail leak.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts

import { Effect, Http, Schedule, Duration, pipe } from "./common"

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

// ---cut---

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    ),
    Effect.orDie
  );
\`\`\`

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like \`Effect.catchAllCause\` or turn the error into a full \`Cause<E>\` using \`Effect.sandbox\`.
`,title:"Failure Escalation",level:1,content:`# Failure Escalation

To control the boundaries of explicitness of errors it may happend that you want to turn failures into defect, for example in the case of \`getTodo\` if after the retry policy we still have an error there is pretty much nothing else we can do with it and carrying the information at the type level may be both verbose and an implementation detail leak.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts

import { Effect, Http, Schedule, Duration, pipe } from "./common"

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

// ---cut---

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    ),
    Effect.orDie
  );
\`\`\`

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like \`Effect.catchAllCause\` or turn the error into a full \`Cause<E>\` using \`Effect.sandbox\`.`,frontmatter:{layout:"center"},index:6,start:191,end:234},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:WA,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Interruption

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

The following snippet uses the \`Effect.asyncInterrupt\` constructor to create an interruptible fetch wrapper.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(() => response));
    }).catch((error) => {
      resume(Effect.fail(() => new FetchError(error)));
    });
    return Either.left(Effect.succeed(() => {
      controller.abort();
    }));
  });
\`\`\`

That's it interruption is propagated through program execution without explicitly passing signals or controllers.
`,title:"Interruption",level:1,content:`# Interruption

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

The following snippet uses the \`Effect.asyncInterrupt\` constructor to create an interruptible fetch wrapper.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(() => response));
    }).catch((error) => {
      resume(Effect.fail(() => new FetchError(error)));
    });
    return Either.left(Effect.succeed(() => {
      controller.abort();
    }));
  });
\`\`\`

That's it interruption is propagated through program execution without explicitly passing signals or controllers.`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:16,start:234,end:273,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Interruption

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

The following snippet uses the \`Effect.asyncInterrupt\` constructor to create an interruptible fetch wrapper.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(() => response));
    }).catch((error) => {
      resume(Effect.fail(() => new FetchError(error)));
    });
    return Either.left(Effect.succeed(() => {
      controller.abort();
    }));
  });
\`\`\`

That's it interruption is propagated through program execution without explicitly passing signals or controllers.
`,title:"Interruption",level:1,content:`# Interruption

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

The following snippet uses the \`Effect.asyncInterrupt\` constructor to create an interruptible fetch wrapper.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(() => response));
    }).catch((error) => {
      resume(Effect.fail(() => new FetchError(error)));
    });
    return Either.left(Effect.succeed(() => {
      controller.abort();
    }));
  });
\`\`\`

That's it interruption is propagated through program execution without explicitly passing signals or controllers.`,frontmatter:{layout:"center"},index:7,start:234,end:273},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:QA,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Controlled concurrency

The following snippet of code describes a program that when executed fetches a list of \`TODOs\` from the API in parallel, the execution will terminate at the first request failure and all ongoing requests will be interrupted.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));
\`\`\`

Controlling how many operations are allowed to run in parallel is done by using the \`Effect.withParallelism\` aspect.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => pipe(
  Effect.collectAllPar(() => ids.map(getTodo)),
  Effect.withParallelism(15)
);
\`\`\`

Or leave it to the caller:


\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));

export const program = pipe(getTodos([0, 1, 2, 3]), Effect.withParallelism(3))
\`\`\`

`,title:"Controlled concurrency",level:1,content:`# Controlled concurrency

The following snippet of code describes a program that when executed fetches a list of \`TODOs\` from the API in parallel, the execution will terminate at the first request failure and all ongoing requests will be interrupted.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));
\`\`\`

Controlling how many operations are allowed to run in parallel is done by using the \`Effect.withParallelism\` aspect.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => pipe(
  Effect.collectAllPar(() => ids.map(getTodo)),
  Effect.withParallelism(15)
);
\`\`\`

Or leave it to the caller:


\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));

export const program = pipe(getTodos([0, 1, 2, 3]), Effect.withParallelism(3))
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:17,start:273,end:343,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Controlled concurrency

The following snippet of code describes a program that when executed fetches a list of \`TODOs\` from the API in parallel, the execution will terminate at the first request failure and all ongoing requests will be interrupted.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));
\`\`\`

Controlling how many operations are allowed to run in parallel is done by using the \`Effect.withParallelism\` aspect.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => pipe(
  Effect.collectAllPar(() => ids.map(getTodo)),
  Effect.withParallelism(15)
);
\`\`\`

Or leave it to the caller:


\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));

export const program = pipe(getTodos([0, 1, 2, 3]), Effect.withParallelism(3))
\`\`\`

`,title:"Controlled concurrency",level:1,content:`# Controlled concurrency

The following snippet of code describes a program that when executed fetches a list of \`TODOs\` from the API in parallel, the execution will terminate at the first request failure and all ongoing requests will be interrupted.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));
\`\`\`

Controlling how many operations are allowed to run in parallel is done by using the \`Effect.withParallelism\` aspect.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => pipe(
  Effect.collectAllPar(() => ids.map(getTodo)),
  Effect.withParallelism(15)
);
\`\`\`

Or leave it to the caller:


\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));

export const program = pipe(getTodos([0, 1, 2, 3]), Effect.withParallelism(3))
\`\`\``,frontmatter:{layout:"full"},index:8,start:273,end:343},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:s7,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Metrics

Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

export const GetTodoCount = Metrics.counter("GetTodoCount")

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.tap(() => Metrics.increment(GetTodoCount))
)
\`\`\`

Or by making increment part of the metric definition:

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

// ---cut---
export const GetTodoCount = pipe(Metrics.counter("GetTodoCount"), Metrics.fromConst(() => 1))

export const getTodo = (id: number) => GetTodoCount(Todos.getTodo(id))
\`\`\`
`,title:"Metrics",level:1,content:`# Metrics

Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

export const GetTodoCount = Metrics.counter("GetTodoCount")

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.tap(() => Metrics.increment(GetTodoCount))
)
\`\`\`

Or by making increment part of the metric definition:

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

// ---cut---
export const GetTodoCount = pipe(Metrics.counter("GetTodoCount"), Metrics.fromConst(() => 1))

export const getTodo = (id: number) => GetTodoCount(Todos.getTodo(id))
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:18,start:343,end:394,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Metrics

Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

export const GetTodoCount = Metrics.counter("GetTodoCount")

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.tap(() => Metrics.increment(GetTodoCount))
)
\`\`\`

Or by making increment part of the metric definition:

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

// ---cut---
export const GetTodoCount = pipe(Metrics.counter("GetTodoCount"), Metrics.fromConst(() => 1))

export const getTodo = (id: number) => GetTodoCount(Todos.getTodo(id))
\`\`\`
`,title:"Metrics",level:1,content:`# Metrics

Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

export const GetTodoCount = Metrics.counter("GetTodoCount")

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.tap(() => Metrics.increment(GetTodoCount))
)
\`\`\`

Or by making increment part of the metric definition:

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

// ---cut---
export const GetTodoCount = pipe(Metrics.counter("GetTodoCount"), Metrics.fromConst(() => 1))

export const getTodo = (id: number) => GetTodoCount(Todos.getTodo(id))
\`\`\``,frontmatter:{layout:"full"},index:9,start:343,end:394},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:i7,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Tracing

We are currently integrating with OpenTelemetry via the ecosystem package \`@effect/otel\` but we are working on a native representation of spans and tracing following the same principles applied for \`Metrics\`

\`\`\`ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
\`\`\`

Note: This isn't yet ready but we are actively working on it! for the time being you'll find \`withSpan\` in the otel ecosystem package.
`,title:"Tracing",level:1,content:`# Tracing

We are currently integrating with OpenTelemetry via the ecosystem package \`@effect/otel\` but we are working on a native representation of spans and tracing following the same principles applied for \`Metrics\`

\`\`\`ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
\`\`\`

Note: This isn't yet ready but we are actively working on it! for the time being you'll find \`withSpan\` in the otel ecosystem package.`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:19,start:394,end:421,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Tracing

We are currently integrating with OpenTelemetry via the ecosystem package \`@effect/otel\` but we are working on a native representation of spans and tracing following the same principles applied for \`Metrics\`

\`\`\`ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
\`\`\`

Note: This isn't yet ready but we are actively working on it! for the time being you'll find \`withSpan\` in the otel ecosystem package.
`,title:"Tracing",level:1,content:`# Tracing

We are currently integrating with OpenTelemetry via the ecosystem package \`@effect/otel\` but we are working on a native representation of spans and tracing following the same principles applied for \`Metrics\`

\`\`\`ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
\`\`\`

Note: This isn't yet ready but we are actively working on it! for the time being you'll find \`withSpan\` in the otel ecosystem package.`,frontmatter:{layout:"full"},index:10,start:394,end:421},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:f7,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Dependency Injection

Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => \`todo: \${JSON.stringify(todo)}\`))
  }
  
  return Chunk.size(todos)
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection

Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => \`todo: \${JSON.stringify(todo)}\`))
  }
  
  return Chunk.size(todos)
})
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:20,start:421,end:460,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Dependency Injection

Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => \`todo: \${JSON.stringify(todo)}\`))
  }
  
  return Chunk.size(todos)
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection

Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => \`todo: \${JSON.stringify(todo)}\`))
  }
  
  return Chunk.size(todos)
})
\`\`\``,frontmatter:{layout:"full"},index:11,start:421,end:460},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:g7,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Dependency Injection

Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using \`Layer\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => \`todo: \${JSON.stringify(todo)}\`))
  }

  return Chunk.size(todos)
})

// ---cut---

import * as Layer from "@effect/core/io/Layer"
import * as Impl from "./todos-impl";

export const LiveTodoRepo = Layer.fromEffect(TodoRepo, () => 
  Effect.succeed(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection

Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using \`Layer\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => \`todo: \${JSON.stringify(todo)}\`))
  }

  return Chunk.size(todos)
})

// ---cut---

import * as Layer from "@effect/core/io/Layer"
import * as Impl from "./todos-impl";

export const LiveTodoRepo = Layer.fromEffect(TodoRepo, () => 
  Effect.succeed(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:21,start:460,end:523,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Dependency Injection

Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using \`Layer\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => \`todo: \${JSON.stringify(todo)}\`))
  }

  return Chunk.size(todos)
})

// ---cut---

import * as Layer from "@effect/core/io/Layer"
import * as Impl from "./todos-impl";

export const LiveTodoRepo = Layer.fromEffect(TodoRepo, () => 
  Effect.succeed(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection

Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using \`Layer\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => \`todo: \${JSON.stringify(todo)}\`))
  }

  return Chunk.size(todos)
})

// ---cut---

import * as Layer from "@effect/core/io/Layer"
import * as Impl from "./todos-impl";

export const LiveTodoRepo = Layer.fromEffect(TodoRepo, () => 
  Effect.succeed(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full"},index:12,start:460,end:523},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:B7,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Dependency Injection

Layers represents modules of your application and they compose very well, you could imagine having a service \`TodoRepo\` which constructors depends on \`Http\` and we have a program that uses both \`TodoRepo | Http\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()

// ---cut---

import * as Layer from "@effect/core/io/Layer"

export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.andTo(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection

Layers represents modules of your application and they compose very well, you could imagine having a service \`TodoRepo\` which constructors depends on \`Http\` and we have a program that uses both \`TodoRepo | Http\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()

// ---cut---

import * as Layer from "@effect/core/io/Layer"

export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.andTo(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:22,start:523,end:582,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Dependency Injection

Layers represents modules of your application and they compose very well, you could imagine having a service \`TodoRepo\` which constructors depends on \`Http\` and we have a program that uses both \`TodoRepo | Http\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()

// ---cut---

import * as Layer from "@effect/core/io/Layer"

export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.andTo(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection

Layers represents modules of your application and they compose very well, you could imagine having a service \`TodoRepo\` which constructors depends on \`Http\` and we have a program that uses both \`TodoRepo | Http\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()

// ---cut---

import * as Layer from "@effect/core/io/Layer"

export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.andTo(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full"},index:13,start:523,end:582},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:w7,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Recap!

we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>
`,title:"Recap!",level:1,content:`# Recap!

we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:23,start:582,end:603,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Recap!

we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>
`,title:"Recap!",level:1,content:`# Recap!

we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>`,frontmatter:{layout:"center"},index:14,start:582,end:603},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:T7,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>
`,title:"What's in the Box?",level:1,content:`# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:24,start:603,end:625,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>
`,title:"What's in the Box?",level:1,content:`# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>`,frontmatter:{layout:"full"},index:15,start:603,end:625},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:O7,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>
`,title:"What's in the Box?",level:1,content:`# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:25,start:625,end:649,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>
`,title:"What's in the Box?",level:1,content:`# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>`,frontmatter:{layout:"full"},index:16,start:625,end:649},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:L7,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

<style>
  img {
    max-width: 50% !important;
  }
</style>

# Early adopters feedback

<br />

![Imgur](https://i.imgur.com/ZUKacox.png)
`,title:"Early adopters feedback",level:1,content:`<style>
  img {
    max-width: 50% !important;
  }
</style>

# Early adopters feedback

<br />

![Imgur](https://i.imgur.com/ZUKacox.png)`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:26,start:649,end:665,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

<style>
  img {
    max-width: 50% !important;
  }
</style>

# Early adopters feedback

<br />

![Imgur](https://i.imgur.com/ZUKacox.png)
`,title:"Early adopters feedback",level:1,content:`<style>
  img {
    max-width: 50% !important;
  }
</style>

# Early adopters feedback

<br />

![Imgur](https://i.imgur.com/ZUKacox.png)`,frontmatter:{layout:"full"},index:17,start:649,end:665},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:W7,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Thank you!

Where to go next?

Check out our [Website](https://www.effect.website/) 

Join our [Discord](https://discord.gg/cWtHKdAXwC) Community

Follow us on [YouTube](https://www.youtube.com/channel/UC8wNHsXmEuoikbwRdLeoJQg) for [Effect Time](https://www.youtube.com/playlist?list=PLDf3uQLaK2B8kVv0PS1bwMwzENHpq48Ox)

Follow us on Twitter: [Effect](https://twitter.com/effectTS_), [Me](https://twitter.com/MichaelArnaldi), [MATECHS](https://twitter.com/matechsdigital)
`,title:"Thank you!",level:1,content:`# Thank you!

Where to go next?

Check out our [Website](https://www.effect.website/) 

Join our [Discord](https://discord.gg/cWtHKdAXwC) Community

Follow us on [YouTube](https://www.youtube.com/channel/UC8wNHsXmEuoikbwRdLeoJQg) for [Effect Time](https://www.youtube.com/playlist?list=PLDf3uQLaK2B8kVv0PS1bwMwzENHpq48Ox)

Follow us on Twitter: [Effect](https://twitter.com/effectTS_), [Me](https://twitter.com/MichaelArnaldi), [MATECHS](https://twitter.com/matechsdigital)`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:27,start:665,end:681,source:{filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Thank you!

Where to go next?

Check out our [Website](https://www.effect.website/) 

Join our [Discord](https://discord.gg/cWtHKdAXwC) Community

Follow us on [YouTube](https://www.youtube.com/channel/UC8wNHsXmEuoikbwRdLeoJQg) for [Effect Time](https://www.youtube.com/playlist?list=PLDf3uQLaK2B8kVv0PS1bwMwzENHpq48Ox)

Follow us on Twitter: [Effect](https://twitter.com/effectTS_), [Me](https://twitter.com/MichaelArnaldi), [MATECHS](https://twitter.com/matechsdigital)
`,title:"Thank you!",level:1,content:`# Thank you!

Where to go next?

Check out our [Website](https://www.effect.website/) 

Join our [Discord](https://discord.gg/cWtHKdAXwC) Community

Follow us on [YouTube](https://www.youtube.com/channel/UC8wNHsXmEuoikbwRdLeoJQg) for [Effect Time](https://www.youtube.com/playlist?list=PLDf3uQLaK2B8kVv0PS1bwMwzENHpq48Ox)

Follow us on Twitter: [Effect](https://twitter.com/effectTS_), [Me](https://twitter.com/MichaelArnaldi), [MATECHS](https://twitter.com/matechsdigital)`,frontmatter:{layout:"center"},index:18,start:665,end:681},filepath:"/home/runner/work/workers-conf-2022/workers-conf-2022/slides/03-intro-to-effect.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",component:pD,meta:{layout:"end"}}];const je=V7,z7=[{name:"play",path:"/",component:nD,children:[...je]},{name:"print",path:"/print",component:aD},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ro(()=>import("./Presenter.16788364.js"),["assets/Presenter.16788364.js","assets/Presenter.55f76449.css","assets/DrawingControls.e93c829a.js"]),beforeEnter:t=>{if(!Dn.remote||Dn.remote===t.query.password)return!0;if(Dn.remote&&t.query.password===void 0){const n=prompt("Enter password");if(Dn.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],mt=q5({history:s5("/workers-conf-2022/"),routes:z7});function U7(t,n,{mode:o="replace"}={}){return k({get(){const s=mt.currentRoute.value.query[t];return s==null?n!=null?n:null:Array.isArray(s)?s.filter(Boolean):s},set(s){Ve(()=>{mt[v(o)]({query:Ze(ve({},mt.currentRoute.value.query),{[t]:s})})})}})}const Au=H(0);Ve(()=>{mt.afterEach(async()=>{await Ve(),Au.value+=1})});const Kt=k(()=>mt.currentRoute.value),pa=k(()=>Kt.value.query.print!==void 0),K7=k(()=>Kt.value.query.print==="clicks"),Nt=k(()=>Kt.value.query.embedded!==void 0),Mt=k(()=>Kt.value.path.startsWith("/presenter")),So=k(()=>pa.value&&!K7.value),Bl=k(()=>Kt.value.query.password),G7=k(()=>!Mt.value&&(!Be.remote||Bl.value===Be.remote)),ri=U7("clicks","0"),Bu=k(()=>je.length-1),Y7=k(()=>Kt.value.path),Ne=k(()=>parseInt(Y7.value.split(/\//g).slice(-1)[0])||1);k(()=>pr(Ne.value));const pt=k(()=>je.find(t=>t.path===`${Ne.value}`));k(()=>{var t,n,o;return(o=(n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:o.id});k(()=>{var t,n;return(n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.layout});const Or=k(()=>je.find(t=>t.path===`${Math.min(je.length,Ne.value+1)}`)),Z7=k(()=>{var t,n;return Au.value,((n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),St=k({get(){if(So.value)return 99999;let t=+(ri.value||0);return isNaN(t)&&(t=0),t},set(t){ri.value=t.toString()}}),Is=k(()=>{var t,n,o;return+((o=(n=(t=pt.value)==null?void 0:t.meta)==null?void 0:n.clicks)!=null?o:Z7.value.length)}),Q7=k(()=>Ne.value<je.length-1||St.value<Is.value),X7=k(()=>Ne.value>1||St.value>0),eB=k(()=>je.filter(t=>{var n,o;return(o=(n=t.meta)==null?void 0:n.slide)==null?void 0:o.title}).reduce((t,n)=>(ua(t,n),t),[])),tB=k(()=>da(eB.value,pt.value));k(()=>fa(tB.value));function ln(){Is.value<=St.value?Vo():St.value+=1}async function an(){St.value<=0?await zo():St.value-=1}function pr(t){return Mt.value?`/presenter/${t}`:`/${t}`}function Vo(){const t=Math.min(je.length,Ne.value+1);return to(t)}async function zo(t=!0){const n=Math.max(1,Ne.value-1);await to(n),t&&Is.value&&mt.replace({query:Ze(ve({},Kt.value.query),{clicks:Is.value})})}function to(t,n){return mt.push({path:pr(t),query:Ze(ve({},Kt.value.query),{clicks:n})})}function nB(t){const n=H(0),{direction:o,distanceX:s,distanceY:r}=$h(t,{onSwipeStart(l){l.pointerType==="touch"&&(Jo.value||(n.value=il()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!n.value||Jo.value)return;const a=Math.abs(s.value),c=Math.abs(r.value);a/window.innerWidth>.3||a>100?o.value===Wt.LEFT?ln():an():(c/window.innerHeight>.4||c>200)&&(o.value===Wt.DOWN?zo():Vo())}})}async function Cl(){const{saveAs:t}=await ro(()=>import("./FileSaver.min.4f92ed14.js").then(function(n){return n.F}),[]);t(Hp(Be.download)?Be.download:Be.exportFilename?`${Be.exportFilename}.pdf`:"/workers-conf-2022/slidev-exported.pdf",`${Be.title}.pdf`)}async function oB(t){var n,o;if(t==null){const s=(o=(n=pt.value)==null?void 0:n.meta)==null?void 0:o.slide;if(!(s!=null&&s.filepath))return!1;t=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function ua(t,n,o=1){var r,l,a,c,i;const s=(l=(r=n.meta)==null?void 0:r.slide)==null?void 0:l.level;s&&s>o&&t.length>0?ua(t[t.length-1].children,n,o+1):t.push({children:[],level:o,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(i=(c=n.meta)==null?void 0:c.slide)==null?void 0:i.title})}function da(t,n,o=!1,s){return t.map(r=>{const l=Ze(ve({},r),{active:r.path===(n==null?void 0:n.path),hasActiveParent:o});return l.children.length>0&&(l.children=da(l.children,n,l.active||l.hasActiveParent,l)),s&&(l.active||l.activeParent)&&(s.activeParent=!0),l})}function fa(t,n=1){return t.filter(o=>!o.hideInToc).map(o=>Ze(ve({},o),{children:fa(o.children,n+1)}))}function sB(){const t=Be.titleTemplate.replace("%s",Be.title||"Slidev");cm({title:t}),gm(`${t} - shared`),Bm(`${t} - drawings`);function n(){Mt.value&&(hc("page",+Ne.value),hc("clicks",St.value))}mt.afterEach(n),ce(St,n),vm(o=>{(+o.page!=+Ne.value||St.value!==o.clicks)&&mt.replace({path:pr(o.page),query:Ze(ve({},mt.currentRoute.value.query),{clicks:o.clicks||0})})})}const rB=we({name:"App",setup(t){return q(Z),sB(),(n,o)=>{const s=Qr("RouterView"),r=Qr("StarportCarrier");return E(),N(Ce,null,[U(s),U(r)],64)}}});function $r(t){return t!==null&&typeof t=="object"}function bl(t,n,o=".",s){if(!$r(n))return bl(t,{},o,s);const r=Object.assign({},n);for(const l in t){if(l==="__proto__"||l==="constructor")continue;const a=t[l];a!=null&&(s&&s(r,l,a,o)||(Array.isArray(a)&&Array.isArray(r[l])?r[l]=a.concat(r[l]):$r(a)&&$r(r[l])?r[l]=bl(a,r[l],(o?`${o}.`:"")+l.toString(),s):r[l]=a))}return r}function lB(t){return(...n)=>n.reduce((o,s)=>bl(o,s,"",t),{})}const aB=lB(),Cu=1/60*1e3,cB=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),bu=typeof window!="undefined"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(cB()),Cu);function iB(t){let n=[],o=[],s=0,r=!1,l=!1;const a=new WeakSet,c={schedule:(i,p=!1,u=!1)=>{const f=u&&r,d=f?n:o;return p&&a.add(i),d.indexOf(i)===-1&&(d.push(i),f&&r&&(s=n.length)),i},cancel:i=>{const p=o.indexOf(i);p!==-1&&o.splice(p,1),a.delete(i)},process:i=>{if(r){l=!0;return}if(r=!0,[n,o]=[o,n],o.length=0,s=n.length,s)for(let p=0;p<s;p++){const u=n[p];u(i),a.has(u)&&(c.schedule(u),t())}r=!1,l&&(l=!1,c.process(i))}};return c}const pB=40;let El=!0,Uo=!1,wl=!1;const Yn={delta:0,timestamp:0},Xo=["read","update","preRender","render","postRender"],ur=Xo.reduce((t,n)=>(t[n]=iB(()=>Uo=!0),t),{}),li=Xo.reduce((t,n)=>{const o=ur[n];return t[n]=(s,r=!1,l=!1)=>(Uo||dB(),o.schedule(s,r,l)),t},{});Xo.reduce((t,n)=>(t[n]=ur[n].cancel,t),{});Xo.reduce((t,n)=>(t[n]=()=>ur[n].process(Yn),t),{});const uB=t=>ur[t].process(Yn),Eu=t=>{Uo=!1,Yn.delta=El?Cu:Math.max(Math.min(t-Yn.timestamp,pB),1),Yn.timestamp=t,wl=!0,Xo.forEach(uB),wl=!1,Uo&&(El=!1,bu(Eu))},dB=()=>{Uo=!0,El=!0,wl||bu(Eu)},fB=()=>Yn;function wu(t,n){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)n.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(o[s[r]]=t[s[r]]);return o}var yB=function(){},ai=function(){};const _l=(t,n,o)=>Math.min(Math.max(o,t),n),Mr=.001,mB=.01,ci=10,hB=.05,gB=1;function vB({duration:t=800,bounce:n=.25,velocity:o=0,mass:s=1}){let r,l;yB(t<=ci*1e3);let a=1-n;a=_l(hB,gB,a),t=_l(mB,ci,t/1e3),a<1?(r=p=>{const u=p*a,f=u*t,d=u-o,y=xl(p,a),h=Math.exp(-f);return Mr-d/y*h},l=p=>{const f=p*a*t,d=f*o+o,y=Math.pow(a,2)*Math.pow(p,2)*t,h=Math.exp(-f),B=xl(Math.pow(p,2),a);return(-r(p)+Mr>0?-1:1)*((d-y)*h)/B}):(r=p=>{const u=Math.exp(-p*t),f=(p-o)*t+1;return-Mr+u*f},l=p=>{const u=Math.exp(-p*t),f=(o-p)*(t*t);return u*f});const c=5/t,i=AB(r,l,c);if(t=t*1e3,isNaN(i))return{stiffness:100,damping:10,duration:t};{const p=Math.pow(i,2)*s;return{stiffness:p,damping:a*2*Math.sqrt(s*p),duration:t}}}const DB=12;function AB(t,n,o){let s=o;for(let r=1;r<DB;r++)s=s-t(s)/n(s);return s}function xl(t,n){return t*Math.sqrt(1-n*n)}const BB=["duration","bounce"],CB=["stiffness","damping","mass"];function ii(t,n){return n.some(o=>t[o]!==void 0)}function bB(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!ii(t,CB)&&ii(t,BB)){const o=vB(t);n=Object.assign(Object.assign(Object.assign({},n),o),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ya(t){var{from:n=0,to:o=1,restSpeed:s=2,restDelta:r}=t,l=wu(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:c,damping:i,mass:p,velocity:u,duration:f,isResolvedFromDuration:d}=bB(l),y=pi,h=pi;function B(){const D=u?-(u/1e3):0,_=o-n,C=i/(2*Math.sqrt(c*p)),b=Math.sqrt(c/p)/1e3;if(r===void 0&&(r=Math.min(Math.abs(o-n)/100,.4)),C<1){const w=xl(b,C);y=F=>{const P=Math.exp(-C*b*F);return o-P*((D+C*b*_)/w*Math.sin(w*F)+_*Math.cos(w*F))},h=F=>{const P=Math.exp(-C*b*F);return C*b*P*(Math.sin(w*F)*(D+C*b*_)/w+_*Math.cos(w*F))-P*(Math.cos(w*F)*(D+C*b*_)-w*_*Math.sin(w*F))}}else if(C===1)y=w=>o-Math.exp(-b*w)*(_+(D+b*_)*w);else{const w=b*Math.sqrt(C*C-1);y=F=>{const P=Math.exp(-C*b*F),j=Math.min(w*F,300);return o-P*((D+C*b*_)*Math.sinh(j)+w*_*Math.cosh(j))/w}}}return B(),{next:D=>{const _=y(D);if(d)a.done=D>=f;else{const C=h(D)*1e3,b=Math.abs(C)<=s,w=Math.abs(o-_)<=r;a.done=b&&w}return a.value=a.done?o:_,a},flipTarget:()=>{u=-u,[n,o]=[o,n],B()}}}ya.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const pi=t=>0,_u=(t,n,o)=>{const s=n-t;return s===0?1:(o-t)/s},ma=(t,n,o)=>-o*t+o*n+t,xu=(t,n)=>o=>Math.max(Math.min(o,n),t),Ro=t=>t%1?Number(t.toFixed(5)):t,Hs=/(-)?([\d]*\.?[\d])+/g,kl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,EB=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function es(t){return typeof t=="string"}const dr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ku=Object.assign(Object.assign({},dr),{transform:xu(0,1)});Object.assign(Object.assign({},dr),{default:1});const wB=t=>({test:n=>es(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Po=wB("%");Object.assign(Object.assign({},Po),{parse:t=>Po.parse(t)/100,transform:t=>Po.transform(t*100)});const ha=(t,n)=>o=>Boolean(es(o)&&EB.test(o)&&o.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(o,n)),Tu=(t,n,o)=>s=>{if(!es(s))return s;const[r,l,a,c]=s.match(Hs);return{[t]:parseFloat(r),[n]:parseFloat(l),[o]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},Bn={test:ha("hsl","hue"),parse:Tu("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:o,alpha:s=1})=>"hsla("+Math.round(t)+", "+Po.transform(Ro(n))+", "+Po.transform(Ro(o))+", "+Ro(ku.transform(s))+")"},_B=xu(0,255),Fr=Object.assign(Object.assign({},dr),{transform:t=>Math.round(_B(t))}),tn={test:ha("rgb","red"),parse:Tu("red","green","blue"),transform:({red:t,green:n,blue:o,alpha:s=1})=>"rgba("+Fr.transform(t)+", "+Fr.transform(n)+", "+Fr.transform(o)+", "+Ro(ku.transform(s))+")"};function xB(t){let n="",o="",s="",r="";return t.length>5?(n=t.substr(1,2),o=t.substr(3,2),s=t.substr(5,2),r=t.substr(7,2)):(n=t.substr(1,1),o=t.substr(2,1),s=t.substr(3,1),r=t.substr(4,1),n+=n,o+=o,s+=s,r+=r),{red:parseInt(n,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Tl={test:ha("#"),parse:xB,transform:tn.transform},fr={test:t=>tn.test(t)||Tl.test(t)||Bn.test(t),parse:t=>tn.test(t)?tn.parse(t):Bn.test(t)?Bn.parse(t):Tl.parse(t),transform:t=>es(t)?t:t.hasOwnProperty("red")?tn.transform(t):Bn.transform(t)},Su="${c}",Ru="${n}";function kB(t){var n,o,s,r;return isNaN(t)&&es(t)&&((o=(n=t.match(Hs))===null||n===void 0?void 0:n.length)!==null&&o!==void 0?o:0)+((r=(s=t.match(kl))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function Pu(t){typeof t=="number"&&(t=`${t}`);const n=[];let o=0;const s=t.match(kl);s&&(o=s.length,t=t.replace(kl,Su),n.push(...s.map(fr.parse)));const r=t.match(Hs);return r&&(t=t.replace(Hs,Ru),n.push(...r.map(dr.parse))),{values:n,numColors:o,tokenised:t}}function Ou(t){return Pu(t).values}function $u(t){const{values:n,numColors:o,tokenised:s}=Pu(t),r=n.length;return l=>{let a=s;for(let c=0;c<r;c++)a=a.replace(c<o?Su:Ru,c<o?fr.transform(l[c]):Ro(l[c]));return a}}const TB=t=>typeof t=="number"?0:t;function SB(t){const n=Ou(t);return $u(t)(n.map(TB))}const Mu={test:kB,parse:Ou,createTransformer:$u,getAnimatableNone:SB};function Lr(t,n,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(n-t)*6*o:o<1/2?n:o<2/3?t+(n-t)*(2/3-o)*6:t}function ui({hue:t,saturation:n,lightness:o,alpha:s}){t/=360,n/=100,o/=100;let r=0,l=0,a=0;if(!n)r=l=a=o;else{const c=o<.5?o*(1+n):o+n-o*n,i=2*o-c;r=Lr(i,c,t+1/3),l=Lr(i,c,t),a=Lr(i,c,t-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:s}}const RB=(t,n,o)=>{const s=t*t,r=n*n;return Math.sqrt(Math.max(0,o*(r-s)+s))},PB=[Tl,tn,Bn],di=t=>PB.find(n=>n.test(t)),Fu=(t,n)=>{let o=di(t),s=di(n),r=o.parse(t),l=s.parse(n);o===Bn&&(r=ui(r),o=tn),s===Bn&&(l=ui(l),s=tn);const a=Object.assign({},r);return c=>{for(const i in a)i!=="alpha"&&(a[i]=RB(r[i],l[i],c));return a.alpha=ma(r.alpha,l.alpha,c),o.transform(a)}},OB=t=>typeof t=="number",$B=(t,n)=>o=>n(t(o)),Lu=(...t)=>t.reduce($B);function Iu(t,n){return OB(t)?o=>ma(t,n,o):fr.test(t)?Fu(t,n):ju(t,n)}const Hu=(t,n)=>{const o=[...t],s=o.length,r=t.map((l,a)=>Iu(l,n[a]));return l=>{for(let a=0;a<s;a++)o[a]=r[a](l);return o}},MB=(t,n)=>{const o=Object.assign(Object.assign({},t),n),s={};for(const r in o)t[r]!==void 0&&n[r]!==void 0&&(s[r]=Iu(t[r],n[r]));return r=>{for(const l in s)o[l]=s[l](r);return o}};function fi(t){const n=Mu.parse(t),o=n.length;let s=0,r=0,l=0;for(let a=0;a<o;a++)s||typeof n[a]=="number"?s++:n[a].hue!==void 0?l++:r++;return{parsed:n,numNumbers:s,numRGB:r,numHSL:l}}const ju=(t,n)=>{const o=Mu.createTransformer(n),s=fi(t),r=fi(n);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?Lu(Hu(s.parsed,r.parsed),o):a=>`${a>0?n:t}`},FB=(t,n)=>o=>ma(t,n,o);function LB(t){if(typeof t=="number")return FB;if(typeof t=="string")return fr.test(t)?Fu:ju;if(Array.isArray(t))return Hu;if(typeof t=="object")return MB}function IB(t,n,o){const s=[],r=o||LB(t[0]),l=t.length-1;for(let a=0;a<l;a++){let c=r(t[a],t[a+1]);if(n){const i=Array.isArray(n)?n[a]:n;c=Lu(i,c)}s.push(c)}return s}function HB([t,n],[o]){return s=>o(_u(t,n,s))}function jB(t,n){const o=t.length,s=o-1;return r=>{let l=0,a=!1;if(r<=t[0]?a=!0:r>=t[s]&&(l=s-1,a=!0),!a){let i=1;for(;i<o&&!(t[i]>r||i===s);i++);l=i-1}const c=_u(t[l],t[l+1],r);return n[l](c)}}function Nu(t,n,{clamp:o=!0,ease:s,mixer:r}={}){const l=t.length;ai(l===n.length),ai(!s||!Array.isArray(s)||s.length===l-1),t[0]>t[l-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const a=IB(n,s,r),c=l===2?HB(t,a):jB(t,a);return o?i=>c(_l(t[0],t[l-1],i)):c}const yr=t=>n=>1-t(1-n),ga=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,NB=t=>n=>Math.pow(n,t),qu=t=>n=>n*n*((t+1)*n-t),qB=t=>{const n=qu(t);return o=>(o*=2)<1?.5*n(o):.5*(2-Math.pow(2,-10*(o-1)))},Ju=1.525,JB=4/11,WB=8/11,VB=9/10,Wu=t=>t,va=NB(2),zB=yr(va),Vu=ga(va),zu=t=>1-Math.sin(Math.acos(t)),Uu=yr(zu),UB=ga(Uu),Da=qu(Ju),KB=yr(Da),GB=ga(Da),YB=qB(Ju),ZB=4356/361,QB=35442/1805,XB=16061/1805,js=t=>{if(t===1||t===0)return t;const n=t*t;return t<JB?7.5625*n:t<WB?9.075*n-9.9*t+3.4:t<VB?ZB*n-QB*t+XB:10.8*t*t-20.52*t+10.72},eC=yr(js),tC=t=>t<.5?.5*(1-js(1-t*2)):.5*js(t*2-1)+.5;function nC(t,n){return t.map(()=>n||Vu).splice(0,t.length-1)}function oC(t){const n=t.length;return t.map((o,s)=>s!==0?s/(n-1):0)}function sC(t,n){return t.map(o=>o*n)}function Es({from:t=0,to:n=1,ease:o,offset:s,duration:r=300}){const l={done:!1,value:t},a=Array.isArray(n)?n:[t,n],c=sC(s&&s.length===a.length?s:oC(a),r);function i(){return Nu(c,a,{ease:Array.isArray(o)?o:nC(a,o)})}let p=i();return{next:u=>(l.value=p(u),l.done=u>=r,l),flipTarget:()=>{a.reverse(),p=i()}}}function rC({velocity:t=0,from:n=0,power:o=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:l}){const a={done:!1,value:n};let c=o*t;const i=n+c,p=l===void 0?i:l(i);return p!==i&&(c=p-n),{next:u=>{const f=-c*Math.exp(-u/s);return a.done=!(f>r||f<-r),a.value=a.done?p:p+f,a},flipTarget:()=>{}}}const yi={keyframes:Es,spring:ya,decay:rC};function lC(t){if(Array.isArray(t.to))return Es;if(yi[t.type])return yi[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Es:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ya:Es}const Ku=1/60*1e3,aC=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Gu=typeof window!="undefined"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(aC()),Ku);function cC(t){let n=[],o=[],s=0,r=!1,l=!1;const a=new WeakSet,c={schedule:(i,p=!1,u=!1)=>{const f=u&&r,d=f?n:o;return p&&a.add(i),d.indexOf(i)===-1&&(d.push(i),f&&r&&(s=n.length)),i},cancel:i=>{const p=o.indexOf(i);p!==-1&&o.splice(p,1),a.delete(i)},process:i=>{if(r){l=!0;return}if(r=!0,[n,o]=[o,n],o.length=0,s=n.length,s)for(let p=0;p<s;p++){const u=n[p];u(i),a.has(u)&&(c.schedule(u),t())}r=!1,l&&(l=!1,c.process(i))}};return c}const iC=40;let Sl=!0,Ko=!1,Rl=!1;const Zn={delta:0,timestamp:0},ts=["read","update","preRender","render","postRender"],mr=ts.reduce((t,n)=>(t[n]=cC(()=>Ko=!0),t),{}),pC=ts.reduce((t,n)=>{const o=mr[n];return t[n]=(s,r=!1,l=!1)=>(Ko||fC(),o.schedule(s,r,l)),t},{}),uC=ts.reduce((t,n)=>(t[n]=mr[n].cancel,t),{});ts.reduce((t,n)=>(t[n]=()=>mr[n].process(Zn),t),{});const dC=t=>mr[t].process(Zn),Yu=t=>{Ko=!1,Zn.delta=Sl?Ku:Math.max(Math.min(t-Zn.timestamp,iC),1),Zn.timestamp=t,Rl=!0,ts.forEach(dC),Rl=!1,Ko&&(Sl=!1,Gu(Yu))},fC=()=>{Ko=!0,Sl=!0,Rl||Gu(Yu)},yC=()=>Zn;function Zu(t,n,o=0){return t-n-o}function mC(t,n,o=0,s=!0){return s?Zu(n+-t,n,o):n-(t-n)+o}function hC(t,n,o,s){return s?t>=n+o:t<=-o}const gC=t=>{const n=({delta:o})=>t(o);return{start:()=>pC.update(n,!0),stop:()=>uC.update(n)}};function Qu(t){var n,o,{from:s,autoplay:r=!0,driver:l=gC,elapsed:a=0,repeat:c=0,repeatType:i="loop",repeatDelay:p=0,onPlay:u,onStop:f,onComplete:d,onRepeat:y,onUpdate:h}=t,B=wu(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:D}=B,_,C=0,b=B.duration,w,F=!1,P=!0,j;const se=lC(B);!((o=(n=se).needsInterpolation)===null||o===void 0)&&o.call(n,s,D)&&(j=Nu([0,100],[s,D],{clamp:!1}),s=0,D=100);const ie=se(Object.assign(Object.assign({},B),{from:s,to:D}));function de(){C++,i==="reverse"?(P=C%2===0,a=mC(a,b,p,P)):(a=Zu(a,b,p),i==="mirror"&&ie.flipTarget()),F=!1,y&&y()}function me(){_.stop(),d&&d()}function $e(Ue){if(P||(Ue=-Ue),a+=Ue,!F){const _e=ie.next(Math.max(0,a));w=_e.value,j&&(w=j(w)),F=P?_e.done:a<=0}h==null||h(w),F&&(C===0&&(b!=null||(b=a)),C<c?hC(a,b,p,P)&&de():me())}function Ie(){u==null||u(),_=l($e),_.start()}return r&&Ie(),{stop:()=>{f==null||f(),_.stop()}}}function Xu(t,n){return n?t*(1e3/n):0}function vC({from:t=0,velocity:n=0,min:o,max:s,power:r=.8,timeConstant:l=750,bounceStiffness:a=500,bounceDamping:c=10,restDelta:i=1,modifyTarget:p,driver:u,onUpdate:f,onComplete:d,onStop:y}){let h;function B(b){return o!==void 0&&b<o||s!==void 0&&b>s}function D(b){return o===void 0?s:s===void 0||Math.abs(o-b)<Math.abs(s-b)?o:s}function _(b){h==null||h.stop(),h=Qu(Object.assign(Object.assign({},b),{driver:u,onUpdate:w=>{var F;f==null||f(w),(F=b.onUpdate)===null||F===void 0||F.call(b,w)},onComplete:d,onStop:y}))}function C(b){_(Object.assign({type:"spring",stiffness:a,damping:c,restDelta:i},b))}if(B(t))C({from:t,velocity:n,to:D(t)});else{let b=r*n+t;typeof p!="undefined"&&(b=p(b));const w=D(b),F=w===o?-1:1;let P,j;const se=ie=>{P=j,j=ie,n=Xu(ie-P,yC().delta),(F===1&&ie>w||F===-1&&ie<w)&&C({from:ie,to:w,velocity:n})};_({type:"decay",from:t,velocity:n,timeConstant:l,power:r,restDelta:i,modifyTarget:p,onUpdate:B(b)?se:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const ed=(t,n)=>1-3*n+3*t,td=(t,n)=>3*n-6*t,nd=t=>3*t,Ns=(t,n,o)=>((ed(n,o)*t+td(n,o))*t+nd(n))*t,od=(t,n,o)=>3*ed(n,o)*t*t+2*td(n,o)*t+nd(n),DC=1e-7,AC=10;function BC(t,n,o,s,r){let l,a,c=0;do a=n+(o-n)/2,l=Ns(a,s,r)-t,l>0?o=a:n=a;while(Math.abs(l)>DC&&++c<AC);return a}const CC=8,bC=.001;function EC(t,n,o,s){for(let r=0;r<CC;++r){const l=od(n,o,s);if(l===0)return n;n-=(Ns(n,o,s)-t)/l}return n}const ws=11,fs=1/(ws-1);function wC(t,n,o,s){if(t===n&&o===s)return Wu;const r=new Float32Array(ws);for(let a=0;a<ws;++a)r[a]=Ns(a*fs,t,o);function l(a){let c=0,i=1;const p=ws-1;for(;i!==p&&r[i]<=a;++i)c+=fs;--i;const u=(a-r[i])/(r[i+1]-r[i]),f=c+u*fs,d=od(f,t,o);return d>=bC?EC(a,f,t,o):d===0?f:BC(a,c,c+fs,t,o)}return a=>a===0||a===1?a:Ns(l(a),n,s)}const sd=(t,n)=>o=>Math.max(Math.min(o,n),t),Oo=t=>t%1?Number(t.toFixed(5)):t,Go=/(-)?([\d]*\.?[\d])+/g,Pl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,_C=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ns(t){return typeof t=="string"}const os={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},$o=Object.assign(Object.assign({},os),{transform:sd(0,1)}),ys=Object.assign(Object.assign({},os),{default:1}),Aa=t=>({test:n=>ns(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),yn=Aa("deg"),Mo=Aa("%"),re=Aa("px"),mi=Object.assign(Object.assign({},Mo),{parse:t=>Mo.parse(t)/100,transform:t=>Mo.transform(t*100)}),Ba=(t,n)=>o=>Boolean(ns(o)&&_C.test(o)&&o.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(o,n)),rd=(t,n,o)=>s=>{if(!ns(s))return s;const[r,l,a,c]=s.match(Go);return{[t]:parseFloat(r),[n]:parseFloat(l),[o]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},ms={test:Ba("hsl","hue"),parse:rd("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:o,alpha:s=1})=>"hsla("+Math.round(t)+", "+Mo.transform(Oo(n))+", "+Mo.transform(Oo(o))+", "+Oo($o.transform(s))+")"},xC=sd(0,255),Ir=Object.assign(Object.assign({},os),{transform:t=>Math.round(xC(t))}),Co={test:Ba("rgb","red"),parse:rd("red","green","blue"),transform:({red:t,green:n,blue:o,alpha:s=1})=>"rgba("+Ir.transform(t)+", "+Ir.transform(n)+", "+Ir.transform(o)+", "+Oo($o.transform(s))+")"};function kC(t){let n="",o="",s="",r="";return t.length>5?(n=t.substr(1,2),o=t.substr(3,2),s=t.substr(5,2),r=t.substr(7,2)):(n=t.substr(1,1),o=t.substr(2,1),s=t.substr(3,1),r=t.substr(4,1),n+=n,o+=o,s+=s,r+=r),{red:parseInt(n,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const hi={test:Ba("#"),parse:kC,transform:Co.transform},Dt={test:t=>Co.test(t)||hi.test(t)||ms.test(t),parse:t=>Co.test(t)?Co.parse(t):ms.test(t)?ms.parse(t):hi.parse(t),transform:t=>ns(t)?t:t.hasOwnProperty("red")?Co.transform(t):ms.transform(t)},ld="${c}",ad="${n}";function TC(t){var n,o,s,r;return isNaN(t)&&ns(t)&&((o=(n=t.match(Go))===null||n===void 0?void 0:n.length)!==null&&o!==void 0?o:0)+((r=(s=t.match(Pl))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function cd(t){typeof t=="number"&&(t=`${t}`);const n=[];let o=0;const s=t.match(Pl);s&&(o=s.length,t=t.replace(Pl,ld),n.push(...s.map(Dt.parse)));const r=t.match(Go);return r&&(t=t.replace(Go,ad),n.push(...r.map(os.parse))),{values:n,numColors:o,tokenised:t}}function id(t){return cd(t).values}function pd(t){const{values:n,numColors:o,tokenised:s}=cd(t),r=n.length;return l=>{let a=s;for(let c=0;c<r;c++)a=a.replace(c<o?ld:ad,c<o?Dt.transform(l[c]):Oo(l[c]));return a}}const SC=t=>typeof t=="number"?0:t;function RC(t){const n=id(t);return pd(t)(n.map(SC))}const Ca={test:TC,parse:id,createTransformer:pd,getAnimatableNone:RC},PC=new Set(["brightness","contrast","saturate","opacity"]);function OC(t){let[n,o]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[s]=o.match(Go)||[];if(!s)return t;const r=o.replace(s,"");let l=PC.has(n)?1:0;return s!==o&&(l*=100),n+"("+l+r+")"}const $C=/([a-z-]*)\(.*?\)/g,Ol=Object.assign(Object.assign({},Ca),{getAnimatableNone:t=>{const n=t.match($C);return n?n.map(OC).join(" "):t}}),Hr={};class MC{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,o,s){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(n,o,s)}clear(){this.subscriptions.clear()}}const gi=t=>!isNaN(parseFloat(t));class FC{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new MC,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:s,timestamp:r}=fB();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),li.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>li.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=gi(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=gi(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Xu(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(o=>{const{stop:s}=n(o);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function LC(t){return new FC(t)}const{isArray:IC}=Array;function HC(){const t=H({}),n=s=>{const r=l=>{!t.value[l]||(t.value[l].stop(),t.value[l].destroy(),wm(t.value,l))};s?IC(s)?s.forEach(r):r(s):Object.keys(t.value).forEach(r)},o=(s,r,l)=>{if(t.value[s])return t.value[s];const a=LC(r);return a.onChange(c=>{st(l,s,c)}),st(t.value,s,a),a};return oa(n),{motionValues:t,get:o,stop:n}}const jC=t=>Array.isArray(t),mn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),jr=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),NC=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),Nr=()=>({type:"keyframes",ease:"linear",duration:300}),qC=t=>({type:"keyframes",duration:800,values:t}),vi={default:NC,x:mn,y:mn,z:mn,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scaleX:jr,scaleY:jr,scale:jr,backgroundColor:Nr,color:Nr,opacity:Nr},ud=(t,n)=>{let o;return jC(n)?o=qC:o=vi[t]||vi.default,ve({to:n},o(n))},Di=Ze(ve({},os),{transform:Math.round}),dd={color:Dt,backgroundColor:Dt,outlineColor:Dt,fill:Dt,stroke:Dt,borderColor:Dt,borderTopColor:Dt,borderRightColor:Dt,borderBottomColor:Dt,borderLeftColor:Dt,borderWidth:re,borderTopWidth:re,borderRightWidth:re,borderBottomWidth:re,borderLeftWidth:re,borderRadius:re,radius:re,borderTopLeftRadius:re,borderTopRightRadius:re,borderBottomRightRadius:re,borderBottomLeftRadius:re,width:re,maxWidth:re,height:re,maxHeight:re,size:re,top:re,right:re,bottom:re,left:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,rotate:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:ys,scaleX:ys,scaleY:ys,scaleZ:ys,skew:yn,skewX:yn,skewY:yn,distance:re,translateX:re,translateY:re,translateZ:re,x:re,y:re,z:re,perspective:re,transformPerspective:re,opacity:$o,originX:mi,originY:mi,originZ:re,zIndex:Di,filter:Ol,WebkitFilter:Ol,fillOpacity:$o,strokeOpacity:$o,numOctaves:Di},ba=t=>dd[t],fd=(t,n)=>n&&typeof t=="number"&&n.transform?n.transform(t):t;function JC(t,n){let o=ba(t);return o!==Ol&&(o=Ca),o.getAnimatableNone?o.getAnimatableNone(n):void 0}const WC={linear:Wu,easeIn:va,easeInOut:Vu,easeOut:zB,circIn:zu,circInOut:UB,circOut:Uu,backIn:Da,backInOut:GB,backOut:KB,anticipate:YB,bounceIn:eC,bounceInOut:tC,bounceOut:js},Ai=t=>{if(Array.isArray(t)){const[n,o,s,r]=t;return wC(n,o,s,r)}else if(typeof t=="string")return WC[t];return t},VC=t=>Array.isArray(t)&&typeof t[0]!="number",Bi=(t,n)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Ca.test(n)&&!n.startsWith("url("));function zC(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function UC(r){var l=r,{ease:t,times:n,delay:o}=l,s=hr(l,["ease","times","delay"]);const a=ve({},s);return n&&(a.offset=n),t&&(a.ease=VC(t)?t.map(Ai):Ai(t)),o&&(a.elapsed=-o),a}function KC(t,n,o){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),zC(n),GC(t)||(t=ve(ve({},t),ud(o,n.to))),ve(ve({},n),UC(t))}function GC(a){var c=a,{delay:t,repeat:n,repeatType:o,repeatDelay:s,from:r}=c,l=hr(c,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(l).length}function YC(t,n){return t[n]||t.default||t}function ZC(t,n,o,s,r){const l=YC(s,t);let a=l.from===null||l.from===void 0?n.get():l.from;const c=Bi(t,o);a==="none"&&c&&typeof o=="string"&&(a=JC(t,o));const i=Bi(t,a);function p(f){const d={from:a,to:o,velocity:s.velocity?s.velocity:n.getVelocity(),onUpdate:y=>n.set(y)};return l.type==="inertia"||l.type==="decay"?vC(ve(ve({},d),l)):Qu(Ze(ve({},KC(l,d,t)),{onUpdate:y=>{d.onUpdate(y),l.onUpdate&&l.onUpdate(y)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),f&&f()}}))}function u(f){return n.set(o),s.onComplete&&s.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!i||!c||l.type===!1?u:p}function QC(){const{motionValues:t,stop:n,get:o}=HC();return{motionValues:t,stop:n,push:(r,l,a,c={},i)=>{const p=a[r],u=o(r,p,a);if(c&&c.immediate){u.set(l);return}const f=ZC(r,u,l,c,i);u.start(f)}}}function XC(t,n={},{motionValues:o,push:s,stop:r}=QC()){const l=v(n),a=H(!1),c=ce(o,d=>{a.value=Object.values(d).filter(y=>y.isAnimating()).length>0},{immediate:!0,deep:!0}),i=d=>{if(!l||!l[d])throw new Error(`The variant ${d} does not exist.`);return l[d]},p=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([y,h])=>{if(y!=="transition")return new Promise(B=>{s(y,h,t,d.transition||ud(y,d[y]),B)})}).filter(Boolean)));return{isAnimating:a,apply:p,set:d=>{const y=Os(d)?d:i(d);Object.entries(y).forEach(([h,B])=>{h!=="transition"&&s(h,B,t,{immediate:!0})})},stopTransitions:()=>{c(),r()},leave:async d=>{let y;if(l&&(l.leave&&(y=l.leave),!l.leave&&l.initial&&(y=l.initial)),!y){d();return}await p(y),d()}}}const Ea=typeof window!="undefined",eb=()=>Ea&&window.onpointerdown===null,tb=()=>Ea&&window.ontouchstart===null,nb=()=>Ea&&window.onmousedown===null;function ob({target:t,state:n,variants:o,apply:s}){const r=v(o),l=[],a=(...h)=>{const B=Oe.apply(null,h);return l.push(B),B},c=H(!1),i=H(!1),p=H(!1),u=k(()=>{let h=[];return r&&(r.hovered&&(h=[...h,...Object.keys(r.hovered)]),r.tapped&&(h=[...h,...Object.keys(r.tapped)]),r.focused&&(h=[...h,...Object.keys(r.focused)])),h}),f=k(()=>{const h={};Object.assign(h,n.value),c.value&&r.hovered&&Object.assign(h,r.hovered),i.value&&r.tapped&&Object.assign(h,r.tapped),p.value&&r.focused&&Object.assign(h,r.focused);for(const B in h)u.value.includes(B)||delete h[B];return h});r.hovered&&(a(t,"mouseenter",()=>{c.value=!0}),a(t,"mouseleave",()=>{c.value=!1,i.value=!1}),a(t,"mouseout",()=>{c.value=!1,i.value=!1})),r.tapped&&(nb()&&(a(t,"mousedown",()=>{i.value=!0}),a(t,"mouseup",()=>{i.value=!1})),eb()&&(a(t,"pointerdown",()=>{i.value=!0}),a(t,"pointerup",()=>{i.value=!1})),tb()&&(a(t,"touchstart",()=>{i.value=!0}),a(t,"touchend",()=>{i.value=!1}))),r.focused&&(a(t,"focus",()=>{p.value=!0}),a(t,"blur",()=>{p.value=!1}));const d=ce(f,s);return{stop:()=>{l.forEach(h=>h()),d()}}}function sb({set:t,target:n,variants:o,variant:s}){const r=v(o);return{stop:ce(()=>n,()=>{!r||(r.initial&&t("initial"),r.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}}function rb({state:t,apply:n}){return{stop:ce(t,s=>{s&&n(s)},{immediate:!0})}}function lb({target:t,variants:n,variant:o}){const s=v(n);let r=rn;if(s&&(s.visible||s.visibleOnce)){const{stop:l}=Rh(t,([{isIntersecting:a}])=>{s.visible?a?o.value="visible":o.value="initial":s.visibleOnce&&(a?o.value!=="visibleOnce"&&(o.value="visibleOnce"):o.value||(o.value="initial"))});r=l}return{stop:r}}function ab(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const o=H([]);if(n.lifeCycleHooks){const{stop:r}=sb(t);o.value.push(r)}if(n.syncVariants){const{stop:r}=rb(t);o.value.push(r)}if(n.visibilityHooks){const{stop:r}=lb(t);o.value.push(r)}if(n.eventListeners){const{stop:r}=ob(t);o.value.push(r)}const s=()=>o.value.forEach(r=>r());return oa(s),{stop:s}}function yd(t={}){const n=Me(ve({},t)),o=H({});return ce(n,()=>{const s={};for(const[r,l]of Object.entries(n)){const a=ba(r),c=fd(l,a);s[r]=c}o.value=s},{immediate:!0,deep:!0}),{state:n,style:o}}const cb=["","X","Y","Z"],ib=["perspective","translate","scale","rotate","skew"],md=["transformPerspective","x","y","z"];ib.forEach(t=>{cb.forEach(n=>{const o=t+n;md.push(o)})});const pb=new Set(md);function wa(t){return pb.has(t)}const ub=new Set(["originX","originY","originZ"]);function hd(t){return ub.has(t)}function db(t){const n={},o={};return Object.entries(t).forEach(([s,r])=>{wa(s)||hd(s)?n[s]=r:o[s]=r}),{transform:n,style:o}}function fb(t,n){let o,s;const{state:r,style:l}=yd(),a=ce(()=>rt(t),p=>{if(!!p){s=p;for(const u of Object.keys(dd))p.style[u]===null||p.style[u]===""||wa(u)||hd(u)||st(r,u,p.style[u]);o&&Object.entries(o).forEach(([u,f])=>st(p.style,u,f)),n&&n(r)}},{immediate:!0}),c=ce(l,p=>{if(!s){o=p;return}for(const u in p)st(s.style,u,p[u])},{immediate:!0});return{style:r,stop:()=>{s=void 0,o=void 0,a(),c()}}}const yb={x:"translateX",y:"translateY",z:"translateZ"};function gd(t={},n=!0){const o=Me(ve({},t)),s=H("");return ce(o,r=>{let l="",a=!1;n&&(r.x||r.y||r.z)&&(l+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(re.transform).join(",")}) `,a=!0);for(const[c,i]of Object.entries(r)){if(n&&(c==="x"||c==="y"||c==="z"))continue;const p=ba(c),u=fd(i,p);l+=`${yb[c]||c}(${u}) `}n&&!a&&(l+="translateZ(0px) "),s.value=l.trim()},{immediate:!0,deep:!0}),{state:o,transform:s}}function mb(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const o=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return n.reduce((s,r)=>{if(!r)return s;const[l,a]=r.split("("),i=a.split(",").map(u=>o(u.endsWith(")")?u.replace(")",""):u.trim())),p=i.length===1?i[0]:i;return Ze(ve({},s),{[l]:p})},{})}function hb(t,n){Object.entries(mb(n)).forEach(([o,s])=>{s=parseFloat(s);const r=["x","y","z"];if(o==="translate3d"){if(s===0){r.forEach(l=>{st(t,l,0)});return}s.forEach((l,a)=>{st(t,r[a],l)});return}if(o==="translateX"){st(t,"x",s);return}if(o==="translateY"){st(t,"y",s);return}if(o==="translateZ"){st(t,"z",s);return}st(t,o,s)})}function gb(t,n){let o,s;const{state:r,transform:l}=gd(),a=ce(()=>rt(t),p=>{!p||(s=p,p.style.transform&&hb(r,p.style.transform),o&&(p.style.transform=o),n&&n(r))},{immediate:!0}),c=ce(l,p=>{if(!s){o=p;return}s.style.transform=p},{immediate:!0});return{transform:r,stop:()=>{o=void 0,s=void 0,a(),c()}}}function vb(t,n){const o=Me({}),s=f=>{Object.entries(f).forEach(([d,y])=>{st(o,d,y)})},{style:r,stop:l}=fb(t,s),{transform:a,stop:c}=gb(t,s),i=ce(o,f=>{Object.entries(f).forEach(([d,y])=>{const h=wa(d)?a:r;h[d]&&h[d]===y||st(h,d,y)})},{immediate:!0,deep:!0}),p=ce(()=>rt(t),f=>{!f||n&&s(n)},{immediate:!0});return{motionProperties:o,style:r,transform:a,stop:()=>{l(),c(),i(),p()}}}function Db(t={}){const n=v(t),o=H();return{state:k(()=>{if(!!o.value)return n[o.value]}),variant:o}}function Ab(t,n={},o){const{motionProperties:s,stop:r}=vb(t),{variant:l,state:a}=Db(n),c=XC(s,n),i=Ze(ve({target:t,variant:l,variants:n,state:a,motionProperties:s},c),{stop:(u=!1)=>{}}),{stop:p}=ab(i,o);return i.stop=(u=!1)=>{const f=()=>{i.stopTransitions(),r(),p()};if(!u&&n.value&&n.value.leave){const d=ce(i.isAnimating,y=>{y||(d(),f())})}else f()},oa(()=>i.stop()),Km(()=>rt(t),u=>{!u||u!=null&&u.motionInstance&&(i.stop(),Object.assign(i,u.motionInstance))}),i}const Bb=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Cb=(t,n)=>{const o=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};o&&(o.variants&&Os(o.variants)&&(n.value=ve(ve({},n.value),o.variants)),Bb.forEach(s=>{if(s==="delay"){if(o&&o[s]&&Tm(o[s])){const r=o[s];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition=Ze(ve({},n.value.enter.transition),{delay:r})),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition=Ze(ve({},n.value.visible.transition),{delay:r})),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition=Ze(ve({},n.value.visibleOnce.transition),{delay:r})))}return}s==="visible-once"&&(s="visibleOnce"),o&&o[s]&&Os(o[s])&&(n.value[s]=o[s])}))},qr=t=>{const n=(s,r,l)=>{const a=r.value&&typeof r.value=="string"?r.value:l.key;a&&Hr[a]&&Hr[a].stop();const c=H(t||{});typeof r.value=="object"&&(c.value=r.value),Cb(l,c);const i=Ab(s,c);s.motionInstance=i,a&&st(Hr,a,i)},o=s=>{s.motionInstance&&s.motionInstance.stop()};return{created:n,unmounted:o,bind:n,unbind:o,getSSRProps(s,r){const{initial:l}=s.value||r&&r.props||{},a=aB((t==null?void 0:t.initial)||{},l||{});if(!a||Object.keys(a).length===0)return;const{transform:c,style:i}=db(a),{transform:p}=gd(c),{style:u}=yd(i);return p.value&&(u.value.transform=p.value),{style:u.value}}}},bb={initial:{opacity:0},enter:{opacity:1}},Eb={initial:{opacity:0},visible:{opacity:1}},wb={initial:{opacity:0},visibleOnce:{opacity:1}},_b={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},xb={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},kb={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Tb={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Sb={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Rb={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Pb={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Ob={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},$b={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Mb={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Fb={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Lb={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Ib={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Hb={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},jb={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Nb={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},qb={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Jb={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Wb={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Vb={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},zb={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Ub={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Kb={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Gb={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Yb={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Zb={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Qb={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ci={__proto__:null,fade:bb,fadeVisible:Eb,fadeVisibleOnce:wb,pop:_b,popVisible:xb,popVisibleOnce:kb,rollBottom:Ib,rollLeft:Tb,rollRight:Pb,rollTop:Mb,rollVisibleBottom:Hb,rollVisibleLeft:Sb,rollVisibleRight:Ob,rollVisibleTop:Fb,rollVisibleOnceBottom:jb,rollVisibleOnceLeft:Rb,rollVisibleOnceRight:$b,rollVisibleOnceTop:Lb,slideBottom:Yb,slideLeft:Nb,slideRight:Wb,slideTop:Ub,slideVisibleBottom:Zb,slideVisibleLeft:qb,slideVisibleRight:Vb,slideVisibleTop:Kb,slideVisibleOnceBottom:Qb,slideVisibleOnceLeft:Jb,slideVisibleOnceRight:zb,slideVisibleOnceTop:Gb};function Xb(t){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(s,r=>o.charAt(n.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const eE={install(t,n){if(t.directive("motion",qr()),!n||n&&!n.excludePresets)for(const o in Ci){const s=Ci[o];t.directive(`motion-${Xb(o)}`,qr(s))}if(n&&n.directives)for(const o in n.directives){const s=n.directives[o];s.initial,t.directive(`motion-${o}`,qr(s))}}},_a="vue-starport-injection",vd="vue-starport-options",tE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Dd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var nE=Object.defineProperty,qs=Object.getOwnPropertySymbols,Ad=Object.prototype.hasOwnProperty,Bd=Object.prototype.propertyIsEnumerable,bi=(t,n,o)=>n in t?nE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,oE=(t,n)=>{for(var o in n||(n={}))Ad.call(n,o)&&bi(t,o,n[o]);if(qs)for(var o of qs(n))Bd.call(n,o)&&bi(t,o,n[o]);return t},Ei=(t,n)=>{var o={};for(var s in t)Ad.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&qs)for(var s of qs(t))n.indexOf(s)<0&&Bd.call(t,s)&&(o[s]=t[s]);return o};const sE=we({name:"StarportProxy",props:oE({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Dd),setup(t,n){const o=q(_a),s=k(()=>o.getInstance(t.port,t.component)),r=H(),l=s.value.generateId(),a=H(!1);return s.value.isVisible||(s.value.land(),a.value=!0),Yo(async()=>{s.value.el||(s.value.el=r.value,await Ve(),a.value=!0,s.value.rect.update())}),tr(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,a.value=!1,!s.value.options.keepAlive&&(await Ve(),await Ve(),!s.value.el&&o.dispose(s.value.port))}),ce(()=>t,async()=>{s.value.props&&await Ve();const c=t,{props:i}=c,p=Ei(c,["props"]);s.value.props=i||{},s.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=t,{initialProps:i,mountedProps:p}=c,u=Ei(c,["initialProps","mountedProps"]),f=Rs(u,(a.value?p:i)||{});return ft("div",Rs(f,{id:l,ref:r,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),n.slots.default?ft(n.slots.default):void 0)}}});var rE=Object.defineProperty,lE=Object.defineProperties,aE=Object.getOwnPropertyDescriptors,wi=Object.getOwnPropertySymbols,cE=Object.prototype.hasOwnProperty,iE=Object.prototype.propertyIsEnumerable,_i=(t,n,o)=>n in t?rE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,pE=(t,n)=>{for(var o in n||(n={}))cE.call(n,o)&&_i(t,o,n[o]);if(wi)for(var o of wi(n))iE.call(n,o)&&_i(t,o,n[o]);return t},uE=(t,n)=>lE(t,aE(n));const dE=we({name:"Starport",inheritAttrs:!0,props:Dd,setup(t,n){const o=H(!1);return Yo(()=>{o.value=!0}),()=>{var a,c;const s=(c=(a=n.slots).default)==null?void 0:c.call(a);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const r=s[0];let l=r.type;return(!Os(l)||xn(l))&&(l={render(){return s}}),ft(sE,uE(pE({},t),{key:t.port,component:Ks(l),props:r.props}))}}});function fE(t){const n=Me({height:0,width:0,left:0,top:0,update:s,listen:l,pause:a}),o=Bt?document.documentElement||document.body:void 0;function s(){if(!Bt)return;const c=rt(t);if(!c)return;const{height:i,width:p,left:u,top:f}=c.getBoundingClientRect();Object.assign(n,{height:i,width:p,left:u,top:o.scrollTop+f})}const r=Wp(s,{immediate:!1});function l(){!Bt||(s(),r.resume())}function a(){r.pause()}return n}let yE="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",mE=(t,n=21)=>(o=n)=>{let s="",r=o;for(;r--;)s+=t[Math.random()*t.length|0];return s},hE=(t=21)=>{let n="",o=t;for(;o--;)n+=yE[Math.random()*64|0];return n};var gE={nanoid:hE,customAlphabet:mE};const xi=gE.customAlphabet("abcdefghijklmnopqrstuvwxyz",5);function ki(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function vE(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var DE=Object.defineProperty,Ti=Object.getOwnPropertySymbols,AE=Object.prototype.hasOwnProperty,BE=Object.prototype.propertyIsEnumerable,Si=(t,n,o)=>n in t?DE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Jr=(t,n)=>{for(var o in n||(n={}))AE.call(n,o)&&Si(t,o,n[o]);if(Ti)for(var o of Ti(n))BE.call(n,o)&&Si(t,o,n[o]);return t};function CE(t,n,o={}){const s=vE(n),r=ki(s)||xi(),l=H(),a=H(null),c=H(!1),i=H(!1),p=Id(!0),u=H({}),f=k(()=>Jr(Jr(Jr({},tE),o),u.value)),d=H(0);let y;p.run(()=>{y=fE(l),ce(l,async _=>{_&&(i.value=!0),await Ve(),l.value||(i.value=!1)})});const h=ki(t);function B(){return`starport-${r}-${h}-${xi()}`}const D=B();return Me({el:l,id:D,port:t,props:a,rect:y,scope:p,isLanded:c,isVisible:i,options:f,liftOffTime:d,component:n,componentName:s,componentId:r,generateId:B,setLocalOptions(_={}){u.value=JSON.parse(JSON.stringify(_))},elRef(){return l},liftOff(){!c.value||(c.value=!1,d.value=Date.now(),y.listen())},land(){c.value||(c.value=!0,y.pause())}})}function bE(t){const n=Me(new Map);function o(r,l){let a=n.get(r);return a||(a=CE(r,l,t),n.set(r,a)),a.component=l,a}function s(r){var l;(l=n.get(r))==null||l.scope.stop(),n.delete(r)}return{portMap:n,dispose:s,getInstance:o}}var EE=Object.defineProperty,wE=Object.defineProperties,_E=Object.getOwnPropertyDescriptors,Ri=Object.getOwnPropertySymbols,xE=Object.prototype.hasOwnProperty,kE=Object.prototype.propertyIsEnumerable,Pi=(t,n,o)=>n in t?EE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,TE=(t,n)=>{for(var o in n||(n={}))xE.call(n,o)&&Pi(t,o,n[o]);if(Ri)for(var o of Ri(n))kE.call(n,o)&&Pi(t,o,n[o]);return t},SE=(t,n)=>wE(t,_E(n));const RE=we({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=q(_a);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=k(()=>n.getInstance(t.port,t.component)),s=k(()=>{var a;return((a=o.value.el)==null?void 0:a.id)||o.value.id}),r=k(()=>{const a=Date.now()-o.value.liftOffTime,c=Math.max(0,o.value.options.duration-a),i=o.value.rect,p={position:"absolute",left:0,top:0,width:`${i.width}px`,height:`${i.height}px`,transform:`translate3d(${i.left}px,${i.top}px,0px)`};return!o.value.isVisible||!o.value.el?SE(TE({},p),{zIndex:-1,display:"none"}):(o.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:o.value.options.easing}),p)}),l={};return()=>{const a=!!(o.value.isLanded&&o.value.el);return ft("div",{style:r.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},ft(dy,{to:a?`#${s.value}`:"body",disabled:!a},ft(o.value.component,Rs(l,o.value.props))))}}}),PE=we({name:"StarportCarrier",setup(t,{slots:n}){const o=bE(q(vd,{}));return so().appContext.app.provide(_a,o),()=>{var r;return[(r=n.default)==null?void 0:r.call(n),Array.from(o.portMap.entries()).map(([l,{component:a}])=>ft(RE,{key:l,port:l,component:a}))]}}});function OE(t={}){return{install(n){n.provide(vd,t),n.component("Starport",dE),n.component("StarportCarrier",PE)}}}function $E(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(eE),t.app.use(OE({keepAlive:!0}))}function at(t,n,o){var s,r;return(r=((s=t.instance)==null?void 0:s.$).provides[n])!=null?r:o}function ME(){return{install(t){t.directive("click",{name:"v-click",mounted(n,o){var u,f,d,y;if(So.value||((u=at(o,Ds))==null?void 0:u.value))return;const s=at(o,jn),r=at(o,vs),l=at(o,cl),a=o.modifiers.hide!==!1&&o.modifiers.hide!=null,c=o.modifiers.fade!==!1&&o.modifiers.fade!=null,i=((f=s==null?void 0:s.value)==null?void 0:f.length)||0,p=c?um:Er;if(s&&!((d=s==null?void 0:s.value)!=null&&d.includes(n))&&s.value.push(n),o.value===null&&(o.value=s==null?void 0:s.value.length),!(l!=null&&l.value.has(o.value)))l==null||l.value.set(o.value,[n]);else if(!((y=l==null?void 0:l.value.get(o.value))!=null&&y.includes(n))){const h=(l==null?void 0:l.value.get(o.value))||[];l==null||l.value.set(o.value,[n].concat(h))}n==null||n.classList.toggle($n,!0),r&&ce(r,()=>{var _;const h=(_=r==null?void 0:r.value)!=null?_:0,B=o.value!=null?h>=o.value:h>i;n.classList.contains(wr)||n.classList.toggle(p,!B),a!==!1&&a!==void 0&&n.classList.toggle(p,B),n.classList.toggle(fo,!1);const D=l==null?void 0:l.value.get(h);D==null||D.forEach((C,b)=>{C.classList.toggle(us,!1),b===D.length-1?C.classList.toggle(fo,!0):C.classList.toggle(us,!0)}),n.classList.contains(fo)||n.classList.toggle(us,B)},{immediate:!0})},unmounted(n,o){n==null||n.classList.toggle($n,!1);const s=at(o,jn);s!=null&&s.value&&mc(s.value,n)}}),t.directive("after",{name:"v-after",mounted(n,o){var c,i;if(So.value||((c=at(o,Ds))==null?void 0:c.value))return;const s=at(o,jn),r=at(o,vs),l=at(o,cl),a=s==null?void 0:s.value.length;o.value===void 0&&(o.value=s==null?void 0:s.value.length),l!=null&&l.value.has(o.value)?(i=l==null?void 0:l.value.get(o.value))==null||i.push(n):l==null||l.value.set(o.value,[n]),n==null||n.classList.toggle($n,!0),r&&ce(r,()=>{var u,f,d;const p=((u=r.value)!=null?u:0)>=((d=(f=o.value)!=null?f:a)!=null?d:0);n.classList.contains(wr)||n.classList.toggle(Er,!p),n.classList.toggle(fo,!1),n.classList.contains(fo)||n.classList.toggle(us,p)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle($n,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,o){var a,c,i;if(So.value||((a=at(o,Ds))==null?void 0:a.value))return;const s=at(o,jn),r=at(o,vs),l=((c=s==null?void 0:s.value)==null?void 0:c.length)||0;s&&!((i=s==null?void 0:s.value)!=null&&i.includes(n))&&s.value.push(n),n==null||n.classList.toggle($n,!0),r&&ce(r,()=>{var f;const p=(f=r==null?void 0:r.value)!=null?f:0,u=o.value!=null?p>=o.value:p>l;n.classList.toggle(Er,u),n.classList.toggle(wr,u)},{immediate:!0})},unmounted(n,o){n==null||n.classList.toggle($n,!1);const s=at(o,jn);s!=null&&s.value&&mc(s.value,n)}})}}}function FE(t,n){const o=vu(t),s=Du(n,o.currentRoute,o.currentPage);return{nav:Ze(ve(ve({},o),s),{downloadPDF:Cl,next:ln,nextSlide:Vo,openInEditor:oB,prev:an,prevSlide:zo}),configs:Be,themeConfigs:k(()=>Be.themeConfig)}}function LE(){return{install(t){const n=FE(Kt,St);t.provide(Z,Me(n))}}}const co=Uy(rB);co.use(mt);co.use(lm());co.use(ME());co.use(LE());$E({app:co,router:mt});co.mount("#app");export{vo as $,oe as A,fu as B,ue as C,Ne as D,Bu as E,Xe as F,De as G,Y8 as H,Ce as I,Gl as J,Yl as K,St as L,Is as M,Q7 as N,Or as O,_r as P,Jo as Q,Rr as R,tD as S,ca as T,ia as U,Qv as V,rg as W,Rt as X,HE as Y,zt as Z,Qo as _,e as a,ds as a0,Zo as a1,Dl as a2,x8 as a3,k8 as a4,T8 as a5,R8 as a6,nr as a7,Pp as a8,JE as a9,Lt as aa,et as ab,Hg as ac,An as ad,$p as ae,P8 as af,tr as ag,k as b,N as c,we as d,Z as e,pt as f,K as g,v as h,q as i,j8 as j,nB as k,Be as l,cm as m,Fe as n,E as o,Yo as p,Me as q,H as r,jE as s,_n as t,NE as u,qE as v,ce as w,U as x,tt as y,Fp as z};
