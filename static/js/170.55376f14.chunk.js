(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{7840:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.PasswordLoginRoute=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},o=r(172),a=r(99),l=r(8098);const d=()=>{const{auth:e}=(0,a.useRoot)();return e.isAuthenticatedUser?i.default.createElement(o.Redirect,{to:"/"}):i.default.createElement(l.PasswordLoginPage,{model:e.provider.passwordLogin})};t.PasswordLoginRoute=d;var u=d;t.default=u},7854:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputTextBox=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},o=r(7849),a=r(7871),l=r(78),d=r(7859);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const c=i.default.forwardRef((e,t)=>{var{field:r,inputFullWidth:n=!1,isRequired:c,validatioName:f,validationMessage:m,validate:p}=e,g=s(e,["field","inputFullWidth","isRequired","validatioName","validationMessage","validate"]);return i.default.createElement(o.Field,{field:r,validate:p||(e=>c&&(0,a.isEmpty)(e+"")?m||l.i18n._("{validatioName} is required",{validatioName:f}):null)},e=>i.default.createElement(d.FormInputStyled,u({value:e.value||0===e.value?e.value:"",onChange:t=>{e.setTouched(!0),e.setValue(t.target.value)},inputFullWidth:n,invalid:Boolean(e.error),ref:t},g)))});t.FormInputTextBox=c},7859:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputStyled=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(51)),i=r(52);const o=n.css`
  border: 1px red solid;
`,a=n.css`
  width: 100%;
`,l=n.default.input.withConfig({displayName:"FormInputStyled"})`
  margin: ${i.Spacing.MarginAroundFormComponents};
  ${({inputFullWidth:e})=>e&&a};
  ${({invalid:e})=>e&&o};
`;t.FormInputStyled=l},7878:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormSubmit=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},o=r(7849),a=r(7879),l=r(5794),d=r(52);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};t.FormSubmit=(e=>{var{children:t}=e,r=s(e,["children"]);return i.default.createElement(o.FormApi,null,e=>i.default.createElement(l.TouchButton,u({color:d.Colors.green,disabled:!(0,a.isFormValid)(e)||e.submitting,onClick:t=>{t.preventDefault(),e.submitForm(t)}},r),t))})},7879:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFormValid=function(e){return!e.errors||0===Object.keys(e.errors).length},t.validateIsRequired=function(e){return t=>(0,n.isEmpty)(t+"")?i.i18n._("{fieldName} must be entered",{fieldName:e}):null};var n=r(7871),i=r(78)},7936:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoginPageBackground=void 0;var n=a(r(51)),i=a(r(7937)),o=a(r(7938));function a(e){return e&&e.__esModule?e:{default:e}}const l=n.default.div.withConfig({displayName:"LoginPageBackground"})`
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
`;t.LoginPageBackground=l},7937:function(e,t,r){e.exports=r.p+"static/media/bg_login.382d98be.jpg"},7938:function(e,t,r){e.exports=r.p+"static/media/bg_login@2x.35ab1818.jpg"},8098:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordLoginPage=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},o=r(5828),a=r(7936),l=r(287),d=r(78),u=r(8099),s=r(8101);t.PasswordLoginPage=(({model:e})=>i.default.createElement(a.LoginPageBackground,null,i.default.createElement(l.PageTitle,{title:d.i18n._("Login page")}),i.default.createElement(o.GridLayout,{layouts:[{i:"title",x:6,y:2,w:8,h:1},{i:"loginform",x:6,y:3,w:8,h:4}]},i.default.createElement("div",{key:"title"},i.default.createElement(l.PageTitle.Display,null)),i.default.createElement("div",{key:"loginform"},i.default.createElement(s.PasswordLoginForm,{model:e}))),i.default.createElement(u.PasswordLoginError,{model:e})))},8099:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordLoginError=void 0;var n,i=r(100),o=(n=r(0))&&n.__esModule?n:{default:n},a=r(8100);const l=(0,i.observer)(({model:e})=>e.hasFailed?o.default.createElement(a.NotifyMessage,{isVisible:!0,isError:!0},e.errorMessage):null);t.PasswordLoginError=l},8100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotifyMessage=void 0;var n=a(r(0)),i=a(r(51)),o=r(52);function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const u=i.default.div.withConfig({displayName:"NotifyMessageContainerStyled"})`
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
  font-size: ${o.Spacing.InfoMessageFontSize};
`;t.NotifyMessage=(e=>{var{children:t,isVisible:r,isError:i=!1,onClick:o}=e,a=d(e,["children","isVisible","isError","onClick"]);return r?n.default.createElement(u,l({onClick:o,isVisible:r,isError:i},a),n.default.createElement(s,{"data-testid":`notify${i?"-error":""}`},t)):null})},8101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordLoginForm=void 0;var n=r(130),i=s(r(0)),o=r(7849),a=s(r(51)),l=r(7854),d=r(78),u=r(7878);function s(e){return e&&e.__esModule?e:{default:e}}const c=a.default.div.withConfig({displayName:"LoginContainerStyled"})`
  display: inline-block;
  margin: 0.5rem;
`,f=a.default.div.withConfig({displayName:"PasswordContainerStyled"})`
  margin: 0.5rem;
`,m=a.default.div.withConfig({displayName:"SubmitButtonContainerStyled"})`
  display: inline-block;
  width: 14rem;
  margin: 0.5rem;
`;t.PasswordLoginForm=(({model:e})=>i.default.createElement(o.Form,{onSubmit:({username:t,password:r})=>e.requestToken(t,r),render:e=>i.default.createElement("form",{onSubmit:e.submitForm},i.default.createElement(c,null,i.default.createElement(l.FormInputTextBox,{field:"username",name:"username",isRequired:!0,validatioName:d.i18n._("username"),autoFocus:!0,placeholder:d.i18n._("username")})),i.default.createElement(f,null,i.default.createElement(l.FormInputTextBox,{field:"password",name:"password",isRequired:!0,validatioName:d.i18n._("password"),type:"password",placeholder:d.i18n._("password")})),i.default.createElement(m,null,i.default.createElement(u.FormSubmit,null,i.default.createElement(n.Trans,{id:"Sign-in"}))))}))}}]);
//# sourceMappingURL=170.55376f14.chunk.js.map