import{a as k}from"./index-cd6d6b34.js";import{v as M}from"./deliveryManagement-7eebd823.js";import{i as C}from"./i18n-0af8b262.js";import{d as V,c as x,r as c,w as q,a as l,x as N,v as T,s as o,q as t,y as m,at as u,ap as p,ac as B}from"./runtime-core.esm-bundler-1bbee395.js";const U=V({__name:"search-delivered-main-detail",props:{showDialog:{type:Boolean},dispatchNo:null},emits:["close","submit"],setup(_,{emit:v}){const i=_,n=x(()=>i.showDialog),s=c({tableData:[]}),r=c({getTableData:async()=>{const{data:e}=await M(i.dispatchNo);if(!e.isSuccess){k.$message({type:"error",content:e.errorMessage});return}s.tableData=e.data},closeDialog:()=>{v("close")}});return q(()=>n.value,e=>{e&&r.getTableData()}),(e,d)=>{const g=l("v-toolbar"),a=l("vxe-column"),f=l("vxe-table"),y=l("v-card-text"),w=l("v-btn"),b=l("v-card-actions"),h=l("v-card"),D=l("v-dialog");return N(),T(D,{modelValue:p(n),"onUpdate:modelValue":d[0]||(d[0]=$=>B(n)?n.value=$:null),width:"70%",transition:"dialog-top-transition",persistent:!0},{default:o(()=>[t(h,{class:"formCard"},{default:o(()=>[t(g,{color:"white",title:`${e.$t("wms.deliveryManagement.ViewInventoryDetails")}`},null,8,["title"]),t(y,null,{default:o(()=>[t(f,{ref:"detailXTable","keep-source":"","column-config":{minWidth:"100px"},data:s.tableData,height:"500px",align:"center","edit-config":{trigger:"click",mode:"cell"}},{empty:o(()=>[m(u(p(C).global.t("system.page.noData")),1)]),default:o(()=>[t(a,{type:"seq",width:"60"}),t(a,{field:"spu_code",title:e.$t("wms.deliveryManagement.spu_code")},null,8,["title"]),t(a,{field:"spu_name",title:e.$t("wms.deliveryManagement.spu_name")},null,8,["title"]),t(a,{field:"spu_description",width:"200px",title:e.$t("wms.deliveryManagement.spu_description")},null,8,["title"]),t(a,{field:"bar_code",title:e.$t("wms.deliveryManagement.bar_code")},null,8,["title"]),t(a,{field:"sku_code",title:e.$t("wms.deliveryManagement.sku_code")},null,8,["title"]),t(a,{field:"sku_name",title:e.$t("wms.deliveryManagement.sku_name")},null,8,["title"]),t(a,{field:"unit",title:e.$t("wms.deliveryManagement.unit")},null,8,["title"]),t(a,{field:"qty",title:e.$t("wms.deliveryManagement.qty")},null,8,["title"])]),_:1},8,["data"])]),_:1}),t(b,{class:"justify-end"},{default:o(()=>[t(w,{variant:"text",onClick:r.closeDialog},{default:o(()=>[m(u(e.$t("system.page.close")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});export{U as _};
