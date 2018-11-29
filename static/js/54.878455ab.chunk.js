(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{7496:function(e,t,n){"use strict";t.__esModule=!0;var a,r=n(498),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(e,t,n){return t in e?(0,o.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7502:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),o=n(13),l=n(7513),i=n(10);const c=o.b.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+i.c.LayoutGridCellMargin+")":"calc(100vh - (2 * "+i.c.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+i.c.LayoutGridCellMargin+")":i.c.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+i.c.LayoutGridCellMargin+")":"calc(3.9375rem + "+i.c.LayoutGridCellMargin+")")()};
`,d=o.b.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`,s=({children:e,row:t=1,column:n=0,widthInColumns:a=16,withScrollArea:o=!1,scrollAreaId:i})=>r.a.createElement(c,{column:n,row:t,widthInColumns:a,withScrollArea:o},o?r.a.createElement(l.a,{id:i},e):r.a.createElement(d,null,e))},7503:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=n(13).b.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`},7507:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=n(13).b.div.withConfig({displayName:"VerticalGap"})`
  height: ${({size:e=1,sizeUnit:t="rem"})=>`${e}${t}`};
`;a.displayName="VerticalGap"},7512:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n(4);function o(){return Object(a.useContext)(r.f)}},7513:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=n(13).b.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`},7524:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(13),r=n(10);const o=a.b.h2.withConfig({displayName:"CardListTitle"})`
  color: ${r.a.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`},7569:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(0),r=n.n(a),o=n(7544),l=n(13),i=n(70);const c=l.b.div.withConfig({displayName:"DragHandleContainerStyled"})`
  padding: 1rem 0.4rem;
  cursor: grab;
`,d=Object(o.SortableHandle)(()=>r.a.createElement(c,null,r.a.createElement(i.a,{iconName:"reorder"})))},7582:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(273),r=n(0),o=n.n(r),l=n(7530),i=n(13),c=n(10);const d=i.b.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: ${c.b.Card};
  overflow: hidden;
  height: 100%;
`,s=Object(l.withGoogleMap)(({children:e})=>o.a.createElement(o.a.Fragment,null,e));class u extends r.Component{constructor(){super(...arguments),this.getOptions=(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1}))}render(){const{model:e}=this.props;return o.a.createElement(s,{containerElement:o.a.createElement(d,null),mapElement:o.a.createElement("div",{style:{height:"100%"}})},o.a.createElement(a.a,null,()=>o.a.createElement(l.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,options:this.getOptions()},this.props.render({}))))}}},7596:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(0),r=n.n(a),o=n(7492),l=n(16),i=n(38),c=n(7500);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};class u extends r.a.Component{constructor(){super(...arguments),this.validate=(e=>this.props.isRequired&&!e?i.d._("{0} must be selected",{0:this.props.validatioName}):null)}getControlProps(e){const{isMulti:t,options:n,getOptionValue:a,defaultValue:r}=this.props,o=e.value||r;if(t){const t=Array.isArray(o)?e=>o.includes(a(e)):l.a.F;return{value:Array.isArray(n)?n.filter(t):[],onChange:t=>{e.setValue(t.map(a))}}}return{value:o&&n.find(e=>a(e)===o),onChange:t=>{e.setValue(a(t))}}}render(){const e=this.props,{field:t,fieldIsPure:n=!1,defaultValue:a,isRequired:l=!1}=e,i=s(e,["field","fieldIsPure","defaultValue","isRequired"]);return r.a.createElement(o.Field,{field:t,validate:this.validate,pure:n},e=>r.a.createElement(c.a,d({},this.getControlProps(e),{onFocus:()=>e.setTouched(!0),styles:{control:t=>Boolean(e.error)?Object.assign({},t,{borderColor:"red"}):t}},i)))}}u.defaultProps={validatioName:"Value",getItemId:l.a.prop("id")}},7928:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n(126),i=n(38),c=n(267),d=n(7502),s=n(6),u=n(83),m=n(7492),p=n(471),h=n(13),b=n(7495),f=n(263);const g=e=>(Object(a.useEffect)(()=>{e.isShow&&(window.confirm(e.confirmText)?e.onConfirm():e.onCancel())},[e.isShow]),null);var y=n(270),E=n(50),v=n(18),w=n(16),C=n(7529),O=n(10),x=n(7512);function j(){const{match:e}=Object(x.a)(),{zoneId:t}=e.params;return t}function F(){const{user:e,zone:t}=Object(E.d)(),{history:n}=Object(x.a)(),a=e=>`/settings/zones/${e}`;return{getRouteToZone:a,routeToZoneEdit(r){t.map.panToZone(r),e.canQuery("zone")&&n.push(a(r))},routeToZoneList(){n.push("/settings/zones")}}}var N=n(81),S=n(7564),z=n(7494),B=n(7499),P=n(7493),k=n(7518);const I=h.b.div.withConfig({displayName:"LabelStyled"})`
  min-width: 2rem;
  display: inline-block;
`,Z=Object(h.b)(z.b).withConfig({displayName:"FormInputTextBoxStyled"})`
  width: 3rem;
  position: relative;
  z-index: 4;
`,$=Object(h.b)(Z).withConfig({displayName:"FormInputTextBoxDeliveryStyled"})`
  color: ${O.a.blue};
`,M=h.b.div.withConfig({displayName:"DeliveryContainer"})`
  position: relative;
  left: 8rem;
  top: 0rem;
`,L=h.b.div.withConfig({displayName:"PriceRangeContainer"})`
  position: relative;
  left: 4rem;
  top: -0.3rem;
  width: 3rem;
`,_=h.b.div.withConfig({displayName:"VerticalLine"})`
  border-left: 3px solid #707070;
  width: 3px;
  position: relative;
  left: -2rem;
  height: 4rem;
  float: left;
  margin: -0.5rem 0 0 0;
`,A=e=>{if("number"===typeof e)return null;const t=e.trim();return t.length&&Number.isNaN(Number.parseFloat(t))?i.d._("Must be number"):null},D=r.a.forwardRef(({field:e,label:t,isDeliveryPrice:n,autoFocus:a=!1},o)=>n?r.a.createElement(M,null,r.a.createElement(_,null),r.a.createElement(I,null,t),r.a.createElement($,{field:e,validate:A,ref:o})):r.a.createElement(L,null,r.a.createElement(Z,{field:e,validate:A,autoFocus:a})));var R=n(7596),T=n(35),V=n(122);const G=h.b.div.withConfig({displayName:"ColorOption"})`
  background-color: ${({color:e})=>e};
  color: ${O.a.white};
  width: 6rem;
  padding: 0.4rem 1rem;
  margin: 0;
  height: 100%;
`,H=Object(T.a)(V.a),q=({field:e="zoneColor.id"})=>r.a.createElement(H,{render:({zoneColors:t})=>r.a.createElement(R.a,{field:e,fieldIsPure:!0,options:t,width:8,styles:(()=>({option:e=>Object.assign({},e,{padding:0,margin:0}),menu:e=>Object.assign({},e,{width:"8rem",maxWidth:"8rem"})}))(),defaultValue:w.a.head(t),getOptionValue:w.a.prop("id"),formatOptionLabel:e=>r.a.createElement(G,{color:e.color},e.code)})});var W=n(260);const J=h.b.div.withConfig({displayName:"LabelStyled"})`
  width: 3rem;
  display: inline-block;
`,U=Object(h.b)(z.a).withConfig({displayName:"FormInputForPlaceholderStyled"})`
  width: 3rem;
  position: relative;
  z-index: 4;
`,K=h.b.div.withConfig({displayName:"Container"})`
  margin: 0 0 0 1rem;
`,Q=({label:e,display:t})=>r.a.createElement(K,null,r.a.createElement(J,null,e),r.a.createElement(U,{disabled:!0,placeholder:t})),Y=h.b.div.withConfig({displayName:"AddButtonContainer"})`
  position: relative;
  top: -6rem;
`,X=h.b.div.withConfig({displayName:"RemoveButtonContainer"})`
  position: relative;
  top: -7rem;
  left: 16rem;
`,ee=({fieldApi:e})=>r.a.createElement(r.a.Fragment,null,e.values.map((t,n,o)=>r.a.createElement(a.Fragment,{key:n},r.a.createElement(D,{label:"za",isDeliveryPrice:!0,field:[n,"price","value"]}),n===o.length-1?r.a.createElement(Q,{display:"\u221e",label:"do"}):r.a.createElement(D,{field:[n,"toPrice","value"],autoFocus:!0}),o.length>1&&r.a.createElement(X,null,r.a.createElement(C.a,{onDelete:()=>e.removeValue("",n)})))),r.a.createElement(m.FormApi,{render:t=>r.a.createElement(Y,null,r.a.createElement(W.a,{disabled:t.submitting,width:O.c.ButtonHeight,iconName:"add_circle",onClick:()=>e.addValue("",{price:{value:0},toPrice:{value:0}})}))})),te=h.b.div.withConfig({displayName:"ZoneFormContentStyled"})`
  margin: ${O.c.Middle};
  color: ${O.a.black};
`,ne=h.b.div.withConfig({displayName:"DescriptionUnderHeadline"})`
  color: ${O.a.greyDark};
  padding-bottom: 0.2rem;
`,ae=e=>r.a.createElement(te,null,r.a.createElement(P.a,{icon:"label"},r.a.createElement(z.b,{field:"name",validate:Object(k.b)(i.d._("Zone name"))})),r.a.createElement(P.a,{icon:"color_lens"},r.a.createElement(q,null)),r.a.createElement(S.a,{field:"enabled",name:"enabled",label:i.d._("Is active").toLocaleLowerCase()}),r.a.createElement(N.Trans,{id:"<0>Delivery cost</0><1>according order total cost</1>",components:[r.a.createElement(B.a,{margin:"0.5rem 0 0 0"}),r.a.createElement(ne,null)]}),r.a.createElement(D,{field:"minimalOrderPrice.value"}),r.a.createElement(m.NestedField,{field:"priceRangeRules",component:ee}));var re=n(7509),oe=n(7503);const le=({isSubmitting:e,isModified:t,onGoBack:n,onSave:a})=>r.a.createElement(oe.a,null,r.a.createElement(re.a,{widthGrowIndex:.4,padding:"0"},r.a.createElement(W.a,{color:O.a.greyMiddle,onClick:n,text:i.d._("Back"),disabled:e})),r.a.createElement(re.a,{widthGrowIndex:.4,padding:"0"},r.a.createElement(b.a,{mutationName:"updateZone"},r.a.createElement(W.a,{color:O.a.green,text:i.d._("Save zone"),onClick:a,disabled:e||!t}))));var ie=n(3);const ce=n.n(ie).a`
  query GZones($branchesId: [ID!]!) {
    zones(companyBranches: $branchesId) {
      ...GZone
    }
  }
  ${V.b}
`,de=Object(T.a)(ce),se=r.a.createContext(null),ue=Object(u.b)(({children:e})=>{const{zone:t}=Object(E.d)(),n=t.branches.filter(t.branchFilterPredicate);return 0===n.length?r.a.createElement(se.Provider,{value:[]},e):r.a.createElement(de,{variables:{branchesId:n.map(w.a.prop("id"))},renderLoading:!1,render:({zones:t},{loading:n})=>r.a.createElement(se.Provider,{value:n?null:t},e)})}),me=()=>Object(a.useContext)(se);var pe=function(e,t,n,a){return new(n||(n=Promise))(function(r,o){function l(e){try{c(a.next(e))}catch(t){o(t)}}function i(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(l,i)}c((a=a.apply(e,t||[])).next())})};const he=h.b.div.withConfig({displayName:"DeleteButtonContainer"})`
  width: ${O.c.ButtonHeight};
  margin-top: ${O.c.Middle};
`,be=()=>{const e=j(),t=me(),{zone:n}=Object(E.d)(),{routeToZoneList:o}=F(),[l,c]=Object(a.useState)(!1),d=Object(a.useRef)(null),h=Object(a.useCallback)(()=>pe(void 0,void 0,void 0,function*(){d.current&&(yield d.current.submitForm(),c(!1),o())}),[]),O=Object(a.useCallback)(()=>pe(void 0,void 0,void 0,function*(){e&&(yield n.destroyZone(e)),o()}),[e]);Object(u.f)(()=>Object(s.x)(()=>null!==n.map.currentZonePoints,c));const x=e&&t&&t.find(w.a.propEq("id",e))||null;return x?r.a.createElement(m.Form,{defaultValues:x,onChange:e=>{Object(v.c)("zone form change",e.values),c(!0)},onSubmit:t=>n.saveZone(e,t),render:e=>(d.current=e,r.a.createElement(f.a,{padding:0},r.a.createElement(le,{isSubmitting:e.submitting,isModified:l,onSave:h,onGoBack:o}),r.a.createElement(ae,null),r.a.createElement(b.a,{mutationName:"destroyZone"},r.a.createElement(he,null,r.a.createElement(C.a,{disabled:e.submitting,confirmText:i.d._("Remove zone {0}?",{0:x.name}),onDelete:O}))),r.a.createElement(p.b,{when:l},({isShow:e,handleOk:t,handleCancel:n})=>r.a.createElement(g,{isShow:e,confirmText:i.d._("Do you want to cancel changes for the zone?"),onConfirm:t,onCancel:n}))))}):r.a.createElement(y.a,{text:i.d._("Loading form...")})};var fe=n(7582),ge=n(7530),ye=n(53);const Ee=h.b.div.withConfig({displayName:"BranchNameStyled"})`
  ${function({isActive:e}){return h.a`
    background-color: ${e?O.a.green:O.a.greyLight};
    color: ${e?O.a.white:O.a.greyDark};
  `}} font-size: 1.3rem;
  white-space: nowrap;
  padding: 0.2rem 0.5rem;
`,ve=({branch:e,isActive:t=!0})=>r.a.createElement(ge.OverlayView,{getPixelPositionOffset:(e,t)=>({x:-e/2,y:-t/2}),mapPaneName:ge.OverlayView.MARKER_LAYER,position:Object(ye.b)(e.gps)},r.a.createElement(Ee,{isActive:t},e.name));const we=e=>{const t=Object(a.useCallback)(t=>{e.onFocus&&(t.stop(),e.onFocus())},[e.onFocus]),{points:n,color:o,priority:l}=e;return r.a.createElement(ge.Polygon,{defaultPath:n.map(ye.b),options:{fillColor:o,fillOpacity:.3,strokeWeight:0,zIndex:5e3-l},editable:!1,draggable:!1,onDblClick:t})},Ce=e=>{const t=Object(a.useRef)(null),n=Object(a.useCallback)(()=>{if(t.current){const n=t.current.getPath();e.onChange(n.getArray().map(ye.c))}},[e.onChange]);Object(a.useEffect)(()=>{let a;if(t.current&&e.onChange){const e=t.current.getPath();a=[e.addListener("set_at",n),e.addListener("insert_at",n),e.addListener("remove_at",n)]}return()=>{e.onClear(),a&&a.forEach(e=>e.remove())}},[]);const{points:o,color:l}=e;return r.a.createElement(ge.Polygon,{defaultPath:o.map(ye.b),options:{fillColor:l,fillOpacity:.6,strokeWeight:2,zIndex:1e4},editable:!0,draggable:!0,ref:t,onDragEnd:n})};function Oe(){const{zone:e}=Object(E.d)();return e}function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const je=()=>{const e=Oe(),t=j(),n=me(),{routeToZoneEdit:o}=F(),l=Object(a.useMemo)(()=>e.branches.filter(e.branchFilterPredicate),[e.branches]),i=t=>!e.hasBranchFilter||t===e.branchFilterId,c=n=>{const a={key:`zone${n.id}`,points:n.geoPolygon,priority:n.priority,color:i(n.companyBranch.id)&&n.enabled?n.zoneColor.color:O.a.greyMiddle};return n.id===t?r.a.createElement(Ce,xe({},a,{onChange:e.map.updateZonePoints,onClear:e.map.clearZonePoints})):r.a.createElement(we,xe({},a,{onFocus:()=>{i(n.companyBranch.id)&&o(n.id)}}))},d=Object(a.useCallback)(e=>r.a.createElement(ve,{key:`branch${e.id}`,branch:e,isActive:i(e.id)}),[]);return r.a.createElement(fe.a,{model:e.map,render:()=>r.a.createElement(r.a.Fragment,null,n&&n.map(c),l&&l.map(d))})};var Fe=n(7513);const Ne=Object(u.b)(()=>{const e=Oe(),{routeToZoneEdit:t}=F();return r.a.createElement(W.a,{text:e.hasBranchFilter?i.d._("Create zone for branch"):i.d._("Select branch to create zone"),onClick:()=>e.createZone(t),disabled:!e.hasBranchFilter,color:O.a.turquoise,textNextToIcon:!0,height:O.c.ButtonHeight,iconName:"add_circle"})});var Se=n(7567),ze=n(7524),Be=n(24),Pe=n(7544),ke=n(7569);const Ie=h.b.div.withConfig({displayName:"ZoneNameStyled"})`
  font-size: 1.125rem;
  margin-top: 0.2rem;
`,Ze=h.b.div.withConfig({displayName:"ZoneDescriptionStyled"})`
  font-size: 0.875rem;
`,$e=Object(h.b)(oe.a).withConfig({displayName:"ZoneFlexRowStyled"})`
  height: ${O.c.ButtonHeight};
`,Me=Object(Pe.SortableElement)(({zone:e,branch:t,onEdit:n})=>r.a.createElement(f.a,{key:e.id,padding:0,color:e.enabled?e.zoneColor.color:O.a.greyMiddle,onClick:n},r.a.createElement($e,null,r.a.createElement(re.a,{fixedWidth:!0,padding:"0 0.5rem 0 0"},r.a.createElement(W.a,{width:O.c.ButtonHeight,height:O.c.ButtonHeight,iconName:"mode_edit"})),r.a.createElement(re.a,{widthGrowIndex:1},r.a.createElement(Ie,null,e.name,` [P${e.priority}]`),r.a.createElement(Ze,null,t.name)),r.a.createElement(re.a,{padding:"0"},r.a.createElement(ke.a,null))))),Le=Object(Pe.SortableContainer)(h.b.div`
  margin-top: 0.5rem;
  cursor: arrow;
`),_e=Be.sortWith([Be.ascend(Be.path(["companyBranch","name"])),Be.descend(Be.prop("priority"))]),Ae=Be.groupBy(e=>e.companyBranch.id),De=({branches:e,zones:t,zoneModel:n,onZoneEdit:o})=>{const l=(t,n)=>r.a.createElement(Me,{key:t.id,zone:t,branch:e.find(Be.propEq("id",t.companyBranch.id)),index:n,collection:t.companyBranch.id,onEdit:()=>o(t.id)});let i,c;if(1===e.length){const e=_e(t);i=e.map(l),c=(({oldIndex:t,newIndex:a})=>{const r=e[t];n.changeZonePriority(r,t,a)})}else{const o=Be.mapObjIndexed(_e,Ae(t));i=e.map(e=>{const t=o[e.id];return t?((e,t)=>r.a.createElement(a.Fragment,{key:e.id},r.a.createElement(ze.a,null,e.name),t.map(l)))(e,t):null}),c=(({oldIndex:e,newIndex:t,collection:a})=>{const r=o[a][e];n.changeZonePriority(r,e,t)})}return r.a.createElement(Le,{useDragHandle:!0,lockAxis:"y",onSortEnd:c},i)},Re=()=>{const e=me();if(null===e)return r.a.createElement(Se.a,{primaryOpacity:.2,secondaryOpacity:.2});const t=Oe(),{routeToZoneEdit:n}=F();return null===t.brand?r.a.createElement(ze.a,null,r.a.createElement(N.Trans,{id:"Select brand to see its zones"})):r.a.createElement(De,{zoneModel:t,zones:e.filter(t.zoneFilterPredicate),branches:t.root.user.filterBranches(t.branchFilterPredicate),onZoneEdit:n})};var Te=n(7507),Ve=n(51),Ge=n(7533);const He=({branches:e,selectedBranch:t,onSelection:n,autoFocus:a})=>r.a.createElement(Ge.a,{placeholder:i.d._("Select branch"),branches:e,selectedBranch:t,onSingleSelection:n,formatOptionLabel:w.a.prop("name"),isClearable:!0,autoFocus:a});var qe=n(7500);const We=({brands:e,selectedBrand:t,onSelection:n})=>r.a.createElement(qe.a,{placeholder:i.d._("Select brand"),options:e,value:t,formatOptionLabel:w.a.prop("name"),getOptionValue:w.a.prop("id"),getOptionLabel:w.a.prop("name"),isClearable:!0,isSearchable:!0,onChange:e=>n(e),autoFocus:!0}),Je=()=>r.a.createElement(Ve.a,{render:({user:e,zone:t})=>{const n=e.branches;if(0===n.length)return null;if(1===n.length)return t.setBranchFilter(w.a.head(n)),null;const a=e.brands,o=e=>null===e?[]:n.filter(w.a.pathEq(["brand","id"],e.id)),l=1===a.length?w.a.head(a):null;return l&&t.setBrandFilter(l,o(t.brand)),r.a.createElement(r.a.Fragment,null,!l&&r.a.createElement(We,{brands:a,selectedBrand:t.brand,onSelection:e=>{null===e?t.clearBrandFilter():t.setBrandFilter(e,o(e))}}),!l&&r.a.createElement(Te.a,null),r.a.createElement(He,{branches:o(t.brand),selectedBranch:t.branch,autoFocus:Boolean(l),onSelection:e=>{null===e?t.clearBranchFilter():t.setBranchFilter(e)}}))}}),Ue=h.b.div.withConfig({displayName:"ZoneMenuContainer"})`
  display: flex;
  flex-direction: column;
  height: 100%;
`,Ke=h.b.div.withConfig({displayName:"FixedHeaderContainer"})`
  flex: 0 0 auto;
`,Qe=h.b.div.withConfig({displayName:"ScrollAreaContainer"})`
  flex: 1 1 0;
  min-height: 0;
`,Ye=()=>r.a.createElement(Ue,null,r.a.createElement(Ke,null,r.a.createElement(f.a,null,r.a.createElement(Je,null)),r.a.createElement(b.a,{mutationName:"createZone"},r.a.createElement(Ne,null))),r.a.createElement(Qe,null,r.a.createElement(Fe.a,null,r.a.createElement(Re,null)))),Xe=({match:e})=>{const t=Boolean(e.params.zoneId);return r.a.createElement(ue,null,r.a.createElement(c.a,{pageTitle:i.d._("Delivery zones"),useBackButton:!0,backRoute:"/settings"}),r.a.createElement(d.a,{widthInColumns:6,column:10,withScrollArea:t},t?r.a.createElement(be,null):r.a.createElement(Ye,null)),r.a.createElement(d.a,{widthInColumns:10},r.a.createElement(je,null)))};n.d(t,"ZoneMenuRoutes",function(){return et});const et=()=>{const{getRouteToZone:e}=F();return r.a.createElement(o.e,null,r.a.createElement(o.c,{path:e(":zoneId?"),component:Xe}),r.a.createElement(o.c,{component:l.a}))};t.default=et}}]);
//# sourceMappingURL=54.878455ab.chunk.js.map