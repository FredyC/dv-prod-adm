(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBoundsOfPoints=t.generatePolygon=t.latLngToGps=t.gpsToLatLng=void 0;var r=n(7342);t.gpsToLatLng=(e=>({lat:Number(e.latitude),lng:Number(e.longitude)}));t.latLngToGps=(e=>({latitude:Number(e.lat()),longitude:Number(e.lng())}));t.generatePolygon=(({center:e,metersRadius:t=1e3,pointsCount:n=15})=>new Array(n).fill(null).map((o,a)=>{const i=360/n*a;return(0,r.computeDestinationPoint)(e,t,i)}));t.getBoundsOfPoints=(e=>{const t=(0,r.getBounds)(e);return t?new google.maps.LatLngBounds({lat:t.minLat,lng:t.minLng},{lat:t.maxLat,lng:t.maxLng}):null})},148:function(e,t,n){"use strict";var r,o,a,i,u,l,s,c,d,p,f,m,g,y,v,h,b,M,O,E,P,_,C,I,R,S,w,D,L;Object.defineProperty(t,"__esModule",{value:!0}),t.SubscriptionActionType=t.SettingTypeEnum=t.OrderRecipeStateEnum=t.DeliveryTypeEnum=t.OrderStateEnum=t.OrderOnlineStateEnum=t.OrderBillingTypeEnum=t.ZoneTypeEnum=t.OrderOriginEnum=t.MobilePlatformEnum=t.WareRequirementEnum=t.WareCategoryTypeEnum=t.PaymentTypeEnum=t.PaymentGateEnum=t.WareUnitEnum=t.DeviceTypeEnum=t.DeviceStateEnum=t.ShiftUserStateEnum=t.LanguageEnum=t.FieldStateEnum=t.AvailabilityTypeEnum=t.WarePriceTypeEnum=t.AllergenEnum=t.WeekDayEnum=t.OrderStateCategoryEnum=t.OrderStateCategoryTargetEnum=t.CurrencyEnum=t.AddressTypeEnum=t.CompanyTypeEnum=void 0,t.CompanyTypeEnum=r,function(e){e.Client="CLIENT",e.Affiliate="AFFILIATE",e.Brand="BRAND"}(r||(t.CompanyTypeEnum=r={})),t.AddressTypeEnum=o,function(e){e.Business="BUSINESS",e.Premises="PREMISES",e.MainAddress="MAIN_ADDRESS"}(o||(t.AddressTypeEnum=o={})),t.CurrencyEnum=a,function(e){e.Czk="CZK",e.Hop="HOP",e.Eur="EUR",e.Usd="USD"}(a||(t.CurrencyEnum=a={})),t.OrderStateCategoryTargetEnum=i,function(e){e.Backend="BACKEND",e.FeAdmin="FE_ADMIN"}(i||(t.OrderStateCategoryTargetEnum=i={})),t.OrderStateCategoryEnum=u,function(e){e.Payment="PAYMENT",e.Notification="NOTIFICATION",e.Reclamation="RECLAMATION",e.Delivery="DELIVERY",e.Cancel="CANCEL",e.Main="MAIN",e.Production="PRODUCTION",e.NewOrders="NEW_ORDERS",e.Preparing="PREPARING",e.OnWay="ON_WAY",e.Finished="FINISHED",e.ReadyToDeliver="READY_TO_DELIVER",e.InCart="IN_CART",e.Bills="BILLS"}(u||(t.OrderStateCategoryEnum=u={})),t.WeekDayEnum=l,function(e){e.Monday="MONDAY",e.Tuesday="TUESDAY",e.Wednesday="WEDNESDAY",e.Thursday="THURSDAY",e.Friday="FRIDAY",e.Saturday="SATURDAY",e.Sunday="SUNDAY"}(l||(t.WeekDayEnum=l={})),t.AllergenEnum=s,function(e){e.CerealsWithGlutten="CEREALS_WITH_GLUTTEN",e.Shellfish="SHELLFISH",e.Egg="EGG",e.Fish="FISH",e.Peanut="PEANUT",e.Soybeans="SOYBEANS",e.Milk="MILK",e.Nut="NUT",e.Celery="CELERY",e.Mustard="MUSTARD",e.Sesame="SESAME",e.Sulfurous="SULFUROUS",e.Lupin="LUPIN",e.Molluscs="MOLLUSCS"}(s||(t.AllergenEnum=s={})),t.WarePriceTypeEnum=c,function(e){e.Delivery="DELIVERY",e.Inhouse="INHOUSE"}(c||(t.WarePriceTypeEnum=c={})),t.AvailabilityTypeEnum=d,function(e){e.Main="MAIN"}(d||(t.AvailabilityTypeEnum=d={})),t.FieldStateEnum=p,function(e){e.Default="DEFAULT",e.Enabled="ENABLED",e.Disabled="DISABLED"}(p||(t.FieldStateEnum=p={})),t.LanguageEnum=f,function(e){e.Cs="CS",e.Sk="SK",e.En="EN"}(f||(t.LanguageEnum=f={})),t.ShiftUserStateEnum=m,function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.WaitingForResponse="WAITING_FOR_RESPONSE",e.Unresolved="UNRESOLVED"}(m||(t.ShiftUserStateEnum=m={})),t.DeviceStateEnum=g,function(e){e.Working="WORKING",e.Broken="BROKEN",e.Busy="BUSY",e.Free="FREE"}(g||(t.DeviceStateEnum=g={})),t.DeviceTypeEnum=y,function(e){e.Car="CAR",e.Plane="PLANE",e.Dron="DRON"}(y||(t.DeviceTypeEnum=y={})),t.WareUnitEnum=v,function(e){e.Kilogram="KILOGRAM",e.Gram="GRAM",e.Litre="LITRE",e.Piece="PIECE"}(v||(t.WareUnitEnum=v={})),t.PaymentGateEnum=h,function(e){e.Gopay="GOPAY",e.Paypal="PAYPAL",e.Credit="CREDIT",e.Cash="CASH"}(h||(t.PaymentGateEnum=h={})),t.PaymentTypeEnum=b,function(e){e.Cash="CASH",e.Credit="CREDIT",e.Voucher="VOUCHER"}(b||(t.PaymentTypeEnum=b={})),t.WareCategoryTypeEnum=M,function(e){e.Main="MAIN",e.SideDish="SIDE_DISH",e.Cover="COVER",e.Mixin="MIXIN"}(M||(t.WareCategoryTypeEnum=M={})),t.WareRequirementEnum=O,function(e){e.NoLimit="NO_LIMIT",e.Optional="OPTIONAL",e.MaxOne="MAX_ONE",e.Mandatory="MANDATORY"}(O||(t.WareRequirementEnum=O={})),t.MobilePlatformEnum=E,function(e){e.Android="ANDROID",e.Ios="IOS"}(E||(t.MobilePlatformEnum=E={})),t.OrderOriginEnum=P,function(e){e.Web="WEB",e.DameJidlo="DAME_JIDLO",e.MobilAndroid="MOBIL_ANDROID",e.MobilIos="MOBIL_IOS",e.Staff="STAFF",e.Wifi="WIFI",e.Baker="BAKER",e.WebPartner="WEB_PARTNER",e.Enigoo="ENIGOO",e.Mpizza="MPIZZA",e.Minisite="MINISITE",e.AffiliatePizzaRozvoz="AFFILIATE_PIZZA_ROZVOZ",e.AffiliateRozvozPizzyZdarma="AFFILIATE_ROZVOZ_PIZZY_ZDARMA",e.AffiliateRozvozJidla="AFFILIATE_ROZVOZ_JIDLA",e.CallCenter="CALL_CENTER"}(P||(t.OrderOriginEnum=P={})),t.ZoneTypeEnum=_,function(e){e.Area="AREA",e.Table="TABLE",e.Sector="SECTOR"}(_||(t.ZoneTypeEnum=_={})),t.OrderBillingTypeEnum=C,function(e){e.PriceSum="PRICE_SUM",e.Commission="COMMISSION",e.Fee="FEE",e.RewardResult="REWARD_RESULT",e.Affiliate="AFFILIATE"}(C||(t.OrderBillingTypeEnum=C={})),t.OrderOnlineStateEnum=I,function(e){e.Created="CREATED",e.Pending="PENDING",e.Paid="PAID",e.Canceled="CANCELED",e.Completed="COMPLETED"}(I||(t.OrderOnlineStateEnum=I={})),t.OrderStateEnum=R,function(e){e.InCart="IN_CART",e.Received="RECEIVED",e.InProgress="IN_PROGRESS",e.Finished="FINISHED",e.Reclamation="RECLAMATION",e.ReclamationHandled="RECLAMATION_HANDLED",e.Unpaid="UNPAID",e.Paid="PAID",e.ByCreditCard="BY_CREDIT_CARD",e.Refund="REFUND",e.ShouldBePaid="SHOULD_BE_PAID",e.CustomerNotified="CUSTOMER_NOTIFIED",e.New="NEW",e.Online="ONLINE",e.Evaluated="EVALUATED",e.NotEvaluated="NOT_EVALUATED",e.Shown="SHOWN",e.Accepted="ACCEPTED",e.ReadyToProduce="READY_TO_PRODUCE",e.InProduce="IN_PRODUCE",e.Made="MADE",e.ReadyToDeliver="READY_TO_DELIVER",e.OnWay="ON_WAY",e.StuckOnRoad="STUCK_ON_ROAD",e.Late="LATE",e.Delivered="DELIVERED",e.Cause="CAUSE",e.Handover="HANDOVER",e.WaitingForCustomer="WAITING_FOR_CUSTOMER",e.CustomerDidNotCome="CUSTOMER_DID_NOT_COME",e.DeliverRejected="DELIVER_REJECTED",e.CancelOnWay="CANCEL_ON_WAY",e.Canceled="CANCELED",e.BranchCancel="BRANCH_CANCEL",e.CustomerCancel="CUSTOMER_CANCEL",e.BillPassed="BILL_PASSED",e.BillPrinted="BILL_PRINTED",e.KitchenTicketPrinted="KITCHEN_TICKET_PRINTED"}(R||(t.OrderStateEnum=R={})),t.DeliveryTypeEnum=S,function(e){e.Pickup="PICKUP",e.Messenger="MESSENGER",e.Dron="DRON",e.Mail="MAIL"}(S||(t.DeliveryTypeEnum=S={})),t.OrderRecipeStateEnum=w,function(e){e.Fresh="FRESH",e.Preparing="PREPARING",e.Cooked="COOKED",e.Canceled="CANCELED",e.Completed="COMPLETED"}(w||(t.OrderRecipeStateEnum=w={})),t.SettingTypeEnum=D,function(e){e.Confirmation="CONFIRMATION",e.AdminOrderListing="ADMIN_ORDER_LISTING",e.Rules="RULES",e.Url="URL",e.Graphic="GRAPHIC",e.Options="OPTIONS"}(D||(t.SettingTypeEnum=D={})),t.SubscriptionActionType=L,function(e){e.Create="CREATE",e.Update="UPDATE",e.Destroy="DESTROY",e.Remove="REMOVE"}(L||(t.SubscriptionActionType=L={}))},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var r=i(n(0)),o=i(n(45)),a=n(46);function i(e){return e&&e.__esModule?e:{default:e}}const u=o.default.span.withConfig({displayName:"IconSpanStyled"})`
  font-size: ${({fontSize:e=1.5,fontSizeUnit:t="rem"})=>e+t} !important;
  color: ${e=>e.color};
`;t.Icon=(({iconName:e,color:t=a.Colors.white,fontSize:n,fontSizeUnit:o})=>e?r.default.createElement(u,{color:t,fontSize:n,fontSizeUnit:o,iconName:e,className:"material-icons"},e):null)},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getQueryErrors=t.createErrorLink=t.errorHandler=void 0;var r=n(6210),o=n(97),a=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const i=({graphQLErrors:e,operation:t})=>{e&&(0,o.reportFailingQuery)(e,{query:t.operationName,variables:t.variables})};t.errorHandler=i;t.createErrorLink=(()=>(0,r.onError)(i));t.getQueryErrors=(e=>a(void 0,void 0,void 0,function*(){const t=yield e;return t&&t.errors?t.errors:null}))},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.whenGoingOnline=function(e){return r.observe(t=>{!1===t.oldValue&&!0===t.newValue&&e()})},t.isNetworkOffline=t.isNetworkOnline=void 0;const r=n(11).observable.box(navigator.onLine);window.addEventListener("offline",()=>r.set(!1)),window.addEventListener("online",()=>r.set(!0));t.isNetworkOnline=(()=>r.get());t.isNetworkOffline=(()=>!r.get())},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuBaseModel=void 0;var r=n(26);const o=n(29).BaseModel.named("MenuBase").volatile(()=>({filterInput:""})).actions(e=>({setFilterInput(t){e.filterInput=t}})).views(e=>({get branchId(){return(0,r.getParent)(e).settings.branchId}}));t.MenuBaseModel=o},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuRecipeDeleteMutation=t.MenuRecipeUpdateMutation=t.MenuRecipeCreateMutation=t.MenuRecipeVisibilityMutation=t.MenuRecipeFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(96);const i=o.default`
  fragment GMenuRecipe on Recipe {
    id
    code
    visible: enabled
    nameLabel
    internalNote
    availableAmount
    prices {
      id
      priceType: warePriceType {
        enum
      }
      price {
        ...GPrice
        formattedValue
      }
    }
    recipeType: wareCategoryType {
      enum
    }
  }
  ${a.PriceFragment}
`;t.MenuRecipeFragment=i;const u=o.default`
  mutation GMenuRecipeVisibility($recipeId: ID!, $visible: Boolean!) {
    updateRecipe(id: $recipeId, recipe: { enabled: $visible }) {
      id
      visible: enabled
    }
  }
`;t.MenuRecipeVisibilityMutation=u;const l=o.default`
  mutation GMenuRecipeCreate($recipe: InputRecipeCreate!) {
    createRecipe(recipe: $recipe) {
      ...GMenuRecipe
    }
  }
  ${i}
`;t.MenuRecipeCreateMutation=l;const s=o.default`
  mutation GMenuRecipeUpdate($recipeId: ID!, $recipe: InputRecipeUpdate!) {
    updateRecipe(id: $recipeId, recipe: $recipe) {
      ...GMenuRecipe
    }
  }
  ${i}
`;t.MenuRecipeUpdateMutation=s;const c=o.default`
  mutation GMenuRecipeDelete($recipeId: ID!) {
    destroyRecipe(id: $recipeId) {
      id
    }
  }
`;t.MenuRecipeDeleteMutation=c},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotFoundPage=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(282),i=n(71);t.NotFoundPage=(()=>o.default.createElement(o.default.Fragment,null,o.default.createElement(a.PageTitle,{title:i.i18n._("Not found")}),o.default.createElement("h1",null,i.i18n._("There is nothing here, sorry!"))))},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SecureRoute=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(24),i=n(93),u=n(275),l=n(301),s=n(5765);var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.SecureRoute=(e=>{var{redirect:t=!0,lazy:n=!0}=e,r=c(e,["redirect","lazy"]);const{auth:d}=(0,i.useRoot)();if(!d.isAuthenticatedUser)return t?o.default.createElement(s.RedirectToLogin,null):o.default.createElement(u.NotFoundPage,null);if(r.component&&"object"===typeof r.component){const{component:e,path:t,exact:n}=r;return o.default.createElement(l.LazyRoute,{path:t,exact:n,component:e})}return o.default.createElement(a.Route,r)})},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageTitle=void 0;var r=n(11),o=n(94),a=d(n(0)),i=n(24),u=d(n(45)),l=n(67),s=n(47),c=n(46);function d(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};const m=u.default.h1.withConfig({displayName:"TitleStyled"})`
  color: ${c.Colors.greyLight};
  font-weight: lighter;
  margin: 0.5rem 0.5rem 0 0.5rem;
  white-space: nowrap;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
`,g=r.observable.array([]);(0,r.autorun)(()=>{const e=Array.from(g).pop();document.title=e?`${e} :: ${l.appConfig.pageTitleSuffix}`:l.appConfig.pageTitleSuffix});class y extends a.default.Component{componentDidMount(){g.push(this.props.title)}componentDidUpdate(e){const t=g.findIndex(s.RM.equals(e.title));t>=0&&g.splice(t,1,this.props.title)}componentWillUnmount(){g.remove(this.props.title)}render(){return null}}t.PageTitle=y,y.Route=(e=>{var{title:t}=e,n=f(e,["title"]);return a.default.createElement(i.Route,p({},n,{render:()=>a.default.createElement(y,{title:t})}))}),y.Display=(()=>a.default.createElement(o.Observer,null,()=>a.default.createElement(m,null,g.join(" - "))))},288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryCategoryList=t.CategoryListQuery=t.MenuCategoryListFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(61);const i=o.default`
  fragment GMenuCategoryListItem on WareCategory {
    id
    nameLabel
    internalNoteLabel
    countRecipes
    visible: enabled
    categoryType: wareCategoryType {
      enum
    }
  }
`;t.MenuCategoryListFragment=i;const u=o.default`
  query GCategoryList($branchId: ID!, $categoryType: WareCategoryTypeEnum!) {
    wareCategories(companyBranch: $branchId, wareCategoryType: $categoryType) {
      ...GMenuCategoryListItem
    }
  }
  ${i}
`;t.CategoryListQuery=u;const l=(0,a.buildQuery)(u);t.QueryCategoryList=l},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZoneColorsQuery=t.ZoneBranchLocationQuery=t.ZoneLocationQuery=t.ZoneFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(96);const i=o.default`
  fragment GZone on Zone {
    id
    name
    enabled
    priority
    companyBranch {
      id
      brand {
        id
      }
    }
    geoPolygon {
      ...GGeoPoint
    }
    priceRangeRules {
      ...GZonePriceRange
    }
    minimalOrderPrice {
      ...GPrice
    }
    zoneColor {
      id
      code
      color
    }
  }

  fragment GZonePriceRange on ZonePriceRangeRule {
    toPrice {
      ...GPrice
    }
    price {
      ...GPrice
    }
  }

  ${a.PriceFragment}
  ${a.GeoPointFragment}
`;t.ZoneFragment=i;const u=o.default`
  query GZoneLocation($zoneId: ID!) {
    zone(id: $zoneId) {
      id
      companyBranch {
        id
        gps {
          ...GGeoPoint
        }
      }
    }
  }
  ${a.GeoPointFragment}
`;t.ZoneLocationQuery=u;const l=o.default`
  query GZoneBranchLocation($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      gps {
        ...GGeoPoint
      }
    }
  }
  ${a.GeoPointFragment}
`;t.ZoneBranchLocationQuery=l;const s=o.default`
  query GZoneColors {
    zoneColors {
      id
      code
      color
    }
  }
`;t.ZoneColorsQuery=s},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseModel=void 0;var r,o=(r=n(146))&&r.__esModule?r:{default:r},a=n(26),i=n(99);const u=a.types.model().views(e=>({get log(){return(0,o.default)(`model/${(0,a.getPath)(e)}`)},get client(){const t=(0,a.getEnv)(e).apolloClient;if(!t)throw new i.VError("Apollo client is missing from environment setup");return t},get root(){return(0,a.getRoot)(e)}}));t.BaseModel=u},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LazyRoute=function(e){var{component:t}=e,n=l(e,["component"]);return r.default.createElement(o.Route,u({},n,{render:e=>r.default.createElement(r.default.Suspense,{fallback:r.default.createElement(a.default,null)},r.default.createElement(t,e))}))};var r=i(n(0)),o=n(24),a=i(n(98));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Spacing=t.Radiuses=t.applyAlphaToColor=t.Colors=void 0;var r,o,a=(r=n(153))&&r.__esModule?r:{default:r},i=n(47);t.Colors=o,function(e){e.yellow="#FFDB2B",e.pink="#FF2B95",e.blue="#2441FF",e.red="#FF1C1C",e.green="#179B12",e.turquoise="#2BFFFF",e.orange="#FF862B",e.violet="#6D4F8C",e.black="#000000",e.greyDarkest="#080808",e.greyDark="#2C2C2C",e.greyMiddle="#939393",e.greyLight="#EDEDED",e.white="#FFFFFF"}(o||(t.Colors=o={}));const u=i.RM.curry((e,t)=>(0,a.default)(e).alpha(t).string());var l;t.applyAlphaToColor=u,t.Radiuses=l,function(e){e.Card="0.5rem",e.Button="0.5rem",e.TextComponent="0.25rem"}(l||(t.Radiuses=l={}));t.Spacing={MarginAroundFormComponents:"0.1rem",Small:"0.25rem",Middle:"0.5rem",LayoutGridCellMargin:"0.5rem",ButtonHeight:"3.4375rem",DefaultInputWidth:20,DefaultSizeUnit:"rem"}},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RM=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(175));t.RM=r},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logTest=t.logLang=t.logSentry=t.logForm=t.logGraph=t.logAccess=t.logBootstrap=t.logPersistence=t.logRouting=t.logAuth=t.logError=t.logDebug=t.logMain=void 0;var r,o=(r=n(146))&&r.__esModule?r:{default:r};o.default.useColors=(()=>!1);const a=(0,o.default)("main");t.logMain=a;const i=(0,o.default)("debug");t.logDebug=i;const u=(0,o.default)("error");t.logError=u;const l=(0,o.default)("auth");t.logAuth=l;const s=(0,o.default)("routing");t.logRouting=s;const c=(0,o.default)("persistence");t.logPersistence=c;const d=(0,o.default)("bootstrap");t.logBootstrap=d;const p=(0,o.default)("access");t.logAccess=p;const f=(0,o.default)("graph");t.logGraph=f;const m=(0,o.default)("form");t.logForm=m;const g=(0,o.default)("sentry");t.logSentry=g;const y=(0,o.default)("lang");t.logLang=y;const v=console.log;t.logTest=v},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AuthModel=void 0;var r=n(6228),o=n(26),a=n(97),i=n(6229),u=n(6231),l=n(29),s=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const c=l.BaseModel.named("Auth").props({userId:o.types.optional(o.types.string,""),token:o.types.optional(o.types.string,""),provider:o.types.optional(i.LoginProviderModel,{})}).volatile(()=>({})).views(e=>({get isAuthenticated(){return e.token.length>0},get isAuthenticatedUser(){return this.isAuthenticated&&e.userId.length>0},get communicationToken(){return e.tokenForPasswordChange||e.token},get canCommunicate(){return this.isAuthenticated||void 0!==e.tokenForPasswordChange}})).actions(e=>({authenticate(t,n){e.token=t,e.userId=n,e.tokenForPasswordChange=void 0,e.log("authenticated with id %s",n),(0,a.identifyUser)(n)},invalidate(){e.token="",e.userId="",e.tokenForPasswordChange=void 0,e.client.cache.reset(),e.log("invalidated authentication"),(0,a.identifyUser)(null)}})).actions(e=>({setForPasswordChange(t){e.invalidate(),e.log("encoded token %s",t),e.tokenForPasswordChange=r.Base64.decode(t),e.log("using temp token %s",e.tokenForPasswordChange)},changePassword(t){return s(this,void 0,void 0,function*(){const n={password:t},r=yield e.client.mutate({mutation:u.PasswordChangeMutation,variables:n,fetchPolicy:"no-cache"}),{updateUserPassword:{id:o,token:a}}=r.data;a&&o&&(e.invalidate(),e.authenticate(a,o))})}})).preProcessSnapshot(e=>(e.userId&&(0,a.identifyUser)(e.userId),e));t.AuthModel=c},5650:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.GeoPointFragment=void 0;const o=((r=n(21))&&r.__esModule?r:{default:r}).default`
  fragment GGeoPoint on GeoPoint {
    latitude
    longitude
  }
`;t.GeoPointFragment=o},5651:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.EmailFragment=void 0;const o=((r=n(21))&&r.__esModule?r:{default:r}).default`
  fragment GEmail on Email {
    email
    description
    default
  }
`;t.EmailFragment=o},5652:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PhoneFragment=void 0;const o=((r=n(21))&&r.__esModule?r:{default:r}).default`
  fragment GPhone on Phone {
    phone
    description
    default
  }
`;t.PhoneFragment=o},5657:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapModel=void 0;var r=n(26),o=n(124);const a=49.8037633,i=15.4749126,u=n(29).BaseModel.named("Map").props({zoom:r.types.optional(r.types.number,12),latitude:r.types.optional(r.types.number,a),longitude:r.types.optional(r.types.number,i)}).volatile(e=>({mapRef:null})).views(e=>({get center(){return(0,o.gpsToLatLng)(e)}})).actions(e=>({setMapRef(t){e.mapRef=t},updateZoom(){e.mapRef&&(e.zoom=e.mapRef.getZoom())},updatePosition(){if(e.mapRef){const t=e.mapRef.getCenter();e.latitude=t.lat(),e.longitude=t.lng()}}}));t.MapModel=u},5756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuStockDeleteMutation=t.MenuStockUpdateMutation=t.MenuStockCreateMutation=t.MenuStockItemFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(5806),i=n(5807);const u=o.default`
  fragment GMenuStockItem on StockItem {
    id
    code
    note
    plu
    quantity
    nameLabel: label
    allergens {
      ...GAllergen
    }
    wareUnit {
      ...GWareUnit
    }
    allowNegative: allowNegativeValue
  }
  ${i.WareUnitFragment}
  ${a.AllergenFragment}
`;t.MenuStockItemFragment=u;const l=o.default`
  mutation GMenuStockCreate($stockItem: InputStockItemCreate!) {
    createStockItem(stockItem: $stockItem) {
      ...GMenuStockItem
    }
  }
  ${u}
`;t.MenuStockCreateMutation=l;const s=o.default`
  mutation GMenuStockUpdate($stockId: ID!, $stockItem: InputStockItemUpdate!) {
    updateStockItem(id: $stockId, stockItem: $stockItem) {
      ...GMenuStockItem
    }
  }
  ${u}
`;t.MenuStockUpdateMutation=s;const c=o.default`
  mutation GMenuStockDelete($stockId: ID!) {
    destroyStockItem(id: $stockId) {
      id
    }
  }
`;t.MenuStockDeleteMutation=c},5765:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RedirectToLogin=void 0;var r=i(n(146)),o=i(n(0)),a=n(24);function i(e){return e&&e.__esModule?e:{default:e}}const u=(0,r.default)("routing");t.RedirectToLogin=(({useOrigin:e=!0})=>o.default.createElement(a.Route,{path:"/login",children:({match:t,location:n})=>t?null:(u("redirecting to login..."),o.default.createElement(a.Redirect,{to:{pathname:"/login",state:{origin:e?n.pathname:"/"}}}))}))},5777:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TouchButton=void 0;var r=u(n(0)),o=u(n(45)),a=n(150),i=n(46);function u(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};const c=e=>t=>(0,i.applyAlphaToColor)(t.color,e),d=o.default.button.withConfig({displayName:"TouchButtonStyled"})`
  min-height: ${i.Spacing.ButtonHeight};
  min-width: ${i.Spacing.ButtonHeight};
  width: ${({width:e="100%"})=>e};
  height: ${({height:e="100%"})=>e};
  margin: 0;
  padding: 0.2rem;
  border: none;
  border-radius: ${i.Radiuses.Button};
  background-color: ${c(.7)};
  color: white;
  position: relative;
  /* fallback font size for incompatible browsers */
  font-size: 1rem;
  font-size: calc(0.6rem + 0.5vw);
  transition-duration: 0.2s;

  &:hover:enabled {
    background-color: ${c(.9)};
  }
  &:active:enabled {
    background-color: ${c(1)};
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,p=o.default.div.withConfig({displayName:"ButtonLabelStyled"})`
  color: white;
  text-align: center;
  width: 100%;
  overflow: hidden;
`,f=(0,o.default)(p).withConfig({displayName:"ButtonLabelNextToIconStyled"})`
  width: calc(100% - 4rem);
  margin: 0 0 0 1rem;
  text-align: left;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
`;t.TouchButton=(e=>{var{children:t,iconName:n,iconColor:o=i.Colors.white,iconSize:u=3,color:c=i.Colors.greyMiddle,textNextToIcon:m=!1,badge:g,text:y}=e,v=s(e,["children","iconName","iconColor","iconSize","color","textNextToIcon","badge","text"]);return r.default.createElement(d,l({color:c},v),n&&r.default.createElement(a.Icon,{iconName:n,color:o,fontSize:u}),y&&m&&r.default.createElement(f,null,y),y&&!m&&r.default.createElement(p,null,y),g,t)})},5781:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;var r,o=(r=n(153))&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(45)),i=n(46);const u=a.default.div.withConfig({displayName:"Card"})`
  background: ${function({color:e}){return(0,o.default)(e||i.Colors.greyLight).alpha(.8).lighten(.4).string()}};
  color: ${function(e){return e.textColor||i.Colors.black}};
  border-radius: ${i.Radiuses.Card};
  padding: ${function({padding:e=.5}){return e}}rem;
  margin: 0 0 0.5rem 0;
  ${function({stretchToParent:e=!1}){if(!e)return"";return a.css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `}};
`;t.Card=u,u.displayName="Card"},5782:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatAddress=t.formatTimeWithoutTodayDate=t.formatPrice=t.priceFormat=t.formatDateTime=t.dateTimeFormat=t.formatTime=t.timeFormat=t.formatDateISO=t.dateFormatISO=t.formatDate=t.dateFormat=t.formatFullDate=t.fullDateFormat=t.formatLocale=t.currentLocale=void 0;var r=n(151),o=n(7358),a=u(n(7641)),i=u(n(147));function u(e){return e&&e.__esModule?e:{default:e}}const l=a.default;t.currentLocale=l;const s=(0,o.formatWithOptions)({locale:l});t.formatLocale=s;t.fullDateFormat="dddd LL";const c=s("dddd LL");t.formatFullDate=c;t.dateFormat="D.M.YYYY";const d=s("D.M.YYYY");t.formatDate=d;t.dateFormatISO="YYYY-MM-DD";const p=(0,o.format)("YYYY-MM-DD");t.formatDateISO=p;t.timeFormat="H:mm";const f=s("H:mm");t.formatTime=f;t.dateTimeFormat="D.M.YYYY H:mm";const m=s("D.M.YYYY H:mm");t.formatDateTime=m;t.priceFormat="0,0.[00]";t.formatPrice=(e=>(0,i.default)(e).format("0,0.[00]"));t.formatTimeWithoutTodayDate=(e=>(0,r.isSameDay)(e,new Date)?f(e):m(e));t.formatAddress=(e=>e.street?e.houseNumber?`${e.street} ${e.houseNumber}, ${e.city}`:`${e.street}, ${e.city}`:e.city?`${e.city} ${e.houseNumber}, ${e.state}`:`${e.state}`)},5783:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullPageLayout=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(5786);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.FullPageLayout=(e=>{var{children:t,width:n=16}=e,r=u(e,["children","width"]);return o.default.createElement(a.PageLayout,i({layouts:function(e){return[{i:"full",x:0,y:1,w:e,h:10}]}(n)},r),o.default.createElement("div",{key:"full"},t))})},5786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayout=void 0;var r=d(n(0)),o=d(n(45)),a=n(5808),i=n(282),u=n(7675),l=n(7678),s=n(276),c=n(7680);function d(e){return e&&e.__esModule?e:{default:e}}const p=o.default.div.withConfig({displayName:"TopLeftButtonContainer"})`
  position: fixed;
  top: 0;
  left: 0;
`,f=e=>e.scrollPageTitle?"absolute":"fixed",m=o.default.div.withConfig({displayName:"TopRightContainer"})`
  position: ${f};
  top: 0;
  right: 0;
  z-index: 100;
`,g=o.default.div.withConfig({displayName:"PageTitleContainer"})`
  position: ${f};
  top: 0rem;
  left: 4rem;
`,y=o.default.div.withConfig({displayName:"SoundControlContainer"})`
  position: fixed;
  top: 0rem;
  right: 15rem;
`;t.PageLayout=(({pageTitle:e="",layouts:t=[],hideLogoutWidget:n=!1,showSoundControl:o=!1,useBackButton:d=!1,scrollPageTitle:f=!0,backRoute:v,children:h})=>r.default.createElement(r.default.Fragment,null,e&&r.default.createElement(i.PageTitle,{title:e}),o&&r.default.createElement(y,null,r.default.createElement(u.SoundControl,null)),!n&&r.default.createElement(m,{scrollPageTitle:f},r.default.createElement(s.SecureRoute,{path:"/",component:l.LogoutWidget,redirect:!1})),r.default.createElement(g,{scrollPageTitle:f},r.default.createElement(i.PageTitle.Display,null)),r.default.createElement(a.GridLayout,{layouts:[...t]},h),r.default.createElement(p,null,r.default.createElement(c.HomeButton,{goBack:d,backRoute:v}))))},5789:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveOrderDriverMutation=t.SelectOrderDriverMutation=t.SendOrderNotificationMutation=t.UpdateOrderStateMutation=t.OrderStateCategoryFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(5793);const i=o.default`
  fragment GOrderStateCategory on Order {
    id
    orderStateCategory
  }
`;t.OrderStateCategoryFragment=i;const u=o.default`
  mutation GUpdateOrderState($orderId: ID!, $state: OrderStateEnum!) {
    addOrderState(order: $orderId, orderState: $state) {
      ...GOrderStateCategory
      orderTiming: orderStateCategoryRelations {
        createdAt
        orderStateCategory
      }
    }
  }
  ${i}
`;t.UpdateOrderStateMutation=u;const l=o.default`
  mutation GSendOrderNotification($orderId: ID!, $minutes: Int!) {
    orderNotifyCustomer(id: $orderId, minutes: $minutes) {
      id
      deliverAt
    }
  }
`;t.SendOrderNotificationMutation=l;const s=o.default`
  mutation GSelectOrderDriver($driverId: ID!, $orderId: ID!) {
    createUserDeliveringOrder(user: $driverId, order: $orderId) {
      order {
        ...GOrderDriver
      }
    }
  }
  ${a.OrderDriverFragment}
`;t.SelectOrderDriverMutation=s;const c=o.default`
  mutation GRemoveOrderDriver($orderDriverId: ID!) {
    destroyUserDeliveringOrder(id: $orderDriverId) {
      order {
        ...GOrderDriver
      }
    }
  }
  ${a.OrderDriverFragment}
`;t.RemoveOrderDriverMutation=c},5790:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r};t.Loading=(({text:e="..."})=>o.default.createElement("h1",null,e))},5791:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useEffectOnce=void 0;var r=n(0);t.useEffectOnce=(e=>(0,r.useEffect)(e,[]))},5793:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryDriverSelection=t.OrderDriverFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(61);const i=o.default`
  fragment GDriver on User {
    id
    firstName
    lastName
  }
`,u=o.default`
  fragment GOrderDriver on Order {
    id
    driver: userDeliveringOrder {
      id
      user {
        ...GDriver
      }
    }
  }
  ${i}
`;t.OrderDriverFragment=u;const l=o.default`
  query GOrderDriverSelection($orderId: ID!, $branchId: ID!) {
    order(id: $orderId) {
      ...GOrderDriver
    }
    drivers(companyBranch: $branchId, onlyAvailable: false) {
      ...GDriver
    }
  }
  ${u}
`,s=(0,a.buildQuery)(l);t.QueryDriverSelection=s},5795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTimer=t.HOUR=t.MINUTE=t.SECOND=void 0;var r,o=(r=n(5833))&&r.__esModule?r:{default:r},a=n(0),i=n(5834);t.SECOND=1e3;t.MINUTE=6e4;t.HOUR=36e5;t.useTimer=(({interval:e,enabled:t,getNow:n=Date.now,nextTick:r=o.default,cancelTick:u=o.default.cancel})=>{const[l,s]=(0,i.useStateRef)(n),c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{const o=()=>{const t=n();t-l()>=e&&s(t),i()},a=()=>{c.current&&(u(c.current),c.current=null)},i=()=>{t?c.current=r(o):a()};return i(),a},[e,t]),l()})},5800:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BusinessHoursModel=t.ESpecificHourMode=void 0;var r,o=n(26),a=n(5782),i=n(47),u=n(29),l=n(7647);t.ESpecificHourMode=r,function(e){e.TIMESPAN="TIMESPAN",e.FULLDAY="FULLDAY"}(r||(t.ESpecificHourMode=r={}));const s=i.RM.complement(i.RM.propEq("id")),c=u.BaseModel.named("BusinessHours").props({specificMode:o.types.optional(o.types.enumeration(["TIMESPAN","FULLDAY"]),r.TIMESPAN)}).actions(e=>({changeSpecificMode(t){e.specificMode=t},submitSpecificHour(t){const n={input:{companyBranch:e.root.settings.branchId,specificDate:t.date,closed:e.specificMode===r.FULLDAY,openAt:t.openAt&&(0,a.formatTime)(t.openAt),closeAt:t.closeAt&&(0,a.formatTime)(t.closeAt),closedNote:t.note}};e.client.mutate({mutation:l.CreateSpecificBusinessHour,variables:n,updateQueries:{GSpecificBusinessHours:(e,{mutationResult:t})=>t.data?{businessHours:e.businessHours.concat(t.data.result)}:e}})},deleteSpecificHour(t){const n={id:t};e.client.mutate({mutation:l.DeleteSpecificBusinessHour,variables:n,updateQueries:{GSpecificBusinessHours:(e,{mutationResult:t})=>t.data?{businessHours:e.businessHours.filter(s(t.data.result.id))}:e}})}}));t.BusinessHoursModel=c},5801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCategoryRoute=t.MenuCategoryModel=void 0;var r=n(164),o=n(47),a=n(288),i=n(264),u=n(7650),l=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const s=i.MenuBaseModel.named("MenuCategory").actions(e=>({sortCategory(t,n){return l(this,void 0,void 0,function*(){const r={categoryId:t,offset:n},o=yield e.client.mutate({mutation:u.SortMenuCategoryMutation,variables:r});return Boolean(o.data&&o.data.success)})},changeVisibility(t,n){e.client.mutate({mutation:u.MenuCategoryVisibility,variables:{categoryId:t,visible:n},optimisticResponse:{updateRecipe:{__typename:"Recipe",id:t,visible:n}}})},createCategory(t,n){const o={input:Object.assign({companyBranch:e.branchId,wareCategoryType:n},c(t,n))};return(0,r.getQueryErrors)(e.client.mutate({mutation:u.MenuCategoryCreateMutation,variables:o,refetchQueries:[{query:a.CategoryListQuery,variables:{branchId:e.branchId,categoryType:n}}]}))},updateCategory(t,n){return l(this,void 0,void 0,function*(){const o={categoryId:t.id,input:Object.assign({},c(t,n))};return(0,r.getQueryErrors)(e.client.mutate({mutation:u.MenuCategoryUpdateMutation,variables:o}))})},deleteCategory(t,n){return l(this,void 0,void 0,function*(){const r={categoryId:t};yield e.client.mutate({mutation:u.MenuCategoryDeleteMutation,variables:r,refetchQueries:[{query:a.CategoryListQuery,variables:{branchId:e.branchId,categoryType:n}}]})})}}));function c(e,t){return Object.assign({nameLabel:e.nameLabel,internalNoteLabel:e.internalNoteLabel,enabled:e.visible,pictogram:e.pictogram,recipes:e.recipes.map(o.RM.prop("id"))})}t.MenuCategoryModel=s;t.getCategoryRoute=((e,t)=>({pathname:e,state:{categoryType:t}}))},5802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRecipeRoute=t.MenuRecipeModel=void 0;var r,o=(r=n(147))&&r.__esModule?r:{default:r},a=n(164),i=n(47),u=n(5803),l=n(5804),s=n(264),c=n(265);var d=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const p=s.MenuBaseModel.named("MenuRecipe").actions(e=>({changeVisibility(t,n){e.client.mutate({mutation:c.MenuRecipeVisibilityMutation,variables:{recipeId:t,visible:n},optimisticResponse:{updateRecipe:{__typename:"Recipe",id:t,visible:n}}})},createRecipe(t,n){const r={recipe:Object.assign({companyBranch:e.branchId,wareCategoryType:n},f(t))};return(0,a.getQueryErrors)(e.client.mutate({mutation:c.MenuRecipeCreateMutation,variables:r,refetchQueries:[{query:l.MenuRecipeListQuery,variables:{branchId:e.branchId}}]}))},updateRecipe(t){const n={recipeId:t.id,recipe:Object.assign({},f(t))};return(0,a.getQueryErrors)(e.client.mutate({mutation:c.MenuRecipeUpdateMutation,variables:n}))},deleteRecipe(t){return d(this,void 0,void 0,function*(){const n={recipeId:t};yield e.client.mutate({mutation:c.MenuRecipeDeleteMutation,variables:n,refetchQueries:[{query:l.MenuRecipeListQuery,variables:{branchId:e.branchId}}]})})},getDefaultVat(){return d(this,void 0,void 0,function*(){const{data:t}=yield e.client.query({query:u.MenuRecipeDefaultVat,variables:{branchId:e.branchId}});if(t){const{companyBranch:{defaultVats:e}}=t;return e.reduce((e,{vatId:t,priceType:n})=>(e[n.enum]=t,e),{})}return{}})}}));function f(e){return{code:e.code,nameLabel:e.nameLabel,internalNote:e.internalNote,descriptionLabel:e.descriptionLabel,enabled:e.visible,prices:Object.keys(e.prices).map(t=>({warePriceType:t,price:{value:(0,o.default)(e.prices[t].value).value()},vat:e.prices[t].vatId})),sideDishCategories:e.sideDishes.map(i.RM.prop("id")),wareCategories:e.categories.map(i.RM.prop("id")),associatedRecipes:e.associatedRecipes.map(i.RM.pick(["associatedRecipe","warePriceType"])),ingredients:e.ingredients.map(({stockItem:e,quantity:t})=>({stockItem:e,quantity:function(e){return"number"===typeof e?e:Number.parseFloat(e.replace(",","."))}(t)}))}}t.MenuRecipeModel=p;t.getRecipeRoute=((e,t)=>({pathname:e,state:{recipeType:t}}))},5803:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryMenuRecipeFormAssoc=t.MenuRecipeDefaultVat=t.MenuRecipeFormAssocQuery=t.MenuRecipeFormQuery=t.MenuAssocRecipeFragment=t.MenuRecipePriceFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(61),i=n(96),u=n(288);const l=o.default`
  fragment GMenuRecipePrice on RecipePrice {
    id
    priceType: warePriceType {
      enum
    }
    price {
      ...GPrice
    }
    vat {
      id
    }
  }
  ${i.PriceFragment}
`;t.MenuRecipePriceFragment=l;const s=o.default`
  fragment GMenuAssocRecipe on Recipe {
    id
    nameLabel
  }
`;t.MenuAssocRecipeFragment=s;const c=o.default`
  query GMenuRecipeForm($recipeId: ID!) {
    recipe(id: $recipeId) {
      id
      code
      image
      nameLabel
      internalNote
      descriptionLabel
      visible: enabled
      recipeType: wareCategoryType {
        enum
      }
      sourcePrices: prices {
        ...GMenuRecipePrice
      }
      sideDishes: sideDishesWareCategories {
        ...GMenuCategoryListItem
      }
      categories: wareCategories {
        ...GMenuCategoryListItem
      }
      sourceAssociatedRecipes: associatedRecipes {
        id
        priceType: warePriceType {
          enum
        }
        recipe: associatedRecipe {
          ...GMenuAssocRecipe
        }
      }
      sourceIngredients: ingredients {
        id
        quantity
        stockItem {
          id
          label
          wareUnit {
            id
            code
          }
          allergens {
            id
            enum
          }
        }
      }
    }
  }
  ${l}
  ${u.MenuCategoryListFragment}
  ${s}
`;t.MenuRecipeFormQuery=c;const d=o.default`
  query GMenuRecipeFormAssoc($branchId: ID!) {
    recipes(companyBranch: $branchId) {
      ...GMenuAssocRecipe
    }
  }
  ${s}
`;t.MenuRecipeFormAssocQuery=d;const p=o.default`
  query GMenuRecipeDefaultVat($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      defaultVats {
        vatId: id
        priceType: warePriceType {
          enum
        }
      }
    }
  }
`;t.MenuRecipeDefaultVat=p;const f=(0,a.buildQuery)(d);t.QueryMenuRecipeFormAssoc=f},5804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryRecipeList=t.MenuRecipeListQuery=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(61),i=n(265);const u=o.default`
  query GMenuRecipeList(
    $branchId: ID!
    $categoryId: ID
    $categoryType: WareCategoryTypeEnum
  ) {
    recipes(
      companyBranch: $branchId
      wareCategory: $categoryId
      wareCategoryType: $categoryType
    ) {
      ...GMenuRecipe
    }
  }
  ${i.MenuRecipeFragment}
`;t.MenuRecipeListQuery=u;const l=(0,a.buildQuery)(u);t.QueryRecipeList=l},5805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryMenuStockList=t.MenuStockListQuery=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(61),i=n(5756);const u=o.default`
  query GMenuStockList($branchId: ID!) {
    stockItems(companyBranch: $branchId) {
      ...GMenuStockItem
    }
  }
  ${i.MenuStockItemFragment}
`;t.MenuStockListQuery=u;const l=(0,a.buildQuery)(u);t.QueryMenuStockList=l},5806:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AllergenFragment=void 0;const o=((r=n(21))&&r.__esModule?r:{default:r}).default`
  fragment GAllergen on Allergen {
    id
    code
    enum
    category
  }
`;t.AllergenFragment=o},5807:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.WareUnitFragment=void 0;const o=((r=n(21))&&r.__esModule?r:{default:r}).default`
  fragment GWareUnit on WareUnit {
    id
    enum
    code
  }
`;t.WareUnitFragment=o},5808:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GridLayout=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7668));const i=(0,a.WidthProvider)(a.default);t.GridLayout=(({children:e,layouts:t})=>o.default.createElement(i,{className:"layout",layout:t,cols:16,rowHeight:55,margin:[8,8],autoSize:!1,isDraggable:!1,isResizable:!1,compactType:null,measureBeforeMount:!0},e))},5819:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SoundPlayInterval=void 0;var r=l(n(0)),o=l(n(6170)),a=n(49),i=n(6178),u=n(95);function l(e){return e&&e.__esModule?e:{default:e}}t.SoundPlayInterval=(({intervalSec:e,soundUrl:t,shouldPlay:n=!0,skipEnableChecks:l=!1})=>r.default.createElement(u.WithRoot,{observe:!0,render:({config:u,user:s})=>{if(!l){if(!u.soundEnabled)return(0,a.logMain)("sound is disabled"),null;if(!s.soundEnabled)return(0,a.logMain)("sound not enabled by user"),null}return(0,a.logMain)("sound play status: %s",n),r.default.createElement(i.IntervalRender,{intervalSec:e,enabled:n,render:({isActive:e,nextLoop:n})=>r.default.createElement(o.default,{url:t,playStatus:e?"PLAYING":"STOPPED",onFinishedPlaying:n,loop:!1,autoLoad:!0,volume:s.soundVolume})})}}))},5829:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.CreateFinancialReport=void 0;const o=((r=n(21))&&r.__esModule?r:{default:r}).default`
  mutation GCreateFinancialReport($companyBranchId: ID!) {
    result: createFinancialReport(companyBranchId: $companyBranchId) {
      id
    }
  }
`;t.CreateFinancialReport=o},5830:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QuerySpecificBusinessHours=t.SpecificBusinessHourFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(61);const i=o.default`
  fragment GSpecificBusinessHour on BusinessHour {
    id
    companyBranch {
      id
    }
    specificDate
    specificDateLocalized
    closed
    closedNote
    openAt
    closeAt
  }
`;t.SpecificBusinessHourFragment=i;const u=(0,a.buildQuery)(o.default`
  query GSpecificBusinessHours($branchId: ID!) {
    businessHours(companyBranch: $branchId, specific: true) {
      ...GSpecificBusinessHour
    }
  }
  ${i}
`);t.QuerySpecificBusinessHours=u},5831:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuCategoryFormQuery=t.MenuCategoryFormFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(265);const i=o.default`
  fragment GMenuCategoryForm on WareCategory {
    id
    nameLabel
    internalNoteLabel
    visible: enabled
    categoryType: wareCategoryType {
      enum
    }
    pictogram
    recipes {
      ...GMenuRecipe
    }
  }
  ${a.MenuRecipeFragment}
`;t.MenuCategoryFormFragment=i;const u=o.default`
  query GMenuCategoryForm($categoryId: ID!) {
    wareCategory(id: $categoryId) {
      ...GMenuCategoryForm
    }
  }
  ${i}
`;t.MenuCategoryFormQuery=u},5834:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStateRef=function(e){const[t,n]=(0,r.useState)(e),o=(0,r.useRef)(null);return o.current=t,[()=>o.current,n]};var r=n(0)},5869:function(e,t,n){e.exports=n(5870)},5870:function(e,t,n){"use strict";n(5871);var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(22),i=n(5876),u=n(93),l=n(7684),s=n(7685),c=n(7686),d=n(97),p=n(71);const f=()=>o.default.createElement(s.ThemeProvider,null,o.default.createElement(u.RootProvider,null,o.default.createElement(p.I18nManager,null,o.default.createElement(c.UpdateHandler,null,o.default.createElement(l.Router,null,o.default.createElement(i.App,null))))));(0,d.installSentry)(()=>{const e=document.getElementById("root");(0,a.render)(o.default.createElement(f,null),e)})},5871:function(e,t,n){"use strict";window.localStorage.setItem("debug","*,-sockjs*")},5876:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0,n(5877);var r=n(94),o=n(5882),a=d(n(0)),i=n(5956),u=n(7655),l=d(n(98)),s=n(93),c=n(7666);function d(e){return e&&e.__esModule?e:{default:e}}t.App=(()=>{const{user:e}=(0,s.useRoot)();return a.default.createElement(u.ErrorContainer,{prod:!0},a.default.createElement(a.default.Fragment,null,a.default.createElement(i.ConnectionWarning,null),a.default.createElement(o.SnackbarProvider,{maxSnack:3,anchorOrigin:{horizontal:"right",vertical:"top"}},a.default.createElement(r.Observer,null,()=>e.isReady?a.default.createElement(c.Routing,null):a.default.createElement(l.default,null)))))})},5877:function(e,t,n){},5956:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectionWarning=void 0;var r=n(122),o=n(123),a=n(273),i=n(94),u=f(n(0)),l=f(n(45)),s=f(n(6162)),c=n(219),d=n(46),p=n(5819);function f(e){return e&&e.__esModule?e:{default:e}}const m=l.default.div.withConfig({displayName:"MessageStyled"})`
  padding: 1rem;
  background-color: ${d.Colors.red} !important;
  font-size: 2rem;

  & svg {
    position: relative;
    top: 0.3rem;
    padding-right: 0.5rem;
  }
`,g=(0,i.observer)(()=>u.default.createElement(u.default.Fragment,null,u.default.createElement(p.SoundPlayInterval,{shouldPlay:(0,c.isNetworkOffline)(),intervalSec:30,soundUrl:s.default}),u.default.createElement(o.Dialog,{open:(0,c.isNetworkOffline)(),disableBackdropClick:!0,disableEscapeKeyDown:!0},u.default.createElement(m,null,u.default.createElement(a.WarningTwoTone,{fontSize:"large"}),u.default.createElement(r.Trans,{id:"Internet connection is not available"})))));t.ConnectionWarning=g},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildQuery=function(e){return t=>{const n=(0,o.useRef)([]),r=(0,o.useCallback)(()=>{n.current.forEach(e=>e()),n.current.length=0},[]);(0,o.useEffect)(()=>(r(),r()),[n.current.length]);const{render:i,renderFragment:m,renderLoading:g=!0,renderError:y=!0,refetchOnConnectionLost:v=!1,children:h}=t,b=f(t,["render","renderFragment","renderLoading","renderError","refetchOnConnectionLost","children"]);return o.default.createElement(a.Query,p({query:e},b),e=>{if(e.loading){if("function"===typeof g)return g(e);if(!0===g)return o.default.createElement(l.Loading,null)}if(e.error)return(0,d.reportError)(e.error),(0,s.logError)(e.error),!0===y?o.default.createElement(u.Redirect,{to:"/error"}):null;if(v&&n.current.push((0,c.whenGoingOnline)(e.refetch)),e.data){if(m)return o.default.createElement(o.default.Fragment,null,m(e.data,e));if(i)return i(e.data,e)}return h||null})}},t.buildQueryHook=function(e){return t=>(0,i.useQuery)(e,{variables:t})};var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=n(281),i=n(279),u=n(24),l=((r=n(7350))&&r.__esModule,n(5790)),s=n(49),c=n(219),d=n(97);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}},6162:function(e,t,n){e.exports=n.p+"static/media/connectionWarning.ac6fe03b.mp3"},6178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IntervalRender=void 0;var r=n(151),o=n(0);t.IntervalRender=class extends o.Component{constructor(){super(...arguments),this.state={isActive:!1,nextTime:this.getNextTime()},this.timer=0,this.executeTimer=(()=>{if(this.timer&&(clearTimeout(this.timer),this.timer=0),!1===this.props.enabled)return;const e=(0,r.differenceInMilliseconds)(this.state.nextTime,new Date);this.timer=setTimeout(this.activate,e)}),this.activate=(()=>{!1!==this.props.enabled&&this.setState({isActive:!0,nextTime:this.getNextTime()})}),this.deactivate=(()=>{this.setState({isActive:!1}),this.executeTimer()})}componentDidMount(){this.executeTimer()}componentDidUpdate(){this.executeTimer()}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}getNextTime(){return(0,r.addSeconds)(new Date,this.props.intervalSec)}render(){const{isActive:e}=this.state;return this.props.render({isActive:e,nextLoop:this.deactivate})}}},6184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RootContext=void 0;const r=(0,n(0).createContext)(void 0);t.RootContext=r},6185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createApolloClient=function(e){const t=new r.InMemoryCache({dataIdFromObject:e=>null!=e.__typename&&null!=e.id?`${e.__typename}-${e.id}`:null}),n=(0,f.default)(e),y=new l.RetryLink({delay:{initial:300,max:1/0,jitter:!0},attempts:{max:5,retryIf:(e,t)=>!!e}}),v=function(){const e=new u.default;return(0,s.autorun)(()=>{(0,p.isNetworkOnline)()?((0,d.logGraph)("client is online"),e.open()):((0,d.logGraph)("client is offline"),e.close())}),e}(),h=(0,m.createErrorLink)(),b=new i.BatchHttpLink({uri:`${c.appConfig.endpoint}/graphql`,credentials:"same-origin"}),M=(0,g.default)(e);return new o.ApolloClient({link:a.ApolloLink.from([n,y,v,h]).split(g.isSubscriptionOperation,M,b),cache:t})};var r=n(7690),o=n(5766),a=n(18),i=n(7691),u=y(n(6191)),l=n(7692),s=n(11),c=n(67),d=n(49),p=n(219),f=y(n(6193)),m=n(164),g=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(6216));function y(e){return e&&e.__esModule?e:{default:e}}},6193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=(0,a.computed)(()=>({Authorization:`Bearer ${e.communicationToken}`}));return new o.ApolloLink((n,r)=>{if(!e.canCommunicate)throw new i.default(`Executing operation ${n.operationName} before authenticated`,{operation:n});const a=n.getContext();return n.setContext(Object.assign({},a,{headers:t.get()})),new o.Observable(t=>{const o=r(n).subscribe({error:n=>{n.result&&"INVALID_TOKEN"===n.result.code?e.invalidate():t.error(n)},next:t.next.bind(t),complete:t.complete.bind(t)});return()=>o.unsubscribe()})})};var r,o=n(18),a=n(11),i=(r=n(99))&&r.__esModule?r:{default:r}},6199:function(e,t){},6201:function(e,t){},6216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=(0,l.computed)(()=>`${c.appConfig.endpoint}/cable?token=${e.token}`);let n;const r={};return new a.ApolloLink(i=>{if(!e.isAuthenticated)throw new s.VError(`Executing operation ${i.operationName} before authenticated`,{operation:i});return n||(n=o.default.createConsumer(t.get())),new a.Observable(e=>{const t=d(),o=n.subscriptions.create(Object.assign({},{channel:"GraphqlChannel",channelId:t},r),{connected:function(){this.perform("execute",{query:i.query?(0,u.print)(i.query):null,variables:i.variables,operationId:i.operationId,operationName:i.operationName})},received:function(t){t.result.data&&e.next(t.result),t.more||(this.unsubscribe(),e.complete())}});return o})})},t.isSubscriptionOperation=function({query:e}){const{operation:t}=(0,i.getOperationDefinitionOrDie)(e);return"subscription"===t};var r,o=(r=n(6217))&&r.__esModule?r:{default:r},a=n(18),i=n(31),u=n(6218),l=n(11),s=n(99),c=n(67);const d=()=>Math.round(Date.now()+1e5*Math.random()).toString(16)},6225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.persistModel=function(e){return l(this,void 0,void 0,function*(){const t=(0,a.getType)(e).name,n=`${s}_${t}`,r=e=>o.default.setItem(n,e);try{const t=yield o.default.getItem(n);null!==t?((0,a.applySnapshot)(e,t),(0,u.logPersistence)("restored state %s",n)):(yield r((0,a.getSnapshot)(e)),(0,u.logPersistence)("initialized state %s",n))}catch(i){(0,u.logPersistence)("persistence failed",i),o.default.removeItem(n)}(0,a.onSnapshot)(e,r)})};var r,o=(r=n(6226))&&r.__esModule?r:{default:r},a=n(26),i=n(67),u=n(49);var l=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const s=i.appConfig.persistenceKey},6227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useInitializer=void 0;var r=n(0);t.useInitializer=(e=>{(0,r.useEffect)(()=>{e()},[])})},6229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoginProviderModel=void 0;var r=n(26),o=n(29),a=n(6230);const i=o.BaseModel.named("LoginProvider").props({passwordLogin:r.types.optional(a.PasswordLoginModel,{})}).actions(e=>({authenticate(t,n){(0,r.getParent)(e).authenticate(t,n)}}));t.LoginProviderModel=i},6230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createPasswordLoginModelMock=t.PasswordLoginModel=void 0;var r=n(26),o=n(67),a=n(29),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const u=a.BaseModel.named("PasswordLogin").volatile(e=>({errorCode:"",errorMessage:""})).views(e=>({get hasFailed(){return Boolean(e.errorCode)}})).actions(e=>({setFailure(t,n){e.errorCode=t,e.errorMessage=n},setSuccess(t,n){(0,r.getParent)(e).authenticate(t,n)}})).actions(e=>({requestToken(t,n){return i(this,void 0,void 0,function*(){const r=(({username:e,password:t})=>`${o.appConfig.endpoint}/users/token?username=${e}&password=${t}`)({username:t,password:n}),a=window.fetch,i=yield a(r,{headers:{Accept:"application/json"}}),u=yield i.json();e.log("received payload %j",u),200!==i.status?(e.setFailure(u.code,u.error),e.log("token request failed for username %s",t)):(e.setSuccess(u.token,String(u.userId)),e.log("token request success for username %s [%s]",t,u.userId))})}}));t.PasswordLoginModel=u;t.createPasswordLoginModelMock=((e={},t)=>u.create(Object.assign({},e),t))},6231:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordChangeMutation=void 0;const o=((r=n(21))&&r.__esModule?r:{default:r}).default`
  mutation MPasswordChange($password: String!) {
    updateUserPassword(newPassword: $password) {
      id
      token
    }
  }
`;t.PasswordChangeMutation=o},6232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RootModel=void 0;var r=n(26),o=n(5649),a=n(6233),i=n(6234),u=n(6283),l=n(7332),s=n(7356),c=n(7357),d=n(7652);const p=n(29).BaseModel.named("Root").props({auth:r.types.optional(o.AuthModel,{}),user:r.types.optional(i.UserModel,{}),order:r.types.optional(l.OrderModel,{}),createOrder:r.types.optional(u.CreateOrderModel,{}),zone:r.types.optional(d.ZoneModel,{}),settings:r.types.optional(c.SettingsModel,{}),config:r.types.optional(a.ConfigModel,{}),statistics:r.types.optional(s.StatisticsModel,{})}).views(e=>({get persistedModels(){return[e.auth,e.user,e.settings,e.zone,e.order,e.statistics,e.createOrder]}}));t.RootModel=p},6233:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigModel=void 0;const r=n(29).BaseModel.named("Config").props({soundEnabled:!0,orderListPollIntervalSec:60,orderListSoundIntervalSec:60});t.ConfigModel=r},6234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserModel=void 0;var r,o=(r=n(287))&&r.__esModule?r:{default:r},a=n(11),i=n(26),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(175)),l=n(49),s=n(47),c=n(71),d=n(29),p=n(6278);var f=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const m=d.BaseModel.named("User").props({language:i.types.maybe(i.types.string),soundVolume:i.types.optional(i.types.number,25),soundIgnore:!1}).volatile(()=>({isLoaded:!1,branches:[],brands:[],soundEnabled:!1,permissions:null})).views(e=>({get branchesId(){return e.branches.map(u.prop("id"))},get defaultBranch(){if(0===e.branches.length)throw new Error("No user branches available to get defaultBranchId");return e.branches[0]},filterBranches:t=>e.branches.filter(t),canQuery:t=>null!==e.permissions&&e.permissions.queries.has(t.toLowerCase()),canMutate:t=>null!==e.permissions&&e.permissions.mutations.has(t.toLowerCase()),get isReady(){return e.isLoaded||!e.root.auth.isAuthenticated}})).actions(e=>({applyUserData(t){e.branches=t.branches,e.brands=s.RM.uniqBy(s.RM.prop("id"),t.branches.map(s.RM.prop("brand")))},applyUserPermissions(t){e.permissions=o.default.mapValues(t,({fields:e})=>new Set(e.map(s.RM.compose(s.RM.toLower,s.RM.prop("name")))))},setLanguage:(0,i.flow)(function*(t){(0,l.logLang)("changing to language %s from user profile",t),yield(0,c.changeLanguage)(t),e.language=t}),finishBootstrap(){e.isLoaded=!0},controlSound(t=!0,n=!1){e.soundEnabled=t,e.soundIgnore=n},setSoundVolume(t){e.soundVolume=t}})).actions(e=>{return{initUser:()=>new Promise(t=>{(0,a.autorun)(()=>{e.root.auth.userId?((0,l.logBootstrap)("query user"),e.language||e.setLanguage((0,c.detectLanguage)()),t((t=>f(void 0,void 0,void 0,function*(){const n={userId:t},{data:r}=yield e.client.query({query:p.UserModelBootstrapQuery,variables:n});e.setLanguage(r.user.language.rawCode),e.applyUserData(r.user),e.applyUserPermissions(r.permissions),e.finishBootstrap()}))(e.root.auth.userId))):((0,l.logBootstrap)("user not authenticated"),e.setLanguage((0,c.detectLanguage)()),t())})})}});t.UserModel=m},6275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeNumeralLocale=function(e){return a(this,void 0,void 0,function*(){yield n(6276)(`./${i[e]||e}`),o.default.locale(i[e]||e)})};var r,o=(r=n(147))&&r.__esModule?r:{default:r};var a=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const i={en:"en-gb"}},6276:function(e,t,n){var r={"./bg":[5835,2],"./bg.js":[5835,2],"./chs":[5836,3],"./chs.js":[5836,3],"./cs":[5837,4],"./cs.js":[5837,4],"./da-dk":[5838,5],"./da-dk.js":[5838,5],"./de":[5840,7],"./de-ch":[5839,6],"./de-ch.js":[5839,6],"./de.js":[5840,7],"./en-au":[5841,8],"./en-au.js":[5841,8],"./en-gb":[5842,9],"./en-gb.js":[5842,9],"./en-za":[5843,10],"./en-za.js":[5843,10],"./es":[5845,12],"./es-es":[5844,11],"./es-es.js":[5844,11],"./es.js":[5845,12],"./et":[5846,13],"./et.js":[5846,13],"./fi":[5847,14],"./fi.js":[5847,14],"./fr":[5850,17],"./fr-ca":[5848,15],"./fr-ca.js":[5848,15],"./fr-ch":[5849,16],"./fr-ch.js":[5849,16],"./fr.js":[5850,17],"./hu":[5851,18],"./hu.js":[5851,18],"./it":[5852,19],"./it.js":[5852,19],"./ja":[5853,20],"./ja.js":[5853,20],"./lv":[5854,21],"./lv.js":[5854,21],"./nl-be":[5855,22],"./nl-be.js":[5855,22],"./nl-nl":[5856,23],"./nl-nl.js":[5856,23],"./no":[5857,24],"./no.js":[5857,24],"./pl":[5858,25],"./pl.js":[5858,25],"./pt-br":[5859,26],"./pt-br.js":[5859,26],"./pt-pt":[5860,27],"./pt-pt.js":[5860,27],"./ru":[5862,29],"./ru-ua":[5861,28],"./ru-ua.js":[5861,28],"./ru.js":[5862,29],"./sk":[5863,30],"./sk.js":[5863,30],"./sl":[5864,31],"./sl.js":[5864,31],"./th":[5865,32],"./th.js":[5865,32],"./tr":[5866,33],"./tr.js":[5866,33],"./uk-ua":[5867,34],"./uk-ua.js":[5867,34],"./vi":[5868,35],"./vi.js":[5868,35]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=6276,e.exports=o},6277:function(e,t,n){var r={"./cs/messages.js":[7693,41],"./de/messages.js":[7694,42],"./en-dev/messages.js":[7696,44],"./en/messages.js":[7695,43],"./pl/messages.js":[7697,45],"./sk/messages.js":[7698,46]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=6277,e.exports=o},6278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserModelBootstrapQuery=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(96);const i=o.default`
  query GUserModelBootstrap($userId: ID!) {
    user(id: $userId) {
      id
      language {
        rawCode
      }
      branches: accessibleBranches {
        ...GCompanyBranch
      }
    }
    permissions: __schema {
      queries: queryType {
        fields {
          name
        }
      }
      mutations: mutationType {
        fields {
          name
        }
      }
      subscriptions: subscriptionType {
        fields {
          name
        }
      }
    }
  }

  ${a.CompanyBranchFragment}
`;t.UserModelBootstrapQuery=i},6279:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AddressFragment=void 0;const o=((r=n(21))&&r.__esModule?r:{default:r}).default`
  fragment GAddress on JsonAddress {
    state
    city
    street
    houseNumber
  }
`;t.AddressFragment=o},6280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(5650);const i=o.default`
  fragment GCompanyBranch on CompanyBranch {
    id
    name
    gps {
      ...GGeoPoint
    }
    brand {
      id
      name
    }
  }
  ${a.GeoPointFragment}
`;t.CompanyBranchFragment=i},6281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomerFragment=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(5651),i=n(5652);const u=o.default`
  fragment GCustomer on JsonCustomer {
    firstName
    lastName
    defaultEmail {
      ...GEmail
    }
    defaultPhone {
      ...GPhone
    }
  }
  ${a.EmailFragment}
  ${i.PhoneFragment}
`;t.CustomerFragment=u},6282:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PriceFragment=void 0;const o=((r=n(21))&&r.__esModule?r:{default:r}).default`
  fragment GPrice on PriceConverted {
    value
  }
`;t.PriceFragment=o},6283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateOrderModel=void 0;var r,o=(r=n(287))&&r.__esModule?r:{default:r},a=n(26),i=n(148),u=n(6284),l=n(47),s=n(29),c=n(7331);const d=s.BaseModel.named("CreateOrder").props({branchId:a.types.maybe(a.types.string)}).volatile(p).views(e=>({get currentBranch(){return e.root.user.branches.find(l.RM.propEq("id",e.branchId))||e.root.user.defaultBranch},get deliveryType(){return e.values.deliveryType},get isDelivery(){return e.values.deliveryType===i.DeliveryTypeEnum.Messenger},get hasAddress(){return Boolean(e.deliveryAddress||e.fakeAddress)},get gps(){if(this.isDelivery&&this.hasAddress){if(e.deliveryAddress&&e.deliveryAddress.gps)return f(e.deliveryAddress.gps);if(e.fakeAddress&&e.fakeAddress.gps)return f(e.fakeAddress.gps)}return Object.assign({},f(this.currentBranch.gps))},get phone(){return void 0!==e.values.phone?e.values.phone:e.callingPhone},get formValues(){if(null!==e.vamCustomer&&e.vamCustomer.isFound){const{firstName:t,lastName:n,email:r,lastOrder:a}=e.vamCustomer;return o.default.defaults(Object.assign({},e.values),{phone:this.phone,firstName:t,lastName:n,email:r,note:a&&a.note||""})}if(e.fakeValues){const{firstName:t,lastName:n,email:r,phone:a,note:i}=e.fakeValues;return o.default.defaults(Object.assign({},e.values),{phone:a,firstName:t,lastName:n,email:r,note:i})}return o.default.defaults(Object.assign({},e.values),{phone:e.callingPhone||""})},get hasOrder(){return null!==e.orderId},get cartRefreshKey(){return`${e.orderId||0}-${this.deliveryType}-${this.gps.longitude}-${this.gps.latitude}`},get acceptOrderVariables(){return{orderId:e.orderId,customer:{firstName:this.formValues.firstName,lastName:this.formValues.lastName,emails:this.formValues.email?[{email:this.formValues.email}]:null,phones:this.formValues.phone?[{phone:this.formValues.phone}]:null},note:this.formValues.note}}})).actions(e=>{const t=()=>{Object.assign(e,p())};return{ensureOrder:(0,a.flow)(function*(){if(null===e.orderId&&e.branchId){const t={branchId:e.currentBranch.id,deliveryType:e.values.deliveryType,gps:e.gps,callEventId:e.callingEventId},n=yield e.client.mutate({mutation:c.CreateOrderMutation,variables:t});n.data&&(e.orderId=n.data.createOrder.id)}return e.orderId}),cancelOrder:(0,a.flow)(function*(){if(!e.orderId)return void t();const n={orderId:e.orderId};e.client.mutate({mutation:c.CancelOrderMutation,variables:n}),t()}),resetOrder:()=>{e.orderId=null},resetModel:t}}).actions(e=>{const t=(0,a.flow)(function*(){if(!e.deliveryAddress||!e.deliveryAddress.gps)return void(e.notDeliveryLocation=!1);const{latitude:t,longitude:n}=e.deliveryAddress.gps,r={branchId:e.currentBranch.id,latitude:t,longitude:n},o=yield e.client.query({query:c.ValidateLocationQuery,variables:r});e.notDeliveryLocation=!o.data.resolveLocation.inDeliveryLocation});return{useLocation(n){e.deliveryAddress=n,t()},clearLocation(){e.deliveryAddress=void 0}}}).actions(e=>({selectBranch(t){e.branchId=t},userIsCalling(t,n){e.callingPhone=t,n&&(e.callingEventId=n)},updateFormValues(t,n){e.values=Object.assign({deliveryType:t.deliveryType},o.default.pick(t,Object.keys(n))),e.log("updated values: %j",e.values)},updateFromVam(t){e.vamCustomer=t,e.log("vam customer: %j",t)},updateFormWithFakeValues(){e.fakeValues={firstName:u.faker.name.firstName(),lastName:u.faker.name.lastName(),email:u.faker.internet.email(),phone:u.faker.phone.phoneNumberFormat(4),note:u.faker.lorem.sentence().slice(0,49)},e.fakeAddress={state:"",city:"Hradec Kr\xe1lov\xe9",street:"Opletalova",houseNumber:"334/2",gps:{latitude:50.2129839,longitude:15.8342836}}}}));function p(){return{orderId:null,callingPhone:void 0,callingEventId:void 0,values:{deliveryType:i.DeliveryTypeEnum.Messenger,phone:void 0,email:void 0,firstName:void 0,lastName:void 0,note:void 0},fakeAddress:void 0,fakeValues:void 0,deliveryAddress:void 0,vamCustomer:null,notDeliveryLocation:!1}}function f({latitude:e,longitude:t}){return{latitude:e,longitude:t}}t.CreateOrderModel=d},6284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"faker",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(5828))&&r.__esModule?r:{default:r};o.default.locale="cz"},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.appConfig=void 0;const r={fallbackLanguage:"en",supportedLanguages:["cs","sk","en","pl","de"],endpoint:"https://be.dev.admin.c2e.deep-vision.cloud",persistenceKey:"admin@local",pageTitleSuffix:"LOCAL",sentryDSN:""};t.appConfig=r,Object.assign(r,{endpoint:"https://c2e-p1.deep-vision.cloud",persistenceKey:"admin@prod",pageTitleSuffix:"Spe\u0258dlo",sentryDSN:"https://8838fede172840779e9f26fed441e44c@sentry.io/1354462"})},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.detectLanguage=function(){const e=new a.LocaleResolver([new a.NavigatorDetector],[new a.LanguageOnlyTransformer]).getLocales();return(0,d.logLang)("detected languages %s",e.join("; ")),e.find(e=>c.appConfig.supportedLanguages.includes(e))||c.appConfig.fallbackLanguage},t.changeLanguage=function(e){return m(this,void 0,void 0,function*(){return c.appConfig.supportedLanguages.includes(e)?(yield function(e){return m(this,void 0,void 0,function*(){let t;t=yield n(6277)(`./${e}/messages.js`),g.load({[e]:t}),(0,d.logLang)("loaded catalog %s",e)})}(e),g.activate(e),yield(0,p.changeNumeralLocale)(e),(0,d.logLang)("changed to %s",e),!0):((0,d.logLang)("language %s is not supported"),!1)})},t.I18nManager=t.i18n=void 0;var r=n(294),o=n(122),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(6235)),i=n(94),u=f(n(0)),l=f(n(98)),s=n(93),c=n(67),d=n(49),p=n(6275);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const g=(0,r.setupI18n)();t.i18n=g;t.I18nManager=(({children:e})=>{const{user:t}=(0,s.useRoot)();return(0,i.useObserver)(()=>t.language?u.default.createElement(o.I18nProvider,{language:t.language,i18n:g},u.default.Children.only(e)):u.default.createElement(l.default,null))})},7331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CancelOrderMutation=t.CreateOrderMutation=t.ValidateLocationQuery=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r};const a=o.default`
  query GValidateLocation(
    $branchId: ID!
    $latitude: Float!
    $longitude: Float!
  ) {
    resolveLocation(
      companyBranch: $branchId
      latitude: $latitude
      longitude: $longitude
    ) {
      inDeliveryLocation
    }
  }
`;t.ValidateLocationQuery=a;const i=o.default`
  mutation GCreateOrder(
    $branchId: ID!
    $deliveryType: DeliveryTypeEnum!
    $gps: InputGeoPointCreate!
    $callEventId: ID
  ) {
    createOrder(
      order: {
        companyBranch: $branchId
        deliveryType: $deliveryType
        callEventId: $callEventId
        gps: $gps
        customer: {}
        warePriceType: DELIVERY
        orderOrigin: STAFF
      }
    ) {
      id
    }
  }
`;t.CreateOrderMutation=i;const u=o.default`
  mutation MCancelOrder($orderId: ID!) {
    addOrderState(order: $orderId, orderState: CANCELED) {
      id
    }
  }
`;t.CancelOrderMutation=u},7332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderModel=void 0;var r=n(26),o=n(7333),a=n(7341),i=n(7344);const u=r.types.model("Order",{list:r.types.optional(o.OrderListModel,{}),map:r.types.optional(a.OrderMapModel,{}),state:r.types.optional(i.OrderStateModel,{})});t.OrderModel=u},7333:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.OrderListModel=void 0;var r=n(11),o=n(26),a=n(5799),i=n(148);const u=n(29).BaseModel.named("OrderList").props({branches:o.types.optional(o.types.array(o.types.string),[]),collapsedCategories:o.types.optional(o.types.array(o.types.string),[i.OrderStateCategoryEnum.Finished])}).views(e=>({get branchesFilter(){return e.branches.length?Array.from(e.branches):[]},get hasBranchFilter(){return e.branches.length>0},get isSingleBranchSelected(){return 1===e.branches.length},get firstBranchId(){return 1===e.branches.length?e.branches[0]:null},get orderMap(){return(0,o.getParent)(e).map}})).actions(e=>({clearBranchFilter(){e.branches.clear()},setBranchFilter(t){e.branches.replace(t)},panMapToOrder(t){e.orderMap.panToOrder(t.id)}})).extend(t=>{const n=(0,r.observable)(new Map);return{views:{isOrderDetailOpen:e=>n.has(e),isCategoryCollapsed:e=>t.collapsedCategories.includes(e)},actions:{toggleOrderDetail(e){const r=e.id;n.has(r)?n.delete(r):(n.set(r,!0),t.panMapToOrder(e))},toggleCategoryCollapse(e){const n=t.collapsedCategories.indexOf(e);n>=0?t.collapsedCategories.splice(n,1):t.collapsedCategories.push(e)},focusOrderDetail(t){n.has(t)||n.set(t,!0),e(()=>{a.scroller.scrollTo(`order-${t}`,{smooth:"easeInOutQuart",containerId:"order-list",absolute:!0,offset:-140})})}}}});t.OrderListModel=u}).call(this,n(225).setImmediate)},7341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapModel=void 0;var r=n(124),o=n(5657),a=n(7343),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const u=o.MapModel.named("OrderMap").actions(e=>({panToOrder(t){return i(this,void 0,void 0,function*(){if(!e.mapRef)return;const{data:n}=yield e.client.query({query:a.OrderLocationQuery,variables:{orderId:t}});n&&n.order.gps&&e.mapRef.panTo((0,r.gpsToLatLng)(n.order.gps))})},panToBranch(t){return i(this,void 0,void 0,function*(){const{data:n}=yield e.client.query({query:a.OrderBranchLocationQuery,variables:{branchId:t}});e.mapRef&&n&&e.mapRef.panTo((0,r.gpsToLatLng)(n.companyBranch.gps))})}}));t.OrderMapModel=u},7343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderLocationQuery=t.OrderBranchLocationQuery=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(96);const i=o.default`
  query GOrderBranchLocation($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      gps {
        ...GGeoPoint
      }
    }
  }
  ${a.GeoPointFragment}
`;t.OrderBranchLocationQuery=i;const u=o.default`
  query GOrderLocation($orderId: ID!) {
    order(id: $orderId) {
      id
      gps {
        ...GGeoPoint
      }
    }
  }
  ${a.GeoPointFragment}
`;t.OrderLocationQuery=u},7344:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateModel=void 0;var r=n(148),o=n(29),a=n(5789),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const u=o.BaseModel.named("OrderState").views(e=>({})).actions(e=>({updateOrderState(t,n){return i(this,void 0,void 0,function*(){const r={orderId:t,state:n};yield e.client.mutate({mutation:a.UpdateOrderStateMutation,variables:r})})}})).actions(e=>({deliverOrder:t=>e.updateOrderState(t,r.OrderStateEnum.OnWay),sendTimeNotification(t,n){return i(this,void 0,void 0,function*(){const r={orderId:t,minutes:n};yield e.client.mutate({mutation:a.SendOrderNotificationMutation,variables:r})})},selectDriver(t,n){return i(this,void 0,void 0,function*(){const r={orderId:t,driverId:n};yield e.client.mutate({mutation:a.SelectOrderDriverMutation,variables:r})})},removeDriver(t){return i(this,void 0,void 0,function*(){const n={orderDriverId:t};yield e.client.mutate({mutation:a.RemoveOrderDriverMutation,variables:n})})}}));t.OrderStateModel=u},7356:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StatisticsModel=void 0;var r=n(26),o=n(29),a=n(5829),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const u=o.BaseModel.named("Statistics").props({branches:r.types.optional(r.types.array(r.types.string),[]),closureBranch:r.types.maybeNull(r.types.string)}).volatile(e=>({dateFrom:new Date,dateTo:new Date})).views(e=>({get branchesFilter(){return e.branches.length>0?Array.from(e.branches):e.root.user.branchesId},get hasBranchFilter(){return e.branches.length>0}})).actions(e=>({updateFilter(t){e.dateFrom=new Date(t.dateFrom),e.dateTo=new Date(t.dateTo)},clearBranchFilter(){e.branches.clear()},setBranchFilter(t){e.branches.replace(t)},setClosureBranch(t){e.closureBranch=t},createClosure(){return i(this,void 0,void 0,function*(){if(e.closureBranch){const t={companyBranchId:e.closureBranch};return e.client.mutate({mutation:a.CreateFinancialReport,variables:t,refetchQueries:["GClosureReportQuery"]})}throw new Error("Tried to create a closure without branch selected")})}}));t.StatisticsModel=u},7357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsModel=void 0;var r=n(26),o=n(47),a=n(29),i=n(5800),u=n(7648);const l=a.BaseModel.named("Settings").props({selectedBranchId:r.types.maybe(r.types.string),businessHours:r.types.optional(i.BusinessHoursModel,{}),menu:r.types.optional(u.MenuModel,{})}).views(e=>({get branchId(){return e.selectedBranchId||o.RM.head(e.root.user.branchesId)},get queryProps(){const e=this.branchId;return e?{fetchPolicy:"cache-and-network",variables:{branchId:e}}:{skip:!0}},getQueryProps(e){const t=this.branchId;return t?{variables:Object.assign({branchId:t},e)}:{skip:!0}}})).actions(e=>({selectBranch(t){e.selectedBranchId=t}}));t.SettingsModel=l},7647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteSpecificBusinessHour=t.CreateSpecificBusinessHour=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(5830);const i=o.default`
  mutation GCreateSpecificBusinessHour(
    $input: InputBusinessHourSpecificDateCreate!
  ) {
    result: addSpecialBusinessHour(businessHour: $input) {
      ...GSpecificBusinessHour
    }
  }
  ${a.SpecificBusinessHourFragment}
`;t.CreateSpecificBusinessHour=i;const u=o.default`
  mutation GDeleteSpecificBusinessHour($id: ID!) {
    result: destroyBusinessHour(id: $id) {
      id
    }
  }
`;t.DeleteSpecificBusinessHour=u},7648:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuModel=void 0;var r=n(26),o=n(7649),a=n(5801),i=n(5802),u=n(7651);const l=o.SettingsBaseModel.named("Menu").props({category:r.types.optional(a.MenuCategoryModel,{}),recipe:r.types.optional(i.MenuRecipeModel,{}),stock:r.types.optional(u.MenuStockModel,{})});t.MenuModel=l},7649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsBaseModel=void 0;var r=n(26);const o=n(29).BaseModel.named("SettingsBase").views(e=>({get settings(){return(0,r.getParent)(e)}}));t.SettingsBaseModel=o},7650:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuCategoryDeleteMutation=t.MenuCategoryVisibility=t.MenuCategoryUpdateMutation=t.MenuCategoryCreateMutation=t.SortMenuCategoryMutation=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(5831);const i=o.default`
  mutation GSortMenuCategory($categoryId: ID!, $offset: Int!) {
    success: updateWareCategoriesOrder(
      wareCategory: $categoryId
      offset: $offset
    )
  }
`;t.SortMenuCategoryMutation=i;const u=o.default`
  mutation GMenuCategoryCreate($input: InputWareCategoryCreate!) {
    createWareCategory(wareCategory: $input) {
      id
    }
  }
`;t.MenuCategoryCreateMutation=u;const l=o.default`
  mutation GMenuCategoryUpdate(
    $categoryId: ID!
    $input: InputWareCategoryUpdate!
  ) {
    updateWareCategory(id: $categoryId, wareCategory: $input) {
      ...GMenuCategoryForm
    }
  }
  ${a.MenuCategoryFormFragment}
`;t.MenuCategoryUpdateMutation=l;const s=o.default`
  mutation GMenuCategoryVisibility($categoryId: ID!, $visible: Boolean!) {
    updateWareCategory(id: $categoryId, wareCategory: { enabled: $visible }) {
      id
      visible: enabled
    }
  }
`;t.MenuCategoryVisibility=s;const c=o.default`
  mutation GMenuCategoryDelete($categoryId: ID!) {
    destroyWareCategory(id: $categoryId) {
      id
    }
  }
`;t.MenuCategoryDeleteMutation=c},7651:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuStockModel=void 0;var r=n(164),o=n(5805),a=n(264),i=n(5756),u=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const l=a.MenuBaseModel.named("MenuStock").actions(e=>({createItem(t){const n={stockItem:Object.assign({companyBranch:e.branchId},s(t))};return(0,r.getQueryErrors)(e.client.mutate({mutation:i.MenuStockCreateMutation,variables:n,refetchQueries:[{query:o.MenuStockListQuery,variables:{branchId:e.branchId}}]}))},updateItem(t){const n={stockId:t.id,stockItem:Object.assign({},s(t))};return(0,r.getQueryErrors)(e.client.mutate({mutation:i.MenuStockUpdateMutation,variables:n}))},deleteItem(t){return u(this,void 0,void 0,function*(){const n={stockId:t};yield e.client.mutate({mutation:i.MenuStockDeleteMutation,variables:n,refetchQueries:[{query:o.MenuStockListQuery,variables:{branchId:e.branchId}}]})})}}));function s(e){return{code:e.code,label:e.nameLabel,note:e.note,plu:e.plu,allergens:e.allergens,wareUnit:e.wareUnit,allowNegative:e.allowNegative}}t.MenuStockModel=l},7652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZoneModel=void 0;var r=n(26),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(175)),a=n(99),i=n(124),u=n(47),l=n(29),s=n(7653),c=n(7654);var d=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const p=l.BaseModel.named("Zone").props({map:r.types.optional(s.ZoneMapModel,{}),brandId:r.types.maybeNull(r.types.string)}).volatile(()=>({branch:null})).views(e=>({get brand(){return e.brandId&&e.root.user.brands.find(u.RM.propEq("id",e.brandId))||null},get hasBranchFilter(){return null!==e.branch},get branchFilterId(){return null===e.branch?null:e.branch.id},get branchFilterPredicate(){return e.branch?o.propEq("id",e.branch.id):null===this.brand?()=>!1:o.pathSatisfies(o.equals(this.brand.id),["brand","id"])},get zoneFilterPredicate(){return null!==e.branch?o.pathSatisfies(o.equals(e.branch.id),["companyBranch","id"]):null===this.brand?()=>!1:o.pathSatisfies(o.equals(this.brand.id),["companyBranch","brand","id"])},get branches(){return e.root.user.branches}})).actions(e=>({setBranchFilter(t){e.branch=t,e.brandId=t.brand.id,e.map.panToBranch(t)},setBrandFilter(t,n){e.brandId=t.id,e.branch&&e.branch.brand.id===t.id||(e.branch=1===n.length&&u.RM.head(n)||null)},clearBranchFilter(){e.branch=null},clearBrandFilter(){e.brandId=null,e.branch=null}})).actions(e=>({createZone:(0,r.flow)(function*(t){if(null===e.branch)throw new a.VError("Called createZone without branch being set");const n=(0,i.generatePolygon)({center:e.branch.gps,metersRadius:1e3,pointsCount:5}),r={branchId:e.branch.id,points:n},{data:o}=yield e.client.mutate({mutation:c.CreateZoneMutation,variables:r,updateQueries:{GZones:(e,{mutationResult:t})=>{const n=t.data.createZone;return n?Object.assign({},e,{zones:e.zones.concat(n)}):e}}});if(o){t(o.createZone.id)}}),saveZone(t,n){return d(this,void 0,void 0,function*(){const r={zoneId:t,update:{name:n.name,enabled:n.enabled,companyBranch:n.companyBranch.id,zoneColor:n.zoneColor.id,minimalOrderPrice:{value:Number(n.minimalOrderPrice.value)||0},priceRangeRules:n.priceRangeRules.map(m).filter(o.reject(o.pathEq(["price","value"],null))),geoPolygon:e.map.currentZonePoints||void 0}};yield e.client.mutate({mutation:c.UpdateZoneMutation,variables:r,updateQueries:{GZones:(e,{mutationResult:n})=>{const r=e.zones.findIndex(o.propEq("id",t)),a=n.data.updateZone;return Object.assign({},e,{zones:o.update(r,a,e.zones)})}}}),e.map.clearZonePoints()})},destroyZone(t){if(!t)return;const n={zoneId:t};e.client.mutate({mutation:c.DestroyZoneMutation,variables:n,updateQueries:{GZones:e=>Object.assign({},e,{zones:o.reject(o.propEq("id",t),e.zones)})}})},changeZonePriority:(0,r.flow)(function*(t,n,r){if(!t||n===r)return;const o=n-r,a={zoneId:t.id,offset:o};yield e.client.mutate({mutation:c.UpdateZonePriorityMutation,variables:a,optimisticResponse:{__typename:"Mutation",updateZonePriority:{__typename:"Zone",id:t.id,priority:t.priority+o}}})})}));function f(e){if(null===e)return null;const t=Number(e);return Number.isNaN(t)?null:t}function m(e){return{price:{value:f(e.price.value)},toPrice:{value:f(e.toPrice.value)||-1}}}t.ZoneModel=p},7653:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZoneMapModel=void 0;var r=n(124),o=n(5657),a=n(289),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const u=o.MapModel.named("ZoneMap").volatile(()=>({currentZonePoints:null})).actions(e=>({updateZonePoints(t){e.currentZonePoints=t},clearZonePoints(){e.currentZonePoints=null},panToZone(t){return i(this,void 0,void 0,function*(){const{data:n}=yield e.client.query({query:a.ZoneLocationQuery,variables:{zoneId:t}});if(n){const{zone:{companyBranch:{gps:t}}}=n;e.mapRef&&e.mapRef.panTo((0,r.gpsToLatLng)(t))}})},panToBranch(t){return i(this,void 0,void 0,function*(){e.mapRef&&e.mapRef.panTo((0,r.gpsToLatLng)(t.gps))})}}));t.ZoneMapModel=u},7654:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DestroyZoneMutation=t.UpdateZonePriorityMutation=t.UpdateZoneMutation=t.CreateZoneMutation=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r},a=n(289);const i=o.default`
  mutation GCreateZone($branchId: ID!, $points: [InputGeoPointCreate!]) {
    createZone(zone: { companyBranch: $branchId, geoPolygon: $points }) {
      ...GZone
    }
  }
  ${a.ZoneFragment}
`;t.CreateZoneMutation=i;const u=o.default`
  mutation GUpdateZone($zoneId: ID!, $update: InputZoneUpdate!) {
    updateZone(id: $zoneId, zone: $update) {
      ...GZone
    }
  }
  ${a.ZoneFragment}
`;t.UpdateZoneMutation=u;const l=o.default`
  mutation GUpdateZonePriority($zoneId: ID!, $offset: Int!) {
    updateZonePriority(zone: $zoneId, offset: $offset) {
      id
      priority
    }
  }
`;t.UpdateZonePriorityMutation=l;const s=o.default`
  mutation GDestroyZone($zoneId: ID!) {
    destroyZone(id: $zoneId) {
      id
    }
  }
`;t.DestroyZoneMutation=s},7655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorContainer=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(7689),i=n(97);t.ErrorContainer=(({children:e,prod:t=!1})=>t?o.default.createElement(a.ProductionErrorBoundary,{dispatchErrorReporting:e=>{(0,i.reportRenderingError)(e.error,e.info)}},e):o.default.createElement(a.DeveloperErrorBoundary,null,e))},7666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Routing=void 0;var r=f(n(0)),o=n(24),a=f(n(98)),i=n(7667),u=n(275),l=n(301),s=n(7681),c=n(7682),d=n(7683),p=n(276);function f(e){return e&&e.__esModule?e:{default:e}}const m=r.default.lazy(()=>Promise.all([n.e(0),n.e(47)]).then(n.t.bind(null,7699,7))),g=r.default.lazy(()=>Promise.all([n.e(0),n.e(48)]).then(n.t.bind(null,7700,7))),y=r.default.lazy(()=>n.e(49).then(n.t.bind(null,7701,7))),v=r.default.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(36),n.e(37),n.e(50)]).then(n.t.bind(null,7702,7))),h=r.default.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(38),n.e(51)]).then(n.t.bind(null,7703,7))),b=r.default.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(38),n.e(52)]).then(n.t.bind(null,7704,7))),M=r.default.lazy(()=>n.e(53).then(n.t.bind(null,7705,7)));t.Routing=(()=>r.default.createElement(r.default.Suspense,{fallback:r.default.createElement(a.default,null)},r.default.createElement(s.LogRoute,null),r.default.createElement(c.RedirectAfterLogin,null),r.default.createElement(o.Switch,null,r.default.createElement(l.LazyRoute,{path:"/login",exact:!0,component:m}),r.default.createElement(l.LazyRoute,{path:"/recovery/:token",exact:!0,component:g}),r.default.createElement(l.LazyRoute,{path:"/register/:token",exact:!0,component:g}),r.default.createElement(p.SecureRoute,{path:"/",exact:!0,component:y}),r.default.createElement(p.SecureRoute,{path:"/order",component:v}),r.default.createElement(p.SecureRoute,{path:"/settings",component:h}),r.default.createElement(p.SecureRoute,{path:"/overview",component:b}),r.default.createElement(l.LazyRoute,{path:"/support",component:M}),r.default.createElement(o.Route,{path:"/error",component:i.ErrorPage}),r.default.createElement(o.Route,{path:"/logout",component:d.RedirectAfterLogout}),r.default.createElement(o.Route,{component:u.NotFoundPage}))))},7667:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorPage=void 0;var r=n(122),o=n(273),a=c(n(0)),i=c(n(45)),u=n(5781),l=n(71),s=n(5783);function c(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"IconStyled"})`
  margin-top: 2rem;
  color: #d39f40;
  text-align: center;
`;t.ErrorPage=(e=>a.default.createElement(s.FullPageLayout,{width:15,pageTitle:l.i18n._("Application error"),useBackButton:!0},a.default.createElement(u.Card,null,a.default.createElement("h3",null,a.default.createElement(r.Trans,{id:"We are sorry, but there is an internal error in the app. Our team was notified and will fix this soon."}),a.default.createElement(d,null,a.default.createElement(o.Warning,{style:{fontSize:"5rem"}}))))))},7675:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SoundControl=void 0,n(7676);var r=l(n(0)),o=l(n(45)),a=n(5777),i=n(46),u=n(95);function l(e){return e&&e.__esModule?e:{default:e}}const s=o.default.div.withConfig({displayName:"SoundControlContainerStyled"})`
  position: relative;
`,c=(0,o.default)(a.TouchButton).withConfig({displayName:"SoundButtonStyled"})`
  height: ${i.Spacing.ButtonHeight};
  width: ${i.Spacing.ButtonHeight};
  position: absolute;
  right: 0;
  top: 0;
`;t.SoundControl=class extends r.default.Component{constructor(){super(...arguments),this.state={playPreview:!1}}render(){return r.default.createElement(u.WithRoot,{observe:!0,render:({user:e})=>r.default.createElement(s,null,r.default.createElement(c,{color:e.soundEnabled?i.Colors.green:i.Colors.red,iconName:e.soundEnabled?"volume_up":"volume_off",iconSize:2,onClick:()=>{e.controlSound(!e.soundEnabled)}}))})}}},7678:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LogoutWidget=void 0;var r=d(n(0)),o=n(149),a=d(n(45)),i=n(150),u=n(95),l=n(71),s=n(46),c=n(7679);function d(e){return e&&e.__esModule?e:{default:e}}const p=a.default.div.withConfig({displayName:"LogoutWidgetStyled"})`
  margin-left: 1rem;
  color: ${s.Colors.greyLight};
  &:hover {
    color: ${s.Colors.white};
  }
`,f=a.default.span.withConfig({displayName:"LoggedUserNameStyled"})`
  color: ${s.Colors.greyLight};
  text-decoration: none;
  font-weight: lighter;
  position: relative;
  top: 0.6rem;
  display: inline-block;
  max-width: 10rem;
  text-align: right;
`,m=a.default.span.withConfig({displayName:"IconStyled"})`
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: inline-block;
  vertical-align: top;
`;t.LogoutWidget=(()=>r.default.createElement(u.WithRoot,{render:({auth:e})=>r.default.createElement(c.QueryLogoutWidget,{variables:{id:e.userId},renderLoading:()=>null,render:({user:e})=>r.default.createElement(p,{"data-testid":"logout-widget"},r.default.createElement(o.Link,{to:"/logout"},r.default.createElement(f,null,function(e){return e?`${e.firstName} ${e.lastName}`:l.i18n._("Not logged in")}(e)),r.default.createElement(m,null,r.default.createElement(i.Icon,{iconName:"exit_to_app"}))))})}))},7679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryLogoutWidget=void 0;var r,o=(r=n(21))&&r.__esModule?r:{default:r};const a=(0,n(61).buildQuery)(o.default`
  query GLogoutWidget($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
    }
  }
`);t.QueryLogoutWidget=a},7680:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HomeButton=void 0;var r=c(n(153)),o=c(n(0)),a=n(24),i=n(149),u=c(n(45)),l=n(150),s=n(46);function c(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};const f=e=>t=>(0,r.default)(t.color).alpha(e).string(),m=u.default.button.withConfig({displayName:"HomeButtonStyled"})`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 ${s.Radiuses.Button} 0 !important;
  height: ${s.Spacing.ButtonHeight};
  width: ${s.Spacing.ButtonHeight};
  margin: 0;
  padding: 0.2rem;
  border: none;
  border-radius: ${s.Radiuses.Button};
  background-color: ${f(.7)};
  color: white;
  position: relative;
  font-size: 1rem;
  transition-duration: 0.2s;

  &:hover:enabled {
    background-color: ${f(.9)};
  }
  &:active:enabled {
    background-color: ${f(1)};
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;t.HomeButton=(e=>{var{color:t=s.Colors.greyMiddle,iconColor:n=s.Colors.white,goBack:r=!1,backRoute:u}=e,c=p(e,["color","iconColor","goBack","backRoute"]);return r?o.default.createElement(a.Route,null,({history:e})=>o.default.createElement(m,d({color:t,onClick:()=>{u?e.push(u):e.goBack()}},c),o.default.createElement(l.Icon,{iconName:"chevron_left",color:n,fontSize:2.2}))):o.default.createElement(i.Link,{to:"/"},o.default.createElement(m,d({color:t},c),o.default.createElement(l.Icon,{iconName:"home",color:n,fontSize:2.2})))})},7681:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LogRoute=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(24),i=n(49);t.LogRoute=(e=>o.default.createElement(a.Route,null,({location:e})=>((0,i.logRouting)("at %s",e.pathname),null)))},7682:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RedirectAfterLogin=void 0;var r=l(n(146)),o=n(11),a=l(n(0)),i=n(24),u=n(95);function l(e){return e&&e.__esModule?e:{default:e}}const s=(0,r.default)("routing");t.RedirectAfterLogin=(()=>a.default.createElement(i.Route,{children:({location:e,history:t})=>a.default.createElement(u.WithRoot,{render:n=>{if(!n.auth.isAuthenticatedUser){const r=e.state&&e.state.origin||"/",a=()=>n.auth.isAuthenticated,i=()=>{t.replace(r)};(0,o.when)(a,i),s("will redirect to %s when auth",r)}return null}})}))},7683:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RedirectAfterLogout=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(24),i=n(95),u=n(5765);t.RedirectAfterLogout=(()=>o.default.createElement(i.WithRoot,{observe:!1,render:e=>e.auth.isAuthenticated?(e.auth.invalidate(),o.default.createElement(u.RedirectToLogin,{useOrigin:!1})):o.default.createElement(a.Redirect,{to:"/"})}))},7684:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(5832),i=n(149);t.Router=(({children:e})=>o.default.createElement(a.Provider,null,({handleGetUserConfirm:t})=>o.default.createElement(i.BrowserRouter,{getUserConfirmation:t},e)))},7685:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeProvider=void 0;var r,o=n(123),a=(r=n(0))&&r.__esModule?r:{default:r};t.ThemeProvider=(({children:e})=>{const t=(0,o.createMuiTheme)({typography:{useNextVariants:!0}});return a.default.createElement(o.MuiThemeProvider,{theme:t},e)})},7686:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateHandler=void 0;var r=n(123),o=n(7687),a=n(151),i=n(94),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),l=n(49),s=n(5791),c=n(5795),d=n(71);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function m(e){const{onConfirm:t,onCancel:n,getNow:o}=e,i=f(e,["onConfirm","onCancel","getNow"]),[l]=(0,u.useState)(()=>o()+e.autoHideDuration),s=(0,c.useTimer)({interval:c.SECOND,enabled:!0,getNow:o}),m=(0,a.formatDistanceStrict)(l,s);return u.default.createElement(r.Snackbar,p({open:!0,anchorOrigin:{vertical:"top",horizontal:"center"},message:u.default.createElement("span",{"data-testid":"message"},d.i18n._("Application will be restarted in {remainingSeconds} to apply available update.",{remainingSeconds:m})),disableWindowBlurListener:!0,action:[u.default.createElement(r.Button,{key:"later",color:"secondary",size:"small",role:"button","data-testid":"postpone-button",onClick:n},d.i18n._("Postpone update")),u.default.createElement(r.Button,{key:"confirm",color:"primary",size:"small",role:"button","data-testid":"confirm-button",onClick:t},d.i18n._("Restart now"))],onClose:n},i))}t.UpdateHandler=(({onRestart:e=(()=>window.location.reload()),autoUpdateDelay:t=20*c.SECOND,postponeTimeout:n=2*c.MINUTE,updateCheckInterval:r=1*c.HOUR,getNow:a=Date.now,children:d})=>{const p=(0,u.useRef)(null),f=(0,i.useObservable)({updatePending:!1,postponedAt:a()}),g=(0,u.useCallback)(t=>{"update-applied"===t.data&&((0,l.logMain)("restarting to apply update..."),e())},[]);(0,s.useEffectOnce)(()=>{let e;return o.serviceWorker.register({onInit:t=>{e=setInterval(()=>{(0,l.logMain)("checking for updates..."),t.update()},r),(0,l.logMain)("update handler initialized")},onUpdate:e=>{p.current=e,f.updatePending=!0,(0,l.logMain)("new update is available"),window.navigator.serviceWorker.addEventListener("message",g)}})(),()=>{window.navigator.serviceWorker.removeEventListener("message",g),e&&clearInterval(e)}});const y=(0,u.useCallback)(()=>{(0,l.logMain)("user postponed update"),f.updatePending=!1,setTimeout(()=>{(0,l.logMain)("reminding update to user again"),f.updatePending=!0},n)},[]),v=(0,u.useCallback)(()=>{f.updatePending=!1,p.current&&((0,l.logMain)("user confirmed update"),p.current.postMessage("apply-update"))},[]);return(0,i.useObserver)(()=>u.default.createElement(u.default.Fragment,null,f.updatePending?u.default.createElement(m,{autoHideDuration:t,onCancel:y,onConfirm:v,getNow:a}):null,d))})},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithRoot=t.useApolloClient=t.useRoot=t.RootProvider=t.ApolloContext=void 0;var r,o=n(122),a=n(123),i=n(5785),u=n(5792),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),s=n(281),c=n(279),d=n(6184),p=n(6185),f=n(6225),m=n(6227),g=n(5649),y=n(6232),v=(r=n(98))&&r.__esModule?r:{default:r};var h=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})};const b=(0,l.createContext)(void 0);t.ApolloContext=b;const M=i.css`
  background-color: ${a.colors.red[300]};
`;t.RootProvider=(({children:e})=>{const[t,n]=(0,l.useState)(void 0),[r,i]=(0,l.useState)(!1);return(0,m.useInitializer)(()=>h(void 0,void 0,void 0,function*(){const e=g.AuthModel.create({}),t=(0,p.createApolloClient)(e),r=y.RootModel.create({auth:e},{fetch:window.fetch,apolloClient:t});yield Promise.all(r.persistedModels.map(f.persistModel));try{yield r.user.initUser()}catch(o){o.networkError&&i(!0)}n(r)})),r?l.default.createElement(a.Snackbar,{anchorOrigin:{horizontal:"center",vertical:"top"},autoHideDuration:1/0,open:!0},l.default.createElement(a.SnackbarContent,{message:l.default.createElement(o.Trans,{id:"Communication with server has failed. Please retry the operation in a moment again."}),className:M,action:[l.default.createElement(a.Button,{key:"restart",onClick:()=>location.reload(),color:"secondary",size:"small",role:"button"},l.default.createElement(o.Trans,{id:"Restart application"}))]})):t?l.default.createElement(b.Provider,{value:t.client},l.default.createElement(s.ApolloProvider,{client:t.client},l.default.createElement(c.ApolloProvider,{client:t.client},l.default.createElement(d.RootContext.Provider,{value:t},l.Children.only(e))))):l.default.createElement(v.default,null)});const O=()=>{const e=(0,l.useContext)(d.RootContext);if(!e)throw new Error("RootProvider missing in the tree");return e};t.useRoot=O;t.useApolloClient=(()=>{const e=(0,l.useContext)(b);if(!e)throw new Error("ApolloContext.Provider missing in the tree");return e});t.WithRoot=(({children:e,observe:t=!0})=>{const n=O();return!0===t?l.default.createElement(u.Observer,null,()=>e(n)):e(n)})},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithRoot=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(93);t.WithRoot=(({render:e,observe:t})=>o.default.createElement(a.WithRoot,{children:e,observe:t}))},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AddressFragment",{enumerable:!0,get:function(){return r.AddressFragment}}),Object.defineProperty(t,"CompanyBranchFragment",{enumerable:!0,get:function(){return o.CompanyBranchFragment}}),Object.defineProperty(t,"CustomerFragment",{enumerable:!0,get:function(){return a.CustomerFragment}}),Object.defineProperty(t,"EmailFragment",{enumerable:!0,get:function(){return i.EmailFragment}}),Object.defineProperty(t,"GeoPointFragment",{enumerable:!0,get:function(){return u.GeoPointFragment}}),Object.defineProperty(t,"PhoneFragment",{enumerable:!0,get:function(){return l.PhoneFragment}}),Object.defineProperty(t,"PriceFragment",{enumerable:!0,get:function(){return s.PriceFragment}});var r=n(6279),o=n(6280),a=n(6281),i=n(5651),u=n(5650),l=n(5652),s=n(6282)},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reportError=t.reportFailingQuery=t.reportRenderingError=t.identifyUser=t.installSentry=void 0;var r,o=(r=n(5798))&&r.__esModule?r:{default:r},a=n(99),i=n(67),u=n(49);t.installSentry=(e=>{const{sentryDSN:t}=i.appConfig;t?((0,u.logSentry)("enabled with DSN %s",t),o.default.config(t,{environment:"prod"}).install(),o.default.context(e)):e()});t.identifyUser=(e=>{o.default.setUserContext({userId:e})});t.reportRenderingError=((e,t)=>{o.default.isSetup()&&o.default.captureException(e,{extra:t})});t.reportFailingQuery=((e,t)=>{e.forEach(e=>{o.default.captureMessage(e.message,{extra:e})}),o.default.captureException(new Error("Failed running a query"),{extra:t})});t.reportError=(e=>{let t={};return e instanceof a.VError&&(t=Object.assign({cause:a.VError.cause(e)},a.VError.info(e))),o.default.captureException(e,{extra:t}),e})},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(6243)),a=n(46);function i(e){return e&&e.__esModule?e:{default:e}}var u=({noMargin:e=!1})=>r.default.createElement("div",{style:{display:"flex",alignSelf:"center",justifyContent:"center"}},r.default.createElement(o.default,{name:"pacman",style:e?{}:{marginTop:"45vh",color:a.Colors.orange}}));t.default=u}},[[5869,57,56]]]);
//# sourceMappingURL=main.051a430f.chunk.js.map