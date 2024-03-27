import{i as l}from"./i18n-0af8b262.js";import{a as c}from"./index-cd6d6b34.js";import{I as b,S as k}from"./formRule-3feb276f.js";import{e as A}from"./style-b9bc59b4.js";import{_ as T}from"./tooltip-btn.vue_vue_type_script_setup_true_lang-fc6ce76f.js";import{d as B,b as h,r as D,a,x as _,v as w,s,q as o,m as U,b0 as F,O as R,y as u,at as N,u as Z,ap as j}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-f4e4efab.js";const E={class:"detailBtnContainer"},M=B({__name:"add-sorting",emits:["sure"],setup(O,{expose:$,emit:x}){const p=h(),t=D({showDialog:!1,staticDetailQty:1,form:h({asn_id:0,sorted_qty:0}),SNList:[],rules:{sorted_qty:[e=>!!e||`${l.global.t("system.checkText.mustInput")}${l.global.t("wms.stockAsnInfo.sorted_qty")}!`,e=>b(e,"greaterThanZero")===""||b(e,"greaterThanZero")],series_number:[e=>!!e||`${l.global.t("system.checkText.mustInput")}${l.global.t("wms.stockAsnInfo.series_number")}!`,e=>k(e,0,64)===""||k(e,0,64)]}}),i=D({removeItem:e=>{c.$dialog({content:l.global.t("system.tips.beforeDeleteDetailMessage"),handleConfirm:async()=>{t.SNList.splice(e,1)}})},insertSNData:()=>{t.SNList.push({snNum:""})},openDialog:async e=>{t.form={asn_id:e,sorted_qty:0},t.SNList=[],t.showDialog=!0},closeDialog:()=>{t.showDialog=!1},submit:async()=>{if(t.SNList.length>t.form.sorted_qty){c.$message({type:"error",content:l.global.t("wms.stockAsnInfo.exceedingPrompt")});return}const{valid:e}=await p.value.validate();if(e){const n=[];for(const m of t.SNList)n.push({asn_id:t.form.asn_id,series_number:m.snNum,sorted_qty:1});if(t.SNList.length!==t.form.sorted_qty){const m=t.form.sorted_qty-t.SNList.length;n.push({asn_id:t.form.asn_id,series_number:"",sorted_qty:m})}x("sure",n)}else c.$message({type:"error",content:l.global.t("system.checkText.checkFormFail")})}});return $({openDialog:i.openDialog,closeDialog:i.closeDialog}),(e,n)=>{const m=a("v-toolbar"),f=a("v-text-field"),g=a("v-col"),S=a("v-row"),d=a("v-btn"),q=a("v-form"),C=a("v-card-text"),I=a("v-card-actions"),V=a("v-card"),L=a("v-dialog");return _(),w(L,{modelValue:t.showDialog,"onUpdate:modelValue":n[2]||(n[2]=r=>t.showDialog=r),width:"50%",transition:"dialog-top-transition",persistent:!0},{default:s(()=>[o(V,null,{default:s(()=>[o(m,{color:"white",title:`${e.$t("wms.stockAsn.tabNotice")}`},null,8,["title"]),o(C,null,{default:s(()=>[o(q,{ref_key:"formRef",ref:p},{default:s(()=>[o(f,{modelValue:t.form.sorted_qty,"onUpdate:modelValue":n[0]||(n[0]=r=>t.form.sorted_qty=r),label:e.$t("wms.stockAsnInfo.sorted_qty"),rules:t.rules.sorted_qty,variant:"outlined"},null,8,["modelValue","label","rules"]),(_(!0),U(R,null,F(t.SNList,(r,y)=>(_(),w(S,{key:y,style:{"margin-top":"5px"}},{default:s(()=>[o(g,{cols:10},{default:s(()=>[o(f,{modelValue:r.snNum,"onUpdate:modelValue":v=>r.snNum=v,label:e.$t("wms.stockAsnInfo.series_number"),rules:t.rules.series_number,variant:"outlined"},null,8,["modelValue","onUpdate:modelValue","label","rules"])]),_:2},1024),o(g,{cols:2},{default:s(()=>[Z("div",E,[o(T,{flat:!0,icon:"mdi-delete-outline","tooltip-text":e.$t("system.page.delete"),"icon-color":j(A),onClick:v=>i.removeItem(y)},null,8,["tooltip-text","icon-color","onClick"])])]),_:2},1024)]),_:2},1024))),128)),o(d,{style:{"font-size":"20px","margin-bottom":"15px","margin-top":"10px",float:"right"},color:"primary",width:40,onClick:n[1]||(n[1]=r=>i.insertSNData())},{default:s(()=>[u(" + ")]),_:1})]),_:1},512)]),_:1}),o(I,{class:"justify-end"},{default:s(()=>[o(d,{variant:"text",onClick:i.closeDialog},{default:s(()=>[u(N(e.$t("system.page.close")),1)]),_:1},8,["onClick"]),o(d,{color:"primary",variant:"text",onClick:i.submit},{default:s(()=>[u(N(e.$t("system.page.submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});const Y=z(M,[["__scopeId","data-v-0d5410d0"]]);export{Y as default};
