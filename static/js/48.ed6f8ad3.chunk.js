(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{7494:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return b});var r=n(0),i=n.n(r),a=n(7492),o=n(13),l=n(7510),d=n(38),c=n(10);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const m=o.a`
  outline: none;
  margin: ${c.c.MarginAroundFormComponents};
`,p=o.a`
  border: 1px red solid;
`,f=o.b.input.withConfig({displayName:"FormInputStyled"})`
  ${m};
  ${({invalid:e})=>e&&p};
`,b=i.a.forwardRef((e,t)=>{var{field:n,inputWidth:r=c.c.DefaultInputWidth,inputWidthUnit:o=c.c.DefaultSizeUnit,isRequired:m,validatioName:p,validationMessage:b,validate:g}=e,v=u(e,["field","inputWidth","inputWidthUnit","isRequired","validatioName","validationMessage","validate"]);return i.a.createElement(a.Field,{field:n,validate:g||(e=>m&&Object(l.isEmpty)(e+"")?b||d.d._("{validatioName} is required",{validatioName:p}):null)},e=>i.a.createElement(f,s({width:`${r}${o}`,value:e.value||0===e.value?e.value:"",onChange:t=>{e.setTouched(!0),e.setValue(t.target.value)},invalid:Boolean(e.error),ref:t},v)))})},7517:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),i=n.n(r),a=n(7492),o=n(7518),l=n(260),d=n(10);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const u=e=>{var{children:t}=e,n=s(e,["children"]);return i.a.createElement(a.FormApi,null,e=>i.a.createElement(l.a,c({color:d.a.green,disabled:!Object(o.a)(e)||e.submitting,onClick:t=>{t.preventDefault(),e.submitForm(t)}},n),t))}},7518:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var r=n(7510),i=n(38);function a(e){return!e.errors||0===Object.keys(e.errors).length}function o(e){return t=>Object(r.isEmpty)(t+"")?i.d._("{fieldName} must be entered",{fieldName:e}):null}},7571:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(13),i=n(7572),a=n.n(i),o=n(7573),l=n.n(o);const d=r.b.div.withConfig({displayName:"LoginPageBackground"})`
  width: 100vw;
  height: 100vh;
  background-image: url(${a.a});
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
`},7572:function(e,t,n){e.exports=n.p+"static/media/bg_login.382d98be.jpg"},7573:function(e,t,n){e.exports=n.p+"static/media/bg_login@2x.35ab1818.jpg"},7932:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(4),o=n(50),l=n(287),d=n(7571),c=n(104),s=n(38),u=n(83),m=n(13),p=n(10);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const g=m.b.div.withConfig({displayName:"NotifyMessageContainerStyled"})`
  position: relative;
  border-radius: 1rem;
  width: 60%;
  height: 3.9rem;
  opacity: 0.85;
  left: 20%;
  background: ${e=>e.isError?p.a.red:p.a.green};
  display: flex;
  align-items: center;
  justify-content: center;
`,v=m.b.div.withConfig({displayName:"NotifyMessageStyled"})`
  color: white;
  text-align: center;
  margin: 0 0.5rem 0.4rem 0.5rem;
  font-size: 1.375rem;
`,y=e=>{var{children:t,isVisible:n,isError:r=!1,onClick:a}=e,o=b(e,["children","isVisible","isError","onClick"]);return n?i.a.createElement(g,f({onClick:a,isVisible:n,isError:r},o),i.a.createElement(v,{"data-testid":`notify${r?"-error":""}`},t)):null},h=Object(u.b)(({model:e})=>e.hasFailed?i.a.createElement(y,{isVisible:!0,isError:!0},e.errorMessage):null);var w=n(81),O=n(7492),E=n(7494),j=n(7517);const k=m.b.div.withConfig({displayName:"LoginContainerStyled"})`
  display: inline-block;
  margin: 0.5rem;
`,x=m.b.div.withConfig({displayName:"PasswordContainerStyled"})`
  margin: 0.5rem;
`,C=m.b.div.withConfig({displayName:"SubmitButtonContainerStyled"})`
  display: inline-block;
  width: 14rem;
  margin: 0.5rem;
`,N=({model:e})=>i.a.createElement(O.Form,{onSubmit:({username:t,password:n})=>e.requestToken(t,n),render:e=>i.a.createElement("form",{onSubmit:e.submitForm},i.a.createElement(k,null,i.a.createElement(E.b,{field:"username",name:"username",isRequired:!0,validatioName:s.d._("username"),autoFocus:!0,placeholder:s.d._("username")})),i.a.createElement(x,null,i.a.createElement(E.b,{field:"password",name:"password",isRequired:!0,validatioName:s.d._("password"),type:"password",placeholder:s.d._("password")})),i.a.createElement(C,null,i.a.createElement(j.a,null,i.a.createElement(w.Trans,{id:"Sign-in"}))))});const S=({model:e})=>i.a.createElement(d.a,null,i.a.createElement(c.a,{title:s.d._("Login page")}),i.a.createElement(l.a,{layouts:[{i:"title",x:6,y:2,w:8,h:1},{i:"loginform",x:6,y:3,w:8,h:4}]},i.a.createElement("div",{key:"title"},i.a.createElement(c.a.Display,null)),i.a.createElement("div",{key:"loginform"},i.a.createElement(N,{model:e}))),i.a.createElement(h,{model:e}));n.d(t,"PasswordLoginRoute",function(){return P});const P=()=>{const{auth:e}=Object(o.d)();return e.isAuthenticatedUser?i.a.createElement(a.b,{to:"/"}):i.a.createElement(S,{model:e.provider.passwordLogin})};t.default=P}}]);
//# sourceMappingURL=48.ed6f8ad3.chunk.js.map