import{n as H,D as d,i as h,d as u,F as J,l as v,e as g,c as j,a as D,w as p,A as k,g as E,u as A,m as I,o as V,G as K,s as C,f as F,t as G,b as O,h as U}from"./scheduler.Tw02lqTe.js";import{S as L,i as M,g as N,a as b,e as S,t as _}from"./index.MxabShxR.js";const P={inform:{color:"var(--text_2)",icon:"🗨️"},help:{color:"var(--color_2)",icon:"🍀"},error:{color:"var(--color_5)",icon:"⁉"}},Q=s=>({icon:s&8}),T=s=>({icon:s[3]}),R=s=>({icon:s&8}),q=s=>({icon:s[3]});function W(s){let l,i,n,f=s[0]!==null&&w(s);const a=s[7].default,e=v(a,s,s[6],null);return{c(){l=g("div"),f&&f.c(),i=d(),e&&e.c(),this.h()},l(t){l=j(t,"DIV",{class:!0});var o=D(l);f&&f.l(o),i=d(),e&&e.l(o),o.forEach(u),this.h()},h(){p(l,"class","message panel svelte-1ojvm1i"),k(l,"--color",s[2])},m(t,o){h(t,l,o),f&&f.m(l,null),E(l,i),e&&e.m(l,null),n=!0},p(t,o){t[0]!==null?f?(f.p(t,o),o&1&&_(f,1)):(f=w(t),f.c(),_(f,1),f.m(l,i)):f&&(N(),b(f,1,1,()=>{f=null}),S()),e&&e.p&&(!n||o&64)&&A(e,a,t,t[6],n?V(a,t[6],o,null):I(t[6]),null),o&4&&k(l,"--color",t[2])},i(t){n||(_(f),_(e,t),n=!0)},o(t){b(f),b(e,t),n=!1},d(t){t&&u(l),f&&f.d(),e&&e.d(t)}}}function X(s){let l,i,n,f,a,e=s[0]!==null&&B(s);const t=s[7].default,o=v(t,s,s[6],null);return{c(){l=g("button"),e&&e.c(),i=d(),o&&o.c(),this.h()},l(c){l=j(c,"BUTTON",{class:!0,type:!0});var r=D(l);e&&e.l(r),i=d(),o&&o.l(r),r.forEach(u),this.h()},h(){p(l,"class","message svelte-1ojvm1i"),p(l,"type","button"),k(l,"--color",s[2])},m(c,r){h(c,l,r),e&&e.m(l,null),E(l,i),o&&o.m(l,null),n=!0,f||(a=K(l,"click",s[8]),f=!0)},p(c,r){c[0]!==null?e?(e.p(c,r),r&1&&_(e,1)):(e=B(c),e.c(),_(e,1),e.m(l,i)):e&&(N(),b(e,1,1,()=>{e=null}),S()),o&&o.p&&(!n||r&64)&&A(o,t,c,c[6],n?V(t,c[6],r,null):I(c[6]),null),r&4&&k(l,"--color",c[2])},i(c){n||(_(e),_(o,c),n=!0)},o(c){b(e),b(o,c),n=!1},d(c){c&&u(l),e&&e.d(),o&&o.d(c),f=!1,a()}}}function w(s){let l,i,n;const f=s[7].icon,a=v(f,s,s[6],T),e=a||Y(s);return{c(){l=g("div"),e&&e.c(),i=C(),this.h()},l(t){l=j(t,"DIV",{class:!0});var o=D(l);e&&e.l(o),i=F(o),o.forEach(u),this.h()},h(){p(l,"class","icon svelte-1ojvm1i")},m(t,o){h(t,l,o),e&&e.m(l,null),E(l,i),n=!0},p(t,o){a?a.p&&(!n||o&72)&&A(a,f,t,t[6],n?V(f,t[6],o,Q):I(t[6]),T):e&&e.p&&(!n||o&8)&&e.p(t,n?o:-1)},i(t){n||(_(e,t),n=!0)},o(t){b(e,t),n=!1},d(t){t&&u(l),e&&e.d(t)}}}function Y(s){let l;return{c(){l=G(s[3])},l(i){l=O(i,s[3])},m(i,n){h(i,l,n)},p(i,n){n&8&&U(l,i[3])},d(i){i&&u(l)}}}function B(s){let l,i,n;const f=s[7].icon,a=v(f,s,s[6],q),e=a||Z(s);return{c(){l=g("div"),e&&e.c(),i=C(),this.h()},l(t){l=j(t,"DIV",{class:!0});var o=D(l);e&&e.l(o),i=F(o),o.forEach(u),this.h()},h(){p(l,"class","icon svelte-1ojvm1i")},m(t,o){h(t,l,o),e&&e.m(l,null),E(l,i),n=!0},p(t,o){a?a.p&&(!n||o&72)&&A(a,f,t,t[6],n?V(f,t[6],o,R):I(t[6]),q):e&&e.p&&(!n||o&8)&&e.p(t,n?o:-1)},i(t){n||(_(e,t),n=!0)},o(t){b(e,t),n=!1},d(t){t&&u(l),e&&e.d(t)}}}function Z(s){let l;return{c(){l=G(s[3])},l(i){l=O(i,s[3])},m(i,n){h(i,l,n)},p(i,n){n&8&&U(l,i[3])},d(i){i&&u(l)}}}function y(s){let l,i,n,f;const a=[X,W],e=[];function t(o,c){return o[1]?0:1}return l=t(s),i=e[l]=a[l](s),{c(){i.c(),n=d()},l(o){i.l(o),n=d()},m(o,c){e[l].m(o,c),h(o,n,c),f=!0},p(o,[c]){let r=l;l=t(o),l===r?e[l].p(o,c):(N(),b(e[r],1,1,()=>{e[r]=null}),S(),i=e[l],i?i.p(o,c):(i=e[l]=a[l](o),i.c()),_(i,1),i.m(n.parentNode,n))},i(o){f||(_(i),f=!0)},o(o){b(i),f=!1},d(o){o&&u(n),e[l].d(o)}}}function $(s,l,i){let n,f,a,{$$slots:e={},$$scope:t}=l,{status:o="inform"}=l,{icon:c=void 0}=l,{button:r=void 0}=l;function z(m){J.call(this,s,m)}return s.$$set=m=>{"status"in m&&i(4,o=m.status),"icon"in m&&i(0,c=m.icon),"button"in m&&i(1,r=m.button),"$$scope"in m&&i(6,t=m.$$scope)},s.$$.update=()=>{s.$$.dirty&16&&i(5,n=P[o]),s.$$.dirty&33&&i(3,f=c===void 0?n.icon:c),s.$$.dirty&32&&i(2,a=n.color)},[c,r,a,f,o,n,t,e,z]}class el extends L{constructor(l){super(),M(this,l,$,y,H,{status:4,icon:0,button:1})}}export{el as A};