import u from"./doc.6608026e.js";import{d as _,t as f,u as v,r as y,o as d,a as c,b as n,j as a,F as b,B as h,A as C}from"./vendor.047185e5.js";import{_ as k}from"./index.83d53154.js";import"./base.a277c386.js";import"./itemResume.6897579f.js";import"./FileSaver.min.0a913109.js";import"./_commonjsHelpers.a5007c1f.js";const B={class:"doc-content"},F={class:"mt16"},g={class:"operate mr32"},x={class:"operate save mr32"},A={class:"operate save"},E=_({props:{forms:{type:Array,default:["resume"]},formdata:{type:Object,required:!0}},emits:["on-add"],setup(i,{emit:N}){const m=i,{formdata:p}=f(m);v();const l=()=>{setTimeout(()=>{var r,s;const e=document.createElement("iframe");document.body.appendChild(e),e.setAttribute("style","display: none");const o=e.contentDocument,t=(r=document.getElementById("doc-all"))==null?void 0:r.cloneNode(!0);o==null||o.body.appendChild(t),console.log(e.contentWindow),(s=e.contentWindow)==null||s.print(),document.body.removeChild(e)})};return(e,o)=>{const t=y("FormKit");return d(),c("div",B,[n("div",F,[n("div",g,[a(t,{type:"text",placeholder:e.$t("please input filename"),"prefix-icon":"fileDoc"},null,8,["placeholder"])]),n("div",x,[a(t,{type:"button",onClick:l,label:e.$t("save-pdf")},null,8,["label"])]),n("div",A,[a(t,{type:"button",onClick:l,label:e.$t("save-data")},null,8,["label"])])]),(d(!0),c(b,null,h(C(p).forms,(r,s)=>(d(),c("div",{class:"doc",id:"doc-all",key:s},[a(u)]))),128))])}}});var K=k(E,[["__scopeId","data-v-7b543984"]]);export{K as default};
