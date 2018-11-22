(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{100:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(4);const a=n(11).a.named("MenuBase").views(e=>({get branchId(){return Object(r.d)(e).settings.branchId}}))},101:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return l});var r=n(3),a=n.n(r),o=n(288),i=n(289);const c=a.a`
  fragment GMenuStockItem on StockItem {
    id
    code
    note
    plu
    quantity
    nameLabel: label
    allergens {
      ...GAllergen
    }
    wareUnit {
      ...GWareUnit
    }
  }
  ${i.a}
  ${o.a}
`,s=a.a`
  mutation GMenuStockCreate($stockItem: InputStockItemCreate!) {
    createStockItem(stockItem: $stockItem) {
      ...GMenuStockItem
    }
  }
  ${c}
`,u=a.a`
  mutation GMenuStockUpdate($stockId: ID!, $stockItem: InputStockItemUpdate!) {
    updateStockItem(id: $stockId, stockItem: $stockItem) {
      ...GMenuStockItem
    }
  }
  ${c}
`,l=a.a`
  mutation GMenuStockDelete($stockId: ID!) {
    destroyStockItem(id: $stockId) {
      id
    }
  }
`},104:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(5),a=n(84),o=n(0),i=n.n(o),c=n(17),s=n(12),u=n(40),l=n(15),d=n(9);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const f=s.b.h1.withConfig({displayName:"TitleStyled"})`
  color: ${d.a.greyLight};
  font-weight: lighter;
  margin: 0.5rem 0.5rem 0 0.5rem;
  white-space: nowrap;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
`,h=r.v.array([]);Object(r.i)(()=>{const e=Array.from(h).pop();document.title=e?`${e} :: ${u.a.pageTitleSuffix}`:u.a.pageTitleSuffix});class b extends i.a.Component{componentDidMount(){h.push(this.props.title)}componentDidUpdate(e){const t=h.findIndex(l.a.equals(e.title));t>=0&&h.splice(t,1,this.props.title)}componentWillUnmount(){h.remove(this.props.title)}render(){return null}}b.Route=(e=>{var{title:t}=e,n=m(e,["title"]);return i.a.createElement(c.c,p({},n,{render:()=>i.a.createElement(b,{title:t})}))}),b.Display=(()=>i.a.createElement(a.a,null,()=>i.a.createElement(f,null,h.join(" - "))))},11:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(21),a=n.n(r),o=n(4),i=n(35);const c=o.j.model().views(e=>({get log(){return a()(`model/${Object(o.e)(e)}`)},get client(){const t=Object(o.c)(e).apolloClient;if(!t)throw new i.VError("Apollo client is missing from environment setup");return t},get root(){return Object(o.f)(e)}}))},112:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return l});var r=n(3),a=n.n(r),o=n(172);const i=a.a`
  fragment GOrderStateCategory on Order {
    id
    orderStateCategory
  }
`,c=a.a`
  mutation GUpdateOrderState($orderId: ID!, $state: OrderStateEnum!) {
    addOrderState(order: $orderId, orderState: $state) {
      ...GOrderStateCategory
      orderTiming: orderStateCategoryRelations {
        createdAt
        orderStateCategory
      }
    }
  }
  ${i}
`,s=a.a`
  mutation GSendOrderNotification($orderId: ID!, $minutes: Int!) {
    orderNotifyCustomer(id: $orderId, minutes: $minutes) {
      id
      deliverAt
    }
  }
`,u=a.a`
  mutation GSelectOrderDriver($driverId: ID!, $orderId: ID!) {
    createUserDeliveringOrder(user: $driverId, order: $orderId) {
      order {
        ...GOrderDriver
      }
    }
  }
  ${o.a}
`,l=a.a`
  mutation GRemoveOrderDriver($orderDriverId: ID!) {
    destroyUserDeliveringOrder(id: $orderDriverId) {
      order {
        ...GOrderDriver
      }
    }
  }
  ${o.a}
`},121:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return s});var r=n(3),a=n.n(r),o=n(37);const i=a.a`
  fragment GMenuCategoryListItem on WareCategory {
    id
    nameLabel
    internalNoteLabel
    countRecipes
    visible: enabled
    categoryType: wareCategoryType {
      enum
    }
  }
`,c=a.a`
  query GCategoryList($branchId: ID!, $categoryType: WareCategoryTypeEnum!) {
    wareCategories(companyBranch: $branchId, wareCategoryType: $categoryType) {
      ...GMenuCategoryListItem
    }
  }
  ${i}
`,s=Object(o.a)(c)},122:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return s});var r=n(3),a=n.n(r),o=n(38);const i=a.a`
  fragment GZone on Zone {
    id
    name
    enabled
    priority
    companyBranch {
      id
      brand {
        id
      }
    }
    geoPolygon {
      ...GGeoPoint
    }
    priceRangeRules {
      ...GZonePriceRange
    }
    minimalOrderPrice {
      ...GPrice
    }
    zoneColor {
      id
      code
      color
    }
  }

  fragment GZonePriceRange on ZonePriceRangeRule {
    toPrice {
      ...GPrice
    }
    price {
      ...GPrice
    }
  }

  ${o.g}
  ${o.e}
`,c=a.a`
  query GZoneLocation($zoneId: ID!) {
    zone(id: $zoneId) {
      id
      companyBranch {
        id
        gps {
          ...GGeoPoint
        }
      }
    }
  }
  ${o.e}
`,s=(a.a`
  query GZoneBranchLocation($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      gps {
        ...GGeoPoint
      }
    }
  }
  ${o.e}
`,a.a`
  query GZoneColors {
    zoneColors {
      id
      code
      color
    }
  }
`)},124:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var r=n(3),a=n.n(r);const o=a.a`
  query GValidateLocation(
    $branchId: ID!
    $latitude: Float!
    $longitude: Float!
  ) {
    resolveLocation(
      companyBranch: $branchId
      latitude: $latitude
      longitude: $longitude
    ) {
      inDeliveryLocation
    }
  }
`,i=a.a`
  mutation GCreateOrder(
    $branchId: ID!
    $deliveryType: DeliveryTypeEnum!
    $gps: InputGeoPointCreate!
    $callEventId: ID
  ) {
    createOrder(
      order: {
        companyBranch: $branchId
        deliveryType: $deliveryType
        callEventId: $callEventId
        gps: $gps
        customer: {}
        warePriceType: DELIVERY
        orderOrigin: STAFF
      }
    ) {
      id
    }
  }
`,c=a.a`
  mutation GUpdateOrder(
    $orderId: ID!
    $deliveryType: DeliveryTypeEnum!
    $gps: InputGeoPointCreate!
  ) {
    updateOrder(
      id: $orderId
      order: { deliveryType: $deliveryType, gps: $gps }
    ) {
      id
    }
  }
`,s=a.a`
  mutation MAcceptOrder(
    $orderId: ID!
    $deliveryType: DeliveryTypeEnum!
    $customer: InputCustomerCreate!
    $gps: InputGeoPointCreate!
    $note: String
  ) {
    updateOrder(
      id: $orderId
      order: { deliveryType: $deliveryType, gps: $gps }
    ) {
      id
    }
    finishOrder(
      id: $orderId
      order: {
        customer: $customer
        note: $note
        paymentMethod: CASH
        paymentGate: CASH
      }
    ) {
      userErrors
    }
  }
`,u=a.a`
  mutation MCancelOrder($orderId: ID!) {
    addOrderState(order: $orderId, orderState: CANCELED) {
      id
    }
  }
`},127:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),a=n.n(r),o=n(104),i=n(36);const c=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:i.d._("Not found")}),a.a.createElement("h1",null,i.d._("There is nothing here, sorry!")))},15:function(e,t,n){"use strict";var r=n(24);n.d(t,"a",function(){return r})},165:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(21),a=n.n(r),o=n(0),i=n.n(o),c=n(17);const s=a()("routing"),u=({useOrigin:e=!0})=>i.a.createElement(c.c,{path:"/login",children:({match:t,location:n})=>t?null:(s("redirecting to login..."),i.a.createElement(c.b,{to:{pathname:"/login",state:{origin:e?n.pathname:"/"}}}))})},169:function(e,t,n){"use strict";n.d(t,"f",function(){return l}),n.d(t,"b",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"c",function(){return f}),n.d(t,"e",function(){return h}),n.d(t,"a",function(){return b});var r=n(103),a=n(258),o=n(489),i=n.n(o),c=n(82),s=n.n(c);const u=Object(a.formatWithOptions)({locale:i.a}),l="dddd LL",d=(u(l),u("D.M.YYYY"),Object(a.format)("YYYY-MM-DD")),p=u("H:mm"),m=u("D.M.YYYY H:mm"),f=e=>s()(e).format("0,0.[00]"),h=e=>Object(r.e)(e,new Date)?p(e):m(e),b=e=>e.street?e.houseNumber?`${e.street} ${e.houseNumber}, ${e.city}`:`${e.street}, ${e.city}`:e.city?`${e.city} ${e.houseNumber}, ${e.state}`:`${e.state}`},172:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var r=n(3),a=n.n(r),o=n(37);const i=a.a`
  fragment GDriver on User {
    id
    firstName
    lastName
  }
`,c=a.a`
  fragment GOrderDriver on Order {
    id
    driver: userDeliveringOrder {
      id
      user {
        ...GDriver
      }
    }
  }
  ${i}
`,s=a.a`
  query GOrderDriverSelection($orderId: ID!, $branchId: ID!) {
    order(id: $orderId) {
      ...GOrderDriver
    }
    drivers(companyBranch: $branchId, onlyAvailable: false) {
      ...GDriver
    }
  }
  ${c}
`,u=Object(o.a)(s)},18:function(e,t,n){"use strict";n.d(t,"h",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"j",function(){return u}),n.d(t,"i",function(){return l}),n.d(t,"b",function(){return d}),n.d(t,"f",function(){return p}),n.d(t,"e",function(){return m}),n.d(t,"k",function(){return f}),n.d(t,"g",function(){return h});var r=n(21),a=n.n(r);a.a.useColors=(()=>!1);const o=a()("main"),i=a()("debug"),c=a()("error"),s=a()("auth"),u=a()("routing"),l=a()("persistence"),d=a()("bootstrap"),p=(a()("access"),a()("graph")),m=a()("form"),f=a()("sentry"),h=a()("lang");console.log},241:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var r=n(3),a=n.n(r),o=n(37),i=n(58);const c=a.a`
  query GMenuRecipeList(
    $branchId: ID!
    $categoryId: ID
    $categoryType: WareCategoryTypeEnum
  ) {
    recipes(
      companyBranch: $branchId
      wareCategory: $categoryId
      wareCategoryType: $categoryType
    ) {
      ...GMenuRecipe
    }
  }
  ${i.c}
`,s=Object(o.a)(c)},242:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var r=n(3),a=n.n(r),o=n(37),i=n(101);const c=a.a`
  query GMenuStockList($branchId: ID!) {
    stockItems(companyBranch: $branchId) {
      ...GMenuStockItem
    }
  }
  ${i.c}
`,s=Object(o.a)(c)},263:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(0),a=n.n(r),o=n(12),i=n(70),c=n(9);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const l=e=>t=>Object(c.d)(t.color,e),d=o.b.button.withConfig({displayName:"TouchButtonStyled"})`
  min-height: ${c.c.ButtonHeight};
  min-width: ${c.c.ButtonHeight};
  width: ${({width:e="100%"})=>e};
  height: ${({height:e="100%"})=>e};
  margin: 0;
  padding: 0.2rem;
  border: none;
  border-radius: ${c.b.Button};
  background-color: ${l(.7)};
  color: white;
  position: relative;
  /* fallback font size for incompatible browsers */
  font-size: 1rem;
  font-size: calc(0.6rem + 0.5vw);
  transition-duration: 0.2s;

  &:hover:enabled {
    background-color: ${l(.9)};
  }
  &:active:enabled {
    background-color: ${l(1)};
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,p=o.b.div.withConfig({displayName:"ButtonLabelStyled"})`
  color: white;
  text-align: center;
  width: 100%;
  overflow: hidden;
`,m=Object(o.b)(p).withConfig({displayName:"ButtonLabelNextToIconStyled"})`
  width: calc(100% - 4rem);
  margin: 0 0 0 1rem;
  text-align: left;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
`,f=e=>{var{children:t,iconName:n,iconColor:r=c.a.white,iconSize:o=3,color:l=c.a.greyMiddle,textNextToIcon:f=!1,badge:h,text:b}=e,g=u(e,["children","iconName","iconColor","iconSize","color","textNextToIcon","badge","text"]);return a.a.createElement(d,s({color:l},g),n&&a.a.createElement(i.a,{iconName:n,color:r,fontSize:o}),b&&f&&a.a.createElement(m,null,b),b&&!f&&a.a.createElement(p,null,b),h,t)}},266:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(97),a=n.n(r),o=n(12),i=n(9);const c=o.b.div.withConfig({displayName:"Card"})`
  background: ${function({color:e}){return a()(e||i.a.greyLight).alpha(.8).lighten(.4).string()}};
  color: ${function(e){return e.textColor||i.a.black}};
  border-radius: ${i.b.Card};
  padding: ${function({padding:e=.5}){return e}}rem;
  margin: 0 0 0.5rem 0;
  ${function({stretchToParent:e=!1}){if(!e)return"";return o.a`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `}};
`;c.displayName="Card"},269:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),o=n(271);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const s=e=>{var{children:t,width:n=16}=e,r=c(e,["children","width"]);return a.a.createElement(o.a,i({layouts:function(e){return[{i:"full",x:0,y:1,w:e,h:10}]}(n)},r),a.a.createElement("div",{key:"full"},t))}},271:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(12),i=n(290),c=n(104),s=(n(7481),n(263)),u=n(9),l=n(51);const d=o.b.div.withConfig({displayName:"SoundControlContainerStyled"})`
  position: relative;
`,p=Object(o.b)(s.a).withConfig({displayName:"SoundButtonStyled"})`
  height: ${u.c.ButtonHeight};
  width: ${u.c.ButtonHeight};
  position: absolute;
  right: 0;
  top: 0;
`;class m extends a.a.Component{constructor(){super(...arguments),this.state={playPreview:!1}}render(){return a.a.createElement(l.a,{observe:!0,render:({user:e})=>a.a.createElement(d,null,a.a.createElement(p,{color:e.soundEnabled?u.a.green:u.a.red,iconName:e.soundEnabled?"volume_up":"volume_off",iconSize:2,onClick:()=>{e.controlSound(!e.soundEnabled)}}))})}}var f=n(83),h=n(70),b=n(36),g=n(3),y=n.n(g),v=n(37);const I=Object(v.a)(y.a`
  query GLogoutWidget($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
    }
  }
`),E=o.b.div.withConfig({displayName:"LogoutWidgetStyled"})`
  margin-left: 1rem;
  color: ${u.a.greyLight};
  &:hover {
    color: ${u.a.white};
  }
`,O=o.b.span.withConfig({displayName:"LoggedUserNameStyled"})`
  color: ${u.a.greyLight};
  text-decoration: none;
  font-weight: lighter;
  position: relative;
  top: 0.6rem;
  display: inline-block;
  max-width: 10rem;
  text-align: right;
`,C=o.b.span.withConfig({displayName:"IconStyled"})`
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: inline-block;
  vertical-align: top;
`,A=()=>a.a.createElement(l.a,{render:({auth:e})=>a.a.createElement(I,{variables:{id:e.userId},renderLoading:()=>null,render:({user:e})=>a.a.createElement(E,{"data-testid":"logout-widget"},a.a.createElement(f.b,{to:"/logout"},a.a.createElement(O,null,function(e){return e?`${e.firstName} ${e.lastName}`:b.d._("Not logged in")}(e)),a.a.createElement(C,null,a.a.createElement(h.a,{iconName:"exit_to_app"}))))})});var D=n(71),S=n(97),N=n.n(S),R=n(17);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const T=e=>t=>N()(t.color).alpha(e).string(),$=o.b.button.withConfig({displayName:"HomeButtonStyled"})`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 ${u.b.Button} 0 !important;
  height: ${u.c.ButtonHeight};
  width: ${u.c.ButtonHeight};
  margin: 0;
  padding: 0.2rem;
  border: none;
  border-radius: ${u.b.Button};
  background-color: ${T(.7)};
  color: white;
  position: relative;
  font-size: 1rem;
  transition-duration: 0.2s;

  &:hover:enabled {
    background-color: ${T(.9)};
  }
  &:active:enabled {
    background-color: ${T(1)};
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,P=e=>{var{color:t=u.a.greyMiddle,iconColor:n=u.a.white,goBack:r=!1,backRoute:o}=e,i=w(e,["color","iconColor","goBack","backRoute"]);return r?a.a.createElement(R.c,null,({history:e})=>a.a.createElement($,j({color:t,onClick:()=>{o?e.push(o):e.goBack()}},i),a.a.createElement(h.a,{iconName:"chevron_left",color:n,fontSize:2.2}))):a.a.createElement(f.b,{to:"/"},a.a.createElement($,j({color:t},i),a.a.createElement(h.a,{iconName:"home",color:n,fontSize:2.2})))};n.d(t,"a",function(){return _});const L=o.b.div.withConfig({displayName:"TopLeftButtonContainer"})`
  position: fixed;
  top: 0;
  left: 0;
`,M=e=>e.scrollPageTitle?"absolute":"fixed",B=o.b.div.withConfig({displayName:"TopRightContainer"})`
  position: ${M};
  top: 0;
  right: 0;
  z-index: 100;
`,G=o.b.div.withConfig({displayName:"PageTitleContainer"})`
  position: ${M};
  top: 0rem;
  left: 4rem;
`,F=o.b.div.withConfig({displayName:"SoundControlContainer"})`
  position: fixed;
  top: 0rem;
  right: 15rem;
`,_=({pageTitle:e="",layouts:t=[],hideLogoutWidget:n=!1,showSoundControl:r=!1,useBackButton:o=!1,scrollPageTitle:s=!0,backRoute:u,children:l})=>a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(c.a,{title:e}),r&&a.a.createElement(F,null,a.a.createElement(m,null)),!n&&a.a.createElement(B,{scrollPageTitle:s},a.a.createElement(D.a,{path:"/",component:A,redirect:!1})),a.a.createElement(G,{scrollPageTitle:s},a.a.createElement(c.a.Display,null)),a.a.createElement(i.a,{layouts:[...t]},l),a.a.createElement(L,null,a.a.createElement(P,{goBack:o,backRoute:u})))},274:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n.n(r);const o=({text:e="..."})=>a.a.createElement("h1",null,e)},286:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return h});var r=n(82),a=n.n(r),o=n(48),i=n(67),c=n(15),s=n(287),u=n(241),l=n(100),d=n(58),p=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const m=l.a.named("MenuRecipe").actions(e=>({changeVisibility(t,n){e.client.mutate({mutation:d.e,variables:{recipeId:t,visible:n},optimisticResponse:{updateRecipe:{__typename:"Recipe",id:t,visible:n}}})},createRecipe(t,n){const r={recipe:Object.assign({companyBranch:e.branchId,wareCategoryType:n},f(t))};return Object(o.b)(e.client.mutate({mutation:d.a,variables:r,refetchQueries:[{query:u.a,variables:{branchId:e.branchId}}]}))},updateRecipe(t){const n={recipeId:t.id,recipe:Object.assign({},f(t))};return Object(o.b)(e.client.mutate({mutation:d.d,variables:n}))},deleteRecipe(t){return p(this,void 0,void 0,function*(){const n={recipeId:t};yield e.client.mutate({mutation:d.b,variables:n,refetchQueries:[{query:u.a,variables:{branchId:e.branchId}}]})})},getDefaultVat(){return p(this,void 0,void 0,function*(){const{data:t}=yield e.client.query({query:s.a,variables:{branchId:e.branchId}});if(t){const{companyBranch:{defaultVats:e}}=t;return e.reduce((e,{vatId:t,priceType:n})=>(e[n.enum]=t,e),{})}return{}})}}));function f(e){return{code:e.code,nameLabel:e.nameLabel,internalNote:e.internalNote,descriptionLabel:e.descriptionLabel,enabled:e.visible,prices:Object.keys(e.prices).map((t,n)=>({warePriceType:i.f[t],price:{value:a()(e.prices[t].value).value()},vat:e.prices[t].vatId})),sideDishCategories:e.sideDishes.map(c.a.prop("id")),wareCategories:e.categories.map(c.a.prop("id")),associatedRecipes:e.associatedRecipes.map(c.a.pick(["associatedRecipe","warePriceType"])),ingredients:e.ingredients.map(({stockItem:e,quantity:t})=>({stockItem:e,quantity:function(e){return"number"===typeof e?e:Number.parseFloat(e.replace(",","."))}(t)}))}}const h=(e,t)=>({pathname:e,state:{recipeType:t}})},287:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return m});var r=n(3),a=n.n(r),o=n(37),i=n(38),c=n(121);const s=a.a`
  fragment GMenuRecipePrice on RecipePrice {
    id
    priceType: warePriceType {
      enum
    }
    price {
      ...GPrice
    }
    vat {
      id
    }
  }
  ${i.g}
`,u=a.a`
  fragment GMenuAssocRecipe on Recipe {
    id
    nameLabel
  }
`,l=a.a`
  query GMenuRecipeForm($recipeId: ID!) {
    recipe(id: $recipeId) {
      id
      code
      image
      nameLabel
      internalNote
      descriptionLabel
      visible: enabled
      recipeType: wareCategoryType {
        enum
      }
      sourcePrices: prices {
        ...GMenuRecipePrice
      }
      sideDishes: sideDishesWareCategories {
        ...GMenuCategoryListItem
      }
      categories: wareCategories {
        ...GMenuCategoryListItem
      }
      sourceAssociatedRecipes: associatedRecipes {
        id
        priceType: warePriceType {
          enum
        }
        recipe: associatedRecipe {
          ...GMenuAssocRecipe
        }
      }
      sourceIngredients: ingredients {
        id
        quantity
        stockItem {
          id
          label
          wareUnit {
            id
            code
          }
          allergens {
            id
            enum
          }
        }
      }
    }
  }
  ${s}
  ${c.b}
  ${u}
`,d=a.a`
  query GMenuRecipeFormAssoc($branchId: ID!) {
    recipes(companyBranch: $branchId) {
      ...GMenuAssocRecipe
    }
  }
  ${u}
`,p=a.a`
  query GMenuRecipeDefaultVat($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      defaultVats {
        vatId: id
        priceType: warePriceType {
          enum
        }
      }
    }
  }
`,m=Object(o.a)(d)},288:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(3);const a=n.n(r).a`
  fragment GAllergen on Allergen {
    id
    code
    enum
    category
  }
`},289:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(3);const a=n.n(r).a`
  fragment GWareUnit on WareUnit {
    id
    enum
    code
  }
`},290:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),o=n(261),i=n.n(o);const c=Object(o.WidthProvider)(i.a),s=({children:e,layouts:t})=>a.a.createElement(c,{className:"layout",layout:t,cols:16,rowHeight:55,margin:[8,8],autoSize:!1,isDraggable:!1,isResizable:!1,compactType:null,measureBeforeMount:!0},e)},291:function(e,t,n){"use strict";var r=n(48),a=n(15),o=n(121),i=n(100),c=n(3),s=n.n(c),u=n(439);const l=s.a`
  mutation GSortMenuCategory($categoryId: ID!, $offset: Int!) {
    success: updateWareCategoriesOrder(
      wareCategory: $categoryId
      offset: $offset
    )
  }
`,d=s.a`
  mutation GMenuCategoryCreate($input: InputWareCategoryCreate!) {
    createWareCategory(wareCategory: $input) {
      id
    }
  }
`,p=s.a`
  mutation GMenuCategoryUpdate(
    $categoryId: ID!
    $input: InputWareCategoryUpdate!
  ) {
    updateWareCategory(id: $categoryId, wareCategory: $input) {
      ...GMenuCategoryForm
    }
  }
  ${u.a}
`,m=s.a`
  mutation GMenuCategoryVisibility($categoryId: ID!, $visible: Boolean!) {
    updateWareCategory(id: $categoryId, wareCategory: { enabled: $visible }) {
      id
      visible: enabled
    }
  }
`,f=s.a`
  mutation GMenuCategoryDelete($categoryId: ID!) {
    destroyWareCategory(id: $categoryId) {
      id
    }
  }
`;n.d(t,"a",function(){return b}),n.d(t,"b",function(){return y});var h=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const b=i.a.named("MenuCategory").actions(e=>({sortCategory(t,n){return h(this,void 0,void 0,function*(){const r={categoryId:t,offset:n},a=yield e.client.mutate({mutation:l,variables:r});return Boolean(a.data&&a.data.success)})},changeVisibility(t,n){e.client.mutate({mutation:m,variables:{categoryId:t,visible:n},optimisticResponse:{updateRecipe:{__typename:"Recipe",id:t,visible:n}}})},createCategory(t,n){const a={input:Object.assign({companyBranch:e.branchId,wareCategoryType:n},g(t,n))};return Object(r.b)(e.client.mutate({mutation:d,variables:a,refetchQueries:[{query:o.a,variables:{branchId:e.branchId,categoryType:n}}]}))},updateCategory(t,n){return h(this,void 0,void 0,function*(){const a={categoryId:t.id,input:Object.assign({},g(t,n))};return Object(r.b)(e.client.mutate({mutation:p,variables:a}))})},deleteCategory(t,n){return h(this,void 0,void 0,function*(){const r={categoryId:t};yield e.client.mutate({mutation:f,variables:r,refetchQueries:[{query:o.a,variables:{branchId:e.branchId,categoryType:n}}]})})}}));function g(e,t){return Object.assign({nameLabel:e.nameLabel,internalNoteLabel:e.internalNoteLabel,enabled:e.visible,pictogram:e.pictogram,recipes:e.recipes.map(a.a.prop("id"))})}const y=(e,t)=>({pathname:e,state:{categoryType:t}})},292:function(e,t,n){"use strict";var r=n(4),a=n(169),o=n(15),i=n(11),c=n(3),s=n.n(c),u=n(438);const l=s.a`
  mutation GCreateSpecificBusinessHour(
    $input: InputBusinessHourSpecificDateCreate!
  ) {
    result: addSpecialBusinessHour(businessHour: $input) {
      ...GSpecificBusinessHour
    }
  }
  ${u.b}
`,d=s.a`
  mutation GDeleteSpecificBusinessHour($id: ID!) {
    result: destroyBusinessHour(id: $id) {
      id
    }
  }
`;var p;n.d(t,"b",function(){return p}),n.d(t,"a",function(){return f}),function(e){e.TIMESPAN="TIMESPAN",e.FULLDAY="FULLDAY"}(p||(p={}));const m=o.a.complement(o.a.propEq("id")),f=i.a.named("BusinessHours").props({specificMode:r.j.optional(r.j.enumeration(["TIMESPAN","FULLDAY"]),p.TIMESPAN)}).actions(e=>({changeSpecificMode(t){e.specificMode=t},submitSpecificHour(t){const n={input:{companyBranch:e.root.settings.branchId,specificDate:t.date,closed:e.specificMode===p.FULLDAY,openAt:t.openAt&&Object(a.d)(t.openAt),closeAt:t.closeAt&&Object(a.d)(t.closeAt),closedNote:t.note}};e.client.mutate({mutation:l,variables:n,updateQueries:{GSpecificBusinessHours:(e,{mutationResult:t})=>t.data?{businessHours:e.businessHours.concat(t.data.result)}:e}})},deleteSpecificHour(t){const n={id:t};e.client.mutate({mutation:d,variables:n,updateQueries:{GSpecificBusinessHours:(e,{mutationResult:t})=>t.data?{businessHours:e.businessHours.filter(m(t.data.result.id))}:e}})}}))},34:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return p});var r=n(57),a=n.n(r),o=n(35),i=n(40),c=n(18);const s=e=>{const{sentryDSN:t}=i.a;t?(Object(c.k)("enabled with DSN %s",t),a.a.config(t,{environment:"prod"}).install(),a.a.context(e)):e()},u=e=>{a.a.setUserContext({userId:e})},l=(e,t)=>{a.a.isSetup()&&a.a.captureException(e,{extra:t})},d=(e,t)=>{e.forEach(e=>{a.a.captureMessage(e.message,{extra:e})}),a.a.captureException(new Error("Failed running a query"),{extra:t})},p=e=>{let t={};return e instanceof o.VError&&(t=Object.assign({cause:o.VError.cause(e)},o.VError.info(e))),a.a.captureException(e,{extra:t}),e}},340:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(3);const a=n.n(r).a`
  mutation GCreateFinancialReport($companyBranchId: ID!) {
    result: createFinancialReport(companyBranchId: $companyBranchId) {
      id
    }
  }
`},36:function(e,t,n){"use strict";var r=n(252),a=n(81),o=n(168),i=n(84),c=n(0),s=n.n(c),u=n(53),l=n(50),d=n(18),p=n(82),m=n.n(p),f=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const h={en:"en-gb"};n.d(t,"d",function(){return g}),n.d(t,"a",function(){return I}),n.d(t,"c",function(){return E}),n.d(t,"b",function(){return O});var b=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const g=Object(r.setupI18n)(),y="en",v=["cs","sk","en"],I=Object(i.b)(({children:e})=>{const{user:t}=Object(l.d)();return t.language?s.a.createElement(a.I18nProvider,{language:t.language,i18n:g},s.a.Children.only(e)):s.a.createElement(u.a,null)});function E(){const e=new o.LocaleResolver([new o.NavigatorDetector],[new o.LanguageOnlyTransformer]).getLocales();return Object(d.g)("detected languages %s",e.join("; ")),e.find(e=>v.includes(e))||y}function O(e){return b(this,void 0,void 0,function*(){return v.includes(e)?(yield function(e){return b(this,void 0,void 0,function*(){let t;t=yield n(6073)(`./${e}/messages.ts`),g.load({[e]:t}),Object(d.g)("loaded catalog %s",e)})}(e),g.activate(e),yield function(e){return f(this,void 0,void 0,function*(){yield n(6072)(`./${h[e]||e}`),m.a.locale(h[e]||e)})}(e),Object(d.g)("changed to %s",e),!0):(Object(d.g)("language %s is not supported"),!1)})}},37:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(0),a=n.n(r),o=n(130),i=(n(163),n(17)),c=(n(7127),n(274)),s=n(18),u=n(78),l=n(34);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function m(e){return t=>{const n=Object(r.useRef)([]),m=Object(r.useCallback)(()=>{n.current.forEach(e=>e()),n.current.length=0},[]);Object(r.useEffect)(()=>(m(),m()),[n.current.length]);const{render:f,renderFragment:h,renderLoading:b=!0,renderError:g=!0,refetchOnConnectionLost:y=!1,children:v}=t,I=p(t,["render","renderFragment","renderLoading","renderError","refetchOnConnectionLost","children"]);return a.a.createElement(o.Query,d({query:e},I),e=>{if(e.loading){if("function"===typeof b)return b(e);if(!0===b)return a.a.createElement(c.a,null)}if(e.error)return Object(l.c)(e.error),Object(s.d)(e.error),!0===g?a.a.createElement(i.b,{to:"/error"}):null;if(y&&n.current.push(Object(u.c)(e.refetch)),e.data){if(h)return a.a.createElement(a.a.Fragment,null,h(e.data,e));if(f)return f(e.data,e)}return v||null})}}},38:function(e,t,n){"use strict";var r=n(3),a=n.n(r);const o=a.a`
  fragment GAddress on JsonAddress {
    state
    city
    street
    houseNumber
  }
`,i=a.a`
  fragment GGeoPoint on GeoPoint {
    latitude
    longitude
  }
`,c=a.a`
  fragment GCompanyBranch on CompanyBranch {
    id
    name
    gps {
      ...GGeoPoint
    }
    brand {
      id
      name
    }
  }
  ${i}
`,s=a.a`
  fragment GEmail on Email {
    email
    description
    default
  }
`,u=a.a`
  fragment GPhone on Phone {
    phone
    description
    default
  }
`,l=a.a`
  fragment GCustomer on JsonCustomer {
    firstName
    lastName
    defaultEmail {
      ...GEmail
    }
    defaultPhone {
      ...GPhone
    }
  }
  ${s}
  ${u}
`,d=a.a`
  fragment GPrice on PriceConverted {
    value
  }
`;n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return d})},40:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r={endpoint:"https://be.dev.admin.c2e.deep-vision.cloud",persistenceKey:"admin@local",pageTitleSuffix:"LOCAL",sentryDSN:""};Object.assign(r,{endpoint:"https://c2e-p1.deep-vision.cloud",persistenceKey:"admin@prod",pageTitleSuffix:"Spe\u0258dlo",sentryDSN:"https://1017631ac60a4ee0bfea56d5857dcc46@sentry.io/1232073"})},438:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});var r=n(3),a=n.n(r),o=n(37);const i=a.a`
  fragment GSpecificBusinessHour on BusinessHour {
    id
    companyBranch {
      id
    }
    specificDate
    specificDateLocalized
    closed
    closedNote
    openAt
    closeAt
  }
`,c=Object(o.a)(a.a`
  query GSpecificBusinessHours($branchId: ID!) {
    businessHours(companyBranch: $branchId, specific: true) {
      ...GSpecificBusinessHour
    }
  }
  ${i}
`)},439:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c});var r=n(3),a=n.n(r),o=n(58);const i=a.a`
  fragment GMenuCategoryForm on WareCategory {
    id
    nameLabel
    internalNoteLabel
    visible: enabled
    categoryType: wareCategoryType {
      enum
    }
    pictogram
    recipes {
      ...GMenuRecipe
    }
  }
  ${o.c}
`,c=a.a`
  query GMenuCategoryForm($categoryId: ID!) {
    wareCategory(id: $categoryId) {
      ...GMenuCategoryForm
    }
  }
  ${i}
`},473:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(477),i=n.n(o),c=n(18),s=n(103);class u extends r.Component{constructor(){super(...arguments),this.state={isActive:!1,nextTime:this.getNextTime()},this.timer=0,this.executeTimer=(()=>{if(this.timer&&(clearTimeout(this.timer),this.timer=0),!1===this.props.enabled)return;const e=Object(s.c)(this.state.nextTime,new Date);this.timer=setTimeout(this.activate,e)}),this.activate=(()=>{!1!==this.props.enabled&&this.setState({isActive:!0,nextTime:this.getNextTime()})}),this.deactivate=(()=>{this.setState({isActive:!1}),this.executeTimer()})}componentDidMount(){this.executeTimer()}componentDidUpdate(){this.executeTimer()}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}getNextTime(){return Object(s.a)(new Date,this.props.intervalSec)}render(){const{isActive:e}=this.state;return this.props.render({isActive:e,nextLoop:this.deactivate})}}var l=n(51);n.d(t,"a",function(){return d});const d=({intervalSec:e,soundUrl:t,shouldPlay:n=!0,skipEnableChecks:r=!1})=>a.a.createElement(l.a,{observe:!0,render:({config:o,user:s})=>{if(!r){if(!o.soundEnabled)return Object(c.h)("sound is disabled"),null;if(!s.soundEnabled)return Object(c.h)("sound not enabled by user"),null}return Object(c.h)("sound play status: %s",n),a.a.createElement(u,{intervalSec:e,enabled:n,render:({isActive:e,nextLoop:n})=>a.a.createElement(i.a,{url:t,playStatus:e?"PLAYING":"STOPPED",onFinishedPlaying:n,loop:!1,autoLoad:!0,volume:s.soundVolume})})}})},476:function(e,t,n){e.exports=n.p+"static/media/connectionWarning.ac6fe03b.mp3"},48:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var r=n(483),a=n(34),o=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const i=({graphQLErrors:e,operation:t})=>{e&&Object(a.d)(e,{query:t.operationName,variables:t.variables})},c=()=>Object(r.a)(i),s=e=>o(void 0,void 0,void 0,function*(){const t=yield e;return t&&t.errors?t.errors:null})},488:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var r=n(5),a=n(4),o=n(284);const i=n(11).a.named("OrderList").props({branches:a.j.optional(a.j.array(a.j.string),[])}).views(e=>({get branchesFilter(){return e.branches.length?Array.from(e.branches):[]},get hasBranchFilter(){return e.branches.length>0},get isSingleBranchSelected(){return 1===e.branches.length},get orderMap(){return Object(a.d)(e).map}})).actions(e=>({clearBranchFilter(){e.branches.clear()},setBranchFilter(t){e.branches.replace(t)},panMapToOrder(t){e.orderMap.panToOrder(t.id)}})).extend(t=>{const n=Object(r.v)(new Map);return{views:{isOrderDetailOpen:e=>n.has(e)},actions:{toggleOrderDetail(e){const r=e.id;n.has(r)?n.delete(r):(n.set(r,!0),t.panMapToOrder(e))},focusOrderDetail(t){n.has(t)||n.set(t,!0),e(()=>{o.scroller.scrollTo(`order-${t}`,{smooth:"easeInOutQuart",containerId:"order-list",absolute:!0,offset:-140})})}}}})}).call(this,n(202).setImmediate)},50:function(e,t,n){"use strict";var r=n(84),a=n(0),o=n.n(a),i=n(130),c=n(163);const s=Object(a.createContext)(void 0);var u=n(7936),l=n(255),d=n(8),p=n(493),m=n(482),f=n.n(m),h=n(494),b=n(5),g=n(40),y=n(18),v=n(78),I=n(35),E=n.n(I);var O=n(48),C=n(484),A=n.n(C),D=n(5999),S=n(485);const N=()=>Math.round(Date.now()+1e5*Math.random()).toString(16);function R({query:e}){const{operation:t}=Object(D.h)(e);return"subscription"===t}function j(e){const t=new u.a({dataIdFromObject:e=>null!=e.__typename&&null!=e.id?`${e.__typename}-${e.id}`:null}),n=function(e){const t=Object(b.j)(()=>({Authorization:`Bearer ${e.communicationToken}`}));return new d.ApolloLink((n,r)=>{if(!e.canCommunicate)throw new E.a(`Executing operation ${n.operationName} before authenticated`,{operation:n});const a=n.getContext();return n.setContext(Object.assign({},a,{headers:t.get()})),new d.Observable(t=>{const a=r(n).subscribe({error:n=>{n.result&&"INVALID_TOKEN"===n.result.code?e.invalidate():t.error(n)},next:t.next.bind(t),complete:t.complete.bind(t)});return()=>a.unsubscribe()})})}(e),r=new h.a({delay:{initial:300,max:1/0,jitter:!0},attempts:{max:5,retryIf:(e,t)=>!!e}}),a=function(){const e=new f.a;return Object(b.i)(()=>{Object(v.b)()?(Object(y.f)("client is online"),e.open()):(Object(y.f)("client is offline"),e.close())}),e}(),o=Object(O.a)(),i=new p.a({uri:`${g.a.endpoint}/graphql`,credentials:"same-origin"}),c=function(e){const t=Object(b.j)(()=>`${g.a.endpoint}/cable?token=${e.token}`);let n;const r={};return new d.ApolloLink(a=>{if(!e.isAuthenticated)throw new I.VError(`Executing operation ${a.operationName} before authenticated`,{operation:a});return n||(n=A.a.createConsumer(t.get())),new d.Observable(e=>{const t=N();return n.subscriptions.create(Object.assign({},{channel:"GraphqlChannel",channelId:t},r),{connected:function(){this.perform("execute",{query:a.query?Object(S.print)(a.query):null,variables:a.variables,operationId:a.operationId,operationName:a.operationName})},received:function(t){t.result.data&&e.next(t.result),t.more||(this.unsubscribe(),e.complete())}})})})}(e);return new l.a({link:d.ApolloLink.from([n,r,a,o]).split(R,c,i),cache:t})}var w=n(167),T=n.n(w),$=n(4),P=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const L=g.a.persistenceKey;function M(e){return P(this,void 0,void 0,function*(){const t=Object($.h)(e).name,n=`${L}_${t}`,r=e=>T.a.setItem(n,e);try{const t=yield T.a.getItem(n);null!==t?(Object($.a)(e,t),Object(y.i)("restored state %s",n)):(yield r(Object($.g)(e)),Object(y.i)("initialized state %s",n))}catch(a){Object(y.i)("persistence failed",a),T.a.removeItem(n)}Object($.i)(e,r)})}var B=n(486),G=n(34),F=n(11),_=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const k=F.a.named("PasswordLogin").volatile(e=>({errorCode:"",errorMessage:""})).views(e=>({get hasFailed(){return Boolean(e.errorCode)}})).actions(e=>({setFailure(t,n){e.errorCode=t,e.errorMessage=n},setSuccess(t,n){Object($.d)(e).authenticate(t,n)}})).actions(e=>({requestToken(t,n){return _(this,void 0,void 0,function*(){const r=(({username:e,password:t})=>`${g.a.endpoint}/users/token?username=${e}&password=${t}`)({username:t,password:n}),a=window.fetch,o=yield a(r,{headers:{Accept:"application/json"}}),i=yield o.json();e.log("received payload %j",i),200!==o.status?(e.setFailure(i.code,i.error),e.log("token request failed for username %s",t)):(e.setSuccess(i.token,String(i.userId)),e.log("token request success for username %s [%s]",t,i.userId))})}})),U=F.a.named("LoginProvider").props({passwordLogin:$.j.optional(k,{})}).actions(e=>({authenticate(t,n){Object($.d)(e).authenticate(t,n)}}));var x=n(3),H=n.n(x);const z=H.a`
  mutation MPasswordChange($password: String!) {
    updateUserPassword(newPassword: $password) {
      id
      token
    }
  }
`;var Z=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const q=F.a.named("Auth").props({userId:$.j.optional($.j.string,""),token:$.j.optional($.j.string,""),provider:$.j.optional(U,{})}).volatile(()=>({})).views(e=>({get isAuthenticated(){return e.token.length>0},get isAuthenticatedUser(){return this.isAuthenticated&&e.userId.length>0},get communicationToken(){return e.tokenForPasswordChange||e.token},get canCommunicate(){return this.isAuthenticated||void 0!==e.tokenForPasswordChange}})).actions(e=>({authenticate(t,n){e.token=t,e.userId=n,e.tokenForPasswordChange=void 0,e.log("authenticated with id %s",n),Object(G.a)(n)},invalidate(){e.token="",e.userId="",e.tokenForPasswordChange=void 0,e.client.cache.reset(),e.log("invalidated authentication"),Object(G.a)(null)}})).actions(e=>({setForPasswordChange(t){e.invalidate(),e.log("encoded token %s",t),e.tokenForPasswordChange=B.Base64.decode(t),e.log("using temp token %s",e.tokenForPasswordChange)},changePassword(t){return Z(this,void 0,void 0,function*(){const n={password:t},r=yield e.client.mutate({mutation:z,variables:n,fetchPolicy:"no-cache"}),{updateUserPassword:{id:a,token:o}}=r.data;o&&a&&(e.invalidate(),e.authenticate(o,a))})}})).preProcessSnapshot(e=>(e.userId&&Object(G.a)(e.userId),e)),V=F.a.named("Config").props({soundEnabled:!0,orderListPollIntervalSec:60,orderListSoundIntervalSec:60});var Y=n(79),W=n.n(Y),K=n(24),Q=n(15),J=n(36),X=n(38);const ee=H.a`
  query GUserModelBootstrap($userId: ID!) {
    user(id: $userId) {
      id
      language {
        rawCode
      }
      branches: accessibleBranches {
        ...GCompanyBranch
      }
    }
    permissions: __schema {
      queries: queryType {
        fields {
          name
        }
      }
      mutations: mutationType {
        fields {
          name
        }
      }
      subscriptions: subscriptionType {
        fields {
          name
        }
      }
    }
  }

  ${X.b}
`;var te=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const ne=F.a.named("User").props({language:$.j.maybe($.j.string),soundVolume:$.j.optional($.j.number,25),soundIgnore:!1,currentBranchId:$.j.maybeNull($.j.string)}).volatile(()=>({isLoaded:!1,branches:null,brands:null,soundEnabled:!1,permissions:null})).views(e=>({get branchesId(){return null===e.branches?[]:e.branches.map(K.prop("id"))},filterBranches:t=>null===e.branches?[]:e.branches.filter(t),get currentBranch(){return null===e.currentBranchId||null===e.branches?null:e.branches.find(Q.a.propEq("id",e.currentBranchId))||null},get currentBranchGps(){const e=this.currentBranch;if(!e)return null;const{latitude:t,longitude:n}=e.gps;return{latitude:t,longitude:n}},canQuery:t=>null!==e.permissions&&e.permissions.queries.has(t.toLowerCase()),canMutate:t=>null!==e.permissions&&e.permissions.mutations.has(t.toLowerCase()),get isReady(){return e.isLoaded||!e.root.auth.isAuthenticated}})).actions(e=>({selectBranch(t){e.currentBranchId=t},applyUserData(t){e.branches=t.branches,e.brands=Q.a.uniqBy(Q.a.prop("id"),t.branches.map(Q.a.prop("brand"))),null!==e.currentBranchId&&1!==e.branches.length||(e.currentBranchId=e.branchesId[0])},applyUserPermissions(t){e.permissions=W.a.mapValues(t,({fields:e})=>new Set(e.map(Q.a.compose(Q.a.toLower,Q.a.prop("name")))))},setLanguage:Object($.b)(function*(t){Object(y.g)("changing to language %s from user profile",t),yield Object(J.b)(t),e.language=t}),finishBootstrap(){e.isLoaded=!0},controlSound(t=!0,n=!1){e.soundEnabled=t,e.soundIgnore=n},setSoundVolume(t){e.soundVolume=t}})).actions(e=>{return{initUser:()=>{Object(b.i)(()=>{e.root.auth.userId?(Object(y.b)("query user"),(t=>te(void 0,void 0,void 0,function*(){const n={userId:t},{data:r}=yield e.client.query({query:ee,variables:n});e.setLanguage(r.user.language.rawCode),e.applyUserData(r.user),e.applyUserPermissions(r.permissions),e.finishBootstrap()}))(e.root.auth.userId)):(Object(y.b)("user not authenticated"),e.setLanguage(Object(J.c)()))})}}});var re=n(67),ae=n(206),oe=n.n(ae);oe.a.locale="cz";var ie=n(124);const ce=F.a.named("CreateOrder").volatile(se).views(e=>({get branchId(){return e.root.user.currentBranchId},get deliveryType(){return e.values.deliveryType},get isDelivery(){return e.values.deliveryType===re.a.MESSENGER},get hasAddress(){return Boolean(e.deliveryAddress||e.fakeAddress)},get gps(){if(this.isDelivery&&this.hasAddress){if(e.deliveryAddress)return e.deliveryAddress.gps;if(e.fakeAddress)return e.fakeAddress.gps}return Object.assign({},e.root.user.currentBranchGps)},get phone(){return e.values.phone||e.callingPhone},get formValues(){if(null!==e.vamCustomer&&e.vamCustomer.isFound){const{firstName:t,lastName:n,email:r,lastOrder:a}=e.vamCustomer;return W.a.defaults(Object.assign({},e.values),{phone:this.phone,firstName:t,lastName:n,email:r,note:a&&a.note||""})}if(e.fakeValues){const{firstName:t,lastName:n,email:r,phone:a,note:o}=e.fakeValues;return W.a.defaults(Object.assign({},e.values),{phone:a,firstName:t,lastName:n,email:r,note:o})}return W.a.defaults(Object.assign({},e.values),{phone:e.callingPhone||""})},get canSubmit(){return Boolean(e.orderId&&!e.isSubmitting)},get hasSubmitErrors(){return Boolean(e.submitErrors&&e.submitErrors.length>0)},get askForCancel(){return null!==e.orderId},get cartRefreshKey(){return`${e.orderId||0}-${this.deliveryType}-${this.gps.longitude}-${this.gps.latitude}`}})).actions(e=>{const t=t=>{e.isSubmitting=!1,e.submitErrors=t||[J.d._("Order submit has failed. Please try again later.")]},n=()=>{Object.assign(e,se())},r=Object($.b)(function*(){if(null===e.orderId){const t={branchId:e.branchId,deliveryType:e.values.deliveryType,gps:e.gps,callEventId:e.callingEventId},n=yield e.client.mutate({mutation:ie.c,variables:t});n.data&&(e.orderId=n.data.createOrder.id)}return e.orderId}),a=Object($.b)(function*(r){const a={orderId:e.orderId,customer:{firstName:r.firstName,lastName:r.lastName,emails:r.email?[{email:r.email}]:null,phones:r.phone?[{phone:r.phone}]:null},deliveryType:e.deliveryType,gps:e.gps,note:r.note};let o;e.log("submit order: ",a),e.isSubmitting=!0;try{o=yield e.client.mutate({mutation:ie.a,variables:a})}catch(c){throw t(),Object(G.c)(new I.VError("order create submit failed: %j",c))}if(o.errors&&o.errors.length||!o.data)throw t(),Object(G.c)(new I.VError("order create submit failed: %j",o.errors));const i=o.data.finishOrder;i.userErrors&&i.userErrors.length&&t(i.userErrors),n()}),o=Object($.b)(function*(){if(!e.orderId)return void n();const t={orderId:e.orderId};e.client.mutate({mutation:ie.b,variables:t}),n()});return{submitFailed:t,ensureOrder:r,acceptOrder:a,cancelOrder:o,resetOrder:()=>{e.orderId=null}}}).actions(e=>{const t=Object($.b)(function*(){if(!e.deliveryAddress)return void(e.notDeliveryLocation=!1);const{latitude:t,longitude:n}=e.deliveryAddress.gps,r={branchId:e.branchId,latitude:t,longitude:n},a=yield e.client.query({query:ie.e,variables:r});e.notDeliveryLocation=!a.data.resolveLocation.inDeliveryLocation});return{useLocation(n){e.deliveryAddress=n,t()},clearLocation(){e.deliveryAddress=void 0}}}).actions(e=>({userIsCalling(t,n){e.callingPhone=t,n&&(e.callingEventId=n)},scrollToCategory(t){e.scrollMenuToCategoryId=t},updateFormValues(t,n){e.log("touched",n),e.values=Object.assign({deliveryType:t.deliveryType},W.a.pick(t,Object.keys(n))),e.log("updated values: ",e.values)},updateFromVam(t){e.vamCustomer=t,e.log("vam customer: ",t)},updateFormWithFakeValues(){e.fakeValues={firstName:oe.a.name.firstName(),lastName:oe.a.name.lastName(),email:oe.a.internet.email(),phone:oe.a.phone.phoneNumberFormat(4),note:oe.a.lorem.sentence().slice(0,49)},e.fakeAddress={state:"",city:"Hradec Kr\xe1lov\xe9",street:"Opletalova",houseNumber:"334/2",gps:{latitude:50.2129839,longitude:15.8342836}}}}));function se(){return{orderId:null,callingPhone:void 0,callingEventId:void 0,values:{deliveryType:re.a.MESSENGER,phone:void 0,email:void 0,firstName:void 0,lastName:void 0,note:void 0},fakeAddress:void 0,fakeValues:void 0,deliveryAddress:void 0,vamCustomer:null,notDeliveryLocation:!1,isSubmitting:!1,submitErrors:null,scrollMenuToCategoryId:null}}var ue=n(488),le=n(52);const de=49.8037633,pe=15.4749126,me=F.a.named("Map").props({zoom:$.j.optional($.j.number,12),latitude:$.j.optional($.j.number,de),longitude:$.j.optional($.j.number,pe)}).volatile(e=>({mapRef:null})).views(e=>({get center(){return Object(le.b)(e)}})).actions(e=>({setMapRef(t){e.mapRef=t},updateZoom(){e.mapRef&&(e.zoom=e.mapRef.getZoom())},updatePosition(){if(e.mapRef){const t=e.mapRef.getCenter();e.latitude=t.lat(),e.longitude=t.lng()}}})),fe=H.a`
  query GOrderBranchLocation($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      gps {
        ...GGeoPoint
      }
    }
  }
  ${X.e}
`,he=H.a`
  query GOrderLocation($orderId: ID!) {
    order(id: $orderId) {
      id
      gps {
        ...GGeoPoint
      }
    }
  }
  ${X.e}
`;var be=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const ge=me.named("OrderMap").actions(e=>({panToOrder(t){return be(this,void 0,void 0,function*(){if(!e.mapRef)return;const{data:n}=yield e.client.query({query:he,variables:{orderId:t}});n&&n.order.gps&&e.mapRef.panTo(Object(le.b)(n.order.gps))})},panToBranch(t){return be(this,void 0,void 0,function*(){const{data:n}=yield e.client.query({query:fe,variables:{branchId:t}});e.mapRef&&n&&e.mapRef.panTo(Object(le.b)(n.companyBranch.gps))})}}));var ye=n(112),ve=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const Ie=F.a.named("OrderState").views(e=>({})).actions(e=>({updateOrderState(t,n){return ve(this,void 0,void 0,function*(){const r={orderId:t,state:n};yield e.client.mutate({mutation:ye.e,variables:r})})}})).actions(e=>({deliverOrder:t=>e.updateOrderState(t,re.d.ON_WAY),sendTimeNotification(t,n){return ve(this,void 0,void 0,function*(){const r={orderId:t,minutes:n};yield e.client.mutate({mutation:ye.d,variables:r})})},selectDriver(t,n){return ve(this,void 0,void 0,function*(){const r={orderId:t,driverId:n};yield e.client.mutate({mutation:ye.c,variables:r})})},removeDriver(t){return ve(this,void 0,void 0,function*(){const n={orderDriverId:t};yield e.client.mutate({mutation:ye.b,variables:n})})}})),Ee=$.j.model("Order",{list:$.j.optional(ue.a,{}),map:$.j.optional(ge,{}),state:$.j.optional(Ie,{})});var Oe=n(340),Ce=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const Ae=F.a.named("Statistics").props({branches:$.j.optional($.j.array($.j.string),[]),closureBranch:$.j.maybeNull($.j.string)}).volatile(e=>({dateFrom:new Date,dateTo:new Date})).views(e=>({get branchesFilter(){return e.branches.length>0?Array.from(e.branches):e.root.user.branchesId},get hasBranchFilter(){return e.branches.length>0}})).actions(e=>({updateFilter(t){e.dateFrom=new Date(t.dateFrom),e.dateTo=new Date(t.dateTo)},clearBranchFilter(){e.branches.clear()},setBranchFilter(t){e.branches.replace(t)},setClosureBranch(t){e.closureBranch=t},createClosure(){return Ce(this,void 0,void 0,function*(){if(e.closureBranch){const t={companyBranchId:e.closureBranch};return e.client.mutate({mutation:Oe.a,variables:t,refetchQueries:["GClosureReportQuery"]})}throw new Error("Tried to create a closure without branch selected")})}}));var De=n(292);const Se=F.a.named("SettingsBase").views(e=>({get settings(){return Object($.d)(e)}}));var Ne=n(291),Re=n(286),je=n(242),we=n(100),Te=n(101),$e=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const Pe=we.a.named("MenuStock").actions(e=>({createItem(t){const n={stockItem:Object.assign({companyBranch:e.branchId},Le(t))};return Object(O.b)(e.client.mutate({mutation:Te.a,variables:n,refetchQueries:[{query:je.a,variables:{branchId:e.branchId}}]}))},updateItem(t){const n={stockId:t.id,stockItem:Object.assign({},Le(t))};return Object(O.b)(e.client.mutate({mutation:Te.d,variables:n}))},deleteItem(t){return $e(this,void 0,void 0,function*(){const n={stockId:t};yield e.client.mutate({mutation:Te.b,variables:n,refetchQueries:[{query:je.a,variables:{branchId:e.branchId}}]})})}}));function Le(e){return{code:e.code,label:e.nameLabel,note:e.note,plu:e.plu,allergens:e.allergens,wareUnit:e.wareUnit,allowNegative:e.allowNegative}}const Me=Se.named("Menu").props({category:$.j.optional(Ne.a,{}),recipe:$.j.optional(Re.a,{}),stock:$.j.optional(Pe,{})}),Be=F.a.named("Settings").props({selectedBranchId:$.j.maybe($.j.string),businessHours:$.j.optional(De.a,{}),menu:$.j.optional(Me,{})}).views(e=>({get branchId(){return e.selectedBranchId||Q.a.head(e.root.user.branchesId)},get queryProps(){const e=this.branchId;return e?{variables:{branchId:e}}:{skip:!0}},getQueryProps(e){const t=this.branchId;return t?{variables:Object.assign({branchId:t},e)}:{skip:!0}}})).actions(e=>({selectBranch(t){e.selectedBranchId=t}}));var Ge=n(122),Fe=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const _e=me.named("ZoneMap").volatile(()=>({currentZonePoints:null})).actions(e=>({updateZonePoints(t){e.currentZonePoints=t},clearZonePoints(){e.currentZonePoints=null},panToZone(t){return Fe(this,void 0,void 0,function*(){const{data:n}=yield e.client.query({query:Ge.c,variables:{zoneId:t}});if(n){const{zone:{companyBranch:{gps:t}}}=n;e.mapRef&&e.mapRef.panTo(Object(le.b)(t))}})},panToBranch(t){return Fe(this,void 0,void 0,function*(){e.mapRef&&e.mapRef.panTo(Object(le.b)(t.gps))})}})),ke=H.a`
  mutation GCreateZone($branchId: ID!, $points: [InputGeoPointCreate!]) {
    createZone(zone: { companyBranch: $branchId, geoPolygon: $points }) {
      ...GZone
    }
  }
  ${Ge.b}
`,Ue=H.a`
  mutation GUpdateZone($zoneId: ID!, $update: InputZoneUpdate!) {
    updateZone(id: $zoneId, zone: $update) {
      ...GZone
    }
  }
  ${Ge.b}
`,xe=H.a`
  mutation GUpdateZonePriority($zoneId: ID!, $offset: Int!) {
    updateZonePriority(zone: $zoneId, offset: $offset) {
      id
      priority
    }
  }
`,He=H.a`
  mutation GDestroyZone($zoneId: ID!) {
    destroyZone(id: $zoneId) {
      id
    }
  }
`;var ze=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const Ze=F.a.named("Zone").props({map:$.j.optional(_e,{}),brandId:$.j.maybeNull($.j.string)}).volatile(()=>({branch:null})).views(e=>({get brand(){return e.brandId&&e.root.user.brands.find(Q.a.propEq("id",e.brandId))||null},get hasBranchFilter(){return null!==e.branch},get branchFilterId(){return null===e.branch?null:e.branch.id},get branchFilterPredicate(){return null!==e.branch?K.propEq("id",e.branch.id):null===this.brand?()=>!1:K.pathSatisfies(K.equals(this.brand.id),["brand","id"])},get zoneFilterPredicate(){return null!==e.branch?K.pathSatisfies(K.equals(e.branch.id),["companyBranch","id"]):null===this.brand?()=>!1:K.pathSatisfies(K.equals(this.brand.id),["companyBranch","brand","id"])},get branches(){return e.root.user.isReady?e.root.user.branches:[]}})).actions(e=>({setBranchFilter(t){e.branch=t,e.brandId=t.brand.id,e.map.panToBranch(t)},setBrandFilter(t,n){e.brandId=t.id,e.branch&&e.branch.brand.id===t.id||(e.branch=1===n.length&&Q.a.head(n)||null)},clearBranchFilter(){e.branch=null},clearBrandFilter(){e.brandId=null,e.branch=null}})).actions(e=>({createZone:Object($.b)(function*(t){if(null===e.branch)throw new I.VError("Called createZone without branch being set");const n=Object(le.a)({center:e.branch.gps,metersRadius:1e3,pointsCount:5}),r={branchId:e.branch.id,points:n},{data:a}=yield e.client.mutate({mutation:ke,variables:r,updateQueries:{GZones:(e,{mutationResult:t})=>{const n=t.data.createZone;return n?Object.assign({},e,{zones:e.zones.concat(n)}):e}}});if(a){t(a.createZone.id)}}),saveZone(t,n){return ze(this,void 0,void 0,function*(){const r={zoneId:t,update:{name:n.name,enabled:n.enabled,companyBranch:n.companyBranch.id,zoneColor:n.zoneColor.id,minimalOrderPrice:{value:Number(n.minimalOrderPrice.value)||0},priceRangeRules:n.priceRangeRules.map(Ve).filter(K.reject(K.pathEq(["price","value"],null))),geoPolygon:e.map.currentZonePoints||void 0}};yield e.client.mutate({mutation:Ue,variables:r,updateQueries:{GZones:(e,{mutationResult:n})=>{const r=e.zones.findIndex(K.propEq("id",t)),a=n.data.updateZone;return Object.assign({},e,{zones:K.update(r,a,e.zones)})}}}),e.map.clearZonePoints()})},destroyZone(t){if(!t)return;const n={zoneId:t};e.client.mutate({mutation:He,variables:n,updateQueries:{GZones:e=>Object.assign({},e,{zones:K.reject(K.propEq("id",t),e.zones)})}})},changeZonePriority:Object($.b)(function*(t,n,r){if(!t||n===r)return;const a=n-r,o={zoneId:t.id,offset:a};yield e.client.mutate({mutation:xe,variables:o,optimisticResponse:{__typename:"Mutation",updateZonePriority:{__typename:"Zone",id:t.id,priority:t.priority+a}}})})}));function qe(e){if(null===e)return null;const t=Number(e);return Number.isNaN(t)?null:t}function Ve(e){return{price:{value:qe(e.price.value)},toPrice:{value:qe(e.toPrice.value)||-1}}}const Ye=F.a.named("Root").props({auth:$.j.optional(q,{}),user:$.j.optional(ne,{}),order:$.j.optional(Ee,{}),createOrder:$.j.optional(ce,{}),zone:$.j.optional(Ze,{}),settings:$.j.optional(Be,{}),config:$.j.optional(V,{}),statistics:$.j.optional(Ae,{})}).views(e=>({get persistedModels(){return[e.auth,e.user,e.settings,e.zone,e.order,e.statistics]}}));var We=n(53);n.d(t,"a",function(){return Je}),n.d(t,"d",function(){return Xe}),n.d(t,"c",function(){return et}),n.d(t,"b",function(){return tt});var Ke=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const Qe=Object(a.createContext)(void 0),Je=({children:e})=>{const[t,n]=Object(a.useState)(void 0);return(e=>{Object(a.useEffect)(()=>{e()},[])})(()=>Ke(void 0,void 0,void 0,function*(){const e=q.create({}),t=j(e),r=Ye.create({auth:e},{fetch:window.fetch,apolloClient:t});yield Promise.all(r.persistedModels.map(M)),yield r.user.initUser(),n(r)})),t?o.a.createElement(Qe.Provider,{value:t.client},o.a.createElement(i.ApolloProvider,{client:t.client},o.a.createElement(c.a,{client:t.client},o.a.createElement(s.Provider,{value:t},a.Children.only(e))))):o.a.createElement(We.a,null)},Xe=()=>{const e=Object(a.useContext)(s);if(!e)throw new Error("RootProvider missing in the tree");return e},et=()=>{const e=Object(a.useContext)(Qe);if(!e)throw new Error("ApolloContext.Provider missing in the tree");return e},tt=({children:e,observe:t=!0})=>{const n=Xe();return!0===t?o.a.createElement(r.a,null,()=>e(n)):e(n)}},51:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),a=n.n(r),o=n(50);const i=({render:e,observe:t})=>a.a.createElement(o.b,{children:e,observe:t})},52:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i});var r=n(256);const a=e=>({lat:Number(e.latitude),lng:Number(e.longitude)}),o=e=>({latitude:Number(e.lat()),longitude:Number(e.lng())}),i=({center:e,metersRadius:t=1e3,pointsCount:n=15})=>new Array(n).fill(null).map((a,o)=>{const i=360/n*o;return Object(r.computeDestinationPoint)(e,t,i)})},53:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(487),i=n.n(o),c=n(9);t.a=(({noMargin:e=!1})=>a.a.createElement("div",{style:{display:"flex",alignSelf:"center",justifyContent:"center"}},a.a.createElement(i.a,{name:"pacman",style:e?{}:{marginTop:"45vh",color:c.a.orange}})))},58:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return l});var r=n(3),a=n.n(r),o=n(38);const i=a.a`
  fragment GMenuRecipe on Recipe {
    id
    code
    visible: enabled
    nameLabel
    internalNote
    availableAmount
    prices {
      id
      priceType: warePriceType {
        enum
      }
      price {
        ...GPrice
        formattedValue
      }
    }
    recipeType: wareCategoryType {
      enum
    }
  }
  ${o.g}
`,c=a.a`
  mutation GMenuRecipeVisibility($recipeId: ID!, $visible: Boolean!) {
    updateRecipe(id: $recipeId, recipe: { enabled: $visible }) {
      id
      visible: enabled
    }
  }
`,s=a.a`
  mutation GMenuRecipeCreate($recipe: InputRecipeCreate!) {
    createRecipe(recipe: $recipe) {
      ...GMenuRecipe
    }
  }
  ${i}
`,u=a.a`
  mutation GMenuRecipeUpdate($recipeId: ID!, $recipe: InputRecipeUpdate!) {
    updateRecipe(id: $recipeId, recipe: $recipe) {
      ...GMenuRecipe
    }
  }
  ${i}
`,l=a.a`
  mutation GMenuRecipeDelete($recipeId: ID!) {
    destroyRecipe(id: $recipeId) {
      id
    }
  }
`},5840:function(e,t,n){e.exports=n(7483)},5841:function(e,t,n){"use strict";localStorage.setItem("debug","*,-sockjs*")},5846:function(e,t,n){},6009:function(e,t){},6011:function(e,t){},6072:function(e,t,n){var r={"./bg":[512,2],"./bg.js":[512,2],"./chs":[513,3],"./chs.js":[513,3],"./cs":[514,4],"./cs.js":[514,4],"./da-dk":[515,5],"./da-dk.js":[515,5],"./de":[517,7],"./de-ch":[516,6],"./de-ch.js":[516,6],"./de.js":[517,7],"./en-au":[518,8],"./en-au.js":[518,8],"./en-gb":[519,9],"./en-gb.js":[519,9],"./en-za":[520,10],"./en-za.js":[520,10],"./es":[522,12],"./es-es":[521,11],"./es-es.js":[521,11],"./es.js":[522,12],"./et":[523,13],"./et.js":[523,13],"./fi":[524,14],"./fi.js":[524,14],"./fr":[527,17],"./fr-ca":[525,15],"./fr-ca.js":[525,15],"./fr-ch":[526,16],"./fr-ch.js":[526,16],"./fr.js":[527,17],"./hu":[528,18],"./hu.js":[528,18],"./it":[529,19],"./it.js":[529,19],"./ja":[530,20],"./ja.js":[530,20],"./lv":[531,21],"./lv.js":[531,21],"./nl-be":[532,22],"./nl-be.js":[532,22],"./nl-nl":[533,23],"./nl-nl.js":[533,23],"./no":[534,24],"./no.js":[534,24],"./pl":[535,25],"./pl.js":[535,25],"./pt-br":[536,26],"./pt-br.js":[536,26],"./pt-pt":[537,27],"./pt-pt.js":[537,27],"./ru":[539,29],"./ru-ua":[538,28],"./ru-ua.js":[538,28],"./ru.js":[539,29],"./sk":[540,30],"./sk.js":[540,30],"./sl":[541,31],"./sl.js":[541,31],"./th":[542,32],"./th.js":[542,32],"./tr":[543,33],"./tr.js":[543,33],"./uk-ua":[544,34],"./uk-ua.js":[544,34],"./vi":[545,35],"./vi.js":[545,35]};function a(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(r)},a.id=6072,e.exports=a},6073:function(e,t,n){var r={"./cs/messages.ts":[7484,42],"./de/messages.ts":[7485,43],"./en-dev/messages.ts":[7487,45],"./en/messages.ts":[7486,44],"./pl/messages.ts":[7488,46],"./sk/messages.ts":[7489,47]};function a(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(r)},a.id=6073,e.exports=a},67:function(e,t,n){"use strict";var r,a,o,i,c,s,u,l,d,p,m,f,h,b,g,y,v,I,E,O,C,A,D,S,N,R,j,w,T;n.d(t,"c",function(){return i}),n.d(t,"f",function(){return d}),n.d(t,"b",function(){return m}),n.d(t,"e",function(){return E}),n.d(t,"a",function(){return S}),n.d(t,"d",function(){return j}),function(e){e.BUSINESS="BUSINESS",e.MAIN_ADDRESS="MAIN_ADDRESS",e.PREMISES="PREMISES"}(r||(r={})),function(e){e.CZK="CZK",e.EUR="EUR",e.HOP="HOP",e.USD="USD"}(a||(a={})),function(e){e.BACKEND="BACKEND",e.FE_ADMIN="FE_ADMIN"}(o||(o={})),function(e){e.BILLS="BILLS",e.CANCEL="CANCEL",e.DELIVERY="DELIVERY",e.FINISHED="FINISHED",e.IN_CART="IN_CART",e.MAIN="MAIN",e.NEW_ORDERS="NEW_ORDERS",e.NOTIFICATION="NOTIFICATION",e.ON_WAY="ON_WAY",e.PAYMENT="PAYMENT",e.PREPARING="PREPARING",e.PRODUCTION="PRODUCTION",e.READY_TO_DELIVER="READY_TO_DELIVER",e.RECLAMATION="RECLAMATION"}(i||(i={})),function(e){e.AFFILIATE="AFFILIATE",e.BRAND="BRAND",e.CLIENT="CLIENT"}(c||(c={})),function(e){e.ANDROID="ANDROID",e.IOS="IOS"}(s||(s={})),function(e){e.FRIDAY="FRIDAY",e.MONDAY="MONDAY",e.SATURDAY="SATURDAY",e.SUNDAY="SUNDAY",e.THURSDAY="THURSDAY",e.TUESDAY="TUESDAY",e.WEDNESDAY="WEDNESDAY"}(u||(u={})),function(e){e.CELERY="CELERY",e.CEREALS_WITH_GLUTTEN="CEREALS_WITH_GLUTTEN",e.EGG="EGG",e.FISH="FISH",e.LUPIN="LUPIN",e.MILK="MILK",e.MOLLUSCS="MOLLUSCS",e.MUSTARD="MUSTARD",e.NUT="NUT",e.PEANUT="PEANUT",e.SESAME="SESAME",e.SHELLFISH="SHELLFISH",e.SOYBEANS="SOYBEANS",e.SULFUROUS="SULFUROUS"}(l||(l={})),function(e){e.DELIVERY="DELIVERY",e.INHOUSE="INHOUSE"}(d||(d={})),function(e){e.MAIN="MAIN"}(p||(p={})),function(e){e.DEFAULT="DEFAULT",e.DISABLED="DISABLED",e.ENABLED="ENABLED"}(m||(m={})),function(e){e.CS="CS",e.SK="SK"}(f||(f={})),function(e){e.ACCEPTED="ACCEPTED",e.REJECTED="REJECTED",e.WAITING_FOR_RESPONSE="WAITING_FOR_RESPONSE"}(h||(h={})),function(e){e.BROKEN="BROKEN",e.WORKING="WORKING"}(b||(b={})),function(e){e.CAR="CAR",e.DRON="DRON",e.PLANE="PLANE"}(g||(g={})),function(e){e.GRAM="GRAM",e.KILOGRAM="KILOGRAM",e.LITRE="LITRE",e.PIECE="PIECE"}(y||(y={})),function(e){e.CASH="CASH",e.CREDIT="CREDIT",e.GOPAY="GOPAY",e.PAYPAL="PAYPAL"}(v||(v={})),function(e){e.CASH="CASH",e.CREDIT="CREDIT",e.VOUCHER="VOUCHER"}(I||(I={})),function(e){e.COVER="COVER",e.MAIN="MAIN",e.MIXIN="MIXIN",e.SIDE_DISH="SIDE_DISH"}(E||(E={})),function(e){e.MANDATORY="MANDATORY",e.MAX_ONE="MAX_ONE",e.NO_LIMIT="NO_LIMIT",e.OPTIONAL="OPTIONAL"}(O||(O={})),function(e){e.AFFILIATE_PIZZA_ROZVOZ="AFFILIATE_PIZZA_ROZVOZ",e.AFFILIATE_ROZVOZ_JIDLA="AFFILIATE_ROZVOZ_JIDLA",e.AFFILIATE_ROZVOZ_PIZZY_ZDARMA="AFFILIATE_ROZVOZ_PIZZY_ZDARMA",e.BAKER="BAKER",e.DAME_JIDLO="DAME_JIDLO",e.ENIGOO="ENIGOO",e.MINISITE="MINISITE",e.MOBIL_ANDROID="MOBIL_ANDROID",e.MOBIL_IOS="MOBIL_IOS",e.MPIZZA="MPIZZA",e.STAFF="STAFF",e.WEB="WEB",e.WEB_PARTNER="WEB_PARTNER",e.WIFI="WIFI"}(C||(C={})),function(e){e.AREA="AREA",e.SECTOR="SECTOR",e.TABLE="TABLE"}(A||(A={})),function(e){e.AFFILIATE="AFFILIATE",e.COMMISSION="COMMISSION",e.FEE="FEE",e.PRICE_SUM="PRICE_SUM",e.REWARD_RESULT="REWARD_RESULT"}(D||(D={})),function(e){e.DRON="DRON",e.MAIL="MAIL",e.MESSENGER="MESSENGER",e.PICKUP="PICKUP"}(S||(S={})),function(e){e.CANCELED="CANCELED",e.COOKED="COOKED",e.FRESH="FRESH",e.PREPARING="PREPARING"}(N||(N={})),function(e){e.CANCELED="CANCELED",e.COMPLETED="COMPLETED",e.CREATED="CREATED",e.PAID="PAID",e.PENDING="PENDING"}(R||(R={})),function(e){e.ACCEPTED="ACCEPTED",e.BILL_PASSED="BILL_PASSED",e.BRANCH_CANCEL="BRANCH_CANCEL",e.BY_CREDIT_CARD="BY_CREDIT_CARD",e.CANCELED="CANCELED",e.CANCEL_ON_WAY="CANCEL_ON_WAY",e.CAUSE="CAUSE",e.CUSTOMER_CANCEL="CUSTOMER_CANCEL",e.CUSTOMER_DID_NOT_COME="CUSTOMER_DID_NOT_COME",e.CUSTOMER_NOTIFIED="CUSTOMER_NOTIFIED",e.DELIVERED="DELIVERED",e.DELIVER_REJECTED="DELIVER_REJECTED",e.EVALUATED="EVALUATED",e.FINISHED="FINISHED",e.HANDOVER="HANDOVER",e.IN_CART="IN_CART",e.IN_PRODUCE="IN_PRODUCE",e.IN_PROGRESS="IN_PROGRESS",e.LATE="LATE",e.MADE="MADE",e.NEW="NEW",e.NOT_EVALUATED="NOT_EVALUATED",e.ONLINE="ONLINE",e.ON_WAY="ON_WAY",e.PAID="PAID",e.READY_TO_DELIVER="READY_TO_DELIVER",e.READY_TO_PRODUCE="READY_TO_PRODUCE",e.RECEIVED="RECEIVED",e.RECLAMATION="RECLAMATION",e.RECLAMATION_HANDLED="RECLAMATION_HANDLED",e.REFUND="REFUND",e.SHOULD_BE_PAID="SHOULD_BE_PAID",e.SHOWN="SHOWN",e.STUCK_ON_ROAD="STUCK_ON_ROAD",e.UNPAID="UNPAID",e.WAITING_FOR_CUSTOMER="WAITING_FOR_CUSTOMER"}(j||(j={})),function(e){e.ADMIN_ORDER_LISTING="ADMIN_ORDER_LISTING",e.CONFIRMATION="CONFIRMATION",e.GRAPHIC="GRAPHIC",e.OPTIONS="OPTIONS",e.RULES="RULES",e.URL="URL"}(w||(w={})),function(e){e.CREATE="CREATE",e.DESTROY="DESTROY",e.REMOVE="REMOVE",e.UPDATE="UPDATE"}(T||(T={}))},70:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),o=n(12),i=n(9);const c=o.b.span.withConfig({displayName:"IconSpanStyled"})`
  font-size: ${({fontSize:e=1.5,fontSizeUnit:t="rem"})=>e+t} !important;
  color: ${e=>e.color};
`,s=({iconName:e,color:t=i.a.white,fontSize:n,fontSizeUnit:r})=>e?a.a.createElement(c,{color:t,fontSize:n,fontSizeUnit:r,iconName:e,className:"material-icons"},e):null},71:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),a=n.n(r),o=n(17),i=n(50),c=n(127),s=n(80),u=n(165),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const d=e=>{var{redirect:t=!0,lazy:n=!0}=e,r=l(e,["redirect","lazy"]);const{auth:d}=Object(i.d)();if(!d.isAuthenticatedUser)return t?a.a.createElement(u.a,null):a.a.createElement(c.a,null);if(r.component&&"object"===typeof r.component){const{component:e,path:t,exact:n}=r;return a.a.createElement(s.a,{path:t,exact:n,component:e})}return a.a.createElement(o.c,r)}},7483:function(e,t,n){"use strict";n.r(t);n(5841);var r=n(0),a=n.n(r),o=n(19),i=(n(5846),n(474)),c=n(81),s=n(270),u=n(126),l=n(267),d=n(12),p=n(476),m=n.n(p),f=n(78),h=n(9),b=n(473);const g=d.b.div.withConfig({displayName:"MessageStyled"})`
  padding: 1rem;
  background-color: ${h.a.red} !important;
  font-size: 2rem;

  & svg {
    position: relative;
    top: 0.3rem;
    padding-right: 0.5rem;
  }
`,y=Object(l.b)(()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{shouldPlay:Object(f.a)(),intervalSec:30,soundUrl:m.a}),a.a.createElement(s.b,{open:Object(f.a)(),disableBackdropClick:!0,disableEscapeKeyDown:!0},a.a.createElement(g,null,a.a.createElement(u.h,{fontSize:"large"}),a.a.createElement(c.Trans,{id:"Internet connection is not available"})))));var v=n(262),I=n(34);const E=({children:e,prod:t=!1})=>t?a.a.createElement(v.b,{dispatchErrorReporting:e=>{Object(I.e)(e.error,e.info)}},e):a.a.createElement(v.a,null,e);var O=n(53),C=n(50);const A=({render:e,observe:t=!0})=>a.a.createElement(C.b,{observe:t,children:t=>e(t.user)});var D=n(17),S=n(266),N=n(36),R=n(269);const j=d.b.div.withConfig({displayName:"IconStyled"})`
  margin-top: 2rem;
  color: #d39f40;
  text-align: center;
`,w=e=>a.a.createElement(R.a,{width:15,pageTitle:N.d._("Application error"),useBackButton:!0},a.a.createElement(S.a,null,a.a.createElement("h3",null,a.a.createElement(c.Trans,{id:"We are sorry, but there is an internal error in the app. Our team was notified and will fix this soon."}),a.a.createElement(j,null,a.a.createElement(u.f,{style:{fontSize:"5rem"}})))));var T=n(127),$=n(80),P=n(18);const L=e=>a.a.createElement(D.c,null,({location:e})=>(Object(P.j)("at %s",e.pathname),null));var M=n(21),B=n.n(M),G=n(5),F=n(51);const _=B()("routing"),k=()=>a.a.createElement(D.c,{children:({location:e,history:t})=>a.a.createElement(F.a,{render:n=>{if(!n.auth.isAuthenticatedUser){const r=e.state&&e.state.origin||"/",a=()=>n.auth.isAuthenticated,o=()=>{t.replace(r)};Object(G.D)(a,o),_("will redirect to %s when auth",r)}return null}})});var U=n(165);const x=()=>a.a.createElement(F.a,{observe:!1,render:e=>e.auth.isAuthenticated?(e.auth.invalidate(),a.a.createElement(U.a,{useOrigin:!1})):a.a.createElement(D.b,{to:"/"})});var H=n(71);const z=()=>a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(O.a,null)},a.a.createElement(L,null),a.a.createElement(k,null),a.a.createElement(D.e,null,a.a.createElement($.a,{path:"/login",exact:!0,component:a.a.lazy(()=>Promise.all([n.e(0),n.e(57),n.e(48)]).then(n.bind(null,7938)))}),a.a.createElement($.a,{path:"/recovery/:token",exact:!0,component:a.a.lazy(()=>Promise.all([n.e(0),n.e(36)]).then(n.bind(null,7939)))}),a.a.createElement($.a,{path:"/register/:token",exact:!0,component:a.a.lazy(()=>Promise.all([n.e(0),n.e(36)]).then(n.bind(null,7939)))}),a.a.createElement(H.a,{path:"/",exact:!0,component:a.a.lazy(()=>n.e(49).then(n.bind(null,7937)))}),a.a.createElement(H.a,{path:"/order",component:a.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(38),n.e(39),n.e(50)]).then(n.bind(null,7932)))}),a.a.createElement(H.a,{path:"/settings",component:a.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(37),n.e(51)]).then(n.bind(null,7935)))}),a.a.createElement(H.a,{path:"/overview",component:a.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(37),n.e(52)]).then(n.bind(null,7933)))}),a.a.createElement($.a,{path:"/support",component:a.a.lazy(()=>n.e(53).then(n.bind(null,7930)))}),a.a.createElement(D.c,{path:"/error",component:w}),a.a.createElement(D.c,{path:"/logout",component:x}),a.a.createElement(D.c,{component:T.a}))),Z=()=>a.a.createElement(E,{prod:!0},a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement(i.SnackbarProvider,{maxSnack:3,anchorOrigin:{horizontal:"right",vertical:"top"}},a.a.createElement(A,{render:e=>e.isReady?a.a.createElement(z,null):a.a.createElement(O.a,null)}))));var q=n(472),V=n(83);const Y=({children:e})=>a.a.createElement(q.a,null,({handleGetUserConfirm:t})=>a.a.createElement(V.a,{getUserConfirmation:t},e)),W=()=>a.a.createElement(C.a,null,a.a.createElement(N.a,null,a.a.createElement(Y,null,a.a.createElement(Z,null))));Object(I.b)(()=>{const e=document.getElementById("root");Object(o.render)(a.a.createElement(W,null),e)})},78:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i});const r=n(5).v.box(navigator.onLine);window.addEventListener("offline",()=>r.set(!1)),window.addEventListener("online",()=>r.set(!0));const a=()=>r.get(),o=()=>!r.get();function i(e){return r.observe(t=>{!1===t.oldValue&&!0===t.newValue&&e()})}},80:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),a=n.n(r),o=n(17),i=n(53);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const u=e=>{var{component:t}=e,n=s(e,["component"]);return a.a.createElement(o.c,c({},n,{render:e=>a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(i.a,null)},a.a.createElement(t,e))}))}},9:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return u});var r,a=n(97),o=n.n(a),i=n(15);!function(e){e.yellow="#FFDB2B",e.pink="#FF2B95",e.blue="#2441FF",e.red="#FF1C1C",e.green="#179B12",e.turquoise="#2BFFFF",e.orange="#FF862B",e.violet="#6D4F8C",e.black="#000000",e.greyDarkest="#080808",e.greyDark="#2C2C2C",e.greyMiddle="#939393",e.greyLight="#EDEDED",e.white="#FFFFFF"}(r||(r={}));const c=i.a.curry((e,t)=>o()(e).alpha(t).string());var s;!function(e){e.Card="0.5rem",e.Button="0.5rem",e.TextComponent="0.25rem"}(s||(s={}));const u={MarginAroundFormComponents:"0.1rem",Small:"0.25rem",Middle:"0.5rem",LayoutGridCellMargin:"0.5rem",ButtonHeight:"3.4375rem",DefaultInputWidth:20,DefaultSizeUnit:"rem"}}},[[5840,58,56]]]);
//# sourceMappingURL=main.4cb82981.chunk.js.map