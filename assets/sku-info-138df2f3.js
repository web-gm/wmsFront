import{i as l}from"./i18n-0af8b262.js";import{a as q}from"./index-cd6d6b34.js";import{a as C}from"./stockAsn-18b92b84.js";import{d as S,c as V,r as p,w as B,a as i,x as A,v as L,s as t,q as e,y as a,at as s,ap as n,ac as N}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./request-e1053d5a.js";import"./index-f4e4efab.js";import"./index-827f2091.js";import"./vue-router-1283ad2d.js";const j=S({__name:"sku-info",props:{showDialog:{type:Boolean},form:null},emits:["close"],setup(f,{emit:g}){const r=f,c=V(()=>r.showDialog),o=p({form:{id:0,asn_no:"",asn_status:0,spu_id:0,spu_code:"",spu_name:"",sku_id:0,sku_code:"",sku_name:"",origin:"",length_unit:0,volume_unit:0,weight_unit:0,asn_qty:0,actual_qty:0,sorted_qty:0,shortage_qty:0,more_qty:0,damage_qty:0,weight:0,volume:0,supplier_id:0,supplier_name:"",goods_owner_id:0,goods_owner_name:"",is_valid:!0},tableData:{spu_id:0,spu_code:"",spu_name:"",category_id:0,category_name:"",spu_description:"",bar_code:"",supplier_id:0,supplier_name:"",brand:"",origin:"",length_unit:0,volume_unit:0,weight_unit:0,sku_id:0,sku_code:"",sku_name:"",weight:0,lenght:0,width:0,height:0,volume:0,unit:"",cost:0,price:0}}),m=p({closeDialog:()=>{g("close")},getStockAsnList:async()=>{const{data:u}=await C(o.form.sku_id);if(!u.isSuccess){q.$message({type:"error",content:u.errorMessage});return}o.tableData=u.data}});return B(()=>c.value,u=>{u&&(o.form=r.form,m.getStockAsnList())}),(u,d)=>{const b=i("v-list-item-title"),_=i("v-list-item-subtitle"),k=i("v-list-item-content"),v=i("v-list-item"),w=i("v-card-text"),y=i("v-btn"),h=i("v-card-actions"),D=i("v-card"),I=i("v-dialog");return A(),L(I,{modelValue:n(c),"onUpdate:modelValue":d[0]||(d[0]=x=>N(c)?c.value=x:null),width:"30%",transition:"dialog-top-transition",persistent:!0},{default:t(()=>[e(D,null,{default:t(()=>[e(w,null,{default:t(()=>[e(v,{"two-line":""},{default:t(()=>[e(k,null,{default:t(()=>[e(b,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.spu_name")+":"+o.tableData.spu_name),1)]),_:1}),e(_,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.sku_code")+":"+o.tableData.sku_code),1)]),_:1}),e(_,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.sku_name")+":"+o.tableData.sku_name),1)]),_:1}),e(_,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.spu_description")+":"+o.tableData.spu_description),1)]),_:1}),e(_,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.category_name")+":"+o.tableData.category_name),1)]),_:1}),e(_,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.brand")+":"+o.tableData.brand),1)]),_:1}),e(_,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.origin")+":"+o.tableData.origin),1)]),_:1}),e(_,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.unit")+":"+o.tableData.unit),1)]),_:1}),e(_,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.cost")+":"+o.tableData.cost),1)]),_:1}),e(_,null,{default:t(()=>[a(s(n(l).global.t("wms.skuInfo.bar_code")+":"+o.tableData.bar_code),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{class:"justify-end"},{default:t(()=>[e(y,{variant:"text",onClick:m.closeDialog},{default:t(()=>[a(s(u.$t("system.page.close")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});const J=$(j,[["__scopeId","data-v-7b7400a1"]]);export{J as default};
