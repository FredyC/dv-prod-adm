(this.webpackJsonpspeedlo=this.webpackJsonpspeedlo||[]).push([[376],{1356:function(e,n,t){"use strict";t.d(n,"a",function(){return w});var r=t(378),o=t.n(r);t.d(n,"b",function(){return o.a});t(1453),t(153),t(423),t(173);var a=t(0),c=t.n(a),i=(t(59),t(281),t(1431)),u=t(18);"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function s(e,n){return n||(n=e.slice(0)),e.raw=n,e}function d(){var e=s(["\n  stroke: currentColor;\n  stroke-width: 2;\n  width: 2em;\n  height: 2em;\n  fill: none;\n"]);return d=function(){return e},e}var l=u.c.svg(d()),f=function(e){var n=e.onClick,t=e.className;return c.a.createElement(l,{viewBox:"0 0 5 10",onClick:n,className:t},c.a.createElement("path",{d:"M5,1 1,5 5,9"}))};function p(){var e=s(["\n  ","\n\n  padding: 10px;\n  background: ",";\n  transition: background 0.3s;\n\n  .wrapper {\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    grid-gap: ",";\n    overflow: hidden;\n    width: ",";\n    transition: width 0.3s;\n\n    .arrow {\n      width: ",";\n      height: 100%;\n      order: -2;\n      color: ",";\n\n      path {\n        transition: d 0.3s;\n      }\n    }\n\n    > img {\n      height: 1.2em;\n      width: ",";\n    }\n\n    .selected {\n      order: -1 !important;\n    }\n  }\n\n  &.expanded {\n    background: ",";\n\n    .wrapper {\n      width: ",";\n\n      .arrow path {\n        d: path('M1,1 5,5 1,9');\n      }\n    }\n  }\n"]);return p=function(){return e},e}var g="10px",m="2em",v="1em",b=function(){return"calc("+v+" + "+g+" + "+m+")"},h=u.c.div(p(),function(e){return""},function(e){return e.backgroundColor+"AA"},g,b(),v,function(e){return e.arrowColor},m,function(e){return e.backgroundColor+"E8"},function(e){return function(e){return"calc("+v+" + "+e+" *  ("+g+" + "+m+"))"}(e.flagCount)}),w=function(e){var n=e.className,t=e.availableLanguages,r=e.selectedLanguage,a=e.onChange,u=e.backgroundColor,s=void 0===u?"#FFF":u,d=e.arrowColor,l=void 0===d?"#000":d,p=e.formatLanguage,g=void 0===p?function(e){return e.toLowerCase()}:p,m=c.a.useState(!1),v=m[0],b=m[1];if(t.length<=1)return null;var w=function(e){return g(r)===e};return c.a.createElement(h,{className:o()(n,{expanded:v}),flagCount:t.length,backgroundColor:s,arrowColor:l},c.a.createElement("div",{className:"wrapper"},c.a.createElement(f,{onClick:function(){b(function(e){return!e})},className:"arrow"}),t.map(function(e,n){var t=g(e);return c.a.createElement("img",{key:t,src:Object(i.getFlag)(t),style:{order:n},onClick:function(){return function(e){v&&a(e),b(function(e){return!e})}(t)},className:o()({selected:w(t)})})})))}},1358:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return c});var r=t(18),o=t(1356),a=t(14),c=r.c.input.attrs(function(e){var n=e.invalid,t=void 0!==n&&n,r=e.inputFullWidth,a=void 0!==r&&r;return{className:Object(o.b)({invalid:t,fullWidth:a})}}).withConfig({displayName:"FormInputStyled",componentId:"sc-18qocdt-0"})(["margin:",";&.invalid{border:1px "," solid;background-color:",";}&.fullWidth{width:100%;}"],a.d.MarginAroundFormComponents,a.a.red,a.a.errorBackground)},1395:function(e,n,t){var r={"./cs.svg":1396,"./de.svg":1397,"./en.svg":1398,"./pl.svg":1399,"./sk.svg":1400};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1395},1396:function(e,n,t){e.exports=t.p+"static/media/cs.047e732d.svg"},1397:function(e,n,t){e.exports=t.p+"static/media/de.91b3a633.svg"},1398:function(e,n,t){e.exports=t.p+"static/media/en.c4cd6642.svg"},1399:function(e,n,t){e.exports=t.p+"static/media/pl.1b9768ef.svg"},1400:function(e,n,t){e.exports=t.p+"static/media/sk.8fff59a6.svg"},1401:function(e,n,t){var r={"./logo-doveze.svg":1402,"./logo-gopay.svg":1403,"./logo-mastercard.svg":1404,"./logo-visa.svg":1405};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1401},1402:function(e,n,t){e.exports=t.p+"static/media/logo-doveze.e13c0122.svg"},1403:function(e,n,t){e.exports=t.p+"static/media/logo-gopay.14086fd8.svg"},1404:function(e,n,t){e.exports=t.p+"static/media/logo-mastercard.6d4e5108.svg"},1405:function(e,n,t){e.exports=t.p+"static/media/logo-visa.8afb6c6f.svg"},1431:function(e,n,t){n.pictograms=t(1480),n.getFlag=t(1481),n.getLogo=t(1482)},1453:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(990);n.useDebounce=r.useDebounce,n.useDebouncedCallback=r.useDebouncedCallback},1476:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t(4),o=t(18),a=t(1477),c=t.n(a),i=t(1478),u=t.n(i);function s(){var e=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 2.6/2),\n    only screen and (min-device-pixel-ratio: 1.3),\n    only screen and (min-width: 1024px) {\n    background-image: url(",");\n  }\n"]);return s=function(){return e},e}var d=o.c.div(s(),c.a,u.a)},1477:function(e,n,t){e.exports=t.p+"static/media/bg_login.382d98be.jpg"},1478:function(e,n,t){e.exports=t.p+"static/media/bg_login@2x.35ab1818.jpg"},1479:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(18),o=t(14),a=r.c.div.withConfig({displayName:"PasswordPageGrid",componentId:"qobi9l-0"})(["display:grid;width:100vw;height:100vh;grid-gap:",";grid-template-columns:repeat(16,1fr);grid-template-rows:repeat(7,3rem);padding:0 "," 0 ",";"],o.d.Middle,o.d.Small,o.d.Small)},1480:function(e,n){e.exports=["pizza","beans","cheese","hot-pepper","smoking-barbecue","meat-pie","sausage","hot-dog","fruit","fruit-1","fruit-2","strawberry","soup","noodles","ramen","rice","spaghetti","food","piece-of-cake","beer","marshmallow","cake","banana-split","ice-cream","cookie","doughnut","cupcake","kebab","steak","fish","fondue","shrimp","berry","food","food-1","food-2","food-3","food-4","food-5","food-6","food-7","food-8","food-9","food-10","food-11","food-12","food-13","food-14","food-15","food-16","food-17","food-18","food-19","food-20","food-21","food-22","food-23","food-24","food-25","food-26","food-27","food-28","food-29","food-30","drink","drink-1","drink-2","drink-3","drink-4","drink-5","cup","cup-1","cup-2","whisky"]},1481:function(e,n,t){e.exports=function(e){try{return t(1395)("./".concat(e.toLowerCase(),".svg"))}catch(n){throw new Error("Missing flag asset for ".concat(e,"!"))}}},1482:function(e,n,t){e.exports=function(e){try{return t(1401)("./logo-".concat(e.toLowerCase(),".svg"))}catch(n){throw new Error("Missing logo asset for ".concat(e,"!"))}}},2811:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(57),c=t(40),i=t(1476),u=t(439),s=t(241),d=t(36),l=t(1479),f=t(69),p=t.n(f),g=t(112),m=t(48),v=t(78),b=t(66),h=t(1358),w=t(437),k=t(158),y=t(61),x=t(254),E=t(131),C=t(14),O=function(){var e=o.a.useRef(null),n=o.a.useState(!1),t=Object(m.a)(n,2),r=t[0],a=t[1],c=Object(x.a)(),i=c.enqueueError,u=c.enqueueSuccess,s=function(){var n=Object(g.a)(p.a.mark(function n(){var t,r,o;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(!0),n.next=3,j(e.current.value);case 3:t=n.sent,r=t.success,o=t.message,r?u(d.b._("Email to recover your password has been successfully sent.")):i(o),a(!1);case 8:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{placeholder:d.b._("Login name"),ref:e,disabled:r}),o.a.createElement(w.a,{margin:"".concat(C.d.Middle," 0 0 0")},o.a.createElement(k.a,{width:14},o.a.createElement(E.a,{disabled:r,onClick:s,color:C.a.green,height:"auto"},o.a.createElement(v.Trans,{id:"Recover password"})))))};function j(e){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(p.a.mark(function e(n){var t,r,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(y.a.endpoint,"/users/reset_password?login=").concat(n),r=window.fetch,e.prev=2,e.next=5,r(t,{headers:{Accept:"application/json"}});case 5:return o=e.sent,e.abrupt("return",o.json());case 9:return e.prev=9,e.t0=e.catch(2),b.a.withScope(function(t){t.setLevel(b.a.Severity.Debug),t.setExtra("loginName",n),b.a.captureException(e.t0)}),e.abrupt("return",{success:!1,message:d.b._("Unknown error while requesting password recovery")});case 13:case"end":return e.stop()}},e,null,[[2,9]])}))).apply(this,arguments)}var N=function(){return o.a.createElement(i.a,null,o.a.createElement(s.a,{title:d.b._("Password recovery")}),o.a.createElement(l.a,null,o.a.createElement(u.a,{gridRow:"2 / span 2",gridColumn:"6 / span 6"},o.a.createElement(s.a.Display,null)),o.a.createElement(u.a,{gridRow:"4 / span 6",gridColumn:"6 / span 6"},o.a.createElement(O,null))))};t.d(n,"PasswordResetRoute",function(){return F});var F=function(){return Object(c.b)().auth.isAuthenticatedUser?o.a.createElement(a.b,{to:"/"}):o.a.createElement(N,null)};n.default=F},983:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(0),o=t(539);function a(e,n){return e===n}function c(e,n,t){var c=t&&t.equalityFn?t.equalityFn:a,i=Object(r.useState)(e),u=i[0],s=i[1],d=Object(o.a)(Object(r.useCallback)(function(e){return s(e)},[]),n,t),l=d[0],f=d[1],p=Object(r.useRef)(e);return Object(r.useEffect)(function(){c(p.current,e)||(l(e),p.current=e)},[e,l,c]),[u,f]}},990:function(e,n,t){"use strict";t.r(n);var r=t(983);t.d(n,"useDebounce",function(){return r.a});var o=t(539);t.d(n,"useDebouncedCallback",function(){return o.a})}}]);
//# sourceMappingURL=376.c77d04f2.chunk.js.map