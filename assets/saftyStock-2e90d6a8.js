import{i as d,w as E}from"./i18n-0af8b262.js";import{a as $,b as q}from"./style-b9bc59b4.js";import{D,a as z,c as C,P as F,b as L}from"./system-93ae242b.js";import{F as V}from"./warehouseWorking-497fd91f.js";import{g as B,s as I}from"./common-938b41ea.js";import{e as A}from"./exportTable-b0d17537.js";import{B as O}from"./btnGroup-26ff2079.js";import{h as M}from"./request-e1053d5a.js";import{a as U}from"./index-cd6d6b34.js";import{d as G,b as c,r as p,o as H,c as y,w as N,a as r,x as Z,m as j,u as _,q as e,s as l,as as K,ap as m,y as R,at as J}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-f4e4efab.js";import"./index-ae8f073f.js";import"./vue-router-1283ad2d.js";import"./tooltip-btn.vue_vue_type_script_setup_true_lang-fc6ce76f.js";import"./index-827f2091.js";const Y=f=>M({url:"/stock/safety-list",method:"post",data:f}),Q={class:"container"},X={class:"operateArea"},ee=G({__name:"saftyStock",setup(f){const h=c(),t=p({showDialog:!1,freezeType:V,timer:c(null),activeTab:null,searchForm:{spu_name:""},tableData:c([]),tablePage:p({total:0,pageIndex:1,pageSize:D,searchObjects:c([])}),btnList:[],authorityList:B()}),i=p({list:async()=>{const{data:a}=await Y(t.tablePage);if(!a.isSuccess){U.$message({type:"error",content:a.errorMessage});return}t.tableData=a.data.rows,t.tablePage.total=a.data.totals},refresh:()=>{i.list()},closeDialog:()=>{t.showDialog=!1},handlePageChange:c(({currentPage:a,pageSize:s})=>{t.tablePage.pageIndex=a,t.tablePage.pageSize=s,i.refresh()}),exportTable:()=>{const a=h.value;A({table:a,filename:d.global.t("router.sideBar.saftyStock"),columnFilterMethod({column:s}){return!["checkbox"].includes(s==null?void 0:s.type)&&!["operate"].includes(s==null?void 0:s.field)}})},sureSearch:()=>{t.tablePage.searchObjects=I(t.searchForm),i.refresh()}});H(()=>{t.btnList=[{name:d.global.t("system.page.refresh"),icon:"mdi-refresh",code:"",click:i.refresh},{name:d.global.t("system.page.export"),icon:"mdi-export-variant",code:"export",click:i.exportTable}],i.refresh()});const b=y(()=>$({hasTab:!1})),v=y(()=>q({hasTab:!1}));return N(()=>t.searchForm,()=>{t.timer&&clearTimeout(t.timer),t.timer=setTimeout(()=>{t.timer=null,i.sureSearch()},z)},{deep:!0}),(a,s)=>{const n=r("v-col"),k=r("v-text-field"),g=r("v-row"),o=r("vxe-column"),w=r("vxe-table"),S=r("v-window-item"),P=r("v-window"),T=r("v-card-text"),x=r("v-card");return Z(),j("div",Q,[_("div",null,[e(x,{class:"mt-5"},{default:l(()=>[e(T,null,{default:l(()=>[e(P,{modelValue:t.activeTab,"onUpdate:modelValue":s[1]||(s[1]=u=>t.activeTab=u)},{default:l(()=>[e(S,null,{default:l(()=>[_("div",X,[e(g,{"no-gutters":""},{default:l(()=>[e(n,{cols:"3",class:"col"},{default:l(()=>[e(O,{"authority-list":t.authorityList,"btn-list":t.btnList},null,8,["authority-list","btn-list"])]),_:1}),e(n,{cols:"9"},{default:l(()=>[e(g,{"no-gutters":"",onKeyup:E(i.sureSearch,["enter"])},{default:l(()=>[e(n,{cols:"4"}),e(n,{cols:"4"}),e(n,{cols:"4"},{default:l(()=>[e(k,{modelValue:t.searchForm.spu_name,"onUpdate:modelValue":s[0]||(s[0]=u=>t.searchForm.spu_name=u),clearable:"","hide-details":"",density:"comfortable",class:"searchInput ml-5 mt-1",label:a.$t("wms.stockList.spu_name"),variant:"solo"},null,8,["modelValue","label"])]),_:1})]),_:1},8,["onKeyup"])]),_:1})]),_:1})]),_("div",{class:"mt-5",style:K({height:m(b)})},[e(w,{ref_key:"xTable",ref:h,"column-config":{minWidth:"120px"},data:t.tableData,height:m(v),align:"center"},{empty:l(()=>[R(J(m(d).global.t("system.page.noData")),1)]),default:l(()=>[e(o,{type:"seq",width:"60"}),e(o,{field:"warehouse_name",title:a.$t("wms.saftyStock.warehouse_name")},null,8,["title"]),e(o,{field:"spu_code",title:a.$t("wms.saftyStock.spu_code")},null,8,["title"]),e(o,{field:"spu_name",title:a.$t("wms.saftyStock.spu_name")},null,8,["title"]),e(o,{field:"sku_id",title:a.$t("wms.saftyStock.sku_id")},null,8,["title"]),e(o,{field:"sku_code",title:a.$t("wms.saftyStock.sku_code")},null,8,["title"]),e(o,{field:"sku_name",title:a.$t("wms.saftyStock.sku_name")},null,8,["title"]),e(o,{field:"qty",title:a.$t("wms.saftyStock.qty")},null,8,["title"]),e(o,{field:"qty_available",title:a.$t("wms.saftyStock.qty_available")},null,8,["title"]),e(o,{field:"qty_locked",title:a.$t("wms.saftyStock.qty_locked")},null,8,["title"]),e(o,{field:"qty_frozen",title:a.$t("wms.saftyStock.qty_frozen")},null,8,["title"]),e(o,{field:"safety_stock_qty",title:a.$t("wms.saftyStock.safety_stock_qty")},null,8,["title"])]),_:1},8,["data","height"]),e(C,{"current-page":t.tablePage.pageIndex,"page-size":t.tablePage.pageSize,perfect:"",total:t.tablePage.total,"page-sizes":m(F),layouts:m(L),onPageChange:i.handlePageChange},null,8,["current-page","page-size","total","page-sizes","layouts","onPageChange"])],4)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])])}}});const ge=W(ee,[["__scopeId","data-v-0dfb58a1"]]);export{ge as default};
