(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{100:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(4);const a=n(11).a.named("MenuBase").views(e=>({get branchId(){return Object(r.d)(e).settings.branchId}}))},101:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return l});var r=n(3),a=n.n(r),o=n(283),i=n(284);const c=a.a`
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
`},104:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(5),a=n(60),o=n(0),i=n.n(o),c=n(14),s=n(12),u=n(39),l=n(13),d=n(9);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const f=s.b.h1.withConfig({displayName:"TitleStyled"})`
  color: ${d.a.greyLight};
  font-weight: lighter;
  margin: 0.5rem 0.5rem 0 0.5rem;
  white-space: nowrap;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
`,h=r.v.array([]);Object(r.i)(()=>{const e=Array.from(h).pop();document.title=e?`${e} :: ${u.a.pageTitleSuffix}`:u.a.pageTitleSuffix});class b extends i.a.Component{componentDidMount(){h.push(this.props.title)}componentDidUpdate(e){const t=h.findIndex(l.a.equals(e.title));t>=0&&h.splice(t,1,this.props.title)}componentWillUnmount(){h.remove(this.props.title)}render(){return null}}b.Route=(e=>{var{title:t}=e,n=m(e,["title"]);return i.a.createElement(c.c,p({},n,{render:()=>i.a.createElement(b,{title:t})}))}),b.Display=(()=>i.a.createElement(a.a,null,()=>i.a.createElement(f,null,h.join(" - "))))},11:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(20),a=n.n(r),o=n(4),i=n(34);const c=o.j.model().views(e=>({get log(){return a()(`model/${Object(o.e)(e)}`)},get client(){const t=Object(o.c)(e).apolloClient;if(!t)throw new i.VError("Apollo client is missing from environment setup");return t},get root(){return Object(o.f)(e)}}))},112:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return l});var r=n(3),a=n.n(r),o=n(170);const i=a.a`
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
`},121:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return s});var r=n(3),a=n.n(r),o=n(32);const i=a.a`
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
`)},126:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),a=n.n(r),o=n(104),i=n(37);const c=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:i.d._("Not found")}),a.a.createElement("h1",null,i.d._("There is nothing here, sorry!")))},13:function(e,t,n){"use strict";var r=n(24);n.d(t,"a",function(){return r})},163:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(20),a=n.n(r),o=n(0),i=n.n(o),c=n(14);const s=a()("routing"),u=({useOrigin:e=!0})=>i.a.createElement(c.c,{path:"/login",children:({match:t,location:n})=>t?null:(s("redirecting to login..."),i.a.createElement(c.b,{to:{pathname:"/login",state:{origin:e?n.pathname:"/"}}}))})},166:function(e,t,n){"use strict";n.d(t,"e",function(){return l}),n.d(t,"a",function(){return d}),n.d(t,"c",function(){return p}),n.d(t,"b",function(){return f}),n.d(t,"d",function(){return h});var r=n(103),a=n(254),o=n(484),i=n.n(o),c=n(83),s=n.n(c);const u=Object(a.formatWithOptions)({locale:i.a}),l="dddd LL",d=(u(l),u("D.M.YYYY"),Object(a.format)("YYYY-MM-DD")),p=u("H:mm"),m=u("D.M.YYYY H:mm"),f=e=>s()(e).format("0,0.[00]"),h=e=>Object(r.e)(e,new Date)?p(e):m(e)},170:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var r=n(3),a=n.n(r),o=n(32);const i=a.a`
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
`,u=Object(o.a)(s)},18:function(e,t,n){"use strict";n.d(t,"h",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"j",function(){return u}),n.d(t,"i",function(){return l}),n.d(t,"b",function(){return d}),n.d(t,"f",function(){return p}),n.d(t,"e",function(){return m}),n.d(t,"k",function(){return f}),n.d(t,"g",function(){return h});var r=n(20),a=n.n(r);a.a.useColors=(()=>!1);const o=a()("main"),i=a()("debug"),c=a()("error"),s=a()("auth"),u=a()("routing"),l=a()("persistence"),d=a()("bootstrap"),p=(a()("access"),a()("graph")),m=a()("form"),f=a()("sentry"),h=a()("lang");console.log},239:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var r=n(3),a=n.n(r),o=n(32),i=n(58);const c=a.a`
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
`,s=Object(o.a)(c)},240:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var r=n(3),a=n.n(r),o=n(32),i=n(101);const c=a.a`
  query GMenuStockList($branchId: ID!) {
    stockItems(companyBranch: $branchId) {
      ...GMenuStockItem
    }
  }
  ${i.c}
`,s=Object(o.a)(c)},250:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0);const a=Object(r.createContext)(void 0)},261:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(0),a=n.n(r),o=n(12),i=n(71),c=n(9);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const l=e=>t=>Object(c.d)(t.color,e),d=o.b.button.withConfig({displayName:"TouchButtonStyled"})`
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
`,f=e=>{var{children:t,iconName:n,iconColor:r=c.a.white,iconSize:o=3,color:l=c.a.greyMiddle,textNextToIcon:f=!1,badge:h,text:b}=e,g=u(e,["children","iconName","iconColor","iconSize","color","textNextToIcon","badge","text"]);return a.a.createElement(d,s({color:l},g),n&&a.a.createElement(i.a,{iconName:n,color:r,fontSize:o}),b&&f&&a.a.createElement(m,null,b),b&&!f&&a.a.createElement(p,null,b),h,t)}},262:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(97),a=n.n(r),o=n(12),i=n(9);const c=o.b.div.withConfig({displayName:"Card"})`
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
`;c.displayName="Card"},264:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),o=n(267);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const s=e=>{var{children:t,width:n=16}=e,r=c(e,["children","width"]);return a.a.createElement(o.a,i({layouts:function(e){return[{i:"full",x:0,y:1,w:e,h:10}]}(n)},r),a.a.createElement("div",{key:"full"},t))}},267:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(12),i=n(285),c=n(104),s=(n(7478),n(261)),u=n(9),l=n(51);const d=o.b.div.withConfig({displayName:"SoundControlContainerStyled"})`
  position: relative;
`,p=Object(o.b)(s.a).withConfig({displayName:"SoundButtonStyled"})`
  height: ${u.c.ButtonHeight};
  width: ${u.c.ButtonHeight};
  position: absolute;
  right: 0;
  top: 0;
`;class m extends a.a.Component{constructor(){super(...arguments),this.state={playPreview:!1}}render(){return a.a.createElement(l.a,{observe:!0,render:({user:e})=>a.a.createElement(d,null,a.a.createElement(p,{color:e.soundEnabled?u.a.green:u.a.red,iconName:e.soundEnabled?"volume_up":"volume_off",iconSize:2,onClick:()=>{e.controlSound(!e.soundEnabled)}}))})}}var f=n(84),h=n(71),b=n(37),g=n(3),y=n.n(g),v=n(32);const I=Object(v.a)(y.a`
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
`,D=()=>a.a.createElement(l.a,{render:({auth:e})=>a.a.createElement(I,{variables:{id:e.userId},renderLoading:()=>null,render:({user:e})=>a.a.createElement(E,{"data-testid":"logout-widget"},a.a.createElement(f.b,{to:"/logout"},a.a.createElement(O,null,function(e){return e?`${e.firstName} ${e.lastName}`:b.d._("Not logged in")}(e)),a.a.createElement(C,null,a.a.createElement(h.a,{iconName:"exit_to_app"}))))})});var S=n(72),A=n(97),N=n.n(A),R=n(14);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const w=e=>t=>N()(t.color).alpha(e).string(),$=o.b.button.withConfig({displayName:"HomeButtonStyled"})`
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
  background-color: ${w(.7)};
  color: white;
  position: relative;
  font-size: 1rem;
  transition-duration: 0.2s;

  &:hover:enabled {
    background-color: ${w(.9)};
  }
  &:active:enabled {
    background-color: ${w(1)};
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,P=e=>{var{color:t=u.a.greyMiddle,iconColor:n=u.a.white,goBack:r=!1}=e,o=T(e,["color","iconColor","goBack"]);return r?a.a.createElement(R.c,null,({history:e})=>a.a.createElement($,j({color:t,onClick:()=>e.goBack()},o),a.a.createElement(h.a,{iconName:"chevron_left",color:n,fontSize:2.2}))):a.a.createElement(f.b,{to:"/"},a.a.createElement($,j({color:t},o),a.a.createElement(h.a,{iconName:"home",color:n,fontSize:2.2})))};n.d(t,"a",function(){return _});const L=o.b.div.withConfig({displayName:"TopLeftButtonContainer"})`
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
`,_=({pageTitle:e="",layouts:t=[],hideLogoutWidget:n=!1,showSoundControl:r=!1,useBackButton:o=!1,scrollPageTitle:s=!0,children:u})=>a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(c.a,{title:e}),r&&a.a.createElement(F,null,a.a.createElement(m,null)),!n&&a.a.createElement(B,{scrollPageTitle:s},a.a.createElement(S.a,{path:"/",component:D,redirect:!1})),a.a.createElement(G,{scrollPageTitle:s},a.a.createElement(c.a.Display,null)),a.a.createElement(i.a,{layouts:[...t]},u),a.a.createElement(L,null,a.a.createElement(P,{goBack:o})))},269:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0);const a=e=>Object(r.useEffect)(e,[])},270:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n.n(r);const o=({text:e="..."})=>a.a.createElement("h1",null,e)},281:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return h});var r=n(83),a=n.n(r),o=n(49),i=n(59),c=n(13),s=n(282),u=n(239),l=n(100),d=n(58),p=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const m=l.a.named("MenuRecipe").actions(e=>({changeVisibility(t,n){e.client.mutate({mutation:d.e,variables:{recipeId:t,visible:n},optimisticResponse:{updateRecipe:{__typename:"Recipe",id:t,visible:n}}})},createRecipe(t,n){const r={recipe:Object.assign({companyBranch:e.branchId,wareCategoryType:n},f(t))};return Object(o.b)(e.client.mutate({mutation:d.a,variables:r,refetchQueries:[{query:u.a,variables:{branchId:e.branchId}}]}))},updateRecipe(t){const n={recipeId:t.id,recipe:Object.assign({},f(t))};return Object(o.b)(e.client.mutate({mutation:d.d,variables:n}))},deleteRecipe(t){return p(this,void 0,void 0,function*(){const n={recipeId:t};yield e.client.mutate({mutation:d.b,variables:n,refetchQueries:[{query:u.a,variables:{branchId:e.branchId}}]})})},getDefaultVat(){return p(this,void 0,void 0,function*(){const{data:t}=yield e.client.query({query:s.a,variables:{branchId:e.branchId}});if(t){const{companyBranch:{defaultVats:e}}=t;return e.reduce((e,{vatId:t,priceType:n})=>(e[n.enum]=t,e),{})}return{}})}}));function f(e){return{code:e.code,nameLabel:e.nameLabel,internalNote:e.internalNote,descriptionLabel:e.descriptionLabel,enabled:e.visible,prices:Object.keys(e.prices).map((t,n)=>({warePriceType:i.f[t],price:{value:a()(e.prices[t].value).value()},vat:e.prices[t].vatId})),sideDishCategories:e.sideDishes.map(c.a.prop("id")),wareCategories:e.categories.map(c.a.prop("id")),associatedRecipes:e.associatedRecipes.map(c.a.pick(["associatedRecipe","warePriceType"])),ingredients:e.ingredients.map(({stockItem:e,quantity:t})=>({stockItem:e,quantity:function(e){return"number"===typeof e?e:Number.parseFloat(e.replace(",","."))}(t)}))}}const h=(e,t)=>({pathname:e,state:{recipeType:t}})},282:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return m});var r=n(3),a=n.n(r),o=n(32),i=n(38),c=n(121);const s=a.a`
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
`,m=Object(o.a)(d)},283:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(3);const a=n.n(r).a`
  fragment GAllergen on Allergen {
    id
    code
    enum
    category
  }
`},284:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(3);const a=n.n(r).a`
  fragment GWareUnit on WareUnit {
    id
    enum
    code
  }
`},285:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),o=n(257),i=n.n(o);const c=Object(o.WidthProvider)(i.a),s=({children:e,layouts:t})=>a.a.createElement(c,{className:"layout",layout:t,cols:16,rowHeight:55,margin:[8,8],autoSize:!1,isDraggable:!1,isResizable:!1,compactType:null,measureBeforeMount:!0},e)},286:function(e,t,n){"use strict";var r=n(49),a=n(13),o=n(121),i=n(100),c=n(3),s=n.n(c),u=n(436);const l=s.a`
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
`;n.d(t,"a",function(){return b}),n.d(t,"b",function(){return y});var h=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const b=i.a.named("MenuCategory").actions(e=>({sortCategory(t,n){return h(this,void 0,void 0,function*(){const r={categoryId:t,offset:n},a=yield e.client.mutate({mutation:l,variables:r});return Boolean(a.data&&a.data.success)})},changeVisibility(t,n){e.client.mutate({mutation:m,variables:{categoryId:t,visible:n},optimisticResponse:{updateRecipe:{__typename:"Recipe",id:t,visible:n}}})},createCategory(t,n){const a={input:Object.assign({companyBranch:e.branchId,wareCategoryType:n},g(t,n))};return Object(r.b)(e.client.mutate({mutation:d,variables:a,refetchQueries:[{query:o.a,variables:{branchId:e.branchId,categoryType:n}}]}))},updateCategory(t,n){return h(this,void 0,void 0,function*(){const a={categoryId:t.id,input:Object.assign({},g(t,n))};return Object(r.b)(e.client.mutate({mutation:p,variables:a}))})},deleteCategory(t,n){return h(this,void 0,void 0,function*(){const r={categoryId:t};yield e.client.mutate({mutation:f,variables:r,refetchQueries:[{query:o.a,variables:{branchId:e.branchId,categoryType:n}}]})})}}));function g(e,t){return Object.assign({nameLabel:e.nameLabel,internalNoteLabel:e.internalNoteLabel,enabled:e.visible,pictogram:e.pictogram,recipes:e.recipes.map(a.a.prop("id"))})}const y=(e,t)=>({pathname:e,state:{categoryType:t}})},287:function(e,t,n){"use strict";var r=n(4),a=n(166),o=n(13),i=n(11),c=n(3),s=n.n(c),u=n(435);const l=s.a`
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
`;var p;n.d(t,"b",function(){return p}),n.d(t,"a",function(){return f}),function(e){e.TIMESPAN="TIMESPAN",e.FULLDAY="FULLDAY"}(p||(p={}));const m=o.a.complement(o.a.propEq("id")),f=i.a.named("BusinessHours").props({specificMode:r.j.optional(r.j.enumeration(["TIMESPAN","FULLDAY"]),p.TIMESPAN)}).actions(e=>({changeSpecificMode(t){e.specificMode=t},submitSpecificHour(t){const n={input:{companyBranch:e.root.settings.branchId,specificDate:t.date,closed:e.specificMode===p.FULLDAY,openAt:t.openAt&&Object(a.c)(t.openAt),closeAt:t.closeAt&&Object(a.c)(t.closeAt),closedNote:t.note}};e.client.mutate({mutation:l,variables:n,updateQueries:{GSpecificBusinessHours:(e,{mutationResult:t})=>t.data?{businessHours:e.businessHours.concat(t.data.result)}:e}})},deleteSpecificHour(t){const n={id:t};e.client.mutate({mutation:d,variables:n,updateQueries:{GSpecificBusinessHours:(e,{mutationResult:t})=>t.data?{businessHours:e.businessHours.filter(m(t.data.result.id))}:e}})}}))},32:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(0),a=n.n(r),o=n(129),i=n(14),c=(n(7124),n(270)),s=n(18),u=n(79),l=n(33);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function m(e){return class extends a.a.Component{constructor(){super(...arguments),this.cleanup=[]}componentWillUnmount(){this.cleanup.forEach(e=>e())}componentDidUpdate(){this.cleanup.forEach(e=>e())}render(){const t=this.props,{render:n,renderFragment:r,renderLoading:m=!0,renderError:f=!0,refetchOnConnectionLost:h=!1,children:b}=t,g=p(t,["render","renderFragment","renderLoading","renderError","refetchOnConnectionLost","children"]);return a.a.createElement(o.Query,d({query:e},g),e=>{if(e.loading||!e.data){if("function"===typeof m)return m(e);if(!0===m)return a.a.createElement(c.a,null)}if(e.error)return Object(l.c)(e.error),Object(s.d)(e.error),"function"===typeof f?f(e):!0===f?a.a.createElement(i.b,{to:"/error"}):null;if(h&&this.cleanup.push(Object(u.c)(e.refetch)),e.data){if(r)return a.a.createElement(a.a.Fragment,null,r(e.data,e));if(n)return n(e.data,e)}return b||null})}}}},33:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return l}),n.d(t,"e",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"c",function(){return m});var r=n(44),a=n.n(r),o=n(34),i=n(39),c=n(18),s=n(13);const u=e=>{const{sentryDSN:t}=i.a;t?(Object(c.k)("enabled with DSN %s",t),a.a.config(t,{environment:"prod"}).install(),a.a.context(e)):e()},l=e=>{a.a.setUserContext({userId:e})},d=(e,t)=>{a.a.isSetup()&&(a.a.captureException(e,{extra:t}),a.a.showReportDialog())},p=(e,t)=>{a.a.captureBreadcrumb({category:"graphql",level:"debug",message:"query",data:Object.assign({},t,{errors:e})}),e.forEach(e=>{a.a.captureException(new Error(e.message),{extra:e})});const n=e.filter(s.a.propEq("showToUser",!0));n.length&&a.a.lastEventId()&&a.a.showReportDialog({title:s.a.head(n).message})},m=e=>{let t={};return e instanceof o.VError&&(t=Object.assign({cause:o.VError.cause(e)},o.VError.info(e))),a.a.captureException(e,{extra:t}),e}},337:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var r=n(3),a=n.n(r),o=n(32);const i=a.a`
  query Statistics($branches: [ID!]!, $dateFrom: Date!, $dateTo: Date!) {
    stats: statistics(
      branches: $branches
      dateFrom: $dateFrom
      dateTo: $dateTo
    ) {
      categoryStatisticsPlain
      dailyStatisticsPlain
      deliveryStatisticsPlain
    }
  }
`,c=a.a`
  mutation GCreateFinancialReport($companyBranchId: ID!) {
    result: createFinancialReport(companyBranchId: $companyBranchId) {
      id
    }
  }
`,s=Object(o.a)(i)},37:function(e,t,n){"use strict";var r=n(194),a=n(82),o=n(165),i=n(60),c=n(0),s=n.n(c),u=n(53),l=n(52),d=n(18),p=n(83),m=n.n(p),f=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const h={en:"en-gb"};n.d(t,"d",function(){return g}),n.d(t,"a",function(){return I}),n.d(t,"c",function(){return E}),n.d(t,"b",function(){return O});var b=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const g=Object(r.setupI18n)(),y="en",v=["cs","sk","en"],I=Object(i.b)(({children:e})=>{const{user:t}=Object(l.c)();return t.language?s.a.createElement(a.I18nProvider,{language:t.language,i18n:g},s.a.Children.only(e)):s.a.createElement(u.a,null)});function E(){const e=new o.LocaleResolver([new o.NavigatorDetector],[new o.LanguageOnlyTransformer]).getLocales();return Object(d.g)("detected languages %s",e.join("; ")),e.find(e=>v.includes(e))||y}function O(e){return b(this,void 0,void 0,function*(){return v.includes(e)?(yield function(e){return b(this,void 0,void 0,function*(){let t;t=yield n(6070)(`./${e}/messages.ts`),g.load({[e]:t}),Object(d.g)("loaded catalog %s",e)})}(e),g.activate(e),yield function(e){return f(this,void 0,void 0,function*(){yield n(6069)(`./${h[e]||e}`),m.a.locale(h[e]||e)})}(e),Object(d.g)("changed to %s",e),!0):(Object(d.g)("language %s is not supported"),!1)})}},38:function(e,t,n){"use strict";var r=n(3),a=n.n(r);const o=a.a`
  fragment GAddress on JsonAddress {
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
`;n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return d})},39:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r={endpoint:"https://be.dev.admin.c2e.deep-vision.cloud",persistenceKey:"admin@local",pageTitleSuffix:"LOCAL",sentryDSN:""};Object.assign(r,{endpoint:"https://c2e-p1.deep-vision.cloud",persistenceKey:"admin@prod",pageTitleSuffix:"Spe\u0258dlo",sentryDSN:"https://1017631ac60a4ee0bfea56d5857dcc46@sentry.io/1232073"})},435:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});var r=n(3),a=n.n(r),o=n(32);const i=a.a`
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
`)},436:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c});var r=n(3),a=n.n(r),o=n(58);const i=a.a`
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
`},469:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(473),i=n.n(o),c=n(18),s=n(103);class u extends r.Component{constructor(){super(...arguments),this.state={isActive:!1,nextTime:this.getNextTime()},this.timer=0,this.executeTimer=(()=>{if(this.timer&&(clearTimeout(this.timer),this.timer=0),!1===this.props.enabled)return;const e=Object(s.c)(this.state.nextTime,new Date);this.timer=setTimeout(this.activate,e)}),this.activate=(()=>{!1!==this.props.enabled&&this.setState({isActive:!0,nextTime:this.getNextTime()})}),this.deactivate=(()=>{this.setState({isActive:!1}),this.executeTimer()})}componentDidMount(){this.executeTimer()}componentDidUpdate(){this.executeTimer()}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}getNextTime(){return Object(s.a)(new Date,this.props.intervalSec)}render(){const{isActive:e}=this.state;return this.props.render({isActive:e,nextLoop:this.deactivate})}}var l=n(51);n.d(t,"a",function(){return d});const d=({intervalSec:e,soundUrl:t,shouldPlay:n=!0,skipEnableChecks:r=!1})=>a.a.createElement(l.a,{observe:!0,render:({config:o,user:s})=>{if(!r){if(!o.soundEnabled)return Object(c.h)("sound is disabled"),null;if(!s.soundEnabled)return Object(c.h)("sound not enabled by user"),null}return Object(c.h)("sound play status: %s",n),a.a.createElement(u,{intervalSec:e,enabled:n,render:({isActive:e,nextLoop:n})=>a.a.createElement(i.a,{url:t,playStatus:e?"PLAYING":"STOPPED",onFinishedPlaying:n,loop:!1,autoLoad:!0,volume:s.soundVolume})})}})},472:function(e,t,n){e.exports=n.p+"static/media/connectionWarning.ac6fe03b.mp3"},483:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var r=n(5),a=n(4),o=n(279);const i=n(11).a.named("OrderList").props({branches:a.j.optional(a.j.array(a.j.string),[])}).views(e=>({get branchesFilter(){return e.branches.length?Array.from(e.branches):[]},get hasBranchFilter(){return e.branches.length>0},get isSingleBranchSelected(){return 1===e.branches.length},get orderMap(){return Object(a.d)(e).map}})).actions(e=>({clearBranchFilter(){e.branches.clear()},setBranchFilter(t){e.branches.replace(t)},panMapToOrder(t){e.orderMap.panToOrder(t.id)}})).extend(t=>{const n=Object(r.v)(new Map);return{views:{isOrderDetailOpen:e=>n.has(e)},actions:{toggleOrderDetail(e){const r=e.id;n.has(r)?n.delete(r):(n.set(r,!0),t.panMapToOrder(e))},focusOrderDetail(t){n.has(t)||n.set(t,!0),e(()=>{o.scroller.scrollTo(`order-${t}`,{smooth:"easeInOutQuart",containerId:"order-list",absolute:!0,offset:-140})})}}}})}).call(this,n(200).setImmediate)},49:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return d});var r=n(478),a=n(20),o=n.n(a),i=n(33),c=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const s=o()("graph:error"),u=({graphQLErrors:e,networkError:t,operation:n})=>{e&&(Object(i.d)(e,{query:n.operationName,variables:n.variables}),e.map(({message:e,locations:t,path:n})=>s(`[GraphQL error]: Message: ${e}, Location: ${t}, Path: ${n}`))),t&&s(`[Network error]: ${t}`)},l=()=>Object(r.a)(u),d=e=>c(void 0,void 0,void 0,function*(){const t=yield e;return t&&t.errors?t.errors:null})},51:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),a=n.n(r),o=n(52);const i=({render:e,observe:t})=>a.a.createElement(o.b,{children:e,observe:t})},52:function(e,t,n){"use strict";var r=n(60),a=n(0),o=n.n(a),i=n(129),c=n(250),s=n(7934),u=n(542),l=n(8),d=n(489),p=n(477),m=n.n(p),f=n(490),h=n(5),b=n(39),g=n(18),y=n(79),v=n(34),I=n.n(v);var E=n(49),O=n(479),C=n.n(O),D=n(5996),S=n(480);const A=()=>Math.round(Date.now()+1e5*Math.random()).toString(16);function N({query:e}){const{operation:t}=Object(D.h)(e);return"subscription"===t}function R(e){const t=new s.a({dataIdFromObject:e=>null!=e.__typename&&null!=e.id?`${e.__typename}-${e.id}`:null}),n=function(e){const t=Object(h.j)(()=>({Authorization:`Bearer ${e.communicationToken}`}));return new l.ApolloLink((n,r)=>{if(!e.canCommunicate)throw new I.a(`Executing operation ${n.operationName} before authenticated`,{operation:n});const a=n.getContext();return n.setContext(Object.assign({},a,{headers:t.get()})),new l.Observable(t=>{const a=r(n).subscribe({error:n=>{n.result&&"INVALID_TOKEN"===n.result.code?e.invalidate():t.error(n)},next:t.next.bind(t),complete:t.complete.bind(t)});return()=>a.unsubscribe()})})}(e),r=new f.a({delay:{initial:300,max:1/0,jitter:!0},attempts:{max:5,retryIf:(e,t)=>!!e}}),a=function(){const e=new m.a;return Object(h.i)(()=>{Object(y.b)()?(Object(g.f)("client is online"),e.open()):(Object(g.f)("client is offline"),e.close())}),e}(),o=Object(E.a)(),i=new d.a({uri:`${b.a.endpoint}/graphql`,credentials:"same-origin"}),c=function(e){const t=Object(h.j)(()=>`${b.a.endpoint}/cable?token=${e.token}`);let n;const r={};return new l.ApolloLink(a=>{if(!e.isAuthenticated)throw new v.VError(`Executing operation ${a.operationName} before authenticated`,{operation:a});return n||(n=C.a.createConsumer(t.get())),new l.Observable(e=>{const t=A();return n.subscriptions.create(Object.assign({},{channel:"GraphqlChannel",channelId:t},r),{connected:function(){this.perform("execute",{query:a.query?Object(S.print)(a.query):null,variables:a.variables,operationId:a.operationId,operationName:a.operationName})},received:function(t){t.result.data&&e.next(t.result),t.more||(this.unsubscribe(),e.complete())}})})})}(e);return new u.a({link:l.ApolloLink.from([n,r,a,o]).split(N,c,i),cache:t})}var j=n(164),T=n.n(j),w=n(4),$=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const P=b.a.persistenceKey;function L(e){return $(this,void 0,void 0,function*(){const t=Object(w.h)(e).name,n=`${P}_${t}`,r=e=>T.a.setItem(n,e);try{const t=yield T.a.getItem(n);null!==t?(Object(w.a)(e,t),Object(g.i)("restored state %s",n)):(yield r(Object(w.g)(e)),Object(g.i)("initialized state %s",n))}catch(a){Object(g.i)("persistence failed",a),T.a.removeItem(n)}Object(w.i)(e,r)})}var M=n(269),B=n(481),G=n(33),F=n(11),_=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const U=F.a.named("PasswordLogin").volatile(e=>({errorCode:"",errorMessage:""})).views(e=>({get hasFailed(){return Boolean(e.errorCode)}})).actions(e=>({setFailure(t,n){e.errorCode=t,e.errorMessage=n},setSuccess(t,n){Object(w.d)(e).authenticate(t,n)}})).actions(e=>({requestToken(t,n){return _(this,void 0,void 0,function*(){const r=(({username:e,password:t})=>`${b.a.endpoint}/users/token?username=${e}&password=${t}`)({username:t,password:n}),a=window.fetch,o=yield a(r,{headers:{Accept:"application/json"}}),i=yield o.json();e.log("received payload %j",i),200!==o.status?(e.setFailure(i.code,i.error),e.log("token request failed for username %s",t)):(e.setSuccess(i.token,String(i.userId)),e.log("token request success for username %s [%s]",t,i.userId))})}})),k=F.a.named("LoginProvider").props({passwordLogin:w.j.optional(U,{})}).actions(e=>({authenticate(t,n){Object(w.d)(e).authenticate(t,n)}}));var x=n(3),H=n.n(x);const z=H.a`
  mutation MPasswordChange($password: String!) {
    updateUserPassword(newPassword: $password) {
      id
      token
    }
  }
`;var Z=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const q=F.a.named("Auth").props({userId:w.j.optional(w.j.string,""),token:w.j.optional(w.j.string,""),provider:w.j.optional(k,{})}).volatile(()=>({})).views(e=>({get isAuthenticated(){return e.token.length>0},get isAuthenticatedUser(){return this.isAuthenticated&&e.userId.length>0},get communicationToken(){return e.tokenForPasswordChange||e.token},get canCommunicate(){return this.isAuthenticated||void 0!==e.tokenForPasswordChange}})).actions(e=>({authenticate(t,n){e.token=t,e.userId=n,e.tokenForPasswordChange=void 0,e.log("authenticated with id %s",n),Object(G.a)(n)},invalidate(){e.token="",e.userId="",e.tokenForPasswordChange=void 0,e.client.cache.reset(),e.log("invalidated authentication"),Object(G.a)(null)}})).actions(e=>({setForPasswordChange(t){e.invalidate(),e.log("encoded token %s",t),e.tokenForPasswordChange=B.Base64.decode(t),e.log("using temp token %s",e.tokenForPasswordChange)},changePassword(t){return Z(this,void 0,void 0,function*(){const n={password:t},r=yield e.client.mutate({mutation:z,variables:n,fetchPolicy:"no-cache"}),{updateUserPassword:{id:a,token:o}}=r.data;o&&a&&(e.invalidate(),e.authenticate(o,a))})}})).preProcessSnapshot(e=>(e.userId&&Object(G.a)(e.userId),e)),V=F.a.named("Config").props({soundEnabled:!0,orderListPollIntervalSec:60,orderListSoundIntervalSec:60}),Y=w.j.model("Timing",{bySecond:w.j.optional(w.j.number,1/0),byMinute:w.j.optional(w.j.number,1/0),autoStart:!0}).actions(e=>({updateBySecond(t){(e.bySecond===1/0||t-e.bySecond>=1e3)&&(e.bySecond=t)},updateByMinute(t){(e.byMinute===1/0||t-e.byMinute>=6e4)&&(e.byMinute=t)}})).extend(e=>{let t=-1,n=Date.now;const r=()=>{const a=n();e.updateBySecond(a),e.updateByMinute(a),t=window.setTimeout(r,1e3)};return{actions:{start(e){e&&(n=e),r()},stop(){t>=0&&(window.clearTimeout(t),t=-1)}}}}).actions(e=>({afterAttach(){e.autoStart&&e.start()}}));var W=n(80),K=n.n(W),Q=n(24),J=n(13),X=n(37),ee=n(38);const te=H.a`
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

  ${ee.b}
`;var ne=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const re=F.a.named("User").props({language:w.j.maybe(w.j.string),soundVolume:w.j.optional(w.j.number,25),soundIgnore:!1,currentBranchId:w.j.maybeNull(w.j.string)}).volatile(()=>({isLoaded:!1,branches:null,brands:null,soundEnabled:!1,permissions:null})).views(e=>({get branchesId(){return null===e.branches?[]:e.branches.map(Q.prop("id"))},filterBranches:t=>null===e.branches?[]:e.branches.filter(t),get currentBranch(){return null===e.currentBranchId||null===e.branches?null:e.branches.find(J.a.propEq("id",e.currentBranchId))||null},get currentBranchGps(){const e=this.currentBranch;if(!e)return null;const{latitude:t,longitude:n}=e.gps;return{latitude:t,longitude:n}},canQuery:t=>null!==e.permissions&&e.permissions.queries.has(t.toLowerCase()),canMutate:t=>null!==e.permissions&&e.permissions.mutations.has(t.toLowerCase()),get isReady(){return e.isLoaded||!e.root.auth.isAuthenticated}})).actions(e=>({selectBranch(t){e.currentBranchId=t},applyUserData(t){e.branches=t.branches,e.brands=J.a.uniqBy(J.a.prop("id"),t.branches.map(J.a.prop("brand"))),null!==e.currentBranchId&&1!==e.branches.length||(e.currentBranchId=e.branchesId[0])},applyUserPermissions(t){e.permissions=K.a.mapValues(t,({fields:e})=>new Set(e.map(J.a.compose(J.a.toLower,J.a.prop("name")))))},setLanguage:Object(w.b)(function*(t){Object(g.g)("changing to language %s from user profile",t),yield Object(X.b)(t),e.language=t}),finishBootstrap(){e.isLoaded=!0},controlSound(t=!0,n=!1){e.soundEnabled=t,e.soundIgnore=n},setSoundVolume(t){e.soundVolume=t}})).actions(e=>{return{initUser:()=>{Object(h.i)(()=>{e.root.auth.userId?(Object(g.b)("query user"),(t=>ne(void 0,void 0,void 0,function*(){const n={userId:t},{data:r}=yield e.client.query({query:te,variables:n});e.setLanguage(r.user.language.rawCode),e.applyUserData(r.user),e.applyUserPermissions(r.permissions),e.finishBootstrap()}))(e.root.auth.userId)):(Object(g.b)("user not authenticated"),e.setLanguage(Object(X.c)()))})}}});var ae=n(59),oe=n(204),ie=n.n(oe);ie.a.locale="cz";const ce=H.a`
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
`,se=H.a`
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
`,ue=H.a`
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
`,le=H.a`
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
`,de=H.a`
  mutation MCancelOrder($orderId: ID!) {
    addOrderState(order: $orderId, orderState: CANCELED) {
      id
    }
  }
`,pe=F.a.named("CreateOrder").volatile(me).views(e=>({get branchId(){return e.root.user.currentBranchId},get gps(){return e.location&&e.values.deliveryType===ae.a.MESSENGER?Object.assign({},e.location):Object.assign({},e.root.user.currentBranchGps)},get phone(){return e.values.phone||e.callingPhone},get formValues(){if(null!==e.vamCustomer&&e.vamCustomer.isFound){const{firstName:t,lastName:n,email:r,phone:a,lastOrder:o}=e.vamCustomer;return K.a.defaults(Object.assign({},e.values),{phone:a,firstName:t,lastName:n,email:r,note:o&&o.note||""})}if(e.fakeValues){const{firstName:t,lastName:n,email:r,phone:a,note:o}=e.fakeValues;return K.a.defaults(Object.assign({},e.values),{phone:a,firstName:t,lastName:n,email:r,note:o})}return K.a.defaults(Object.assign({},e.values),{phone:e.callingPhone||""})},get deliveryType(){return e.values.deliveryType},get isDelivery(){return e.values.deliveryType===ae.a.MESSENGER},get hasMultipleVamLocations(){return null!==e.vamCustomer&&e.vamCustomer.locations.length>1},get canSubmit(){return Boolean(e.orderId&&!e.isSubmitting)},get hasSubmitErrors(){return Boolean(e.submitErrors&&e.submitErrors.length>0)},get askForCancel(){return null!==e.orderId},get cartRefreshKey(){return null===e.orderId?e.values.deliveryType:`${e.orderId}-${e.values.deliveryType}`}})).actions(e=>{const t=t=>{e.isSubmitting=!1,e.submitErrors=t||[X.d._("Order submit has failed. Please try again later.")]};let n;const r=()=>{Object.assign(e,me())},a=Object(w.b)(function*(){if(null===e.orderId){const t={branchId:e.branchId,deliveryType:e.values.deliveryType,gps:e.gps,callEventId:e.callingEventId},n=yield e.client.mutate({mutation:se,variables:t});n.data&&(e.orderId=n.data.createOrder.id)}return e.orderId}),o=Object(w.b)(function*(n){const a={orderId:e.orderId,customer:{firstName:n.firstName,lastName:n.lastName,emails:n.email?[{email:n.email}]:null,phones:n.phone?[{phone:n.phone}]:null},deliveryType:n.deliveryType,gps:e.gps,note:n.note};let o;e.log("submit order: ",a),e.isSubmitting=!0;try{o=yield e.client.mutate({mutation:le,variables:a})}catch(c){throw t(),Object(G.c)(new v.VError("order create submit failed: %j",c))}if(o.errors&&o.errors.length||!o.data)throw t(),Object(G.c)(new v.VError("order create submit failed: %j",o.errors));const i=o.data.finishOrder;if(i.userErrors&&i.userErrors.length)throw t(i.userErrors),Object(G.c)(new v.VError("order create validation errors: %j",i.userErrors));r()}),i=Object(w.b)(function*(){if(!e.orderId)return void r();const t={orderId:e.orderId};e.client.mutate({mutation:de,variables:t}),r()});return Object(h.i)(()=>{if(null===e.orderId)return;const t={orderId:e.orderId,deliveryType:e.formValues.deliveryType,gps:e.gps};e.client.mutate({mutation:ue,variables:t})}),{submitFailed:t,ensureOrder:a,acceptOrder:o,cancelOrder:i,resetOrder:()=>{e.orderId=null,n&&(n(),n=null)}}}).actions(e=>{const t=Object(w.b)(function*(){if(!e.location)return void(e.notDeliveryLocation=!1);const{latitude:t,longitude:n}=e.location,r={branchId:e.branchId,latitude:t,longitude:n},a=yield e.client.query({query:ce,variables:r});e.notDeliveryLocation=!a.data.resolveLocation.inDeliveryLocation});return{useLocation({latitude:n,longitude:r}){e.location={latitude:n,longitude:r},t()}}}).actions(e=>({userIsCalling(t,n){e.callingPhone=t,n&&(e.callingEventId=n)},scrollToCategory(t){e.scrollMenuToCategoryId=t},updateFormValues(t,n){e.log("touched",n),e.values=Object.assign({deliveryType:t.deliveryType},K.a.pick(t,Object.keys(n))),e.log("updated values: ",e.values)},updateFromVam(t){e.vamCustomer=t,e.log("vam customer: ",t)},updateFormWithFakeValues(){e.fakeValues={firstName:ie.a.name.firstName(),lastName:ie.a.name.lastName(),email:ie.a.internet.email(),phone:ie.a.phone.phoneNumberFormat(4),note:ie.a.lorem.sentence().slice(0,49)},e.fakeAddress="Opletalova 334, Hradec Kr\xe1lov\xe9, \u010cesko"}}));function me(){return{orderId:null,callingPhone:void 0,callingEventId:void 0,values:{deliveryType:ae.a.MESSENGER,phone:void 0,email:void 0,firstName:void 0,lastName:void 0,note:void 0},fakeAddress:void 0,fakeValues:void 0,location:void 0,vamCustomer:null,notDeliveryLocation:!1,isSubmitting:!1,submitErrors:null,scrollMenuToCategoryId:null}}var fe=n(483),he=n(54);const be=49.8037633,ge=15.4749126,ye=F.a.named("Map").props({zoom:w.j.optional(w.j.number,12),latitude:w.j.optional(w.j.number,be),longitude:w.j.optional(w.j.number,ge)}).volatile(e=>({mapRef:null})).views(e=>({get center(){return Object(he.b)(e)}})).actions(e=>({setMapRef(t){e.mapRef=t},updateZoom(){e.mapRef&&(e.zoom=e.mapRef.getZoom())},updatePosition(){if(e.mapRef){const t=e.mapRef.getCenter();e.latitude=t.lat(),e.longitude=t.lng()}}})),ve=H.a`
  query GOrderBranchLocation($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      gps {
        ...GGeoPoint
      }
    }
  }
  ${ee.e}
`,Ie=H.a`
  query GOrderLocation($orderId: ID!) {
    order(id: $orderId) {
      id
      gps {
        ...GGeoPoint
      }
    }
  }
  ${ee.e}
`;var Ee=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const Oe=ye.named("OrderMap").actions(e=>({panToOrder(t){return Ee(this,void 0,void 0,function*(){if(!e.mapRef)return;const{data:n}=yield e.client.query({query:Ie,variables:{orderId:t}});n&&n.order.gps&&e.mapRef.panTo(Object(he.b)(n.order.gps))})},panToBranch(t){return Ee(this,void 0,void 0,function*(){const{data:n}=yield e.client.query({query:ve,variables:{branchId:t}});e.mapRef&&n&&e.mapRef.panTo(Object(he.b)(n.companyBranch.gps))})}}));var Ce=n(112),De=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const Se=F.a.named("OrderState").views(e=>({})).actions(e=>({updateOrderState(t,n){return De(this,void 0,void 0,function*(){const r={orderId:t,state:n};yield e.client.mutate({mutation:Ce.e,variables:r})})}})).actions(e=>({deliverOrder:t=>e.updateOrderState(t,ae.d.ON_WAY),sendTimeNotification(t,n){return De(this,void 0,void 0,function*(){const r={orderId:t,minutes:n};yield e.client.mutate({mutation:Ce.d,variables:r})})},selectDriver(t,n){return De(this,void 0,void 0,function*(){const r={orderId:t,driverId:n};yield e.client.mutate({mutation:Ce.c,variables:r})})},removeDriver(t){return De(this,void 0,void 0,function*(){const n={orderDriverId:t};yield e.client.mutate({mutation:Ce.b,variables:n})})}})),Ae=w.j.model("Order",{list:w.j.optional(fe.a,{}),map:w.j.optional(Oe,{}),state:w.j.optional(Se,{})});var Ne=n(337);const Re=F.a.named("Statistics").props({branches:w.j.optional(w.j.array(w.j.string),[])}).volatile(e=>({dateFrom:new Date,dateTo:new Date})).views(e=>({get branchesFilter(){return e.branches.length?Array.from(e.branches):[]},get hasBranchFilter(){return e.branches.length>0},get isSingleBranchSelected(){return 1===e.branches.length},get singleBranchFilter(){return e.branches[0]}})).actions(e=>({submitFilter(t){e.dateFrom=new Date(t.values.dateFrom),e.dateTo=new Date(t.values.dateTo)},clearBranchFilter(){e.branches.clear()},setBranchFilter(t){e.branches.clear(),e.branches.push(t)},createClosure(){if(e.isSingleBranchSelected){const t={companyBranchId:e.singleBranchFilter};e.client.mutate({mutation:Ne.a,variables:t,refetchQueries:["FinancialReportsCompanyBranch"]})}}}));var je=n(287);const Te=F.a.named("SettingsBase").views(e=>({get settings(){return Object(w.d)(e)}}));var we=n(286),$e=n(281),Pe=n(240),Le=n(100),Me=n(101),Be=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const Ge=Le.a.named("MenuStock").actions(e=>({createItem(t){const n={stockItem:Object.assign({companyBranch:e.branchId},Fe(t))};return Object(E.b)(e.client.mutate({mutation:Me.a,variables:n,refetchQueries:[{query:Pe.a,variables:{branchId:e.branchId}}]}))},updateItem(t){const n={stockId:t.id,stockItem:Object.assign({},Fe(t))};return Object(E.b)(e.client.mutate({mutation:Me.d,variables:n}))},deleteItem(t){return Be(this,void 0,void 0,function*(){const n={stockId:t};yield e.client.mutate({mutation:Me.b,variables:n,refetchQueries:[{query:Pe.a,variables:{branchId:e.branchId}}]})})}}));function Fe(e){return{code:e.code,label:e.nameLabel,note:e.note,plu:e.plu,allergens:e.allergens,wareUnit:e.wareUnit,allowNegative:e.allowNegative}}const _e=Te.named("Menu").props({category:w.j.optional(we.a,{}),recipe:w.j.optional($e.a,{}),stock:w.j.optional(Ge,{})}),Ue=F.a.named("Settings").props({selectedBranchId:w.j.maybe(w.j.string),businessHours:w.j.optional(je.a,{}),menu:w.j.optional(_e,{})}).views(e=>({get branchId(){return e.selectedBranchId||J.a.head(e.root.user.branchesId)},get queryProps(){const e=this.branchId;return e?{variables:{branchId:e}}:{skip:!0}},getQueryProps(e){const t=this.branchId;return t?{variables:Object.assign({branchId:t},e)}:{skip:!0}}})).actions(e=>({selectBranch(t){e.selectedBranchId=t}}));var ke=n(122),xe=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const He=ye.named("ZoneMap").volatile(()=>({currentZonePoints:null})).actions(e=>({updateZonePoints(t){e.currentZonePoints=t},clearZonePoints(){e.currentZonePoints=null},panToZone(t){return xe(this,void 0,void 0,function*(){const{data:n}=yield e.client.query({query:ke.c,variables:{zoneId:t}});if(n){const{zone:{companyBranch:{gps:t}}}=n;e.mapRef&&e.mapRef.panTo(Object(he.b)(t))}})},panToBranch(t){return xe(this,void 0,void 0,function*(){e.mapRef&&e.mapRef.panTo(Object(he.b)(t.gps))})}})),ze=H.a`
  mutation GCreateZone($branchId: ID!, $points: [InputGeoPointCreate!]) {
    createZone(zone: { companyBranch: $branchId, geoPolygon: $points }) {
      ...GZone
    }
  }
  ${ke.b}
`,Ze=H.a`
  mutation GUpdateZone($zoneId: ID!, $update: InputZoneUpdate!) {
    updateZone(id: $zoneId, zone: $update) {
      ...GZone
    }
  }
  ${ke.b}
`,qe=H.a`
  mutation GUpdateZonePriority($zoneId: ID!, $offset: Int!) {
    updateZonePriority(zone: $zoneId, offset: $offset) {
      id
      priority
    }
  }
`,Ve=H.a`
  mutation GDestroyZone($zoneId: ID!) {
    destroyZone(id: $zoneId) {
      id
    }
  }
`;var Ye=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const We=F.a.named("Zone").props({route:"/settings/zones",map:w.j.optional(He,{}),brandId:w.j.maybeNull(w.j.string)}).volatile(()=>({branch:null})).views(e=>({get brand(){return e.brandId&&e.root.user.brands.find(J.a.propEq("id",e.brandId))||null},get hasBranchFilter(){return null!==e.branch},get branchFilterId(){return null===e.branch?null:e.branch.id},get branchFilterPredicate(){return null!==e.branch?Q.propEq("id",e.branch.id):null===this.brand?()=>!1:Q.pathSatisfies(Q.equals(this.brand.id),["brand","id"])},get zoneFilterPredicate(){return null!==e.branch?Q.pathSatisfies(Q.equals(e.branch.id),["companyBranch","id"]):null===this.brand?()=>!1:Q.pathSatisfies(Q.equals(this.brand.id),["companyBranch","brand","id"])},getRouteToZone:t=>`${e.route}/${t}`,get branches(){return e.root.user.isReady?e.root.user.branches:[]}})).actions(e=>({setBranchFilter(t){e.branch=t,e.brandId=t.brand.id,e.map.panToBranch(t)},setBrandFilter(t,n){e.brandId=t.id,e.branch&&e.branch.brand.id===t.id||(e.branch=1===n.length&&J.a.head(n)||null)},clearBranchFilter(){e.branch=null},clearBrandFilter(){e.brandId=null,e.branch=null}})).actions(e=>({createZone:Object(w.b)(function*(t){if(null===e.branch)throw new v.VError("Called createZone without branch being set");const n=Object(he.a)({center:e.branch.gps,metersRadius:1e3,pointsCount:5}),r={branchId:e.branch.id,points:n},{data:a}=yield e.client.mutate({mutation:ze,variables:r,updateQueries:{GZones:(e,{mutationResult:t})=>{const n=t.data.createZone;return n?Object.assign({},e,{zones:e.zones.concat(n)}):e}}});if(a){t(a.createZone.id)}}),saveZone(t,n){return Ye(this,void 0,void 0,function*(){const r={zoneId:t,update:{name:n.name,enabled:n.enabled,companyBranch:n.companyBranch.id,zoneColor:n.zoneColor.id,minimalOrderPrice:{value:Number(n.minimalOrderPrice.value)||0},priceRangeRules:n.priceRangeRules.map(Qe).filter(Q.reject(Q.pathEq(["price","value"],null))),geoPolygon:e.map.currentZonePoints||void 0}};yield e.client.mutate({mutation:Ze,variables:r,updateQueries:{GZones:(e,{mutationResult:n})=>{const r=e.zones.findIndex(Q.propEq("id",t)),a=n.data.updateZone;return Object.assign({},e,{zones:Q.update(r,a,e.zones)})}}}),e.map.clearZonePoints()})},destroyZone(t){if(!t)return;const n={zoneId:t};e.client.mutate({mutation:Ve,variables:n,updateQueries:{GZones:e=>Object.assign({},e,{zones:Q.reject(Q.propEq("id",t),e.zones)})}})},changeZonePriority:Object(w.b)(function*(t,n,r){if(!t||n===r)return;const a=n-r,o={zoneId:t.id,offset:a};yield e.client.mutate({mutation:qe,variables:o,optimisticResponse:{__typename:"Mutation",updateZonePriority:{__typename:"Zone",id:t.id,priority:t.priority+a}}})})}));function Ke(e){if(null===e)return null;const t=Number(e);return Number.isNaN(t)?null:t}function Qe(e){return{price:{value:Ke(e.price.value)},toPrice:{value:Ke(e.toPrice.value)||-1}}}const Je=F.a.named("Root").props({auth:w.j.optional(q,{}),user:w.j.optional(re,{}),order:w.j.optional(Ae,{}),createOrder:w.j.optional(pe,{}),zone:w.j.optional(We,{}),timing:w.j.optional(Y,{}),settings:w.j.optional(Ue,{}),config:w.j.optional(V,{}),statistics:w.j.optional(Re,{})}).views(e=>({get persistedModels(){return[e.auth,e.user,e.settings,e.zone,e.order,e.statistics]}}));var Xe=n(53);n.d(t,"a",function(){return tt}),n.d(t,"c",function(){return nt}),n.d(t,"b",function(){return rt});var et=function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})};const tt=({children:e})=>{const[t,n]=Object(a.useState)(void 0);return Object(M.a)(()=>et(void 0,void 0,void 0,function*(){const e=q.create({}),t=R(e),r=Je.create({auth:e},{fetch:window.fetch,apolloClient:t});yield Promise.all(r.persistedModels.map(L)),yield r.user.initUser(),n(r)})),t?o.a.createElement(i.ApolloProvider,{client:t.client},o.a.createElement(c.a.Provider,{value:t},a.Children.only(e))):o.a.createElement(Xe.a,null)},nt=()=>{const e=Object(a.useContext)(c.a);if(!e)throw new Error("RootProvider missing in the tree");return e},rt=({children:e,observe:t=!0})=>{const n=nt();return!0===t?o.a.createElement(r.a,null,()=>e(n)):e(n)}},53:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(482),i=n.n(o),c=n(9);t.a=(({noMargin:e=!1})=>a.a.createElement("div",{style:{display:"flex",alignSelf:"center",justifyContent:"center"}},a.a.createElement(i.a,{name:"pacman",style:e?{}:{marginTop:"45vh",color:c.a.orange}})))},54:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i});var r=n(252);const a=e=>({lat:Number(e.latitude),lng:Number(e.longitude)}),o=e=>({latitude:Number(e.lat()),longitude:Number(e.lng())}),i=({center:e,metersRadius:t=1e3,pointsCount:n=15})=>new Array(n).fill(null).map((a,o)=>{const i=360/n*o;return Object(r.computeDestinationPoint)(e,t,i)})},58:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return l});var r=n(3),a=n.n(r),o=n(38);const i=a.a`
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
`},5837:function(e,t,n){e.exports=n(7480)},5838:function(e,t,n){"use strict";localStorage.setItem("debug","*,-sockjs*")},5843:function(e,t,n){},59:function(e,t,n){"use strict";var r,a,o,i,c,s,u,l,d,p,m,f,h,b,g,y,v,I,E,O,C,D,S,A,N,R,j,T,w;n.d(t,"c",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"b",function(){return p}),n.d(t,"e",function(){return I}),n.d(t,"d",function(){return N}),n.d(t,"a",function(){return R}),function(e){e.CLIENT="CLIENT",e.AFFILIATE="AFFILIATE",e.BRAND="BRAND"}(r||(r={})),function(e){e.BUSINESS="BUSINESS",e.PREMISES="PREMISES",e.MAIN_ADDRESS="MAIN_ADDRESS"}(a||(a={})),function(e){e.CZK="CZK",e.HOP="HOP",e.EUR="EUR",e.USD="USD"}(o||(o={})),function(e){e.BACKEND="BACKEND",e.FE_ADMIN="FE_ADMIN"}(i||(i={})),function(e){e.PAYMENT="PAYMENT",e.NOTIFICATION="NOTIFICATION",e.RECLAMATION="RECLAMATION",e.DELIVERY="DELIVERY",e.CANCEL="CANCEL",e.MAIN="MAIN",e.PRODUCTION="PRODUCTION",e.NEW_ORDERS="NEW_ORDERS",e.PREPARING="PREPARING",e.ON_WAY="ON_WAY",e.FINISHED="FINISHED",e.READY_TO_DELIVER="READY_TO_DELIVER",e.IN_CART="IN_CART"}(c||(c={})),function(e){e.MONDAY="MONDAY",e.TUESDAY="TUESDAY",e.WEDNESDAY="WEDNESDAY",e.THURSDAY="THURSDAY",e.FRIDAY="FRIDAY",e.SATURDAY="SATURDAY",e.SUNDAY="SUNDAY"}(s||(s={})),function(e){e.CEREALS_WITH_GLUTTEN="CEREALS_WITH_GLUTTEN",e.SHELLFISH="SHELLFISH",e.EGG="EGG",e.FISH="FISH",e.PEANUT="PEANUT",e.SOYBEANS="SOYBEANS",e.MILK="MILK",e.NUT="NUT",e.CELERY="CELERY",e.MUSTARD="MUSTARD",e.SESAME="SESAME",e.SULFUROUS="SULFUROUS",e.LUPIN="LUPIN",e.MOLLUSCS="MOLLUSCS"}(u||(u={})),function(e){e.DELIVERY="DELIVERY",e.INHOUSE="INHOUSE"}(l||(l={})),function(e){e.MAIN="MAIN"}(d||(d={})),function(e){e.DEFAULT="DEFAULT",e.ENABLED="ENABLED",e.DISABLED="DISABLED"}(p||(p={})),function(e){e.CS="CS",e.SK="SK"}(m||(m={})),function(e){e.ACCEPTED="ACCEPTED",e.REJECTED="REJECTED",e.WAITING_FOR_RESPONSE="WAITING_FOR_RESPONSE"}(f||(f={})),function(e){e.WORKING="WORKING",e.BROKEN="BROKEN"}(h||(h={})),function(e){e.CAR="CAR",e.PLANE="PLANE",e.DRON="DRON"}(b||(b={})),function(e){e.KILOGRAM="KILOGRAM",e.GRAM="GRAM",e.LITRE="LITRE",e.PIECE="PIECE"}(g||(g={})),function(e){e.GOPAY="GOPAY",e.PAYPAL="PAYPAL",e.CREDIT="CREDIT",e.CASH="CASH"}(y||(y={})),function(e){e.CASH="CASH",e.CREDIT="CREDIT",e.VOUCHER="VOUCHER"}(v||(v={})),function(e){e.MAIN="MAIN",e.SIDE_DISH="SIDE_DISH",e.COVER="COVER",e.MIXIN="MIXIN"}(I||(I={})),function(e){e.NO_LIMIT="NO_LIMIT",e.OPTIONAL="OPTIONAL",e.MAX_ONE="MAX_ONE",e.MANDATORY="MANDATORY"}(E||(E={})),function(e){e.ANDROID="ANDROID",e.IOS="IOS"}(O||(O={})),function(e){e.WEB="WEB",e.DAME_JIDLO="DAME_JIDLO",e.MOBIL_ANDROID="MOBIL_ANDROID",e.MOBIL_IOS="MOBIL_IOS",e.STAFF="STAFF",e.WIFI="WIFI",e.BAKER="BAKER",e.WEB_PARTNER="WEB_PARTNER",e.ENIGOO="ENIGOO",e.MPIZZA="MPIZZA",e.MINISITE="MINISITE",e.AFFILIATE_PIZZA_ROZVOZ="AFFILIATE_PIZZA_ROZVOZ",e.AFFILIATE_ROZVOZ_PIZZY_ZDARMA="AFFILIATE_ROZVOZ_PIZZY_ZDARMA",e.AFFILIATE_ROZVOZ_JIDLA="AFFILIATE_ROZVOZ_JIDLA"}(C||(C={})),function(e){e.AREA="AREA",e.TABLE="TABLE",e.SECTOR="SECTOR"}(D||(D={})),function(e){e.PRICE_SUM="PRICE_SUM",e.COMMISSION="COMMISSION",e.FEE="FEE",e.REWARD_RESULT="REWARD_RESULT",e.AFFILIATE="AFFILIATE"}(S||(S={})),function(e){e.CREATED="CREATED",e.PENDING="PENDING",e.PAID="PAID",e.CANCELED="CANCELED",e.COMPLETED="COMPLETED"}(A||(A={})),function(e){e.IN_CART="IN_CART",e.RECEIVED="RECEIVED",e.IN_PROGRESS="IN_PROGRESS",e.FINISHED="FINISHED",e.RECLAMATION="RECLAMATION",e.RECLAMATION_HANDLED="RECLAMATION_HANDLED",e.UNPAID="UNPAID",e.PAID="PAID",e.BY_CREDIT_CARD="BY_CREDIT_CARD",e.REFUND="REFUND",e.SHOULD_BE_PAID="SHOULD_BE_PAID",e.CUSTOMER_NOTIFIED="CUSTOMER_NOTIFIED",e.NEW="NEW",e.ONLINE="ONLINE",e.EVALUATED="EVALUATED",e.NOT_EVALUATED="NOT_EVALUATED",e.SHOWN="SHOWN",e.ACCEPTED="ACCEPTED",e.READY_TO_PRODUCE="READY_TO_PRODUCE",e.IN_PRODUCE="IN_PRODUCE",e.MADE="MADE",e.READY_TO_DELIVER="READY_TO_DELIVER",e.ON_WAY="ON_WAY",e.STUCK_ON_ROAD="STUCK_ON_ROAD",e.LATE="LATE",e.DELIVERED="DELIVERED",e.CAUSE="CAUSE",e.HANDOVER="HANDOVER",e.WAITING_FOR_CUSTOMER="WAITING_FOR_CUSTOMER",e.CUSTOMER_DID_NOT_COME="CUSTOMER_DID_NOT_COME",e.DELIVER_REJECTED="DELIVER_REJECTED",e.CANCEL_ON_WAY="CANCEL_ON_WAY",e.CANCELED="CANCELED",e.BRANCH_CANCEL="BRANCH_CANCEL",e.CUSTOMER_CANCEL="CUSTOMER_CANCEL"}(N||(N={})),function(e){e.PICKUP="PICKUP",e.MESSENGER="MESSENGER",e.DRON="DRON",e.MAIL="MAIL"}(R||(R={})),function(e){e.FRESH="FRESH",e.PREPARING="PREPARING",e.COOKED="COOKED",e.CANCELED="CANCELED"}(j||(j={})),function(e){e.CONFIRMATION="CONFIRMATION",e.ADMIN_ORDER_LISTING="ADMIN_ORDER_LISTING",e.RULES="RULES",e.URL="URL",e.GRAPHIC="GRAPHIC",e.OPTIONS="OPTIONS"}(T||(T={})),function(e){e.CREATE="CREATE",e.UPDATE="UPDATE",e.DESTROY="DESTROY",e.REMOVE="REMOVE"}(w||(w={}))},6006:function(e,t){},6008:function(e,t){},6069:function(e,t,n){var r={"./bg":[508,3],"./bg.js":[508,3],"./chs":[509,4],"./chs.js":[509,4],"./cs":[510,5],"./cs.js":[510,5],"./da-dk":[511,6],"./da-dk.js":[511,6],"./de":[513,8],"./de-ch":[512,7],"./de-ch.js":[512,7],"./de.js":[513,8],"./en-au":[514,9],"./en-au.js":[514,9],"./en-gb":[515,10],"./en-gb.js":[515,10],"./en-za":[516,11],"./en-za.js":[516,11],"./es":[518,13],"./es-es":[517,12],"./es-es.js":[517,12],"./es.js":[518,13],"./et":[519,14],"./et.js":[519,14],"./fi":[520,15],"./fi.js":[520,15],"./fr":[523,18],"./fr-ca":[521,16],"./fr-ca.js":[521,16],"./fr-ch":[522,17],"./fr-ch.js":[522,17],"./fr.js":[523,18],"./hu":[524,19],"./hu.js":[524,19],"./it":[525,20],"./it.js":[525,20],"./ja":[526,21],"./ja.js":[526,21],"./lv":[527,22],"./lv.js":[527,22],"./nl-be":[528,23],"./nl-be.js":[528,23],"./nl-nl":[529,24],"./nl-nl.js":[529,24],"./no":[530,25],"./no.js":[530,25],"./pl":[531,26],"./pl.js":[531,26],"./pt-br":[532,27],"./pt-br.js":[532,27],"./pt-pt":[533,28],"./pt-pt.js":[533,28],"./ru":[535,30],"./ru-ua":[534,29],"./ru-ua.js":[534,29],"./ru.js":[535,30],"./sk":[536,31],"./sk.js":[536,31],"./sl":[537,32],"./sl.js":[537,32],"./th":[538,33],"./th.js":[538,33],"./tr":[539,34],"./tr.js":[539,34],"./uk-ua":[540,35],"./uk-ua.js":[540,35],"./vi":[541,36],"./vi.js":[541,36]};function a(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(r)},a.id=6069,e.exports=a},6070:function(e,t,n){var r={"./cs/messages.ts":[7481,42],"./de/messages.ts":[7482,43],"./en-dev/messages.ts":[7484,45],"./en/messages.ts":[7483,44],"./pl/messages.ts":[7485,46],"./sk/messages.ts":[7486,47]};function a(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(r)},a.id=6070,e.exports=a},71:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),o=n(12),i=n(9);const c=o.b.span.withConfig({displayName:"IconSpanStyled"})`
  font-size: ${({fontSize:e=1.5,fontSizeUnit:t="rem"})=>e+t} !important;
  color: ${e=>e.color};
`,s=({iconName:e,color:t=i.a.white,fontSize:n,fontSizeUnit:r})=>e?a.a.createElement(c,{color:t,fontSize:n,fontSizeUnit:r,iconName:e,className:"material-icons"},e):null},72:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),a=n.n(r),o=n(14),i=n(52),c=n(126),s=n(81),u=n(163),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const d=e=>{var{redirect:t=!0,lazy:n=!0}=e,r=l(e,["redirect","lazy"]);const{auth:d}=Object(i.c)();if(!d.isAuthenticatedUser)return t?a.a.createElement(u.a,null):a.a.createElement(c.a,null);if(r.component&&"object"===typeof r.component){const{component:e,path:t,exact:n}=r;return a.a.createElement(s.a,{path:t,exact:n,component:e})}return a.a.createElement(o.c,r)}},7480:function(e,t,n){"use strict";n.r(t);n(5838);var r=n(0),a=n.n(r),o=n(19),i=(n(5843),n(470)),c=n(82),s=n(265),u=n(125),l=n(60),d=n(12),p=n(472),m=n.n(p),f=n(79),h=n(9),b=n(469);const g=d.b.div.withConfig({displayName:"MessageStyled"})`
  padding: 1rem;
  background-color: ${h.a.red} !important;
  font-size: 2rem;

  & svg {
    position: relative;
    top: 0.3rem;
    padding-right: 0.5rem;
  }
`,y=Object(l.b)(()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{shouldPlay:Object(f.a)(),intervalSec:30,soundUrl:m.a}),a.a.createElement(s.b,{open:Object(f.a)(),disableBackdropClick:!0,disableEscapeKeyDown:!0},a.a.createElement(g,null,a.a.createElement(u.h,{fontSize:"large"}),a.a.createElement(c.Trans,{id:"Internet connection is not available"})))));var v=n(258),I=n(33);const E=({children:e,prod:t=!1})=>t?a.a.createElement(v.b,{dispatchErrorReporting:e=>{Object(I.e)(e.error,e.info)}},e):a.a.createElement(v.a,null,e);var O=n(53),C=n(52);const D=({render:e,observe:t=!0})=>a.a.createElement(C.b,{observe:t,children:t=>e(t.user)});var S=n(14),A=n(262),N=n(37),R=n(264);const j=d.b.div.withConfig({displayName:"IconStyled"})`
  margin-top: 2rem;
  color: #d39f40;
  text-align: center;
`,T=e=>a.a.createElement(R.a,{width:15,pageTitle:N.d._("Application error"),useBackButton:!0},a.a.createElement(A.a,null,a.a.createElement("h3",null,a.a.createElement(c.Trans,{id:"We are sorry, but there is an internal error in the app. Our team was notified and will fix this soon."}),a.a.createElement(j,null,a.a.createElement(u.f,{style:{fontSize:"5rem"}})))));var w=n(126),$=n(81),P=n(18);const L=e=>a.a.createElement(S.c,null,({location:e})=>(Object(P.j)("at %s",e.pathname),null));var M=n(20),B=n.n(M),G=n(5),F=n(51);const _=B()("routing"),U=()=>a.a.createElement(S.c,{children:({location:e,history:t})=>a.a.createElement(F.a,{render:n=>{if(!n.auth.isAuthenticatedUser){const r=e.state&&e.state.origin||"/",a=()=>n.auth.isAuthenticated,o=()=>{t.replace(r)};Object(G.D)(a,o),_("will redirect to %s when auth",r)}return null}})});var k=n(163);const x=()=>a.a.createElement(F.a,{observe:!1,render:e=>e.auth.isAuthenticated?(e.auth.invalidate(),a.a.createElement(k.a,{useOrigin:!1})):a.a.createElement(S.b,{to:"/"})});var H=n(72);const z=()=>a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(O.a,null)},a.a.createElement(L,null),a.a.createElement(U,null),a.a.createElement(S.e,null,a.a.createElement($.a,{path:"/login",exact:!0,component:a.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(58),n.e(48)]).then(n.bind(null,7936)))}),a.a.createElement($.a,{path:"/recovery/:token",exact:!0,component:a.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(37)]).then(n.bind(null,7937)))}),a.a.createElement($.a,{path:"/register/:token",exact:!0,component:a.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(37)]).then(n.bind(null,7937)))}),a.a.createElement(H.a,{path:"/",exact:!0,component:a.a.lazy(()=>n.e(49).then(n.bind(null,7935)))}),a.a.createElement(H.a,{path:"/order",component:a.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(39),n.e(50)]).then(n.bind(null,7930)))}),a.a.createElement(H.a,{path:"/settings",component:a.a.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(38),n.e(51)]).then(n.bind(null,7933)))}),a.a.createElement(H.a,{path:"/overview",component:a.a.lazy(()=>Promise.all([n.e(0),n.e(2),n.e(38),n.e(52)]).then(n.bind(null,7932)))}),a.a.createElement($.a,{path:"/support",component:a.a.lazy(()=>n.e(53).then(n.bind(null,7928)))}),a.a.createElement(S.c,{path:"/error",component:T}),a.a.createElement(S.c,{path:"/logout",component:x}),a.a.createElement(S.c,{component:w.a}))),Z=()=>a.a.createElement(E,{prod:!0},a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement(i.SnackbarProvider,{maxSnack:3,anchorOrigin:{horizontal:"right",vertical:"top"}},a.a.createElement(D,{render:e=>e.isReady?a.a.createElement(z,null):a.a.createElement(O.a,null)}))));var q=n(488),V=n(84);const Y=({children:e})=>a.a.createElement(q.a,null,({handleGetUserConfirm:t})=>a.a.createElement(V.a,{getUserConfirmation:t},e)),W=()=>a.a.createElement(C.a,null,a.a.createElement(N.a,null,a.a.createElement(Y,null,a.a.createElement(Z,null))));Object(I.b)(()=>{const e=document.getElementById("root");Object(o.render)(a.a.createElement(W,null),e)})},79:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i});const r=n(5).v.box(navigator.onLine);window.addEventListener("offline",()=>r.set(!1)),window.addEventListener("online",()=>r.set(!0));const a=()=>r.get(),o=()=>!r.get();function i(e){return r.observe(t=>{!1===t.oldValue&&!0===t.newValue&&e()})}},81:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),a=n.n(r),o=n(14),i=n(53);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const u=e=>{var{component:t}=e,n=s(e,["component"]);return a.a.createElement(o.c,c({},n,{render:e=>a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(i.a,null)},a.a.createElement(t,e))}))}},9:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return u});var r,a=n(97),o=n.n(a),i=n(13);!function(e){e.yellow="#FFDB2B",e.pink="#FF2B95",e.blue="#2441FF",e.red="#FF1C1C",e.green="#179B12",e.turquoise="#2BFFFF",e.orange="#FF862B",e.violet="#6D4F8C",e.black="#000000",e.greyDarkest="#080808",e.greyDark="#2C2C2C",e.greyMiddle="#939393",e.greyLight="#EDEDED",e.white="#FFFFFF"}(r||(r={}));const c=i.a.curry((e,t)=>o()(e).alpha(t).string());var s,u;!function(e){e.Card="0.5rem",e.Button="0.5rem",e.TextComponent="0.25rem"}(s||(s={})),function(e){e.MarginAroundFormComponents="0.1rem",e.Small="0.25rem",e.Middle="0.5rem",e.LayoutGridCellMargin="0.5rem",e.ButtonHeight="3.4375rem",e[e.DefaultInputWidth=20]="DefaultInputWidth",e.DefaultSizeUnit="rem"}(u||(u={}))}},[[5837,59,56]]]);
//# sourceMappingURL=main.7b912599.chunk.js.map