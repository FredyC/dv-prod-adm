(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{6838:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t(52),a=t(0),i=t.n(a),u=t(6832),o=t(6853),c=t(43),l=t(6839),d=i.a.forwardRef(function(e,n){var t=e.field,a=e.inputFullWidth,d=void 0!==a&&a,s=e.isRequired,m=e.validatioName,f=e.validationMessage,v=e.validate,b=Object(r.a)(e,["field","inputFullWidth","isRequired","validatioName","validationMessage","validate"]);return i.a.createElement(u.Field,{field:t,validate:v||function(e){return s&&Object(o.isEmpty)(e+"")?f||c.b._("{validatioName} is required",{validatioName:m}):null}},function(e){return i.a.createElement(l.a,Object.assign({value:e.value||0===e.value?e.value:"",onChange:function(n){n.target.validity.valid&&(e.setTouched(!0),e.setValue(n.target.value))},inputFullWidth:d,invalid:Boolean(e.error),ref:n},b))})})},6839:function(e,n,t){"use strict";t.d(n,"b",function(){return d}),t.d(n,"a",function(){return s});var r=t(5),a=t(28),i=t(20);function u(){var e=Object(r.a)(["\n  margin: ",";\n  ",";\n  ",";\n"]);return u=function(){return e},e}function o(){var e=Object(r.a)(["\n  width: 100%;\n"]);return o=function(){return e},e}function c(){var e=Object(r.a)(["\n  border: 1px red solid;\n"]);return c=function(){return e},e}var l=Object(a.css)(c()),d=Object(a.css)(o()),s=a.default.input(u(),i.d.MarginAroundFormComponents,function(e){return e.inputFullWidth&&d},function(e){return e.invalid&&l})},6859:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t(52),a=t(0),i=t.n(a),u=t(6832),o=t(6860),c=t(127),l=t(20),d=function(e){var n=e.children,t=Object(r.a)(e,["children"]);return i.a.createElement(u.FormApi,null,function(e){return i.a.createElement(c.a,Object.assign({color:l.a.green,disabled:!Object(o.a)(e)||e.submitting,onClick:function(n){n.preventDefault(),e.submitForm(n)}},t),n)})}},6860:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return u});var r=t(6853),a=t(43);function i(e){return!e.errors||0===Object.keys(e.errors).length}function u(e){return function(n){return Object(r.isEmpty)(n+"")?a.b._("{fieldName} must be entered",{fieldName:e}):null}}},6878:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t(5),a=t(28),i=t(6879),u=t.n(i),o=t(6880),c=t.n(o);function l(){var e=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 2.6/2),\n    only screen and (min-device-pixel-ratio: 1.3),\n    only screen and (min-width: 1024px) {\n    background-image: url(",");\n  }\n"]);return l=function(){return e},e}var d=a.default.div(l(),u.a,c.a)},6879:function(e,n,t){e.exports=t.p+"static/media/bg_login.382d98be.jpg"},6880:function(e,n,t){e.exports=t.p+"static/media/bg_login@2x.35ab1818.jpg"},7996:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(79),u=t(69),o=t(349),c=t(6878),l=t(172),d=t(43),s=t(70),m=t(52),f=t(5),v=t(28),b=t(20);function p(){var e=Object(f.a)(["\n  color: white;\n  text-align: center;\n  margin: 0 0.5rem 0.4rem 0.5rem;\n  font-size: ",";\n"]);return p=function(){return e},e}function g(){var e=Object(f.a)(["\n  position: relative;\n  border-radius: 1rem;\n  width: 60%;\n  height: 3.9rem;\n  opacity: 0.85;\n  left: 20%;\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return g=function(){return e},e}var E=v.default.div(g(),function(e){return e.isError?b.a.red:b.a.green}),h=v.default.div(p(),b.d.InfoMessageFontSize),j=function(e){var n=e.children,t=e.isVisible,r=e.isError,i=void 0!==r&&r,u=e.onClick,o=Object(m.a)(e,["children","isVisible","isError","onClick"]);return t?a.a.createElement(E,Object.assign({onClick:u,isVisible:t,isError:i},o),a.a.createElement(h,{"data-testid":"notify".concat(i?"-error":"")},n)):null},w=Object(s.observer)(function(e){var n=e.model;return n.hasFailed?a.a.createElement(j,{isVisible:!0,isError:!0},n.errorMessage):null}),O=t(90),y=t(85),k=t(127);function x(){var e=Object(f.a)(["\n  display: inline-block;\n  width: 14rem;\n  margin: 0.5rem;\n"]);return x=function(){return e},e}var F=Object(v.default)(y.b)(x()),_=function(e){return a.a.createElement(F,{to:"/reset"},a.a.createElement(k.a,{color:b.a.greyMiddle},a.a.createElement(O.Trans,{id:"Forgotten password"})))},N=t(6832),R=t(6838),q=t(6859);function C(){var e=Object(f.a)(["\n  display: inline-block;\n  width: 14rem;\n  margin: 0.5rem;\n"]);return C=function(){return e},e}function M(){var e=Object(f.a)(["\n  margin: 0.5rem;\n"]);return M=function(){return e},e}function V(){var e=Object(f.a)(["\n  display: inline-block;\n  margin: 0.5rem;\n"]);return V=function(){return e},e}var z=v.default.div(V()),S=v.default.div(M()),T=v.default.div(C()),W=function(e){var n=e.model;return a.a.createElement(N.Form,{onSubmit:function(e){var t=e.username,r=e.password;return n.requestToken(t,r)},render:function(e){return a.a.createElement("form",{onSubmit:e.submitForm},a.a.createElement(z,null,a.a.createElement(R.a,{field:"username",name:"username",isRequired:!0,validatioName:d.b._("username"),autoFocus:!0,placeholder:d.b._("username")})),a.a.createElement(S,null,a.a.createElement(R.a,{field:"password",name:"password",isRequired:!0,validatioName:d.b._("password"),type:"password",placeholder:d.b._("password")})),a.a.createElement(T,null,a.a.createElement(q.a,null,a.a.createElement(O.Trans,{id:"Sign-in"}))))}})};var A=function(e){var n=e.model;return a.a.createElement(c.a,null,a.a.createElement(l.a,{title:d.b._("Login page")}),a.a.createElement(o.a,{layouts:[{i:"title",x:6,y:2,w:8,h:1},{i:"loginform",x:6,y:3,w:8,h:4}]},a.a.createElement("div",{key:"title"},a.a.createElement(l.a.Display,null)),a.a.createElement("div",{key:"loginform"},a.a.createElement(W,{model:n}),a.a.createElement(_,null))),a.a.createElement(w,{model:n}))};t.d(n,"PasswordLoginRoute",function(){return L});var L=function(){var e=Object(u.b)().auth;return e.isAuthenticatedUser?a.a.createElement(i.Redirect,{to:"/"}):a.a.createElement(A,{model:e.provider.passwordLogin})};n.default=L}}]);
//# sourceMappingURL=182.4bdf282d.chunk.js.map