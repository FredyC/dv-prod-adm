(this.webpackJsonpspeedlo=this.webpackJsonpspeedlo||[]).push([[88,42,86,153,263],{1104:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(a(985)),n=u(a(984)),r=u(a(987));function u(e){return e&&e.__esModule?e:{default:e}}var l={ordinalNumber:(0,i.default)({matchPattern:/^[\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f]+/i,parsePattern:/^[\u0966\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f]+/i,valueCallback:r.default.localeToNumber}),era:(0,n.default)({matchPatterns:{narrow:/^(\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935|\u0908\u0938\u094d\u0935\u0940)/i,abbreviated:/^(\u0908\u0938\u093e\.?\s?\u092a\u0942\u0930\u094d\u0935\.?|\u0908\u0938\u093e\.?)/i,wide:/^(\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935|\u0908\u0938\u0935\u0940 \u092a\u0942\u0930\u094d\u0935|\u0908\u0938\u0935\u0940 \u0938\u0928|\u0908\u0938\u0935\u0940)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0924\u093f[1234]/i,wide:/^[1234](\u092a\u0939\u0932\u0940|\u0926\u0942\u0938\u0930\u0940|\u0924\u0940\u0938\u0930\u0940|\u091a\u094c\u0925\u0940)? \u0924\u093f\u092e\u093e\u0939\u0940/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[\u091c\u092b\u093c\u092e\u093e\u0905\u092a\u094d\u092e\u0908\u091c\u0942\u0928\u091c\u0941\u0905\u0917\u0938\u093f\u0905\u0915\u094d\u0924\u0928\u0926\u093f]/i,abbreviated:/^(\u091c\u0928|\u092b\u093c\u0930|\u092e\u093e\u0930\u094d\u091a|\u0905\u092a\u094d|\u092e\u0908|\u091c\u0942\u0928|\u091c\u0941\u0932|\u0905\u0917|\u0938\u093f\u0924|\u0905\u0915\u094d\u0924\u0942|\u0928\u0935|\u0926\u093f\u0938)/i,wide:/^(\u091c\u0928\u0935\u0930\u0940|\u092b\u093c\u0930\u0935\u0930\u0940|\u092e\u093e\u0930\u094d\u091a|\u0905\u092a\u094d\u0930\u0948\u0932|\u092e\u0908|\u091c\u0942\u0928|\u091c\u0941\u0932\u093e\u0908|\u0905\u0917\u0938\u094d\u0924|\u0938\u093f\u0924\u0902\u092c\u0930|\u0905\u0915\u094d\u0924\u0942\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u091c/i,/^\u092b\u093c/i,/^\u092e\u093e/i,/^\u0905\u092a\u094d/i,/^\u092e\u0908/i,/^\u091c\u0942/i,/^\u091c\u0941/i,/^\u0905\u0917/i,/^\u0938\u093f/i,/^\u0905\u0915\u094d\u0924\u0942/i,/^\u0928/i,/^\u0926\u093f/i],any:[/^\u091c\u0928/i,/^\u092b\u093c/i,/^\u092e\u093e/i,/^\u0905\u092a\u094d/i,/^\u092e\u0908/i,/^\u091c\u0942/i,/^\u091c\u0941/i,/^\u0905\u0917/i,/^\u0938\u093f/i,/^\u0905\u0915\u094d\u0924\u0942/i,/^\u0928\u0935/i,/^\u0926\u093f\u0938/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[\u0930\u0935\u093f\u0938\u094b\u092e\u092e\u0902\u0917\u0932\u092c\u0941\u0927\u0917\u0941\u0930\u0941\u0936\u0941\u0915\u094d\u0930\u0936\u0928\u093f]/i,short:/^(\u0930\u0935\u093f|\u0938\u094b\u092e|\u092e\u0902\u0917\u0932|\u092c\u0941\u0927|\u0917\u0941\u0930\u0941|\u0936\u0941\u0915\u094d\u0930|\u0936\u0928\u093f)/i,abbreviated:/^(\u0930\u0935\u093f|\u0938\u094b\u092e|\u092e\u0902\u0917\u0932|\u092c\u0941\u0927|\u0917\u0941\u0930\u0941|\u0936\u0941\u0915\u094d\u0930|\u0936\u0928\u093f)/i,wide:/^(\u0930\u0935\u093f\u0935\u093e\u0930|\u0938\u094b\u092e\u0935\u093e\u0930|\u092e\u0902\u0917\u0932\u0935\u093e\u0930|\u092c\u0941\u0927\u0935\u093e\u0930|\u0917\u0941\u0930\u0941\u0935\u093e\u0930|\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930|\u0936\u0928\u093f\u0935\u093e\u0930)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0930\u0935\u093f/i,/^\u0938\u094b\u092e/i,/^\u092e\u0902\u0917\u0932/i,/^\u092c\u0941\u0927/i,/^\u0917\u0941\u0930\u0941/i,/^\u0936\u0941\u0915\u094d\u0930/i,/^\u0936\u0928\u093f/i],any:[/^\u0930\u0935\u093f/i,/^\u0938\u094b\u092e/i,/^\u092e\u0902\u0917\u0932/i,/^\u092c\u0941\u0927/i,/^\u0917\u0941\u0930\u0941/i,/^\u0936\u0941\u0915\u094d\u0930/i,/^\u0936\u0928\u093f/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(\u092a\u0942|\u0905|\u092e|\u0926.\?|\u0938\u0941|\u0926\u094b|\u0936\u093e|\u0930\u093e)/i,any:/^(\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928|\u0905\u092a\u0930\u093e\u0939\u094d\u0928|\u092e|\u0926.\?|\u0938\u0941|\u0926\u094b|\u0936\u093e|\u0930\u093e)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928/i,pm:/^\u0905\u092a\u0930\u093e\u0939\u094d\u0928/i,midnight:/^\u092e\u0927\u094d\u092f/i,noon:/^\u0926\u094b/i,morning:/\u0938\u0941/i,afternoon:/\u0926\u094b/i,evening:/\u0936\u093e/i,night:/\u0930\u093e/i}},defaultParseWidth:"any"})};t.default=l,e.exports=t.default},982:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var i,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=n.width?String(n.width):r;i=e.formattingValues[u]||e.formattingValues[r]}else{var l=e.defaultWidth,d=n.width?String(n.width):e.defaultWidth;i=e.values[d]||e.values[l]}return i[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},984:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var i=String(t),n=a||{},r=n.width,u=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],l=i.match(u);if(!l)return null;var d,o=l[0],f=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(f)?f.findIndex((function(e){return e.test(i)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(f,(function(e){return e.test(i)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=n.valueCallback?n.valueCallback(d):d,rest:i.slice(o.length)}}},e.exports=t.default},985:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var i=String(t),n=a||{},r=i.match(e.matchPattern);if(!r)return null;var u=r[0],l=i.match(e.parsePattern);if(!l)return null;var d=e.valueCallback?e.valueCallback(l[0]):l[0];return{value:d=n.valueCallback?n.valueCallback(d):d,rest:i.slice(u.length)}}},e.exports=t.default},987:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=a(982))&&i.__esModule?i:{default:i};var r={locale:{1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},number:{"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"}};var u={localeToNumber:function(e){var t=e.toString().replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,(function(e){return r.number[e]}));return Number(t)},numberToLocale:function(e){return e.toString().replace(/\d/g,(function(e){return r.locale[e]}))},ordinalNumber:function(e){var t=u.localeToNumber(e),a=u.numberToLocale(t);switch(t%10){case 2:case 3:case 4:case 6:case 1:case 5:case 7:case 8:case 9:case 0:return a}},era:(0,n.default)({values:{narrow:["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u094d\u0935\u0940"],abbreviated:["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u094d\u0935\u0940"],wide:["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935","\u0908\u0938\u0935\u0940 \u0938\u0928"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u0924\u093f1","\u0924\u093f2","\u0924\u093f3","\u0924\u093f4"],wide:["\u092a\u0939\u0932\u0940 \u0924\u093f\u092e\u093e\u0939\u0940","\u0926\u0942\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940","\u0924\u0940\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940","\u091a\u094c\u0925\u0940 \u0924\u093f\u092e\u093e\u0939\u0940"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["\u091c","\u092b\u093c","\u092e\u093e","\u0905","\u092e\u0908","\u091c\u0942","\u091c\u0941","\u0905\u0917","\u0938\u093f","\u0905\u0915\u094d\u0924\u0942","\u0928","\u0926\u093f"],abbreviated:["\u091c\u0928","\u092b\u093c\u0930","\u092e\u093e\u0930\u094d\u091a","\u0905\u092a\u094d\u0930\u0948\u0932","\u092e\u0908","\u091c\u0942\u0928","\u091c\u0941\u0932","\u0905\u0917","\u0938\u093f\u0924","\u0905\u0915\u094d\u0924\u0942","\u0928\u0935","\u0926\u093f\u0938"],wide:["\u091c\u0928\u0935\u0930\u0940","\u092b\u093c\u0930\u0935\u0930\u0940","\u092e\u093e\u0930\u094d\u091a","\u0905\u092a\u094d\u0930\u0948\u0932","\u092e\u0908","\u091c\u0942\u0928","\u091c\u0941\u0932\u093e\u0908","\u0905\u0917\u0938\u094d\u0924","\u0938\u093f\u0924\u0902\u092c\u0930","\u0905\u0915\u094d\u0924\u0942\u092c\u0930","\u0928\u0935\u0902\u092c\u0930","\u0926\u093f\u0938\u0902\u092c\u0930"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["\u0930","\u0938\u094b","\u092e\u0902","\u092c\u0941","\u0917\u0941","\u0936\u0941","\u0936"],short:["\u0930","\u0938\u094b","\u092e\u0902","\u092c\u0941","\u0917\u0941","\u0936\u0941","\u0936"],abbreviated:["\u0930\u0935\u093f","\u0938\u094b\u092e","\u092e\u0902\u0917\u0932","\u092c\u0941\u0927","\u0917\u0941\u0930\u0941","\u0936\u0941\u0915\u094d\u0930","\u0936\u0928\u093f"],wide:["\u0930\u0935\u093f\u0935\u093e\u0930","\u0938\u094b\u092e\u0935\u093e\u0930","\u092e\u0902\u0917\u0932\u0935\u093e\u0930","\u092c\u0941\u0927\u0935\u093e\u0930","\u0917\u0941\u0930\u0941\u0935\u093e\u0930","\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930","\u0936\u0928\u093f\u0935\u093e\u0930"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},abbreviated:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},wide:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},abbreviated:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"},wide:{am:"\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",pm:"\u0905\u092a\u0930\u093e\u0939\u094d\u0928",midnight:"\u092e\u0927\u094d\u092f\u0930\u093e\u0924\u094d\u0930\u093f",noon:"\u0926\u094b\u092a\u0939\u0930",morning:"\u0938\u0941\u092c\u0939",afternoon:"\u0926\u094b\u092a\u0939\u0930",evening:"\u0936\u093e\u092e",night:"\u0930\u093e\u0924"}},defaultFormattingWidth:"wide"})},l=u;t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=df-140.42e5b24c.chunk.js.map