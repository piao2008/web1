if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>r(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"web1"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.e13076bf.css",revision:null},{url:"/index.html",revision:"a36823e2857f97e38a6fb544667125c1"},{url:"/js/about.d91bcb1d.js",revision:null},{url:"/js/app.475ecb00.js",revision:null},{url:"/js/chunk-vendors.fe8ce725.js",revision:null},{url:"/manifest.json",revision:"047b09975237a15b214145b76139dc5b"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
