(this.webpackJsonpspeedlo=this.webpackJsonpspeedlo||[]).push([[213,42],{1198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(982))&&a.__esModule?a:{default:a};var r={ordinalNumber:function(e,t){var n=String((t||{}).unit);return e+("date"===n?"-\u0435":"week"===n||"minute"===n||"second"===n?"-\u044f":"-\u0439")},era:(0,i.default)({values:{narrow:["\u0434\u043e \u043d.\u044d.","\u043d.\u044d."],abbreviated:["\u0434\u043e \u043d. \u044d.","\u043d. \u044d."],wide:["\u0434\u043e \u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b","\u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0439 \u043a\u0432.","2-\u0439 \u043a\u0432.","3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],wide:["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["\u042f","\u0424","\u041c","\u0410","\u041c","\u0418","\u0418","\u0410","\u0421","\u041e","\u041d","\u0414"],abbreviated:["\u044f\u043d\u0432.","\u0444\u0435\u0432.","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440.","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433.","\u0441\u0435\u043d\u0442.","\u043e\u043a\u0442.","\u043d\u043e\u044f\u0431.","\u0434\u0435\u043a."],wide:["\u044f\u043d\u0432\u0430\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0435\u043b\u044c","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c"]},defaultWidth:"wide",formattingValues:{narrow:["\u042f","\u0424","\u041c","\u0410","\u041c","\u0418","\u0418","\u0410","\u0421","\u041e","\u041d","\u0414"],abbreviated:["\u044f\u043d\u0432.","\u0444\u0435\u0432.","\u043c\u0430\u0440.","\u0430\u043f\u0440.","\u043c\u0430\u044f","\u0438\u044e\u043d.","\u0438\u044e\u043b.","\u0430\u0432\u0433.","\u0441\u0435\u043d\u0442.","\u043e\u043a\u0442.","\u043d\u043e\u044f\u0431.","\u0434\u0435\u043a."],wide:["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u0412","\u041f","\u0412","\u0421","\u0427","\u041f","\u0421"],short:["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],abbreviated:["\u0432\u0441\u043a","\u043f\u043d\u0434","\u0432\u0442\u0440","\u0441\u0440\u0434","\u0447\u0442\u0432","\u043f\u0442\u043d","\u0441\u0443\u0431"],wide:["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d.",noon:"\u043f\u043e\u043b\u0434.",morning:"\u0443\u0442\u0440\u043e",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u044c"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d.",noon:"\u043f\u043e\u043b\u0434.",morning:"\u0443\u0442\u0440\u043e",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u044c"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d\u043e\u0447\u044c",noon:"\u043f\u043e\u043b\u0434\u0435\u043d\u044c",morning:"\u0443\u0442\u0440\u043e",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447\u0435\u0440",night:"\u043d\u043e\u0447\u044c"}},defaultWidth:"any",formattingValues:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d.",noon:"\u043f\u043e\u043b\u0434.",morning:"\u0443\u0442\u0440\u0430",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0438"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d.",noon:"\u043f\u043e\u043b\u0434.",morning:"\u0443\u0442\u0440\u0430",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0438"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d\u043e\u0447\u044c",noon:"\u043f\u043e\u043b\u0434\u0435\u043d\u044c",morning:"\u0443\u0442\u0440\u0430",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447\u0435\u0440\u0430",night:"\u043d\u043e\u0447\u0438"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},982:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=i.width?String(i.width):r;a=e.formattingValues[d]||e.formattingValues[r]}else{var o=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default}}]);
//# sourceMappingURL=df-253.90221b0f.chunk.js.map