(this.webpackJsonpspeedlo=this.webpackJsonpspeedlo||[]).push([[380],{1375:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var r=t(381),o=t.n(r);t.d(n,"b",(function(){return o.a}));t(1486),t(154),t(427),t(173);var a=t(0),c=t.n(a),i=(t(61),t(284),t(1474)),s=t(18);"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function u(e,n){return n||(n=e.slice(0)),e.raw=n,e}function d(){var e=u(["\n  stroke: currentColor;\n  stroke-width: 2;\n  width: 2em;\n  height: 2em;\n  fill: none;\n"]);return d=function(){return e},e}var l=s.c.svg(d()),f=function(e){var n=e.onClick,t=e.className;return c.a.createElement(l,{viewBox:"0 0 5 10",onClick:n,className:t},c.a.createElement("path",{d:"M5,1 1,5 5,9"}))};function p(){var e=u(["\n  ","\n\n  padding: 10px;\n  background: ",";\n  transition: background 0.3s;\n\n  .wrapper {\n    display: grid;\n    grid-auto-flow: column;\n    align-content: center;\n    grid-gap: ",";\n    overflow: hidden;\n    width: ",";\n    transition: width 0.3s;\n\n    .arrow {\n      width: ",";\n      height: 100%;\n      order: -2;\n      color: ",";\n\n      path {\n        transition: d 0.3s;\n      }\n    }\n\n    > img {\n      height: 1.2em;\n      width: ",";\n    }\n\n    .selected {\n      order: -1 !important;\n    }\n  }\n\n  &.expanded {\n    background: ",";\n\n    .wrapper {\n      width: ",";\n\n      .arrow path {\n        d: path('M1,1 5,5 1,9');\n      }\n    }\n  }\n"]);return p=function(){return e},e}var g="10px",m="2em",v="1em",b=function(){return"calc("+v+" + "+g+" + "+m+")"},h=s.c.div(p(),(function(e){return""}),(function(e){return e.backgroundColor+"AA"}),g,b(),v,(function(e){return e.arrowColor}),m,(function(e){return e.backgroundColor+"E8"}),(function(e){return function(e){return"calc("+v+" + "+e+" *  ("+g+" + "+m+"))"}(e.flagCount)})),w=function(e){var n=e.className,t=e.availableLanguages,r=e.selectedLanguage,a=e.onChange,s=e.backgroundColor,u=void 0===s?"#FFF":s,d=e.arrowColor,l=void 0===d?"#000":d,p=e.formatLanguage,g=void 0===p?function(e){return e.toLowerCase()}:p,m=c.a.useState(!1),v=m[0],b=m[1];if(t.length<=1)return null;var w=function(e){return g(r)===e};return c.a.createElement(h,{className:o()(n,{expanded:v}),flagCount:t.length,backgroundColor:u,arrowColor:l},c.a.createElement("div",{className:"wrapper"},c.a.createElement(f,{onClick:function(){b((function(e){return!e}))},className:"arrow"}),t.map((function(e,n){var t=g(e);return c.a.createElement("img",{key:t,src:Object(i.getFlag)(t),style:{order:n},onClick:function(){return function(e){v&&a(e),b((function(e){return!e}))}(t)},className:o()({selected:w(t)})})}))))}},1377:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return c}));var r=t(18),o=t(1375),a=t(14),c=r.c.input.attrs((function(e){var n=e.invalid,t=void 0!==n&&n,r=e.inputFullWidth,a=void 0!==r&&r;return{className:Object(o.b)({invalid:t,fullWidth:a})}})).withConfig({displayName:"FormInputStyled",componentId:"sc-18qocdt-0"})(["margin:",";&.invalid{border:1px "," solid;background-color:",";}&.fullWidth{width:100%;}"],a.d.MarginAroundFormComponents,a.a.red,a.a.errorBackground)},1413:function(e,n,t){var r={"./af.svg":1414,"./cs.svg":1415,"./de.svg":1416,"./en.svg":1417,"./es.svg":1418,"./fr.svg":1419,"./nl.svg":1420,"./pl.svg":1421,"./ru.svg":1422,"./sk.svg":1423,"./zu.svg":1424};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1413},1414:function(e,n,t){e.exports=t.p+"static/media/af.bb194490.svg"},1415:function(e,n,t){e.exports=t.p+"static/media/cs.047e732d.svg"},1416:function(e,n,t){e.exports=t.p+"static/media/de.91b3a633.svg"},1417:function(e,n,t){e.exports=t.p+"static/media/en.c4cd6642.svg"},1418:function(e,n,t){e.exports=t.p+"static/media/es.8413cd53.svg"},1419:function(e,n,t){e.exports=t.p+"static/media/fr.f689ce44.svg"},1420:function(e,n,t){e.exports=t.p+"static/media/nl.10d31cc2.svg"},1421:function(e,n,t){e.exports=t.p+"static/media/pl.1b9768ef.svg"},1422:function(e,n,t){e.exports=t.p+"static/media/ru.e2037a0e.svg"},1423:function(e,n,t){e.exports=t.p+"static/media/sk.8fff59a6.svg"},1424:function(e,n,t){e.exports=t.p+"static/media/zu.1eb85ba8.svg"},1425:function(e,n,t){var r={"./logo-doveze.svg":1426,"./logo-gopay.svg":1427,"./logo-mastercard.svg":1428,"./logo-visa.svg":1429};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1425},1426:function(e,n,t){e.exports=t.p+"static/media/logo-doveze.e13c0122.svg"},1427:function(e,n,t){e.exports=t.p+"static/media/logo-gopay.14086fd8.svg"},1428:function(e,n,t){e.exports=t.p+"static/media/logo-mastercard.6d4e5108.svg"},1429:function(e,n,t){e.exports=t.p+"static/media/logo-visa.8afb6c6f.svg"},1474:function(e,n,t){n.pictograms=t(1507),n.getFlag=t(1508),n.getLogo=t(1509)},1486:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(997);n.useDebounce=r.useDebounce,n.useDebouncedCallback=r.useDebouncedCallback},1503:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(4),o=t(18),a=t(1504),c=t.n(a),i=t(1505),s=t.n(i);function u(){var e=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.3),\n    only screen and (min--moz-device-pixel-ratio: 1.3),\n    only screen and (-o-min-device-pixel-ratio: 2.6/2),\n    only screen and (min-device-pixel-ratio: 1.3),\n    only screen and (min-width: 1024px) {\n    background-image: url(",");\n  }\n"]);return u=function(){return e},e}var d=o.c.div(u(),c.a,s.a)},1504:function(e,n,t){e.exports=t.p+"static/media/bg_login.382d98be.jpg"},1505:function(e,n,t){e.exports=t.p+"static/media/bg_login@2x.35ab1818.jpg"},1506:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(18),o=t(14),a=r.c.div.withConfig({displayName:"PasswordPageGrid",componentId:"qobi9l-0"})(["display:grid;width:100vw;height:100vh;grid-gap:",";grid-template-columns:repeat(16,1fr);grid-template-rows:repeat(7,3rem);padding:0 "," 0 ",";"],o.d.Middle,o.d.Small,o.d.Small)},1507:function(e,n){e.exports=["pizza","beans","cheese","hot-pepper","smoking-barbecue","meat-pie","sausage","hot-dog","fruit","fruit-1","fruit-2","strawberry","soup","noodles","ramen","rice","spaghetti","food","piece-of-cake","beer","marshmallow","cake","banana-split","ice-cream","cookie","doughnut","cupcake","kebab","steak","fish","fondue","shrimp","berry","food","food-1","food-2","food-3","food-4","food-5","food-6","food-7","food-8","food-9","food-10","food-11","food-12","food-13","food-14","food-15","food-16","food-17","food-18","food-19","food-20","food-21","food-22","food-23","food-24","food-25","food-26","food-27","food-28","food-29","food-30","drink","drink-1","drink-2","drink-3","drink-4","drink-5","cup","cup-1","cup-2","whisky"]},1508:function(e,n,t){e.exports=function(e){try{return t(1413)("./".concat(e.toLowerCase(),".svg"))}catch(n){throw new Error("Missing flag asset for ".concat(e,"!"))}}},1509:function(e,n,t){e.exports=function(e){try{return t(1425)("./logo-".concat(e.toLowerCase(),".svg"))}catch(n){throw new Error("Missing logo asset for ".concat(e,"!"))}}},2834:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(59),c=t(40),i=t(1503),s=t(444),u=t(242),d=t(36),l=t(1506),f=t(54),p=t.n(f),g=t(46),m=t(79),v=t(67),b=t(1377),h=t(442),w=t(158),k=t(63),y=t(255),x=t(131),E=t(14),C=function(){var e=o.a.useRef(null),n=o.a.useState(!1),t=Object(g.a)(n,2),r=t[0],a=t[1],c=Object(y.a)(),i=c.enqueueError,s=c.enqueueSuccess;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{placeholder:d.b._("Login name"),ref:e,disabled:r}),o.a.createElement(h.a,{margin:"".concat(E.d.Middle," 0 0 0")},o.a.createElement(w.a,{width:14},o.a.createElement(x.a,{disabled:r,onClick:function(){var n,t,r;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a(!0),o.next=3,p.a.awrap(O(e.current.value));case 3:n=o.sent,t=n.success,r=n.message,t?s(d.b._("Email to recover your password has been successfully sent.")):i(r),a(!1);case 8:case"end":return o.stop()}}))},color:E.a.green,height:"auto"},o.a.createElement(m.Trans,{id:"Recover password"})))))};function O(e){var n,t,r;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n="".concat(k.a.endpoint,"/users/reset_password?login=").concat(e),t=window.fetch,o.prev=2,o.next=5,p.a.awrap(t(n,{headers:{Accept:"application/json"}}));case 5:return r=o.sent,o.abrupt("return",r.json());case 9:return o.prev=9,o.t0=o.catch(2),v.a.withScope((function(n){n.setLevel(v.a.Severity.Debug),n.setExtra("loginName",e),v.a.captureException(o.t0)})),o.abrupt("return",{success:!1,message:d.b._("Unknown error while requesting password recovery")});case 13:case"end":return o.stop()}}),null,null,[[2,9]])}var S=function(){return o.a.createElement(i.a,null,o.a.createElement(u.a,{title:d.b._("Password recovery")}),o.a.createElement(l.a,null,o.a.createElement(s.a,{gridRow:"2 / span 2",gridColumn:"6 / span 6"},o.a.createElement(u.a.Display,null)),o.a.createElement(s.a,{gridRow:"4 / span 6",gridColumn:"6 / span 6"},o.a.createElement(C,null))))};t.d(n,"PasswordResetRoute",(function(){return j}));var j=function(){return Object(c.b)().auth.isAuthenticatedUser?o.a.createElement(a.b,{to:"/"}):o.a.createElement(S,null)};n.default=j},991:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0),o=t(545);function a(e,n){return e===n}function c(e,n,t){var c=t&&t.equalityFn?t.equalityFn:a,i=Object(r.useState)(e),s=i[0],u=i[1],d=Object(o.a)(Object(r.useCallback)((function(e){return u(e)}),[]),n,t),l=d[0],f=d[1],p=Object(r.useRef)(e);return Object(r.useEffect)((function(){c(p.current,e)||(l(e),p.current=e)}),[e,l,c]),[s,f]}},997:function(e,n,t){"use strict";t.r(n);var r=t(991);t.d(n,"useDebounce",(function(){return r.a}));var o=t(545);t.d(n,"useDebouncedCallback",(function(){return o.a}))}}]);
//# sourceMappingURL=380.ca3e555c.chunk.js.map