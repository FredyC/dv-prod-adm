(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{7493:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(0),a=n.n(r),i=n(13),o=n(10),l=n(70),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const d=i.b.div.withConfig({displayName:"IconLineWrap"})`
  display: flex;
`;d.displayName="IconLineWrap";const s=i.b.div.withConfig({displayName:"DescriptionContainer"})`
  margin: ${({labelMargin:e="0.5rem 0.2rem 0 auto"})=>e};
  min-width: ${({labelWidth:e=0,labelWidthUnits:t=o.c.DefaultSizeUnit})=>e+t};
  flex: 0 1 auto;
  text-align: right;
`,u=i.b.div.withConfig({displayName:"IconLineChildren"})`
  margin-left: 0.5rem;
  align-self: stretch;
  flex: 1 0 auto;
`,m=i.b.div.withConfig({displayName:"LabelStyled"})`
  padding-top: 0.2rem;
  display: inline-block;
`;u.displayName="IconLineChildren";const p=e=>{var{icon:t,label:n,labelWidth:r,labelWidthUnits:i,labelMargin:p,children:h}=e,f=c(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);let v;return t&&(v="string"===typeof t?a.a.createElement(l.a,{iconName:t,color:o.a.greyDark}):a.a.createElement(t,{nativeColor:o.a.greyDark})),a.a.createElement(d,f,a.a.createElement(s,{labelWidth:r,labelWidthUnits:i,labelMargin:p},v,n?a.a.createElement(m,null,n):null),a.a.createElement(u,null,h))}},7494:function(e,t,n){"use strict";n.d(t,"a",function(){return h}),n.d(t,"b",function(){return f});var r=n(0),a=n.n(r),i=n(7492),o=n(13),l=n(7510),c=n(38),d=n(10);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const m=o.a`
  outline: none;
  margin: ${d.c.MarginAroundFormComponents};
`,p=o.a`
  border: 1px red solid;
`,h=o.b.input.withConfig({displayName:"FormInputStyled"})`
  ${m};
  ${({invalid:e})=>e&&p};
`,f=a.a.forwardRef((e,t)=>{var{field:n,inputWidth:r=d.c.DefaultInputWidth,inputWidthUnit:o=d.c.DefaultSizeUnit,isRequired:m,validatioName:p,validationMessage:f,validate:v}=e,g=u(e,["field","inputWidth","inputWidthUnit","isRequired","validatioName","validationMessage","validate"]);return a.a.createElement(i.Field,{field:n,validate:v||(e=>m&&Object(l.isEmpty)(e+"")?f||c.d._("{validatioName} is required",{validatioName:p}):null)},e=>a.a.createElement(h,s({width:`${r}${o}`,value:e.value||0===e.value?e.value:"",onChange:t=>{e.setTouched(!0),e.setValue(t.target.value)},invalid:Boolean(e.error),ref:t},g)))})},7495:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),a=n.n(r),i=n(7504),o=n(50);const l=({mutationName:e,children:t})=>{const{user:n}=Object(o.d)();return n.canMutate(e)?a.a.createElement(a.a.Fragment,null,t):a.a.createElement(i.a,null,`No access to mutation ${e}`)}},7500:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return d});var r=n(0),a=n.n(r),i=n(7538),o=n(10);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const c=(e={})=>Object.assign({},e,{control:(t,n)=>{const{selectProps:{width:r,minWidth:a}}=n,i=Object.assign({},t,{border:`1px solid ${o.a.greyMiddle}`,margin:o.c.MarginAroundFormComponents,width:void 0!==r?`${r}rem`:"100%",minWidth:void 0!==a?`${a}rem`:"8rem"});return e.control?e.control(i,n):i},menu:(t,n)=>{const{selectProps:{width:r}}=n,a=Object.assign({},t,{zIndex:20,color:o.a.black,width:void 0!==r?`${r}rem`:"100%"});return e.menu?e.menu(a,n):a}});function d(e){return a.a.createElement(i.b,l({},e,{styles:c(e.styles)}))}},7502:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),i=n(13),o=n(7513),l=n(10);const c=i.b.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+l.c.LayoutGridCellMargin+")":"calc(100vh - (2 * "+l.c.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+l.c.LayoutGridCellMargin+")":l.c.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+l.c.LayoutGridCellMargin+")":"calc(3.9375rem + "+l.c.LayoutGridCellMargin+")")()};
`,d=i.b.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`,s=({children:e,row:t=1,column:n=0,widthInColumns:r=16,withScrollArea:i=!1,scrollAreaId:l})=>a.a.createElement(c,{column:n,row:t,widthInColumns:r,withScrollArea:i},i?a.a.createElement(o.a,{id:l},e):a.a.createElement(d,null,e))},7503:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r=n(13).b.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`},7504:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(0);const r=({children:e})=>null},7505:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),a=n.n(r),i=n(7504),o=n(50);const l=({queryName:e,children:t})=>{const{user:n}=Object(o.d)();return n.canQuery(e)?a.a.createElement(a.a.Fragment,null,t):a.a.createElement(i.a,null,`No access to query ${e}`)}},7507:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r=n(13).b.div.withConfig({displayName:"VerticalGap"})`
  height: ${({size:e=1,sizeUnit:t="rem"})=>`${e}${t}`};
`;r.displayName="VerticalGap"},7508:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),a=n.n(r),i=n(13),o=n(10);const l=i.b.div.withConfig({displayName:"HorizontalSeparatorStyled"})`
  border-top: 1px solid ${o.a.greyLight};
  margin: 0.25rem 0rem;
`,c=({visible:e=!0})=>e?a.a.createElement(l,null):null},7512:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),a=n(4);function i(){return Object(r.useContext)(a.f)}},7513:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r=n(13).b.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`},7514:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n.n(r),i=n(168);const o=({price:e,currencyCode:t})=>a.a.createElement("span",null,t?`${Object(i.c)(e)} ${t}`:Object(i.c)(e))},7515:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(81),a=n(0),i=n.n(a),o=n(13),l=n(16);const c=o.b.div.withConfig({displayName:"ItemStyled"})`
  margin: 0.5rem 0.6rem;
  display: inline-block;
  cursor: pointer;
  color: ${({textColor:e})=>e};
  ${function({isSelected:e}){if(!e)return"";return o.a`
    font-weight: bolder;
    text-decoration: underline;
  `}};
`,d=o.b.div.withConfig({displayName:"SelectorStyled"})`
  border: ${({isInvalid:e})=>!0===e?"1px red solid":"auto"};
`;class s extends i.a.Component{hasSelection(){const{isMulti:e,selectedItem:t,selectedItems:n}=this.props;return e?Array.isArray(n)&&n.length>0:null!=t}isItemSelected(e){const{isMulti:t,selectedItem:n,selectedItems:r}=this.props;return t&&Array.isArray(r)?l.a.contains(e,r):l.a.equals(n,e)}updateSelection(e){const{isMulti:t,selectedItems:n=[],onSingleSelection:r,onMultiSelection:a}=this.props;null===e?t&&a?a([]):r&&r(null):t&&a?this.isItemSelected(e)?a(Array.isArray(n)?l.a.without([e],n):[e]):a(Array.isArray(n)?l.a.concat(n,[e]):[]):r&&r(e)}render(){const{items:e,isClearable:t,isInvalid:n=!1,textColor:a="inherit",formatItem:o}=this.props;return i.a.createElement(d,{isInvalid:n},t&&i.a.createElement(c,{isSelected:!this.hasSelection(),textColor:a,onClick:()=>{this.updateSelection(null)}},i.a.createElement(r.Trans,{id:"optionselector.clear-filter"})),e.map((e,t)=>i.a.createElement(c,{key:t,isSelected:this.isItemSelected(e),textColor:a,onClick:()=>{this.updateSelection(e)}},o(e))))}}s.defaultProps={formatItem:l.a.prop("displayName"),getItemValue:l.a.prop("id")}},7519:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0);const a=e=>Object(r.useEffect)(e,[])},7520:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r,a=n(271),i=n(0);!function(e){e.default="default",e.error="error",e.success="success",e.warning="warning",e.info="info"}(r||(r={}));const o={variant:r.success},l={variant:r.error},c={variant:r.warning},d={variant:r.info};function s(){const e=Object(i.useContext)(a.SnackbarContextNext),t=Object(i.useCallback)(t=>e(t,o),[]),n=Object(i.useCallback)(t=>e(t,l),[]),r=Object(i.useCallback)(t=>e(t,c),[]),s=Object(i.useCallback)(t=>e(t,d),[]);return{enqueueSnackbar:e,enqueueSuccess:t,enqueueError:n,enqueueWarning:r,enqueueInfo:s}}},7521:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(37),a=n(5998),i=n(6),o=n(83),l=n(0),c=n(50),d=n(40),s=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};function u(e){const t=Object(l.createContext)(null);function n(t={}){const n=Object(c.c)(),l=Object(o.e)({data:null,loading:!1,get hasAnyError(){return Boolean(l.errors&&l.errors.length||l.error)}});return{result:l,execute:o=>s(this,void 0,void 0,function*(){l.loading=!0;try{const a=yield n.query(Object.assign({},t,{query:e,variables:o}));Object(i.y)(()=>{l.data=a.data,l.errors=a.errors,l.loading=!1})}catch(c){Object(r.b)(c)?Object(i.y)(()=>{l.error=c,l.errors=c.graphQLErrors,l.loading=!1}):(Object(i.y)(()=>{l.error=c,l.loading=!1}),Object(d.c)(c))}return l.errors&&Object(d.d)(l.errors,{query:Object(a.i)(e),variables:o}),l})}}return n.context=t,n}},7524:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(13),a=n(10);const i=r.b.h2.withConfig({displayName:"CardListTitle"})`
  color: ${a.a.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`},7525:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(16),o=n(7533),l=n(7515),c=n(10);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const u=e=>{var{branches:t,selectedBranch:n,selectedBranches:r,textColor:i=c.a.black}=e,o=s(e,["branches","selectedBranch","selectedBranches","textColor"]);return a.a.createElement(l.a,d({items:t,selectedItem:n,selectedItems:r,textColor:i,formatItem:e=>a.a.createElement("span",{title:e.brand.name},e.name)},o))};var m=n(83),p=n(50);const h=Object(m.b)(({render:e})=>{const{user:t}=Object(p.d)();return t.branches?e(t.branches,!1):e([],!0)});function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return v});const v=({breakpoint:e=3,selectedBranches:t=[],isMulti:n=!1,isClearable:r=!0,textColor:l,onSelectionChange:c,onSelectionClear:d,getDropdownProps:s=(()=>({}))})=>a.a.createElement(h,{render:(m,p)=>{const h=e=>t.includes(e.id),v={textColor:l,isClearable:r,isMulti:n,isLoading:p,branches:m,selectedBranch:p?null:m.find(h),selectedBranches:p?[]:m.filter(h),onSingleSelection(e){null===e&&d?d():null!==e&&c&&c([e.id],[e])},onMultiSelection(e){0===e.length&&d?d():e.length&&c&&c(e.map(i.a.prop("id")),e)}};return m.length<e?a.a.createElement(u,v):a.a.createElement(o.a,f({},v,s()))}})},7529:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),a=n.n(r),i=n(10),o=n(260);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const d=e=>{var{onDelete:t,confirmText:n}=e,r=c(e,["onDelete","confirmText"]);return a.a.createElement(o.a,l({iconName:"delete",color:i.a.greyMiddle,width:i.c.ButtonHeight,height:i.c.ButtonHeight,onClick:e=>{e.preventDefault(),n&&!window.confirm(n)||t()}},r))}},7533:function(e,t,n){"use strict";var r=n(81),a=n(0),i=n.n(a);const o=n(13).b.div.withConfig({displayName:"CursorContainer"})`
  cursor: ${({cursor:e="default"})=>e};
`,l=({branch:e,onClick:t,short:n=!1,showBrand:r=!0})=>i.a.createElement(o,{cursor:"pointer",onClick:t},n?e.name.substr(0,8):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,e.name),r&&i.a.createElement("span",null,` [${e.brand.name}]`)));var c=n(7500),d=n(16),s=n(38);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return h});var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const p=e=>{const{getStyles:t}=e,n=e.innerProps,{ref:a}=n,o=m(n,["ref"]);return i.a.createElement("div",u({},o,{ref:a,style:t("clearIndicator",e)}),i.a.createElement("div",{style:{padding:"0px 5px"}},i.a.createElement(r.Trans,{id:"All"})))},h=e=>{var{branches:t,selectedBranch:n,onSingleSelection:r,selectedBranches:a,onMultiSelection:o}=e,h=m(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return i.a.createElement(c.a,u({value:h.isMulti?a:n,placeholder:h.isMulti?s.d._("Filter branches..."):s.d._("Select a branch"),options:t,getOptionValue:d.a.prop("id"),formatOptionLabel:e=>i.a.createElement(l,{branch:e}),filterOption:(e,t)=>e.data.name.toLocaleLowerCase().includes(t.toLocaleLowerCase()),closeMenuOnSelect:!h.isMulti,components:{ClearIndicator:p},styles:{clearIndicator:e=>Object.assign({},e,{cursor:"pointer"})},onChange:e=>{h.isMulti&&o&&Array.isArray(e)&&o(e),!h.isMulti&&r&&(Array.isArray(e)?r(d.a.head(e)||null):r(e||null))}},h))}},7534:function(e,t,n){"use strict";var r=n(103),a=n(0),i=n.n(a),o=n(51),l=n(67),c=n(16),d=n(3),s=n.n(d),u=n(35),m=n(7536),p=n(112),h=n(36);const f=s.a`
  fragment GOrderMapMarker on Order {
    id
    deliverAt
    gps {
      ...GGeoPoint
    }
  }
  ${h.e}
`;var v=n(7548);const g=s.a`
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

  ${p.a}
  ${f}
  ${v.a}
`,y=s.a`
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
  ${p.a}
  ${f}
  ${v.a}
`,b=Object(u.a)(g),k=Object(m.a)(y);n.d(t,"a",function(){return O}),n.d(t,"b",function(){return C});const E=[l.c.NEW_ORDERS,l.c.PREPARING,l.c.READY_TO_DELIVER,l.c.ON_WAY,l.c.FINISHED],O=({children:e,includeOldFinished:t=!1})=>i.a.createElement(o.a,{render:n=>{if(!n.order.list.hasBranchFilter)return e({isLoading:!1,noFilter:!0});const r={branches:n.order.list.branchesFilter,categories:E,includeOldFinished:t};return i.a.createElement(b,{fetchPolicy:"cache-and-network",refetchOnConnectionLost:!0,variables:r,renderLoading:!1,render:({orders:t=[],orderStateCategories:n=[]},a)=>i.a.createElement(k,{queryResult:a,variables:r,handleUpdate:w},e({isLoading:a.loading,noFilter:!1,orders:t,categorizedOrders:function(e){return e.reduce((e,t)=>{const n=C(t);return e[n]?e[n].push(t):e[n]=[t],e},{})}(t),categories:n}))})}});function C(e){return e.orderStateCategory}function w(e,t){const{order:n}=e.updatedOrder;if(!n)return t;let r=!1;const a=c.a.reject(S,t.orders).map(e=>e.id===n.id?(r=!0,n):e);return r||a.unshift(n),Object.assign({},t,{orders:a})}function S(e){return e.orderStateCategory===l.c.FINISHED&&Object(r.b)(new Date,e.createdAt)>e.companyBranch.oldOrderThreshold}},7535:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(13),a=n(10);const i=r.b.div.withConfig({displayName:"TouchButtonBadge"})`
  min-height: 1.8rem;
  line-height: 1.8rem;
  min-width: 1.8rem;
  font-size: 1.2rem;
  margin: 0;
  background-color: ${a.a.red};
  color: white;
  position: absolute;
  right: -0.25rem;
  top: -0.25rem;
  border-radius: 1.8rem;
  text-align: center;
  vertical-align: middle;
  padding: 0;
`},7536:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(7519);function a(e){return function(t){return Object(r.a)(()=>{const{queryResult:n,variables:r,handleUpdate:a}=t;return n.subscribeToMore({document:e,variables:r,updateQuery:(e,{subscriptionData:t})=>t&&t.data&&a(t.data,e)||e})}),t.children}}},7537:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(81),a=n(37),i=n(58),o=n.n(i),l=n(0),c=n.n(l),d=n(130),s=n(16),u=n(40),m=n(38),p=n(260),h=n(7520),f=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};function v(e,t={}){const n=m.d._("Unexpected error occured while sending a request. Our team was notified about the issue."),{enqueueSnackbar:r,enqueueError:i,enqueueInfo:o}=Object(h.a)(),p=Object(l.useCallback)(e=>{e.forEach(o)},[]),v=Object(l.useCallback)(e=>{const t=e.filter(s.a.propEq("showToUser",!0));0===t.length?i(n):p(t.map(s.a.prop("message")))},[]),y=Object(l.useCallback)(e=>{if(Object(a.b)(e)){if(e.networkError)return void i(m.d._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void v(e.graphQLErrors)}Object(u.c)(e),r(n,{action:[c.a.createElement(g,{key:"feedback"})]})},[]),b=Object(d.b)(e,t);return e=>f(this,void 0,void 0,function*(){try{const r=yield b({variables:e});if(r.errors)return v(r.errors),null;if(!r.data)return null;const a=r.data;if(t.getUserErrors){const e=t.getUserErrors(a);null!==e&&p(e)}return a}catch(n){return y(n),null}})}function g(){return c.a.createElement(p.a,{onClick:()=>o.a.showReportDialog()},c.a.createElement(r.Trans,{id:"Submit feedback"}))}},7541:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),a=n.n(r),i=n(84),o=n(7495),l=n(7505),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const d=e=>{var{route:t,component:n,canQuery:d,canMutate:s}=e,u=c(e,["route","component","canQuery","canMutate"]);let m=t?a.a.createElement(i.b,{to:t},Object(r.createElement)(n)):Object(r.createElement)(n);return d&&(m=a.a.createElement(l.a,{queryName:d},m)),s&&(m=a.a.createElement(o.a,{mutationName:s},m)),a.a.createElement("div",u,m)}},7542:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r=n(13).b.a.withConfig({displayName:"LinkStyled"})`
  color: inherit;
  text-decoration-color: rgba(0, 0, 0, 0.08);
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
  &:visited {
    text-decoration-color: rgba(0, 0, 0, 0.08);
  }
`},7547:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),a=n.n(r),i=n(7492),o=n(16),l=n(38),c=n(7515);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};class u extends a.a.Component{constructor(){super(...arguments),this.validate=(e=>{const{isRequired:t,isMulti:n,validationName:r}=this.props;if(t){if(n&&(!Array.isArray(e)||0===e.length))return l.d._("{validationName} must have at least option selected",{validationName:r});if(!n&&null==e)return l.d._("{validationName} must have a selection",{validationName:r})}return null})}getControlProps(e){const{isMulti:t,items:n,defaultSelection:r,getItemId:a}=this.props,i=e.value||r;if(t){const t=e=>i.includes(a(e));return{selectedItems:Array.isArray(i)?n.filter(t):[],onMultiSelection:t=>{e.setValue(t.map(a)),e.setTouched(!0)}}}return{selectedItem:i&&n.find(e=>a(e)===i),onSingleSelection:t=>{e.setValue(t?a(t):null),e.setTouched(!0)}}}render(){const e=this.props,{field:t,fieldIsPure:n=!1,isRequired:r=!1,isClearable:o=!1}=e,l=s(e,["field","fieldIsPure","isRequired","isClearable"]);return a.a.createElement(i.Field,{field:t,pure:n,validate:this.validate},e=>a.a.createElement(c.a,d({},this.getControlProps(e),{isInvalid:Boolean(e.error),isClearable:o&&!r},l)))}}u.defaultProps={validationName:l.d._("Value"),getItemId:o.a.prop("id")}},7548:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(3),a=n.n(r),i=n(36);const o=a.a`
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
`},7570:function(e,t,n){"use strict";var r=n(103),a=n(0),i=n.n(a),o=n(125),l=n(13),c=n(10);const d=l.b.div.withConfig({displayName:"TimeBadgeStyled"})`
  min-width: 1.5rem;
  min-height: 1.5rem;
  padding: 0.3rem;
  border: 1px solid white;
  border-radius: 4rem;
  color: ${c.a.white};
  background: ${c.a.greyMiddle};
  text-align: center;
  font-size: 1rem;
  margin: 0;
  vertical-align: middle;
  font-family: 'Open Sans', sans-serif;
`,s=Object(l.b)(d).withConfig({displayName:"TimeBadgeUnknown"})`
  background: ${c.a.greyMiddle};
  color: ${c.a.greyDarkest};
`,u=Object(l.b)(d).withConfig({displayName:"TimeBadgeInProgress"})`
  background: ${c.a.orange};
`,m=Object(l.b)(d).withConfig({displayName:"TimeBadgeBigTime"})`
  font-size: 0.8rem;
  padding: 0.4rem 0.3rem 0.2rem 0.3rem;
  background: ${c.a.orange};
`,p=Object(l.b)(d).withConfig({displayName:"TimeBadgeWarning"})`
  background: ${c.a.red};
`,h=Object(l.b)(d).withConfig({displayName:"TimeBadgeCompleted"})`
  background: ${c.a.green};
`,f=Object(l.b)(d).withConfig({displayName:"TimeBadgeCancelled"})`
  background: ${c.a.greyMiddle};
  padding: 0.3rem 0.3rem 0 0.3rem;
`,v=({minutes:e=0,onClick:t,isFinished:n=!1,isCancelled:r=!1})=>{if(r)return i.a.createElement(f,{onClick:t},i.a.createElement(o.a,null));let a=e.toString(),l=u;return Number.isNaN(e)?(l=s,a="?"):n?l=e<=0?p:h:e<=20?(l=p,e<-99&&(a="-")):e>99&&(l=m),i.a.createElement(l,{children:a,onClick:t})};var g=n(7579),y=n.n(g);const b=({interval:e,enabled:t,getNow:n=Date.now,nextTick:r=y.a,cancelTick:i=y.a.cancel})=>{const[o,l]=function(e){const[t,n]=Object(a.useState)(e),r=Object(a.useRef)(null);return r.current=t,[()=>r.current,n]}(n),c=Object(a.useRef)(null);return Object(a.useEffect)(()=>{const a=()=>{const t=n();t-o()>=e&&l(t),s()},d=()=>{c.current&&(i(c.current),c.current=null)},s=()=>{t?c.current=r(a):d()};return s(),d},[e,t]),o()};n.d(t,"a",function(){return k});const k=({deliverAt:e,deliveredAt:t,isCancelled:n=!1,onClick:a})=>{const o=b({interval:6e4,enabled:!t}),l=Object(r.d)(e,t||o);return i.a.createElement(v,{minutes:l,onClick:a,isFinished:Boolean(t),isCancelled:n})}},7578:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),i=n(84),o=n(7535),l=n(38),c=n(260),d=n(10);const s=({count:e})=>a.a.createElement(i.b,{to:"/order"},a.a.createElement(c.a,{text:l.d._("Orders"),iconName:"assignment_returned",badge:e&&e>0?a.a.createElement(o.a,null,e):null,color:d.a.yellow}))},7580:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(274),a=n.n(r),i=n(0);function o(e,t=300){const n=Object(i.useCallback)(e,[]),r=Object(i.useRef)(a()(n,t));return Object(i.useEffect)(()=>r.current.clear),r.current}},7582:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(273),a=n(0),i=n.n(a),o=n(7530),l=n(13),c=n(10);const d=l.b.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: ${c.b.Card};
  overflow: hidden;
  height: 100%;
`,s=Object(o.withGoogleMap)(({children:e})=>i.a.createElement(i.a.Fragment,null,e));class u extends a.Component{constructor(){super(...arguments),this.getOptions=(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1}))}render(){const{model:e}=this.props;return i.a.createElement(s,{containerElement:i.a.createElement(d,null),mapElement:i.a.createElement("div",{style:{height:"100%"}})},i.a.createElement(r.a,null,()=>i.a.createElement(o.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,options:this.getOptions()},this.props.render({}))))}}},7598:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(13),o=n(273);const l=({test:e,renderSuccess:t,renderFailure:n})=>a.a.createElement(o.a,{render:()=>e()?t():n?n():null});var c=n(10),d=n(81),s=n(97),u=n.n(s),m=n(281),p=n(7514),h=n(67),f=n(168);const v=({customer:e})=>e?a.a.createElement("span",null,`${e.lastName?`${e.firstName} ${e.lastName}`:e.defaultPhone?e.defaultPhone.phone:""}`):a.a.createElement("i",null,"unknown");var g=n(7570);const y=Object(i.b)(m.Element).withConfig({displayName:"OrderTickerStyled"})`
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: ${u()(c.a.turquoise).alpha(.05).string()};
  }
  &:active {
    background-color: ${u()(c.a.turquoise).alpha(.2).string()};
  }
`,b=i.b.div.withConfig({displayName:"OrderTickerMainContentStyled"})`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.4rem;
`,k=i.b.div.withConfig({displayName:"DeliveryTimeBadgeContainerStyled"})`
  flex: 0 0 2rem;
`,E=i.b.div.withConfig({displayName:"AddressDisplayContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,O=i.b.div.withConfig({displayName:"CustomerIdentityContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,C=i.b.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 3.5rem;
  text-align: right;
  position: relative;
`,w=i.b.div.withConfig({displayName:"PaidMarkStyled"})`
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
    border-top: 2px solid ${c.a.orange};
    transform: rotate(13deg);
    transform-origin: 0% 0%;
    opacity: 0.7;
  }
`,S=i.b.div.withConfig({displayName:"PaidTextStyled"})`
  color: ${c.a.orange};
`,N=i.b.div.withConfig({displayName:"ToBranchContainerStyled"})`
  padding: 0.3rem 0.6rem;
  display: inline-block;
  border-top-left-radius: ${c.b.Card};
  background-color: ${c.a.green};
  color: ${c.a.white};
`,I=({order:e,showBranch:t,onClick:n})=>a.a.createElement(y,{onClick:n,name:`order-${e.id}`},t&&a.a.createElement(N,null,e.companyBranch.name),a.a.createElement(b,null,a.a.createElement(k,null,a.a.createElement(g.a,{deliverAt:e.deliverAt,deliveredAt:e.deliveredAt,isCancelled:e.orderStateCategory===h.c.CANCEL})),a.a.createElement(E,null,Object(f.a)(e.address)),a.a.createElement(O,null,a.a.createElement(v,{customer:e.customer})),a.a.createElement(C,null,a.a.createElement(p.a,{price:e.totalSum.value}),e.isPaidWithCard&&a.a.createElement(a.a.Fragment,null,a.a.createElement(w,null),a.a.createElement(S,null,a.a.createElement(d.Trans,{id:"Paid"}))))));var j=n(7508),x=n(7493),P=n(7542);const D=({phones:e,emails:t})=>{const n=e=>a.a.createElement(x.a,{icon:e.icon,key:e.value,labelMargin:"0"},a.a.createElement("div",{title:e.description||""},(e=>e.isMail?a.a.createElement(P.a,{href:`mailto:${e.value}`},e.value):a.a.createElement(P.a,{href:`tel:${e.value.replace("/ /g","")}`},e.value))(e)));return a.a.createElement(a.a.Fragment,null,(e.length>0||t.length>0)&&a.a.createElement(j.a,null),e.map(e=>n(Object.assign({icon:"phone",isMail:!1,value:e.phone},e))),t.map(e=>n(Object.assign({icon:"mail_outline",isMail:!0,value:e.email},e))))};var L=n(38);const F=i.b.span.withConfig({displayName:"CurrentNoteStyled"})`
  color: ${c.a.orange};
`,T=i.b.span.withConfig({displayName:"PreviousNoteStyled"})`
  color: ${c.a.greyDark};
  margin-left: 0.5rem;
`,$=({note:e,previousNote:t})=>e||t?a.a.createElement(a.a.Fragment,null,a.a.createElement(j.a,null),a.a.createElement(x.a,{icon:"note",labelMargin:"0"},a.a.createElement(F,null,e||L.d._("Without note").toLocaleLowerCase()),a.a.createElement(T,null,t))):null,R=({current:e,total:t})=>a.a.createElement(d.Trans,{id:"It's customer's {current, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} order {total, plural, one {} other {from total of # orders}}",values:{current:e,total:t}}),_=i.b.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,M=i.b.div.withConfig({displayName:"CodeContainerStyled"})`
  flex: 0 0 5rem;
`,G=i.b.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${c.a.greyMiddle};
`,A=i.b.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${c.a.greyMiddle};
`,W=({code:e,label:t,price:n})=>a.a.createElement(_,null,a.a.createElement(M,null,e),a.a.createElement(G,null,t),a.a.createElement(A,null,a.a.createElement(p.a,{price:n}))),V=i.b.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`,B=({order:e})=>a.a.createElement(V,null,a.a.createElement(W,{label:L.d._("Transport fee"),price:e.transportFee.value}),a.a.createElement(W,{label:L.d._("Covers price"),price:e.coverPrice.value}),a.a.createElement(W,{label:L.d._("Discount total"),price:-1*e.totalDiscount.value}),a.a.createElement("b",null,a.a.createElement(W,{label:L.d._("Total price"),price:e.totalSum.value}))),q=({rules:e,children:t})=>e.length>0||t?a.a.createElement(a.a.Fragment,null,a.a.createElement(j.a,null),a.a.createElement(x.a,{icon:"announcement",labelMargin:"0"},t,a.a.createElement("br",null),e.join(", "))):null;var z=n(125);const U=i.b.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,H=({order:e})=>{const t=[];if(e.deliverAt&&t.push(a.a.createElement("div",{key:"deliverAt"},Object(f.e)(e.deliverAt),a.a.createElement(U,null,a.a.createElement(d.Trans,{id:"Deliver on time"})))),e.driver){const{firstName:n,lastName:r}=e.driver.user;t.push(a.a.createElement("div",{key:"driver"},`${n} ${r}`,a.a.createElement(U,null,a.a.createElement(d.Trans,{id:"Driver"}))))}return 0===t.length?null:a.a.createElement(x.a,{icon:z.f,labelMargin:"0"},t)};var Q=n(16);const Y=i.b.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,K={[h.c.NEW_ORDERS]:Object(d.i18nMark)("Created"),[h.c.PREPARING]:Object(d.i18nMark)("Preparing"),[h.c.READY_TO_DELIVER]:Object(d.i18nMark)("Ready to deliver"),[h.c.ON_WAY]:Object(d.i18nMark)("On way"),[h.c.FINISHED]:Object(d.i18nMark)("Finished")},Z=({orderTiming:e})=>a.a.createElement(x.a,{icon:"access_time",labelMargin:"0"},Q.a.reject(({createdAt:e,orderStateCategory:t})=>null===e||!K[t],e).map(e=>a.a.createElement("div",{key:e.orderStateCategory},Object(f.e)(e.createdAt),a.a.createElement(Y,null,L.d._(K[e.orderStateCategory]))))),J=({orderWares:e})=>{return a.a.createElement("div",null,e.map(e=>a.a.createElement(r.Fragment,{key:e.id},a.a.createElement(W,{code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),a.a.createElement(a.a.Fragment,null,e.sidedishes.map(e=>a.a.createElement(W,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value}))))))};var X=n(3),ee=n.n(X),te=n(35),ne=n(36),re=n(171);const ae=Object(te.a)(ee.a`
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
  ${ne.g}
  ${ne.d}
  ${ne.f}
  ${re.a}
`);var ie=n(41),oe=n(51),le=n(40),ce=n(260);const de={[h.d.ACCEPTED]:Object(d.i18nMark)("Accept order"),[h.d.FINISHED]:Object(d.i18nMark)("Finish order")},se=({orderId:e,nextState:t,stateModel:n})=>a.a.createElement(ce.a,{text:L.d._(de[t]),width:"7.375rem",onClick:()=>{n.updateOrderState(e,t)}});var ue=n(7538),me=n(70),pe=n(7500);const he=i.b.div.withConfig({displayName:"DriverName"})`
  margin: 0.1rem 0 0rem 0.2rem;
  display: inline-block;
  vertical-align: top;
  font-size: 1.25rem;
`,fe={background:c.a.greyMiddle},ve={color:c.a.white},ge={control:e=>Object.assign({},e,fe,ve,{height:c.c.ButtonHeight,borderWidth:0,borderRadius:c.b.Button,margin:0}),menu:e=>Object.assign({},e,fe),valueContainer:e=>Object.assign({},e,ve),singleValue:e=>Object.assign({},e,ve),placeholder:e=>Object.assign({},e,ve,{fontSize:"1.2rem"})},ye=({drivers:e,selectedDriver:t,isLoading:n,onSelect:r,onClear:i,onReload:o})=>a.a.createElement(pe.a,{options:e,value:t,getOptionValue:Q.a.prop("id"),isLoading:n,isSearchable:!1,isClearable:!0,placeholder:"Deliver order",width:16,styles:ge,noOptionsMessage:()=>L.d._("No drivers available"),onChange:e=>null===e?i():r(e),onMenuOpen:o,components:{ValueContainer:e=>a.a.createElement(a.a.Fragment,null,a.a.createElement(me.a,{iconName:"directions_car",fontSize:2,color:c.a.white}),a.a.createElement(ue.a.ValueContainer,e)),DropdownIndicator:()=>null},formatOptionLabel:e=>a.a.createElement(he,null,`${e.firstName} ${e.lastName}`)}),be=({branchId:e,orderId:t,orderStateCategory:n,stateModel:r})=>a.a.createElement(re.b,{fetchPolicy:"network-only",variables:{branchId:e,orderId:t},render:({drivers:e,order:{driver:i}},{loading:o,refetch:l})=>a.a.createElement(ye,{drivers:e,selectedDriver:i?i.user:null,isLoading:o,onReload:l,onClear:()=>{i&&r.removeDriver(i.id)},onSelect:e=>{r.selectDriver(t,e.id),n!==h.c.ON_WAY&&r.deliverOrder(t)}})}),ke=i.b.div.withConfig({displayName:"OrderStateFlowContainerWrapper"})`
  margin: 0 0 0 auto;
  text-align: right;
  height: ${c.c.ButtonHeight};
`,Ee=i.b.div.withConfig({displayName:"Control"})`
  margin: 0 0 0 0.5rem;
  display: inline-block;
  vertical-align: bottom;
  text-align: left;
  height: 100%;
`,Oe=({children:e})=>a.a.createElement(ke,null,r.Children.map(e,(e,t)=>a.a.createElement(Ee,{key:t},e)));var Ce=n(266);const we=[20,30,45,60,75,90,105,120],Se=i.b.div.withConfig({displayName:"MinutesContainer"})`
  display: flex;
  justify-content: 'center';
  flex-wrap: 'wrap';
  font-size: 2rem;
`,Ne=i.b.div.withConfig({displayName:"MinutesItem"})`
  margin: 1rem 1rem 0 0;
`;class Ie extends a.a.Component{constructor(){super(...arguments),this.state={dialogOpen:!1},this.openDialog=(()=>{this.setState({dialogOpen:!0})}),this.closeDialog=(()=>{this.setState({dialogOpen:!1})})}render(){const{orderId:e,stateModel:t}=this.props;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ce.a,{iconName:"schedule",onClick:this.openDialog}),a.a.createElement(Ce.b,{open:this.state.dialogOpen,onClose:this.closeDialog},a.a.createElement(Ce.e,null,a.a.createElement(d.Trans,{id:"Send expected time of delivery to customer (in minutes)"}),a.a.createElement(Se,null,we.map(n=>a.a.createElement(Ne,{key:n},a.a.createElement(ce.a,{onClick:()=>{t.sendTimeNotification(e,n),this.closeDialog()},color:c.a.green},n)))))))}}var je=n(7534),xe=n(112);const Pe=Object(te.a)(ee.a`
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
  ${xe.a}
`);function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Le=e=>a.a.createElement(Oe,null,a.a.createElement(Ie,e),a.a.createElement(se,De({nextState:h.d.ACCEPTED},e))),Fe=e=>a.a.createElement(Oe,null,a.a.createElement(Ie,e),e.canDeliver?a.a.createElement(be,e):a.a.createElement(se,De({nextState:h.d.FINISHED},e))),Te=e=>a.a.createElement(Oe,null,a.a.createElement(Ie,e),a.a.createElement(be,e),a.a.createElement(se,De({nextState:h.d.FINISHED},e))),$e=({orderId:e,branchId:t})=>a.a.createElement(oe.a,{observe:!1,render:({order:{state:n}})=>a.a.createElement(Pe,{variables:{orderId:e,branchId:t},render:({order:r,companyBranch:{allowedCategories:i}})=>{const o=Object(je.b)(r);if(!o)return Object(le.c)(new ie.VError("Order %s has got no state categories")),null;const l=i.includes(h.c.ON_WAY)&&null!=r.deliveryType&&r.deliveryType.enum!==h.a.PICKUP,c={orderId:e,branchId:t,stateModel:n,orderStateCategory:o,canDeliver:l};switch(o){case h.c.NEW_ORDERS:return a.a.createElement(Le,c);case h.c.PREPARING:return a.a.createElement(Fe,c);case h.c.ON_WAY:return a.a.createElement(Te,c);default:return null}}})}),Re=i.b.div.withConfig({displayName:"OrderDetailContainerStyled"})`
  padding: 0 0.5rem 0.5rem 1.1rem;
`,_e=({orderId:e})=>a.a.createElement(ae,{variables:{id:e},fetchPolicy:"cache-and-network",render:({order:t})=>a.a.createElement(a.a.Fragment,null,a.a.createElement(Re,null,a.a.createElement(j.a,null),a.a.createElement(J,{orderWares:t.items}),a.a.createElement(B,{order:t}),a.a.createElement(q,{rules:t.allAppliedRules},a.a.createElement(R,{current:t.customerOrdersCountCurrent,total:t.customerOrdersCountTotal})),a.a.createElement(D,{phones:t.customer.phones,emails:t.customer.emails}),a.a.createElement($,{note:t.note,previousNote:t.previousNote}),a.a.createElement(j.a,null),a.a.createElement(Z,{orderTiming:t.orderTiming}),a.a.createElement(H,{order:t})),a.a.createElement($e,{orderId:e,branchId:t.companyBranch.id}))});n.d(t,"a",function(){return Ge});const Me=i.b.div.withConfig({displayName:"OrderBoxStyled"})`
  background-color: ${c.a.white};
  color: ${c.a.greyDarkest};
  border-radius: ${c.b.Card};
  margin-bottom: 0.5rem;
  position: relative;
`,Ge=({order:e,showBranch:t,listModel:n})=>a.a.createElement(Me,{id:`order-${e.id}`},a.a.createElement(I,{order:e,showBranch:t,onClick:()=>n.toggleOrderDetail(e)}),a.a.createElement(l,{test:()=>n.isOrderDetailOpen(e.id),renderSuccess:()=>a.a.createElement(_e,{orderId:e.id})}))},7600:function(e,t,n){"use strict";var r=n(125),a=n(0),i=n.n(a),o=n(84),l=n(7535),c=n(38),d=n(260),s=n(10),u=n(129),m=n(3);const p=n.n(m).a`
  subscription SOrderCall {
    updatedUserCallingCustomer {
      eventId
      phone
      isRinging
    }
  }
`,h=({render:e})=>i.a.createElement(u.Subscription,{subscription:p},({data:t})=>e(t?t.updatedUserCallingCustomer:null));n.d(t,"a",function(){return f});const f=({showOnlyText:e=!1})=>i.a.createElement(h,{render:t=>{const n={pathname:`/order/create/${t?t.phone:""}`,state:{eventId:t?t.eventId:null}};return i.a.createElement(o.b,{to:n},i.a.createElement(d.a,{text:c.d._("Create order"),iconName:e?void 0:"add_circle",color:s.a.turquoise,badge:t&&t.isRinging?i.a.createElement(l.a,null,i.a.createElement(r.d,null)):null}))}})},7737:function(e,t,n){e.exports=n(7738)},7738:function(e,t,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(7739),a)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(o){r.regeneratorRuntime=void 0}},7739:function(e,t){!function(t){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",d="object"===typeof e,s=t.regeneratorRuntime;if(s)d&&(e.exports=s);else{(s=t.regeneratorRuntime=d?e.exports:{}).wrap=k;var u="suspendedStart",m="suspendedYield",p="executing",h="completed",f={},v={};v[o]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(D([])));y&&y!==r&&a.call(y,o)&&(v=y);var b=w.prototype=O.prototype=Object.create(v);C.prototype=b.constructor=w,w.constructor=C,w[c]=C.displayName="GeneratorFunction",s.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(b),e},s.awrap=function(e){return{__await:e}},S(N.prototype),N.prototype[l]=function(){return this},s.AsyncIterator=N,s.async=function(e,t,n,r){var a=new N(k(e,t,n,r));return s.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},s.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=D,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return l.type="throw",l.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),d=a.call(o,"finallyLoc");if(c&&d){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:D(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),f}}}function k(e,t,n,r){var a=t&&t.prototype instanceof O?t:O,i=Object.create(a.prototype),o=new P(r||[]);return i._invoke=function(e,t,n){var r=u;return function(a,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw i;return L()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var l=I(o,n);if(l){if(l===f)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=E(e,t,n);if("normal"===c.type){if(r=n.done?h:m,c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,o),i}function E(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}function O(){}function C(){}function w(){}function S(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function N(e){var t;this._invoke=function(n,r){function i(){return new Promise(function(t,i){!function t(n,r,i,o){var l=E(e[n],e,r);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"===typeof d&&a.call(d,"__await")?Promise.resolve(d.__await).then(function(e){t("next",e,i,o)},function(e){t("throw",e,i,o)}):Promise.resolve(d).then(function(e){c.value=e,i(c)},function(e){return t("throw",e,i,o)})}o(l.arg)}(n,r,t,i)})}return t=t?t.then(i,i):i()}}function I(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,I(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=E(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function D(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},7908:function(e,t,n){e.exports=n.p+"static/media/orderNotification.0aa2ebe9.mp3"},7926:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),o=n(126),l=n(71),c=n(263),d=n(7493),s=n(38),u=n(267),m=n(7502),p=n(50);const h=()=>{const e=Object(p.d)();return Object(r.useEffect)(()=>()=>e.createOrder.cancelOrder(),[]),a.a.createElement(i.a,{message:s.d._("Do you really want to cancel order?"),when:e.createOrder.hasOrder})};var f=n(83),v=n(7492),g=n(7537),y=n(7512),b=n(7520),k=n(3),E=n.n(k);const O=E.a`
  mutation MAcceptOrder(
    $orderId: ID!
    $customer: InputCustomerCreate!
    $note: String
  ) {
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
      order {
        id
      }
    }
  }
`;var C=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};var w=n(6);const S=E.a`
  mutation MUpdateOrder(
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
`;const N=({callingPhone:e,callingEventId:t,children:n})=>{const{createOrder:i}=Object(p.d)();Object(r.useEffect)(()=>{e&&i.userIsCalling(e,t)},[e,t]),function(){const{createOrder:e}=Object(p.d)(),t=Object(g.a)(S);Object(f.f)(()=>Object(w.i)(()=>{e.orderId&&t({orderId:e.orderId,deliveryType:e.deliveryType,gps:e.gps})}))}();const{onSubmit:o,onSubmitFailure:l}=function(){const{createOrder:e}=Object(p.d)(),{enqueueSuccess:t,enqueueError:n}=Object(b.a)(),{history:r}=Object(y.a)(),a=Object(g.a)(O,{getUserErrors:e=>e.finishOrder.userErrors,refetchQueries:["GOrderCart"]});return{onSubmit:()=>C(this,void 0,void 0,function*(){const n=yield a(e.acceptOrderVariables);n&&0===n.finishOrder.userErrors.length&&n.finishOrder.order.id===e.orderId&&(e.resetModel(),r.replace("/order"),t(s.d._("Order has been accepted")))}),onSubmitFailure:e=>{Object.values(e).forEach(n)}}}();return Object(f.g)(()=>a.a.createElement(v.Form,{values:i.formValues,onSubmit:o,onSubmitFailure:l,onChange:e=>i.updateFormValues(e.values,e.touched)},n))};var I=n(260),j=n(10);const x=Object(v.withFormApi)(({formApi:e})=>{const{createOrder:t}=Object(p.d)();return Object(f.g)(()=>a.a.createElement(I.a,{color:j.a.green,text:s.d._("Accept order"),disabled:!t.hasOrder||e.submitting,onClick:e.submitForm}))}),P=e=>a.a.createElement(i.c,null,({history:e})=>a.a.createElement(I.a,{color:j.a.red,text:s.d._("Cancel order"),onClick:()=>{e.goBack()}}));var D=n(81);function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=n(7737),T=n.n(F);function $(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n){return t&&M(e.prototype,t),n&&M(e,n),e}function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e){return(W="function"===typeof Symbol&&"symbol"===A(Symbol.iterator)?function(e){return A(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":A(e)})(e)}function V(e,t){return!t||"object"!==W(t)&&"function"!==typeof t?L(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}var U=n(79),H=n.n(U),Q=n(7528),Y=n(8),K=n.n(Y),Z=n(439);var J,X="__EMOTION_THEMING__",ee=((J={})[X]=K.a.object,J);var te=Z.a,ne=function(e){return"theme"!==e&&"innerRef"!==e},re=function(){return!0},ae=function(e,t){for(var n=2,r=arguments.length;n<r;n++){var a=arguments[n],i=void 0;for(i in a)e(i)&&(t[i]=a[i])}return t};var ie=function(e,t){var n=function(r,a){var i,o,l,c;void 0!==a&&(i=a.e,o=a.label,l=a.target,c=r.__emotion_forwardProp&&a.shouldForwardProp?function(e){return r.__emotion_forwardProp(e)&&a.shouldForwardProp(e)}:a.shouldForwardProp);var d=r.__emotion_real===r,s=void 0===i&&d&&r.__emotion_base||r;return"function"!==typeof c&&(c="string"===typeof s&&s.charAt(0)===s.charAt(0).toLowerCase()?te:ne),function(){var u=arguments,m=d&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==o&&m.push("label:"+o+";"),void 0===i)if(null==u[0]||void 0===u[0].raw)m.push.apply(m,u);else{m.push(u[0][0]);for(var p=u.length,h=1;h<p;h++)m.push(u[h],u[0][h])}var f=function(n){var r,a;function o(){return n.apply(this,arguments)||this}a=n,(r=o).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var d=o.prototype;return d.componentWillMount=function(){void 0!==this.context[X]&&(this.unsubscribe=this.context[X].subscribe(function(e){this.setState({theme:e})}.bind(this)))},d.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[X].unsubscribe(this.unsubscribe)},d.render=function(){var n=this.props,r=this.state;this.mergedProps=ae(re,{},n,{theme:null!==r&&r.theme||n.theme||{}});var a="",o=[];return n.className&&(a+=void 0===i?e.getRegisteredStyles(o,n.className):n.className+" "),a+=void 0===i?e.css.apply(this,m.concat(o)):i,void 0!==l&&(a+=" "+l),t.createElement(s,ae(c,{},n,{className:a,ref:n.innerRef}))},o}(t.Component);return f.displayName=void 0!==o?o:"Styled("+("string"===typeof s?s:s.displayName||s.name||"Component")+")",void 0!==r.defaultProps&&(f.defaultProps=r.defaultProps),f.contextTypes=ee,f.__emotion_styles=m,f.__emotion_base=s,f.__emotion_real=f,f.__emotion_forwardProp=c,Object.defineProperty(f,"toString",{value:function(){return"."+l}}),f.withComponent=function(e,t){return n(e,void 0!==t?ae(re,{},a,t):a).apply(void 0,m)},f}};return n}(Q,a.a),oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var ce=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return i.state={},i.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},i.elements={},i.onResize=i.onResize.bind(i),i.onTruncate=i.onTruncate.bind(i),i.calcTargetWidth=i.calcTargetWidth.bind(i),i.measureWidth=i.measureWidth.bind(i),i.getLines=i.getLines.bind(i),i.renderLine=i.renderLine.bind(i),i}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),le(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,r=document.createElement("canvas");this.canvasContext=r.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var r=t[n],a=document.createElement("div");return a.innerHTML="foo<br/>bar","foo\nbar"!==a[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),r=t[n]),r}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"===typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,r=this.canvasContext,a=this.props.width;if(t){var i=a||Math.floor(t.parentNode.getBoundingClientRect().width);if(!i)return window.requestAnimationFrame(function(){return n(e)});var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");r.font=l,this.setState({targetWidth:i},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,r=t.ellipsis,i=t.trimWhitespace,o=this.state.targetWidth,l=this.innerText,c=this.measureWidth,d=this.onTruncate,s=this.trimRight,u=[],m=l(e.text).split("\n").map(function(e){return e.split(" ")}),p=!0,h=this.ellipsisWidth(this.elements.ellipsis),f=1;f<=n;f++){var v=m[0];if(0!==v.length){var g=v.join(" ");if(c(g)<=o&&1===m.length){p=!1,u.push(g);break}if(f===n){for(var y=v.join(" "),b=0,k=y.length-1;b<=k;){var E=Math.floor((b+k)/2);c(y.slice(0,E+1))+h<=o?b=E+1:k=E-1}var O=y.slice(0,b);if(i)for(O=s(O);!O.length&&u.length;){O=s(u.pop())}g=a.a.createElement("span",null,O,r)}else{for(var C=0,w=v.length-1;C<=w;){var S=Math.floor((C+w)/2);c(v.slice(0,S+1).join(" "))<=o?C=S+1:w=S-1}if(0===C){f=n-1;continue}g=v.slice(0,C).join(" "),m[0].splice(0,C)}u.push(g)}else u.push(),m.shift(),f--}return d(p),u}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return a.a.createElement("span",{key:t},e);var r=a.a.createElement("br",{key:t+"br"});return e?[a.a.createElement("span",{key:t},e),r]:r}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,r=n.children,i=n.ellipsis,o=n.lines,l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["children","ellipsis","lines"]),c=this.state.targetWidth,d=this.getLines,s=this.renderLine,u=this.onTruncate,m=void 0;return"undefined"!==typeof window&&!(!t||!c)&&(o>0?m=d().map(s):(m=r,u(!1))),delete l.onTruncate,delete l.trimWhitespace,a.a.createElement("span",oe({},l,{ref:function(t){e.elements.target=t}}),a.a.createElement("span",null,m),a.a.createElement("span",{ref:function(t){e.elements.text=t}},r),a.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}();ce.propTypes={children:K.a.node,ellipsis:K.a.node,lines:K.a.oneOfType([K.a.oneOf([!1]),K.a.number]),trimWhitespace:K.a.bool,width:K.a.number,onTruncate:K.a.func},ce.defaultProps={children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0};var de=ce,se=n(129);function ue(){var e=R(["\n  font-size: 0.8rem;\n  margin-top: 0.2rem;\n"]);return ue=function(){return e},e}function me(){var e=R(["\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2rem;\n  width: 2.6rem;\n  height: 2.6rem;\n  margin: 0 auto;\n  padding: 0;\n\n  span:before,\n  span::after {\n    margin: 0;\n    padding: 0;\n    font-size: 1.7rem;\n  }\n"]);return me=function(){return e},e}function pe(){var e=R(["\n  text-align: center;\n  display: inline-block;\n  max-width: 5rem;\n  cursor: pointer;\n  margin: 0.2rem;\n"]);return pe=function(){return e},e}function he(){var e=R(["\n  padding: 0.7rem 0.5rem 0 0.2rem;\n  display: flex;\n  top: 0;\n  z-index: 1;\n  user-select: none;\n  flex-wrap: wrap;\n"]);return he=function(){return e},e}var fe=function(e){function t(){var e;return _(this,t),(e=V(this,B(t).apply(this,arguments))).state={list:[]},e.renderRow=function(t){var n=t.index,r=t.style,i=e.props,o=i.formatCategory,l=i.formatRecipe,c=i.onRecipeClick,d=e.state.list[n],s=d.recipe,u=d.category;return s?a.a.createElement("div",{key:"recipe-".concat(s.id,"-").concat(u.id),style:r,onClick:function(){return c(s)}},l(s)):a.a.createElement("div",{key:"category-".concat(u.id),style:r},o(u))},e}return z(t,a.a.Component),G(t,[{key:"render",value:function(){return this.props.children({listItems:this.state.list,rowRenderer:this.renderRow})}}],[{key:"getDerivedStateFromProps",value:function(e){var t=Boolean(e.formatCategory);return{list:e.recipeCategories.reduce(function(e,n){return 0===n.recipes.length?e:(t&&e.push({category:n}),e.concat(n.recipes.map(function(e){return{category:n,recipe:e}})))},[])}}}]),t}();fe.defaultProps={formatRecipe:function(e){return e.nameLabel},formatCategory:function(e){return e.nameLabel}};var ve=ie("div")(he()),ge=ie("div")(pe()),ye=ie("div")(me()),be=ie("div")(ue()),ke=function(e){function t(){var e;return _(this,t),(e=V(this,B(t).apply(this,arguments))).renderCategory=function(t){var n=e.props.onClick;return a.a.createElement(ge,{key:t.id,onClick:function(){return n(t.id)}},a.a.createElement(ye,null,a.a.createElement("span",{className:"flaticon-".concat(t.pictogram)})),a.a.createElement(be,null,a.a.createElement(de,{lines:2},t.nameLabel)))},e}return z(t,a.a.Component),G(t,[{key:"render",value:function(){return a.a.createElement(ve,null,this.props.categories.map(this.renderCategory))}}]),t}();function Ee(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})}ke.defaultProps={onClick:H.a.noop};var Oe={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GPrice"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PriceConverted"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"value"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"formattedValue"},arguments:[],directives:[],selectionSet:void 0}]}}],loc:{start:0,end:72,source:{body:"\n  fragment GPrice on PriceConverted {\n    value\n    formattedValue\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Ce={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GCartItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OrderRecipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipe"},directives:[]}]}}]}}].concat({kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GRecipe"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Recipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"code"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0}]}}],loc:{start:0,end:66,source:{body:"\n  fragment GRecipe on Recipe {\n    id\n    code\n    nameLabel\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}}.definitions),loc:{start:0,end:123,source:{body:"\n  fragment GCartItem on OrderRecipe {\n    id\n    price {\n      ...GPrice\n    }\n    recipe {\n      ...GRecipe\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},we={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GOrder"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Order"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"countWares"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GCartItem"},directives:[]},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"sidedishCount"},name:{kind:"Name",value:"sideDishesWareCategoriesCount"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:{kind:"Name",value:"priceWithSidedishes"},name:{kind:"Name",value:"priceWithSideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"sidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GCartItem"},directives:[]}]}}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"coverPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"transportFee"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"discounts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"code"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"description"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"totalDiscount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"totalSum"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}}].concat(Ce.definitions,Oe.definitions),loc:{start:0,end:560,source:{body:"\n  fragment GOrder on Order {\n    id\n    countWares\n    items {\n      ...GCartItem\n      recipe {\n        sidedishCount: sideDishesWareCategoriesCount\n      }\n      priceWithSidedishes: priceWithSideDishes {\n        ...GPrice\n      }\n      sidedishes: sideDishes {\n        ...GCartItem\n      }\n    }\n    coverPrice {\n      ...GPrice\n    }\n    transportFee {\n      ...GPrice\n    }\n    discounts {\n      code\n      description\n      price {\n        ...GPrice\n      }\n    }\n    totalDiscount {\n      ...GPrice\n    }\n    totalSum {\n      ...GPrice\n    }\n  }\n  \n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Se={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MAddToOrder"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"recipeId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"createOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderRecipe"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"order"},value:{kind:"Variable",name:{kind:"Name",value:"orderId"}}},{kind:"ObjectField",name:{kind:"Name",value:"recipe"},value:{kind:"Variable",name:{kind:"Name",value:"recipeId"}}},{kind:"ObjectField",name:{kind:"Name",value:"sideDishes"},value:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(we.definitions),loc:{start:0,end:248,source:{body:"\n  mutation MAddToOrder($orderId: ID!, $recipeId: ID!, $sidedishes: [ID!]) {\n    createOrderRecipe(\n      orderRecipe: {\n        order: $orderId\n        recipe: $recipeId\n        sideDishes: $sidedishes\n      }\n    ) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Ne={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MChangeOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"updateOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}},{kind:"Argument",name:{kind:"Name",value:"orderRecipe"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"sideDishes"},value:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(we.definitions),loc:{start:0,end:173,source:{body:"\n  mutation MChangeOrderItem($itemId: ID!, $sidedishes: [ID!]) {\n    updateOrderRecipe(id: $itemId, orderRecipe: { sideDishes: $sidedishes }) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Ie={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MRemoveOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"destroyOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(we.definitions),loc:{start:0,end:112,source:{body:"\n  mutation MRemoveOrderItem($itemId: ID!) {\n    destroyOrderRecipe(id: $itemId) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},je={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GOrderCart"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"order"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"orderId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(we.definitions),loc:{start:0,end:92,source:{body:"\n  query GOrderCart($orderId: ID!) {\n    order(id: $orderId) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},xe={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GRecipeSidedishes"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Recipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:{kind:"Name",value:"sidedishCategories"},name:{kind:"Name",value:"sideDishesWareCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"minCount"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"maxCount"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:{kind:"Name",value:"sidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}}]}}]}}].concat(Oe.definitions),loc:{start:0,end:296,source:{body:"\n  fragment GRecipeSidedishes on Recipe {\n    id\n    nameLabel\n    sidedishCategories: sideDishesWareCategories {\n      id\n      nameLabel\n      minCount\n      maxCount\n      sidedishes: sideDishes {\n        id\n        nameLabel\n        price {\n          ...GPrice\n        }\n      }\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Pe={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GSidedishesForRecipe"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"recipeId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"recipeId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipeSidedishes"},directives:[]}]}}]}}].concat(xe.definitions),loc:{start:0,end:116,source:{body:"\n  query GSidedishesForRecipe($recipeId: ID!) {\n    recipe(id: $recipeId) {\n      ...GRecipeSidedishes\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},De={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GSidedishesForOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"orderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipeSidedishes"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"selectedSidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}]}}].concat(xe.definitions),loc:{start:0,end:258,source:{body:"\n  query GSidedishesForOrderItem($itemId: ID!) {\n    item: orderRecipe(id: $itemId) {\n      id\n      recipe {\n        ...GRecipeSidedishes\n      }\n      selectedSidedishes: sideDishes {\n        id\n        recipe {\n          id\n        }\n      }\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Le=function(){return{recipe:void 0,selection:[],resolve:H.a.noop}},Fe=function(e){function t(){var e;return _(this,t),(e=V(this,B(t).apply(this,arguments))).state=Le(),e.isSidedishSelected=function(t){return e.state.selection.includes(t)},e.onSidedishToggle=function(t){var n=e.state.selection;n=n.includes(t)?n.filter(function(e){return e!==t}):n.concat(t),e.setState({selection:n})},e.onConfirm=function(){e.state.resolve({sidedishes:$(e.state.selection),isConfirmed:!0}),e.setState(Le)},e.onCancel=function(){e.state.resolve({sidedishes:[],isConfirmed:!1}),e.setState(Le)},e}return z(t,a.a.Component),G(t,[{key:"selectForRecipe",value:function(e){var t=this;return new Promise(function(n){return Ee(t,void 0,void 0,T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.apolloClient.query({query:Pe,variables:{recipeId:e}});case 2:r=t.sent,this.setState({recipe:r.data.recipe,resolve:n});case 4:case"end":return t.stop()}},t,this)}))})}},{key:"selectForItem",value:function(e){var t=this;return new Promise(function(n){return Ee(t,void 0,void 0,T.a.mark(function t(){var r,a;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.apolloClient.query({query:De,variables:{itemId:e}});case 2:r=t.sent,a=r.data.item,this.setState({recipe:a.recipe,resolve:n,selection:a.selectedSidedishes.map(function(e){return e.recipe.id})});case 5:case"end":return t.stop()}},t,this)}))})}},{key:"render",value:function(){var e=this.state.recipe;return e?a.a.createElement(this.props.component,{recipe:e,isSidedishSelected:this.isSidedishSelected,onSidedishToggle:this.onSidedishToggle,onConfirm:this.onConfirm,onCancel:this.onCancel}):null}}]),t}(),Te=function(e){function t(){var e;return _(this,t),(e=V(this,B(t).apply(this,arguments))).sidedishControl=a.a.createRef(),e.onRecipeClick=function(t){return Ee(L(L(e)),void 0,void 0,T.a.mark(function e(){var n,r,a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:if(n=e.sent,!(t.sidedishCount>0)){e.next=12;break}return e.next=6,this.sidedishControl.current.selectForRecipe(t.id);case 6:r=e.sent,a=r.sidedishes,r.isConfirmed&&this.addRecipeToOrder(n,t.id,a),e.next=13;break;case 12:this.addRecipeToOrder(n,t.id);case 13:case"end":return e.stop()}},e,this)}))},e.onItemEdit=function(t){return Ee(L(L(e)),void 0,void 0,T.a.mark(function e(){var n,r,a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:return n=e.sent,e.next=5,this.sidedishControl.current.selectForItem(t);case 5:r=e.sent,a=r.sidedishes,r.isConfirmed&&this.updateOrderItemSidedishes(n,t,a);case 9:case"end":return e.stop()}},e,this)}))},e.onItemRemove=function(t){return Ee(L(L(e)),void 0,void 0,T.a.mark(function e(){var n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:n=e.sent,this.removeOrderItem(n,t);case 4:case"end":return e.stop()}},e,this)}))},e}return z(t,a.a.Component),G(t,[{key:"addRecipeToOrder",value:function(e,t,n){return Ee(this,void 0,void 0,T.a.mark(function r(){var a;return T.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a={orderId:e,recipeId:t,sidedishes:n},r.next=3,this.props.apolloClient.mutate({mutation:Se,variables:a,refetchQueries:[{query:je,variables:{orderId:e}}]});case 3:case"end":return r.stop()}},r,this)}))}},{key:"updateOrderItemSidedishes",value:function(e,t,n){return Ee(this,void 0,void 0,T.a.mark(function r(){var a;return T.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a={itemId:t,sidedishes:n},r.next=3,this.props.apolloClient.mutate({mutation:Ne,variables:a,refetchQueries:[{query:je,variables:{orderId:e}}]});case 3:case"end":return r.stop()}},r,this)}))}},{key:"removeOrderItem",value:function(e,t){return Ee(this,void 0,void 0,T.a.mark(function n(){var r;return T.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r={itemId:t},n.next=3,this.props.apolloClient.mutate({mutation:Ie,variables:r,refetchQueries:[{query:je,variables:{orderId:e}}]});case 3:case"end":return n.stop()}},n,this)}))}},{key:"render",value:function(){var e=this.onRecipeClick,t=this.onItemEdit,n=this.onItemRemove,r=this.props,i=r.children,o=r.apolloClient,l=r.sidedishPickerComponent;return a.a.createElement(a.a.Fragment,null,i({onRecipeClick:e,onItemEdit:t,onItemRemove:n}),a.a.createElement(Fe,{ref:this.sidedishControl,component:l,apolloClient:o}))}}]),t}(),$e=function(e){var t=e.orderId,n=e.renderLoading,r=e.renderError,i=e.renderEmpty,o=e.render;return t?a.a.createElement(se.Query,{query:je,variables:{orderId:t},fetchPolicy:"cache-and-network"},function(e){var t=e.data,a=e.error;if(e.loading)return n?n():null;if(a)return console.error(a),r?r(a):null;var l=t.order;return 0===l.countWares?i():o(l)}):i()},Re=function(e){var t=e.recipe,n=e.formatCategory,r=e.formatSidedish;return a.a.createElement("div",null,t.sidedishCategories.map(function(e){return a.a.createElement("div",{key:e.id},n(e),e.sidedishes.map(function(t){return a.a.createElement("span",{key:"".concat(t.id,"-").concat(e.id)},r(t))}))}))},_e=n(13),Me=n(270),Ge=n(7507),Ae=n(266);const We=_e.b.div.withConfig({displayName:"SidedishButtonContainer"})`
  margin: 0 1rem 1rem 0;
  width: 8rem;
  display: inline-block;
`,Ve=({label:e,isSelected:t,onClick:n})=>a.a.createElement(We,null,a.a.createElement(I.a,{text:e,onClick:n,color:t?j.a.orange:j.a.greyDark})),Be=_e.b.div.withConfig({displayName:"SidedishCategory"})`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0 0 0.2rem 0.2rem;
  color: ${j.a.black};
`,qe=e=>a.a.createElement(Ae.b,{open:!0,onClose:e.onCancel,scroll:"paper",maxWidth:"lg"},a.a.createElement(Ae.e,null,e.recipe?a.a.createElement(D.Trans,{id:"Add something else to {0}?",values:{0:e.recipe.nameLabel}}):a.a.createElement(D.Trans,{id:"Loading sidedishes..."})),e.recipe&&a.a.createElement(Ae.d,null,a.a.createElement(Re,{recipe:e.recipe,formatCategory:e=>a.a.createElement(Be,null,e.nameLabel),formatSidedish:t=>a.a.createElement(Ve,{label:t.nameLabel,isSelected:e.isSidedishSelected(t.id),onClick:()=>e.onSidedishToggle(t.id)})})),e.recipe&&a.a.createElement(Ae.c,null,a.a.createElement(I.a,{text:s.d._("Cancel"),onClick:e.onCancel}),a.a.createElement(I.a,{text:s.d._("Confirm"),onClick:e.onConfirm,color:j.a.green}))),ze=({children:e})=>{const{createOrder:t}=Object(p.d)();return a.a.createElement(Te,{apolloClient:t.client,getOrderId:t.ensureOrder,sidedishPickerComponent:qe},e)};var Ue=n(7529),He=n(7514);const Qe=_e.b.div.withConfig({displayName:"Container"})`
  display: flex;
  justify-content: space-between;
`,Ye=_e.b.div.withConfig({displayName:"RecipeCode"})`
  flex: 0 0 5rem;
  text-align: right;
`,Ke=_e.b.div.withConfig({displayName:"RecipeName"})`
  flex: 1 0;
  padding-left: 1rem;
`,Ze=_e.b.div.withConfig({displayName:"PriceToRight"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${j.a.greyMiddle};
`,Je=({code:e,label:t,price:n})=>a.a.createElement(Qe,null,a.a.createElement(Ye,null,e),a.a.createElement(Ke,null,t),a.a.createElement(Ze,null,a.a.createElement(He.a,{price:n}))),Xe=_e.b.div.withConfig({displayName:"OrderCartItemStyled"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${j.a.greyMiddle};
  padding: 0.1rem 0;
`,et=_e.b.div.withConfig({displayName:"TouchButtonColumn"})`
  flex: 0 0 auto;
  padding-right: 0.5rem;
`,tt=_e.b.div.withConfig({displayName:"LineColumn"})`
  flex: 1 1 0;
`,nt=({item:e,onRemove:t,onEdit:n})=>a.a.createElement(Xe,null,a.a.createElement(et,null,a.a.createElement(Ue.a,{onDelete:t})),a.a.createElement(et,null,a.a.createElement(I.a,{onClick:n,iconName:"mode_edit",width:j.c.ButtonHeight,height:j.c.ButtonHeight})),a.a.createElement(tt,null,a.a.createElement(Je,{key:e.id,code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),e.sidedishes.map(e=>a.a.createElement(Je,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value})))),rt=_e.b.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`,at=({order:e})=>a.a.createElement(rt,null,a.a.createElement("b",null,a.a.createElement(Je,{label:s.d._("Total price"),price:e.totalSum.value})),a.a.createElement(Je,{label:s.d._("Transport fee"),price:e.transportFee.value}),a.a.createElement(Je,{label:s.d._("Covers price"),price:e.coverPrice.value}),a.a.createElement(Je,{label:s.d._("Discount total"),price:-1*e.totalDiscount.value})),it=_e.b.div.withConfig({displayName:"CartStyled"})`
  margin: 0.1rem 0.1rem 0.1rem 0;
`,ot=_e.b.div.withConfig({displayName:"EmptyCartStyled"})`
  margin: 0.5rem 0 0 0;
`,lt=e=>{const{createOrder:t}=Object(p.d)(),n=Object(r.useRef)(void 0);return a.a.createElement(ze,null,({onItemRemove:e,onItemEdit:r})=>a.a.createElement(f.a,null,()=>a.a.createElement($e,{key:t.cartRefreshKey,orderId:t.orderId,renderEmpty:()=>a.a.createElement(ot,null,a.a.createElement(D.Trans,{id:"Cart is empty"})),renderLoading:()=>n.current||a.a.createElement(Me.a,null),render:t=>{const i=a.a.createElement(it,null,a.a.createElement(at,{order:t}),a.a.createElement(Ge.a,null),t.items.map(t=>a.a.createElement(nt,{key:t.id,item:t,onEdit:()=>r(t.id),onRemove:()=>e(t.id)})));return n.current=i,i}})))};var ct=n(7494);function dt(){return(dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var st=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};const ut=Object(_e.b)(v.TextArea).withConfig({displayName:"FormInputTextBoxMultilineStyled"})`
  padding: 0.5rem;
  border-radius: ${j.b.TextComponent};
  outline: none;
  resize: none;
  overflow: auto;
  margin: ${j.c.MarginAroundFormComponents};
  width: ${({width:e})=>e};
`,mt=e=>{var{field:t,defaultValue:n,inputWidth:r=j.c.DefaultInputWidth,inputWidthUnit:i=j.c.DefaultSizeUnit,children:o}=e,l=st(e,["field","defaultValue","inputWidth","inputWidthUnit","children"]);return t?a.a.createElement(ut,dt({field:t,defaultValue:n,width:`${r}${i}`},l)):a.a.createElement(ct.a,l)};var pt=n(7508),ht=n(51);const ft=e=>null;var vt=n(7525);const gt=e=>a.a.createElement(ht.a,{render:({user:e,createOrder:t})=>a.a.createElement(vt.a,{isClearable:!1,selectedBranches:e.currentBranchId?[e.currentBranchId]:[],onSelectionChange:([n])=>{t.orderId&&!window.confirm(s.d._("Changing branch will cancel current order and remove all items from the cart. Proceed?"))||(e.selectBranch(n),t.resetOrder())}})});var yt=n(125),bt=(n(205),n(7521));const kt=E.a`
  query GOrderVam($branchId: ID!, $phone: String!) {
    vamCustomer: vamInformation(companyBranchId: $branchId, phone: $phone) {
      isFound
      email
      firstName
      lastName
      lastOrder {
        note
      }
      locations {
        street
        houseNumber
        city
        gps {
          latitude
          longitude
        }
      }
    }
  }
`;var Et=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};const Ot=Object(_e.b)(yt.h).withConfig({displayName:"ErrorIcon"})`
  font-size: 1rem;
  color: ${j.a.orange};
`,Ct=Object(_e.b)(yt.c).withConfig({displayName:"NotFoundIcon"})`
  font-size: 1rem;
  color: ${j.a.greyMiddle};
`,wt=Object(_e.b)(yt.b).withConfig({displayName:"FoundIcon"})`
  font-size: 1rem;
  color: ${j.a.green};
`,St=Object(bt.a)(kt),Nt=()=>{const{createOrder:e}=Object(p.d)(),[t,n]=Object(r.useState)(null),{execute:i}=St({fetchPolicy:"no-cache"});return Object(f.d)(()=>Object(w.i)(()=>{!function(t,r){Et(this,void 0,void 0,function*(){if(e.updateFromVam(null),!function(e){return Boolean(e&&e.length>6)}(r))return n(null);n(a.a.createElement(Ae.a,{size:20}));const o=yield i({branchId:t,phone:r});if(o.hasAnyError)return n(a.a.createElement(Ot,null));if(o.data){const{vamCustomer:t}=o.data;if(t.isFound)return e.updateFromVam(t),n(a.a.createElement(wt,null))}n(a.a.createElement(Ct,null))})}(e.branchId,e.phone)})),t};var It=n(7503),jt=n(7500),xt=n(168),Pt=n(16),Dt=n(7580),Lt=n(36);const Ft=E.a`
  query GAddressSuggest($search: String!) {
    suggest: suggestGeolocation(address: $search) {
      state
      city
      street
      houseNumber
      gps {
        ...GGeoPoint
      }
    }
  }
  ${Lt.e}
`;var Tt=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};const $t=Object(bt.a)(Ft),Rt=e=>e.filter(Pt.a.propSatisfies(Boolean,"gps")),_t=({onSelect:e,onClear:t,fixedLocations:n,fixedLocationsLabel:r,selectedLocation:i,minSearchLength:o=3,inputPlaceholder:l})=>{const c=Object(f.e)({options:[],isSearching:!1}),{execute:d}=$t(),u=Object(Dt.a)(e=>Tt(void 0,void 0,void 0,function*(){c.isSearching=!0;const t=e.trim();if(t.length<o)return c.options=[],void(c.isSearching=!1);const n=yield d({search:t});n.data&&(c.options=Rt(n.data.suggest)),c.isSearching=!1}));return Object(f.g)(()=>a.a.createElement(jt.a,{styles:Object(jt.b)({control:e=>Object.assign({},e,{width:"20rem"})}),getOptionLabel:xt.a,options:(()=>n&&0!==n.length?[{label:r,options:[...Rt(n)]},{label:s.d._("Matching to input"),options:c.options}]:c.options)(),placeholder:l,value:i,filterOption:Pt.a.T,isClearable:!0,isLoading:c.isSearching,onInputChange:e=>{u(e)},onChange:n=>{n&&!Array.isArray(n)?e(n):t()}}))},Mt=Object(_e.b)(It.a).withConfig({displayName:"InputLine"})`
  justify-content: flex-start;
`,Gt=_e.b.div.withConfig({displayName:"ZoneWarning"})`
  display: inline-flex;
  align-items: center;
  color: ${j.a.violet};
`,At=Object(_e.b)(yt.b).withConfig({displayName:"AddressValid"})`
  font-size: 1rem;
  color: ${j.a.green};
`;function Wt(e){const{createOrder:t}=Object(p.d)(),n=Object(f.c)(()=>{if(!t.vamCustomer)return t.fakeAddress?[t.fakeAddress]:[];const{locations:e}=t.vamCustomer;return e}),i=Object(r.useCallback)(e=>{t.useLocation(e)},[]),o=Object(f.c)(()=>t.notDeliveryLocation?a.a.createElement(Gt,null,a.a.createElement(yt.g,null),a.a.createElement(D.Trans,{id:"Address is not within any delivery zone"})):t.hasAddress?a.a.createElement(At,null):null);return Object(f.g)(()=>a.a.createElement("div",{hidden:!e.isVisible},a.a.createElement(Mt,null,a.a.createElement(_t,{fixedLocations:n,fixedLocationsLabel:s.d._("Previous addresses"),selectedLocation:t.deliveryAddress||t.fakeAddress||null,onSelect:i,onClear:t.clearLocation,inputPlaceholder:s.d._("Deliver to address").toLocaleLowerCase()}),o)))}var Vt=n(7547),Bt=n(67);const qt=[{type:Bt.a.MESSENGER,label:Object(D.i18nMark)("Deliver")},{type:Bt.a.PICKUP,label:Object(D.i18nMark)("Personal pickup")}];function zt({field:e}){return a.a.createElement(Vt.a,{field:e,items:qt,formatItem:e=>s.d._(e.label),getItemId:e=>e.type})}const Ut=E.a`
  query GOrderPromo($branchId: ID!) {
    promoCodes(promoCode: { companyBranch: $branchId, enabled: true }) {
      id
      code
    }
  }
`,Ht=E.a`
  mutation MAddOrderPromo($orderId: ID!, $code: String!) {
    addOrderPromoCode(order: $orderId, promoCode: $code) {
      userErrors: errors
    }
  }
`,Qt=E.a`
  mutation MRemoveOrderPromo($orderId: ID!, $codeId: ID!) {
    removeOrderPromoCode(order: $orderId, promoCode: $codeId) {
      id
    }
  }
`;var Yt=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};const Kt=Object(bt.a)(Ut),Zt=()=>{const{createOrder:e}=Object(p.d)(),{result:t,execute:n}=Kt(),i=function(){const{createOrder:e}=Object(p.d)(),t=Object(r.useRef)(w.v.map()).current,n=Object(g.a)(Ht,{refetchQueries:["GOrderCart"],getUserErrors:e=>e.addOrderPromoCode.userErrors}),a=Object(r.useCallback)(r=>Yt(this,void 0,void 0,function*(){const a=yield n({orderId:e.orderId,code:r.code});a&&a.addOrderPromoCode.userErrors.length&&t.delete(r.id)}),[]),i=Object(g.a)(Qt,{refetchQueries:["GOrderCart"]});return Object(f.d)(()=>t.observe(t=>{null!==e.orderId&&("add"===t.type&&a(t.newValue),"delete"===t.type&&i({orderId:e.orderId,codeId:t.oldValue.id}))})),Object(f.d)(()=>Object(w.D)(()=>null!==e.orderId,()=>{t.forEach(a)})),t}();return Object(f.d)(()=>Object(w.i)(()=>{n({branchId:e.branchId})})),t.hasAnyError?a.a.createElement(D.Trans,{id:"Failed retrieving available promo codes"}):Object(f.g)(()=>a.a.createElement(jt.a,{options:t.data?t.data.promoCodes:[],isLoading:t.loading,isMulti:!0,isClearable:!0,getOptionValue:Pt.a.prop("id"),getOptionLabel:Pt.a.prop("code"),placeholder:s.d._("Promo codes").toLocaleLowerCase(),noOptionsMessage:()=>s.d._("No promo codes available"),value:Array.from(i.values()),onChange:e=>{Array.isArray(e)?i.replace(e.map(e=>[e.id,e])):i.clear()}}))},Jt=_e.b.div.withConfig({displayName:"LookupResultIcon"})`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.7rem;
`,Xt=()=>{const{createOrder:e}=Object(p.d)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{icon:"phone"},a.a.createElement(f.a,null,()=>a.a.createElement(ct.b,{field:"phone",isRequired:e.isDelivery,inputWidth:9,validatioName:s.d._("Phone"),validationMessage:s.d._("Phone number is required"),placeholder:s.d._("Phone").toLocaleLowerCase()})),a.a.createElement(Jt,null,a.a.createElement(Nt,null))),a.a.createElement(f.a,null,()=>a.a.createElement(d.a,{icon:"streetview"},a.a.createElement(zt,{field:"deliveryType"}),a.a.createElement(Wt,{isVisible:e.isDelivery}))),a.a.createElement(d.a,{icon:"store"},a.a.createElement(gt,null)),a.a.createElement(pt.a,null),a.a.createElement(d.a,{icon:"person"},a.a.createElement(ct.b,{field:"firstName",inputWidth:6,placeholder:s.d._("First name").toLocaleLowerCase()}),a.a.createElement(ct.b,{field:"lastName",inputWidth:12.7,placeholder:s.d._("Last name").toLocaleLowerCase()})),a.a.createElement(d.a,{icon:"mail_outline"},a.a.createElement(ct.b,{field:"email",inputWidth:20,placeholder:s.d._("E-mail").toLocaleLowerCase()})),a.a.createElement(d.a,{icon:"note"},a.a.createElement(mt,{field:"note",inputWidth:20,placeholder:s.d._("Note").toLocaleLowerCase()})),a.a.createElement(d.a,{icon:"card_giftcard"},a.a.createElement(Zt,null)),a.a.createElement(ft,null))};var en=n(7597);const tn=_e.b.div.withConfig({displayName:"RecipeStyled"})`
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  padding: 0.2rem 0.5rem 1rem 0.3rem;
  border-bottom: 1px solid ${j.a.greyLight};
  &:hover {
    background-color: ${j.a.yellow};
  }
`,nn=_e.b.img.withConfig({displayName:"RecipeImage"})`
  width: 4rem;
  height: 4rem;
  display: block;
  float: left;
  object-fit: cover;
  margin: -1rem 1rem 0 0;
`,rn=_e.b.div.withConfig({displayName:"RecipePrice"})`
  position: absolute;
  right: 0.1rem;
  width: 4.8rem;
  height: 1.8rem;
  padding: 0.12rem 0.7rem 0.3rem 0rem;
  font-weight: 500;
  font-size: 1.1rem;
  color: ${j.a.greyDarkest};
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
`,an=_e.b.div.withConfig({displayName:"RecipeDescription"})`
  color: ${j.a.greyMiddle};
  font-size: 0.8rem;
  min-height: 1rem;
`,on=({recipe:e})=>a.a.createElement(tn,null,e.image&&a.a.createElement(nn,{src:e.image,alt:e.nameLabel}),a.a.createElement(rn,null,a.a.createElement(He.a,{price:e.price.value,currencyCode:e.price.currency.code})),a.a.createElement("div",null,e.nameLabel),a.a.createElement(an,null,e.descriptionLabel||" ")),ln=Object(_e.b)(c.a).withConfig({displayName:"FullCard"})`
  height: 100%;
`,cn=Q.css`
  outline: none;
`,dn=({onRecipeClick:e,scrollToCategory:t,orderMenu:n})=>a.a.createElement(ln,null,a.a.createElement(fe,{recipeCategories:n,formatRecipe:e=>a.a.createElement(on,{recipe:e}),formatCategory:e=>a.a.createElement("b",null,e.nameLabel),onRecipeClick:e},({listItems:e,rowRenderer:n})=>a.a.createElement(en.a,null,({width:r,height:i})=>a.a.createElement(en.c,{className:cn,height:i-130,overscanRowCount:2,rowCount:e.length,rowHeight:({index:t})=>e[t].recipe?70:40,rowRenderer:n,scrollToAlignment:"start",scrollToIndex:t?e.findIndex(Pt.a.pathEq(["category","id"],t)):void 0,width:r})))),sn=({orderMenu:e,onClick:t})=>a.a.createElement(c.a,null,a.a.createElement(ke,{categories:e,onClick:t}));var un=n(35);const mn=E.a`
  fragment GOrderMenuRecipe on Recipe {
    id
    nameLabel
    descriptionLabel
    image
    price(warePriceType: DELIVERY) {
      value
      currency {
        code
      }
    }
    sidedishCount: sideDishesWareCategoriesCount
  }
`,pn=E.a`
  fragment GOrderMenuCategory on WareCategory {
    id
    nameLabel
    pictogram
    recipes(enabled: true, isAvailable: true) {
      ...GOrderMenuRecipe
    }
  }
  ${mn}
`,hn=E.a`
  query GOrderMenu($branchId: ID!) {
    orderMenu: wareCategories(
      wareCategoryType: MAIN
      companyBranch: $branchId
    ) {
      ...GOrderMenuCategory
    }
  }
  ${pn}
  ${mn}
`,fn=Object(un.a)(hn),vn=e=>{const{createOrder:t}=Object(p.d)();return a.a.createElement(ze,null,({onRecipeClick:e})=>a.a.createElement(f.a,null,()=>a.a.createElement(fn,{variables:{branchId:t.branchId},render:({orderMenu:n})=>a.a.createElement(a.a.Fragment,null,a.a.createElement(sn,{orderMenu:n,onClick:t.scrollToCategory}),a.a.createElement(f.a,null,()=>a.a.createElement(dn,{orderMenu:n,scrollToCategory:t.scrollMenuToCategoryId,onRecipeClick:e})))})))};const gn=({match:e,location:{state:t}})=>a.a.createElement(N,{callingPhone:e.params.phone,callingEventId:t?t.eventId:null},a.a.createElement(h,null),a.a.createElement(u.a,{layouts:[{i:"bcancelorder",x:6,y:0,w:2,h:1},{i:"bacceptored",x:10,y:0,w:3,h:1}],pageTitle:s.d._("New order"),useBackButton:!0},a.a.createElement("div",{key:"bcancelorder"},a.a.createElement(P,null)),a.a.createElement("div",{key:"bacceptored"},a.a.createElement(x,null))),a.a.createElement(m.a,{widthInColumns:5,withScrollArea:!0},a.a.createElement(c.a,null,a.a.createElement(d.a,{icon:"shopping_cart"},a.a.createElement(lt,null))),a.a.createElement(c.a,null,a.a.createElement(Xt,null))),a.a.createElement(m.a,{column:5,widthInColumns:11,withScrollArea:!1},a.a.createElement(vn,null))),yn=({match:e})=>a.a.createElement(i.e,null,a.a.createElement(l.a,{exact:!0,path:e.path,component:gn}),a.a.createElement(i.c,{component:o.a}));var bn=n(7578),kn=n(7534),En=n(7582),On=n(7530),Cn=n(53),wn=n(7570);const Sn=({order:e,onClick:t})=>e.gps?a.a.createElement(On.OverlayView,{key:e.id,position:Object(Cn.b)(e.gps),mapPaneName:On.OverlayView.OVERLAY_MOUSE_TARGET},a.a.createElement(wn.a,{deliverAt:e.deliverAt,deliveredAt:null,onClick:t})):null,Nn=[Bt.c.NEW_ORDERS,Bt.c.PREPARING,Bt.c.ON_WAY],In=({isLoading:e,noFilter:t,orders:n})=>a.a.createElement(ht.a,{render:({order:r})=>a.a.createElement(En.a,{model:r.map,render:()=>e||t?null:n.filter(e=>Nn.includes(Object(kn.b)(e))).map(e=>a.a.createElement(Sn,{key:e.id,order:e,onClick:()=>r.list.focusOrderDetail(e.id)}))})});const jn=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{layouts:[{i:"bOrders",x:15,y:1,w:1,h:2}],pageTitle:s.d._("Map"),scrollPageTitle:!1},a.a.createElement("div",{key:"bOrders"},a.a.createElement(bn.a,{count:null}))),a.a.createElement(kn.a,null,e=>a.a.createElement(m.a,{widthInColumns:15},a.a.createElement(In,e))));var xn=n(7495),Pn=n(7541),Dn=n(7600),Ln=n(7908),Fn=n.n(Ln),Tn=n(472);const $n=({isLoading:e,categorizedOrders:t})=>a.a.createElement(ht.a,{observe:!0,render:({config:n,order:r})=>{if(e||!t)return null;const i=!Pt.a.all(e=>r.list.isOrderDetailOpen(e.id),t[Bt.c.NEW_ORDERS]||[]);return a.a.createElement(Tn.a,{shouldPlay:i,intervalSec:n.orderListSoundIntervalSec,soundUrl:Fn.a})}});var Rn=n(84);const _n=_e.b.div.withConfig({displayName:"DivTopRightStyled"})`
  position: absolute;
  top: 0;
  right: 0;
  width: 3.4375rem;
  height: 3.4375rem;
`,Mn=()=>a.a.createElement(_n,null,a.a.createElement(Rn.b,{to:"/order/map"},a.a.createElement(I.a,{iconName:"map",color:j.a.greyMiddle})));var Gn=n(7524),An=n(7598);const Wn=({orders:e,category:t,listModel:n})=>e.length>0?a.a.createElement(a.a.Fragment,null,a.a.createElement(Gn.a,null,t.code),e.map(e=>a.a.createElement(An.a,{key:e.id,order:e,listModel:n,showBranch:n.branches.length>1}))):null,Vn=({isLoading:e,noFilter:t,orders:n,categories:r,categorizedOrders:i})=>a.a.createElement(ht.a,{render:({order:o})=>e?a.a.createElement(Me.a,null):t?a.a.createElement(Gn.a,null,a.a.createElement(D.Trans,{id:"Select at least one branch"})):0===n.length?a.a.createElement(Gn.a,null,a.a.createElement(D.Trans,{id:"No orders"})):a.a.createElement(a.a.Fragment,null,r.map(e=>a.a.createElement(Wn,{key:e.enum,category:e,orders:i[e.enum]||[],listModel:o.list})))}),Bn=()=>a.a.createElement(ht.a,{render:({order:e})=>a.a.createElement(vt.a,{selectedBranches:e.list.branches,onSelectionChange:t=>{e.list.setBranchFilter(t)},onSelectionClear:e.list.clearBranchFilter,textColor:j.a.turquoise,isMulti:!0,isClearable:!1})});const qn=Object(_e.b)("div").withConfig({displayName:"FilterContainerStyled"})`
  margin: -0.05rem 0rem -0.05rem -0.18rem;
`,zn=e=>a.a.createElement(kn.a,null,e=>a.a.createElement(a.a.Fragment,null,a.a.createElement($n,e),a.a.createElement(m.a,{withScrollArea:!0,row:2,widthInColumns:8,scrollAreaId:"order-list"},a.a.createElement(Vn,e)),a.a.createElement(m.a,{widthInColumns:8,column:8,withScrollArea:!1},a.a.createElement(In,e),a.a.createElement(Mn,null)),a.a.createElement(u.a,{layouts:[{i:"filter",x:0,y:1,w:6,h:1},{i:"neworder",x:6,y:1,w:2,h:1}],pageTitle:s.d._("Orders"),showSoundControl:!0,scrollPageTitle:!1},a.a.createElement(Pn.a,{key:"filter",component:()=>a.a.createElement(qn,null,a.a.createElement(Bn,null))}),a.a.createElement(Pn.a,{key:"neworder",component:()=>a.a.createElement(xn.a,{mutationName:"createOrder"},a.a.createElement(Dn.a,{showOnlyText:!0}))}))));n.d(t,"OrderRoutes",function(){return Un});const Un=({match:e})=>a.a.createElement(i.e,null,a.a.createElement(l.a,{exact:!0,path:e.path,component:zn}),a.a.createElement(l.a,{path:`${e.path}/create/:phone?`,component:yn}),a.a.createElement(l.a,{path:`${e.path}/map`,component:jn}),a.a.createElement(i.c,{component:o.a}));t.default=Un}}]);
//# sourceMappingURL=50.c3d70660.chunk.js.map