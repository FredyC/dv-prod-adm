(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{7649:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(69),a=t(0),c=t.n(a),i=t(7657),o=t(81),l=function(e){var n=e.mutationName,t=e.children,a=Object(o.b)().user;return Object(r.useObserver)(function(){return a.canMutate(n)?c.a.createElement(c.a.Fragment,null,t):c.a.createElement(i.a,null,"No access to mutation ".concat(n))})}},7650:function(e,n,t){"use strict";t.d(n,"a",function(){return E});var r=t(51),a=t(5),c=t(0),i=t.n(c),o=t(26),l=t(20),u=t(124);function s(){var e=Object(a.a)(["\n  padding-top: 0.2rem;\n  display: inline-block;\n"]);return s=function(){return e},e}function d(){var e=Object(a.a)(["\n  margin-left: 0.5rem;\n  align-self: stretch;\n  flex: 1 1 auto;\n"]);return d=function(){return e},e}function m(){var e=Object(a.a)(["\n  margin: ",";\n  min-width: ",";\n  flex: 0 0 auto;\n  text-align: right;\n"]);return m=function(){return e},e}function f(){var e=Object(a.a)(["\n  display: flex;\n"]);return f=function(){return e},e}var b=o.c.div(f());b.displayName="IconLineWrap";var p=o.c.div(m(),function(e){var n=e.labelMargin;return void 0===n?"0.5rem 0.2rem 0 auto":n},function(e){var n=e.labelWidth,t=void 0===n?0:n,r=e.labelWidthUnits;return t+(void 0===r?l.d.DefaultSizeUnit:r)}),v=o.c.div(d()),h=o.c.div(s());v.displayName="IconLineChildren";var E=function(e){var n,t=e.icon,a=e.label,c=e.labelWidth,o=e.labelWidthUnits,s=e.labelMargin,d=e.children,m=Object(r.a)(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);return t&&(n="string"===typeof t?i.a.createElement(u.a,{iconName:t,color:l.a.greyDark}):i.a.createElement(t,{nativeColor:l.a.greyDark})),i.a.createElement(b,m,i.a.createElement(p,{labelWidth:c,labelWidthUnits:o,labelMargin:s},n,a?i.a.createElement(h,null,a):null),i.a.createElement(v,null,d))}},7652:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t(43),a=t(0),c=t.n(a),i=t(7684),o=t(20),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({},e,{control:function(n,t){var a=t.selectProps,c=a.width,i=a.minWidth,l=Object(r.a)({},n,{border:"1px solid ".concat(o.a.greyMiddle),margin:o.d.MarginAroundFormComponents,width:void 0!==c?"".concat(c,"rem"):"100%",minWidth:void 0!==i?"".concat(i,"rem"):"8rem"});return e.control?e.control(l,t):l},menu:function(n,t){var a=t.selectProps.width,c=Object(r.a)({},n,{zIndex:20,color:o.a.black,width:void 0!==a?"".concat(a,"rem"):"100%"});return e.menu?e.menu(c,t):c},valueContainer:function(n,t){var a=t.selectProps.maxHeight,c=Object(r.a)({},n,{maxHeight:void 0!==a?"".concat(a,"rem"):"100%",overflowY:void 0!==a?"scroll":"hidden"});return e.valueContainer?e.valueContainer(c,t):c}})};function u(e){return c.a.createElement(i.b,Object.assign({},e,{styles:l(e.styles)}))}},7653:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t(51),a=t(0),c=t.n(a),i=t(7647),o=t(7667),l=t(42),u=t(7654),s=c.a.forwardRef(function(e,n){var t=e.field,a=e.inputFullWidth,s=void 0!==a&&a,d=e.isRequired,m=e.validatioName,f=e.validationMessage,b=e.validate,p=Object(r.a)(e,["field","inputFullWidth","isRequired","validatioName","validationMessage","validate"]);return c.a.createElement(i.Field,{field:t,validate:b||function(e){return d&&Object(o.isEmpty)(e+"")?f||l.b._("{validatioName} is required",{validatioName:m}):null}},function(e){return c.a.createElement(u.a,Object.assign({value:e.value||0===e.value?e.value:"",onChange:function(n){n.target.validity.valid&&(e.setTouched(!0),e.setValue(n.target.value))},inputFullWidth:s,invalid:Boolean(e.error),ref:n},p))})})},7654:function(e,n,t){"use strict";t.d(n,"b",function(){return s}),t.d(n,"a",function(){return d});var r=t(5),a=t(26),c=t(20);function i(){var e=Object(r.a)(["\n  margin: ",";\n  ",";\n  ",";\n"]);return i=function(){return e},e}function o(){var e=Object(r.a)(["\n  width: 100%;\n"]);return o=function(){return e},e}function l(){var e=Object(r.a)(["\n  border: 1px red solid;\n"]);return l=function(){return e},e}var u=Object(a.b)(l()),s=Object(a.b)(o()),d=a.c.input(i(),c.d.MarginAroundFormComponents,function(e){return e.inputFullWidth&&s},function(e){return e.invalid&&u})},7655:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(5),a=t(26),c=t(20);function i(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: lighter;\n  margin: ",";\n  font-size: ",";\n"]);return i=function(){return e},e}var o=a.c.h2(i(),function(e){var n=e.light;return void 0!==n&&n?c.a.greyLight:c.a.greyDarkest},function(e){var n=e.margin;return void 0===n?"0 0.5rem 0 0.5rem":n},function(e){return"smaller"===e.size&&"1rem"})},7656:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(69),a=t(0),c=t.n(a),i=t(7657),o=t(81),l=function(e){var n=e.queryName,t=e.children,a=Object(o.b)().user;return Object(r.useObserver)(function(){return a.canQuery(n)?c.a.createElement(c.a.Fragment,null,t):c.a.createElement(i.a,null,"No access to query ".concat(n))})}},7657:function(e,n,t){"use strict";t.d(n,"a",function(){return r});t(0);var r=function(e){e.children;return null}},7662:function(e,n,t){"use strict";t.d(n,"a",function(){return g});var r=t(60),a=t(65),c=t(72),i=t(71),o=t(73),l=t(5),u=t(95),s=t(0),d=t.n(s),m=t(26),f=t(32);function b(){var e=Object(l.a)(["\n    font-weight: bolder;\n    text-decoration: underline;\n  "]);return b=function(){return e},e}function p(){var e=Object(l.a)(["\n  border: ",";\n"]);return p=function(){return e},e}function v(){var e=Object(l.a)(["\n  margin: 0.5rem 0.6rem;\n  display: inline-block;\n  cursor: pointer;\n  color: ",";\n  ",";\n"]);return v=function(){return e},e}var h=m.c.div(v(),function(e){return e.textColor},function(e){if(!e.isSelected)return"";return Object(m.b)(b())}),E=m.c.div(p(),function(e){return!0===e.isInvalid?"1px red solid":"auto"}),g=function(e){function n(){return Object(r.a)(this,n),Object(c.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(o.a)(n,e),Object(a.a)(n,[{key:"hasSelection",value:function(){var e=this.props,n=e.isMulti,t=e.selectedItem,r=e.selectedItems;return n?Array.isArray(r)&&r.length>0:null!==t&&void 0!==t}},{key:"isItemSelected",value:function(e){var n=this.props,t=n.isMulti,r=n.selectedItem,a=n.selectedItems;return t&&Array.isArray(a)?f.a.contains(e,a):f.a.equals(r,e)}},{key:"updateSelection",value:function(e){var n=this.props,t=n.isMulti,r=n.selectedItems,a=void 0===r?[]:r,c=n.onSingleSelection,i=n.onMultiSelection;null===e?t&&i?i([]):c&&c(null):t&&i?this.isItemSelected(e)?i(Array.isArray(a)?f.a.without([e],a):[e]):i(Array.isArray(a)?f.a.concat(a,[e]):[]):c&&c(e)}},{key:"render",value:function(){var e=this,n=this.props,t=n.items,r=n.isClearable,a=n.isInvalid,c=void 0!==a&&a,i=n.textColor,o=void 0===i?"inherit":i,l=n.formatItem;return d.a.createElement(E,{isInvalid:c},r&&d.a.createElement(h,{isSelected:!this.hasSelection(),textColor:o,onClick:function(){e.updateSelection(null)}},d.a.createElement(u.Trans,{id:"optionselector.clear-filter"})),t.map(function(n,t){return d.a.createElement(h,{key:t,isSelected:e.isItemSelected(n),textColor:o,onClick:function(){e.updateSelection(n)}},l(n))}))}}]),n}(d.a.Component);g.defaultProps={formatItem:f.a.prop("displayName"),getItemValue:f.a.prop("id")}},7663:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(5);function a(){var e=Object(r.a)(["\n  flex: ",";\n  padding: ",";\n  margin: ",";\n"]);return a=function(){return e},e}var c=t(26).c.div(a(),function(e){var n=e.fixedWidth,t=void 0!==n&&n,r=e.width,a=e.widthGrowIndex,c=void 0===a?0:a;return t?r?"0 0 ".concat(r):"0 0":"".concat(c," 0")},function(e){var n=e.padding;return void 0===n?"0.25rem":n},function(e){var n=e.margin;return void 0===n?"":n})},7666:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=t(81),i=t(32),o=t(7670),l=t(51),u=t(7662),s=t(20),d=function(e){var n=e.branches,t=e.selectedBranch,r=e.selectedBranches,c=e.textColor,i=void 0===c?s.a.black:c,o=Object(l.a)(e,["branches","selectedBranch","selectedBranches","textColor"]);return a.a.createElement(u.a,Object.assign({items:n,selectedItem:t,selectedItems:r,textColor:i,formatItem:function(e){return a.a.createElement("span",{title:e.brand.name},e.name)}},o))};t.d(n,"a",function(){return m});var m=function(e){var n=e.breakpoint,t=void 0===n?3:n,r=e.selectedBranches,l=void 0===r?[]:r,u=e.isMulti,s=void 0!==u&&u,m=e.isClearable,f=void 0===m||m,b=e.textColor,p=e.onSelectionChange,v=e.onSelectionClear,h=e.getDropdownProps,E=void 0===h?function(){return{}}:h,g=Object(c.b)().user,y=function(e){return l.includes(e.id)},O={textColor:b,isClearable:f,isMulti:s,branches:g.branches,selectedBranch:g.branches.find(y),selectedBranches:g.branches.filter(y),onSingleSelection:function(e){null===e&&v?v():null!==e&&p&&p([e.id],[e])},onMultiSelection:function(e){0===e.length&&v?v():e.length&&p&&p(e.map(i.a.prop("id")),e)}};return g.branches.length<t?a.a.createElement(d,O):a.a.createElement(o.a,Object.assign({},O,E()))}},7670:function(e,n,t){"use strict";var r=t(43),a=t(51),c=t(95),i=t(0),o=t.n(i),l=t(5);function u(){var e=Object(l.a)(["\n  cursor: ",";\n"]);return u=function(){return e},e}var s=t(26).c.div(u(),function(e){var n=e.cursor;return void 0===n?"default":n}),d=function(e){var n=e.branch,t=e.onClick,r=e.short,a=void 0!==r&&r,c=e.showBrand,i=void 0===c||c;return o.a.createElement(s,{cursor:"pointer",onClick:t},a?n.name.substr(0,8):o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,n.name),i&&o.a.createElement("span",null," [".concat(n.brand.name,"]"))))},m=t(7652),f=t(32),b=t(42),p=t(20);t.d(n,"a",function(){return h});var v=function(e){var n=e.getStyles,t=e.innerProps,r=t.ref,i=Object(a.a)(t,["ref"]);return o.a.createElement("div",Object.assign({},i,{ref:r,style:n("clearIndicator",e)}),o.a.createElement("div",{style:{padding:"0px 5px"}},o.a.createElement(c.Trans,{id:"All"})))},h=function(e){var n=e.branches,t=e.selectedBranch,c=e.onSingleSelection,i=e.selectedBranches,l=e.onMultiSelection,u=Object(a.a)(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return o.a.createElement(m.a,Object.assign({value:u.isMulti?i:t,placeholder:u.isMulti?b.b._("Filter branches..."):b.b._("Select a branch"),maxHeight:p.d.ButtonHeight,options:n,getOptionValue:f.a.prop("id"),formatOptionLabel:function(e){return o.a.createElement(d,{branch:e})},filterOption:function(e,n){return e.data.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())},closeMenuOnSelect:!u.isMulti,components:{ClearIndicator:v},styles:{clearIndicator:function(e){return Object(r.a)({},e,{cursor:"pointer"})}},onChange:function(e){u.isMulti&&l&&Array.isArray(e)&&l(e),!u.isMulti&&c&&(Array.isArray(e)?c(f.a.head(e)||null):c(e||null))}},u))}},7673:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t(51),a=t(0),c=t.n(a),i=t(7647),o=t(7674),l=t(140),u=t(20),s=function(e){var n=e.children,t=Object(r.a)(e,["children"]);return c.a.createElement(i.FormApi,null,function(e){return c.a.createElement(l.a,Object.assign({color:u.a.green,disabled:!Object(o.a)(e)||e.submitting,onClick:function(n){n.preventDefault(),e.submitForm(n)}},t),n)})}},7674:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return i});var r=t(7667),a=t(42);function c(e){return!e.errors||0===Object.keys(e.errors).length}function i(e){return function(n){return Object(r.isEmpty)(n+"")?a.b._("{fieldName} must be entered",{fieldName:e}):null}}},7675:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(7724),a=t(7671),c=t(0),i=t.n(c),o=function(e){var n=e.children;return i.a.createElement(a.e,{utils:r.a},n)}},7679:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t(51),a=t(0),c=t.n(a),i=t(82),o=t(7649),l=t(7656),u=function(e){var n=e.route,t=e.component,u=e.canQuery,s=e.canMutate,d=Object(r.a)(e,["route","component","canQuery","canMutate"]),m=n?c.a.createElement(i.b,{to:n},Object(a.createElement)(t)):Object(a.createElement)(t);return u&&(m=c.a.createElement(l.a,{queryName:u},m)),s&&(m=c.a.createElement(o.a,{mutationName:s},m)),c.a.createElement("div",d,m)}},7683:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t(51),a=t(0),c=t.n(a),i=t(327),o=t(20),l=t(140),u=function(e){var n=e.onDelete,t=e.confirmText,a=Object(r.a)(e,["onDelete","confirmText"]);return c.a.createElement(i.a,null,c.a.createElement(l.a,Object.assign({iconName:"delete",color:o.a.greyMiddle,onClick:function(e){e.preventDefault(),t&&!window.confirm(t)||n()}},a)))}},7689:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t(99),a=t(69),c=t(0),i=t.n(c),o=t(7650),l=t(81),u=t(7666),s=function(e){var n=e.isMulti,t=e.width,c=Object(l.b)().settings;return Object(a.useObserver)(function(){return i.a.createElement(o.a,{icon:"store_mall_directory"},i.a.createElement(u.a,{selectedBranches:c.branchId?[c.branchId]:void 0,onSelectionChange:function(e){var n=Object(r.a)(e,1)[0];return c.selectBranch(n)},isMulti:n,isClearable:!1,getDropdownProps:function(){return{width:t}}}))})}},7712:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(51),a=t(0),c=t.n(a),i=t(7647),o=t(7795),l=function(e){var n=e.field,t=e.label,a=e.defaultValue,l=(e.children,Object(r.a)(e,["field","label","defaultValue","children"]));return c.a.createElement(o.a,null,c.a.createElement(i.Checkbox,Object.assign({field:n,checked:Boolean(a)},l)),t&&c.a.createElement("label",null,t))}},7763:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(5),a=t(26),c=t(20);function i(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid ",";\n  padding: 0.1rem 0 0.1rem 0;\n"]);return i=function(){return e},e}var o=a.c.div(i(),c.a.greyMiddle)},7766:function(e,n,t){"use strict";var r=t(51),a=t(0),c=t.n(a),i=t(7647),o=t(239),l=t(7671),u=t(7675),s=function(e){return c.a.createElement(u.a,null,c.a.createElement(l.b,Object.assign({format:"ll",maxDateMessage:o.i18n._("Date is too much in the future"),minDateMessage:o.i18n._("Date is too much in the past")},e)))};t.d(n,"a",function(){return d});var d=function(e){var n=e.field,t=Object(r.a)(e,["field"]);return c.a.createElement(i.Field,{field:n,render:function(e){return c.a.createElement(s,Object.assign({value:e.value,onChange:function(n){return e.setValue(n)},onOpen:function(){return e.setTouched(!0)}},t))}})}},7795:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(5),a=t(26),c=t(20);function i(){var e=Object(r.a)(["\n  input {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background-color: ",";\n    border: 1px solid ",";\n    padding: 1rem;\n    border-radius: ",";\n    display: inline-block;\n    position: relative;\n    margin: ",";\n    outline: none;\n    &:checked {\n      background-color: ",";\n      border: 1px solid ",";\n    }\n    &:checked:after {\n      content: '\\2714';\n      font-size: 2rem;\n      position: absolute;\n      top: -0.5rem;\n      left: 0.1rem;\n      color: ",";\n      overflow: hidden;\n    }\n    &:disabled {\n      background-color: ",";\n    }\n    &:disabled:after {\n      color: ",";\n    }\n  }\n  label {\n    display: inline-block;\n    margin: 0.4rem 0 0 0.5rem;\n    vertical-align: top;\n  }\n"],["\n  input {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background-color: ",";\n    border: 1px solid ",";\n    padding: 1rem;\n    border-radius: ",";\n    display: inline-block;\n    position: relative;\n    margin: ",";\n    outline: none;\n    &:checked {\n      background-color: ",";\n      border: 1px solid ",";\n    }\n    &:checked:after {\n      content: '\\\\2714';\n      font-size: 2rem;\n      position: absolute;\n      top: -0.5rem;\n      left: 0.1rem;\n      color: ",";\n      overflow: hidden;\n    }\n    &:disabled {\n      background-color: ",";\n    }\n    &:disabled:after {\n      color: ",";\n    }\n  }\n  label {\n    display: inline-block;\n    margin: 0.4rem 0 0 0.5rem;\n    vertical-align: top;\n  }\n"]);return i=function(){return e},e}var o=a.c.span(i(),c.a.white,c.a.greyMiddle,c.c.TextComponent,c.d.MarginAroundFormComponents,c.a.white,c.a.greyMiddle,c.a.greyDark,c.a.greyLight,c.a.greyMiddle)},7942:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(75),i=t(167),o=t(42),l=t(193),u=t(533),s=t(109),d=t(95),m=t(188),f=t(7655),b=t(189),p=t(7689),v=t(5),h=t(7647),E=t(26),g=t(7653),y=t(140),O=t(20),j=function(e){return a.a.createElement(y.a,{text:o.b._("Save invoice preferences"),color:O.a.green})};function k(){var e=Object(v.a)(["\n  margin-top: 1rem;\n  width: 15rem;\n"]);return k=function(){return e},e}var w=E.c.div(k()),x=function(e){return a.a.createElement(h.Form,null,a.a.createElement(g.a,{field:"account",placeholder:"N\xe1zev firmy"}),a.a.createElement("br",null),a.a.createElement(g.a,{field:"number",placeholder:"I\u010c"}),a.a.createElement(g.a,{field:"vatIdent",placeholder:"DI\u010c"}),a.a.createElement(w,null,a.a.createElement(j,null)))},M=t(7712),S=function(e){return a.a.createElement(h.Form,null,a.a.createElement(M.a,{field:"onlyPersonalPickup",label:o.b._("We are not delivering, only take away.")}),a.a.createElement("br",null),a.a.createElement(M.a,{field:"stoppage",label:o.b._("Completely stop all orders.")}))},C=function(e){return a.a.createElement(b.a,{pageTitle:o.b._("Branch preferences")},a.a.createElement(m.a,null,a.a.createElement(p.a,null),a.a.createElement(f.a,null,a.a.createElement(d.Trans,{id:"branch.preferences.stoppage"})),a.a.createElement(S,null),a.a.createElement(f.a,null,a.a.createElement(d.Trans,{id:"Change of invoice preferences"})),a.a.createElement(x,null)))},A=function(e){var n=e.match;return a.a.createElement(c.Switch,null,a.a.createElement(s.a,{exact:!0,path:n.path,component:C}),a.a.createElement(c.Route,{component:l.a}))},D=t(7649),I=t(7656),_=t(21),N=t.n(_),F=t(142),T=t(33),B=t(99),W=t(143),H=t(19),R=t(69),z=t(329),P=t(337),L=t(81),q=t(141),U=t(40),Q=t(238),V=t(191),Y=t(122),G=t(327),J=t(7671),Z=t(7675),K=function(e){return a.a.createElement(Z.a,null,a.a.createElement(J.d,Object.assign({format:"LT"},e)))};function X(){var e=Object(v.a)(["\n  & input {\n    width: 5rem;\n  }\n"]);return X=function(){return e},e}var $=E.c.div(X()),ee=a.a.memo(function(e){var n=e.hour;return Object(R.useObserver)(function(){return a.a.createElement($,null,a.a.createElement(K,{value:n.openAt,onChange:function(e){return n.openAt=e},label:a.a.createElement(d.Trans,{id:"input.timespan.from"}),fullWidth:!1}),a.a.createElement(K,{value:n.closeAt,onChange:function(e){return n.closeAt=e},label:a.a.createElement(d.Trans,{id:"input.timespan.to"}),fullWidth:!1}))})});function ne(){var e=Object(v.a)(["\n  display: flex;\n  align-items: baseline;\n  margin: 0 0 0.3rem 0;\n  h5 {\n    width: 5rem;\n  }\n  & .range {\n    display: flex;\n    margin: 0 2rem 0 0;\n    padding-right: 1rem;\n    background: ",";\n    border-radius: ",";\n  }\n  .remove-btn {\n    margin-right: 1rem;\n  }\n"]);return ne=function(){return e},e}var te=E.c.article(ne(),O.a.white,O.c.Button),re=a.a.memo(function(e){var n=e.weekday,t=e.hours,r=e.onAdd,c=e.onRemove,i=function(e){return a.a.createElement("div",{key:e.id,"data-testid":"bh-range",className:"range"},a.a.createElement(G.a,{className:"remove-btn"},a.a.createElement(y.a,{title:o.b._("Remove business hour"),role:"button",onClick:function(){return c(e.id)}},a.a.createElement(Y.i,null))),a.a.createElement(ee,{hour:e}))};return Object(R.useObserver)(function(){return a.a.createElement(te,null,a.a.createElement("h5",null,n.code),0===t.length?a.a.createElement("em",null,a.a.createElement(d.Trans,{id:"Closed"})):t.map(i),a.a.createElement(G.a,null,a.a.createElement(y.a,{title:o.b._("Add business hour"),role:"button",onClick:r},a.a.createElement(Y.b,null))))})}),ae=W.DFP.parse(new Date,"H:mm"),ce=function(){return Object(R.useObserver)(function(){var e=Object(L.b)().settings,n=Object(U.ob)({branchId:e.branchId}),t=n.data,r=n.loading,c=a.a.useRef(Object(H.observable)(new Map)),i=Object(U.x)(),l=Object(B.a)(i,1)[0];a.a.useEffect(function(){if(!r)return 0===c.current.size&&t.weekDays.forEach(function(e){c.current.set(e.enum,H.observable.array([]))}),t.businessHours.forEach(function(e){var n=e.id,t=e.openAt,r=e.closeAt,a=e.weekDay;a&&c.current.get(a.enum).push({id:n,openAt:ae(t),closeAt:ae(r),weekDay:a.enum})}),function(){c.current.forEach(function(e){e.clear()})}},[r,e.branchId]);var u=a.a.useRef(0),s=function(e){return function(n){var t=c.current.get(e),r=t.findIndex(W.RM.propEq("id",n));r>=0&&t.splice(r,1)}},d=Object(V.a)().enqueueSuccess,m=a.a.useCallback(Object(T.a)(N.a.mark(function n(){var t;return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=[],c.current.forEach(function(e,n){t.push.apply(t,Object(F.a)(e.map(function(e){return{openAt:Object(Q.e)(e.openAt),closeAt:Object(Q.e)(e.closeAt),weekDay:n}})))}),n.next=4,l({branchId:e.branchId,hours:t});case 4:n.sent&&d(o.b._("Regular business hours has been updated"));case 6:case"end":return n.stop()}},n,this)})),[]);return r||0===c.current.size?a.a.createElement(z.a,null):a.a.createElement("div",null,t.weekDays.map(function(e){return a.a.createElement(re,{key:e.enum,weekday:e,hours:c.current.get(e.enum),onAdd:(n=e.enum,function(){c.current.get(n).push({weekDay:n,id:"L".concat(u.current++),openAt:W.DFP.startOfDay(new Date),closeAt:W.DFP.endOfDay(new Date)})}),onRemove:s(e.enum)});var n}),a.a.createElement(q.a,{width:20},a.a.createElement(P.a,{margin:"1rem"},a.a.createElement(y.a,{text:o.b._("Save regular hours"),color:O.a.green,onClick:m}))))})},ie=t(74),oe=t(7766),le=t(51),ue=function(e){var n=e.field,t=Object(le.a)(e,["field"]);return a.a.createElement(h.Field,{field:n,render:function(e){return a.a.createElement(K,Object.assign({value:e.value,onChange:function(n){return e.setValue(n)},onOpen:function(){return e.setTouched(!0)}},t))}})};function se(){var e=Object(v.a)(["\n  width: 5rem;\n  display: inline-block;\n"]);return se=function(){return e},e}var de,me=E.c.div(se()),fe=function(e){var n=e.fieldFrom,t=e.fieldTo;return a.a.createElement(a.a.Fragment,null,a.a.createElement(me,null,a.a.createElement(ue,{field:n,label:a.a.createElement(d.Trans,{id:"input.timespan.from"}),fullWidth:!1})),a.a.createElement(me,null,a.a.createElement(ue,{field:t,label:a.a.createElement(d.Trans,{id:"input.timespan.to"}),fullWidth:!1})))},be=t(7673),pe=t(350),ve=t(190),he=t(239),Ee=t(7662);var ge=(de={},Object(ve.a)(de,pe.b.TIMESPAN,Object(he.i18nMark)("Open between")),Object(ve.a)(de,pe.b.FULLDAY,Object(he.i18nMark)("Closed")),de),ye=a.a.memo(function(){var e=Object(L.b)().settings.businessHours;return a.a.createElement(Ee.a,{items:[pe.b.TIMESPAN,pe.b.FULLDAY],selectedItem:e.specificMode,formatItem:function(e){return o.b._(ge[e])},onSingleSelection:function(n){return e.changeSpecificMode(n)}})});function Oe(){var e=Object(v.a)(["\n  display: inline-block;\n  width: 16rem;\n  min-height: 6rem;\n  margin: 0rem 0 0 1rem;\n  vertical-align: top;\n"]);return Oe=function(){return e},e}function je(){var e=Object(v.a)(["\n  display: inline-block;\n  width: 13rem;\n  margin-left: 1rem;\n  margin-top: 2rem;\n"]);return je=function(){return e},e}var ke=E.c.div(je()),we=E.c.div(Oe()),xe=function(e){var n=Object(L.b)().settings.businessHours;return a.a.createElement(h.Form,{onSubmit:n.submitSpecificHour,defaultValues:Me()},a.a.createElement(ke,null,a.a.createElement(oe.a,{field:"date",format:Q.g,minDate:new Date,fullWidth:!0,label:a.a.createElement(d.Trans,{id:"Date"})})),a.a.createElement(we,null,a.a.createElement(ye,null),a.a.createElement(R.Observer,null,function(){return n.specificMode===pe.b.TIMESPAN?a.a.createElement(fe,{fieldFrom:"openAt",fieldTo:"closeAt"}):a.a.createElement(q.a,{width:13},a.a.createElement(g.a,{field:"note",inputFullWidth:!0,placeholder:o.b._("Closing reason")}))})),a.a.createElement(be.a,{width:"9rem"},o.b._("Add")))};function Me(){var e=new Date;return{date:e,openAt:Object(ie.setHours)(Object(ie.setMinutes)(e,0),9),closeAt:Object(ie.setHours)(Object(ie.setMinutes)(e,0),20)}}var Se=t(32),Ce=t(7663),Ae=t(7763),De=t(7683),Ie=function(e){var n=e.bsHour,t=e.onDelete;return a.a.createElement(Ae.a,null,a.a.createElement(Ce.a,{fixedWidth:!0},a.a.createElement(D.a,{mutationName:"destroyBusinessHour"},a.a.createElement(De.a,{onDelete:t,confirmText:"".concat(o.b._("Really remove specific business hour {0}?",{0:n.specificDateLocalized}))}))),a.a.createElement(Ce.a,{fixedWidth:!0,width:"14rem"},n.specificDateLocalized),a.a.createElement(Ce.a,{widthGrowIndex:1},function(e){if(e.closed)return e.closedNote;return"".concat(e.openAt," - ").concat(e.closeAt)}(n)))};var _e=t(489),Ne=Se.a.sort(Se.a.ascend(Se.a.or(Se.a.prop("specificDate"),Se.a.not))),Fe=function(){var e=Object(L.b)().settings;return Object(R.useObserver)(function(){return a.a.createElement(_e.a,{variables:{branchId:e.branchId},fetchPolicy:"cache-and-network",renderFragment:function(n){var t=n.businessHours;return Ne(t).map(function(n){return a.a.createElement(Ie,{key:n.id,bsHour:n,onDelete:function(){return e.businessHours.deleteSpecificHour(n.id)}})})}})})},Te=function(){return a.a.createElement(b.a,{pageTitle:o.b._("Business hours"),useBackButton:!0},a.a.createElement(m.a,null,a.a.createElement(p.a,null),a.a.createElement(I.a,{queryName:"businessHours"},a.a.createElement(f.a,null,a.a.createElement(d.Trans,{id:"Regular business hours"})),a.a.createElement(ce,null)),a.a.createElement(f.a,null,a.a.createElement(d.Trans,{id:"Specific business hours"})),a.a.createElement(Fe,null),a.a.createElement(D.a,{mutationName:"addSpecialBusinessHour"},a.a.createElement(f.a,null,a.a.createElement(d.Trans,{id:"Add specific business hour"})),a.a.createElement(xe,null))))},Be=function(e){var n=e.match;return a.a.createElement(c.Switch,null,a.a.createElement(s.a,{exact:!0,path:n.path,component:Te}),a.a.createElement(c.Route,{component:l.a}))},We=t(330),He=t(7679),Re=function(e){return a.a.createElement(y.a,{text:o.b._("Business hours"),iconName:"av_timer",color:O.a.red})},ze=function(e){return a.a.createElement(y.a,{text:o.b._("Categories"),iconName:"folder",color:O.a.turquoise})},Pe=function(e){return a.a.createElement(y.a,{text:o.b._("Recipes"),iconName:"insert_drive_file",color:O.a.turquoise})},Le=function(e){return a.a.createElement(y.a,{text:o.b._("Stock overview"),iconName:"assignment",color:O.a.turquoise})},qe=function(e){return a.a.createElement(y.a,{text:o.b._("Stock deposit"),iconName:"open_in_browser",color:O.a.turquoise})},Ue=function(){return a.a.createElement(y.a,{text:o.b._("User"),iconName:"person",color:O.a.greyMiddle})},Qe=function(e){return a.a.createElement(y.a,{text:o.b._("Delivery zones"),iconName:"edit_location",color:O.a.violet})};var Ve=function(e){return a.a.createElement(We.a,{layouts:[{i:"BusinessHours",x:0,y:1,w:2,h:2},{i:"Preferences",x:2,y:1,w:2,h:2},{i:"ZonesMenu",x:4,y:1,w:2,h:2},{i:"UserMenu",x:6,y:1,w:2,h:2},{i:"MenuRecipe",x:0,y:3,w:2,h:2},{i:"MenuCategory",x:2,y:3,w:2,h:2},{i:"MenuStock",x:4,y:3,w:2,h:2},{i:"MenuStockDeposit",x:6,y:3,w:2,h:2}]},a.a.createElement(He.a,{key:"BusinessHours",route:"/settings/businesshours",component:Re,canQuery:"businessHours"}),a.a.createElement(He.a,{key:"MenuRecipe",route:"/settings/menu/recipe",component:Pe,canQuery:"recipes"}),a.a.createElement(He.a,{key:"MenuCategory",route:"/settings/menu/category",component:ze,canQuery:"wareCategories"}),a.a.createElement(He.a,{key:"MenuStock",route:"/settings/menu/stock",component:Le,canQuery:"stockItems"}),a.a.createElement(He.a,{key:"MenuStockDeposit",route:"/settings/menu/stock/deposit",component:qe,canMutate:"changeAmountStockItem"}),a.a.createElement(He.a,{key:"ZonesMenu",route:"/settings/zones",component:Qe,canQuery:"zones"}),a.a.createElement(He.a,{key:"UserMenu",route:"/settings/user",component:Ue,canQuery:"user"}))};t.d(n,"SettingsRoutes",function(){return Ze});var Ye=a.a.lazy(function(){return Promise.all([t.e(165),t.e(177),t.e(181)]).then(t.bind(null,7943))}),Ge=a.a.lazy(function(){return Promise.all([t.e(3),t.e(165),t.e(180)]).then(t.bind(null,7939))}),Je=a.a.lazy(function(){return t.e(187).then(t.bind(null,7949))}),Ze=function(e){var n=e.match;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a.Route,{path:n.path,title:o.b._("Settings")}),a.a.createElement(c.Switch,null,a.a.createElement(s.a,{exact:!0,path:n.path,component:Ve}),a.a.createElement(u.a,{path:"".concat(n.path,"/menu"),component:Ge}),a.a.createElement(u.a,{path:"".concat(n.path,"/zones"),component:Ye}),a.a.createElement(u.a,{path:"".concat(n.path,"/user"),component:Je}),a.a.createElement(c.Route,{path:"".concat(n.path,"/businesshours"),component:Be}),a.a.createElement(c.Route,{path:"".concat(n.path,"/preferences"),component:A}),a.a.createElement(c.Route,{component:l.a})))};n.default=Ze}}]);
//# sourceMappingURL=178.a5ffb4fb.chunk.js.map