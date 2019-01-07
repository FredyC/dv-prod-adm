(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{7699:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.PasswordLoginRoute=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},o=r(149),a=r(93),l=r(7942);const d=()=>{const{auth:e}=(0,a.useRoot)();return e.isAuthenticatedUser?i.default.createElement(o.Redirect,{to:"/"}):i.default.createElement(l.PasswordLoginPage,{model:e.provider.passwordLogin})};t.PasswordLoginRoute=d;var u=d;t.default=u},7710:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputTextBox=t.FormInputStyled=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},o=r(7708),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(45)),l=r(7726),d=r(71),u=r(46);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const f=a.css`
  margin: ${u.Spacing.MarginAroundFormComponents};
`,m=a.css`
  border: 1px red solid;
`,p=a.default.input.withConfig({displayName:"FormInputStyled"})`
  ${f};
  ${({invalid:e})=>e&&m};
`;t.FormInputStyled=p;const g=i.default.forwardRef((e,t)=>{var{field:r,inputWidth:n=u.Spacing.DefaultInputWidth,inputWidthUnit:a=u.Spacing.DefaultSizeUnit,isRequired:f,validatioName:m,validationMessage:g,validate:v}=e,y=c(e,["field","inputWidth","inputWidthUnit","isRequired","validatioName","validationMessage","validate"]);return i.default.createElement(o.Field,{field:r,validate:v||(e=>f&&(0,l.isEmpty)(e+"")?g||d.i18n._("{validatioName} is required",{validatioName:m}):null)},e=>i.default.createElement(p,s({width:`${n}${a}`,value:e.value||0===e.value?e.value:"",onChange:t=>{e.setTouched(!0),e.setValue(t.target.value)},invalid:Boolean(e.error),ref:t},y)))});t.FormInputTextBox=g},7734:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormSubmit=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},o=r(7708),a=r(7735),l=r(5777),d=r(46);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};t.FormSubmit=(e=>{var{children:t}=e,r=s(e,["children"]);return i.default.createElement(o.FormApi,null,e=>i.default.createElement(l.TouchButton,u({color:d.Colors.green,disabled:!(0,a.isFormValid)(e)||e.submitting,onClick:t=>{t.preventDefault(),e.submitForm(t)}},r),t))})},7735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFormValid=function(e){return!e.errors||0===Object.keys(e.errors).length},t.validateIsRequired=function(e){return t=>(0,n.isEmpty)(t+"")?i.i18n._("{fieldName} must be entered",{fieldName:e}):null};var n=r(7726),i=r(71)},7792:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoginPageBackground=void 0;var n=a(r(45)),i=a(r(7793)),o=a(r(7794));function a(e){return e&&e.__esModule?e:{default:e}}const l=n.default.div.withConfig({displayName:"LoginPageBackground"})`
  width: 100vw;
  height: 100vh;
  background-image: url(${i.default});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    only screen and (min--moz-device-pixel-ratio: 1.3),
    only screen and (-o-min-device-pixel-ratio: 2.6/2),
    only screen and (min-device-pixel-ratio: 1.3),
    only screen and (min-width: 1024px) {
    background-image: url(${o.default});
  }
`;t.LoginPageBackground=l},7793:function(e,t,r){e.exports=r.p+"static/media/bg_login.382d98be.jpg"},7794:function(e,t,r){e.exports=r.p+"static/media/bg_login@2x.35ab1818.jpg"},7942:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordLoginPage=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},o=r(5808),a=r(7792),l=r(282),d=r(71),u=r(7943),s=r(7945);t.PasswordLoginPage=(({model:e})=>i.default.createElement(a.LoginPageBackground,null,i.default.createElement(l.PageTitle,{title:d.i18n._("Login page")}),i.default.createElement(o.GridLayout,{layouts:[{i:"title",x:6,y:2,w:8,h:1},{i:"loginform",x:6,y:3,w:8,h:4}]},i.default.createElement("div",{key:"title"},i.default.createElement(l.PageTitle.Display,null)),i.default.createElement("div",{key:"loginform"},i.default.createElement(s.PasswordLoginForm,{model:e}))),i.default.createElement(u.PasswordLoginError,{model:e})))},7943:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordLoginError=void 0;var n,i=r(94),o=(n=r(0))&&n.__esModule?n:{default:n},a=r(7944);const l=(0,i.observer)(({model:e})=>e.hasFailed?o.default.createElement(a.NotifyMessage,{isVisible:!0,isError:!0},e.errorMessage):null);t.PasswordLoginError=l},7944:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotifyMessage=void 0;var n=a(r(0)),i=a(r(45)),o=r(46);function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const u=i.default.div.withConfig({displayName:"NotifyMessageContainerStyled"})`
  position: relative;
  border-radius: 1rem;
  width: 60%;
  height: 3.9rem;
  opacity: 0.85;
  left: 20%;
  background: ${e=>e.isError?o.Colors.red:o.Colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
`,s=i.default.div.withConfig({displayName:"NotifyMessageStyled"})`
  color: white;
  text-align: center;
  margin: 0 0.5rem 0.4rem 0.5rem;
  font-size: 1.375rem;
`;t.NotifyMessage=(e=>{var{children:t,isVisible:r,isError:i=!1,onClick:o}=e,a=d(e,["children","isVisible","isError","onClick"]);return r?n.default.createElement(u,l({onClick:o,isVisible:r,isError:i},a),n.default.createElement(s,{"data-testid":`notify${i?"-error":""}`},t)):null})},7945:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordLoginForm=void 0;var n=r(122),i=s(r(0)),o=r(7708),a=s(r(45)),l=r(7710),d=r(71),u=r(7734);function s(e){return e&&e.__esModule?e:{default:e}}const c=a.default.div.withConfig({displayName:"LoginContainerStyled"})`
  display: inline-block;
  margin: 0.5rem;
`,f=a.default.div.withConfig({displayName:"PasswordContainerStyled"})`
  margin: 0.5rem;
`,m=a.default.div.withConfig({displayName:"SubmitButtonContainerStyled"})`
  display: inline-block;
  width: 14rem;
  margin: 0.5rem;
`;t.PasswordLoginForm=(({model:e})=>i.default.createElement(o.Form,{onSubmit:({username:t,password:r})=>e.requestToken(t,r),render:e=>i.default.createElement("form",{onSubmit:e.submitForm},i.default.createElement(c,null,i.default.createElement(l.FormInputTextBox,{field:"username",name:"username",isRequired:!0,validatioName:d.i18n._("username"),autoFocus:!0,placeholder:d.i18n._("username")})),i.default.createElement(f,null,i.default.createElement(l.FormInputTextBox,{field:"password",name:"password",isRequired:!0,validatioName:d.i18n._("password"),type:"password",placeholder:d.i18n._("password")})),i.default.createElement(m,null,i.default.createElement(u.FormSubmit,null,i.default.createElement(n.Trans,{id:"Sign-in"}))))}))}}]);
//# sourceMappingURL=47.bbefeac4.chunk.js.map