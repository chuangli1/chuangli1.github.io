import{d as v,t as w,c as d,a as c,r as O,b as $,o as p,e as _,w as I,f as N,m as K,g as F,h as S,T as G,i as h,j as C,F as y,k as m,l as k,n as x,p as T,q as P,s as U,u as q,v as H,x as Q,y as X,z as Y,A as ee}from"./vendor.8ca543c5.js";const te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}};te();const ne=new Date,se=()=>ne.getDay();var g=(e,t)=>{const a=e.__vccOpts||e;for(const[r,s]of t)a[r]=s;return a};const oe=v({props:{name:String},setup(e){const{name:t}=w(e);return{name:t}}}),ae={class:"mb20",style:{"max-width":"100%"}},re={class:"big-card"},ue={class:"footer font-white"};function ie(e,t,a,r,s,o){return p(),d("div",ae,[c("div",re,[O(e.$slots,"default")]),c("div",ue,[c("span",null,$(e.name),1)])])}var A=g(oe,[["render",ie]]);const le=v({props:{title:String,mark:String},setup(e){const{title:t,mark:a}=w(e);return{title:t,mark:a}}}),ce={class:"avatar"},pe={class:"head"},de={class:"name"},me={class:"pro"};function he(e,t,a,r,s,o){return p(),d("div",ce,[c("div",pe,[c("div",de,$(e.title),1)]),c("div",me,$(e.mark),1)])}var _e=g(le,[["render",he],["__scopeId","data-v-cda5d90c"]]);const j=new FileReader,ve=v({props:{file:String},setup(e){let t=_(""),{file:a}=w(e);const r=s=>{if(!s){t.value="";return}fetch(`${s}`).then(o=>o.blob()).then(o=>{j.readAsText(o)}),j.onloadend=()=>{t.value=typeof j.result=="string"?K(j.result):"\u65E0\u6CD5\u89E3\u6790"}};return I(a,(s,o)=>{r(s)}),N(()=>{r(a.value)}),{content:t}}}),ge={class:"content p10",style:{"padding-top":"0px"}},fe=["innerHTML"];function we(e,t,a,r,s,o){return p(),d("div",ge,[c("div",{innerHTML:e.content},null,8,fe)])}var W=g(ve,[["render",we]]);const be=v({props:{value:Boolean,name:String},emits:["update:value","min","max"],setup(e,{emit:t}){let{value:a,name:r}=w(e);const s=()=>{t("update:value",!1),document.body.style.overflow="auto"},o=()=>{const u=document.getElementById("container-modal");u.style.height="80%",u.style.width="80%",u.style.left="10%",u.style.top="10%",t("min")},n=()=>{const u=document.getElementById("container-modal");u.style.height="100%",u.style.width="100%",u.style.left="0",u.style.top="0",t("max")};return I(a,(u,l)=>{u?document.body.style.overflow="hidden":document.body.style.overflow="auto"}),{value:a,name:r,updateState:s,min:o,max:n}}}),ye={key:0,style:{"z-index":"1000"}},$e={class:"container",id:"container-modal"},Ce={class:"title"},Fe={class:"name"},ke={class:"operate"};function Be(e,t,a,r,s,o){return p(),F(G,{to:"body"},[e.value?(p(),d("div",ye,[c("div",{class:"mask",onClick:t[0]||(t[0]=(...n)=>e.updateState&&e.updateState(...n))}),c("div",$e,[c("div",Ce,[c("span",Fe,$(e.name),1),c("div",ke,[c("span",{class:"min",onClick:t[1]||(t[1]=(...n)=>e.min&&e.min(...n))}),c("span",{class:"max",onClick:t[2]||(t[2]=(...n)=>e.max&&e.max(...n))}),c("span",{class:"close",onClick:t[3]||(t[3]=(...n)=>e.updateState&&e.updateState(...n))})])]),O(e.$slots,"default",{},void 0,!0)])])):S("",!0)])}var D=g(be,[["render",Be],["__scopeId","data-v-37993a10"]]);const Ee=v({name:"me",components:{bigCard:A,avatar:_e,mdReader:W,modal:D},emits:["search"],setup(e,{emit:t}){let a=_("/md/README.md"),r=_(!1);return{file:a,showMe:r,changeShow:()=>{r.value=!1},openSearch:()=>{t("search")}}}}),Se={style:{height:"100%"}};function Ae(e,t,a,r,s,o){const n=m("avatar"),u=m("md-reader"),l=m("big-card"),i=m("modal");return p(),d(y,null,[h(l,{name:"Front \u7684\u81EA\u6211\u4ECB\u7ECD"},{default:C(()=>[c("div",null,[h(n,{title:"Front",mark:"like coding, love living"}),c("div",{class:"search",onClick:t[0]||(t[0]=(...f)=>e.openSearch&&e.openSearch(...f))}),h(u,{file:e.file,class:"ml10 mr10 readme",onClick:t[1]||(t[1]=f=>e.showMe=!e.showMe)},null,8,["file"])])]),_:1}),h(i,{value:e.showMe,"onUpdate:value":t[2]||(t[2]=f=>e.showMe=f),name:"Front \u7684\u81EA\u6211\u4ECB\u7ECD"},{default:C(()=>[c("div",Se,[h(n,{title:"Front",mark:"like coding, love living"}),h(u,{file:e.file,class:"ml10 mr10",style:{"max-height":"80%"}},null,8,["file"])])]),_:1},8,["value"])],64)}var De=g(Ee,[["render",Ae],["__scopeId","data-v-e5ca0374"]]);const je=v({props:{apps:Array},emit:["openApp"],setup(e,{emit:t}){let{apps:a}=w(e);const r=_(null);return{apps:a,bgStyle:n=>n.icon?{backgroundImage:`url(${n.icon})`,backgroundSize:"cover"}:{background:"gray"},openApp:n=>{n.url?window.open(n.url):t("openApp",n)},appsRef:r}}}),Ie={class:"content-app",ref:"appsRef",id:"apps"},Ne=["onClick"],Te={class:"app-name"};function Ve(e,t,a,r,s,o){return p(),d("div",Ie,[(p(!0),d(y,null,k(e.apps,(n,u)=>(p(),d("div",{class:"app",key:u,onClick:l=>e.openApp(n)},[c("div",{style:x(e.bgStyle(n)),class:"app-icon"},null,4),c("div",Te,$(n.name),1)],8,Ne))),128))],512)}var V=g(je,[["render",Ve],["__scopeId","data-v-3a4f500c"]]);const Me=v({components:{bigCard:A,modal:D,appCard:V},props:{appList:Array,name:String},setup(e){const{name:t,appList:a}=w(e);return{appList:a,name:t}}});function Le(e,t,a,r,s,o){const n=m("app-card"),u=m("big-card");return p(),F(u,{name:e.name},{default:C(()=>[h(n,{apps:e.appList,class:"p10",style:{"padding-left":"20px",height:"370px"}},null,8,["apps"])]),_:1},8,["name"])}var J=g(Me,[["render",Le]]);const Re=v({name:"listCard",props:{menu:{type:Array,required:!0},name:Boolean},emits:["changeTab"],setup(e,{emit:t}){const{menu:a}=w(e);let r=_("");return{changeTab:o=>{t("changeTab",o),r.value=o.name},menu:a,current:r}}}),ze={key:0,class:"name"},Oe={class:"list"},Pe=["onClick"];function Ue(e,t,a,r,s,o){return p(!0),d(y,null,k(e.menu,(n,u)=>(p(),d("div",{class:"card-list",key:u},[e.name?(p(),d("div",ze,$(n.name),1)):S("",!0),c("ul",Oe,[(p(!0),d(y,null,k(n.list,(l,i)=>(p(),d("li",{key:i,class:T([{active:e.current===l.name},"item"]),onClick:f=>e.changeTab(l)},$(l.name),11,Pe))),128))])]))),128)}var qe=g(Re,[["render",Ue],["__scopeId","data-v-38da87b4"]]);P.exports.GlobalWorkerOptions.workerSrc="/pdf.worker.js";const He=v({props:{file:String},setup(e){const{file:t}=w(e),a=r=>{P.exports.getDocument(r).promise.then(o=>{const n=document.getElementById("canvas1");o.getPage(1).then(u=>{const l=u.getViewport({scale:1.4}),i=window.devicePixelRatio||1,f=n.getContext("2d");n.width=Math.floor(l.width*i),n.height=Math.floor(l.height*i),n.style.width=Math.floor(l.width)+"px",n.style.height=Math.floor(l.height)+"px";const b={canvasContext:f,transform:i!==1?[i,0,0,i,0,0]:null,viewport:l};u.render(b)})})};I(t,(r,s)=>{a(r)})}}),We=e=>(U("data-v-16a6c406"),e=e(),q(),e),Je={style:{width:"100%","text-align":"center"}},Ze=We(()=>c("canvas",{id:"canvas1"},null,-1)),Ke=[Ze];function Ge(e,t,a,r,s,o){return p(),d("div",Je,Ke)}var xe=g(He,[["render",Ge],["__scopeId","data-v-16a6c406"]]);const Qe=v({components:{bigCard:A,modal:D,mdReader:W,appCard:V,listCard:qe,pdfReader:xe},props:{name:String,files:Array},setup(e){const t=_(!1),a=_(""),r=_([]),s=_(""),{name:o,files:n}=w(e);return{files:n,name:o,openFile:i=>{a.value=i.url.split(".").pop(),s.value=i.url},openNote:i=>{t.value=!0,r.value=[{list:i.files}],i.files.length?s.value=i.files[0].url:s.value=""},showModal:t,menu:r,file:s,fileType:a}}}),Xe={class:"inline-block",style:{overflow:"hidden"}};function Ye(e,t,a,r,s,o){const n=m("app-card"),u=m("big-card"),l=m("list-card"),i=m("md-reader"),f=m("pdf-reader"),E=m("modal");return p(),d(y,null,[h(u,{name:e.name},{default:C(()=>[h(n,{apps:e.files,onOpenApp:e.openNote,class:"p10",style:{"padding-left":"20px"}},null,8,["apps","onOpenApp"])]),_:1},8,["name"]),h(E,{value:e.showModal,"onUpdate:value":t[0]||(t[0]=b=>e.showModal=b)},{default:C(()=>[h(l,{menu:e.menu,onChangeTab:e.openFile},null,8,["menu","onChangeTab"]),c("div",Xe,[e.fileType==="md"?(p(),F(i,{key:0,file:e.file},null,8,["file"])):S("",!0),e.fileType==="pdf"?(p(),F(f,{key:1,file:e.file},null,8,["file"])):S("",!0)])]),_:1},8,["value"])],64)}var et=g(Qe,[["render",Ye]]);const L={vue:[{name:"Node",url:"http://nodejs.cn/learn",icon:"http://img.nodejs.cn/logo.svg"},{name:"Vue",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://v3.cn.vuejs.org/guide/introduction.html"},{name:"Vue List",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://github.com/vuejs/awesome-vue"},{name:"VueX",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://vuex.vuejs.org/zh/index.html"},{name:"VueRouter",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://router.vuejs.org/zh/introduction.html"},{name:"Vite",icon:"https://vitejs.cn/logo.svg",hover:"\u4E0B\u4E00\u4EE3\u524D\u7AEF\u5F00\u53D1\u4E0E\u6784\u5EFA\u5DE5\u5177",url:"https://vitejs.cn/guide/"},{name:"Vitest",icon:"https://cn.vitest.dev/logo.svg",hover:"\u7531 Vite \u26A1\uFE0F\u63D0\u4F9B\u652F\u6301\u7684\u6781\u901F\u5355\u5143\u6D4B\u8BD5\u6846\u67B6",url:"https://cn.vitest.dev/"},{name:"less",url:"https://less.bootcss.com/",icon:"https://less.bootcss.com/public/img/less_logo.png"},{name:"D3",url:"https://github.com/d3/d3/wiki",icon:"https://camo.githubusercontent.com/586ccf0aad9684e\u20268747470733a2f2f64336a732e6f72672f6c6f676f2e737667"},{name:"Three",icon:"https://bestofjs.org/logos/threejs.svg",url:"https://threejs.org/"},{name:"pinia",url:"https://pinia.vuejs.org/",icon:"https://pinia.vuejs.org/logo.svg"},{name:"i18n",url:"https://kazupon.github.io/vue-i18n/zh/",icon:"https://kazupon.github.io/vue-i18n/vue-i18n-logo.png"},{name:"AnimeJS",url:"https://animejs.com/"},{name:"cesium",url:"https://cesium.com/"},{name:"Axios",url:"https://www.axios-http.cn/docs/intro",icon:"https://www.axios-http.cn/assets/favicon.ico"},{name:"Restful",url:"https://restfulapi.cn/"}],lib:[{name:"Element(V)",icon:"https://element-plus.gitee.io/images/element-plus-logo.svg",url:"https://element-plus.gitee.io"},{name:"Native(V)",url:"https://www.naiveui.com/zh-CN/os-theme",icon:"https://www.naiveui.com/assets/naivelogo.93278402.svg"},{name:"Vant(V)",icon:"https://cdn.jsdelivr.net/npm/@vant/assets/logo.png",url:"https://vant-contrib.gitee.io/vant/#/zh-CN"},{name:"vuestic(V)",url:"https://vuestic.dev/"},{name:"Vuetify(V)",url:"https://vuetifyjs.com/zh-Hans/introduction/why-vuetify/#feature-guides"},{name:"IconPark(I)",icon:"https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.598fc011.svg",url:"https://iconpark.oceanengine.com/home"},{name:"UI5(V)",url:"https://sap.github.io/ui5-webcomponents/playground/getting-started",icon:"https://sap.github.io/ui5-webcomponents/assets/images/ui5-logo.png"},{name:"Material(V)",url:"https://www.creative-tim.com/vuematerial/getting-started"},{name:"ag-grid(G)",url:"https://www.ag-grid.com/documentation/",icon:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAg\u2026sPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="},{name:"HighChart(G)",icon:"https://s1.jscdn.com.cn/highcharts/images/logo.svg",url:"https://www.highcharts.com.cn/docs/start-introduction"},{name:"FormKit",url:"https://formkit.com/",icon:""},{name:"Bootstrap(C)",url:"https://v5.bootcss.com/",icon:"https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons@2x.png"},{name:"Slidev",url:"https://cn.sli.dev/",icon:"https://cn.sli.dev/logo.svg"},{name:"Tailwind(C)",url:"https://tailwindcss.com/",icon:""},{name:"Animate(C)",url:"https://animate.style/",icon:"https://animate.style/img/animatecss-opengraph.jpg"},{name:"IConoir(I)",url:"https://iconoir.com/",icon:"https://iconoir.com/images/iconoir-logo.svg"},{name:"FontA(I)",url:"https://fontawesome.com/"},{name:"Icomoon(I)",url:"https://icomoon.io/#home"}]},R={"0":[{name:"\u962E\u4E00\u5CF0\u7684\u7F51\u7EDC\u65E5\u5FD7",url:"https://www.ruanyifeng.com/blog/"},{name:"\u524D\u7AEF\u77E5\u8BC6\u4F53\u7CFB\u5927\u5168",url:"http://caibaojian.com/toutiao/7186/"},{name:"\u524D\u7AEF\u9762\u8BD5\u4E4B\u9053",url:"http://caibaojian.com/interview-map/frontend/"},{name:"\u8BA1\u7B97\u673A\u6559\u80B2\u4E2D\u7F3A\u5931\u7684\u4E00\u8BFE",url:"https://missing-semester-cn.github.io/"},{name:"\u524D\u7AEF\u5F00\u53D1\u6587\u6863",url:"https://wangdoc.com/"},{name:"\u524D\u7AEF\u535A\u5BA2\u5927\u5168",url:"http://caibaojian.com/links/"},{name:"best of js",url:"https://bestofjs.org/"},{name:"\u5927\u5382\u9762\u8BD5",url:"https://q.shanyue.tech/engineering/"}],"1":[{name:"\u4F60\u662F\u5982\u4F55\u5B66\u4F1A\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\uFF1F",url:"https://www.zhihu.com/question/48219401/answer/742444326",new:!0},{name:"\u9762\u8BD5\u5B98\uFF0C\u522B\u95EE\u6211 HTTP \u4E86\uFF01\u770B\u8FD9 30 \u5F20\u56FE\u5C31\u884C\uFF01",url:"https://mp.weixin.qq.com/s/4epUWMCLpwCBxxQgEbL8gA",new:!0}],"2":[{name:"\u7EA2\u697C\u68A6(\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1CC4y1a7ee?spm_id_from=333.337.search-card.all.click"},{name:"\u5927\u660E\u738B\u671D1566(\u89E3\u8BF4)",url:"https://www.bilibili.com/medialist/play/669154966?from=space&business=space_collection&business_id=35282&desc=0"},{name:"\u6FC0\u8361\u56DB\u5341\u5E74(\u89C6\u9891)",url:"https://www.bilibili.com/video/BV1AK4y147uB/?spm_id_from=333.788"},{name:"\u8D2B\u5634\u5F20\u5927\u6C11\u7684\u5E78\u798F\u751F\u6D3B(\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1ER4y177rS?spm_id_from=333.999.0.0"},{name:"\u7EDD\u547D\u6BD2\u5E08(\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1b44y1g7UD?spm_id_from=333.337.search-card.all.click"},{name:"\u5FC5\u5E94\u56FE\u7247(\u56FE\u7247)",url:"https://bing.wilii.cn/index.html",new:!0},{name:"\u707F\u70C2\u4EBA\u751F(\u7535\u5F71\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1iJ411w7YU?spm_id_from=333.337.search-card.all.click"},{name:"\u751F\u6D3B\u591A\u7F8E\u597D(\u7535\u5F71\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1LZ4y1s7HD?spm_id_from=333.337.search-card.all.click"},{name:"\u767D\u8272\u5DE8\u5854(\u89E3\u8BF4)",url:"https://www.bilibili.com/video/BV1c64y1k7cd?spm_id_from=333.999.0.0"}]};const tt=v({props:{tabs:Array},emits:["changeTab"],setup(e,{emit:t}){const{tabs:a}=w(e),r=_(""),s=o=>{t("changeTab",o),r.value=o.type};return N(()=>{r.value=a.value[0].type,s(a.value[0])}),{tabs:a,changeTab:s,current:r}}}),nt={class:"tab-card"},st=["onClick"];function ot(e,t,a,r,s,o){return p(),d("div",nt,[(p(!0),d(y,null,k(e.tabs,(n,u)=>(p(),d("div",{key:u,class:T(["tab-item",{"border-item":e.current===n.type}]),onClick:l=>e.changeTab(n)},[c("div",null,$(n.name),1)],10,st))),128))])}var at=g(tt,[["render",ot],["__scopeId","data-v-043b9ad6"]]);const rt=v({name:"listCard",props:{list:{type:Array,required:!0}},emits:["changeNews"],setup(e,{emit:t}){const{list:a}=w(e),r=_("");return{changeNews:o=>{t("changeNews",o),r.value=o.name},list:a,current:r}}}),ut={class:"card-news"},it={class:"list-news"},lt=["onClick"];function ct(e,t,a,r,s,o){return p(),d("div",ut,[c("ul",it,[(p(!0),d(y,null,k(e.list,(n,u)=>(p(),d("li",{key:u,class:T([{active:e.current===n.name},"item"]),onClick:l=>e.changeNews(n)},$(n.name),11,lt))),128))])])}var pt=g(rt,[["render",ct],["__scopeId","data-v-09ecb1f5"]]);const dt=v({components:{bigCard:A,modal:D,tabCard:at,newsCard:pt},props:{news:{type:Object,require:!0,default:{"0":[]}}},setup(e){const{news:t}=w(e);console.log(t);const a=[{name:"\u524D\u7AEF\u535A\u5BA2",type:"0"},{name:"\u4F18\u8D28\u6587\u7AE0",type:"1"},{name:"\u4EBA\u6587\u89C6\u9891",type:"2"}],r=_(!1),s=_(t.value["0"]),o=H({url:"",name:""});return{tabs:a,listNews:s,showModal:r,openNews:i=>{i.new?window.open(i.url):(o.url=i.url,o.name=i.name,r.value=!0)},newsSrc:o,changeTab:i=>{s.value=t.value[i.type]?t.value[i.type]:[]},openNewWindow:i=>{window.open(i),r.value=!1}}}}),mt=["src"];function ht(e,t,a,r,s,o){const n=m("tab-card"),u=m("news-card"),l=m("big-card"),i=m("modal");return p(),d(y,null,[h(l,{name:"\u63A8\u8350\u9605\u8BFB"},{default:C(()=>[h(n,{tabs:e.tabs,onChangeTab:e.changeTab},null,8,["tabs","onChangeTab"]),h(u,{list:e.listNews,onChangeNews:e.openNews,style:{height:"310px"}},null,8,["list","onChangeNews"])]),_:1}),h(i,{value:e.showModal,"onUpdate:value":t[0]||(t[0]=f=>e.showModal=f),name:e.newsSrc.name,onMax:t[1]||(t[1]=f=>e.openNewWindow(e.newsSrc.url))},{default:C(()=>[c("iframe",{id:"newsFrame",src:e.newsSrc.url,class:"frame-news",frameborder:"no",sandbox:"allow-forms allow-scripts allow-same-origin allow-popups"},null,8,mt)]),_:1},8,["value","name"])],64)}var Z=g(dt,[["render",ht]]);const _t=v({components:{frame:J,appCard:V,recommend:Z},props:{result:{type:Object,require:!0,default:{apps:{}}}},emits:["search"],setup(e,{emit:t}){const a=_(""),{result:r}=w(e),s=_([]),o=_({}),n=()=>{t("search",a.value)},u={vue:"\u57FA\u7840\u6846\u67B6",lib:"UI\u5E93"};return I([()=>e.result.apps,()=>e.result.news],([l,i],[f,E])=>{s.value=[];for(let b of Object.keys(l)){const M=l[b];M.name=u[b],s.value.push(M)}o.value={};for(let b of Object.keys(i))o.value[b]=i[b],o.value.isShow=!0;console.log(o.value)}),{searchValue:a,onSearch:n,result:r,apps:s,news:o}}}),B=e=>(U("data-v-fa8ee8a2"),e=e(),q(),e),vt={class:"search"},gt=B(()=>c("div",{class:"title"},"Front Search",-1)),ft=B(()=>c("rect",{width:"48",height:"48",fill:"white","fill-opacity":"0.01"},null,-1)),wt=B(()=>c("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:"none",stroke:"#333","stroke-width":"4","stroke-linejoin":"round"},null,-1)),bt=B(()=>c("path",{d:"M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),yt=B(()=>c("path",{d:"M33.2218 33.2218L41.7071 41.7071",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),$t=[ft,wt,bt,yt],Ct=B(()=>c("div",null,null,-1)),Ft={class:"result"};function kt(e,t,a,r,s,o){const n=m("frame"),u=m("recommend");return p(),d(y,null,[c("div",vt,[gt,Q(c("input",{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9","onUpdate:modelValue":t[0]||(t[0]=l=>e.searchValue=l),class:"input",onKeyup:t[1]||(t[1]=Y((...l)=>e.onSearch&&e.onSearch(...l),["enter"]))},null,544),[[X,e.searchValue]]),(p(),d("svg",{onClick:t[2]||(t[2]=(...l)=>e.onSearch&&e.onSearch(...l)),class:"icon",width:"24",height:"24",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$t)),Ct]),c("div",Ft,[(p(!0),d(y,null,k(e.apps,(l,i)=>(p(),F(n,{key:i,"app-list":l,name:l.name},null,8,["app-list","name"]))),128)),e.news.isShow?(p(),F(u,{key:0,news:e.news},null,8,["news"])):S("",!0)])],64)}var Bt=g(_t,[["render",kt],["__scopeId","data-v-fa8ee8a2"]]);const Et=[{type:"browser",name:"\u6D4F\u89C8\u5668",files:[{name:"API",url:"md/base/browser/API.md"},{name:"base",url:"md/base/browser/base.md"},{name:"CORS",url:"md/base/browser/CORS.md"},{name:"http",url:"md/base/browser/http.md"},{name:"safe",url:"md/base/browser/safe.md"}]},{type:"css",name:"CSS",files:[{name:"animation",url:"md/base/css/animation.md"},{name:"layout",url:"md/base/css/layout.md"}]},{type:"engineering",name:"\u5DE5\u7A0B\u5316",files:[{name:"design",url:"md/base/engineering/design.md"},{name:"packtools",url:"md/base/engineering/packtools.md"},{name:"SSR",url:"md/base/engineering/SSR.md"}]},{type:"html",name:"HTML",files:[]},{type:"js",name:"JS\u77E5\u8BC6",files:[{name:"JS base",url:"md/base/js/JS base.md"},{name:"TS",url:"md/base/js/TS.md"}]}],St=[],z=(e,t)=>{if(!t)return{};const a={};for(let r of Object.keys(e)){const s=e[r];let o=[];s.forEach(n=>{n.name.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())!==-1&&o.push(n)}),o.length&&(a[r]=o)}return a};const At=v({components:{bigCard:A,me:De,frame:J,note:et,recommend:Z,searchCard:Bt,modal:D},setup(){const e=_(Et),t=_(St);let a=H({apps:{},news:{}});const r=_(!1),s=()=>{const n=document.querySelector("body"),u=`/bg/${se()}.jpg`;n.setAttribute("style",`background:url(${u}) 0 fixed;`)};return N(()=>{s()}),{filesNote:e,filesAlgori:t,apps:L,showSearch:r,searchData:n=>{a.apps=z(L,n),a.news=z(R,n)},searchResult:a,_listNews:R}}}),Dt={id:"home",class:"home-bg"},jt={style:{height:"90%"}};function It(e,t,a,r,s,o){const n=m("me"),u=m("recommend"),l=m("frame"),i=m("note"),f=m("search-card"),E=m("modal");return p(),d("div",Dt,[h(n,{onSearch:t[0]||(t[0]=b=>e.showSearch=!0)}),h(u,{news:e._listNews},null,8,["news"]),h(l,{"app-list":e.apps.vue,name:"\u524D\u7AEF\u6846\u67B6"},null,8,["app-list"]),h(l,{"app-list":e.apps.lib,name:"UI\u5E93"},null,8,["app-list"]),h(i,{files:e.filesNote,name:"\u7B14\u8BB0"},null,8,["files"]),h(i,{files:e.filesAlgori,name:"\u7B97\u6CD5"},null,8,["files"]),h(E,{value:e.showSearch,"onUpdate:value":t[1]||(t[1]=b=>e.showSearch=b),name:"\u641C\u7D22\u5185\u5BB9..."},{default:C(()=>[c("div",jt,[h(f,{onSearch:e.searchData,result:e.searchResult},null,8,["onSearch","result"])])]),_:1},8,["value"])])}var Nt=g(At,[["render",It]]);const Tt=v({components:{Home:Nt}});function Vt(e,t,a,r,s,o){const n=m("Home");return p(),F(n)}var Mt=g(Tt,[["render",Vt]]);const Lt=ee(Mt);Lt.mount("#app");
