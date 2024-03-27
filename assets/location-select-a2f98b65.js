import{a as A}from"./index-cd6d6b34.js";import{j}from"./warehouseSetting-835f9e1c.js";import{_ as S}from"./tooltip-btn.vue_vue_type_script_setup_true_lang-fc6ce76f.js";import{D as B,a as O,c as G,P as U,b as H}from"./system-93ae242b.js";import{f as M}from"./formatSystem-1203ad16.js";import{f as N}from"./formatWarehouse-aebb7b18.js";import{c as R,S as q}from"./style-b9bc59b4.js";import{s as Y}from"./common-938b41ea.js";import{i as Z}from"./i18n-0af8b262.js";import{d as W,b as d,c as y,r as g,w as $,a as s,x as J,v as K,s as l,q as t,u as _,as as Q,ap as r,y as h,at as m,ac as X}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const te={class:"dataTable"},ae=W({__name:"location-select",props:{showDialog:{type:Boolean}},emits:["close","sureSelect"],setup(P,{emit:f}){const C=P,b=d(),u=y(()=>C.showDialog),a=g({tableData:[],tablePage:g({total:0,pageIndex:1,pageSize:B,searchObjects:d([])}),searchForm:{location_name:""},timer:d(null)}),n=g({handlePageChange:d(({currentPage:e,pageSize:i})=>{a.tablePage.pageIndex=e,a.tablePage.pageSize=i,n.getList()}),sureSearch:()=>{a.tablePage.searchObjects=Y(a.searchForm),n.getList()},getList:async()=>{const{data:e}=await j(a.tablePage);if(!e.isSuccess){A.$message({type:"error",content:e.errorMessage});return}a.tableData=e.data.rows,a.tablePage.total=e.data.totals},resetForm:()=>{for(const e in a.searchForm){const i=e;a.searchForm[i]=""}a.tablePage.searchObjects=[]},submit:()=>{const e=b.value.getCheckboxRecords();f("sureSelect",e),n.closeDialog()},closeDialog:()=>{f("close")}}),k=y(()=>R({}));return $(()=>u.value,e=>{e&&n.getList()}),$(()=>a.searchForm,()=>{a.timer&&clearTimeout(a.timer),a.timer=setTimeout(()=>{a.timer=null,n.sureSearch()},O)},{deep:!0}),(e,i)=>{const x=s("v-toolbar"),E=s("v-text-field"),T=s("v-form"),w=s("v-col"),o=s("vxe-column"),D=s("vxe-table"),F=s("v-row"),z=s("v-card-text"),v=s("v-btn"),L=s("v-card-actions"),V=s("v-card"),I=s("v-dialog");return J(),K(I,{modelValue:r(u),"onUpdate:modelValue":i[1]||(i[1]=c=>X(u)?u.value=c:null),width:"70%",transition:"dialog-top-transition",persistent:!0},{default:l(()=>[t(V,null,{default:l(()=>[t(x,{color:"white",title:`${e.$t("base.warehouseSetting.locationSelectModal")}`},null,8,["title"]),t(z,null,{default:l(()=>[t(F,null,{default:l(()=>[t(w,{cols:"3"},{default:l(()=>[_("div",{class:"searchForm",style:Q({height:r(k)})},[t(S,{icon:"mdi-refresh",size:"x-small","tooltip-text":e.$t("system.page.reset"),onClick:n.resetForm},null,8,["tooltip-text","onClick"]),t(S,{icon:"mdi-magnify",size:"x-small","tooltip-text":e.$t("system.page.confirm"),onClick:n.sureSearch},null,8,["tooltip-text","onClick"]),t(T,{ref:"formRef",class:"mt-4"},{default:l(()=>[t(E,{modelValue:a.searchForm.location_name,"onUpdate:modelValue":i[0]||(i[0]=c=>a.searchForm.location_name=c),label:e.$t("base.warehouseSetting.location_name"),variant:"outlined",density:"compact","hide-details":"",clearable:"",class:"mb-4"},null,8,["modelValue","label"])]),_:1},512)],4)]),_:1}),t(w,{cols:"9"},{default:l(()=>[_("div",te,[t(D,{ref_key:"xTable",ref:b,"column-config":{minWidth:"100px"},data:a.tableData,height:r(q).SELECT_TABLE,align:"center"},{empty:l(()=>[h(m(r(Z).global.t("system.page.noData")),1)]),default:l(()=>[t(o,{type:"seq",width:"60"}),t(o,{type:"checkbox",width:"50"}),t(o,{field:"warehouse_name",title:e.$t("base.warehouseSetting.warehouse_name")},null,8,["title"]),t(o,{field:"warehouse_area_name",title:e.$t("base.warehouseSetting.area_name")},null,8,["title"]),t(o,{field:"warehouse_area_property",title:e.$t("base.warehouseSetting.area_property")},{default:l(({row:c,column:p})=>[_("span",null,m(r(N)(c[p.property])),1)]),_:1},8,["title"]),t(o,{field:"location_name",title:e.$t("base.warehouseSetting.location_name")},null,8,["title"]),t(o,{width:"150px",field:"location_length",title:e.$t("base.warehouseSetting.location_length")},null,8,["title"]),t(o,{width:"150px",field:"location_width",title:e.$t("base.warehouseSetting.location_width")},null,8,["title"]),t(o,{width:"150px",field:"location_heigth",title:e.$t("base.warehouseSetting.location_heigth")},null,8,["title"]),t(o,{width:"150px",field:"location_volume",title:e.$t("base.warehouseSetting.location_volume")},null,8,["title"]),t(o,{width:"150px",field:"location_load",title:e.$t("base.warehouseSetting.location_load")},null,8,["title"]),t(o,{field:"roadway_number",title:e.$t("base.warehouseSetting.roadway_number")},null,8,["title"]),t(o,{field:"shelf_number",title:e.$t("base.warehouseSetting.shelf_number")},null,8,["title"]),t(o,{field:"layer_number",title:e.$t("base.warehouseSetting.layer_number")},null,8,["title"]),t(o,{field:"tag_number",title:e.$t("base.warehouseSetting.tag_number")},null,8,["title"]),t(o,{field:"is_valid",title:e.$t("base.warehouseSetting.is_valid")},{default:l(({row:c,column:p})=>[_("span",null,m(r(M)(c[p.property])),1)]),_:1},8,["title"])]),_:1},8,["data","height"]),t(G,{"current-page":a.tablePage.pageIndex,"page-size":a.tablePage.pageSize,perfect:"",total:a.tablePage.total,"page-sizes":r(U),layouts:r(H),onPageChange:n.handlePageChange},null,8,["current-page","page-size","total","page-sizes","layouts","onPageChange"])])]),_:1})]),_:1})]),_:1}),t(L,{class:"justify-end"},{default:l(()=>[t(v,{variant:"text",onClick:n.closeDialog},{default:l(()=>[h(m(e.$t("system.page.close")),1)]),_:1},8,["onClick"]),t(v,{color:"primary",variant:"text",onClick:n.submit},{default:l(()=>[h(m(e.$t("system.page.confirm")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});const pe=ee(ae,[["__scopeId","data-v-3972a023"]]);export{pe as l};
