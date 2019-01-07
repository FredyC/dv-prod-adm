(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{7704:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.OverviewRoutes=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(24),i=r(282),o=r(71),u=r(275),c=r(276),d=r(8265),s=r(8268),f=r(8274),m=r(8277),p=r(8281);const y=({match:e})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(i.PageTitle,{title:o.i18n._("Overview")}),n.default.createElement(l.Switch,null,n.default.createElement(c.SecureRoute,{exact:!0,path:e.path,component:p.OverviewPage}),n.default.createElement(c.SecureRoute,{path:`${e.path}/closure/history`,component:d.ClosureHistoryPage}),n.default.createElement(c.SecureRoute,{path:`${e.path}/closure/:reportId?`,component:s.ClosurePage}),n.default.createElement(c.SecureRoute,{path:`${e.path}/statistics`,component:f.DailyStatisticsPage}),n.default.createElement(c.SecureRoute,{path:`${e.path}/orders`,component:m.OrdersStatisticsPage}),n.default.createElement(l.Route,{component:u.NotFoundPage})));t.OverviewRoutes=y;var h=y;t.default=h},7709:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconLine=void 0;var a=o(r(0)),n=o(r(45)),l=r(46),i=r(150);function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const c=n.default.div.withConfig({displayName:"IconLineWrap"})`
  display: flex;
`;c.displayName="IconLineWrap";const d=n.default.div.withConfig({displayName:"DescriptionContainer"})`
  margin: ${({labelMargin:e="0.5rem 0.2rem 0 auto"})=>e};
  min-width: ${({labelWidth:e=0,labelWidthUnits:t=l.Spacing.DefaultSizeUnit})=>e+t};
  flex: 0 0 auto;
  text-align: right;
`,s=n.default.div.withConfig({displayName:"IconLineChildren"})`
  margin-left: 0.5rem;
  align-self: stretch;
  flex: 1 1 auto;
`,f=n.default.div.withConfig({displayName:"LabelStyled"})`
  padding-top: 0.2rem;
  display: inline-block;
`;s.displayName="IconLineChildren";t.IconLine=(e=>{var{icon:t,label:r,labelWidth:n,labelWidthUnits:o,labelMargin:m,children:p}=e,y=u(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);let h;return t&&(h="string"===typeof t?a.default.createElement(i.Icon,{iconName:t,color:l.Colors.greyDark}):a.default.createElement(t,{nativeColor:l.Colors.greyDark})),a.default.createElement(c,y,a.default.createElement(d,{labelWidth:n,labelWidthUnits:o,labelMargin:m},h,r?a.default.createElement(f,null,r):null),a.default.createElement(s,null,p))})},7711:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanMutate=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7719),i=r(93);t.CanMutate=(({mutationName:e,children:t})=>{const{user:r}=(0,i.useRoot)();return r.canMutate(e)?n.default.createElement(n.default.Fragment,null,t):n.default.createElement(l.NoAccess,null,`No access to mutation ${e}`)})},7715:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Headline=void 0;var a,n=(a=r(45))&&a.__esModule?a:{default:a},l=r(46);const i=n.default.h2.withConfig({displayName:"Headline"})`
  color: ${({light:e=!1})=>e?l.Colors.greyLight:l.Colors.greyDarkest};
  font-weight: lighter;
  margin: ${({margin:e="0 0.5rem 0 0.5rem"})=>e};
  font-size: ${({size:e})=>"smaller"===e&&"1rem"};
`;t.Headline=i},7716:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectControl=function(e){return a.default.createElement(n.default,o({},e,{styles:u(e.styles)}))},t.composeSelectControlStyles=void 0;var a=i(r(0)),n=i(r(7753)),l=r(46);function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const u=(e={})=>Object.assign({},e,{control:(t,r)=>{const{selectProps:{width:a,minWidth:n}}=r,i=Object.assign({},t,{border:`1px solid ${l.Colors.greyMiddle}`,margin:l.Spacing.MarginAroundFormComponents,width:void 0!==a?`${a}rem`:"100%",minWidth:void 0!==n?`${n}rem`:"8rem"});return e.control?e.control(i,r):i},menu:(t,r)=>{const{selectProps:{width:a}}=r,n=Object.assign({},t,{zIndex:20,color:l.Colors.black,width:void 0!==a?`${a}rem`:"100%"});return e.menu?e.menu(n,r):n}});t.composeSelectControlStyles=u},7717:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayoutFullHeightItem=void 0;var a=o(r(0)),n=o(r(45)),l=r(7730),i=r(46);function o(e){return e&&e.__esModule?e:{default:e}}const u=n.default.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+i.Spacing.LayoutGridCellMargin+")":"calc(100vh - (2 * "+i.Spacing.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+i.Spacing.LayoutGridCellMargin+")":i.Spacing.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+i.Spacing.LayoutGridCellMargin+")":"calc(3.9375rem + "+i.Spacing.LayoutGridCellMargin+")")()};
`,c=n.default.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`;t.PageLayoutFullHeightItem=(({children:e,row:t=1,column:r=0,widthInColumns:n=16,withScrollArea:i=!1,scrollAreaId:o})=>a.default.createElement(u,{column:r,row:t,widthInColumns:n,withScrollArea:i},i?a.default.createElement(l.ScrollArea,{id:o},e):a.default.createElement(c,null,e)))},7718:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.FlexRowSingle=void 0;const n=((a=r(45))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`;t.FlexRowSingle=n},7719:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoAccess=void 0;var a;r(123),r(273),(a=r(0))&&a.__esModule;t.NoAccess=(({children:e})=>null)},7720:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanQuery=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7719),i=r(93);t.CanQuery=(({queryName:e,children:t})=>{const{user:r}=(0,i.useRoot)();return r.canQuery(e)?n.default.createElement(n.default.Fragment,null,t):n.default.createElement(l.NoAccess,null,`No access to query ${e}`)})},7723:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalSeparator=void 0;var a=i(r(0)),n=i(r(45)),l=r(46);function i(e){return e&&e.__esModule?e:{default:e}}const o=n.default.div.withConfig({displayName:"HorizontalSeparatorStyled"})`
  border-top: 1px solid ${l.Colors.greyLight};
  margin: 0.25rem 0rem;
`;t.HorizontalSeparator=(({visible:e=!0})=>e?a.default.createElement(o,null):null)},7724:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.FlexColumn=void 0;const n=((a=r(45))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"FlexColumn"})`
  flex: ${function({fixedWidth:e=!1,width:t,widthGrowIndex:r=0}){return e?t?`0 0 ${t}`:"0 0":`${r} 0`}};
  padding: ${function({padding:e="0.25rem"}){return e}};
  margin: ${function({margin:e=""}){return e}};
`;t.FlexColumn=n},7727:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSnackBar=function(){const e=(0,l.useContext)(n.SnackbarContextNext),t=(0,l.useCallback)(t=>e(t,i),[]),r=(0,l.useCallback)(t=>e(t,o),[]),a=(0,l.useCallback)(t=>e(t,u),[]),d=(0,l.useCallback)(t=>e(t,c),[]);return{enqueueSnackbar:e,enqueueSuccess:t,enqueueError:r,enqueueWarning:a,enqueueInfo:d}};var a,n=r(280),l=r(0);!function(e){e.default="default",e.error="error",e.success="success",e.warning="warning",e.info="info"}(a||(a={}));const i={variant:a.success},o={variant:a.error},u={variant:a.warning},c={variant:a.info}},7729:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,a.useContext)(n.__RouterContext)};var a=r(0),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(24))},7730:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollArea=void 0;const n=((a=r(45))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`;t.ScrollArea=n},7731:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Price=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5782);t.Price=(({price:e,currencyCode:t,className:r})=>n.default.createElement("span",{className:r},t?`${(0,l.formatPrice)(e)} ${t}`:(0,l.formatPrice)(e)))},7732:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectControlFlat=void 0;var a,n=r(122),l=(a=r(0))&&a.__esModule?a:{default:a},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(45)),o=r(47);const u=i.default.div.withConfig({displayName:"ItemStyled"})`
  margin: 0.5rem 0.6rem;
  display: inline-block;
  cursor: pointer;
  color: ${({textColor:e})=>e};
  ${function({isSelected:e}){if(!e)return"";return i.css`
    font-weight: bolder;
    text-decoration: underline;
  `}};
`,c=i.default.div.withConfig({displayName:"SelectorStyled"})`
  border: ${({isInvalid:e})=>!0===e?"1px red solid":"auto"};
`;class d extends l.default.Component{hasSelection(){const{isMulti:e,selectedItem:t,selectedItems:r}=this.props;return e?Array.isArray(r)&&r.length>0:null!=t}isItemSelected(e){const{isMulti:t,selectedItem:r,selectedItems:a}=this.props;return t&&Array.isArray(a)?o.RM.contains(e,a):o.RM.equals(r,e)}updateSelection(e){const{isMulti:t,selectedItems:r=[],onSingleSelection:a,onMultiSelection:n}=this.props;null===e?t&&n?n([]):a&&a(null):t&&n?this.isItemSelected(e)?n(Array.isArray(r)?o.RM.without([e],r):[e]):n(Array.isArray(r)?o.RM.concat(r,[e]):[]):a&&a(e)}render(){const{items:e,isClearable:t,isInvalid:r=!1,textColor:a="inherit",formatItem:i}=this.props;return l.default.createElement(c,{isInvalid:r},t&&l.default.createElement(u,{isSelected:!this.hasSelection(),textColor:a,onClick:()=>{this.updateSelection(null)}},l.default.createElement(n.Trans,{id:"optionselector.clear-filter"})),e.map((e,t)=>l.default.createElement(u,{key:t,isSelected:this.isItemSelected(e),textColor:a,onClick:()=>{this.updateSelection(e)}},i(e))))}}t.SelectControlFlat=d,d.defaultProps={formatItem:o.RM.prop("displayName"),getItemValue:o.RM.prop("id")}},7734:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormSubmit=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7708),i=r(7735),o=r(5777),u=r(46);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.FormSubmit=(e=>{var{children:t}=e,r=d(e,["children"]);return n.default.createElement(l.FormApi,null,e=>n.default.createElement(o.TouchButton,c({color:u.Colors.green,disabled:!(0,i.isFormValid)(e)||e.submitting,onClick:t=>{t.preventDefault(),e.submitForm(t)}},r),t))})},7735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFormValid=function(e){return!e.errors||0===Object.keys(e.errors).length},t.validateIsRequired=function(e){return t=>(0,a.isEmpty)(t+"")?n.i18n._("{fieldName} must be entered",{fieldName:e}):null};var a=r(7726),n=r(71)},7736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchPicker=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(93),i=r(47),o=r(7743),u=r(7754);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.CompanyBranchPicker=(({breakpoint:e=3,selectedBranches:t=[],isMulti:r=!1,isClearable:a=!0,textColor:d,onSelectionChange:s,onSelectionClear:f,getDropdownProps:m=(()=>({}))})=>{const{user:p}=(0,l.useRoot)(),y=e=>t.includes(e.id),h={textColor:d,isClearable:a,isMulti:r,branches:p.branches,selectedBranch:p.branches.find(y),selectedBranches:p.branches.filter(y),onSingleSelection(e){null===e&&f?f():null!==e&&s&&s([e.id],[e])},onMultiSelection(e){0===e.length&&f?f():e.length&&s&&s(e.map(i.RM.prop("id")),e)}};return p.branches.length<e?n.default.createElement(u.CompanyBranchFlatSelect,h):n.default.createElement(o.CompanyBranchDropdown,c({},h,m()))})},7741:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useGuardedMutation=function(e,t={}){const r=s.i18n._("Unexpected error occured while sending a request. Our team was notified about the issue."),{enqueueSnackbar:a,enqueueError:n,enqueueInfo:i}=(0,m.useSnackBar)(),f=(0,o.useCallback)(e=>{e.forEach(i)},[]),h=(0,o.useCallback)(e=>{const t=e.filter(c.RM.propEq("showToUser",!0));0===t.length?n(r):f(t.map(c.RM.prop("message")))},[]),v=(0,o.useCallback)(e=>{if((0,l.isApolloError)(e)){if(e.networkError)return void n(s.i18n._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void h(e.graphQLErrors)}(0,d.reportError)(e),a(r,{action:[o.default.createElement(y,{key:"feedback"})]})},[]),g=(0,u.useMutation)(e,t);return e=>p(this,void 0,void 0,function*(){try{const a=yield g({variables:e});if(a.errors)return h(a.errors),null;if(!a.data)return null;const n=a.data;if(t.getUserErrors){const e=t.getUserErrors(n);null!==e&&f(e)}return n}catch(r){return v(r),null}})};var a,n=r(122),l=r(32),i=(a=r(5798))&&a.__esModule?a:{default:a},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),u=r(279),c=r(47),d=r(97),s=r(71),f=r(5777),m=r(7727);var p=function(e,t,r,a){return new(r||(r=Promise))(function(n,l){function i(e){try{u(a.next(e))}catch(t){l(t)}}function o(e){try{u(a.throw(e))}catch(t){l(t)}}function u(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,o)}u((a=a.apply(e,t||[])).next())})};function y(){return o.default.createElement(f.TouchButton,{onClick:()=>i.default.showReportDialog()},o.default.createElement(n.Trans,{id:"Submit feedback"}))}},7743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchDropdown=void 0;var a,n=r(122),l=(a=r(0))&&a.__esModule?a:{default:a},i=r(7751),o=r(7716),u=r(47),c=r(71);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const f=e=>{const{getStyles:t}=e,r=e.innerProps,{ref:a}=r,i=s(r,["ref"]);return l.default.createElement("div",d({},i,{ref:a,style:t("clearIndicator",e)}),l.default.createElement("div",{style:{padding:"0px 5px"}},l.default.createElement(n.Trans,{id:"All"})))};t.CompanyBranchDropdown=(e=>{var{branches:t,selectedBranch:r,onSingleSelection:a,selectedBranches:n,onMultiSelection:m}=e,p=s(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return l.default.createElement(o.SelectControl,d({value:p.isMulti?n:r,placeholder:p.isMulti?c.i18n._("Filter branches..."):c.i18n._("Select a branch"),options:t,getOptionValue:u.RM.prop("id"),formatOptionLabel:e=>l.default.createElement(i.CompanyBranch,{branch:e}),filterOption:(e,t)=>e.data.name.toLocaleLowerCase().includes(t.toLocaleLowerCase()),closeMenuOnSelect:!p.isMulti,components:{ClearIndicator:f},styles:{clearIndicator:e=>Object.assign({},e,{cursor:"pointer"})},onChange:e=>{p.isMulti&&m&&Array.isArray(e)&&m(e),!p.isMulti&&a&&(Array.isArray(e)?a(u.RM.head(e)||null):a(e||null))}},p))})},7744:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useExecutableQuery=function(e,t={}){const r=(0,o.useApolloClient)(),d=(0,i.useObservable)({data:null,loading:!1,wasExecuted:!1,get hasAnyError(){return Boolean(d.errors&&d.errors.length||d.error)}});return{result:d,execute:i=>c(this,void 0,void 0,function*(){d.loading=!0;try{const n=yield r.query(Object.assign({},t,{query:e,variables:i}));(0,l.runInAction)(()=>{d.wasExecuted=!0,d.data=n.data,d.errors=n.errors,d.loading=!1})}catch(o){(0,a.isApolloError)(o)?(0,l.runInAction)(()=>{d.error=o,d.errors=o.graphQLErrors,d.loading=!1}):((0,l.runInAction)(()=>{d.error=o,d.loading=!1}),(0,u.reportError)(o))}return d.errors&&(0,u.reportFailingQuery)(d.errors,{query:(0,n.getOperationName)(e),variables:i}),d})}};var a=r(32),n=r(31),l=r(11),i=r(94),o=r(93),u=r(97),c=function(e,t,r,a){return new(r||(r=Promise))(function(n,l){function i(e){try{u(a.next(e))}catch(t){l(t)}}function o(e){try{u(a.throw(e))}catch(t){l(t)}}function u(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,o)}u((a=a.apply(e,t||[])).next())})}},7745:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOrderState=s,t.OrderListLoader=void 0;var a,n=r(151),l=(a=r(0))&&a.__esModule?a:{default:a},i=r(95),o=r(148),u=r(47),c=r(7806);const d=[o.OrderStateCategoryEnum.NewOrders,o.OrderStateCategoryEnum.Preparing,o.OrderStateCategoryEnum.ReadyToDeliver,o.OrderStateCategoryEnum.OnWay,o.OrderStateCategoryEnum.Finished];function s(e){return e.orderStateCategory}function f(e,t){const{order:r}=e.updatedOrder;if(!r)return t;let a=!1;const n=u.RM.reject(m,t.orders).map(e=>e.id===r.id?(a=!0,r):e);return a||n.unshift(r),Object.assign({},t,{orders:n})}function m(e){return e.orderStateCategory===o.OrderStateCategoryEnum.Finished&&(0,n.differenceInHours)(new Date,e.createdAt)>e.companyBranch.oldOrderThreshold}t.OrderListLoader=(({children:e,includeOldFinished:t=!1})=>l.default.createElement(i.WithRoot,{render:r=>{if(!r.order.list.hasBranchFilter)return e({isLoading:!1,noFilter:!0});const a={branches:r.order.list.branchesFilter,categories:d,includeOldFinished:t};return l.default.createElement(c.QueryOrderList,{fetchPolicy:"cache-and-network",refetchOnConnectionLost:!0,variables:a,renderLoading:!1,render:({orders:t=[],orderStateCategories:r=[]},n)=>l.default.createElement(c.SubscribeOrderList,{queryResult:n,variables:a,handleUpdate:f},e({isLoading:n.loading,noFilter:!1,orders:t,categorizedOrders:function(e){return e.reduce((e,t)=>{const r=s(t);return d.includes(r)?(e[r]?e[r].push(t):e[r]=[t],e):e},{})}(t),categories:r.filter(e=>d.includes(e.enum))}))})}}))},7747:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardListTitle=void 0;var a,n=(a=r(45))&&a.__esModule?a:{default:a},l=r(46);const i=n.default.h2.withConfig({displayName:"CardListTitle"})`
  color: ${l.Colors.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`;t.CardListTitle=i},7750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryTimeDialog=void 0;var a=r(122),n=r(123),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),i=r(7803),o=r(5777);t.DeliveryTimeDialog=(({title:e,onConfirm:t,onCancel:r,children:u,cancelText:c,refApi:d})=>{const[s,f]=(0,l.useState)(!1),m=()=>f(!0),p=()=>f(!1);return d&&(d.current={openDialog:m,closeDialog:p}),l.default.createElement(l.default.Fragment,null,u&&u({openDialog:m,closeDialog:p}),l.default.createElement(n.Dialog,{open:s,onClose:p},l.default.createElement(n.DialogTitle,null,e),l.default.createElement(n.DialogContent,null,l.default.createElement(i.DeliveryMinutes,{onMinuteClick:e=>{p(),t(e)}})),l.default.createElement(n.DialogActions,null,l.default.createElement(o.TouchButton,{onClick:()=>{p(),r&&r()}},c||l.default.createElement(a.Trans,{id:"Cancel"})))))})},7751:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranch=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7752);t.CompanyBranch=(({branch:e,onClick:t,short:r=!1,showBrand:a=!0})=>n.default.createElement(l.CursorContainer,{cursor:"pointer",onClick:t},r?e.name.substr(0,8):n.default.createElement(n.default.Fragment,null,n.default.createElement("span",null,e.name),a&&n.default.createElement("span",null,` [${e.brand.name}]`))))},7752:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.CursorContainer=void 0;const n=((a=r(45))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"CursorContainer"})`
  cursor: ${({cursor:e="default"})=>e};
`;t.CursorContainer=n},7754:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchFlatSelect=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7732),i=r(46);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.CompanyBranchFlatSelect=(e=>{var{branches:t,selectedBranch:r,selectedBranches:a,textColor:c=i.Colors.black}=e,d=u(e,["branches","selectedBranch","selectedBranches","textColor"]);return n.default.createElement(l.SelectControlFlat,o({items:t,selectedItem:r,selectedItems:a,textColor:c,formatItem:e=>n.default.createElement("span",{title:e.brand.name},e.name)},d))})},7757:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayoutItem=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(149),l=r(7711),i=r(7720);var o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.PageLayoutItem=(e=>{var{route:t,component:r,canQuery:u,canMutate:c}=e,d=o(e,["route","component","canQuery","canMutate"]);let s=t?a.default.createElement(n.Link,{to:t},(0,a.createElement)(r)):(0,a.createElement)(r);return u&&(s=a.default.createElement(i.CanQuery,{queryName:u},s)),c&&(s=a.default.createElement(l.CanMutate,{mutationName:c},s)),a.default.createElement("div",d,s)})},7758:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.LinkStyled=void 0;const n=((a=r(45))&&a.__esModule?a:{default:a}).default.a.withConfig({displayName:"LinkStyled"})`
  color: inherit;
  text-decoration-color: rgba(0, 0, 0, 0.08);
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
  &:visited {
    text-decoration-color: rgba(0, 0, 0, 0.08);
  }
`;t.LinkStyled=n},7759:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWareLine=void 0;var a=o(r(0)),n=o(r(45)),l=r(7731),i=r(46);function o(e){return e&&e.__esModule?e:{default:e}}const u=n.default.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,c=n.default.div.withConfig({displayName:"CodeContainerStyled"})`
  flex: 0 0 5rem;
`,d=n.default.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${i.Colors.greyMiddle};
`,s=n.default.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${i.Colors.greyMiddle};
`;t.OrderWareLine=(({code:e,label:t,price:r})=>a.default.createElement(u,null,a.default.createElement(c,null,e),a.default.createElement(d,null,t),a.default.createElement(s,null,a.default.createElement(l.Price,{price:r}))))},7760:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resolveLocation=c,t.RelativeLink=void 0;var a=i(r(0)),n=r(149),l=i(r(300));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};function c(e,t){if("string"===typeof e)return(0,l.default)(e,t);const r=(0,l.default)(e.pathname||"",t);return Object.assign({},e,{pathname:r})}t.RelativeLink=(e=>{var{to:t,from:r}=e,l=u(e,["to","from"]);return a.default.createElement(n.Route,{children:({location:e})=>a.default.createElement(n.Link,o({to:c(t,r||`${e.pathname}/`)},l))})})},7766:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTickerFragment=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},l=r(96);const i=n.default`
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
  ${l.AddressFragment}
  ${l.CustomerFragment}
`;t.OrderTickerFragment=i},7781:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryTimeBadge=void 0;var a,n=r(273),l=r(151),i=r(5785),o=(a=r(0))&&a.__esModule?a:{default:a},u=r(7782),c=r(5795);const d=i.css`
  padding: 0.2rem 0.3rem 0.1rem 0.3rem;
`;t.DeliveryTimeBadge=(({deliverAt:e,deliveredAt:t,isCancelled:r=!1,onClick:a})=>{const i=!(t||r),s=(0,c.useTimer)({interval:c.MINUTE,enabled:i});let f=u.ETimeBadgeVariant.UNKNOWN;if(r)return o.default.createElement(u.TimeBadge,{variant:f,className:d},o.default.createElement(n.CancelOutlined,null));if(!e)return o.default.createElement(u.TimeBadge,{variant:f},"\u2754");const m=(0,l.differenceInMinutes)(e,t||s);return f=m>20?u.ETimeBadgeVariant.NORMAL:m>0?u.ETimeBadgeVariant.WARNING:u.ETimeBadgeVariant.CRITICAL,o.default.createElement(u.TimeBadge,{minutes:m,variant:f,onClick:a})})},7782:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimeBadge=t.ETimeBadgeVariant=void 0;var a,n=r(5785),l=u(r(0)),i=u(r(45)),o=r(46);function u(e){return e&&e.__esModule?e:{default:e}}t.ETimeBadgeVariant=a,function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.CRITICAL=1]="CRITICAL",e[e.WARNING=2]="WARNING",e[e.NORMAL=3]="NORMAL"}(a||(t.ETimeBadgeVariant=a={}));const c=i.default.div.withConfig({displayName:"TimeBadgeStyled"})`
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.4rem 0.3rem 0.1rem 0.3rem;
  border: 1px solid white;
  border-radius: 4rem;
  color: ${o.Colors.white};
  background: ${o.Colors.greyMiddle};
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`,d={[a.UNKNOWN]:(0,i.default)(c)``,[a.CRITICAL]:(0,i.default)(c)`
    background: ${o.Colors.red};
  `,[a.WARNING]:(0,i.default)(c)`
    background: ${o.Colors.orange};
    color: ${o.Colors.black};
    font-weight: bold;
  `,[a.NORMAL]:(0,i.default)(c)`
    background: ${o.Colors.green};
  `},s=n.css`
  font-size: 0.8rem;
  padding: 0.6rem 0.3rem 0 0.3rem;
`,f=n.css`
  cursor: pointer;
`;t.TimeBadge=(({minutes:e,className:t,children:r,variant:a,onClick:i})=>{const o=d[a];let u=r;const c=[];return void 0!==e&&(u=e<-99?"\u2796":e.toString(),(e>99||e<-9)&&c.push(s)),i&&c.push(f),l.default.createElement(o,{onClick:i,className:(0,n.cx)(t,...c)},u)})},7785:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(7784))&&a.__esModule?a:{default:a};const l=r(7921);n.default.updateLocale("cs",l);var i=n.default;t.default=i},7786:function(e,t,r){"use strict";r.r(t),r.d(t,"defaultProps",function(){return f}),r.d(t,"Facebook",function(){return i}),r.d(t,"Instagram",function(){return u}),r.d(t,"Code",function(){return c}),r.d(t,"List",function(){return d}),r.d(t,"BulletList",function(){return s});var a=r(0),n=function(){return Math.random().toString(36).substring(2)},l=function(e){var t=e.uniquekey?e.uniquekey+"-idClip":n(),r=e.uniquekey?e.uniquekey+"-idGradient":n(),l=e.rtl?["1; -3","2; -2","3; -1"]:["-3; 1","-2; 2","-1; 3"];return Object(a.createElement)("svg",{viewBox:"0 0 "+e.width+" "+e.height,style:e.style,preserveAspectRatio:e.preserveAspectRatio,className:e.className},Object(a.createElement)("rect",{style:{fill:"url(#"+r+")"},clipPath:"url(#"+t+")",x:"0",y:"0",width:e.width,height:e.height}),Object(a.createElement)("defs",null,Object(a.createElement)("clipPath",{id:t},e.children),Object(a.createElement)("linearGradient",{id:r},Object(a.createElement)("stop",{offset:"0%",stopColor:e.primaryColor,stopOpacity:e.primaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:l[0],dur:e.speed+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:e.secondaryColor,stopOpacity:e.secondaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:l[1],dur:e.speed+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:e.primaryColor,stopOpacity:e.primaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:l[2],dur:e.speed+"s",repeatCount:"indefinite"})))))},i=function(e){return Object(a.createElement)(p,e,Object(a.createElement)("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"}),Object(a.createElement)("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"}),Object(a.createElement)("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"}),Object(a.createElement)("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"}),Object(a.createElement)("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"}),Object(a.createElement)("circle",{cx:"30",cy:"30",r:"30"}))},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u=function(e){return Object(a.createElement)(p,o({},e,{height:480}),Object(a.createElement)("circle",{cx:"30",cy:"30",r:"30"}),Object(a.createElement)("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"}),Object(a.createElement)("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"}),Object(a.createElement)("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"}))},c=function(e){return Object(a.createElement)(p,e,Object(a.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"}),Object(a.createElement)("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"}),Object(a.createElement)("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"}),Object(a.createElement)("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"}),Object(a.createElement)("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"}),Object(a.createElement)("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"}),Object(a.createElement)("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"}),Object(a.createElement)("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"}),Object(a.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"}))},d=function(e){return Object(a.createElement)(p,e,Object(a.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),Object(a.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),Object(a.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),Object(a.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),Object(a.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),Object(a.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))},s=function(e){return Object(a.createElement)(p,e,Object(a.createElement)("circle",{cx:"10",cy:"20",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),Object(a.createElement)("circle",{cx:"10",cy:"50",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),Object(a.createElement)("circle",{cx:"10",cy:"80",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),Object(a.createElement)("circle",{cx:"10",cy:"110",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"}))},f={animate:!0,height:130,preserveAspectRatio:"xMidYMid meet",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,width:400},m=function(e){return Object(a.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},p=function(e){var t=o({},f,e),r=e.children?e.children:Object(a.createElement)(m,t);return Object(a.createElement)(l,t,r)};t.default=p},7803:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMinutes=void 0;var a=o(r(0)),n=o(r(45)),l=r(5777),i=r(46);function o(e){return e&&e.__esModule?e:{default:e}}const u=[20,30,45,60,75,90,105,120],c=n.default.div.withConfig({displayName:"MinutesContainer"})`
  display: flex;
  justify-content: 'center';
  flex-wrap: 'wrap';
  font-size: 2rem;
`,d=n.default.div.withConfig({displayName:"MinutesItem"})`
  margin: 1rem 1rem 0 0;
`;t.DeliveryMinutes=(({onMinuteClick:e})=>a.default.createElement(c,null,u.map(t=>a.default.createElement(d,{key:t},a.default.createElement(l.TouchButton,{onClick:()=>{e(t)},color:i.Colors.green},t)))))},7806:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubscribeOrderList=t.QueryOrderList=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},l=r(61),i=r(7807),o=r(5789),u=r(7808),c=r(7766);const d=n.default`
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

  ${o.OrderStateCategoryFragment}
  ${u.OrderMapMarkerFragment}
  ${c.OrderTickerFragment}
`,s=n.default`
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
  ${o.OrderStateCategoryFragment}
  ${u.OrderMapMarkerFragment}
  ${c.OrderTickerFragment}
`,f=(0,l.buildQuery)(d);t.QueryOrderList=f;const m=(0,i.buildSubscription)(s);t.SubscribeOrderList=m},7807:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildSubscription=function(e){return function(t){return(0,a.useEffectOnce)(()=>{const{queryResult:r,variables:a,handleUpdate:n}=t;return r.subscribeToMore({document:e,variables:a,updateQuery:(e,{subscriptionData:t})=>t&&t.data&&n(t.data,e)||e})}),t.children}};var a=r(5791)},7808:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapMarkerFragment=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},l=r(96);const i=n.default`
  fragment GOrderMapMarker on Order {
    id
    deliverAt
    gps {
      ...GGeoPoint
    }
  }
  ${l.GeoPointFragment}
`;t.OrderMapMarkerFragment=i},7820:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderBox=t.OrderBoxStyled=void 0;var a=c(r(0)),n=c(r(45)),l=r(7821),i=r(46),o=r(7822),u=r(7824);function c(e){return e&&e.__esModule?e:{default:e}}const d=n.default.div.withConfig({displayName:"OrderBoxStyled"})`
  background-color: ${i.Colors.white};
  color: ${i.Colors.greyDarkest};
  border-radius: ${i.Radiuses.Card};
  margin-bottom: 0.5rem;
  position: relative;
`;t.OrderBoxStyled=d;t.OrderBox=(({order:e,showBranch:t,toggleOrderDetail:r,isOrderDetailOpen:n})=>a.default.createElement(d,{id:`order-${e.id}`},a.default.createElement(o.OrderTicker,{order:e,showBranch:t,onClick:()=>r(e)}),a.default.createElement(l.ObserverWhen,{test:()=>n(e.id),renderSuccess:()=>a.default.createElement(u.OrderDetail,{orderId:e.id})})))},7821:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ObserverWhen=void 0;var a,n=r(5792),l=(a=r(0))&&a.__esModule?a:{default:a};t.ObserverWhen=(({test:e,renderSuccess:t,renderFailure:r})=>l.default.createElement(n.Observer,{render:()=>e()?t():r?r():null}))},7822:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTicker=void 0;var a=r(122),n=p(r(153)),l=p(r(0)),i=r(5799),o=p(r(45)),u=r(7731),c=r(148),d=r(5782),s=r(46),f=r(7823),m=r(7781);function p(e){return e&&e.__esModule?e:{default:e}}const y=(0,o.default)(i.Element).withConfig({displayName:"OrderTickerStyled"})`
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: ${(0,n.default)(s.Colors.turquoise).alpha(.05).string()};
  }
  &:active {
    background-color: ${(0,n.default)(s.Colors.turquoise).alpha(.2).string()};
  }
`,h=o.default.div.withConfig({displayName:"OrderTickerMainContentStyled"})`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.4rem;
`,v=o.default.div.withConfig({displayName:"DeliveryTimeBadgeContainerStyled"})`
  flex: 0 0 2rem;
`,g=o.default.div.withConfig({displayName:"AddressDisplayContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,O=o.default.div.withConfig({displayName:"CustomerIdentityContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,b=o.default.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 3.5rem;
  text-align: right;
  position: relative;
`,C=o.default.div.withConfig({displayName:"PaidMarkStyled"})`
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
    border-top: 2px solid ${s.Colors.orange};
    transform: rotate(13deg);
    transform-origin: 0% 0%;
    opacity: 0.7;
  }
`,E=o.default.div.withConfig({displayName:"PaidTextStyled"})`
  color: ${s.Colors.orange};
`,_=o.default.div.withConfig({displayName:"ToBranchContainerStyled"})`
  padding: 0.3rem 0.6rem;
  display: inline-block;
  border-top-left-radius: ${s.Radiuses.Card};
  background-color: ${s.Colors.green};
  color: ${s.Colors.white};
`;t.OrderTicker=(({order:e,showBranch:t,onClick:r})=>l.default.createElement(y,{onClick:r,name:`order-${e.id}`},t&&l.default.createElement(_,null,e.companyBranch.name),l.default.createElement(h,null,l.default.createElement(v,null,l.default.createElement(m.DeliveryTimeBadge,{deliverAt:e.deliverAt,deliveredAt:e.deliveredAt,isCancelled:e.orderStateCategory===c.OrderStateCategoryEnum.Cancel})),l.default.createElement(g,null,(0,d.formatAddress)(e.address)),l.default.createElement(O,null,l.default.createElement(f.CustomerIdentity,{customer:e.customer})),l.default.createElement(b,null,l.default.createElement(u.Price,{price:e.totalSum.value}),e.isPaidWithCard&&l.default.createElement(l.default.Fragment,null,l.default.createElement(C,null),l.default.createElement(E,null,l.default.createElement(a.Trans,{id:"Paid"})))))))},7823:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomerIdentity=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a};t.CustomerIdentity=(({customer:e})=>e?n.default.createElement("span",null,`${e.lastName?`${e.firstName} ${e.lastName}`:e.defaultPhone?e.defaultPhone.phone:""}`):n.default.createElement("i",null,"unknown"))},7824:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDetail=void 0;var a=h(r(0)),n=h(r(45)),l=r(7723),i=r(7825),o=r(7826),u=r(7827),c=r(7828),d=r(7829),s=r(7830),f=r(7831),m=r(7832),p=r(7833),y=r(7834);function h(e){return e&&e.__esModule?e:{default:e}}const v=n.default.div.withConfig({displayName:"OrderDetailContainerStyled"})`
  padding: 0 0.5rem 0.5rem 1.1rem;
`;t.OrderDetail=(({orderId:e})=>a.default.createElement(p.QueryOrderDetail,{variables:{id:e},fetchPolicy:"cache-and-network",render:({order:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement(v,null,a.default.createElement(l.HorizontalSeparator,null),a.default.createElement(m.OrderWareList,{orderWares:t.items}),a.default.createElement(c.OrderDetailTotals,{order:t}),a.default.createElement(d.OrderRuleLines,{rules:t.allAppliedRules},a.default.createElement(u.OrderCountLine,{current:t.customerOrdersCountCurrent,total:t.customerOrdersCountTotal})),a.default.createElement(i.ContactLines,{phones:t.customer.phones,emails:t.customer.emails}),a.default.createElement(o.NoteLine,{note:t.note,previousNote:t.previousNote}),a.default.createElement(l.HorizontalSeparator,null),a.default.createElement(f.OrderTimeLine,{orderTiming:t.orderTiming}),a.default.createElement(s.OrderStats,{order:t})),a.default.createElement(y.OrderStateFlow,{orderId:e,branchId:t.companyBranch.id}))}))},7825:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContactLines=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7723),i=r(7709),o=r(7758);t.ContactLines=(({phones:e,emails:t})=>{const r=e=>n.default.createElement(i.IconLine,{icon:e.icon,key:e.value,labelMargin:"0"},n.default.createElement("div",{title:e.description||""},(e=>e.isMail?n.default.createElement(o.LinkStyled,{href:`mailto:${e.value}`},e.value):n.default.createElement(o.LinkStyled,{href:`tel:${e.value.replace("/ /g","")}`},e.value))(e)));return n.default.createElement(n.default.Fragment,null,(e.length>0||t.length>0)&&n.default.createElement(l.HorizontalSeparator,null),e.map(e=>r(Object.assign({icon:"phone",isMail:!1,value:e.phone},e))),t.map(e=>r(Object.assign({icon:"mail_outline",isMail:!0,value:e.email},e))))})},7826:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoteLine=void 0;var a=c(r(0)),n=c(r(45)),l=r(7723),i=r(7709),o=r(71),u=r(46);function c(e){return e&&e.__esModule?e:{default:e}}const d=n.default.span.withConfig({displayName:"CurrentNoteStyled"})`
  color: ${u.Colors.orange};
`,s=n.default.span.withConfig({displayName:"PreviousNoteStyled"})`
  color: ${u.Colors.greyDark};
  margin-left: 0.5rem;
`;t.NoteLine=(({note:e,previousNote:t})=>e||t?a.default.createElement(a.default.Fragment,null,a.default.createElement(l.HorizontalSeparator,null),a.default.createElement(i.IconLine,{icon:"note",labelMargin:"0"},a.default.createElement(d,null,e||o.i18n._("Without note").toLocaleLowerCase()),a.default.createElement(s,null,t))):null)},7827:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCountLine=void 0;var a,n=r(122),l=(a=r(0))&&a.__esModule?a:{default:a};t.OrderCountLine=(({current:e,total:t})=>l.default.createElement(n.Trans,{id:"It's customer's {current, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} order {total, plural, one {} other {from total of # orders}}",values:{current:e,total:t}}))},7828:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDetailTotals=void 0;var a=o(r(0)),n=o(r(45)),l=r(71),i=r(7759);function o(e){return e&&e.__esModule?e:{default:e}}const u=n.default.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`;t.OrderDetailTotals=(({order:e})=>a.default.createElement(u,null,a.default.createElement(i.OrderWareLine,{label:l.i18n._("Transport fee"),price:e.transportFee.value}),a.default.createElement(i.OrderWareLine,{label:l.i18n._("Covers price"),price:e.coverPrice.value}),a.default.createElement(i.OrderWareLine,{label:l.i18n._("Discount total"),price:-1*e.totalDiscount.value}),a.default.createElement("b",null,a.default.createElement(i.OrderWareLine,{label:l.i18n._("Total price"),price:e.totalSum.value}))))},7829:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderRuleLines=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7723),i=r(7709);t.OrderRuleLines=(({rules:e,children:t})=>e.length>0||t?n.default.createElement(n.default.Fragment,null,n.default.createElement(l.HorizontalSeparator,null),n.default.createElement(i.IconLine,{icon:"announcement",labelMargin:"0"},t,n.default.createElement("br",null),e.join(", "))):null)},7830:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStats=void 0;var a=r(122),n=r(273),l=c(r(0)),i=c(r(45)),o=r(7709),u=r(5782);function c(e){return e&&e.__esModule?e:{default:e}}const d=i.default.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`;t.OrderStats=(({order:e})=>{const t=[];if(e.deliverAt&&t.push(l.default.createElement("div",{key:"deliverAt"},(0,u.formatTimeWithoutTodayDate)(e.deliverAt),l.default.createElement(d,null,l.default.createElement(a.Trans,{id:"Deliver on time"})))),e.driver){const{firstName:r,lastName:n}=e.driver.user;t.push(l.default.createElement("div",{key:"driver"},`${r} ${n}`,l.default.createElement(d,null,l.default.createElement(a.Trans,{id:"Driver"}))))}return 0===t.length?null:l.default.createElement(o.IconLine,{icon:n.Timelapse,labelMargin:"0"},t)})},7831:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimeLine=void 0;var a=r(122),n=s(r(0)),l=s(r(45)),i=r(7709),o=r(148),u=r(5782),c=r(47),d=r(71);function s(e){return e&&e.__esModule?e:{default:e}}const f=l.default.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,m={[o.OrderStateCategoryEnum.NewOrders]:(0,a.i18nMark)("Created"),[o.OrderStateCategoryEnum.Preparing]:(0,a.i18nMark)("Preparing"),[o.OrderStateCategoryEnum.ReadyToDeliver]:(0,a.i18nMark)("Ready to deliver"),[o.OrderStateCategoryEnum.OnWay]:(0,a.i18nMark)("On way"),[o.OrderStateCategoryEnum.Finished]:(0,a.i18nMark)("Finished")};t.OrderTimeLine=(({orderTiming:e})=>n.default.createElement(i.IconLine,{icon:"access_time",labelMargin:"0"},c.RM.reject(({createdAt:e,orderStateCategory:t})=>null===e||!m[t],e).map(e=>n.default.createElement("div",{key:e.orderStateCategory},(0,u.formatTimeWithoutTodayDate)(e.createdAt),n.default.createElement(f,null,d.i18n._(m[e.orderStateCategory]))))))},7832:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWareList=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(7759);t.OrderWareList=(({orderWares:e})=>{return a.default.createElement("div",null,e.map(e=>a.default.createElement(a.Fragment,{key:e.id},a.default.createElement(n.OrderWareLine,{code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),a.default.createElement(a.default.Fragment,null,e.sidedishes.map(e=>a.default.createElement(n.OrderWareLine,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value}))))))})},7833:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderDetail=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},l=r(61),i=r(96),o=r(5793);const u=(0,l.buildQuery)(n.default`
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
  ${i.PriceFragment}
  ${i.EmailFragment}
  ${i.PhoneFragment}
  ${o.OrderDriverFragment}
`);t.QueryOrderDetail=u},7834:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateFlow=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(99),i=r(95),o=r(148),u=r(97),c=r(7835),d=r(7836),s=r(7838),f=r(7839),m=r(7745),p=r(7840);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const h=e=>n.default.createElement(s.OrderStateFlowContainer,null,n.default.createElement(f.OrderStateTimeNotification,e),n.default.createElement(c.OrderStateButton,y({nextState:o.OrderStateEnum.Accepted},e))),v=e=>n.default.createElement(s.OrderStateFlowContainer,null,n.default.createElement(f.OrderStateTimeNotification,e),e.canDeliver?n.default.createElement(d.OrderStateDeliver,e):n.default.createElement(c.OrderStateButton,y({nextState:o.OrderStateEnum.Finished},e))),g=e=>n.default.createElement(s.OrderStateFlowContainer,null,n.default.createElement(f.OrderStateTimeNotification,e),n.default.createElement(d.OrderStateDeliver,e),n.default.createElement(c.OrderStateButton,y({nextState:o.OrderStateEnum.Finished},e)));t.OrderStateFlow=(({orderId:e,branchId:t})=>n.default.createElement(i.WithRoot,{observe:!1,render:({order:{state:r}})=>n.default.createElement(p.QueryOrderState,{variables:{orderId:e,branchId:t},render:({order:a,companyBranch:{allowedCategories:i}})=>{const c=(0,m.getOrderState)(a);if(!c)return(0,u.reportError)(new l.VError("Order %s has got no state categories")),null;const d=i.includes(o.OrderStateCategoryEnum.OnWay)&&null!=a.deliveryType&&a.deliveryType.enum!==o.DeliveryTypeEnum.Pickup,s={orderId:e,branchId:t,stateModel:r,orderStateCategory:c,canDeliver:d};switch(c){case o.OrderStateCategoryEnum.NewOrders:return n.default.createElement(h,s);case o.OrderStateCategoryEnum.Preparing:return n.default.createElement(v,s);case o.OrderStateCategoryEnum.OnWay:return n.default.createElement(g,s);default:return null}}})}))},7835:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateButton=void 0;var a,n=r(122),l=(a=r(0))&&a.__esModule?a:{default:a},i=r(148),o=r(71),u=r(5777);const c={[i.OrderStateEnum.Accepted]:(0,n.i18nMark)("Accept order"),[i.OrderStateEnum.Finished]:(0,n.i18nMark)("Finish order")};t.OrderStateButton=(({orderId:e,nextState:t,stateModel:r})=>l.default.createElement(u.TouchButton,{text:o.i18n._(c[t]),width:"7.375rem",onClick:()=>{r.updateOrderState(e,t)}}))},7836:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateDeliver=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(148),i=r(7837),o=r(5793);t.OrderStateDeliver=(({branchId:e,orderId:t,orderStateCategory:r,stateModel:a})=>n.default.createElement(o.QueryDriverSelection,{fetchPolicy:"network-only",variables:{branchId:e,orderId:t},render:({drivers:e,order:{driver:o}},{loading:u,refetch:c})=>n.default.createElement(i.OrderDriverSelect,{drivers:e,selectedDriver:o?o.user:null,isLoading:u,onReload:c,onClear:()=>{o&&a.removeDriver(o.id)},onSelect:e=>{a.selectDriver(t,e.id),r!==l.OrderStateCategoryEnum.OnWay&&a.deliverOrder(t)}})}))},7837:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDriverSelect=void 0;var a=s(r(0)),n=r(7753),l=s(r(45)),i=r(150),o=r(7716),u=r(47),c=r(71),d=r(46);function s(e){return e&&e.__esModule?e:{default:e}}const f=l.default.div.withConfig({displayName:"DriverName"})`
  margin: 0.1rem 0 0rem 0.2rem;
  display: inline-block;
  vertical-align: top;
  font-size: 1.25rem;
`,m={background:d.Colors.greyMiddle},p={color:d.Colors.white},y={control:e=>Object.assign({},e,m,p,{height:d.Spacing.ButtonHeight,borderWidth:0,borderRadius:d.Radiuses.Button,margin:0}),menu:e=>Object.assign({},e,m),valueContainer:e=>Object.assign({},e,p),singleValue:e=>Object.assign({},e,p),placeholder:e=>Object.assign({},e,p,{fontSize:"1.2rem"})};t.OrderDriverSelect=(({drivers:e,selectedDriver:t,isLoading:r,onSelect:l,onClear:s,onReload:m})=>a.default.createElement(o.SelectControl,{options:e,value:t,getOptionValue:u.RM.prop("id"),isLoading:r,isSearchable:!1,isClearable:!0,placeholder:"Deliver order",width:16,styles:y,noOptionsMessage:()=>c.i18n._("No drivers available"),onChange:e=>null===e?s():l(e),onMenuOpen:m,components:{ValueContainer:e=>a.default.createElement(a.default.Fragment,null,a.default.createElement(i.Icon,{iconName:"directions_car",fontSize:2,color:d.Colors.white}),a.default.createElement(n.components.ValueContainer,e)),DropdownIndicator:()=>null},formatOptionLabel:e=>a.default.createElement(f,null,`${e.firstName} ${e.lastName}`)}))},7838:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateFlowContainer=void 0;var a,n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),l=(a=r(45))&&a.__esModule?a:{default:a},i=r(46);const o=l.default.div.withConfig({displayName:"OrderStateFlowContainerWrapper"})`
  margin: 0 0 0 auto;
  text-align: right;
  height: ${i.Spacing.ButtonHeight};
`,u=l.default.div.withConfig({displayName:"Control"})`
  margin: 0 0 0 0.5rem;
  display: inline-block;
  vertical-align: bottom;
  text-align: left;
  height: 100%;
`;t.OrderStateFlowContainer=(({children:e})=>n.default.createElement(o,null,n.Children.map(e,(e,t)=>n.default.createElement(u,{key:t},e))))},7839:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateTimeNotification=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(93),i=r(71),o=r(7750),u=r(5777);t.OrderStateTimeNotification=(({orderId:e})=>{const{order:t}=(0,l.useRoot)();return n.default.createElement(o.DeliveryTimeDialog,{title:i.i18n._("Send expected time of delivery to customer (in minutes)"),onConfirm:r=>{t.state.sendTimeNotification(e,r)}},({openDialog:e})=>n.default.createElement(u.TouchButton,{iconName:"schedule",onClick:e}))})},7840:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderState=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},l=r(61),i=r(5789);const o=(0,l.buildQuery)(n.default`
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
  ${i.OrderStateCategoryFragment}
`);t.QueryOrderState=o},7841:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputDate=void 0,r(7842);var a=u(r(0)),n=u(r(7858)),l=r(7708),i=u(r(45)),o=u(r(7785));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const s=i.default.div.withConfig({displayName:"FormInputDateContainer"})`
  & .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    width: ${({width:e="6rem"})=>e};
  }
`;s.displayName="FormInputDateContainer";t.FormInputDate=(e=>{var{field:t,defaultValue:r,inputWidth:i,minDate:u}=e,f=d(e,["field","defaultValue","inputWidth","minDate"]);return a.default.createElement(s,{width:i},a.default.createElement(l.Field,{field:t,defaultValue:r,render:e=>a.default.createElement(n.default,c({selected:(0,o.default)(e.value||new Date),onChange:t=>e.setValue(t),minDate:void 0===u?void 0:(0,o.default)(u)},f))}))})},7843:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FlexRow=void 0;var a,n=(a=r(45))&&a.__esModule?a:{default:a},l=r(46);const i=n.default.div.withConfig({displayName:"FlexRow"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${l.Colors.greyMiddle};
  padding: 0.1rem 0 0.1rem 0;
`;t.FlexRow=i},7844:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StatisticsDateRangeFilter=void 0;var a,n=r(122),l=r(94),i=(a=r(0))&&a.__esModule?a:{default:a},o=r(7724),u=r(7718),c=r(7841),d=r(93),s=r(7734);const f=(0,l.observer)(({submitButton:e})=>{const{statistics:t}=(0,d.useRoot)();return i.default.createElement(u.FlexRowSingle,{justify:"flex-start"},i.default.createElement(o.FlexColumn,{fixedWidth:!0,width:"10rem"},i.default.createElement(n.Trans,{id:"From date"}),i.default.createElement(c.FormInputDate,{field:"dateFrom",defaultValue:t.dateFrom})),i.default.createElement(o.FlexColumn,{fixedWidth:!0,width:"10rem"},i.default.createElement(n.Trans,{id:"To date"}),i.default.createElement(c.FormInputDate,{field:"dateTo",defaultValue:t.dateTo})),i.default.createElement(o.FlexColumn,null,e||i.default.createElement(s.FormSubmit,{width:"15rem"},i.default.createElement(n.Trans,{id:"{0, plural, one {Show for one branch} few {Show for # branches} other {Show for # branches}}",values:{0:t.branchesFilter.length}}))))});t.StatisticsDateRangeFilter=f},7845:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsLoader=t.useOrderStatistics=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(7708),l=r(93),i=r(7928),o=r(8279);const{context:u,useStatisticsQuery:c}=(0,i.createStatisticsQuery)(o.OrdersStatisticsQuery);t.useOrderStatistics=(()=>(0,a.useContext)(u));t.OrdersStatisticsLoader=(({children:e})=>{const{statistics:t}=(0,l.useRoot)(),{result:r,executeFilter:i}=c();return a.default.createElement(n.Form,{onSubmit:i,onChange:({values:e})=>t.updateFilter(e)},a.default.createElement(u.Provider,{value:r},e))})},7922:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryLoader=t.useClosureHistory=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(7708),l=r(93),i=r(5782),o=r(7744),u=r(8267);const c=(0,a.createContext)(null);t.useClosureHistory=(()=>(0,a.useContext)(c));t.ClosureHistoryLoader=(({children:e})=>{const{statistics:t}=(0,l.useRoot)(),{result:r,execute:d}=(0,o.useExecutableQuery)(u.ClosureHistoryQuery);return a.default.createElement(n.Form,{onSubmit:()=>{t.closureBranch&&d({branchId:t.closureBranch,dateFrom:(0,i.formatDateISO)(t.dateFrom),dateTo:(0,i.formatDateISO)(t.dateTo)})},onChange:({values:e})=>t.updateFilter(e)},a.default.createElement(c.Provider,{value:r},e))})},7923:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureStatisticsFilter=void 0;var a=r(94),n=c(r(0)),l=c(r(45)),i=r(93),o=r(7736),u=r(7924);function c(e){return e&&e.__esModule?e:{default:e}}const d=l.default.div.withConfig({displayName:"ButtonToRight"})`
  float: right;
  margin: 0.5rem;
`,s=(0,a.observer)(({showCurrent:e})=>{const{statistics:t}=(0,i.useRoot)();return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.CompanyBranchPicker,{selectedBranches:t.closureBranch?[t.closureBranch]:[],onSelectionChange:([e])=>t.setClosureBranch(e),onSelectionClear:()=>t.setClosureBranch(null),isClearable:!1}),e&&n.default.createElement(d,null,n.default.createElement(u.ClosureCurrentButton,null)))});t.ClosureStatisticsFilter=s},7924:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureCurrentButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(149),i=r(7720),o=r(71),u=r(5777),c=r(46);t.ClosureCurrentButton=(e=>n.default.createElement(i.CanQuery,{queryName:"lastFinancialReport"},n.default.createElement(l.Link,{to:"/overview/closure"},n.default.createElement(u.TouchButton,{text:o.i18n._("Current closure"),color:c.Colors.orange,width:"15rem",height:c.Spacing.ButtonHeight}))))},7925:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MonospaceOutput=void 0;var a=n(r(0));function n(e){return e&&e.__esModule?e:{default:e}}const l=n(r(45)).default.p.withConfig({displayName:"MonospaceOutputStyled"})`
  color: white;
  font-family: 'Lucida Console', Monaco, monospace;
  white-space: pre-wrap;
  margin: 0.2rem 0.5rem 0.5rem 1rem;
  line-height: 1.8rem;
`;t.MonospaceOutput=(({text:e})=>a.default.createElement(l,null,(e=>e.replace(new RegExp("\t","g"),"\t"))(e)))},7926:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StatisticsBranchFilter=void 0;var a,n=r(94),l=(a=r(0))&&a.__esModule?a:{default:a},i=r(93),o=r(7736);t.StatisticsBranchFilter=(()=>{const{statistics:e}=(0,i.useRoot)();return(0,n.useObserver)(()=>l.default.createElement(o.CompanyBranchPicker,{selectedBranches:Array.from(e.branches),onSelectionChange:e.setBranchFilter,onSelectionClear:e.clearBranchFilter,isMulti:!0}))})},7927:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsLoader=t.useDailyStatistics=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(7708),l=r(93),i=r(7928),o=r(8276);const{useStatisticsQuery:u,context:c}=(0,i.createStatisticsQuery)(o.DailyStatisticsQuery);t.useDailyStatistics=(()=>(0,a.useContext)(c));t.DailyStatisticsLoader=(({children:e})=>{const{statistics:t}=(0,l.useRoot)(),{result:r,executeFilter:i}=u();return a.default.createElement(n.Form,{onSubmit:i,onChange:({values:e})=>t.updateFilter(e)},a.default.createElement(c.Provider,{value:r},e))})},7928:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatisticsQuery=function(e){return{context:(0,a.createContext)({data:null,hasAnyError:!1,loading:!1,wasExecuted:!1}),useStatisticsQuery:()=>{const{statistics:t}=(0,n.useRoot)(),{result:r,execute:a}=(0,i.useExecutableQuery)(e);return{result:r,executeFilter:()=>{a({branches:t.branchesFilter,dateFrom:(0,l.formatDateISO)(t.dateFrom),dateTo:(0,l.formatDateISO)(t.dateTo)})}}}}};var a=r(0),n=r(93),l=r(5782),i=r(7744)},8265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryPage=void 0;var a,n=r(122),l=(a=r(0))&&a.__esModule?a:{default:a},i=r(5781),o=r(71),u=r(7734),c=r(5783),d=r(8266),s=r(7923),f=r(7844),m=r(7922);t.ClosureHistoryPage=(e=>l.default.createElement(m.ClosureHistoryLoader,null,l.default.createElement(c.FullPageLayout,{pageTitle:o.i18n._("Closure history"),useBackButton:!0,backRoute:"/overview"},l.default.createElement(i.Card,null,l.default.createElement(s.ClosureStatisticsFilter,{showCurrent:!0}),l.default.createElement(f.StatisticsDateRangeFilter,{submitButton:l.default.createElement(u.FormSubmit,{width:"15rem"},l.default.createElement(n.Trans,{id:"Show history for branch"}))})),l.default.createElement(i.Card,null,l.default.createElement(d.ClosureHistoryTable,null)))))},8266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryTable=void 0;var a,n=r(122),l=r(94),i=(a=r(0))&&a.__esModule?a:{default:a},o=r(7724),u=r(7843),c=r(7715),d=r(5790),s=r(7760),f=r(93),m=r(5782),p=r(5777),y=r(46),h=r(7922);const v=(0,l.observer)(()=>{const{data:e,loading:t}=(0,h.useClosureHistory)(),{statistics:r}=(0,f.useRoot)();return t?i.default.createElement(c.Headline,null,i.default.createElement(d.Loading,null)):r.closureBranch?e&&0!==e.financialReports.length?i.default.createElement(i.default.Fragment,null,e.financialReports.map(e=>i.default.createElement(u.FlexRow,{key:e.id},i.default.createElement(o.FlexColumn,{fixedWidth:!0},i.default.createElement(s.RelativeLink,{to:`../${e.id}`},i.default.createElement(p.TouchButton,{iconName:"mode_edit",width:y.Spacing.ButtonHeight,height:y.Spacing.ButtonHeight}))),i.default.createElement(o.FlexColumn,{widthGrowIndex:1},`[${e.reportSequence}] ${(0,m.formatDateISO)(e.reportDatetime)}`)))):i.default.createElement(c.Headline,null,i.default.createElement(n.Trans,{id:"No closures found"})):i.default.createElement(c.Headline,null,i.default.createElement(n.Trans,{id:"Select a branch"}))});t.ClosureHistoryTable=v},8267:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryQuery=void 0;const n=((a=r(21))&&a.__esModule?a:{default:a}).default`
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
`;t.ClosureHistoryQuery=n},8268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosurePage=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5781),i=r(71),o=r(5783),u=r(7923),c=r(8269),d=r(8271);t.ClosurePage=(({match:e})=>n.default.createElement(o.FullPageLayout,{pageTitle:i.i18n._("Closure"),useBackButton:!0,backRoute:"/overview"},n.default.createElement(l.Card,null,n.default.createElement(u.ClosureStatisticsFilter,{showCurrent:!1}),n.default.createElement(d.ClosureStatisticsControl,{showCurrent:Boolean(e.params.reportId)})),n.default.createElement(c.ClosureStatisticsContent,{reportId:e.params.reportId})))},8269:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureStatisticsContent=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7925),i=r(95),o=r(71),u=r(8270);t.ClosureStatisticsContent=(({reportId:e=""})=>n.default.createElement(i.WithRoot,{render:({statistics:t})=>t.closureBranch?n.default.createElement(u.QueryFinancialReport,{variables:{branchId:t.closureBranch,reportId:e,showReport:Boolean(e)},fetchPolicy:"cache-and-network",renderLoading:!1,render:({report:t,lastReport:r},{loading:a})=>a?n.default.createElement(l.MonospaceOutput,{text:o.i18n._("Computing")}):n.default.createElement(l.MonospaceOutput,{text:e?t.plainData:r.plainData})}):null}))},8270:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryFinancialReport=t.FinancialReport=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},l=r(61);const i=n.default`
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
`;t.FinancialReport=i;const o=(0,l.buildQuery)(i);t.QueryFinancialReport=o},8271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureStatisticsControl=void 0;var a=r(94),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),l=y(r(45)),i=r(93),o=r(7741),u=y(r(7729)),c=r(7727),d=r(71),s=r(7924),f=r(8272),m=r(8273),p=r(5829);function y(e){return e&&e.__esModule?e:{default:e}}var h=function(e,t,r,a){return new(r||(r=Promise))(function(n,l){function i(e){try{u(a.next(e))}catch(t){l(t)}}function o(e){try{u(a.throw(e))}catch(t){l(t)}}function u(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,o)}u((a=a.apply(e,t||[])).next())})};const v=l.default.div.withConfig({displayName:"ButtonToRight"})`
  float: right;
`;t.ClosureStatisticsControl=(({showCurrent:e})=>{const{statistics:t}=(0,i.useRoot)(),{enqueueSuccess:r}=(0,c.useSnackBar)(),{history:l}=(0,u.default)(),y=(0,o.useGuardedMutation)(p.CreateFinancialReport),g=(0,n.useCallback)(()=>h(void 0,void 0,void 0,function*(){if(!t.closureBranch)return;const e=yield y({companyBranchId:t.closureBranch});if(e){const{id:t}=e.result;l.push(`/overview/closure/${t}`),r(d.i18n._("Closure has been created"))}}),[]);return(0,a.useObserver)(()=>n.default.createElement(n.default.Fragment,null,e?n.default.createElement(s.ClosureCurrentButton,null):n.default.createElement(m.ClosureSubmitButton,{onClick:g,disabled:!t.closureBranch}),n.default.createElement(v,null,n.default.createElement(f.ClosureHistoryButton,null))))})},8272:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(149),i=r(7720),o=r(71),u=r(5777),c=r(46);t.ClosureHistoryButton=(e=>n.default.createElement(i.CanQuery,{queryName:"financialReports"},n.default.createElement(l.Link,{to:"/overview/closure/history"},n.default.createElement(u.TouchButton,{text:o.i18n._("Closure history"),color:c.Colors.greyDark,width:"15rem",height:c.Spacing.ButtonHeight}))))},8273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureSubmitButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7711),i=r(71),o=r(5777),u=r(46);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.ClosureSubmitButton=(e=>n.default.createElement(l.CanMutate,{mutationName:"createFinancialReport"},n.default.createElement(o.TouchButton,c({text:i.i18n._("Create closure"),color:u.Colors.green,width:"12rem"},e))))},8274:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsPage=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5781),i=r(71),o=r(5783),u=r(7926),c=r(7844),d=r(8275),s=r(7927);t.DailyStatisticsPage=(()=>n.default.createElement(o.FullPageLayout,{pageTitle:i.i18n._("Sales statistics"),useBackButton:!0},n.default.createElement(s.DailyStatisticsLoader,null,n.default.createElement(l.Card,null,n.default.createElement(u.StatisticsBranchFilter,null),n.default.createElement(c.StatisticsDateRangeFilter,null)),n.default.createElement(d.DailyStatisticsContent,null))))},8275:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsContent=void 0;var a,n=r(122),l=r(94),i=(a=r(0))&&a.__esModule?a:{default:a},o=r(7715),u=r(7925),c=r(71),d=r(7927);const s=(0,l.observer)(()=>{const{data:e,loading:t}=(0,d.useDailyStatistics)();if(!e)return null;if(t)return i.default.createElement(u.MonospaceOutput,{text:c.i18n._("Computing")});const{stats:r}=e;return i.default.createElement(i.default.Fragment,null,i.default.createElement(o.Headline,{light:!0},i.default.createElement(n.Trans,{id:"Daily statistics"})),i.default.createElement(u.MonospaceOutput,{text:r.dailyStatisticsPlain}),i.default.createElement(o.Headline,{light:!0},i.default.createElement(n.Trans,{id:"By category"})),i.default.createElement(u.MonospaceOutput,{text:r.categoryStatisticsPlain}),i.default.createElement(o.Headline,{light:!0},i.default.createElement(n.Trans,{id:"By type"})),i.default.createElement(u.MonospaceOutput,{text:r.deliveryStatisticsPlain}),i.default.createElement(o.Headline,{light:!0},i.default.createElement(n.Trans,{id:"By driver"})),i.default.createElement(u.MonospaceOutput,{text:r.driversStatisticsPlain}))});t.DailyStatisticsContent=s},8276:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsQuery=void 0;const n=((a=r(21))&&a.__esModule?a:{default:a}).default`
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
`;t.DailyStatisticsQuery=n},8277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsPage=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5781),i=r(71),o=r(5786),u=r(7717),c=r(7926),d=r(7844),s=r(8278),f=r(7845),m=r(8280);t.OrdersStatisticsPage=(e=>n.default.createElement(f.OrdersStatisticsLoader,null,n.default.createElement(u.PageLayoutFullHeightItem,{withScrollArea:!0,row:1,column:7,widthInColumns:9},n.default.createElement(s.OrdersStatisticsList,null)),n.default.createElement(o.PageLayout,{layouts:[{i:"summary",x:0,y:1,w:7,h:1}],pageTitle:i.i18n._("Orders statistics"),showSoundControl:!1,scrollPageTitle:!1,useBackButton:!0},n.default.createElement("div",{key:"summary"},n.default.createElement(l.Card,null,n.default.createElement(c.StatisticsBranchFilter,null),n.default.createElement(d.StatisticsDateRangeFilter,null)),n.default.createElement(m.OrdersStatisticsSummary,null)))))},8278:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsList=void 0;var a,n=r(122),l=r(94),i=(a=r(0))&&a.__esModule?a:{default:a},o=r(7786),u=r(7747),c=r(93),d=r(148),s=r(7820),f=r(7845);const m=(0,l.observer)(()=>{const{statistics:e,order:t}=(0,c.useRoot)(),{data:r,loading:a,wasExecuted:l}=(0,f.useOrderStatistics)();if(!l)return null;if(a||!r)return i.default.createElement(o.BulletList,{primaryOpacity:.2,secondaryOpacity:.2});const{orders:m}=r.stats.finishedOrders;return 0===m.length?i.default.createElement(u.CardListTitle,null,i.default.createElement(n.Trans,{id:"No orders"})):i.default.createElement(i.default.Fragment,null,m.map(r=>i.default.createElement(s.OrderBox,{key:r.id,order:Object.assign({},r,{orderStateCategory:d.OrderStateCategoryEnum.Finished}),toggleOrderDetail:t.list.toggleOrderDetail,isOrderDetailOpen:t.list.isOrderDetailOpen,showBranch:e.branchesFilter.length>1})))});t.OrdersStatisticsList=m},8279:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsQuery=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},l=r(7766),i=r(5789);const o=n.default`
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
          ...GOrderStateCategory
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

  ${l.OrderTickerFragment}
  ${i.OrderStateCategoryFragment}
`;t.OrdersStatisticsQuery=o},8280:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsSummary=void 0;var a=r(122),n=r(94),l=c(r(0)),i=c(r(45)),o=r(7731),u=r(7845);function c(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"StatPanel"})`
  margin: 1.4rem 4rem 0 0.5rem;
  display: inline-block;
`,s=i.default.h1.withConfig({displayName:"StatLabel"})`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
`,f=i.default.h2.withConfig({displayName:"StatValue"})`
  font-size: 4rem;
  font-weight: normal;
  margin: 0;
`,m=(0,n.observer)(()=>{const{loading:e,data:t}=(0,u.useOrderStatistics)();if(e||!t)return null;const r=t.stats.finishedOrders;return l.default.createElement(l.default.Fragment,null,l.default.createElement(d,null,l.default.createElement(s,null,l.default.createElement(a.Trans,{id:"Total turnover"})),l.default.createElement(f,null,l.default.createElement(o.Price,{price:r.total.value,currencyCode:r.total.currency.code}))),l.default.createElement(d,null,l.default.createElement(s,null,l.default.createElement(a.Trans,{id:"Online payments"})),l.default.createElement(f,null,l.default.createElement(o.Price,{price:r.onlinePayments.value,currencyCode:r.onlinePayments.currency.code}))),l.default.createElement(d,null,l.default.createElement(s,null,l.default.createElement(a.Trans,{id:"Orders count"})),l.default.createElement(f,null,r.ordersCount)),l.default.createElement(d,null,l.default.createElement(s,null,l.default.createElement(a.Trans,{id:"Total commissions"})),l.default.createElement(f,null,l.default.createElement(o.Price,{price:r.fees.value,currencyCode:r.fees.currency.code}))))});t.OrdersStatisticsSummary=m},8281:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OverviewPage=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5786),i=r(7757),o=r(8282),u=r(8283),c=r(8284);t.OverviewPage=(e=>n.default.createElement(l.PageLayout,{layouts:[{i:"OrdersStatistics",x:0,y:1,w:2,h:2},{i:"DailyStatistics",x:2,y:1,w:2,h:2},{i:"Closure",x:4,y:1,w:2,h:2}]},n.default.createElement(i.PageLayoutItem,{key:"OrdersStatistics",route:"/overview/orders",component:c.OrdersStatisticsButton,canQuery:"statistics"}),n.default.createElement(i.PageLayoutItem,{key:"DailyStatistics",route:"/overview/statistics",component:u.DailyStatisticsButton,canQuery:"statistics"}),n.default.createElement(i.PageLayoutItem,{key:"Closure",route:"/overview/closure",component:o.ClosureButton,canQuery:"lastFinancialReport"})))},8282:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(71),i=r(5777),o=r(46);t.ClosureButton=(e=>n.default.createElement(i.TouchButton,{text:l.i18n._("Closure"),iconName:"assignment",color:o.Colors.turquoise}))},8283:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(71),i=r(5777),o=r(46);t.DailyStatisticsButton=(e=>n.default.createElement(i.TouchButton,{text:l.i18n._("Sales statistics"),iconName:"assignment",color:o.Colors.turquoise}))},8284:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(71),i=r(5777),o=r(46);t.OrdersStatisticsButton=(e=>n.default.createElement(i.TouchButton,{text:l.i18n._("Orders statistics"),iconName:"assignment",color:o.Colors.turquoise}))}}]);
//# sourceMappingURL=52.2f759ca7.chunk.js.map