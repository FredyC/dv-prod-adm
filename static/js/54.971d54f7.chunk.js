(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{7497:function(e,t,n){"use strict";t.__esModule=!0;var a,r=n(499),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(e,t,n){return t in e?(0,o.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7503:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),o=n(12),i=n(7513),l=n(9);const c=o.b.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+l.c.LayoutGridCellMargin+")":"calc(100vh - (2 * "+l.c.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+l.c.LayoutGridCellMargin+")":l.c.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+l.c.LayoutGridCellMargin+")":"calc(3.9375rem + "+l.c.LayoutGridCellMargin+")")()};
`,d=o.b.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`,s=({children:e,row:t=1,column:n=0,widthInColumns:a=16,withScrollArea:o=!1,scrollAreaId:l})=>r.a.createElement(c,{column:n,row:t,widthInColumns:a,withScrollArea:o},o?r.a.createElement(i.a,{id:l},e):r.a.createElement(d,null,e))},7507:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=n(12).b.div.withConfig({displayName:"VerticalGap"})`
  height: ${({size:e=1,sizeUnit:t="rem"})=>`${e}${t}`};
`;a.displayName="VerticalGap"},7509:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=n(12).b.div.withConfig({displayName:"FlexRowSingle"})`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify:e="space-between"})=>e};
`},7512:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n(17);function o(){return Object(a.useContext)(r.f)}},7513:function(e,t,n){"use strict";n.d(t,"a",function(){return a});const a=n(12).b.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`},7524:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(12),r=n(9);const o=a.b.h2.withConfig({displayName:"CardListTitle"})`
  color: ${r.a.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`},7568:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(0),r=n.n(a),o=n(7544),i=n(12),l=n(70);const c=i.b.div.withConfig({displayName:"DragHandleContainerStyled"})`
  padding: 1rem 0.4rem;
  cursor: grab;
`,d=Object(o.SortableHandle)(()=>r.a.createElement(c,null,r.a.createElement(l.a,{iconName:"reorder"})))},7581:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(84),r=n(0),o=n.n(r),i=n(7531),l=n(12),c=n(9);const d=l.b.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: ${c.b.Card};
  overflow: hidden;
  height: 100%;
`,s=Object(i.withGoogleMap)(({children:e})=>o.a.createElement(o.a.Fragment,null,e));class u extends r.Component{constructor(){super(...arguments),this.getOptions=(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1}))}render(){const{model:e}=this.props;return o.a.createElement(s,{containerElement:o.a.createElement(d,null),mapElement:o.a.createElement("div",{style:{height:"100%"}})},o.a.createElement(a.a,null,()=>o.a.createElement(i.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,options:this.getOptions()},this.props.render({}))))}}},7595:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=function(){return Math.random().toString(36).substring(2)},o=function(e){var t=e.uniquekey?e.uniquekey+"-idClip":r(),n=e.uniquekey?e.uniquekey+"-idGradient":r(),o=e.rtl?["1; -3","2; -2","3; -1"]:["-3; 1","-2; 2","-1; 3"];return Object(a.createElement)("svg",{viewBox:"0 0 "+e.width+" "+e.height,style:e.style,preserveAspectRatio:e.preserveAspectRatio,className:e.className},Object(a.createElement)("rect",{style:{fill:"url(#"+n+")"},clipPath:"url(#"+t+")",x:"0",y:"0",width:e.width,height:e.height}),Object(a.createElement)("defs",null,Object(a.createElement)("clipPath",{id:t},e.children),Object(a.createElement)("linearGradient",{id:n},Object(a.createElement)("stop",{offset:"0%",stopColor:e.primaryColor,stopOpacity:e.primaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:o[0],dur:e.speed+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:e.secondaryColor,stopOpacity:e.secondaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:o[1],dur:e.speed+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:e.primaryColor,stopOpacity:e.primaryOpacity},e.animate&&Object(a.createElement)("animate",{attributeName:"offset",values:o[2],dur:e.speed+"s",repeatCount:"indefinite"})))))},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(e){return Object(a.createElement)(s,e,Object(a.createElement)("circle",{cx:"10",cy:"20",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),Object(a.createElement)("circle",{cx:"10",cy:"50",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),Object(a.createElement)("circle",{cx:"10",cy:"80",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),Object(a.createElement)("circle",{cx:"10",cy:"110",r:"8"}),Object(a.createElement)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"}))},c={animate:!0,height:130,preserveAspectRatio:"xMidYMid meet",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,width:400},d=function(e){return Object(a.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},s=function(e){var t=i({},c,e),n=e.children?e.children:Object(a.createElement)(d,t);return Object(a.createElement)(o,t,n)}},7596:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(0),r=n.n(a),o=n(7493),i=n(15),l=n(36),c=n(7501);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};class u extends r.a.Component{constructor(){super(...arguments),this.validate=(e=>this.props.isRequired&&!e?l.d._("{0} must be selected",{0:this.props.validatioName}):null)}getControlProps(e){const{isMulti:t,options:n,getOptionValue:a,defaultValue:r}=this.props,o=e.value||r;if(t){const t=Array.isArray(o)?e=>o.includes(a(e)):i.a.F;return{value:Array.isArray(n)?n.filter(t):[],onChange:t=>{e.setValue(t.map(a))}}}return{value:o&&n.find(e=>a(e)===o),onChange:t=>{e.setValue(a(t))}}}render(){const e=this.props,{field:t,fieldIsPure:n=!1,defaultValue:a,isRequired:i=!1}=e,l=s(e,["field","fieldIsPure","defaultValue","isRequired"]);return r.a.createElement(o.Field,{field:t,validate:this.validate,pure:n},e=>r.a.createElement(c.a,d({},this.getControlProps(e),{onFocus:()=>e.setTouched(!0),styles:{control:t=>Boolean(e.error)?Object.assign({},t,{borderColor:"red"}):t}},l)))}}u.defaultProps={validatioName:"Value",getItemId:i.a.prop("id")}},7934:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n(127),l=n(36),c=n(271),d=n(7503),s=n(5),u=n(267),m=n(7493),p=n(472),h=n(12),b=n(7496),f=n(266);const g=e=>(Object(a.useEffect)(()=>{e.isShow&&(window.confirm(e.confirmText)?e.onConfirm():e.onCancel())},[e.isShow]),null);var y=n(274),E=n(50),v=n(18),w=n(15),C=n(7529),O=n(9),j=n(7512);function x(){const{match:e}=Object(j.a)(),{zoneId:t}=e.params;return t}function N(){const{user:e,zone:t}=Object(E.d)(),{history:n}=Object(j.a)(),a=e=>`/settings/zones/${e}`;return{getRouteToZone:a,routeToZoneEdit(r){t.map.panToZone(r),e.canQuery("zone")&&n.push(a(r))},routeToZoneList(){n.push("/settings/zones")}}}var F=n(81),S=n(7564),z=n(7495),P=n(7500),B=n(7494),k=n(7519);const I=h.b.div.withConfig({displayName:"LabelStyled"})`
  min-width: 2rem;
  display: inline-block;
`,Z=Object(h.b)(z.b).withConfig({displayName:"FormInputTextBoxStyled"})`
  width: 3rem;
  position: relative;
  z-index: 4;
`,M=Object(h.b)(Z).withConfig({displayName:"FormInputTextBoxDeliveryStyled"})`
  color: ${O.a.blue};
`,$=h.b.div.withConfig({displayName:"DeliveryContainer"})`
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
`,A=e=>{if("number"===typeof e)return null;const t=e.trim();return t.length&&Number.isNaN(Number.parseFloat(t))?l.d._("Must be number"):null},R=r.a.forwardRef(({field:e,label:t,isDeliveryPrice:n,autoFocus:a=!1},o)=>n?r.a.createElement($,null,r.a.createElement(_,null),r.a.createElement(I,null,t),r.a.createElement(M,{field:e,validate:A,ref:o})):r.a.createElement(L,null,r.a.createElement(Z,{field:e,validate:A,autoFocus:a})));var D=n(7596),T=n(37),G=n(122);const V=h.b.div.withConfig({displayName:"ColorOption"})`
  background-color: ${({color:e})=>e};
  color: ${O.a.white};
  width: 6rem;
  padding: 0.4rem 1rem;
  margin: 0;
  height: 100%;
`,H=Object(T.a)(G.a),q=({field:e="zoneColor.id"})=>r.a.createElement(H,{render:({zoneColors:t})=>r.a.createElement(D.a,{field:e,fieldIsPure:!0,options:t,width:8,styles:(()=>({option:e=>Object.assign({},e,{padding:0,margin:0}),menu:e=>Object.assign({},e,{width:"8rem",maxWidth:"8rem"})}))(),defaultValue:w.a.head(t),getOptionValue:w.a.prop("id"),formatOptionLabel:e=>r.a.createElement(V,{color:e.color},e.code)})});var W=n(263);const J=h.b.div.withConfig({displayName:"LabelStyled"})`
  width: 3rem;
  display: inline-block;
`,U=Object(h.b)(z.a).withConfig({displayName:"FormInputForPlaceholderStyled"})`
  width: 3rem;
  position: relative;
  z-index: 4;
`,Y=h.b.div.withConfig({displayName:"Container"})`
  margin: 0 0 0 1rem;
`,K=({label:e,display:t})=>r.a.createElement(Y,null,r.a.createElement(J,null,e),r.a.createElement(U,{disabled:!0,placeholder:t})),Q=h.b.div.withConfig({displayName:"AddButtonContainer"})`
  position: relative;
  top: -6rem;
`,X=h.b.div.withConfig({displayName:"RemoveButtonContainer"})`
  position: relative;
  top: -7rem;
  left: 16rem;
`,ee=({fieldApi:e})=>r.a.createElement(r.a.Fragment,null,e.values.map((t,n,o)=>r.a.createElement(a.Fragment,{key:n},r.a.createElement(R,{label:"za",isDeliveryPrice:!0,field:[n,"price","value"]}),n===o.length-1?r.a.createElement(K,{display:"\u221e",label:"do"}):r.a.createElement(R,{field:[n,"toPrice","value"],autoFocus:!0}),o.length>1&&r.a.createElement(X,null,r.a.createElement(C.a,{onDelete:()=>e.removeValue("",n)})))),r.a.createElement(m.FormApi,{render:t=>r.a.createElement(Q,null,r.a.createElement(W.a,{disabled:t.submitting,width:O.c.ButtonHeight,iconName:"add_circle",onClick:()=>e.addValue("",{price:{value:0},toPrice:{value:0}})}))})),te=h.b.div.withConfig({displayName:"ZoneFormContentStyled"})`
  margin: ${O.c.Middle};
  color: ${O.a.black};
`,ne=h.b.div.withConfig({displayName:"DescriptionUnderHeadline"})`
  color: ${O.a.greyDark};
  padding-bottom: 0.2rem;
`,ae=e=>r.a.createElement(te,null,r.a.createElement(B.a,{icon:"label"},r.a.createElement(z.b,{field:"name",validate:Object(k.b)(l.d._("Zone name"))})),r.a.createElement(B.a,{icon:"color_lens"},r.a.createElement(q,null)),r.a.createElement(S.a,{field:"enabled",name:"enabled",label:l.d._("Is active").toLocaleLowerCase()}),r.a.createElement(F.Trans,{id:"<0>Delivery cost</0><1>according order total cost</1>",components:[r.a.createElement(P.a,{margin:"0.5rem 0 0 0"}),r.a.createElement(ne,null)]}),r.a.createElement(R,{field:"minimalOrderPrice.value"}),r.a.createElement(m.NestedField,{field:"priceRangeRules",component:ee}));var re=n(7516),oe=n(7509);const ie=({isSubmitting:e,isModified:t,onGoBack:n,onSave:a})=>r.a.createElement(oe.a,null,r.a.createElement(re.a,{widthGrowIndex:.4,padding:"0"},r.a.createElement(W.a,{color:O.a.greyMiddle,onClick:n,text:l.d._("Back"),disabled:e})),r.a.createElement(re.a,{widthGrowIndex:.4,padding:"0"},r.a.createElement(b.a,{mutationName:"updateZone"},r.a.createElement(W.a,{color:O.a.green,text:l.d._("Save zone"),onClick:a,disabled:e||!t}))));var le=n(84),ce=n(3);const de=n.n(ce).a`
  query GZones($branchesId: [ID!]!) {
    zones(companyBranches: $branchesId) {
      ...GZone
    }
  }
  ${G.b}
`,se=Object(T.a)(de),ue=r.a.createContext(null),me=Object(le.b)(({children:e})=>{const{zone:t}=Object(E.d)(),n=t.branches.filter(t.branchFilterPredicate);return 0===n.length?r.a.createElement(ue.Provider,{value:[]},e):r.a.createElement(se,{variables:{branchesId:n.map(w.a.prop("id"))},renderLoading:!1,render:({zones:t},{loading:n})=>r.a.createElement(ue.Provider,{value:n?null:t},e)})}),pe=()=>Object(a.useContext)(ue);var he=function(e,t,n,a){return new(n||(n=Promise))(function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,l)}c((a=a.apply(e,t||[])).next())})};const be=h.b.div.withConfig({displayName:"DeleteButtonContainer"})`
  width: ${O.c.ButtonHeight};
  margin-top: ${O.c.Middle};
`,fe=()=>{const e=x(),t=pe(),{zone:n}=Object(E.d)(),{routeToZoneList:o}=N(),[i,c]=Object(a.useState)(!1),d=Object(a.useRef)(null),h=Object(a.useCallback)(()=>he(void 0,void 0,void 0,function*(){d.current&&(yield d.current.submitForm(),c(!1),o())}),[]),O=Object(a.useCallback)(()=>he(void 0,void 0,void 0,function*(){e&&(yield n.destroyZone(e)),o()}),[e]);Object(u.e)(()=>Object(s.x)(()=>null!==n.map.currentZonePoints,c));const j=e&&t&&t.find(w.a.propEq("id",e))||null;return j?r.a.createElement(m.Form,{defaultValues:j,onChange:e=>{Object(v.c)("zone form change",e.values),c(!0)},onSubmit:t=>n.saveZone(e,t),render:e=>(d.current=e,r.a.createElement(f.a,{padding:0},r.a.createElement(ie,{isSubmitting:e.submitting,isModified:i,onSave:h,onGoBack:o}),r.a.createElement(ae,null),r.a.createElement(b.a,{mutationName:"destroyZone"},r.a.createElement(be,null,r.a.createElement(C.a,{disabled:e.submitting,confirmText:l.d._("Remove zone {0}?",{0:j.name}),onDelete:O}))),r.a.createElement(p.b,{when:i},({isShow:e,handleOk:t,handleCancel:n})=>r.a.createElement(g,{isShow:e,confirmText:l.d._("Do you want to cancel changes for the zone?"),onConfirm:t,onCancel:n}))))}):r.a.createElement(y.a,{text:l.d._("Loading form...")})};var ge=n(7581),ye=n(7531),Ee=n(52);const ve=h.b.div.withConfig({displayName:"BranchNameStyled"})`
  ${function({isActive:e}){return h.a`
    background-color: ${e?O.a.green:O.a.greyLight};
    color: ${e?O.a.white:O.a.greyDark};
  `}} font-size: 1.3rem;
  white-space: nowrap;
  padding: 0.2rem 0.5rem;
`,we=({branch:e,isActive:t=!0})=>r.a.createElement(ye.OverlayView,{getPixelPositionOffset:(e,t)=>({x:-e/2,y:-t/2}),mapPaneName:ye.OverlayView.MARKER_LAYER,position:Object(Ee.b)(e.gps)},r.a.createElement(ve,{isActive:t},e.name));const Ce=e=>{const t=Object(a.useCallback)(t=>{e.onFocus&&(t.stop(),e.onFocus())},[e.onFocus]),{points:n,color:o,priority:i}=e;return r.a.createElement(ye.Polygon,{defaultPath:n.map(Ee.b),options:{fillColor:o,fillOpacity:.3,strokeWeight:0,zIndex:5e3-i},editable:!1,draggable:!1,onDblClick:t})},Oe=e=>{const t=Object(a.useRef)(null),n=Object(a.useCallback)(()=>{if(t.current){const n=t.current.getPath();e.onChange(n.getArray().map(Ee.c))}},[e.onChange]);Object(a.useEffect)(()=>{let a;if(t.current&&e.onChange){const e=t.current.getPath();a=[e.addListener("set_at",n),e.addListener("insert_at",n),e.addListener("remove_at",n)]}return()=>{e.onClear(),a&&a.forEach(e=>e.remove())}},[]);const{points:o,color:i}=e;return r.a.createElement(ye.Polygon,{defaultPath:o.map(Ee.b),options:{fillColor:i,fillOpacity:.6,strokeWeight:2,zIndex:1e4},editable:!0,draggable:!0,ref:t,onDragEnd:n})};function je(){const{zone:e}=Object(E.d)();return e}function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const Ne=()=>{const e=je(),t=x(),n=pe(),{routeToZoneEdit:o}=N(),i=Object(a.useMemo)(()=>e.branches.filter(e.branchFilterPredicate),[e.branches]),l=t=>!e.hasBranchFilter||t===e.branchFilterId,c=n=>{const a={key:`zone${n.id}`,points:n.geoPolygon,priority:n.priority,color:l(n.companyBranch.id)&&n.enabled?n.zoneColor.color:O.a.greyMiddle};return n.id===t?r.a.createElement(Oe,xe({},a,{onChange:e.map.updateZonePoints,onClear:e.map.clearZonePoints})):r.a.createElement(Ce,xe({},a,{onFocus:()=>{l(n.companyBranch.id)&&o(n.id)}}))},d=Object(a.useCallback)(e=>r.a.createElement(we,{key:`branch${e.id}`,branch:e,isActive:l(e.id)}),[]);return r.a.createElement(ge.a,{model:e.map,render:()=>r.a.createElement(r.a.Fragment,null,n&&n.map(c),i&&i.map(d))})};var Fe=n(7513);const Se=Object(le.b)(()=>{const e=je(),{routeToZoneEdit:t}=N();return r.a.createElement(W.a,{text:e.hasBranchFilter?l.d._("Create zone for branch"):l.d._("Select branch to create zone"),onClick:()=>e.createZone(t),disabled:!e.hasBranchFilter,color:O.a.turquoise,textNextToIcon:!0,height:O.c.ButtonHeight,iconName:"add_circle"})});var ze=n(7595),Pe=n(7524),Be=n(24),ke=n(7544),Ie=n(7568);const Ze=h.b.div.withConfig({displayName:"ZoneNameStyled"})`
  font-size: 1.125rem;
  margin-top: 0.2rem;
`,Me=h.b.div.withConfig({displayName:"ZoneDescriptionStyled"})`
  font-size: 0.875rem;
`,$e=Object(h.b)(oe.a).withConfig({displayName:"ZoneFlexRowStyled"})`
  height: ${O.c.ButtonHeight};
`,Le=Object(ke.SortableElement)(({zone:e,branch:t,onEdit:n})=>r.a.createElement(f.a,{key:e.id,padding:0,color:e.enabled?e.zoneColor.color:O.a.greyMiddle,onClick:n},r.a.createElement($e,null,r.a.createElement(re.a,{fixedWidth:!0,padding:"0 0.5rem 0 0"},r.a.createElement(W.a,{width:O.c.ButtonHeight,height:O.c.ButtonHeight,iconName:"mode_edit"})),r.a.createElement(re.a,{widthGrowIndex:1},r.a.createElement(Ze,null,e.name,` [P${e.priority}]`),r.a.createElement(Me,null,t.name)),r.a.createElement(re.a,{padding:"0"},r.a.createElement(Ie.a,null))))),_e=Object(ke.SortableContainer)(h.b.div`
  margin-top: 0.5rem;
  cursor: arrow;
`),Ae=Be.sortWith([Be.ascend(Be.path(["companyBranch","name"])),Be.descend(Be.prop("priority"))]),Re=Be.groupBy(e=>e.companyBranch.id),De=({branches:e,zones:t,zoneModel:n,onZoneEdit:o})=>{const i=(t,n)=>r.a.createElement(Le,{key:t.id,zone:t,branch:e.find(Be.propEq("id",t.companyBranch.id)),index:n,collection:t.companyBranch.id,onEdit:()=>o(t.id)});let l,c;if(1===e.length){const e=Ae(t);l=e.map(i),c=(({oldIndex:t,newIndex:a})=>{const r=e[t];n.changeZonePriority(r,t,a)})}else{const o=Be.mapObjIndexed(Ae,Re(t));l=e.map(e=>{const t=o[e.id];return t?((e,t)=>r.a.createElement(a.Fragment,{key:e.id},r.a.createElement(Pe.a,null,e.name),t.map(i)))(e,t):null}),c=(({oldIndex:e,newIndex:t,collection:a})=>{const r=o[a][e];n.changeZonePriority(r,e,t)})}return r.a.createElement(_e,{useDragHandle:!0,lockAxis:"y",onSortEnd:c},l)},Te=()=>{const e=pe();if(null===e)return r.a.createElement(ze.a,{primaryOpacity:.2,secondaryOpacity:.2});const t=je(),{routeToZoneEdit:n}=N();return null===t.brand?r.a.createElement(Pe.a,null,r.a.createElement(F.Trans,{id:"Select brand to see its zones"})):r.a.createElement(De,{zoneModel:t,zones:e.filter(t.zoneFilterPredicate),branches:t.root.user.filterBranches(t.branchFilterPredicate),onZoneEdit:n})};var Ge=n(7507),Ve=n(51),He=n(7534);const qe=({branches:e,selectedBranch:t,onSelection:n,autoFocus:a})=>r.a.createElement(He.a,{placeholder:l.d._("Select branch"),branches:e,selectedBranch:t,onSingleSelection:n,formatOptionLabel:w.a.prop("name"),isClearable:!0,autoFocus:a});var We=n(7501);const Je=({brands:e,selectedBrand:t,onSelection:n})=>r.a.createElement(We.a,{placeholder:l.d._("Select brand"),options:e,value:t,formatOptionLabel:w.a.prop("name"),getOptionValue:w.a.prop("id"),getOptionLabel:w.a.prop("name"),isClearable:!0,isSearchable:!0,onChange:e=>n(e),autoFocus:!0}),Ue=()=>r.a.createElement(Ve.a,{render:({user:e,zone:t})=>{const n=e.branches;if(0===n.length)return null;if(1===n.length)return t.setBranchFilter(w.a.head(n)),null;const a=e.brands,o=e=>null===e?[]:n.filter(w.a.pathEq(["brand","id"],e.id)),i=1===a.length?w.a.head(a):null;return i&&t.setBrandFilter(i,o(t.brand)),r.a.createElement(r.a.Fragment,null,!i&&r.a.createElement(Je,{brands:a,selectedBrand:t.brand,onSelection:e=>{null===e?t.clearBrandFilter():t.setBrandFilter(e,o(e))}}),!i&&r.a.createElement(Ge.a,null),r.a.createElement(qe,{branches:o(t.brand),selectedBranch:t.branch,autoFocus:Boolean(i),onSelection:e=>{null===e?t.clearBranchFilter():t.setBranchFilter(e)}}))}}),Ye=h.b.div.withConfig({displayName:"ZoneMenuContainer"})`
  display: flex;
  flex-direction: column;
  height: 100%;
`,Ke=h.b.div.withConfig({displayName:"FixedHeaderContainer"})`
  flex: 0 0 auto;
`,Qe=h.b.div.withConfig({displayName:"ScrollAreaContainer"})`
  flex: 1 1 0;
  min-height: 0;
`,Xe=()=>r.a.createElement(Ye,null,r.a.createElement(Ke,null,r.a.createElement(f.a,null,r.a.createElement(Ue,null)),r.a.createElement(b.a,{mutationName:"createZone"},r.a.createElement(Se,null))),r.a.createElement(Qe,null,r.a.createElement(Fe.a,null,r.a.createElement(Te,null)))),et=({match:e})=>{const t=Boolean(e.params.zoneId);return r.a.createElement(me,null,r.a.createElement(c.a,{pageTitle:l.d._("Delivery zones"),useBackButton:!0,backRoute:"/settings"}),r.a.createElement(d.a,{widthInColumns:6,column:10,withScrollArea:t},t?r.a.createElement(fe,null):r.a.createElement(Xe,null)),r.a.createElement(d.a,{widthInColumns:10},r.a.createElement(Ne,null)))};n.d(t,"ZoneMenuRoutes",function(){return tt});const tt=()=>{const{getRouteToZone:e}=N();return r.a.createElement(o.e,null,r.a.createElement(o.c,{path:e(":zoneId?"),component:et}),r.a.createElement(o.c,{component:i.a}))};t.default=tt}}]);
//# sourceMappingURL=54.971d54f7.chunk.js.map