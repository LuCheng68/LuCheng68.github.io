if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let l={};const f=e=>i(e,c),s={module:{uri:c},exports:l,require:f};a[c]=Promise.all(r.map((e=>s[e]||f(e)))).then((e=>(d(...e),l)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/01/05/hello-world/index.html",revision:"e2f41170e0fc956f15aaba52c2f2dbbe"},{url:"2024/01/21/刷机/evoROM.jpg",revision:"f78f08dde2a999a5ba7a4e1dbe3e69eb"},{url:"2024/01/21/刷机/F2FS.jpg",revision:"56cbf7a301e7c7790a7816d2ca02b457"},{url:"2024/01/21/刷机/img.jpg",revision:"b6fd78db5bdc78bc6a5b18dbbf8d87e7"},{url:"2024/01/21/刷机/index.html",revision:"03479098347a0b9b6f283cc36e055e30"},{url:"2024/01/21/刷机/REC.jpg",revision:"6f92dda841bac0c570e35bc4f0e1046d"},{url:"2024/01/21/刷机/修改.jpg",revision:"6d031777c88f7b32f295ac5217e278c0"},{url:"2024/01/21/刷机/动态分区.jpg",revision:"b4f1af5f5e196d07dc56b0fa3f8597cf"},{url:"2024/01/21/刷机/底包.jpg",revision:"5681d6e2f234eef8a7a75165602d6c85"},{url:"2024/01/21/刷机/格式化.jpg",revision:"608e4f5c4212b4ace50f1e3350946323"},{url:"2024/01/21/刷机/选择data.jpg",revision:"60e08a8232480afdf4f7a49a02f86d68"},{url:"archives/2023/01/index.html",revision:"0116d8edc057075fcaabc53ad7d11588"},{url:"archives/2023/index.html",revision:"8763c1fd3c8e9ae6d217165b0b92f9dc"},{url:"archives/2024/01/index.html",revision:"1f62616b9fa3f6e5ea8cb9a0cb641a2d"},{url:"archives/2024/index.html",revision:"d5cdec3d074bee2f6da3ad538602cf17"},{url:"archives/index.html",revision:"9c8f719de9b355a2055dde4c33c275e5"},{url:"categories/index.html",revision:"78a5acab764282cd2f6082fb205dcf13"},{url:"categories/教程/index.html",revision:"2a70749955052b3974a2d66e13eac55f"},{url:"css/background.css",revision:"284af39d4ab73979ccd649489e26c4eb"},{url:"css/Hanasaki.css",revision:"adeef90b7e426b230f452abcabbb3636"},{url:"css/index.css",revision:"aa035fe72a19cfc2caf0601df2473407"},{url:"css/page.css",revision:"1cdabc0686dea056b3155d1eb39705e0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"03cd62e7fa79128732f408a442f8b943"},{url:"gallery/动漫/index.html",revision:"2df2bf75cb61a7490d2d0293cd155c49"},{url:"gallery/原神/1.jpg",revision:"2a1071a127c550982898a6ba420244c4"},{url:"gallery/原神/10.jpg",revision:"fbea62aa4ca0463b214a2c733f78e227"},{url:"gallery/原神/11.jpg",revision:"c5f4983e69f114df015949ff2388efad"},{url:"gallery/原神/12.jpg",revision:"31eac6bd70de7ad2530f280f7ace6c33"},{url:"gallery/原神/13.jpg",revision:"c3069d07726b98b3add9ccab3512f27a"},{url:"gallery/原神/14.jpg",revision:"6854a161c0d915a9507eae33ad89492a"},{url:"gallery/原神/15.jpg",revision:"871d8d9c844fada8214ee6d5c337a601"},{url:"gallery/原神/16.jpg",revision:"26b540b33f92909e5f0e5fd9412efb58"},{url:"gallery/原神/17.jpg",revision:"834ce5ed2fbf91fd4b72fe1d86291459"},{url:"gallery/原神/18.jpg",revision:"aabf5940ae9779bee6443e412e8bda9a"},{url:"gallery/原神/2.jpg",revision:"2770c6b87e93917a959fd0d457e963f0"},{url:"gallery/原神/3.jpg",revision:"fb9d7ab31e2a18ba7a24915d144a2659"},{url:"gallery/原神/4.jpg",revision:"67f68e54b0c67447565fd4f489f4df65"},{url:"gallery/原神/5.jpg",revision:"bc0d935cd6d019965854a34da05fac48"},{url:"gallery/原神/6.jpg",revision:"73b29e8b2e94fb623922fcb559ac208d"},{url:"gallery/原神/7.jpg",revision:"a13c104c599182d19b118ca0e0beaed9"},{url:"gallery/原神/8.jpg",revision:"07f556e7d011493327a37310e336e69c"},{url:"gallery/原神/9.jpg",revision:"0561a2d1269dec2f29e52f1b1417bcc1"},{url:"gallery/原神/index.html",revision:"0a46bfbb29c8d1104e9ab5c116a78aaf"},{url:"images/meng.png",revision:"27fa61c417f6262cdeade6dd09682752"},{url:"images/TheFutureWedding花嫁4k.jpg",revision:"4bb31283abb7efc19005cf19185e2c45"},{url:"images/原神.jpg",revision:"78aa6a59c8454b331b6583ae24d828cf"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"961ec77aaae246b0f1d84d8c18685c9c"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"tags/index.html",revision:"94f6dd095398d4d07e606599ab853969"},{url:"tags/搞机/index.html",revision:"26a888ca704f34322af900d1d2207418"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
