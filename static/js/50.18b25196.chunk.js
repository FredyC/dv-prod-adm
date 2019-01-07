(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{7702:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.OrderRoutes=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(24),o=r(275),l=r(276),d=r(8030),u=r(8090),c=r(8234);const s=({match:e})=>i.default.createElement(a.Switch,null,i.default.createElement(l.SecureRoute,{exact:!0,path:e.path,component:c.OrderOverviewPage}),i.default.createElement(l.SecureRoute,{path:`${e.path}/create/:phone?`,component:d.CreateOrderRoutes}),i.default.createElement(l.SecureRoute,{path:`${e.path}/map`,component:u.OrderMapPage}),i.default.createElement(a.Route,{component:o.NotFoundPage}));t.OrderRoutes=s;var f=s;t.default=f},7709:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconLine=void 0;var n=l(r(0)),i=l(r(45)),a=r(46),o=r(150);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const u=i.default.div.withConfig({displayName:"IconLineWrap"})`
  display: flex;
`;u.displayName="IconLineWrap";const c=i.default.div.withConfig({displayName:"DescriptionContainer"})`
  margin: ${({labelMargin:e="0.5rem 0.2rem 0 auto"})=>e};
  min-width: ${({labelWidth:e=0,labelWidthUnits:t=a.Spacing.DefaultSizeUnit})=>e+t};
  flex: 0 0 auto;
  text-align: right;
`,s=i.default.div.withConfig({displayName:"IconLineChildren"})`
  margin-left: 0.5rem;
  align-self: stretch;
  flex: 1 1 auto;
`,f=i.default.div.withConfig({displayName:"LabelStyled"})`
  padding-top: 0.2rem;
  display: inline-block;
`;s.displayName="IconLineChildren";t.IconLine=(e=>{var{icon:t,label:r,labelWidth:i,labelWidthUnits:l,labelMargin:m,children:p}=e,v=d(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);let h;return t&&(h="string"===typeof t?n.default.createElement(o.Icon,{iconName:t,color:a.Colors.greyDark}):n.default.createElement(t,{nativeColor:a.Colors.greyDark})),n.default.createElement(u,v,n.default.createElement(c,{labelWidth:i,labelWidthUnits:l,labelMargin:m},h,r?n.default.createElement(f,null,r):null),n.default.createElement(s,null,p))})},7710:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputTextBox=t.FormInputStyled=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7708),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(45)),l=r(7726),d=r(71),u=r(46);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const f=o.css`
  margin: ${u.Spacing.MarginAroundFormComponents};
`,m=o.css`
  border: 1px red solid;
`,p=o.default.input.withConfig({displayName:"FormInputStyled"})`
  ${f};
  ${({invalid:e})=>e&&m};
`;t.FormInputStyled=p;const v=i.default.forwardRef((e,t)=>{var{field:r,inputWidth:n=u.Spacing.DefaultInputWidth,inputWidthUnit:o=u.Spacing.DefaultSizeUnit,isRequired:f,validatioName:m,validationMessage:v,validate:h}=e,y=s(e,["field","inputWidth","inputWidthUnit","isRequired","validatioName","validationMessage","validate"]);return i.default.createElement(a.Field,{field:r,validate:h||(e=>f&&(0,l.isEmpty)(e+"")?v||d.i18n._("{validatioName} is required",{validatioName:m}):null)},e=>i.default.createElement(p,c({width:`${n}${o}`,value:e.value||0===e.value?e.value:"",onChange:t=>{e.setTouched(!0),e.setValue(t.target.value)},invalid:Boolean(e.error),ref:t},y)))});t.FormInputTextBox=v},7711:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanMutate=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7719),o=r(93);t.CanMutate=(({mutationName:e,children:t})=>{const{user:r}=(0,o.useRoot)();return r.canMutate(e)?i.default.createElement(i.default.Fragment,null,t):i.default.createElement(a.NoAccess,null,`No access to mutation ${e}`)})},7716:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectControl=function(e){return n.default.createElement(i.default,l({},e,{styles:d(e.styles)}))},t.composeSelectControlStyles=void 0;var n=o(r(0)),i=o(r(7753)),a=r(46);function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const d=(e={})=>Object.assign({},e,{control:(t,r)=>{const{selectProps:{width:n,minWidth:i}}=r,o=Object.assign({},t,{border:`1px solid ${a.Colors.greyMiddle}`,margin:a.Spacing.MarginAroundFormComponents,width:void 0!==n?`${n}rem`:"100%",minWidth:void 0!==i?`${i}rem`:"8rem"});return e.control?e.control(o,r):o},menu:(t,r)=>{const{selectProps:{width:n}}=r,i=Object.assign({},t,{zIndex:20,color:a.Colors.black,width:void 0!==n?`${n}rem`:"100%"});return e.menu?e.menu(i,r):i}});t.composeSelectControlStyles=d},7717:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayoutFullHeightItem=void 0;var n=l(r(0)),i=l(r(45)),a=r(7730),o=r(46);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+o.Spacing.LayoutGridCellMargin+")":"calc(100vh - (2 * "+o.Spacing.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+o.Spacing.LayoutGridCellMargin+")":o.Spacing.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+o.Spacing.LayoutGridCellMargin+")":"calc(3.9375rem + "+o.Spacing.LayoutGridCellMargin+")")()};
`,u=i.default.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`;t.PageLayoutFullHeightItem=(({children:e,row:t=1,column:r=0,widthInColumns:i=16,withScrollArea:o=!1,scrollAreaId:l})=>n.default.createElement(d,{column:r,row:t,widthInColumns:i,withScrollArea:o},o?n.default.createElement(a.ScrollArea,{id:l},e):n.default.createElement(u,null,e)))},7718:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.FlexRowSingle=void 0;const i=((n=r(45))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`;t.FlexRowSingle=i},7719:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoAccess=void 0;var n;r(123),r(273),(n=r(0))&&n.__esModule;t.NoAccess=(({children:e})=>null)},7720:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanQuery=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7719),o=r(93);t.CanQuery=(({queryName:e,children:t})=>{const{user:r}=(0,o.useRoot)();return r.canQuery(e)?i.default.createElement(i.default.Fragment,null,t):i.default.createElement(a.NoAccess,null,`No access to query ${e}`)})},7722:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.VerticalGap=void 0;const i=((n=r(45))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"VerticalGap"})`
  height: ${({size:e=1,sizeUnit:t="rem"})=>`${e}${t}`};
`;t.VerticalGap=i,i.displayName="VerticalGap"},7723:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalSeparator=void 0;var n=o(r(0)),i=o(r(45)),a=r(46);function o(e){return e&&e.__esModule?e:{default:e}}const l=i.default.div.withConfig({displayName:"HorizontalSeparatorStyled"})`
  border-top: 1px solid ${a.Colors.greyLight};
  margin: 0.25rem 0rem;
`;t.HorizontalSeparator=(({visible:e=!0})=>e?n.default.createElement(l,null):null)},7727:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSnackBar=function(){const e=(0,a.useContext)(i.SnackbarContextNext),t=(0,a.useCallback)(t=>e(t,o),[]),r=(0,a.useCallback)(t=>e(t,l),[]),n=(0,a.useCallback)(t=>e(t,d),[]),c=(0,a.useCallback)(t=>e(t,u),[]);return{enqueueSnackbar:e,enqueueSuccess:t,enqueueError:r,enqueueWarning:n,enqueueInfo:c}};var n,i=r(280),a=r(0);!function(e){e.default="default",e.error="error",e.success="success",e.warning="warning",e.info="info"}(n||(n={}));const o={variant:n.success},l={variant:n.error},d={variant:n.warning},u={variant:n.info}},7729:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,n.useContext)(i.__RouterContext)};var n=r(0),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(24))},7730:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollArea=void 0;const i=((n=r(45))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`;t.ScrollArea=i},7731:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Price=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(5782);t.Price=(({price:e,currencyCode:t,className:r})=>i.default.createElement("span",{className:r},t?`${(0,a.formatPrice)(e)} ${t}`:(0,a.formatPrice)(e)))},7732:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectControlFlat=void 0;var n,i=r(122),a=(n=r(0))&&n.__esModule?n:{default:n},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(45)),l=r(47);const d=o.default.div.withConfig({displayName:"ItemStyled"})`
  margin: 0.5rem 0.6rem;
  display: inline-block;
  cursor: pointer;
  color: ${({textColor:e})=>e};
  ${function({isSelected:e}){if(!e)return"";return o.css`
    font-weight: bolder;
    text-decoration: underline;
  `}};
`,u=o.default.div.withConfig({displayName:"SelectorStyled"})`
  border: ${({isInvalid:e})=>!0===e?"1px red solid":"auto"};
`;class c extends a.default.Component{hasSelection(){const{isMulti:e,selectedItem:t,selectedItems:r}=this.props;return e?Array.isArray(r)&&r.length>0:null!=t}isItemSelected(e){const{isMulti:t,selectedItem:r,selectedItems:n}=this.props;return t&&Array.isArray(n)?l.RM.contains(e,n):l.RM.equals(r,e)}updateSelection(e){const{isMulti:t,selectedItems:r=[],onSingleSelection:n,onMultiSelection:i}=this.props;null===e?t&&i?i([]):n&&n(null):t&&i?this.isItemSelected(e)?i(Array.isArray(r)?l.RM.without([e],r):[e]):i(Array.isArray(r)?l.RM.concat(r,[e]):[]):n&&n(e)}render(){const{items:e,isClearable:t,isInvalid:r=!1,textColor:n="inherit",formatItem:o}=this.props;return a.default.createElement(u,{isInvalid:r},t&&a.default.createElement(d,{isSelected:!this.hasSelection(),textColor:n,onClick:()=>{this.updateSelection(null)}},a.default.createElement(i.Trans,{id:"optionselector.clear-filter"})),e.map((e,t)=>a.default.createElement(d,{key:t,isSelected:this.isItemSelected(e),textColor:n,onClick:()=>{this.updateSelection(e)}},o(e))))}}t.SelectControlFlat=c,c.defaultProps={formatItem:l.RM.prop("displayName"),getItemValue:l.RM.prop("id")}},7736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchPicker=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(93),o=r(47),l=r(7743),d=r(7754);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.CompanyBranchPicker=(({breakpoint:e=3,selectedBranches:t=[],isMulti:r=!1,isClearable:n=!0,textColor:c,onSelectionChange:s,onSelectionClear:f,getDropdownProps:m=(()=>({}))})=>{const{user:p}=(0,a.useRoot)(),v=e=>t.includes(e.id),h={textColor:c,isClearable:n,isMulti:r,branches:p.branches,selectedBranch:p.branches.find(v),selectedBranches:p.branches.filter(v),onSingleSelection(e){null===e&&f?f():null!==e&&s&&s([e.id],[e])},onMultiSelection(e){0===e.length&&f?f():e.length&&s&&s(e.map(o.RM.prop("id")),e)}};return p.branches.length<e?i.default.createElement(d.CompanyBranchFlatSelect,h):i.default.createElement(l.CompanyBranchDropdown,u({},h,m()))})},7741:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useGuardedMutation=function(e,t={}){const r=s.i18n._("Unexpected error occured while sending a request. Our team was notified about the issue."),{enqueueSnackbar:n,enqueueError:i,enqueueInfo:o}=(0,m.useSnackBar)(),f=(0,l.useCallback)(e=>{e.forEach(o)},[]),h=(0,l.useCallback)(e=>{const t=e.filter(u.RM.propEq("showToUser",!0));0===t.length?i(r):f(t.map(u.RM.prop("message")))},[]),y=(0,l.useCallback)(e=>{if((0,a.isApolloError)(e)){if(e.networkError)return void i(s.i18n._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void h(e.graphQLErrors)}(0,c.reportError)(e),n(r,{action:[l.default.createElement(v,{key:"feedback"})]})},[]),g=(0,d.useMutation)(e,t);return e=>p(this,void 0,void 0,function*(){try{const n=yield g({variables:e});if(n.errors)return h(n.errors),null;if(!n.data)return null;const i=n.data;if(t.getUserErrors){const e=t.getUserErrors(i);null!==e&&f(e)}return i}catch(r){return y(r),null}})};var n,i=r(122),a=r(32),o=(n=r(5798))&&n.__esModule?n:{default:n},l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),d=r(279),u=r(47),c=r(97),s=r(71),f=r(5777),m=r(7727);var p=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})};function v(){return l.default.createElement(f.TouchButton,{onClick:()=>o.default.showReportDialog()},l.default.createElement(i.Trans,{id:"Submit feedback"}))}},7742:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TouchButtonDelete=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(46),o=r(5777);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};t.TouchButtonDelete=(e=>{var{onDelete:t,confirmText:r}=e,n=d(e,["onDelete","confirmText"]);return i.default.createElement(o.TouchButton,l({iconName:"delete",color:a.Colors.greyMiddle,width:a.Spacing.ButtonHeight,height:a.Spacing.ButtonHeight,onClick:e=>{e.preventDefault(),r&&!window.confirm(r)||t()}},n))})},7743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchDropdown=void 0;var n,i=r(122),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7751),l=r(7716),d=r(47),u=r(71);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const f=e=>{const{getStyles:t}=e,r=e.innerProps,{ref:n}=r,o=s(r,["ref"]);return a.default.createElement("div",c({},o,{ref:n,style:t("clearIndicator",e)}),a.default.createElement("div",{style:{padding:"0px 5px"}},a.default.createElement(i.Trans,{id:"All"})))};t.CompanyBranchDropdown=(e=>{var{branches:t,selectedBranch:r,onSingleSelection:n,selectedBranches:i,onMultiSelection:m}=e,p=s(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return a.default.createElement(l.SelectControl,c({value:p.isMulti?i:r,placeholder:p.isMulti?u.i18n._("Filter branches..."):u.i18n._("Select a branch"),options:t,getOptionValue:d.RM.prop("id"),formatOptionLabel:e=>a.default.createElement(o.CompanyBranch,{branch:e}),filterOption:(e,t)=>e.data.name.toLocaleLowerCase().includes(t.toLocaleLowerCase()),closeMenuOnSelect:!p.isMulti,components:{ClearIndicator:f},styles:{clearIndicator:e=>Object.assign({},e,{cursor:"pointer"})},onChange:e=>{p.isMulti&&m&&Array.isArray(e)&&m(e),!p.isMulti&&n&&(Array.isArray(e)?n(d.RM.head(e)||null):n(e||null))}},p))})},7744:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useExecutableQuery=function(e,t={}){const r=(0,l.useApolloClient)(),c=(0,o.useObservable)({data:null,loading:!1,wasExecuted:!1,get hasAnyError(){return Boolean(c.errors&&c.errors.length||c.error)}});return{result:c,execute:o=>u(this,void 0,void 0,function*(){c.loading=!0;try{const i=yield r.query(Object.assign({},t,{query:e,variables:o}));(0,a.runInAction)(()=>{c.wasExecuted=!0,c.data=i.data,c.errors=i.errors,c.loading=!1})}catch(l){(0,n.isApolloError)(l)?(0,a.runInAction)(()=>{c.error=l,c.errors=l.graphQLErrors,c.loading=!1}):((0,a.runInAction)(()=>{c.error=l,c.loading=!1}),(0,d.reportError)(l))}return c.errors&&(0,d.reportFailingQuery)(c.errors,{query:(0,i.getOperationName)(e),variables:o}),c})}};var n=r(32),i=r(31),a=r(11),o=r(94),l=r(93),d=r(97),u=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})}},7745:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOrderState=s,t.OrderListLoader=void 0;var n,i=r(151),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(95),l=r(148),d=r(47),u=r(7806);const c=[l.OrderStateCategoryEnum.NewOrders,l.OrderStateCategoryEnum.Preparing,l.OrderStateCategoryEnum.ReadyToDeliver,l.OrderStateCategoryEnum.OnWay,l.OrderStateCategoryEnum.Finished];function s(e){return e.orderStateCategory}function f(e,t){const{order:r}=e.updatedOrder;if(!r)return t;let n=!1;const i=d.RM.reject(m,t.orders).map(e=>e.id===r.id?(n=!0,r):e);return n||i.unshift(r),Object.assign({},t,{orders:i})}function m(e){return e.orderStateCategory===l.OrderStateCategoryEnum.Finished&&(0,i.differenceInHours)(new Date,e.createdAt)>e.companyBranch.oldOrderThreshold}t.OrderListLoader=(({children:e,includeOldFinished:t=!1})=>a.default.createElement(o.WithRoot,{render:r=>{if(!r.order.list.hasBranchFilter)return e({isLoading:!1,noFilter:!0});const n={branches:r.order.list.branchesFilter,categories:c,includeOldFinished:t};return a.default.createElement(u.QueryOrderList,{fetchPolicy:"cache-and-network",refetchOnConnectionLost:!0,variables:n,renderLoading:!1,render:({orders:t=[],orderStateCategories:r=[]},i)=>a.default.createElement(u.SubscribeOrderList,{queryResult:i,variables:n,handleUpdate:f},e({isLoading:i.loading,noFilter:!1,orders:t,categorizedOrders:function(e){return e.reduce((e,t)=>{const r=s(t);return c.includes(r)?(e[r]?e[r].push(t):e[r]=[t],e):e},{})}(t),categories:r.filter(e=>c.includes(e.enum))}))})}}))},7747:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardListTitle=void 0;var n,i=(n=r(45))&&n.__esModule?n:{default:n},a=r(46);const o=i.default.h2.withConfig({displayName:"CardListTitle"})`
  color: ${a.Colors.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`;t.CardListTitle=o},7749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TouchButtonBadge=void 0;var n,i=(n=r(45))&&n.__esModule?n:{default:n},a=r(46);const o=i.default.div.withConfig({displayName:"TouchButtonBadge"})`
  min-height: 1.8rem;
  line-height: 1.8rem;
  min-width: 1.8rem;
  font-size: 1.2rem;
  margin: 0;
  background-color: ${a.Colors.red};
  color: white;
  position: absolute;
  right: -0.25rem;
  top: -0.25rem;
  border-radius: 1.8rem;
  text-align: center;
  vertical-align: middle;
  padding: 0;
`;t.TouchButtonBadge=o},7750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryTimeDialog=void 0;var n=r(122),i=r(123),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=r(7803),l=r(5777);t.DeliveryTimeDialog=(({title:e,onConfirm:t,onCancel:r,children:d,cancelText:u,refApi:c})=>{const[s,f]=(0,a.useState)(!1),m=()=>f(!0),p=()=>f(!1);return c&&(c.current={openDialog:m,closeDialog:p}),a.default.createElement(a.default.Fragment,null,d&&d({openDialog:m,closeDialog:p}),a.default.createElement(i.Dialog,{open:s,onClose:p},a.default.createElement(i.DialogTitle,null,e),a.default.createElement(i.DialogContent,null,a.default.createElement(o.DeliveryMinutes,{onMinuteClick:e=>{p(),t(e)}})),a.default.createElement(i.DialogActions,null,a.default.createElement(l.TouchButton,{onClick:()=>{p(),r&&r()}},u||a.default.createElement(n.Trans,{id:"Cancel"})))))})},7751:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranch=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7752);t.CompanyBranch=(({branch:e,onClick:t,short:r=!1,showBrand:n=!0})=>i.default.createElement(a.CursorContainer,{cursor:"pointer",onClick:t},r?e.name.substr(0,8):i.default.createElement(i.default.Fragment,null,i.default.createElement("span",null,e.name),n&&i.default.createElement("span",null,` [${e.brand.name}]`))))},7752:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.CursorContainer=void 0;const i=((n=r(45))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"CursorContainer"})`
  cursor: ${({cursor:e="default"})=>e};
`;t.CursorContainer=i},7754:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchFlatSelect=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7732),o=r(46);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};t.CompanyBranchFlatSelect=(e=>{var{branches:t,selectedBranch:r,selectedBranches:n,textColor:u=o.Colors.black}=e,c=d(e,["branches","selectedBranch","selectedBranches","textColor"]);return i.default.createElement(a.SelectControlFlat,l({items:t,selectedItem:r,selectedItems:n,textColor:u,formatItem:e=>i.default.createElement("span",{title:e.brand.name},e.name)},c))})},7755:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isPartialMatch=function(e){const t=e.toLocaleLowerCase();return e=>e.toLocaleLowerCase().includes(t)}},7757:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayoutItem=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=r(149),a=r(7711),o=r(7720);var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};t.PageLayoutItem=(e=>{var{route:t,component:r,canQuery:d,canMutate:u}=e,c=l(e,["route","component","canQuery","canMutate"]);let s=t?n.default.createElement(i.Link,{to:t},(0,n.createElement)(r)):(0,n.createElement)(r);return d&&(s=n.default.createElement(o.CanQuery,{queryName:d},s)),u&&(s=n.default.createElement(a.CanMutate,{mutationName:u},s)),n.default.createElement("div",c,s)})},7758:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LinkStyled=void 0;const i=((n=r(45))&&n.__esModule?n:{default:n}).default.a.withConfig({displayName:"LinkStyled"})`
  color: inherit;
  text-decoration-color: rgba(0, 0, 0, 0.08);
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
  &:visited {
    text-decoration-color: rgba(0, 0, 0, 0.08);
  }
`;t.LinkStyled=i},7759:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWareLine=void 0;var n=l(r(0)),i=l(r(45)),a=r(7731),o=r(46);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,u=i.default.div.withConfig({displayName:"CodeContainerStyled"})`
  flex: 0 0 5rem;
`,c=i.default.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${o.Colors.greyMiddle};
`,s=i.default.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${o.Colors.greyMiddle};
`;t.OrderWareLine=(({code:e,label:t,price:r})=>n.default.createElement(d,null,n.default.createElement(u,null,e),n.default.createElement(c,null,t),n.default.createElement(s,null,n.default.createElement(a.Price,{price:r}))))},7765:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputFlatSelect=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7708),o=r(47),l=r(71),d=r(7732);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};class s extends i.default.Component{constructor(){super(...arguments),this.validate=(e=>{const{isRequired:t,isMulti:r,validationName:n}=this.props;if(t){if(r&&(!Array.isArray(e)||0===e.length))return l.i18n._("{validationName} must have at least option selected",{validationName:n});if(!r&&null==e)return l.i18n._("{validationName} must have a selection",{validationName:n})}return null})}getControlProps(e){const{isMulti:t,items:r,defaultSelection:n,getItemId:i}=this.props,a=e.value||n;if(t){const t=e=>a.includes(i(e));return{selectedItems:Array.isArray(a)?r.filter(t):[],onMultiSelection:t=>{e.setValue(t.map(i)),e.setTouched(!0)}}}return{selectedItem:a&&r.find(e=>i(e)===a),onSingleSelection:t=>{e.setValue(t?i(t):null),e.setTouched(!0)}}}render(){const e=this.props,{field:t,fieldIsPure:r=!1,isRequired:n=!1,isClearable:o=!1}=e,l=c(e,["field","fieldIsPure","isRequired","isClearable"]);return i.default.createElement(a.Field,{field:t,pure:r,validate:this.validate},e=>i.default.createElement(d.SelectControlFlat,u({},this.getControlProps(e),{isInvalid:Boolean(e.error),isClearable:o&&!n},l)))}}t.FormInputFlatSelect=s,s.defaultProps={validationName:l.i18n._("Value"),getItemId:o.RM.prop("id")}},7766:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTickerFragment=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n},a=r(96);const o=i.default`
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
  ${a.AddressFragment}
  ${a.CustomerFragment}
`;t.OrderTickerFragment=o},7781:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryTimeBadge=void 0;var n,i=r(273),a=r(151),o=r(5785),l=(n=r(0))&&n.__esModule?n:{default:n},d=r(7782),u=r(5795);const c=o.css`
  padding: 0.2rem 0.3rem 0.1rem 0.3rem;
`;t.DeliveryTimeBadge=(({deliverAt:e,deliveredAt:t,isCancelled:r=!1,onClick:n})=>{const o=!(t||r),s=(0,u.useTimer)({interval:u.MINUTE,enabled:o});let f=d.ETimeBadgeVariant.UNKNOWN;if(r)return l.default.createElement(d.TimeBadge,{variant:f,className:c},l.default.createElement(i.CancelOutlined,null));if(!e)return l.default.createElement(d.TimeBadge,{variant:f},"\u2754");const m=(0,a.differenceInMinutes)(e,t||s);return f=m>20?d.ETimeBadgeVariant.NORMAL:m>0?d.ETimeBadgeVariant.WARNING:d.ETimeBadgeVariant.CRITICAL,l.default.createElement(d.TimeBadge,{minutes:m,variant:f,onClick:n})})},7782:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimeBadge=t.ETimeBadgeVariant=void 0;var n,i=r(5785),a=d(r(0)),o=d(r(45)),l=r(46);function d(e){return e&&e.__esModule?e:{default:e}}t.ETimeBadgeVariant=n,function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.CRITICAL=1]="CRITICAL",e[e.WARNING=2]="WARNING",e[e.NORMAL=3]="NORMAL"}(n||(t.ETimeBadgeVariant=n={}));const u=o.default.div.withConfig({displayName:"TimeBadgeStyled"})`
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.4rem 0.3rem 0.1rem 0.3rem;
  border: 1px solid white;
  border-radius: 4rem;
  color: ${l.Colors.white};
  background: ${l.Colors.greyMiddle};
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`,c={[n.UNKNOWN]:(0,o.default)(u)``,[n.CRITICAL]:(0,o.default)(u)`
    background: ${l.Colors.red};
  `,[n.WARNING]:(0,o.default)(u)`
    background: ${l.Colors.orange};
    color: ${l.Colors.black};
    font-weight: bold;
  `,[n.NORMAL]:(0,o.default)(u)`
    background: ${l.Colors.green};
  `},s=i.css`
  font-size: 0.8rem;
  padding: 0.6rem 0.3rem 0 0.3rem;
`,f=i.css`
  cursor: pointer;
`;t.TimeBadge=(({minutes:e,className:t,children:r,variant:n,onClick:o})=>{const l=c[n];let d=r;const u=[];return void 0!==e&&(d=e<-99?"\u2796":e.toString(),(e>99||e<-9)&&u.push(s)),o&&u.push(f),a.default.createElement(l,{onClick:o,className:(0,i.cx)(t,...u)},d)})},7799:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateOrderButton=void 0;var n,i=r(273),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(149),l=r(7749),d=r(71),u=r(5777),c=r(46),s=r(7800);t.CreateOrderButton=(({showOnlyText:e=!1})=>a.default.createElement(s.OrderCallWatch,{render:t=>{const r={pathname:`/order/create/${t?t.phone:""}`,state:{eventId:t?t.eventId:null}};return a.default.createElement(o.Link,{to:r},a.default.createElement(u.TouchButton,{text:d.i18n._("Create order"),iconName:e?void 0:"add_circle",color:c.Colors.turquoise,badge:t&&t.isRinging?a.default.createElement(l.TouchButtonBadge,null,a.default.createElement(i.RingVolume,null)):null}))}}))},7800:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCallWatch=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(281),o=r(7801);t.OrderCallWatch=(({render:e})=>i.default.createElement(a.Subscription,{subscription:o.OrderCallSubscription},({data:t})=>e(t?t.updatedUserCallingCustomer:null)))},7801:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCallSubscription=void 0;const i=((n=r(21))&&n.__esModule?n:{default:n}).default`
  subscription SOrderCall {
    updatedUserCallingCustomer {
      eventId
      phone
      isRinging
    }
  }
`;t.OrderCallSubscription=i},7802:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderButton=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(149),o=r(7749),l=r(71),d=r(5777),u=r(46);t.OrderButton=(({count:e})=>i.default.createElement(a.Link,{to:"/order"},i.default.createElement(d.TouchButton,{text:l.i18n._("Orders"),iconName:"assignment_returned",badge:e&&e>0?i.default.createElement(o.TouchButtonBadge,null,e):null,color:u.Colors.yellow})))},7803:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMinutes=void 0;var n=l(r(0)),i=l(r(45)),a=r(5777),o=r(46);function l(e){return e&&e.__esModule?e:{default:e}}const d=[20,30,45,60,75,90,105,120],u=i.default.div.withConfig({displayName:"MinutesContainer"})`
  display: flex;
  justify-content: 'center';
  flex-wrap: 'wrap';
  font-size: 2rem;
`,c=i.default.div.withConfig({displayName:"MinutesItem"})`
  margin: 1rem 1rem 0 0;
`;t.DeliveryMinutes=(({onMinuteClick:e})=>n.default.createElement(u,null,d.map(t=>n.default.createElement(c,{key:t},n.default.createElement(a.TouchButton,{onClick:()=>{e(t)},color:o.Colors.green},t)))))},7804:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDebounceCallback=function(e,t=300){const r=(0,a.useCallback)(e,[]),n=(0,a.useRef)((0,i.default)(r,t));return(0,a.useEffect)(()=>n.current.clear),n.current};var n,i=(n=r(64))&&n.__esModule?n:{default:n},a=r(0)},7806:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubscribeOrderList=t.QueryOrderList=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n},a=r(61),o=r(7807),l=r(5789),d=r(7808),u=r(7766);const c=i.default`
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

  ${l.OrderStateCategoryFragment}
  ${d.OrderMapMarkerFragment}
  ${u.OrderTickerFragment}
`,s=i.default`
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
  ${l.OrderStateCategoryFragment}
  ${d.OrderMapMarkerFragment}
  ${u.OrderTickerFragment}
`,f=(0,a.buildQuery)(c);t.QueryOrderList=f;const m=(0,o.buildSubscription)(s);t.SubscribeOrderList=m},7807:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildSubscription=function(e){return function(t){return(0,n.useEffectOnce)(()=>{const{queryResult:r,variables:n,handleUpdate:i}=t;return r.subscribeToMore({document:e,variables:n,updateQuery:(e,{subscriptionData:t})=>t&&t.data&&i(t.data,e)||e})}),t.children}};var n=r(5791)},7808:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapMarkerFragment=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n},a=r(96);const o=i.default`
  fragment GOrderMapMarker on Order {
    id
    deliverAt
    gps {
      ...GGeoPoint
    }
  }
  ${a.GeoPointFragment}
`;t.OrderMapMarkerFragment=o},7809:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseMap=void 0;var n=r(5792),i=d(r(0)),a=r(7746),o=d(r(45)),l=r(46);function d(e){return e&&e.__esModule?e:{default:e}}const u=o.default.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: ${l.Radiuses.Card};
  overflow: hidden;
  height: 100%;
`,c=(0,a.withGoogleMap)(({children:e})=>i.default.createElement(i.default.Fragment,null,e));t.BaseMap=(({model:e,children:t})=>{const r={streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1};return i.default.createElement(c,{containerElement:i.default.createElement(u,null),mapElement:i.default.createElement("div",{style:{height:"100%"}})},i.default.createElement(n.Observer,null,()=>i.default.createElement(a.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,options:r},t)))})},7820:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderBox=t.OrderBoxStyled=void 0;var n=u(r(0)),i=u(r(45)),a=r(7821),o=r(46),l=r(7822),d=r(7824);function u(e){return e&&e.__esModule?e:{default:e}}const c=i.default.div.withConfig({displayName:"OrderBoxStyled"})`
  background-color: ${o.Colors.white};
  color: ${o.Colors.greyDarkest};
  border-radius: ${o.Radiuses.Card};
  margin-bottom: 0.5rem;
  position: relative;
`;t.OrderBoxStyled=c;t.OrderBox=(({order:e,showBranch:t,toggleOrderDetail:r,isOrderDetailOpen:i})=>n.default.createElement(c,{id:`order-${e.id}`},n.default.createElement(l.OrderTicker,{order:e,showBranch:t,onClick:()=>r(e)}),n.default.createElement(a.ObserverWhen,{test:()=>i(e.id),renderSuccess:()=>n.default.createElement(d.OrderDetail,{orderId:e.id})})))},7821:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ObserverWhen=void 0;var n,i=r(5792),a=(n=r(0))&&n.__esModule?n:{default:n};t.ObserverWhen=(({test:e,renderSuccess:t,renderFailure:r})=>a.default.createElement(i.Observer,{render:()=>e()?t():r?r():null}))},7822:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTicker=void 0;var n=r(122),i=p(r(153)),a=p(r(0)),o=r(5799),l=p(r(45)),d=r(7731),u=r(148),c=r(5782),s=r(46),f=r(7823),m=r(7781);function p(e){return e&&e.__esModule?e:{default:e}}const v=(0,l.default)(o.Element).withConfig({displayName:"OrderTickerStyled"})`
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: ${(0,i.default)(s.Colors.turquoise).alpha(.05).string()};
  }
  &:active {
    background-color: ${(0,i.default)(s.Colors.turquoise).alpha(.2).string()};
  }
`,h=l.default.div.withConfig({displayName:"OrderTickerMainContentStyled"})`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.4rem;
`,y=l.default.div.withConfig({displayName:"DeliveryTimeBadgeContainerStyled"})`
  flex: 0 0 2rem;
`,g=l.default.div.withConfig({displayName:"AddressDisplayContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,O=l.default.div.withConfig({displayName:"CustomerIdentityContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,b=l.default.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 3.5rem;
  text-align: right;
  position: relative;
`,C=l.default.div.withConfig({displayName:"PaidMarkStyled"})`
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
`,_=l.default.div.withConfig({displayName:"PaidTextStyled"})`
  color: ${s.Colors.orange};
`,S=l.default.div.withConfig({displayName:"ToBranchContainerStyled"})`
  padding: 0.3rem 0.6rem;
  display: inline-block;
  border-top-left-radius: ${s.Radiuses.Card};
  background-color: ${s.Colors.green};
  color: ${s.Colors.white};
`;t.OrderTicker=(({order:e,showBranch:t,onClick:r})=>a.default.createElement(v,{onClick:r,name:`order-${e.id}`},t&&a.default.createElement(S,null,e.companyBranch.name),a.default.createElement(h,null,a.default.createElement(y,null,a.default.createElement(m.DeliveryTimeBadge,{deliverAt:e.deliverAt,deliveredAt:e.deliveredAt,isCancelled:e.orderStateCategory===u.OrderStateCategoryEnum.Cancel})),a.default.createElement(g,null,(0,c.formatAddress)(e.address)),a.default.createElement(O,null,a.default.createElement(f.CustomerIdentity,{customer:e.customer})),a.default.createElement(b,null,a.default.createElement(d.Price,{price:e.totalSum.value}),e.isPaidWithCard&&a.default.createElement(a.default.Fragment,null,a.default.createElement(C,null),a.default.createElement(_,null,a.default.createElement(n.Trans,{id:"Paid"})))))))},7823:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomerIdentity=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n};t.CustomerIdentity=(({customer:e})=>e?i.default.createElement("span",null,`${e.lastName?`${e.firstName} ${e.lastName}`:e.defaultPhone?e.defaultPhone.phone:""}`):i.default.createElement("i",null,"unknown"))},7824:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDetail=void 0;var n=h(r(0)),i=h(r(45)),a=r(7723),o=r(7825),l=r(7826),d=r(7827),u=r(7828),c=r(7829),s=r(7830),f=r(7831),m=r(7832),p=r(7833),v=r(7834);function h(e){return e&&e.__esModule?e:{default:e}}const y=i.default.div.withConfig({displayName:"OrderDetailContainerStyled"})`
  padding: 0 0.5rem 0.5rem 1.1rem;
`;t.OrderDetail=(({orderId:e})=>n.default.createElement(p.QueryOrderDetail,{variables:{id:e},fetchPolicy:"cache-and-network",render:({order:t})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(y,null,n.default.createElement(a.HorizontalSeparator,null),n.default.createElement(m.OrderWareList,{orderWares:t.items}),n.default.createElement(u.OrderDetailTotals,{order:t}),n.default.createElement(c.OrderRuleLines,{rules:t.allAppliedRules},n.default.createElement(d.OrderCountLine,{current:t.customerOrdersCountCurrent,total:t.customerOrdersCountTotal})),n.default.createElement(o.ContactLines,{phones:t.customer.phones,emails:t.customer.emails}),n.default.createElement(l.NoteLine,{note:t.note,previousNote:t.previousNote}),n.default.createElement(a.HorizontalSeparator,null),n.default.createElement(f.OrderTimeLine,{orderTiming:t.orderTiming}),n.default.createElement(s.OrderStats,{order:t})),n.default.createElement(v.OrderStateFlow,{orderId:e,branchId:t.companyBranch.id}))}))},7825:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContactLines=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7723),o=r(7709),l=r(7758);t.ContactLines=(({phones:e,emails:t})=>{const r=e=>i.default.createElement(o.IconLine,{icon:e.icon,key:e.value,labelMargin:"0"},i.default.createElement("div",{title:e.description||""},(e=>e.isMail?i.default.createElement(l.LinkStyled,{href:`mailto:${e.value}`},e.value):i.default.createElement(l.LinkStyled,{href:`tel:${e.value.replace("/ /g","")}`},e.value))(e)));return i.default.createElement(i.default.Fragment,null,(e.length>0||t.length>0)&&i.default.createElement(a.HorizontalSeparator,null),e.map(e=>r(Object.assign({icon:"phone",isMail:!1,value:e.phone},e))),t.map(e=>r(Object.assign({icon:"mail_outline",isMail:!0,value:e.email},e))))})},7826:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoteLine=void 0;var n=u(r(0)),i=u(r(45)),a=r(7723),o=r(7709),l=r(71),d=r(46);function u(e){return e&&e.__esModule?e:{default:e}}const c=i.default.span.withConfig({displayName:"CurrentNoteStyled"})`
  color: ${d.Colors.orange};
`,s=i.default.span.withConfig({displayName:"PreviousNoteStyled"})`
  color: ${d.Colors.greyDark};
  margin-left: 0.5rem;
`;t.NoteLine=(({note:e,previousNote:t})=>e||t?n.default.createElement(n.default.Fragment,null,n.default.createElement(a.HorizontalSeparator,null),n.default.createElement(o.IconLine,{icon:"note",labelMargin:"0"},n.default.createElement(c,null,e||l.i18n._("Without note").toLocaleLowerCase()),n.default.createElement(s,null,t))):null)},7827:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCountLine=void 0;var n,i=r(122),a=(n=r(0))&&n.__esModule?n:{default:n};t.OrderCountLine=(({current:e,total:t})=>a.default.createElement(i.Trans,{id:"It's customer's {current, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} order {total, plural, one {} other {from total of # orders}}",values:{current:e,total:t}}))},7828:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDetailTotals=void 0;var n=l(r(0)),i=l(r(45)),a=r(71),o=r(7759);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`;t.OrderDetailTotals=(({order:e})=>n.default.createElement(d,null,n.default.createElement(o.OrderWareLine,{label:a.i18n._("Transport fee"),price:e.transportFee.value}),n.default.createElement(o.OrderWareLine,{label:a.i18n._("Covers price"),price:e.coverPrice.value}),n.default.createElement(o.OrderWareLine,{label:a.i18n._("Discount total"),price:-1*e.totalDiscount.value}),n.default.createElement("b",null,n.default.createElement(o.OrderWareLine,{label:a.i18n._("Total price"),price:e.totalSum.value}))))},7829:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderRuleLines=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7723),o=r(7709);t.OrderRuleLines=(({rules:e,children:t})=>e.length>0||t?i.default.createElement(i.default.Fragment,null,i.default.createElement(a.HorizontalSeparator,null),i.default.createElement(o.IconLine,{icon:"announcement",labelMargin:"0"},t,i.default.createElement("br",null),e.join(", "))):null)},7830:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStats=void 0;var n=r(122),i=r(273),a=u(r(0)),o=u(r(45)),l=r(7709),d=r(5782);function u(e){return e&&e.__esModule?e:{default:e}}const c=o.default.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`;t.OrderStats=(({order:e})=>{const t=[];if(e.deliverAt&&t.push(a.default.createElement("div",{key:"deliverAt"},(0,d.formatTimeWithoutTodayDate)(e.deliverAt),a.default.createElement(c,null,a.default.createElement(n.Trans,{id:"Deliver on time"})))),e.driver){const{firstName:r,lastName:i}=e.driver.user;t.push(a.default.createElement("div",{key:"driver"},`${r} ${i}`,a.default.createElement(c,null,a.default.createElement(n.Trans,{id:"Driver"}))))}return 0===t.length?null:a.default.createElement(l.IconLine,{icon:i.Timelapse,labelMargin:"0"},t)})},7831:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimeLine=void 0;var n=r(122),i=s(r(0)),a=s(r(45)),o=r(7709),l=r(148),d=r(5782),u=r(47),c=r(71);function s(e){return e&&e.__esModule?e:{default:e}}const f=a.default.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,m={[l.OrderStateCategoryEnum.NewOrders]:(0,n.i18nMark)("Created"),[l.OrderStateCategoryEnum.Preparing]:(0,n.i18nMark)("Preparing"),[l.OrderStateCategoryEnum.ReadyToDeliver]:(0,n.i18nMark)("Ready to deliver"),[l.OrderStateCategoryEnum.OnWay]:(0,n.i18nMark)("On way"),[l.OrderStateCategoryEnum.Finished]:(0,n.i18nMark)("Finished")};t.OrderTimeLine=(({orderTiming:e})=>i.default.createElement(o.IconLine,{icon:"access_time",labelMargin:"0"},u.RM.reject(({createdAt:e,orderStateCategory:t})=>null===e||!m[t],e).map(e=>i.default.createElement("div",{key:e.orderStateCategory},(0,d.formatTimeWithoutTodayDate)(e.createdAt),i.default.createElement(f,null,c.i18n._(m[e.orderStateCategory]))))))},7832:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWareList=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=r(7759);t.OrderWareList=(({orderWares:e})=>{return n.default.createElement("div",null,e.map(e=>n.default.createElement(n.Fragment,{key:e.id},n.default.createElement(i.OrderWareLine,{code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),n.default.createElement(n.default.Fragment,null,e.sidedishes.map(e=>n.default.createElement(i.OrderWareLine,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value}))))))})},7833:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderDetail=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n},a=r(61),o=r(96),l=r(5793);const d=(0,a.buildQuery)(i.default`
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
  ${o.PriceFragment}
  ${o.EmailFragment}
  ${o.PhoneFragment}
  ${l.OrderDriverFragment}
`);t.QueryOrderDetail=d},7834:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateFlow=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(99),o=r(95),l=r(148),d=r(97),u=r(7835),c=r(7836),s=r(7838),f=r(7839),m=r(7745),p=r(7840);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const h=e=>i.default.createElement(s.OrderStateFlowContainer,null,i.default.createElement(f.OrderStateTimeNotification,e),i.default.createElement(u.OrderStateButton,v({nextState:l.OrderStateEnum.Accepted},e))),y=e=>i.default.createElement(s.OrderStateFlowContainer,null,i.default.createElement(f.OrderStateTimeNotification,e),e.canDeliver?i.default.createElement(c.OrderStateDeliver,e):i.default.createElement(u.OrderStateButton,v({nextState:l.OrderStateEnum.Finished},e))),g=e=>i.default.createElement(s.OrderStateFlowContainer,null,i.default.createElement(f.OrderStateTimeNotification,e),i.default.createElement(c.OrderStateDeliver,e),i.default.createElement(u.OrderStateButton,v({nextState:l.OrderStateEnum.Finished},e)));t.OrderStateFlow=(({orderId:e,branchId:t})=>i.default.createElement(o.WithRoot,{observe:!1,render:({order:{state:r}})=>i.default.createElement(p.QueryOrderState,{variables:{orderId:e,branchId:t},render:({order:n,companyBranch:{allowedCategories:o}})=>{const u=(0,m.getOrderState)(n);if(!u)return(0,d.reportError)(new a.VError("Order %s has got no state categories")),null;const c=o.includes(l.OrderStateCategoryEnum.OnWay)&&null!=n.deliveryType&&n.deliveryType.enum!==l.DeliveryTypeEnum.Pickup,s={orderId:e,branchId:t,stateModel:r,orderStateCategory:u,canDeliver:c};switch(u){case l.OrderStateCategoryEnum.NewOrders:return i.default.createElement(h,s);case l.OrderStateCategoryEnum.Preparing:return i.default.createElement(y,s);case l.OrderStateCategoryEnum.OnWay:return i.default.createElement(g,s);default:return null}}})}))},7835:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateButton=void 0;var n,i=r(122),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(148),l=r(71),d=r(5777);const u={[o.OrderStateEnum.Accepted]:(0,i.i18nMark)("Accept order"),[o.OrderStateEnum.Finished]:(0,i.i18nMark)("Finish order")};t.OrderStateButton=(({orderId:e,nextState:t,stateModel:r})=>a.default.createElement(d.TouchButton,{text:l.i18n._(u[t]),width:"7.375rem",onClick:()=>{r.updateOrderState(e,t)}}))},7836:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateDeliver=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(148),o=r(7837),l=r(5793);t.OrderStateDeliver=(({branchId:e,orderId:t,orderStateCategory:r,stateModel:n})=>i.default.createElement(l.QueryDriverSelection,{fetchPolicy:"network-only",variables:{branchId:e,orderId:t},render:({drivers:e,order:{driver:l}},{loading:d,refetch:u})=>i.default.createElement(o.OrderDriverSelect,{drivers:e,selectedDriver:l?l.user:null,isLoading:d,onReload:u,onClear:()=>{l&&n.removeDriver(l.id)},onSelect:e=>{n.selectDriver(t,e.id),r!==a.OrderStateCategoryEnum.OnWay&&n.deliverOrder(t)}})}))},7837:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDriverSelect=void 0;var n=s(r(0)),i=r(7753),a=s(r(45)),o=r(150),l=r(7716),d=r(47),u=r(71),c=r(46);function s(e){return e&&e.__esModule?e:{default:e}}const f=a.default.div.withConfig({displayName:"DriverName"})`
  margin: 0.1rem 0 0rem 0.2rem;
  display: inline-block;
  vertical-align: top;
  font-size: 1.25rem;
`,m={background:c.Colors.greyMiddle},p={color:c.Colors.white},v={control:e=>Object.assign({},e,m,p,{height:c.Spacing.ButtonHeight,borderWidth:0,borderRadius:c.Radiuses.Button,margin:0}),menu:e=>Object.assign({},e,m),valueContainer:e=>Object.assign({},e,p),singleValue:e=>Object.assign({},e,p),placeholder:e=>Object.assign({},e,p,{fontSize:"1.2rem"})};t.OrderDriverSelect=(({drivers:e,selectedDriver:t,isLoading:r,onSelect:a,onClear:s,onReload:m})=>n.default.createElement(l.SelectControl,{options:e,value:t,getOptionValue:d.RM.prop("id"),isLoading:r,isSearchable:!1,isClearable:!0,placeholder:"Deliver order",width:16,styles:v,noOptionsMessage:()=>u.i18n._("No drivers available"),onChange:e=>null===e?s():a(e),onMenuOpen:m,components:{ValueContainer:e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(o.Icon,{iconName:"directions_car",fontSize:2,color:c.Colors.white}),n.default.createElement(i.components.ValueContainer,e)),DropdownIndicator:()=>null},formatOptionLabel:e=>n.default.createElement(f,null,`${e.firstName} ${e.lastName}`)}))},7838:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateFlowContainer=void 0;var n,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=(n=r(45))&&n.__esModule?n:{default:n},o=r(46);const l=a.default.div.withConfig({displayName:"OrderStateFlowContainerWrapper"})`
  margin: 0 0 0 auto;
  text-align: right;
  height: ${o.Spacing.ButtonHeight};
`,d=a.default.div.withConfig({displayName:"Control"})`
  margin: 0 0 0 0.5rem;
  display: inline-block;
  vertical-align: bottom;
  text-align: left;
  height: 100%;
`;t.OrderStateFlowContainer=(({children:e})=>i.default.createElement(l,null,i.Children.map(e,(e,t)=>i.default.createElement(d,{key:t},e))))},7839:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateTimeNotification=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(93),o=r(71),l=r(7750),d=r(5777);t.OrderStateTimeNotification=(({orderId:e})=>{const{order:t}=(0,a.useRoot)();return i.default.createElement(l.DeliveryTimeDialog,{title:o.i18n._("Send expected time of delivery to customer (in minutes)"),onConfirm:r=>{t.state.sendTimeNotification(e,r)}},({openDialog:e})=>i.default.createElement(d.TouchButton,{iconName:"schedule",onClick:e}))})},7840:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderState=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n},a=r(61),o=r(5789);const l=(0,a.buildQuery)(i.default`
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
  ${o.OrderStateCategoryFragment}
`);t.QueryOrderState=l},7857:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.r(t);var i=r(8041),a=r.n(i);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===s(Symbol.iterator)?function(e){return s(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)})(e)}function m(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?n(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}var y=r(0),g=r.n(y),O=r(287),b=r.n(O),C=r(5785),_=r(5),S=r.n(_),k=r(5630);var E,w="__EMOTION_THEMING__",M=((E={})[w]=S.a.object,E);var P=k.a,N=function(e){return"theme"!==e&&"innerRef"!==e},I=function(){return!0},j=function(e,t){for(var r=2,n=arguments.length;r<n;r++){var i=arguments[r],a=void 0;for(a in i)e(a)&&(t[a]=i[a])}return t};var L=function(e,t){var r=function(n,i){var a,o,l,d;void 0!==i&&(a=i.e,o=i.label,l=i.target,d=n.__emotion_forwardProp&&i.shouldForwardProp?function(e){return n.__emotion_forwardProp(e)&&i.shouldForwardProp(e)}:i.shouldForwardProp);var u=n.__emotion_real===n,c=void 0===a&&u&&n.__emotion_base||n;return"function"!==typeof d&&(d="string"===typeof c&&c.charAt(0)===c.charAt(0).toLowerCase()?P:N),function(){var s=arguments,f=u&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==o&&f.push("label:"+o+";"),void 0===a)if(null==s[0]||void 0===s[0].raw)f.push.apply(f,s);else{f.push(s[0][0]);for(var m=s.length,p=1;p<m;p++)f.push(s[p],s[0][p])}var v=function(r){var n,i;function o(){return r.apply(this,arguments)||this}i=r,(n=o).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var u=o.prototype;return u.componentWillMount=function(){void 0!==this.context[w]&&(this.unsubscribe=this.context[w].subscribe(function(e){this.setState({theme:e})}.bind(this)))},u.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[w].unsubscribe(this.unsubscribe)},u.render=function(){var r=this.props,n=this.state;this.mergedProps=j(I,{},r,{theme:null!==n&&n.theme||r.theme||{}});var i="",o=[];return r.className&&(i+=void 0===a?e.getRegisteredStyles(o,r.className):r.className+" "),i+=void 0===a?e.css.apply(this,f.concat(o)):a,void 0!==l&&(i+=" "+l),t.createElement(c,j(d,{},r,{className:i,ref:r.innerRef}))},o}(t.Component);return v.displayName=void 0!==o?o:"Styled("+("string"===typeof c?c:c.displayName||c.name||"Component")+")",void 0!==n.defaultProps&&(v.defaultProps=n.defaultProps),v.contextTypes=M,v.__emotion_styles=f,v.__emotion_base=c,v.__emotion_real=v,v.__emotion_forwardProp=d,Object.defineProperty(v,"toString",{value:function(){return"."+l}}),v.withComponent=function(e,t){return r(e,void 0!==t?j(I,{},i,t):i).apply(void 0,f)},v}};return r}(C,g.a),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var T=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return a.state={},a.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},a.elements={},a.onResize=a.onResize.bind(a),a.onTruncate=a.onTruncate.bind(a),a.calcTargetWidth=a.calcTargetWidth.bind(a),a.measureWidth=a.measureWidth.bind(a),a.getLines=a.getLines.bind(a),a.renderLine=a.renderLine.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,y["Component"]),D(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,r=this.onResize,n=document.createElement("canvas");this.canvasContext=n.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",r)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,r=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(r)}},{key:"innerText",value:function(e){var t=document.createElement("div"),r="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var n=t[r],i=document.createElement("div");return i.innerHTML="foo<br/>bar","foo\nbar"!==i[r].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),n=t[r]),n}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"===typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,r=this.calcTargetWidth,n=this.canvasContext,i=this.props.width;if(t){var a=i||Math.floor(t.parentNode.getBoundingClientRect().width);if(!a)return window.requestAnimationFrame(function(){return r(e)});var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");n.font=l,this.setState({targetWidth:a},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,r=t.lines,n=t.ellipsis,i=t.trimWhitespace,a=this.state.targetWidth,o=this.innerText,l=this.measureWidth,d=this.onTruncate,u=this.trimRight,c=[],s=o(e.text).split("\n").map(function(e){return e.split(" ")}),f=!0,m=this.ellipsisWidth(this.elements.ellipsis),p=1;p<=r;p++){var v=s[0];if(0!==v.length){var h=v.join(" ");if(l(h)<=a&&1===s.length){f=!1,c.push(h);break}if(p===r){for(var y=v.join(" "),O=0,b=y.length-1;O<=b;){var C=Math.floor((O+b)/2);l(y.slice(0,C+1))+m<=a?O=C+1:b=C-1}var _=y.slice(0,O);if(i)for(_=u(_);!_.length&&c.length;){_=u(c.pop())}h=g.a.createElement("span",null,_,n)}else{for(var S=0,k=v.length-1;S<=k;){var E=Math.floor((S+k)/2);l(v.slice(0,E+1).join(" "))<=a?S=E+1:k=E-1}if(0===S){p=r-1;continue}h=v.slice(0,S).join(" "),s[0].splice(0,S)}c.push(h)}else c.push(),s.shift(),p--}return d(f),c}},{key:"renderLine",value:function(e,t,r){if(t===r.length-1)return g.a.createElement("span",{key:t},e);var n=g.a.createElement("br",{key:t+"br"});return e?[g.a.createElement("span",{key:t},e),n]:n}},{key:"render",value:function(){var e=this,t=this.elements.target,r=this.props,n=r.children,i=r.ellipsis,a=r.lines,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(r,["children","ellipsis","lines"]),l=this.state.targetWidth,d=this.getLines,u=this.renderLine,c=this.onTruncate,s=void 0;return"undefined"!==typeof window&&!(!t||!l)&&(a>0?s=d().map(u):(s=n,c(!1))),delete o.onTruncate,delete o.trimWhitespace,g.a.createElement("span",x({},o,{ref:function(t){e.elements.target=t}}),g.a.createElement("span",null,s),g.a.createElement("span",{ref:function(t){e.elements.text=t}},n),g.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}();T.propTypes={children:S.a.node,ellipsis:S.a.node,lines:S.a.oneOfType([S.a.oneOf([!1]),S.a.number]),trimWhitespace:S.a.bool,width:S.a.number,onTruncate:S.a.func},T.defaultProps={children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0};var F=T,R=r(281);function B(){var e=l(["\n  font-size: 0.8rem;\n  margin-top: 0.2rem;\n"]);return B=function(){return e},e}function $(){var e=l(["\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2rem;\n  width: 2.6rem;\n  height: 2.6rem;\n  margin: 0 auto;\n  padding: 0;\n\n  span:before,\n  span::after {\n    margin: 0;\n    padding: 0;\n    font-size: 1.7rem;\n  }\n"]);return $=function(){return e},e}function A(){var e=l(["\n  text-align: center;\n  display: inline-block;\n  max-width: 5rem;\n  cursor: pointer;\n  margin: 0.2rem;\n"]);return A=function(){return e},e}function G(){var e=l(["\n  padding: 0.7rem 0.5rem 0 0.2rem;\n  display: flex;\n  top: 0;\n  z-index: 1;\n  user-select: none;\n  flex-wrap: wrap;\n"]);return G=function(){return e},e}r.d(t,"WareList",function(){return W}),r.d(t,"WareCategoryNavigator",function(){return U}),r.d(t,"OrderControl",function(){return le}),r.d(t,"OrderCartLoader",function(){return de}),r.d(t,"SidedishPicker",function(){return ue});var W=function(e){function t(){var e;return d(this,t),(e=m(this,p(t).apply(this,arguments))).state={list:[]},e.renderRow=function(t){var r=t.index,n=t.style,i=e.props,a=i.formatCategory,o=i.formatRecipe,l=i.onRecipeClick,d=e.state.list[r],u=d.recipe,c=d.category;return u?g.a.createElement("div",{key:"recipe-".concat(u.id,"-").concat(c.id),style:n,onClick:function(){return l(u)}},o(u)):g.a.createElement("div",{key:"category-".concat(c.id),style:n},a(c))},e}return h(t,g.a.Component),c(t,[{key:"render",value:function(){return this.props.children({listItems:this.state.list,rowRenderer:this.renderRow})}}],[{key:"getDerivedStateFromProps",value:function(e){var t=Boolean(e.formatCategory);return{list:e.recipeCategories.reduce(function(e,r){return 0===r.recipes.length?e:(t&&e.push({category:r}),e.concat(r.recipes.map(function(e){return{category:r,recipe:e}})))},[])}}}]),t}();W.defaultProps={formatRecipe:function(e){return e.nameLabel},formatCategory:function(e){return e.nameLabel}};var V=L("div")(G()),q=L("div")(A()),Q=L("div")($()),z=L("div")(B()),U=function(e){function t(){var e;return d(this,t),(e=m(this,p(t).apply(this,arguments))).renderCategory=function(t){var r=e.props.onClick;return g.a.createElement(q,{key:t.id,onClick:function(){return r(t.id)}},g.a.createElement(Q,null,g.a.createElement("span",{className:"flaticon-".concat(t.pictogram)})),g.a.createElement(z,null,g.a.createElement(F,{lines:2},t.nameLabel)))},e}return h(t,g.a.Component),c(t,[{key:"render",value:function(){return g.a.createElement(V,null,this.props.categories.map(this.renderCategory))}}]),t}();function H(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})}U.defaultProps={onClick:b.a.noop};var K={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GPrice"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PriceConverted"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"value"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"formattedValue"},arguments:[],directives:[],selectionSet:void 0}]}}],loc:{start:0,end:72,source:{body:"\n  fragment GPrice on PriceConverted {\n    value\n    formattedValue\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Y={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GCartItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OrderRecipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipe"},directives:[]}]}}]}}].concat({kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GRecipe"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Recipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"code"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0}]}}],loc:{start:0,end:66,source:{body:"\n  fragment GRecipe on Recipe {\n    id\n    code\n    nameLabel\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}}.definitions),loc:{start:0,end:123,source:{body:"\n  fragment GCartItem on OrderRecipe {\n    id\n    price {\n      ...GPrice\n    }\n    recipe {\n      ...GRecipe\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Z={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GOrder"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Order"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"countWares"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GCartItem"},directives:[]},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"sidedishCount"},name:{kind:"Name",value:"sideDishesWareCategoriesCount"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:{kind:"Name",value:"priceWithSidedishes"},name:{kind:"Name",value:"priceWithSideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"sidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GCartItem"},directives:[]}]}}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"coverPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"transportFee"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"discounts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"code"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"description"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"totalDiscount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"totalSum"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}}].concat(Y.definitions,K.definitions),loc:{start:0,end:560,source:{body:"\n  fragment GOrder on Order {\n    id\n    countWares\n    items {\n      ...GCartItem\n      recipe {\n        sidedishCount: sideDishesWareCategoriesCount\n      }\n      priceWithSidedishes: priceWithSideDishes {\n        ...GPrice\n      }\n      sidedishes: sideDishes {\n        ...GCartItem\n      }\n    }\n    coverPrice {\n      ...GPrice\n    }\n    transportFee {\n      ...GPrice\n    }\n    discounts {\n      code\n      description\n      price {\n        ...GPrice\n      }\n    }\n    totalDiscount {\n      ...GPrice\n    }\n    totalSum {\n      ...GPrice\n    }\n  }\n  \n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},J={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MAddToOrder"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"recipeId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"createOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderRecipe"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"order"},value:{kind:"Variable",name:{kind:"Name",value:"orderId"}}},{kind:"ObjectField",name:{kind:"Name",value:"recipe"},value:{kind:"Variable",name:{kind:"Name",value:"recipeId"}}},{kind:"ObjectField",name:{kind:"Name",value:"sideDishes"},value:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(Z.definitions),loc:{start:0,end:248,source:{body:"\n  mutation MAddToOrder($orderId: ID!, $recipeId: ID!, $sidedishes: [ID!]) {\n    createOrderRecipe(\n      orderRecipe: {\n        order: $orderId\n        recipe: $recipeId\n        sideDishes: $sidedishes\n      }\n    ) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},X={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MChangeOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"updateOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}},{kind:"Argument",name:{kind:"Name",value:"orderRecipe"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"sideDishes"},value:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(Z.definitions),loc:{start:0,end:173,source:{body:"\n  mutation MChangeOrderItem($itemId: ID!, $sidedishes: [ID!]) {\n    updateOrderRecipe(id: $itemId, orderRecipe: { sideDishes: $sidedishes }) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ee={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MRemoveOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"destroyOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(Z.definitions),loc:{start:0,end:112,source:{body:"\n  mutation MRemoveOrderItem($itemId: ID!) {\n    destroyOrderRecipe(id: $itemId) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},te={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GOrderCart"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"order"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"orderId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(Z.definitions),loc:{start:0,end:92,source:{body:"\n  query GOrderCart($orderId: ID!) {\n    order(id: $orderId) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},re={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GRecipeSidedishes"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Recipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:{kind:"Name",value:"sidedishCategories"},name:{kind:"Name",value:"sideDishesWareCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"minCount"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"maxCount"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:{kind:"Name",value:"sidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}}]}}]}}].concat(K.definitions),loc:{start:0,end:296,source:{body:"\n  fragment GRecipeSidedishes on Recipe {\n    id\n    nameLabel\n    sidedishCategories: sideDishesWareCategories {\n      id\n      nameLabel\n      minCount\n      maxCount\n      sidedishes: sideDishes {\n        id\n        nameLabel\n        price {\n          ...GPrice\n        }\n      }\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ne={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GSidedishesForRecipe"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"recipeId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"recipeId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipeSidedishes"},directives:[]}]}}]}}].concat(re.definitions),loc:{start:0,end:116,source:{body:"\n  query GSidedishesForRecipe($recipeId: ID!) {\n    recipe(id: $recipeId) {\n      ...GRecipeSidedishes\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ie={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GSidedishesForOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"orderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipeSidedishes"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"selectedSidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}]}}].concat(re.definitions),loc:{start:0,end:258,source:{body:"\n  query GSidedishesForOrderItem($itemId: ID!) {\n    item: orderRecipe(id: $itemId) {\n      id\n      recipe {\n        ...GRecipeSidedishes\n      }\n      selectedSidedishes: sideDishes {\n        id\n        recipe {\n          id\n        }\n      }\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ae=function(){return{recipe:void 0,selection:[],resolve:b.a.noop}},oe=function(e){function t(){var e;return d(this,t),(e=m(this,p(t).apply(this,arguments))).state=ae(),e.isSidedishSelected=function(t){return e.state.selection.includes(t)},e.onSidedishToggle=function(t){var r=e.state.selection;r=r.includes(t)?r.filter(function(e){return e!==t}):r.concat(t),e.setState({selection:r})},e.onConfirm=function(){e.state.resolve({sidedishes:o(e.state.selection),isConfirmed:!0}),e.setState(ae)},e.onCancel=function(){e.state.resolve({sidedishes:[],isConfirmed:!1}),e.setState(ae)},e}return h(t,g.a.Component),c(t,[{key:"selectForRecipe",value:function(e){var t=this;return new Promise(function(r){return H(t,void 0,void 0,a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.apolloClient.query({query:ne,variables:{recipeId:e}});case 2:n=t.sent,this.setState({recipe:n.data.recipe,resolve:r});case 4:case"end":return t.stop()}},t,this)}))})}},{key:"selectForItem",value:function(e){var t=this;return new Promise(function(r){return H(t,void 0,void 0,a.a.mark(function t(){var n,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.apolloClient.query({query:ie,variables:{itemId:e}});case 2:n=t.sent,i=n.data.item,this.setState({recipe:i.recipe,resolve:r,selection:i.selectedSidedishes.map(function(e){return e.recipe.id})});case 5:case"end":return t.stop()}},t,this)}))})}},{key:"render",value:function(){var e=this.state.recipe;return e?g.a.createElement(this.props.component,{recipe:e,isSidedishSelected:this.isSidedishSelected,onSidedishToggle:this.onSidedishToggle,onConfirm:this.onConfirm,onCancel:this.onCancel}):null}}]),t}(),le=function(e){function t(){var e;return d(this,t),(e=m(this,p(t).apply(this,arguments))).sidedishControl=g.a.createRef(),e.onRecipeClick=function(t){return H(n(n(e)),void 0,void 0,a.a.mark(function e(){var r,n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:if(r=e.sent,!(t.sidedishCount>0)){e.next=12;break}return e.next=6,this.sidedishControl.current.selectForRecipe(t.id);case 6:n=e.sent,i=n.sidedishes,n.isConfirmed&&this.addRecipeToOrder(r,t.id,i),e.next=13;break;case 12:this.addRecipeToOrder(r,t.id);case 13:case"end":return e.stop()}},e,this)}))},e.onItemEdit=function(t){return H(n(n(e)),void 0,void 0,a.a.mark(function e(){var r,n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:return r=e.sent,e.next=5,this.sidedishControl.current.selectForItem(t);case 5:n=e.sent,i=n.sidedishes,n.isConfirmed&&this.updateOrderItemSidedishes(r,t,i);case 9:case"end":return e.stop()}},e,this)}))},e.onItemRemove=function(t){return H(n(n(e)),void 0,void 0,a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:r=e.sent,this.removeOrderItem(r,t);case 4:case"end":return e.stop()}},e,this)}))},e}return h(t,g.a.Component),c(t,[{key:"addRecipeToOrder",value:function(e,t,r){return H(this,void 0,void 0,a.a.mark(function n(){var i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i={orderId:e,recipeId:t,sidedishes:r},n.next=3,this.props.apolloClient.mutate({mutation:J,variables:i,refetchQueries:[{query:te,variables:{orderId:e}}]});case 3:case"end":return n.stop()}},n,this)}))}},{key:"updateOrderItemSidedishes",value:function(e,t,r){return H(this,void 0,void 0,a.a.mark(function n(){var i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i={itemId:t,sidedishes:r},n.next=3,this.props.apolloClient.mutate({mutation:X,variables:i,refetchQueries:[{query:te,variables:{orderId:e}}]});case 3:case"end":return n.stop()}},n,this)}))}},{key:"removeOrderItem",value:function(e,t){return H(this,void 0,void 0,a.a.mark(function r(){var n;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n={itemId:t},r.next=3,this.props.apolloClient.mutate({mutation:ee,variables:n,refetchQueries:[{query:te,variables:{orderId:e}}]});case 3:case"end":return r.stop()}},r,this)}))}},{key:"render",value:function(){var e=this.onRecipeClick,t=this.onItemEdit,r=this.onItemRemove,n=this.props,i=n.children,a=n.apolloClient,o=n.sidedishPickerComponent;return g.a.createElement(g.a.Fragment,null,i({onRecipeClick:e,onItemEdit:t,onItemRemove:r}),g.a.createElement(oe,{ref:this.sidedishControl,component:o,apolloClient:a}))}}]),t}(),de=function(e){var t=e.orderId,r=e.renderLoading,n=e.renderError,i=e.renderEmpty,a=e.render;return t?g.a.createElement(R.Query,{query:te,variables:{orderId:t},fetchPolicy:"cache-and-network"},function(e){var t=e.data,o=e.error;if(e.loading)return r?r():null;if(o)return console.error(o),n?n(o):null;var l=t.order;return 0===l.countWares?i():a(l)}):i()},ue=function(e){var t=e.recipe,r=e.formatCategory,n=e.formatSidedish;return g.a.createElement("div",null,t.sidedishCategories.map(function(e){return g.a.createElement("div",{key:e.id},r(e),e.sidedishes.map(function(t){return g.a.createElement("span",{key:"".concat(t.id,"-").concat(e.id)},n(t))}))}))}},7875:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCreateControl=void 0;var n,i=r(7857),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(93),l=r(8044);t.OrderCreateControl=(({children:e})=>{const{createOrder:t}=(0,o.useRoot)();return a.default.createElement(i.OrderControl,{apolloClient:t.client,getOrderId:t.ensureOrder,sidedishPickerComponent:l.OrderSidedishModal},e)})},7876:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCartLine=void 0;var n=l(r(0)),i=l(r(45)),a=r(7731),o=r(46);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"Container"})`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`,u=i.default.div.withConfig({displayName:"RecipeCode"})`
  flex: 0 0 5rem;
  text-align: right;
`,c=i.default.div.withConfig({displayName:"RecipeName"})`
  flex: 1 0;
  padding-left: 1rem;
`,s=i.default.div.withConfig({displayName:"PriceToRight"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${o.Colors.greyMiddle};
`;t.OrderCartLine=(({code:e,label:t,price:r,hideCode:i=!1})=>n.default.createElement(d,null,i?null:n.default.createElement(u,null,e),n.default.createElement(c,null,t),n.default.createElement(s,null,n.default.createElement(a.Price,{price:r}))))},7877:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveOrderPromoMutation=t.AddOrderPromoMutation=t.OrderFormPromoQuery=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n};const a=i.default`
  query GOrderPromo($branchId: ID!) {
    promoCodes(promoCode: { companyBranch: $branchId, enabled: true }) {
      id
      code
    }
  }
`;t.OrderFormPromoQuery=a;const o=i.default`
  mutation MAddOrderPromo($orderId: ID!, $code: String!) {
    addOrderPromoCode(order: $orderId, promoCode: $code) {
      userErrors: errors
    }
  }
`;t.AddOrderPromoMutation=o;const l=i.default`
  mutation MRemoveOrderPromo($orderId: ID!, $codeId: ID!) {
    removeOrderPromoCode(order: $orderId, promoCode: $codeId) {
      id
    }
  }
`;t.RemoveOrderPromoMutation=l},7883:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMap=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7809),o=r(93),l=r(148),d=r(8233),u=r(7745);const c=[l.OrderStateCategoryEnum.NewOrders,l.OrderStateCategoryEnum.Preparing,l.OrderStateCategoryEnum.OnWay];t.OrderMap=(({isLoading:e,noFilter:t,orders:r})=>{const{order:n}=(0,o.useRoot)();let l;return l=!e&&r?r.filter(e=>c.includes((0,u.getOrderState)(e))).map(e=>i.default.createElement(d.OrderMapMarker,{key:e.id,order:e,onClick:()=>n.list.focusOrderDetail(e.id)})):null,i.default.createElement(a.BaseMap,{model:n.map},l)})},8030:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateOrderRoutes=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(24),o=r(275),l=r(276),d=r(8031);t.CreateOrderRoutes=(({match:e})=>i.default.createElement(a.Switch,null,i.default.createElement(l.SecureRoute,{exact:!0,path:e.path,component:d.CreateOrderPage}),i.default.createElement(a.Route,{component:o.NotFoundPage})))},8031:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateOrderPage=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(5781),o=r(7709),l=r(71),d=r(5786),u=r(7717),c=r(8032),s=r(8033),f=r(8038),m=r(8039),p=r(8040),v=r(8048),h=r(8067);t.CreateOrderPage=(({match:e,location:{state:t}})=>i.default.createElement(s.OrderFormSetup,{callingPhone:e.params.phone,callingEventId:t?t.eventId:null},i.default.createElement(c.OrderCancelPrompt,null),i.default.createElement(d.PageLayout,{layouts:[{i:"bcancelorder",x:6,y:0,w:2,h:1},{i:"bacceptorder",x:10,y:0,w:3,h:1}],pageTitle:l.i18n._("New order"),useBackButton:!0},i.default.createElement("div",{key:"bcancelorder"},i.default.createElement(m.OrderCancelButton,null)),i.default.createElement("div",{key:"bacceptorder"},i.default.createElement(f.OrderAcceptButton,null))),i.default.createElement(u.PageLayoutFullHeightItem,{widthInColumns:5,withScrollArea:!0},i.default.createElement(a.Card,null,i.default.createElement(o.IconLine,{icon:"shopping_cart"},i.default.createElement(p.OrderCart,null))),i.default.createElement(a.Card,null,i.default.createElement(v.OrderForm,null))),i.default.createElement(u.PageLayoutFullHeightItem,{column:5,widthInColumns:11,withScrollArea:!1},i.default.createElement(h.OrderMenu,null))))},8032:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCancelPrompt=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=r(24),a=r(93),o=r(71);t.OrderCancelPrompt=(()=>{const e=(0,a.useRoot)();return(0,n.useEffect)(()=>()=>e.createOrder.cancelOrder(),[]),n.default.createElement(i.Prompt,{message:o.i18n._("Do you really want to cancel order?"),when:e.createOrder.hasOrder})})},8033:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormSetup=void 0;var n=r(11),i=r(94),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=r(7708),l=r(93),d=r(71),u=r(7750),c=r(8034),s=r(8036);t.OrderFormSetup=(({callingPhone:e,callingEventId:t,children:r})=>{const{createOrder:f}=(0,l.useRoot)();(0,a.useEffect)(()=>{e&&f.userIsCalling(e,t)},[e,t]),(0,s.useUpdateOrder)();const m=(0,a.useRef)(null),p=n.observable.box(),{onSubmit:v,onSubmitFailure:h}=(0,c.useAcceptOrder)(()=>new Promise(e=>{const t=p.observe(r=>{e(r.newValue),t()});m.current&&m.current.openDialog()}));return(0,i.useObserver)(()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(u.DeliveryTimeDialog,{title:d.i18n._("Change time of delivery to customer (in minutes)"),cancelText:d.i18n._("Use default branch delivery time"),onConfirm:e=>p.set(e),onCancel:()=>p.set(null),refApi:m}),a.default.createElement(o.Form,{values:f.formValues,onSubmit:v,onSubmitFailure:h,onChange:e=>f.updateFormValues(e.values,e.touched)},r)))})},8034:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAcceptOrder=function(e){const{createOrder:t}=(0,i.useRoot)(),{enqueueSuccess:r,enqueueError:n}=(0,l.useSnackBar)(),{history:s}=(0,o.default)(),f=(0,a.useGuardedMutation)(u.AcceptOrderMutation,{getUserErrors:e=>e.finishOrder.userErrors,refetchQueries:["GOrderCart"]}),m=(0,a.useGuardedMutation)(u.SetOrderDeliveryTimeMutation);return{onSubmit:()=>c(this,void 0,void 0,function*(){const n=yield f(t.acceptOrderVariables);if(n&&0===n.finishOrder.userErrors.length&&n.finishOrder.order.id===t.orderId){const n=yield e();null!==n&&m({orderId:t.orderId,time:n}),t.resetModel(),s.replace("/order"),r(d.i18n._("Order has been accepted"))}}),onSubmitFailure:e=>{const t=Object.values(e);t.forEach(n)}}};var n,i=r(93),a=r(7741),o=(n=r(7729))&&n.__esModule?n:{default:n},l=r(7727),d=r(71),u=r(8035);var c=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})}},8035:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SetOrderDeliveryTimeMutation=t.AcceptOrderMutation=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n};const a=i.default`
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
`;t.AcceptOrderMutation=a;const o=i.default`
  mutation MSetOrderDeliveryTime($orderId: ID!, $time: Int!) {
    orderNotifyCustomer(id: $orderId, minutes: $time) {
      id
      deliverAt
    }
  }
`;t.SetOrderDeliveryTimeMutation=o},8036:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useUpdateOrder=function(){const{createOrder:e}=(0,a.useRoot)(),t=(0,o.useGuardedMutation)(l.UpdateOrderMutation);(0,i.useObservableEffect)(()=>(0,n.autorun)(()=>{e.orderId&&t({orderId:e.orderId,deliveryType:e.deliveryType,gps:e.gps})}))};var n=r(11),i=r(94),a=r(93),o=r(7741),l=r(8037)},8037:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateOrderMutation=void 0;const i=((n=r(21))&&n.__esModule?n:{default:n}).default`
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
`;t.UpdateOrderMutation=i},8038:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderAcceptButton=void 0;var n,i=r(94),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7708),l=r(93),d=r(71),u=r(5777),c=r(46);const s=(0,o.withFormApi)(({formApi:e})=>{const{createOrder:t}=(0,l.useRoot)();return(0,i.useObserver)(()=>a.default.createElement(u.TouchButton,{color:c.Colors.green,text:d.i18n._("Accept order"),disabled:!t.hasOrder||e.submitting,onClick:e.submitForm}))});t.OrderAcceptButton=s},8039:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCancelButton=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(24),o=r(71),l=r(5777),d=r(46);t.OrderCancelButton=(e=>i.default.createElement(a.Route,null,({history:e})=>i.default.createElement(l.TouchButton,{color:d.Colors.red,text:o.i18n._("Cancel order"),onClick:()=>{e.goBack()}})))},8040:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCart=void 0;var n,i=r(122),a=r(7857),o=r(94),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),d=(n=r(45))&&n.__esModule?n:{default:n},u=r(5790),c=r(93),s=r(7722),f=r(7875),m=r(8046),p=r(8047);const v=d.default.div.withConfig({displayName:"CartStyled"})`
  margin: 0.1rem 0.1rem 0.1rem -2rem;
  position: relative;
`,h=d.default.div.withConfig({displayName:"EmptyCartStyled"})`
  margin: 0.5rem 0 0 0.5rem;
`;t.OrderCart=(e=>{const{createOrder:t}=(0,c.useRoot)(),r=(0,l.useRef)(void 0);return l.default.createElement(f.OrderCreateControl,null,({onItemRemove:e,onItemEdit:n})=>l.default.createElement(o.Observer,null,()=>l.default.createElement(a.OrderCartLoader,{key:t.cartRefreshKey,orderId:t.orderId,renderEmpty:()=>l.default.createElement(h,null,l.default.createElement(i.Trans,{id:"Cart is empty"})),renderLoading:()=>r.current||l.default.createElement(u.Loading,null),render:t=>{const i=l.default.createElement(v,null,l.default.createElement(p.OrderCartTotals,{order:t}),l.default.createElement(s.VerticalGap,null),t.items.map(t=>l.default.createElement(m.OrderCartItem,{key:t.id,item:t,onEdit:()=>n(t.id),onRemove:()=>e(t.id)})));return r.current=i,i}})))})},8041:function(e,t,r){e.exports=r(8042)},8042:function(e,t,r){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(8043),i)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(o){n.regeneratorRuntime=void 0}},8043:function(e,t){!function(t){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",d=a.toStringTag||"@@toStringTag",u="object"===typeof e,c=t.regeneratorRuntime;if(c)u&&(e.exports=c);else{(c=t.regeneratorRuntime=u?e.exports:{}).wrap=b;var s="suspendedStart",f="suspendedYield",m="executing",p="completed",v={},h={};h[o]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==n&&i.call(g,o)&&(h=g);var O=k.prototype=_.prototype=Object.create(h);S.prototype=O.constructor=k,k.constructor=S,k[d]=S.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===S||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,d in e||(e[d]="GeneratorFunction")),e.prototype=Object.create(O),e},c.awrap=function(e){return{__await:e}},E(w.prototype),w.prototype[l]=function(){return this},c.AsyncIterator=w,c.async=function(e,t,r,n){var i=new w(b(e,t,r,n));return c.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(O),O[d]="Generator",O[o]=function(){return this},O.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=j,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return l.type="throw",l.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var d=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(d&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(d){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;N(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(e,t,r,n){var i=t&&t.prototype instanceof _?t:_,a=Object.create(i.prototype),o=new I(n||[]);return a._invoke=function(e,t,r){var n=s;return function(i,a){if(n===m)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return L()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var l=M(o,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var d=C(e,t,r);if("normal"===d.type){if(n=r.done?p:f,d.arg===v)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(n=p,r.method="throw",r.arg=d.arg)}}}(e,r,o),a}function C(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function S(){}function k(){}function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function w(e){var t;this._invoke=function(r,n){function a(){return new Promise(function(t,a){!function t(r,n,a,o){var l=C(e[r],e,n);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,a,o)},function(e){t("throw",e,a,o)}):Promise.resolve(u).then(function(e){d.value=e,a(d)},function(e){return t("throw",e,a,o)})}o(l.arg)}(r,n,t,a)})}return t=t?t.then(a,a):a()}}function M(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,M(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=C(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},8044:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderSidedishModal=void 0;var n=r(122),i=r(123),a=r(7857),o=f(r(0)),l=f(r(45)),d=r(71),u=r(5777),c=r(46),s=r(8045);function f(e){return e&&e.__esModule?e:{default:e}}const m=l.default.div.withConfig({displayName:"SidedishCategory"})`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0 0 0.2rem 0.2rem;
  color: ${c.Colors.black};
`;t.OrderSidedishModal=(e=>o.default.createElement(i.Dialog,{open:!0,onClose:e.onCancel,scroll:"paper",maxWidth:"lg"},o.default.createElement(i.DialogTitle,null,e.recipe?o.default.createElement(n.Trans,{id:"Add something else to {0}?",values:{0:e.recipe.nameLabel}}):o.default.createElement(n.Trans,{id:"Loading sidedishes..."})),e.recipe&&o.default.createElement(i.DialogContent,null,o.default.createElement(a.SidedishPicker,{recipe:e.recipe,formatCategory:e=>o.default.createElement(m,null,e.nameLabel),formatSidedish:t=>o.default.createElement(s.OrderMenuSidedishButton,{label:t.nameLabel,isSelected:e.isSidedishSelected(t.id),onClick:()=>e.onSidedishToggle(t.id)})})),e.recipe&&o.default.createElement(i.DialogActions,null,o.default.createElement(u.TouchButton,{text:d.i18n._("Cancel"),onClick:e.onCancel}),o.default.createElement(u.TouchButton,{text:d.i18n._("Confirm"),onClick:e.onConfirm,color:c.Colors.green}))))},8045:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuSidedishButton=void 0;var n=l(r(0)),i=l(r(45)),a=r(5777),o=r(46);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"SidedishButtonContainer"})`
  margin: 0 1rem 1rem 0;
  width: 8rem;
  display: inline-block;
`;t.OrderMenuSidedishButton=(({label:e,isSelected:t,onClick:r})=>n.default.createElement(d,null,n.default.createElement(a.TouchButton,{text:e,onClick:r,color:t?o.Colors.orange:o.Colors.greyDark})))},8046:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCartItem=void 0;var n=u(r(0)),i=u(r(45)),a=r(5777),o=r(7742),l=r(46),d=r(7876);function u(e){return e&&e.__esModule?e:{default:e}}const c=i.default.div.withConfig({displayName:"OrderCartItemStyled"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-top: 1px solid ${l.Colors.greyMiddle};
  padding: 0.1rem 0;
`,s=i.default.div.withConfig({displayName:"TouchButtonColumn"})`
  flex: 0 0 auto;
  padding-right: 0.5rem;
`,f=i.default.div.withConfig({displayName:"LineColumn"})`
  flex: 1 1 0;
`;t.OrderCartItem=(({item:e,onRemove:t,onEdit:r})=>n.default.createElement(c,null,n.default.createElement(s,null,n.default.createElement(o.TouchButtonDelete,{onDelete:t})),n.default.createElement(s,null,n.default.createElement(a.TouchButton,{onClick:r,iconName:"mode_edit",width:l.Spacing.ButtonHeight,height:l.Spacing.ButtonHeight})),n.default.createElement(f,null,n.default.createElement(d.OrderCartLine,{key:e.id,code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),e.sidedishes.map(e=>n.default.createElement(d.OrderCartLine,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value})))))},8047:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCartTotals=void 0;var n=l(r(0)),i=l(r(45)),a=r(71),o=r(7876);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  text-align: right;
`;t.OrderCartTotals=(({order:e})=>n.default.createElement(d,null,n.default.createElement("b",null,n.default.createElement(o.OrderCartLine,{label:a.i18n._("Total price"),price:e.totalSum.value,hideCode:!0})),n.default.createElement(o.OrderCartLine,{label:a.i18n._("Transport fee"),price:e.transportFee.value,hideCode:!0}),n.default.createElement(o.OrderCartLine,{label:a.i18n._("Covers price"),price:e.coverPrice.value,hideCode:!0}),n.default.createElement(o.OrderCartLine,{label:a.i18n._("Discount total"),price:-1*e.totalDiscount.value,hideCode:!0})))},8048:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderForm=void 0;var n=r(94),i=g(r(0)),a=g(r(45)),o=r(7710),l=r(8049),d=r(7723),u=r(7709),c=r(93),s=r(71),f=r(8050),m=r(8051),p=r(8059),v=r(8061),h=r(8064),y=r(8065);function g(e){return e&&e.__esModule?e:{default:e}}const O=a.default.div.withConfig({displayName:"LookupResultIcon"})`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.7rem;
`;t.OrderForm=(()=>{const{createOrder:e}=(0,c.useRoot)();return i.default.createElement(i.default.Fragment,null,i.default.createElement(u.IconLine,{icon:"phone"},i.default.createElement(n.Observer,null,()=>i.default.createElement(o.FormInputTextBox,{field:"phone",isRequired:e.isDelivery,inputWidth:9,validatioName:s.i18n._("Phone"),validationMessage:s.i18n._("Phone number is required"),placeholder:s.i18n._("Phone").toLocaleLowerCase()})),i.default.createElement(O,null,i.default.createElement(p.OrderFormCustomerLookup,null))),i.default.createElement(n.Observer,null,()=>i.default.createElement(u.IconLine,{icon:"streetview"},i.default.createElement(h.OrderFormDeliveryType,{field:"deliveryType"}),i.default.createElement(v.OrderFormDeliveryAddress,{isVisible:e.isDelivery}))),i.default.createElement(u.IconLine,{icon:"store"},i.default.createElement(m.OrderFormBranch,null)),i.default.createElement(d.HorizontalSeparator,null),i.default.createElement(u.IconLine,{icon:"person"},i.default.createElement(o.FormInputTextBox,{field:"firstName",inputWidth:6,placeholder:s.i18n._("First name").toLocaleLowerCase()}),i.default.createElement(o.FormInputTextBox,{field:"lastName",inputWidth:12.7,placeholder:s.i18n._("Last name").toLocaleLowerCase()})),i.default.createElement(u.IconLine,{icon:"mail_outline"},i.default.createElement(o.FormInputTextBox,{field:"email",inputWidth:20,placeholder:s.i18n._("E-mail").toLocaleLowerCase()})),i.default.createElement(u.IconLine,{icon:"note"},i.default.createElement(l.FormInputTextBoxMultiline,{field:"note",inputWidthIsStretch:!0,placeholder:s.i18n._("Note").toLocaleLowerCase()})),i.default.createElement(u.IconLine,{icon:"card_giftcard"},i.default.createElement(y.OrderFormPromo,null)),i.default.createElement(f.OrderFormAutofill,null))})},8049:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputTextBoxMultiline=void 0;var n=d(r(0)),i=r(7708),a=d(r(45)),o=r(46),l=r(7710);function d(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const s=(0,a.default)(i.TextArea).withConfig({displayName:"FormInputTextBoxMultilineStyled"})`
  padding: 0.5rem;
  border-radius: ${o.Radiuses.TextComponent};
  resize: none;
  overflow: auto;
  box-sizing: border-box;
  margin: ${o.Spacing.MarginAroundFormComponents};
  ${({inputWidthIsStretch:e,inputWidth:t,inputWidthUnit:r})=>!0===e?"width: 100%; display: block;":`width: ${t}${r}`};
`;t.FormInputTextBoxMultiline=(e=>{var{field:t,defaultValue:r,inputWidth:i=o.Spacing.DefaultInputWidth,inputWidthUnit:a=o.Spacing.DefaultSizeUnit,inputWidthIsStretch:d=!1,children:f}=e,m=c(e,["field","defaultValue","inputWidth","inputWidthUnit","inputWidthIsStretch","children"]);return t?n.default.createElement(s,u({field:t,defaultValue:r,inputWidthIsStretch:d,inputWidth:i,inputWidthUnit:a},m)):n.default.createElement(l.FormInputStyled,m)})},8050:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormAutofill=void 0;var n;(n=r(0))&&n.__esModule,r(95),r(5777);t.OrderFormAutofill=(e=>null)},8051:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormBranch=void 0;var n,i=r(94),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(93),l=r(5791),d=r(71),u=r(7736);t.OrderFormBranch=(()=>{const{user:e,createOrder:t}=(0,o.useRoot)();return(0,l.useEffectOnce)(()=>{t.branchId||t.selectBranch(e.defaultBranch.id)}),(0,i.useObserver)(()=>a.default.createElement(u.CompanyBranchPicker,{isClearable:!1,selectedBranches:[t.currentBranch.id],onSelectionChange:([e])=>{t.orderId&&!window.confirm(d.i18n._("Changing branch will cancel current order and remove all items from the cart. Proceed?"))||(t.selectBranch(e),t.resetOrder())}}))})},8059:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormCustomerLookup=void 0;var n=r(123),i=r(273),a=(m(r(5828)),r(11)),o=r(94),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),d=m(r(45)),u=r(93),c=r(7744),s=r(46),f=r(8060);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})};const v=(0,d.default)(i.WarningOutlined).withConfig({displayName:"ErrorIcon"})`
  font-size: 1rem;
  color: ${s.Colors.orange};
`,h=(0,d.default)(i.Close).withConfig({displayName:"NotFoundIcon"})`
  font-size: 1rem;
  color: ${s.Colors.greyMiddle};
`,y=(0,d.default)(i.Check).withConfig({displayName:"FoundIcon"})`
  font-size: 1rem;
  color: ${s.Colors.green};
`;t.OrderFormCustomerLookup=(()=>{const{createOrder:e}=(0,u.useRoot)(),[t,r]=(0,l.useState)(null),{execute:i}=(0,c.useExecutableQuery)(f.OrderVamQuery,{fetchPolicy:"no-cache"});return(0,o.useDisposable)(()=>(0,a.autorun)(()=>{!function(t,a){p(this,void 0,void 0,function*(){if(e.updateFromVam(null),!function(e){return Boolean(e&&e.length>6)}(a))return r(null);r(l.default.createElement(n.CircularProgress,{size:20}));const o=yield i({branchId:t,phone:a});if(o.hasAnyError)return r(l.default.createElement(v,null));if(o.data){const{vamCustomer:t}=o.data;if(t.isFound)return e.updateFromVam(t),r(l.default.createElement(y,null))}r(l.default.createElement(h,null))})}(e.currentBranch.id,e.phone)})),t})},8060:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.OrderVamQuery=void 0;const i=((n=r(21))&&n.__esModule?n:{default:n}).default`
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
        state
        gps {
          latitude
          longitude
        }
      }
    }
  }
`;t.OrderVamQuery=i},8061:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormDeliveryAddress=function(e){const{createOrder:t}=(0,c.useRoot)(),r=(0,o.useComputed)(()=>{if(!t.vamCustomer)return t.fakeAddress?[t.fakeAddress]:[];const{locations:e}=t.vamCustomer;return e}),n=(0,l.useCallback)(e=>{t.useLocation(e)},[]),d=(0,o.useComputed)(()=>t.notDeliveryLocation?l.default.createElement(v,null,l.default.createElement(a.Warning,null),l.default.createElement(i.Trans,{id:"Address is not within any delivery zone"})):t.hasAddress?l.default.createElement(h,null):null);return(0,o.useObserver)(()=>l.default.createElement("div",{hidden:!e.isVisible},l.default.createElement(p,null,l.default.createElement(y,null,l.default.createElement(f.AddressSuggest,{fixedLocations:r,fixedLocationsLabel:s.i18n._("Previous addresses"),selectedLocation:t.deliveryAddress||t.fakeAddress||null,onSelect:n,onClear:t.clearLocation,inputPlaceholder:s.i18n._("Deliver to address").toLocaleLowerCase()}),d))))};var n,i=r(122),a=r(273),o=r(94),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),d=(n=r(45))&&n.__esModule?n:{default:n},u=r(7718),c=r(93),s=r(71),f=r(8062),m=r(46);const p=(0,d.default)(u.FlexRowSingle).withConfig({displayName:"InputLine"})`
  justify-content: flex-start;
`,v=d.default.div.withConfig({displayName:"ZoneWarning"})`
  display: inline-flex;
  align-items: center;
  color: ${m.Colors.violet};
`,h=(0,d.default)(a.Check).withConfig({displayName:"AddressValid"})`
  font-size: 1rem;
  color: ${m.Colors.green};
`,y=d.default.div.withConfig({displayName:"AddressContainer"})`
  flex: 1 1 0;
`},8062:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddressSuggest=void 0;var n,i=r(94),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7716),l=r(5782),d=r(47),u=r(7804),c=r(7744),s=r(71),f=r(8063);var m=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})};const p=e=>e.filter(d.RM.propSatisfies(Boolean,"gps"));t.AddressSuggest=(({onSelect:e,onClear:t,fixedLocations:r,fixedLocationsLabel:n,selectedLocation:v,minSearchLength:h=3,inputPlaceholder:y})=>{const g=(0,i.useObservable)({options:[],isSearching:!1}),{execute:O}=(0,c.useExecutableQuery)(f.AddressSuggestQuery),b=(0,u.useDebounceCallback)(e=>m(void 0,void 0,void 0,function*(){g.isSearching=!0;const t=e.trim();if(t.length<h)return g.options=[],void(g.isSearching=!1);const r=yield O({search:t});r.data&&(g.options=p(r.data.suggest)),g.isSearching=!1}));return(0,i.useObserver)(()=>a.default.createElement(o.SelectControl,{styles:(0,o.composeSelectControlStyles)({control:e=>Object.assign({},e,{min_width:"8rem"})}),getOptionLabel:l.formatAddress,options:(()=>r&&0!==r.length?[{label:n,options:[...p(r)]},{label:s.i18n._("Matching to input"),options:g.options}]:g.options)(),placeholder:y,value:v,filterOption:d.RM.T,isClearable:!0,isLoading:g.isSearching,onInputChange:e=>{b(e)},onChange:r=>{r&&!Array.isArray(r)?e(r):t()}}))})},8063:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddressSuggestQuery=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n},a=r(96);const o=i.default`
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
  ${a.GeoPointFragment}
`;t.AddressSuggestQuery=o},8064:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormDeliveryType=function({field:e}){return a.default.createElement(o.FormInputFlatSelect,{field:e,items:u,formatItem:e=>d.i18n._(e.label),getItemId:e=>e.type})},t.types=void 0;var n,i=r(122),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7765),l=r(148),d=r(71);const u=[{type:l.DeliveryTypeEnum.Messenger,label:(0,i.i18nMark)("Deliver")},{type:l.DeliveryTypeEnum.Pickup,label:(0,i.i18nMark)("Personal pickup")}];t.types=u},8065:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormPromo=void 0;var n,i=r(122),a=r(11),o=r(94),l=(n=r(0))&&n.__esModule?n:{default:n},d=r(93),u=r(7716),c=r(47),s=r(7744),f=r(71),m=r(8066),p=r(7877);t.OrderFormPromo=(()=>{const{createOrder:e}=(0,d.useRoot)(),{result:t,execute:r}=(0,s.useExecutableQuery)(p.OrderFormPromoQuery),n=(0,m.usePromoCodes)();return(0,o.useDisposable)(()=>(0,a.autorun)(()=>{r({branchId:e.currentBranch.id})})),t.hasAnyError?l.default.createElement(i.Trans,{id:"Failed retrieving available promo codes"}):(0,o.useObserver)(()=>l.default.createElement(u.SelectControl,{options:t.data?t.data.promoCodes:[],isLoading:t.loading,isMulti:!0,isClearable:!0,getOptionValue:c.RM.prop("id"),getOptionLabel:c.RM.prop("code"),placeholder:f.i18n._("Promo codes").toLocaleLowerCase(),noOptionsMessage:()=>f.i18n._("No promo codes available"),value:Array.from(n.values()),onChange:e=>{Array.isArray(e)?n.replace(e.map(e=>[e.id,e])):n.clear()}}))})},8066:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePromoCodes=function(){const{createOrder:e}=(0,o.useRoot)(),t=(0,a.useRef)(n.observable.map()).current,r=(0,l.useGuardedMutation)(d.AddOrderPromoMutation,{refetchQueries:["GOrderCart"],getUserErrors:e=>e.addOrderPromoCode.userErrors}),c=(0,a.useCallback)(n=>u(this,void 0,void 0,function*(){const i=yield r({orderId:e.orderId,code:n.code});i&&i.addOrderPromoCode.userErrors.length&&t.delete(n.id)}),[]),s=(0,l.useGuardedMutation)(d.RemoveOrderPromoMutation,{refetchQueries:["GOrderCart"]});return(0,i.useDisposable)(()=>t.observe(t=>{null!==e.orderId&&("add"===t.type&&c(t.newValue),"delete"===t.type&&s({orderId:e.orderId,codeId:t.oldValue.id}))})),(0,i.useDisposable)(()=>(0,n.when)(()=>null!==e.orderId,()=>{t.forEach(c)})),t};var n=r(11),i=r(94),a=r(0),o=r(93),l=r(7741),d=r(7877),u=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})}},8067:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenu=t.OrderMenuView=void 0;var n=r(94),i=y(r(0)),a=r(279),o=y(r(45)),l=r(5781),d=y(r(98)),u=r(93),c=r(47),s=r(7875),f=r(8068),m=r(8069),p=r(8071),v=r(8072),h=r(8089);function y(e){return e&&e.__esModule?e:{default:e}}const g=o.default.div.withConfig({displayName:"AutoHeight"})`
  display: flex;
  flex-direction: column;
  height: 100%;
`,O=(0,o.default)(l.Card).withConfig({displayName:"FilterCard"})`
  flex: 0 0 auto;
`,b=o.default.div.withConfig({displayName:"CategoriesCont"})`
  flex: 0 0 auto;
`,C=({onRecipeClick:e,orderMenu:t})=>{const{observableFilter:r,computedRecipes:a,toggleCategory:o,searchByText:l}=(0,f.useOrderMenuFilter)(t);return(0,n.useObserver)(()=>i.default.createElement(g,null,i.default.createElement(O,null,i.default.createElement(p.OrderMenuFilter,{recipeCount:a.get().length,selectedCategory:t.find(c.RM.propEq("id",r.categoryId))||null,onSearch:l,onConfirm:()=>{const t=a.get();return 1===t.length&&(e(t[0]),!0)}})),i.default.createElement(b,null,i.default.createElement(m.OrderMenuCategories,{categories:t,activeCategory:r.categoryId,onCategoryClick:o})),i.default.createElement(v.OrderMenuRecipes,{recipes:a.get(),onRecipeClick:e})))};t.OrderMenuView=C;const _=(0,n.observer)(()=>{const{createOrder:e}=(0,u.useRoot)(),{data:t,loading:r}=(0,a.useQuery)(h.OrderMenuQuery,{suspend:!1,variables:{branchId:e.currentBranch.id}});return r?i.default.createElement(d.default,null):i.default.createElement(s.OrderCreateControl,null,({onRecipeClick:e})=>i.default.createElement(C,{orderMenu:t&&t.orderMenu?t.orderMenu:[],onRecipeClick:e}))});t.OrderMenu=_},8068:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useOrderMenuFilter=function(e){const t=(0,o.useObservable)({categoryId:null,search:""}),r=(0,l.useMemo)(()=>(0,a.computed)(()=>{let r,n=e;if(null!==t.categoryId&&(n=e.filter(u.RM.propEq("id",t.categoryId))),0===n.length)return[];if(r=i.default.concat([],...n.map(u.RM.prop("recipes"))),t.search.length>0){const e=(0,d.isPartialMatch)(t.search);return r.filter(u.RM.cond([[u.RM.propSatisfies(e,"code"),u.RM.T],[u.RM.propSatisfies(e,"nameLabel"),u.RM.T]]))}return r}),[e]),n=(0,l.useCallback)(e=>{t.categoryId===e?t.categoryId=null:t.categoryId=e},[]),c=(0,l.useCallback)(e=>{t.search=e},[]);return{observableFilter:t,computedRecipes:r,toggleCategory:n,searchByText:c}};var n,i=(n=r(287))&&n.__esModule?n:{default:n},a=r(11),o=r(94),l=r(0),d=r(7755),u=r(47)},8069:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuCategories=void 0;var n=o(r(0)),i=o(r(45)),a=r(8070);function o(e){return e&&e.__esModule?e:{default:e}}const l=i.default.div.withConfig({displayName:"FlexFlow"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;t.OrderMenuCategories=(({categories:e,activeCategory:t,onCategoryClick:r})=>n.default.createElement(l,null,e.map(e=>n.default.createElement(a.OrderMenuCategory,{key:e.id,category:e,isActive:e.id===t,onClick:()=>r(e.id)}))))},8070:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuCategory=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(45)),o=r(5781),l=r(46);const d=(0,a.default)(o.Card).withConfig({displayName:"CategoryCard"})`
  flex: 1;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 0.3rem 0.5rem 0;
  min-width: 4.5rem;
  max-width: 4.5rem;
  &:hover {
    background-color: ${l.Colors.yellow};
  }
  ${({isActive:e})=>e?a.css`
          background-color: ${l.Colors.green};
        `:""};
`,u=a.default.span.withConfig({displayName:"CategoryPictogram"})`
  span:before,
  span::after {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
  }
`,c=a.default.span.withConfig({displayName:"CategoryName"})`
  position: absolute;
  font-size: 0.7rem;
  text-transform: uppercase;
  margin-left: 0.3rem;
  width: 2rem;
`;t.OrderMenuCategory=(({category:e,isActive:t,onClick:r})=>i.default.createElement(d,{isActive:t,onClick:r},i.default.createElement(u,null,i.default.createElement("span",{className:`flaticon-${e.pictogram}`})),i.default.createElement(c,null,function(e){return e.split(/\s+/).map(e=>e.substr(0,3)).filter(e=>e.length>=3).join(" ")}(e.nameLabel))))},8071:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuFilter=void 0;var n,i=r(294),a=r(122),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),l=(n=r(45))&&n.__esModule?n:{default:n},d=r(7710);const u=l.default.span.withConfig({displayName:"FilterResults"})`
  padding-left: 1rem;
`,c=l.default.div.withConfig({displayName:"SelectedCategory"})`
  float: right;
  margin: 0.6rem 2rem;
  font-weight: bold;
`;t.OrderMenuFilter=(({recipeCount:e,selectedCategory:t,onSearch:r,onConfirm:n})=>{const l=(0,o.useRef)(null),s=(0,o.useCallback)(e=>{r(e.target.value)},[]),f=(0,o.useCallback)(e=>{"Enter"===e.key&&!0===n()&&l.current&&(l.current.value="",r(""))},[]);return o.default.createElement(o.default.Fragment,null,o.default.createElement(d.FormInputStyled,{onChange:s,onKeyDown:f,placeholder:`${i.i18n._("Code").toLocaleLowerCase()} / ${i.i18n._("Title").toLocaleLowerCase()}`,autoComplete:"off",ref:l}),o.default.createElement(u,null,o.default.createElement(a.Trans,{id:"{recipeCount, plural, zero {No recipes found} one {One recipe found, Enter to confirm} few {Found # recipes} other {Found # recipes}}",values:{recipeCount:e}})),t?o.default.createElement(c,null,t.nameLabel):null)})},8072:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuRecipes=void 0;var n,i=r(5785),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7940),l=r(8088);const d=i.css`
  flex: 1 1 0;
`;t.OrderMenuRecipes=(({recipes:e,onRecipeClick:t,columnCount:r=5})=>{const n=e.length,i=Math.ceil(n/r);return a.default.createElement("div",{className:d},a.default.createElement(o.AutoSizer,null,({width:d,height:u})=>a.default.createElement(o.Grid,{rowCount:i,columnCount:r,columnWidth:d/r-4,width:d,height:u,rowHeight:100,cellRenderer:({columnIndex:i,rowIndex:o,key:d,style:u})=>{const c=o*r+i;if(c>=n)return null;const s=e[c];return a.default.createElement("div",{style:Object.assign({},u),key:d,onClick:()=>t(s)},a.default.createElement(l.OrderMenuRecipeCard,{recipe:s}))}})))})},8088:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuRecipeCard=void 0;var n=r(123),i=r(273),a=s(r(0)),o=s(r(45)),l=r(5781),d=r(7731),u=r(5795),c=r(46);function s(e){return e&&e.__esModule?e:{default:e}}const f=(0,o.default)(l.Card).withConfig({displayName:"RecipeStyled"})`
  box-sizing: border-box;
  height: 5.8rem;
  cursor: pointer;
  padding: 0.5rem 0 0 0.3rem;
  margin: 0 0.5rem 0.5rem 0;
  &:hover {
    background-color: ${c.Colors.yellow};
  }
`,m=o.default.div.withConfig({displayName:"RecipeName"})`
  padding-top: 0.2rem;
`,p=o.default.span.withConfig({displayName:"RecipeCode"})`
  font-weight: bold;
  border: 1px solid ${c.Colors.greyMiddle};
  border-radius: 0.5rem 0 0 0;
  padding: 0.1rem;
`,v=(0,o.default)(d.Price).withConfig({displayName:"RecipePrice"})`
  position: absolute;
  right: 1.1rem;
  top: 4.5rem;
  font-weight: 500;
  font-size: 1.1rem;
  color: ${c.Colors.greyDarkest};
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
`,h=(0,o.default)(i.Attachment).withConfig({displayName:"RecipeHasSidedish"})`
  position: absolute;
  right: 1rem;
  top: 0.2rem;
`;t.OrderMenuRecipeCard=(({recipe:e})=>a.default.createElement(n.Tooltip,{title:e.descriptionLabel,enterDelay:u.SECOND},a.default.createElement(f,null,a.default.createElement(p,null,e.code),a.default.createElement(m,null,e.nameLabel),a.default.createElement(v,{price:e.price.value,currencyCode:e.price.currency.code}),e.sidedishCount>0?a.default.createElement(h,null):null)))},8089:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuQuery=t.OrderMenuCategory=t.OrderMenuRecipe=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n};const a=i.default`
  fragment GOrderMenuRecipe on Recipe {
    id
    code
    nameLabel
    descriptionLabel
    price(warePriceType: DELIVERY) {
      value
      currency {
        code
      }
    }
    sidedishCount: sideDishesWareCategoriesCount
  }
`;t.OrderMenuRecipe=a;const o=i.default`
  fragment GOrderMenuCategory on WareCategory {
    id
    nameLabel
    pictogram
    recipes(enabled: true, isAvailable: true) {
      ...GOrderMenuRecipe
    }
  }
  ${a}
`;t.OrderMenuCategory=o;const l=i.default`
  query GOrderMenu($branchId: ID!) {
    orderMenu: wareCategories(
      wareCategoryType: MAIN
      companyBranch: $branchId
    ) {
      ...GOrderMenuCategory
    }
  }
  ${o}
  ${a}
`;t.OrderMenuQuery=l},8090:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapPage=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(71),o=r(5786),l=r(7717),d=r(7802),u=r(7745),c=r(7883);t.OrderMapPage=(()=>i.default.createElement(i.default.Fragment,null,i.default.createElement(o.PageLayout,{layouts:[{i:"bOrders",x:15,y:1,w:1,h:2}],pageTitle:a.i18n._("Map"),scrollPageTitle:!1},i.default.createElement("div",{key:"bOrders"},i.default.createElement(d.OrderButton,{count:null}))),i.default.createElement(u.OrderListLoader,null,e=>i.default.createElement(l.PageLayoutFullHeightItem,{widthInColumns:15},i.default.createElement(c.OrderMap,e)))))},8233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapMarker=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7746),o=r(124),l=r(7781);t.OrderMapMarker=(({order:e,onClick:t})=>e.gps?i.default.createElement(a.OverlayView,{key:e.id,position:(0,o.gpsToLatLng)(e.gps),mapPaneName:a.OverlayView.OVERLAY_MOUSE_TARGET},i.default.createElement(l.DeliveryTimeBadge,{deliverAt:e.deliverAt,deliveredAt:null,onClick:t})):null)},8234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderOverviewPage=void 0;var n=g(r(0)),i=g(r(45)),a=r(7711),o=r(71),l=r(5786),d=r(7717),u=r(7757),c=r(7799),s=r(8235),f=r(8237),m=r(8239),p=r(8240),v=r(8243),h=r(7745),y=r(7883);function g(e){return e&&e.__esModule?e:{default:e}}const O=(0,i.default)("div").withConfig({displayName:"FilterContainerStyled"})`
  margin: -0.05rem 0rem -0.05rem -0.18rem;
`;t.OrderOverviewPage=(e=>n.default.createElement(h.OrderListLoader,null,e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(s.OrderNotificationSound,e),n.default.createElement(d.PageLayoutFullHeightItem,{withScrollArea:!0,row:2,widthInColumns:8,scrollAreaId:"order-list"},n.default.createElement(p.OrderList,e)),n.default.createElement(d.PageLayoutFullHeightItem,{widthInColumns:8,column:8,withScrollArea:!1},n.default.createElement(y.OrderMap,e),n.default.createElement(m.MapFullscreenButton,null)),n.default.createElement(l.PageLayout,{layouts:[{i:"filter",x:0,y:1,w:6,h:1},{i:"neworder",x:6,y:1,w:2,h:1},{i:"deliverytime",x:8,y:0,w:1,h:1}],pageTitle:o.i18n._("Orders"),showSoundControl:!0,scrollPageTitle:!1},n.default.createElement(u.PageLayoutItem,{key:"filter",component:()=>n.default.createElement(O,null,n.default.createElement(v.OrderListBranchFilter,null))}),n.default.createElement(u.PageLayoutItem,{key:"neworder",component:()=>n.default.createElement(a.CanMutate,{mutationName:"createOrder"},n.default.createElement(c.CreateOrderButton,{showOnlyText:!0}))}),n.default.createElement(u.PageLayoutItem,{key:"deliverytime",component:()=>n.default.createElement(f.BranchDeliveryTime,null)})))))},8235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNotificationSound=void 0;var n=r(94),i=c(r(0)),a=c(r(8236)),o=r(93),l=r(5819),d=r(148),u=r(47);function c(e){return e&&e.__esModule?e:{default:e}}const s=(0,n.observer)(({isLoading:e,categorizedOrders:t})=>{const{config:r,order:n}=(0,o.useRoot)();if(e||!t)return null;const c=!u.RM.all(e=>n.list.isOrderDetailOpen(e.id),t[d.OrderStateCategoryEnum.NewOrders]||[]);return i.default.createElement(l.SoundPlayInterval,{shouldPlay:c,intervalSec:r.orderListSoundIntervalSec,soundUrl:a.default})});t.OrderNotificationSound=s},8236:function(e,t,r){e.exports=r.p+"static/media/orderNotification.0aa2ebe9.mp3"},8237:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BranchDeliveryTime=void 0;var n,i=r(123),a=r(273),o=r(94),l=(n=r(0))&&n.__esModule?n:{default:n},d=r(93),u=r(7782),c=r(7741),s=r(71),f=r(7750),m=r(8238);const p=(0,o.observer)(e=>{const{order:t}=(0,d.useRoot)(),r=(0,c.useGuardedMutation)(m.UpdateBranchDeliveryTimeMutation),n=t.list.firstBranchId;return n?l.default.createElement(f.DeliveryTimeDialog,{title:s.i18n._("Change default time of delivery to customer (in minutes)"),onConfirm:e=>{r({branchId:n,time:e})}},({openDialog:e})=>l.default.createElement(m.QueryBranchDeliveryTime,{variables:{branchId:n},render:({companyBranch:t})=>l.default.createElement(u.TimeBadge,{variant:u.ETimeBadgeVariant.NORMAL,minutes:t.defaultDeliveryTime,onClick:e})})):l.default.createElement(i.Tooltip,{title:s.i18n._("Select a single branch to set delivery time")},l.default.createElement(u.TimeBadge,{variant:u.ETimeBadgeVariant.UNKNOWN},l.default.createElement(a.Alarm,null)))});t.BranchDeliveryTime=p},8238:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryBranchDeliveryTime=t.UpdateBranchDeliveryTimeMutation=t.BranchDeliveryTimeQuery=void 0;var n,i=(n=r(21))&&n.__esModule?n:{default:n},a=r(61);const o=i.default`
  query GBranchDeliveryTime($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      defaultDeliveryTime
    }
  }
`;t.BranchDeliveryTimeQuery=o;const l=i.default`
  mutation MUpdateBranchDeliveryTime($branchId: ID!, $time: Int!) {
    updateDefaultDeliveryTime(id: $branchId, defaultDeliveryTime: $time) {
      id
      defaultDeliveryTime
    }
  }
`;t.UpdateBranchDeliveryTimeMutation=l;const d=(0,a.buildQuery)(o);t.QueryBranchDeliveryTime=d},8239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapFullscreenButton=void 0;var n=d(r(0)),i=r(149),a=d(r(45)),o=r(5777),l=r(46);function d(e){return e&&e.__esModule?e:{default:e}}const u=a.default.div.withConfig({displayName:"DivTopRightStyled"})`
  position: absolute;
  top: 0;
  right: 0;
  width: 3.4375rem;
  height: 3.4375rem;
`;t.MapFullscreenButton=(()=>n.default.createElement(u,null,n.default.createElement(i.Link,{to:"/order/map"},n.default.createElement(o.TouchButton,{iconName:"map",color:l.Colors.greyMiddle}))))},8240:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderList=void 0;var n,i=r(122),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7747),l=r(5790),d=r(95),u=r(8241);t.OrderList=(({isLoading:e,noFilter:t,orders:r,categories:n,categorizedOrders:c})=>a.default.createElement(d.WithRoot,{render:({order:d})=>e?a.default.createElement(l.Loading,null):t?a.default.createElement(o.CardListTitle,null,a.default.createElement(i.Trans,{id:"Select at least one branch"})):0===r.length?a.default.createElement(o.CardListTitle,null,a.default.createElement(i.Trans,{id:"No orders"})):a.default.createElement(a.default.Fragment,null,n.map(e=>a.default.createElement(u.OrderListCategory,{key:e.enum,isCategoryCollapsed:d.list.isCategoryCollapsed(e.enum),category:e,orders:c[e.enum]||[],showBranches:d.list.branches.length>1,toggleCategoryCollapse:d.list.toggleCategoryCollapse,toggleOrderDetail:d.list.toggleOrderDetail,isOrderDetailOpen:d.list.isOrderDetailOpen})))}))},8241:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderListCategory=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(148),o=r(7820),l=r(8242);t.OrderListCategory=(({orders:e,category:t,showBranches:r,isCategoryCollapsed:n=!1,toggleCategoryCollapse:d,toggleOrderDetail:u,isOrderDetailOpen:c})=>i.default.createElement(i.default.Fragment,null,i.default.createElement(l.OrderListTitle,{count:e.length,isCountBold:t.enum===a.OrderStateCategoryEnum.NewOrders,isCollapsed:n,onClick:()=>d(t.enum)},t.code),e.length>0&&!n&&e.map(e=>i.default.createElement(o.OrderBox,{key:e.id,order:e,toggleOrderDetail:u,isOrderDetailOpen:c,showBranch:r}))))},8242:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderListTitle=void 0;var n=r(122),i=d(r(153)),a=d(r(0)),o=d(r(45)),l=r(46);function d(e){return e&&e.__esModule?e:{default:e}}const u=o.default.div.withConfig({displayName:"Container"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  cursor: pointer;
  &:hover {
    background-color: ${(0,i.default)(l.Colors.turquoise).alpha(.05).string()};
  }
  &:active {
    background-color: ${(0,i.default)(l.Colors.turquoise).alpha(.2).string()};
  }
`,c=o.default.h2.withConfig({displayName:"ListTitle"})`
  color: ${l.Colors.greyLight};
  font-weight: lighter;
  font-size: 1.6rem;
  margin: 1.2rem 0 0.8rem 0.4rem;
`,s=o.default.div.withConfig({displayName:"Badge"})`
  margin: 1rem 0 1rem 1rem;
  min-height: 1.8rem;
  line-height: 1.8rem;
  min-width: 1.8rem;
  border-radius: 1.8rem;
  font-size: 1.2rem;
  text-align: center;
  vertical-align: middle;
  padding: 0;
  display: inline-block;
  background-color: ${l.Colors.black};
  color: white;
`,f=(0,o.default)(s).withConfig({displayName:"BadgeBold"})`
  background-color: ${l.Colors.red};
  color: white;
`,m=o.default.div.withConfig({displayName:"ArrowUp"})`
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-bottom: 0.5rem solid white;
  margin: 0 0.65rem 1.3rem 1rem;
`,p=o.default.div.withConfig({displayName:"ArrowDown"})`
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-top: 0.5rem solid white;
  margin: 0 0.65rem 1.3rem 1rem;
`,v=o.default.div.withConfig({displayName:"CollapsedWarning"})`
  margin: 0 0 1rem 1rem;
`;t.OrderListTitle=(({count:e=0,isCollapsed:t=!1,isCountBold:r=!1,onClick:i,children:o})=>a.default.createElement(u,{onClick:i},t?a.default.createElement(p,null):a.default.createElement(m,null),a.default.createElement(c,null,o),r?a.default.createElement(f,null,e):a.default.createElement(s,null,e),t?a.default.createElement(v,null,a.default.createElement(n.Trans,{id:"List is collapsed"})):null))},8243:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderListBranchFilter=void 0;var n,i=r(94),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(93),l=r(7736),d=r(46);t.OrderListBranchFilter=(()=>{const{order:e}=(0,o.useRoot)();return(0,i.useObserver)(()=>a.default.createElement(l.CompanyBranchPicker,{selectedBranches:e.list.branches,onSelectionChange:t=>{e.list.setBranchFilter(t)},onSelectionClear:e.list.clearBranchFilter,textColor:d.Colors.turquoise,isMulti:!0,isClearable:!1}))})}}]);
//# sourceMappingURL=50.18b25196.chunk.js.map