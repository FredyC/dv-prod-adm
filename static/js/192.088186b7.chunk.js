(window.webpackJsonpspeedlo=window.webpackJsonpspeedlo||[]).push([[192],{1464:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(17),r=a(0),l=a.n(r),c=a(1424),o=a(1482),i=a(35),u=a(1413),m=l.a.forwardRef(function(e,t){var a=e.field,r=e.inputFullWidth,m=void 0!==r&&r,s=e.isRequired,d=e.validatioName,p=e.validationMessage,E=e.validate,f=Object(n.a)(e,["field","inputFullWidth","isRequired","validatioName","validationMessage","validate"]);return l.a.createElement(c.Field,{field:a,validate:E||function(e){return s&&Object(o.isEmpty)(e+"")?p||i.b._("{validatioName} is required",{validatioName:d}):null}},function(e){return l.a.createElement(u.a,Object.assign({value:e.value||0===e.value?e.value:"",onChange:function(t){t.target.validity.valid&&(e.setTouched(!0),e.setValue(t.target.value))},inputFullWidth:m,invalid:Boolean(e.error),ref:t},f))})})},1532:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(17),r=a(1409),l=a(49),c=a(0),o=a.n(c),i=a(1583),u=function(e){var t=e.fieldName,a=e.label,c=(e.children,Object(n.a)(e,["fieldName","label","children"])),u=Object(r.d)(t),m=Object(r.h)();return Object(l.g)(function(){return o.a.createElement(i.a,null,o.a.createElement("input",Object.assign({type:"checkbox",id:u.name,name:u.name,checked:!0===u.value,onChange:function(){return u.setValue(!u.value)},disabled:m.isSubmitting},c)),a&&o.a.createElement("label",{htmlFor:u.name},a))})}},2633:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(38);t.a=Object(l.a)(r.a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person")},2841:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(53),c=a(171),o=a(96),i=a(306),u=a(87),m=a(168),s=a(1418),d=a(35),p=a(170),E=a(1454),f=a(3),b=a(1424),v=a(18),h=a(1464),g=a(115),y=a(15),z=function(e){return r.a.createElement(g.a,{text:d.b._("Save invoice preferences"),color:y.a.green})};function w(){var e=Object(f.a)(["\n  margin-top: 1rem;\n  width: 15rem;\n"]);return w=function(){return e},e}var j=v.c.div(w()),O=function(e){return r.a.createElement(b.Form,null,r.a.createElement(h.a,{field:"account",placeholder:"N\xe1zev firmy"}),r.a.createElement("br",null),r.a.createElement(h.a,{field:"number",placeholder:"I\u010c"}),r.a.createElement(h.a,{field:"vatIdent",placeholder:"DI\u010c"}),r.a.createElement(j,null,r.a.createElement(z,null)))},_=a(1532),x=function(e){return r.a.createElement("div",null,r.a.createElement(_.a,{fieldName:"onlyPersonalPickup",label:d.b._("We are not delivering, only take away.")}),r.a.createElement("br",null),r.a.createElement(_.a,{fieldName:"stoppage",label:d.b._("Completely stop all orders.")}))},M=function(e){return r.a.createElement(p.a,{pageTitle:d.b._("Branch preferences")},r.a.createElement(m.a,null,r.a.createElement(E.a,null),r.a.createElement(s.a,null,r.a.createElement(u.Trans,{id:"branch.preferences.stoppage"})),r.a.createElement(x,null),r.a.createElement(s.a,null,r.a.createElement(u.Trans,{id:"Change of invoice preferences"})),r.a.createElement(O,null)))},N=function(){return r.a.createElement(l.e,null,r.a.createElement(o.a,{exact:!0,path:i.d,component:M}),r.a.createElement(l.c,{component:c.a}))},k=a(38),C=Object(k.a)(r.a.createElement("path",{d:"M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"}),"AvTimer"),F=Object(k.a)(r.a.createElement("path",{d:"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z"}),"EditLocation"),q=a(2633),H=Object(k.a)(r.a.createElement("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}),"InsertDriveFile"),L=Object(k.a)(r.a.createElement("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder"),P=a(1771),Q=a(151),R=a(1461),V=a(1456),I=a(1483),S=function(){return r.a.createElement(I.a,null,r.a.createElement(Q.a.Route,{path:i.a,title:d.b._("Settings")}),r.a.createElement(V.a,{row:1,column:1,canQuery:"businessHours",text:d.b._("Business hours"),icon:C,color:y.a.red,route:i.b}),r.a.createElement(V.a,{row:1,column:2,canQuery:"zones",text:d.b._("Delivery zones"),icon:F,color:y.a.violet,route:i.f}),r.a.createElement(V.a,{row:1,column:3,canQuery:"user",text:d.b._("User"),icon:q.a,color:y.a.greyMiddle,route:i.e}),r.a.createElement(V.a,{row:2,column:1,canQuery:"recipes",text:d.b._("Recipes"),icon:H,color:y.a.turquoise,route:R.c}),r.a.createElement(V.a,{row:2,column:2,canQuery:"wareCategories",text:d.b._("Categories"),icon:L,color:y.a.turquoise,route:R.b}),r.a.createElement(V.a,{row:2,column:3,canQuery:"stockItems",text:d.b._("Stock overview"),icon:P.a,color:y.a.turquoise,route:R.d}))};a.d(t,"SettingsRouting",function(){return J});var T=r.a.lazy(function(){return Promise.all([a.e(3),a.e(191),a.e(185)]).then(a.bind(null,2840))}),W=r.a.lazy(function(){return Promise.all([a.e(168),a.e(194),a.e(184)]).then(a.bind(null,2836))}),B=r.a.lazy(function(){return Promise.all([a.e(1),a.e(168),a.e(186),a.e(166),a.e(187)]).then(a.bind(null,2834))}),D=r.a.lazy(function(){return a.e(195).then(a.bind(null,2846))}),J=function(){return r.a.createElement(l.e,null,r.a.createElement(o.a,{path:i.a,exact:!0,component:S}),r.a.createElement(o.a,{path:i.c,component:B}),r.a.createElement(o.a,{path:i.f,component:W}),r.a.createElement(o.a,{path:i.e,component:D}),r.a.createElement(o.a,{path:i.b,component:T}),r.a.createElement(o.a,{path:i.d,component:N}),r.a.createElement(l.c,{component:c.a}))};t.default=J}}]);
//# sourceMappingURL=192.088186b7.chunk.js.map