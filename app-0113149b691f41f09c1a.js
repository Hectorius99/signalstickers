!function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&b.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);b.length;)b.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},o={0:0},s={0:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{3:1,5:1,7:1,8:1}[e]&&t.push(o[e]=new Promise((function(t,a){for(var r=e+".styles-"+{2:"31d6cfe0d16ae931b73c",3:"bfafbfa9b81840bea1d2",4:"31d6cfe0d16ae931b73c",5:"ee855a6121aa49760fcd",6:"31d6cfe0d16ae931b73c",7:"538ade9fb7bc3cc2381e",8:"b184920d72a8ede5f69a"}[e]+".css",s=i.p+r,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var c=(u=n[l]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===s))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){var u;if((c=(u=d[l]).getAttribute("data-href"))===r||c===s)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||s,n=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=r,delete o[e],b.parentNode.removeChild(b),a(n)},b.href=s,document.getElementsByTagName("head")[0].appendChild(b)})).then((function(){o[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=s[e]=[t,r]}));t.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({}[e]||e)+"-"+{2:"2f6ce29d7963e63c7157",3:"2a179bec149d09d1355d",4:"0a5a4c4730c56dbe6823",5:"b49f7cdb193155f073b6",6:"db99cf5efb1cb6b286ba",7:"7594b9c784c9aeea1684",8:"c4e637ebc1f0cca0cd61"}[e]+".js"}(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,a[1](c)}s[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=c;n.push([0,1]),a()}({"./.linaria-cache/src/components/layout/Navbar.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/layout/SuspenseFallback.linaria.css":function(e,t,a){},"./src/assets/favicon.png":function(e,t,a){"use strict";t.a=a.p+"assets/favicon.8235f21104266b1e0f2a3c5630eca0d8.png"},"./src/components/App.tsx":function(e,t,a){"use strict";(function(e){var r,o=a("./node_modules/react-hot-loader/root.js"),s=a("./node_modules/react/index.js"),n=a.n(s),i=a("./node_modules/react-router-dom/esm/react-router-dom.js"),l=a("./node_modules/react-router/esm/react-router.js"),c=a("./src/contexts/StickersContext.tsx"),d=a("./src/components/layout/Navbar.tsx"),u=a("./src/components/layout/SuspenseFallback.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const b=n.a.lazy(async()=>a.e(7).then(a.bind(null,"./src/components/about/About.tsx"))),m=n.a.lazy(async()=>Promise.all([a.e(2),a.e(8)]).then(a.bind(null,"./src/components/contribute/Contribute.tsx"))),f=n.a.lazy(async()=>Promise.all([a.e(6),a.e(5)]).then(a.bind(null,"./src/components/home/Home.tsx"))),p=n.a.lazy(async()=>Promise.all([a.e(4),a.e(3)]).then(a.bind(null,"./src/components/pack/StickerPackDetail.tsx"))),g=()=>n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(d.a,null),n.a.createElement("div",{className:"container d-flex flex-grow-1 flex-column"},n.a.createElement(s.Suspense,{fallback:n.a.createElement(u.a,null)},n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/"},n.a.createElement(f,null)),n.a.createElement(l.a,{path:"/pack/:packId"},n.a.createElement(p,null)),n.a.createElement(l.a,{path:"/contribute"},n.a.createElement(m,null)),n.a.createElement(l.a,{path:"/about"},n.a.createElement(b,null)))))))),v=Object(o.hot)(g);var k,h;t.a=v,(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(k.register(b,"About","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx"),k.register(m,"Contribute","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx"),k.register(f,"Home","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx"),k.register(p,"Pack","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx"),k.register(g,"App","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx"),k.register(v,"default","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/layout/Navbar.tsx":function(e,t,a){"use strict";(function(e){var r,o=a("./node_modules/react/index.js"),s=a.n(o),n=a("./node_modules/react-router-dom/esm/react-router-dom.js"),i=a("./node_modules/linaria/react.js"),l=a("./node_modules/react-octicon/lib/index.js"),c=a.n(l),d=a("./src/assets/favicon.png");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const u=Object(i.styled)("nav")({name:"StyledNav",class:"s1l3u8z6"}),b=()=>s.a.createElement(u,{className:"navbar navbar-expand-lg navbar-dark"},s.a.createElement("div",{className:"container"},s.a.createElement(n.b,{className:"navbar-brand",to:"/"},s.a.createElement("img",{src:d.a,alt:"Signal Logo"})," Signal Stickers"),s.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbar-toggle","aria-controls":"navbar-toggle","aria-expanded":"false","aria-label":"Toggle Navigation"},s.a.createElement(c.a,{name:"grabber"})),s.a.createElement("div",{id:"navbar-toggle",className:"collapse navbar-collapse"},s.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(n.b,{to:"/contribute",className:"nav-link",title:"Contribute"},"Contribute")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(n.b,{to:"/about",className:"nav-link",title:"About"},"About")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"https://twitter.com/signalstickers",rel:"noreferrer",target:"_blank",title:"Twitter feed"},"Twitter ",s.a.createElement(c.a,{name:"link-external"}))))))),m=b;var f,p;t.a=m,a("./.linaria-cache/src/components/layout/Navbar.linaria.css"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(u,"StyledNav","/home/travis/build/signalstickers/signalstickers/src/components/layout/Navbar.tsx"),f.register(b,"NavbarComponent","/home/travis/build/signalstickers/signalstickers/src/components/layout/Navbar.tsx"),f.register(m,"default","/home/travis/build/signalstickers/signalstickers/src/components/layout/Navbar.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/layout/SuspenseFallback.tsx":function(e,t,a){"use strict";(function(e){var r,o=a("./node_modules/react/index.js"),s=a.n(o),n=a("./node_modules/linaria/react.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const l=Object(n.styled)("div")({name:"Spinner",class:"slpzcbs"}),c=()=>{const[e,t]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{const e=setTimeout(()=>{t(!0)},2e3);return()=>{clearTimeout(e)}},[]),s.a.createElement("div",{className:"d-flex align-items-center justify-content-center flex-grow-1"},e&&s.a.createElement(l,{className:"spinner-border",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")))};i(c,"useState{[showSpinner, setShowSpinner](false)}\nuseEffect{}");const d=c;var u,b;t.a=d,a("./.linaria-cache/src/components/layout/SuspenseFallback.linaria.css"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(l,"Spinner","/home/travis/build/signalstickers/signalstickers/src/components/layout/SuspenseFallback.tsx"),u.register(c,"SuspenseFallbackComponent","/home/travis/build/signalstickers/signalstickers/src/components/layout/SuspenseFallback.tsx"),u.register(d,"default","/home/travis/build/signalstickers/signalstickers/src/components/layout/SuspenseFallback.tsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/contexts/StickersContext.tsx":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return b}));var r,o=a("./node_modules/react/index.js"),s=a.n(o),n=a("./node_modules/ramda/es/equals.js"),i=a("./node_modules/use-async-effect/index.js"),l=a.n(i),c=a("./src/lib/stickers.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const u=Object(o.createContext)({}),b=e=>{const[t,a]=Object(o.useState)(""),[r,i]=Object(o.useState)([]),[d,b]=Object(o.useState)();return l()(async()=>{const e=await Object(c.e)();b(e),i(e)},[]),Object(o.useEffect)(()=>{if(!d)return;const e=Object(c.a)(t,d);n.a(e,r)||i(e)},[d,t,r]),s.a.createElement(u.Provider,{value:{allStickerPacks:d,searchQuery:t,setSearchQuery:a,searchResults:r}},e.children)};d(b,"useState{[searchQuery, setSearchQuery]('')}\nuseState{[searchResults, setSearchResults]([])}\nuseState{[allStickerPacks, setAllStickerPacks]}\nuseAsyncEffect{}\nuseEffect{}",()=>[l.a]);const m=u;var f,p;t.b=m,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(u,"Context","/home/travis/build/signalstickers/signalstickers/src/contexts/StickersContext.tsx"),f.register(b,"Provider","/home/travis/build/signalstickers/signalstickers/src/contexts/StickersContext.tsx"),f.register(m,"default","/home/travis/build/signalstickers/signalstickers/src/contexts/StickersContext.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/etc/constants.ts":function(e,t,a){"use strict";(function(e){var r;a.d(t,"a",(function(){return o})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const o={xs:0,sm:576,md:768,lg:992,xl:1200};var s,n;(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(o,"BOOTSTRAP_BREAKPOINTS","/home/travis/build/signalstickers/signalstickers/src/etc/constants.ts"),s.register(70,"NAVBAR_HEIGHT","/home/travis/build/signalstickers/signalstickers/src/etc/constants.ts")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/index.css":function(e,t,a){},"./src/index.tsx":function(e,t,a){"use strict";a.r(t);var r=a("./node_modules/react/index.js"),o=a.n(r),s=a("./node_modules/react-dom/index.js"),n=a.n(s),i=a("./src/components/App.tsx"),l=a("./src/lib/utils.ts");a("./src/index.css"),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(l.a)(),n.a.render(o.a.createElement(i.a,null),document.querySelector("#root"))},"./src/lib/convert-image.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return p}));var r,o=a("./node_modules/p-queue/dist/index.js"),s=a.n(o),n=a("./node_modules/p-wait-for/index.js"),i=a.n(n),l=a("./node_modules/webp-hero/dist/index.js"),c=a("./node_modules/webp-hero/libwebp/dist/webp.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const d=new c.a;d.Module.doNotCaptureKeyboard=!0;const u=new l.a({webp:d,webpSupport:Object(l.c)(),detectWebpImage:l.b}),b=Object(l.c)(),m=new s.a({concurrency:1});async function f(){return b}async function p(e){if(await b){return`data:image/webp;base64,${btoa(String.fromCharCode.apply(void 0,[...e]))}`}return m.add(async()=>{try{return await i()(()=>!1===u.busy),await u.decode(e)}catch(e){throw console.error(`[convertImage] Image conversion failed: ${e.message}`),e}})}var g,v;(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(d,"webp","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),g.register(u,"webpConverter","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),g.register(b,"hasWebpSupportPromise","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),g.register(m,"imageConversionQueue","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),g.register(f,"hasWebpSupport","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),g.register(p,"convertImage","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/error.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var enterModule;function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}__webpack_require__.d(__webpack_exports__,"a",(function(){return ErrorWithCode})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},reactHotLoader,leaveModule;class ErrorWithCode extends Error{constructor(e,t){super(t),_defineProperty(this,"code",void 0),this.code=null!=e?e:"UNKNOWN"}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}_defineProperty(ErrorWithCode,"from",(e,t)=>{const a=new ErrorWithCode(e,t.message);return a.stack=t.stack,a}),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(ErrorWithCode,"ErrorWithCode","/home/travis/build/signalstickers/signalstickers/src/lib/error.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/lib/stickers.ts":function(e,t,a){"use strict";(function(e){a.d(t,"e",(function(){return y})),a.d(t,"d",(function(){return _})),a.d(t,"b",(function(){return L})),a.d(t,"a",(function(){return x}));var r,o=a("./node_modules/axios/index.js"),s=a.n(o),n=a("./node_modules/fuzzy-search/src/FuzzySearch.js"),i=a("./node_modules/localforage/dist/localforage.js"),l=a.n(i),c=a("./node_modules/ramda/es/find.js"),d=a("./node_modules/ramda/es/test.js"),u=a("./node_modules/ramda/es/prop.js"),b=a("./node_modules/ramda/es/pathEq.js"),m=a("./src/lib/convert-image.ts"),f=a("./src/lib/error.ts"),p=a("./node_modules/@signalstickers/stickers-client/dist/browser.js");a.d(t,"c",(function(){return p.getEmojiForSticker})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;let g;const v=new Map,k=l.a.createInstance({name:"Signal Stickers",storeName:"Image Cache"});function h(e){const t=[/the quota has been exceeded/gi];return!!(null==e?void 0:e.message)&&Boolean(c.a(t=>d.a(t,e.message),t))}async function y(){return g||(g=s.a.request({method:"GET",url:"stickerData.json"}).then(u.a("data"))),g}async function _(e,t){const a=t?`${e}-${t}`:e;try{if(!v.has(a)){const r=await y(),o=c.a(b.a(["meta","id"],e),r),s=o?o.meta:{id:e,key:t},n=null!=t?t:s.key;if(!n)throw new f.a("NO_KEY_PROVIDED",`No key provided for unlisted pack: ${e}.`);const i={meta:s,manifest:await Object(p.getStickerPackManifest)(e,n)};v.set(a,i)}return v.get(a)}catch(e){if(e.isAxiosError&&403===e.response.status)throw new f.a("MANIFEST_DECRYPT",`[getStickerPack] ${e.stack}`);throw new f.a(e.code,`[getStickerPack] ${e.stack}`)}}async function L(e,t,a){let r="";try{const o=`${e}-${a}`;if(!await k.getItem(o)){const s=await Object(p.getStickerInPack)(e,t,a);return r=await Object(m.a)(s),await k.setItem(o,r),r}return await k.getItem(o)}catch(e){if(!h(e))throw new Error(`[getConvertedStickerInPack] Error getting sticker: ${e.message}`)}return r}function x(e,t){return new n.a(t,["manifest.title","manifest.author","meta.tags"],{caseSensitive:!1,sort:!0}).search(e)}var H,w;(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(g,"stickerPackDirectoryPromise","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),H.register(v,"stickerPackCache","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),H.register(k,"stickerImageCache","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),H.register(h,"isStorageUnavailableError","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),H.register(y,"getStickerPackDirectory","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),H.register(_,"getStickerPack","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),H.register(L,"getConvertedStickerInPack","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),H.register(x,"fuzzySearchStickerPacks","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/utils.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));a("./node_modules/bytes/index.js");var r,o=a("./src/etc/constants.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var s,n;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;async function i(){}function l(e,t="min"){const a=o.a[e];if(!a)throw new Error(`Invalid breakpoint: ${e}`);return`(${t}-width: ${"min"===t?a:a-1}px)`}(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(i,"printStorageUsage","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts"),s.register(l,"bp","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},0:function(e,t,a){a("./node_modules/@babel/polyfill/lib/index.js"),a("./node_modules/react-hot-loader/patch.js"),e.exports=a("./src/index.tsx")}});
//# sourceMappingURL=app-0113149b691f41f09c1a.js.map