(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{7494:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(0),i=n.n(r),a=n(12),o=n(9),l=n(70),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const d=a.b.div.withConfig({displayName:"IconLineWrap"})`
  display: flex;
`;d.displayName="IconLineWrap";const s=a.b.div.withConfig({displayName:"DescriptionContainer"})`
  margin: ${({labelMargin:e="0.5rem 0.2rem 0 auto"})=>e};
  min-width: ${({labelWidth:e=0,labelWidthUnits:t=o.c.DefaultSizeUnit})=>e+t};
  flex: 0 1 auto;
  text-align: right;
`,u=a.b.div.withConfig({displayName:"IconLineChildren"})`
  margin-left: 0.5rem;
  align-self: stretch;
  flex: 1 0 auto;
`,m=a.b.div.withConfig({displayName:"LabelStyled"})`
  padding-top: 0.2rem;
  display: inline-block;
`;u.displayName="IconLineChildren";const p=e=>{var{icon:t,label:n,labelWidth:r,labelWidthUnits:a,labelMargin:p,children:f}=e,h=c(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);let v;return t&&(v="string"===typeof t?i.a.createElement(l.a,{iconName:t,color:o.a.greyDark}):i.a.createElement(t,{nativeColor:o.a.greyDark})),i.a.createElement(d,h,i.a.createElement(s,{labelWidth:r,labelWidthUnits:a,labelMargin:p},v,n?i.a.createElement(m,null,n):null),i.a.createElement(u,null,f))}},7495:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});var r=n(0),i=n.n(r),a=n(7493),o=n(12),l=n(7510),c=n(36),d=n(9);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const m=o.a`
  outline: none;
  margin: ${d.c.MarginAroundFormComponents};
`,p=o.a`
  border: '1px red solid';
`,f=o.b.input.withConfig({displayName:"FormInputStyled"})`
  ${m};
  ${({invalid:e})=>e&&p};
`,h=i.a.forwardRef((e,t)=>{var{field:n,inputWidth:r=d.c.DefaultInputWidth,inputWidthUnit:o=d.c.DefaultSizeUnit,isRequired:m,validatioName:p,validate:h}=e,v=u(e,["field","inputWidth","inputWidthUnit","isRequired","validatioName","validate"]);return i.a.createElement(a.Field,{field:n,validate:h||(e=>m&&Object(l.isEmpty)(e+"")?c.d._("{validatioName} is required",{validatioName:p}):null)},e=>i.a.createElement(f,s({width:`${r}${o}`,value:e.value||0===e.value?e.value:"",onChange:t=>{e.setTouched(!0),e.setValue(t.target.value)},ref:t},v)))})},7496:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),i=n.n(r),a=n(7504),o=n(50);const l=({mutationName:e,children:t})=>{const{user:n}=Object(o.d)();return n.canMutate(e)?i.a.createElement(i.a.Fragment,null,t):i.a.createElement(a.a,null,`No access to mutation ${e}`)}},7501:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return d});var r=n(0),i=n.n(r),a=n(7538),o=n(9);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const c=(e={})=>Object.assign({},e,{control:(t,n)=>{const{selectProps:{width:r,minWidth:i}}=n,a=Object.assign({},t,{border:`1px solid ${o.a.greyMiddle}`,margin:o.c.MarginAroundFormComponents,width:void 0!==r?`${r}rem`:"100%",minWidth:void 0!==i?`${i}rem`:"8rem"});return e.control?e.control(a,n):a},menu:(t,n)=>{const{selectProps:{width:r}}=n,i=Object.assign({},t,{zIndex:20,color:o.a.black,width:void 0!==r?`${r}rem`:"100%"});return e.menu?e.menu(i,n):i}});function d(e){return i.a.createElement(a.b,l({},e,{styles:c(e.styles)}))}},7503:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),i=n.n(r),a=n(12),o=n(7513),l=n(9);const c=a.b.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+l.c.LayoutGridCellMargin+")":"calc(100vh - (2 * "+l.c.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+l.c.LayoutGridCellMargin+")":l.c.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+l.c.LayoutGridCellMargin+")":"calc(3.9375rem + "+l.c.LayoutGridCellMargin+")")()};
`,d=a.b.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`,s=({children:e,row:t=1,column:n=0,widthInColumns:r=16,withScrollArea:a=!1,scrollAreaId:l})=>i.a.createElement(c,{column:n,row:t,widthInColumns:r,withScrollArea:a},a?i.a.createElement(o.a,{id:l},e):i.a.createElement(d,null,e))},7504:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(0);const r=({children:e})=>null},7505:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),i=n.n(r),a=n(7504),o=n(50);const l=({queryName:e,children:t})=>{const{user:n}=Object(o.d)();return n.canQuery(e)?i.a.createElement(i.a.Fragment,null,t):i.a.createElement(a.a,null,`No access to query ${e}`)}},7507:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r=n(12).b.div.withConfig({displayName:"VerticalGap"})`
  height: ${({size:e=1,sizeUnit:t="rem"})=>`${e}${t}`};
`;r.displayName="VerticalGap"},7508:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),i=n.n(r),a=n(12),o=n(9);const l=a.b.div.withConfig({displayName:"HorizontalSeparatorStyled"})`
  border-top: 1px solid ${o.a.greyLight};
  margin: 0.25rem 0rem;
`,c=({visible:e=!0})=>e?i.a.createElement(l,null):null},7509:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r=n(12).b.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`},7512:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),i=n(17);function a(){return Object(r.useContext)(i.f)}},7513:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r=n(12).b.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`},7514:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),i=n.n(r),a=n(169);const o=({price:e,currencyCode:t})=>i.a.createElement("span",null,t?`${Object(a.c)(e)} ${t}`:Object(a.c)(e))},7515:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(81),i=n(0),a=n.n(i),o=n(12),l=n(15);const c=o.b.div.withConfig({displayName:"ItemStyled"})`
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
`;class s extends a.a.Component{hasSelection(){const{isMulti:e,selectedItem:t,selectedItems:n}=this.props;return e?Array.isArray(n)&&n.length>0:null!=t}isItemSelected(e){const{isMulti:t,selectedItem:n,selectedItems:r}=this.props;return t&&Array.isArray(r)?l.a.contains(e,r):l.a.equals(n,e)}updateSelection(e){const{isMulti:t,selectedItems:n=[],onSingleSelection:r,onMultiSelection:i}=this.props;null===e?t&&i?i([]):r&&r(null):t&&i?this.isItemSelected(e)?i(Array.isArray(n)?l.a.without([e],n):[e]):i(Array.isArray(n)?l.a.concat(n,[e]):[]):r&&r(e)}render(){const{items:e,isClearable:t,isInvalid:n=!1,textColor:i="inherit",formatItem:o}=this.props;return a.a.createElement(d,{isInvalid:n},t&&a.a.createElement(c,{isSelected:!this.hasSelection(),textColor:i,onClick:()=>{this.updateSelection(null)}},a.a.createElement(r.Trans,{id:"optionselector.clear-filter"})),e.map((e,t)=>a.a.createElement(c,{key:t,isSelected:this.isItemSelected(e),textColor:i,onClick:()=>{this.updateSelection(e)}},o(e))))}}s.defaultProps={formatItem:l.a.prop("displayName"),getItemValue:l.a.prop("id")}},7520:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0);const i=e=>Object(r.useEffect)(e,[])},7521:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r,i=n(275),a=n(0);!function(e){e.default="default",e.error="error",e.success="success",e.warning="warning",e.info="info"}(r||(r={}));const o={variant:r.success},l={variant:r.error},c={variant:r.warning};function d(){const e=Object(a.useContext)(i.SnackbarContextNext),t=Object(a.useCallback)(t=>e(t,o),[]),n=Object(a.useCallback)(t=>e(t,l),[]),r=Object(a.useCallback)(t=>e(t,c),[]);return{enqueueSnackbar:e,enqueueSuccess:t,enqueueError:n,enqueueWarning:r}}},7524:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(12),i=n(9);const a=r.b.h2.withConfig({displayName:"CardListTitle"})`
  color: ${i.a.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`},7525:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(15),o=n(7534),l=n(7515),c=n(9);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const u=e=>{var{branches:t,selectedBranch:n,selectedBranches:r,textColor:a=c.a.black}=e,o=s(e,["branches","selectedBranch","selectedBranches","textColor"]);return i.a.createElement(l.a,d({items:t,selectedItem:n,selectedItems:r,textColor:a,formatItem:e=>i.a.createElement("span",{title:e.brand.name},e.name)},o))};var m=n(267),p=n(50);const f=Object(m.b)(({render:e})=>{const{user:t}=Object(p.d)();return t.branches?e(t.branches,!1):e([],!0)});function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return v});const v=({breakpoint:e=3,selectedBranches:t=[],isMulti:n=!1,isClearable:r=!0,textColor:l,onSelectionChange:c,onSelectionClear:d,getDropdownProps:s=(()=>({}))})=>i.a.createElement(f,{render:(m,p)=>{const f=e=>t.includes(e.id),v={textColor:l,isClearable:r,isMulti:n,isLoading:p,branches:m,selectedBranch:p?null:m.find(f),selectedBranches:p?[]:m.filter(f),onSingleSelection(e){null===e&&d?d():null!==e&&c&&c([e.id],[e])},onMultiSelection(e){0===e.length&&d?d():e.length&&c&&c(e.map(a.a.prop("id")),e)}};return m.length<e?i.a.createElement(u,v):i.a.createElement(o.a,h({},v,s()))}})},7529:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),i=n.n(r),a=n(9),o=n(263);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const d=e=>{var{onDelete:t,confirmText:n}=e,r=c(e,["onDelete","confirmText"]);return i.a.createElement(o.a,l({iconName:"delete",color:a.a.greyMiddle,width:a.c.ButtonHeight,height:a.c.ButtonHeight,onClick:e=>{e.preventDefault(),n&&!window.confirm(n)||t()}},r))}},7530:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(39),i=n(5999),a=n(5),o=n(267),l=n(0),c=n(50),d=n(34),s=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function l(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};function u(e){const t=Object(l.createContext)(null);function n(){const t=Object(c.c)(),n=Object(o.d)({data:null,loading:!1,get hasAnyError(){return Boolean(n.errors&&n.errors.length||n.error)}});return{result:n,execute:o=>s(this,void 0,void 0,function*(){n.loading=!0;try{const i=yield t.query({query:e,variables:o});Object(a.y)(()=>{n.data=i.data,n.errors=i.errors,n.loading=!1})}catch(l){Object(r.b)(l)?Object(a.y)(()=>{n.error=l,n.errors=l.graphQLErrors,n.loading=!1}):(Object(a.y)(()=>{n.error=l,n.loading=!1}),Object(d.c)(l))}return n.errors&&Object(d.d)(n.errors,{query:Object(i.i)(e),variables:o}),n})}}return n.context=t,n}},7534:function(e,t,n){"use strict";var r=n(81),i=n(0),a=n.n(i);const o=n(12).b.div.withConfig({displayName:"CursorContainer"})`
  cursor: ${({cursor:e="default"})=>e};
`,l=({branch:e,onClick:t,short:n=!1,showBrand:r=!0})=>a.a.createElement(o,{cursor:"pointer",onClick:t},n?e.name.substr(0,8):a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,e.name),r&&a.a.createElement("span",null,` [${e.brand.name}]`)));var c=n(7501),d=n(15),s=n(36);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return f});var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const p=e=>{const{getStyles:t}=e,n=e.innerProps,{ref:i}=n,o=m(n,["ref"]);return a.a.createElement("div",u({},o,{ref:i,style:t("clearIndicator",e)}),a.a.createElement("div",{style:{padding:"0px 5px"}},a.a.createElement(r.Trans,{id:"All"})))},f=e=>{var{branches:t,selectedBranch:n,onSingleSelection:r,selectedBranches:i,onMultiSelection:o}=e,f=m(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return a.a.createElement(c.a,u({value:f.isMulti?i:n,placeholder:f.isMulti?s.d._("Filter branches..."):s.d._("Select a branch"),options:t,getOptionValue:d.a.prop("id"),formatOptionLabel:e=>a.a.createElement(l,{branch:e}),filterOption:(e,t)=>e.data.name.toLocaleLowerCase().includes(t.toLocaleLowerCase()),closeMenuOnSelect:!f.isMulti,components:{ClearIndicator:p},styles:{clearIndicator:e=>Object.assign({},e,{cursor:"pointer"})},onChange:e=>{f.isMulti&&o&&Array.isArray(e)&&o(e),!f.isMulti&&r&&(Array.isArray(e)?r(d.a.head(e)||null):r(e||null))}},f))}},7535:function(e,t,n){"use strict";var r=n(103),i=n(0),a=n.n(i),o=n(51),l=n(67),c=n(15),d=n(3),s=n.n(d),u=n(37),m=n(7537),p=n(112),f=n(38);const h=s.a`
  fragment GOrderMapMarker on Order {
    id
    deliverAt
    gps {
      ...GGeoPoint
    }
  }
  ${f.e}
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
  ${h}
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
  ${h}
  ${v.a}
`,b=Object(u.a)(g),k=Object(m.a)(y);n.d(t,"a",function(){return O}),n.d(t,"b",function(){return C});const E=[l.c.NEW_ORDERS,l.c.PREPARING,l.c.READY_TO_DELIVER,l.c.ON_WAY,l.c.FINISHED],O=({children:e,includeOldFinished:t=!1})=>a.a.createElement(o.a,{render:n=>{if(!n.order.list.hasBranchFilter)return e({isLoading:!1,noFilter:!0});const r={branches:n.order.list.branchesFilter,categories:E,includeOldFinished:t};return a.a.createElement(b,{fetchPolicy:"cache-and-network",refetchOnConnectionLost:!0,variables:r,renderLoading:!1,render:({orders:t=[],orderStateCategories:n=[]},i)=>a.a.createElement(k,{queryResult:i,variables:r,handleUpdate:w},e({isLoading:i.loading,noFilter:!1,orders:t,categorizedOrders:function(e){return e.reduce((e,t)=>{const n=C(t);return e[n]?e[n].push(t):e[n]=[t],e},{})}(t),categories:n}))})}});function C(e){return e.orderStateCategory}function w(e,t){const{order:n}=e.updatedOrder;if(!n)return t;let r=!1;const i=c.a.reject(S,t.orders).map(e=>e.id===n.id?(r=!0,n):e);return r||i.unshift(n),Object.assign({},t,{orders:i})}function S(e){return e.orderStateCategory===l.c.FINISHED&&Object(r.b)(new Date,e.createdAt)>e.companyBranch.oldOrderThreshold}},7536:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(12),i=n(9);const a=r.b.div.withConfig({displayName:"TouchButtonBadge"})`
  min-height: 1.8rem;
  line-height: 1.8rem;
  min-width: 1.8rem;
  font-size: 1.2rem;
  margin: 0;
  background-color: ${i.a.red};
  color: white;
  position: absolute;
  right: -0.25rem;
  top: -0.25rem;
  border-radius: 1.8rem;
  text-align: center;
  vertical-align: middle;
  padding: 0;
`},7537:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(7520);function i(e){return function(t){return Object(r.a)(()=>{const{queryResult:n,variables:r,handleUpdate:i}=t;return n.subscribeToMore({document:e,variables:r,updateQuery:(e,{subscriptionData:t})=>t&&t.data&&i(t.data,e)||e})}),t.children}}},7541:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),i=n.n(r),a=n(83),o=n(7496),l=n(7505),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const d=e=>{var{route:t,component:n,canQuery:d,canMutate:s}=e,u=c(e,["route","component","canQuery","canMutate"]);let m=t?i.a.createElement(a.b,{to:t},Object(r.createElement)(n)):Object(r.createElement)(n);return d&&(m=i.a.createElement(l.a,{queryName:d},m)),s&&(m=i.a.createElement(o.a,{mutationName:s},m)),i.a.createElement("div",u,m)}},7542:function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r=n(12).b.a.withConfig({displayName:"LinkStyled"})`
  color: inherit;
  text-decoration-color: rgba(0, 0, 0, 0.08);
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
  &:visited {
    text-decoration-color: rgba(0, 0, 0, 0.08);
  }
`},7547:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),i=n.n(r),a=n(7493),o=n(15),l=n(36),c=n(7515);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};class u extends i.a.Component{constructor(){super(...arguments),this.validate=(e=>{const{isRequired:t,isMulti:n,validationName:r}=this.props;if(t){if(n&&(!Array.isArray(e)||0===e.length))return l.d._("{validationName} must have at least option selected",{validationName:r});if(!n&&null==e)return l.d._("{validationName} must have a selection",{validationName:r})}return null})}getControlProps(e){const{isMulti:t,items:n,defaultSelection:r,getItemId:i}=this.props,a=e.value||r;if(t){const t=e=>a.includes(i(e));return{selectedItems:Array.isArray(a)?n.filter(t):[],onMultiSelection:t=>{e.setValue(t.map(i)),e.setTouched(!0)}}}return{selectedItem:a&&n.find(e=>i(e)===a),onSingleSelection:t=>{e.setValue(t?i(t):null),e.setTouched(!0)}}}render(){const e=this.props,{field:t,fieldIsPure:n=!1,isRequired:r=!1,isClearable:o=!1}=e,l=s(e,["field","fieldIsPure","isRequired","isClearable"]);return i.a.createElement(a.Field,{field:t,pure:n,validate:this.validate},e=>i.a.createElement(c.a,d({},this.getControlProps(e),{isInvalid:Boolean(e.error),isClearable:o&&!r},l)))}}u.defaultProps={validationName:l.d._("Value"),getItemId:o.a.prop("id")}},7548:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(3),i=n.n(r),a=n(38);const o=i.a`
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
  ${a.a}
  ${a.c}
`},7569:function(e,t,n){"use strict";var r=n(103),i=n(0),a=n.n(i),o=n(126),l=n(12),c=n(9);const d=l.b.div.withConfig({displayName:"TimeBadgeStyled"})`
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
`,f=Object(l.b)(d).withConfig({displayName:"TimeBadgeCompleted"})`
  background: ${c.a.green};
`,h=Object(l.b)(d).withConfig({displayName:"TimeBadgeCancelled"})`
  background: ${c.a.greyMiddle};
  padding: 0.3rem 0.3rem 0 0.3rem;
`,v=({minutes:e=0,onClick:t,isFinished:n=!1,isCancelled:r=!1})=>{if(r)return a.a.createElement(h,{onClick:t},a.a.createElement(o.a,null));let i=e.toString(),l=u;return Number.isNaN(e)?(l=s,i="?"):n?l=e<=0?p:f:e<=20?(l=p,e<-99&&(i="-")):e>99&&(l=m),a.a.createElement(l,{children:i,onClick:t})};var g=n(7579),y=n.n(g);const b=({interval:e,enabled:t,getNow:n=Date.now,nextTick:r=y.a,cancelTick:a=y.a.cancel})=>{const[o,l]=function(e){const[t,n]=Object(i.useState)(e),r=Object(i.useRef)(null);return r.current=t,[()=>r.current,n]}(n),c=Object(i.useRef)(null);return Object(i.useEffect)(()=>{const i=()=>{const t=n();t-o()>=e&&l(t),s()},d=()=>{c.current&&(a(c.current),c.current=null)},s=()=>{t?c.current=r(i):d()};return s(),d},[e,t]),o()};n.d(t,"a",function(){return k});const k=({deliverAt:e,deliveredAt:t,isCancelled:n=!1,onClick:i})=>{const o=b({interval:6e4,enabled:!t}),l=Object(r.d)(e,t||o);return a.a.createElement(v,{minutes:l,onClick:i,isFinished:Boolean(t),isCancelled:n})}},7577:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),i=n.n(r),a=n(83),o=n(7536),l=n(36),c=n(263),d=n(9);const s=({count:e})=>i.a.createElement(a.b,{to:"/order"},i.a.createElement(c.a,{text:l.d._("Orders"),iconName:"assignment_returned",badge:e&&e>0?i.a.createElement(o.a,null,e):null,color:d.a.yellow}))},7578:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(81),i=n(39),a=n(57),o=n.n(a),l=n(0),c=n.n(l),d=n(163),s=n(15),u=n(34),m=n(36),p=n(263),f=n(7521),h=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function l(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};function v(e,t){const n=m.d._("Unexpected error occured while sending a request. Our team was notified about the issue."),{enqueueSnackbar:r,enqueueError:a,enqueueWarning:o}=Object(f.a)(),p=Object(l.useCallback)(e=>{const t=e.filter(s.a.propEq("showToUser",!0));0===t.length?a(n):t.map(s.a.prop("message")).forEach(o)},[]),v=Object(l.useCallback)(e=>{if(Object(i.b)(e)){if(e.networkError)return void a(m.d._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void p(e.graphQLErrors)}Object(u.c)(e),r(n,{action:[c.a.createElement(g,{key:"feedback"})]})},[]),y=Object(d.b)(e,t);return e=>h(this,void 0,void 0,function*(){try{const n=yield y({variables:e});return n.errors&&p(n.errors),n.data||null}catch(t){return v(t),null}})}function g(){return c.a.createElement(p.a,{onClick:()=>o.a.showReportDialog()},c.a.createElement(r.Trans,{id:"Submit feedback"}))}},7581:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(84),i=n(0),a=n.n(i),o=n(7531),l=n(12),c=n(9);const d=l.b.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: ${c.b.Card};
  overflow: hidden;
  height: 100%;
`,s=Object(o.withGoogleMap)(({children:e})=>a.a.createElement(a.a.Fragment,null,e));class u extends i.Component{constructor(){super(...arguments),this.getOptions=(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1}))}render(){const{model:e}=this.props;return a.a.createElement(s,{containerElement:a.a.createElement(d,null),mapElement:a.a.createElement("div",{style:{height:"100%"}})},a.a.createElement(r.a,null,()=>a.a.createElement(o.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,options:this.getOptions()},this.props.render({}))))}}},7598:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(12),o=n(84);const l=({test:e,renderSuccess:t,renderFailure:n})=>i.a.createElement(o.a,{render:()=>e()?t():n?n():null});var c=n(9),d=n(81),s=n(97),u=n.n(s),m=n(284),p=n(7514),f=n(67),h=n(169);const v=({customer:e})=>e?i.a.createElement("span",null,`${e.lastName?`${e.firstName} ${e.lastName}`:e.defaultPhone?e.defaultPhone.phone:""}`):i.a.createElement("i",null,"unknown");var g=n(7569);const y=Object(a.b)(m.Element).withConfig({displayName:"OrderTickerStyled"})`
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: ${u()(c.a.turquoise).alpha(.05).string()};
  }
  &:active {
    background-color: ${u()(c.a.turquoise).alpha(.2).string()};
  }
`,b=a.b.div.withConfig({displayName:"OrderTickerMainContentStyled"})`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.4rem;
`,k=a.b.div.withConfig({displayName:"DeliveryTimeBadgeContainerStyled"})`
  flex: 0 0 2rem;
`,E=a.b.div.withConfig({displayName:"AddressDisplayContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,O=a.b.div.withConfig({displayName:"CustomerIdentityContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,C=a.b.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 3.5rem;
  text-align: right;
  position: relative;
`,w=a.b.div.withConfig({displayName:"PaidMarkStyled"})`
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
`,S=a.b.div.withConfig({displayName:"PaidTextStyled"})`
  color: ${c.a.orange};
`,N=a.b.div.withConfig({displayName:"ToBranchContainerStyled"})`
  padding: 0.3rem 0.6rem;
  display: inline-block;
  border-top-left-radius: ${c.b.Card};
  background-color: ${c.a.green};
  color: ${c.a.white};
`,I=({order:e,showBranch:t,onClick:n})=>i.a.createElement(y,{onClick:n,name:`order-${e.id}`},t&&i.a.createElement(N,null,e.companyBranch.name),i.a.createElement(b,null,i.a.createElement(k,null,i.a.createElement(g.a,{deliverAt:e.deliverAt,deliveredAt:e.deliveredAt,isCancelled:e.orderStateCategory===f.c.CANCEL})),i.a.createElement(E,null,Object(h.a)(e.address)),i.a.createElement(O,null,i.a.createElement(v,{customer:e.customer})),i.a.createElement(C,null,i.a.createElement(p.a,{price:e.totalSum.value}),e.isPaidWithCard&&i.a.createElement(i.a.Fragment,null,i.a.createElement(w,null),i.a.createElement(S,null,i.a.createElement(d.Trans,{id:"Paid"}))))));var x=n(7508),j=n(7494),F=n(7542);const L=({phones:e,emails:t})=>{const n=e=>i.a.createElement(j.a,{icon:e.icon,key:e.value,labelMargin:"0"},i.a.createElement("div",{title:e.description||""},(e=>e.isMail?i.a.createElement(F.a,{href:`mailto:${e.value}`},e.value):i.a.createElement(F.a,{href:`tel:${e.value.replace("/ /g","")}`},e.value))(e)));return i.a.createElement(i.a.Fragment,null,(e.length>0||t.length>0)&&i.a.createElement(x.a,null),e.map(e=>n(Object.assign({icon:"phone",isMail:!1,value:e.phone},e))),t.map(e=>n(Object.assign({icon:"mail_outline",isMail:!0,value:e.email},e))))};var P=n(36);const D=a.b.span.withConfig({displayName:"CurrentNoteStyled"})`
  color: ${c.a.orange};
`,T=a.b.span.withConfig({displayName:"PreviousNoteStyled"})`
  color: ${c.a.greyDark};
  margin-left: 0.5rem;
`,R=({note:e,previousNote:t})=>e||t?i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,null),i.a.createElement(j.a,{icon:"note",labelMargin:"0"},i.a.createElement(D,null,e||P.d._("Without note").toLocaleLowerCase()),i.a.createElement(T,null,t))):null,$=({current:e,total:t})=>i.a.createElement(d.Trans,{id:"It's customer's {current, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} order {total, plural, one {} other {from total of # orders}}",values:{current:e,total:t}}),_=a.b.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,M=a.b.div.withConfig({displayName:"CodeContainerStyled"})`
  flex: 0 0 5rem;
`,G=a.b.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${c.a.greyMiddle};
`,A=a.b.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${c.a.greyMiddle};
`,W=({code:e,label:t,price:n})=>i.a.createElement(_,null,i.a.createElement(M,null,e),i.a.createElement(G,null,t),i.a.createElement(A,null,i.a.createElement(p.a,{price:n}))),V=a.b.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`,B=({order:e})=>i.a.createElement(V,null,i.a.createElement(W,{label:P.d._("Transport fee"),price:e.transportFee.value}),i.a.createElement(W,{label:P.d._("Covers price"),price:e.coverPrice.value}),i.a.createElement(W,{label:P.d._("Discount total"),price:-1*e.totalDiscount.value}),i.a.createElement("b",null,i.a.createElement(W,{label:P.d._("Total price"),price:e.totalSum.value}))),q=({rules:e,children:t})=>e.length>0||t?i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,null),i.a.createElement(j.a,{icon:"announcement",labelMargin:"0"},t,i.a.createElement("br",null),e.join(", "))):null;var z=n(126);const U=a.b.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,H=({order:e})=>{const t=[];if(e.deliverAt&&t.push(i.a.createElement("div",{key:"deliverAt"},Object(h.e)(e.deliverAt),i.a.createElement(U,null,i.a.createElement(d.Trans,{id:"Deliver on time"})))),e.driver){const{firstName:n,lastName:r}=e.driver.user;t.push(i.a.createElement("div",{key:"driver"},`${n} ${r}`,i.a.createElement(U,null,i.a.createElement(d.Trans,{id:"Driver"}))))}return 0===t.length?null:i.a.createElement(j.a,{icon:z.e,labelMargin:"0"},t)};var Q=n(15);const Y=a.b.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,K={[f.c.NEW_ORDERS]:Object(d.i18nMark)("Created"),[f.c.PREPARING]:Object(d.i18nMark)("Preparing"),[f.c.READY_TO_DELIVER]:Object(d.i18nMark)("Ready to deliver"),[f.c.ON_WAY]:Object(d.i18nMark)("On way"),[f.c.FINISHED]:Object(d.i18nMark)("Finished")},Z=({orderTiming:e})=>i.a.createElement(j.a,{icon:"access_time",labelMargin:"0"},Q.a.reject(({createdAt:e,orderStateCategory:t})=>null===e||!K[t],e).map(e=>i.a.createElement("div",{key:e.orderStateCategory},Object(h.e)(e.createdAt),i.a.createElement(Y,null,P.d._(K[e.orderStateCategory]))))),J=({orderWares:e})=>{return i.a.createElement("div",null,e.map(e=>i.a.createElement(r.Fragment,{key:e.id},i.a.createElement(W,{code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),i.a.createElement(i.a.Fragment,null,e.sidedishes.map(e=>i.a.createElement(W,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value}))))))};var X=n(3),ee=n.n(X),te=n(37),ne=n(38),re=n(172);const ie=Object(te.a)(ee.a`
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
`);var ae=n(35),oe=n(51),le=n(34),ce=n(263);const de={[f.d.ACCEPTED]:Object(d.i18nMark)("Accept order"),[f.d.FINISHED]:Object(d.i18nMark)("Finish order")},se=({orderId:e,nextState:t,stateModel:n})=>i.a.createElement(ce.a,{text:P.d._(de[t]),width:"7.375rem",onClick:()=>{n.updateOrderState(e,t)}});var ue=n(7538),me=n(70),pe=n(7501);const fe=a.b.div.withConfig({displayName:"DriverName"})`
  margin: 0.1rem 0 0rem 0.2rem;
  display: inline-block;
  vertical-align: top;
  font-size: 1.25rem;
`,he={background:c.a.greyMiddle},ve={color:c.a.white},ge={control:e=>Object.assign({},e,he,ve,{height:c.c.ButtonHeight,borderWidth:0,borderRadius:c.b.Button,margin:0}),menu:e=>Object.assign({},e,he),valueContainer:e=>Object.assign({},e,ve),singleValue:e=>Object.assign({},e,ve),placeholder:e=>Object.assign({},e,ve,{fontSize:"1.2rem"})},ye=({drivers:e,selectedDriver:t,isLoading:n,onSelect:r,onClear:a,onReload:o})=>i.a.createElement(pe.a,{options:e,value:t,getOptionValue:Q.a.prop("id"),isLoading:n,isSearchable:!1,isClearable:!0,placeholder:"Deliver order",width:16,styles:ge,noOptionsMessage:()=>P.d._("No drivers available"),onChange:e=>null===e?a():r(e),onMenuOpen:o,components:{ValueContainer:e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(me.a,{iconName:"directions_car",fontSize:2,color:c.a.white}),i.a.createElement(ue.a.ValueContainer,e)),DropdownIndicator:()=>null},formatOptionLabel:e=>i.a.createElement(fe,null,`${e.firstName} ${e.lastName}`)}),be=({branchId:e,orderId:t,orderStateCategory:n,stateModel:r})=>i.a.createElement(re.b,{fetchPolicy:"network-only",variables:{branchId:e,orderId:t},render:({drivers:e,order:{driver:a}},{loading:o,refetch:l})=>i.a.createElement(ye,{drivers:e,selectedDriver:a?a.user:null,isLoading:o,onReload:l,onClear:()=>{a&&r.removeDriver(a.id)},onSelect:e=>{r.selectDriver(t,e.id),n!==f.c.ON_WAY&&r.deliverOrder(t)}})}),ke=a.b.div.withConfig({displayName:"OrderStateFlowContainerWrapper"})`
  margin: 0 0 0 auto;
  text-align: right;
  height: ${c.c.ButtonHeight};
`,Ee=a.b.div.withConfig({displayName:"Control"})`
  margin: 0 0 0 0.5rem;
  display: inline-block;
  vertical-align: bottom;
  text-align: left;
  height: 100%;
`,Oe=({children:e})=>i.a.createElement(ke,null,r.Children.map(e,(e,t)=>i.a.createElement(Ee,{key:t},e)));var Ce=n(270);const we=[20,30,45,60,75,90,105,120],Se=a.b.div.withConfig({displayName:"MinutesContainer"})`
  display: flex;
  justify-content: 'center';
  flex-wrap: 'wrap';
  font-size: 2rem;
`,Ne=a.b.div.withConfig({displayName:"MinutesItem"})`
  margin: 1rem 1rem 0 0;
`;class Ie extends i.a.Component{constructor(){super(...arguments),this.state={dialogOpen:!1},this.openDialog=(()=>{this.setState({dialogOpen:!0})}),this.closeDialog=(()=>{this.setState({dialogOpen:!1})})}render(){const{orderId:e,stateModel:t}=this.props;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ce.a,{iconName:"schedule",onClick:this.openDialog}),i.a.createElement(Ce.b,{open:this.state.dialogOpen,onClose:this.closeDialog},i.a.createElement(Ce.e,null,i.a.createElement(d.Trans,{id:"Send expected time of delivery to customer (in minutes)"}),i.a.createElement(Se,null,we.map(n=>i.a.createElement(Ne,{key:n},i.a.createElement(ce.a,{onClick:()=>{t.sendTimeNotification(e,n),this.closeDialog()},color:c.a.green},n)))))))}}var xe=n(7535),je=n(112);const Fe=Object(te.a)(ee.a`
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
  ${je.a}
`);function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Pe=e=>i.a.createElement(Oe,null,i.a.createElement(Ie,e),i.a.createElement(se,Le({nextState:f.d.ACCEPTED},e))),De=e=>i.a.createElement(Oe,null,i.a.createElement(Ie,e),e.canDeliver?i.a.createElement(be,e):i.a.createElement(se,Le({nextState:f.d.FINISHED},e))),Te=e=>i.a.createElement(Oe,null,i.a.createElement(Ie,e),i.a.createElement(be,e),i.a.createElement(se,Le({nextState:f.d.FINISHED},e))),Re=({orderId:e,branchId:t})=>i.a.createElement(oe.a,{observe:!1,render:({order:{state:n}})=>i.a.createElement(Fe,{variables:{orderId:e,branchId:t},render:({order:r,companyBranch:{allowedCategories:a}})=>{const o=Object(xe.b)(r);if(!o)return Object(le.c)(new ae.VError("Order %s has got no state categories")),null;const l=a.includes(f.c.ON_WAY)&&null!=r.deliveryType&&r.deliveryType.enum!==f.a.PICKUP,c={orderId:e,branchId:t,stateModel:n,orderStateCategory:o,canDeliver:l};switch(o){case f.c.NEW_ORDERS:return i.a.createElement(Pe,c);case f.c.PREPARING:return i.a.createElement(De,c);case f.c.ON_WAY:return i.a.createElement(Te,c);default:return null}}})}),$e=a.b.div.withConfig({displayName:"OrderDetailContainerStyled"})`
  padding: 0 0.5rem 0.5rem 1.1rem;
`,_e=({orderId:e})=>i.a.createElement(ie,{variables:{id:e},fetchPolicy:"cache-and-network",render:({order:t})=>i.a.createElement(i.a.Fragment,null,i.a.createElement($e,null,i.a.createElement(x.a,null),i.a.createElement(J,{orderWares:t.items}),i.a.createElement(B,{order:t}),i.a.createElement(q,{rules:t.allAppliedRules},i.a.createElement($,{current:t.customerOrdersCountCurrent,total:t.customerOrdersCountTotal})),i.a.createElement(L,{phones:t.customer.phones,emails:t.customer.emails}),i.a.createElement(R,{note:t.note,previousNote:t.previousNote}),i.a.createElement(x.a,null),i.a.createElement(Z,{orderTiming:t.orderTiming}),i.a.createElement(H,{order:t})),i.a.createElement(Re,{orderId:e,branchId:t.companyBranch.id}))});n.d(t,"a",function(){return Ge});const Me=a.b.div.withConfig({displayName:"OrderBoxStyled"})`
  background-color: ${c.a.white};
  color: ${c.a.greyDarkest};
  border-radius: ${c.b.Card};
  margin-bottom: 0.5rem;
  position: relative;
`,Ge=({order:e,showBranch:t,listModel:n})=>i.a.createElement(Me,{id:`order-${e.id}`},i.a.createElement(I,{order:e,showBranch:t,onClick:()=>n.toggleOrderDetail(e)}),i.a.createElement(l,{test:()=>n.isOrderDetailOpen(e.id),renderSuccess:()=>i.a.createElement(_e,{orderId:e.id})}))},7600:function(e,t,n){"use strict";var r=n(126),i=n(0),a=n.n(i),o=n(83),l=n(7536),c=n(36),d=n(263),s=n(9),u=n(130),m=n(3);const p=n.n(m).a`
  subscription SOrderCall {
    updatedUserCallingCustomer {
      eventId
      phone
      isRinging
    }
  }
`,f=({render:e})=>a.a.createElement(u.Subscription,{subscription:p},({data:t})=>e(t?t.updatedUserCallingCustomer:null));n.d(t,"a",function(){return h});const h=({showOnlyText:e=!1})=>a.a.createElement(f,{render:t=>{const n={pathname:`/order/create/${t?t.phone:""}`,state:{eventId:t?t.eventId:null}};return a.a.createElement(o.b,{to:n},a.a.createElement(d.a,{text:c.d._("Create order"),iconName:e?void 0:"add_circle",color:s.a.turquoise,badge:t&&t.isRinging?a.a.createElement(l.a,null,a.a.createElement(r.d,null)):null}))}})},7743:function(e,t,n){e.exports=n(7744)},7744:function(e,t,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(7745),i)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(o){r.regeneratorRuntime=void 0}},7745:function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",d="object"===typeof e,s=t.regeneratorRuntime;if(s)d&&(e.exports=s);else{(s=t.regeneratorRuntime=d?e.exports:{}).wrap=k;var u="suspendedStart",m="suspendedYield",p="executing",f="completed",h={},v={};v[o]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==r&&i.call(y,o)&&(v=y);var b=w.prototype=O.prototype=Object.create(v);C.prototype=b.constructor=w,w.constructor=C,w[c]=C.displayName="GeneratorFunction",s.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(b),e},s.awrap=function(e){return{__await:e}},S(N.prototype),N.prototype[l]=function(){return this},s.AsyncIterator=N,s.async=function(e,t,n,r){var i=new N(k(e,t,n,r));return s.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},S(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},s.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=L,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return l.type="throw",l.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),d=i.call(o,"finallyLoc");if(c&&d){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),h}}}function k(e,t,n,r){var i=t&&t.prototype instanceof O?t:O,a=Object.create(i.prototype),o=new F(r||[]);return a._invoke=function(e,t,n){var r=u;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw a;return P()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var l=I(o,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=E(e,t,n);if("normal"===c.type){if(r=n.done?f:m,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,o),a}function E(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}function O(){}function C(){}function w(){}function S(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function N(e){var t;this._invoke=function(n,r){function a(){return new Promise(function(t,a){!function t(n,r,a,o){var l=E(e[n],e,r);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"===typeof d&&i.call(d,"__await")?Promise.resolve(d.__await).then(function(e){t("next",e,a,o)},function(e){t("throw",e,a,o)}):Promise.resolve(d).then(function(e){c.value=e,a(c)},function(e){return t("throw",e,a,o)})}o(l.arg)}(n,r,t,a)})}return t=t?t.then(a,a):a()}}function I(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,I(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=E(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},7914:function(e,t,n){e.exports=n.p+"static/media/orderNotification.0aa2ebe9.mp3"},7932:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(17),o=n(127),l=n(71),c=n(266),d=n(7494),s=n(36),u=n(271),m=n(7503),p=n(50);const f=()=>{const e=Object(p.d)();return Object(r.useEffect)(()=>()=>e.createOrder.cancelOrder(),[]),i.a.createElement(a.a,{message:s.d._("Do you really want to cancel order?"),when:e.createOrder.askForCancel})};var h=n(5),v=n(267),g=n(7493),y=n(7578),b=n(124);const k=({callingPhone:e,callingEventId:t,children:n})=>{const{createOrder:a}=Object(p.d)(),o=Object(y.a)(b.d);return Object(v.e)(()=>Object(h.i)(()=>{a.orderId&&o({orderId:a.orderId,deliveryType:a.deliveryType,gps:a.gps})})),Object(r.useEffect)(()=>{e&&a.userIsCalling(e,t)},[e,t]),Object(v.f)(()=>i.a.createElement(g.Form,{values:a.formValues,onSubmit:a.acceptOrder,onChange:e=>a.updateFormValues(e.values,e.touched)},n))};var E=n(84),O=n(7512),C=n(7521),w=n(263),S=n(9),N=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function l(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};const I=()=>{const{enqueueSuccess:e,enqueueWarning:t}=Object(C.a)(),{history:n}=Object(O.a)(),{createOrder:r}=Object(p.d)();return i.a.createElement(g.FormApi,null,a=>i.a.createElement(E.a,null,()=>i.a.createElement(w.a,{color:S.a.green,text:s.d._("Accept order"),disabled:!r.canSubmit,onClick:i=>N(void 0,void 0,void 0,function*(){try{yield a.submitForm(i),n.replace("/order"),e(s.d._("Order has been accepted"))}catch(o){r.hasSubmitErrors&&r.submitErrors.forEach(e=>{t(e)})}})})))},x=e=>i.a.createElement(a.c,null,({history:e})=>i.a.createElement(w.a,{color:S.a.red,text:s.d._("Cancel order"),onClick:()=>{e.goBack()}}));var j=n(81);function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var L=n(7743),P=n.n(L);function D(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&$(e.prototype,t),n&&$(e,n),e}function M(e){return(M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e){return(G="function"===typeof Symbol&&"symbol"===M(Symbol.iterator)?function(e){return M(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":M(e)})(e)}function A(e,t){return!t||"object"!==G(t)&&"function"!==typeof t?F(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}var q=n(79),z=n.n(q),U=n(7528),H=n(7),Q=n.n(H),Y=n(441);var K,Z="__EMOTION_THEMING__",J=((K={})[Z]=Q.a.object,K);var X=Y.a,ee=function(e){return"theme"!==e&&"innerRef"!==e},te=function(){return!0},ne=function(e,t){for(var n=2,r=arguments.length;n<r;n++){var i=arguments[n],a=void 0;for(a in i)e(a)&&(t[a]=i[a])}return t};var re=function(e,t){var n=function(r,i){var a,o,l,c;void 0!==i&&(a=i.e,o=i.label,l=i.target,c=r.__emotion_forwardProp&&i.shouldForwardProp?function(e){return r.__emotion_forwardProp(e)&&i.shouldForwardProp(e)}:i.shouldForwardProp);var d=r.__emotion_real===r,s=void 0===a&&d&&r.__emotion_base||r;return"function"!==typeof c&&(c="string"===typeof s&&s.charAt(0)===s.charAt(0).toLowerCase()?X:ee),function(){var u=arguments,m=d&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==o&&m.push("label:"+o+";"),void 0===a)if(null==u[0]||void 0===u[0].raw)m.push.apply(m,u);else{m.push(u[0][0]);for(var p=u.length,f=1;f<p;f++)m.push(u[f],u[0][f])}var h=function(n){var r,i;function o(){return n.apply(this,arguments)||this}i=n,(r=o).prototype=Object.create(i.prototype),r.prototype.constructor=r,r.__proto__=i;var d=o.prototype;return d.componentWillMount=function(){void 0!==this.context[Z]&&(this.unsubscribe=this.context[Z].subscribe(function(e){this.setState({theme:e})}.bind(this)))},d.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[Z].unsubscribe(this.unsubscribe)},d.render=function(){var n=this.props,r=this.state;this.mergedProps=ne(te,{},n,{theme:null!==r&&r.theme||n.theme||{}});var i="",o=[];return n.className&&(i+=void 0===a?e.getRegisteredStyles(o,n.className):n.className+" "),i+=void 0===a?e.css.apply(this,m.concat(o)):a,void 0!==l&&(i+=" "+l),t.createElement(s,ne(c,{},n,{className:i,ref:n.innerRef}))},o}(t.Component);return h.displayName=void 0!==o?o:"Styled("+("string"===typeof s?s:s.displayName||s.name||"Component")+")",void 0!==r.defaultProps&&(h.defaultProps=r.defaultProps),h.contextTypes=J,h.__emotion_styles=m,h.__emotion_base=s,h.__emotion_real=h,h.__emotion_forwardProp=c,Object.defineProperty(h,"toString",{value:function(){return"."+l}}),h.withComponent=function(e,t){return n(e,void 0!==t?ne(te,{},i,t):i).apply(void 0,m)},h}};return n}(U,i.a),ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var oe=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return a.state={},a.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},a.elements={},a.onResize=a.onResize.bind(a),a.onTruncate=a.onTruncate.bind(a),a.calcTargetWidth=a.calcTargetWidth.bind(a),a.measureWidth=a.measureWidth.bind(a),a.getLines=a.getLines.bind(a),a.renderLine=a.renderLine.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),ae(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,r=document.createElement("canvas");this.canvasContext=r.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var r=t[n],i=document.createElement("div");return i.innerHTML="foo<br/>bar","foo\nbar"!==i[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),r=t[n]),r}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"===typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,r=this.canvasContext,i=this.props.width;if(t){var a=i||Math.floor(t.parentNode.getBoundingClientRect().width);if(!a)return window.requestAnimationFrame(function(){return n(e)});var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");r.font=l,this.setState({targetWidth:a},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,r=t.ellipsis,a=t.trimWhitespace,o=this.state.targetWidth,l=this.innerText,c=this.measureWidth,d=this.onTruncate,s=this.trimRight,u=[],m=l(e.text).split("\n").map(function(e){return e.split(" ")}),p=!0,f=this.ellipsisWidth(this.elements.ellipsis),h=1;h<=n;h++){var v=m[0];if(0!==v.length){var g=v.join(" ");if(c(g)<=o&&1===m.length){p=!1,u.push(g);break}if(h===n){for(var y=v.join(" "),b=0,k=y.length-1;b<=k;){var E=Math.floor((b+k)/2);c(y.slice(0,E+1))+f<=o?b=E+1:k=E-1}var O=y.slice(0,b);if(a)for(O=s(O);!O.length&&u.length;){O=s(u.pop())}g=i.a.createElement("span",null,O,r)}else{for(var C=0,w=v.length-1;C<=w;){var S=Math.floor((C+w)/2);c(v.slice(0,S+1).join(" "))<=o?C=S+1:w=S-1}if(0===C){h=n-1;continue}g=v.slice(0,C).join(" "),m[0].splice(0,C)}u.push(g)}else u.push(),m.shift(),h--}return d(p),u}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return i.a.createElement("span",{key:t},e);var r=i.a.createElement("br",{key:t+"br"});return e?[i.a.createElement("span",{key:t},e),r]:r}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,r=n.children,a=n.ellipsis,o=n.lines,l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["children","ellipsis","lines"]),c=this.state.targetWidth,d=this.getLines,s=this.renderLine,u=this.onTruncate,m=void 0;return"undefined"!==typeof window&&!(!t||!c)&&(o>0?m=d().map(s):(m=r,u(!1))),delete l.onTruncate,delete l.trimWhitespace,i.a.createElement("span",ie({},l,{ref:function(t){e.elements.target=t}}),i.a.createElement("span",null,m),i.a.createElement("span",{ref:function(t){e.elements.text=t}},r),i.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},a))}}]),t}();oe.propTypes={children:Q.a.node,ellipsis:Q.a.node,lines:Q.a.oneOfType([Q.a.oneOf([!1]),Q.a.number]),trimWhitespace:Q.a.bool,width:Q.a.number,onTruncate:Q.a.func},oe.defaultProps={children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0};var le=oe,ce=n(130);function de(){var e=T(["\n  font-size: 0.8rem;\n  margin-top: 0.2rem;\n"]);return de=function(){return e},e}function se(){var e=T(["\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2rem;\n  width: 2.6rem;\n  height: 2.6rem;\n  margin: 0 auto;\n  padding: 0;\n\n  span:before,\n  span::after {\n    margin: 0;\n    padding: 0;\n    font-size: 1.7rem;\n  }\n"]);return se=function(){return e},e}function ue(){var e=T(["\n  text-align: center;\n  display: inline-block;\n  max-width: 5rem;\n  cursor: pointer;\n  margin: 0.2rem;\n"]);return ue=function(){return e},e}function me(){var e=T(["\n  padding: 0.7rem 0.5rem 0 0.2rem;\n  display: flex;\n  top: 0;\n  z-index: 1;\n  user-select: none;\n  flex-wrap: wrap;\n"]);return me=function(){return e},e}var pe=function(e){function t(){var e;return R(this,t),(e=A(this,W(t).apply(this,arguments))).state={list:[]},e.renderRow=function(t){var n=t.index,r=t.style,a=e.props,o=a.formatCategory,l=a.formatRecipe,c=a.onRecipeClick,d=e.state.list[n],s=d.recipe,u=d.category;return s?i.a.createElement("div",{key:"recipe-".concat(s.id,"-").concat(u.id),style:r,onClick:function(){return c(s)}},l(s)):i.a.createElement("div",{key:"category-".concat(u.id),style:r},o(u))},e}return B(t,i.a.Component),_(t,[{key:"render",value:function(){return this.props.children({listItems:this.state.list,rowRenderer:this.renderRow})}}],[{key:"getDerivedStateFromProps",value:function(e){var t=Boolean(e.formatCategory);return{list:e.recipeCategories.reduce(function(e,n){return 0===n.recipes.length?e:(t&&e.push({category:n}),e.concat(n.recipes.map(function(e){return{category:n,recipe:e}})))},[])}}}]),t}();pe.defaultProps={formatRecipe:function(e){return e.nameLabel},formatCategory:function(e){return e.nameLabel}};var fe=re("div")(me()),he=re("div")(ue()),ve=re("div")(se()),ge=re("div")(de()),ye=function(e){function t(){var e;return R(this,t),(e=A(this,W(t).apply(this,arguments))).renderCategory=function(t){var n=e.props.onClick;return i.a.createElement(he,{key:t.id,onClick:function(){return n(t.id)}},i.a.createElement(ve,null,i.a.createElement("span",{className:"flaticon-".concat(t.pictogram)})),i.a.createElement(ge,null,i.a.createElement(le,{lines:2},t.nameLabel)))},e}return B(t,i.a.Component),_(t,[{key:"render",value:function(){return i.a.createElement(fe,null,this.props.categories.map(this.renderCategory))}}]),t}();function be(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function l(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})}ye.defaultProps={onClick:z.a.noop};var ke={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GPrice"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PriceConverted"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"value"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"formattedValue"},arguments:[],directives:[],selectionSet:void 0}]}}],loc:{start:0,end:72,source:{body:"\n  fragment GPrice on PriceConverted {\n    value\n    formattedValue\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Ee={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GCartItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OrderRecipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipe"},directives:[]}]}}]}}].concat({kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GRecipe"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Recipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"code"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0}]}}],loc:{start:0,end:66,source:{body:"\n  fragment GRecipe on Recipe {\n    id\n    code\n    nameLabel\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}}.definitions),loc:{start:0,end:123,source:{body:"\n  fragment GCartItem on OrderRecipe {\n    id\n    price {\n      ...GPrice\n    }\n    recipe {\n      ...GRecipe\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Oe={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GOrder"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Order"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"countWares"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GCartItem"},directives:[]},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"sidedishCount"},name:{kind:"Name",value:"sideDishesWareCategoriesCount"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:{kind:"Name",value:"priceWithSidedishes"},name:{kind:"Name",value:"priceWithSideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"sidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GCartItem"},directives:[]}]}}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"coverPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"transportFee"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"discounts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"code"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"description"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"totalDiscount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"totalSum"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}}].concat(Ee.definitions,ke.definitions),loc:{start:0,end:560,source:{body:"\n  fragment GOrder on Order {\n    id\n    countWares\n    items {\n      ...GCartItem\n      recipe {\n        sidedishCount: sideDishesWareCategoriesCount\n      }\n      priceWithSidedishes: priceWithSideDishes {\n        ...GPrice\n      }\n      sidedishes: sideDishes {\n        ...GCartItem\n      }\n    }\n    coverPrice {\n      ...GPrice\n    }\n    transportFee {\n      ...GPrice\n    }\n    discounts {\n      code\n      description\n      price {\n        ...GPrice\n      }\n    }\n    totalDiscount {\n      ...GPrice\n    }\n    totalSum {\n      ...GPrice\n    }\n  }\n  \n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Ce={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MAddToOrder"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"recipeId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"createOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderRecipe"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"order"},value:{kind:"Variable",name:{kind:"Name",value:"orderId"}}},{kind:"ObjectField",name:{kind:"Name",value:"recipe"},value:{kind:"Variable",name:{kind:"Name",value:"recipeId"}}},{kind:"ObjectField",name:{kind:"Name",value:"sideDishes"},value:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(Oe.definitions),loc:{start:0,end:248,source:{body:"\n  mutation MAddToOrder($orderId: ID!, $recipeId: ID!, $sidedishes: [ID!]) {\n    createOrderRecipe(\n      orderRecipe: {\n        order: $orderId\n        recipe: $recipeId\n        sideDishes: $sidedishes\n      }\n    ) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},we={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MChangeOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"updateOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}},{kind:"Argument",name:{kind:"Name",value:"orderRecipe"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"sideDishes"},value:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(Oe.definitions),loc:{start:0,end:173,source:{body:"\n  mutation MChangeOrderItem($itemId: ID!, $sidedishes: [ID!]) {\n    updateOrderRecipe(id: $itemId, orderRecipe: { sideDishes: $sidedishes }) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Se={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MRemoveOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"destroyOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(Oe.definitions),loc:{start:0,end:112,source:{body:"\n  mutation MRemoveOrderItem($itemId: ID!) {\n    destroyOrderRecipe(id: $itemId) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Ne={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GOrderCart"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"order"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"orderId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(Oe.definitions),loc:{start:0,end:92,source:{body:"\n  query GOrderCart($orderId: ID!) {\n    order(id: $orderId) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Ie={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GRecipeSidedishes"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Recipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:{kind:"Name",value:"sidedishCategories"},name:{kind:"Name",value:"sideDishesWareCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"minCount"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"maxCount"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:{kind:"Name",value:"sidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}}]}}]}}].concat(ke.definitions),loc:{start:0,end:296,source:{body:"\n  fragment GRecipeSidedishes on Recipe {\n    id\n    nameLabel\n    sidedishCategories: sideDishesWareCategories {\n      id\n      nameLabel\n      minCount\n      maxCount\n      sidedishes: sideDishes {\n        id\n        nameLabel\n        price {\n          ...GPrice\n        }\n      }\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},xe={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GSidedishesForRecipe"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"recipeId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"recipeId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipeSidedishes"},directives:[]}]}}]}}].concat(Ie.definitions),loc:{start:0,end:116,source:{body:"\n  query GSidedishesForRecipe($recipeId: ID!) {\n    recipe(id: $recipeId) {\n      ...GRecipeSidedishes\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},je={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GSidedishesForOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"orderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipeSidedishes"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"selectedSidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}]}}].concat(Ie.definitions),loc:{start:0,end:258,source:{body:"\n  query GSidedishesForOrderItem($itemId: ID!) {\n    item: orderRecipe(id: $itemId) {\n      id\n      recipe {\n        ...GRecipeSidedishes\n      }\n      selectedSidedishes: sideDishes {\n        id\n        recipe {\n          id\n        }\n      }\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Fe=function(){return{recipe:void 0,selection:[],resolve:z.a.noop}},Le=function(e){function t(){var e;return R(this,t),(e=A(this,W(t).apply(this,arguments))).state=Fe(),e.isSidedishSelected=function(t){return e.state.selection.includes(t)},e.onSidedishToggle=function(t){var n=e.state.selection;n=n.includes(t)?n.filter(function(e){return e!==t}):n.concat(t),e.setState({selection:n})},e.onConfirm=function(){e.state.resolve({sidedishes:D(e.state.selection),isConfirmed:!0}),e.setState(Fe)},e.onCancel=function(){e.state.resolve({sidedishes:[],isConfirmed:!1}),e.setState(Fe)},e}return B(t,i.a.Component),_(t,[{key:"selectForRecipe",value:function(e){var t=this;return new Promise(function(n){return be(t,void 0,void 0,P.a.mark(function t(){var r;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.apolloClient.query({query:xe,variables:{recipeId:e}});case 2:r=t.sent,this.setState({recipe:r.data.recipe,resolve:n});case 4:case"end":return t.stop()}},t,this)}))})}},{key:"selectForItem",value:function(e){var t=this;return new Promise(function(n){return be(t,void 0,void 0,P.a.mark(function t(){var r,i;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.apolloClient.query({query:je,variables:{itemId:e}});case 2:r=t.sent,i=r.data.item,this.setState({recipe:i.recipe,resolve:n,selection:i.selectedSidedishes.map(function(e){return e.recipe.id})});case 5:case"end":return t.stop()}},t,this)}))})}},{key:"render",value:function(){var e=this.state.recipe;return e?i.a.createElement(this.props.component,{recipe:e,isSidedishSelected:this.isSidedishSelected,onSidedishToggle:this.onSidedishToggle,onConfirm:this.onConfirm,onCancel:this.onCancel}):null}}]),t}(),Pe=function(e){function t(){var e;return R(this,t),(e=A(this,W(t).apply(this,arguments))).sidedishControl=i.a.createRef(),e.onRecipeClick=function(t){return be(F(F(e)),void 0,void 0,P.a.mark(function e(){var n,r,i;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:if(n=e.sent,!(t.sidedishCount>0)){e.next=12;break}return e.next=6,this.sidedishControl.current.selectForRecipe(t.id);case 6:r=e.sent,i=r.sidedishes,r.isConfirmed&&this.addRecipeToOrder(n,t.id,i),e.next=13;break;case 12:this.addRecipeToOrder(n,t.id);case 13:case"end":return e.stop()}},e,this)}))},e.onItemEdit=function(t){return be(F(F(e)),void 0,void 0,P.a.mark(function e(){var n,r,i;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:return n=e.sent,e.next=5,this.sidedishControl.current.selectForItem(t);case 5:r=e.sent,i=r.sidedishes,r.isConfirmed&&this.updateOrderItemSidedishes(n,t,i);case 9:case"end":return e.stop()}},e,this)}))},e.onItemRemove=function(t){return be(F(F(e)),void 0,void 0,P.a.mark(function e(){var n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:n=e.sent,this.removeOrderItem(n,t);case 4:case"end":return e.stop()}},e,this)}))},e}return B(t,i.a.Component),_(t,[{key:"addRecipeToOrder",value:function(e,t,n){return be(this,void 0,void 0,P.a.mark(function r(){var i;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i={orderId:e,recipeId:t,sidedishes:n},r.next=3,this.props.apolloClient.mutate({mutation:Ce,variables:i,refetchQueries:[{query:Ne,variables:{orderId:e}}]});case 3:case"end":return r.stop()}},r,this)}))}},{key:"updateOrderItemSidedishes",value:function(e,t,n){return be(this,void 0,void 0,P.a.mark(function r(){var i;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i={itemId:t,sidedishes:n},r.next=3,this.props.apolloClient.mutate({mutation:we,variables:i,refetchQueries:[{query:Ne,variables:{orderId:e}}]});case 3:case"end":return r.stop()}},r,this)}))}},{key:"removeOrderItem",value:function(e,t){return be(this,void 0,void 0,P.a.mark(function n(){var r;return P.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r={itemId:t},n.next=3,this.props.apolloClient.mutate({mutation:Se,variables:r,refetchQueries:[{query:Ne,variables:{orderId:e}}]});case 3:case"end":return n.stop()}},n,this)}))}},{key:"render",value:function(){var e=this.onRecipeClick,t=this.onItemEdit,n=this.onItemRemove,r=this.props,a=r.children,o=r.apolloClient,l=r.sidedishPickerComponent;return i.a.createElement(i.a.Fragment,null,a({onRecipeClick:e,onItemEdit:t,onItemRemove:n}),i.a.createElement(Le,{ref:this.sidedishControl,component:l,apolloClient:o}))}}]),t}(),De=function(e){var t=e.orderId,n=e.renderLoading,r=e.renderError,a=e.renderEmpty,o=e.render;return t?i.a.createElement(ce.Query,{query:Ne,variables:{orderId:t},fetchPolicy:"cache-and-network"},function(e){var t=e.data,i=e.error;if(e.loading)return n?n():null;if(i)return console.error(i),r?r(i):null;var l=t.order;return 0===l.countWares?a():o(l)}):a()},Te=function(e){var t=e.recipe,n=e.formatCategory,r=e.formatSidedish;return i.a.createElement("div",null,t.sidedishCategories.map(function(e){return i.a.createElement("div",{key:e.id},n(e),e.sidedishes.map(function(t){return i.a.createElement("span",{key:"".concat(t.id,"-").concat(e.id)},r(t))}))}))},Re=n(12),$e=n(274),_e=n(7507),Me=n(270);const Ge=Re.b.div.withConfig({displayName:"SidedishButtonContainer"})`
  margin: 0 1rem 1rem 0;
  width: 8rem;
  display: inline-block;
`,Ae=({label:e,isSelected:t,onClick:n})=>i.a.createElement(Ge,null,i.a.createElement(w.a,{text:e,onClick:n,color:t?S.a.orange:S.a.greyDark})),We=Re.b.div.withConfig({displayName:"SidedishCategory"})`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0 0 0.2rem 0.2rem;
  color: ${S.a.black};
`,Ve=e=>i.a.createElement(Me.b,{open:!0,onClose:e.onCancel,scroll:"paper",maxWidth:"lg"},i.a.createElement(Me.e,null,e.recipe?i.a.createElement(j.Trans,{id:"Add something else to {0}?",values:{0:e.recipe.nameLabel}}):i.a.createElement(j.Trans,{id:"Loading sidedishes..."})),e.recipe&&i.a.createElement(Me.d,null,i.a.createElement(Te,{recipe:e.recipe,formatCategory:e=>i.a.createElement(We,null,e.nameLabel),formatSidedish:t=>i.a.createElement(Ae,{label:t.nameLabel,isSelected:e.isSidedishSelected(t.id),onClick:()=>e.onSidedishToggle(t.id)})})),e.recipe&&i.a.createElement(Me.c,null,i.a.createElement(w.a,{text:s.d._("Cancel"),onClick:e.onCancel}),i.a.createElement(w.a,{text:s.d._("Confirm"),onClick:e.onConfirm,color:S.a.green}))),Be=({children:e})=>{const{createOrder:t}=Object(p.d)();return i.a.createElement(Pe,{apolloClient:t.client,getOrderId:t.ensureOrder,sidedishPickerComponent:Ve},e)};var qe=n(7529),ze=n(7514);const Ue=Re.b.div.withConfig({displayName:"Container"})`
  display: flex;
  justify-content: space-between;
`,He=Re.b.div.withConfig({displayName:"RecipeCode"})`
  flex: 0 0 5rem;
  text-align: right;
`,Qe=Re.b.div.withConfig({displayName:"RecipeName"})`
  flex: 1 0;
  padding-left: 1rem;
`,Ye=Re.b.div.withConfig({displayName:"PriceToRight"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${S.a.greyMiddle};
`,Ke=({code:e,label:t,price:n})=>i.a.createElement(Ue,null,i.a.createElement(He,null,e),i.a.createElement(Qe,null,t),i.a.createElement(Ye,null,i.a.createElement(ze.a,{price:n}))),Ze=Re.b.div.withConfig({displayName:"OrderCartItemStyled"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${S.a.greyMiddle};
  padding: 0.1rem 0;
`,Je=Re.b.div.withConfig({displayName:"TouchButtonColumn"})`
  flex: 0 0 auto;
  padding-right: 0.5rem;
`,Xe=Re.b.div.withConfig({displayName:"LineColumn"})`
  flex: 1 1 0;
`,et=({item:e,onRemove:t,onEdit:n})=>i.a.createElement(Ze,null,i.a.createElement(Je,null,i.a.createElement(qe.a,{onDelete:t})),i.a.createElement(Je,null,i.a.createElement(w.a,{onClick:n,iconName:"mode_edit",width:S.c.ButtonHeight,height:S.c.ButtonHeight})),i.a.createElement(Xe,null,i.a.createElement(Ke,{key:e.id,code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),e.sidedishes.map(e=>i.a.createElement(Ke,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value})))),tt=Re.b.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`,nt=({order:e})=>i.a.createElement(tt,null,i.a.createElement("b",null,i.a.createElement(Ke,{label:s.d._("Total price"),price:e.totalSum.value})),i.a.createElement(Ke,{label:s.d._("Transport fee"),price:e.transportFee.value}),i.a.createElement(Ke,{label:s.d._("Covers price"),price:e.coverPrice.value}),i.a.createElement(Ke,{label:s.d._("Discount total"),price:-1*e.totalDiscount.value})),rt=Re.b.div.withConfig({displayName:"CartStyled"})`
  margin: 0.1rem 0.1rem 0.1rem 0;
`,it=Re.b.div.withConfig({displayName:"EmptyCartStyled"})`
  margin: 0.5rem 0 0 0;
`,at=e=>{const{createOrder:t}=Object(p.d)(),n=Object(r.useRef)(void 0);return i.a.createElement(Be,null,({onItemRemove:e,onItemEdit:r})=>i.a.createElement(E.a,null,()=>i.a.createElement(De,{key:t.cartRefreshKey,orderId:t.orderId,renderEmpty:()=>i.a.createElement(it,null,i.a.createElement(j.Trans,{id:"Cart is empty"})),renderLoading:()=>n.current||i.a.createElement($e.a,null),render:t=>{const a=i.a.createElement(rt,null,i.a.createElement(nt,{order:t}),i.a.createElement(_e.a,null),t.items.map(t=>i.a.createElement(et,{key:t.id,item:t,onEdit:()=>r(t.id),onRemove:()=>e(t.id)})));return n.current=a,a}})))};var ot=n(7495);function lt(){return(lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ct=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};const dt=Object(Re.b)(g.TextArea).withConfig({displayName:"FormInputTextBoxMultilineStyled"})`
  padding: 0.5rem;
  border-radius: ${S.b.TextComponent};
  outline: none;
  resize: none;
  overflow: auto;
  margin: ${S.c.MarginAroundFormComponents};
  width: ${({width:e})=>e};
`,st=e=>{var{field:t,defaultValue:n,inputWidth:r=S.c.DefaultInputWidth,inputWidthUnit:a=S.c.DefaultSizeUnit,children:o}=e,l=ct(e,["field","defaultValue","inputWidth","inputWidthUnit","children"]);return t?i.a.createElement(dt,lt({field:t,defaultValue:n,width:`${r}${a}`},l)):i.a.createElement(ot.a,l)};var ut=n(7508),mt=n(51);const pt=e=>null;var ft=n(7525);const ht=e=>i.a.createElement(mt.a,{render:({user:e,createOrder:t})=>i.a.createElement(ft.a,{isClearable:!1,selectedBranches:e.currentBranchId?[e.currentBranchId]:[],onSelectionChange:([n])=>{t.orderId&&!window.confirm(s.d._("Changing branch will cancel current order and remove all items from the cart. Proceed?"))||(e.selectBranch(n),t.resetOrder())}})});var vt=n(126),gt=(n(206),n(7530)),yt=n(3),bt=n.n(yt);const kt=bt.a`
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
`;var Et=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function l(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};const Ot=Object(Re.b)(vt.g).withConfig({displayName:"ErrorIcon"})`
  font-size: 1rem;
  color: ${S.a.orange};
`,Ct=Object(Re.b)(vt.c).withConfig({displayName:"NotFoundIcon"})`
  font-size: 1rem;
  color: ${S.a.greyMiddle};
`,wt=Object(Re.b)(vt.b).withConfig({displayName:"FoundIcon"})`
  font-size: 1rem;
  color: ${S.a.green};
`,St=Object(gt.a)(kt),Nt=()=>{const{createOrder:e}=Object(p.d)(),[t,n]=Object(r.useState)(null),{execute:a}=St();return Object(v.e)(()=>Object(h.i)(()=>{!function(t,r){Et(this,void 0,void 0,function*(){if(e.updateFromVam(null),!function(e){return Boolean(e&&e.length>6)}(r))return n(null);n(i.a.createElement(Me.a,{size:20}));const o=yield a({branchId:t,phone:r});if(o.hasAnyError)return n(i.a.createElement(Ot,null));if(o.data){const{vamCustomer:t}=o.data;if(t.isFound)return e.updateFromVam(t),n(i.a.createElement(wt,null))}n(i.a.createElement(Ct,null))})}(e.branchId,e.phone)})),t};var It=n(7509),xt=n(7501),jt=n(169),Ft=n(15),Lt=n(277),Pt=n.n(Lt);var Dt=n(38);const Tt=bt.a`
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
  ${Dt.e}
`;var Rt=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function l(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(o,l)}c((r=r.apply(e,t||[])).next())})};const $t=Object(gt.a)(Tt),_t=e=>e.filter(Ft.a.propSatisfies(Boolean,"gps")),Mt=({onSelect:e,onClear:t,fixedLocations:n,fixedLocationsLabel:a,selectedLocation:o,minSearchLength:l=3,inputPlaceholder:c})=>{const d=Object(v.d)({options:[],isSearching:!1}),{execute:u}=$t(),m=function(e,t=300){const n=Object(r.useCallback)(e,[]),i=Object(r.useRef)(Pt()(n,t));return Object(r.useEffect)(()=>i.current.clear),i.current}(e=>Rt(void 0,void 0,void 0,function*(){d.isSearching=!0;const t=e.trim();if(t.length<l)return d.options=[],void(d.isSearching=!1);const n=yield u({search:t});n.data&&(d.options=_t(n.data.suggest)),d.isSearching=!1}));return Object(v.f)(()=>i.a.createElement(xt.a,{styles:Object(xt.b)({control:e=>Object.assign({},e,{width:"20rem"})}),getOptionLabel:jt.a,options:(()=>n&&0!==n.length?[{label:a,options:[..._t(n)]},{label:s.d._("Matching to input"),options:d.options}]:d.options)(),placeholder:c,value:o,filterOption:Ft.a.T,isClearable:!0,isLoading:d.isSearching,onInputChange:e=>{m(e)},onChange:n=>{n&&!Array.isArray(n)?e(n):t()}}))},Gt=Object(Re.b)(It.a).withConfig({displayName:"InputLine"})`
  justify-content: flex-start;
`,At=Re.b.div.withConfig({displayName:"ZoneWarning"})`
  display: inline-flex;
  align-items: center;
  color: ${S.a.violet};
`,Wt=Object(Re.b)(vt.b).withConfig({displayName:"AddressValid"})`
  font-size: 1rem;
  color: ${S.a.green};
`;function Vt(e){const{createOrder:t}=Object(p.d)(),n=Object(v.c)(()=>{if(!t.vamCustomer)return t.fakeAddress?[t.fakeAddress]:[];const{locations:e}=t.vamCustomer;return e}),a=Object(r.useCallback)(e=>{t.useLocation(e)},[]),o=Object(v.c)(()=>t.notDeliveryLocation?i.a.createElement(At,null,i.a.createElement(vt.f,null),i.a.createElement(j.Trans,{id:"Address is not within any delivery zone"})):t.hasAddress?i.a.createElement(Wt,null):null);return Object(v.f)(()=>i.a.createElement("div",{hidden:!e.isVisible},i.a.createElement(Gt,null,i.a.createElement(Mt,{fixedLocations:n,fixedLocationsLabel:s.d._("Previous addresses"),selectedLocation:t.deliveryAddress||t.fakeAddress||null,onSelect:a,onClear:t.clearLocation,inputPlaceholder:s.d._("Deliver to address").toLocaleLowerCase()}),o)))}var Bt=n(7547),qt=n(67);const zt=[{type:qt.a.MESSENGER,label:Object(j.i18nMark)("Deliver")},{type:qt.a.PICKUP,label:Object(j.i18nMark)("Personal pickup")}];function Ut({field:e}){return i.a.createElement(Bt.a,{field:e,items:zt,formatItem:e=>s.d._(e.label),getItemId:e=>e.type})}const Ht=Re.b.div.withConfig({displayName:"LookupResultIcon"})`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.7rem;
`,Qt=()=>{const{createOrder:e}=Object(p.d)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{icon:"phone"},i.a.createElement(v.a,null,()=>i.a.createElement(ot.b,{field:"phone",isRequired:e.isDelivery,inputWidth:9,validatioName:s.d._("Phone"),placeholder:s.d._("Phone").toLocaleLowerCase()})),i.a.createElement(Ht,null,i.a.createElement(Nt,null))),i.a.createElement(v.a,null,()=>i.a.createElement(d.a,{icon:"streetview"},i.a.createElement(Ut,{field:"deliveryType"}),i.a.createElement(Vt,{isVisible:e.isDelivery}))),i.a.createElement(d.a,{icon:"store"},i.a.createElement(ht,null)),i.a.createElement(ut.a,null),i.a.createElement(d.a,{icon:"person"},i.a.createElement(ot.b,{field:"firstName",inputWidth:6,placeholder:s.d._("First name").toLocaleLowerCase()}),i.a.createElement(ot.b,{field:"lastName",inputWidth:12.7,placeholder:s.d._("Last name").toLocaleLowerCase()})),i.a.createElement(d.a,{icon:"mail_outline"},i.a.createElement(ot.b,{field:"email",inputWidth:20,placeholder:s.d._("E-mail").toLocaleLowerCase()})),i.a.createElement(d.a,{icon:"note"},i.a.createElement(st,{field:"note",inputWidth:20,placeholder:s.d._("Note").toLocaleLowerCase()})),i.a.createElement(pt,null))};var Yt=n(7597);const Kt=Re.b.div.withConfig({displayName:"RecipeStyled"})`
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  padding: 0.2rem 0.5rem 1rem 0.3rem;
  border-bottom: 1px solid ${S.a.greyLight};
  &:hover {
    background-color: ${S.a.yellow};
  }
`,Zt=Re.b.img.withConfig({displayName:"RecipeImage"})`
  width: 4rem;
  height: 4rem;
  display: block;
  float: left;
  object-fit: cover;
  margin: -1rem 1rem 0 0;
`,Jt=Re.b.div.withConfig({displayName:"RecipePrice"})`
  position: absolute;
  right: 0.1rem;
  width: 4.8rem;
  height: 1.8rem;
  padding: 0.12rem 0.7rem 0.3rem 0rem;
  font-weight: 500;
  font-size: 1.1rem;
  color: ${S.a.greyDarkest};
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
`,Xt=Re.b.div.withConfig({displayName:"RecipeDescription"})`
  color: ${S.a.greyMiddle};
  font-size: 0.8rem;
  min-height: 1rem;
`,en=({recipe:e})=>i.a.createElement(Kt,null,e.image&&i.a.createElement(Zt,{src:e.image,alt:e.nameLabel}),i.a.createElement(Jt,null,i.a.createElement(ze.a,{price:e.price.value,currencyCode:e.price.currency.code})),i.a.createElement("div",null,e.nameLabel),i.a.createElement(Xt,null,e.descriptionLabel||" ")),tn=Object(Re.b)(c.a).withConfig({displayName:"FullCard"})`
  height: 100%;
`,nn=U.css`
  outline: none;
`,rn=({onRecipeClick:e,scrollToCategory:t,orderMenu:n})=>i.a.createElement(tn,null,i.a.createElement(pe,{recipeCategories:n,formatRecipe:e=>i.a.createElement(en,{recipe:e}),formatCategory:e=>i.a.createElement("b",null,e.nameLabel),onRecipeClick:e},({listItems:e,rowRenderer:n})=>i.a.createElement(Yt.a,null,({width:r,height:a})=>i.a.createElement(Yt.c,{className:nn,height:a-130,overscanRowCount:2,rowCount:e.length,rowHeight:({index:t})=>e[t].recipe?70:40,rowRenderer:n,scrollToAlignment:"start",scrollToIndex:t?e.findIndex(Ft.a.pathEq(["category","id"],t)):void 0,width:r})))),an=({orderMenu:e,onClick:t})=>i.a.createElement(c.a,null,i.a.createElement(ye,{categories:e,onClick:t}));var on=n(37);const ln=bt.a`
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
`,cn=bt.a`
  fragment GOrderMenuCategory on WareCategory {
    id
    nameLabel
    pictogram
    recipes(enabled: true, isAvailable: true) {
      ...GOrderMenuRecipe
    }
  }
  ${ln}
`,dn=bt.a`
  query GOrderMenu($branchId: ID!) {
    orderMenu: wareCategories(
      wareCategoryType: MAIN
      companyBranch: $branchId
    ) {
      ...GOrderMenuCategory
    }
  }
  ${cn}
  ${ln}
`,sn=Object(on.a)(dn),un=e=>{const{createOrder:t}=Object(p.d)();return i.a.createElement(Be,null,({onRecipeClick:e})=>i.a.createElement(E.a,null,()=>i.a.createElement(sn,{variables:{branchId:t.branchId},render:({orderMenu:n})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(an,{orderMenu:n,onClick:t.scrollToCategory}),i.a.createElement(E.a,null,()=>i.a.createElement(rn,{orderMenu:n,scrollToCategory:t.scrollMenuToCategoryId,onRecipeClick:e})))})))};const mn=({match:e,location:{state:t}})=>i.a.createElement(k,{callingPhone:e.params.phone,callingEventId:t?t.eventId:null},i.a.createElement(f,null),i.a.createElement(u.a,{layouts:[{i:"bcancelorder",x:6,y:0,w:2,h:1},{i:"bacceptored",x:10,y:0,w:3,h:1}],pageTitle:s.d._("New order"),useBackButton:!0},i.a.createElement("div",{key:"bcancelorder"},i.a.createElement(x,null)),i.a.createElement("div",{key:"bacceptored"},i.a.createElement(I,null))),i.a.createElement(m.a,{widthInColumns:5,withScrollArea:!0},i.a.createElement(c.a,null,i.a.createElement(d.a,{icon:"shopping_cart"},i.a.createElement(at,null))),i.a.createElement(c.a,null,i.a.createElement(Qt,null))),i.a.createElement(m.a,{column:5,widthInColumns:11,withScrollArea:!1},i.a.createElement(un,null))),pn=({match:e})=>i.a.createElement(a.e,null,i.a.createElement(l.a,{exact:!0,path:e.path,component:mn}),i.a.createElement(a.c,{component:o.a}));var fn=n(7577),hn=n(7535),vn=n(7581),gn=n(7531),yn=n(52),bn=n(7569);const kn=({order:e,onClick:t})=>e.gps?i.a.createElement(gn.OverlayView,{key:e.id,position:Object(yn.b)(e.gps),mapPaneName:gn.OverlayView.OVERLAY_MOUSE_TARGET},i.a.createElement(bn.a,{deliverAt:e.deliverAt,deliveredAt:null,onClick:t})):null,En=[qt.c.NEW_ORDERS,qt.c.PREPARING,qt.c.ON_WAY],On=({isLoading:e,noFilter:t,orders:n})=>i.a.createElement(mt.a,{render:({order:r})=>i.a.createElement(vn.a,{model:r.map,render:()=>e||t?null:n.filter(e=>En.includes(Object(hn.b)(e))).map(e=>i.a.createElement(kn,{key:e.id,order:e,onClick:()=>r.list.focusOrderDetail(e.id)}))})});const Cn=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{layouts:[{i:"bOrders",x:15,y:1,w:1,h:2}],pageTitle:s.d._("Map"),scrollPageTitle:!1},i.a.createElement("div",{key:"bOrders"},i.a.createElement(fn.a,{count:null}))),i.a.createElement(hn.a,null,e=>i.a.createElement(m.a,{widthInColumns:15},i.a.createElement(On,e))));var wn=n(7496),Sn=n(7541),Nn=n(7600),In=n(7914),xn=n.n(In),jn=n(473);const Fn=({isLoading:e,categorizedOrders:t})=>i.a.createElement(mt.a,{observe:!0,render:({config:n,order:r})=>{if(e||!t)return null;const a=!Ft.a.all(e=>r.list.isOrderDetailOpen(e.id),t[qt.c.NEW_ORDERS]||[]);return i.a.createElement(jn.a,{shouldPlay:a,intervalSec:n.orderListSoundIntervalSec,soundUrl:xn.a})}});var Ln=n(83);const Pn=Re.b.div.withConfig({displayName:"DivTopRightStyled"})`
  position: absolute;
  top: 0;
  right: 0;
  width: 3.4375rem;
  height: 3.4375rem;
`,Dn=()=>i.a.createElement(Pn,null,i.a.createElement(Ln.b,{to:"/order/map"},i.a.createElement(w.a,{iconName:"map",color:S.a.greyMiddle})));var Tn=n(7524),Rn=n(7598);const $n=({orders:e,category:t,listModel:n})=>e.length>0?i.a.createElement(i.a.Fragment,null,i.a.createElement(Tn.a,null,t.code),e.map(e=>i.a.createElement(Rn.a,{key:e.id,order:e,listModel:n,showBranch:n.branches.length>1}))):null,_n=({isLoading:e,noFilter:t,orders:n,categories:r,categorizedOrders:a})=>i.a.createElement(mt.a,{render:({order:o})=>e?i.a.createElement($e.a,null):t?i.a.createElement(Tn.a,null,i.a.createElement(j.Trans,{id:"Select at least one branch"})):0===n.length?i.a.createElement(Tn.a,null,i.a.createElement(j.Trans,{id:"No orders"})):i.a.createElement(i.a.Fragment,null,r.map(e=>i.a.createElement($n,{key:e.enum,category:e,orders:a[e.enum]||[],listModel:o.list})))}),Mn=()=>i.a.createElement(mt.a,{render:({order:e})=>i.a.createElement(ft.a,{selectedBranches:e.list.branches,onSelectionChange:t=>{e.list.setBranchFilter(t)},onSelectionClear:e.list.clearBranchFilter,textColor:S.a.turquoise,isMulti:!0,isClearable:!1})});const Gn=Object(Re.b)("div").withConfig({displayName:"FilterContainerStyled"})`
  margin: -0.05rem 0rem -0.05rem -0.18rem;
`,An=e=>i.a.createElement(hn.a,null,e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(Fn,e),i.a.createElement(m.a,{withScrollArea:!0,row:2,widthInColumns:8,scrollAreaId:"order-list"},i.a.createElement(_n,e)),i.a.createElement(m.a,{widthInColumns:8,column:8,withScrollArea:!1},i.a.createElement(On,e),i.a.createElement(Dn,null)),i.a.createElement(u.a,{layouts:[{i:"filter",x:0,y:1,w:6,h:1},{i:"neworder",x:6,y:1,w:2,h:1}],pageTitle:s.d._("Orders"),showSoundControl:!0,scrollPageTitle:!1},i.a.createElement(Sn.a,{key:"filter",component:()=>i.a.createElement(Gn,null,i.a.createElement(Mn,null))}),i.a.createElement(Sn.a,{key:"neworder",component:()=>i.a.createElement(wn.a,{mutationName:"createOrder"},i.a.createElement(Nn.a,{showOnlyText:!0}))}))));n.d(t,"OrderRoutes",function(){return Wn});const Wn=({match:e})=>i.a.createElement(a.e,null,i.a.createElement(l.a,{exact:!0,path:e.path,component:An}),i.a.createElement(l.a,{path:`${e.path}/create/:phone?`,component:pn}),i.a.createElement(l.a,{path:`${e.path}/map`,component:Cn}),i.a.createElement(a.c,{component:o.a}));t.default=Wn}}]);
//# sourceMappingURL=50.4ee7c520.chunk.js.map