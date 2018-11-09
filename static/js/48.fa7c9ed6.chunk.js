(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{7496:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return b});var r=n(0),a=n.n(r),i=n(7489),o=n(12),l=n(7527),d=n(37),c=n(9);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const m=o.a`
  outline: none;
  margin: ${c.c.MarginAroundFormComponents};
`,p=o.a`
  border: '1px red solid';
`,f=o.b.input.withConfig({displayName:"FormInputStyled"})`
  ${m};
  ${({invalid:e})=>e&&p};
`,b=a.a.forwardRef((e,t)=>{var{field:n,inputWidth:r=c.c.DefaultInputWidth,inputWidthUnit:o=c.c.DefaultSizeUnit,isRequired:m,validatioName:p,validate:b}=e,g=u(e,["field","inputWidth","inputWidthUnit","isRequired","validatioName","validate"]);return a.a.createElement(i.Field,{field:n,validate:b||(e=>m&&Object(l.isEmpty)(e+"")?d.d._("{validatioName} is required",{validatioName:p}):null)},e=>a.a.createElement(f,s({width:`${r}${o}`,value:e.value||0===e.value?e.value:"",onChange:t=>{e.setTouched(!0),e.setValue(t.target.value)},ref:t},g)))})},7553:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var r=n(7527),a=n(37);function i(e){return!e.errors||0===Object.keys(e.errors).length}function o(e){return t=>Object(r.isEmpty)(t+"")?a.d._("{fieldName} must be entered",{fieldName:e}):null}},7602:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),i=n(7553),o=n(261),l=n(9);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const s=e=>{var{children:t,form:n}=e,r=c(e,["children","form"]);return a.a.createElement(o.a,d({color:l.a.green,disabled:!Object(i.a)(n)||n.submitting,onClick:e=>{e.preventDefault(),n.submitForm(e)}},r),t)}},7611:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(12),a=n(7612),i=n.n(a),o=n(7613),l=n.n(o);const d=r.b.div.withConfig({displayName:"LoginPageBackground"})`
  width: 100vw;
  height: 100vh;
  background-image: url(${i.a});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 2.6/2),
    only screen and (min-device-pixel-ratio: 1.3),
    only screen and (min-width: 1024px) {
    background-image: url(${l.a});
  }
`},7612:function(e,t,n){e.exports=n.p+"static/media/bg_login.382d98be.jpg"},7613:function(e,t,n){e.exports=n.p+"static/media/bg_login@2x.35ab1818.jpg"},7934:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(14),o=n(52),l=n(285),d=n(7611),c=n(104),s=n(37),u=n(60),m=n(7874),p=n.n(m),f=n(12),b=n(9);const g=f.b.div.withConfig({displayName:"NotifyMessageStyled"})`
  color: white;
  text-align: center;
  margin: 0.8rem 0.5rem 0.5rem 0.5rem;
  font-size: 1.375rem;
`,v=({children:e,isVisible:t,isError:n=!1,onClick:r})=>t?a.a.createElement(p.a,{onClick:r,width:"60%",height:"3.46rem",opacity:"0.4",left:"20%",blur:5,style:"border-radius: 1rem;",colorOverlay:n?b.a.red:b.a.green},a.a.createElement(g,{"data-testid":`notify${n?"-error":""}`},e)):null,y=({model:e})=>a.a.createElement(u.a,{render:()=>e.hasFailed?a.a.createElement(v,{isVisible:!0,isError:!0},e.errorMessage):null});var h=n(82),w=n(7489),E=n(7496),O=n(7602);const k=f.b.div.withConfig({displayName:"LoginContainerStyled"})`
  display: inline-block;
  margin: 0.5rem;
`,j=f.b.div.withConfig({displayName:"PasswordContainerStyled"})`
  margin: 0.5rem;
`,x=f.b.div.withConfig({displayName:"SubmitButtonContainerStyled"})`
  display: inline-block;
  width: 14rem;
  margin: 0.5rem;
`,N=({model:e})=>a.a.createElement(w.Form,{onSubmit:({username:t,password:n})=>e.requestToken(t,n),render:e=>a.a.createElement("form",{onSubmit:e.submitForm},a.a.createElement(k,null,a.a.createElement(E.b,{field:"username",name:"username",isRequired:!0,validatioName:s.d._("username"),autoFocus:!0,placeholder:s.d._("username")})),a.a.createElement(j,null,a.a.createElement(E.b,{field:"password",name:"password",isRequired:!0,validatioName:s.d._("password"),type:"password",placeholder:s.d._("password")})),a.a.createElement(x,null,a.a.createElement(O.a,{form:e},a.a.createElement(h.Trans,{id:"Sign-in"}))))});const C=({model:e})=>a.a.createElement(d.a,null,a.a.createElement(c.a,{title:s.d._("Login page")}),a.a.createElement(l.a,{layouts:[{i:"title",x:6,y:2,w:8,h:1},{i:"loginform",x:6,y:3,w:8,h:4}]},a.a.createElement("div",{key:"title"},a.a.createElement(c.a.Display,null)),a.a.createElement("div",{key:"loginform"},a.a.createElement(N,{model:e}))),a.a.createElement(y,{model:e}));n.d(t,"PasswordLoginRoute",function(){return S});const S=()=>{const{auth:e}=Object(o.c)();return e.isAuthenticatedUser?a.a.createElement(i.b,{to:"/"}):a.a.createElement(C,{model:e.provider.passwordLogin})};t.default=S}}]);
//# sourceMappingURL=48.fa7c9ed6.chunk.js.map