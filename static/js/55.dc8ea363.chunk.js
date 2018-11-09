(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{7505:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),o=n(12),i=n(7512),l=n(9);const c=o.b.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+l.c.LayoutGridCellMargin+")":"calc(100vh - (2 * "+l.c.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+l.c.LayoutGridCellMargin+")":l.c.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+l.c.LayoutGridCellMargin+")":"calc(3.9375rem + "+l.c.LayoutGridCellMargin+")")()};
`,d=o.b.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`,s=({children:e,row:t=1,column:n=0,widthInColumns:a=16,withScrollArea:o=!1,scrollAreaId:l})=>r.a.createElement(c,{column:n,row:t,widthInColumns:a,withScrollArea:o},o?r.a.createElement(i.a,{id:l},e):r.a.createElement(d,null,e))},7509:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=n(12).b.div.withConfig({displayName:"VerticalGap"})`
  height: ${({size:e=1,sizeUnit:t="rem"})=>`${e}${t}`};
`;a.displayName="VerticalGap"},7512:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=n(12).b.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`},7530:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=n(12).b.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`},7531:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(12),r=n(9);const o=a.b.h2.withConfig({displayName:"CardListTitle"})`
  color: ${r.a.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`},7547:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n(14);function o(){return Object(a.useContext)(r.f)}},7609:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(0),r=n.n(a),o=n(7600),i=n(12),l=n(71);const c=i.b.div.withConfig({displayName:"DragHandleContainerStyled"})`
  padding: 1rem 0.4rem;
  cursor: grab;
`,d=Object(o.SortableHandle)(()=>r.a.createElement(c,null,r.a.createElement(l.a,{iconName:"reorder"})))},7623:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(60),r=n(0),o=n.n(r),i=n(7550),l=n(12),c=n(9);const d=l.b.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: ${c.b.Card};
  overflow: hidden;
  height: 100%;
`,s=Object(i.withGoogleMap)(({children:e})=>o.a.createElement(o.a.Fragment,null,e));class m extends r.Component{constructor(){super(...arguments),this.getOptions=(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1}))}render(){const{model:e}=this.props;return o.a.createElement(s,{containerElement:o.a.createElement(d,null),mapElement:o.a.createElement("div",{style:{height:"100%"}})},o.a.createElement(a.a,null,()=>o.a.createElement(i.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,options:this.getOptions()},this.props.render({}))))}}},7773:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(0),r=n.n(a),o=n(7490),i=n(13),l=n(37),c=n(7503);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};class m extends r.a.Component{constructor(){super(...arguments),this.validate=(e=>this.props.isRequired&&!e?l.d._("{0} must be selected",{0:this.props.validatioName}):null)}getControlProps(e){const{isMulti:t,options:n,getOptionValue:a,defaultValue:r}=this.props,o=e.value||r;if(t){const t=Array.isArray(o)?e=>o.includes(a(e)):i.a.F;return{value:Array.isArray(n)?n.filter(t):[],onChange:t=>{e.setValue(t.map(a))}}}return{value:o&&n.find(e=>a(e)===o),onChange:t=>{e.setValue(a(t))}}}render(){const e=this.props,{field:t,fieldIsPure:n=!1,defaultValue:a,isRequired:i=!1}=e,l=s(e,["field","fieldIsPure","defaultValue","isRequired"]);return r.a.createElement(o.Field,{field:t,validate:this.validate,pure:n},e=>r.a.createElement(c.a,d({},this.getControlProps(e),{onFocus:()=>e.setTouched(!0),styles:{control:t=>Boolean(e.error)?Object.assign({},t,{borderColor:"red"}):t}},l)))}}m.defaultProps={validatioName:"Value",getItemId:i.a.prop("id")}},7931:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n(52),l=n(126),c=n(72),d=n(37),s=n(267),m=n(7505),u=n(7490),h=n(12),p=n(7498),b=n(262),g=n(270),f=n(18),y=n(13),E=n(7548),v=n(9),C=n(7547);function w(){const{match:e}=Object(C.a)(),{zoneId:t}=e.params;return t}function O(){const{user:e,zone:t}=Object(i.c)(),{history:n}=Object(C.a)();return{routeToZoneEdit(a){t.map.panToZone(a),e.canQuery("zone")&&n.push(t.getRouteToZone(a))},routeToZoneList(){n.push(t.route)}}}var N=n(82),x=n(7606),F=n(7497),j=n(7502),z=n(7494),S=n(7554);const B=h.b.div.withConfig({displayName:"LabelStyled"})`
  min-width: 2rem;
  display: inline-block;
`,P=Object(h.b)(F.b).withConfig({displayName:"FormInputTextBoxStyled"})`
  width: 3rem;
  position: relative;
  z-index: 4;
`,I=Object(h.b)(P).withConfig({displayName:"FormInputTextBoxDeliveryStyled"})`
  color: ${v.a.blue};
`,k=h.b.div.withConfig({displayName:"DeliveryContainer"})`
  position: relative;
  left: 8rem;
  top: 0rem;
`,Z=h.b.div.withConfig({displayName:"PriceRangeContainer"})`
  position: relative;
  left: 4rem;
  top: -0.3rem;
  width: 3rem;
`,M=h.b.div.withConfig({displayName:"VerticalLine"})`
  border-left: 3px solid #707070;
  width: 3px;
  position: relative;
  left: -2rem;
  height: 4rem;
  float: left;
  margin: -0.5rem 0 0 0;
`,A=e=>{if("number"===typeof e)return null;const t=e.trim();return t.length&&Number.isNaN(Number.parseFloat(t))?d.d._("Must be number"):null},$=r.a.forwardRef(({field:e,label:t,isDeliveryPrice:n,autoFocus:a=!1},o)=>n?r.a.createElement(k,null,r.a.createElement(M,null),r.a.createElement(B,null,t),r.a.createElement(I,{field:e,validate:A,ref:o})):r.a.createElement(Z,null,r.a.createElement(P,{field:e,validate:A,autoFocus:a})));var L=n(7773),D=n(32),T=n(122);const _=h.b.div.withConfig({displayName:"ColorOption"})`
  background-color: ${({color:e})=>e};
  color: ${v.a.white};
  width: 6rem;
  padding: 0.4rem 1rem;
  margin: 0;
  height: 100%;
`,R=Object(D.a)(T.a),V=({field:e="zoneColor.id"})=>r.a.createElement(R,{render:({zoneColors:t})=>r.a.createElement(L.a,{field:e,fieldIsPure:!0,options:t,width:8,styles:(()=>({option:e=>Object.assign({},e,{padding:0,margin:0}),menu:e=>Object.assign({},e,{width:"8rem",maxWidth:"8rem"})}))(),defaultValue:y.a.head(t),getOptionValue:y.a.prop("id"),formatOptionLabel:e=>r.a.createElement(_,{color:e.color},e.code)})});var G=n(261);const H=h.b.div.withConfig({displayName:"LabelStyled"})`
  width: 3rem;
  display: inline-block;
`,q=Object(h.b)(F.a).withConfig({displayName:"FormInputForPlaceholderStyled"})`
  width: 3rem;
  position: relative;
  z-index: 4;
`,U=h.b.div.withConfig({displayName:"Container"})`
  margin: 0 0 0 1rem;
`,W=({label:e,display:t})=>r.a.createElement(U,null,r.a.createElement(H,null,e),r.a.createElement(q,{disabled:!0,placeholder:t})),J=h.b.div.withConfig({displayName:"AddButtonContainer"})`
  position: relative;
  top: -6rem;
`,K=h.b.div.withConfig({displayName:"RemoveButtonContainer"})`
  position: relative;
  top: -7rem;
  left: 16rem;
`,Q=({fieldApi:e})=>r.a.createElement(r.a.Fragment,null,e.values.map((t,n,o)=>r.a.createElement(a.Fragment,{key:n},r.a.createElement($,{label:"za",isDeliveryPrice:!0,field:[n,"price","value"]}),n===o.length-1?r.a.createElement(W,{display:"\u221e",label:"do"}):r.a.createElement($,{field:[n,"toPrice","value"],autoFocus:!0}),o.length>1&&r.a.createElement(K,null,r.a.createElement(E.a,{onDelete:()=>e.removeValue("",n)})))),r.a.createElement(u.FormApi,{render:t=>r.a.createElement(J,null,r.a.createElement(G.a,{disabled:t.submitting,width:v.c.ButtonHeight,iconName:"add_circle",onClick:()=>e.addValue("",{price:{value:0},toPrice:{value:0}})}))})),Y=h.b.div.withConfig({displayName:"ZoneFormContentStyled"})`
  margin: ${v.c.Middle};
  color: ${v.a.black};
`,X=h.b.div.withConfig({displayName:"DescriptionUnderHeadline"})`
  color: ${v.a.greyDark};
  padding-bottom: 0.2rem;
`,ee=e=>r.a.createElement(Y,null,r.a.createElement(z.a,{icon:"label"},r.a.createElement(F.b,{field:"name",validate:Object(S.b)(d.d._("Zone name"))})),r.a.createElement(z.a,{icon:"color_lens"},r.a.createElement(V,null)),r.a.createElement(x.a,{field:"enabled",name:"enabled",label:d.d._("Is active").toLocaleLowerCase()}),r.a.createElement(N.Trans,{id:"<0>Delivery cost</0><1>according order total cost</1>",components:[r.a.createElement(j.a,{margin:"0.5rem 0 0 0"}),r.a.createElement(X,null)]}),r.a.createElement($,{field:"minimalOrderPrice.value"}),r.a.createElement(u.NestedField,{field:"priceRangeRules",component:Q}));var te=n(7543),ne=n(7530);const ae=({isSubmitting:e,isModified:t,onGoBack:n,onSave:a})=>r.a.createElement(ne.a,null,r.a.createElement(te.a,{widthGrowIndex:.4,padding:"0"},r.a.createElement(G.a,{color:v.a.greyMiddle,onClick:n,text:d.d._("Back"),disabled:e})),r.a.createElement(te.a,{widthGrowIndex:.4,padding:"0"},r.a.createElement(p.a,{mutationName:"updateZone"},r.a.createElement(G.a,{color:v.a.green,text:d.d._("Save zone"),onClick:a,disabled:e||!t}))));var re=n(60),oe=n(3);const ie=n.n(oe).a`
  query GZones($branchesId: [ID!]!) {
    zones(companyBranches: $branchesId) {
      ...GZone
    }
  }
  ${T.b}
`,le=Object(D.a)(ie),ce=r.a.createContext(null),de=Object(re.b)(({children:e})=>{const{zone:t}=Object(i.c)(),n=t.branches.filter(t.branchFilterPredicate);return 0===n.length?r.a.createElement(ce.Provider,{value:[]},e):r.a.createElement(le,{variables:{branchesId:n.map(y.a.prop("id"))},renderLoading:!1,render:({zones:t},{loading:n})=>r.a.createElement(ce.Provider,{value:n?null:t},e)})}),se=()=>Object(a.useContext)(ce);var me=function(e,t,n,a){return new(n||(n=Promise))(function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,l)}c((a=a.apply(e,t||[])).next())})};const ue=h.b.div.withConfig({displayName:"DeleteButtonContainer"})`
  width: ${v.c.ButtonHeight};
  margin-top: ${v.c.Middle};
`,he=()=>{const e=w(),t=se(),{zone:n}=Object(i.c)(),{routeToZoneList:o}=O(),[l,c]=Object(a.useState)(!1),s=Object(a.useRef)(),m=Object(a.useCallback)(()=>me(void 0,void 0,void 0,function*(){yield s.current.submitForm(),o()})),h=Object(a.useCallback)(()=>me(void 0,void 0,void 0,function*(){e&&(yield n.destroyZone(e)),o()}),[e]),v=e&&t&&t.find(y.a.propEq("id",e))||null;return v?r.a.createElement(u.Form,{defaultValues:v,onChange:e=>{Object(f.c)("zone form change",e.values),c(!0)},render:e=>(s.current=e,r.a.createElement(b.a,{padding:0},r.a.createElement(ae,{isSubmitting:e.submitting,isModified:l,onSave:m,onGoBack:o}),r.a.createElement(ee,null),r.a.createElement(p.a,{mutationName:"destroyZone"},r.a.createElement(ue,null,r.a.createElement(E.a,{disabled:e.submitting,confirmText:d.d._("Remove zone {0}?",{0:v.name}),onDelete:h}))))),onSubmit:t=>n.saveZone(e,t)}):r.a.createElement(g.a,{text:d.d._("Loading form...")})};var pe=n(7623),be=n(269),ge=n(7550),fe=n(54);const ye=h.b.div.withConfig({displayName:"BranchNameStyled"})`
  ${function({isActive:e}){return h.a`
    background-color: ${e?v.a.green:v.a.greyLight};
    color: ${e?v.a.white:v.a.greyDark};
  `}} font-size: 1.3rem;
  white-space: nowrap;
  padding: 0.2rem 0.5rem;
`,Ee=({branch:e,isActive:t=!0})=>r.a.createElement(ge.OverlayView,{getPixelPositionOffset:(e,t)=>({x:-e/2,y:-t/2}),mapPaneName:ge.OverlayView.MARKER_LAYER,position:Object(fe.b)(e.gps)},r.a.createElement(ye,{isActive:t},e.name));class ve extends r.a.PureComponent{constructor(){super(...arguments),this.polygon=null,this.listeners=[],this.onAreaChange=(()=>{const{onChange:e}=this.props;if(e&&this.polygon){e(this.polygon.getPath().getArray().map(fe.c))}}),this.onAreaFocus=(e=>{this.props.onFocus&&(e.stop(),this.props.onFocus())}),this.onMount=(e=>{this.polygon=e})}componentDidMount(){if(this.polygon&&this.props.onChange){const e=this.polygon.getPath();this.listeners=[e.addListener("set_at",this.onAreaChange),e.addListener("insert_at",this.onAreaChange),e.addListener("remove_at",this.onAreaChange)]}}componentWillUnmount(){this.listeners.forEach(e=>e.remove()),this.listeners.length=0}render(){const{points:e,color:t,edit:n,priority:a}=this.props;return r.a.createElement(ge.Polygon,{defaultPath:e.map(fe.b),options:{fillColor:t,fillOpacity:n?.6:.3,strokeWeight:n?2:0,zIndex:n?1e4:5e3-a},editable:n,draggable:n,ref:this.onMount,onDragEnd:this.onAreaChange,onDblClick:this.onAreaFocus})}}function Ce(){const{zone:e}=Object(i.c)();return e}const we=()=>{const e=Ce(),t=w(),n=se(),{routeToZoneEdit:o}=O();Object(be.a)(()=>(Object(f.c)("MOUNT"),()=>Object(f.c)("UNMOUNT")));const i=Object(a.useMemo)(()=>e.branches.filter(e.branchFilterPredicate),[e.branches]),l=t=>!e.hasBranchFilter||t===e.branchFilterId,c=Object(a.useCallback)(n=>r.a.createElement(ve,{key:`zone${n.id}`,points:n.geoPolygon,priority:n.priority,color:l(n.companyBranch.id)&&n.enabled?n.zoneColor.color:v.a.greyMiddle,edit:n.id===t,onChange:e.map.updateZonePoints,onFocus:()=>{l(n.companyBranch.id)&&o(n.id)}})),d=Object(a.useCallback)(e=>r.a.createElement(Ee,{key:`branch${e.id}`,branch:e,isActive:l(e.id)}));return r.a.createElement(pe.a,{model:e.map,render:()=>r.a.createElement(r.a.Fragment,null,n&&n.map(c),i&&i.map(d))})};var Oe=n(7512);const Ne=Object(re.b)(()=>{const e=Ce(),{routeToZoneEdit:t}=O();return r.a.createElement(G.a,{text:e.hasBranchFilter?d.d._("Create zone for branch"):d.d._("Select branch to create zone"),onClick:()=>e.createZone(t),disabled:!e.hasBranchFilter,color:v.a.turquoise,textNextToIcon:!0,height:v.c.ButtonHeight,iconName:"add_circle"})});var xe=n(7921),Fe=n(7531),je=n(24),ze=n(7600),Se=n(7609);const Be=h.b.div.withConfig({displayName:"ZoneNameStyled"})`
  font-size: 1.125rem;
  margin-top: 0.2rem;
`,Pe=h.b.div.withConfig({displayName:"ZoneDescriptionStyled"})`
  font-size: 0.875rem;
`,Ie=Object(h.b)(ne.a).withConfig({displayName:"ZoneFlexRowStyled"})`
  height: ${v.c.ButtonHeight};
`,ke=Object(ze.SortableElement)(({zone:e,branch:t,onEdit:n})=>r.a.createElement(b.a,{key:e.id,padding:0,color:e.zoneColor.color,onClick:n},r.a.createElement(Ie,null,r.a.createElement(te.a,{fixedWidth:!0,padding:"0 0.5rem 0 0"},r.a.createElement(G.a,{width:v.c.ButtonHeight,height:v.c.ButtonHeight,iconName:"mode_edit"})),r.a.createElement(te.a,{widthGrowIndex:1},r.a.createElement(Be,null,e.name,` [P${e.priority}]`),r.a.createElement(Pe,null,t.name)),r.a.createElement(te.a,{padding:"0"},r.a.createElement(Se.a,null))))),Ze=Object(ze.SortableContainer)(h.b.div`
  margin-top: 0.5rem;
  cursor: arrow;
`),Me=je.sortWith([je.ascend(je.path(["companyBranch","name"])),je.descend(je.prop("priority"))]),Ae=je.groupBy(e=>e.companyBranch.id),$e=({branches:e,zones:t,zoneModel:n,onZoneEdit:o})=>{const i=(t,n)=>r.a.createElement(ke,{key:t.id,zone:t,branch:e.find(je.propEq("id",t.companyBranch.id)),index:n,collection:t.companyBranch.id,onEdit:()=>o(t.id)});let l,c;if(1===e.length){const e=Me(t);l=e.map(i),c=(({oldIndex:t,newIndex:a})=>{const r=e[t];n.changeZonePriority(r,t,a)})}else{const o=je.mapObjIndexed(Me,Ae(t));l=e.map(e=>{const t=o[e.id];return t?((e,t)=>r.a.createElement(a.Fragment,{key:e.id},r.a.createElement(Fe.a,null,e.name),t.map(i)))(e,t):null}),c=(({oldIndex:e,newIndex:t,collection:a})=>{const r=o[a][e];n.changeZonePriority(r,e,t)})}return r.a.createElement(Ze,{useDragHandle:!0,lockAxis:"y",onSortEnd:c},l)},Le=()=>{const e=se();if(null===e)return r.a.createElement(xe.a,{primaryOpacity:.2,secondaryOpacity:.2});const t=Ce(),{routeToZoneEdit:n}=O();return null===t.brand?r.a.createElement(Fe.a,null,r.a.createElement(N.Trans,{id:"Select brand to see its zones"})):r.a.createElement($e,{zoneModel:t,zones:e.filter(t.zoneFilterPredicate),branches:t.root.user.filterBranches(t.branchFilterPredicate),onZoneEdit:n})};var De=n(7509),Te=n(51),_e=n(7553);const Re=({branches:e,selectedBranch:t,onSelection:n,autoFocus:a})=>r.a.createElement(_e.a,{placeholder:d.d._("Select branch"),branches:e,selectedBranch:t,onSingleSelection:n,formatOptionLabel:y.a.prop("name"),isClearable:!0,autoFocus:a});var Ve=n(7503);const Ge=({brands:e,selectedBrand:t,onSelection:n})=>r.a.createElement(Ve.a,{placeholder:d.d._("Select brand"),options:e,value:t,formatOptionLabel:y.a.prop("name"),getOptionValue:y.a.prop("id"),getOptionLabel:y.a.prop("name"),isClearable:!0,isSearchable:!0,onChange:e=>n(e),autoFocus:!0}),He=()=>r.a.createElement(Te.a,{render:({user:e,zone:t})=>{const n=e.branches;if(0===n.length)return null;if(1===n.length)return t.setBranchFilter(y.a.head(n)),null;const a=e.brands,o=e=>null===e?[]:n.filter(y.a.pathEq(["brand","id"],e.id)),i=1===a.length?y.a.head(a):null;return i&&t.setBrandFilter(i,o(t.brand)),r.a.createElement(r.a.Fragment,null,!i&&r.a.createElement(Ge,{brands:a,selectedBrand:t.brand,onSelection:e=>{null===e?t.clearBrandFilter():t.setBrandFilter(e,o(e))}}),!i&&r.a.createElement(De.a,null),r.a.createElement(Re,{branches:o(t.brand),selectedBranch:t.branch,autoFocus:Boolean(i),onSelection:e=>{null===e?t.clearBranchFilter():t.setBranchFilter(e)}}))}}),qe=h.b.div.withConfig({displayName:"ZoneMenuContainer"})`
  display: flex;
  flex-direction: column;
  height: 100%;
`,Ue=h.b.div.withConfig({displayName:"FixedHeaderContainer"})`
  flex: 0 0 auto;
`,We=h.b.div.withConfig({displayName:"ScrollAreaContainer"})`
  flex: 1 1 0;
  min-height: 0;
`,Je=()=>r.a.createElement(qe,null,r.a.createElement(Ue,null,r.a.createElement(b.a,null,r.a.createElement(He,null)),r.a.createElement(p.a,{mutationName:"createZone"},r.a.createElement(Ne,null))),r.a.createElement(We,null,r.a.createElement(Oe.a,null,r.a.createElement(Le,null)))),Ke=({isEditing:e})=>r.a.createElement(de,null,r.a.createElement(s.a,{pageTitle:d.d._("Delivery zones")}),r.a.createElement(m.a,{widthInColumns:6,column:10,withScrollArea:e},e?r.a.createElement(he,null):r.a.createElement(Je,null)),r.a.createElement(m.a,{widthInColumns:10},r.a.createElement(we,null)));n.d(t,"ZoneMenuRoutes",function(){return Qe});const Qe=()=>{const{zone:e}=Object(i.c)();return r.a.createElement(o.e,null,r.a.createElement(c.a,{path:e.getRouteToZone(":zoneId?"),render:({match:e})=>r.a.createElement(Ke,{isEditing:Boolean(e.params.zoneId)})}),r.a.createElement(o.c,{component:l.a}))};t.default=Qe}}]);
//# sourceMappingURL=55.dc8ea363.chunk.js.map