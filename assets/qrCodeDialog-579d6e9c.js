import{V as h}from"./vue-qr-da17c00d.js";import{d as k,r as u,a as i,b2 as x,x as d,v as _,s,q as l,u as e,at as o,y as n,t as T}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const V={id:"printArea",class:"printArea"},w={class:"printTopContainer"},$={class:"printLabel",style:{flex:"1"}},q={class:"labelTitle"},M={class:"labelTitle"},N={class:"labelTitle"},A={class:"labelTitle"},B=k({__name:"qrCodeDialog",setup(S,{expose:m}){const t=u({showDialog:!1,printData:{sku_id:0,spu_name:"",spu_code:"",sku_name:"",sku_code:"",barcode:""},printText:""}),r=u({openDialog:a=>{t.printData=a,t.printText=JSON.stringify({sku_id:a.sku_id,type:a.type}),t.showDialog=!0},closeDialog:()=>{t.showDialog=!1}});return m({openDialog:r.openDialog,closeDialog:r.closeDialog}),(a,c)=>{const v=i("v-card-text"),p=i("v-btn"),g=i("v-card-actions"),D=i("v-card"),f=i("v-dialog"),y=x("print");return d(),_(f,{modelValue:t.showDialog,"onUpdate:modelValue":c[0]||(c[0]=b=>t.showDialog=b),width:"448px",transition:"dialog-top-transition",persistent:!0},{default:s(()=>[l(D,null,{default:s(()=>[l(v,null,{default:s(()=>[e("div",V,[e("div",w,[e("div",null,[(d(),_(h,{key:t.printText,size:"140",margin:0,"auto-color":!0,"dot-scale":1,text:t.printText},null,8,["text"]))]),e("div",$,[e("div",null,[e("span",q,o(a.$t("base.commodityManagement.spu_code"))+":",1),n("  "+o(t.printData.spu_code),1)]),e("div",null,[e("span",M,o(a.$t("base.commodityManagement.spu_name"))+":",1),n("  "+o(t.printData.spu_name),1)]),e("div",null,[e("span",N,o(a.$t("base.commodityManagement.sku_code"))+":",1),n("  "+o(t.printData.sku_code),1)]),e("div",null,[e("span",A,o(a.$t("base.commodityManagement.sku_name"))+":",1),n("  "+o(t.printData.sku_name),1)])])])])]),_:1}),l(g,{class:"justify-end"},{default:s(()=>[l(p,{variant:"text",onClick:r.closeDialog},{default:s(()=>[n(o(a.$t("system.page.close")),1)]),_:1},8,["onClick"]),T((d(),_(p,{color:"primary",variant:"text"},{default:s(()=>[n(o(a.$t("system.page.print")),1)]),_:1})),[[y,"#printArea"]])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});const J=C(B,[["__scopeId","data-v-f569126b"]]);export{J as default};
