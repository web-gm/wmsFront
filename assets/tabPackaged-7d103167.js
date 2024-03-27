import{i as c,w as T}from"./i18n-0af8b262.js";import{a as q,b as x}from"./style-b9bc59b4.js";import{D as I,a as F,c as V,P as L,b as B}from"./system-93ae242b.js";import{a as m}from"./index-cd6d6b34.js";import{l as E,m as z,n as H}from"./deliveryManagement-7eebd823.js";import{_ as v}from"./tooltip-btn.vue_vue_type_script_setup_true_lang-fc6ce76f.js";import{G as k}from"./commodityManagement-a1debff9.js";import{g as A,s as O}from"./common-938b41ea.js";import{_ as U}from"./search-delivered-detail.vue_vue_type_script_setup_true_lang-20446111.js";import{e as G}from"./exportTable-b0d17537.js";import{B as R}from"./btnGroup-26ff2079.js";import{_ as N}from"./package-confirm.vue_vue_type_script_setup_true_lang-44235a07.js";import{h as j}from"./httpCodeJudge-e416f8ca.js";import{d as K,b as g,r as w,o as W,w as Z,c as $,a as h,x as J,m as Q,u,q as t,s as d,y as Y,at as _,ap as p,as as X,O as ee}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-f4e4efab.js";import"./request-e1053d5a.js";import"./index-827f2091.js";import"./vue-router-1283ad2d.js";import"./index-ae8f073f.js";import"./formRule-3feb276f.js";const ae={class:"operateArea"},le={style:{width:"100%",display:"flex","justify-content":"center"}},se=K({__name:"tabPackaged",setup(oe,{expose:M}){const y=g(),f=g(),a=w({showDeliveredDetailID:0,showDeliveredDetail:!1,dialogForm:{id:0},searchForm:{dispatch_no:"",customer_name:"",spu_name:""},timer:g(null),activeTab:null,tableData:g([]),tablePage:g({total:0,pageIndex:1,pageSize:I,searchObjects:[]}),btnList:[],authorityList:A()}),o=w({closeDeliveredDetail:()=>{a.showDeliveredDetail=!1},viewRow:e=>{a.showDeliveredDetailID=e.id,a.showDeliveredDetail=!0},backToThePreviousStep(e){m.$dialog({content:`${c.global.t("wms.deliveryManagement.confirmBack")}?`,handleConfirm:async()=>{const{data:l}=await E(e.id);if(!l.isSuccess){m.$message({type:"error",content:l.errorMessage});return}m.$message({type:"success",content:l.data}),o.refresh()}})},refresh:()=>{o.getPackaged()},getPackaged:async()=>{const{data:e}=await z(a.tablePage);if(!e.isSuccess){m.$message({type:"error",content:e.errorMessage});return}a.tableData=e.data.rows,a.tablePage.total=e.data.totals},handlePageChange:g(({currentPage:e,pageSize:l})=>{a.tablePage.pageIndex=e,a.tablePage.pageSize=l,o.getPackaged()}),exportTable:()=>{const e=y.value;G({table:e,filename:c.global.t("wms.deliveryManagement.packaged"),columnFilterMethod({column:l}){return!["checkbox"].includes(l==null?void 0:l.type)&&!["operate"].includes(l==null?void 0:l.field)}})},sureSearch:()=>{a.tablePage.searchObjects=O(a.searchForm),o.getPackaged()},handlePackage:async()=>{const l=y.value.getCheckboxRecords(),r=[];if(l.length>0){for(const i of l)r.push({id:i.id,spu_name:i.spu_name,spu_code:i.spu_code,sku_code:i.sku_code,maxQty:i.unpackage_qty,qty:i.unpackage_qty,dispatch_no:i.dispatch_no,dispatch_status:i.dispatch_status,picked_qty:i.picked_qty});f.value.openDialog(r)}else m.$message({type:"error",content:`${c.global.t("base.userManagement.checkboxIsNull")}`})},dialogSubmit:async e=>{const l=e.map(i=>({id:i.id,dispatch_no:i.dispatch_no,dispatch_status:i.dispatch_status,package_qty:i.qty,picked_qty:i.picked_qty})),{data:r}=await H(l);if(!r.isSuccess){if(j(r.errorMessage)){o.refresh(),f.value.closeDialog();return}m.$message({type:"error",content:r.errorMessage});return}m.$message({type:"success",content:r.data}),f.value.closeDialog(),o.refresh()},getCheckBoxDisableState:({row:e})=>e.is_todo});W(()=>{a.btnList=[{name:c.global.t("system.page.refresh"),icon:"mdi-refresh",code:"",click:o.refresh},{name:c.global.t("system.page.export"),icon:"mdi-export-variant",code:"packaged-export",click:o.exportTable},{name:c.global.t("wms.deliveryManagement.package"),icon:"mdi-package-down",code:"packaged-package",click:o.handlePackage}]}),Z(()=>a.searchForm,()=>{a.timer&&clearTimeout(a.timer),a.timer=setTimeout(()=>{a.timer=null,o.sureSearch()},F)},{deep:!0});const D=$(()=>q({})),P=$(()=>x({}));return M({getPackaged:o.getPackaged}),(e,l)=>{const r=h("v-col"),i=h("v-text-field"),b=h("v-row"),s=h("vxe-column"),C=h("vxe-table");return J(),Q(ee,null,[u("div",ae,[t(b,{"no-gutters":""},{default:d(()=>[t(r,{cols:"3",class:"col"},{default:d(()=>[t(R,{"authority-list":a.authorityList,"btn-list":a.btnList},null,8,["authority-list","btn-list"])]),_:1}),t(r,{cols:"9"},{default:d(()=>[t(b,{"no-gutters":"",onKeyup:T(o.sureSearch,["enter"])},{default:d(()=>[t(r,{cols:"4"},{default:d(()=>[t(i,{modelValue:a.searchForm.dispatch_no,"onUpdate:modelValue":l[0]||(l[0]=n=>a.searchForm.dispatch_no=n),clearable:"","hide-details":"",density:"comfortable",class:"searchInput ml-5 mt-1",label:e.$t("wms.deliveryManagement.dispatch_no"),variant:"solo"},null,8,["modelValue","label"])]),_:1}),t(r,{cols:"4"},{default:d(()=>[t(i,{modelValue:a.searchForm.customer_name,"onUpdate:modelValue":l[1]||(l[1]=n=>a.searchForm.customer_name=n),clearable:"","hide-details":"",density:"comfortable",class:"searchInput ml-5 mt-1",label:e.$t("wms.deliveryManagement.customer_name"),variant:"solo"},null,8,["modelValue","label"])]),_:1}),t(r,{cols:"4"},{default:d(()=>[t(i,{modelValue:a.searchForm.spu_name,"onUpdate:modelValue":l[2]||(l[2]=n=>a.searchForm.spu_name=n),clearable:"","hide-details":"",density:"comfortable",class:"searchInput ml-5 mt-1",label:e.$t("wms.deliveryManagement.spu_name"),variant:"solo"},null,8,["modelValue","label"])]),_:1})]),_:1},8,["onKeyup"])]),_:1})]),_:1})]),u("div",{class:"mt-5",style:X({height:p(D)})},[t(C,{ref_key:"xTable",ref:y,"checkbox-config":{checkMethod:o.getCheckBoxDisableState,visibleMethod:o.getCheckBoxDisableState},"column-config":{minWidth:"100px"},data:a.tableData,height:p(P),align:"center"},{empty:d(()=>[Y(_(p(c).global.t("system.page.noData")),1)]),default:d(()=>[t(s,{type:"seq",width:"60"}),t(s,{type:"checkbox",width:"50"}),t(s,{title:e.$t("wms.deliveryManagement.state")},{default:d(({row:n})=>[u("span",null,_(`${n.is_todo?e.$t("wms.deliveryManagement.packageTodo"):e.$t("wms.deliveryManagement.packageReady")}`),1)]),_:1},8,["title"]),t(s,{field:"dispatch_no",title:e.$t("wms.deliveryManagement.dispatch_no")},null,8,["title"]),t(s,{field:"spu_code",title:e.$t("wms.deliveryManagement.spu_code")},null,8,["title"]),t(s,{field:"spu_description",width:"200px",title:e.$t("wms.deliveryManagement.spu_description")},null,8,["title"]),t(s,{field:"spu_name",title:e.$t("wms.deliveryManagement.spu_name")},null,8,["title"]),t(s,{field:"sku_code",title:e.$t("wms.deliveryManagement.sku_code")},null,8,["title"]),t(s,{field:"bar_code",title:e.$t("wms.deliveryManagement.bar_code")},null,8,["title"]),t(s,{field:"qty",title:e.$t("wms.deliveryManagement.order_qty")},null,8,["title"]),t(s,{field:"unpackage_qty",title:e.$t("wms.deliveryManagement.unpackage_qty")},null,8,["title"]),t(s,{field:"package_qty",title:e.$t("wms.deliveryManagement.package_qty")},null,8,["title"]),t(s,{field:"weight",title:e.$t("wms.deliveryManagement.detailWeight")},{default:d(({row:n})=>[u("span",null,_(`${n.weight} ${p(k)("weight",n.weight_unit)}`),1)]),_:1},8,["title"]),t(s,{field:"volume",title:e.$t("wms.deliveryManagement.detailVolume")},{default:d(({row:n})=>[u("span",null,_(`${n.volume} ${p(k)("volume",n.volume_unit)}`),1)]),_:1},8,["title"]),t(s,{field:"package_person",title:e.$t("wms.deliveryManagement.package_person")},null,8,["title"]),t(s,{field:"package_time",width:"170px",formatter:["formatDate","yyyy-MM-dd HH:mm"],title:e.$t("wms.deliveryManagement.package_time")},null,8,["title"]),t(s,{field:"customer_name",title:e.$t("wms.deliveryManagement.customer_name")},null,8,["title"]),t(s,{field:"creator",title:e.$t("wms.deliveryManagement.creator")},null,8,["title"]),t(s,{field:"create_time",width:"170px",formatter:["formatDate","yyyy-MM-dd HH:mm"],title:e.$t("wms.deliveryManagement.create_time")},null,8,["title"]),t(s,{field:"operate",title:e.$t("system.page.operate"),width:"140",resizable:!1,"show-overflow":""},{default:d(({row:n})=>[u("div",le,[t(v,{flat:!0,icon:"mdi-eye-outline","tooltip-text":e.$t("system.page.view"),onClick:S=>o.viewRow(n)},null,8,["tooltip-text","onClick"]),t(v,{flat:!0,icon:"mdi-arrow-u-left-top","tooltip-text":e.$t("wms.deliveryManagement.backToThePreviousStep"),disabled:!a.authorityList.includes("packaged-revoke"),onClick:S=>o.backToThePreviousStep(n)},null,8,["tooltip-text","disabled","onClick"])])]),_:1},8,["title"])]),_:1},8,["checkbox-config","data","height"]),t(V,{"current-page":a.tablePage.pageIndex,"page-size":a.tablePage.pageSize,perfect:"",total:a.tablePage.total,"page-sizes":p(L),layouts:p(B),onPageChange:o.handlePageChange},null,8,["current-page","page-size","total","page-sizes","layouts","onPageChange"]),t(U,{id:a.showDeliveredDetailID,"show-dialog":a.showDeliveredDetail,onClose:o.closeDeliveredDetail},null,8,["id","show-dialog","onClose"]),t(N,{ref_key:"PackageConfirmRef",ref:f,"dialog-title":e.$t("wms.deliveryManagement.package"),"is-weight":!1,onSubmit:o.dialogSubmit},null,8,["dialog-title","onSubmit"])],4)],64)}}});const Ce=te(se,[["__scopeId","data-v-e3b04860"]]);export{Ce as default};
