if(!self.define){let e,c={};const i=(i,s)=>(i=new URL(i+".js",s).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let d={};const n=e=>i(e,r),f={module:{uri:r},exports:d,require:n};c[r]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(a(...e),d)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/01/05/hello-world/index.html",revision:"01248cd31dacab3a6c13e2cf7f214b5b"},{url:"2023/01/07/测试封面/index.html",revision:"088a4a688b104a99691ec4c8c45605f4"},{url:"archives/2023/01/index.html",revision:"76457a7619bebc976743feb0eec0e310"},{url:"archives/2023/index.html",revision:"44aa91e798df8525890bad056fc72bd0"},{url:"archives/index.html",revision:"919e1ef99eeeed3bf3edd6c71076aa4d"},{url:"categories/index.html",revision:"a5d30d954718ac0a5013a4d6a2f9ed71"},{url:"css/background.css",revision:"da9b51dd5e4a70d2a6bb974539828647"},{url:"css/Hanasaki.css",revision:"adeef90b7e426b230f452abcabbb3636"},{url:"css/index.css",revision:"b6f23227cc81b5c555c61b371af7c07c"},{url:"css/page.css",revision:"3969a4bd27cc50f50dfb97a80600b77f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"979b7b5d8b3cd62fe744c0ccc1c02ba6"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"tags/index.html",revision:"020cbd3d2996895af5605b0b666f4abe"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
