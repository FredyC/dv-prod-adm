(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{7658:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),c=n(7668),l=n(53),i=function(e){var t=e.mutationName,n=e.children;return Object(l.c)().user.canMutate(t)?r.a.createElement(r.a.Fragment,null,n):r.a.createElement(c.a,null,"No access to mutation ".concat(t))}},7668:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(0);var a=function(e){e.children;return null}},7671:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),c=n(7668),l=n(53),i=function(e){var t=e.queryName,n=e.children;return Object(l.c)().user.canQuery(t)?r.a.createElement(r.a.Fragment,null,n):r.a.createElement(c.a,null,"No access to query ".concat(t))}},7734:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(18),r=n(12),c=a.b.div.withConfig({displayName:"TouchButtonBadge",componentId:"k2m3oh-0"})(["min-height:1.8rem;line-height:1.8rem;min-width:1.8rem;font-size:1.2rem;margin:0;background-color:",";color:white;position:absolute;right:-0.25rem;top:-0.25rem;border-radius:1.8rem;text-align:center;vertical-align:middle;padding:0;"],r.a.red)},7789:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(0),r=n.n(a),c=n(43),l=n(7734),i=n(38),u=n(294),o=n(12),m=function(e){var t=e.count;return r.a.createElement(c.b,{to:"/order"},r.a.createElement(u.a,{text:i.d._("Orders"),iconName:"assignment_returned",badge:t&&t>0?r.a.createElement(l.a,null,t):null,color:o.a.yellow}))}},7946:function(e,t,n){"use strict";var a=n(150),r=n(0),c=n.n(r),l=n(351),i=n(43),u=n(7734),o=n(38),m=n(294),d=n(12),s=n(2),b=n(3);function E(){var e=Object(s.a)(["\n  subscription SOrderCall {\n    call: updatedUserCallingCustomer {\n      eventId\n      phone\n      prefix\n      isRinging\n    }\n  }\n"]);return E=function(){return e},e}var h=n.n(b)()(E());n.d(t,"a",function(){return v});var v=function(e){var t=e.showOnlyText,n=void 0!==t&&t,r=Object(l.a)(h).data,s={pathname:"/order/create",state:r?r.call:null};return c.a.createElement(i.b,{to:s},c.a.createElement(m.a,{text:o.d._("Create order"),iconName:n?void 0:"add_circle",color:d.a.turquoise,badge:r&&r.call&&r.call.isRinging?c.a.createElement(u.a,null,c.a.createElement(a.h,null)):null}))}},8134:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7658),l=n(7671),i=n(38),u=n(302),o=(n(64),n(294)),m=n(12),d=function(e){return null},s=n(7946),b=n(43),E=function(){return r.a.createElement(b.b,{to:"/kitchen"},r.a.createElement(o.a,{text:i.d._("Kitchen"),iconName:"restaurant_menu",color:m.a.blue}))},h=function(e){var t=e.children;return r.a.createElement(b.b,{to:"/order/map"},r.a.createElement(o.a,{text:i.d._("Map"),iconName:"map",color:m.a.greyMiddle},t))},v=n(7789),f=function(e){var t=e.children;return r.a.createElement(b.b,{to:"/overview"},r.a.createElement(o.a,{text:i.d._("Overview"),iconName:"trending_up",color:m.a.greyDark},t))},g=function(e){var t=e.children;return r.a.createElement(b.b,{to:"/settings"},r.a.createElement(o.a,{text:i.d._("Settings"),iconName:"settings",color:m.a.greyDark},t))},y=function(e){var t=e.children;return r.a.createElement(b.b,{to:"/support"},r.a.createElement(o.a,{text:i.d._("Support"),iconName:"help",color:m.a.green},t))};n.d(t,"MainDashboardPage",function(){return p});var p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{layouts:[{i:"b1",x:0,y:1,w:2,h:2,static:!0},{i:"b2",x:2,y:1,w:2,h:2,static:!0},{i:"b3",x:4,y:1,w:2,h:2,static:!0},{i:"b4",x:10,y:1,w:1,h:2,static:!0},{i:"b5",x:0,y:3,w:2,h:2,static:!0},{i:"bb1",x:0,y:7,w:2,h:2,static:!0},{i:"bb2",x:2,y:7,w:2,h:2,static:!0},{i:"bb3",x:4,y:7,w:2,h:2,static:!0},{i:"bb4",x:14,y:7,w:2,h:2,static:!0}],pageTitle:i.d._("Main menu"),showSoundControl:!0},r.a.createElement("div",{key:"b1"},r.a.createElement(l.a,{queryName:"orders"},r.a.createElement(v.a,null))),r.a.createElement("div",{key:"b2"},r.a.createElement(l.a,{queryName:"orders"},r.a.createElement(h,null))),r.a.createElement("div",{key:"b3"},r.a.createElement(c.a,{mutationName:"createOrder"},r.a.createElement(s.a,null))),r.a.createElement("div",{key:"b4"},r.a.createElement(c.a,{mutationName:"createOrder"},r.a.createElement(d,null))),r.a.createElement("div",{key:"b5"},r.a.createElement(E,null)),r.a.createElement("div",{key:"bb1"},r.a.createElement(g,null)),r.a.createElement("div",{key:"bb2"},r.a.createElement(f,null)),r.a.createElement("div",{key:"bb4"},r.a.createElement(y,null))))};t.default=p}}]);
//# sourceMappingURL=179.b0653e5f.chunk.js.map