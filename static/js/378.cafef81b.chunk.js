(this.webpackJsonpspeedlo=this.webpackJsonpspeedlo||[]).push([[378],{1363:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(59),a=t(0),i=t.n(a),c=t(1355),o=t(1365),l=Object(r.b)(function(e){var n=e.mutationName,t=e.children;return Object(c.b)(n)?i.a.createElement(i.a.Fragment,null,t):i.a.createElement(o.a,null,"No access to mutation ".concat(n))})},1368:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(4);function a(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: ",";\n  justify-content: ",";\n"]);return a=function(){return e},e}var i=t(18).c.div(a(),function(e){var n=e.flexWrap;return void 0===n?"unset":n},function(e){var n=e.justify;return void 0===n?"space-between":n})},1370:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(4);function a(){var e=Object(r.a)(["\n  flex: ",";\n  padding: ",";\n  margin: ",";\n"]);return a=function(){return e},e}var i=t(18).c.div(a(),function(e){var n=e.fixedWidth,t=void 0!==n&&n,r=e.width,a=e.widthGrowIndex,i=void 0===a?0:a;return t?r?"0 0 ".concat(r):"0 0":"".concat(i," 0")},function(e){var n=e.padding;return void 0===n?"0.25rem":n},function(e){var n=e.margin;return void 0===n?"":n})},1371:function(e,n,t){"use strict";var r=t(4),a=t(18),i=t(0),c=t.n(i),o=t(44);function l(){var e=Object(r.a)(["\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  height: 100%;\n"]);return l=function(){return e},e}var u=a.c.div(l()),d=t(158),s=t(14);function f(){var e=Object(r.a)(["\n    margin: 0;\n    grid-row: "," ;\n    grid-column: span 16;\n    height: "," ;\n    position: relative;\n  "]);return f=function(){return e},e}function m(){var e=Object(r.a)(["\n  position: fixed;\n  bottom: 0.5rem;\n  width: ",";\n  left: ",";\n  top: ",";"]);return m=function(){return e},e}t.d(n,"a",function(){return p});var b=a.c.div.withConfig({displayName:"StyledPageLayoutFullHeightItem",componentId:"sc-1mean6j-0"})([""," ",""],Object(o.c)(m(),function(e){return void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+s.d.LayoutGridCellMargin+")":"calc(100vh - (2 * "+s.d.LayoutGridCellMargin+"))"},function(e){return void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+s.d.LayoutGridCellMargin+")":s.d.LayoutGridCellMargin},function(e){return void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+s.d.LayoutGridCellMargin+")":"calc(3.9375rem + "+s.d.LayoutGridCellMargin+")"}),Object(o.d)(f(),function(e){return e.rowInMobile},function(e){var n=e.forcePercentHeightInMobile;return n?"calc(".concat(n,"vh - ").concat(s.d.PageHeaderHeight+.25+s.d.DefaultSizeUnit,")"):"unset"})),p=function(e){var n=e.children,t=e.row,r=void 0===t?1:t,a=e.rowInMobile,i=void 0===a?16:a,l=e.column,s=void 0===l?0:l,f=e.widthInColumns,m=void 0===f?16:f,p=e.withScrollArea,g=void 0!==p&&p,v=e.scrollAreaId,h=e.forcePercentHeightInMobile,O=Object(o.f)().isMobile;return c.a.createElement(b,{column:s,row:r,rowInMobile:i,widthInColumns:m,withScrollArea:g,forcePercentHeightInMobile:h},g&&!O?c.a.createElement(u,{id:v},n):c.a.createElement(d.a,{height:100,heightUnit:"%"},n))}},1378:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(4);function a(){var e=Object(r.a)(["\n  height: ",";\n"]);return a=function(){return e},e}var i=t(18).c.div(a(),function(e){var n=e.size,t=void 0===n?1:n,r=e.sizeUnit,a=void 0===r?"rem":r;return"".concat(t).concat(a)});i.displayName="VerticalGap"},1380:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(0),a=t.n(r);function i(e){var n=e.getOptionFilter,t="function"===typeof n;return{filterOption:a.a.useCallback(function(e,t){return!n||0===t.length||n(e.data).toLocaleLowerCase().includes(t.toLocaleLowerCase())},[n]),isSearchable:t}}},1381:function(e,n,t){"use strict";t.d(n,"a",function(){return f}),t.d(n,"b",function(){return m});var r=t(132),a=t(48),i=t(63),c=t(1352),o=t(59),l=t(0),u=t.n(l),d=t(1358);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var f=u.a.forwardRef(function(e,n){var t=e.fieldName,r=e.fullWidth,a=e.validate,c=e.addHiddenLabelWithPlaceholderText,l=void 0===c||c,s=Object(i.a)(e,["fieldName","fullWidth","validate","addHiddenLabelWithPlaceholderText"]),f=m({fieldName:t,validate:a});return Object(o.g)(function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.b,Object.assign({},f(),{inputFullWidth:r,ref:n},s)),l&&s.placeholder&&u.a.createElement("label",{hidden:!0,htmlFor:f().id},s.placeholder))})});function m(e){var n=e.fieldName,t=e.validate,i=Object(c.i)(),o=Object(c.e)(n,{validate:t}),l=Object(a.a)(o,2),u=l[0],d=l[1];return function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(t,!0).forEach(function(n){Object(r.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},d(),{disabled:i.isSubmitting,invalid:u.touched&&Boolean(u.error)})}}},1411:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t(63),a=t(1637),i=t(0),c=t.n(i),o=t(434),l=t(14),u=t(131),d=function(e){var n=e.onDelete,t=e.confirmText,i=Object(r.a)(e,["onDelete","confirmText"]);return c.a.createElement(o.a,null,c.a.createElement(u.a,Object.assign({className:"delete-button",icon:a.a,color:l.a.greyMiddle,onClick:function(e){e.preventDefault(),t&&!window.confirm(t)||n()}},i)))}},1424:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(0),a=t.n(r);function i(e){var n=e.options,t=e.selected,r=e.onSelectionChange,i=e.getOptionValue;return{value:a.a.useMemo(function(){return null===t?null:null===n?null:n.find(function(e){return i(e)===t})||null},[t,n,i]),onChange:function(e){r(e?i(e):null)}}}},1425:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t(63),a=t(2773),i=t(1356),c=t(1352),o=t(59),l=t(0),u=t.n(l),d=t(131),s=t(14),f=function(e){var n=e.children,t=e.id,l=void 0===t?"form-submit":t,f=Object(r.a)(e,["children","id"]),m=Object(c.i)();return Object(o.g)(function(){return u.a.createElement(d.a,Object.assign({id:l,type:"submit",color:s.a.green,disabled:m.isSubmitting,icon:m.isValid?void 0:a.a,iconSize:1.1,iconColor:s.a.red},f,{className:Object(i.b)(f.className,"animated","infinite",{heartBeat:m.isSubmitting})}),u.a.createElement(u.a.Fragment,null,n))})}},1462:function(e,n,t){"use strict";t.d(n,"a",function(){return m}),t.d(n,"b",function(){return b});var r=t(78),a=t(1419),i=t(66),c=t(59),o=t(0),l=t.n(o),u=t(61),d=t(14),s=t(40),f=(l.a.createContext(null),["places"]),m=function(e){var n=e.model,t=e.children,o={streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1},m=Object(s.b)().user,b=Object(a.e)({id:"script-loader",version:"weekly",googleMapsApiKey:u.a.googleMapsApi,libraries:f,language:m.language}),p=b.isLoaded,g=b.loadError,v=b.url,h=Reflect.has(window,"google");return g||p&&!h?(i.a.withScope(function(e){e.setExtras({googleMapUrl:v}),i.a.captureException(g)}),l.a.createElement("h2",null,l.a.createElement(r.Trans,{id:"Cannot load map right now. Please try again later."}))):p?l.a.createElement(c.a,null,function(){return l.a.createElement(a.a,{zoom:n.zoom,center:n.center,onCenterChanged:n.updatePosition,onZoomChanged:n.updateZoom,onLoad:n.setMapRef,options:o,mapContainerStyle:{borderRadius:d.c.Card,overflow:"hidden",height:"100%"}},t)}):null};function b(){var e=Object(a.d)();if(!e)throw new Error("Trying to useGoogleMap, but BaseMap is missing in the tree");return e}},1463:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(18),a=t(14),i=r.c.h2.withConfig({displayName:"CardListTitle",componentId:"dr5aqq-0"})(["color:",";font-weight:lighter;font-size:1.2rem;margin:0.8rem 0 0.8rem 0.3rem;@media print{color:",";}"],a.a.greyLight,a.a.black)},1522:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(1352),a=t(59),i=t(0),c=t.n(i),o=function(e){var n=e.fieldName,t=e.className,i=Object(r.f)(n);return Object(a.g)(function(){return c.a.createElement("span",{className:t},i.value)})}},1523:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t(4),a=t(2796),i=t(0),c=t.n(i),o=t(1466),l=t(18),u=t(239);function d(){var e=Object(r.a)(["\n  padding: 1rem 0.4rem;\n  cursor: grab;\n"]);return d=function(){return e},e}var s=l.c.div(d()),f=Object(o.c)(function(){return c.a.createElement(s,null,c.a.createElement(u.a,{icon:a.a}))})},1548:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(0),a=function(e){var n=e.isShow,t=e.confirmText,a=e.onCancel,i=e.onConfirm;return Object(r.useEffect)(function(){n&&(window.confirm(t)?i():a())},[t,n,a,i]),null}},1570:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t(63),a=t(0),i=t.n(a),c=t(40),o=t(1357),l=t(1380),u=t(36),d=t(20),s=d.a.prop("name"),f=function(e){var n=e.brands,t=e.selectedBrand,a=e.onSelection,f=Object(r.a)(e,["brands","selectedBrand","onSelection"]),m=Object(c.b)().user,b=Object(l.a)({getOptionFilter:s});return i.a.createElement(o.a,Object.assign({placeholder:u.b._("Select brand"),options:n||m.brands,value:t,formatOptionLabel:s,getOptionValue:d.b,getOptionLabel:s,onChange:function(e){return a(e)},isClearable:!0,autoFocus:!0},b,f))}},1571:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t(69),a=t.n(r),i=t(112),c=t(49),o=t(1352),l=t(0),u=t.n(l),d=(t(42),t(254)),s=void 0;function f(e){var n=e.onSubmit,t=e.initialValues,r=e.loadValues,l=e.validationSchema,f=e.submitMessage,m=e.submitRedirectPath,b=Object(c.l)().history,p=Object(d.a)(),g=p.enqueueSuccess,v=p.enqueueWarning,h=u.a.useCallback(function(){var e=Object(i.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:f&&g(f),m&&b.push(m);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),[g,b,n,f,m]),O=u.a.useCallback(function(e,n){var t=!0,r=!1,a=void 0;try{for(var i,c=n.values()[Symbol.iterator]();!(t=(i=c.next()).done);t=!0){var o=i.value;o&&v(o)}}catch(l){r=!0,a=l}finally{try{t||null==c.return||c.return()}finally{if(r)throw a}}},[v]),y=u.a.useRef(!1),j=u.a.useCallback(function(){y.current=!1},[]),E=Object(o.g)({onSubmit:h,onSubmitFailed:O,onReset:j,validationSchema:l,initialValues:t,initialValidationEnabled:void 0===r,ignoreUnknownFieldsInValidation:!0,onFormChanges:s});return u.a.useEffect(function(){y.current||(r&&Promise.resolve(r(E.state.initialValues)).then(function(e){e&&(E.api.mergeValues(e),E.state.pristineValues=E.state.values),E.api.enableValidation()}),y.current=!0)},[r,E]),E}},1572:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var r=t(132),a=t(63),i=t(1352),c=t(59),o=t(0),l=t.n(o),u=t(1357),d=t(1380),s=t(1424),f=t(20);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var b=function(e){var n=e.fieldName,t=e.getOptionValue,o=void 0===t?f.b:t,b=e.getOptionFilter,p=Object(a.a)(e,["fieldName","getOptionValue","getOptionFilter"]),g=Object(i.i)(),v=Object(i.d)(n);return Object(c.g)(function(){var e=Object(s.a)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(t,!0).forEach(function(n){Object(r.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},p,{onSelectionChange:v.setValue,selected:v.value,getOptionValue:o})),n=Object(d.a)({getOptionFilter:b});return l.a.createElement(u.a,Object.assign({},e,n,p,{onFocus:function(){return v.setTouched()},invalid:v.touched&&v.hasError,isDisabled:g.isSubmitting}))})}},2803:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(57),c=t(257),o=t(438),l=t(36),u=t(1371),d=t(442),s=t(69),f=t.n(s),m=t(132),b=t(112),p=t(48),g=t(1352),v=t(1571),h=t(77),O=t(1354),y=t(176),j=t(256),E=t(254),w=t(20),P=t(49),C=t(40);function z(){var e=Object(C.b)().user,n=Object(P.l)().history,t=a.a.useCallback(function(e){return"".concat(o.f,"/").concat(e)},[]);return{getRouteToZone:t,routeToZoneEdit:a.a.useCallback(function(r){e.canQuery("zone")&&n.push(t(r))},[t,n,e]),routeToZoneList:a.a.useCallback(function(){n.push(o.f)},[n])}}function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(t,!0).forEach(function(n){Object(m.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var x=function(e){var n=e.children,t=e.zoneId,r=z().routeToZoneList,i=Object(E.a)().enqueueSuccess,c=Object(h.rb)(),o=Object(p.a)(c,1)[0],u=Object(g.c)(function(e){return{name:e.string().required(),minimalPrice:Object(O.e)(l.b._("Minimal price")).min(0,Object(O.b)(l.b._("Minimal price")))}}),d=a.a.useRef(),s=a.a.useCallback(function(){var e=Object(b.a)(f.a.mark(function e(n){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({zoneId:n.id,update:F(n)});case 2:e.sent&&(d.current.pristineValues=k({},n),r(),i(l.b._("Zone has been updated")));case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),[i,r,o]),m=Object(v.a)({initialValues:{id:"",type:h.p.Area,name:"",enabled:!0,branchId:"",zoneColor:"",geoPolygon:[],minimalPrice:"0",priceRules:{},priceRulesOrder:[],currencyCode:""},onSubmit:s,validationSchema:u});d.current=m.state;var j=!t,P=Object(h.tc)({zoneId:t},{skip:j}),C=P.getStash,S=P.error,x=C(function(e){return function(e){return k({id:e.id,type:e.zoneType.enum,name:e.name,enabled:e.enabled,zoneColor:e.zoneColor.id,branchId:e.branchWithCurrency.id,geoPolygon:e.geoPolygon.map(I),currencyCode:e.branchWithCurrency.currency.code,minimalPrice:Object(y.g)(e.minimalOrderPrice.value)},function(e){var n=e.priceRangeRules.map(function(e,n){return{clientId:String(n+1),toPrice:Object(y.g)(e.toPrice.value),price:Object(y.g)(e.price.value)}});return{priceRulesOrder:n.map(w.a.prop("clientId")),priceRules:n.reduce(function(e,n){return e[n.clientId]=n,e},{})}}(e))}(e.zone)});return a.a.useEffect(function(){t&&S&&r()},[S,r,t]),a.a.useEffect(function(){x&&x.id!==m.state.values.id&&(m.api.mergeValues(x),m.state.pristineValues=k({},x))},[x,m.api,m.state]),a.a.useEffect(function(){return function(){m.api.resetForm()}},[m.api,t]),a.a.createElement(g.b,{xform:m},n)};var I=w.a.omit(["__typename"]);function F(e){return{name:e.name,enabled:e.enabled,companyBranch:e.branchId,zoneColor:e.zoneColor,geoPolygon:e.geoPolygon,minimalOrderPrice:{value:Object(j.b)(e.minimalPrice)},priceRangeRules:e.priceRulesOrder.map(function(n,t){return r=e.priceRules[n],a=t===e.priceRulesOrder.length-1,{price:{value:Object(j.b)(r.price)},toPrice:{value:a?-1:Object(j.b)(r.toPrice)}};var r,a})}}var N=t(59),R=t(1462),L=t(4),M=t(1419),B=t(18),D=t(240),T=t(14);function _(){var e=Object(L.a)(["\n    background-color: ",";\n    color: ",";\n  "]);return _=function(){return e},e}function V(){var e=Object(L.a)(["\n  "," font-size: 1.3rem;\n  white-space: nowrap;\n  padding: 0.2rem 0.5rem;\n"]);return V=function(){return e},e}var Z=B.c.div(V(),function(e){var n=e.isActive;return Object(B.b)(_(),n?T.a.green:T.a.greyLight,n?T.a.white:T.a.greyDark)}),A=function(e){var n=e.branch,t=e.isActive,r=void 0===t||t;return a.a.createElement(M.b,{getPixelPositionOffset:function(e,n){return{x:-e/2,y:-n/2}},mapPaneName:M.b.MARKER_LAYER,position:Object(D.b)(n.gps)},a.a.createElement(Z,{isActive:r},n.name))};var W=function(e){var n=e.points,t=e.type,r=e.color,i=e.priority,c=e.onFocus,o=a.a.useCallback(function(e){c&&(e.stop(),c())},[c]);return a.a.createElement(M.c,{path:n.map(D.b),options:t===h.p.Return?{fillColor:"transparent",strokeWeight:3,strokeColor:r,zIndex:1e4-i}:{fillColor:r,fillOpacity:.3,strokeWeight:0,zIndex:5e3-i},editable:!1,draggable:!1,onDblClick:o})},H=function(e){var n=e.type,t=e.color,r=e.onChange,i=e.initialPoints,c=a.a.useRef(null),o=a.a.useRef([]),l=a.a.useCallback(function(){if(c.current){var e=c.current.getPath();r(e.getArray().map(D.d))}},[r]),u=a.a.useCallback(function(e){c.current=e;var n=e.getPath();o.current.push(n.addListener("set_at",l),n.addListener("insert_at",l),n.addListener("remove_at",l))},[l]),d=a.a.useCallback(function(){o.current.forEach(function(e){return e.remove()}),o.current.length=0,c.current=null},[]),s=a.a.useRef(i),f=a.a.useMemo(function(){return s.current.map(D.b)},[]);return a.a.createElement(M.c,{path:f,options:n===h.p.Return?{fillColor:"transparent",strokeWeight:5,strokeColor:t,zIndex:2e4}:{fillColor:t,fillOpacity:.1,strokeWeight:2,zIndex:2e4},editable:!0,draggable:!0,onDragEnd:l,onLoad:u,onUnmount:d})};function q(){return(0,Object(h.sc)({},{fetchPolicy:"cache-first"}).getStash)(function(e){return e.zoneColors})||O.a}var G=t(425);function U(){return Object(C.b)().zone}function J(){var e=Object(C.b)().zone,n=e.branches.filter(e.branchFilterPredicate).map(w.b),t=0===n.length,r=Object(h.uc)({branches:n},{skip:t}),a=r.getStash,i=r.loading;return{zones:a(function(e){return e.zones}),loading:i}}var K=Object(N.b)(function(e){var n=e.zoneId,t=U(),i=function(e){var n=U(),t=J().zones,r=n.branches.filter(n.branchFilterPredicate),i=a.a.useCallback(function(e){return!n.hasBranchFilter||e===n.branchFilterId},[n]),c=Object(N.c)({zoneId:e,zones:t});return Object(P.e)(function(){if(n.map.isReady&&c.zoneId&&c.zones){var e=c.zones.find(Object(w.c)(c.zoneId));if(e){var t=Object(G.getCenter)(e.geoPolygon);n.map.panTo(t)}}}),Object(P.e)(function(){n.map.isReady&&n.branch&&!c.zoneId&&n.map.panTo(n.branch.gps)}),{isActive:i,branches:r,zones:t}}(n),c=i.isActive,o=i.branches,l=i.zones,u=z().routeToZoneEdit,d=Object(g.d)("geoPolygon"),s=Object(g.f)("type"),f=Object(g.f)("zoneColor"),m=q(),b=Object(r.useCallback)(function(e){return a.a.createElement(A,{key:"branch".concat(e.id),branch:e,isActive:c(e.id)})},[c]);return a.a.createElement(R.a,{model:t.map},l&&l.map(function(e){return e.id===n?null:a.a.createElement(W,{key:"zone".concat(e.id),type:e.zoneType.enum,points:e.geoPolygon,priority:e.priority,color:c(e.companyBranch.id)&&e.enabled&&null===n?e.zoneColor.color:T.a.greyMiddle,onFocus:function(){c(e.companyBranch.id)&&u(e.id)}})}),n&&function(){if(0===d.value.length)return null;var e=m.find(Object(w.c)(f.value));return a.a.createElement(H,{key:"zone".concat(n),type:s.value,color:e?e.color:"",initialPoints:d.value,onChange:d.setValue})}(),o&&o.map(b))}),Q=t(463),Y=t(1363),X=t(253),$=t(1548),ee=t(1411),ne=t(78),te=t(2794),re=t(2795),ae=t(1366),ie=t(1353),ce=t(1381),oe=t(1517),le=t(1572);function ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function de(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ue(t,!0).forEach(function(n){Object(m.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function se(){var e=Object(L.a)(["\n  background-color: ",";\n  color: ",";\n  width: 6rem;\n  padding: 0.4rem 1rem;\n  margin: 0;\n  height: 100%;\n"]);return se=function(){return e},e}var fe=B.c.div(se(),function(e){return e.color},T.a.white),me=function(e){var n=e.fieldName,t=q();return a.a.createElement(le.a,{fieldName:n,options:t,isLoading:0===t.length,width:8,styles:{option:function(e){return de({},e,{padding:0,margin:0})},menu:function(e){return de({},e,{width:"8rem",maxWidth:"8rem"})}},defaultValue:w.a.head(t),getOptionValue:w.b,formatOptionLabel:function(e){return a.a.createElement(fe,{color:e.color},e.code)}})},be=t(1547),pe=t(131),ge=t(160),ve=t(1358),he=t(1522),Oe=Object(N.b)(function(e,n){var t=e.fieldName,r=e.validate,i=Object(ce.b)({fieldName:t,validate:r})();return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{className:"forPriceLabel",htmlFor:i.id},l.b._({id:"for"})),a.a.createElement(ve.b,Object.assign({},i,{className:"forPrice",ref:n,inputFullWidth:!0})),a.a.createElement(he.a,{fieldName:"currencyCode"}))},{forwardRef:!0});function ye(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var je=Object(N.b)(function(e,n){var t=e.fieldName,r=e.validate,i=e.asInfinity,c=void 0!==i&&i,o=Object(ce.b)({fieldName:t,validate:r})(),u=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ye(t,!0).forEach(function(n){Object(m.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ye(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},o,{className:"toPrice",ref:n}),d=a.a.createElement("label",{className:"toPriceLabel",htmlFor:o.id},l.b._({id:"to"}));return c?a.a.createElement(a.a.Fragment,null,d,a.a.createElement(ve.b,Object.assign({},u,{value:"",disabled:!0,placeholder:"\u221e"}))):a.a.createElement(a.a.Fragment,null,d,a.a.createElement(ve.b,u),a.a.createElement(he.a,{fieldName:"currencyCode"}))},{forwardRef:!0}),Ee=Object(N.b)(function(e){var n=e.fieldPath,t=e.shouldFocus,r=e.isLastRule,i=a.a.useRef(null),c=a.a.useRef(null),o=a.a.useCallback(function(e){if(isNaN(Object(j.b)(e)))return l.b._("Zone price rules cannot have empty values.")},[]);return a.a.useEffect(function(){t&&(i.current&&!r?i.current.focus():c.current&&c.current.focus())},[t,r]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"toPriceField"},a.a.createElement("div",{className:"verticalLine"}),a.a.createElement(je,{fieldName:[].concat(Object(ge.a)(n),["toPrice"]),validate:o,ref:i,asInfinity:r})),a.a.createElement("div",{className:"forPriceField"},a.a.createElement(Oe,{fieldName:[].concat(Object(ge.a)(n),["price"]),validate:o,ref:c})))});function we(){var e=Object(L.a)(["\n  display: grid;\n\n  grid-template-columns: 4.5rem 7rem 8rem 4.5rem;\n\n  & input {\n    width: 4rem;\n    z-index: 1;\n  }\n  & label {\n    margin: ",";\n  }\n\n  & .minimalPriceField {\n    grid-column: 2;\n    display: flex;\n    align-items: center;\n  }\n  & .minimalPriceField span {\n    margin: ",";\n  }\n  & .addRule {\n    grid-column: 1;\n    justify-self: start;\n    align-self: center;\n    margin-bottom: 3rem;\n  }\n  & .toPriceField {\n    grid-column: 2;\n    display: flex;\n    align-items: center;\n    align-self: end;\n    position: relative;\n  }\n  & .toPriceField span {\n    margin: ",";\n  }\n  & .forPriceField {\n    grid-column: 3;\n    display: flex;\n    align-items: center;\n    align-self: center;\n    margin-bottom: 3rem;\n  }\n  & .forPriceField input {\n    color: ",";\n    width: 4rem;\n  }\n  & .forPriceField span {\n    margin: ",";\n  }\n  & .removeRule {\n    height: 5rem;\n    margin-bottom: 3rem;\n    grid-column: 4;\n    display: flex;\n    align-items: center;\n    justify-self: end;\n    align-self: center;\n  }\n  & .verticalLine {\n    width: 3px;\n    height: 8rem;\n    background: ",";\n    position: absolute;\n    top: -112px;\n    left: 62px;\n  }\n"]);return we=function(){return e},e}var Pe=B.c.div(we(),T.d.Middle,T.d.Middle,T.d.Middle,T.a.blue,T.d.Middle,T.a.greyMiddle),Ce=function(){var e=Object(g.d)("priceRulesOrder"),n=Object(g.f)("priceRules"),t=Object(g.i)(),i=a.a.useState(null),c=Object(p.a)(i,2),o=c[0],u=c[1],d=a.a.useRef(e.value.length);a.a.useEffect(function(){d.current<e.value.length&&(d.current=e.value.length)},[e.value]);return Object(N.g)(function(){return a.a.createElement(Pe,null,a.a.createElement("div",{className:"minimalPriceField"},a.a.createElement(je,{fieldName:["minimalPrice"]})),e.value.map(function(i,c,s){return a.a.createElement(r.Fragment,{key:i},a.a.createElement(pe.a,{className:"addRule",disabled:t.isSubmitting,width:T.d.ButtonHeight+T.d.DefaultSizeUnit,height:T.d.ButtonHeight+T.d.DefaultSizeUnit,onClick:function(){return function(t){var r=e.value.findIndex(w.a.equals(t)),a=String(++d.current);e.value.splice(r,0,a),n.value[a]={clientId:String(a),toPrice:null,price:null},u(a)}(i)},icon:be.a,title:l.b._("Add another range")}),a.a.createElement(Ee,{fieldPath:["priceRules",i],shouldFocus:i===o,isLastRule:c===s.length-1}),a.a.createElement("div",{className:"removeRule"},a.a.createElement(ee.a,{onDelete:function(){return function(n){var t=e.value.findIndex(w.a.equals(n));e.value.splice(t,1)}(i)},title:l.b._("Remove price range"),disabled:s.length<=1})))}))})};function ze(){var e=Object(L.a)(["\n  margin: ",";\n  color: ",";\n\n  .description {\n    color: ",";\n    padding-bottom: 0.2rem;\n  }\n"]);return ze=function(){return e},e}var Se=B.c.div(ze(),T.d.Middle,T.a.black,T.a.greyDark),ke=function(e){var n=e.type;return a.a.createElement(Se,null,a.a.createElement(ie.a,{icon:te.a},a.a.createElement(ce.a,{fieldName:"name"})),a.a.createElement(ie.a,{icon:re.a},a.a.createElement(me,{fieldName:"zoneColor"})),a.a.createElement(oe.a,{fieldName:"enabled",label:l.b._("Is active").toLocaleLowerCase()}),n===h.p.Area&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ne.Trans,{id:"<0>Delivery cost</0><1>according order total cost</1>",components:[a.a.createElement(ae.a,{margin:"0.5rem 0 0 0"}),a.a.createElement("div",{className:"description"})]}),a.a.createElement(Ce,null)))},xe=t(1370),Ie=t(1368),Fe=t(1425),Ne=function(){var e=Object(g.i)(),n=z().routeToZoneList;return Object(N.g)(function(){return a.a.createElement(Ie.a,null,a.a.createElement(xe.a,{widthGrowIndex:.4,padding:"0"},a.a.createElement(pe.a,{color:T.a.greyMiddle,text:l.b._("Back"),onClick:n,disabled:e.isSubmitting})),a.a.createElement(xe.a,{widthGrowIndex:.4,padding:"0"},a.a.createElement(Y.a,{mutationName:"updateZone"},a.a.createElement(Fe.a,null,a.a.createElement(ne.Trans,{id:"Save zone"})))))})};function Re(){var e=Object(L.a)(["\n  width: ",";\n  margin-top: ",";\n"]);return Re=function(){return e},e}var Le=B.c.div(Re(),T.d.ButtonHeight+T.d.DefaultSizeUnit,T.d.Middle),Me=Object(N.b)(function(e){var n=e.zoneId,t=z().routeToZoneList,r=Object(h.qb)(),i=Object(p.a)(r,1)[0],c=a.a.useCallback(Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return e.next=3,i({zoneId:n});case 3:t();case 4:case"end":return e.stop()}},e)})),[i,t,n]),o=Object(g.i)(),u=Object(g.f)("type").value;return a.a.createElement(X.a,{padding:0},a.a.createElement(Ne,null),a.a.createElement(ke,{type:u}),a.a.createElement(Y.a,{mutationName:"destroyZone"},a.a.createElement(Le,null,a.a.createElement(ee.a,{disabled:o.isSubmitting,confirmText:l.b._("Remove zone {0}?",{0:o.values.name}),onDelete:c}))),a.a.createElement(Q.b,{when:o.isDirty},function(e){var n=e.isShow,t=e.handleOk,r=e.handleCancel;return a.a.createElement($.a,{isShow:n,confirmText:l.b._("Do you want to cancel changes for the zone?"),onConfirm:t,onCancel:r})}))}),Be=Object(N.b)(function(e){var n=e.children;return Object(C.b)().user.hasSingleBranch?null:n}),De=t(1384),Te=B.c.p.withConfig({displayName:"StyledZoneListSection",componentId:"sc-1tw7uij-0"})(["color:",";"],T.a.greyMiddle),_e=function(e){return e.type===h.p.Return?a.a.createElement(Te,null,a.a.createElement(ne.Trans,{id:"Notification will be shown when driver enters one of these zones."})):null},Ve=Object(N.b)(function(e){var n,t,r=e.type,i=U(),c=z().routeToZoneEdit,o=Object(h.pb)(),u=Object(p.a)(o,1)[0],d=Object(E.a)().enqueueSuccess,s=a.a.useState(!1),g=Object(p.a)(s,2),v=g[0],O=g[1],y=function(){var e=Object(b.a)(f.a.mark(function e(){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i.branch){e.next=2;break}return e.abrupt("return");case 2:return O(!0),e.next=5,u({type:r,branchId:i.branch.id,points:Object(D.a)({center:i.branch.gps,metersRadius:1e3,pointsCount:5})});case 5:(n=e.sent)&&(d(l.b._("Zone has been created")),c(n.createZone.id));case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),j=(n={},Object(m.a)(n,h.p.Area,l.b._("Create delivery zone for branch")),Object(m.a)(n,h.p.Return,l.b._("Create return zone for branch")),n),w=(t={},Object(m.a)(t,h.p.Area,T.a.turquoise),Object(m.a)(t,h.p.Return,T.a.greyMiddle),t),P=i.hasBranchFilter?j[r]:l.b._("Select branch to create zone");return a.a.createElement(pe.a,{text:P,onClick:y,disabled:v||!i.hasBranchFilter,color:w[r],height:T.d.ButtonHeight+T.d.DefaultSizeUnit,textNextToIcon:!0,icon:be.a})}),Ze=t(1569),Ae=t(1463),We=t(1888),He=t(179),qe=t.n(He),Ge=t(1466),Ue=t(1523),Je=t(434);function Ke(){var e=Object(L.a)(["\n  height: ",";\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(L.a)(["\n  font-size: 0.875rem;\n"]);return Qe=function(){return e},e}function Ye(){var e=Object(L.a)(["\n  font-size: 1.125rem;\n  margin-top: 0.2rem;\n"]);return Ye=function(){return e},e}function Xe(){var e=Object(L.a)(["\n  background: ",";\n"]);return Xe=function(){return e},e}var $e=Object(B.c)(X.a)(Xe(),function(e){var n=e.color;if(e.type===h.p.Area)return"";var t=qe()(n).alpha(.8).darken(.2),r=t.lighten(.4);return"repeating-linear-gradient(135deg, ".concat(t,", ").concat(t," 10px, ").concat(r," 10px, ").concat(r," 20px)")});var en=B.c.div(Ye()),nn=B.c.div(Qe()),tn=Object(B.c)(Ie.a)(Ke(),T.d.ButtonHeight+T.d.DefaultSizeUnit),rn=Object(Ge.b)(function(e){var n=e.zone,t=e.branch,r=e.type,i=e.onEdit;return a.a.createElement($e,{key:n.id,type:r,padding:0,color:n.enabled?n.zoneColor.color:T.a.greyMiddle,onClick:i},a.a.createElement(tn,null,a.a.createElement(xe.a,{fixedWidth:!0,padding:"0 0.5rem 0 0"},a.a.createElement(Je.a,null,a.a.createElement(pe.a,{icon:We.a}))),a.a.createElement(xe.a,{widthGrowIndex:1},a.a.createElement(en,null,n.name," [P".concat(n.priority,"]")),a.a.createElement(nn,null,t.name)),a.a.createElement(xe.a,{padding:"0"},a.a.createElement(Ue.a,null))))}),an=B.c.div.withConfig({displayName:"ZoneListContainerStyled",componentId:"sc-1j9qfbo-0"})(["margin-top:0.5rem;cursor:arrow;"]),cn=Object(Ge.a)(an),on=function(e){e.type;var n=e.onSort,t=e.children;return a.a.createElement(cn,{onSortEnd:n,useDragHandle:!0,lockAxis:"y",lockToContainerEdges:!0},t)},ln=w.a.sortWith([w.a.ascend(w.a.path(["companyBranch","name"])),w.a.descend(w.a.prop("priority"))]),un=w.a.groupBy(function(e){return e.companyBranch.id}),dn=w.a.pathEq(["zoneType","enum"]);var sn=Object(N.b)(function(e){var n=e.type,t=U(),i=z().routeToZoneEdit,c=function(e){var n=J(),t=n.zones,r=n.loading,i=a.a.useMemo(function(){return t?w.a.mapObjIndexed(ln,un(t.filter(dn(e)))):null},[e,t]),c=Object(h.sb)(),o=Object(p.a)(c,1)[0],l=a.a.useCallback(function(e){var n=e.oldIndex,t=e.newIndex,r=e.collection;if(i){var a=i[r][n],c=n-t;o({zoneId:a.id,offset:c},{optimisticResponse:{__typename:"Mutation",updateZonePriority:[{__typename:"Zone",id:a.id,priority:a.priority+c}]}})}},[i,o]);return{isLoading:r,zonesByBranch:i,onZoneSort:l}}(n),o=c.isLoading,l=c.zonesByBranch,u=c.onZoneSort;if(null===o)return a.a.createElement(Ze.a,{primaryOpacity:.2,secondaryOpacity:.2});if(null===l)return a.a.createElement(Ae.a,null,a.a.createElement(ne.Trans,{id:"Select brand to see its zones"}));var d=t.root.user.filterBranches(t.branchFilterPredicate),s=function(e,t){return a.a.createElement(rn,{key:e.id,type:n,zone:e,branch:d.find(Object(w.c)(e.companyBranch.id)),onEdit:function(){return i(e.id)},index:t,collection:e.companyBranch.id})};return a.a.createElement(on,{type:n,onSort:u},d.map(function(e){var n=l[e.id];return n?function(e,n){return a.a.createElement(r.Fragment,{key:e.id},a.a.createElement(Ae.a,null,e.name),n.map(s))}(e,n):null}))}),fn=t(15),mn=t(1378),bn=t(1418),pn=t(1570),gn=Object(N.b)(function(){var e=Object(C.b)(),n=e.user,t=e.zone,r=n.branches,i=a.a.useCallback(function(e){return null===e?[]:n.branches.filter(w.a.pathEq(["brand","id"],e.id))},[n.branches]);if(a.a.useEffect(function(){return Object(fn.autorun)(function(){1===r.length&&t.setBranchFilter(w.a.head(r))})},[r,t]),r.length<=1)return null;var c=1===n.brands.length?w.a.head(n.brands):null;return c&&t.setBrandFilter(c,i(t.brand)),a.a.createElement(a.a.Fragment,null,!c&&a.a.createElement(pn.a,{selectedBrand:t.brand,onSelection:function(e){null===e?t.clearBrandFilter():t.setBrandFilter(e,i(e))}}),!c&&a.a.createElement(mn.a,null),a.a.createElement(bn.a,{branches:i(t.brand),selectedBranch:t.branch,autoFocus:Boolean(c),formatOptionLabel:w.a.prop("name"),isClearable:!0,onSingleSelection:function(e){e?t.setBranchFilter(e):t.clearBranchFilter()}}))});function vn(){var e=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  & div.header {\n    flex: 0 0 auto;\n  }\n\n  & div.zone-list {\n    flex: 1 1 0;\n  }\n\n  & h3 {\n    margin-top: 6rem;\n  }\n"]);return vn=function(){return e},e}var hn=B.c.div(vn()),On=a.a.memo(function(){var e=U();return Object(De.a)(function(n){e.setBranchFilter(n)}),Object(N.g)(function(){return a.a.createElement(hn,null,a.a.createElement("div",{className:"header"},a.a.createElement(Be,null,a.a.createElement(X.a,null,a.a.createElement(gn,null)))),a.a.createElement("div",{className:"zone-list"},e.zoneTypes.map(function(e,n){return a.a.createElement("div",{className:"list".concat(n),key:e},e===h.p.Return&&a.a.createElement("h3",null,a.a.createElement(ne.Trans,{id:"Service zones"})),a.a.createElement(Y.a,{mutationName:"createZone"},a.a.createElement(Ve,{type:e})),a.a.createElement(_e,{type:e}),a.a.createElement(sn,{type:e}))})))})}),yn=function(e){var n=e.match.params.zoneId||null,t=Boolean(n);return a.a.createElement(d.a,{pageTitle:l.b._("Delivery zones"),backRoute:o.a,useBackButton:!0},a.a.createElement(x,{zoneId:n},a.a.createElement(u.a,{widthInColumns:6,column:10,rowInMobile:2,withScrollArea:!0},t?a.a.createElement(Me,{zoneId:n}):a.a.createElement(On,null)),a.a.createElement(u.a,{widthInColumns:10,rowInMobile:1,forcePercentHeightInMobile:60},a.a.createElement(K,{zoneId:n}))))};t.d(n,"ZonesRouting",function(){return jn});var jn=function(){return a.a.createElement(i.e,null,a.a.createElement(i.c,{path:"".concat(o.f,"/:zoneId?"),component:yn}),a.a.createElement(i.c,{component:c.a}))};n.default=jn}}]);
//# sourceMappingURL=378.cafef81b.chunk.js.map