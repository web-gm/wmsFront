import{i as a}from"./i18n-0af8b262.js";import{a as c}from"./index-cd6d6b34.js";import{g as I,a as B,u as O}from"./userManagement-c79709d8.js";import{S as m}from"./formRule-3feb276f.js";import{r as N}from"./common-938b41ea.js";import{d as R,b as p,c as $,r as V,w as j,a as n,x as F,v as q,s as u,q as l,y as k,at as w,ap as L,ac as z}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import"./request-e1053d5a.js";import"./index-f4e4efab.js";import"./index-827f2091.js";import"./vue-router-1283ad2d.js";import"./index-ae8f073f.js";const E=R({__name:"add-or-update-user",props:{showDialog:{type:Boolean},form:null},emits:["close","saveSuccess"],setup(M,{emit:f}){const i=M,g=p(),d=$(()=>i.showDialog),v=$(()=>i.form.id&&i.form.id>0?"update":"add"),o=V({form:p({id:0,user_num:"",user_name:"",contact_tel:"",is_valid:!0}),rules:{user_num:[e=>!!e||`${a.global.t("system.checkText.mustInput")}${a.global.t("base.userManagement.user_num")}!`,e=>m(e,0,128)===""||m(e,0,128)],user_name:[e=>!!e||`${a.global.t("system.checkText.mustInput")}${a.global.t("base.userManagement.user_name")}!`,e=>m(e,0,128)===""||m(e,0,128)],user_role:[e=>!!e||`${a.global.t("system.checkText.mustInput")}${a.global.t("base.userManagement.user_role")}!`],sex:[e=>!!e||`${a.global.t("system.checkText.mustInput")}${a.global.t("base.userManagement.sex")}!`],contact_tel:[e=>m(e,0,128)===""||m(e,0,64)],is_valid:[]},combobox:p({sex:[],user_role:[]})}),_=V({getCombobox:async()=>{const e=["male","female"];o.combobox.sex=[];for(const r of e)o.combobox.sex.push({label:a.global.t(`system.combobox.sex.${r}`),value:r});o.combobox.user_role=[];const{data:t}=await I();if(!!t.isSuccess)for(const r of t.data)switch(r.code){case"user_role":o.combobox.user_role.push(r.name);break}},closeDialog:()=>{f("close")},submit:async()=>{const{valid:e}=await g.value.validate();if(e){const t=N(o.form),{data:r}=v.value==="add"?await B(t):await O(t);if(!r.isSuccess){c.$message({type:"error",content:r.errorMessage});return}v.value==="add"?c.$dialog({content:a.global.t("base.userManagement.addSuccessTip")+r.errorMessage,handleConfirm:async()=>{}}):c.$message({type:"success",content:`${a.global.t("system.page.submit")}${a.global.t("system.tips.success")}`}),f("saveSuccess")}else c.$message({type:"error",content:a.global.t("system.checkText.checkFormFail")})}});return j(()=>d.value,e=>{e&&(_.getCombobox(),o.form=i.form)}),(e,t)=>{const r=n("v-toolbar"),b=n("v-text-field"),x=n("v-select"),U=n("v-switch"),C=n("v-form"),S=n("v-card-text"),y=n("v-btn"),h=n("v-card-actions"),T=n("v-card"),D=n("v-dialog");return F(),q(D,{modelValue:L(d),"onUpdate:modelValue":t[6]||(t[6]=s=>z(d)?d.value=s:null),width:"30%",transition:"dialog-top-transition",persistent:!0},{default:u(()=>[l(T,null,{default:u(()=>[l(r,{color:"white",title:`${e.$t("router.sideBar.userManagement")}`},null,8,["title"]),l(S,null,{default:u(()=>[l(C,{ref_key:"formRef",ref:g},{default:u(()=>[l(b,{modelValue:o.form.user_num,"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.user_num=s),label:e.$t("base.userManagement.user_num"),rules:o.rules.user_num,variant:"outlined"},null,8,["modelValue","label","rules"]),l(b,{modelValue:o.form.user_name,"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.user_name=s),label:e.$t("base.userManagement.user_name"),rules:o.rules.user_name,variant:"outlined"},null,8,["modelValue","label","rules"]),l(x,{modelValue:o.form.user_role,"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.user_role=s),items:o.combobox.user_role,rules:o.rules.user_role,label:e.$t("base.userManagement.user_role"),variant:"outlined",clearable:""},null,8,["modelValue","items","rules","label"]),l(x,{modelValue:o.form.sex,"onUpdate:modelValue":t[3]||(t[3]=s=>o.form.sex=s),items:o.combobox.sex,"item-title":"label","item-value":"value",rules:o.rules.sex,label:e.$t("base.userManagement.sex"),variant:"outlined",clearable:""},null,8,["modelValue","items","rules","label"]),l(b,{modelValue:o.form.contact_tel,"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.contact_tel=s),label:e.$t("base.userManagement.contact_tel"),rules:o.rules.contact_tel,variant:"outlined"},null,8,["modelValue","label","rules"]),l(U,{modelValue:o.form.is_valid,"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.is_valid=s),color:"primary",label:e.$t("base.userManagement.is_valid"),rules:o.rules.is_valid},null,8,["modelValue","label","rules"])]),_:1},512)]),_:1}),l(h,{class:"justify-end"},{default:u(()=>[l(y,{variant:"text",onClick:_.closeDialog},{default:u(()=>[k(w(e.$t("system.page.close")),1)]),_:1},8,["onClick"]),l(y,{color:"primary",variant:"text",onClick:_.submit},{default:u(()=>[k(w(e.$t("system.page.submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});const te=A(E,[["__scopeId","data-v-deb94e11"]]);export{te as default};
