import{i as l,w as $}from"./i18n-0af8b262.js";import{a as L,b as P,e as F}from"./style-b9bc59b4.js";import{D as N,a as R,c as T,P as E,b as M}from"./system-93ae242b.js";import{a as g}from"./index-cd6d6b34.js";import{g as O,s as z}from"./common-938b41ea.js";import{f as V,l as B}from"./stockAsn-18b92b84.js";import{_ as v}from"./tooltip-btn.vue_vue_type_script_setup_true_lang-fc6ce76f.js";import q from"./new-add-or-update-notice-ea4210f8.js";import Q from"./sku-info-138df2f3.js";import{e as U}from"./exportTable-b0d17537.js";import{B as J}from"./btnGroup-26ff2079.js";import{Q as G}from"./qrCodeDialog-8c21caa4.js";import{h as H}from"./httpCodeJudge-e416f8ca.js";import{d as j,b as c,r as b,o as K,c as S,w as Z,a as u,x as W,m as Y,u as h,q as o,s as i,y as _,at as f,ap as m,as as X,O as ee}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-f4e4efab.js";import"./index-ae8f073f.js";import"./vue-router-1283ad2d.js";import"./request-e1053d5a.js";import"./index-827f2091.js";import"./sku-select-e1d3e93a.js";import"./stockManagement-a6372198.js";import"./formRule-3feb276f.js";import"./supplier-8eff24fc.js";import"./ownerOfCargo-a67b46ea.js";import"./custom-filter-select.vue_vue_type_script_setup_true_lang-d6331575.js";import"./formatSystem-1203ad16.js";import"./vue-qr-da17c00d.js";const oe={class:"operateArea"},ae=j({__name:"tabNotice",setup(se,{expose:D}){const d=c(),w=c(),e=b({showDialog:!1,showDialogShowInfo:!1,searchForm:{supplier_name:"",sku_name:""},dialogForm:c({id:0,asn_no:"",asn_batch:"",estimated_arrival_time:"",detailList:[]}),activeTab:null,tableData:c([]),tablePage:b({total:0,sqlTitle:"asn_status:0",pageIndex:1,pageSize:N,searchObjects:c([])}),timer:c(null),btnList:[],authorityList:O(),selectRowData:[]}),s=b({printQrCode:()=>{const t=d.value.getCheckboxRecords();if(t.length>0){for(const a of t)a.type="asn";w.value.openDialog(t)}else g.$message({type:"error",content:l.global.t("base.userManagement.checkboxIsNull")})},selectAllEvent({checked:t}){const a=d.value.getCheckboxRecords();t?e.selectRowData=a:e.selectRowData=[]},selectChangeEvent(){e.selectRowData=d.value.getCheckboxRecords()},closeDialogShowInfo:()=>{e.showDialogShowInfo=!1},showSkuInfo(t){e.dialogForm=JSON.parse(JSON.stringify(t)),e.showDialogShowInfo=!0},add:()=>{e.dialogForm={id:0,asn_no:"",asn_batch:"",estimated_arrival_time:"",detailList:[]},e.showDialog=!0},editRow(t){e.dialogForm=JSON.parse(JSON.stringify(t)),e.showDialog=!0},deleteRow(t){g.$dialog({content:l.global.t("system.tips.beforeDeleteMessage"),handleConfirm:async()=>{if(t.id){const{data:a}=await V(t.id);if(!a.isSuccess){if(H(a.errorMessage)){s.refresh();return}g.$message({type:"error",content:a.errorMessage});return}g.$message({type:"success",content:`${l.global.t("system.page.delete")}${l.global.t("system.tips.success")}`}),s.refresh()}}})},closeDialog:()=>{e.showDialog=!1},saveSuccess:()=>{s.refresh(),s.closeDialog()},refresh:()=>{s.getStockAsnList()},getStockAsnList:async()=>{const{data:t}=await B(e.tablePage);if(!t.isSuccess){g.$message({type:"error",content:t.errorMessage});return}e.tableData=t.data.rows,e.tablePage.total=t.data.totals},handlePageChange:c(({currentPage:t,pageSize:a})=>{e.tablePage.pageIndex=t,e.tablePage.pageSize=a,s.getStockAsnList()}),exportTable:()=>{const t=d.value;U({table:t,filename:l.global.t("wms.stockAsn.tabNotice"),columnFilterMethod({column:a}){return!["checkbox"].includes(a==null?void 0:a.type)&&!["operate"].includes(a==null?void 0:a.field)}})},sureSearch:()=>{e.tablePage.searchObjects=z(e.searchForm),s.getStockAsnList()}});K(()=>{e.btnList=[{name:l.global.t("system.page.add"),icon:"mdi-plus",code:"notice-save",click:s.add},{name:l.global.t("system.page.refresh"),icon:"mdi-refresh",code:"",click:s.refresh},{name:l.global.t("system.page.export"),icon:"mdi-export-variant",code:"notice-export",click:s.exportTable},{name:l.global.t("base.commodityManagement.printQrCode"),icon:"mdi-qrcode",code:"notice-printQrCode",click:s.printQrCode}]});const C=S(()=>L({})),I=S(()=>P({}));return D({getStockAsnList:s.getStockAsnList}),Z(()=>e.searchForm,()=>{e.timer&&clearTimeout(e.timer),e.timer=setTimeout(()=>{e.timer=null,s.sureSearch()},R)},{deep:!0}),(t,a)=>{const p=u("v-col"),y=u("v-text-field"),k=u("v-row"),n=u("vxe-column"),x=u("vxe-table");return W(),Y(ee,null,[h("div",oe,[o(k,{"no-gutters":""},{default:i(()=>[o(p,{cols:"3",class:"col"},{default:i(()=>[o(J,{"authority-list":e.authorityList,"btn-list":e.btnList},null,8,["authority-list","btn-list"])]),_:1}),o(p,{cols:"9"},{default:i(()=>[o(k,{"no-gutters":"",onKeyup:$(s.sureSearch,["enter"])},{default:i(()=>[o(p,{cols:"4"}),o(p,{cols:"4"},{default:i(()=>[o(y,{modelValue:e.searchForm.supplier_name,"onUpdate:modelValue":a[0]||(a[0]=r=>e.searchForm.supplier_name=r),clearable:"","hide-details":"",density:"comfortable",class:"searchInput ml-5 mt-1",label:t.$t("wms.stockAsnInfo.supplier_name"),variant:"solo"},null,8,["modelValue","label"])]),_:1}),o(p,{cols:"4"},{default:i(()=>[o(y,{modelValue:e.searchForm.sku_name,"onUpdate:modelValue":a[1]||(a[1]=r=>e.searchForm.sku_name=r),clearable:"","hide-details":"",density:"comfortable",class:"searchInput ml-5 mt-1",label:t.$t("wms.stockAsnInfo.sku_name"),variant:"solo"},null,8,["modelValue","label"])]),_:1})]),_:1},8,["onKeyup"])]),_:1})]),_:1})]),h("div",{class:"mt-5",style:X({height:m(C)})},[o(x,{ref_key:"xTable",ref:d,"column-config":{minWidth:"100px"},data:e.tableData,height:m(I),align:"center"},{empty:i(()=>[_(f(m(l).global.t("system.page.noData")),1)]),default:i(()=>[o(n,{type:"checkbox",width:"50",fixed:"left"}),o(n,{type:"seq",width:"60"}),o(n,{field:"asn_no",title:t.$t("wms.stockAsnInfo.asn_no")},null,8,["title"]),o(n,{field:"asn_batch",title:t.$t("wms.stockAsnInfo.asn_batch")},null,8,["title"]),o(n,{field:"estimated_arrival_time",formatter:["formatDate","yyyy-MM-dd"],title:t.$t("wms.stockAsnInfo.estimated_arrival_time")},null,8,["title"]),o(n,{field:"goods_owner_name",title:t.$t("wms.stockAsnInfo.goods_owner_name")},null,8,["title"]),o(n,{field:"operate",title:t.$t("system.page.operate"),width:"140px",resizable:!1,"show-overflow":""},{default:i(({row:r})=>[o(v,{flat:!0,icon:"mdi-pencil-outline","tooltip-text":t.$t("system.page.edit"),disabled:!e.authorityList.includes("notice-save"),onClick:A=>s.editRow(r)},null,8,["tooltip-text","disabled","onClick"]),o(v,{flat:!0,icon:"mdi-delete-outline","tooltip-text":t.$t("system.page.delete"),"icon-color":e.authorityList.includes("notice-delete")?m(F):"",disabled:!e.authorityList.includes("notice-delete"),onClick:A=>s.deleteRow(r)},null,8,["tooltip-text","icon-color","disabled","onClick"])]),_:1},8,["title"])]),_:1},8,["data","height"]),o(T,{"current-page":e.tablePage.pageIndex,"page-size":e.tablePage.pageSize,perfect:"",total:e.tablePage.total,"page-sizes":m(E),layouts:m(M),onPageChange:s.handlePageChange},null,8,["current-page","page-size","total","page-sizes","layouts","onPageChange"])],4),o(q,{"show-dialog":e.showDialog,form:e.dialogForm,onClose:s.closeDialog,onSaveSuccess:s.saveSuccess},null,8,["show-dialog","form","onClose","onSaveSuccess"]),o(Q,{"show-dialog":e.showDialogShowInfo,form:e.dialogForm,onClose:s.closeDialogShowInfo},null,8,["show-dialog","form","onClose"]),o(G,{ref_key:"qrCodeDialogRef",ref:w,menu:"stockAsnInfo-notice"},{left:i(({slotData:r})=>[h("p",null,f(t.$t("wms.stockAsnInfo.num"))+":"+f(r.asn_no),1),_("   "),h("p",null,f(t.$t("wms.stockAsnInfo.asn_batch"))+":"+f(r.asn_batch),1),_("   ")]),_:1},512)],64)}}});const Ne=te(ae,[["__scopeId","data-v-fe59fe75"]]);export{Ne as default};
