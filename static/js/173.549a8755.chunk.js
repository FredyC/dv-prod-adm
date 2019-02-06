(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{7843:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.OrderRoutes=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(25),o=r(282),l=r(284),d=r(8186),u=r(8245),s=r(8396);const c=({match:e})=>i.default.createElement(a.Switch,null,i.default.createElement(l.SecureRoute,{exact:!0,path:e.path,component:s.OrderOverviewPage}),i.default.createElement(l.SecureRoute,{path:`${e.path}/create`,component:d.CreateOrderRoutes}),i.default.createElement(l.SecureRoute,{path:`${e.path}/map`,component:u.OrderMapPage}),i.default.createElement(a.Route,{component:o.NotFoundPage}));t.OrderRoutes=c;var f=c;t.default=f},7850:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconLine=void 0;var n=l(r(0)),i=l(r(51)),a=r(52),o=r(173);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const u=i.default.div.withConfig({displayName:"IconLineWrap"})`
  display: flex;
`;u.displayName="IconLineWrap";const s=i.default.div.withConfig({displayName:"DescriptionContainer"})`
  margin: ${({labelMargin:e="0.5rem 0.2rem 0 auto"})=>e};
  min-width: ${({labelWidth:e=0,labelWidthUnits:t=a.Spacing.DefaultSizeUnit})=>e+t};
  flex: 0 0 auto;
  text-align: right;
`,c=i.default.div.withConfig({displayName:"IconLineChildren"})`
  margin-left: 0.5rem;
  align-self: stretch;
  flex: 1 1 auto;
`,f=i.default.div.withConfig({displayName:"LabelStyled"})`
  padding-top: 0.2rem;
  display: inline-block;
`;c.displayName="IconLineChildren";t.IconLine=(e=>{var{icon:t,label:r,labelWidth:i,labelWidthUnits:l,labelMargin:m,children:p}=e,v=d(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);let h;return t&&(h="string"===typeof t?n.default.createElement(o.Icon,{iconName:t,color:a.Colors.greyDark}):n.default.createElement(t,{nativeColor:a.Colors.greyDark})),n.default.createElement(u,v,n.default.createElement(s,{labelWidth:i,labelWidthUnits:l,labelMargin:m},h,r?n.default.createElement(f,null,r):null),n.default.createElement(c,null,p))})},7851:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanMutate=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7862),o=r(99);t.CanMutate=(({mutationName:e,children:t})=>{const{user:r}=(0,o.useRoot)();return r.canMutate(e)?i.default.createElement(i.default.Fragment,null,t):i.default.createElement(a.NoAccess,null,`No access to mutation ${e}`)})},7854:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputTextBox=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7849),o=r(7871),l=r(78),d=r(7859);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const c=i.default.forwardRef((e,t)=>{var{field:r,inputFullWidth:n=!1,isRequired:c,validatioName:f,validationMessage:m,validate:p}=e,v=s(e,["field","inputFullWidth","isRequired","validatioName","validationMessage","validate"]);return i.default.createElement(a.Field,{field:r,validate:p||(e=>c&&(0,o.isEmpty)(e+"")?m||l.i18n._("{validatioName} is required",{validatioName:f}):null)},e=>i.default.createElement(d.FormInputStyled,u({value:e.value||0===e.value?e.value:"",onChange:t=>{e.setTouched(!0),e.setValue(t.target.value)},inputFullWidth:n,invalid:Boolean(e.error),ref:t},v)))});t.FormInputTextBox=c},7855:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectControl=function(e){return n.default.createElement(i.default,l({},e,{styles:d(e.styles)}))},t.composeSelectControlStyles=void 0;var n=o(r(0)),i=o(r(7898)),a=r(52);function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const d=(e={})=>Object.assign({},e,{control:(t,r)=>{const{selectProps:{width:n,minWidth:i}}=r,o=Object.assign({},t,{border:`1px solid ${a.Colors.greyMiddle}`,margin:a.Spacing.MarginAroundFormComponents,width:void 0!==n?`${n}rem`:"100%",minWidth:void 0!==i?`${i}rem`:"8rem"});return e.control?e.control(o,r):o},menu:(t,r)=>{const{selectProps:{width:n}}=r,i=Object.assign({},t,{zIndex:20,color:a.Colors.black,width:void 0!==n?`${n}rem`:"100%"});return e.menu?e.menu(i,r):i}});t.composeSelectControlStyles=d},7858:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sizer=void 0;var n=l(r(0)),i=l(r(51)),a=r(52),o=r(7895);function l(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const s=(0,i.default)("div").withConfig({displayName:"SizerContainer"})`
  ${({width:e,widthUnit:t=a.Spacing.DefaultSizeUnit})=>void 0===e?"":`width: ${e}${t}`};
  ${({height:e,heightUnit:t=a.Spacing.DefaultSizeUnit})=>void 0===e?"":`height: ${e}${t}`};
`;t.Sizer=(e=>{var{width:t,widthUnit:r=a.Spacing.DefaultSizeUnit,height:i,heightUnit:l=a.Spacing.DefaultSizeUnit,margin:c,children:f,className:m}=e,p=u(e,["width","widthUnit","height","heightUnit","margin","children","className"]);const v=n.default.createElement(s,d({width:t,widthUnit:r,height:i,heightUnit:l,className:m},p),f);return void 0===c?v:n.default.createElement(o.MarginBox,{margin:c},v)})},7859:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputStyled=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(51)),i=r(52);const a=n.css`
  border: 1px red solid;
`,o=n.css`
  width: 100%;
`,l=n.default.input.withConfig({displayName:"FormInputStyled"})`
  margin: ${i.Spacing.MarginAroundFormComponents};
  ${({inputFullWidth:e})=>e&&o};
  ${({invalid:e})=>e&&a};
`;t.FormInputStyled=l},7860:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.FlexRowSingle=void 0;const i=((n=r(51))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`;t.FlexRowSingle=i},7861:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayoutFullHeightItem=void 0;var n=l(r(0)),i=l(r(51)),a=r(7873),o=r(52);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+o.Spacing.LayoutGridCellMargin+")":"calc(100vh - (2 * "+o.Spacing.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+o.Spacing.LayoutGridCellMargin+")":o.Spacing.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+o.Spacing.LayoutGridCellMargin+")":"calc(3.9375rem + "+o.Spacing.LayoutGridCellMargin+")")()};
`,u=i.default.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`;t.PageLayoutFullHeightItem=(({children:e,row:t=1,column:r=0,widthInColumns:i=16,withScrollArea:o=!1,scrollAreaId:l})=>n.default.createElement(d,{column:r,row:t,widthInColumns:i,withScrollArea:o},o?n.default.createElement(a.ScrollArea,{id:l},e):n.default.createElement(u,null,e)))},7862:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoAccess=void 0;var n;r(131),r(279),(n=r(0))&&n.__esModule;t.NoAccess=(({children:e})=>null)},7863:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanQuery=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7862),o=r(99);t.CanQuery=(({queryName:e,children:t})=>{const{user:r}=(0,o.useRoot)();return r.canQuery(e)?i.default.createElement(i.default.Fragment,null,t):i.default.createElement(a.NoAccess,null,`No access to query ${e}`)})},7866:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.VerticalGap=void 0;const i=((n=r(51))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"VerticalGap"})`
  height: ${({size:e=1,sizeUnit:t="rem"})=>`${e}${t}`};
`;t.VerticalGap=i,i.displayName="VerticalGap"},7867:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Price=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(5799);t.Price=(({price:e,currencyCode:t,className:r})=>i.default.createElement("span",{className:r},t?`${(0,a.formatPrice)(e)} ${t}`:(0,a.formatPrice)(e)))},7868:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalSeparator=void 0;var n=o(r(0)),i=o(r(51)),a=r(52);function o(e){return e&&e.__esModule?e:{default:e}}const l=i.default.div.withConfig({displayName:"HorizontalSeparatorStyled"})`
  border-top: 1px solid ${a.Colors.greyLight};
  margin: 0.25rem 0rem;
`;t.HorizontalSeparator=(({visible:e=!0})=>e?n.default.createElement(l,null):null)},7870:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSnackBar=function(){const e=(0,a.useContext)(i.SnackbarContextNext),t=(0,a.useCallback)(t=>e(t,o),[]),r=(0,a.useCallback)(t=>e(t,l),[]),n=(0,a.useCallback)(t=>e(t,d),[]),s=(0,a.useCallback)(t=>e(t,u),[]);return{enqueueSnackbar:e,enqueueSuccess:t,enqueueError:r,enqueueWarning:n,enqueueInfo:s}};var n,i=r(286),a=r(0);!function(e){e.default="default",e.error="error",e.success="success",e.warning="warning",e.info="info"}(n||(n={}));const o={variant:n.success},l={variant:n.error},d={variant:n.warning},u={variant:n.info}},7872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,n.useContext)(i.__RouterContext)};var n=r(0),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(25))},7873:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollArea=void 0;const i=((n=r(51))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`;t.ScrollArea=i},7874:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useGuardedMutation=function(e,t={}){const r=c.i18n._("Unexpected error occured while sending a request. Our team was notified about the issue."),{enqueueSnackbar:n,enqueueError:i,enqueueWarning:o}=(0,m.useSnackBar)(),f=(0,l.useCallback)(e=>{e.forEach(o)},[]),h=(0,l.useCallback)(e=>{const t=e.filter(u.RM.propEq("showToUser",!0));0===t.length?i(r):f(t.map(u.RM.prop("message")))},[]),y=(0,l.useCallback)(e=>{if((0,a.isApolloError)(e)){if(e.networkError)return void i(c.i18n._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void h(e.graphQLErrors)}(0,s.reportError)(e),n(r,{action:[l.default.createElement(v,{key:"feedback"})]})},[]),g=(0,d.useMutation)(e,t);return e=>p(this,void 0,void 0,function*(){try{const n=yield g({variables:e});if(n.errors)return h(n.errors),null;if(!n.data)return null;const i=n.data;if(t.getUserErrors){const e=t.getUserErrors(i);null!==e&&f(e)}return i}catch(r){return y(r),null}})};var n,i=r(130),a=r(35),o=(n=r(5817))&&n.__esModule?n:{default:n},l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),d=r(280),u=r(53),s=r(101),c=r(78),f=r(5794),m=r(7870);var p=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})};function v(){return l.default.createElement(f.TouchButton,{onClick:()=>o.default.showReportDialog()},l.default.createElement(i.Trans,{id:"Submit feedback"}))}},7875:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.CardDock=void 0;const i=(0,((n=r(51))&&n.__esModule?n:{default:n}).default)("div").withConfig({displayName:"CardDock"})`
  position: absolute;
  ${({position:e="BottomRight"})=>"BottomLeft"===e||"TopLeft"===e?"left: 0":"right: 0"};
  ${({position:e="BottomRight"})=>"BottomRight"===e||"BottomLeft"===e?"bottom: 0":"top: 0"};
`;t.CardDock=i},7876:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectControlFlat=void 0;var n,i=r(130),a=(n=r(0))&&n.__esModule?n:{default:n},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(51)),l=r(53);const d=o.default.div.withConfig({displayName:"ItemStyled"})`
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
`;class s extends a.default.Component{hasSelection(){const{isMulti:e,selectedItem:t,selectedItems:r}=this.props;return e?Array.isArray(r)&&r.length>0:null!=t}isItemSelected(e){const{isMulti:t,selectedItem:r,selectedItems:n}=this.props;return t&&Array.isArray(n)?l.RM.contains(e,n):l.RM.equals(r,e)}updateSelection(e){const{isMulti:t,selectedItems:r=[],onSingleSelection:n,onMultiSelection:i}=this.props;null===e?t&&i?i([]):n&&n(null):t&&i?this.isItemSelected(e)?i(Array.isArray(r)?l.RM.without([e],r):[e]):i(Array.isArray(r)?l.RM.concat(r,[e]):[]):n&&n(e)}render(){const{items:e,isClearable:t,isInvalid:r=!1,textColor:n="inherit",formatItem:o}=this.props;return a.default.createElement(u,{isInvalid:r},t&&a.default.createElement(d,{isSelected:!this.hasSelection(),textColor:n,onClick:()=>{this.updateSelection(null)}},a.default.createElement(i.Trans,{id:"optionselector.clear-filter"})),e.map((e,t)=>a.default.createElement(d,{key:t,isSelected:this.isItemSelected(e),textColor:n,onClick:()=>{this.updateSelection(e)}},o(e))))}}t.SelectControlFlat=s,s.defaultProps={formatItem:l.RM.prop("displayName"),getItemValue:l.RM.prop("id")}},7881:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchPicker=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(99),o=r(53),l=r(7888),d=r(7899);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.CompanyBranchPicker=(({breakpoint:e=3,selectedBranches:t=[],isMulti:r=!1,isClearable:n=!0,textColor:s,onSelectionChange:c,onSelectionClear:f,getDropdownProps:m=(()=>({}))})=>{const{user:p}=(0,a.useRoot)(),v=e=>t.includes(e.id),h={textColor:s,isClearable:n,isMulti:r,branches:p.branches,selectedBranch:p.branches.find(v),selectedBranches:p.branches.filter(v),onSingleSelection(e){null===e&&f?f():null!==e&&c&&c([e.id],[e])},onMultiSelection(e){0===e.length&&f?f():e.length&&c&&c(e.map(o.RM.prop("id")),e)}};return p.branches.length<e?i.default.createElement(d.CompanyBranchFlatSelect,h):i.default.createElement(l.CompanyBranchDropdown,u({},h,m()))})},7887:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TouchButtonDelete=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(52),o=r(5794);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};t.TouchButtonDelete=(e=>{var{onDelete:t,confirmText:r}=e,n=d(e,["onDelete","confirmText"]);return i.default.createElement(o.TouchButton,l({iconName:"delete",color:a.Colors.greyMiddle,width:a.Spacing.ButtonHeight,height:a.Spacing.ButtonHeight,onClick:e=>{e.preventDefault(),r&&!window.confirm(r)||t()}},n))})},7888:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchDropdown=void 0;var n,i=r(130),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7896),l=r(7855),d=r(53),u=r(78);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const f=e=>{const{getStyles:t}=e,r=e.innerProps,{ref:n}=r,o=c(r,["ref"]);return a.default.createElement("div",s({},o,{ref:n,style:t("clearIndicator",e)}),a.default.createElement("div",{style:{padding:"0px 5px"}},a.default.createElement(i.Trans,{id:"All"})))};t.CompanyBranchDropdown=(e=>{var{branches:t,selectedBranch:r,onSingleSelection:n,selectedBranches:i,onMultiSelection:m}=e,p=c(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return a.default.createElement(l.SelectControl,s({value:p.isMulti?i:r,placeholder:p.isMulti?u.i18n._("Filter branches..."):u.i18n._("Select a branch"),options:t,getOptionValue:d.RM.prop("id"),formatOptionLabel:e=>a.default.createElement(o.CompanyBranch,{branch:e}),filterOption:(e,t)=>e.data.name.toLocaleLowerCase().includes(t.toLocaleLowerCase()),closeMenuOnSelect:!p.isMulti,components:{ClearIndicator:f},styles:{clearIndicator:e=>Object.assign({},e,{cursor:"pointer"})},onChange:e=>{p.isMulti&&m&&Array.isArray(e)&&m(e),!p.isMulti&&n&&(Array.isArray(e)?n(d.RM.head(e)||null):n(e||null))}},p))})},7889:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useExecutableQuery=function(e,t={}){const r=(0,l.useApolloClient)(),s=(0,o.useObservable)({data:null,loading:!1,wasExecuted:!1,get hasAnyError(){return Boolean(s.errors&&s.errors.length||s.error)}});return{result:s,execute:o=>u(this,void 0,void 0,function*(){s.loading=!0;try{const i=yield r.query(Object.assign({},t,{query:e,variables:o}));(0,a.runInAction)(()=>{s.wasExecuted=!0,s.data=i.data,s.errors=i.errors,s.loading=!1})}catch(l){(0,n.isApolloError)(l)?(0,a.runInAction)(()=>{s.error=l,s.errors=l.graphQLErrors,s.loading=!1}):((0,a.runInAction)(()=>{s.error=l,s.loading=!1}),(0,d.reportError)(l))}return s.errors&&(0,d.reportFailingQuery)(s.errors,{query:(0,i.getOperationName)(e),variables:o}),s}),reset:()=>{(0,a.runInAction)(()=>{s.wasExecuted=!1,s.data=null,s.error=void 0,s.errors=void 0,s.loading=!1})}}};var n=r(35),i=r(32),a=r(11),o=r(100),l=r(280),d=r(101),u=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})}},7890:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardListTitle=void 0;var n,i=(n=r(51))&&n.__esModule?n:{default:n},a=r(52);const o=i.default.h2.withConfig({displayName:"CardListTitle"})`
  color: ${a.Colors.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`;t.CardListTitle=o},7893:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TouchButtonBadge=void 0;var n,i=(n=r(51))&&n.__esModule?n:{default:n},a=r(52);const o=i.default.div.withConfig({displayName:"TouchButtonBadge"})`
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
`;t.TouchButtonBadge=o},7894:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryTimeDialog=void 0;var n=r(130),i=r(131),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=r(7946),l=r(5794);t.DeliveryTimeDialog=(({title:e,onConfirm:t,onCancel:r,children:d,cancelText:u,refApi:s})=>{const[c,f]=(0,a.useState)(!1),m=()=>f(!0),p=()=>f(!1);return s&&(s.current={openDialog:m,closeDialog:p}),a.default.createElement(a.default.Fragment,null,d&&d({openDialog:m,closeDialog:p}),a.default.createElement(i.Dialog,{open:c,onClose:p},a.default.createElement(i.DialogTitle,null,e),a.default.createElement(i.DialogContent,null,a.default.createElement(o.DeliveryMinutes,{onMinuteClick:e=>{p(),t(e)}})),a.default.createElement(i.DialogActions,null,a.default.createElement(l.TouchButton,{onClick:()=>{p(),r&&r()}},u||a.default.createElement(n.Trans,{id:"Cancel"})))))})},7895:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.MarginBox=void 0;const i=(0,((n=r(51))&&n.__esModule?n:{default:n}).default)("div").withConfig({displayName:"MarginBox"})`
  margin: ${e=>e.margin};
`;t.MarginBox=i},7896:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranch=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7897);t.CompanyBranch=(({branch:e,onClick:t,short:r=!1,showBrand:n=!0})=>i.default.createElement(a.CursorContainer,{cursor:"pointer",onClick:t},r?e.name.substr(0,8):i.default.createElement(i.default.Fragment,null,i.default.createElement("span",null,e.name),n&&i.default.createElement("span",null,` [${e.brand.name}]`))))},7897:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.CursorContainer=void 0;const i=((n=r(51))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"CursorContainer"})`
  cursor: ${({cursor:e="default"})=>e};
`;t.CursorContainer=i},7899:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchFlatSelect=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7876),o=r(52);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};t.CompanyBranchFlatSelect=(e=>{var{branches:t,selectedBranch:r,selectedBranches:n,textColor:u=o.Colors.black}=e,s=d(e,["branches","selectedBranch","selectedBranches","textColor"]);return i.default.createElement(a.SelectControlFlat,l({items:t,selectedItem:r,selectedItems:n,textColor:u,formatItem:e=>i.default.createElement("span",{title:e.brand.name},e.name)},s))})},7900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isPartialMatch=function(e){const t=e.toLocaleLowerCase();return e=>e.toLocaleLowerCase().includes(t)}},7901:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMapModel=function(){const e=(0,o.useContext)(m);if(!e)throw new Error("Trying to useMapModel, but BaseMap is missing in the tree");return e},t.useGoogleMap=function(){const e=(0,o.useContext)(p);if(!e)throw new Error("Trying to useGoogleMap, but BaseMap is missing in the tree");return e},t.BaseMap=void 0;var n,i=r(5808),a=r(5),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),l=r(7882),d=r(7853),u=(n=r(51))&&n.__esModule?n:{default:n},s=r(52);const c=u.default.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: ${s.Radiuses.Card};
  overflow: hidden;
  height: 100%;
`,f=(0,l.withGoogleMap)(({children:e})=>o.default.createElement(o.default.Fragment,null,e)),m=o.default.createContext(null),p=o.default.createContext(null);t.BaseMap=(({model:e,children:t})=>{const r={streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1};return o.default.createElement(m.Provider,{value:e},o.default.createElement(f,{containerElement:o.default.createElement(c,null),mapElement:o.default.createElement("div",{style:{height:"100%"}})},o.default.createElement(v,null,o.default.createElement(i.Observer,null,()=>o.default.createElement(l.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,options:r},t)))))});class v extends o.default.PureComponent{constructor(e,t){super(e),this.map=t[d.MAP]}render(){return o.default.createElement(p.Provider,{value:this.map},this.props.children)}}v.contextTypes={[d.MAP]:a.object}},7903:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayoutItem=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=r(172),a=r(7851),o=r(7863);var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};t.PageLayoutItem=(e=>{var{route:t,component:r,canQuery:d,canMutate:u}=e,s=l(e,["route","component","canQuery","canMutate"]);let c=t?n.default.createElement(i.Link,{to:t},(0,n.createElement)(r)):(0,n.createElement)(r);return d&&(c=n.default.createElement(o.CanQuery,{queryName:d},c)),u&&(c=n.default.createElement(a.CanMutate,{mutationName:u},c)),n.default.createElement("div",s,c)})},7904:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LinkStyled=void 0;const i=((n=r(51))&&n.__esModule?n:{default:n}).default.a.withConfig({displayName:"LinkStyled"})`
  color: inherit;
  text-decoration-color: rgba(0, 0, 0, 0.08);
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
  &:visited {
    text-decoration-color: rgba(0, 0, 0, 0.08);
  }
`;t.LinkStyled=i},7905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimeLabel=void 0;var n,i=(n=r(51))&&n.__esModule?n:{default:n},a=r(52);const o=i.default.div.withConfig({displayName:"OrderTimeLabel"})`
  margin-left: 1rem;
  display: inline-block;
  color: ${a.Colors.greyMiddle};
`;t.OrderTimeLabel=o},7912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputFlatSelect=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7849),o=r(53),l=r(78),d=r(7876);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};class c extends i.default.Component{constructor(){super(...arguments),this.validate=(e=>{const{isRequired:t,isMulti:r,validationName:n}=this.props;if(t){if(r&&(!Array.isArray(e)||0===e.length))return l.i18n._("{validationName} must have at least option selected",{validationName:n});if(!r&&null==e)return l.i18n._("{validationName} must have a selection",{validationName:n})}return null})}getControlProps(e){const{isMulti:t,items:r,defaultSelection:n,getItemId:i}=this.props,a=e.value||n;if(t){const t=e=>a.includes(i(e));return{selectedItems:Array.isArray(a)?r.filter(t):[],onMultiSelection:t=>{e.setValue(t.map(i)),e.setTouched(!0)}}}return{selectedItem:a&&r.find(e=>i(e)===a),onSingleSelection:t=>{e.setValue(t?i(t):null),e.setTouched(!0)}}}render(){const e=this.props,{field:t,fieldIsPure:r=!1,isRequired:n=!1,isClearable:o=!1}=e,l=s(e,["field","fieldIsPure","isRequired","isClearable"]);return i.default.createElement(a.Field,{field:t,pure:r,validate:this.validate},e=>i.default.createElement(d.SelectControlFlat,u({},this.getControlProps(e),{isInvalid:Boolean(e.error),isClearable:o&&!n},l)))}}t.FormInputFlatSelect=c,c.defaultProps={validationName:l.i18n._("Value"),getItemId:o.RM.prop("id")}},7913:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useOrderList=function(){return(0,n.useContext)(i)},t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));const i=n.default.createContext({isLoading:!1,noFilter:!1});var a=i;t.default=a},7928:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryTimeBadge=void 0;var n,i=r(279),a=r(104),o=r(5802),l=(n=r(0))&&n.__esModule?n:{default:n},d=r(7929),u=r(5812);const s=o.css`
  padding: 0.2rem 0.3rem 0.1rem 0.3rem;
`;t.DeliveryTimeBadge=(({deliverAt:e,deliveredAt:t,isCancelled:r=!1,onClick:n})=>{const o=!(t||r),c=(0,u.useTimer)({interval:u.MINUTE,enabled:o});let f=d.ETimeBadgeVariant.UNKNOWN;if(r)return l.default.createElement(d.TimeBadge,{variant:f,className:s},l.default.createElement(i.CancelOutlined,null));if(!e)return l.default.createElement(d.TimeBadge,{variant:f},"\u2754");const m=(0,a.differenceInMinutes)(e,t||c);return f=m>20?d.ETimeBadgeVariant.NORMAL:m>0?d.ETimeBadgeVariant.WARNING:d.ETimeBadgeVariant.CRITICAL,l.default.createElement(d.TimeBadge,{minutes:m,variant:f,onClick:n})})},7929:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimeBadge=t.ETimeBadgeVariant=void 0;var n,i=r(5802),a=d(r(0)),o=d(r(51)),l=r(52);function d(e){return e&&e.__esModule?e:{default:e}}t.ETimeBadgeVariant=n,function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.CRITICAL=1]="CRITICAL",e[e.WARNING=2]="WARNING",e[e.NORMAL=3]="NORMAL"}(n||(t.ETimeBadgeVariant=n={}));const u=o.default.div.withConfig({displayName:"TimeBadgeStyled"})`
  height: 2rem;
  line-height: 2rem;
  width: 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid white;
  color: ${l.Colors.white};
  background: ${l.Colors.greyMiddle};
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`,s={[n.UNKNOWN]:(0,o.default)(u)``,[n.CRITICAL]:(0,o.default)(u)`
    background: ${l.Colors.red};
  `,[n.WARNING]:(0,o.default)(u)`
    background: ${l.Colors.orange};
    color: ${l.Colors.black};
    font-weight: bold;
  `,[n.NORMAL]:(0,o.default)(u)`
    background: ${l.Colors.green};
  `},c=i.css`
  font-size: 0.8rem;
`,f=i.css`
  font-size: 1.7rem;
  font-weight: bold;
`,m=i.css`
  cursor: pointer;
`;t.TimeBadge=(({minutes:e,className:t,children:r,variant:n,onClick:o})=>{const l=s[n];let d=r;const u=[];return void 0!==e&&((e>99||e<-9)&&u.push(c),e<-99?(d="\u2012",u.push(f)):d=e.toString()),o&&u.push(m),a.default.createElement(l,{onClick:o,className:(0,i.cx)(t,...u)},d)})},7943:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateOrderButton=void 0;var n,i=r(279),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(280),l=r(172),d=r(7893),u=r(78),s=r(5794),c=r(52),f=r(7944);t.CreateOrderButton=(({showOnlyText:e=!1})=>{const{data:t}=(0,o.useSubscription)(f.OrderCallSubscription),r={pathname:"/order/create",state:t?t.call:null};return a.default.createElement(l.Link,{to:r},a.default.createElement(s.TouchButton,{text:u.i18n._("Create order"),iconName:e?void 0:"add_circle",color:c.Colors.turquoise,badge:t&&t.call&&t.call.isRinging?a.default.createElement(d.TouchButtonBadge,null,a.default.createElement(i.RingVolume,null)):null}))})},7944:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCallSubscription=void 0;const i=((n=r(23))&&n.__esModule?n:{default:n}).default`
  subscription SOrderCall {
    call: updatedUserCallingCustomer {
      eventId
      phone
      prefix
      isRinging
    }
  }
`;t.OrderCallSubscription=i},7945:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderButton=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(172),o=r(7893),l=r(78),d=r(5794),u=r(52);t.OrderButton=(({count:e})=>i.default.createElement(a.Link,{to:"/order"},i.default.createElement(d.TouchButton,{text:l.i18n._("Orders"),iconName:"assignment_returned",badge:e&&e>0?i.default.createElement(o.TouchButtonBadge,null,e):null,color:u.Colors.yellow})))},7946:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMinutes=void 0;var n=l(r(0)),i=l(r(51)),a=r(5794),o=r(52);function l(e){return e&&e.__esModule?e:{default:e}}const d=[20,30,45,60,75,90,105,120],u=i.default.div.withConfig({displayName:"MinutesContainer"})`
  display: flex;
  justify-content: 'center';
  flex-wrap: 'wrap';
  font-size: 2rem;
`,s=i.default.div.withConfig({displayName:"MinutesItem"})`
  margin: 1rem 1rem 0 0;
`;t.DeliveryMinutes=(({onMinuteClick:e})=>n.default.createElement(u,null,d.map(t=>n.default.createElement(s,{key:t},n.default.createElement(a.TouchButton,{onClick:()=>{e(t)},color:o.Colors.green},t)))))},7947:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Flex=void 0;const i=((n=r(51))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"Flex"})`
  flex: ${({grow:e=1,shrink:t=1,basis:r=0})=>`${e} ${t} ${r}`};
`;t.Flex=i},7948:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDebounceCallback=function(e,t=300){const r=(0,a.useCallback)(e,[]),n=(0,a.useRef)((0,i.default)(r,t));return(0,a.useEffect)(()=>n.current.clear),n.current};var n,i=(n=r(61))&&n.__esModule?n:{default:n},a=r(0)},7949:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AutoHeight=void 0;const i=((n=r(51))&&n.__esModule?n:{default:n}).default.div.withConfig({displayName:"AutoHeight"})`
  display: flex;
  flex-direction: column;
  height: 100%;
`;t.AutoHeight=i},7951:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTickerFragment=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n},a=r(102);const o=i.default`
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
  ${a.AddressFragment}
  ${a.CustomerFragment}
`;t.OrderTickerFragment=o},7962:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderBox=t.OrderBoxStyled=void 0;var n=u(r(0)),i=u(r(51)),a=r(7963),o=r(52),l=r(7964),d=r(7966);function u(e){return e&&e.__esModule?e:{default:e}}const s=i.default.div.withConfig({displayName:"OrderBoxStyled"})`
  background-color: ${o.Colors.white};
  color: ${o.Colors.greyDarkest};
  border-radius: ${o.Radiuses.Card};
  margin-bottom: 0.5rem;
  position: relative;
`;t.OrderBoxStyled=s;t.OrderBox=(({order:e,showBranch:t,toggleOrderDetail:r,isOrderDetailOpen:i})=>n.default.createElement(s,{id:`order-${e.id}`},n.default.createElement(l.OrderTicker,{order:e,showBranch:t,onClick:()=>r(e.id)}),n.default.createElement(a.ObserverWhen,{test:()=>i(e.id),renderSuccess:()=>n.default.createElement(d.OrderDetail,{orderId:e.id})})))},7963:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ObserverWhen=void 0;var n,i=r(5808),a=(n=r(0))&&n.__esModule?n:{default:n};t.ObserverWhen=(({test:e,renderSuccess:t,renderFailure:r})=>a.default.createElement(i.Observer,{render:()=>e()?t():r?r():null}))},7964:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTicker=void 0;var n=r(130),i=p(r(175)),a=p(r(0)),o=r(5819),l=p(r(51)),d=r(7867),u=r(171),s=r(5799),c=r(52),f=r(7965),m=r(7928);function p(e){return e&&e.__esModule?e:{default:e}}const v=(0,l.default)(o.Element).withConfig({displayName:"OrderTickerStyled"})`
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: ${(0,i.default)(c.Colors.turquoise).alpha(.05).string()};
  }
  &:active {
    background-color: ${(0,i.default)(c.Colors.turquoise).alpha(.2).string()};
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
    border-top: 2px solid ${c.Colors.orange};
    transform: rotate(13deg);
    transform-origin: 0% 0%;
    opacity: 0.7;
  }
`,_=l.default.div.withConfig({displayName:"PaidTextStyled"})`
  color: ${c.Colors.orange};
`,k=l.default.div.withConfig({displayName:"ToBranchContainerStyled"})`
  padding: 0.3rem 0.6rem;
  display: inline-block;
  border-top-left-radius: ${c.Radiuses.Card};
  background-color: ${c.Colors.green};
  color: ${c.Colors.white};
`,E=l.default.div.withConfig({displayName:"ToPickupLabel"})`
  font-style: italic;
  color: ${c.Colors.violet};
`;t.OrderTicker=(({order:e,showBranch:t,onClick:r})=>{return a.default.createElement(v,{onClick:r,name:`order-${e.id}`},t&&a.default.createElement(k,null,e.companyBranch.name),a.default.createElement(h,null,a.default.createElement(y,null,a.default.createElement(m.DeliveryTimeBadge,{deliverAt:e.deliverAt,deliveredAt:e.deliveredAt,isCancelled:e.orderStateCategory===u.OrderStateCategoryEnum.Cancel})),a.default.createElement(g,null,(()=>e.deliveryType&&e.deliveryType.enum===u.DeliveryTypeEnum.Pickup?a.default.createElement(E,null,a.default.createElement(n.Trans,{id:"To pickup"})):(0,s.formatAddress)(e.address))()),a.default.createElement(O,null,a.default.createElement(f.CustomerIdentity,{customer:e.customer})),a.default.createElement(b,null,a.default.createElement(d.Price,{price:e.totalSum.value,currencyCode:e.totalSum.currency.code}),e.isPaidWithCard&&a.default.createElement(a.default.Fragment,null,a.default.createElement(C,null),a.default.createElement(_,null,a.default.createElement(n.Trans,{id:"Paid"}))))))})},7965:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomerIdentity=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n};t.CustomerIdentity=(({customer:e})=>e?i.default.createElement("span",null,`${e.lastName?`${e.firstName} ${e.lastName}`:e.defaultPhone?e.defaultPhone.phone:""}`):i.default.createElement("i",null,"unknown"))},7966:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDetail=void 0;var n=y(r(0)),i=y(r(51)),a=r(7868),o=r(7967),l=r(7968),d=r(7969),u=r(7970),s=r(7972),c=r(7973),f=r(7974),m=r(7975),p=r(7976),v=r(7978),h=r(7979);function y(e){return e&&e.__esModule?e:{default:e}}const g=i.default.div.withConfig({displayName:"OrderDetailContainerStyled"})`
  padding: 0 0.5rem 0.5rem 1.1rem;
`;t.OrderDetail=(({orderId:e})=>n.default.createElement(v.QueryOrderDetail,{variables:{id:e},fetchPolicy:"cache-and-network",render:({order:t})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(g,null,n.default.createElement(a.HorizontalSeparator,null),n.default.createElement(p.OrderWareList,{orderWares:t.items}),n.default.createElement(u.OrderDetailTotals,{order:t}),n.default.createElement(c.OrderRuleLines,{rules:t.allAppliedRules},n.default.createElement(d.OrderCountLine,{current:t.customerOrdersCountCurrent,total:t.customerOrdersCountTotal})),n.default.createElement(o.ContactLines,{phones:t.customer.phones,emails:t.customer.emails}),n.default.createElement(l.NoteLine,{note:t.note,previousNote:t.previousNote}),n.default.createElement(a.HorizontalSeparator,null),n.default.createElement(s.OrderIdLine,{displayedId:t.id}),n.default.createElement(a.HorizontalSeparator,null),n.default.createElement(m.OrderTimeLine,{orderTiming:t.orderTiming}),n.default.createElement(f.OrderStats,{order:t})),n.default.createElement(h.OrderStateFlow,{orderId:e,branchId:t.companyBranch.id}))}))},7967:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContactLines=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7868),o=r(7850),l=r(7904);t.ContactLines=(({phones:e,emails:t})=>{const r=e=>i.default.createElement(o.IconLine,{icon:e.icon,key:e.value,labelMargin:"0"},i.default.createElement("div",{title:e.description||""},(e=>e.isMail?i.default.createElement(l.LinkStyled,{href:`mailto:${e.value}`},e.value):i.default.createElement(l.LinkStyled,{href:`tel:${e.value.replace("/ /g","")}`},e.value))(e)));return i.default.createElement(i.default.Fragment,null,(e.length>0||t.length>0)&&i.default.createElement(a.HorizontalSeparator,null),e.map(e=>r(Object.assign({icon:"phone",isMail:!1,value:e.phone},e))),t.map(e=>r(Object.assign({icon:"mail_outline",isMail:!0,value:e.email},e))))})},7968:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NoteLine=void 0;var n=u(r(0)),i=u(r(51)),a=r(7868),o=r(7850),l=r(78),d=r(52);function u(e){return e&&e.__esModule?e:{default:e}}const s=i.default.span.withConfig({displayName:"CurrentNoteStyled"})`
  color: ${d.Colors.orange};
`,c=i.default.span.withConfig({displayName:"PreviousNoteStyled"})`
  color: ${d.Colors.greyDark};
  margin-left: 0.5rem;
`;t.NoteLine=(({note:e,previousNote:t})=>e||t?n.default.createElement(n.default.Fragment,null,n.default.createElement(a.HorizontalSeparator,null),n.default.createElement(o.IconLine,{icon:"note",labelMargin:"0"},n.default.createElement(s,null,e||l.i18n._("Without note").toLocaleLowerCase()),n.default.createElement(c,null,t))):null)},7969:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCountLine=void 0;var n,i=r(130),a=(n=r(0))&&n.__esModule?n:{default:n};t.OrderCountLine=(({current:e,total:t})=>a.default.createElement(i.Trans,{id:"It's customer's {current, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} order {total, plural, one {} other {from total of # orders}}",values:{current:e,total:t}}))},7970:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDetailTotals=void 0;var n=l(r(0)),i=l(r(51)),a=r(78),o=r(7971);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`;t.OrderDetailTotals=(({order:e})=>n.default.createElement(d,null,n.default.createElement(o.OrderWarePriceLine,{label:a.i18n._("Transport fee"),price:e.transportFee.value}),n.default.createElement(o.OrderWarePriceLine,{label:a.i18n._("Covers price"),price:e.coverPrice.value}),n.default.createElement(o.OrderWarePriceLine,{label:a.i18n._("Discount total"),price:-1*e.totalDiscount.value}),n.default.createElement(o.OrderWarePriceLine,{label:a.i18n._("Total price"),price:e.totalSum.value,highlight:!0})))},7971:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWarePriceLine=void 0;var n=l(r(0)),i=l(r(51)),a=r(7867),o=r(52);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,u=i.default.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${o.Colors.greyMiddle};
`,s=i.default.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${o.Colors.greyMiddle};
`;t.OrderWarePriceLine=(({label:e,price:t,highlight:r=!1})=>n.default.createElement(d,null,n.default.createElement(u,null,e),n.default.createElement(s,null,r?n.default.createElement("b",null,n.default.createElement(a.Price,{price:t})):n.default.createElement(a.Price,{price:t}))))},7972:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderIdLine=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7850);t.OrderIdLine=(({displayedId:e})=>i.default.createElement(a.IconLine,{icon:"format_list_numbered",labelMargin:"0"},e))},7973:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderRuleLines=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7868),o=r(7850);t.OrderRuleLines=(({rules:e,children:t})=>e.length>0||t?i.default.createElement(i.default.Fragment,null,i.default.createElement(a.HorizontalSeparator,null),i.default.createElement(o.IconLine,{icon:"announcement",labelMargin:"0"},t,i.default.createElement("br",null),e.join(", "))):null)},7974:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStats=void 0;var n,i=r(130),a=r(279),o=(n=r(0))&&n.__esModule?n:{default:n},l=r(7850),d=r(5799),u=r(7905);t.OrderStats=(({order:e})=>{const t=[];if(e.deliverAt&&t.push(o.default.createElement("div",{key:"deliverAt"},(0,d.formatTimeWithoutTodayDate)(e.deliverAt),o.default.createElement(u.OrderTimeLabel,null,o.default.createElement(i.Trans,{id:"Deliver on time"})))),e.driver){const{firstName:r,lastName:n}=e.driver.user;t.push(o.default.createElement("div",{key:"driver"},`${r} ${n}`,o.default.createElement(u.OrderTimeLabel,null,o.default.createElement(i.Trans,{id:"Driver"}))))}return 0===t.length?null:o.default.createElement(l.IconLine,{icon:a.Timelapse,labelMargin:"0"},t)})},7975:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimeLine=void 0;var n,i=r(130),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7850),l=r(171),d=r(5799),u=r(53),s=r(78),c=r(7905);const f={[l.OrderStateCategoryEnum.NewOrders]:(0,i.i18nMark)("Created"),[l.OrderStateCategoryEnum.Preparing]:(0,i.i18nMark)("Preparing"),[l.OrderStateCategoryEnum.ReadyToDeliver]:(0,i.i18nMark)("Ready to deliver"),[l.OrderStateCategoryEnum.OnWay]:(0,i.i18nMark)("On way"),[l.OrderStateCategoryEnum.Finished]:(0,i.i18nMark)("Finished")};t.OrderTimeLine=(({orderTiming:e})=>a.default.createElement(o.IconLine,{icon:"access_time",labelMargin:"0"},u.RM.reject(({createdAt:e,orderStateCategory:t})=>null===e||!f[t],e).map(e=>a.default.createElement("div",{key:e.orderStateCategory},(0,d.formatTimeWithoutTodayDate)(e.createdAt),a.default.createElement(c.OrderTimeLabel,null,s.i18n._(f[e.orderStateCategory]))))))},7976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWareList=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=r(7977);t.OrderWareList=(({orderWares:e})=>{return n.default.createElement("div",null,e.map(e=>n.default.createElement(n.Fragment,{key:e.id},n.default.createElement(i.OrderWareLine,{code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),n.default.createElement(n.default.Fragment,null,e.sidedishes.map(e=>n.default.createElement(i.OrderWareLine,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value}))))))})},7977:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderWareLine=void 0;var n=l(r(0)),i=l(r(51)),a=r(7867),o=r(52);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,u=i.default.div.withConfig({displayName:"CodeContainerStyled"})`
  flex: 0 0 5rem;
`,s=i.default.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${o.Colors.black};
`,c=i.default.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${o.Colors.greyMiddle};
`;t.OrderWareLine=(({code:e,label:t,price:r})=>n.default.createElement(d,null,n.default.createElement(u,null,e),n.default.createElement(s,null,t),n.default.createElement(c,null,n.default.createElement(a.Price,{price:r}))))},7978:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderDetail=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n},a=r(79),o=r(102),l=r(5809);const d=(0,a.buildQuery)(i.default`
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
`);t.QueryOrderDetail=d},7979:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateFlow=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(107),o=r(99),l=r(171),d=r(101),u=r(7980),s=r(7982),c=r(7983),f=r(7984),m=r(7986),p=r(7987),v=r(7988);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const y=e=>i.default.createElement(m.OrderStateFlowContainer,null,e.canCancel&&i.default.createElement(u.OrderCancelButton,e),i.default.createElement(s.OrderDeliveryToPickup,e),i.default.createElement(p.OrderStateTimeNotification,e),i.default.createElement(c.OrderStateButton,h({nextState:l.OrderStateEnum.Accepted},e))),g=e=>i.default.createElement(m.OrderStateFlowContainer,null,e.canCancel&&i.default.createElement(u.OrderCancelButton,e),i.default.createElement(s.OrderDeliveryToPickup,e),i.default.createElement(p.OrderStateTimeNotification,e),e.canDeliver?i.default.createElement(f.OrderStateDeliver,e):i.default.createElement(c.OrderStateButton,h({nextState:l.OrderStateEnum.Finished},e))),O=e=>i.default.createElement(m.OrderStateFlowContainer,null,i.default.createElement(p.OrderStateTimeNotification,e),i.default.createElement(f.OrderStateDeliver,e),i.default.createElement(c.OrderStateButton,h({nextState:l.OrderStateEnum.Finished},e)));t.OrderStateFlow=(({orderId:e,branchId:t})=>{const{order:{state:r},user:n}=(0,o.useRoot)();return i.default.createElement(v.QueryOrderState,{variables:{orderId:e,branchId:t},render:({order:o,companyBranch:{allowedCategories:u}})=>{const{orderStateCategory:s}=o;if(!s)return(0,d.reportError)(new a.VError("Order %s has got no state categories")),null;const c=null!=o.deliveryType&&o.deliveryType.enum!==l.DeliveryTypeEnum.Pickup,f=c&&u.includes(l.OrderStateCategoryEnum.OnWay),m=o.orderOrigin.enum===l.OrderOriginEnum.Staff&&n.permissions.canCancelOrders,p={orderId:e,branchId:t,stateModel:r,orderStateCategory:s,canCancel:m,canDeliver:f,isDelivery:c};switch(s){case l.OrderStateCategoryEnum.NewOrders:return i.default.createElement(y,p);case l.OrderStateCategoryEnum.Preparing:return i.default.createElement(g,p);case l.OrderStateCategoryEnum.OnWay:return i.default.createElement(O,p);default:return null}}})})},7980:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCancelButton=void 0;var n,i=r(130),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7875),l=r(7858),d=r(7874),u=r(7981),s=r(5818);t.OrderCancelButton=(({orderId:e})=>{const t=(0,d.useGuardedMutation)(s.CancelOrderMutation);return a.default.createElement(o.CardDock,{position:"BottomLeft"},a.default.createElement(l.Sizer,{width:7.375},a.default.createElement(u.ConfirmButton,{confirmNode:a.default.createElement(i.Trans,{id:"Really cancel?"}),onConfirm:()=>{t({orderId:e})}},a.default.createElement(i.Trans,{id:"Cancel order"}))))})},7981:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmButton=void 0;var n=r(5816),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=r(52),o=r(5794);t.ConfirmButton=(({confirmNode:e,initialColor:t=a.Colors.greyMiddle,confirmColor:r=a.Colors.red,confirmDisableMs:l=300,resetToInitialMs:d=3*n.SECOND,children:u,onConfirm:s})=>{const[c,f]=(0,i.useState)(!1),m=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(c){const e=setTimeout(()=>{f(!1)},d);return()=>{clearTimeout(e)}}},[c]),i.default.createElement(o.TouchButton,{ref:m,onClick:()=>{!1===c?(m.current.disabled=!0,setTimeout(()=>{f(!0),m.current&&(m.current.disabled=!1)},l)):s()},color:c?r:t},c?e:u)})},7982:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDeliveryToPickup=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(280),o=r(78),l=r(5794),d=r(5805);t.OrderDeliveryToPickup=(({orderId:e,isDelivery:t})=>{const r=(0,a.useMutation)(d.ChangeOrderToPickupMutation,{variables:{orderId:e}});return t?i.default.createElement(l.TouchButton,{text:o.i18n._("Change to pickup"),onClick:()=>{r()}}):null})},7983:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateButton=void 0;var n,i=r(130),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(171),l=r(78),d=r(5794);const u={[o.OrderStateEnum.Accepted]:(0,i.i18nMark)("Accept order"),[o.OrderStateEnum.Finished]:(0,i.i18nMark)("Finish order")};t.OrderStateButton=(({orderId:e,nextState:t,stateModel:r})=>a.default.createElement(d.TouchButton,{text:l.i18n._(u[t]),width:"7.375rem",onClick:()=>{r.updateOrderState(e,t)}}))},7984:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateDeliver=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(171),o=r(7985),l=r(5809);t.OrderStateDeliver=(({branchId:e,orderId:t,orderStateCategory:r,stateModel:n})=>i.default.createElement(l.QueryDriverSelection,{fetchPolicy:"network-only",variables:{branchId:[e],orderId:t},render:({drivers:e,order:{driver:l}},{loading:d,refetch:u})=>i.default.createElement(o.OrderDriverSelect,{drivers:e,selectedDriver:l?l.user:null,isLoading:d,onReload:u,onClear:()=>{l&&n.removeDriver(l.id)},onSelect:e=>{n.selectDriver(t,e.id),r!==a.OrderStateCategoryEnum.OnWay&&n.deliverOrder(t)}})}))},7985:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDriverSelect=void 0;var n=c(r(0)),i=r(7898),a=c(r(51)),o=r(173),l=r(7855),d=r(53),u=r(78),s=r(52);function c(e){return e&&e.__esModule?e:{default:e}}const f=a.default.div.withConfig({displayName:"DriverName"})`
  margin: 0.1rem 0 0rem 0.2rem;
  display: inline-block;
  vertical-align: top;
  font-size: 1.25rem;
`,m={background:s.Colors.greyMiddle},p={color:s.Colors.white},v={control:e=>Object.assign({},e,m,p,{height:s.Spacing.ButtonHeight,borderWidth:0,borderRadius:s.Radiuses.Button,margin:0}),menu:e=>Object.assign({},e,m),valueContainer:e=>Object.assign({},e,p),singleValue:e=>Object.assign({},e,p),placeholder:e=>Object.assign({},e,p,{fontSize:"1.2rem"})};t.OrderDriverSelect=(({drivers:e,selectedDriver:t,isLoading:r,onSelect:a,onClear:c,onReload:m})=>n.default.createElement(l.SelectControl,{options:e,value:t,getOptionValue:d.RM.prop("id"),isLoading:r,isSearchable:!1,isClearable:!0,placeholder:"Deliver order",width:16,styles:v,noOptionsMessage:()=>u.i18n._("No drivers available"),onChange:e=>null===e?c():a(e),onMenuOpen:m,components:{ValueContainer:e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(o.Icon,{iconName:"directions_car",fontSize:2,color:s.Colors.white}),n.default.createElement(i.components.ValueContainer,e)),DropdownIndicator:()=>null},formatOptionLabel:e=>n.default.createElement(f,null,`${e.firstName} ${e.lastName}`)}))},7986:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateFlowContainer=void 0;var n,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=(n=r(51))&&n.__esModule?n:{default:n},o=r(52);const l=a.default.div.withConfig({displayName:"OrderStateFlowContainerWrapper"})`
  margin: 0 0 0 auto;
  text-align: right;
  height: ${o.Spacing.ButtonHeight};
`,d=a.default.div.withConfig({displayName:"Control"})`
  margin: 0 0 0 0.5rem;
  display: inline-block;
  vertical-align: bottom;
  text-align: left;
  height: 100%;
`;t.OrderStateFlowContainer=(({children:e})=>i.default.createElement(l,null,i.Children.map(e,(e,t)=>i.default.createElement(d,{key:t},e))))},7987:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateTimeNotification=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(99),o=r(78),l=r(7894),d=r(5794);t.OrderStateTimeNotification=(({orderId:e})=>{const{order:t}=(0,a.useRoot)();return i.default.createElement(l.DeliveryTimeDialog,{title:o.i18n._("Send expected time of delivery to customer (in minutes)"),onConfirm:r=>{t.state.sendTimeNotification(e,r)}},({openDialog:e})=>i.default.createElement(d.TouchButton,{iconName:"schedule",onClick:e}))})},7988:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderState=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n},a=r(79),o=r(5805);const l=(0,a.buildQuery)(i.default`
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
`);t.QueryOrderState=l},8006:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.r(t);var i=r(8197),a=r.n(i);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===c(Symbol.iterator)?function(e){return c(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":c(e)})(e)}function m(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?n(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}var y=r(0),g=r.n(y),O=r(293),b=r.n(O),C=r(5802),_=r(5),k=r.n(_),E=r(5767),S=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,M=Object(E.a)(S.test.bind(S));var w,P="__EMOTION_THEMING__",N=((w={})[P]=k.a.object,w);var x=M,D=function(e){return"theme"!==e&&"innerRef"!==e},j=function(){return!0},T=function(e,t){for(var r=2,n=arguments.length;r<n;r++){var i=arguments[r],a=void 0;for(a in i)e(a)&&(t[a]=i[a])}return t};var I=function(e,t){var r=function(n,i){var a,o,l,d;void 0!==i&&(a=i.e,o=i.label,l=i.target,d=n.__emotion_forwardProp&&i.shouldForwardProp?function(e){return n.__emotion_forwardProp(e)&&i.shouldForwardProp(e)}:i.shouldForwardProp);var u=n.__emotion_real===n,s=void 0===a&&u&&n.__emotion_base||n;return"function"!==typeof d&&(d="string"===typeof s&&s.charAt(0)===s.charAt(0).toLowerCase()?x:D),function(){var c=arguments,f=u&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==o&&f.push("label:"+o+";"),void 0===a)if(null==c[0]||void 0===c[0].raw)f.push.apply(f,c);else{f.push(c[0][0]);for(var m=c.length,p=1;p<m;p++)f.push(c[p],c[0][p])}var v=function(r){var n,i;function o(){return r.apply(this,arguments)||this}i=r,(n=o).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var u=o.prototype;return u.componentWillMount=function(){void 0!==this.context[P]&&(this.unsubscribe=this.context[P].subscribe(function(e){this.setState({theme:e})}.bind(this)))},u.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[P].unsubscribe(this.unsubscribe)},u.render=function(){var r=this.props,n=this.state;this.mergedProps=T(j,{},r,{theme:null!==n&&n.theme||r.theme||{}});var i="",o=[];return r.className&&(i+=void 0===a?e.getRegisteredStyles(o,r.className):r.className+" "),i+=void 0===a?e.css.apply(this,f.concat(o)):a,void 0!==l&&(i+=" "+l),t.createElement(s,T(d,{},r,{className:i,ref:r.innerRef}))},o}(t.Component);return v.displayName=void 0!==o?o:"Styled("+("string"===typeof s?s:s.displayName||s.name||"Component")+")",void 0!==n.defaultProps&&(v.defaultProps=n.defaultProps),v.contextTypes=N,v.__emotion_styles=f,v.__emotion_base=s,v.__emotion_real=v,v.__emotion_forwardProp=d,Object.defineProperty(v,"toString",{value:function(){return"."+l}}),v.withComponent=function(e,t){return r(e,void 0!==t?T(j,{},i,t):i).apply(void 0,f)},v}};return r}(C,g.a),L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var R=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return a.state={},a.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},a.elements={},a.onResize=a.onResize.bind(a),a.onTruncate=a.onTruncate.bind(a),a.calcTargetWidth=a.calcTargetWidth.bind(a),a.measureWidth=a.measureWidth.bind(a),a.getLines=a.getLines.bind(a),a.renderLine=a.renderLine.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,y["Component"]),F(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,r=this.onResize,n=document.createElement("canvas");this.canvasContext=n.getContext("2d"),t(function(){e&&e.parentNode.removeChild(e)}),window.addEventListener("resize",r)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,r=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(r)}},{key:"innerText",value:function(e){var t=document.createElement("div"),r="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var n=t[r],i=document.createElement("div");return i.innerHTML="foo<br/>bar","foo\nbar"!==i[r].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),n=t[r]),n}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"===typeof t&&(this.timeout=window.requestAnimationFrame(function(){t(e)}))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,r=this.calcTargetWidth,n=this.canvasContext,i=this.props.width;if(t){var a=i||Math.floor(t.parentNode.getBoundingClientRect().width);if(!a)return window.requestAnimationFrame(function(){return r(e)});var o=window.getComputedStyle(t),l=[o["font-weight"],o["font-style"],o["font-size"],o["font-family"]].join(" ");n.font=l,this.setState({targetWidth:a},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,r=t.lines,n=t.ellipsis,i=t.trimWhitespace,a=this.state.targetWidth,o=this.innerText,l=this.measureWidth,d=this.onTruncate,u=this.trimRight,s=[],c=o(e.text).split("\n").map(function(e){return e.split(" ")}),f=!0,m=this.ellipsisWidth(this.elements.ellipsis),p=1;p<=r;p++){var v=c[0];if(0!==v.length){var h=v.join(" ");if(l(h)<=a&&1===c.length){f=!1,s.push(h);break}if(p===r){for(var y=v.join(" "),O=0,b=y.length-1;O<=b;){var C=Math.floor((O+b)/2);l(y.slice(0,C+1))+m<=a?O=C+1:b=C-1}var _=y.slice(0,O);if(i)for(_=u(_);!_.length&&s.length;){_=u(s.pop())}h=g.a.createElement("span",null,_,n)}else{for(var k=0,E=v.length-1;k<=E;){var S=Math.floor((k+E)/2);l(v.slice(0,S+1).join(" "))<=a?k=S+1:E=S-1}if(0===k){p=r-1;continue}h=v.slice(0,k).join(" "),c[0].splice(0,k)}s.push(h)}else s.push(),c.shift(),p--}return d(f),s}},{key:"renderLine",value:function(e,t,r){if(t===r.length-1)return g.a.createElement("span",{key:t},e);var n=g.a.createElement("br",{key:t+"br"});return e?[g.a.createElement("span",{key:t},e),n]:n}},{key:"render",value:function(){var e=this,t=this.elements.target,r=this.props,n=r.children,i=r.ellipsis,a=r.lines,o=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(r,["children","ellipsis","lines"]),l=this.state.targetWidth,d=this.getLines,u=this.renderLine,s=this.onTruncate,c=void 0;return"undefined"!==typeof window&&!(!t||!l)&&(a>0?c=d().map(u):(c=n,s(!1))),delete o.onTruncate,delete o.trimWhitespace,g.a.createElement("span",L({},o,{ref:function(t){e.elements.target=t}}),g.a.createElement("span",null,c),g.a.createElement("span",{ref:function(t){e.elements.text=t}},n),g.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},i))}}]),t}();R.propTypes={children:k.a.node,ellipsis:k.a.node,lines:k.a.oneOfType([k.a.oneOf([!1]),k.a.number]),trimWhitespace:k.a.bool,width:k.a.number,onTruncate:k.a.func},R.defaultProps={children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0};var B=R,$=r(291);function A(){var e=l(["\n  font-size: 0.8rem;\n  margin-top: 0.2rem;\n"]);return A=function(){return e},e}function G(){var e=l(["\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2rem;\n  width: 2.6rem;\n  height: 2.6rem;\n  margin: 0 auto;\n  padding: 0;\n\n  span:before,\n  span::after {\n    margin: 0;\n    padding: 0;\n    font-size: 1.7rem;\n  }\n"]);return G=function(){return e},e}function W(){var e=l(["\n  text-align: center;\n  display: inline-block;\n  max-width: 5rem;\n  cursor: pointer;\n  margin: 0.2rem;\n"]);return W=function(){return e},e}function V(){var e=l(["\n  padding: 0.7rem 0.5rem 0 0.2rem;\n  display: flex;\n  top: 0;\n  z-index: 1;\n  user-select: none;\n  flex-wrap: wrap;\n"]);return V=function(){return e},e}r.d(t,"WareList",function(){return z}),r.d(t,"WareCategoryNavigator",function(){return Y}),r.d(t,"OrderControl",function(){return ue}),r.d(t,"OrderCartLoader",function(){return se}),r.d(t,"SidedishPicker",function(){return ce});var z=function(e){function t(){var e;return d(this,t),(e=m(this,p(t).apply(this,arguments))).state={list:[]},e.renderRow=function(t){var r=t.index,n=t.style,i=e.props,a=i.formatCategory,o=i.formatRecipe,l=i.onRecipeClick,d=e.state.list[r],u=d.recipe,s=d.category;return u?g.a.createElement("div",{key:"recipe-".concat(u.id,"-").concat(s.id),style:n,onClick:function(){return l(u)}},o(u)):g.a.createElement("div",{key:"category-".concat(s.id),style:n},a(s))},e}return h(t,g.a.Component),s(t,[{key:"render",value:function(){return this.props.children({listItems:this.state.list,rowRenderer:this.renderRow})}}],[{key:"getDerivedStateFromProps",value:function(e){var t=Boolean(e.formatCategory);return{list:e.recipeCategories.reduce(function(e,r){return 0===r.recipes.length?e:(t&&e.push({category:r}),e.concat(r.recipes.map(function(e){return{category:r,recipe:e}})))},[])}}}]),t}();z.defaultProps={formatRecipe:function(e){return e.nameLabel},formatCategory:function(e){return e.nameLabel}};var q=I("div")(V()),U=I("div")(W()),Q=I("div")(G()),H=I("div")(A()),Y=function(e){function t(){var e;return d(this,t),(e=m(this,p(t).apply(this,arguments))).renderCategory=function(t){var r=e.props.onClick;return g.a.createElement(U,{key:t.id,onClick:function(){return r(t.id)}},g.a.createElement(Q,null,g.a.createElement("span",{className:"flaticon-".concat(t.pictogram)})),g.a.createElement(H,null,g.a.createElement(B,{lines:2},t.nameLabel)))},e}return h(t,g.a.Component),s(t,[{key:"render",value:function(){return g.a.createElement(q,null,this.props.categories.map(this.renderCategory))}}]),t}();function K(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})}Y.defaultProps={onClick:b.a.noop};var X={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GPrice"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PriceConverted"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"value"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"formattedValue"},arguments:[],directives:[],selectionSet:void 0}]}}],loc:{start:0,end:72,source:{body:"\n  fragment GPrice on PriceConverted {\n    value\n    formattedValue\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Z={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GCartItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OrderRecipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipe"},directives:[]}]}}]}}].concat({kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GRecipe"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Recipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"code"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0}]}}],loc:{start:0,end:66,source:{body:"\n  fragment GRecipe on Recipe {\n    id\n    code\n    nameLabel\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}}.definitions),loc:{start:0,end:123,source:{body:"\n  fragment GCartItem on OrderRecipe {\n    id\n    price {\n      ...GPrice\n    }\n    recipe {\n      ...GRecipe\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},J={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GOrder"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Order"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"countWares"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GCartItem"},directives:[]},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"sidedishCount"},name:{kind:"Name",value:"sideDishesWareCategoriesCount"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:{kind:"Name",value:"priceWithSidedishes"},name:{kind:"Name",value:"priceWithSideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"sidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GCartItem"},directives:[]}]}}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"coverPrice"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"transportFee"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"discounts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"code"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"description"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"totalDiscount"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"totalSum"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}}].concat(Z.definitions,X.definitions),loc:{start:0,end:560,source:{body:"\n  fragment GOrder on Order {\n    id\n    countWares\n    items {\n      ...GCartItem\n      recipe {\n        sidedishCount: sideDishesWareCategoriesCount\n      }\n      priceWithSidedishes: priceWithSideDishes {\n        ...GPrice\n      }\n      sidedishes: sideDishes {\n        ...GCartItem\n      }\n    }\n    coverPrice {\n      ...GPrice\n    }\n    transportFee {\n      ...GPrice\n    }\n    discounts {\n      code\n      description\n      price {\n        ...GPrice\n      }\n    }\n    totalDiscount {\n      ...GPrice\n    }\n    totalSum {\n      ...GPrice\n    }\n  }\n  \n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ee={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MAddToOrder"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"recipeId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"createOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"orderRecipe"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"order"},value:{kind:"Variable",name:{kind:"Name",value:"orderId"}}},{kind:"ObjectField",name:{kind:"Name",value:"recipe"},value:{kind:"Variable",name:{kind:"Name",value:"recipeId"}}},{kind:"ObjectField",name:{kind:"Name",value:"sideDishes"},value:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(J.definitions),loc:{start:0,end:248,source:{body:"\n  mutation MAddToOrder($orderId: ID!, $recipeId: ID!, $sidedishes: [ID!]) {\n    createOrderRecipe(\n      orderRecipe: {\n        order: $orderId\n        recipe: $recipeId\n        sideDishes: $sidedishes\n      }\n    ) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},te={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MChangeOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"updateOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}},{kind:"Argument",name:{kind:"Name",value:"orderRecipe"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"sideDishes"},value:{kind:"Variable",name:{kind:"Name",value:"sidedishes"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(J.definitions),loc:{start:0,end:173,source:{body:"\n  mutation MChangeOrderItem($itemId: ID!, $sidedishes: [ID!]) {\n    updateOrderRecipe(id: $itemId, orderRecipe: { sideDishes: $sidedishes }) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},re={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"MRemoveOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"destroyOrderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(J.definitions),loc:{start:0,end:112,source:{body:"\n  mutation MRemoveOrderItem($itemId: ID!) {\n    destroyOrderRecipe(id: $itemId) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ne={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GOrderCart"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orderId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"order"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"orderId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GOrder"},directives:[]}]}}]}}].concat(J.definitions),loc:{start:0,end:92,source:{body:"\n  query GOrderCart($orderId: ID!) {\n    order(id: $orderId) {\n      ...GOrder\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ie={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GRecipeSidedishes"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Recipe"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:{kind:"Name",value:"sidedishCategories"},name:{kind:"Name",value:"sideDishesWareCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"minCount"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"maxCount"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:{kind:"Name",value:"sidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nameLabel"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"price"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GPrice"},directives:[]}]}}]}}]}}]}}].concat(X.definitions),loc:{start:0,end:296,source:{body:"\n  fragment GRecipeSidedishes on Recipe {\n    id\n    nameLabel\n    sidedishCategories: sideDishesWareCategories {\n      id\n      nameLabel\n      minCount\n      maxCount\n      sidedishes: sideDishes {\n        id\n        nameLabel\n        price {\n          ...GPrice\n        }\n      }\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ae={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GSidedishesForRecipe"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"recipeId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"recipeId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipeSidedishes"},directives:[]}]}}]}}].concat(ie.definitions),loc:{start:0,end:116,source:{body:"\n  query GSidedishesForRecipe($recipeId: ID!) {\n    recipe(id: $recipeId) {\n      ...GRecipeSidedishes\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},oe={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GSidedishesForOrderItem"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},defaultValue:void 0}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"orderRecipe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GRecipeSidedishes"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"selectedSidedishes"},name:{kind:"Name",value:"sideDishes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"recipe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}]}}].concat(ie.definitions),loc:{start:0,end:258,source:{body:"\n  query GSidedishesForOrderItem($itemId: ID!) {\n    item: orderRecipe(id: $itemId) {\n      id\n      recipe {\n        ...GRecipeSidedishes\n      }\n      selectedSidedishes: sideDishes {\n        id\n        recipe {\n          id\n        }\n      }\n    }\n  }\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},le=function(){return{recipe:void 0,selection:[],resolve:b.a.noop}},de=function(e){function t(){var e;return d(this,t),(e=m(this,p(t).apply(this,arguments))).state=le(),e.isSidedishSelected=function(t){return e.state.selection.includes(t)},e.onSidedishToggle=function(t){var r=e.state.selection;r=r.includes(t)?r.filter(function(e){return e!==t}):r.concat(t),e.setState({selection:r})},e.onConfirm=function(){e.state.resolve({sidedishes:o(e.state.selection),isConfirmed:!0}),e.setState(le)},e.onCancel=function(){e.state.resolve({sidedishes:[],isConfirmed:!1}),e.setState(le)},e}return h(t,g.a.Component),s(t,[{key:"selectForRecipe",value:function(e){var t=this;return new Promise(function(r){return K(t,void 0,void 0,a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.apolloClient.query({query:ae,variables:{recipeId:e}});case 2:n=t.sent,this.setState({recipe:n.data.recipe,resolve:r});case 4:case"end":return t.stop()}},t,this)}))})}},{key:"selectForItem",value:function(e){var t=this;return new Promise(function(r){return K(t,void 0,void 0,a.a.mark(function t(){var n,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.apolloClient.query({query:oe,variables:{itemId:e}});case 2:n=t.sent,i=n.data.item,this.setState({recipe:i.recipe,resolve:r,selection:i.selectedSidedishes.map(function(e){return e.recipe.id})});case 5:case"end":return t.stop()}},t,this)}))})}},{key:"render",value:function(){var e=this.state.recipe;return e?g.a.createElement(this.props.component,{recipe:e,isSidedishSelected:this.isSidedishSelected,onSidedishToggle:this.onSidedishToggle,onConfirm:this.onConfirm,onCancel:this.onCancel}):null}}]),t}(),ue=function(e){function t(){var e;return d(this,t),(e=m(this,p(t).apply(this,arguments))).sidedishControl=g.a.createRef(),e.onRecipeClick=function(t){return K(n(n(e)),void 0,void 0,a.a.mark(function e(){var r,n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:if(r=e.sent,!(t.sidedishCount>0)){e.next=12;break}return e.next=6,this.sidedishControl.current.selectForRecipe(t.id);case 6:n=e.sent,i=n.sidedishes,n.isConfirmed&&this.addRecipeToOrder(r,t.id,i),e.next=13;break;case 12:this.addRecipeToOrder(r,t.id);case 13:case"end":return e.stop()}},e,this)}))},e.onItemEdit=function(t){return K(n(n(e)),void 0,void 0,a.a.mark(function e(){var r,n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:return r=e.sent,e.next=5,this.sidedishControl.current.selectForItem(t);case 5:n=e.sent,i=n.sidedishes,n.isConfirmed&&this.updateOrderItemSidedishes(r,t,i);case 9:case"end":return e.stop()}},e,this)}))},e.onItemRemove=function(t){return K(n(n(e)),void 0,void 0,a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getOrderId();case 2:r=e.sent,this.removeOrderItem(r,t);case 4:case"end":return e.stop()}},e,this)}))},e}return h(t,g.a.Component),s(t,[{key:"addRecipeToOrder",value:function(e,t,r){return K(this,void 0,void 0,a.a.mark(function n(){var i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i={orderId:e,recipeId:t,sidedishes:r},n.next=3,this.props.apolloClient.mutate({mutation:ee,variables:i,refetchQueries:[{query:ne,variables:{orderId:e}}]});case 3:case"end":return n.stop()}},n,this)}))}},{key:"updateOrderItemSidedishes",value:function(e,t,r){return K(this,void 0,void 0,a.a.mark(function n(){var i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i={itemId:t,sidedishes:r},n.next=3,this.props.apolloClient.mutate({mutation:te,variables:i,refetchQueries:[{query:ne,variables:{orderId:e}}]});case 3:case"end":return n.stop()}},n,this)}))}},{key:"removeOrderItem",value:function(e,t){return K(this,void 0,void 0,a.a.mark(function r(){var n;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n={itemId:t},r.next=3,this.props.apolloClient.mutate({mutation:re,variables:n,refetchQueries:[{query:ne,variables:{orderId:e}}]});case 3:case"end":return r.stop()}},r,this)}))}},{key:"render",value:function(){var e=this.onRecipeClick,t=this.onItemEdit,r=this.onItemRemove,n=this.props,i=n.children,a=n.apolloClient,o=n.sidedishPickerComponent;return g.a.createElement(g.a.Fragment,null,i({onRecipeClick:e,onItemEdit:t,onItemRemove:r}),g.a.createElement(de,{ref:this.sidedishControl,component:o,apolloClient:a}))}}]),t}(),se=function(e){var t=e.orderId,r=e.renderLoading,n=e.renderError,i=e.renderEmpty,a=e.render;return t?g.a.createElement($.Query,{query:ne,variables:{orderId:t},fetchPolicy:"cache-and-network"},function(e){var t=e.data,o=e.error;if(e.loading)return r?r():null;if(o)return console.error(o),n?n(o):null;var l=t.order;return 0===l.countWares?i():a(l)}):i()},ce=function(e){var t=e.recipe,r=e.formatCategory,n=e.formatSidedish;return g.a.createElement("div",null,t.sidedishCategories.map(function(e){return g.a.createElement("div",{key:e.id},r(e),e.sidedishes.map(function(t){return g.a.createElement("span",{key:"".concat(t.id,"-").concat(e.id)},n(t))}))}))}},8023:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCreateControl=void 0;var n,i=r(8006),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(99),l=r(8200);t.OrderCreateControl=(({children:e})=>{const{createOrder:t}=(0,o.useRoot)();return a.default.createElement(i.OrderControl,{apolloClient:t.client,getOrderId:t.ensureOrder,sidedishPickerComponent:l.OrderSidedishModal},e)})},8024:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCartLine=void 0;var n=l(r(0)),i=l(r(51)),a=r(7867),o=r(52);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"Container"})`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`,u=i.default.div.withConfig({displayName:"RecipeCode"})`
  flex: 0 0 5rem;
  text-align: right;
`,s=i.default.div.withConfig({displayName:"RecipeName"})`
  flex: 1 0;
  padding-left: 1rem;
`,c=i.default.div.withConfig({displayName:"PriceToRight"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${o.Colors.greyMiddle};
`;t.OrderCartLine=(({code:e,label:t,price:r,hideCode:i=!1})=>n.default.createElement(d,null,i?null:n.default.createElement(u,null,e),n.default.createElement(s,null,t),n.default.createElement(c,null,n.default.createElement(a.Price,{price:r}))))},8027:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveOrderPromoMutation=t.AddOrderPromoMutation=t.OrderFormPromoQuery=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n};const a=i.default`
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
`;t.RemoveOrderPromoMutation=l},8033:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderListLoader=void 0;var n=r(104),i=r(100),a=c(r(0)),o=r(99),l=r(171),d=r(53),u=c(r(7913)),s=r(8246);function c(e){return e&&e.__esModule?e:{default:e}}const f=[l.OrderStateCategoryEnum.NewOrders,l.OrderStateCategoryEnum.Preparing,l.OrderStateCategoryEnum.ReadyToDeliver,l.OrderStateCategoryEnum.OnWay,l.OrderStateCategoryEnum.Finished];function m(e,t){const{order:r}=e.updatedOrder;if(!r)return t;let n=!1;const i=d.RM.reject(p,t.orders).map(e=>e.id===r.id?(n=!0,r):e);return n||i.unshift(r),Object.assign({},t,{orders:i})}function p(e){return e.orderStateCategory===l.OrderStateCategoryEnum.Finished&&(0,n.differenceInHours)(new Date,e.createdAt)>e.companyBranch.oldOrderThreshold}t.OrderListLoader=(({children:e,includeOldFinished:t=!1})=>{const{order:r}=(0,o.useRoot)();return(0,i.useObserver)(()=>{if(!r.list.hasBranchFilter)return a.default.createElement(u.default.Provider,{value:{isLoading:!1,noFilter:!0}},e);const n={branches:r.list.branchesFilter,categories:f,includeOldFinished:t};return a.default.createElement(s.QueryOrderList,{fetchPolicy:"cache-and-network",refetchOnConnectionLost:!0,variables:n,renderLoading:!1,render:({orders:t=[],orderStateCategories:r=[]},i)=>a.default.createElement(s.SubscribeOrderList,{queryResult:i,variables:n,handleUpdate:m},a.default.createElement(u.default.Provider,{value:{isLoading:i.loading,noFilter:!1,orders:t,categorizedOrders:function(e){return e.reduce((e,t)=>{const r=t.orderStateCategory;return f.includes(r)?(e[r]?e[r].push(t):e[r]=[t],e):e},{})}(t),categories:r.filter(e=>f.includes(e.enum))}},e))})})})},8034:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapActiveDriverFragment=t.OrderMapDeliveryFragment=t.OrderMapDriverFragment=t.OrderMapDeviceFragment=t.OrderMarkerFragment=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n},a=r(102);const o=i.default`
  fragment GOrderMarker on Order {
    id
    deliverAt
    gps {
      ...GGeoPoint
    }
  }
  ${a.GeoPointFragment}
`;t.OrderMarkerFragment=o;const l=i.default`
  fragment GOrderMapDevice on TransportationDeviceUser {
    id
    lastPosition {
      gps: geoPosition {
        ...GGeoPoint
      }
      timestamp
    }
  }
  ${a.GeoPointFragment}
`;t.OrderMapDeviceFragment=l;const d=i.default`
  fragment GOrderMapDriver on User {
    id
    initials
    countUndeliveredOrders
  }
`;t.OrderMapDriverFragment=d;const u=i.default`
  fragment GOrderMapDelivery on User {
    ...GOrderMapDriver
    device: usedTransportationDevice {
      ...GOrderMapDevice
    }
  }
  ${d}
  ${l}
`;t.OrderMapDeliveryFragment=u;const s=i.default`
  fragment GOrderMapActiveDriver on User {
    id
    firstName
    lastName
    countUndeliveredOrders
    userDeliveringOrders(onlyUndelivered: true) {
      id
      order {
        id
      }
    }
  }
`;t.OrderMapActiveDriverFragment=s},8035:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMap=void 0;var n,i=r(100),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7901),l=r(99),d=r(8390),u=r(8394);t.OrderMap=(()=>{const{order:e}=(0,l.useRoot)();return(0,i.useDisposable)(()=>e.list.observerOrderDetail(t=>{"add"===t.type&&e.map.panToOrder(t.newValue)})),(0,i.useObserver)(()=>a.default.createElement(o.BaseMap,{model:e.map},a.default.createElement(u.OrderMapOrders,null),a.default.createElement(d.OrderMapDeliveries,{branches:e.list.branchesFilter})))})},8186:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateOrderRoutes=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(25),o=r(282),l=r(284),d=r(8187);t.CreateOrderRoutes=(({match:e})=>i.default.createElement(a.Switch,null,i.default.createElement(l.SecureRoute,{exact:!0,path:e.path,component:d.CreateOrderPage}),i.default.createElement(a.Route,{component:o.NotFoundPage})))},8187:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateOrderPage=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(5798),o=r(7850),l=r(78),d=r(5803),u=r(7861),s=r(8188),c=r(8189),f=r(8194),m=r(8195),p=r(8196),v=r(8204),h=r(8222);t.CreateOrderPage=(({location:{state:e}})=>i.default.createElement(c.OrderFormSetup,{call:e},i.default.createElement(s.OrderCancelPrompt,null),i.default.createElement(d.PageLayout,{layouts:[{i:"bcancelorder",x:6,y:0,w:2,h:1},{i:"bacceptorder",x:10,y:0,w:3,h:1}],pageTitle:l.i18n._("New order"),useBackButton:!0},i.default.createElement("div",{key:"bcancelorder"},i.default.createElement(m.OrderCancelButton,null)),i.default.createElement("div",{key:"bacceptorder"},i.default.createElement(f.OrderAcceptButton,null))),i.default.createElement(u.PageLayoutFullHeightItem,{widthInColumns:5,withScrollArea:!0},i.default.createElement(a.Card,null,i.default.createElement(o.IconLine,{icon:"shopping_cart"},i.default.createElement(p.OrderCart,null))),i.default.createElement(a.Card,null,i.default.createElement(v.OrderForm,null))),i.default.createElement(u.PageLayoutFullHeightItem,{column:5,widthInColumns:11,withScrollArea:!1},i.default.createElement(h.OrderMenu,null))))},8188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCancelPrompt=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=r(25),a=r(99),o=r(78);t.OrderCancelPrompt=(()=>{const e=(0,a.useRoot)();return(0,n.useEffect)(()=>()=>e.createOrder.cancelOrder(),[]),n.default.createElement(i.Prompt,{message:o.i18n._("Do you really want to cancel order?"),when:e.createOrder.hasOrder})})},8189:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormSetup=void 0;var n=r(11),i=r(100),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=r(7849),l=r(99),d=r(78),u=r(7894),s=r(8190),c=r(8192);t.OrderFormSetup=(({call:e,children:t})=>{const{createOrder:r}=(0,l.useRoot)();(0,a.useEffect)(()=>{r.userIsCalling(e)},[e]),(0,c.useUpdateOrder)();const f=(0,a.useRef)(null),m=n.observable.box(),{onSubmit:p,onSubmitFailure:v}=(0,s.useAcceptOrder)(()=>new Promise(e=>{const t=m.observe(r=>{e(r.newValue),t()});f.current&&f.current.openDialog()}));return(0,i.useObserver)(()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(u.DeliveryTimeDialog,{title:d.i18n._("Change time of delivery to customer (in minutes)"),cancelText:d.i18n._("Use default branch delivery time"),onConfirm:e=>m.set(e),onCancel:()=>m.set(null),refApi:f}),a.default.createElement(o.Form,{values:r.formValues,onSubmit:p,onSubmitFailure:v,onChange:e=>r.updateFormValues(e.values,e.touched)},t)))})},8190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAcceptOrder=function(e){const{createOrder:t}=(0,i.useRoot)(),{enqueueSuccess:r,enqueueError:n}=(0,l.useSnackBar)(),{history:c}=(0,o.default)(),f=(0,a.useGuardedMutation)(u.AcceptOrderMutation,{getUserErrors:e=>e.finishOrder.userErrors,refetchQueries:["GOrderCart"]}),m=(0,a.useGuardedMutation)(u.SetOrderDeliveryTimeMutation);return{onSubmit:()=>s(this,void 0,void 0,function*(){const n=yield f(t.acceptOrderVariables);if(n&&0===n.finishOrder.userErrors.length&&n.finishOrder.order.id===t.orderId){const n=yield e();null!==n&&m({orderId:t.orderId,time:n}),t.resetModel(),c.replace("/order"),r(d.i18n._("Order has been accepted"))}}),onSubmitFailure:e=>{const t=Object.values(e);t.forEach(n)}}};var n,i=r(99),a=r(7874),o=(n=r(7872))&&n.__esModule?n:{default:n},l=r(7870),d=r(78),u=r(8191);var s=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})}},8191:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SetOrderDeliveryTimeMutation=t.AcceptOrderMutation=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n};const a=i.default`
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
`;t.SetOrderDeliveryTimeMutation=o},8192:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useUpdateOrder=function(){const{createOrder:e}=(0,a.useRoot)(),t=(0,o.useGuardedMutation)(l.UpdateOrderMutation);(0,i.useObservableEffect)(()=>(0,n.autorun)(()=>{e.orderId&&t({orderId:e.orderId,deliveryType:e.deliveryType,gps:e.gps})}))};var n=r(11),i=r(100),a=r(99),o=r(7874),l=r(8193)},8193:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateOrderMutation=void 0;const i=((n=r(23))&&n.__esModule?n:{default:n}).default`
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
`;t.UpdateOrderMutation=i},8194:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderAcceptButton=void 0;var n,i=r(100),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7849),l=r(99),d=r(78),u=r(5794),s=r(52);const c=(0,o.withFormApi)(({formApi:e})=>{const{createOrder:t}=(0,l.useRoot)();return(0,i.useObserver)(()=>a.default.createElement(u.TouchButton,{color:s.Colors.green,text:d.i18n._("Accept order"),disabled:!t.hasOrder||e.submitting,onClick:e.submitForm}))});t.OrderAcceptButton=c},8195:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCancelButton=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(25),o=r(78),l=r(5794),d=r(52);t.OrderCancelButton=(e=>i.default.createElement(a.Route,null,({history:e})=>i.default.createElement(l.TouchButton,{color:d.Colors.red,text:o.i18n._("Cancel order"),onClick:()=>{e.goBack()}})))},8196:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCart=void 0;var n,i=r(130),a=r(8006),o=r(100),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),d=(n=r(51))&&n.__esModule?n:{default:n},u=r(5807),s=r(99),c=r(7866),f=r(8023),m=r(8202),p=r(8203);const v=d.default.div.withConfig({displayName:"CartStyled"})`
  margin: 0.1rem 0.1rem 0.1rem -2rem;
  position: relative;
`,h=d.default.div.withConfig({displayName:"EmptyCartStyled"})`
  margin: 0.5rem 0 0 0.5rem;
`;t.OrderCart=(e=>{const{createOrder:t}=(0,s.useRoot)(),r=(0,l.useRef)(void 0);return l.default.createElement(f.OrderCreateControl,null,({onItemRemove:e,onItemEdit:n})=>l.default.createElement(o.Observer,null,()=>l.default.createElement(a.OrderCartLoader,{key:t.cartRefreshKey,orderId:t.orderId,renderEmpty:()=>l.default.createElement(h,null,l.default.createElement(i.Trans,{id:"Cart is empty"})),renderLoading:()=>r.current||l.default.createElement(u.Loading,null),render:t=>{const i=l.default.createElement(v,null,l.default.createElement(p.OrderCartTotals,{order:t}),l.default.createElement(c.VerticalGap,null),t.items.map(t=>l.default.createElement(m.OrderCartItem,{key:t.id,item:t,onEdit:()=>n(t.id),onRemove:()=>e(t.id)})));return r.current=i,i}})))})},8197:function(e,t,r){e.exports=r(8198)},8198:function(e,t,r){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(8199),i)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(o){n.regeneratorRuntime=void 0}},8199:function(e,t){!function(t){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",d=a.toStringTag||"@@toStringTag",u="object"===typeof e,s=t.regeneratorRuntime;if(s)u&&(e.exports=s);else{(s=t.regeneratorRuntime=u?e.exports:{}).wrap=b;var c="suspendedStart",f="suspendedYield",m="executing",p="completed",v={},h={};h[o]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(D([])));g&&g!==n&&i.call(g,o)&&(h=g);var O=E.prototype=_.prototype=Object.create(h);k.prototype=O.constructor=E,E.constructor=k,E[d]=k.displayName="GeneratorFunction",s.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,d in e||(e[d]="GeneratorFunction")),e.prototype=Object.create(O),e},s.awrap=function(e){return{__await:e}},S(M.prototype),M.prototype[l]=function(){return this},s.AsyncIterator=M,s.async=function(e,t,r,n){var i=new M(b(e,t,r,n));return s.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},S(O),O[d]="Generator",O[o]=function(){return this},O.toString=function(){return"[object Generator]"},s.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=D,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return l.type="throw",l.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var d=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(d&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(d){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;N(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:D(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(e,t,r,n){var i=t&&t.prototype instanceof _?t:_,a=Object.create(i.prototype),o=new x(n||[]);return a._invoke=function(e,t,r){var n=c;return function(i,a){if(n===m)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return j()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var l=w(o,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===c)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var d=C(e,t,r);if("normal"===d.type){if(n=r.done?p:f,d.arg===v)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(n=p,r.method="throw",r.arg=d.arg)}}}(e,r,o),a}function C(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function k(){}function E(){}function S(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function M(e){var t;this._invoke=function(r,n){function a(){return new Promise(function(t,a){!function t(r,n,a,o){var l=C(e[r],e,n);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,a,o)},function(e){t("throw",e,a,o)}):Promise.resolve(u).then(function(e){d.value=e,a(d)},function(e){return t("throw",e,a,o)})}o(l.arg)}(r,n,t,a)})}return t=t?t.then(a,a):a()}}function w(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,w(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=C(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function D(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},8200:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderSidedishModal=void 0;var n=r(130),i=r(131),a=r(8006),o=f(r(0)),l=f(r(51)),d=r(78),u=r(5794),s=r(52),c=r(8201);function f(e){return e&&e.__esModule?e:{default:e}}const m=l.default.div.withConfig({displayName:"SidedishCategory"})`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0 0 0.2rem 0.2rem;
  color: ${s.Colors.black};
`;t.OrderSidedishModal=(e=>o.default.createElement(i.Dialog,{open:!0,onClose:e.onCancel,scroll:"paper",maxWidth:"lg"},o.default.createElement(i.DialogTitle,null,e.recipe?o.default.createElement(n.Trans,{id:"Add something else to {0}?",values:{0:e.recipe.nameLabel}}):o.default.createElement(n.Trans,{id:"Loading sidedishes..."})),e.recipe&&o.default.createElement(i.DialogContent,null,o.default.createElement(a.SidedishPicker,{recipe:e.recipe,formatCategory:e=>o.default.createElement(m,null,e.nameLabel),formatSidedish:t=>o.default.createElement(c.OrderMenuSidedishButton,{label:t.nameLabel,isSelected:e.isSidedishSelected(t.id),onClick:()=>e.onSidedishToggle(t.id)})})),e.recipe&&o.default.createElement(i.DialogActions,null,o.default.createElement(u.TouchButton,{text:d.i18n._("Cancel"),onClick:e.onCancel}),o.default.createElement(u.TouchButton,{text:d.i18n._("Confirm"),onClick:e.onConfirm,color:s.Colors.green}))))},8201:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuSidedishButton=void 0;var n=l(r(0)),i=l(r(51)),a=r(5794),o=r(52);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"SidedishButtonContainer"})`
  margin: 0 1rem 1rem 0;
  width: 8rem;
  display: inline-block;
`;t.OrderMenuSidedishButton=(({label:e,isSelected:t,onClick:r})=>n.default.createElement(d,null,n.default.createElement(a.TouchButton,{text:e,onClick:r,color:t?o.Colors.orange:o.Colors.greyDark})))},8202:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCartItem=void 0;var n=c(r(0)),i=c(r(51)),a=r(7875),o=r(7947),l=r(5794),d=r(7887),u=r(52),s=r(8024);function c(e){return e&&e.__esModule?e:{default:e}}const f=i.default.div.withConfig({displayName:"OrderCartItemStyled"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-top: 1px solid ${u.Colors.greyMiddle};
  padding: 0.1rem 0;
`,m=i.default.div.withConfig({displayName:"TouchButtonColumn"})`
  flex: 0 0 auto;
  padding-right: 0.5rem;
`;t.OrderCartItem=(({item:e,onRemove:t,onEdit:r})=>n.default.createElement(f,null,n.default.createElement(a.CardDock,{position:"BottomRight"},n.default.createElement(d.TouchButtonDelete,{onDelete:t})),n.default.createElement(m,null,n.default.createElement(l.TouchButton,{onClick:r,iconName:"mode_edit",width:u.Spacing.ButtonHeight,height:u.Spacing.ButtonHeight})),n.default.createElement(o.Flex,null,n.default.createElement(s.OrderCartLine,{key:e.id,code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),e.sidedishes.map(e=>n.default.createElement(s.OrderCartLine,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value})))))},8203:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCartTotals=void 0;var n=l(r(0)),i=l(r(51)),a=r(78),o=r(8024);function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  text-align: right;
`;t.OrderCartTotals=(({order:e})=>n.default.createElement(d,null,n.default.createElement("b",null,n.default.createElement(o.OrderCartLine,{label:a.i18n._("Total price"),price:e.totalSum.value,hideCode:!0})),n.default.createElement(o.OrderCartLine,{label:a.i18n._("Transport fee"),price:e.transportFee.value,hideCode:!0}),n.default.createElement(o.OrderCartLine,{label:a.i18n._("Covers price"),price:e.coverPrice.value,hideCode:!0}),n.default.createElement(o.OrderCartLine,{label:a.i18n._("Discount total"),price:-1*e.totalDiscount.value,hideCode:!0})))},8204:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderForm=void 0;var n=r(100),i=b(r(0)),a=b(r(51)),o=r(7854),l=r(8205),d=r(7868),u=r(7850),s=r(99),c=r(7858),f=r(78),m=r(8206),p=r(8207),v=r(8213),h=r(8215),y=r(8218),g=r(8219),O=r(8220);function b(e){return e&&e.__esModule?e:{default:e}}const C=a.default.div.withConfig({displayName:"LookupResultIcon"})`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.7rem;
`,_=(0,a.default)(c.Sizer).withConfig({displayName:"SizerInline"})`
  display: inline-block;
`,k=(0,a.default)(_).withConfig({displayName:"SizerInlineLastName"})`
  margin: 0 0 0 0.2rem;
`;t.OrderForm=(()=>{const{createOrder:e}=(0,s.useRoot)();return i.default.createElement(i.default.Fragment,null,i.default.createElement(u.IconLine,{icon:"phone"},i.default.createElement(n.Observer,null,()=>i.default.createElement(g.OrderFormPhone,{isRequired:e.isDelivery})),i.default.createElement(C,null,i.default.createElement(v.OrderFormCustomerLookup,null))),i.default.createElement(n.Observer,null,()=>i.default.createElement(u.IconLine,{icon:"streetview"},i.default.createElement(y.OrderFormDeliveryType,{field:"deliveryType"}),i.default.createElement(h.OrderFormDeliveryAddress,{isVisible:e.isDelivery}))),i.default.createElement(u.IconLine,{icon:"store"},i.default.createElement(p.OrderFormBranch,null)),i.default.createElement(d.HorizontalSeparator,null),i.default.createElement(u.IconLine,{icon:"person"},i.default.createElement(_,{width:7},i.default.createElement(o.FormInputTextBox,{field:"firstName",inputFullWidth:!0,placeholder:f.i18n._("First name").toLocaleLowerCase()})),i.default.createElement(k,{width:12.8},i.default.createElement(o.FormInputTextBox,{field:"lastName",inputFullWidth:!0,placeholder:f.i18n._("Last name").toLocaleLowerCase()}))),i.default.createElement(u.IconLine,{icon:"mail_outline"},i.default.createElement(c.Sizer,{width:20},i.default.createElement(o.FormInputTextBox,{field:"email",inputFullWidth:!0,placeholder:f.i18n._("E-mail").toLocaleLowerCase()}))),i.default.createElement(u.IconLine,{icon:"note"},i.default.createElement(l.FormInputTextBoxMultiline,{field:"note",inputFullWidth:!0,placeholder:f.i18n._("Note").toLocaleLowerCase()})),i.default.createElement(u.IconLine,{icon:"card_giftcard"},i.default.createElement(O.OrderFormPromo,null)),i.default.createElement(m.OrderFormAutofill,null))})},8205:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputTextBoxMultiline=void 0;var n=d(r(0)),i=r(7849),a=d(r(51)),o=r(52),l=r(7859);function d(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};const c=(0,a.default)(i.TextArea).withConfig({displayName:"FormInputTextBoxMultilineStyled"})`
  padding: 0.5rem;
  border-radius: ${o.Radiuses.TextComponent};
  resize: none;
  overflow: auto;
  box-sizing: border-box;
  margin: ${o.Spacing.MarginAroundFormComponents};
  ${({inputFullWidth:e,inputWidth:t,inputWidthUnit:r})=>!0===e?"width: 100%; display: block;":`width: ${t}${r}`};
`;t.FormInputTextBoxMultiline=(e=>{var{field:t,defaultValue:r,inputWidth:i=o.Spacing.DefaultInputWidth,inputWidthUnit:a=o.Spacing.DefaultSizeUnit,inputFullWidth:d=!1,children:f}=e,m=s(e,["field","defaultValue","inputWidth","inputWidthUnit","inputFullWidth","children"]);return t?n.default.createElement(c,u({field:t,defaultValue:r,inputFullWidth:d,inputWidth:i,inputWidthUnit:a},m)):n.default.createElement(l.FormInputStyled,m)})},8206:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormAutofill=void 0;var n;(n=r(0))&&n.__esModule,r(103),r(5794);t.OrderFormAutofill=(e=>null)},8207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormBranch=void 0;var n,i=r(100),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(99),l=r(5810),d=r(78),u=r(7881);t.OrderFormBranch=(()=>{const{user:e,createOrder:t}=(0,o.useRoot)();return(0,l.useEffectOnce)(()=>{t.branchId||t.selectBranch(e.defaultBranch.id)}),(0,i.useObserver)(()=>a.default.createElement(u.CompanyBranchPicker,{isClearable:!1,selectedBranches:[t.currentBranch.id],onSelectionChange:([e])=>{t.orderId&&!window.confirm(d.i18n._("Changing branch will cancel current order and remove all items from the cart. Proceed?"))||(t.selectBranch(e),t.resetOrder())}}))})},8213:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormCustomerLookup=void 0;var n=r(131),i=r(279),a=(m(r(5848)),r(11)),o=r(100),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),d=m(r(51)),u=r(99),s=r(7889),c=r(52),f=r(8214);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})};const v=(0,d.default)(i.WarningOutlined)`
  font-size: 1rem;
  color: ${c.Colors.orange};
`,h=(0,d.default)(i.Close)`
  font-size: 1rem;
  color: ${c.Colors.greyMiddle};
`,y=(0,d.default)(i.Check)`
  font-size: 1rem;
  color: ${c.Colors.green};
`;t.OrderFormCustomerLookup=(()=>{const{createOrder:e}=(0,u.useRoot)(),[t,r]=(0,l.useState)(null),{execute:i}=(0,s.useExecutableQuery)(f.OrderVamQuery,{fetchPolicy:"no-cache"});return(0,o.useDisposable)(()=>(0,a.autorun)(()=>{!function(t){p(this,void 0,void 0,function*(){if(e.updateFromVam(null),a=e.phone,o=e.phonePrefix,!Boolean(a&&a.length>=6&&o&&o.length>=3))return r(null);var a,o;r(l.default.createElement(n.CircularProgress,{size:20}));const d=yield i({branchId:t,phone:`${e.phonePrefix}${e.phone}`});if(d.hasAnyError)return r(l.default.createElement(v,null));if(d.data){const{vamCustomer:t}=d.data;if(t.isFound)return e.updateFromVam(t),r(l.default.createElement(y,null))}r(l.default.createElement(h,null))})}(e.currentBranch.id)})),t})},8214:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.OrderVamQuery=void 0;const i=((n=r(23))&&n.__esModule?n:{default:n}).default`
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
`;t.OrderVamQuery=i},8215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormDeliveryAddress=function(e){const{createOrder:t}=(0,c.useRoot)(),r=(0,o.useComputed)(()=>{if(!t.vamCustomer)return t.fakeAddress?[t.fakeAddress]:[];const{locations:e}=t.vamCustomer;return e}),n=(0,l.useCallback)(e=>{t.useLocation(e)},[]),d=(0,o.useComputed)(()=>t.notDeliveryLocation?l.default.createElement(h,null,l.default.createElement(a.Warning,null),l.default.createElement(i.Trans,{id:"Address is not within any delivery zone"})):t.hasAddress?l.default.createElement(y,null):null);return(0,o.useObserver)(()=>l.default.createElement("div",{hidden:!e.isVisible},l.default.createElement(v,null,l.default.createElement(u.Flex,null,l.default.createElement(m.AddressSuggest,{fixedLocations:r,fixedLocationsLabel:f.i18n._("Previous addresses"),selectedLocation:t.deliveryAddress||t.fakeAddress||null,onSelect:n,onClear:t.clearLocation,inputPlaceholder:f.i18n._("Deliver to address").toLocaleLowerCase()}),d))))};var n,i=r(130),a=r(279),o=r(100),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),d=(n=r(51))&&n.__esModule?n:{default:n},u=r(7947),s=r(7860),c=r(99),f=r(78),m=r(8216),p=r(52);const v=(0,d.default)(s.FlexRowSingle).withConfig({displayName:"InputLine"})`
  justify-content: flex-start;
`,h=d.default.div.withConfig({displayName:"ZoneWarning"})`
  display: inline-flex;
  align-items: center;
  color: ${p.Colors.violet};
`,y=(0,d.default)(a.Check)`
  font-size: 1rem;
  color: ${p.Colors.green};
`},8216:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddressSuggest=void 0;var n,i=r(100),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7855),l=r(5799),d=r(53),u=r(7948),s=r(7889),c=r(78),f=r(8217);var m=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})};const p=e=>e.filter(d.RM.propSatisfies(Boolean,"gps"));t.AddressSuggest=(({onSelect:e,onClear:t,fixedLocations:r,fixedLocationsLabel:n,selectedLocation:v,minSearchLength:h=3,inputPlaceholder:y})=>{const g=(0,i.useObservable)({options:[],isSearching:!1}),{execute:O}=(0,s.useExecutableQuery)(f.AddressSuggestQuery),b=(0,u.useDebounceCallback)(e=>m(void 0,void 0,void 0,function*(){g.isSearching=!0;const t=e.trim();if(t.length<h)return g.options=[],void(g.isSearching=!1);const r=yield O({search:t});r.data&&(g.options=p(r.data.suggest)),g.isSearching=!1}));return(0,i.useObserver)(()=>a.default.createElement(o.SelectControl,{styles:(0,o.composeSelectControlStyles)({control:e=>Object.assign({},e,{min_width:"8rem"})}),getOptionLabel:l.formatAddress,options:(()=>r&&0!==r.length?[{label:n,options:[...p(r)]},{label:c.i18n._("Matching to input"),options:g.options}]:g.options)(),placeholder:y,value:v,filterOption:d.RM.T,isClearable:!0,isLoading:g.isSearching,onInputChange:e=>{b(e)},onChange:r=>{r&&!Array.isArray(r)?e(r):t()}}))})},8217:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddressSuggestQuery=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n},a=r(102);const o=i.default`
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
`;t.AddressSuggestQuery=o},8218:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormDeliveryType=function({field:e}){return a.default.createElement(o.FormInputFlatSelect,{field:e,items:u,formatItem:e=>d.i18n._(e.label),getItemId:e=>e.type})},t.types=void 0;var n,i=r(130),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(7912),l=r(171),d=r(78);const u=[{type:l.DeliveryTypeEnum.Messenger,label:(0,i.i18nMark)("Deliver")},{type:l.DeliveryTypeEnum.Pickup,label:(0,i.i18nMark)("Personal pickup")}];t.types=u},8219:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormPhone=void 0;var n=d(r(0)),i=d(r(51)),a=r(7854),o=r(7858),l=r(78);function d(e){return e&&e.__esModule?e:{default:e}}const u=(0,i.default)(o.Sizer).withConfig({displayName:"SizerInline"})`
  display: inline-block;
`,s=(0,i.default)(u).withConfig({displayName:"SizerInlinePhone"})`
  margin: 0 0 0 0.2rem;
`;t.OrderFormPhone=(({isRequired:e=!1})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(u,{width:4},n.default.createElement(a.FormInputTextBox,{field:"phonePrefix",inputFullWidth:!0,isRequired:e,validatioName:l.i18n._("Phone prefix"),validationMessage:l.i18n._("Phone prefix is required"),placeholder:"+"})),n.default.createElement(s,{width:8.8},n.default.createElement(a.FormInputTextBox,{field:"phone",isRequired:e,inputFullWidth:!0,validatioName:l.i18n._("Phone"),validationMessage:l.i18n._("Phone number is required"),placeholder:l.i18n._("Phone").toLocaleLowerCase()}))))},8220:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormPromo=void 0;var n,i=r(130),a=r(11),o=r(100),l=(n=r(0))&&n.__esModule?n:{default:n},d=r(99),u=r(7855),s=r(53),c=r(7889),f=r(78),m=r(8221),p=r(8027);t.OrderFormPromo=(()=>{const{createOrder:e}=(0,d.useRoot)(),{result:t,execute:r}=(0,c.useExecutableQuery)(p.OrderFormPromoQuery),n=(0,m.usePromoCodes)();return(0,o.useDisposable)(()=>(0,a.autorun)(()=>{r({branchId:e.currentBranch.id})})),t.hasAnyError?l.default.createElement(i.Trans,{id:"Failed retrieving available promo codes"}):(0,o.useObserver)(()=>l.default.createElement(u.SelectControl,{options:t.data?t.data.promoCodes:[],isLoading:t.loading,isMulti:!0,isClearable:!0,getOptionValue:s.RM.prop("id"),getOptionLabel:s.RM.prop("code"),placeholder:f.i18n._("Promo codes").toLocaleLowerCase(),noOptionsMessage:()=>f.i18n._("No promo codes available"),value:Array.from(n.values()),onChange:e=>{Array.isArray(e)?n.replace(e.map(e=>[e.id,e])):n.clear()}}))})},8221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePromoCodes=function(){const{createOrder:e}=(0,o.useRoot)(),t=(0,a.useRef)(n.observable.map()).current,r=(0,l.useGuardedMutation)(d.AddOrderPromoMutation,{refetchQueries:["GOrderCart"],getUserErrors:e=>e.addOrderPromoCode.userErrors}),s=(0,a.useCallback)(n=>u(this,void 0,void 0,function*(){const i=yield r({orderId:e.orderId,code:n.code});i&&i.addOrderPromoCode.userErrors.length&&t.delete(n.id)}),[]),c=(0,l.useGuardedMutation)(d.RemoveOrderPromoMutation,{refetchQueries:["GOrderCart"]});return(0,i.useDisposable)(()=>t.observe(t=>{null!==e.orderId&&("add"===t.type&&s(t.newValue),"delete"===t.type&&c({orderId:e.orderId,codeId:t.oldValue.id}))})),(0,i.useDisposable)(()=>(0,n.when)(()=>null!==e.orderId,()=>{t.forEach(s)})),t};var n=r(11),i=r(100),a=r(0),o=r(99),l=r(7874),d=r(8027),u=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{d(n.next(e))}catch(t){a(t)}}function l(e){try{d(n.throw(e))}catch(t){a(t)}}function d(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,l)}d((n=n.apply(e,t||[])).next())})}},8222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenu=t.OrderMenuView=void 0;var n=r(100),i=g(r(0)),a=r(280),o=g(r(51)),l=r(5798),d=r(7949),u=g(r(105)),s=r(99),c=r(53),f=r(8023),m=r(8223),p=r(8224),v=r(8226),h=r(8227),y=r(8244);function g(e){return e&&e.__esModule?e:{default:e}}const O=(0,o.default)(l.Card).withConfig({displayName:"FilterCard"})`
  flex: 0 0 auto;
`,b=o.default.div.withConfig({displayName:"CategoriesCont"})`
  flex: 0 0 auto;
`,C=({onRecipeClick:e,orderMenu:t})=>{const{observableFilter:r,computedRecipes:a,toggleCategory:o,searchByText:l}=(0,m.useOrderMenuFilter)(t);return(0,n.useObserver)(()=>i.default.createElement(d.AutoHeight,null,i.default.createElement(O,null,i.default.createElement(v.OrderMenuFilter,{recipeCount:a.get().length,selectedCategory:t.find(c.RM.propEq("id",r.categoryId))||null,onSearch:l,onConfirm:()=>{const t=a.get();return 1===t.length&&(e(t[0]),!0)}})),i.default.createElement(b,null,i.default.createElement(p.OrderMenuCategories,{categories:t,activeCategory:r.categoryId,onCategoryClick:o})),i.default.createElement(h.OrderMenuRecipes,{recipes:a.get(),onRecipeClick:e})))};t.OrderMenuView=C;const _=(0,n.observer)(()=>{const{createOrder:e}=(0,s.useRoot)(),{data:t,loading:r}=(0,a.useQuery)(y.OrderMenuQuery,{suspend:!1,variables:{branchId:e.currentBranch.id}});return r?i.default.createElement(u.default,null):i.default.createElement(f.OrderCreateControl,null,({onRecipeClick:e})=>i.default.createElement(C,{orderMenu:t&&t.orderMenu?t.orderMenu:[],onRecipeClick:e}))});t.OrderMenu=_},8223:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useOrderMenuFilter=function(e){const t=(0,o.useObservable)({categoryId:null,search:""}),r=(0,l.useMemo)(()=>(0,a.computed)(()=>{let r,n=e;if(null!==t.categoryId&&(n=e.filter(u.RM.propEq("id",t.categoryId))),0===n.length)return[];if(r=i.default.concat([],...n.map(u.RM.prop("recipes"))),t.search.length>0){const e=(0,d.isPartialMatch)(t.search);return r.filter(u.RM.cond([[u.RM.propSatisfies(e,"code"),u.RM.T],[u.RM.propSatisfies(e,"nameLabel"),u.RM.T]]))}return r}),[e]),n=(0,l.useCallback)(e=>{t.categoryId===e?t.categoryId=null:t.categoryId=e},[]),s=(0,l.useCallback)(e=>{t.search=e},[]);return{observableFilter:t,computedRecipes:r,toggleCategory:n,searchByText:s}};var n,i=(n=r(293))&&n.__esModule?n:{default:n},a=r(11),o=r(100),l=r(0),d=r(7900),u=r(53)},8224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuCategories=void 0;var n=o(r(0)),i=o(r(51)),a=r(8225);function o(e){return e&&e.__esModule?e:{default:e}}const l=i.default.div.withConfig({displayName:"FlexFlow"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;t.OrderMenuCategories=(({categories:e,activeCategory:t,onCategoryClick:r})=>n.default.createElement(l,null,e.map(e=>n.default.createElement(a.OrderMenuCategory,{key:e.id,category:e,isActive:e.id===t,onClick:()=>r(e.id)}))))},8225:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuCategory=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(51)),o=r(5798),l=r(52);const d=(0,a.default)(o.Card).withConfig({displayName:"CategoryCard"})`
  flex: 1;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 0.3rem 0.5rem 0;
  width: 4.5rem;
  min-height: 2.9rem;
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
`,s=a.default.span.withConfig({displayName:"CategoryName"})`
  position: absolute;
  font-size: 0.7rem;
  text-transform: uppercase;
  margin-left: 0.3rem;
  width: 2rem;
`;t.OrderMenuCategory=(({category:e,isActive:t,onClick:r})=>i.default.createElement(d,{isActive:t,onClick:r},i.default.createElement(u,null,i.default.createElement("span",{className:`flaticon-${e.pictogram}`})),i.default.createElement(s,null,function(e){return e.split(/\s+/).map(e=>e.substr(0,3)).filter(e=>e.length>=3).join(" ")}(e.nameLabel))))},8226:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuFilter=void 0;var n,i=r(288),a=r(130),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),l=(n=r(51))&&n.__esModule?n:{default:n},d=r(7859);const u=l.default.span.withConfig({displayName:"FilterResults"})`
  padding-left: 1rem;
`,s=l.default.div.withConfig({displayName:"SelectedCategory"})`
  float: right;
  margin: 0.6rem 2rem;
  font-weight: bold;
`;t.OrderMenuFilter=(({recipeCount:e,selectedCategory:t,onSearch:r,onConfirm:n})=>{const l=(0,o.useRef)(null),c=(0,o.useCallback)(e=>{r(e.target.value)},[]),f=(0,o.useCallback)(e=>{"Enter"===e.key&&!0===n()&&l.current&&(l.current.value="",r(""))},[]);return o.default.createElement(o.default.Fragment,null,o.default.createElement(d.FormInputStyled,{onChange:c,onKeyDown:f,placeholder:`${i.i18n._("Code").toLocaleLowerCase()} / ${i.i18n._("Title").toLocaleLowerCase()}`,autoComplete:"off",ref:l}),o.default.createElement(u,null,o.default.createElement(a.Trans,{id:"{recipeCount, plural, zero {No recipes found} one {One recipe found, Enter to confirm} few {Found # recipes} other {Found # recipes}}",values:{recipeCount:e}})),t?o.default.createElement(s,null,t.nameLabel):null)})},8227:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuRecipes=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(8005),o=r(7947),l=r(8243);t.OrderMenuRecipes=(({recipes:e,onRecipeClick:t,columnCount:r=5})=>{const n=e.length,d=Math.ceil(n/r);return i.default.createElement(o.Flex,null,i.default.createElement(a.AutoSizer,null,({width:o,height:u})=>i.default.createElement(a.Grid,{rowCount:d,columnCount:r,columnWidth:o/r-4,width:o,height:u,rowHeight:100,cellRenderer:({columnIndex:a,rowIndex:o,key:d,style:u})=>{const s=o*r+a;if(s>=n)return null;const c=e[s];return i.default.createElement("div",{style:Object.assign({},u),key:d,onClick:()=>t(c)},i.default.createElement(l.OrderMenuRecipeCard,{recipe:c}))}})))})},8243:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuRecipeCard=void 0;var n=r(131),i=r(279),a=c(r(0)),o=c(r(51)),l=r(5798),d=r(7867),u=r(5812),s=r(52);function c(e){return e&&e.__esModule?e:{default:e}}const f=(0,o.default)(l.Card).withConfig({displayName:"RecipeStyled"})`
  box-sizing: border-box;
  height: 5.8rem;
  cursor: pointer;
  padding: 0.5rem 0 0 0.3rem;
  margin: 0 0.5rem 0.5rem 0;
  &:hover {
    background-color: ${s.Colors.yellow};
  }
`,m=o.default.div.withConfig({displayName:"RecipeName"})`
  padding-top: 0.2rem;
`,p=o.default.span.withConfig({displayName:"RecipeCode"})`
  font-weight: bold;
  border: 1px solid ${s.Colors.greyMiddle};
  border-radius: 0.5rem 0 0 0;
  padding: 0.1rem;
`,v=(0,o.default)(d.Price).withConfig({displayName:"RecipePrice"})`
  position: absolute;
  right: 1.1rem;
  top: 4.5rem;
  font-weight: 500;
  font-size: 1.1rem;
  color: ${s.Colors.greyDarkest};
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
`,h=(0,o.default)(i.Attachment)`
  position: absolute;
  right: 1rem;
  top: 0.2rem;
`;t.OrderMenuRecipeCard=(({recipe:e})=>a.default.createElement(n.Tooltip,{title:e.descriptionLabel,enterDelay:u.SECOND},a.default.createElement(f,null,a.default.createElement(p,null,e.code),a.default.createElement(m,null,e.nameLabel),a.default.createElement(v,{price:e.price.value,currencyCode:e.price.currency.code}),e.sidedishCount>0?a.default.createElement(h,null):null)))},8244:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMenuQuery=t.OrderMenuCategory=t.OrderMenuRecipe=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n};const a=i.default`
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
`;t.OrderMenuQuery=l},8245:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapPage=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(78),o=r(5803),l=r(7861),d=r(7945),u=r(8033),s=r(8035);t.OrderMapPage=(()=>i.default.createElement(i.default.Fragment,null,i.default.createElement(o.PageLayout,{layouts:[{i:"bOrders",x:15,y:1,w:1,h:2}],pageTitle:a.i18n._("Map"),scrollPageTitle:!1},i.default.createElement("div",{key:"bOrders"},i.default.createElement(d.OrderButton,{count:null}))),i.default.createElement(u.OrderListLoader,null,i.default.createElement(l.PageLayoutFullHeightItem,{widthInColumns:15},i.default.createElement(s.OrderMap,null)))))},8246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubscribeOrderList=t.QueryOrderList=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n},a=r(79),o=r(8247),l=r(5805),d=r(7951),u=r(8034);const s=i.default`
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
      ...GOrderMarker
    }
    orderStateCategories {
      code
      enum
    }
  }

  ${l.OrderStateCategoryFragment}
  ${u.OrderMarkerFragment}
  ${d.OrderTickerFragment}
`,c=i.default`
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
        ...GOrderMarker
      }
    }
  }
  ${l.OrderStateCategoryFragment}
  ${u.OrderMarkerFragment}
  ${d.OrderTickerFragment}
`,f=(0,a.buildQuery)(s);t.QueryOrderList=f;const m=(0,o.buildSubscription)(c);t.SubscribeOrderList=m},8247:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildSubscription=function(e){return function(t){return(0,n.useEffectOnce)(()=>{const{queryResult:r,variables:n,handleUpdate:i}=t;return r.subscribeToMore({document:e,variables:n,updateQuery:(e,{subscriptionData:t})=>t&&t.data&&i(t.data,e)||e})}),t.children}};var n=r(5810)},8390:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapDeliveries=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(280),o=r(7901),l=r(132),d=r(8391),u=r(8393);var s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};t.OrderMapDeliveries=(({branches:e})=>{const{data:t,updateQuery:r}=(0,a.useQuery)(u.OrderMapDeliveriesQuery,{variables:{branches:e},suspend:!1});(0,a.useSubscription)(u.OrderMapDeliveriesSubscription,{variables:{branches:e},onSubscriptionData({subscriptionData:{data:e}}){if(!e)return;const{update:{device:t}}=e;t&&r(e=>{let r=!1;const n=e.deliveries.map(e=>e.device&&e.device.id===t.id?e.id===t.user.id?(r=!0,Object.assign({},e,{device:t})):null:e);if(!r){const{user:{__typename:e,id:r,initials:i,countUndeliveredOrders:a}}=t,o=s(t,["user"]);n.push({__typename:e,id:r,initials:i,countUndeliveredOrders:a,device:o})}return Object.assign({},e,{deliveries:n.filter(Boolean)})})}});const n=(0,o.useGoogleMap)();if(!t||!t.deliveries||0===t.deliveries.length)return null;const c=t.deliveries.filter(e=>Boolean(e.device&&e.device.lastPosition)).map(e=>i.default.createElement(d.OrderMapDelivery,{key:e.id,position:e.device.lastPosition.gps,label:e.initials||e.id,isEmpty:0===e.countUndeliveredOrders,onClick:()=>{n&&n.panTo((0,l.gpsToLatLng)(e.device.lastPosition.gps))}}));return i.default.createElement(i.default.Fragment,null,c)})},8391:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapDelivery=void 0;var n=r(279),i=r(5802),a=f(r(0)),o=r(7882),l=f(r(51)),d=r(8392),u=r(132),s=r(5794),c=r(52);function f(e){return e&&e.__esModule?e:{default:e}}const m=l.default.div.withConfig({displayName:"OrderMapDeliveryStyled"})`
  color: ${e=>e.isEmpty?c.Colors.green:c.Colors.red};
`,p=l.default.div.withConfig({displayName:"OrderMapDeliveryLabelStyled"})`
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  background-color: ${c.Colors.white};
`,v=l.default.div.withConfig({displayName:"OrderMapDeliveryButtonStyled"})`
  font-size: 1.7rem;
  text-align: center;
  text-shadow: 1px 1px ${c.Colors.greyDark};
`,h=i.css`
  font-size: 32px;
`;t.OrderMapDelivery=(({position:e,label:t,isEmpty:r,onClick:i})=>{const l=(0,u.gpsToLatLng)(e);return a.default.createElement(a.default.Fragment,null,a.default.createElement(d.MapControl,{position:"LEFT_TOP"},a.default.createElement(s.TouchButton,{onClick:i},a.default.createElement(m,{isEmpty:r},a.default.createElement(v,null,t)))),a.default.createElement(o.OverlayView,{position:l,mapPaneName:o.OverlayView.OVERLAY_MOUSE_TARGET,getPixelPositionOffset:(e,t)=>({x:-e/2,y:-t/2})},a.default.createElement(m,{isEmpty:r},a.default.createElement(p,null,t),a.default.createElement(n.DirectionsCar,{className:h}))))})},8392:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapControl=void 0;var n=r(0),i=r(24),a=r(7901);t.MapControl=(({position:e,children:t})=>{const r=(0,a.useGoogleMap)(),[o]=(0,n.useState)(()=>document.createElement("div"));return(0,n.useEffect)(()=>{const t=r.controls[google.maps.ControlPosition[e]];return t.push(o),()=>{const e=t.getArray().findIndex(e=>e===o);t.removeAt(e)}},[e]),(0,i.createPortal)(t,o)})},8393:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapDeliveriesSubscription=t.OrderMapDeliveriesQuery=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n},a=r(8034);const o=i.default`
  query QOrderMapDeliveries($branches: [ID!]!) {
    deliveries: drivers(companyBranches: $branches, onlyAvailable: false) {
      ...GOrderMapDelivery
    }
  }
  ${a.OrderMapDeliveryFragment}
`;t.OrderMapDeliveriesQuery=o;const l=i.default`
  subscription SOrderMapDeliveries($branches: [ID!]!) {
    update: updatedTransportationDeviceUser(companyBranches: $branches) {
      actionType
      device: transportationDeviceUser {
        ...GOrderMapDevice
        user {
          ...GOrderMapDriver
        }
      }
    }
  }
  ${a.OrderMapDeviceFragment}
  ${a.OrderMapDriverFragment}
`;t.OrderMapDeliveriesSubscription=l},8394:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapOrders=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(99),o=r(171),l=r(8395),d=r(7913);const u=[o.OrderStateCategoryEnum.NewOrders,o.OrderStateCategoryEnum.Preparing,o.OrderStateCategoryEnum.OnWay];t.OrderMapOrders=(()=>{const{order:e}=(0,a.useRoot)(),{isLoading:t,orders:r}=(0,d.useOrderList)();return t||!r?null:i.default.createElement(i.default.Fragment,null,r.filter(e=>u.includes(e.orderStateCategory)).filter(e=>e.deliveryType&&e.deliveryType.enum===o.DeliveryTypeEnum.Messenger).map(t=>i.default.createElement(l.OrderMapMarker,{key:t.id,order:t,onClick:()=>e.list.focusOrderDetail(t.id)})))})},8395:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapMarker=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(7882),o=r(132),l=r(7928);t.OrderMapMarker=(({order:e,isFade:t,onClick:r})=>e.gps?i.default.createElement(a.OverlayView,{position:(0,o.gpsToLatLng)(e.gps),mapPaneName:a.OverlayView.OVERLAY_MOUSE_TARGET},i.default.createElement(l.DeliveryTimeBadge,{deliverAt:e.deliverAt,deliveredAt:null,onClick:r})):null)},8396:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderOverviewPage=void 0;var n=g(r(0)),i=g(r(51)),a=r(7851),o=r(78),l=r(5803),d=r(7861),u=r(7903),s=r(7943),c=r(8397),f=r(8399),m=r(8401),p=r(8402),v=r(8405),h=r(8033),y=r(8035);function g(e){return e&&e.__esModule?e:{default:e}}const O=i.default.div.withConfig({displayName:"FilterContainer"})`
  margin: -0.05rem 0rem -0.05rem -0.18rem;
`;t.OrderOverviewPage=(()=>n.default.createElement(h.OrderListLoader,null,n.default.createElement(c.OrderNotificationSound,null),n.default.createElement(d.PageLayoutFullHeightItem,{withScrollArea:!0,row:2,widthInColumns:8,scrollAreaId:"order-list"},n.default.createElement(p.OrderList,null)),n.default.createElement(d.PageLayoutFullHeightItem,{widthInColumns:8,column:8,withScrollArea:!1},n.default.createElement(y.OrderMap,null),n.default.createElement(m.MapFullscreenButton,null)),n.default.createElement(l.PageLayout,{layouts:[{i:"filter",x:0,y:1,w:6,h:1},{i:"neworder",x:6,y:1,w:2,h:1},{i:"deliverytime",x:8,y:0,w:1,h:1}],pageTitle:o.i18n._("Orders"),showSoundControl:!0,scrollPageTitle:!1},n.default.createElement(u.PageLayoutItem,{key:"filter",component:()=>n.default.createElement(O,null,n.default.createElement(v.OrderListBranchFilter,null))}),n.default.createElement(u.PageLayoutItem,{key:"neworder",component:()=>n.default.createElement(a.CanMutate,{mutationName:"createOrder"},n.default.createElement(s.CreateOrderButton,{showOnlyText:!0}))}),n.default.createElement(u.PageLayoutItem,{key:"deliverytime",component:()=>n.default.createElement(a.CanMutate,{mutationName:"updateDefaultOrderProcessTime"},n.default.createElement(f.BranchDeliveryTime,null))}))))},8397:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNotificationSound=void 0;var n=r(100),i=c(r(0)),a=c(r(8398)),o=r(99),l=r(5839),d=r(171),u=r(53),s=r(7913);function c(e){return e&&e.__esModule?e:{default:e}}t.OrderNotificationSound=(()=>{const{isLoading:e,categorizedOrders:t}=(0,s.useOrderList)(),{config:r,order:c}=(0,o.useRoot)();return e||!t?null:(0,n.useObserver)(()=>{const e=!u.RM.all(e=>c.list.isOrderDetailOpen(e.id),t[d.OrderStateCategoryEnum.NewOrders]||[]);return i.default.createElement(l.SoundPlayInterval,{shouldPlay:e,intervalSec:r.orderListSoundIntervalSec,soundUrl:a.default})})})},8398:function(e,t,r){e.exports=r.p+"static/media/orderNotification.0aa2ebe9.mp3"},8399:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BranchDeliveryTime=void 0;var n,i=r(131),a=r(279),o=r(100),l=(n=r(0))&&n.__esModule?n:{default:n},d=r(99),u=r(7929),s=r(7874),c=r(78),f=r(7894),m=r(8400);const p=(0,o.observer)(e=>{const{order:t}=(0,d.useRoot)(),r=(0,s.useGuardedMutation)(m.UpdateBranchDeliveryTimeMutation),n=t.list.firstBranchId;return n?l.default.createElement(f.DeliveryTimeDialog,{title:c.i18n._("Change default time of delivery to customer (in minutes)"),onConfirm:e=>{r({branchId:n,time:e})}},({openDialog:e})=>l.default.createElement(m.QueryBranchDeliveryTime,{variables:{branchId:n},render:({companyBranch:t})=>l.default.createElement(u.TimeBadge,{variant:u.ETimeBadgeVariant.NORMAL,minutes:t.defaultDeliveryTime,onClick:e})})):l.default.createElement(i.Tooltip,{title:c.i18n._("Select a single branch to set delivery time")},l.default.createElement(u.TimeBadge,{variant:u.ETimeBadgeVariant.UNKNOWN},l.default.createElement(a.Alarm,null)))});t.BranchDeliveryTime=p},8400:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryBranchDeliveryTime=t.UpdateBranchDeliveryTimeMutation=t.BranchDeliveryTimeQuery=void 0;var n,i=(n=r(23))&&n.__esModule?n:{default:n},a=r(79);const o=i.default`
  query GBranchDeliveryTime($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      defaultDeliveryTime
    }
  }
`;t.BranchDeliveryTimeQuery=o;const l=i.default`
  mutation MUpdateBranchDeliveryTime($branchId: ID!, $time: Int!) {
    updateDefaultOrderProcessTime(
      companyBranch: $branchId
      deliveryType: MESSENGER
      defaultTime: $time
    ) {
      id
      defaultDeliveryTime
    }
  }
`;t.UpdateBranchDeliveryTimeMutation=l;const d=(0,a.buildQuery)(o);t.QueryBranchDeliveryTime=d},8401:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapFullscreenButton=void 0;var n=d(r(0)),i=r(172),a=d(r(51)),o=r(5794),l=r(52);function d(e){return e&&e.__esModule?e:{default:e}}const u=a.default.div.withConfig({displayName:"DivTopRightStyled"})`
  position: absolute;
  top: 0;
  right: 0;
  width: 3.4375rem;
  height: 3.4375rem;
`;t.MapFullscreenButton=(()=>n.default.createElement(u,null,n.default.createElement(i.Link,{to:"/order/map"},n.default.createElement(o.TouchButton,{iconName:"map",color:l.Colors.greyMiddle}))))},8402:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderList=void 0;var n,i=r(130),a=r(100),o=(n=r(0))&&n.__esModule?n:{default:n},l=r(7890),d=r(5807),u=r(99),s=r(7913),c=r(8403);t.OrderList=(()=>{const{order:e}=(0,u.useRoot)(),{isLoading:t,noFilter:r,orders:n,categories:f,categorizedOrders:m}=(0,s.useOrderList)();return t?o.default.createElement(d.Loading,null):r?o.default.createElement(l.CardListTitle,null,o.default.createElement(i.Trans,{id:"Select at least one branch"})):0===n.length?o.default.createElement(l.CardListTitle,null,o.default.createElement(i.Trans,{id:"No orders"})):(0,a.useObserver)(()=>o.default.createElement(o.default.Fragment,null,f.map(t=>o.default.createElement(c.OrderListCategory,{key:t.enum,isCategoryCollapsed:e.list.isCategoryCollapsed(t.enum),category:t,orders:m[t.enum]||[],showBranches:e.list.branches.length>1,toggleCategoryCollapse:e.list.toggleCategoryCollapse,toggleOrderDetail:e.list.toggleOrderDetail,isOrderDetailOpen:e.list.isOrderDetailOpen}))))})},8403:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderListCategory=void 0;var n,i=(n=r(0))&&n.__esModule?n:{default:n},a=r(171),o=r(7962),l=r(8404);t.OrderListCategory=(({orders:e,category:t,showBranches:r,isCategoryCollapsed:n=!1,toggleCategoryCollapse:d,toggleOrderDetail:u,isOrderDetailOpen:s})=>i.default.createElement(i.default.Fragment,null,i.default.createElement(l.OrderListTitle,{count:e.length,isCountBold:t.enum===a.OrderStateCategoryEnum.NewOrders,isCollapsed:n,onClick:()=>d(t.enum)},t.code),e.length>0&&!n&&e.map(e=>i.default.createElement(o.OrderBox,{key:e.id,order:e,toggleOrderDetail:u,isOrderDetailOpen:s,showBranch:r}))))},8404:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderListTitle=void 0;var n=r(130),i=d(r(175)),a=d(r(0)),o=d(r(51)),l=r(52);function d(e){return e&&e.__esModule?e:{default:e}}const u=o.default.div.withConfig({displayName:"Container"})`
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
`,s=o.default.h2.withConfig({displayName:"ListTitle"})`
  color: ${l.Colors.greyLight};
  font-weight: lighter;
  font-size: 1.6rem;
  margin: 1.2rem 0 0.8rem 0.4rem;
`,c=o.default.div.withConfig({displayName:"Badge"})`
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
`,f=(0,o.default)(c).withConfig({displayName:"BadgeBold"})`
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
`;t.OrderListTitle=(({count:e=0,isCollapsed:t=!1,isCountBold:r=!1,onClick:i,children:o})=>a.default.createElement(u,{onClick:i},t?a.default.createElement(p,null):a.default.createElement(m,null),a.default.createElement(s,null,o),r?a.default.createElement(f,null,e):a.default.createElement(c,null,e),t?a.default.createElement(v,null,a.default.createElement(n.Trans,{id:"List is collapsed"})):null))},8405:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderListBranchFilter=void 0;var n,i=r(100),a=(n=r(0))&&n.__esModule?n:{default:n},o=r(99),l=r(7881),d=r(52);t.OrderListBranchFilter=(()=>{const{order:e}=(0,o.useRoot)();return(0,i.useObserver)(()=>a.default.createElement(l.CompanyBranchPicker,{selectedBranches:Array.from(e.list.branches),onSelectionChange:t=>{e.list.setBranchFilter(t)},onSelectionClear:e.list.clearBranchFilter,textColor:d.Colors.turquoise,isMulti:!0,isClearable:!1}))})}}]);
//# sourceMappingURL=173.549a8755.chunk.js.map