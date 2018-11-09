(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{7493:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var r=a(0),n=a.n(r),i=a(12),l=a(9),o=a(71),c=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const s=i.b.div.withConfig({displayName:"IconLineWrap"})`
  display: flex;
`;s.displayName="IconLineWrap";const d=i.b.div.withConfig({displayName:"DescriptionContainer"})`
  margin: ${({labelMargin:e="0.5rem 0.2rem 0 auto"})=>e};
  min-width: ${({labelWidth:e=0,labelWidthUnits:t=l.c.DefaultSizeUnit})=>e+t};
  flex: 0 1 auto;
  text-align: right;
`,m=i.b.div.withConfig({displayName:"IconLineChildren"})`
  margin-left: 0.5rem;
  align-self: stretch;
  flex: 1 0 auto;
`,u=i.b.div.withConfig({displayName:"LabelStyled"})`
  padding-top: 0.2rem;
  display: inline-block;
`;m.displayName="IconLineChildren";const p=e=>{var{icon:t,label:a,labelWidth:r,labelWidthUnits:i,labelMargin:p,children:h}=e,g=c(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);let f;return t&&(f="string"===typeof t?n.a.createElement(o.a,{iconName:t,color:l.a.greyDark}):n.a.createElement(t,{nativeColor:l.a.greyDark})),n.a.createElement(s,g,n.a.createElement(d,{labelWidth:r,labelWidthUnits:i,labelMargin:p},f,a?n.a.createElement(u,null,a):null),n.a.createElement(m,null,h))}},7497:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a(0),n=a.n(r),i=a(7503),l=a(52);const o=({mutationName:e,children:t})=>{const{user:a}=Object(l.c)();return a.canMutate(e)?n.a.createElement(n.a.Fragment,null,t):n.a.createElement(i.a,null,`No access to mutation ${e}`)}},7501:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(12),n=a(9);const i=r.b.h2.withConfig({displayName:"Headline"})`
  color: ${({light:e=!1})=>e?n.a.greyLight:n.a.greyDarkest};
  font-weight: lighter;
  margin: ${({margin:e="0 0.5rem 0 0.5rem"})=>e};
  font-size: ${({size:e})=>"smaller"===e&&"1rem"};
`},7502:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a(0),n=a.n(r),i=a(7557),l=a(9);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const c=(e={})=>Object.assign({},e,{control:(t,a)=>{const{selectProps:{width:r,minWidth:n}}=a,i=Object.assign({},t,{border:`1px solid ${l.a.greyMiddle}`,margin:l.c.MarginAroundFormComponents,width:void 0!==r?`${r}rem`:"100%",minWidth:void 0!==n?`${n}rem`:"8rem"});return e.control?e.control(i,a):i},menu:(t,a)=>{const{selectProps:{width:r}}=a,n=Object.assign({},t,{zIndex:20,color:l.a.black,width:void 0!==r?`${r}rem`:"100%"});return e.menu?e.menu(n,a):n}});class s extends n.a.Component{render(){return n.a.createElement(i.b,o({},this.props,{styles:c(this.props.styles)}))}}},7503:function(e,t,a){"use strict";a.d(t,"a",function(){return r});a(0);const r=({children:e})=>null},7504:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(0),n=a.n(r),i=a(12),l=a(7511),o=a(9);const c=i.b.div.withConfig({displayName:"FullHeightDiv"})`
  position: fixed;
  bottom: 0.5rem;
  width: ${(()=>e=>void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+o.c.LayoutGridCellMargin+")":"calc(100vh - (2 * "+o.c.LayoutGridCellMargin+"))")()};
  left: ${(()=>e=>void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+o.c.LayoutGridCellMargin+")":o.c.LayoutGridCellMargin)()};
  top: ${(()=>e=>void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+o.c.LayoutGridCellMargin+")":"calc(3.9375rem + "+o.c.LayoutGridCellMargin+")")()};
`,s=i.b.div.withConfig({displayName:"FullHeightDivStyled"})`
  height: 100%;
`,d=({children:e,row:t=1,column:a=0,widthInColumns:r=16,withScrollArea:i=!1,scrollAreaId:o})=>n.a.createElement(c,{column:a,row:t,widthInColumns:r,withScrollArea:i},i?n.a.createElement(l.a,{id:o},e):n.a.createElement(s,null,e))},7507:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a(0),n=a.n(r),i=a(7503),l=a(52);const o=({queryName:e,children:t})=>{const{user:a}=Object(l.c)();return a.canQuery(e)?n.a.createElement(n.a.Fragment,null,t):n.a.createElement(i.a,null,`No access to query ${e}`)}},7509:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(0),n=a.n(r),i=a(12),l=a(9);const o=i.b.div.withConfig({displayName:"HorizontalSeparatorStyled"})`
  border-top: 1px solid ${l.a.greyLight};
  margin: 0.25rem 0rem;
`,c=({visible:e=!0})=>e?n.a.createElement(o,null):null},7511:function(e,t,a){"use strict";a.d(t,"a",function(){return r});const r=a(12).b.div.withConfig({displayName:"ScrollArea"})`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 100%;
`},7528:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(82),n=a(0),i=a.n(n),l=a(12),o=a(13);const c=l.b.div.withConfig({displayName:"ItemStyled"})`
  margin: 0.5rem 0.6rem;
  display: inline-block;
  cursor: pointer;
  color: ${({textColor:e})=>e};
  ${function({isSelected:e}){if(!e)return"";return l.a`
    font-weight: bolder;
    text-decoration: underline;
  `}};
`,s=l.b.div.withConfig({displayName:"SelectorStyled"})`
  border: ${({isInvalid:e})=>!0===e?"1px red solid":"auto"};
`;class d extends i.a.Component{hasSelection(){const{isMulti:e,selectedItem:t,selectedItems:a}=this.props;return e?Array.isArray(a)&&a.length>0:null!=t}isItemSelected(e){const{isMulti:t,selectedItem:a,selectedItems:r}=this.props;return t&&Array.isArray(r)?o.a.contains(e,r):o.a.equals(a,e)}updateSelection(e){const{isMulti:t,selectedItems:a=[],onSingleSelection:r,onMultiSelection:n}=this.props;null===e?t&&n?n([]):r&&r(null):t&&n?this.isItemSelected(e)?n(Array.isArray(a)?o.a.without([e],a):[e]):n(Array.isArray(a)?o.a.concat(a,[e]):[]):r&&r(e)}render(){const{items:e,isClearable:t,isInvalid:a=!1,textColor:n="inherit",formatItem:l}=this.props;return i.a.createElement(s,{isInvalid:a},t&&i.a.createElement(c,{isSelected:!this.hasSelection(),textColor:n,onClick:()=>{this.updateSelection(null)}},i.a.createElement(r.Trans,{id:"optionselector.clear-filter"})),e.map((e,t)=>i.a.createElement(c,{key:t,isSelected:this.isItemSelected(e),textColor:n,onClick:()=>{this.updateSelection(e)}},l(e))))}}d.defaultProps={formatItem:o.a.prop("displayName"),getItemValue:o.a.prop("id")}},7530:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(12),n=a(9);const i=r.b.h2.withConfig({displayName:"CardListTitle"})`
  color: ${n.a.greyLight};
  font-weight: lighter;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.8rem 0.3rem;
`},7542:function(e,t,a){"use strict";a.d(t,"a",function(){return r});const r=a(12).b.div.withConfig({displayName:"FlexColumn"})`
  flex: ${function({fixedWidth:e=!1,width:t,widthGrowIndex:a=0}){return e?t?`0 0 ${t}`:"0 0":`${a} 0`}};
  padding: ${function({padding:e="0.25rem"}){return e}};
  margin: ${function({margin:e=""}){return e}};
`},7543:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(13),l=a(7552),o=a(7528),c=a(9);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const m=e=>{var{branches:t,selectedBranch:a,selectedBranches:r,textColor:i=c.a.black}=e,l=d(e,["branches","selectedBranch","selectedBranches","textColor"]);return n.a.createElement(o.a,s({items:t,selectedItem:a,selectedItems:r,textColor:i,formatItem:e=>n.a.createElement("span",{title:e.brand.name},e.name)},l))};var u=a(51);const p=({render:e})=>n.a.createElement(u.a,{render:({user:t})=>t.branches?e(t.branches,!1):e([],!0)});a.d(t,"a",function(){return h});const h=({breakpoint:e=3,selectedBranches:t=[],isMulti:a=!1,isClearable:r=!0,textColor:o,onSelectionChange:c,onSelectionClear:s})=>n.a.createElement(p,{render:(d,u)=>{const p=e=>t.includes(e.id),h={textColor:o,isClearable:r,isMulti:a,isLoading:u,branches:d,selectedBranch:u?null:d.find(p),selectedBranches:u?[]:d.filter(p),onSingleSelection(e){null===e&&s?s():null!==e&&c&&c([e.id],[e])},onMultiSelection(e){0===e.length&&s?s():e.length&&c&&c(e.map(i.a.prop("id")),e)}},g=d.length>e?l.a:m;return n.a.createElement(g,h)}})},7548:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(0),n=a.n(r),i=a(166);const l=({price:e})=>n.a.createElement("span",null,Object(i.b)(e))},7551:function(e,t,a){"use strict";var r=a(103),n=a(0),i=a.n(n),l=a(51),o=a(59),c=a(13),s=a(3),d=a.n(s),m=a(32),u=a(7555),p=a(112),h=a(38);const g=d.a`
  fragment GOrderMapMarker on Order {
    id
    deliverAt
    gps {
      ...GGeoPoint
    }
  }
  ${h.e}
`;var f=a(7604);const b=d.a`
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
  ${g}
  ${f.a}
`,y=d.a`
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
  ${g}
  ${f.a}
`,E=Object(m.a)(b),v=Object(u.a)(y);a.d(t,"a",function(){return C}),a.d(t,"b",function(){return w});const O=[o.c.NEW_ORDERS,o.c.PREPARING,o.c.READY_TO_DELIVER,o.c.ON_WAY,o.c.FINISHED],C=({children:e,includeOldFinished:t=!1})=>i.a.createElement(l.a,{render:a=>{if(!a.order.list.hasBranchFilter)return e({isLoading:!1,noFilter:!0});const r={branches:a.order.list.branchesFilter,categories:O,includeOldFinished:t};return i.a.createElement(E,{fetchPolicy:"cache-and-network",refetchOnConnectionLost:!0,variables:r,renderLoading:!1,render:({orders:t=[],orderStateCategories:a=[]},n)=>i.a.createElement(v,{queryResult:n,variables:r,handleUpdate:S},e({isLoading:n.loading,noFilter:!1,orders:t,categorizedOrders:function(e){return e.reduce((e,t)=>{const a=w(t);return e[a]?e[a].push(t):e[a]=[t],e},{})}(t),categories:a}))})}});function w(e){return e.orderStateCategory}function S(e,t){const{order:a}=e.updatedOrder;if(!a)return t;let r=!1;const n=c.a.reject($,t.orders).map(e=>e.id===a.id?(r=!0,a):e);return r||n.unshift(a),Object.assign({},t,{orders:n})}function $(e){return e.orderStateCategory===o.c.FINISHED&&Object(r.b)(new Date,e.createdAt)>e.companyBranch.oldOrderThreshold}},7552:function(e,t,a){"use strict";var r=a(0),n=a.n(r);const i=a(12).b.div.withConfig({displayName:"CursorContainer"})`
  cursor: ${({cursor:e="default"})=>e};
`,l=({branch:e,onClick:t,short:a=!1,showBrand:r=!0})=>n.a.createElement(i,{cursor:"pointer",onClick:t},a?e.name.substr(0,8):n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,e.name),r&&n.a.createElement("span",null,` [${e.brand.name}]`)));var o=a(7502),c=a(13),s=a(37);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",function(){return u});var m=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const u=e=>{var{branches:t,selectedBranch:a,onSingleSelection:r,selectedBranches:i,onMultiSelection:u}=e,p=m(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return n.a.createElement(o.a,d({value:p.isMulti?i:a,placeholder:s.d._("Filter branches..."),options:t,getOptionValue:c.a.prop("id"),formatOptionLabel:e=>n.a.createElement(l,{branch:e}),filterOption:(e,t)=>e.data.name.toLocaleLowerCase().includes(t.toLocaleLowerCase()),onChange:e=>{p.isMulti&&u&&Array.isArray(e)&&u(e),!p.isMulti&&r&&(Array.isArray(e)?r(c.a.head(e)||null):r(e||null))}},p))}},7555:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a(269);function n(e){return function(t){return Object(r.a)(()=>{const{queryResult:a,variables:r,handleUpdate:n}=t;return a.subscribeToMore({document:e,variables:r,updateQuery:(e,{subscriptionData:t})=>t&&t.data&&n(t.data,e)||e})}),t.children}}},7596:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a(0),n=a.n(r),i=a(84),l=a(7497),o=a(7507),c=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const s=e=>{var{route:t,component:a,canQuery:s,canMutate:d}=e,m=c(e,["route","component","canQuery","canMutate"]);let u=t?n.a.createElement(i.b,{to:t},Object(r.createElement)(a)):Object(r.createElement)(a);return s&&(u=n.a.createElement(o.a,{queryName:s},u)),d&&(u=n.a.createElement(l.a,{mutationName:d},u)),n.a.createElement("div",m,u)}},7597:function(e,t,a){"use strict";a.d(t,"a",function(){return r});const r=a(12).b.a.withConfig({displayName:"LinkStyled"})`
  color: inherit;
  text-decoration-color: rgba(0, 0, 0, 0.08);
  &:hover {
    text-decoration-color: rgba(0, 0, 0, 0.5);
  }
  &:visited {
    text-decoration-color: rgba(0, 0, 0, 0.08);
  }
`},7598:function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"b",function(){return m});var r=a(0),n=a.n(r),i=a(14),l=a(84),o=a(280);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const d=e=>{var{to:t,from:a}=e,r=s(e,["to","from"]);return n.a.createElement(i.c,{children:({location:e})=>n.a.createElement(l.b,c({to:m(t,a||`${e.pathname}/`)},r))})};function m(e,t){if("string"===typeof e)return Object(o.a)(e,t);const a=Object(o.a)(e.pathname||"",t);return Object.assign({},e,{pathname:a})}},7604:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(3),n=a.n(r),i=a(38);const l=n.a`
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
  ${i.a}
  ${i.c}
`},7607:function(e,t,a){"use strict";var r=a(7606),n=a.n(r);const i=a(7797);n.a.updateLocale("cs",i),t.a=n.a},7610:function(e,t,a){"use strict";var r=a(103),n=a(0),i=a.n(n),l=a(125),o=a(12),c=a(9);const s=o.b.div.withConfig({displayName:"TimeBadgeStyled"})`
  min-width: 1.5rem;
  min-height: 1.5rem;
  padding: 0.3rem;
  border: 1px solid white;
  border-radius: 4rem;
  color: ${c.a.white};
  text-align: center;
  font-size: 1rem;
  margin: 0;
  vertical-align: middle;
  font-family: 'Open Sans', sans-serif;
`,d=Object(o.b)(s).withConfig({displayName:"TimeBadgeUnknown"})`
  background: ${c.a.greyMiddle};
  color: ${c.a.greyDarkest};
`,m=Object(o.b)(s).withConfig({displayName:"TimeBadgeInProgress"})`
  background: ${c.a.orange};
`,u=Object(o.b)(s).withConfig({displayName:"TimeBadgeBigTime"})`
  font-size: 0.8rem;
  padding: 0.4rem 0.3rem 0.2rem 0.3rem;
`,p=Object(o.b)(s).withConfig({displayName:"TimeBadgeWarning"})`
  background: ${c.a.red};
`,h=Object(o.b)(s).withConfig({displayName:"TimeBadgeCompleted"})`
  background: ${c.a.green};
`,g=Object(o.b)(s).withConfig({displayName:"TimeBadgeCancelled"})`
  background: ${c.a.greyMiddle};
  padding: 0.3rem 0.3rem 0 0.3rem;
`,f=({minutes:e=0,onClick:t,isFinished:a=!1,isCancelled:r=!1})=>{if(r)return i.a.createElement(g,{onClick:t},i.a.createElement(l.a,null));let n=e.toString(),o=m;return Number.isNaN(e)?(o=d,n="?"):a?o=h:e<=20?(o=p,e<-99&&(n="-")):e>99&&(o=u),i.a.createElement(o,{children:n})};var b=a(7767),y=a.n(b);const E=({interval:e,enabled:t,getNow:a=Date.now,nextTick:r=y.a,cancelTick:i=y.a.cancel})=>{const[l,o]=function(e){const[t,a]=Object(n.useState)(e),r=Object(n.useRef)();return r.current=t,[()=>r.current,a]}(a),c=Object(n.useRef)();return Object(n.useEffect)(()=>{const n=()=>{const t=a();t-l()>=e&&o(t),d()},s=()=>{c.current&&(i(c.current),c.current=null)},d=()=>{t?c.current=r(n):s()};return d(),s},[e,t]),l()};a.d(t,"a",function(){return v});const v=({deliverAt:e,deliveredAt:t,isCancelled:a=!1,onClick:n})=>{const l=E({interval:6e4,enabled:!t}),o=Object(r.d)(e,t||l);return i.a.createElement(f,{minutes:o,onClick:n,isFinished:Boolean(t),isCancelled:a})}},7767:function(e,t,a){(function(t){for(var r=a(7619),n="undefined"===typeof window?t:window,i=["moz","webkit"],l="AnimationFrame",o=n["request"+l],c=n["cancel"+l]||n["cancelRequest"+l],s=0;!o&&s<i.length;s++)o=n[i[s]+"Request"+l],c=n[i[s]+"Cancel"+l]||n[i[s]+"CancelRequest"+l];if(!o||!c){var d=0,m=0,u=[];o=function(e){if(0===u.length){var t=r(),a=Math.max(0,1e3/60-(t-d));d=a+t,setTimeout(function(){var e=u.slice(0);u.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(d)}catch(a){setTimeout(function(){throw a},0)}},Math.round(a))}return u.push({handle:++m,callback:e,cancelled:!1}),m},c=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=!0)}}e.exports=function(e){return o.call(n,e)},e.exports.cancel=function(){c.apply(n,arguments)},e.exports.polyfill=function(e){e||(e=n),e.requestAnimationFrame=o,e.cancelAnimationFrame=c}}).call(this,a(17))},7768:function(e,t,a){"use strict";a.d(t,"a",function(){return u});a(7769);var r=a(0),n=a.n(r),i=a(7774),l=a(7489),o=a(12),c=a(7607);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const m=o.b.div.withConfig({displayName:"FormInputDateContainer"})`
  & .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    width: ${({width:e="6rem"})=>e};
  }
`;m.displayName="FormInputDateContainer";const u=e=>{var{field:t,defaultValue:a,inputWidth:r,minDate:o}=e,u=d(e,["field","defaultValue","inputWidth","minDate"]);return n.a.createElement(m,{width:r},n.a.createElement(l.Field,{field:t,defaultValue:a,render:e=>n.a.createElement(i.a,s({selected:Object(c.a)(e.value||new Date),onChange:t=>e.setValue(t),minDate:void 0===o?void 0:Object(c.a)(o)},u))}))}},7770:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(12),n=a(9);const i=r.b.div.withConfig({displayName:"FlexRow"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${n.a.greyMiddle};
  padding: 0.1rem 0 0.1rem 0;
`},7773:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(12),l=a(60);const o=({test:e,renderSuccess:t,renderFailure:a})=>n.a.createElement(l.a,{render:()=>e()?t():a?a():null});var c=a(9),s=a(82),d=a(97),m=a.n(d),u=a(279),p=a(7548),h=a(59);const g=({address:e})=>e?n.a.createElement("span",null,`${e.street} ${e.houseNumber}, ${e.city}`):n.a.createElement("i",null,"unknown"),f=({customer:e})=>e?n.a.createElement("span",null,`${e.lastName?`${e.firstName} ${e.lastName}`:e.defaultPhone?e.defaultPhone.phone:""}`):n.a.createElement("i",null,"unknown");var b=a(7610);const y=Object(i.b)(u.Element).withConfig({displayName:"OrderTickerStyled"})`
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: ${m()(c.a.turquoise).alpha(.05).string()};
  }
  &:active {
    background-color: ${m()(c.a.turquoise).alpha(.2).string()};
  }
`,E=i.b.div.withConfig({displayName:"OrderTickerMainContentStyled"})`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0.4rem;
`,v=i.b.div.withConfig({displayName:"DeliveryTimeBadgeContainerStyled"})`
  flex: 0 0 2rem;
`,O=i.b.div.withConfig({displayName:"AddressDisplayContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,C=i.b.div.withConfig({displayName:"CustomerIdentityContainerStyled"})`
  flex: 1 0;
  padding: 0 0 0 0.5rem;
`,w=i.b.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 3.5rem;
  text-align: right;
  position: relative;
`,S=i.b.div.withConfig({displayName:"PaidMarkStyled"})`
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
`,$=i.b.div.withConfig({displayName:"PaidTextStyled"})`
  color: ${c.a.orange};
`,N=i.b.div.withConfig({displayName:"ToBranchContainerStyled"})`
  padding: 0.3rem 0.6rem;
  display: inline-block;
  border-top-left-radius: ${c.b.Card};
  background-color: ${c.a.green};
  color: ${c.a.white};
`,I=({order:e,showBranch:t,onClick:a})=>n.a.createElement(y,{onClick:a,name:`order-${e.id}`},t&&n.a.createElement(N,null,e.companyBranch.name),n.a.createElement(E,null,n.a.createElement(v,null,n.a.createElement(b.a,{deliverAt:e.deliverAt,deliveredAt:e.deliveredAt,isCancelled:e.orderStateCategory===h.c.CANCEL})),n.a.createElement(O,null,n.a.createElement(g,{address:e.address})),n.a.createElement(C,null,n.a.createElement(f,{customer:e.customer})),n.a.createElement(w,null,n.a.createElement(p.a,{price:e.totalSum.value}),e.isPaidWithCard&&n.a.createElement(n.a.Fragment,null,n.a.createElement(S,null),n.a.createElement($,null,n.a.createElement(s.Trans,{id:"Paid"}))))));var j=a(7509),x=a(7493),k=a(7597);const F=({phones:e,emails:t})=>{const a=e=>n.a.createElement(x.a,{icon:e.icon,key:e.value,labelMargin:"0"},n.a.createElement("div",{title:e.description||""},(e=>e.isMail?n.a.createElement(k.a,{href:`mailto:${e.value}`},e.value):n.a.createElement(k.a,{href:`tel:${e.value.replace("/ /g","")}`},e.value))(e)));return n.a.createElement(n.a.Fragment,null,(e.length>0||t.length>0)&&n.a.createElement(j.a,null),e.map(e=>a(Object.assign({icon:"phone",isMail:!1,value:e.phone},e))),t.map(e=>a(Object.assign({icon:"mail_outline",isMail:!0,value:e.email},e))))};var D=a(37);const T=i.b.span.withConfig({displayName:"CurrentNoteStyled"})`
  color: ${c.a.orange};
`,P=i.b.span.withConfig({displayName:"PreviousNoteStyled"})`
  color: ${c.a.greyDark};
  margin-left: 0.5rem;
`,B=({note:e,previousNote:t})=>e||t?n.a.createElement(n.a.Fragment,null,n.a.createElement(j.a,null),n.a.createElement(x.a,{icon:"note",labelMargin:"0"},n.a.createElement(T,null,e||D.d._("Without note").toLocaleLowerCase()),n.a.createElement(P,null,t))):null,M=({current:e,total:t})=>n.a.createElement(s.Trans,{id:"It's customer's {current, selectordinal, one {#st} two {#nd} few {#rd} other {#th}} order {total, plural, one {} other {from total of # orders}}",values:{current:e,total:t}}),L=i.b.div.withConfig({displayName:"OrderWareLineWrap"})`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
`,A=i.b.div.withConfig({displayName:"CodeContainerStyled"})`
  flex: 0 0 5rem;
`,R=i.b.div.withConfig({displayName:"NameContainerStyled"})`
  flex: 1 0;
  color: ${c.a.greyMiddle};
`,G=i.b.div.withConfig({displayName:"PriceContainerStyled"})`
  flex: 0 0 4.5rem;
  text-align: right;
  color: ${c.a.greyMiddle};
`,_=({code:e,label:t,price:a})=>n.a.createElement(L,null,n.a.createElement(A,null,e),n.a.createElement(R,null,t),n.a.createElement(G,null,n.a.createElement(p.a,{price:a}))),W=i.b.div.withConfig({displayName:"OrderCartTotalsContainer"})`
  margin: 0 0 0 auto;
  width: 20rem;
  text-align: right;
`,q=({order:e})=>n.a.createElement(W,null,n.a.createElement(_,{label:D.d._("Transport fee"),price:e.transportFee.value}),n.a.createElement(_,{label:D.d._("Covers price"),price:e.coverPrice.value}),n.a.createElement(_,{label:D.d._("Discount total"),price:-1*e.totalDiscount.value}),n.a.createElement("b",null,n.a.createElement(_,{label:D.d._("Total price"),price:e.totalSum.value}))),H=({rules:e,children:t})=>e.length>0||t?n.a.createElement(n.a.Fragment,null,n.a.createElement(j.a,null),n.a.createElement(x.a,{icon:"announcement",labelMargin:"0"},t,n.a.createElement("br",null),e.join(", "))):null;var V=a(125),z=a(166);const U=i.b.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,Q=({order:e})=>{const t=[];if(e.deliverAt&&t.push(n.a.createElement("div",{key:"deliverAt"},Object(z.d)(e.deliverAt),n.a.createElement(U,null,n.a.createElement(s.Trans,{id:"Deliver on time"})))),e.driver){const{firstName:a,lastName:r}=e.driver.user;t.push(n.a.createElement("div",{key:"driver"},`${a} ${r}`,n.a.createElement(U,null,n.a.createElement(s.Trans,{id:"Driver"}))))}return 0===t.length?null:n.a.createElement(x.a,{icon:V.e,labelMargin:"0"},t)};var Y=a(13);const J=i.b.i.withConfig({displayName:"LabelStyled"})`
  padding-left: 1rem;
  font-size: 0.8rem;
`,K={[h.c.NEW_ORDERS]:Object(s.i18nMark)("Created"),[h.c.PREPARING]:Object(s.i18nMark)("Preparing"),[h.c.READY_TO_DELIVER]:Object(s.i18nMark)("Ready to deliver"),[h.c.ON_WAY]:Object(s.i18nMark)("On way"),[h.c.FINISHED]:Object(s.i18nMark)("Finished")},X=({orderTiming:e})=>n.a.createElement(x.a,{icon:"access_time",labelMargin:"0"},Y.a.reject(({createdAt:e,orderStateCategory:t})=>null===e||!K[t],e).map(e=>n.a.createElement("div",{key:e.orderStateCategory},Object(z.d)(e.createdAt),n.a.createElement(J,null,D.d._(K[e.orderStateCategory]))))),Z=({orderWares:e})=>{return n.a.createElement("div",null,e.map(e=>n.a.createElement(r.Fragment,{key:e.id},n.a.createElement(_,{code:e.recipe.code,label:e.recipe.nameLabel,price:e.price.value}),n.a.createElement(n.a.Fragment,null,e.sidedishes.map(e=>n.a.createElement(_,{key:e.id,code:`+${e.recipe.code}`,label:e.recipe.nameLabel,price:e.price.value}))))))};var ee=a(3),te=a.n(ee),ae=a(32),re=a(38),ne=a(170);const ie=Object(ae.a)(te.a`
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
  ${re.g}
  ${re.d}
  ${re.f}
  ${ne.a}
`);var le=a(34),oe=a(51),ce=a(33),se=a(261);const de={[h.d.ACCEPTED]:Object(s.i18nMark)("Accept order"),[h.d.FINISHED]:Object(s.i18nMark)("Finish order")},me=({orderId:e,nextState:t,stateModel:a})=>n.a.createElement(se.a,{text:D.d._(de[t]),width:"7.375rem",onClick:()=>{a.updateOrderState(e,t)}});var ue=a(7557),pe=a(71),he=a(7502);const ge=i.b.div.withConfig({displayName:"DriverName"})`
  margin: 0.1rem 0 0rem 0.2rem;
  display: inline-block;
  vertical-align: top;
  font-size: 1.25rem;
`,fe={background:c.a.greyMiddle},be={color:c.a.white},ye={control:e=>Object.assign({},e,fe,be,{height:c.c.ButtonHeight,borderWidth:0,borderRadius:c.b.Button,margin:0}),menu:e=>Object.assign({},e,fe),valueContainer:e=>Object.assign({},e,be),singleValue:e=>Object.assign({},e,be),placeholder:e=>Object.assign({},e,be,{fontSize:"1.2rem"})},Ee=({drivers:e,selectedDriver:t,isLoading:a,onSelect:r,onClear:i,onReload:l})=>n.a.createElement(he.a,{options:e,value:t,getOptionValue:Y.a.prop("id"),isLoading:a,isSearchable:!0,isClearable:!0,placeholder:"Deliver order",width:16,styles:ye,noOptionsMessage:()=>D.d._("No drivers available"),onChange:e=>null===e?i():r(e),onMenuOpen:l,components:{ValueContainer:e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(pe.a,{iconName:"directions_car",fontSize:2,color:c.a.white}),n.a.createElement(ue.a.ValueContainer,e)),DropdownIndicator:()=>null},formatOptionLabel:e=>n.a.createElement(ge,null,`${e.firstName} ${e.lastName}`)}),ve=({branchId:e,orderId:t,orderStateCategory:a,stateModel:r})=>n.a.createElement(ne.b,{fetchPolicy:"network-only",variables:{branchId:e,orderId:t},render:({drivers:e,order:{driver:i}},{loading:l,refetch:o})=>n.a.createElement(Ee,{drivers:e,selectedDriver:i?i.user:null,isLoading:l,onReload:o,onClear:()=>{i&&r.removeDriver(i.id)},onSelect:e=>{r.selectDriver(t,e.id),a!==h.c.ON_WAY&&r.deliverOrder(t)}})}),Oe=i.b.div.withConfig({displayName:"OrderStateFlowContainerWrapper"})`
  margin: 0 0 0 auto;
  text-align: right;
  height: ${c.c.ButtonHeight};
`,Ce=i.b.div.withConfig({displayName:"Control"})`
  margin: 0 0 0 0.5rem;
  display: inline-block;
  vertical-align: bottom;
  text-align: left;
  height: 100%;
`,we=({children:e})=>n.a.createElement(Oe,null,r.Children.map(e,(e,t)=>n.a.createElement(Ce,{key:t},e)));var Se=a(265);const $e=[20,30,45,60,75,90,105,120],Ne=i.b.div.withConfig({displayName:"MinutesContainer"})`
  display: flex;
  justify-content: 'center';
  flex-wrap: 'wrap';
  font-size: 2rem;
`,Ie=i.b.div.withConfig({displayName:"MinutesItem"})`
  margin: 1rem 1rem 0 0;
`;class je extends n.a.Component{constructor(){super(...arguments),this.state={dialogOpen:!1},this.openDialog=(()=>{this.setState({dialogOpen:!0})}),this.closeDialog=(()=>{this.setState({dialogOpen:!1})})}render(){const{orderId:e,stateModel:t}=this.props;return n.a.createElement(n.a.Fragment,null,n.a.createElement(se.a,{iconName:"schedule",onClick:this.openDialog}),n.a.createElement(Se.b,{open:this.state.dialogOpen,onClose:this.closeDialog},n.a.createElement(Se.e,null,n.a.createElement(s.Trans,{id:"Send expected time of delivery to customer (in minutes)"}),n.a.createElement(Ne,null,$e.map(a=>n.a.createElement(Ie,{key:a},n.a.createElement(se.a,{onClick:()=>{t.sendTimeNotification(e,a),this.closeDialog()},color:c.a.green},a)))))))}}var xe=a(7551),ke=a(112);const Fe=Object(ae.a)(te.a`
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
  ${ke.a}
`);function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const Te=e=>n.a.createElement(we,null,n.a.createElement(je,e),n.a.createElement(me,De({nextState:h.d.ACCEPTED},e))),Pe=e=>n.a.createElement(we,null,n.a.createElement(je,e),e.canDeliver?n.a.createElement(ve,e):n.a.createElement(me,De({nextState:h.d.FINISHED},e))),Be=e=>n.a.createElement(we,null,n.a.createElement(je,e),n.a.createElement(ve,e),n.a.createElement(me,De({nextState:h.d.FINISHED},e))),Me=({orderId:e,branchId:t})=>n.a.createElement(oe.a,{observe:!1,render:({order:{state:a}})=>n.a.createElement(Fe,{variables:{orderId:e,branchId:t},render:({order:r,companyBranch:{allowedCategories:i}})=>{const l=Object(xe.b)(r);if(!l)return Object(ce.c)(new le.VError("Order %s has got no state categories")),null;const o=i.includes(h.c.ON_WAY)&&null!=r.deliveryType&&r.deliveryType.enum!==h.a.PICKUP,c={orderId:e,branchId:t,stateModel:a,orderStateCategory:l,canDeliver:o};switch(l){case h.c.NEW_ORDERS:return n.a.createElement(Te,c);case h.c.PREPARING:return n.a.createElement(Pe,c);case h.c.ON_WAY:return n.a.createElement(Be,c);default:return null}}})}),Le=i.b.div.withConfig({displayName:"OrderDetailContainerStyled"})`
  padding: 0 0.5rem 0.5rem 1.1rem;
`,Ae=({orderId:e})=>n.a.createElement(ie,{variables:{id:e},fetchPolicy:"cache-and-network",render:({order:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(Le,null,n.a.createElement(j.a,null),n.a.createElement(Z,{orderWares:t.items}),n.a.createElement(q,{order:t}),n.a.createElement(H,{rules:t.allAppliedRules},n.a.createElement(M,{current:t.customerOrdersCountCurrent,total:t.customerOrdersCountTotal})),n.a.createElement(F,{phones:t.customer.phones,emails:t.customer.emails}),n.a.createElement(B,{note:t.note,previousNote:t.previousNote}),n.a.createElement(j.a,null),n.a.createElement(X,{orderTiming:t.orderTiming}),n.a.createElement(Q,{order:t})),n.a.createElement(Me,{orderId:e,branchId:t.companyBranch.id}))});a.d(t,"a",function(){return Ge});const Re=i.b.div.withConfig({displayName:"OrderBoxStyled"})`
  background-color: ${c.a.white};
  color: ${c.a.greyDarkest};
  border-radius: ${c.b.Card};
  margin-bottom: 0.5rem;
  position: relative;
`,Ge=({order:e,listModel:t})=>n.a.createElement(Re,{id:`order-${e.id}`},n.a.createElement(I,{order:e,showBranch:!t.isSingleBranchSelected,onClick:()=>t.toggleOrderDetail(e)}),n.a.createElement(o,{test:()=>t.isOrderDetailOpen(e.id),renderSuccess:()=>n.a.createElement(Ae,{orderId:e.id})}))},7930:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(14),l=a(104),o=a(37),c=a(126),s=a(72),d=a(262),m=a(264),u=a(82),p=a(7530),h=a(7542),g=a(7770),f=a(270),b=a(7598),y=a(166),E=a(261),v=a(9);const O=({isLoading:e,noFilter:t,reports:a})=>e?n.a.createElement(p.a,null,n.a.createElement(f.a,null)):t?n.a.createElement(p.a,null,n.a.createElement(u.Trans,{id:"Select a branch"})):a&&0!==a.length?n.a.createElement(n.a.Fragment,null,a.map(e=>n.a.createElement(g.a,{key:e.id},n.a.createElement(h.a,null,n.a.createElement(b.a,{to:`../${e.id}`},n.a.createElement(E.a,{iconName:"mode_edit",width:v.c.ButtonHeight,height:v.c.ButtonHeight})),`[${e.reportSequence}] ${Object(y.a)(e.reportDatetime)}`)))):n.a.createElement(p.a,null,n.a.createElement(u.Trans,{id:"No closures found"}));var C=a(7489),w=a(7768),S=a(51),$=a(7543);const N=e=>n.a.createElement(S.a,{render:({statistics:e})=>n.a.createElement(d.a,null,n.a.createElement($.a,{selectedBranches:e.branches,onSelectionChange:([t])=>e.setBranchFilter(t),onSelectionClear:e.clearBranchFilter}),n.a.createElement(C.Form,{onChange:e.submitFilter},n.a.createElement(w.a,{field:"dateFrom",defaultValue:e.dateFrom}),n.a.createElement(w.a,{field:"dateTo",defaultValue:e.dateTo})))});var I=a(60),j=a(52),x=a(3),k=a.n(x),F=a(32);const D=k.a`
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
`,T=Object(F.a)(D),P=Object(I.b)(({children:e})=>{const{statistics:t}=Object(j.c)();return t.isSingleBranchSelected?n.a.createElement(T,{fetchPolicy:"cache-and-network",variables:{branchId:t.singleBranchFilter,dateFrom:Object(y.a)(t.dateFrom),dateTo:Object(y.a)(t.dateTo)},renderLoading:!1,render:({financialReports:t},{loading:a})=>e({noFilter:!1,isLoading:a,reports:t})}):e({isLoading:!1,noFilter:!0})}),B=e=>n.a.createElement(P,null,e=>n.a.createElement(m.a,{pageTitle:o.d._("Closure history"),useBackButton:!0},n.a.createElement(N,null),n.a.createElement(d.a,null,n.a.createElement(O,e))));var M=a(194),L=a(84),A=a(12),R=a(7497),G=a(7507);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const W=e=>n.a.createElement(E.a,_({text:o.d._("Create closure"),color:v.a.green,width:"12rem",onClick:e.onClick},e)),q=Object(A.b)(E.a).withConfig({displayName:"ButtonToRight"})`
  float: right;
`,H=({isShowingHistory:e})=>n.a.createElement(S.a,{render:({statistics:t})=>n.a.createElement(d.a,null,n.a.createElement($.a,{selectedBranches:t.branches,onSelectionChange:([e])=>t.setBranchFilter(e),onSelectionClear:t.clearBranchFilter,isClearable:!1}),n.a.createElement(R.a,{mutationName:"createFinancialReport"},n.a.createElement("br",null),n.a.createElement(W,{onClick:()=>{t.createClosure()}})),n.a.createElement(G.a,{queryName:"financialReports"},n.a.createElement(L.b,{to:"/overview/closure/history"},n.a.createElement(q,{text:M.i18n._("Closure history"),iconName:"assignment",iconSize:2.5,textNextToIcon:!0,color:v.a.greyDark,width:"15rem",height:v.c.ButtonHeight}))),e&&n.a.createElement(G.a,{queryName:"lastFinancialReport"},n.a.createElement(L.b,{to:"/overview/closure"},n.a.createElement(q,{text:M.i18n._("Current closure"),iconName:"assignment",iconSize:2.5,textNextToIcon:!0,color:v.a.orange,width:"15rem",height:v.c.ButtonHeight}))))}),V=A.b.p.withConfig({displayName:"MonospaceOutputStyled"})`
  color: white;
  font-family: 'Lucida Console', Monaco, monospace;
  white-space: pre-wrap;
  margin: 0.2rem 0.5rem 0.5rem 1rem;
  line-height: 1.8rem;
`,z=({text:e})=>n.a.createElement(V,null,(e=>e.replace(new RegExp("\t","g"),"\t"))(e)),U=k.a`
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
`,Q=Object(F.a)(U),Y=({reportId:e=""})=>n.a.createElement(S.a,{render:({statistics:t})=>t.isSingleBranchSelected?n.a.createElement(Q,{variables:{branchId:t.singleBranchFilter,reportId:e,showReport:Boolean(e)},fetchPolicy:"cache-and-network",renderLoading:!1,render:({report:t,lastReport:a},{loading:r})=>r?n.a.createElement(z,{text:o.d._("Computing")}):n.a.createElement(z,{text:e?t.plainData:a.plainData})}):null}),J=({match:e})=>n.a.createElement(m.a,{pageTitle:o.d._("Closure"),useBackButton:!0},n.a.createElement(H,{isShowingHistory:Boolean(e.params.reportId)}),n.a.createElement(Y,{reportId:e.params.reportId}));var K=a(7501),X=a(337);const Z=e=>n.a.createElement(S.a,{render:({statistics:e})=>e.branchesFilter&&n.a.createElement(X.b,{variables:{branches:e.branchesFilter,dateFrom:Object(y.a)(e.dateFrom),dateTo:Object(y.a)(e.dateTo)},fetchPolicy:"cache-and-network",renderLoading:!1,render:({stats:e},{loading:t})=>t?n.a.createElement(z,{text:o.d._("Computing")}):n.a.createElement(n.a.Fragment,null,n.a.createElement(K.a,{light:!0},n.a.createElement(u.Trans,{id:"Daily statistics"})),n.a.createElement(z,{text:e.dailyStatisticsPlain}),n.a.createElement(K.a,{light:!0},n.a.createElement(u.Trans,{id:"By category"})),n.a.createElement(z,{text:e.categoryStatisticsPlain}),n.a.createElement(K.a,{light:!0},n.a.createElement(u.Trans,{id:"By type"})),n.a.createElement(z,{text:e.deliveryStatisticsPlain}))})}),ee=e=>n.a.createElement(m.a,{pageTitle:o.d._("Sales statistics"),useBackButton:!0},n.a.createElement(N,null),n.a.createElement(Z,null));var te=a(267),ae=a(7504);const re=A.b.div.withConfig({displayName:"StatPanel"})``,ne=A.b.h1.withConfig({displayName:"StatLabel"})``,ie=A.b.h2.withConfig({displayName:"StatValue"})``,le=({isLoading:e,stats:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(N,null),!e&&t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(re,null,n.a.createElement(ne,null,n.a.createElement(u.Trans,{id:"Total turnover"})),n.a.createElement(ie,null,t.total.formattedValue)),n.a.createElement(re,null,n.a.createElement(ne,null,n.a.createElement(u.Trans,{id:"Online payments"})),n.a.createElement(ie,null,t.onlinePayments.formattedValue)),n.a.createElement(re,null,n.a.createElement(ne,null,n.a.createElement(u.Trans,{id:"Orders count"})),n.a.createElement(ie,null,t.ordersCount)),n.a.createElement(re,null,n.a.createElement(ne,null,n.a.createElement(u.Trans,{id:"Total commissions"})),n.a.createElement(ie,null,t.fees.formattedValue))));var oe=a(59),ce=a(7773);const se=({isLoading:e,noFilter:t,stats:a})=>n.a.createElement(S.a,{render:({order:r})=>e?n.a.createElement(f.a,null):t?n.a.createElement(p.a,null,n.a.createElement(u.Trans,{id:"Select at least one branch"})):0===a.orders.length?n.a.createElement(p.a,null,n.a.createElement(u.Trans,{id:"No orders"})):n.a.createElement(n.a.Fragment,null,a.orders.map(e=>n.a.createElement(ce.a,{key:e.id,order:Object.assign({},e,{orderStateCategory:oe.c.FINISHED}),listModel:r.list})))});var de=a(7604);const me=k.a`
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
        }
      }
    }
  }

  fragment GStatsPrice on PriceConverted {
    formattedValue
  }

  ${de.a}
`,ue=Object(F.a)(me),pe=({children:e})=>n.a.createElement(S.a,{render:({statistics:t})=>{if(!t.hasBranchFilter)return e({isLoading:!1,noFilter:!0});const a={branches:t.branchesFilter,dateFrom:Object(y.a)(t.dateFrom),dateTo:Object(y.a)(t.dateTo)};return n.a.createElement(ue,{fetchPolicy:"cache-and-network",variables:a,renderLoading:!1,render:({stats:t},{loading:a})=>e({noFilter:!1,isLoading:a,stats:t&&t.finishedOrders})})}});const he=e=>n.a.createElement(pe,null,e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(ae.a,{withScrollArea:!0,row:1,column:8,widthInColumns:8},n.a.createElement(se,e)),n.a.createElement(te.a,{layouts:[{i:"filter",x:0,y:1,w:8,h:1}],pageTitle:o.d._("Orders statistics"),showSoundControl:!1,scrollPageTitle:!1,useBackButton:!0},n.a.createElement("div",{key:"filter"},n.a.createElement(le,e)))));var ge=a(7596);const fe=e=>n.a.createElement(E.a,{text:o.d._("Closure"),iconName:"assignment",color:v.a.turquoise}),be=e=>n.a.createElement(E.a,{text:o.d._("Sales statistics"),iconName:"assignment",color:v.a.turquoise}),ye=e=>n.a.createElement(E.a,{text:o.d._("Orders statistics"),iconName:"assignment",color:v.a.turquoise});const Ee=e=>n.a.createElement(te.a,{layouts:[{i:"OrdersStatistics",x:0,y:1,w:2,h:2},{i:"DailyStatistics",x:2,y:1,w:2,h:2},{i:"Closure",x:4,y:1,w:2,h:2}]},n.a.createElement(ge.a,{key:"OrdersStatistics",route:"/overview/orders",component:ye,canQuery:"orders"}),n.a.createElement(ge.a,{key:"DailyStatistics",route:"/overview/statistics",component:be,canQuery:"statistics"}),n.a.createElement(ge.a,{key:"Closure",route:"/overview/closure",component:fe,canQuery:"lastFinancialReport"}));a.d(t,"OverviewRoutes",function(){return ve});const ve=({match:e})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{title:o.d._("Overview")}),n.a.createElement(i.e,null,n.a.createElement(s.a,{exact:!0,path:e.path,component:Ee}),n.a.createElement(s.a,{path:`${e.path}/closure/history`,component:B}),n.a.createElement(s.a,{path:`${e.path}/closure/:reportId?`,component:J}),n.a.createElement(s.a,{path:`${e.path}/statistics`,component:ee}),n.a.createElement(s.a,{path:`${e.path}/orders`,component:he}),n.a.createElement(i.c,{component:c.a})));t.default=ve}}]);
//# sourceMappingURL=52.f2c5082e.chunk.js.map