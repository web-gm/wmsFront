import{i as n,w as $}from"./i18n-0af8b262.js";import{a as D,b as C}from"./style-b9bc59b4.js";import{D as x,a as L,c as P,P as T,b as F}from"./system-93ae242b.js";import{a as c}from"./index-cd6d6b34.js";import{g as E,s as z}from"./common-938b41ea.js";import{h as B,i as O,g as R}from"./stockAsn-18b92b84.js";import V from"./sku-info-138df2f3.js";import{e as M}from"./exportTable-b0d17537.js";import{B as q}from"./btnGroup-26ff2079.js";import{_ as N}from"./confirm-arrival.vue_vue_type_script_setup_true_lang-656c9c41.js";import{h as U}from"./httpCodeJudge-e416f8ca.js";import{d as G,b as m,r as b,o as H,c as v,w as j,a as f,x as J,m as K,u as k,q as s,s as r,y as Z,at as w,ap as p,aq as W,as as Y,O as Q}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-f4e4efab.js";import"./index-ae8f073f.js";import"./vue-router-1283ad2d.js";import"./request-e1053d5a.js";import"./index-827f2091.js";import"./tooltip-btn.vue_vue_type_script_setup_true_lang-fc6ce76f.js";import"./formatSystem-1203ad16.js";const ee={class:"operateArea"},te=["onClick"],se=G({__name:"tabToDoArrival",setup(oe,{expose:y}){const g=m(),h=m(),t=b({showDialog:!1,showDialogShowInfo:!1,searchForm:{supplier_name:"",sku_name:""},activeTab:null,tableData:m([]),dialogForm:m({id:0,asn_no:"",asn_batch:"",estimated_arrival_time:"",detailList:[]}),tablePage:b({total:0,sqlTitle:"asn_status:0",pageIndex:1,pageSize:x,searchObjects:m([])}),timer:m(null),btnList:[],authorityList:E()}),a=b({handleArrival:()=>{g.value.getCheckboxRecords().length>0?h.value.openDialog():c.$message({type:"error",content:n.global.t("wms.stockAsnInfo.selectOne")})},sureBackArrival:async e=>{const i=g.value.getCheckboxRecords().map(_=>({id:_.id,arrival_time:e})),{data:d}=await B(i);if(!d.isSuccess){if(U(d.errorMessage)){a.refresh(),h.value.closeDialog();return}c.$message({type:"error",content:d.errorMessage});return}c.$message({type:"success",content:`${n.global.t("system.page.confirm")}${n.global.t("system.tips.success")}`}),h.value.closeDialog(),a.refresh()},closeDialogShowInfo:()=>{t.showDialogShowInfo=!1},showSkuInfo(e){t.dialogForm=JSON.parse(JSON.stringify(e)),t.showDialogShowInfo=!0},editRow(e){c.$dialog({content:n.global.t("system.tips.beforeAsnConfirm"),handleConfirm:async()=>{if(e.id){const{data:o}=await O(e.id);if(!o.isSuccess){c.$message({type:"error",content:o.errorMessage});return}c.$message({type:"success",content:`${n.global.t("system.page.confirm")}${n.global.t("system.tips.success")}`}),a.refresh()}}})},refresh:()=>{a.getStockAsnList()},getStockAsnList:async()=>{const{data:e}=await R(t.tablePage);if(!e.isSuccess){c.$message({type:"error",content:e.errorMessage});return}t.tableData=e.data.rows,t.tablePage.total=e.data.totals},handlePageChange:m(({currentPage:e,pageSize:o})=>{t.tablePage.pageIndex=e,t.tablePage.pageSize=o,a.getStockAsnList()}),exportTable:()=>{const e=g.value;M({table:e,filename:n.global.t("wms.stockAsn.tabToDoArrival"),columnFilterMethod({column:o}){return!["checkbox"].includes(o==null?void 0:o.type)&&!["operate"].includes(o==null?void 0:o.field)}})},sureSearch:()=>{t.tablePage.searchObjects=z(t.searchForm),a.getStockAsnList()}});H(()=>{t.btnList=[{name:n.global.t("system.page.refresh"),icon:"mdi-refresh",code:"",click:a.refresh},{name:n.global.t("system.page.export"),icon:"mdi-export-variant",code:"delivered-export",click:a.exportTable},{name:n.global.t("wms.stockAsnInfo.confirmArrival"),icon:"mdi-check",code:"delivered-confirm",click:a.handleArrival}]});const A=v(()=>D({})),S=v(()=>C({}));return y({getStockAsnList:a.getStockAsnList}),j(()=>t.searchForm,()=>{t.timer&&clearTimeout(t.timer),t.timer=setTimeout(()=>{t.timer=null,a.sureSearch()},L)},{deep:!0}),(e,o)=>{const i=f("v-col"),d=f("v-text-field"),_=f("v-row"),l=f("vxe-column"),I=f("vxe-table");return J(),K(Q,null,[k("div",ee,[s(_,{"no-gutters":""},{default:r(()=>[s(i,{cols:"3",class:"col"},{default:r(()=>[s(q,{"authority-list":t.authorityList,"btn-list":t.btnList},null,8,["authority-list","btn-list"])]),_:1}),s(i,{cols:"9"},{default:r(()=>[s(_,{"no-gutters":"",onKeyup:$(a.sureSearch,["enter"])},{default:r(()=>[s(i,{cols:"4"}),s(i,{cols:"4"},{default:r(()=>[s(d,{modelValue:t.searchForm.supplier_name,"onUpdate:modelValue":o[0]||(o[0]=u=>t.searchForm.supplier_name=u),clearable:"","hide-details":"",density:"comfortable",class:"searchInput ml-5 mt-1",label:e.$t("wms.stockAsnInfo.supplier_name"),variant:"solo"},null,8,["modelValue","label"])]),_:1}),s(i,{cols:"4"},{default:r(()=>[s(d,{modelValue:t.searchForm.sku_name,"onUpdate:modelValue":o[1]||(o[1]=u=>t.searchForm.sku_name=u),clearable:"","hide-details":"",density:"comfortable",class:"searchInput ml-5 mt-1",label:e.$t("wms.stockAsnInfo.sku_name"),variant:"solo"},null,8,["modelValue","label"])]),_:1})]),_:1},8,["onKeyup"])]),_:1})]),_:1})]),k("div",{class:"mt-5",style:Y({height:p(A)})},[s(I,{ref_key:"xTableStockLocation",ref:g,"column-config":{minWidth:"100px"},data:t.tableData,height:p(S),align:"center"},{empty:r(()=>[Z(w(p(n).global.t("system.page.noData")),1)]),default:r(()=>[s(l,{type:"seq",width:"60"}),s(l,{type:"checkbox",width:"50"}),s(l,{field:"asn_no",title:e.$t("wms.stockAsnInfo.asn_no")},null,8,["title"]),s(l,{field:"spu_code",title:e.$t("wms.stockAsnInfo.spu_code")},null,8,["title"]),s(l,{field:"spu_name",title:e.$t("wms.stockAsnInfo.spu_name")},null,8,["title"]),s(l,{field:"sku_code",title:e.$t("wms.stockAsnInfo.sku_code")},{default:r(({row:u})=>[k("div",{class:W("text-decoration-none"),onClick:ae=>a.showSkuInfo(u)},w(u.sku_code),9,te)]),_:1},8,["title"]),s(l,{field:"sku_name",title:e.$t("wms.stockAsnInfo.sku_name")},null,8,["title"]),s(l,{field:"goods_owner_name",title:e.$t("wms.stockAsnInfo.goods_owner_name")},null,8,["title"]),s(l,{field:"supplier_name",title:e.$t("wms.stockAsnInfo.supplier_name")},null,8,["title"]),s(l,{field:"asn_qty",title:e.$t("wms.stockAsnInfo.asn_qty")},null,8,["title"]),s(l,{field:"weight",title:e.$t("wms.stockAsnInfo.weight")},null,8,["title"]),s(l,{field:"volume",title:e.$t("wms.stockAsnInfo.volume")},null,8,["title"])]),_:1},8,["data","height"]),s(P,{"current-page":t.tablePage.pageIndex,"page-size":t.tablePage.pageSize,perfect:"",total:t.tablePage.total,"page-sizes":p(T),layouts:p(F),onPageChange:a.handlePageChange},null,8,["current-page","page-size","total","page-sizes","layouts","onPageChange"])],4),s(V,{"show-dialog":t.showDialogShowInfo,form:t.dialogForm,onClose:a.closeDialogShowInfo},null,8,["show-dialog","form","onClose"]),s(N,{ref_key:"ConfirmArrivalRef",ref:h,onSure:a.sureBackArrival},null,8,["onSure"])],64)}}});const Ie=X(se,[["__scopeId","data-v-1fe0ec9f"]]);export{Ie as default};
