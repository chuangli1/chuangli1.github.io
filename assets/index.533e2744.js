import{d as C,t as $,o as n,a as o,b as e,e as c,H as u,F as k,q as y,g as N,v as S,x as U,z as x,h as g,I as b,A as d,J as w,B as F,K as I,j as V,L as p}from"./vendor.c6641e48.js";import{_ as j}from"./index.c9192016.js";const q={class:"base-info"},R=["src"],z=C({props:{base:{type:Object,required:!0}},setup(i){const l=i,{base:_}=$(l);return(m,a)=>(n(),o("div",null,[e("div",q,[e("div",null,c(u(_).name),1),e("div",null,c(u(_).phone)+"|"+c(u(_).email),1),e("div",null," \u6C42\u804C\u65B9\u5411\uFF1A"+c(u(_).dir),1)]),e("img",{src:u(_).img},null,8,R)]))}});var K=j(z,[["__scopeId","data-v-54b6f7c8"]]);const L=i=>(S("data-v-17e38f22"),i=i(),U(),i),M={class:"title"},O={class:"content-title"},P={key:0,class:"detail"},H=L(()=>e("span",{class:"circle"},null,-1)),J={class:"desc"},G=C({props:{item:{type:Object,required:!0}},setup(i){const l=i,{item:_}=$(l);return(m,a)=>(n(),o("div",null,[e("div",M,c(u(_).title),1),(n(!0),o(k,null,y(u(_).contents,(r,h)=>(n(),o("div",{class:"content",key:h},[e("div",O,[e("span",null,c(r.title),1)]),r.detail?(n(),o("div",P,[e("span",null,c(r.detail.desc),1),e("span",null,c(r.detail.time),1)])):N("",!0),(n(!0),o(k,null,y(r.desc.split(`
`),(f,B)=>(n(),o("div",{key:B},[H,e("span",J,c(f),1)]))),128))]))),128))]))}});var Q=j(G,[["__scopeId","data-v-17e38f22"]]);const v=i=>(S("data-v-2d8fa790"),i=i(),U(),i),W={class:"resume"},X={class:"left"},Y={class:"base-info"},Z=v(()=>e("div",{class:"title"},"\u57FA\u672C\u4FE1\u606F",-1)),ee={class:"base"},te=p(" \u540D\u5B57\uFF1A "),ue={class:"base"},se=p(" \u7535\u8BDD\uFF1A "),ne={class:"base"},oe=p(" \u90AE\u7BB1\uFF1A"),le=v(()=>e("div",{class:"base"},[p(" \u7167\u7247\uFF1A"),e("input",{type:"file"})],-1)),ie={class:"base"},ae=p(" \u65B9\u5411\uFF1A"),de={class:"content-info"},ce=v(()=>e("div",{class:"title"},"\u5185\u5BB9\u533A",-1)),_e={class:"item-select"},re=p(" \u5185\u5BB9\u9009\u62E9\uFF1A "),pe=v(()=>e("option",{value:"person"},"\u4E2A\u4EBA\u603B\u7ED3",-1)),ve=v(()=>e("option",{value:"edu"},"\u6559\u80B2\u7ECF\u5386",-1)),Be=v(()=>e("option",{value:"work"},"\u5DE5\u4F5C\u7ECF\u5386",-1)),me=v(()=>e("option",{value:"life"},"\u751F\u6D3B\u7231\u597D",-1)),he=[pe,ve,Be,me],Fe=v(()=>e("span",null,null,-1)),Ee={class:"item-content"},Ae={class:"content-title"},De=p(" \u5185\u5BB9\u6807\u9898\uFF1A "),ke=["value"],ye={class:"content-detail"},fe={class:"item"},ge=p(" \u5185\u5BB9\u63CF\u8FF0\uFF1A"),Ce={class:"item"},je=p(" \u5185\u5BB9\u65F6\u95F4\uFF1A"),xe={class:"content-desc"},be=v(()=>e("div",null,"\u8BE6\u7EC6\u6761\u76EE\uFF1A",-1)),we={class:"right"},Ie={class:"content",id:"resumePDF"},Ve=C({setup(i){const l=x({name:"\u5F20\u4E09",email:"zhangsan@sjtu.edu.cn",phone:"12345678910",dir:"\u524D\u7AEF\u5F00\u53D1",img:""}),_={edu:"\u6559\u80B2\u7ECF\u5386",life:"\u4E2A\u4EBA\u7231\u597D",work:"\u5DE5\u4F5C\u7ECF\u5386",person:"\u4E2A\u4EBA\u603B\u7ED3"},m=g("work"),a=g(""),r=g(!1),h=x([{title:"\u6559\u80B2\u7ECF\u5386",key:"edu",contents:[{title:"\u4E0A\u6D77\u4EA4\u901A\u5927\u5B66",key:new Date().getTime(),detail:{desc:"\u751F\u7269\u533B\u5B66\u5DE5\u7A0B \u672C\u79D1 \u751F\u7269\u533B\u5B66\u5DE5\u7A0B\u5B66\u9662",time:"2015-2019"},desc:`djkhkjghjk
\u4E0A\u8BFE\u5DE5\u884C\u5361\u53F7\u662F\u5927\u6982\u7387\u56DE\u5BB6\u62C9\u4E0A\u51E0\u4E2A
hsahglkhjlashdjlgk`}]},{title:"\u5DE5\u4F5C\u7ECF\u5386",key:"work",contents:[{title:"\u4E0A\u6D77\u4EA4\u901A\u5927\u5B66",key:new Date().getTime(),detail:{desc:"\u751F\u7269\u533B\u5B66\u5DE5\u7A0B \u672C\u79D1 \u751F\u7269\u533B\u5B66\u5DE5\u7A0B\u5B66\u9662",time:"2015-2019dhjjkgh"},desc:`hdjhgkhkjahjkg
jkdhkjhgjkhj`},{title:"\u4E0A\u6D77\u4EA4\u901A\u5927\u5B66123",key:new Date().getTime()+23,detail:{desc:"\u751F\u7269\u533B\u5B66\u5DE5\u7A0B \u672C\u79D1 \u751F\u7269\u533B\u5B66\u5DE5\u7A0B\u5B66\u9662",time:"2015-2019"},desc:`hdjhgkhkjahjkg
jkdhkjhgjkhj`}]},{title:"\u4E2A\u4EBA\u7231\u597D",key:"life",contents:[{title:"\u4E0A\u6D77\u4EA4\u901A\u5927\u5B66",key:new Date().getTime(),detail:{desc:"\u751F\u7269\u533B\u5B66\u5DE5\u7A0B \u672C\u79D1 \u751F\u7269\u533B\u5B66\u5DE5\u7A0B\u5B66\u9662",time:"2015-2019"},desc:""}]}]),f=()=>{const t={title:prompt("\u8BF7\u8F93\u5165\u5185\u5BB9\u6807\u9898\uFF1A")||"",key:new Date().getTime(),detail:{time:"",desc:""},desc:""};B.value.contents.push(t),a.value=t.key},B=b(()=>{const A=h.findIndex(t=>m.value===t.key);if(A===-1){const t={title:_[m.value],key:m.value,contents:[]};return h.push(t),a.value="",t}return a.value="",h[A]}),E=b(()=>{console.log("\u6D4B\u8BD5",a.value),a.value||(B.value.contents.length?a.value=B.value.contents[0].key:f());const A=B.value.contents.findIndex(t=>(console.log("\u6D4B\u8BD5",t,a),t.key===a.value));return B.value.contents[A]}),T=()=>{r.value=!0,setTimeout(()=>{window.print(),r.value=!1})};return(A,t)=>(n(),o("div",W,[d(e("div",X,[e("div",Y,[Z,e("div",ee,[te,d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>u(l).name=s),class:"input",type:""},null,512),[[F,u(l).name]])]),e("div",ue,[se,d(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>u(l).phone=s),class:"input",type:""},null,512),[[F,u(l).phone]])]),e("div",ne,[oe,d(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>u(l).email=s),class:"input",type:""},null,512),[[F,u(l).email]])]),le,e("div",ie,[ae,d(e("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>u(l).dir=s),class:"input",type:""},null,512),[[F,u(l).dir]])])]),e("div",de,[ce,e("div",_e,[e("div",null,[re,d(e("select",{class:"input","onUpdate:modelValue":t[4]||(t[4]=s=>m.value=s)},he,512),[[I,m.value]])]),e("div",null,[(n(!0),o(k,null,y(u(h),(s,D)=>(n(),o("span",{key:D,class:"selected"},[e("span",null,c(s.title),1),Fe]))),128))])]),e("div",Ee,[e("div",Ae,[De,d(e("select",{class:"input","onUpdate:modelValue":t[5]||(t[5]=s=>a.value=s)},[(n(!0),o(k,null,y(u(B).contents,(s,D)=>(n(),o("option",{value:s.key,key:D},c(s.title),9,ke))),128))],512),[[I,a.value]]),e("button",{onClick:f},"\u6DFB\u52A0")]),e("div",ye,[e("div",fe,[ge,d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>u(E).detail.desc=s),class:"input",type:""},null,512),[[F,u(E).detail.desc]])]),e("div",Ce,[je,d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>u(E).detail.time=s),class:"input",type:""},null,512),[[F,u(E).detail.time]])])]),e("div",xe,[e("div",null,[be,d(e("textarea",{col:"20",row:"10","onUpdate:modelValue":t[8]||(t[8]=s=>u(E).desc=s)},null,512),[[F,u(E).desc]])])])])])],512),[[w,!r.value]]),e("div",we,[d(e("button",{class:"export",onClick:T},"\u5BFC\u51FA",512),[[w,!r.value]]),e("div",Ie,[V(K,{base:u(l)},null,8,["base"]),(n(!0),o(k,null,y(u(h),(s,D)=>(n(),o("div",{key:D},[V(Q,{item:s},null,8,["item"])]))),128))])])]))}});var Ue=j(Ve,[["__scopeId","data-v-2d8fa790"]]);export{Ue as default};
