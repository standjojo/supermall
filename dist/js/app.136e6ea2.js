(function(t){function e(e){for(var r,c,o=e[0],u=e[1],s=e[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},a={app:0},i=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-53b1018e":"94cc406b","chunk-13494fc2":"d4941fff","chunk-787a843c":"be5cc0e4","chunk-18afd002":"9d1d9187","chunk-6cae033d":"1b6255c3","chunk-c8473cb6":"cf300d66","chunk-b7630340":"6ef185ee"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-53b1018e":1,"chunk-13494fc2":1,"chunk-787a843c":1,"chunk-18afd002":1,"chunk-6cae033d":1,"chunk-c8473cb6":1,"chunk-b7630340":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-53b1018e":"961d0ac7","chunk-13494fc2":"42af24b3","chunk-787a843c":"a00377ba","chunk-18afd002":"8afa6848","chunk-6cae033d":"53b30b45","chunk-c8473cb6":"57f0a272","chunk-b7630340":"9da0145e"}[t]+".css",a=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete c[t],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),c=n.n(r);c.a},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main-tab-bar"}},[r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分页")])]),r("tab-bar-item",{attrs:{path:"/cart"}},[r("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"TabBar"},f=l,d=(n("eeb3"),n("2877")),h=Object(d["a"])(f,u,s,!1,null,"0ade5c37",null),p=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?t._t("item-icon-active"):t._t("item-icon"),n("div",{style:t.activeStyle},[t._t("item-text")],2)],2)},b=[],v=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"#FF5777"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$route.path!=this.path&&this.$router.replace(this.path)}}}),g=v,k=(n("fd02"),Object(d["a"])(g,m,b,!1,null,"071b651b",null)),y=k.exports,x={name:"MainTabBar",components:{TabBar:p,TabBarItem:y}},_=x,w=Object(d["a"])(_,i,o,!1,null,"ffdf29e2",null),E=w.exports,O={name:"App",components:{MainTabBar:E}},C=O,j=(n("034f"),Object(d["a"])(C,c,a,!1,null,null,null)),T=j.exports,P=(n("d3b7"),n("8c4f")),S=function(){return Promise.all([n.e("chunk-53b1018e"),n.e("chunk-787a843c"),n.e("chunk-18afd002")]).then(n.bind(null,"b3d7"))},L=function(){return Promise.all([n.e("chunk-53b1018e"),n.e("chunk-13494fc2")]).then(n.bind(null,"c228"))},A=function(){return n.e("chunk-b7630340").then(n.bind(null,"3b42"))},B=function(){return Promise.all([n.e("chunk-53b1018e"),n.e("chunk-787a843c"),n.e("chunk-c8473cb6")]).then(n.bind(null,"bb51"))},$=function(){return Promise.all([n.e("chunk-53b1018e"),n.e("chunk-787a843c"),n.e("chunk-6cae033d")]).then(n.bind(null,"6ab7"))};r["a"].use(P["a"]);var M=[{path:"/",redirect:"/home"},{path:"/home",component:S},{path:"/cart",component:L},{path:"/profile",component:A},{path:"/category",component:B},{path:"/detail",component:$}],N=new P["a"]({routes:M}),D=N,F=(n("7db0"),n("4160"),n("159b"),n("2f62"));r["a"].use(F["a"]);var I=new F["a"].Store({state:{cartList:[]},mutations:{addToCart:function(t,e){void 0===t.cartList.find((function(t){return t.iid===e.iid}))?(e.checked=!0,e.num=1,t.cartList.push(e)):t.cartList.forEach((function(t){t.iid===e.iid&&t.num++}))},changeChecked:function(t,e){t.cartList.forEach((function(t){t.iid===e&&(t.checked=!t.checked)}))},selectAll:function(t,e){t.cartList.forEach((function(t){t.checked=e}))}},getters:{cpuCartCount:function(t){var e=0;return t.cartList.forEach((function(t){e+=t.num})),e}}}),q=I;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],new r["a"]({render:function(t){return t(T)},router:D,store:q}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},"9f77":function(t,e,n){},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},eeb3:function(t,e,n){"use strict";var r=n("9f77"),c=n.n(r);c.a},fd02:function(t,e,n){"use strict";var r=n("fef7"),c=n.n(r);c.a},fef7:function(t,e,n){}});
//# sourceMappingURL=app.136e6ea2.js.map