import{u as F,f as S}from"./i18n-0af8b262.js";import{u as w,g as A}from"./index-cd6d6b34.js";import{s as b}from"./index-f4e4efab.js";import{r as C}from"./index-827f2091.js";import{d as L,r as y,a as f,x as _,m,q as c,s as h,aR as I,O as B,b0 as D,v as E,y as N,at as j,as as P}from"./runtime-core.esm-bundler-1bbee395.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";class i{constructor(){this._dataLength=0,this._bufferLength=0,this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashStr(r,n=!1){return this.onePassHasher.start().appendStr(r).end(n)}static hashAsciiStr(r,n=!1){return this.onePassHasher.start().appendAsciiStr(r).end(n)}static _hex(r){const n=i.hexChars,s=i.hexOut;let t,e,a,o;for(o=0;o<4;o+=1)for(e=o*8,t=r[o],a=0;a<8;a+=2)s[e+1+a]=n.charAt(t&15),t>>>=4,s[e+0+a]=n.charAt(t&15),t>>>=4;return s.join("")}static _md5cycle(r,n){let s=r[0],t=r[1],e=r[2],a=r[3];s+=(t&e|~t&a)+n[0]-680876936|0,s=(s<<7|s>>>25)+t|0,a+=(s&t|~s&e)+n[1]-389564586|0,a=(a<<12|a>>>20)+s|0,e+=(a&s|~a&t)+n[2]+606105819|0,e=(e<<17|e>>>15)+a|0,t+=(e&a|~e&s)+n[3]-1044525330|0,t=(t<<22|t>>>10)+e|0,s+=(t&e|~t&a)+n[4]-176418897|0,s=(s<<7|s>>>25)+t|0,a+=(s&t|~s&e)+n[5]+1200080426|0,a=(a<<12|a>>>20)+s|0,e+=(a&s|~a&t)+n[6]-1473231341|0,e=(e<<17|e>>>15)+a|0,t+=(e&a|~e&s)+n[7]-45705983|0,t=(t<<22|t>>>10)+e|0,s+=(t&e|~t&a)+n[8]+1770035416|0,s=(s<<7|s>>>25)+t|0,a+=(s&t|~s&e)+n[9]-1958414417|0,a=(a<<12|a>>>20)+s|0,e+=(a&s|~a&t)+n[10]-42063|0,e=(e<<17|e>>>15)+a|0,t+=(e&a|~e&s)+n[11]-1990404162|0,t=(t<<22|t>>>10)+e|0,s+=(t&e|~t&a)+n[12]+1804603682|0,s=(s<<7|s>>>25)+t|0,a+=(s&t|~s&e)+n[13]-40341101|0,a=(a<<12|a>>>20)+s|0,e+=(a&s|~a&t)+n[14]-1502002290|0,e=(e<<17|e>>>15)+a|0,t+=(e&a|~e&s)+n[15]+1236535329|0,t=(t<<22|t>>>10)+e|0,s+=(t&a|e&~a)+n[1]-165796510|0,s=(s<<5|s>>>27)+t|0,a+=(s&e|t&~e)+n[6]-1069501632|0,a=(a<<9|a>>>23)+s|0,e+=(a&t|s&~t)+n[11]+643717713|0,e=(e<<14|e>>>18)+a|0,t+=(e&s|a&~s)+n[0]-373897302|0,t=(t<<20|t>>>12)+e|0,s+=(t&a|e&~a)+n[5]-701558691|0,s=(s<<5|s>>>27)+t|0,a+=(s&e|t&~e)+n[10]+38016083|0,a=(a<<9|a>>>23)+s|0,e+=(a&t|s&~t)+n[15]-660478335|0,e=(e<<14|e>>>18)+a|0,t+=(e&s|a&~s)+n[4]-405537848|0,t=(t<<20|t>>>12)+e|0,s+=(t&a|e&~a)+n[9]+568446438|0,s=(s<<5|s>>>27)+t|0,a+=(s&e|t&~e)+n[14]-1019803690|0,a=(a<<9|a>>>23)+s|0,e+=(a&t|s&~t)+n[3]-187363961|0,e=(e<<14|e>>>18)+a|0,t+=(e&s|a&~s)+n[8]+1163531501|0,t=(t<<20|t>>>12)+e|0,s+=(t&a|e&~a)+n[13]-1444681467|0,s=(s<<5|s>>>27)+t|0,a+=(s&e|t&~e)+n[2]-51403784|0,a=(a<<9|a>>>23)+s|0,e+=(a&t|s&~t)+n[7]+1735328473|0,e=(e<<14|e>>>18)+a|0,t+=(e&s|a&~s)+n[12]-1926607734|0,t=(t<<20|t>>>12)+e|0,s+=(t^e^a)+n[5]-378558|0,s=(s<<4|s>>>28)+t|0,a+=(s^t^e)+n[8]-2022574463|0,a=(a<<11|a>>>21)+s|0,e+=(a^s^t)+n[11]+1839030562|0,e=(e<<16|e>>>16)+a|0,t+=(e^a^s)+n[14]-35309556|0,t=(t<<23|t>>>9)+e|0,s+=(t^e^a)+n[1]-1530992060|0,s=(s<<4|s>>>28)+t|0,a+=(s^t^e)+n[4]+1272893353|0,a=(a<<11|a>>>21)+s|0,e+=(a^s^t)+n[7]-155497632|0,e=(e<<16|e>>>16)+a|0,t+=(e^a^s)+n[10]-1094730640|0,t=(t<<23|t>>>9)+e|0,s+=(t^e^a)+n[13]+681279174|0,s=(s<<4|s>>>28)+t|0,a+=(s^t^e)+n[0]-358537222|0,a=(a<<11|a>>>21)+s|0,e+=(a^s^t)+n[3]-722521979|0,e=(e<<16|e>>>16)+a|0,t+=(e^a^s)+n[6]+76029189|0,t=(t<<23|t>>>9)+e|0,s+=(t^e^a)+n[9]-640364487|0,s=(s<<4|s>>>28)+t|0,a+=(s^t^e)+n[12]-421815835|0,a=(a<<11|a>>>21)+s|0,e+=(a^s^t)+n[15]+530742520|0,e=(e<<16|e>>>16)+a|0,t+=(e^a^s)+n[2]-995338651|0,t=(t<<23|t>>>9)+e|0,s+=(e^(t|~a))+n[0]-198630844|0,s=(s<<6|s>>>26)+t|0,a+=(t^(s|~e))+n[7]+1126891415|0,a=(a<<10|a>>>22)+s|0,e+=(s^(a|~t))+n[14]-1416354905|0,e=(e<<15|e>>>17)+a|0,t+=(a^(e|~s))+n[5]-57434055|0,t=(t<<21|t>>>11)+e|0,s+=(e^(t|~a))+n[12]+1700485571|0,s=(s<<6|s>>>26)+t|0,a+=(t^(s|~e))+n[3]-1894986606|0,a=(a<<10|a>>>22)+s|0,e+=(s^(a|~t))+n[10]-1051523|0,e=(e<<15|e>>>17)+a|0,t+=(a^(e|~s))+n[1]-2054922799|0,t=(t<<21|t>>>11)+e|0,s+=(e^(t|~a))+n[8]+1873313359|0,s=(s<<6|s>>>26)+t|0,a+=(t^(s|~e))+n[15]-30611744|0,a=(a<<10|a>>>22)+s|0,e+=(s^(a|~t))+n[6]-1560198380|0,e=(e<<15|e>>>17)+a|0,t+=(a^(e|~s))+n[13]+1309151649|0,t=(t<<21|t>>>11)+e|0,s+=(e^(t|~a))+n[4]-145523070|0,s=(s<<6|s>>>26)+t|0,a+=(t^(s|~e))+n[11]-1120210379|0,a=(a<<10|a>>>22)+s|0,e+=(s^(a|~t))+n[2]+718787259|0,e=(e<<15|e>>>17)+a|0,t+=(a^(e|~s))+n[9]-343485551|0,t=(t<<21|t>>>11)+e|0,r[0]=s+r[0]|0,r[1]=t+r[1]|0,r[2]=e+r[2]|0,r[3]=a+r[3]|0}start(){return this._dataLength=0,this._bufferLength=0,this._state.set(i.stateIdentity),this}appendStr(r){const n=this._buffer8,s=this._buffer32;let t=this._bufferLength,e,a;for(a=0;a<r.length;a+=1){if(e=r.charCodeAt(a),e<128)n[t++]=e;else if(e<2048)n[t++]=(e>>>6)+192,n[t++]=e&63|128;else if(e<55296||e>56319)n[t++]=(e>>>12)+224,n[t++]=e>>>6&63|128,n[t++]=e&63|128;else{if(e=(e-55296)*1024+(r.charCodeAt(++a)-56320)+65536,e>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");n[t++]=(e>>>18)+240,n[t++]=e>>>12&63|128,n[t++]=e>>>6&63|128,n[t++]=e&63|128}t>=64&&(this._dataLength+=64,i._md5cycle(this._state,s),t-=64,s[0]=s[16])}return this._bufferLength=t,this}appendAsciiStr(r){const n=this._buffer8,s=this._buffer32;let t=this._bufferLength,e,a=0;for(;;){for(e=Math.min(r.length-a,64-t);e--;)n[t++]=r.charCodeAt(a++);if(t<64)break;this._dataLength+=64,i._md5cycle(this._state,s),t=0}return this._bufferLength=t,this}appendByteArray(r){const n=this._buffer8,s=this._buffer32;let t=this._bufferLength,e,a=0;for(;;){for(e=Math.min(r.length-a,64-t);e--;)n[t++]=r[a++];if(t<64)break;this._dataLength+=64,i._md5cycle(this._state,s),t=0}return this._bufferLength=t,this}getState(){const r=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[r[0],r[1],r[2],r[3]]}}setState(r){const n=r.buffer,s=r.state,t=this._state;let e;for(this._dataLength=r.length,this._bufferLength=r.buflen,t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],e=0;e<n.length;e+=1)this._buffer8[e]=n.charCodeAt(e)}end(r=!1){const n=this._bufferLength,s=this._buffer8,t=this._buffer32,e=(n>>2)+1;this._dataLength+=n;const a=this._dataLength*8;if(s[n]=128,s[n+1]=s[n+2]=s[n+3]=0,t.set(i.buffer32Identity.subarray(e),e),n>55&&(i._md5cycle(this._state,t),t.set(i.buffer32Identity)),a<=4294967295)t[14]=a;else{const o=a.toString(16).match(/(.*?)(.{0,8})$/);if(o===null)return;const g=parseInt(o[2],16),d=parseInt(o[1],16)||0;t[14]=g,t[15]=d}return i._md5cycle(this._state,t),r?this._state:i._hex(this._state)}}i.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]);i.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);i.hexChars="0123456789abcdef";i.hexOut=[];i.onePassHasher=new i;if(i.hashStr("hello")!=="5d41402abc4b2a76b9719d911017c592")throw new Error("Md5 self test failed.");const H={class:"languageIcon"},O=L({__name:"languages",setup(l){const{locale:r}=F(),{current:n}=w(),s=y({showLanguage:!1,languageList:[{title:"简体中文",value:"zh"},{title:"繁體中文",value:"tw"},{title:"English",value:"en"}]}),t=y({changeLanguage:e=>{b.getters["system/language"]!==e&&(localStorage.setItem("language",e),b.commit("system/setLanguage",e),r.value=S(e),n.value=A(e),["/","/login"].includes(C.currentRoute.value.path)||b.commit("system/setRefreshFlag",!0))}});return(e,a)=>{const o=f("v-icon"),g=f("v-list-item-title"),d=f("v-list-item"),x=f("v-list"),v=f("v-menu");return _(),m("div",H,[c(v,null,{activator:h(({props:u})=>[c(o,I({icon:"mdi-web",color:"#666666"},u),null,16)]),default:h(()=>[c(x,null,{default:h(()=>[(_(!0),m(B,null,D(s.languageList,(u,p)=>(_(),E(d,{key:p,value:p,onClick:T=>t.changeLanguage(u.value)},{default:h(()=>[c(g,null,{default:h(()=>[N(j(u.title),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1})])}}});const J=U(O,[["__scopeId","data-v-d169c6d5"]]),R="/assets/WMSTitle-745ff38b.png",K=L({__name:"logo",props:{height:{type:Number,default:80},top:{type:Number,default:20},left:{type:Number,default:20}},setup(l){return(r,n)=>(_(),m("img",{class:"SysTitleLogo",style:P({height:l.height+"px",top:l.top+"px",left:l.left+"px"}),src:R},null,4))}});export{J as L,i as M,K as _};
