(this.webpackJsonpspeedlo=this.webpackJsonpspeedlo||[]).push([[174,153,263],{1169:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(985)),r=n(t(984));function n(a){return a&&a.__esModule?a:{default:a}}var d={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)e?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?Chr\.?)/,wide:/^((voor|na) Christus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/,/^n/]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e kwartaal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mrt|apr|mei|jun|jul|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mei/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[zmdwv]/i,short:/^(zo|ma|di|wo|do|vr|za)/i,abbreviated:/^(zon|maa|din|woe|don|vri|zat)/i,wide:/^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^z/i,/^m/i,/^d/i,/^w/i,/^d/i,/^v/i,/^z/i],any:[/^zo/i,/^ma/i,/^di/i,/^wo/i,/^do/i,/^vr/i,/^za/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^het middaguur/i,morning:/ochtend/i,afternoon:/middag/i,evening:/avond/i,night:/nacht/i}},defaultParseWidth:"any"})};e.default=d,a.exports=e.default},984:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var i=String(e),r=t||{},n=r.width,d=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],u=i.match(d);if(!u)return null;var l,o=u[0],s=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(s)?s.findIndex((function(a){return a.test(i)})):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}(s,(function(a){return a.test(i)})),l=a.valueCallback?a.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:i.slice(o.length)}}},a.exports=e.default},985:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var i=String(e),r=t||{},n=i.match(a.matchPattern);if(!n)return null;var d=n[0],u=i.match(a.parsePattern);if(!u)return null;var l=a.valueCallback?a.valueCallback(u[0]):u[0];return{value:l=r.valueCallback?r.valueCallback(l):l,rest:i.slice(d.length)}}},a.exports=e.default}}]);
//# sourceMappingURL=df-218.8cd1c922.chunk.js.map