(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{7498:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(0),n=r.n(a),c=r(7504),o=r(52);const i=({mutationName:e,children:t})=>{const{user:r}=Object(o.c)();return r.canMutate(e)?n.a.createElement(n.a.Fragment,null,t):n.a.createElement(c.a,null,`No access to mutation ${e}`)}},7504:function(e,t,r){"use strict";r.d(t,"a",function(){return a});r(0);const a=({children:e})=>null},7508:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(0),n=r.n(a),c=r(7504),o=r(52);const i=({queryName:e,children:t})=>{const{user:r}=Object(o.c)();return r.canQuery(e)?n.a.createElement(n.a.Fragment,null,t):n.a.createElement(c.a,null,`No access to query ${e}`)}},7547:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r(0),n=r(14);function c(){return Object(a.useContext)(n.f)}},7555:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r(12),n=r(9);const c=a.b.div.withConfig({displayName:"TouchButtonBadge"})`
  min-height: 1.8rem;
  line-height: 1.8rem;
  min-width: 1.8rem;
  font-size: 1.2rem;
  margin: 0;
  background-color: ${n.a.red};
  color: white;
  position: absolute;
  right: -0.25rem;
  top: -0.25rem;
  border-radius: 1.8rem;
  text-align: center;
  vertical-align: middle;
  padding: 0;
`},7556:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r(269);function n(e){return function(t){return Object(a.a)(()=>{const{queryResult:r,variables:a,handleUpdate:n}=t;return r.subscribeToMore({document:e,variables:a,updateQuery:(e,{subscriptionData:t})=>t&&t.data&&n(t.data,e)||e})}),t.children}}},7620:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var a=r(0),n=r.n(a),c=r(84),o=r(7555),i=r(37),l=r(261),u=r(9);const s=({count:e})=>n.a.createElement(c.b,{to:"/order"},n.a.createElement(l.a,{text:i.d._("Orders"),iconName:"assignment_returned",badge:e&&e>0?n.a.createElement(o.a,null,e):null,color:u.a.yellow}))},7777:function(e,t,r){"use strict";var a=r(125),n=r(0),c=r.n(n),o=r(84),i=r(7555),l=r(37),u=r(261),s=r(9),d=r(129),m=r(3);const b=r.n(m).a`
  subscription SOrderCall {
    updatedUserCallingCustomer {
      eventId
      phone
      isRinging
    }
  }
`,E=({render:e})=>c.a.createElement(d.Subscription,{subscription:b},({data:t})=>e(t?t.updatedUserCallingCustomer:null));r.d(t,"a",function(){return h});const h=({showOnlyText:e=!1})=>c.a.createElement(E,{render:t=>{const r={pathname:`/order/create/${t?t.phone:""}`,state:{eventId:t?t.eventId:null}};return c.a.createElement(o.b,{to:r},c.a.createElement(u.a,{text:l.d._("Create order"),iconName:e?void 0:"add_circle",color:s.a.turquoise,badge:t&&t.isRinging?c.a.createElement(i.a,null,c.a.createElement(a.d,null)):null}))}})},7935:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(7498),o=r(7508),i=r(59),l=r(37),u=r(267),s=(r(7547),r(261)),d=r(9);const m=e=>null;var b=r(7777),E=r(84);const h=({children:e})=>n.a.createElement(E.b,{to:"/order/map"},n.a.createElement(s.a,{text:l.d._("Map"),iconName:"map",color:d.a.greyMiddle},e));var g=r(7620);const p=({children:e})=>n.a.createElement(E.b,{to:"/overview"},n.a.createElement(s.a,{text:l.d._("Overview"),iconName:"trending_up",color:d.a.greyDark},e)),y=({children:e})=>n.a.createElement(E.b,{to:"/settings"},n.a.createElement(s.a,{text:l.d._("Settings"),iconName:"settings",color:d.a.greyDark},e)),v=({children:e})=>n.a.createElement(E.b,{to:"/support"},n.a.createElement(s.a,{text:l.d._("Support"),iconName:"help",color:d.a.green},e));var f=r(51),C=r(3),w=r.n(C),O=r(32),x=r(7556);const N=w.a`
  query GOrderCount(
    $branchesId: [ID!]!
    $categories: [OrderStateCategoryEnum!]!
  ) {
    ordersCount(companyBranches: $branchesId, orderStateCategories: $categories)
  }
`,$=w.a`
  subscription SOrderCount(
    $branchesId: [ID!]!
    $categories: [OrderStateCategoryEnum!]!
  ) {
    updatedOrdersCount(companyBranches: $branchesId) {
      ordersCount(
        companyBranches: $branchesId
        orderStateCategories: $categories
      )
    }
  }
`,k=Object(O.a)(N),I=Object(x.a)($),S=({render:e,categories:t})=>n.a.createElement(f.a,{render:r=>{if(!r.order.list.hasBranchFilter)return e(null);const a={branchesId:r.order.list.branchesFilter,categories:t};return n.a.createElement(k,{variables:a,refetchOnConnectionLost:!0,renderLoading:!1,render:({ordersCount:t},r)=>n.a.createElement(I,{variables:a,queryResult:r,handleUpdate:e=>({ordersCount:e.updatedOrdersCount.ordersCount})},e(t))})}});r.d(t,"MainDashboardPage",function(){return _});const _=e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{layouts:[{i:"b1",x:0,y:1,w:2,h:2,static:!0},{i:"b2",x:2,y:1,w:2,h:2,static:!0},{i:"b3",x:4,y:1,w:2,h:2,static:!0},{i:"b4",x:10,y:1,w:1,h:2,static:!0},{i:"bb1",x:0,y:7,w:2,h:2,static:!0},{i:"bb2",x:2,y:7,w:2,h:2,static:!0},{i:"bb3",x:4,y:7,w:2,h:2,static:!0},{i:"bb4",x:14,y:7,w:2,h:2,static:!0}],pageTitle:l.d._("Main menu"),showSoundControl:!0},n.a.createElement("div",{key:"b1"},n.a.createElement(o.a,{queryName:"orders"},n.a.createElement(S,{categories:[i.c.NEW_ORDERS],render:e=>n.a.createElement(g.a,{count:e})}))),n.a.createElement("div",{key:"b2"},n.a.createElement(o.a,{queryName:"orders"},n.a.createElement(h,null))),n.a.createElement("div",{key:"b3"},n.a.createElement(c.a,{mutationName:"createOrder"},n.a.createElement(b.a,null))),n.a.createElement("div",{key:"b4"},n.a.createElement(c.a,{mutationName:"createOrder"},n.a.createElement(m,null))),n.a.createElement("div",{key:"bb1"},n.a.createElement(y,null)),n.a.createElement("div",{key:"bb2"},n.a.createElement(p,null)),n.a.createElement("div",{key:"bb4"},n.a.createElement(v,null))));t.default=_}}]);
//# sourceMappingURL=49.0a2f51d4.chunk.js.map