import{n as w,e as d,c as b,a as g,d as c,w as m,i as u,j as $,k as B,t as H,b as L,g as C,h as R,l as k,s as I,f as Y,u as y,m as E,o as T}from"./scheduler.Tw02lqTe.js";import{S as v,i as D,c as P,b as S,m as j,t as p,a as h,d as q}from"./index.MxabShxR.js";import{p as z}from"./stores.qGSyOFK2.js";import{b as F}from"./singletons.t94Lhh_n.js";import{L as G}from"./Library_Panel.pFvM22G1.js";const J="/library/",K=(o,e)=>{const s=e.split("/").at(-1);return{path:F+J+o,path_is_selected:s===o,path_segment:s}};function M(o){let e,s=o[0].name+"",t;return{c(){e=d("a"),t=H(s),this.h()},l(a){e=b(a,"A",{href:!0});var n=g(e);t=L(n,s),n.forEach(c),this.h()},h(){m(e,"href",o[2])},m(a,n){u(a,e,n),C(e,t)},p(a,n){n&1&&s!==(s=a[0].name+"")&&R(t,s),n&4&&m(e,"href",a[2])},d(a){a&&c(e)}}}function N(o){let e=o[0].name+"",s;return{c(){s=H(e)},l(t){s=L(t,e)},m(t,a){u(t,s,a)},p(t,a){a&1&&e!==(e=t[0].name+"")&&R(s,e)},d(t){t&&c(s)}}}function O(o){let e,s;function t(r,i){return r[1]?N:M}let a=t(o),n=a(o);return{c(){e=d("h2"),n.c(),this.h()},l(r){e=b(r,"H2",{class:!0,id:!0});var i=g(e);n.l(i),i.forEach(c),this.h()},h(){m(e,"class","box"),m(e,"id",s=o[0].name)},m(r,i){u(r,e,i),n.m(e,null)},p(r,[i]){a===(a=t(r))&&n?n.p(r,i):(n.d(1),n=a(r),n&&(n.c(),n.m(e,null))),i&1&&s!==(s=r[0].name)&&m(e,"id",s)},i:$,o:$,d(r){r&&c(e),n.d()}}}function Q(o,e,s){let t,a,n;B(o,z,i=>s(3,n=i));let{tome:r}=e;return o.$$set=i=>{"tome"in i&&s(0,r=i.tome)},o.$$.update=()=>{o.$$.dirty&9&&s(2,{path:t,path_is_selected:a}=K(r.slug,n.url.pathname),t,(s(1,a),s(0,r),s(3,n)))},[r,a,t,n]}class U extends v{constructor(e){super(),D(this,e,Q,O,w,{tome:0})}}const V=o=>({}),A=o=>({});function W(o){let e,s;return e=new U({props:{tome:o[0]}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){j(e,t,a),s=!0},p(t,a){const n={};a&1&&(n.tome=t[0]),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function X(o){let e,s,t;const a=o[1].header,n=k(a,o,o[2],A),r=n||W(o),i=o[1].default,_=k(i,o,o[2],null);return{c(){e=d("header"),r&&r.c(),s=I(),_&&_.c(),this.h()},l(l){e=b(l,"HEADER",{class:!0});var f=g(e);r&&r.l(f),f.forEach(c),s=Y(l),_&&_.l(l),this.h()},h(){m(e,"class","svelte-sr4458")},m(l,f){u(l,e,f),r&&r.m(e,null),u(l,s,f),_&&_.m(l,f),t=!0},p(l,f){n?n.p&&(!t||f&4)&&y(n,a,l,l[2],t?T(a,l[2],f,V):E(l[2]),A):r&&r.p&&(!t||f&1)&&r.p(l,t?f:-1),_&&_.p&&(!t||f&4)&&y(_,i,l,l[2],t?T(i,l[2],f,null):E(l[2]),null)},i(l){t||(p(r,l),p(_,l),t=!0)},o(l){h(r,l),h(_,l),t=!1},d(l){l&&(c(e),c(s)),r&&r.d(l),_&&_.d(l)}}}function Z(o){let e,s;return e=new G({props:{$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,a){j(e,t,a),s=!0},p(t,[a]){const n={};a&5&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function x(o,e,s){let{$$slots:t={},$$scope:a}=e,{tome:n}=e;return o.$$set=r=>{"tome"in r&&s(0,n=r.tome),"$$scope"in r&&s(2,a=r.$$scope)},[n,t,a]}class re extends v{constructor(e){super(),D(this,e,x,Z,w,{tome:0})}}export{re as T};
