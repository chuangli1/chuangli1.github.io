import{_ as u}from"./index.0cb3c0e5.js";import{d as f,t as m,h as v,o as t,a as p,F as h,E as b,J as y,K as g,b as n,e as c,q as S}from"./vendor.6f35fcad.js";const k=f({props:{apps:Array},emit:["openApp"],setup(s,{emit:a}){let{apps:l}=m(s);const r=v(null);return{apps:l,bgStyle:e=>e.icon?{backgroundImage:`url(${e.icon})`,backgroundSize:"cover"}:{},openApp:e=>{e.url&&!["md","pdf"].includes(e.url.split(".").pop())?window.open(e.url):a("openApp",e)},appsRef:r}}}),o=s=>(y("data-v-b86654b0"),s=s(),g(),s),A={class:"content-app",ref:"appsRef",id:"apps"},$=["onClick"],C={class:"app-name"},I=o(()=>n("i",null,null,-1)),w=o(()=>n("i",null,null,-1)),B=o(()=>n("i",null,null,-1)),R=o(()=>n("i",null,null,-1));function z(s,a,l,r,i,d){return t(),p("div",A,[(t(!0),p(h,null,b(s.apps,(e,_)=>(t(),p("div",{class:"app",key:_,onClick:E=>s.openApp(e)},[n("div",{style:S(s.bgStyle(e)),class:"app-icon"},c(e.icon?null:e.name),5),n("div",C,c(e.name),1)],8,$))),128)),I,w,B,R],512)}var x=u(k,[["render",z],["__scopeId","data-v-b86654b0"]]);export{x as default};
