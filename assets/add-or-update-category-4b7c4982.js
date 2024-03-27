import{i as n}from"./i18n-0af8b262.js";import{a as u}from"./index-cd6d6b34.js";import{g as T,a as N,u as O}from"./commodityCategorySetting-2425a593.js";import{S as v}from"./formRule-3feb276f.js";import{r as R}from"./common-938b41ea.js";import{d as j,b as p,c as y,r as b,w as F,a,x as I,v as q,s as r,q as s,y as C,at as x,ap as A,ac as L}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import"./request-e1053d5a.js";import"./index-f4e4efab.js";import"./index-827f2091.js";import"./vue-router-1283ad2d.js";import"./index-ae8f073f.js";const z=j({__name:"add-or-update-category",props:{showDialog:{type:Boolean},form:null},emits:["close","saveSuccess"],setup($,{emit:_}){const m=$,f=p(),i=y(()=>m.showDialog),w=y(()=>m.form.id&&m.form.id>0?"update":"add"),o=b({form:p({id:0,category_name:""}),rules:{category_name:[e=>!!e||`${n.global.t("system.checkText.mustInput")}${n.global.t("base.commodityCategorySetting.category_name")}!`,e=>v(e,0,32)===""||v(e,0,32)],parent_id:[],is_valid:[]},combobox:p({parent:[]})}),d=b({getCombobox:async()=>{o.combobox.parent=[];const{data:e}=await T();if(!!e.isSuccess)for(const t of e.data)o.combobox.parent.push({label:t.category_name,value:t.id})},closeDialog:()=>{_("close")},submit:async()=>{const{valid:e}=await f.value.validate();if(e){const t=R(o.form),{data:c}=w.value==="add"?await N(t):await O(t);if(!c.isSuccess){u.$message({type:"error",content:c.errorMessage});return}u.$message({type:"success",content:`${n.global.t("system.page.submit")}${n.global.t("system.tips.success")}`}),_("saveSuccess")}else u.$message({type:"error",content:n.global.t("system.checkText.checkFormFail")})}});return F(()=>i.value,e=>{e&&(d.getCombobox(),o.form=m.form)}),(e,t)=>{const c=a("v-toolbar"),S=a("v-text-field"),k=a("v-select"),V=a("v-form"),h=a("v-card-text"),g=a("v-btn"),D=a("v-card-actions"),U=a("v-card"),B=a("v-dialog");return I(),q(B,{modelValue:A(i),"onUpdate:modelValue":t[2]||(t[2]=l=>L(i)?i.value=l:null),width:"30%",transition:"dialog-top-transition",persistent:!0},{default:r(()=>[s(U,null,{default:r(()=>[s(c,{color:"white",title:`${e.$t("router.sideBar.commodityCategorySetting")}`},null,8,["title"]),s(h,null,{default:r(()=>[s(V,{ref_key:"formRef",ref:f},{default:r(()=>[s(S,{modelValue:o.form.category_name,"onUpdate:modelValue":t[0]||(t[0]=l=>o.form.category_name=l),label:e.$t("base.commodityCategorySetting.category_name"),rules:o.rules.category_name,variant:"outlined"},null,8,["modelValue","label","rules"]),s(k,{modelValue:o.form.parent_id,"onUpdate:modelValue":t[1]||(t[1]=l=>o.form.parent_id=l),items:o.combobox.parent,"item-title":"label","item-value":"value",rules:o.rules.parent_id,label:e.$t("base.commodityCategorySetting.parent_name"),variant:"outlined",clearable:""},null,8,["modelValue","items","rules","label"])]),_:1},512)]),_:1}),s(D,{class:"justify-end"},{default:r(()=>[s(g,{variant:"text",onClick:d.closeDialog},{default:r(()=>[C(x(e.$t("system.page.close")),1)]),_:1},8,["onClick"]),s(g,{color:"primary",variant:"text",onClick:d.submit},{default:r(()=>[C(x(e.$t("system.page.submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});const te=M(z,[["__scopeId","data-v-4adffe56"]]);export{te as default};
