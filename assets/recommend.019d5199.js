import f from"./bigCard.70d7c62b.js";import b from"./modal.d7b884d5.js";import _ from"./tabCard.aa43641c.js";import v from"./newsCard.eb38eaf7.js";import{_ as g}from"./index.43837204.js";import{d as h,t as N,h as i,x as C,r,o as y,a as B,j as t,k as w,F as A,b as F}from"./vendor.047185e5.js";const T=h({components:{bigCard:f,modal:b,tabCard:_,newsCard:v},props:{news:{type:Object,require:!0,default:{"0":[]}}},setup(e){const{news:n}=N(e);console.log(n);const u=[{name:"\u524D\u7AEF\u535A\u5BA2",type:"0"},{name:"\u4F18\u8D28\u6587\u7AE0",type:"1"},{name:"\u4EBA\u6587\u89C6\u9891",type:"2"}],a=i(!1),l=i(n.value["0"]),s=C({url:"",name:""});return{tabs:u,listNews:l,showModal:a,openNews:o=>{o.new?window.open(o.url):(s.url=o.url,s.name=o.name,a.value=!0)},newsSrc:s,changeTab:o=>{l.value=n.value[o.type]?n.value[o.type]:[]},openNewWindow:o=>{window.open(o),a.value=!1}}}}),$=["src"];function E(e,n,u,a,l,s){const m=r("tab-card"),p=r("news-card"),d=r("big-card"),o=r("modal");return y(),B(A,null,[t(d,{name:"\u63A8\u8350\u9605\u8BFB"},{default:w(()=>[t(m,{tabs:e.tabs,onChangeTab:e.changeTab},null,8,["tabs","onChangeTab"]),t(p,{list:e.listNews,onChangeNews:e.openNews,style:{height:"310px"}},null,8,["list","onChangeNews"])]),_:1}),t(o,{value:e.showModal,"onUpdate:value":n[0]||(n[0]=c=>e.showModal=c),name:e.newsSrc.name,onMax:n[1]||(n[1]=c=>e.openNewWindow(e.newsSrc.url))},{default:w(()=>[F("iframe",{id:"newsFrame",src:e.newsSrc.url,class:"frame-news",frameborder:"no",sandbox:"allow-forms allow-scripts allow-same-origin allow-popups"},null,8,$)]),_:1},8,["value","name"])],64)}var V=g(T,[["render",E]]);export{V as default};
