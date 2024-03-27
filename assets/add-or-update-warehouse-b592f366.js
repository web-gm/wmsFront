import{i as r}from"./i18n-0af8b262.js";import{a as f}from"./index-cd6d6b34.js";import{f as B,h as F}from"./warehouseSetting-835f9e1c.js";import{S as s}from"./formRule-3feb276f.js";import{r as I}from"./common-938b41ea.js";import{d as N,b as v,c as w,r as y,w as O,a as n,x as R,v as W,s as u,q as l,y as V,at as h,ap as j,ac as q}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./request-e1053d5a.js";import"./index-f4e4efab.js";import"./index-827f2091.js";import"./vue-router-1283ad2d.js";import"./index-ae8f073f.js";const M=N({__name:"add-or-update-warehouse",props:{showDialog:{type:Boolean},form:null},emits:["close","saveSuccess"],setup($,{emit:b}){const m=$,_=v(),d=w(()=>m.showDialog),S=w(()=>m.form.id&&m.form.id>0?"update":"add"),a=y({form:v({id:0,warehouse_name:"",city:"",address:"",contact_tel:"",email:"",manager:"",is_valid:!0}),rules:{warehouse_name:[e=>!!e||`${r.global.t("system.checkText.mustInput")}${r.global.t("base.warehouseSetting.warehouse_name")}!`,e=>s(e,0,32)===""||s(e,0,32)],city:[e=>!!e||`${r.global.t("system.checkText.mustInput")}${r.global.t("base.warehouseSetting.city")}!`,e=>s(e,0,128)===""||s(e,0,128)],address:[e=>!!e||`${r.global.t("system.checkText.mustInput")}${r.global.t("base.warehouseSetting.address")}!`,e=>s(e,0,256)===""||s(e,0,256)],contact_tel:[e=>s(e,0,64)===""||s(e,0,64)],email:[e=>s(e,0,128)===""||s(e,0,128)],manager:[e=>s(e,0,64)===""||s(e,0,64)],is_valid:[]}}),p=y({closeDialog:()=>{b("close")},initForm:()=>{a.form=m.form},submit:async()=>{const{valid:e}=await _.value.validate();if(e){const t=I(a.form),{data:c}=S.value==="add"?await B(t):await F(t);if(!c.isSuccess){f.$message({type:"error",content:c.errorMessage});return}f.$message({type:"success",content:`${r.global.t("system.page.submit")}${r.global.t("system.tips.success")}`}),b("saveSuccess")}else f.$message({type:"error",content:r.global.t("system.checkText.checkFormFail")})}});return O(()=>d.value,e=>{e&&p.initForm()}),(e,t)=>{const c=n("v-toolbar"),i=n("v-text-field"),k=n("v-switch"),U=n("v-form"),C=n("v-card-text"),g=n("v-btn"),x=n("v-card-actions"),D=n("v-card"),T=n("v-dialog");return R(),W(T,{modelValue:j(d),"onUpdate:modelValue":t[7]||(t[7]=o=>q(d)?d.value=o:null),width:"30%",transition:"dialog-top-transition",persistent:!0},{default:u(()=>[l(D,null,{default:u(()=>[l(c,{color:"white",title:`${e.$t("router.sideBar.warehouseSetting")}`},null,8,["title"]),l(C,null,{default:u(()=>[l(U,{ref_key:"formRef",ref:_},{default:u(()=>[l(i,{modelValue:a.form.warehouse_name,"onUpdate:modelValue":t[0]||(t[0]=o=>a.form.warehouse_name=o),label:e.$t("base.warehouseSetting.warehouse_name"),rules:a.rules.warehouse_name,variant:"outlined",clearable:""},null,8,["modelValue","label","rules"]),l(i,{modelValue:a.form.city,"onUpdate:modelValue":t[1]||(t[1]=o=>a.form.city=o),label:e.$t("base.warehouseSetting.city"),rules:a.rules.city,variant:"outlined",clearable:""},null,8,["modelValue","label","rules"]),l(i,{modelValue:a.form.address,"onUpdate:modelValue":t[2]||(t[2]=o=>a.form.address=o),label:e.$t("base.warehouseSetting.address"),rules:a.rules.address,variant:"outlined",clearable:""},null,8,["modelValue","label","rules"]),l(i,{modelValue:a.form.contact_tel,"onUpdate:modelValue":t[3]||(t[3]=o=>a.form.contact_tel=o),label:e.$t("base.warehouseSetting.contact_tel"),rules:a.rules.contact_tel,variant:"outlined",clearable:""},null,8,["modelValue","label","rules"]),l(i,{modelValue:a.form.email,"onUpdate:modelValue":t[4]||(t[4]=o=>a.form.email=o),label:e.$t("base.warehouseSetting.email"),rules:a.rules.email,variant:"outlined",clearable:""},null,8,["modelValue","label","rules"]),l(i,{modelValue:a.form.manager,"onUpdate:modelValue":t[5]||(t[5]=o=>a.form.manager=o),label:e.$t("base.warehouseSetting.manager"),rules:a.rules.manager,variant:"outlined",clearable:""},null,8,["modelValue","label","rules"]),l(k,{modelValue:a.form.is_valid,"onUpdate:modelValue":t[6]||(t[6]=o=>a.form.is_valid=o),color:"primary",label:e.$t("base.warehouseSetting.is_valid"),rules:a.rules.is_valid},null,8,["modelValue","label","rules"])]),_:1},512)]),_:1}),l(x,{class:"justify-end"},{default:u(()=>[l(g,{variant:"text",onClick:p.closeDialog},{default:u(()=>[V(h(e.$t("system.page.close")),1)]),_:1},8,["onClick"]),l(g,{color:"primary",variant:"text",onClick:p.submit},{default:u(()=>[V(h(e.$t("system.page.submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});const ee=L(M,[["__scopeId","data-v-eb47c4d0"]]);export{ee as default};
