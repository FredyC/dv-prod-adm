(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{7493:function(e,t,r){"use strict";r.d(t,"a",function(){return h});var a=r(0),n=r.n(a),i=r(13),l=r(10),c=r(70),o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const s=i.b.div.withConfig({displayName:"IconLineWrap"})`
  display: flex;
`;s.displayName="IconLineWrap";const d=i.b.div.withConfig({displayName:"DescriptionContainer"})`
  margin: ${({labelMargin:e="0.5rem 0.2rem 0 auto"})=>e};
  min-width: ${({labelWidth:e=0,labelWidthUnits:t=l.c.DefaultSizeUnit})=>e+t};
  flex: 0 1 auto;
  text-align: right;
`,u=i.b.div.withConfig({displayName:"IconLineChildren"})`
  margin-left: 0.5rem;
  align-self: stretch;
  flex: 1 0 auto;
`,m=i.b.div.withConfig({displayName:"LabelStyled"})`
  padding-top: 0.2rem;
  display: inline-block;
`;u.displayName="IconLineChildren";const h=e=>{var{icon:t,label:r,labelWidth:a,labelWidthUnits:i,labelMargin:h,children:p}=e,b=o(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);let f;return t&&(f="string"===typeof t?n.a.createElement(c.a,{iconName:t,color:l.a.greyDark}):n.a.createElement(t,{nativeColor:l.a.greyDark})),n.a.createElement(s,b,n.a.createElement(d,{labelWidth:a,labelWidthUnits:i,labelMargin:h},f,r?n.a.createElement(m,null,r):null),n.a.createElement(u,null,p))}},7495:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r(0),n=r.n(a),i=r(7504),l=r(50);const c=({mutationName:e,children:t})=>{const{user:r}=Object(l.d)();return r.canMutate(e)?n.a.createElement(n.a.Fragment,null,t):n.a.createElement(i.a,null,`No access to mutation ${e}`)}},7499:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(13),n=r(10);const i=a.b.h2.withConfig({displayName:"Headline"})`
  color: ${({light:e=!1})=>e?n.a.greyLight:n.a.greyDarkest};
  font-weight: lighter;
  margin: ${({margin:e="0 0.5rem 0 0.5rem"})=>e};
  font-size: ${({size:e})=>"smaller"===e&&"1rem"};
`},7500:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"a",function(){return s});var a=r(0),n=r.n(a),i=r(7538),l=r(10);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const o=(e={})=>Object.assign({},e,{control:(t,r)=>{const{selectProps:{width:a,minWidth:n}}=r,i=Object.assign({},t,{border:`1px solid ${l.a.greyMiddle}`,margin:l.c.MarginAroundFormComponents,width:void 0!==a?`${a}rem`:"100%",minWidth:void 0!==n?`${n}rem`:"8rem"});return e.control?e.control(i,r):i},menu:(t,r)=>{const{selectProps:{width:a}}=r,n=Object.assign({},t,{zIndex:20,color:l.a.black,width:void 0!==a?`${a}rem`:"100%"});return e.menu?e.menu(n,r):n}});function s(e){return n.a.createElement(i.b,c({},e,{styles:o(e.styles)}))}},7502:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var a=r(0),n=r.n(a),i=r(13),l=r(7513),c=r(10);const o=i.b.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+c.c.LayoutGridCellMargin+")":"calc(100vh - (2 * "+c.c.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+c.c.LayoutGridCellMargin+")":c.c.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+c.c.LayoutGridCellMargin+")":"calc(3.9375rem + "+c.c.LayoutGridCellMargin+")")()};
`,s=i.b.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`,d=({children:e,row:t=1,column:r=0,widthInColumns:a=16,withScrollArea:i=!1,scrollAreaId:c})=>n.a.createElement(o,{column:r,row:t,widthInColumns:a,withScrollArea:i},i?n.a.createElement(l.a,{id:c},e):n.a.createElement(s,null,e))},7503:function(e,t,r){"use strict";r.d(t,"a",function(){return a});const a=r(13).b.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`},7504:function(e,t,r){"use strict";r.d(t,"a",function(){return a});r(0);const a=({children:e})=>null},7505:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r(0),n=r.n(a),i=r(7504),l=r(50);const c=({queryName:e,children:t})=>{const{user:r}=Object(l.d)();return r.canQuery(e)?n.a.createElement(n.a.Fragment,null,t):n.a.createElement(i.a,null,`No access to query ${e}`)}},7508:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var a=r(0),n=r.n(a),i=r(13),l=r(10);const c=i.b.div.withConfig({displayName:"HorizontalSeparatorStyled"})`
  border-top: 1px solid ${l.a.greyLight};
  margin: 0.25rem 0rem;
`,o=({visible:e=!0})=>e?n.a.createElement(c,null):null},7509:function(e,t,r){"use strict";r.d(t,"a",function(){return a});const a=r(13).b.div.withConfig({displayName:"FlexColumn"})`
  flex: ${function({fixedWidth:e=!1,width:t,widthGrowIndex:r=0}){return e?t?`0 0 ${t}`:"0 0":`${r} 0`}};
  padding: ${function({padding:e="0.25rem"}){return e}};
  margin: ${function({margin:e=""}){return e}};
`},7512:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(0),n=r(4);function i(){return Object(a.useContext)(n.f)}},7513:function(e,t,r){"use strict";r.d(t,"a",function(){return a});const a=r(13).b.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`},7514:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var a=r(0),n=r.n(a),i=r(168);const l=({price:e,currencyCode:t})=>n.a.createElement("span",null,t?`${Object(i.c)(e)} ${t}`:Object(i.c)(e))},7515:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var a=r(81),n=r(0),i=r.n(n),l=r(13),c=r(16);const o=l.b.div.withConfig({displayName:"ItemStyled"})`
  margin: 0.5rem 0.6rem;
  display: inline-block;
  cursor: pointer;
  color: ${({textColor:e})=>e};
  ${function({isSelected:e}){if(!e)return"";return l.a`
    font-weight: bolder;
    text-decoration: underline;
  `}};
`,s=l.b.div.withConfig({displayName:"SelectorStyled"})`
  border: ${({isInvalid:e})=>!0===e?"1px red solid":"auto"};
`;class d extends i.a.Component{hasSelection(){const{isMulti:e,selectedItem:t,selectedItems:r}=this.props;return e?Array.isArray(r)&&r.length>0:null!=t}isItemSelected(e){const{isMulti:t,selectedItem:r,selectedItems:a}=this.props;return t&&Array.isArray(a)?c.a.contains(e,a):c.a.equals(r,e)}updateSelection(e){const{isMulti:t,selectedItems:r=[],onSingleSelection:a,onMultiSelection:n}=this.props;null===e?t&&n?n([]):a&&a(null):t&&n?this.isItemSelected(e)?n(Array.isArray(r)?c.a.without([e],r):[e]):n(Array.isArray(r)?c.a.concat(r,[e]):[]):a&&a(e)}render(){const{items:e,isClearable:t,isInvalid:r=!1,textColor:n="inherit",formatItem:l}=this.props;return i.a.createElement(s,{isInvalid:r},t&&i.a.createElement(o,{isSelected:!this.hasSelection(),textColor:n,onClick:()=>{this.updateSelection(null)}},i.a.createElement(a.Trans,{id:"optionselector.clear-filter"})),e.map((e,t)=>i.a.createElement(o,{key:t,isSelected:this.isItemSelected(e),textColor:n,onClick:()=>{this.updateSelection(e)}},l(e))))}}d.defaultProps={formatItem:c.a.prop("displayName"),getItemValue:c.a.prop("id")}},7517:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var a=r(0),n=r.n(a),i=r(7492),l=r(7518),c=r(260),o=r(10);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const u=e=>{var{children:t}=e,r=d(e,["children"]);return n.a.createElement(i.FormApi,null,e=>n.a.createElement(c.a,s({color:o.a.green,disabled:!Object(l.a)(e)||e.submitting,onClick:t=>{t.preventDefault(),e.submitForm(t)}},r),t))}},7518:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return l});var a=r(7510),n=r(38);function i(e){return!e.errors||0===Object.keys(e.errors).length}function l(e){return t=>Object(a.isEmpty)(t+"")?n.d._("{fieldName} must be entered",{fieldName:e}):null}},7519:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r(0);const n=e=>Object(a.useEffect)(e,[])},7520:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var a,n=r(271),i=r(0);!function(e){e.default="default",e.error="error",e.success="success",e.warning="warning",e.info="info"}(a||(a={}));const l={variant:a.success},c={variant:a.error},o={variant:a.warning},s={variant:a.info};function d(){const e=Object(i.useContext)(n.SnackbarContextNext),t=Object(i.useCallback)(t=>e(t,l),[]),r=Object(i.useCallback)(t=>e(t,c),[]),a=Object(i.useCallback)(t=>e(t,o),[]),d=Object(i.useCallback)(t=>e(t,s),[]);return{enqueueSnackbar:e,enqueueSuccess:t,enqueueError:r,enqueueWarning:a,enqueueInfo:d}}},7521:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var a=r(37),n=r(5998),i=r(6),l=r(83),c=r(0),o=r(50),s=r(40),d=function(e,t,r,a){return new(r||(r=Promise))(function(n,i){function l(e){try{o(a.next(e))}catch(t){i(t)}}function c(e){try{o(a.throw(e))}catch(t){i(t)}}function o(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,c)}o((a=a.apply(e,t||[])).next())})};function u(e){const t=Object(c.createContext)(null);function r(t={}){const r=Object(o.c)(),c=Object(l.e)({data:null,loading:!1,get hasAnyError(){return Boolean(c.errors&&c.errors.length||c.error)}});return{result:c,execute:l=>d(this,void 0,void 0,function*(){c.loading=!0;try{const n=yield r.query(Object.assign({},t,{query:e,variables:l}));Object(i.y)(()=>{c.data=n.data,c.errors=n.errors,c.loading=!1})}catch(o){Object(a.b)(o)?Object(i.y)(()=>{c.error=o,c.errors=o.graphQLErrors,c.loading=!1}):(Object(i.y)(()=>{c.error=o,c.loading=!1}),Object(s.c)(o))}return c.errors&&Object(s.d)(c.errors,{query:Object(n.i)(e),variables:l}),c})}}return r.context=t,r}},7524:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(13),n=r(10);const i=a.b.h2.withConfig({displayName:"CardListTitle"})`
  color: ${n.a.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`},7525:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(16),l=r(7533),c=r(7515),o=r(10);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const u=e=>{var{branches:t,selectedBranch:r,selectedBranches:a,textColor:i=o.a.black}=e,l=d(e,["branches","selectedBranch","selectedBranches","textColor"]);return n.a.createElement(c.a,s({items:t,selectedItem:r,selectedItems:a,textColor:i,formatItem:e=>n.a.createElement("span",{title:e.brand.name},e.name)},l))};var m=r(83),h=r(50);const p=Object(m.b)(({render:e})=>{const{user:t}=Object(h.d)();return t.branches?e(t.branches,!1):e([],!0)});function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",function(){return f});const f=({breakpoint:e=3,selectedBranches:t=[],isMulti:r=!1,isClearable:a=!0,textColor:c,onSelectionChange:o,onSelectionClear:s,getDropdownProps:d=(()=>({}))})=>n.a.createElement(p,{render:(m,h)=>{const p=e=>t.includes(e.id),f={textColor:c,isClearable:a,isMulti:r,isLoading:h,branches:m,selectedBranch:h?null:m.find(p),selectedBranches:h?[]:m.filter(p),onSingleSelection(e){null===e&&s?s():null!==e&&o&&o([e.id],[e])},onMultiSelection(e){0===e.length&&s?s():e.length&&o&&o(e.map(i.a.prop("id")),e)}};return m.length<e?n.a.createElement(u,f):n.a.createElement(l.a,b({},f,d()))}})},7533:function(e,t,r){"use strict";var a=r(81),n=r(0),i=r.n(n);const l=r(13).b.div.withConfig({displayName:"CursorContainer"})`
  cursor: ${({cursor:e="default"})=>e};
`,c=({branch:e,onClick:t,short:r=!1,showBrand:a=!0})=>i.a.createElement(l,{cursor:"pointer",onClick:t},r?e.name.substr(0,8):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,e.name),a&&i.a.createElement("span",null,` [${e.brand.name}]`)));var o=r(7500),s=r(16),d=r(38);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",function(){return p});var m=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const h=e=>{const{getStyles:t}=e,r=e.innerProps,{ref:n}=r,l=m(r,["ref"]);return i.a.createElement("div",u({},l,{ref:n,style:t("clearIndicator",e)}),i.a.createElement("div",{style:{padding:"0px 5px"}},i.a.createElement(a.Trans,{id:"All"})))},p=e=>{var{branches:t,selectedBranch:r,onSingleSelection:a,selectedBranches:n,onMultiSelection:l}=e,p=m(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return i.a.createElement(o.a,u({value:p.isMulti?n:r,placeholder:p.isMulti?d.d._("Filter branches..."):d.d._("Select a branch"),options:t,getOptionValue:s.a.prop("id"),formatOptionLabel:e=>i.a.createElement(c,{branch:e}),filterOption:(e,t)=>e.data.name.toLocaleLowerCase().includes(t.toLocaleLowerCase()),closeMenuOnSelect:!p.isMulti,components:{ClearIndicator:h},styles:{clearIndicator:e=>Object.assign({},e,{cursor:"pointer"})},onChange:e=>{p.isMulti&&l&&Array.isArray(e)&&l(e),!p.isMulti&&a&&(Array.isArray(e)?a(s.a.head(e)||null):a(e||null))}},p))}},7534:function(e,t,r){"use strict";var a=r(103),n=r(0),i=r.n(n),l=r(51),c=r(67),o=r(16),s=r(3),d=r.n(s),u=r(35),m=r(7536),h=r(112),p=r(36);const b=d.a`
  fragment GOrderMapMarker on Order {
    id
    deliverAt
    gps {
      ...GGeoPoint
    }
  }
  ${p.e}
`;var f=r(7548);const g=d.a`
  query GOrderList(
    $branches: [ID!]
    $categories: [OrderStateCategoryEnum!]
    $includeOldFinished: Boolean
  ) {
    orders(
      order: {
        companyBranches: $branches
        orderStateCategoriesOR: $categories
        includeOldFinished: $includeOldFinished
      }
    ) {
      id
      ...GOrderStateCategory
      ...GOrderListTicker
      ...GOrderMapMarker
    }
    orderStateCategories {
      code
      enum
    }
  }

  ${h.a}
  ${b}
  ${f.a}
`,y=d.a`
  subscription SOrderList(
    $branches: [ID!]
    $categories: [OrderStateCategoryEnum!]
  ) {
    updatedOrder(
      companyBranches: $branches
      orderStateCategoriesOR: $categories
    ) {
      order {
        id
        ...GOrderStateCategory
        ...GOrderListTicker
        ...GOrderMapMarker
      }
    }
  }
  ${h.a}
  ${b}
  ${f.a}
`,E=Object(u.a)(g),v=Object(m.a)(y);r.d(t,"a",function(){return C}),r.d(t,"b",function(){return w});const O=[c.c.NEW_ORDERS,c.c.PREPARING,c.c.READY_TO_DELIVER,c.c.ON_WAY,c.c.FINISHED],C=({children:e,includeOldFinished:t=!1})=>i.a.createElement(l.a,{render:r=>{if(!r.order.list.hasBranchFilter)return e({isLoading:!1,noFilter:!0});const a={branches:r.order.list.branchesFilter,categories:O,includeOldFinished:t};return i.a.createElement(E,{fetchPolicy:"cache-and-network",refetchOnConnectionLost:!0,variables:a,renderLoading:!1,render:({orders:t=[],orderStateCategories:r=[]},n)=>i.a.createElement(v,{queryResult:n,variables:a,handleUpdate:j},e({isLoading:n.loading,noFilter:!1,orders:t,categorizedOrders:function(e){return e.reduce((e,t)=>{const r=w(t);return e[r]?e[r].push(t):e[r]=[t],e},{})}(t),categories:r}))})}});function w(e){return e.orderStateCategory}function j(e,t){const{order:r}=e.updatedOrder;if(!r)return t;let a=!1;const n=o.a.reject(S,t.orders).map(e=>e.id===r.id?(a=!0,r):e);return a||n.unshift(r),Object.assign({},t,{orders:n})}function S(e){return e.orderStateCategory===c.c.FINISHED&&Object(a.b)(new Date,e.createdAt)>e.companyBranch.oldOrderThreshold}},7536:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r(7519);function n(e){return function(t){return Object(a.a)(()=>{const{queryResult:r,variables:a,handleUpdate:n}=t;return r.subscribeToMore({document:e,variables:a,updateQuery:(e,{subscriptionData:t})=>t&&t.data&&n(t.data,e)||e})}),t.children}}},7537:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var a=r(81),n=r(37),i=r(58),l=r.n(i),c=r(0),o=r.n(c),s=r(130),d=r(16),u=r(40),m=r(38),h=r(260),p=r(7520),b=function(e,t,r,a){return new(r||(r=Promise))(function(n,i){function l(e){try{o(a.next(e))}catch(t){i(t)}}function c(e){try{o(a.throw(e))}catch(t){i(t)}}function o(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,c)}o((a=a.apply(e,t||[])).next())})};function f(e,t={}){const r=m.d._("Unexpected error occured while sending a request. Our team was notified about the issue."),{enqueueSnackbar:a,enqueueError:i,enqueueInfo:l}=Object(p.a)(),h=Object(c.useCallback)(e=>{e.forEach(l)},[]),f=Object(c.useCallback)(e=>{const t=e.filter(d.a.propEq("showToUser",!0));0===t.length?i(r):h(t.map(d.a.prop("message")))},[]),y=Object(c.useCallback)(e=>{if(Object(n.b)(e)){if(e.networkError)return void i(m.d._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void f(e.graphQLErrors)}Object(u.c)(e),a(r,{action:[o.a.createElement(g,{key:"feedback"})]})},[]),E=Object(s.b)(e,t);return e=>b(this,void 0,void 0,function*(){try{const a=yield E({variables:e});if(a.errors)return f(a.errors),null;if(!a.data)return null;const n=a.data;if(t.getUserErrors){const e=t.getUserErrors(n);null!==e&&h(e)}return n}catch(r){return y(r),null}})}function g(){return o.a.createElement(h.a,{onClick:()=>l.a.showReportDialog()},o.a.createElement(a.Trans,{id:"Submit feedback"}))}},7541:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var a=r(0),n=r.n(a),i=r(84),l=r(7495),c=r(7505),o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const s=e=>{var{route:t,component:r,canQuery:s,canMutate:d}=e,u=o(e,["route","component","canQuery","canMutate"]);let m=t?n.a.createElement(i.b,{to:t},Object(a.createElement)(r)):Object(a.createElement)(r);return s&&(m=n.a.createElement(c.a,{queryName:s},m)),d&&(m=n.a.createElement(l.a,{mutationName:d},m)),n.a.createElement("div",u,m)}},7542:function(e,t,r){"use strict";r.d(t,"a",function(){return a});const a=r(13).b.a.withConfig({displayName:"LinkStyled"})`
  color: inherit;
  text-decoration-color: rgba(0, 0, 0, 0.08);
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
  &:visited {
    text-decoration-color: rgba(0, 0, 0, 0.08);
  }
`},7543:function(e,t,r){"use strict";r.d(t,"a",function(){return d}),r.d(t,"b",function(){return u});var a=r(0),n=r.n(a),i=r(4),l=r(84),c=r(282);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const d=e=>{var{to:t,from:r}=e,a=s(e,["to","from"]);return n.a.createElement(i.c,{children:({location:e})=>n.a.createElement(l.b,o({to:u(t,r||`${e.pathname}/`)},a))})};function u(e,t){if("string"===typeof e)return Object(c.a)(e,t);const r=Object(c.a)(e.pathname||"",t);return Object.assign({},e,{pathname:r})}},7548:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var a=r(3),n=r.n(a),i=r(36);const l=n.a`
  fragment GOrderListTicker on Order {
    id
    createdAt
    isPaidWithCard
    deliverAt
    deliverAtWorst
    deliveredAt
    companyBranch {
      id
      name
      oldOrderThreshold
    }
    address {
      ...GAddress
    }
    customer {
      ...GCustomer
    }
    totalSum {
      value
    }
  }
  ${i.a}
  ${i.c}
`},7566:function(e,t,r){"use strict";var a=r(7565),n=r.n(a);const i=r(7660);n.a.updateLocale("cs",i),t.a=n.a},7567:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r(0),n=function(){return Math.random().toString(36).substring(2)},i=function(e){var t=e.uniquekey?e.uniquekey+"-idClip":n(),r=e.uniquekey?e.uniquekey+"-idGradient":n(),i=e.rtl?["1; -3","2; -2","3; -1"]:["-3; 1","-2; 2","-1; 3"];return Object(a.createElement)("svg",{viewBox:"0 0 "+e.width+" "+e.height,style:e.style,preserveAspectRatio:e.preserveAspectRatio,className:e.className},Object(a.createElement)("rect",{style:{fill:"url(#"+r+")"},clipPath:"url(#"+t+")",x:"0",y:"0",width:e.width,height:e.height}),Object(a.createElement)("defs",null,Object(a.createElement)("clipPath",{id:t},e.children),Object(a.createElement)("linearGradient",{id:r},Object(a.createElement)("stop",{offset:"0%",stopColor:e.primaryColor,stopOpacity:e.primaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:i[0],dur:e.speed+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:e.secondaryColor,stopOpacity:e.secondaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:i[1],dur:e.speed+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:e.primaryColor,stopOpacity:e.primaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:i[2],dur:e.speed+"s",repeatCount:"indefinite"})))))},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c=function(e){return Object(a.createElement)(d,e,Object(a.createElement)("circle",{cx:"10",cy:"20",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),Object(a.createElement)("circle",{cx:"10",cy:"50",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),Object(a.createElement)("circle",{cx:"10",cy:"80",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),Object(a.createElement)("circle",{cx:"10",cy:"110",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"}))},o={animate:!0,height:130,preserveAspectRatio:"xMidYMid meet",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,width:400},s=function(e){return Object(a.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},d=function(e){var t=l({},o,e),r=e.children?e.children:Object(a.createElement)(s,t);return Object(a.createElement)(i,t,r)}},7570:function(e,t,r){"use strict";var a=r(103),n=r(0),i=r.n(n),l=r(125),c=r(13),o=r(10);const s=c.b.div.withConfig({displayName:"TimeBadgeStyled"})`
  min-width: 1.5rem;
  min-height: 1.5rem;
  padding: 0.3rem;
  border: 1px solid white;
  border-radius: 4rem;
  color: ${o.a.white};
  background: ${o.a.greyMiddle};
  text-align: center;
  font-size: 1rem;
  margin: 0;
  vertical-align: middle;
  font-family: 'Open Sans', sans-serif;
`,d=Object(c.b)(s).withConfig({displayName:"TimeBadgeUnknown"})`
  background: ${o.a.greyMiddle};
  color: ${o.a.greyDarkest};
`,u=Object(c.b)(s).withConfig({displayName:"TimeBadgeInProgress"})`
  background: ${o.a.orange};
`,m=Object(c.b)(s).withConfig({displayName:"TimeBadgeBigTime"})`
  font-size: 0.8rem;
  padding: 0.4rem 0.3rem 0.2rem 0.3rem;
  background: ${o.a.orange};
`,h=Object(c.b)(s).withConfig({displayName:"TimeBadgeWarning"})`
  background: ${o.a.red};
`,p=Object(c.b)(s).withConfig({displayName:"TimeBadgeCompleted"})`
  background: ${o.a.green};
`,b=Object(c.b)(s).withConfig({displayName:"TimeBadgeCancelled"})`
  background: ${o.a.greyMiddle};
  padding: 0.3rem 0.3rem 0 0.3rem;
`,f=({minutes:e=0,onClick:t,isFinished:r=!1,isCancelled:a=!1})=>{if(a)return i.a.createElement(b,{onClick:t},i.a.createElement(l.a,null));let n=e.toString(),c=u;return Number.isNaN(e)?(c=d,n="?"):r?c=e<=0?h:p:e<=20?(c=h,e<-99&&(n="-")):e>99&&(c=m),i.a.createElement(c,{children:n,onClick:t})};var g=r(7579),y=r.n(g);const E=({interval:e,enabled:t,getNow:r=Date.now,nextTick:a=y.a,cancelTick:i=y.a.cancel})=>{const[l,c]=function(e){const[t,r]=Object(n.useState)(e),a=Object(n.useRef)(null);return a.current=t,[()=>a.current,r]}(r),o=Object(n.useRef)(null);return Object(n.useEffect)(()=>{const n=()=>{const t=r();t-l()>=e&&c(t),d()},s=()=>{o.current&&(i(o.current),o.current=null)},d=()=>{t?o.current=a(n):s()};return d(),s},[e,t]),l()};r.d(t,"a",function(){return v});const v=({deliverAt:e,deliveredAt:t,isCancelled:r=!1,onClick:n})=>{const l=E({interval:6e4,enabled:!t}),c=Object(a.d)(e,t||l);return i.a.createElement(f,{minutes:c,onClick:n,isFinished:Boolean(t),isCancelled:r})}},7593:function(e,t,r){"use strict";r.d(t,"a",function(){return m});r(7594);var a=r(0),n=r.n(a),i=r(7599),l=r(7492),c=r(13),o=r(7566);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const u=c.b.div.withConfig({displayName:"FormInputDateContainer"})`
  & .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    width: ${({width:e="6rem"})=>e};
  }
`;u.displayName="FormInputDateContainer";const m=e=>{var{field:t,defaultValue:r,inputWidth:a,minDate:c}=e,m=d(e,["field","defaultValue","inputWidth","minDate"]);return n.a.createElement(u,{width:a},n.a.createElement(l.Field,{field:t,defaultValue:r,render:e=>n.a.createElement(i.a,s({selected:Object(o.a)(e.value||new Date),onChange:t=>e.setValue(t),minDate:void 0===c?void 0:Object(o.a)(c)},m))}))}},7595:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(13),n=r(10);const i=a.b.div.withConfig({displayName:"FlexRow"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${n.a.greyMiddle};
  padding: 0.1rem 0 0.1rem 0;
`},7598:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(13),l=r(273);const c=({test:e,renderSuccess:t,renderFailure:r})=>n.a.createElement(l.a,{render:()=>e()?t():r?r():null});var o=r(10),s=r(81),d=r(97),u=r.n(d),m=r(281),h=r(7514),p=r(67),b=r(168);const f=({customer:e})=>e?n.a.createElement("span",null,`${e.lastName?`${e.firstName} ${e.lastName}`:e.defaultPhone?e.defaultPhone.phone:""}`):n.a.createElement("i",null,"unknown");var g=r(7570);const y=Object(i.b)(m.Element).withConfig({displayName:"OrderTickerStyled"})`
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: ${u()(o.a.turquoise).alpha(.05).string()};
  }
  &:active {
    background-color: ${u()(o.a.turquoise).alpha(.2).string()};
  }
`,E=i.b.div.withConfig({displayName:"OrderTickerMainContentStyled"})`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.4rem;
`,v=i.b.div.withConfig({displayName:"DeliveryTimeBadgeContainerStyled"})`
  flex: 0 0 2rem;
`,O=i.b.div.withConfig({displayName:"AddressDisplayContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,C=i.b.div.withConfig({displayName:"CustomerIdentityContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,w=i.b.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 3.5rem;
  text-align: right;
  position: relative;
`,j=i.b.div.withConfig({displayName:"PaidMarkStyled"})`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  &:after {
    content: '';
    position: absolute;
    top: 0.1rem;
    right: -0.3rem;
    left: 0.9rem;
    bottom: 0.3rem;
    border-top: 2px solid ${o.a.orange};
    transform: rotate(13deg);
    transform-origin: 0% 0%;
    opacity: 0.7;
  }
`,S=i.b.div.withConfig({displayName:"PaidTextStyled"})`
  color: ${o.a.orange};
`,x=i.b.div.withConfig({displayName:"ToBranchContainerStyled"})`
  padding: 0.3rem 0.6rem;
  display: inline-block;
  border-top-left-radius: ${o.b.Card};
  background-color: ${o.a.green};
  color: ${o.a.white};
`,$=({order:e,showBranch:t,onClick:r})=>n.a.createElement(y,{onClick:r,name:`order-${e.id}`},t&&n.a.createElement(x,null,e.companyBranch.name),n.a.createElement(E,null,n.a.createElement(v,null,n.a.createElement(g.a,{deliverAt:e.deliverAt,deliveredAt:e.deliveredAt,isCancelled:e.orderStateCategory===p.c.CANCEL})),n.a.createElement(O,null,Object(b.a)(e.address)),n.a.createElement(C,null,n.a.createElement(f,{customer:e.customer})),n.a.createElement(w,null,n.a.createElement(h.a,{price:e.totalSum.value}),e.isPaidWithCard&&n.a.createElement(n.a.Fragment,null,n.a.createElement(j,null),n.a.createElement(S,null,n.a.createElement(s.Trans,{id:"Paid"}))))));var N=r(7508),k=r(7493),I=r(7542);const P=({phones:e,emails:t})=>{const r=e=>n.a.createElement(k.a,{icon:e.icon,key:e.value,labelMargin:"0"},n.a.createElement("div",{title:e.description||""},(e=>e.isMail?n.a.createElement(I.a,{href:`mailto:${e.value}`},e.value):n.a.createElement(I.a,{href:`tel:${e.value.replace("/ /g","")}`},e.value))(e)));return n.a.createElement(n.a.Fragment,null,(e.length>0||t.length>0)&&n.a.createElement(N.a,null),e.map(e=>r(Object.assign({icon:"phone",isMail:!1,value:e.phone},e))),t.map(e=>r(Object.assign({icon:"mail_outline",isMail:!0,value:e.email},e))))};var D=r(38);const T=i.b.span.withConfig({displayName:"CurrentNoteStyled"})`
  color: ${o.a.orange};
`,F=i.b.span.withConfig({displayName:"PreviousNoteStyled"})`
  color: ${o.a.greyDark};
  margin-left: 0.5rem;
`,B=({note:e,previousNote:t})=>e||t?n.a.createElement(n.a.Fragment,null,n.a.createElement(N.a,null),n.a.createElement(k.a,{icon:"note",labelMargin:"0"},n.a.createElement(T,null,e||D.d._("Without note").toLocaleLowerCase()),n.a.createElement(F,null,t))):null,M=({current:e,total:t})=>n.a.createElement(s.Trans,{id:"It's customer's {current, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} order {total, plural, one {} other {from total of # orders}}",values:{current:e,total:t}}),A=i.b.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,R=i.b.div.withConfig({displayName:"CodeContainerStyled"})`
  flex: 0 0 5rem;
`,L=i.b.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${o.a.greyMiddle};
`,G=i.b.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${o.a.greyMiddle};
`,_=({code:e,label:t,price:r})=>n.a.createElement(A,null,n.a.createElement(R,null,e),n.a.createElement(L,null,t),n.a.createElement(G,null,n.a.createElement(h.a,{price:r}))),q=i.b.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`,W=({order:e})=>n.a.createElement(q,null,n.a.createElement(_,{label:D.d._("Transport fee"),price:e.transportFee.value}),n.a.createElement(_,{label:D.d._("Covers price"),price:e.coverPrice.value}),n.a.createElement(_,{label:D.d._("Discount total"),price:-1*e.totalDiscount.value}),n.a.createElement("b",null,n.a.createElement(_,{label:D.d._("Total price"),price:e.totalSum.value}))),H=({rules:e,children:t})=>e.length>0||t?n.a.createElement(n.a.Fragment,null,n.a.createElement(N.a,null),n.a.createElement(k.a,{icon:"announcement",labelMargin:"0"},t,n.a.createElement("br",null),e.join(", "))):null;var z=r(125);const V=i.b.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,U=({order:e})=>{const t=[];if(e.deliverAt&&t.push(n.a.createElement("div",{key:"deliverAt"},Object(b.e)(e.deliverAt),n.a.createElement(V,null,n.a.createElement(s.Trans,{id:"Deliver on time"})))),e.driver){const{firstName:r,lastName:a}=e.driver.user;t.push(n.a.createElement("div",{key:"driver"},`${r} ${a}`,n.a.createElement(V,null,n.a.createElement(s.Trans,{id:"Driver"}))))}return 0===t.length?null:n.a.createElement(k.a,{icon:z.f,labelMargin:"0"},t)};var Q=r(16);const Y=i.b.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,J={[p.c.NEW_ORDERS]:Object(s.i18nMark)("Created"),[p.c.PREPARING]:Object(s.i18nMark)("Preparing"),[p.c.READY_TO_DELIVER]:Object(s.i18nMark)("Ready to deliver"),[p.c.ON_WAY]:Object(s.i18nMark)("On way"),[p.c.FINISHED]:Object(s.i18nMark)("Finished")},K=({orderTiming:e})=>n.a.createElement(k.a,{icon:"access_time",labelMargin:"0"},Q.a.reject(({createdAt:e,orderStateCategory:t})=>null===e||!J[t],e).map(e=>n.a.createElement("div",{key:e.orderStateCategory},Object(b.e)(e.createdAt),n.a.createElement(Y,null,D.d._(J[e.orderStateCategory]))))),X=({orderWares:e})=>{return n.a.createElement("div",null,e.map(e=>n.a.createElement(a.Fragment,{key:e.id},n.a.createElement(_,{code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),n.a.createElement(n.a.Fragment,null,e.sidedishes.map(e=>n.a.createElement(_,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value}))))))};var Z=r(3),ee=r.n(Z),te=r(35),re=r(36),ae=r(171);const ne=Object(te.a)(ee.a`
  query GOrderDetail($id: ID!) {
    order(id: $id) {
      id
      createdAt
      deliverAt
      companyBranch {
        id
      }
      customer {
        emails {
          ...GEmail
        }
        phones {
          ...GPhone
        }
      }
      customerOrdersCountCurrent
      customerOrdersCountTotal
      note
      previousNote
      allAppliedRules
      items {
        ...GOrderDetailWare
        sidedishes: sideDishes {
          ...GOrderDetailWare
        }
      }
      totalSum {
        ...GPrice
      }
      transportFee {
        ...GPrice
      }
      coverPrice {
        ...GPrice
      }
      totalDiscount {
        ...GPrice
      }
      orderTiming: orderStateCategoryRelations {
        createdAt
        orderStateCategory
      }
      ...GOrderDriver
    }
  }

  fragment GOrderDetailWare on OrderRecipe {
    id
    recipe {
      id
      code
      nameLabel
    }
    price {
      ...GPrice
    }
  }
  ${re.g}
  ${re.d}
  ${re.f}
  ${ae.a}
`);var ie=r(41),le=r(51),ce=r(40),oe=r(260);const se={[p.d.ACCEPTED]:Object(s.i18nMark)("Accept order"),[p.d.FINISHED]:Object(s.i18nMark)("Finish order")},de=({orderId:e,nextState:t,stateModel:r})=>n.a.createElement(oe.a,{text:D.d._(se[t]),width:"7.375rem",onClick:()=>{r.updateOrderState(e,t)}});var ue=r(7538),me=r(70),he=r(7500);const pe=i.b.div.withConfig({displayName:"DriverName"})`
  margin: 0.1rem 0 0rem 0.2rem;
  display: inline-block;
  vertical-align: top;
  font-size: 1.25rem;
`,be={background:o.a.greyMiddle},fe={color:o.a.white},ge={control:e=>Object.assign({},e,be,fe,{height:o.c.ButtonHeight,borderWidth:0,borderRadius:o.b.Button,margin:0}),menu:e=>Object.assign({},e,be),valueContainer:e=>Object.assign({},e,fe),singleValue:e=>Object.assign({},e,fe),placeholder:e=>Object.assign({},e,fe,{fontSize:"1.2rem"})},ye=({drivers:e,selectedDriver:t,isLoading:r,onSelect:a,onClear:i,onReload:l})=>n.a.createElement(he.a,{options:e,value:t,getOptionValue:Q.a.prop("id"),isLoading:r,isSearchable:!1,isClearable:!0,placeholder:"Deliver order",width:16,styles:ge,noOptionsMessage:()=>D.d._("No drivers available"),onChange:e=>null===e?i():a(e),onMenuOpen:l,components:{ValueContainer:e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(me.a,{iconName:"directions_car",fontSize:2,color:o.a.white}),n.a.createElement(ue.a.ValueContainer,e)),DropdownIndicator:()=>null},formatOptionLabel:e=>n.a.createElement(pe,null,`${e.firstName} ${e.lastName}`)}),Ee=({branchId:e,orderId:t,orderStateCategory:r,stateModel:a})=>n.a.createElement(ae.b,{fetchPolicy:"network-only",variables:{branchId:e,orderId:t},render:({drivers:e,order:{driver:i}},{loading:l,refetch:c})=>n.a.createElement(ye,{drivers:e,selectedDriver:i?i.user:null,isLoading:l,onReload:c,onClear:()=>{i&&a.removeDriver(i.id)},onSelect:e=>{a.selectDriver(t,e.id),r!==p.c.ON_WAY&&a.deliverOrder(t)}})}),ve=i.b.div.withConfig({displayName:"OrderStateFlowContainerWrapper"})`
  margin: 0 0 0 auto;
  text-align: right;
  height: ${o.c.ButtonHeight};
`,Oe=i.b.div.withConfig({displayName:"Control"})`
  margin: 0 0 0 0.5rem;
  display: inline-block;
  vertical-align: bottom;
  text-align: left;
  height: 100%;
`,Ce=({children:e})=>n.a.createElement(ve,null,a.Children.map(e,(e,t)=>n.a.createElement(Oe,{key:t},e)));var we=r(266);const je=[20,30,45,60,75,90,105,120],Se=i.b.div.withConfig({displayName:"MinutesContainer"})`
  display: flex;
  justify-content: 'center';
  flex-wrap: 'wrap';
  font-size: 2rem;
`,xe=i.b.div.withConfig({displayName:"MinutesItem"})`
  margin: 1rem 1rem 0 0;
`;class $e extends n.a.Component{constructor(){super(...arguments),this.state={dialogOpen:!1},this.openDialog=(()=>{this.setState({dialogOpen:!0})}),this.closeDialog=(()=>{this.setState({dialogOpen:!1})})}render(){const{orderId:e,stateModel:t}=this.props;return n.a.createElement(n.a.Fragment,null,n.a.createElement(oe.a,{iconName:"schedule",onClick:this.openDialog}),n.a.createElement(we.b,{open:this.state.dialogOpen,onClose:this.closeDialog},n.a.createElement(we.e,null,n.a.createElement(s.Trans,{id:"Send expected time of delivery to customer (in minutes)"}),n.a.createElement(Se,null,je.map(r=>n.a.createElement(xe,{key:r},n.a.createElement(oe.a,{onClick:()=>{t.sendTimeNotification(e,r),this.closeDialog()},color:o.a.green},r)))))))}}var Ne=r(7534),ke=r(112);const Ie=Object(te.a)(ee.a`
  query GOrderState($orderId: ID!, $branchId: ID!) {
    order(id: $orderId) {
      deliveryType {
        enum
      }
      ...GOrderStateCategory
    }
    companyBranch(id: $branchId) {
      id
      allowedCategories
    }
  }
  ${ke.a}
`);function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const De=e=>n.a.createElement(Ce,null,n.a.createElement($e,e),n.a.createElement(de,Pe({nextState:p.d.ACCEPTED},e))),Te=e=>n.a.createElement(Ce,null,n.a.createElement($e,e),e.canDeliver?n.a.createElement(Ee,e):n.a.createElement(de,Pe({nextState:p.d.FINISHED},e))),Fe=e=>n.a.createElement(Ce,null,n.a.createElement($e,e),n.a.createElement(Ee,e),n.a.createElement(de,Pe({nextState:p.d.FINISHED},e))),Be=({orderId:e,branchId:t})=>n.a.createElement(le.a,{observe:!1,render:({order:{state:r}})=>n.a.createElement(Ie,{variables:{orderId:e,branchId:t},render:({order:a,companyBranch:{allowedCategories:i}})=>{const l=Object(Ne.b)(a);if(!l)return Object(ce.c)(new ie.VError("Order %s has got no state categories")),null;const c=i.includes(p.c.ON_WAY)&&null!=a.deliveryType&&a.deliveryType.enum!==p.a.PICKUP,o={orderId:e,branchId:t,stateModel:r,orderStateCategory:l,canDeliver:c};switch(l){case p.c.NEW_ORDERS:return n.a.createElement(De,o);case p.c.PREPARING:return n.a.createElement(Te,o);case p.c.ON_WAY:return n.a.createElement(Fe,o);default:return null}}})}),Me=i.b.div.withConfig({displayName:"OrderDetailContainerStyled"})`
  padding: 0 0.5rem 0.5rem 1.1rem;
`,Ae=({orderId:e})=>n.a.createElement(ne,{variables:{id:e},fetchPolicy:"cache-and-network",render:({order:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(Me,null,n.a.createElement(N.a,null),n.a.createElement(X,{orderWares:t.items}),n.a.createElement(W,{order:t}),n.a.createElement(H,{rules:t.allAppliedRules},n.a.createElement(M,{current:t.customerOrdersCountCurrent,total:t.customerOrdersCountTotal})),n.a.createElement(P,{phones:t.customer.phones,emails:t.customer.emails}),n.a.createElement(B,{note:t.note,previousNote:t.previousNote}),n.a.createElement(N.a,null),n.a.createElement(K,{orderTiming:t.orderTiming}),n.a.createElement(U,{order:t})),n.a.createElement(Be,{orderId:e,branchId:t.companyBranch.id}))});r.d(t,"a",function(){return Le});const Re=i.b.div.withConfig({displayName:"OrderBoxStyled"})`
  background-color: ${o.a.white};
  color: ${o.a.greyDarkest};
  border-radius: ${o.b.Card};
  margin-bottom: 0.5rem;
  position: relative;
`,Le=({order:e,showBranch:t,listModel:r})=>n.a.createElement(Re,{id:`order-${e.id}`},n.a.createElement($,{order:e,showBranch:t,onClick:()=>r.toggleOrderDetail(e)}),n.a.createElement(c,{test:()=>r.isOrderDetailOpen(e.id),renderSuccess:()=>n.a.createElement(Ae,{orderId:e.id})}))},7927:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(4),l=r(104),c=r(38),o=r(126),s=r(71),d=r(81),u=r(263),m=r(7517),h=r(265),p=r(83),b=r(7509),f=r(7595),g=r(7499),y=r(270),E=r(7543),v=r(50),O=r(168),C=r(260),w=r(10),j=r(7492),S=r(7521),x=r(3),$=r.n(x);const N=$.a`
  query GClosureHistory($branchId: ID!, $dateFrom: Date!, $dateTo: Date!) {
    financialReports(
      companyBranchId: $branchId
      dateFrom: $dateFrom
      dateTo: $dateTo
    ) {
      id
      reportDatetime
      reportSequence
    }
  }
`,k=Object(S.a)(N),I=({children:e})=>{const{statistics:t}=Object(v.d)(),{result:r,execute:a}=k();return n.a.createElement(j.Form,{onSubmit:()=>{t.closureBranch&&a({branchId:t.closureBranch,dateFrom:Object(O.b)(t.dateFrom),dateTo:Object(O.b)(t.dateTo)})},onChange:({values:e})=>t.updateFilter(e)},n.a.createElement(k.context.Provider,{value:r},e))},P=Object(p.b)(()=>{const{data:e,loading:t}=(()=>Object(a.useContext)(k.context))(),{statistics:r}=Object(v.d)();return t?n.a.createElement(g.a,null,n.a.createElement(y.a,null)):r.closureBranch?e&&0!==e.financialReports.length?n.a.createElement(n.a.Fragment,null,e.financialReports.map(e=>n.a.createElement(f.a,{key:e.id},n.a.createElement(b.a,{fixedWidth:!0},n.a.createElement(E.a,{to:`../${e.id}`},n.a.createElement(C.a,{iconName:"mode_edit",width:w.c.ButtonHeight,height:w.c.ButtonHeight}))),n.a.createElement(b.a,{widthGrowIndex:1},`[${e.reportSequence}] ${Object(O.b)(e.reportDatetime)}`)))):n.a.createElement(g.a,null,n.a.createElement(d.Trans,{id:"No closures found"})):n.a.createElement(g.a,null,n.a.createElement(d.Trans,{id:"Select a branch"}))});var D=r(13),T=r(7525),F=r(84),B=r(7505);const M=e=>n.a.createElement(B.a,{queryName:"lastFinancialReport"},n.a.createElement(F.b,{to:"/overview/closure"},n.a.createElement(C.a,{text:c.d._("Current closure"),color:w.a.orange,width:"15rem",height:w.c.ButtonHeight}))),A=D.b.div.withConfig({displayName:"ButtonToRight"})`
  float: right;
  margin: 0.5rem;
`,R=Object(p.b)(({showCurrent:e})=>{const{statistics:t}=Object(v.d)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(T.a,{selectedBranches:t.closureBranch?[t.closureBranch]:[],onSelectionChange:([e])=>t.setClosureBranch(e),onSelectionClear:()=>t.setClosureBranch(null),isClearable:!1}),e&&n.a.createElement(A,null,n.a.createElement(M,null)))});var L=r(7503),G=r(7593);const _=Object(p.b)(({submitButton:e})=>{const{statistics:t}=Object(v.d)();return n.a.createElement(L.a,{justify:"flex-start"},n.a.createElement(b.a,{fixedWidth:!0,width:"10rem"},n.a.createElement(d.Trans,{id:"From date"}),n.a.createElement(G.a,{field:"dateFrom",defaultValue:t.dateFrom})),n.a.createElement(b.a,{fixedWidth:!0,width:"10rem"},n.a.createElement(d.Trans,{id:"To date"}),n.a.createElement(G.a,{field:"dateTo",defaultValue:t.dateTo})),n.a.createElement(b.a,null,e||n.a.createElement(m.a,{width:"15rem"},n.a.createElement(d.Trans,{id:"{0, plural, one {Show for one branch} few {Show for # branches} other {Show for # branches}}",values:{0:t.branchesFilter.length}}))))}),q=e=>n.a.createElement(I,null,n.a.createElement(h.a,{pageTitle:c.d._("Closure history"),useBackButton:!0,backRoute:"/overview"},n.a.createElement(u.a,null,n.a.createElement(R,{showCurrent:!0}),n.a.createElement(_,{submitButton:n.a.createElement(m.a,{width:"15rem"},n.a.createElement(d.Trans,{id:"Show history for branch"}))})),n.a.createElement(u.a,null,n.a.createElement(P,null)))),W=D.b.p.withConfig({displayName:"MonospaceOutputStyled"})`
  color: white;
  font-family: 'Lucida Console', Monaco, monospace;
  white-space: pre-wrap;
  margin: 0.2rem 0.5rem 0.5rem 1rem;
  line-height: 1.8rem;
`,H=({text:e})=>n.a.createElement(W,null,(e=>e.replace(new RegExp("\t","g"),"\t"))(e));var z=r(51),V=r(35);const U=$.a`
  query GClosureReportQuery(
    $branchId: ID!
    $reportId: ID!
    $showReport: Boolean!
  ) {
    lastReport: lastFinancialReport(companyBranchId: $branchId)
      @skip(if: $showReport) {
      plainData
      reportDatetime
      reportSequence
    }
    report: financialReport(report: $reportId) @include(if: $showReport) {
      plainData
      reportDatetime
      reportSequence
    }
  }
`,Q=Object(V.a)(U),Y=({reportId:e=""})=>n.a.createElement(z.a,{render:({statistics:t})=>t.closureBranch?n.a.createElement(Q,{variables:{branchId:t.closureBranch,reportId:e,showReport:Boolean(e)},fetchPolicy:"cache-and-network",renderLoading:!1,render:({report:t,lastReport:r},{loading:a})=>a?n.a.createElement(H,{text:c.d._("Computing")}):n.a.createElement(H,{text:e?t.plainData:r.plainData})}):null});var J=r(7537),K=r(7512),X=r(7520);const Z=e=>n.a.createElement(B.a,{queryName:"financialReports"},n.a.createElement(F.b,{to:"/overview/closure/history"},n.a.createElement(C.a,{text:c.d._("Closure history"),color:w.a.greyDark,width:"15rem",height:w.c.ButtonHeight})));var ee=r(7495);function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const re=e=>n.a.createElement(ee.a,{mutationName:"createFinancialReport"},n.a.createElement(C.a,te({text:c.d._("Create closure"),color:w.a.green,width:"12rem"},e)));var ae=r(338),ne=function(e,t,r,a){return new(r||(r=Promise))(function(n,i){function l(e){try{o(a.next(e))}catch(t){i(t)}}function c(e){try{o(a.throw(e))}catch(t){i(t)}}function o(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,c)}o((a=a.apply(e,t||[])).next())})};const ie=D.b.div.withConfig({displayName:"ButtonToRight"})`
  float: right;
`,le=({showCurrent:e})=>{const{statistics:t}=Object(v.d)(),{enqueueSuccess:r}=Object(X.a)(),{history:i}=Object(K.a)(),l=Object(J.a)(ae.a),o=Object(a.useCallback)(()=>ne(void 0,void 0,void 0,function*(){if(!t.closureBranch)return;const e=yield l({companyBranchId:t.closureBranch});if(e){const{id:t}=e.result;i.push(`/overview/closure/${t}`),r(c.d._("Closure has been created"))}}),[]);return Object(p.g)(()=>n.a.createElement(n.a.Fragment,null,e?n.a.createElement(M,null):n.a.createElement(re,{onClick:o,disabled:!t.closureBranch}),n.a.createElement(ie,null,n.a.createElement(Z,null))))},ce=({match:e})=>n.a.createElement(h.a,{pageTitle:c.d._("Closure"),useBackButton:!0,backRoute:"/overview"},n.a.createElement(u.a,null,n.a.createElement(R,{showCurrent:!1}),n.a.createElement(le,{showCurrent:Boolean(e.params.reportId)})),n.a.createElement(Y,{reportId:e.params.reportId})),oe=Object(p.b)(e=>{const{statistics:t}=Object(v.d)();return n.a.createElement(T.a,{selectedBranches:t.branches,onSelectionChange:t.setBranchFilter,onSelectionClear:t.clearBranchFilter,isMulti:!0})}),se=$.a`
  query GDailyStatistics($branches: [ID!]!, $dateFrom: Date!, $dateTo: Date!) {
    stats: statistics(
      branches: $branches
      dateFrom: $dateFrom
      dateTo: $dateTo
    ) {
      categoryStatisticsPlain
      dailyStatisticsPlain
      deliveryStatisticsPlain
      driversStatisticsPlain
    }
  }
`,de=Object(S.a)(se),ue=({children:e})=>{const{statistics:t}=Object(v.d)(),{result:r,execute:a}=de();return n.a.createElement(j.Form,{onSubmit:()=>{a({branches:t.branchesFilter,dateFrom:Object(O.b)(t.dateFrom),dateTo:Object(O.b)(t.dateTo)})},onChange:({values:e})=>t.updateFilter(e)},n.a.createElement(de.context.Provider,{value:r},e))},me=Object(p.b)(()=>{const{data:e,loading:t}=(()=>Object(a.useContext)(de.context))();if(!e)return null;if(t)return n.a.createElement(H,{text:c.d._("Computing")});const{stats:r}=e;return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{light:!0},n.a.createElement(d.Trans,{id:"Daily statistics"})),n.a.createElement(H,{text:r.dailyStatisticsPlain}),n.a.createElement(g.a,{light:!0},n.a.createElement(d.Trans,{id:"By category"})),n.a.createElement(H,{text:r.categoryStatisticsPlain}),n.a.createElement(g.a,{light:!0},n.a.createElement(d.Trans,{id:"By type"})),n.a.createElement(H,{text:r.deliveryStatisticsPlain}),n.a.createElement(g.a,{light:!0},n.a.createElement(d.Trans,{id:"By driver"})),n.a.createElement(H,{text:r.driversStatisticsPlain}))}),he=()=>n.a.createElement(h.a,{pageTitle:c.d._("Sales statistics"),useBackButton:!0},n.a.createElement(ue,null,n.a.createElement(u.a,null,n.a.createElement(oe,null),n.a.createElement(_,null)),n.a.createElement(me,null)));var pe=r(267),be=r(7502),fe=r(7567),ge=r(7524),ye=r(67),Ee=r(7598),ve=r(7548);const Oe=$.a`
  query GOrdersStatistics($branches: [ID!]!, $dateFrom: Date!, $dateTo: Date!) {
    stats: statistics(
      branches: $branches
      dateFrom: $dateFrom
      dateTo: $dateTo
    ) {
      finishedOrders {
        fees {
          ...GStatsPrice
        }
        onlinePayments {
          ...GStatsPrice
        }
        total {
          ...GStatsPrice
        }
        ordersCount
        orders {
          ...GOrderListTicker
        }
      }
    }
  }

  fragment GStatsPrice on PriceConverted {
    value
    currency {
      code
    }
  }

  ${ve.a}
`,Ce=Object(S.a)(Oe),we=()=>Object(a.useContext)(Ce.context),je=({children:e})=>{const{statistics:t}=Object(v.d)(),{result:r,execute:a}=Ce();return n.a.createElement(j.Form,{onSubmit:()=>{a({branches:t.branchesFilter,dateFrom:Object(O.b)(t.dateFrom),dateTo:Object(O.b)(t.dateTo)})},onChange:({values:e})=>t.updateFilter(e)},n.a.createElement(Ce.context.Provider,{value:r},e))},Se=Object(p.b)(()=>{const{statistics:e,order:t}=Object(v.d)(),{data:r,loading:a}=we();if(a||!r)return n.a.createElement(fe.a,{primaryOpacity:.2,secondaryOpacity:.2});const{orders:i}=r.stats.finishedOrders;return 0===i.length?n.a.createElement(ge.a,null,n.a.createElement(d.Trans,{id:"No orders"})):n.a.createElement(n.a.Fragment,null,i.map(r=>n.a.createElement(Ee.a,{key:r.id,order:Object.assign({},r,{orderStateCategory:ye.c.FINISHED}),listModel:t.list,showBranch:e.branchesFilter.length>1})))});var xe=r(7514);const $e=D.b.div.withConfig({displayName:"StatPanel"})`
  margin: 1.4rem 4rem 0 0.5rem;
  display: inline-block;
`,Ne=D.b.h1.withConfig({displayName:"StatLabel"})`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
`,ke=D.b.h2.withConfig({displayName:"StatValue"})`
  font-size: 4rem;
  font-weight: normal;
  margin: 0;
`,Ie=Object(p.b)(()=>{const{loading:e,data:t}=we();if(e||!t)return null;const r=t.stats.finishedOrders;return n.a.createElement(n.a.Fragment,null,n.a.createElement($e,null,n.a.createElement(Ne,null,n.a.createElement(d.Trans,{id:"Total turnover"})),n.a.createElement(ke,null,n.a.createElement(xe.a,{price:r.total.value,currencyCode:r.total.currency.code}))),n.a.createElement($e,null,n.a.createElement(Ne,null,n.a.createElement(d.Trans,{id:"Online payments"})),n.a.createElement(ke,null,n.a.createElement(xe.a,{price:r.onlinePayments.value,currencyCode:r.onlinePayments.currency.code}))),n.a.createElement($e,null,n.a.createElement(Ne,null,n.a.createElement(d.Trans,{id:"Orders count"})),n.a.createElement(ke,null,r.ordersCount)),n.a.createElement($e,null,n.a.createElement(Ne,null,n.a.createElement(d.Trans,{id:"Total commissions"})),n.a.createElement(ke,null,n.a.createElement(xe.a,{price:r.fees.value,currencyCode:r.fees.currency.code}))))});const Pe=e=>n.a.createElement(je,null,n.a.createElement(be.a,{withScrollArea:!0,row:1,column:8,widthInColumns:8},n.a.createElement(Se,null)),n.a.createElement(pe.a,{layouts:[{i:"summary",x:0,y:1,w:7,h:1}],pageTitle:c.d._("Orders statistics"),showSoundControl:!1,scrollPageTitle:!1,useBackButton:!0},n.a.createElement("div",{key:"summary"},n.a.createElement(u.a,null,n.a.createElement(oe,null),n.a.createElement(_,null)),n.a.createElement(Ie,null))));var De=r(7541);const Te=e=>n.a.createElement(C.a,{text:c.d._("Closure"),iconName:"assignment",color:w.a.turquoise}),Fe=e=>n.a.createElement(C.a,{text:c.d._("Sales statistics"),iconName:"assignment",color:w.a.turquoise}),Be=e=>n.a.createElement(C.a,{text:c.d._("Orders statistics"),iconName:"assignment",color:w.a.turquoise});const Me=e=>n.a.createElement(pe.a,{layouts:[{i:"OrdersStatistics",x:0,y:1,w:2,h:2},{i:"DailyStatistics",x:2,y:1,w:2,h:2},{i:"Closure",x:4,y:1,w:2,h:2}]},n.a.createElement(De.a,{key:"OrdersStatistics",route:"/overview/orders",component:Be,canQuery:"statistics"}),n.a.createElement(De.a,{key:"DailyStatistics",route:"/overview/statistics",component:Fe,canQuery:"statistics"}),n.a.createElement(De.a,{key:"Closure",route:"/overview/closure",component:Te,canQuery:"lastFinancialReport"}));r.d(t,"OverviewRoutes",function(){return Ae});const Ae=({match:e})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{title:c.d._("Overview")}),n.a.createElement(i.e,null,n.a.createElement(s.a,{exact:!0,path:e.path,component:Me}),n.a.createElement(s.a,{path:`${e.path}/closure/history`,component:q}),n.a.createElement(s.a,{path:`${e.path}/closure/:reportId?`,component:ce}),n.a.createElement(s.a,{path:`${e.path}/statistics`,component:he}),n.a.createElement(s.a,{path:`${e.path}/orders`,component:Pe}),n.a.createElement(i.c,{component:o.a})));t.default=Ae}}]);
//# sourceMappingURL=52.7bc35e01.chunk.js.map