(this.webpackJsonpspeedlo=this.webpackJsonpspeedlo||[]).push([[185],{1173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){var a=c[e];if("function"===typeof a)return a(e,t,n,r);return a};var r,a=(r=n(1359))&&r.__esModule?r:{default:r};var o={masculine:"ostatni",feminine:"ostatnia"},u={masculine:"ten",feminine:"ta"},i={masculine:"nast\u0119pny",feminine:"nast\u0119pna"},s={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function l(e,t,n,r){var l=t.getUTCDay();return function(e,t,n,r){if((0,a.default)(t,n,r))return u;if("lastWeek"===e)return o;if("nextWeek"===e)return i;throw new Error("Cannot determine adjectives for token ".concat(e))}(e,t,n,r)[s[l]]}function f(e,t,n,r){var a=l(e,t,n,r);return"'".concat(a,"' eeee 'o' p")}var c={lastWeek:f,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:f,other:"P"};e.exports=t.default},1359:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(arguments.length<2)throw new TypeError("2 argument required, but only "+arguments.length+" present");var r=(0,a.default)(e,n),o=(0,a.default)(t,n);return r.getTime()===o.getTime()};var r,a=(r=n(1360))&&r.__esModule?r:{default:r};e.exports=t.default},1360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},o=n.locale,u=o&&o.options&&o.options.weekStartsOn,i=null==u?0:(0,r.default)(u),s=null==n.weekStartsOn?i:(0,r.default)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=(0,a.default)(e),f=l.getUTCDay(),c=(f<s?7:0)+f-s;return l.setUTCDate(l.getUTCDate()-c),l.setUTCHours(0,0,0,0),l};var r=o(n(1361)),a=o(n(1362));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1361:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},1362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))},e.exports=t.default}}]);
//# sourceMappingURL=df-228.4d96e93e.chunk.js.map