import{n as J,l as I,e as v,c as y,a as B,d as m,w as d,y as E,i as k,g as P,u as V,m as z,o as F,B as K,k as L,D,t as A,b as S,h as M,j as N}from"./scheduler.Tw02lqTe.js";import{S as O,i as Q,t as b,g as G,e as H,a as g}from"./index.MxabShxR.js";import{e as j}from"./each.4Anau-Rw.js";import{b as R}from"./singletons.t94Lhh_n.js";import{p as T}from"./stores.qGSyOFK2.js";const U=s=>s.split("/").filter(e=>e&&e!=="."&&e!==".."),W=s=>{const e=[],t=U(s);t.length&&e.push({type:"separator",path:"/"});let r="";for(let c=0;c<t.length;c++){const n=t[c];r+="/"+n,e.push({type:"piece",name:n,path:r}),c!==t.length-1&&e.push({type:"separator",path:r})}return e};function q(s,e,t){const r=s.slice();return r[11]=e[t],r}const X=s=>({}),w=s=>({});function Y(s){let e;return{c(){e=A("•")},l(t){e=S(t,"•")},m(t,r){k(t,e,r)},d(t){t&&m(e)}}}function Z(s){let e,t;const r=s[10].separator,c=I(r,s,s[9],w),n=c||$();return{c(){e=v("span"),n&&n.c(),this.h()},l(l){e=y(l,"SPAN",{class:!0});var f=B(e);n&&n.l(f),f.forEach(m),this.h()},h(){d(e,"class","separator svelte-g6c005")},m(l,f){k(l,e,f),n&&n.m(e,null),t=!0},p(l,f){c&&c.p&&(!t||f&512)&&V(c,r,l,l[9],t?F(r,l[9],f,X):z(l[9]),w)},i(l){t||(b(n,l),t=!0)},o(l){g(n,l),t=!1},d(l){l&&m(e),n&&n.d(l)}}}function x(s){let e,t=s[11].name+"",r,c;return{c(){e=v("a"),r=A(t),this.h()},l(n){e=y(n,"A",{href:!0,class:!0});var l=B(e);r=S(l,t),l.forEach(m),this.h()},h(){d(e,"href",c=s[0]+s[11].path),d(e,"class","svelte-g6c005"),E(e,"selected",s[11].path===s[3])},m(n,l){k(n,e,l),P(e,r)},p(n,l){l&4&&t!==(t=n[11].name+"")&&M(r,t),l&5&&c!==(c=n[0]+n[11].path)&&d(e,"href",c),l&12&&E(e,"selected",n[11].path===n[3])},i:N,o:N,d(n){n&&m(e)}}}function $(s){let e;return{c(){e=A("/")},l(t){e=S(t,"/")},m(t,r){k(t,e,r)},d(t){t&&m(e)}}}function C(s){let e,t,r,c;const n=[x,Z],l=[];function f(a,h){return a[11].type==="piece"?0:1}return e=f(s),t=l[e]=n[e](s),{c(){t.c(),r=D()},l(a){t.l(a),r=D()},m(a,h){l[e].m(a,h),k(a,r,h),c=!0},p(a,h){let o=e;e=f(a),e===o?l[e].p(a,h):(G(),g(l[o],1,1,()=>{l[o]=null}),H(),t=l[e],t?t.p(a,h):(t=l[e]=n[e](a),t.c()),b(t,1),t.m(r.parentNode,r))},i(a){c||(b(t),c=!0)},o(a){g(t),c=!1},d(a){a&&m(r),l[e].d(a)}}}function ee(s){let e,t,r;const c=s[10].default,n=I(c,s,s[9],null),l=n||Y();let f=j(s[2]),a=[];for(let o=0;o<f.length;o+=1)a[o]=C(q(s,f,o));const h=o=>g(a[o],1,1,()=>{a[o]=null});return{c(){e=v("div"),t=v("a"),l&&l.c();for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=y(o,"DIV",{class:!0});var _=B(e);t=y(_,"A",{href:!0,class:!0});var i=B(t);l&&l.l(i),i.forEach(m);for(let u=0;u<a.length;u+=1)a[u].l(_);_.forEach(m),this.h()},h(){d(t,"href",s[1]),d(t,"class","svelte-g6c005"),E(t,"selected",s[1]===s[3]),d(e,"class","breadcrumb svelte-g6c005")},m(o,_){k(o,e,_),P(e,t),l&&l.m(t,null);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(e,null);r=!0},p(o,[_]){if(n&&n.p&&(!r||_&512)&&V(n,c,o,o[9],r?F(c,o[9],_,null):z(o[9]),null),(!r||_&2)&&d(t,"href",o[1]),(!r||_&10)&&E(t,"selected",o[1]===o[3]),_&525){f=j(o[2]);let i;for(i=0;i<f.length;i+=1){const u=q(o,f,i);a[i]?(a[i].p(u,_),b(a[i],1)):(a[i]=C(u),a[i].c(),b(a[i],1),a[i].m(e,null))}for(G(),i=f.length;i<a.length;i+=1)h(i);H()}},i(o){if(!r){b(l,o);for(let _=0;_<f.length;_+=1)b(a[_]);r=!0}},o(o){g(l,o),a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)g(a[_]);r=!1},d(o){o&&m(e),l&&l.d(o),K(a,o)}}}function te(s,e,t){let r,c,n,l,f,a;L(s,T,p=>t(8,a=p));let{$$slots:h={},$$scope:o}=e,{path:_=void 0}=e,{selected_path:i=void 0}=e,{base_path:u=void 0}=e;return s.$$set=p=>{"path"in p&&t(4,_=p.path),"selected_path"in p&&t(5,i=p.selected_path),"base_path"in p&&t(6,u=p.base_path),"$$scope"in p&&t(9,o=p.$$scope)},s.$$.update=()=>{s.$$.dirty&272&&t(7,r=_??a.url.pathname),s.$$.dirty&160&&t(3,c=i===null?null:i===void 0?r:i),s.$$.dirty&64&&t(0,n=u??R),s.$$.dirty&128&&t(2,l=W(r)),s.$$.dirty&1&&t(1,f=n||"/")},[n,f,l,c,_,i,u,r,a,o,h]}class ne extends O{constructor(e){super(),Q(this,e,te,ee,J,{path:4,selected_path:5,base_path:6})}}export{ne as B};
