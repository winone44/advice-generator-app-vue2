(function(){"use strict";var e={1163:function(e,t,i){var n=i(6848),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],s=i(1656),a={},c=(0,s.A)(a,r,o,!1,null,null,null),l=c.exports,u=i(6178),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("AdviceComponent")],1)},v=[],p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"advice-container"},[t("div",{staticClass:"advice-header"},[t("p",{staticClass:"advice-number"},[e._v("ADVICE #"+e._s(e.$store.getters.getSlip.id))])]),t("div",{ref:"textContainer",staticClass:"advice-content"},[t("p",{ref:"textContent",staticClass:"advice-text"},[e._v(" “"+e._s(e.text)+"” ")])]),t("div",{staticClass:"pattern-divider"},[t("picture",[t("source",{attrs:{media:"(max-width: 413px)",srcset:"/img/pattern-divider-mobile.svg"}}),t("img",{attrs:{src:e.CDN("/img/pattern-divider-desktop.svg"),alt:"Responsive Image"}})])]),t("div",{staticClass:"background-dice",on:{click:e.getAdvice}},[t("div",{staticClass:"dice"},[t("img",{attrs:{src:e.CDN("/img/icon-dice.svg"),alt:"dice"}})])])])},f=[],h={computed:{text(){return this.$store.getters.getSlip.advice}},methods:{async getAdvice(){await this.$store.dispatch("getAdvice")},adjustFontSize(){const e=this.$refs.textContainer,t=this.$refs.textContent,i=parseFloat(window.getComputedStyle(t).fontSize),n=window.innerWidth<413?24:28;let r=i;t.style.fontSize=i+"px";while(t.scrollHeight<=e.clientHeight&&r<n)r+=1,t.style.fontSize=r+"px";while(t.scrollHeight>e.clientHeight&&r>12)r-=1,t.style.fontSize=r+"px"}},mounted(){this.adjustFontSize(),window.addEventListener("resize",this.adjustFontSize)},beforeDestroy(){window.removeEventListener("resize",this.adjustFontSize)},watch:{text(){this.$nextTick(this.adjustFontSize)}},async created(){await this.$store.dispatch("getAdvice")}},g=h,m=(0,s.A)(g,p,f,!1,null,"345fb4eb",null),y=m.exports,w={name:"HomeView",components:{AdviceComponent:y}},b=w,x=(0,s.A)(b,d,v,!1,null,"254466e0",null),A=x.exports;n.Ay.use(u.Ay);const C=[{path:"/",name:"home",component:A}],_=new u.Ay({mode:"hash",base:"/advice-generator-app-vue2/",routes:C});var S=_,j=i(3518),O=i(4373);n.Ay.use(j.Ay);const z=O.A.create({baseURL:"https://api.adviceslip.com/"});var k=new j.Ay.Store({state:{slip:{id:null,advice:null}},getters:{getSlip:e=>null===e.slip?{id:0,advice:""}:e.slip},mutations:{setAdvice(e,t){t.slip?e.slip=t.slip:(e.slip.id=t.message.type,e.slip.advice=t.message.text)}},actions:{async getAdvice({commit:e}){const t=1,i=224,n=Math.floor(Math.random()*(i-t+1))+t;try{let{data:t}=await z.get(`advice/${n}`);e("setAdvice",t),console.log(t)}catch(r){console.log(r)}}},modules:{}}),$={methods:{CDN(e){return"/advice-generator-app-vue2"+e}}};n.Ay.config.productionTip=!1,n.Ay.mixin($),new n.Ay({router:S,store:k,render:e=>e(l)}).$mount("#app")}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,o){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,s=n[0],a=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(c)var u=c(i)}for(t&&t(n);l<s.length;l++)o=s[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},n=self["webpackChunkadvice_generator_app_vue2"]=self["webpackChunkadvice_generator_app_vue2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(1163)}));n=i.O(n)})();
//# sourceMappingURL=app.a5c2d3e9.js.map