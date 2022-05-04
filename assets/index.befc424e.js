import{d as v,t as g,c,a as _,r as I,b as w,o as u,e as h,w as S,f as T,m as x,g as F,h as k,T as P,i as y,j as p,k as m,F as $,l as E,n as z,p as j,q as V,s as H,u as O,v as q}from"./vendor.08f46a12.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};U();const J=new Date,W=()=>J.getDay();var f=(e,t)=>{const o=e.__vccOpts||e;for(const[a,n]of t)o[a]=n;return o};const Z=v({props:{title:String},setup(e){const{title:t}=g(e);return{title:t}}}),K={class:"mb20",style:{"max-width":"100%"}},G={class:"big-card"},Q={class:"footer font-white"};function X(e,t,o,a,n,r){return u(),c("div",K,[_("div",G,[I(e.$slots,"default")]),_("div",Q,[_("span",null,w(e.title),1)])])}var C=f(Z,[["render",X]]);const Y=v({props:{title:String,mark:String},setup(e){const{title:t,mark:o}=g(e);return{title:t,mark:o}}}),ee={class:"avatar"},te={class:"head"},ne={class:"name"},se={class:"pro"};function oe(e,t,o,a,n,r){return u(),c("div",ee,[_("div",te,[_("div",ne,w(e.title),1)]),_("div",se,w(e.mark),1)])}var ae=f(Y,[["render",oe],["__scopeId","data-v-cda5d90c"]]);const B=new FileReader,re=v({props:{file:String},setup(e){let t=h(""),{file:o}=g(e);const a=n=>{if(!n){t.value="";return}fetch(`${n}`).then(r=>r.blob()).then(r=>{B.readAsText(r)}),B.onloadend=()=>{t.value=typeof B.result=="string"?x(B.result):"\u65E0\u6CD5\u89E3\u6790"}};return S(o,(n,r)=>{a(n)}),T(()=>{a(o.value)}),{content:t}}}),ue={class:"content p10",style:{"padding-top":"0px"}},ie=["innerHTML"];function le(e,t,o,a,n,r){return u(),c("div",ue,[_("div",{innerHTML:e.content},null,8,ie)])}var L=f(re,[["render",le]]);const ce=v({props:{value:Boolean},emits:["update:value"],setup(e,{emit:t}){let{value:o}=g(e);const a=()=>{t("update:value",!1),document.body.style.overflow="auto"};return S(o,(n,r)=>{n?document.body.style.overflow="hidden":document.body.style.overflow="auto"}),{value:o,updateState:a}}}),de={key:0,style:{"z-index":"1000"}},pe={class:"container"};function me(e,t,o,a,n,r){return u(),F(P,{to:"body"},[e.value?(u(),c("div",de,[_("div",{class:"mask",onClick:t[0]||(t[0]=(...s)=>e.updateState&&e.updateState(...s))}),_("div",pe,[I(e.$slots,"default")])])):k("",!0)])}var A=f(ce,[["render",me]]);const _e=v({name:"me",components:{bigCard:C,avatar:ae,mdReader:L,modal:A},setup(){let e=h("/md/README.md"),t=h(!1);return{file:e,showModal:t,changeShow:()=>{t.value=!1}}}}),he={style:{height:"100%"}};function ve(e,t,o,a,n,r){const s=p("avatar"),d=p("md-reader"),i=p("modal"),l=p("big-card");return u(),F(l,{title:"Front \u7684\u81EA\u6211\u4ECB\u7ECD",onClick:t[1]||(t[1]=b=>e.showModal=!e.showModal)},{default:y(()=>[_("div",null,[m(s,{title:"Front",mark:"like coding, love living"}),m(d,{file:e.file,class:"ml10 mr10 readme"},null,8,["file"])]),m(i,{value:e.showModal,"onUpdate:value":t[0]||(t[0]=b=>e.showModal=b)},{default:y(()=>[_("div",he,[m(s,{title:"Front",mark:"like coding, love living"}),m(d,{file:e.file,class:"ml10 mr10",style:{"max-height":"80%"}},null,8,["file"])])]),_:1},8,["value"])]),_:1})}var fe=f(_e,[["render",ve]]);const ge={vue:[{name:"Vue",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://v3.cn.vuejs.org/guide/introduction.html"},{name:"Vue List",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://github.com/vuejs/awesome-vue"},{name:"VueX",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://vuex.vuejs.org/zh/index.html"},{name:"VueRouter",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://router.vuejs.org/zh/introduction.html"},{name:"Vite",icon:"https://vitejs.cn/logo.svg",hover:"\u4E0B\u4E00\u4EE3\u524D\u7AEF\u5F00\u53D1\u4E0E\u6784\u5EFA\u5DE5\u5177",url:"https://vitejs.cn/guide/"},{name:"Vitest",icon:"https://cn.vitest.dev/logo.svg",hover:"\u7531 Vite \u26A1\uFE0F\u63D0\u4F9B\u652F\u6301\u7684\u6781\u901F\u5355\u5143\u6D4B\u8BD5\u6846\u67B6",url:"https://cn.vitest.dev/"},{name:"less",url:"https://less.bootcss.com/",icon:"https://less.bootcss.com/public/img/less_logo.png"},{name:"D3",url:"https://github.com/d3/d3/wiki",icon:"https://camo.githubusercontent.com/586ccf0aad9684e\u20268747470733a2f2f64336a732e6f72672f6c6f676f2e737667"},{name:"Three",icon:"https://bestofjs.org/logos/threejs.svg",url:"https://threejs.org/"}],lib:[{name:"Element(\u7EC4)",icon:"https://element-plus.gitee.io/images/element-plus-logo.svg",url:"https://element-plus.gitee.io"},{name:"Vant(\u7EC4)",icon:"https://cdn.jsdelivr.net/npm/@vant/assets/logo.png",url:"https://vant-contrib.gitee.io/vant/#/zh-CN"},{name:"Vuetify(\u7EC4)",url:"https://vuetifyjs.com/zh-Hans/introduction/why-vuetify/#feature-guides"},{name:"IconPark(\u56FE)",icon:"https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.598fc011.svg",url:"https://iconpark.oceanengine.com/home"},{name:"UI5(\u7EC4)",url:"https://sap.github.io/ui5-webcomponents/playground/getting-started",icon:"https://sap.github.io/ui5-webcomponents/assets/images/ui5-logo.png"},{name:"ag-grid",url:"https://www.ag-grid.com/documentation/",icon:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAg\u2026sPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="},{name:"HighChart",icon:"https://s1.jscdn.com.cn/highcharts/images/logo.svg",url:"https://www.highcharts.com.cn/docs/start-introduction"},{name:"FormKit",url:"https://formkit.com/",icon:""},{name:"Bootstrap",url:"https://v5.bootcss.com/",icon:"https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons@2x.png"}]};const be=v({props:{apps:Array},emit:["openApp"],setup(e,{emit:t}){let{apps:o}=g(e);const a=h(null);return{apps:o,bgStyle:s=>s.icon?{backgroundImage:`url(${s.icon})`,backgroundSize:"cover"}:{background:"gray"},openApp:s=>{s.url?window.open(s.url):t("openApp",s)},appsRef:a}}}),we={class:"content-app",ref:"appsRef",id:"apps"},$e=["onClick"],ye={class:"app-name"};function Fe(e,t,o,a,n,r){return u(),c("div",we,[(u(!0),c($,null,E(e.apps,(s,d)=>(u(),c("div",{class:"app",key:d,onClick:i=>e.openApp(s)},[_("div",{style:z(e.bgStyle(s)),class:"app-icon"},null,4),_("div",ye,w(s.name),1)],8,$e))),128))],512)}var R=f(be,[["render",Fe],["__scopeId","data-v-26c42b7f"]]);const Ee=v({components:{bigCard:C,modal:A,appCard:R},props:{name:{require:!0,default:"vue",type:String},title:String},setup(e){const t=h(ge[e.name]),{title:o}=g(e);return{appList:t,title:o}}});function Ce(e,t,o,a,n,r){const s=p("app-card"),d=p("big-card"),i=p("modal");return u(),c($,null,[m(d,{title:e.title},{default:y(()=>[m(s,{apps:e.appList,class:"p10",style:{"padding-left":"20px"}},null,8,["apps"])]),_:1},8,["title"]),m(i)],64)}var Be=f(Ee,[["render",Ce]]);const ke=v({name:"listCard",props:{menu:{type:Array,required:!0},title:Boolean},emits:["changeTab"],setup(e,{emit:t}){const{menu:o}=g(e);let a=h("");return{changeTab:r=>{t("changeTab",r),a.value=r.name},menu:o,current:a}}}),Ae={key:0,class:"title"},De={class:"list"},Se=["onClick"];function Te(e,t,o,a,n,r){return u(!0),c($,null,E(e.menu,(s,d)=>(u(),c("div",{class:"card-list",key:d},[e.title?(u(),c("div",Ae,w(s.title),1)):k("",!0),_("ul",De,[(u(!0),c($,null,E(s.list,(i,l)=>(u(),c("li",{key:l,class:j([{active:e.current===i.name},"item"]),onClick:b=>e.changeTab(i)},w(i.name),11,Se))),128))])]))),128)}var je=f(ke,[["render",Te],["__scopeId","data-v-3d55edcd"]]);V.exports.GlobalWorkerOptions.workerSrc="/pdf.worker.js";const Ne=v({props:{file:String},setup(e){const{file:t}=g(e),o=a=>{V.exports.getDocument(a).promise.then(r=>{const s=document.getElementById("canvas1");r.getPage(1).then(d=>{const i=d.getViewport({scale:1.4}),l=window.devicePixelRatio||1,b=s.getContext("2d");s.width=Math.floor(i.width*l),s.height=Math.floor(i.height*l),s.style.width=Math.floor(i.width)+"px",s.style.height=Math.floor(i.height)+"px";const D={canvasContext:b,transform:l!==1?[l,0,0,l,0,0]:null,viewport:i};d.render(D)})})};S(t,(a,n)=>{o(a)})}}),Me=e=>(H("data-v-16a6c406"),e=e(),O(),e),Ie={style:{width:"100%","text-align":"center"}},Ve=Me(()=>_("canvas",{id:"canvas1"},null,-1)),Le=[Ve];function Re(e,t,o,a,n,r){return u(),c("div",Ie,Le)}var xe=f(Ne,[["render",Re],["__scopeId","data-v-16a6c406"]]);const Pe=v({components:{bigCard:C,modal:A,mdReader:L,appCard:R,listCard:je,pdfReader:xe},props:{title:String,files:Array},setup(e){const t=h(!1),o=h(""),a=h([]),n=h(""),{title:r,files:s}=g(e);return{files:s,title:r,openFile:l=>{o.value=l.url.split(".").pop(),n.value=l.url},openNote:l=>{t.value=!0,a.value=[{list:l.files}],l.files.length?n.value=l.files[0].url:n.value=""},showModal:t,menu:a,file:n,fileType:o}}}),ze={class:"inline-block",style:{overflow:"hidden"}};function He(e,t,o,a,n,r){const s=p("app-card"),d=p("big-card"),i=p("list-card"),l=p("md-reader"),b=p("pdf-reader"),N=p("modal");return u(),c($,null,[m(d,{title:e.title},{default:y(()=>[m(s,{apps:e.files,onOpenApp:e.openNote,class:"p10",style:{"padding-left":"20px"}},null,8,["apps","onOpenApp"])]),_:1},8,["title"]),m(N,{value:e.showModal,"onUpdate:value":t[0]||(t[0]=D=>e.showModal=D)},{default:y(()=>[m(i,{menu:e.menu,onChangeTab:e.openFile},null,8,["menu","onChangeTab"]),_("div",ze,[e.fileType==="md"?(u(),F(l,{key:0,file:e.file},null,8,["file"])):k("",!0),e.fileType==="pdf"?(u(),F(b,{key:1,file:e.file},null,8,["file"])):k("",!0)])]),_:1},8,["value"])],64)}var Oe=f(Pe,[["render",He]]);const qe=v({props:{tabs:Array},emits:["changeTab"],setup(e,{emit:t}){const{tabs:o}=g(e),a=h(""),n=r=>{t("changeTab",r),a.value=r.type};return T(()=>{a.value=o.value[0].type,n(o.value[0])}),{tabs:o,changeTab:n,current:a}}}),Ue={class:"tab-card"},Je=["onClick"];function We(e,t,o,a,n,r){return u(),c("div",Ue,[(u(!0),c($,null,E(e.tabs,(s,d)=>(u(),c("div",{key:d,class:j(["tab-item",{"border-item":e.current===s.type}]),onClick:i=>e.changeTab(s)},[_("div",null,w(s.name),1)],10,Je))),128))])}var Ze=f(qe,[["render",We],["__scopeId","data-v-043b9ad6"]]);const Ke=v({name:"listCard",props:{list:{type:Array,required:!0}},emits:["changeNews"],setup(e,{emit:t}){const{list:o}=g(e),a=h("");return{changeNews:r=>{t("changeNews",r),a.value=r.title},list:o,current:a}}}),Ge={class:"card-news"},Qe={class:"list-news"},Xe=["onClick"];function Ye(e,t,o,a,n,r){return u(),c("div",Ge,[_("ul",Qe,[(u(!0),c($,null,E(e.list,(s,d)=>(u(),c("li",{key:d,class:j([{active:e.current===s.title},"item"]),onClick:i=>e.changeNews(s)},w(s.title),11,Xe))),128))])])}var et=f(Ke,[["render",Ye],["__scopeId","data-v-a0700c18"]]);const M={"0":[{title:"\u962E\u4E00\u5CF0\u7684\u7F51\u7EDC\u65E5\u5FD7",url:"https://www.ruanyifeng.com/blog/"},{title:"\u524D\u7AEF\u77E5\u8BC6\u4F53\u7CFB\u5927\u5168",url:"http://caibaojian.com/toutiao/7186/"},{title:"\u524D\u7AEF\u9762\u8BD5\u4E4B\u9053",url:"http://caibaojian.com/interview-map/frontend/"},{title:"\u8BA1\u7B97\u673A\u6559\u80B2\u4E2D\u7F3A\u5931\u7684\u4E00\u8BFE",url:"https://missing-semester-cn.github.io/"},{title:"\u524D\u7AEF\u5F00\u53D1\u6587\u6863",url:"https://wangdoc.com/"},{title:"\u524D\u7AEF\u535A\u5BA2\u5927\u5168",url:"http://caibaojian.com/links/"}],"1":[{title:"\u4F60\u662F\u5982\u4F55\u5B66\u4F1A\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\uFF1F",url:"https://www.zhihu.com/question/48219401/answer/742444326",new:!0},{title:"\u9762\u8BD5\u5B98\uFF0C\u522B\u95EE\u6211 HTTP \u4E86\uFF01\u770B\u8FD9 30 \u5F20\u56FE\u5C31\u884C\uFF01",url:"https://mp.weixin.qq.com/s/4epUWMCLpwCBxxQgEbL8gA",new:!0}],"2":[{title:"\u7EA2\u697C\u68A6(\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1CC4y1a7ee?spm_id_from=333.337.search-card.all.click"},{title:"\u5927\u660E\u738B\u671D1566(\u89E3\u8BF4)",url:"https://www.bilibili.com/medialist/play/669154966?from=space&business=space_collection&business_id=35282&desc=0"},{title:"\u6FC0\u8361\u56DB\u5341\u5E74(\u89C6\u9891)",url:"https://www.bilibili.com/video/BV1AK4y147uB/?spm_id_from=333.788"},{title:"\u8D2B\u5634\u5F20\u5927\u6C11\u7684\u5E78\u798F\u751F\u6D3B(\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1ER4y177rS?spm_id_from=333.999.0.0"},{title:"\u7EDD\u547D\u6BD2\u5E08(\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1b44y1g7UD?spm_id_from=333.337.search-card.all.click"},{title:"\u5FC5\u5E94\u56FE\u7247(\u56FE\u7247)",url:"https://bing.wilii.cn/index.html",new:!0},{title:"\u707F\u70C2\u4EBA\u751F(\u7535\u5F71\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1iJ411w7YU?spm_id_from=333.337.search-card.all.click"},{title:"\u751F\u6D3B\u591A\u7F8E\u597D(\u7535\u5F71\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1LZ4y1s7HD?spm_id_from=333.337.search-card.all.click"},{title:"\u767D\u8272\u5DE8\u5854(\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1c64y1k7cd?spm_id_from=333.999.0.0"}]};const tt=v({components:{bigCard:C,modal:A,tabCard:Ze,newsCard:et},setup(){const e=[{name:"\u524D\u7AEF\u535A\u5BA2",type:"0"},{name:"\u4F18\u8D28\u6587\u7AE0",type:"1"},{name:"\u4EBA\u6587\u89C6\u9891",type:"2"}],t=h(!1),o=h(M["0"]),a=h("");return{tabs:e,listNews:o,showModal:t,openNews:s=>{s.new?window.open(s.url):(a.value=s.url,t.value=!0)},newsSrc:a,changeTab:s=>{o.value=M[s.type]}}}}),nt=["src"];function st(e,t,o,a,n,r){const s=p("tab-card"),d=p("news-card"),i=p("big-card"),l=p("modal");return u(),c($,null,[m(i,{title:"\u63A8\u8350\u9605\u8BFB"},{default:y(()=>[m(s,{tabs:e.tabs,onChangeTab:e.changeTab},null,8,["tabs","onChangeTab"]),m(d,{list:e.listNews,onChangeNews:e.openNews},null,8,["list","onChangeNews"])]),_:1}),m(l,{value:e.showModal,"onUpdate:value":t[0]||(t[0]=b=>e.showModal=b)},{default:y(()=>[_("iframe",{id:"newsFrame",src:e.newsSrc,class:"frame-news",frameborder:"no",sandbox:"allow-forms allow-scripts allow-same-origin allow-popups"},null,8,nt)]),_:1},8,["value"])],64)}var ot=f(tt,[["render",st]]);const at=[{type:"browser",name:"\u6D4F\u89C8\u5668",files:[{name:"API",url:"md/base/browser/API.md"},{name:"base",url:"md/base/browser/base.md"},{name:"CORS",url:"md/base/browser/CORS.md"},{name:"http",url:"md/base/browser/http.md"},{name:"safe",url:"md/base/browser/safe.md"}]},{type:"css",name:"CSS",files:[{name:"animation",url:"md/base/css/animation.md"},{name:"layout",url:"md/base/css/layout.md"}]},{type:"engineering",name:"\u5DE5\u7A0B\u5316",files:[{name:"design",url:"md/base/engineering/design.md"},{name:"packtools",url:"md/base/engineering/packtools.md"},{name:"SSR",url:"md/base/engineering/SSR.md"}]},{type:"html",name:"HTML",files:[]},{type:"js",name:"JS\u77E5\u8BC6",files:[{name:"JS base",url:"md/base/js/JS base.md"},{name:"TS",url:"md/base/js/TS.md"}]}],rt=[];const ut=v({components:{bigCard:C,me:fe,frame:Be,note:Oe,recommend:ot},setup(){const e=h(at),t=h(rt),o=()=>{const a=document.querySelector("body"),n=`/bg/${W()}.jpg`;a.setAttribute("style",`background:url(${n}) 0 fixed;`)};return T(()=>{o()}),{filesNote:e,filesAlgori:t}}}),it={id:"home",class:"home-bg"};function lt(e,t,o,a,n,r){const s=p("me"),d=p("recommend"),i=p("frame"),l=p("note");return u(),c("div",it,[m(s),m(d),m(i,{name:"vue",title:"\u524D\u7AEF\u6846\u67B6"}),m(i,{name:"lib",title:"UI\u5E93"}),m(l,{files:e.filesNote,title:"\u7B14\u8BB0"},null,8,["files"]),m(l,{files:e.filesAlgori,title:"\u7B97\u6CD5"},null,8,["files"])])}var ct=f(ut,[["render",lt]]);const dt=v({components:{Home:ct}});function pt(e,t,o,a,n,r){const s=p("Home");return u(),F(s)}var mt=f(dt,[["render",pt]]);const _t=q(mt);_t.mount("#app");
