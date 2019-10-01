(window.webpackJsonpspeedlo=window.webpackJsonpspeedlo||[]).push([[190],{1413:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return i});var r=t(18),a=t(1412),o=t(15),i=r.c.input.attrs(function(e){var n=e.invalid,t=void 0!==n&&n,r=e.inputFullWidth,o=void 0!==r&&r;return{className:Object(a.b)({invalid:t,fullWidth:o})}}).withConfig({displayName:"FormInputStyled",componentId:"sc-18qocdt-0"})(["margin:",";&.invalid{border:1px "," solid;background-color:",";}&.fullWidth{width:100%;}"],o.d.MarginAroundFormComponents,o.a.red,o.a.errorBackground)},1435:function(e,n,t){var r={"./cs.svg":1436,"./de.svg":1437,"./en.svg":1438,"./pl.svg":1439,"./sk.svg":1440};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1435},1441:function(e,n,t){var r={"./logo-doveze.svg":1442,"./logo-gopay.svg":1443,"./logo-mastercard.svg":1444,"./logo-visa.svg":1445};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1441},1500:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(3),a=t(18),o=t(1501),i=t.n(o),c=t(1502),s=t.n(c);function u(){var e=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 2.6/2),\n    only screen and (min-device-pixel-ratio: 1.3),\n    only screen and (min-width: 1024px) {\n    background-image: url(",");\n  }\n"]);return u=function(){return e},e}var l=a.c.div(u(),i.a,s.a)},1501:function(e,n,t){e.exports=t.p+"static/media/bg_login.382d98be.jpg"},1502:function(e,n,t){e.exports=t.p+"static/media/bg_login@2x.35ab1818.jpg"},1503:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(18),a=t(15),o=r.c.div.withConfig({displayName:"PasswordPageGrid",componentId:"qobi9l-0"})(["display:grid;width:100vw;height:100vh;grid-gap:",";grid-template-columns:repeat(16,1fr);grid-template-rows:repeat(7,3rem);padding:0 "," 0 ",";"],a.d.Middle,a.d.Small,a.d.Small)},2844:function(e,n,t){"use strict";t.r(n);var r=t(51),a=t.n(r),o=t(80),i=t(70),c=t(60),s=t(0),u=t.n(s),l=t(53),d=t(46),p=t(69),g=t(36),b=t(169),m=t(35),f=t(1500),v=t(308),h=t(151),w=t(1503),y=t(3),O=t(87),k=t(2816),E=t(2817),j=t(18),P=t(1413),x=t(25),C=t(1767),_=t.n(C);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var S=function(e){var n=e.children,t=Object(s.useState)(""),r=Object(i.a)(t,2),a=r[0],o=r[1],c={minLen:function(e){return m.b._("Minimal length is {length}",{length:e})},maxLen:function(e){return m.b._("Maximal length is {length}",{length:e})},digits:m.b._("Requires at least one digit"),uppercaseChars:m.b._("Requires at least one uppercase character")},l=Object(s.useCallback)(function(){return a},[a]);return u.a.createElement(_.a,{minLen:6,maxLen:30,digits:1,uppercaseChars:1,defaultMessages:c,onChange:o},function(e){return n(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(t,!0).forEach(function(n){Object(x.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},e,{getPassword:l}))})},T=t(115),D=t(15);function M(){var e=Object(y.a)(["\n  background-color: ",";\n  opacity: 0.5;\n  padding: 1rem;\n  width: 31rem;\n"]);return M=function(){return e},e}function N(){var e=Object(y.a)(["\n  .password {\n    display: inline-block;\n    margin: 0.5rem;\n\n    button {\n      display: inline-block;\n      width: 3rem;\n    }\n  }\n\n  .submit {\n    width: 14rem;\n    margin: 0.5rem;\n  }\n"]);return N=function(){return e},e}var q=j.c.div(N()),R=j.c.div(M(),D.a.red),F=function(e){var n=e.onSubmitChange,t=e.buttonLabel;return u.a.createElement(S,null,function(e){var r=e.getInputProps,a=e.valid,o=e.errors,i=e.touched,c=e.isVisible,s=e.toggleShowPassword,l=e.getPassword;return u.a.createElement(q,null,u.a.createElement("div",{className:"password"},u.a.createElement(P.a,Object.assign({},r(),{name:"password",placeholder:m.b._("new password"),invalid:i&&!a})),u.a.createElement(T.a,{color:D.a.greyMiddle,onClick:s,icon:c?k.a:E.a,iconSize:2})),u.a.createElement("div",{className:"submit"},u.a.createElement(T.a,{color:D.a.green,disabled:!a,onClick:function(e){e.preventDefault(),n(l())}},t)),i&&!a&&u.a.createElement(R,null,u.a.createElement(O.Trans,{id:"Password is invalid due to following errors:"}),u.a.createElement("ul",null,o.map(function(e){return u.a.createElement("li",{key:e.key},e.message)}))))})},I=function(e){var n=e.onPasswordChange,t=e.pageTitle,r=e.buttonLabel;return u.a.createElement(f.a,null,u.a.createElement(h.a,{title:t}),u.a.createElement(w.a,null,u.a.createElement(v.a,{gridRow:"2 / span 2",gridColumn:"6 / span 6"},u.a.createElement(h.a.Display,null)),u.a.createElement(v.a,{gridRow:"4 / span 6",gridColumn:"6 / span 6"},u.a.createElement(F,{onSubmitChange:n,buttonLabel:r}))))};t.d(n,"PasswordChangeRoute",function(){return U});var U=function(e){var n=e.history,t=e.location,r=e.match,s=Object(d.b)().auth,f=Object(b.a)(),v=f.enqueueError,h=f.enqueueSuccess,w=Object(c.d)(),y=r.params.token,O=window.atob(y);w.setExtras({tempToken:y,decodedTempToken:O});var k=Object(p.ib)({fetchPolicy:"no-cache",context:{overrideWithToken:O}}),E=Object(i.a)(k,1)[0];if(!y)return Object(g.a)("no token has been passed to change password"),v(m.b._("Request for password update is invalid. Please try again.")),u.a.createElement(l.b,{to:"/"});var j={onPasswordChange:function(){var e=Object(o.a)(a.a.mark(function e(t){var r,o,i,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({password:t});case 2:(r=e.sent)?(o=r.change,i=o.userId,u=o.newToken,s.invalidate(),s.authenticate(u,i),h(m.b._("Password has been updated."))):(c.a.captureMessage("Password change failed"),v(m.b._("Request for password update is invalid. Please try again."))),n.replace("/");case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),pageTitle:"",buttonLabel:""};if(t.pathname.includes("register"))j.pageTitle=m.b._("Set up password"),j.buttonLabel=m.b._("Create password");else{if(!t.pathname.includes("recovery"))return u.a.createElement(l.b,{to:"/"});j.pageTitle=m.b._("Password recovery"),j.buttonLabel=m.b._("Update password")}return u.a.createElement(I,j)};n.default=U}}]);
//# sourceMappingURL=190.d62a0442.chunk.js.map