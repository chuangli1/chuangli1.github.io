var y=Object.defineProperty;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var _=(e,o,t)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))b.call(o,t)&&_(e,t,o[t]);if(p)for(var t of p(o))h.call(o,t)&&_(e,t,o[t]);return e};import{d as f}from"./constant.6ec9e412.js";import{_ as C}from"./index.bd77833f.js";import{t as k,r as F,o as c,a as d,b as l,j as i,F as D,B,c as P,P as g}from"./vendor.c3f423c7.js";import"./doc.9fd66a42.js";import"./form.22bbff2f.js";import"./form.ea28b8bb.js";import"./FileSaver.min.0a913109.js";import"./_commonjsHelpers.a5007c1f.js";import"./doc.2239fc9e.js";import"./base.9b59c26e.js";import"./itemResume.d0e8884a.js";const x={props:{forms:{type:Array,default:["resume"]},formdata:{type:Object,required:!0}},components:u({},f),setup(e){const{formdata:o}=k(e);return{formdata:o,savePDF:()=>{setTimeout(()=>{var s,a;const n=document.createElement("iframe");document.body.appendChild(n),n.setAttribute("style","display: none");const r=n.contentDocument,m=(s=document.getElementById("doc-all"))==null?void 0:s.cloneNode(!0);r==null||r.body.appendChild(m),console.log(n.contentWindow),(a=n.contentWindow)==null||a.print(),document.body.removeChild(n)})},docs:f}}},E={class:"doc-content"},N={class:"mt16"},V={class:"operate mr32"},$={class:"operate save mr32"},j={class:"operate save"};function w(e,o,t,n,r,m){const s=F("FormKit");return c(),d("div",E,[l("div",N,[l("div",V,[i(s,{type:"text",placeholder:e.$t("please input filename"),"prefix-icon":"fileDoc"},null,8,["placeholder"])]),l("div",$,[i(s,{type:"button",onClick:n.savePDF,label:e.$t("save-pdf")},null,8,["onClick","label"])]),l("div",j,[i(s,{type:"button",onClick:n.savePDF,label:e.$t("save-data")},null,8,["onClick","label"])])]),(c(!0),d(D,null,B(n.formdata.forms,(a,v)=>(c(),d("div",{class:"doc",id:"doc-all",key:v},[(c(),P(g(n.docs[a.type+"Doc"]),{form:a.form},null,8,["form"]))]))),128))])}var J=C(x,[["render",w],["__scopeId","data-v-34027634"]]);export{J as default};
