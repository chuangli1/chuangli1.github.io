import{d as b,h as y,t as h,u as k,r as g,o as s,a as r,b as e,j as l,F as c,B as V,A as d,e as B,c as F,g as C}from"./vendor.047185e5.js";import $ from"./form.90237f3f.js";import{_ as N}from"./index.43837204.js";import"./FileSaver.min.0a913109.js";import"./_commonjsHelpers.a5007c1f.js";var R=["resume"];const x={class:"mt32 clear"},A={class:"inline-block"},K={class:"inline-block ml32"},S={class:"form-content"},j={class:"inline-block add"},D={class:"inline-block ml32"},E={class:"copyright"},I=b({props:{forms:{type:Array,default:["resume"]}},emits:["on-add"],setup(m,{emit:u}){const p=m,n=y("resume"),{forms:_}=h(p);k();const v=R,f=()=>{u("on-add",n.value)};return(o,i)=>{const t=g("FormKit");return s(),r(c,null,[e("div",x,[e("div",A,[l(t,{type:"button",label:o.$t("clear")},null,8,["label"])]),e("div",K,[l(t,{type:"button",label:o.$t("setting")},null,8,["label"])])]),e("div",S,[(s(!0),r(c,null,V(d(_),(a,L)=>(s(),r("div",null,[a==="resume"?(s(),F($,{key:0})):C("",!0)]))),256))]),e("div",null,[e("div",j,[l(t,{type:"select",name:"small_country",modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=a=>n.value=a),options:d(v)},null,8,["modelValue","options"])]),e("div",D,[l(t,{type:"button",label:o.$t("add"),onClick:f,"prefix-icon":"add"},null,8,["label"])])]),e("div",E,B(o.$t("copyright")),1)],64)}}});var H=N(I,[["__scopeId","data-v-1bce863c"]]);export{H as default};
