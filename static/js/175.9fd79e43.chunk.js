(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{7845:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.OverviewRoutes=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(25),o=r(287),i=r(78),u=r(282),d=r(284),c=r(8443),s=r(8447),f=r(8453),m=r(8457),p=r(8462);const y=({match:e})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(o.PageTitle,{title:i.i18n._("Overview")}),n.default.createElement(l.Switch,null,n.default.createElement(d.SecureRoute,{exact:!0,path:e.path,component:p.OverviewPage}),n.default.createElement(d.SecureRoute,{path:`${e.path}/closure/history`,component:c.ClosureHistoryPage}),n.default.createElement(d.SecureRoute,{path:`${e.path}/closure/:reportId?`,component:s.ClosurePage}),n.default.createElement(d.SecureRoute,{path:`${e.path}/statistics`,component:f.DailyStatisticsPage}),n.default.createElement(d.SecureRoute,{path:`${e.path}/orders`,component:m.OrdersStatisticsPage}),n.default.createElement(l.Route,{component:u.NotFoundPage})));t.OverviewRoutes=y;var v=y;t.default=v},7850:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconLine=void 0;var a=i(r(0)),n=i(r(51)),l=r(52),o=r(173);function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const d=n.default.div.withConfig({displayName:"IconLineWrap"})`
  display: flex;
`;d.displayName="IconLineWrap";const c=n.default.div.withConfig({displayName:"DescriptionContainer"})`
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
`;s.displayName="IconLineChildren";t.IconLine=(e=>{var{icon:t,label:r,labelWidth:n,labelWidthUnits:i,labelMargin:m,children:p}=e,y=u(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);let v;return t&&(v="string"===typeof t?a.default.createElement(o.Icon,{iconName:t,color:l.Colors.greyDark}):a.default.createElement(t,{nativeColor:l.Colors.greyDark})),a.default.createElement(d,y,a.default.createElement(c,{labelWidth:n,labelWidthUnits:i,labelMargin:m},v,r?a.default.createElement(f,null,r):null),a.default.createElement(s,null,p))})},7851:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanMutate=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7862),o=r(99);t.CanMutate=(({mutationName:e,children:t})=>{const{user:r}=(0,o.useRoot)();return r.canMutate(e)?n.default.createElement(n.default.Fragment,null,t):n.default.createElement(l.NoAccess,null,`No access to mutation ${e}`)})},7855:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectControl=function(e){return a.default.createElement(n.default,i({},e,{styles:u(e.styles)}))},t.composeSelectControlStyles=void 0;var a=o(r(0)),n=o(r(7898)),l=r(52);function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const u=(e={})=>Object.assign({},e,{control:(t,r)=>{const{selectProps:{width:a,minWidth:n}}=r,o=Object.assign({},t,{border:`1px solid ${l.Colors.greyMiddle}`,margin:l.Spacing.MarginAroundFormComponents,width:void 0!==a?`${a}rem`:"100%",minWidth:void 0!==n?`${n}rem`:"8rem"});return e.control?e.control(o,r):o},menu:(t,r)=>{const{selectProps:{width:a}}=r,n=Object.assign({},t,{zIndex:20,color:l.Colors.black,width:void 0!==a?`${a}rem`:"100%"});return e.menu?e.menu(n,r):n}});t.composeSelectControlStyles=u},7857:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Headline=void 0;var a,n=(a=r(51))&&a.__esModule?a:{default:a},l=r(52);const o=n.default.h2.withConfig({displayName:"Headline"})`
  color: ${({light:e=!1})=>e?l.Colors.greyLight:l.Colors.greyDarkest};
  font-weight: lighter;
  margin: ${({margin:e="0 0.5rem 0 0.5rem"})=>e};
  font-size: ${({size:e})=>"smaller"===e&&"1rem"};
`;t.Headline=o},7858:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sizer=void 0;var a=i(r(0)),n=i(r(51)),l=r(52),o=r(7895);function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const c=(0,n.default)("div").withConfig({displayName:"SizerContainer"})`
  ${({width:e,widthUnit:t=l.Spacing.DefaultSizeUnit})=>void 0===e?"":`width: ${e}${t}`};
  ${({height:e,heightUnit:t=l.Spacing.DefaultSizeUnit})=>void 0===e?"":`height: ${e}${t}`};
`;t.Sizer=(e=>{var{width:t,widthUnit:r=l.Spacing.DefaultSizeUnit,height:n,heightUnit:i=l.Spacing.DefaultSizeUnit,margin:s,children:f,className:m}=e,p=d(e,["width","widthUnit","height","heightUnit","margin","children","className"]);const y=a.default.createElement(c,u({width:t,widthUnit:r,height:n,heightUnit:i,className:m},p),f);return void 0===s?y:a.default.createElement(o.MarginBox,{margin:s},y)})},7860:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.FlexRowSingle=void 0;const n=((a=r(51))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`;t.FlexRowSingle=n},7861:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayoutFullHeightItem=void 0;var a=i(r(0)),n=i(r(51)),l=r(7873),o=r(52);function i(e){return e&&e.__esModule?e:{default:e}}const u=n.default.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+o.Spacing.LayoutGridCellMargin+")":"calc(100vh - (2 * "+o.Spacing.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+o.Spacing.LayoutGridCellMargin+")":o.Spacing.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+o.Spacing.LayoutGridCellMargin+")":"calc(3.9375rem + "+o.Spacing.LayoutGridCellMargin+")")()};
`,d=n.default.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`;t.PageLayoutFullHeightItem=(({children:e,row:t=1,column:r=0,widthInColumns:n=16,withScrollArea:o=!1,scrollAreaId:i})=>a.default.createElement(u,{column:r,row:t,widthInColumns:n,withScrollArea:o},o?a.default.createElement(l.ScrollArea,{id:i},e):a.default.createElement(d,null,e)))},7862:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoAccess=void 0;var a;r(131),r(279),(a=r(0))&&a.__esModule;t.NoAccess=(({children:e})=>null)},7863:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanQuery=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7862),o=r(99);t.CanQuery=(({queryName:e,children:t})=>{const{user:r}=(0,o.useRoot)();return r.canQuery(e)?n.default.createElement(n.default.Fragment,null,t):n.default.createElement(l.NoAccess,null,`No access to query ${e}`)})},7865:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.FlexColumn=void 0;const n=((a=r(51))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"FlexColumn"})`
  flex: ${function({fixedWidth:e=!1,width:t,widthGrowIndex:r=0}){return e?t?`0 0 ${t}`:"0 0":`${r} 0`}};
  padding: ${function({padding:e="0.25rem"}){return e}};
  margin: ${function({margin:e=""}){return e}};
`;t.FlexColumn=n},7867:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Price=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5799);t.Price=(({price:e,currencyCode:t,className:r})=>n.default.createElement("span",{className:r},t?`${(0,l.formatPrice)(e)} ${t}`:(0,l.formatPrice)(e)))},7868:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalSeparator=void 0;var a=o(r(0)),n=o(r(51)),l=r(52);function o(e){return e&&e.__esModule?e:{default:e}}const i=n.default.div.withConfig({displayName:"HorizontalSeparatorStyled"})`
  border-top: 1px solid ${l.Colors.greyLight};
  margin: 0.25rem 0rem;
`;t.HorizontalSeparator=(({visible:e=!0})=>e?a.default.createElement(i,null):null)},7870:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSnackBar=function(){const e=(0,l.useContext)(n.SnackbarContextNext),t=(0,l.useCallback)(t=>e(t,o),[]),r=(0,l.useCallback)(t=>e(t,i),[]),a=(0,l.useCallback)(t=>e(t,u),[]),c=(0,l.useCallback)(t=>e(t,d),[]);return{enqueueSnackbar:e,enqueueSuccess:t,enqueueError:r,enqueueWarning:a,enqueueInfo:c}};var a,n=r(286),l=r(0);!function(e){e.default="default",e.error="error",e.success="success",e.warning="warning",e.info="info"}(a||(a={}));const o={variant:a.success},i={variant:a.error},u={variant:a.warning},d={variant:a.info}},7872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,a.useContext)(n.__RouterContext)};var a=r(0),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(25))},7873:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollArea=void 0;const n=((a=r(51))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`;t.ScrollArea=n},7874:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useGuardedMutation=function(e,t={}){const r=s.i18n._("Unexpected error occured while sending a request. Our team was notified about the issue."),{enqueueSnackbar:a,enqueueError:n,enqueueWarning:o}=(0,m.useSnackBar)(),f=(0,i.useCallback)(e=>{e.forEach(o)},[]),v=(0,i.useCallback)(e=>{const t=e.filter(d.RM.propEq("showToUser",!0));0===t.length?n(r):f(t.map(d.RM.prop("message")))},[]),h=(0,i.useCallback)(e=>{if((0,l.isApolloError)(e)){if(e.networkError)return void n(s.i18n._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void v(e.graphQLErrors)}(0,c.reportError)(e),a(r,{action:[i.default.createElement(y,{key:"feedback"})]})},[]),g=(0,u.useMutation)(e,t);return e=>p(this,void 0,void 0,function*(){try{const a=yield g({variables:e});if(a.errors)return v(a.errors),null;if(!a.data)return null;const n=a.data;if(t.getUserErrors){const e=t.getUserErrors(n);null!==e&&f(e)}return n}catch(r){return h(r),null}})};var a,n=r(130),l=r(35),o=(a=r(5817))&&a.__esModule?a:{default:a},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),u=r(280),d=r(53),c=r(101),s=r(78),f=r(5794),m=r(7870);var p=function(e,t,r,a){return new(r||(r=Promise))(function(n,l){function o(e){try{u(a.next(e))}catch(t){l(t)}}function i(e){try{u(a.throw(e))}catch(t){l(t)}}function u(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(o,i)}u((a=a.apply(e,t||[])).next())})};function y(){return i.default.createElement(f.TouchButton,{onClick:()=>o.default.showReportDialog()},i.default.createElement(n.Trans,{id:"Submit feedback"}))}},7875:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectControlFlat=void 0;var a,n=r(130),l=(a=r(0))&&a.__esModule?a:{default:a},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(51)),i=r(53);const u=o.default.div.withConfig({displayName:"ItemStyled"})`
  margin: 0.5rem 0.6rem;
  display: inline-block;
  cursor: pointer;
  color: ${({textColor:e})=>e};
  ${function({isSelected:e}){if(!e)return"";return o.css`
    font-weight: bolder;
    text-decoration: underline;
  `}};
`,d=o.default.div.withConfig({displayName:"SelectorStyled"})`
  border: ${({isInvalid:e})=>!0===e?"1px red solid":"auto"};
`;class c extends l.default.Component{hasSelection(){const{isMulti:e,selectedItem:t,selectedItems:r}=this.props;return e?Array.isArray(r)&&r.length>0:null!=t}isItemSelected(e){const{isMulti:t,selectedItem:r,selectedItems:a}=this.props;return t&&Array.isArray(a)?i.RM.contains(e,a):i.RM.equals(r,e)}updateSelection(e){const{isMulti:t,selectedItems:r=[],onSingleSelection:a,onMultiSelection:n}=this.props;null===e?t&&n?n([]):a&&a(null):t&&n?this.isItemSelected(e)?n(Array.isArray(r)?i.RM.without([e],r):[e]):n(Array.isArray(r)?i.RM.concat(r,[e]):[]):a&&a(e)}render(){const{items:e,isClearable:t,isInvalid:r=!1,textColor:a="inherit",formatItem:o}=this.props;return l.default.createElement(d,{isInvalid:r},t&&l.default.createElement(u,{isSelected:!this.hasSelection(),textColor:a,onClick:()=>{this.updateSelection(null)}},l.default.createElement(n.Trans,{id:"optionselector.clear-filter"})),e.map((e,t)=>l.default.createElement(u,{key:t,isSelected:this.isItemSelected(e),textColor:a,onClick:()=>{this.updateSelection(e)}},o(e))))}}t.SelectControlFlat=c,c.defaultProps={formatItem:i.RM.prop("displayName"),getItemValue:i.RM.prop("id")}},7878:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormSubmit=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7849),o=r(7879),i=r(5794),u=r(52);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.FormSubmit=(e=>{var{children:t}=e,r=c(e,["children"]);return n.default.createElement(l.FormApi,null,e=>n.default.createElement(i.TouchButton,d({color:u.Colors.green,disabled:!(0,o.isFormValid)(e)||e.submitting,onClick:t=>{t.preventDefault(),e.submitForm(t)}},r),t))})},7879:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFormValid=function(e){return!e.errors||0===Object.keys(e.errors).length},t.validateIsRequired=function(e){return t=>(0,a.isEmpty)(t+"")?n.i18n._("{fieldName} must be entered",{fieldName:e}):null};var a=r(7871),n=r(78)},7880:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchPicker=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(99),o=r(53),i=r(7888),u=r(7899);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.CompanyBranchPicker=(({breakpoint:e=3,selectedBranches:t=[],isMulti:r=!1,isClearable:a=!0,textColor:c,onSelectionChange:s,onSelectionClear:f,getDropdownProps:m=(()=>({}))})=>{const{user:p}=(0,l.useRoot)(),y=e=>t.includes(e.id),v={textColor:c,isClearable:a,isMulti:r,branches:p.branches,selectedBranch:p.branches.find(y),selectedBranches:p.branches.filter(y),onSingleSelection(e){null===e&&f?f():null!==e&&s&&s([e.id],[e])},onMultiSelection(e){0===e.length&&f?f():e.length&&s&&s(e.map(o.RM.prop("id")),e)}};return p.branches.length<e?n.default.createElement(u.CompanyBranchFlatSelect,v):n.default.createElement(i.CompanyBranchDropdown,d({},v,m()))})},7884:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.CardDock=void 0;const n=(0,((a=r(51))&&a.__esModule?a:{default:a}).default)("div").withConfig({displayName:"CardDock"})`
  position: absolute;
  ${({position:e="BottomRight"})=>"BottomLeft"===e||"TopLeft"===e?"left: 0":"right: 0"};
  ${({position:e="BottomRight"})=>"BottomRight"===e||"BottomLeft"===e?"bottom: 0":"top: 0"};
`;t.CardDock=n},7888:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchDropdown=void 0;var a,n=r(130),l=(a=r(0))&&a.__esModule?a:{default:a},o=r(7896),i=r(7855),u=r(53),d=r(78);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const f=e=>{const{getStyles:t}=e,r=e.innerProps,{ref:a}=r,o=s(r,["ref"]);return l.default.createElement("div",c({},o,{ref:a,style:t("clearIndicator",e)}),l.default.createElement("div",{style:{padding:"0px 5px"}},l.default.createElement(n.Trans,{id:"All"})))};t.CompanyBranchDropdown=(e=>{var{branches:t,selectedBranch:r,onSingleSelection:a,selectedBranches:n,onMultiSelection:m}=e,p=s(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return l.default.createElement(i.SelectControl,c({value:p.isMulti?n:r,placeholder:p.isMulti?d.i18n._("Filter branches..."):d.i18n._("Select a branch"),options:t,getOptionValue:u.RM.prop("id"),formatOptionLabel:e=>l.default.createElement(o.CompanyBranch,{branch:e}),filterOption:(e,t)=>e.data.name.toLocaleLowerCase().includes(t.toLocaleLowerCase()),closeMenuOnSelect:!p.isMulti,components:{ClearIndicator:f},styles:{clearIndicator:e=>Object.assign({},e,{cursor:"pointer"})},onChange:e=>{p.isMulti&&m&&Array.isArray(e)&&m(e),!p.isMulti&&a&&(Array.isArray(e)?a(u.RM.head(e)||null):a(e||null))}},p))})},7889:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useExecutableQuery=function(e,t={}){const r=(0,i.useApolloClient)(),c=(0,o.useObservable)({data:null,loading:!1,wasExecuted:!1,get hasAnyError(){return Boolean(c.errors&&c.errors.length||c.error)}});return{result:c,execute:o=>d(this,void 0,void 0,function*(){c.loading=!0;try{const n=yield r.query(Object.assign({},t,{query:e,variables:o}));(0,l.runInAction)(()=>{c.wasExecuted=!0,c.data=n.data,c.errors=n.errors,c.loading=!1})}catch(i){(0,a.isApolloError)(i)?(0,l.runInAction)(()=>{c.error=i,c.errors=i.graphQLErrors,c.loading=!1}):((0,l.runInAction)(()=>{c.error=i,c.loading=!1}),(0,u.reportError)(i))}return c.errors&&(0,u.reportFailingQuery)(c.errors,{query:(0,n.getOperationName)(e),variables:o}),c}),reset:()=>{(0,l.runInAction)(()=>{c.wasExecuted=!1,c.data=null,c.error=void 0,c.errors=void 0,c.loading=!1})}}};var a=r(35),n=r(32),l=r(11),o=r(100),i=r(280),u=r(101),d=function(e,t,r,a){return new(r||(r=Promise))(function(n,l){function o(e){try{u(a.next(e))}catch(t){l(t)}}function i(e){try{u(a.throw(e))}catch(t){l(t)}}function u(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(o,i)}u((a=a.apply(e,t||[])).next())})}},7890:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardListTitle=void 0;var a,n=(a=r(51))&&a.__esModule?a:{default:a},l=r(52);const o=n.default.h2.withConfig({displayName:"CardListTitle"})`
  color: ${l.Colors.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`;t.CardListTitle=o},7894:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryTimeDialog=void 0;var a=r(130),n=r(131),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),o=r(7946),i=r(5794);t.DeliveryTimeDialog=(({title:e,onConfirm:t,onCancel:r,children:u,cancelText:d,refApi:c})=>{const[s,f]=(0,l.useState)(!1),m=()=>f(!0),p=()=>f(!1);return c&&(c.current={openDialog:m,closeDialog:p}),l.default.createElement(l.default.Fragment,null,u&&u({openDialog:m,closeDialog:p}),l.default.createElement(n.Dialog,{open:s,onClose:p},l.default.createElement(n.DialogTitle,null,e),l.default.createElement(n.DialogContent,null,l.default.createElement(o.DeliveryMinutes,{onMinuteClick:e=>{p(),t(e)}})),l.default.createElement(n.DialogActions,null,l.default.createElement(i.TouchButton,{onClick:()=>{p(),r&&r()}},d||l.default.createElement(a.Trans,{id:"Cancel"})))))})},7895:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.MarginBox=void 0;const n=(0,((a=r(51))&&a.__esModule?a:{default:a}).default)("div").withConfig({displayName:"MarginBox"})`
  margin: ${e=>e.margin};
`;t.MarginBox=n},7896:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranch=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7897);t.CompanyBranch=(({branch:e,onClick:t,short:r=!1,showBrand:a=!0})=>n.default.createElement(l.CursorContainer,{cursor:"pointer",onClick:t},r?e.name.substr(0,8):n.default.createElement(n.default.Fragment,null,n.default.createElement("span",null,e.name),a&&n.default.createElement("span",null,` [${e.brand.name}]`))))},7897:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.CursorContainer=void 0;const n=((a=r(51))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"CursorContainer"})`
  cursor: ${({cursor:e="default"})=>e};
`;t.CursorContainer=n},7899:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchFlatSelect=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7875),o=r(52);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.CompanyBranchFlatSelect=(e=>{var{branches:t,selectedBranch:r,selectedBranches:a,textColor:d=o.Colors.black}=e,c=u(e,["branches","selectedBranch","selectedBranches","textColor"]);return n.default.createElement(l.SelectControlFlat,i({items:t,selectedItem:r,selectedItems:a,textColor:d,formatItem:e=>n.default.createElement("span",{title:e.brand.name},e.name)},c))})},7903:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayoutItem=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(172),l=r(7851),o=r(7863);var i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.PageLayoutItem=(e=>{var{route:t,component:r,canQuery:u,canMutate:d}=e,c=i(e,["route","component","canQuery","canMutate"]);let s=t?a.default.createElement(n.Link,{to:t},(0,a.createElement)(r)):(0,a.createElement)(r);return u&&(s=a.default.createElement(o.CanQuery,{queryName:u},s)),d&&(s=a.default.createElement(l.CanMutate,{mutationName:d},s)),a.default.createElement("div",c,s)})},7904:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.LinkStyled=void 0;const n=((a=r(51))&&a.__esModule?a:{default:a}).default.a.withConfig({displayName:"LinkStyled"})`
  color: inherit;
  text-decoration-color: rgba(0, 0, 0, 0.08);
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
  &:visited {
    text-decoration-color: rgba(0, 0, 0, 0.08);
  }
`;t.LinkStyled=n},7905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimeLabel=void 0;var a,n=(a=r(51))&&a.__esModule?a:{default:a},l=r(52);const o=n.default.div.withConfig({displayName:"OrderTimeLabel"})`
  margin-left: 1rem;
  display: inline-block;
  color: ${l.Colors.greyMiddle};
`;t.OrderTimeLabel=o},7906:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DateTimeFormatProvider=void 0;var a=o(r(8077)),n=r(7892),l=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}t.DateTimeFormatProvider=(({children:e})=>l.default.createElement(n.MuiPickersUtilsProvider,{utils:a.default},e))},7907:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resolveLocation=d,t.RelativeLink=void 0;var a=o(r(0)),n=r(172),l=o(r(309));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};function d(e,t){if("string"===typeof e)return(0,l.default)(e,t);const r=(0,l.default)(e.pathname||"",t);return Object.assign({},e,{pathname:r})}t.RelativeLink=(e=>{var{to:t,from:r}=e,l=u(e,["to","from"]);return a.default.createElement(n.Route,{children:({location:e})=>a.default.createElement(n.Link,i({to:d(t,r||`${e.pathname}/`)},l))})})},7928:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryTimeBadge=void 0;var a,n=r(279),l=r(104),o=r(5802),i=(a=r(0))&&a.__esModule?a:{default:a},u=r(7929),d=r(5812);const c=o.css`
  padding: 0.2rem 0.3rem 0.1rem 0.3rem;
`;t.DeliveryTimeBadge=(({deliverAt:e,deliveredAt:t,isCancelled:r=!1,onClick:a})=>{const o=!(t||r),s=(0,d.useTimer)({interval:d.MINUTE,enabled:o});let f=u.ETimeBadgeVariant.UNKNOWN;if(r)return i.default.createElement(u.TimeBadge,{variant:f,className:c},i.default.createElement(n.CancelOutlined,null));if(!e)return i.default.createElement(u.TimeBadge,{variant:f},"\u2754");const m=(0,l.differenceInMinutes)(e,t||s);return f=m>20?u.ETimeBadgeVariant.NORMAL:m>0?u.ETimeBadgeVariant.WARNING:u.ETimeBadgeVariant.CRITICAL,i.default.createElement(u.TimeBadge,{minutes:m,variant:f,onClick:a})})},7929:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimeBadge=t.ETimeBadgeVariant=void 0;var a,n=r(5802),l=u(r(0)),o=u(r(51)),i=r(52);function u(e){return e&&e.__esModule?e:{default:e}}t.ETimeBadgeVariant=a,function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.CRITICAL=1]="CRITICAL",e[e.WARNING=2]="WARNING",e[e.NORMAL=3]="NORMAL"}(a||(t.ETimeBadgeVariant=a={}));const d=o.default.div.withConfig({displayName:"TimeBadgeStyled"})`
  height: 2rem;
  line-height: 2rem;
  width: 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid white;
  color: ${i.Colors.white};
  background: ${i.Colors.greyMiddle};
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`,c={[a.UNKNOWN]:(0,o.default)(d)``,[a.CRITICAL]:(0,o.default)(d)`
    background: ${i.Colors.red};
  `,[a.WARNING]:(0,o.default)(d)`
    background: ${i.Colors.orange};
    color: ${i.Colors.black};
    font-weight: bold;
  `,[a.NORMAL]:(0,o.default)(d)`
    background: ${i.Colors.green};
  `},s=n.css`
  font-size: 0.8rem;
`,f=n.css`
  font-size: 1.7rem;
  font-weight: bold;
`,m=n.css`
  cursor: pointer;
`;t.TimeBadge=(({minutes:e,className:t,children:r,variant:a,onClick:o})=>{const i=c[a];let u=r;const d=[];return void 0!==e&&((e>99||e<-9)&&d.push(s),e<-99?(u="\u2012",d.push(f)):u=e.toString()),o&&d.push(m),l.default.createElement(i,{onClick:o,className:(0,n.cx)(t,...d)},u)})},7946:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMinutes=void 0;var a=i(r(0)),n=i(r(51)),l=r(5794),o=r(52);function i(e){return e&&e.__esModule?e:{default:e}}const u=[20,30,45,60,75,90,105,120],d=n.default.div.withConfig({displayName:"MinutesContainer"})`
  display: flex;
  justify-content: 'center';
  flex-wrap: 'wrap';
  font-size: 2rem;
`,c=n.default.div.withConfig({displayName:"MinutesItem"})`
  margin: 1rem 1rem 0 0;
`;t.DeliveryMinutes=(({onMinuteClick:e})=>a.default.createElement(d,null,u.map(t=>a.default.createElement(c,{key:t},a.default.createElement(l.TouchButton,{onClick:()=>{e(t)},color:o.Colors.green},t)))))},7949:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.AutoHeight=void 0;const n=((a=r(51))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"AutoHeight"})`
  display: flex;
  flex-direction: column;
  height: 100%;
`;t.AutoHeight=n},7951:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTickerFragment=void 0;var a,n=(a=r(23))&&a.__esModule?a:{default:a},l=r(102);const o=n.default`
  fragment GOrderListTicker on Order {
    id
    createdAt
    isPaidWithCard
    deliveryType {
      enum
    }
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
      currency {
        code
      }
    }
  }
  ${l.AddressFragment}
  ${l.CustomerFragment}
`;t.OrderTickerFragment=o},7962:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderBox=t.OrderBoxStyled=void 0;var a=d(r(0)),n=d(r(51)),l=r(7963),o=r(52),i=r(7964),u=r(7966);function d(e){return e&&e.__esModule?e:{default:e}}const c=n.default.div.withConfig({displayName:"OrderBoxStyled"})`
  background-color: ${o.Colors.white};
  color: ${o.Colors.greyDarkest};
  border-radius: ${o.Radiuses.Card};
  margin-bottom: 0.5rem;
  position: relative;
`;t.OrderBoxStyled=c;t.OrderBox=(({order:e,showBranch:t,toggleOrderDetail:r,isOrderDetailOpen:n})=>a.default.createElement(c,{id:`order-${e.id}`},a.default.createElement(i.OrderTicker,{order:e,showBranch:t,onClick:()=>r(e.id)}),a.default.createElement(l.ObserverWhen,{test:()=>n(e.id),renderSuccess:()=>a.default.createElement(u.OrderDetail,{orderId:e.id})})))},7963:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ObserverWhen=void 0;var a,n=r(5808),l=(a=r(0))&&a.__esModule?a:{default:a};t.ObserverWhen=(({test:e,renderSuccess:t,renderFailure:r})=>l.default.createElement(n.Observer,{render:()=>e()?t():r?r():null}))},7964:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTicker=void 0;var a=r(130),n=p(r(175)),l=p(r(0)),o=r(5819),i=p(r(51)),u=r(7867),d=r(171),c=r(5799),s=r(52),f=r(7965),m=r(7928);function p(e){return e&&e.__esModule?e:{default:e}}const y=(0,i.default)(o.Element).withConfig({displayName:"OrderTickerStyled"})`
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: ${(0,n.default)(s.Colors.turquoise).alpha(.05).string()};
  }
  &:active {
    background-color: ${(0,n.default)(s.Colors.turquoise).alpha(.2).string()};
  }
`,v=i.default.div.withConfig({displayName:"OrderTickerMainContentStyled"})`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.4rem;
`,h=i.default.div.withConfig({displayName:"DeliveryTimeBadgeContainerStyled"})`
  flex: 0 0 2rem;
`,g=i.default.div.withConfig({displayName:"AddressDisplayContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,O=i.default.div.withConfig({displayName:"CustomerIdentityContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,b=i.default.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 3.5rem;
  text-align: right;
  position: relative;
`,C=i.default.div.withConfig({displayName:"PaidMarkStyled"})`
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
`,_=i.default.div.withConfig({displayName:"PaidTextStyled"})`
  color: ${s.Colors.orange};
`,E=i.default.div.withConfig({displayName:"ToBranchContainerStyled"})`
  padding: 0.3rem 0.6rem;
  display: inline-block;
  border-top-left-radius: ${s.Radiuses.Card};
  background-color: ${s.Colors.green};
  color: ${s.Colors.white};
`,S=i.default.div.withConfig({displayName:"ToPickupLabel"})`
  font-style: italic;
  color: ${s.Colors.violet};
`;t.OrderTicker=(({order:e,showBranch:t,onClick:r})=>{return l.default.createElement(y,{onClick:r,name:`order-${e.id}`},t&&l.default.createElement(E,null,e.companyBranch.name),l.default.createElement(v,null,l.default.createElement(h,null,l.default.createElement(m.DeliveryTimeBadge,{deliverAt:e.deliverAt,deliveredAt:e.deliveredAt,isCancelled:e.orderStateCategory===d.OrderStateCategoryEnum.Cancel})),l.default.createElement(g,null,(()=>e.deliveryType&&e.deliveryType.enum===d.DeliveryTypeEnum.Pickup?l.default.createElement(S,null,l.default.createElement(a.Trans,{id:"To pickup"})):(0,c.formatAddress)(e.address))()),l.default.createElement(O,null,l.default.createElement(f.CustomerIdentity,{customer:e.customer})),l.default.createElement(b,null,l.default.createElement(u.Price,{price:e.totalSum.value,currencyCode:e.totalSum.currency.code}),e.isPaidWithCard&&l.default.createElement(l.default.Fragment,null,l.default.createElement(C,null),l.default.createElement(_,null,l.default.createElement(a.Trans,{id:"Paid"}))))))})},7965:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomerIdentity=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a};t.CustomerIdentity=(({customer:e})=>e?n.default.createElement("span",null,`${e.lastName?`${e.firstName} ${e.lastName}`:e.defaultPhone?e.defaultPhone.phone:""}`):n.default.createElement("i",null,"unknown"))},7966:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDetail=void 0;var a=h(r(0)),n=h(r(51)),l=r(7868),o=r(7967),i=r(7968),u=r(7969),d=r(7970),c=r(7972),s=r(7973),f=r(7974),m=r(7975),p=r(7976),y=r(7978),v=r(7979);function h(e){return e&&e.__esModule?e:{default:e}}const g=n.default.div.withConfig({displayName:"OrderDetailContainerStyled"})`
  padding: 0 0.5rem 0.5rem 1.1rem;
`;t.OrderDetail=(({orderId:e})=>a.default.createElement(y.QueryOrderDetail,{variables:{id:e},fetchPolicy:"cache-and-network",render:({order:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement(g,null,a.default.createElement(l.HorizontalSeparator,null),a.default.createElement(p.OrderWareList,{orderWares:t.items}),a.default.createElement(d.OrderDetailTotals,{order:t}),a.default.createElement(s.OrderRuleLines,{rules:t.allAppliedRules},a.default.createElement(u.OrderCountLine,{current:t.customerOrdersCountCurrent,total:t.customerOrdersCountTotal})),a.default.createElement(o.ContactLines,{phones:t.customer.phones,emails:t.customer.emails}),a.default.createElement(i.NoteLine,{note:t.note,previousNote:t.previousNote}),a.default.createElement(l.HorizontalSeparator,null),a.default.createElement(c.OrderIdLine,{displayedId:t.id}),a.default.createElement(l.HorizontalSeparator,null),a.default.createElement(m.OrderTimeLine,{orderTiming:t.orderTiming}),a.default.createElement(f.OrderStats,{order:t})),a.default.createElement(v.OrderStateFlow,{orderId:e,branchId:t.companyBranch.id}))}))},7967:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContactLines=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7868),o=r(7850),i=r(7904);t.ContactLines=(({phones:e,emails:t})=>{const r=e=>n.default.createElement(o.IconLine,{icon:e.icon,key:e.value,labelMargin:"0"},n.default.createElement("div",{title:e.description||""},(e=>e.isMail?n.default.createElement(i.LinkStyled,{href:`mailto:${e.value}`},e.value):n.default.createElement(i.LinkStyled,{href:`tel:${e.value.replace("/ /g","")}`},e.value))(e)));return n.default.createElement(n.default.Fragment,null,(e.length>0||t.length>0)&&n.default.createElement(l.HorizontalSeparator,null),e.map(e=>r(Object.assign({icon:"phone",isMail:!1,value:e.phone},e))),t.map(e=>r(Object.assign({icon:"mail_outline",isMail:!0,value:e.email},e))))})},7968:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoteLine=void 0;var a=d(r(0)),n=d(r(51)),l=r(7868),o=r(7850),i=r(78),u=r(52);function d(e){return e&&e.__esModule?e:{default:e}}const c=n.default.span.withConfig({displayName:"CurrentNoteStyled"})`
  color: ${u.Colors.orange};
`,s=n.default.span.withConfig({displayName:"PreviousNoteStyled"})`
  color: ${u.Colors.greyDark};
  margin-left: 0.5rem;
`;t.NoteLine=(({note:e,previousNote:t})=>e||t?a.default.createElement(a.default.Fragment,null,a.default.createElement(l.HorizontalSeparator,null),a.default.createElement(o.IconLine,{icon:"note",labelMargin:"0"},a.default.createElement(c,null,e||i.i18n._("Without note").toLocaleLowerCase()),a.default.createElement(s,null,t))):null)},7969:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCountLine=void 0;var a,n=r(130),l=(a=r(0))&&a.__esModule?a:{default:a};t.OrderCountLine=(({current:e,total:t})=>l.default.createElement(n.Trans,{id:"It's customer's {current, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} order {total, plural, one {} other {from total of # orders}}",values:{current:e,total:t}}))},7970:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDetailTotals=void 0;var a=i(r(0)),n=i(r(51)),l=r(78),o=r(7971);function i(e){return e&&e.__esModule?e:{default:e}}const u=n.default.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`;t.OrderDetailTotals=(({order:e})=>a.default.createElement(u,null,a.default.createElement(o.OrderWarePriceLine,{label:l.i18n._("Transport fee"),price:e.transportFee.value}),a.default.createElement(o.OrderWarePriceLine,{label:l.i18n._("Covers price"),price:e.coverPrice.value}),a.default.createElement(o.OrderWarePriceLine,{label:l.i18n._("Discount total"),price:-1*e.totalDiscount.value}),a.default.createElement(o.OrderWarePriceLine,{label:l.i18n._("Total price"),price:e.totalSum.value,highlight:!0})))},7971:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWarePriceLine=void 0;var a=i(r(0)),n=i(r(51)),l=r(7867),o=r(52);function i(e){return e&&e.__esModule?e:{default:e}}const u=n.default.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,d=n.default.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${o.Colors.greyMiddle};
`,c=n.default.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${o.Colors.greyMiddle};
`;t.OrderWarePriceLine=(({label:e,price:t,highlight:r=!1})=>a.default.createElement(u,null,a.default.createElement(d,null,e),a.default.createElement(c,null,r?a.default.createElement("b",null,a.default.createElement(l.Price,{price:t})):a.default.createElement(l.Price,{price:t}))))},7972:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderIdLine=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7850);t.OrderIdLine=(({displayedId:e})=>n.default.createElement(l.IconLine,{icon:"format_list_numbered",labelMargin:"0"},e))},7973:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderRuleLines=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7868),o=r(7850);t.OrderRuleLines=(({rules:e,children:t})=>e.length>0||t?n.default.createElement(n.default.Fragment,null,n.default.createElement(l.HorizontalSeparator,null),n.default.createElement(o.IconLine,{icon:"announcement",labelMargin:"0"},t,n.default.createElement("br",null),e.join(", "))):null)},7974:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStats=void 0;var a,n=r(130),l=r(279),o=(a=r(0))&&a.__esModule?a:{default:a},i=r(7850),u=r(5799),d=r(7905);t.OrderStats=(({order:e})=>{const t=[];if(e.deliverAt&&t.push(o.default.createElement("div",{key:"deliverAt"},(0,u.formatTimeWithoutTodayDate)(e.deliverAt),o.default.createElement(d.OrderTimeLabel,null,o.default.createElement(n.Trans,{id:"Deliver on time"})))),e.driver){const{firstName:r,lastName:a}=e.driver.user;t.push(o.default.createElement("div",{key:"driver"},`${r} ${a}`,o.default.createElement(d.OrderTimeLabel,null,o.default.createElement(n.Trans,{id:"Driver"}))))}return 0===t.length?null:o.default.createElement(i.IconLine,{icon:l.Timelapse,labelMargin:"0"},t)})},7975:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimeLine=void 0;var a,n=r(130),l=(a=r(0))&&a.__esModule?a:{default:a},o=r(7850),i=r(171),u=r(5799),d=r(53),c=r(78),s=r(7905);const f={[i.OrderStateCategoryEnum.NewOrders]:(0,n.i18nMark)("Created"),[i.OrderStateCategoryEnum.Preparing]:(0,n.i18nMark)("Preparing"),[i.OrderStateCategoryEnum.ReadyToDeliver]:(0,n.i18nMark)("Ready to deliver"),[i.OrderStateCategoryEnum.OnWay]:(0,n.i18nMark)("On way"),[i.OrderStateCategoryEnum.Finished]:(0,n.i18nMark)("Finished")};t.OrderTimeLine=(({orderTiming:e})=>l.default.createElement(o.IconLine,{icon:"access_time",labelMargin:"0"},d.RM.reject(({createdAt:e,orderStateCategory:t})=>null===e||!f[t],e).map(e=>l.default.createElement("div",{key:e.orderStateCategory},(0,u.formatTimeWithoutTodayDate)(e.createdAt),l.default.createElement(s.OrderTimeLabel,null,c.i18n._(f[e.orderStateCategory]))))))},7976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWareList=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(7977);t.OrderWareList=(({orderWares:e})=>{return a.default.createElement("div",null,e.map(e=>a.default.createElement(a.Fragment,{key:e.id},a.default.createElement(n.OrderWareLine,{code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),a.default.createElement(a.default.Fragment,null,e.sidedishes.map(e=>a.default.createElement(n.OrderWareLine,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value}))))))})},7977:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWareLine=void 0;var a=i(r(0)),n=i(r(51)),l=r(7867),o=r(52);function i(e){return e&&e.__esModule?e:{default:e}}const u=n.default.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,d=n.default.div.withConfig({displayName:"CodeContainerStyled"})`
  flex: 0 0 5rem;
`,c=n.default.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${o.Colors.black};
`,s=n.default.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${o.Colors.greyMiddle};
`;t.OrderWareLine=(({code:e,label:t,price:r})=>a.default.createElement(u,null,a.default.createElement(d,null,e),a.default.createElement(c,null,t),a.default.createElement(s,null,a.default.createElement(l.Price,{price:r}))))},7978:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderDetail=void 0;var a,n=(a=r(23))&&a.__esModule?a:{default:a},l=r(79),o=r(102),i=r(5809);const u=(0,l.buildQuery)(n.default`
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
  ${i.OrderDriverFragment}
`);t.QueryOrderDetail=u},7979:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateFlow=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(107),o=r(99),i=r(171),u=r(101),d=r(7980),c=r(7982),s=r(7983),f=r(7984),m=r(7986),p=r(7987),y=r(7988);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const h=e=>n.default.createElement(m.OrderStateFlowContainer,null,e.canCancel&&n.default.createElement(d.OrderCancelButton,e),n.default.createElement(c.OrderDeliveryToPickup,e),n.default.createElement(p.OrderStateTimeNotification,e),n.default.createElement(s.OrderStateButton,v({nextState:i.OrderStateEnum.Accepted},e))),g=e=>n.default.createElement(m.OrderStateFlowContainer,null,e.canCancel&&n.default.createElement(d.OrderCancelButton,e),n.default.createElement(c.OrderDeliveryToPickup,e),n.default.createElement(p.OrderStateTimeNotification,e),e.canDeliver?n.default.createElement(f.OrderStateDeliver,e):n.default.createElement(s.OrderStateButton,v({nextState:i.OrderStateEnum.Finished},e))),O=e=>n.default.createElement(m.OrderStateFlowContainer,null,n.default.createElement(p.OrderStateTimeNotification,e),n.default.createElement(f.OrderStateDeliver,e),n.default.createElement(s.OrderStateButton,v({nextState:i.OrderStateEnum.Finished},e)));t.OrderStateFlow=(({orderId:e,branchId:t})=>{const{order:{state:r},user:a}=(0,o.useRoot)();return n.default.createElement(y.QueryOrderState,{variables:{orderId:e,branchId:t},render:({order:o,companyBranch:{allowedCategories:d}})=>{const{orderStateCategory:c}=o;if(!c)return(0,u.reportError)(new l.VError("Order %s has got no state categories")),null;const s=null!=o.deliveryType&&o.deliveryType.enum!==i.DeliveryTypeEnum.Pickup,f=s&&d.includes(i.OrderStateCategoryEnum.OnWay),m=o.orderOrigin.enum===i.OrderOriginEnum.Staff&&a.permissions.canCancelOrders,p={orderId:e,branchId:t,stateModel:r,orderStateCategory:c,canCancel:m,canDeliver:f,isDelivery:s};switch(c){case i.OrderStateCategoryEnum.NewOrders:return n.default.createElement(h,p);case i.OrderStateCategoryEnum.Preparing:return n.default.createElement(g,p);case i.OrderStateCategoryEnum.OnWay:return n.default.createElement(O,p);default:return null}}})})},7980:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCancelButton=void 0;var a,n=r(130),l=(a=r(0))&&a.__esModule?a:{default:a},o=r(7884),i=r(7858),u=r(7874),d=r(7981),c=r(5818);t.OrderCancelButton=(({orderId:e})=>{const t=(0,u.useGuardedMutation)(c.CancelOrderMutation);return l.default.createElement(o.CardDock,{position:"BottomLeft"},l.default.createElement(i.Sizer,{width:7.375},l.default.createElement(d.ConfirmButton,{confirmNode:l.default.createElement(n.Trans,{id:"Really cancel?"}),onConfirm:()=>{t({orderId:e})}},l.default.createElement(n.Trans,{id:"Cancel order"}))))})},7981:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmButton=void 0;var a=r(5816),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),l=r(52),o=r(5794);t.ConfirmButton=(({confirmNode:e,initialColor:t=l.Colors.greyMiddle,confirmColor:r=l.Colors.red,confirmDisableMs:i=300,resetToInitialMs:u=3*a.SECOND,children:d,onConfirm:c})=>{const[s,f]=(0,n.useState)(!1),m=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(s){const e=setTimeout(()=>{f(!1)},u);return()=>{clearTimeout(e)}}},[s]),n.default.createElement(o.TouchButton,{ref:m,onClick:()=>{!1===s?(m.current.disabled=!0,setTimeout(()=>{f(!0),m.current&&(m.current.disabled=!1)},i)):c()},color:s?r:t},s?e:d)})},7982:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDeliveryToPickup=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(280),o=r(78),i=r(5794),u=r(5805);t.OrderDeliveryToPickup=(({orderId:e,isDelivery:t})=>{const r=(0,l.useMutation)(u.ChangeOrderToPickupMutation,{variables:{orderId:e}});return t?n.default.createElement(i.TouchButton,{text:o.i18n._("Change to pickup"),onClick:()=>{r()}}):null})},7983:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateButton=void 0;var a,n=r(130),l=(a=r(0))&&a.__esModule?a:{default:a},o=r(171),i=r(78),u=r(5794);const d={[o.OrderStateEnum.Accepted]:(0,n.i18nMark)("Accept order"),[o.OrderStateEnum.Finished]:(0,n.i18nMark)("Finish order")};t.OrderStateButton=(({orderId:e,nextState:t,stateModel:r})=>l.default.createElement(u.TouchButton,{text:i.i18n._(d[t]),width:"7.375rem",onClick:()=>{r.updateOrderState(e,t)}}))},7984:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateDeliver=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(171),o=r(7985),i=r(5809);t.OrderStateDeliver=(({branchId:e,orderId:t,orderStateCategory:r,stateModel:a})=>n.default.createElement(i.QueryDriverSelection,{fetchPolicy:"network-only",variables:{branchId:[e],orderId:t},render:({drivers:e,order:{driver:i}},{loading:u,refetch:d})=>n.default.createElement(o.OrderDriverSelect,{drivers:e,selectedDriver:i?i.user:null,isLoading:u,onReload:d,onClear:()=>{i&&a.removeDriver(i.id)},onSelect:e=>{a.selectDriver(t,e.id),r!==l.OrderStateCategoryEnum.OnWay&&a.deliverOrder(t)}})}))},7985:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDriverSelect=void 0;var a=s(r(0)),n=r(7898),l=s(r(51)),o=r(173),i=r(7855),u=r(53),d=r(78),c=r(52);function s(e){return e&&e.__esModule?e:{default:e}}const f=l.default.div.withConfig({displayName:"DriverName"})`
  margin: 0.1rem 0 0rem 0.2rem;
  display: inline-block;
  vertical-align: top;
  font-size: 1.25rem;
`,m={background:c.Colors.greyMiddle},p={color:c.Colors.white},y={control:e=>Object.assign({},e,m,p,{height:c.Spacing.ButtonHeight,borderWidth:0,borderRadius:c.Radiuses.Button,margin:0}),menu:e=>Object.assign({},e,m),valueContainer:e=>Object.assign({},e,p),singleValue:e=>Object.assign({},e,p),placeholder:e=>Object.assign({},e,p,{fontSize:"1.2rem"})};t.OrderDriverSelect=(({drivers:e,selectedDriver:t,isLoading:r,onSelect:l,onClear:s,onReload:m})=>a.default.createElement(i.SelectControl,{options:e,value:t,getOptionValue:u.RM.prop("id"),isLoading:r,isSearchable:!1,isClearable:!0,placeholder:"Deliver order",width:16,styles:y,noOptionsMessage:()=>d.i18n._("No drivers available"),onChange:e=>null===e?s():l(e),onMenuOpen:m,components:{ValueContainer:e=>a.default.createElement(a.default.Fragment,null,a.default.createElement(o.Icon,{iconName:"directions_car",fontSize:2,color:c.Colors.white}),a.default.createElement(n.components.ValueContainer,e)),DropdownIndicator:()=>null},formatOptionLabel:e=>a.default.createElement(f,null,`${e.firstName} ${e.lastName}`)}))},7986:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateFlowContainer=void 0;var a,n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),l=(a=r(51))&&a.__esModule?a:{default:a},o=r(52);const i=l.default.div.withConfig({displayName:"OrderStateFlowContainerWrapper"})`
  margin: 0 0 0 auto;
  text-align: right;
  height: ${o.Spacing.ButtonHeight};
`,u=l.default.div.withConfig({displayName:"Control"})`
  margin: 0 0 0 0.5rem;
  display: inline-block;
  vertical-align: bottom;
  text-align: left;
  height: 100%;
`;t.OrderStateFlowContainer=(({children:e})=>n.default.createElement(i,null,n.Children.map(e,(e,t)=>n.default.createElement(u,{key:t},e))))},7987:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateTimeNotification=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(99),o=r(78),i=r(7894),u=r(5794);t.OrderStateTimeNotification=(({orderId:e})=>{const{order:t}=(0,l.useRoot)();return n.default.createElement(i.DeliveryTimeDialog,{title:o.i18n._("Send expected time of delivery to customer (in minutes)"),onConfirm:r=>{t.state.sendTimeNotification(e,r)}},({openDialog:e})=>n.default.createElement(u.TouchButton,{iconName:"schedule",onClick:e}))})},7988:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderState=void 0;var a,n=(a=r(23))&&a.__esModule?a:{default:a},l=r(79),o=r(5805);const i=(0,l.buildQuery)(n.default`
  query GOrderState($orderId: ID!, $branchId: ID!) {
    order(id: $orderId) {
      deliveryType {
        enum
      }
      orderOrigin {
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
`);t.QueryOrderState=i},7989:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputDate=void 0;var a,n=r(7892),l=(a=r(0))&&a.__esModule?a:{default:a},o=r(7849),i=r(78),u=r(7906);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.FormInputDate=(e=>{var{field:t}=e,r=c(e,["field"]);return l.default.createElement(u.DateTimeFormatProvider,null,l.default.createElement(o.Field,{field:t,render:e=>l.default.createElement(n.InlineDatePicker,d({value:e.value,onChange:t=>e.setValue(t),onOpen:()=>e.setTouched(!0),format:"ll",ampm:!1,okLabel:i.i18n._("Ok"),cancelLabel:i.i18n._("Cancel"),clearLabel:i.i18n._("Clear"),todayLabel:i.i18n._("Today"),maxDateMessage:i.i18n._("Date is too much in the future"),minDateMessage:i.i18n._("Date is too much in the past")},r))}))})},7990:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FlexRow=void 0;var a,n=(a=r(51))&&a.__esModule?a:{default:a},l=r(52);const o=n.default.div.withConfig({displayName:"FlexRow"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${l.Colors.greyMiddle};
  padding: 0.1rem 0 0.1rem 0;
`;t.FlexRow=o},7991:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MonospaceOutput=void 0;var a=n(r(0));function n(e){return e&&e.__esModule?e:{default:e}}const l=n(r(51)).default.p.withConfig({displayName:"MonospaceOutputStyled"})`
  color: white;
  font-family: 'Lucida Console', Monaco, monospace;
  white-space: pre-wrap;
  margin: 0.2rem 0.5rem 0.5rem 1rem;
  line-height: 1.8rem;
`;t.MonospaceOutput=(({text:e})=>a.default.createElement(l,null,(e=>e.replace(new RegExp("\t","g"),"\t"))(e)))},7992:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsLoader=t.useOrderStatistics=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(7849),l=r(99),o=r(8084),i=r(8460);const{context:u,useStatisticsQuery:d}=(0,o.createStatisticsQuery)(i.OrdersStatisticsQuery);t.useOrderStatistics=(()=>(0,a.useContext)(u));t.OrdersStatisticsLoader=(({children:e})=>{const{statistics:t}=(0,l.useRoot)(),{result:r,executeFilter:o,defaultValues:i}=d();return a.default.createElement(n.Form,{onSubmit:o,onChange:({values:e})=>t.updateFilter(e),defaultValues:i},a.default.createElement(u.Provider,{value:r},e))})},8078:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryLoader=t.useClosureHistory=void 0;var a=r(104),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),l=r(7849),o=r(99),i=r(5799),u=r(7889),d=r(8446);const c=(0,n.createContext)(null);t.useClosureHistory=(()=>(0,n.useContext)(c));t.ClosureHistoryLoader=(({children:e})=>{const{statistics:t}=(0,o.useRoot)(),{result:r,execute:s}=(0,u.useExecutableQuery)(d.ClosureHistoryQuery);return n.default.createElement(l.Form,{onSubmit:e=>{t.closureBranch&&s({branchId:t.closureBranch,dateFrom:(0,i.formatDateISO)(e.dateFrom),dateTo:(0,i.formatDateISO)(e.dateTo)})},defaultValues:{dateFrom:(0,a.subDays)(new Date,1),dateTo:new Date}},n.default.createElement(c.Provider,{value:r},e))})},8079:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureStatisticsFilter=void 0;var a=r(100),n=d(r(0)),l=d(r(51)),o=r(99),i=r(7880),u=r(8080);function d(e){return e&&e.__esModule?e:{default:e}}const c=l.default.div.withConfig({displayName:"ButtonToRight"})`
  float: right;
  margin: 0.5rem;
`,s=(0,a.observer)(({showCurrent:e})=>{const{statistics:t}=(0,o.useRoot)();return n.default.createElement(n.default.Fragment,null,n.default.createElement(i.CompanyBranchPicker,{selectedBranches:t.closureBranch?[t.closureBranch]:[],onSelectionChange:([e])=>t.setClosureBranch(e),onSelectionClear:()=>t.setClosureBranch(null),isClearable:!1}),e&&n.default.createElement(c,null,n.default.createElement(u.ClosureCurrentButton,null)))});t.ClosureStatisticsFilter=s},8080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureCurrentButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(172),o=r(7863),i=r(78),u=r(5794),d=r(52);t.ClosureCurrentButton=(e=>n.default.createElement(o.CanQuery,{queryName:"lastFinancialReport"},n.default.createElement(l.Link,{to:"/overview/closure"},n.default.createElement(u.TouchButton,{text:i.i18n._("Current closure"),color:d.Colors.orange,width:"15rem",height:d.Spacing.ButtonHeight}))))},8081:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StatisticsBranchFilter=void 0;var a,n=r(100),l=(a=r(0))&&a.__esModule?a:{default:a},o=r(99),i=r(7880);t.StatisticsBranchFilter=(()=>{const{statistics:e}=(0,o.useRoot)();return(0,n.useObserver)(()=>l.default.createElement(i.CompanyBranchPicker,{selectedBranches:Array.from(e.branches),onSelectionChange:e.setBranchFilter,onSelectionClear:e.clearBranchFilter,isMulti:!0}))})},8082:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StatisticsFilter=void 0;var a,n=r(130),l=r(100),o=(a=r(0))&&a.__esModule?a:{default:a},i=r(7865),u=r(7860),d=r(8454),c=r(99),s=r(7878);t.StatisticsFilter=(()=>{const{statistics:e}=(0,c.useRoot)();return(0,l.useObserver)(()=>o.default.createElement(u.FlexRowSingle,{justify:"flex-start"},o.default.createElement(i.FlexColumn,{fixedWidth:!0,width:"12rem"},o.default.createElement(d.FormInputDateTime,{field:"dateTimeFrom",label:o.default.createElement(n.Trans,{id:"From"}),autoOk:!0})),o.default.createElement(i.FlexColumn,{fixedWidth:!0,width:"12rem"},o.default.createElement(d.FormInputDateTime,{field:"dateTimeTo",label:o.default.createElement(n.Trans,{id:"To"}),autoOk:!0})),o.default.createElement(i.FlexColumn,null,o.default.createElement(s.FormSubmit,{width:"15rem"},o.default.createElement(n.Trans,{id:"{0, plural, one {Show for one branch} few {Show for # branches} other {Show for # branches}}",values:{0:e.branchesFilter.length}})))))})},8083:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsLoader=t.useDailyStatistics=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(7849),l=r(99),o=r(8084),i=r(8456);const{useStatisticsQuery:u,context:d}=(0,o.createStatisticsQuery)(i.DailyStatisticsQuery);t.useDailyStatistics=(()=>(0,a.useContext)(d));t.DailyStatisticsLoader=(({children:e})=>{const{statistics:t}=(0,l.useRoot)(),{result:r,executeFilter:o,defaultValues:i}=u();return a.default.createElement(n.Form,{onSubmit:o,onChange:({values:e})=>t.updateFilter(e),defaultValues:i},a.default.createElement(d.Provider,{value:r},e))})},8084:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatisticsQuery=function(e){return{context:(0,a.createContext)(i()),useStatisticsQuery:()=>{const{statistics:t}=(0,n.useRoot)(),{result:r,execute:a,reset:i}=(0,o.useExecutableQuery)(e),u={dateTimeFrom:t.dateTimeFrom,dateTimeTo:t.dateTimeTo};return{result:r,executeFilter:()=>{i(),a({branches:t.branchesFilter,dateTimeFrom:(0,l.formatDateISO)(t.dateTimeFrom),dateTimeTo:(0,l.formatDateISO)(t.dateTimeTo)})},resetResult:i,defaultValues:u}}}};var a=r(0),n=r(99),l=r(5799),o=r(7889);const i=()=>({data:null,loading:!1,hasAnyError:!1,wasExecuted:!1})},8443:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryPage=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5798),o=r(78),i=r(5800),u=r(8444),d=r(8445),c=r(8079),s=r(8078);t.ClosureHistoryPage=(e=>n.default.createElement(s.ClosureHistoryLoader,null,n.default.createElement(i.FullPageLayout,{pageTitle:o.i18n._("Closure history"),useBackButton:!0,backRoute:"/overview"},n.default.createElement(l.Card,null,n.default.createElement(c.ClosureStatisticsFilter,{showCurrent:!0}),n.default.createElement(u.ClosureHistoryFilter,null)),n.default.createElement(l.Card,null,n.default.createElement(d.ClosureHistoryTable,null)))))},8444:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryFilter=void 0;var a,n=r(130),l=(a=r(0))&&a.__esModule?a:{default:a},o=r(7865),i=r(7860),u=r(7989),d=r(7878);t.ClosureHistoryFilter=(()=>l.default.createElement(i.FlexRowSingle,{justify:"flex-start"},l.default.createElement(o.FlexColumn,{fixedWidth:!0,width:"12rem"},l.default.createElement(u.FormInputDate,{field:"dateFrom",label:l.default.createElement(n.Trans,{id:"From date"}),autoOk:!0})),l.default.createElement(o.FlexColumn,{fixedWidth:!0,width:"12rem"},l.default.createElement(u.FormInputDate,{field:"dateTo",label:l.default.createElement(n.Trans,{id:"To date"}),autoOk:!0})),l.default.createElement(o.FlexColumn,null,l.default.createElement(d.FormSubmit,{width:"15rem"},l.default.createElement(n.Trans,{id:"Show history for branch"})))))},8445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryTable=void 0;var a,n=r(130),l=r(131),o=r(100),i=(a=r(0))&&a.__esModule?a:{default:a},u=r(7865),d=r(7990),c=r(7857),s=r(5807),f=r(7907),m=r(99),p=r(5799),y=r(5794),v=r(52),h=r(8078);const g=(0,o.observer)(()=>{const{data:e,loading:t,wasExecuted:r}=(0,h.useClosureHistory)(),{statistics:a}=(0,m.useRoot)();return r?t?i.default.createElement(c.Headline,null,i.default.createElement(s.Loading,null)):a.closureBranch?e&&0===e.financialReports.length?i.default.createElement(c.Headline,null,i.default.createElement(n.Trans,{id:"No closures found"})):i.default.createElement(i.default.Fragment,null,e&&e.financialReports.map(e=>i.default.createElement(d.FlexRow,{key:e.id},i.default.createElement(u.FlexColumn,{fixedWidth:!0},i.default.createElement(f.RelativeLink,{to:`../${e.id}`},i.default.createElement(y.TouchButton,{iconName:"mode_edit",width:v.Spacing.ButtonHeight,height:v.Spacing.ButtonHeight}))),i.default.createElement(u.FlexColumn,{widthGrowIndex:1},`[${e.reportSequence}] ${(0,p.formatDateISO)(e.reportDatetime)}`)))):i.default.createElement(c.Headline,null,i.default.createElement(n.Trans,{id:"Select a branch"})):i.default.createElement(l.Typography,{variant:"subheading"},i.default.createElement("em",null,i.default.createElement(n.Trans,{id:"Use the filter"})))});t.ClosureHistoryTable=g},8446:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryQuery=void 0;const n=((a=r(23))&&a.__esModule?a:{default:a}).default`
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
`;t.ClosureHistoryQuery=n},8447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosurePage=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5798),o=r(78),i=r(5800),u=r(8079),d=r(8448),c=r(8450);t.ClosurePage=(({match:e})=>n.default.createElement(i.FullPageLayout,{pageTitle:o.i18n._("Closure"),useBackButton:!0,backRoute:"/overview"},n.default.createElement(l.Card,null,n.default.createElement(u.ClosureStatisticsFilter,{showCurrent:!1}),n.default.createElement(c.ClosureStatisticsControl,{showCurrent:Boolean(e.params.reportId)})),n.default.createElement(d.ClosureStatisticsContent,{reportId:e.params.reportId})))},8448:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureStatisticsContent=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7991),o=r(103),i=r(78),u=r(8449);t.ClosureStatisticsContent=(({reportId:e=""})=>n.default.createElement(o.WithRoot,{render:({statistics:t})=>t.closureBranch?n.default.createElement(u.QueryFinancialReport,{variables:{branchId:t.closureBranch,reportId:e,showReport:Boolean(e)},fetchPolicy:"cache-and-network",renderLoading:!1,render:({report:t,lastReport:r},{loading:a})=>a?n.default.createElement(l.MonospaceOutput,{text:i.i18n._("Computing")}):n.default.createElement(l.MonospaceOutput,{text:e?t.plainData:r.plainData})}):null}))},8449:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryFinancialReport=t.FinancialReport=void 0;var a,n=(a=r(23))&&a.__esModule?a:{default:a},l=r(79);const o=n.default`
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
`;t.FinancialReport=o;const i=(0,l.buildQuery)(o);t.QueryFinancialReport=i},8450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureStatisticsControl=void 0;var a=r(100),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),l=y(r(51)),o=r(99),i=r(7874),u=y(r(7872)),d=r(7870),c=r(78),s=r(8080),f=r(8451),m=r(8452),p=r(5849);function y(e){return e&&e.__esModule?e:{default:e}}var v=function(e,t,r,a){return new(r||(r=Promise))(function(n,l){function o(e){try{u(a.next(e))}catch(t){l(t)}}function i(e){try{u(a.throw(e))}catch(t){l(t)}}function u(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(o,i)}u((a=a.apply(e,t||[])).next())})};const h=l.default.div.withConfig({displayName:"ButtonToRight"})`
  float: right;
`;t.ClosureStatisticsControl=(({showCurrent:e})=>{const{statistics:t}=(0,o.useRoot)(),{enqueueSuccess:r}=(0,d.useSnackBar)(),{history:l}=(0,u.default)(),y=(0,i.useGuardedMutation)(p.CreateFinancialReport),g=(0,n.useCallback)(()=>v(void 0,void 0,void 0,function*(){if(!t.closureBranch)return;const e=yield y({companyBranchId:t.closureBranch});if(e){const{id:t}=e.result;l.push(`/overview/closure/${t}`),r(c.i18n._("Closure has been created"))}}),[]);return(0,a.useObserver)(()=>n.default.createElement(n.default.Fragment,null,e?n.default.createElement(s.ClosureCurrentButton,null):n.default.createElement(m.ClosureSubmitButton,{onClick:g,disabled:!t.closureBranch}),n.default.createElement(h,null,n.default.createElement(f.ClosureHistoryButton,null))))})},8451:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureHistoryButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(172),o=r(7863),i=r(78),u=r(5794),d=r(52);t.ClosureHistoryButton=(e=>n.default.createElement(o.CanQuery,{queryName:"financialReports"},n.default.createElement(l.Link,{to:"/overview/closure/history"},n.default.createElement(u.TouchButton,{text:i.i18n._("Closure history"),color:d.Colors.greyDark,width:"15rem",height:d.Spacing.ButtonHeight}))))},8452:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureSubmitButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(7851),o=r(78),i=r(5794),u=r(52);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.ClosureSubmitButton=(e=>n.default.createElement(l.CanMutate,{mutationName:"createFinancialReport"},n.default.createElement(i.TouchButton,d({text:o.i18n._("Create closure"),color:u.Colors.green,width:"12rem"},e))))},8453:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsPage=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5798),o=r(78),i=r(5800),u=r(8081),d=r(8082),c=r(8455),s=r(8083);t.DailyStatisticsPage=(()=>n.default.createElement(i.FullPageLayout,{pageTitle:o.i18n._("Sales statistics"),useBackButton:!0},n.default.createElement(s.DailyStatisticsLoader,null,n.default.createElement(l.Card,null,n.default.createElement(u.StatisticsBranchFilter,null),n.default.createElement(d.StatisticsFilter,null)),n.default.createElement(c.DailyStatisticsContent,null))))},8454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputDateTime=void 0;var a,n=r(7892),l=(a=r(0))&&a.__esModule?a:{default:a},o=r(7849),i=r(78),u=r(7906);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.FormInputDateTime=(e=>{var{field:t}=e,r=c(e,["field"]);return l.default.createElement(u.DateTimeFormatProvider,null,l.default.createElement(o.Field,{field:t,render:e=>l.default.createElement(n.InlineDateTimePicker,d({value:e.value,onChange:t=>e.setValue(t),onOpen:()=>e.setTouched(!0),format:"lll",ampm:!1,showTabs:!1,maxDateMessage:i.i18n._("Date is too much in the future"),minDateMessage:i.i18n._("Date is too much in the past")},r))}))})},8455:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsContent=void 0;var a,n=r(130),l=r(100),o=(a=r(0))&&a.__esModule?a:{default:a},i=r(7857),u=r(7991),d=r(78),c=r(8083);const s=(0,l.observer)(()=>{const{data:e,loading:t}=(0,c.useDailyStatistics)();if(!e)return null;if(t)return o.default.createElement(u.MonospaceOutput,{text:d.i18n._("Computing")});const{stats:r}=e;return o.default.createElement(o.default.Fragment,null,o.default.createElement(i.Headline,{light:!0},o.default.createElement(n.Trans,{id:"Daily statistics"})),o.default.createElement(u.MonospaceOutput,{text:r.dailyStatisticsPlain}),o.default.createElement(i.Headline,{light:!0},o.default.createElement(n.Trans,{id:"By category"})),o.default.createElement(u.MonospaceOutput,{text:r.categoryStatisticsPlain}),o.default.createElement(i.Headline,{light:!0},o.default.createElement(n.Trans,{id:"By type"})),o.default.createElement(u.MonospaceOutput,{text:r.deliveryStatisticsPlain}),o.default.createElement(i.Headline,{light:!0},o.default.createElement(n.Trans,{id:"By driver"})),o.default.createElement(u.MonospaceOutput,{text:r.driversStatisticsPlain}))});t.DailyStatisticsContent=s},8456:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsQuery=void 0;const n=((a=r(23))&&a.__esModule?a:{default:a}).default`
  query GDailyStatistics(
    $branches: [ID!]!
    $dateTimeFrom: DateTime!
    $dateTimeTo: DateTime!
  ) {
    stats: statistics(
      branches: $branches
      dateTimeFrom: $dateTimeFrom
      dateTimeTo: $dateTimeTo
    ) {
      categoryStatisticsPlain
      dailyStatisticsPlain
      deliveryStatisticsPlain
      driversStatisticsPlain
    }
  }
`;t.DailyStatisticsQuery=n},8457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsPage=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5798),o=r(7949),i=r(78),u=r(5803),d=r(7861),c=r(8081),s=r(8082),f=r(8458),m=r(7992),p=r(8461);t.OrdersStatisticsPage=(e=>n.default.createElement(m.OrdersStatisticsLoader,null,n.default.createElement(d.PageLayoutFullHeightItem,{withScrollArea:!1,row:1,column:7,widthInColumns:9},n.default.createElement(o.AutoHeight,null,n.default.createElement(f.OrdersStatisticsList,null))),n.default.createElement(u.PageLayout,{layouts:[{i:"summary",x:0,y:1,w:7,h:1}],pageTitle:i.i18n._("Orders statistics"),showSoundControl:!1,scrollPageTitle:!1,useBackButton:!0},n.default.createElement("div",{key:"summary"},n.default.createElement(l.Card,null,n.default.createElement(c.StatisticsBranchFilter,null),n.default.createElement(s.StatisticsFilter,null)),n.default.createElement(p.OrdersStatisticsSummary,null)))))},8458:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsList=void 0;var a=r(130),n=r(100),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),o=r(280),i=r(8005),u=r(7890),d=r(99),c=r(5799),s=r(7962),f=r(8459),m=r(7992);var p=function(e,t,r,a){return new(r||(r=Promise))(function(n,l){function o(e){try{u(a.next(e))}catch(t){l(t)}}function i(e){try{u(a.throw(e))}catch(t){l(t)}}function u(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(o,i)}u((a=a.apply(e,t||[])).next())})};const y=(0,n.observer)(()=>{const{statistics:e,order:t}=(0,d.useRoot)(),{data:r,wasExecuted:n}=(0,m.useOrderStatistics)(),y=(0,l.useRef)(null),v=(0,l.useRef)(new Map),h=(0,l.useMemo)(()=>new i.CellMeasurerCache({fixedWidth:!0,defaultHeight:55,minHeight:55}),[]);(0,l.useEffect)(()=>{!1===n&&(v.current.clear(),h.clearAll(),y.current&&y.current.resetLoadMoreRowsCache(!0))},[n]);const g=(0,o.useApolloClient)(),O=({startIndex:t,stopIndex:r})=>p(void 0,void 0,void 0,function*(){const a=[...(yield g.query({query:f.OrdersStatisticsListQuery,variables:{branches:e.branchesFilter,dateTimeFrom:(0,c.formatDateISO)(e.dateTimeFrom),dateTimeTo:(0,c.formatDateISO)(e.dateTimeTo),pagination:{fromIndex:t,toIndex:r}}})).data.stats.orders.list];for(let e=t;e<=r;e++)v.current.set(e,a.shift())});let b=0;if(r&&r.stats){const{finishedCount:e,cancelledCount:t}=r.stats.finishedOrders;b=e+t}return l.default.createElement(i.AutoSizer,null,({width:r,height:o})=>l.default.createElement(i.InfiniteLoader,{rowCount:b,isRowLoaded:({index:e})=>v.current.has(e),loadMoreRows:O,ref:y},({onRowsRendered:d,registerChild:c})=>l.default.createElement(i.List,{ref:c,onRowsRendered:d,rowHeight:h.rowHeight,deferredMeasurementCache:h,rowCount:b,width:r,height:o,noRowsRenderer:()=>l.default.createElement(u.CardListTitle,null,n?l.default.createElement(a.Trans,{id:"No orders"}):null),rowRenderer:({index:r,key:a,style:n,parent:o})=>{const u=v.current.get(r);return u?l.default.createElement(i.CellMeasurer,{key:a,columnIndex:0,rowIndex:r,cache:h,parent:o},({measure:r})=>l.default.createElement("div",{style:n},l.default.createElement(s.OrderBox,{order:u,toggleOrderDetail:e=>{t.list.toggleOrderDetail(e),setTimeout(r,500)},isOrderDetailOpen:t.list.isOrderDetailOpen,showBranch:e.branchesFilter.length>1}))):l.default.createElement("div",{style:n,key:a},"...")}})))});t.OrdersStatisticsList=y},8459:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsListQuery=void 0;var a,n=(a=r(23))&&a.__esModule?a:{default:a},l=r(7951),o=r(5805);const i=n.default`
  query GOrdersStatisticsList(
    $branches: [ID!]!
    $dateTimeFrom: DateTime!
    $dateTimeTo: DateTime!
    $pagination: InputPaginationParams!
  ) {
    stats: statistics(
      branches: $branches
      dateTimeFrom: $dateTimeFrom
      dateTimeTo: $dateTimeTo
    ) {
      orders: finishedOrders {
        list: orders(includeCanceled: true, pagination: $pagination) {
          ...GOrderListTicker
          ...GOrderStateCategory
        }
      }
    }
  }

  ${l.OrderTickerFragment}
  ${o.OrderStateCategoryFragment}
`;t.OrdersStatisticsListQuery=i},8460:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsQuery=void 0;const n=((a=r(23))&&a.__esModule?a:{default:a}).default`
  query GOrdersStatistics(
    $branches: [ID!]!
    $dateTimeFrom: DateTime!
    $dateTimeTo: DateTime!
  ) {
    stats: statistics(
      branches: $branches
      dateTimeFrom: $dateTimeFrom
      dateTimeTo: $dateTimeTo
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
        finishedCount: ordersCount
        cancelledCount: ordersCanceledCount
      }
      orderStatisticsPlain
    }
  }

  fragment GStatsPrice on PriceConverted {
    value
    currency {
      code
    }
  }
`;t.OrdersStatisticsQuery=n},8461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsSummary=void 0;var a=r(130),n=r(100),l=c(r(0)),o=c(r(51)),i=r(7991),u=r(7867),d=r(7992);function c(e){return e&&e.__esModule?e:{default:e}}const s=o.default.div.withConfig({displayName:"StatPanel"})`
  margin: 1.4rem 4rem 0 0.5rem;
  display: inline-block;
`,f=o.default.h1.withConfig({displayName:"StatLabel"})`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
`,m=o.default.h2.withConfig({displayName:"StatValue"})`
  font-size: 4rem;
  font-weight: normal;
  margin: 0;
`,p=(0,n.observer)(()=>{const{loading:e,data:t}=(0,d.useOrderStatistics)();if(e||!t)return null;const r=t.stats.finishedOrders;return l.default.createElement(l.default.Fragment,null,l.default.createElement(s,null,l.default.createElement(f,null,l.default.createElement(a.Trans,{id:"Total turnover"})),l.default.createElement(m,null,l.default.createElement(u.Price,{price:r.total.value,currencyCode:r.total.currency.code}))),l.default.createElement(s,null,l.default.createElement(f,null,l.default.createElement(a.Trans,{id:"Online payments"})),l.default.createElement(m,null,l.default.createElement(u.Price,{price:r.onlinePayments.value,currencyCode:r.onlinePayments.currency.code}))),l.default.createElement(s,null,l.default.createElement(f,null,l.default.createElement(a.Trans,{id:"Orders count"})),l.default.createElement(m,null,r.finishedCount+r.cancelledCount)),l.default.createElement(s,null,l.default.createElement(f,null,l.default.createElement(a.Trans,{id:"Total commissions"})),l.default.createElement(m,null,l.default.createElement(u.Price,{price:r.fees.value,currencyCode:r.fees.currency.code}))),l.default.createElement(s,null,l.default.createElement(i.MonospaceOutput,{text:t.stats.orderStatisticsPlain})))});t.OrdersStatisticsSummary=p},8462:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OverviewPage=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(5803),o=r(7903),i=r(8463),u=r(8464),d=r(8465);t.OverviewPage=(e=>n.default.createElement(l.PageLayout,{layouts:[{i:"OrdersStatistics",x:0,y:1,w:2,h:2},{i:"DailyStatistics",x:2,y:1,w:2,h:2},{i:"Closure",x:4,y:1,w:2,h:2}]},n.default.createElement(o.PageLayoutItem,{key:"OrdersStatistics",route:"/overview/orders",component:d.OrdersStatisticsButton,canQuery:"statistics"}),n.default.createElement(o.PageLayoutItem,{key:"DailyStatistics",route:"/overview/statistics",component:u.DailyStatisticsButton,canQuery:"statistics"}),n.default.createElement(o.PageLayoutItem,{key:"Closure",route:"/overview/closure",component:i.ClosureButton,canQuery:"lastFinancialReport"})))},8463:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClosureButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(78),o=r(5794),i=r(52);t.ClosureButton=(e=>n.default.createElement(o.TouchButton,{text:l.i18n._("Closure"),iconName:"assignment",color:i.Colors.turquoise}))},8464:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DailyStatisticsButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(78),o=r(5794),i=r(52);t.DailyStatisticsButton=(e=>n.default.createElement(o.TouchButton,{text:l.i18n._("Sales statistics"),iconName:"assignment",color:i.Colors.turquoise}))},8465:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrdersStatisticsButton=void 0;var a,n=(a=r(0))&&a.__esModule?a:{default:a},l=r(78),o=r(5794),i=r(52);t.OrdersStatisticsButton=(e=>n.default.createElement(o.TouchButton,{text:l.i18n._("Orders statistics"),iconName:"assignment",color:i.Colors.turquoise}))}}]);
//# sourceMappingURL=175.9fd79e43.chunk.js.map