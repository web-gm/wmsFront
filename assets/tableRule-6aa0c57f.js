import{i as l}from"./i18n-0af8b262.js";function m(e,t){return e.hasOwnProperty("cellValue")&&(t=e.cellValue,e=e.rule),new Promise((a,r)=>{let s="";if(t===""||t==null)a(!0);else{let n=/^-?[0-9]\d*$/,o=2147483647,i=-2147483648;const c=e.length||32;c===8?(o=255,i=0):c===16&&(o=32767,i=-32768),e.validNumerical==="nonNegative"?(n=/^[0-9]\d*$/,s=">=0"):e.validNumerical==="greaterThanZero"?(n=/^[1-9]\d*$/,s=">0"):e.validNumerical==="noZero"&&(n=/^[-]?[1-9][0-9]*$/,s="!=0"),n.test(t)?t>o||t<i?r(new Error(`${l.global.t("system.checkText.mustInput")}${i}-${o}${l.global.t("system.checkText.integer")}`)):a(!0):r(new Error(`${l.global.t("system.checkText.mustInput")}${s}${l.global.t("system.checkText.integer")}`))}})}function $(e,t){return e.hasOwnProperty("cellValue")&&(t=e.cellValue,e=e.rule),new Promise((a,r)=>{if(t===""||t==null)a(!0);else{let s="",n=/^[-]?\d+(\.\d+)?$/;if(e.validNumerical==="nonNegative"?(n=/^\d+(\.\d+)?$/,s=">=0"):e.validNumerical==="greaterThanZero"&&(n=/^[+]{0,1}([1-9][0-9]{0,})$|^[+]{0,1}([1-9][0-9]{0,}\.\d+)$|^[+]{0,1}([0]\.(?!0+$)\d{1,})$/,s=">0"),!n.test(t))r(new Error(`${l.global.t("system.checkText.pleaseEnter")}${s}${l.global.t("system.checkText.decimal")}`));else{const i=e.length||18,c=e.decimalLength||2,g=t.toString().split(".");g.length>0&&g[0].length>i-c?r(new Error(`${l.global.t("system.checkText.pleaseEnter")}${i-c}${l.global.t("system.checkText.inputIntMsg")}`)):g.length>1&&g[1].length>c?r(new Error(`${l.global.t("system.checkText.pleaseEnter")}${c}${l.global.t("system.checkText.inputDecimalMsg")}`)):a(!0)}}})}export{m as a,$ as i};
