(this.webpackJsonpspeedlo=this.webpackJsonpspeedlo||[]).push([[67,42],{1089:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(982))&&n.__esModule?n:{default:n};var d={ordinalNumber:function(e){return Number(e)+"\xba"},era:(0,i.default)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xu\xf1o","xullo","agosto","setembro","outubro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","m\xe9rcores","xoves","venres","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediod\xeda",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tardi\xf1a",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediod\xeda",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tardi\xf1a",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediod\xeda",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediod\xeda",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"}},defaultFormattingWidth:"wide"})};a.default=d,e.exports=a.default},982:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):d;n=e.formattingValues[o]||e.formattingValues[d]}else{var r=e.defaultWidth,m=i.width?String(i.width):e.defaultWidth;n=e.values[m]||e.values[r]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default}}]);
//# sourceMappingURL=df-121.653d1e05.chunk.js.map