(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reportError=t.reportFailingQuery=t.reportRenderingError=t.identifyUser=t.installSentry=void 0;var r,o=(r=n(5817))&&r.__esModule?r:{default:r},a=n(107),i=n(74),u=n(55);t.installSentry=(e=>{const{sentryDSN:t}=i.appConfig;t?((0,u.logSentry)("enabled with DSN %s",t),o.default.config(t,{environment:"prod"}).install(),o.default.context(e)):e()});t.identifyUser=(e=>{o.default.setUserContext({userId:e})});t.reportRenderingError=((e,t)=>{o.default.isSetup()&&o.default.captureException(e,{extra:t})});t.reportFailingQuery=((e,t)=>{e.forEach(e=>{o.default.captureMessage(e.message,{extra:e})}),o.default.captureException(new Error("Failed running a query"),{extra:t})});t.reportError=(e=>{let t={};return e instanceof a.VError&&(t=Object.assign({cause:a.VError.cause(e)},a.VError.info(e))),o.default.captureException(e,{extra:t}),e})},102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AddressFragment",{enumerable:!0,get:function(){return r.AddressFragment}}),Object.defineProperty(t,"CompanyBranchFragment",{enumerable:!0,get:function(){return o.CompanyBranchFragment}}),Object.defineProperty(t,"CustomerFragment",{enumerable:!0,get:function(){return a.CustomerFragment}}),Object.defineProperty(t,"EmailFragment",{enumerable:!0,get:function(){return i.EmailFragment}}),Object.defineProperty(t,"GeoPointFragment",{enumerable:!0,get:function(){return u.GeoPointFragment}}),Object.defineProperty(t,"PhoneFragment",{enumerable:!0,get:function(){return s.PhoneFragment}}),Object.defineProperty(t,"PriceFragment",{enumerable:!0,get:function(){return l.PriceFragment}});var r=n(6422),o=n(6423),a=n(6424),i=n(5661),u=n(5660),s=n(5662),l=n(6425)},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithRoot=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(99);t.WithRoot=(({render:e,observe:t})=>o.default.createElement(a.WithRoot,{children:e,observe:t}))},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(6384)),a=n(52);function i(e){return e&&e.__esModule?e:{default:e}}var u=({noMargin:e=!1})=>r.default.createElement("div",{style:{display:"flex",alignSelf:"center",justifyContent:"center"}},r.default.createElement(o.default,{name:"pacman",style:e?{}:{marginTop:"45vh",color:a.Colors.orange}}));t.default=u},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBoundsOfPoints=t.generatePolygon=t.latLngToGps=t.gpsToLatLng=void 0;var r=n(7484);t.gpsToLatLng=(e=>({lat:Number(e.latitude),lng:Number(e.longitude)}));t.latLngToGps=(e=>({latitude:Number(e.lat()),longitude:Number(e.lng())}));t.generatePolygon=(({center:e,metersRadius:t=1e3,pointsCount:n=15})=>new Array(n).fill(null).map((o,a)=>{const i=360/n*a;return(0,r.computeDestinationPoint)(e,t,i)}));t.getBoundsOfPoints=(e=>{const t=(0,r.getBounds)(e);return t?new google.maps.LatLngBounds({lat:t.minLat,lng:t.minLng},{lat:t.maxLat,lng:t.maxLng}):null})},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getQueryErrors=t.createErrorLink=t.errorHandler=void 0;var r=n(6356),o=n(101),a=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const i=({graphQLErrors:e,operation:t})=>{e&&(0,o.reportFailingQuery)(e,{query:t.operationName,variables:t.variables})};t.errorHandler=i;t.createErrorLink=(()=>(0,r.onError)(i));t.getQueryErrors=(e=>a(void 0,void 0,void 0,function*(){const t=yield e;return t&&t.errors?t.errors:null}))},171:function(e,t,n){"use strict";var r,o,a,i,u,s,l,c,d,p,f,m,g,y,v,h,b,M,O,E,P,_,C,I,j,S,R,w,D;Object.defineProperty(t,"__esModule",{value:!0}),t.SubscriptionActionType=t.SettingTypeEnum=t.MobilePlatformEnum=t.WareRequirementEnum=t.WareCategoryTypeEnum=t.WareUnitEnum=t.ShiftUserStateEnum=t.ZoneTypeEnum=t.OrderStateEnum=t.PaymentTypeEnum=t.PaymentGateEnum=t.OrderOriginEnum=t.OrderOnlineStateEnum=t.LanguageEnum=t.OrderRecipeStateEnum=t.DeliveryTypeEnum=t.OrderBillingTypeEnum=t.DeviceTypeEnum=t.DeviceStateEnum=t.FieldStateEnum=t.AvailabilityTypeEnum=t.WarePriceTypeEnum=t.AllergenEnum=t.WeekDayEnum=t.OrderStateCategoryEnum=t.OrderStateCategoryTargetEnum=t.CurrencyEnum=t.AddressTypeEnum=t.CompanyTypeEnum=void 0,t.CompanyTypeEnum=r,function(e){e.Client="CLIENT",e.Affiliate="AFFILIATE",e.Brand="BRAND"}(r||(t.CompanyTypeEnum=r={})),t.AddressTypeEnum=o,function(e){e.Business="BUSINESS",e.Premises="PREMISES",e.MainAddress="MAIN_ADDRESS"}(o||(t.AddressTypeEnum=o={})),t.CurrencyEnum=a,function(e){e.Czk="CZK",e.Hop="HOP",e.Eur="EUR",e.Usd="USD"}(a||(t.CurrencyEnum=a={})),t.OrderStateCategoryTargetEnum=i,function(e){e.Backend="BACKEND",e.FeAdmin="FE_ADMIN",e.FeKitchen="FE_KITCHEN"}(i||(t.OrderStateCategoryTargetEnum=i={})),t.OrderStateCategoryEnum=u,function(e){e.Payment="PAYMENT",e.Notification="NOTIFICATION",e.Reclamation="RECLAMATION",e.Delivery="DELIVERY",e.Cancel="CANCEL",e.Main="MAIN",e.Production="PRODUCTION",e.NewOrders="NEW_ORDERS",e.Preparing="PREPARING",e.OnWay="ON_WAY",e.Finished="FINISHED",e.ReadyToDeliver="READY_TO_DELIVER",e.InCart="IN_CART",e.Bills="BILLS"}(u||(t.OrderStateCategoryEnum=u={})),t.WeekDayEnum=s,function(e){e.Monday="MONDAY",e.Tuesday="TUESDAY",e.Wednesday="WEDNESDAY",e.Thursday="THURSDAY",e.Friday="FRIDAY",e.Saturday="SATURDAY",e.Sunday="SUNDAY"}(s||(t.WeekDayEnum=s={})),t.AllergenEnum=l,function(e){e.CerealsWithGlutten="CEREALS_WITH_GLUTTEN",e.Shellfish="SHELLFISH",e.Egg="EGG",e.Fish="FISH",e.Peanut="PEANUT",e.Soybeans="SOYBEANS",e.Milk="MILK",e.Nut="NUT",e.Celery="CELERY",e.Mustard="MUSTARD",e.Sesame="SESAME",e.Sulfurous="SULFUROUS",e.Lupin="LUPIN",e.Molluscs="MOLLUSCS"}(l||(t.AllergenEnum=l={})),t.WarePriceTypeEnum=c,function(e){e.Delivery="DELIVERY",e.Inhouse="INHOUSE"}(c||(t.WarePriceTypeEnum=c={})),t.AvailabilityTypeEnum=d,function(e){e.Main="MAIN"}(d||(t.AvailabilityTypeEnum=d={})),t.FieldStateEnum=p,function(e){e.Default="DEFAULT",e.Enabled="ENABLED",e.Disabled="DISABLED"}(p||(t.FieldStateEnum=p={})),t.DeviceStateEnum=f,function(e){e.Working="WORKING",e.Broken="BROKEN",e.Busy="BUSY",e.Free="FREE"}(f||(t.DeviceStateEnum=f={})),t.DeviceTypeEnum=m,function(e){e.Car="CAR",e.Plane="PLANE",e.Dron="DRON"}(m||(t.DeviceTypeEnum=m={})),t.OrderBillingTypeEnum=g,function(e){e.PriceSum="PRICE_SUM",e.Commission="COMMISSION",e.Fee="FEE",e.RewardResult="REWARD_RESULT",e.Affiliate="AFFILIATE"}(g||(t.OrderBillingTypeEnum=g={})),t.DeliveryTypeEnum=y,function(e){e.Pickup="PICKUP",e.Messenger="MESSENGER",e.Dron="DRON",e.Mail="MAIL"}(y||(t.DeliveryTypeEnum=y={})),t.OrderRecipeStateEnum=v,function(e){e.Fresh="FRESH",e.Preparing="PREPARING",e.Cooked="COOKED",e.Canceled="CANCELED",e.Completed="COMPLETED"}(v||(t.OrderRecipeStateEnum=v={})),t.LanguageEnum=h,function(e){e.Cs="CS",e.Sk="SK",e.En="EN"}(h||(t.LanguageEnum=h={})),t.OrderOnlineStateEnum=b,function(e){e.Created="CREATED",e.Pending="PENDING",e.Paid="PAID",e.Canceled="CANCELED",e.Completed="COMPLETED"}(b||(t.OrderOnlineStateEnum=b={})),t.OrderOriginEnum=M,function(e){e.Web="WEB",e.DameJidlo="DAME_JIDLO",e.MobilAndroid="MOBIL_ANDROID",e.MobilIos="MOBIL_IOS",e.Staff="STAFF",e.Wifi="WIFI",e.Baker="BAKER",e.WebPartner="WEB_PARTNER",e.Enigoo="ENIGOO",e.Mpizza="MPIZZA",e.Minisite="MINISITE",e.AffiliatePizzaRozvoz="AFFILIATE_PIZZA_ROZVOZ",e.AffiliateRozvozPizzyZdarma="AFFILIATE_ROZVOZ_PIZZY_ZDARMA",e.AffiliateRozvozJidla="AFFILIATE_ROZVOZ_JIDLA",e.CallCenter="CALL_CENTER"}(M||(t.OrderOriginEnum=M={})),t.PaymentGateEnum=O,function(e){e.Gopay="GOPAY",e.Paypal="PAYPAL",e.Credit="CREDIT",e.Cash="CASH"}(O||(t.PaymentGateEnum=O={})),t.PaymentTypeEnum=E,function(e){e.Cash="CASH",e.Credit="CREDIT",e.Voucher="VOUCHER"}(E||(t.PaymentTypeEnum=E={})),t.OrderStateEnum=P,function(e){e.InCart="IN_CART",e.Received="RECEIVED",e.InProgress="IN_PROGRESS",e.Finished="FINISHED",e.Reclamation="RECLAMATION",e.ReclamationHandled="RECLAMATION_HANDLED",e.Unpaid="UNPAID",e.Paid="PAID",e.ByCreditCard="BY_CREDIT_CARD",e.Refund="REFUND",e.ShouldBePaid="SHOULD_BE_PAID",e.CustomerNotified="CUSTOMER_NOTIFIED",e.New="NEW",e.Online="ONLINE",e.Evaluated="EVALUATED",e.NotEvaluated="NOT_EVALUATED",e.Shown="SHOWN",e.Accepted="ACCEPTED",e.ReadyToProduce="READY_TO_PRODUCE",e.InProduce="IN_PRODUCE",e.Made="MADE",e.ReadyToDeliver="READY_TO_DELIVER",e.OnWay="ON_WAY",e.StuckOnRoad="STUCK_ON_ROAD",e.Late="LATE",e.Delivered="DELIVERED",e.Cause="CAUSE",e.Handover="HANDOVER",e.WaitingForCustomer="WAITING_FOR_CUSTOMER",e.CustomerDidNotCome="CUSTOMER_DID_NOT_COME",e.DeliverRejected="DELIVER_REJECTED",e.CancelOnWay="CANCEL_ON_WAY",e.Canceled="CANCELED",e.BranchCancel="BRANCH_CANCEL",e.CustomerCancel="CUSTOMER_CANCEL",e.BillPassed="BILL_PASSED",e.BillPrinted="BILL_PRINTED",e.KitchenTicketPrinted="KITCHEN_TICKET_PRINTED"}(P||(t.OrderStateEnum=P={})),t.ZoneTypeEnum=_,function(e){e.Area="AREA",e.Table="TABLE",e.Sector="SECTOR"}(_||(t.ZoneTypeEnum=_={})),t.ShiftUserStateEnum=C,function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.WaitingForResponse="WAITING_FOR_RESPONSE",e.Unresolved="UNRESOLVED"}(C||(t.ShiftUserStateEnum=C={})),t.WareUnitEnum=I,function(e){e.Kilogram="KILOGRAM",e.Gram="GRAM",e.Litre="LITRE",e.Piece="PIECE"}(I||(t.WareUnitEnum=I={})),t.WareCategoryTypeEnum=j,function(e){e.Main="MAIN",e.SideDish="SIDE_DISH",e.Cover="COVER",e.Mixin="MIXIN"}(j||(t.WareCategoryTypeEnum=j={})),t.WareRequirementEnum=S,function(e){e.NoLimit="NO_LIMIT",e.Optional="OPTIONAL",e.MaxOne="MAX_ONE",e.Mandatory="MANDATORY"}(S||(t.WareRequirementEnum=S={})),t.MobilePlatformEnum=R,function(e){e.Android="ANDROID",e.Ios="IOS"}(R||(t.MobilePlatformEnum=R={})),t.SettingTypeEnum=w,function(e){e.Confirmation="CONFIRMATION",e.AdminOrderListing="ADMIN_ORDER_LISTING",e.Rules="RULES",e.Url="URL",e.Graphic="GRAPHIC",e.Options="OPTIONS"}(w||(t.SettingTypeEnum=w={})),t.SubscriptionActionType=D,function(e){e.Create="CREATE",e.Update="UPDATE",e.Destroy="DESTROY",e.Remove="REMOVE"}(D||(t.SubscriptionActionType=D={}))},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var r=i(n(0)),o=i(n(51)),a=n(52);function i(e){return e&&e.__esModule?e:{default:e}}const u=o.default.span.withConfig({displayName:"IconSpanStyled"})`
  font-size: ${({fontSize:e=1.5,fontSizeUnit:t="rem"})=>e+t} !important;
  color: ${e=>e.color};
`;t.Icon=(({iconName:e,color:t=a.Colors.white,fontSize:n,fontSizeUnit:o})=>e?r.default.createElement(u,{color:t,fontSize:n,fontSizeUnit:o,iconName:e,className:"material-icons"},e):null)},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.whenGoingOnline=function(e){return r.observe(t=>{!1===t.oldValue&&!0===t.newValue&&e()})},t.isNetworkOffline=t.isNetworkOnline=void 0;const r=n(11).observable.box(navigator.onLine);window.addEventListener("offline",()=>r.set(!1)),window.addEventListener("online",()=>r.set(!0));t.isNetworkOnline=(()=>r.get());t.isNetworkOffline=(()=>!r.get())},269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuBaseModel=void 0;var r=n(27);const o=n(30).BaseModel.named("MenuBase").volatile(()=>({filterInput:""})).actions(e=>({setFilterInput(t){e.filterInput=t}})).views(e=>({get branchId(){return(0,r.getParent)(e).settings.branchId}}));t.MenuBaseModel=o},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuRecipeDeleteMutation=t.MenuRecipeUpdateMutation=t.MenuRecipeCreateMutation=t.MenuRecipeVisibilityMutation=t.MenuRecipeFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(102);const i=o.default`
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
`;t.MenuRecipeVisibilityMutation=u;const s=o.default`
  mutation GMenuRecipeCreate($recipe: InputRecipeCreate!) {
    createRecipe(recipe: $recipe) {
      ...GMenuRecipe
    }
  }
  ${i}
`;t.MenuRecipeCreateMutation=s;const l=o.default`
  mutation GMenuRecipeUpdate($recipeId: ID!, $recipe: InputRecipeUpdate!) {
    updateRecipe(id: $recipeId, recipe: $recipe) {
      ...GMenuRecipe
    }
  }
  ${i}
`;t.MenuRecipeUpdateMutation=l;const c=o.default`
  mutation GMenuRecipeDelete($recipeId: ID!) {
    destroyRecipe(id: $recipeId) {
      id
    }
  }
`;t.MenuRecipeDeleteMutation=c},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SnackProvider=t.snackStyles=void 0;var r,o=n(5802),a=n(7791),i=(r=n(0))&&r.__esModule?r:{default:r},u=n(52);const s=o.css`
  background: ${u.Colors.green} !important;
  font-size: ${u.Spacing.InfoMessageFontSize} !important;
`,l={variantSuccess:s,variantInfo:s,variantError:o.css`
  background: ${u.Colors.red};
  font-size: ${u.Spacing.InfoMessageFontSize} !important;
`,variantWarning:o.css`
  background: ${u.Colors.orange};
  font-size: ${u.Spacing.InfoMessageFontSize} !important;
`};t.snackStyles=l;t.SnackProvider=(({children:e})=>i.default.createElement(a.SnackbarProvider,{maxSnack:3,classes:l,anchorOrigin:{horizontal:"center",vertical:"top"}},e))},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotFoundPage=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(287),i=n(78);t.NotFoundPage=(()=>o.default.createElement(o.default.Fragment,null,o.default.createElement(a.PageTitle,{title:i.i18n._("Not found")}),o.default.createElement("h1",null,i.i18n._("There is nothing here, sorry!"))))},284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SecureRoute=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(25),i=n(99),u=n(282),s=n(311),l=n(5778);var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.SecureRoute=(e=>{var{redirect:t=!0,lazy:n=!0}=e,r=c(e,["redirect","lazy"]);const{auth:d}=(0,i.useRoot)();if(!d.isAuthenticatedUser)return t?o.default.createElement(l.RedirectToLogin,null):o.default.createElement(u.NotFoundPage,null);if(r.component&&"object"===typeof r.component){const{component:e,path:t,exact:n}=r;return o.default.createElement(s.LazyRoute,{path:t,exact:n,component:e})}return o.default.createElement(a.Route,r)})},287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageTitle=void 0;var r=n(11),o=n(100),a=d(n(0)),i=n(25),u=d(n(51)),s=n(74),l=n(53),c=n(52);function d(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};const m=u.default.h1.withConfig({displayName:"TitleStyled"})`
  color: ${c.Colors.greyLight};
  font-weight: lighter;
  margin: 0.5rem 0.5rem 0 0.5rem;
  white-space: nowrap;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
`,g=r.observable.array([]);(0,r.autorun)(()=>{const e=Array.from(g).pop();document.title=e?`${e} :: ${s.appConfig.pageTitleSuffix}`:s.appConfig.pageTitleSuffix});class y extends a.default.Component{componentDidMount(){g.push(this.props.title)}componentDidUpdate(e){const t=g.findIndex(l.RM.equals(e.title));t>=0&&g.splice(t,1,this.props.title)}componentWillUnmount(){g.remove(this.props.title)}render(){return null}}t.PageTitle=y,y.Route=(e=>{var{title:t}=e,n=f(e,["title"]);return a.default.createElement(i.Route,p({},n,{render:()=>a.default.createElement(y,{title:t})}))}),y.Display=(()=>a.default.createElement(o.Observer,null,()=>a.default.createElement(m,null,g.join(" - "))))},294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CategoryListQuery=t.MenuCategoryListFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r};const a=o.default`
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
`;t.MenuCategoryListFragment=a;const i=o.default`
  query GCategoryList($branchId: ID!, $categoryType: WareCategoryTypeEnum!) {
    categories: wareCategories(
      companyBranch: $branchId
      wareCategoryType: $categoryType
    ) {
      ...GMenuCategoryListItem
    }
  }
  ${a}
`;t.CategoryListQuery=i},295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZoneColorsQuery=t.ZoneBranchLocationQuery=t.ZoneLocationQuery=t.ZoneFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(102);const i=o.default`
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
`;t.ZoneLocationQuery=u;const s=o.default`
  query GZoneBranchLocation($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      gps {
        ...GGeoPoint
      }
    }
  }
  ${a.GeoPointFragment}
`;t.ZoneBranchLocationQuery=s;const l=o.default`
  query GZoneColors {
    zoneColors {
      id
      code
      color
    }
  }
`;t.ZoneColorsQuery=l},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseModel=void 0;var r,o=(r=n(155))&&r.__esModule?r:{default:r},a=n(27),i=n(107);const u=a.types.model().views(e=>({get log(){return(0,o.default)(`model/${(0,a.getPath)(e)}`)},get client(){const t=(0,a.getEnv)(e).apolloClient;if(!t)throw new i.VError("Apollo client is missing from environment setup");return t},get root(){return(0,a.getRoot)(e)}}));t.BaseModel=u},311:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LazyRoute=function(e){var{component:t}=e,n=s(e,["component"]);return r.default.createElement(o.Route,u({},n,{render:e=>r.default.createElement(r.default.Suspense,{fallback:r.default.createElement(a.default,null)},r.default.createElement(t,e))}))};var r=i(n(0)),o=n(25),a=i(n(105));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Spacing=t.Radiuses=t.applyAlphaToColor=t.Colors=void 0;var r,o,a=(r=n(175))&&r.__esModule?r:{default:r},i=n(53);t.Colors=o,function(e){e.yellow="#FFDB2B",e.pink="#FF2B95",e.blue="#2441FF",e.red="#FF1C1C",e.green="#179B12",e.turquoise="#2BFFFF",e.orange="#FF862B",e.violet="#6D4F8C",e.black="#000000",e.greyDarkest="#080808",e.greyDark="#2C2C2C",e.greyMiddle="#939393",e.greyLight="#EDEDED",e.white="#FFFFFF"}(o||(t.Colors=o={}));const u=i.RM.curry((e,t)=>(0,a.default)(e).alpha(t).string());var s;t.applyAlphaToColor=u,t.Radiuses=s,function(e){e.Card="0.5rem",e.Button="0.5rem",e.TextComponent="0.25rem"}(s||(t.Radiuses=s={}));t.Spacing={MarginAroundFormComponents:"0.1rem",Small:"0.25rem",Middle:"0.5rem",LayoutGridCellMargin:"0.5rem",ButtonHeight:"3.4375rem",DefaultInputWidth:20,DefaultSizeUnit:"rem",ButtonColumnWidthPx:55,InfoMessageFontSize:"1.375rem"}},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RM=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(182));t.RM=r},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logTest=t.logLang=t.logSentry=t.logForm=t.logGraph=t.logAccess=t.logBootstrap=t.logPersistence=t.logRouting=t.logAuth=t.logError=t.logDebug=t.logMain=void 0;var r,o=(r=n(155))&&r.__esModule?r:{default:r};o.default.useColors=(()=>!1);const a=(0,o.default)("main");t.logMain=a;const i=(0,o.default)("debug");t.logDebug=i;const u=(0,o.default)("error");t.logError=u;const s=(0,o.default)("auth");t.logAuth=s;const l=(0,o.default)("routing");t.logRouting=l;const c=(0,o.default)("persistence");t.logPersistence=c;const d=(0,o.default)("bootstrap");t.logBootstrap=d;const p=(0,o.default)("access");t.logAccess=p;const f=(0,o.default)("graph");t.logGraph=f;const m=(0,o.default)("form");t.logForm=m;const g=(0,o.default)("sentry");t.logSentry=g;const y=(0,o.default)("lang");t.logLang=y;const v=console.log;t.logTest=v},5659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AuthModel=void 0;var r=n(6373),o=n(27),a=n(101),i=n(6374),u=n(6376),s=n(30),l=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const c=s.BaseModel.named("Auth").props({userId:o.types.optional(o.types.string,""),token:o.types.optional(o.types.string,""),provider:o.types.optional(i.LoginProviderModel,{})}).volatile(()=>({})).views(e=>({get isAuthenticated(){return e.token.length>0},get isAuthenticatedUser(){return this.isAuthenticated&&e.userId.length>0},get communicationToken(){return e.tokenForPasswordChange||e.token},get canCommunicate(){return this.isAuthenticated||void 0!==e.tokenForPasswordChange}})).actions(e=>({authenticate(t,n){e.token=t,e.userId=n,e.tokenForPasswordChange=void 0,e.log("authenticated with id %s",n),(0,a.identifyUser)(n)},invalidate(){e.token="",e.userId="",e.tokenForPasswordChange=void 0,e.client.cache.reset(),e.log("invalidated authentication"),(0,a.identifyUser)(null)}})).actions(e=>({setForPasswordChange(t){e.invalidate(),e.log("encoded token %s",t),e.tokenForPasswordChange=r.Base64.decode(t),e.log("using temp token %s",e.tokenForPasswordChange)},changePassword(t){return l(this,void 0,void 0,function*(){const n={password:t},r=yield e.client.mutate({mutation:u.PasswordChangeMutation,variables:n,fetchPolicy:"no-cache"}),{updateUserPassword:{id:o,token:a}}=r.data;a&&o&&(e.invalidate(),e.authenticate(a,o))})}})).preProcessSnapshot(e=>(e.userId&&(0,a.identifyUser)(e.userId),e));t.AuthModel=c},5660:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.GeoPointFragment=void 0;const o=((r=n(23))&&r.__esModule?r:{default:r}).default`
  fragment GGeoPoint on GeoPoint {
    latitude
    longitude
  }
`;t.GeoPointFragment=o},5661:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.EmailFragment=void 0;const o=((r=n(23))&&r.__esModule?r:{default:r}).default`
  fragment GEmail on Email {
    email
    description
    default
  }
`;t.EmailFragment=o},5662:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PhoneFragment=void 0;const o=((r=n(23))&&r.__esModule?r:{default:r}).default`
  fragment GPhone on Phone {
    phone
    description
    default
  }
`;t.PhoneFragment=o},5667:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapModel=void 0;var r=n(27),o=n(132);const a=49.8037633,i=15.4749126,u=n(30).BaseModel.named("Map").props({zoom:r.types.optional(r.types.number,12),latitude:r.types.optional(r.types.number,a),longitude:r.types.optional(r.types.number,i)}).volatile(e=>({mapRef:null})).views(e=>({get isReady(){return null!==e.mapRef},get center(){return(0,o.gpsToLatLng)(e)}})).actions(e=>({setMapRef(t){e.mapRef=t},updateZoom(){e.mapRef&&(e.zoom=e.mapRef.getZoom())},updatePosition(){if(e.mapRef){const t=e.mapRef.getCenter();e.latitude=t.lat(),e.longitude=t.lng()}}}));t.MapModel=u},5766:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuStockDeleteMutation=t.MenuStockUpdateMutation=t.MenuStockCreateMutation=t.MenuStockItemFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(5826),i=n(5827);const u=o.default`
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
`;t.MenuStockItemFragment=u;const s=o.default`
  mutation GMenuStockCreate($stockItem: InputStockItemCreate!) {
    createStockItem(stockItem: $stockItem) {
      ...GMenuStockItem
    }
  }
  ${u}
`;t.MenuStockCreateMutation=s;const l=o.default`
  mutation GMenuStockUpdate($stockId: ID!, $stockItem: InputStockItemUpdate!) {
    updateStockItem(id: $stockId, stockItem: $stockItem) {
      ...GMenuStockItem
    }
  }
  ${u}
`;t.MenuStockUpdateMutation=l;const c=o.default`
  mutation GMenuStockDelete($stockId: ID!) {
    destroyStockItem(id: $stockId) {
      id
    }
  }
`;t.MenuStockDeleteMutation=c},5778:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RedirectToLogin=void 0;var r=i(n(155)),o=i(n(0)),a=n(25);function i(e){return e&&e.__esModule?e:{default:e}}const u=(0,r.default)("routing");t.RedirectToLogin=(({useOrigin:e=!0})=>o.default.createElement(a.Route,{path:"/login",children:({match:t,location:n})=>t?null:(u("redirecting to login..."),o.default.createElement(a.Redirect,{to:{pathname:"/login",state:{origin:e?n.pathname:"/"}}}))}))},5794:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TouchButton=void 0;var r=u(n(0)),o=u(n(51)),a=n(173),i=n(52);function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};const c=e=>t=>(0,i.applyAlphaToColor)(t.color,e),d=o.default.button.withConfig({displayName:"TouchButtonStyled"})`
  min-height: ${i.Spacing.ButtonHeight};
  min-width: ${i.Spacing.ButtonHeight};
  width: ${({width:e="100%"})=>e};
  height: ${({height:e="100%"})=>e};
  margin: 0;
  padding: 0 0.2rem;
  border: none;
  border-radius: ${i.Radiuses.Button};
  background-color: ${c(.7)};
  color: white;
  position: relative;
  /* fallback font size for incompatible browsers */
  font-size: 1rem;
  font-size: calc(0.6rem + 0.5vw);
  transition-duration: 0.2s;

  & .material-icons {
    vertical-align: middle;
  }
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
`,m=r.default.forwardRef((e,t)=>{var{children:n,iconName:o,iconColor:u=i.Colors.white,iconSize:c=3,color:m=i.Colors.greyMiddle,textNextToIcon:g=!1,badge:y,text:v}=e,h=l(e,["children","iconName","iconColor","iconSize","color","textNextToIcon","badge","text"]);return r.default.createElement(d,s({color:m},h,{ref:t}),o&&r.default.createElement(a.Icon,{iconName:o,color:u,fontSize:c}),v&&g&&r.default.createElement(f,null,v),v&&!g&&r.default.createElement(p,null,v),y,n)});t.TouchButton=m},5798:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;var r,o=(r=n(175))&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(51)),i=n(52);const u=a.default.div.withConfig({displayName:"Card"})`
  background: ${function({color:e}){return(0,o.default)(e||i.Colors.greyLight).alpha(.8).lighten(.4).string()}};
  color: ${function(e){return e.textColor||i.Colors.black}};
  border-radius: ${i.Radiuses.Card};
  padding: ${function({padding:e=.5}){return e}}rem;
  margin: 0 0 0.5rem 0;
  position: relative;
  ${function({stretchToParent:e=!1}){if(!e)return"";return a.css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `}};
`;t.Card=u,u.displayName="Card"},5799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatAddress=t.formatTimeWithoutTodayDate=t.formatPrice=t.priceFormat=t.formatDateTime=t.dateTimeFormat=t.formatTime=t.timeFormat=t.formatDateISO=t.dateFormatISO=t.formatDate=t.dateFormat=t.formatFullDate=t.fullDateFormat=t.formatLocale=t.currentLocale=void 0;var r=n(104),o=n(5668),a=u(n(7777)),i=u(n(170));function u(e){return e&&e.__esModule?e:{default:e}}const s=a.default;t.currentLocale=s;const l=(0,o.formatWithOptions)({locale:s});t.formatLocale=l;t.fullDateFormat="dddd LL";const c=l("dddd LL");t.formatFullDate=c;t.dateFormat="D.M.YYYY";const d=l("D.M.YYYY");t.formatDate=d;t.dateFormatISO="YYYY-MM-DD";const p=(0,o.format)("YYYY-MM-DD");t.formatDateISO=p;t.timeFormat="H:mm";const f=l("H:mm");t.formatTime=f;t.dateTimeFormat="D.M.YYYY H:mm";const m=l("D.M.YYYY H:mm");t.formatDateTime=m;t.priceFormat="0,0.[00]";t.formatPrice=(e=>(0,i.default)(e).format("0,0.[00]"));t.formatTimeWithoutTodayDate=(e=>(0,r.isSameDay)(e,new Date)?f(e):m(e));t.formatAddress=(e=>e.street?e.houseNumber?`${e.street} ${e.houseNumber}, ${e.city}`:`${e.street}, ${e.city}`:e.city?`${e.city} ${e.houseNumber}, ${e.state}`:`${e.state}`)},5800:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullPageLayout=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(5803);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.FullPageLayout=(e=>{var{children:t,width:n=16}=e,r=u(e,["children","width"]);return o.default.createElement(a.PageLayout,i({layouts:function(e){return[{i:"full",x:0,y:1,w:e,h:10}]}(n)},r),o.default.createElement("div",{key:"full"},t))})},5803:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageLayout=void 0;var r=d(n(0)),o=d(n(51)),a=n(5828),i=n(287),u=n(7817),s=n(7820),l=n(284),c=n(7822);function d(e){return e&&e.__esModule?e:{default:e}}const p=o.default.div.withConfig({displayName:"TopLeftButtonContainer"})`
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
`;t.PageLayout=(({pageTitle:e="",layouts:t=[],hideLogoutWidget:n=!1,showSoundControl:o=!1,useBackButton:d=!1,scrollPageTitle:f=!0,backRoute:v,children:h})=>r.default.createElement(r.default.Fragment,null,e&&r.default.createElement(i.PageTitle,{title:e}),o&&r.default.createElement(y,null,r.default.createElement(u.SoundControl,null)),!n&&r.default.createElement(m,{scrollPageTitle:f},r.default.createElement(l.SecureRoute,{path:"/",component:s.LogoutWidget,redirect:!1})),r.default.createElement(g,{scrollPageTitle:f},r.default.createElement(i.PageTitle.Display,null)),r.default.createElement(a.GridLayout,{layouts:[...t]},h),r.default.createElement(p,null,r.default.createElement(c.HomeButton,{goBack:d,backRoute:v}))))},5805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChangeOrderToPickupMutation=t.RemoveOrderDriverMutation=t.SelectOrderDriverMutation=t.SendOrderNotificationMutation=t.UpdateOrderStateMutation=t.OrderStateCategoryFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(5809);const i=o.default`
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
`;t.UpdateOrderStateMutation=u;const s=o.default`
  mutation GSendOrderNotification($orderId: ID!, $minutes: Int!) {
    orderNotifyCustomer(id: $orderId, minutes: $minutes) {
      id
      deliverAt
    }
  }
`;t.SendOrderNotificationMutation=s;const l=o.default`
  mutation GSelectOrderDriver($driverId: ID!, $orderId: ID!) {
    createUserDeliveringOrder(user: $driverId, order: $orderId) {
      order {
        ...GOrderDriver
      }
    }
  }
  ${a.OrderDriverFragment}
`;t.SelectOrderDriverMutation=l;const c=o.default`
  mutation GRemoveOrderDriver($orderDriverId: ID!) {
    destroyUserDeliveringOrder(id: $orderDriverId) {
      order {
        ...GOrderDriver
      }
    }
  }
  ${a.OrderDriverFragment}
`;t.RemoveOrderDriverMutation=c;const d=o.default`
  mutation MChangeOrderToPickup($orderId: ID!) {
    updateOrderDeliveryToPickup(id: $orderId) {
      id
      deliveryType {
        enum
      }
    }
  }
`;t.ChangeOrderToPickupMutation=d},5807:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r};t.Loading=(({text:e="..."})=>o.default.createElement("h1",null,e))},5809:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryDriverSelection=t.OrderDriverFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(79);const i=o.default`
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
`;t.OrderDriverFragment=u;const s=o.default`
  query GOrderDriverSelection($orderId: ID!, $branchId: [ID!]!) {
    order(id: $orderId) {
      ...GOrderDriver
    }
    drivers(companyBranches: $branchId, onlyAvailable: true) {
      ...GDriver
    }
  }
  ${u}
`,l=(0,a.buildQuery)(s);t.QueryDriverSelection=l},5810:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useEffectOnce=void 0;var r=n(0);t.useEffectOnce=(e=>(0,r.useEffect)(e,[]))},5812:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTimer=t.HOUR=t.MINUTE=t.SECOND=void 0;var r,o=(r=n(310))&&r.__esModule?r:{default:r},a=n(0),i=n(5853);t.SECOND=1e3;t.MINUTE=6e4;t.HOUR=36e5;t.useTimer=(({interval:e,enabled:t,getNow:n=Date.now,nextTick:r=o.default,cancelTick:u=o.default.cancel})=>{const[s,l]=(0,i.useStateRef)(n),c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{const o=()=>{const t=n();t-s()>=e&&l(t),i()},a=()=>{c.current&&(u(c.current),c.current=null)},i=()=>{t?c.current=r(o):a()};return i(),a},[e,t]),s()})},5818:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CancelOrderMutation=t.CreateOrderMutation=t.ValidateLocationQuery=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r};const a=o.default`
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
`;t.CancelOrderMutation=u},5820:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BusinessHoursModel=t.ESpecificHourMode=void 0;var r,o=n(27),a=n(5799),i=n(53),u=n(30),s=n(7783);t.ESpecificHourMode=r,function(e){e.TIMESPAN="TIMESPAN",e.FULLDAY="FULLDAY"}(r||(t.ESpecificHourMode=r={}));const l=i.RM.complement(i.RM.propEq("id")),c=u.BaseModel.named("BusinessHours").props({specificMode:o.types.optional(o.types.enumeration(["TIMESPAN","FULLDAY"]),r.TIMESPAN)}).actions(e=>({changeSpecificMode(t){e.specificMode=t},submitSpecificHour(t){const n={input:{companyBranch:e.root.settings.branchId,specificDate:t.date,closed:e.specificMode===r.FULLDAY,openAt:t.openAt&&(0,a.formatTime)(t.openAt),closeAt:t.closeAt&&(0,a.formatTime)(t.closeAt),closedNote:t.note}};e.client.mutate({mutation:s.CreateSpecificBusinessHour,variables:n,updateQueries:{GSpecificBusinessHours:(e,{mutationResult:t})=>t.data?{businessHours:e.businessHours.concat(t.data.result)}:e}})},deleteSpecificHour(t){const n={id:t};e.client.mutate({mutation:s.DeleteSpecificBusinessHour,variables:n,updateQueries:{GSpecificBusinessHours:(e,{mutationResult:t})=>t.data?{businessHours:e.businessHours.filter(l(t.data.result.id))}:e}})}}));t.BusinessHoursModel=c},5821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCategoryRoute=t.MenuCategoryModel=void 0;var r=n(160),o=n(53),a=n(294),i=n(269),u=n(7786),s=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const l=i.MenuBaseModel.named("MenuCategory").actions(e=>({sortCategory(t,n){return s(this,void 0,void 0,function*(){const r={categoryId:t,offset:n},o=yield e.client.mutate({mutation:u.SortMenuCategoryMutation,variables:r});return Boolean(o.data&&o.data.success)})},changeVisibility(t,n){e.client.mutate({mutation:u.MenuCategoryVisibility,variables:{categoryId:t,visible:n},optimisticResponse:{updateRecipe:{__typename:"Recipe",id:t,visible:n}}})},createCategory(t,n){const o={input:Object.assign({companyBranch:e.branchId,wareCategoryType:n},c(t,n))};return(0,r.getQueryErrors)(e.client.mutate({mutation:u.MenuCategoryCreateMutation,variables:o,refetchQueries:[{query:a.CategoryListQuery,variables:{branchId:e.branchId,categoryType:n}}]}))},updateCategory(t,n){return s(this,void 0,void 0,function*(){const o={categoryId:t.id,input:Object.assign({},c(t,n))};return(0,r.getQueryErrors)(e.client.mutate({mutation:u.MenuCategoryUpdateMutation,variables:o}))})},deleteCategory(t,n){return s(this,void 0,void 0,function*(){const r={categoryId:t};yield e.client.mutate({mutation:u.MenuCategoryDeleteMutation,variables:r,refetchQueries:[{query:a.CategoryListQuery,variables:{branchId:e.branchId,categoryType:n}}]})})}}));function c(e,t){return Object.assign({nameLabel:e.nameLabel,internalNoteLabel:e.internalNoteLabel,enabled:e.visible,pictogram:e.pictogram,recipes:e.recipes.map(o.RM.prop("id"))})}t.MenuCategoryModel=l;t.getCategoryRoute=((e,t)=>({pathname:e,state:{categoryType:t}}))},5822:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRecipeRoute=t.MenuRecipeModel=void 0;var r,o=(r=n(170))&&r.__esModule?r:{default:r},a=n(160),i=n(53),u=n(5823),s=n(5824),l=n(269),c=n(270);var d=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const p=l.MenuBaseModel.named("MenuRecipe").volatile(()=>({categoryFilterId:null})).actions(e=>({changeVisibility(t,n){e.client.mutate({mutation:c.MenuRecipeVisibilityMutation,variables:{recipeId:t,visible:n},optimisticResponse:{updateRecipe:{__typename:"Recipe",id:t,visible:n}}})},setCategoryFilter(t){e.categoryFilterId=t},createRecipe(t,n){const r={recipe:Object.assign({companyBranch:e.branchId,wareCategoryType:n},f(t))};return(0,a.getQueryErrors)(e.client.mutate({mutation:c.MenuRecipeCreateMutation,variables:r,refetchQueries:[{query:s.MenuRecipeListQuery,variables:{branchId:e.branchId}}]}))},updateRecipe(t){const n={recipeId:t.id,recipe:Object.assign({},f(t))};return(0,a.getQueryErrors)(e.client.mutate({mutation:c.MenuRecipeUpdateMutation,variables:n}))},deleteRecipe(t){return d(this,void 0,void 0,function*(){const n={recipeId:t};yield e.client.mutate({mutation:c.MenuRecipeDeleteMutation,variables:n,refetchQueries:[{query:s.MenuRecipeListQuery,variables:{branchId:e.branchId}}]})})},queryDefaults(){return d(this,void 0,void 0,function*(){const{data:t}=yield e.client.query({query:u.MenuRecipeDefaults,variables:{branchId:e.branchId}}),{companyBranch:{vats:n,currency:{code:r}}}=t;return{vats:n.reduce((e,{vatId:t,priceType:n})=>(e[n.enum]=t,e),{}),currencyCode:r}})}}));function f(e){return{code:e.code,nameLabel:e.nameLabel,internalNote:e.internalNote,descriptionLabel:e.descriptionLabel,enabled:e.visible,prices:Object.keys(e.prices).map(t=>({warePriceType:t,price:{value:(0,o.default)(e.prices[t].value).value()},vat:e.prices[t].vatId})),sideDishCategories:e.sideDishes.map(i.RM.prop("id")),wareCategories:e.categories.map(i.RM.prop("id")),associatedRecipes:e.associatedRecipes.map(i.RM.pick(["associatedRecipe","warePriceType"])),ingredients:e.ingredients.map(({stockItem:e,quantity:t})=>({stockItem:e,quantity:function(e){return"number"===typeof e?e:Number.parseFloat(e.replace(",","."))}(t)}))}}t.MenuRecipeModel=p;t.getRecipeRoute=((e,t)=>({pathname:e,state:{recipeType:t}}))},5823:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryMenuRecipeFormAssoc=t.MenuRecipeDefaults=t.MenuRecipeFormAssocQuery=t.MenuRecipeFormQuery=t.MenuAssocRecipeFragment=t.MenuRecipePriceFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(79),i=n(102),u=n(294);const s=o.default`
  fragment GMenuRecipePrice on RecipePrice {
    id
    priceType: warePriceType {
      enum
    }
    price {
      currency {
        code
      }
      ...GPrice
    }
    vat {
      id
    }
  }
  ${i.PriceFragment}
`;t.MenuRecipePriceFragment=s;const l=o.default`
  fragment GMenuAssocRecipe on Recipe {
    id
    nameLabel
  }
`;t.MenuAssocRecipeFragment=l;const c=o.default`
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
  ${s}
  ${u.MenuCategoryListFragment}
  ${l}
`;t.MenuRecipeFormQuery=c;const d=o.default`
  query GMenuRecipeFormAssoc($branchId: ID!) {
    recipes(companyBranch: $branchId) {
      ...GMenuAssocRecipe
    }
  }
  ${l}
`;t.MenuRecipeFormAssocQuery=d;const p=o.default`
  query GMenuRecipeDefaults($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      vats: defaultVats {
        vatId: id
        priceType: warePriceType {
          enum
        }
      }
      currency: defaultCurrency {
        code
      }
    }
  }
`;t.MenuRecipeDefaults=p;const f=(0,a.buildQuery)(d);t.QueryMenuRecipeFormAssoc=f},5824:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryRecipeList=t.MenuRecipeListQuery=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(79),i=n(270);const u=o.default`
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
`;t.MenuRecipeListQuery=u;const s=(0,a.buildQuery)(u);t.QueryRecipeList=s},5825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryMenuStockList=t.MenuStockListQuery=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(79),i=n(5766);const u=o.default`
  query GMenuStockList($branchId: ID!) {
    stockItems(companyBranch: $branchId) {
      ...GMenuStockItem
    }
  }
  ${i.MenuStockItemFragment}
`;t.MenuStockListQuery=u;const s=(0,a.buildQuery)(u);t.QueryMenuStockList=s},5826:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AllergenFragment=void 0;const o=((r=n(23))&&r.__esModule?r:{default:r}).default`
  fragment GAllergen on Allergen {
    id
    code
    enum
    category
  }
`;t.AllergenFragment=o},5827:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.WareUnitFragment=void 0;const o=((r=n(23))&&r.__esModule?r:{default:r}).default`
  fragment GWareUnit on WareUnit {
    id
    enum
    code
  }
`;t.WareUnitFragment=o},5828:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GridLayout=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7810));const i=(0,a.WidthProvider)(a.default);t.GridLayout=(({children:e,layouts:t})=>o.default.createElement(i,{className:"layout",layout:t,cols:16,rowHeight:55,margin:[8,8],autoSize:!1,isDraggable:!1,isResizable:!1,compactType:null,measureBeforeMount:!0},e))},5839:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SoundPlayInterval=void 0;var r=s(n(0)),o=s(n(6307)),a=n(55),i=n(6315),u=n(103);function s(e){return e&&e.__esModule?e:{default:e}}t.SoundPlayInterval=(({intervalSec:e,soundUrl:t,shouldPlay:n=!0,skipEnableChecks:s=!1})=>r.default.createElement(u.WithRoot,{observe:!0,render:({config:u,user:l})=>{if(!s){if(!u.soundEnabled)return(0,a.logMain)("sound is disabled"),null;if(!l.soundEnabled)return(0,a.logMain)("sound not enabled by user"),null}return(0,a.logMain)("sound play status: %s",n),r.default.createElement(i.IntervalRender,{intervalSec:e,enabled:n,render:({isActive:e,nextLoop:n})=>r.default.createElement(o.default,{url:t,playStatus:e?"PLAYING":"STOPPED",onFinishedPlaying:n,loop:!1,autoLoad:!0,volume:l.soundVolume})})}}))},5849:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.CreateFinancialReport=void 0;const o=((r=n(23))&&r.__esModule?r:{default:r}).default`
  mutation GCreateFinancialReport($companyBranchId: ID!) {
    result: createFinancialReport(companyBranchId: $companyBranchId) {
      id
    }
  }
`;t.CreateFinancialReport=o},5850:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QuerySpecificBusinessHours=t.SpecificBusinessHourFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(79);const i=o.default`
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
`);t.QuerySpecificBusinessHours=u},5851:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuCategoryFormQuery=t.MenuCategoryFormFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(270);const i=o.default`
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
`;t.MenuCategoryFormQuery=u},5853:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStateRef=function(e){const[t,n]=(0,r.useState)(e),o=(0,r.useRef)(null);return o.current=t,[()=>o.current,n]};var r=n(0)},6011:function(e,t,n){e.exports=n(6012)},6012:function(e,t,n){"use strict";n(6013);var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(24),i=n(6018),u=n(99),s=n(7826),l=n(7827),c=n(7828),d=n(101),p=n(78);const f=()=>o.default.createElement(l.ThemeProvider,null,o.default.createElement(u.RootProvider,null,o.default.createElement(p.I18nManager,null,o.default.createElement(c.UpdateHandler,null,o.default.createElement(s.Router,null,o.default.createElement(i.App,null))))));(0,d.installSentry)(()=>{const e=document.getElementById("root");(0,a.render)(o.default.createElement(f,null),e)})},6013:function(e,t,n){"use strict";window.localStorage.setItem("debug","*,-sockjs*")},6018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0,n(6019);var r=n(100),o=d(n(0)),a=n(6024),i=n(7797),u=d(n(105)),s=n(99),l=n(271),c=n(7808);function d(e){return e&&e.__esModule?e:{default:e}}t.App=(()=>{const{user:e}=(0,s.useRoot)();return o.default.createElement(i.ErrorContainer,{prod:!0},o.default.createElement(o.default.Fragment,null,o.default.createElement(a.ConnectionWarning,null),o.default.createElement(l.SnackProvider,null,o.default.createElement(r.Observer,null,()=>e.isReady?o.default.createElement(c.Routing,null):o.default.createElement(u.default,null)))))})},6019:function(e,t,n){},6024:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectionWarning=void 0;var r=n(130),o=n(131),a=n(279),i=n(100),u=f(n(0)),s=f(n(51)),l=f(n(6299)),c=n(224),d=n(52),p=n(5839);function f(e){return e&&e.__esModule?e:{default:e}}const m=s.default.div.withConfig({displayName:"MessageStyled"})`
  padding: 1rem;
  background-color: ${d.Colors.red} !important;
  font-size: 2rem;

  & svg {
    position: relative;
    top: 0.3rem;
    padding-right: 0.5rem;
  }
`,g=(0,i.observer)(()=>u.default.createElement(u.default.Fragment,null,u.default.createElement(p.SoundPlayInterval,{shouldPlay:(0,c.isNetworkOffline)(),intervalSec:30,soundUrl:l.default}),u.default.createElement(o.Dialog,{open:(0,c.isNetworkOffline)(),disableBackdropClick:!0,disableEscapeKeyDown:!0},u.default.createElement(m,null,u.default.createElement(a.WarningTwoTone,{fontSize:"large"}),u.default.createElement(r.Trans,{id:"Internet connection is not available"})))));t.ConnectionWarning=g},6299:function(e,t,n){e.exports=n.p+"static/media/connectionWarning.ac6fe03b.mp3"},6315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IntervalRender=void 0;var r=n(104),o=n(0);t.IntervalRender=class extends o.Component{constructor(){super(...arguments),this.state={isActive:!1,nextTime:this.getNextTime()},this.timer=0,this.executeTimer=(()=>{if(this.timer&&(clearTimeout(this.timer),this.timer=0),!1===this.props.enabled)return;const e=(0,r.differenceInMilliseconds)(this.state.nextTime,new Date);this.timer=setTimeout(this.activate,e)}),this.activate=(()=>{!1!==this.props.enabled&&this.setState({isActive:!0,nextTime:this.getNextTime()})}),this.deactivate=(()=>{this.setState({isActive:!1}),this.executeTimer()})}componentDidMount(){this.executeTimer()}componentDidUpdate(){this.executeTimer()}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}getNextTime(){return(0,r.addSeconds)(new Date,this.props.intervalSec)}render(){const{isActive:e}=this.state;return this.props.render({isActive:e,nextLoop:this.deactivate})}}},6330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RootContext=void 0;const r=(0,n(0).createContext)(void 0);t.RootContext=r},6331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createApolloClient=function(e){const t=new r.InMemoryCache({dataIdFromObject:e=>null!=e.__typename&&null!=e.id?`${e.__typename}-${e.id}`:null}),n=(0,f.default)(e),y=new s.RetryLink({delay:{initial:300,max:1/0,jitter:!0},attempts:{max:5,retryIf:(e,t)=>!!e}}),v=function(){const e=new u.default;return(0,l.autorun)(()=>{(0,p.isNetworkOnline)()?((0,d.logGraph)("client is online"),e.open()):((0,d.logGraph)("client is offline"),e.close())}),e}(),h=(0,m.createErrorLink)(),b=new i.BatchHttpLink({uri:`${c.appConfig.endpoint}/graphql`,credentials:"same-origin"}),M=(0,g.default)(e);return new o.ApolloClient({link:a.ApolloLink.from([n,y,v,h]).split(g.isSubscriptionOperation,M,b),cache:t})};var r=n(7831),o=n(5779),a=n(19),i=n(7832),u=y(n(6337)),s=n(7833),l=n(11),c=n(74),d=n(55),p=n(224),f=y(n(6339)),m=n(160),g=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(6362));function y(e){return e&&e.__esModule?e:{default:e}}},6339:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=(0,a.computed)(()=>({Authorization:`Bearer ${e.communicationToken}`}));return new o.ApolloLink((n,r)=>{if(!e.canCommunicate)throw new i.default(`Executing operation ${n.operationName} before authenticated`,{operation:n});const a=n.getContext();return n.setContext(Object.assign({},a,{headers:t.get()})),new o.Observable(t=>{const o=r(n).subscribe({error:n=>{n.result&&"INVALID_TOKEN"===n.result.code?e.invalidate():t.error(n)},next:t.next.bind(t),complete:t.complete.bind(t)});return()=>o.unsubscribe()})})};var r,o=n(19),a=n(11),i=(r=n(107))&&r.__esModule?r:{default:r}},6345:function(e,t){},6347:function(e,t){},6362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=(0,s.computed)(()=>`${c.appConfig.endpoint}/cable?token=${e.token}`);let n;const r={};return new a.ApolloLink(i=>{if(!e.isAuthenticated)throw new l.VError(`Executing operation ${i.operationName} before authenticated`,{operation:i});return n||(n=o.default.createConsumer(t.get())),new a.Observable(e=>{const t=d(),o=n.subscriptions.create(Object.assign({},{channel:"GraphqlChannel",channelId:t},r),{connected:function(){this.perform("execute",{query:i.query?(0,u.print)(i.query):null,variables:i.variables,operationId:i.operationId,operationName:i.operationName})},received:function(t){t.result.data&&e.next(t.result),t.more||(this.unsubscribe(),e.complete())}});return o})})},t.isSubscriptionOperation=function({query:e}){const{operation:t}=(0,i.getOperationDefinitionOrDie)(e);return"subscription"===t};var r,o=(r=n(6363))&&r.__esModule?r:{default:r},a=n(19),i=n(32),u=n(6364),s=n(11),l=n(107),c=n(74);const d=()=>Math.round(Date.now()+1e5*Math.random()).toString(16)},6371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.persistModel=function(e){return s(this,void 0,void 0,function*(){const t=(0,a.getType)(e).name,n=`${l}_${t}`,r=e=>o.default.setItem(n,e);try{const t=yield o.default.getItem(n);null!==t?((0,a.applySnapshot)(e,t),(0,u.logPersistence)("restored state %s",n)):(yield r((0,a.getSnapshot)(e)),(0,u.logPersistence)("initialized state %s",n))}catch(i){(0,u.logPersistence)("persistence failed",i),o.default.removeItem(n)}(0,a.onSnapshot)(e,r)})};var r,o=(r=n(6372))&&r.__esModule?r:{default:r},a=n(27),i=n(74),u=n(55);var s=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const l=i.appConfig.persistenceKey},6374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoginProviderModel=void 0;var r=n(27),o=n(30),a=n(6375);const i=o.BaseModel.named("LoginProvider").props({passwordLogin:r.types.optional(a.PasswordLoginModel,{})}).actions(e=>({authenticate(t,n){(0,r.getParent)(e).authenticate(t,n)}}));t.LoginProviderModel=i},6375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createPasswordLoginModelMock=t.PasswordLoginModel=void 0;var r=n(27),o=n(74),a=n(30),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const u=a.BaseModel.named("PasswordLogin").volatile(e=>({errorCode:"",errorMessage:""})).views(e=>({get hasFailed(){return Boolean(e.errorCode)}})).actions(e=>({setFailure(t,n){e.errorCode=t,e.errorMessage=n},setSuccess(t,n){(0,r.getParent)(e).authenticate(t,n)}})).actions(e=>({requestToken(t,n){return i(this,void 0,void 0,function*(){const r=(({username:e,password:t})=>`${o.appConfig.endpoint}/users/token?username=${e}&password=${t}`)({username:t,password:n}),a=window.fetch,i=yield a(r,{headers:{Accept:"application/json"}}),u=yield i.json();e.log("received payload %j",u),200!==i.status?(e.setFailure(u.code,u.error),e.log("token request failed for username %s",t)):(e.setSuccess(u.token,String(u.userId)),e.log("token request success for username %s [%s]",t,u.userId))})}}));t.PasswordLoginModel=u;t.createPasswordLoginModelMock=((e={},t)=>u.create(Object.assign({},e),t))},6376:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordChangeMutation=void 0;const o=((r=n(23))&&r.__esModule?r:{default:r}).default`
  mutation MPasswordChange($password: String!) {
    updateUserPassword(newPassword: $password) {
      id
      token
    }
  }
`;t.PasswordChangeMutation=o},6377:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RootModel=void 0;var r=n(27),o=n(5659),a=n(6378),i=n(6379),u=n(6426),s=n(7474),l=n(7493),c=n(7494),d=n(7788);const p=n(30).BaseModel.named("Root").props({auth:r.types.optional(o.AuthModel,{}),user:r.types.optional(i.UserModel,{}),order:r.types.optional(s.OrderModel,{}),createOrder:r.types.optional(u.CreateOrderModel,{}),zone:r.types.optional(d.ZoneModel,{}),settings:r.types.optional(c.SettingsModel,{}),config:r.types.optional(a.ConfigModel,{}),statistics:r.types.optional(l.StatisticsModel,{})}).views(e=>({get persistedModels(){return[e.auth,e.user,e.settings,e.zone,e.order,e.statistics,e.createOrder]}}));t.RootModel=p},6378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigModel=void 0;const r=n(30).BaseModel.named("Config").props({soundEnabled:!0,orderListPollIntervalSec:60,orderListSoundIntervalSec:60});t.ConfigModel=r},6379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserModel=void 0;var r,o=(r=n(293))&&r.__esModule?r:{default:r},a=n(11),i=n(27),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(182)),s=n(55),l=n(53),c=n(78),d=n(30),p=n(6421);var f=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const m=d.BaseModel.named("User").props({language:i.types.maybe(i.types.string),soundVolume:i.types.optional(i.types.number,25),soundIgnore:!1}).volatile(()=>({isLoaded:!1,branches:[],brands:[],soundEnabled:!1,access:null,permissions:{canCancelOrders:!1,canCreateOrder:!1}})).views(e=>({get branchesId(){return e.branches.map(u.prop("id"))},get defaultBranch(){if(0===e.branches.length)throw new Error("No user branches available to get defaultBranchId");return e.branches[0]},filterBranches:t=>e.branches.filter(t),canQuery:t=>null!==e.access&&e.access.queries.has(t.toLowerCase()),canMutate:t=>null!==e.access&&e.access.mutations.has(t.toLowerCase()),get isReady(){return e.isLoaded||!e.root.auth.isAuthenticated}})).actions(e=>({applyUserData(t){e.branches=t.branches,e.brands=l.RM.uniqBy(l.RM.prop("id"),t.branches.map(l.RM.prop("brand")))},applyUserPermissions(t){e.permissions=t},applyUserAccess(t){e.access=o.default.mapValues(t,({fields:e})=>new Set(e.map(l.RM.compose(l.RM.toLower,l.RM.prop("name")))))},setLanguage:(0,i.flow)(function*(t){(0,s.logLang)("changing to language %s from user profile",t),yield(0,c.changeLanguage)(t),e.language=t}),finishBootstrap(){e.isLoaded=!0},controlSound(t=!0,n=!1){e.soundEnabled=t,e.soundIgnore=n},setSoundVolume(t){e.soundVolume=t}})).actions(e=>{return{initUser:()=>new Promise(t=>{(0,a.autorun)(()=>{e.root.auth.userId?((0,s.logBootstrap)("query user"),e.language||e.setLanguage((0,c.detectLanguage)()),t((t=>f(void 0,void 0,void 0,function*(){const n={userId:t},{data:r}=yield e.client.query({query:p.UserModelBootstrapQuery,variables:n});e.setLanguage(r.user.language.rawCode),e.applyUserData(r.user),e.applyUserAccess(r.userAccess),e.applyUserPermissions(r.userPermissions),e.finishBootstrap()}))(e.root.auth.userId))):((0,s.logBootstrap)("user not authenticated"),e.setLanguage((0,c.detectLanguage)()),t())})})}});t.UserModel=m},6416:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeMomentLocale=function(e){return a(this,void 0,void 0,function*(){if("en"===e)return void o.default.locale(e);const t=yield n(6417)(`./${e}`);o.default.updateLocale(e,t)})};var r,o=(r=n(5793))&&r.__esModule?r:{default:r};var a=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})}},6417:function(e,t,n){var r={"./af":[5854,3],"./af.js":[5854,3],"./ar":[5861,10],"./ar-dz":[5855,4],"./ar-dz.js":[5855,4],"./ar-kw":[5856,5],"./ar-kw.js":[5856,5],"./ar-ly":[5857,6],"./ar-ly.js":[5857,6],"./ar-ma":[5858,7],"./ar-ma.js":[5858,7],"./ar-sa":[5859,8],"./ar-sa.js":[5859,8],"./ar-tn":[5860,9],"./ar-tn.js":[5860,9],"./ar.js":[5861,10],"./az":[5862,11],"./az.js":[5862,11],"./be":[5863,12],"./be.js":[5863,12],"./bg":[5864,13],"./bg.js":[5864,13],"./bm":[5865,14],"./bm.js":[5865,14],"./bn":[5866,15],"./bn.js":[5866,15],"./bo":[5867,16],"./bo.js":[5867,16],"./br":[5868,17],"./br.js":[5868,17],"./bs":[5869,18],"./bs.js":[5869,18],"./ca":[5870,19],"./ca.js":[5870,19],"./cs":[5871,20],"./cs.js":[5871,20],"./cv":[5872,21],"./cv.js":[5872,21],"./cy":[5873,22],"./cy.js":[5873,22],"./da":[5874,23],"./da.js":[5874,23],"./de":[5877,26],"./de-at":[5875,24],"./de-at.js":[5875,24],"./de-ch":[5876,25],"./de-ch.js":[5876,25],"./de.js":[5877,26],"./dv":[5878,27],"./dv.js":[5878,27],"./el":[5879,28],"./el.js":[5879,28],"./en-au":[5880,29],"./en-au.js":[5880,29],"./en-ca":[5881,30],"./en-ca.js":[5881,30],"./en-gb":[5882,31],"./en-gb.js":[5882,31],"./en-ie":[5883,32],"./en-ie.js":[5883,32],"./en-il":[5884,33],"./en-il.js":[5884,33],"./en-nz":[5885,34],"./en-nz.js":[5885,34],"./eo":[5886,35],"./eo.js":[5886,35],"./es":[5889,38],"./es-do":[5887,36],"./es-do.js":[5887,36],"./es-us":[5888,37],"./es-us.js":[5888,37],"./es.js":[5889,38],"./et":[5890,39],"./et.js":[5890,39],"./eu":[5891,40],"./eu.js":[5891,40],"./fa":[5892,41],"./fa.js":[5892,41],"./fi":[5893,42],"./fi.js":[5893,42],"./fo":[5894,43],"./fo.js":[5894,43],"./fr":[5897,46],"./fr-ca":[5895,44],"./fr-ca.js":[5895,44],"./fr-ch":[5896,45],"./fr-ch.js":[5896,45],"./fr.js":[5897,46],"./fy":[5898,47],"./fy.js":[5898,47],"./gd":[5899,48],"./gd.js":[5899,48],"./gl":[5900,49],"./gl.js":[5900,49],"./gom-latn":[5901,50],"./gom-latn.js":[5901,50],"./gu":[5902,51],"./gu.js":[5902,51],"./he":[5903,52],"./he.js":[5903,52],"./hi":[5904,53],"./hi.js":[5904,53],"./hr":[5905,54],"./hr.js":[5905,54],"./hu":[5906,55],"./hu.js":[5906,55],"./hy-am":[5907,56],"./hy-am.js":[5907,56],"./id":[5908,57],"./id.js":[5908,57],"./is":[5909,58],"./is.js":[5909,58],"./it":[5910,59],"./it.js":[5910,59],"./ja":[5911,60],"./ja.js":[5911,60],"./jv":[5912,61],"./jv.js":[5912,61],"./ka":[5913,62],"./ka.js":[5913,62],"./kk":[5914,63],"./kk.js":[5914,63],"./km":[5915,64],"./km.js":[5915,64],"./kn":[5916,65],"./kn.js":[5916,65],"./ko":[5917,66],"./ko.js":[5917,66],"./ky":[5918,67],"./ky.js":[5918,67],"./lb":[5919,68],"./lb.js":[5919,68],"./lo":[5920,69],"./lo.js":[5920,69],"./lt":[5921,70],"./lt.js":[5921,70],"./lv":[5922,71],"./lv.js":[5922,71],"./me":[5923,72],"./me.js":[5923,72],"./mi":[5924,73],"./mi.js":[5924,73],"./mk":[5925,74],"./mk.js":[5925,74],"./ml":[5926,75],"./ml.js":[5926,75],"./mn":[5927,76],"./mn.js":[5927,76],"./mr":[5928,77],"./mr.js":[5928,77],"./ms":[5930,79],"./ms-my":[5929,78],"./ms-my.js":[5929,78],"./ms.js":[5930,79],"./mt":[5931,80],"./mt.js":[5931,80],"./my":[5932,81],"./my.js":[5932,81],"./nb":[5933,82],"./nb.js":[5933,82],"./ne":[5934,83],"./ne.js":[5934,83],"./nl":[5936,85],"./nl-be":[5935,84],"./nl-be.js":[5935,84],"./nl.js":[5936,85],"./nn":[5937,86],"./nn.js":[5937,86],"./pa-in":[5938,87],"./pa-in.js":[5938,87],"./pl":[5939,88],"./pl.js":[5939,88],"./pt":[5941,90],"./pt-br":[5940,89],"./pt-br.js":[5940,89],"./pt.js":[5941,90],"./ro":[5942,91],"./ro.js":[5942,91],"./ru":[5943,92],"./ru.js":[5943,92],"./sd":[5944,93],"./sd.js":[5944,93],"./se":[5945,94],"./se.js":[5945,94],"./si":[5946,95],"./si.js":[5946,95],"./sk":[5947,96],"./sk.js":[5947,96],"./sl":[5948,97],"./sl.js":[5948,97],"./sq":[5949,98],"./sq.js":[5949,98],"./sr":[5951,100],"./sr-cyrl":[5950,99],"./sr-cyrl.js":[5950,99],"./sr.js":[5951,100],"./ss":[5952,101],"./ss.js":[5952,101],"./sv":[5953,102],"./sv.js":[5953,102],"./sw":[5954,103],"./sw.js":[5954,103],"./ta":[5955,104],"./ta.js":[5955,104],"./te":[5956,105],"./te.js":[5956,105],"./tet":[5957,106],"./tet.js":[5957,106],"./tg":[5958,107],"./tg.js":[5958,107],"./th":[5959,108],"./th.js":[5959,108],"./tl-ph":[5960,109],"./tl-ph.js":[5960,109],"./tlh":[5961,110],"./tlh.js":[5961,110],"./tr":[5962,111],"./tr.js":[5962,111],"./tzl":[5963,112],"./tzl.js":[5963,112],"./tzm":[5965,114],"./tzm-latn":[5964,113],"./tzm-latn.js":[5964,113],"./tzm.js":[5965,114],"./ug-cn":[5966,115],"./ug-cn.js":[5966,115],"./uk":[5967,116],"./uk.js":[5967,116],"./ur":[5968,117],"./ur.js":[5968,117],"./uz":[5970,119],"./uz-latn":[5969,118],"./uz-latn.js":[5969,118],"./uz.js":[5970,119],"./vi":[5971,120],"./vi.js":[5971,120],"./x-pseudo":[5972,121],"./x-pseudo.js":[5972,121],"./yo":[5973,122],"./yo.js":[5973,122],"./zh-cn":[5974,123],"./zh-cn.js":[5974,123],"./zh-hk":[5975,124],"./zh-hk.js":[5975,124],"./zh-tw":[5976,125],"./zh-tw.js":[5976,125]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=6417,e.exports=o},6418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeNumeralLocale=function(e){return a(this,void 0,void 0,function*(){"en"!==e?(yield n(6419)(`./${e}`),o.default.locale(e)):o.default.locale(e)})};var r,o=(r=n(170))&&r.__esModule?r:{default:r};var a=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})}},6419:function(e,t,n){var r={"./bg":[5977,126],"./bg.js":[5977,126],"./chs":[5978,127],"./chs.js":[5978,127],"./cs":[5979,128],"./cs.js":[5979,128],"./da-dk":[5980,129],"./da-dk.js":[5980,129],"./de":[5982,131],"./de-ch":[5981,130],"./de-ch.js":[5981,130],"./de.js":[5982,131],"./en-au":[5983,132],"./en-au.js":[5983,132],"./en-gb":[5984,133],"./en-gb.js":[5984,133],"./en-za":[5985,134],"./en-za.js":[5985,134],"./es":[5987,136],"./es-es":[5986,135],"./es-es.js":[5986,135],"./es.js":[5987,136],"./et":[5988,137],"./et.js":[5988,137],"./fi":[5989,138],"./fi.js":[5989,138],"./fr":[5992,141],"./fr-ca":[5990,139],"./fr-ca.js":[5990,139],"./fr-ch":[5991,140],"./fr-ch.js":[5991,140],"./fr.js":[5992,141],"./hu":[5993,142],"./hu.js":[5993,142],"./it":[5994,143],"./it.js":[5994,143],"./ja":[5995,144],"./ja.js":[5995,144],"./lv":[5996,145],"./lv.js":[5996,145],"./nl-be":[5997,146],"./nl-be.js":[5997,146],"./nl-nl":[5998,147],"./nl-nl.js":[5998,147],"./no":[5999,148],"./no.js":[5999,148],"./pl":[6e3,149],"./pl.js":[6e3,149],"./pt-br":[6001,150],"./pt-br.js":[6001,150],"./pt-pt":[6002,151],"./pt-pt.js":[6002,151],"./ru":[6004,153],"./ru-ua":[6003,152],"./ru-ua.js":[6003,152],"./ru.js":[6004,153],"./sk":[6005,154],"./sk.js":[6005,154],"./sl":[6006,155],"./sl.js":[6006,155],"./th":[6007,156],"./th.js":[6007,156],"./tr":[6008,157],"./tr.js":[6008,157],"./uk-ua":[6009,158],"./uk-ua.js":[6009,158],"./vi":[6010,159],"./vi.js":[6010,159]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=6419,e.exports=o},6420:function(e,t,n){var r={"./cs/messages.js":[7834,164],"./de/messages.js":[7835,165],"./en-dev/messages.js":[7837,167],"./en/messages.js":[7836,166],"./pl/messages.js":[7838,168],"./sk/messages.js":[7839,169]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=6420,e.exports=o},6421:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserModelBootstrapQuery=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(102);const i=o.default`
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
    userPermissions: permissions {
      canCancelOrders
      canCreateOrder
    }
    userAccess: __schema {
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
`;t.UserModelBootstrapQuery=i},6422:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AddressFragment=void 0;const o=((r=n(23))&&r.__esModule?r:{default:r}).default`
  fragment GAddress on JsonAddress {
    state
    city
    street
    houseNumber
  }
`;t.AddressFragment=o},6423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(5660);const i=o.default`
  fragment GCompanyBranch on CompanyBranch {
    id
    name
    address {
      country {
        phonePrefix
      }
    }
    gps {
      ...GGeoPoint
    }
    brand {
      id
      name
    }
  }
  ${a.GeoPointFragment}
`;t.CompanyBranchFragment=i},6424:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomerFragment=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(5661),i=n(5662);const u=o.default`
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
`;t.CustomerFragment=u},6425:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PriceFragment=void 0;const o=((r=n(23))&&r.__esModule?r:{default:r}).default`
  fragment GPrice on PriceConverted {
    value
  }
`;t.PriceFragment=o},6426:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateOrderModel=void 0;var r,o=(r=n(293))&&r.__esModule?r:{default:r},a=n(27),i=n(171),u=n(6427),s=n(53),l=n(30),c=n(5818);const d=l.BaseModel.named("CreateOrder").props({branchId:a.types.maybe(a.types.string)}).volatile(p).views(e=>({get currentBranch(){return e.root.user.branches.find(s.RM.propEq("id",e.branchId))||e.root.user.defaultBranch}})).views(e=>({get deliveryType(){return e.values.deliveryType},get isDelivery(){return e.values.deliveryType===i.DeliveryTypeEnum.Messenger},get hasAddress(){return Boolean(e.deliveryAddress||e.fakeAddress)},get gps(){if(this.isDelivery&&this.hasAddress){if(e.deliveryAddress&&e.deliveryAddress.gps)return f(e.deliveryAddress.gps);if(e.fakeAddress&&e.fakeAddress.gps)return f(e.fakeAddress.gps)}return Object.assign({},f(e.currentBranch.gps))},get phone(){return void 0!==e.values.phone?e.values.phone:e.call?e.call.phone:""},get phonePrefix(){return void 0!==e.values.phonePrefix?e.values.phonePrefix:e.call?e.call.prefix:e.currentBranch.address.country?e.currentBranch.address.country.phonePrefix:"+"},get formValues(){if(null!==e.vamCustomer&&e.vamCustomer.isFound){const{firstName:t,lastName:n,email:r,lastOrder:a}=e.vamCustomer;return o.default.defaults(Object.assign({},e.values),{phone:this.phone,phonePrefix:this.phonePrefix,firstName:t,lastName:n,email:r,note:a&&a.note||""})}return e.fakeValues?o.default.defaults(Object.assign({},e.values),Object.assign({},e.fakeValues)):o.default.defaults(Object.assign({},e.values),{phone:this.phone,phonePrefix:this.phonePrefix})},get hasOrder(){return null!==e.orderId},get cartRefreshKey(){return`${e.orderId||0}-${this.deliveryType}-${this.gps.longitude}-${this.gps.latitude}`},get acceptOrderVariables(){return{orderId:e.orderId,customer:{firstName:this.formValues.firstName,lastName:this.formValues.lastName,emails:this.formValues.email?[{email:this.formValues.email}]:null,phones:this.formValues.phone?[{phone:`${this.formValues.phonePrefix}${this.formValues.phone}`}]:null},note:this.formValues.note}}})).actions(e=>{const t=()=>{Object.assign(e,p())};return{ensureOrder:(0,a.flow)(function*(){if(null===e.orderId&&e.branchId){const t={branchId:e.currentBranch.id,deliveryType:e.values.deliveryType,callEventId:e.call&&e.call.eventId,gps:e.gps},n=yield e.client.mutate({mutation:c.CreateOrderMutation,variables:t});n.data&&(e.orderId=n.data.createOrder.id)}return e.orderId}),cancelOrder:(0,a.flow)(function*(){if(!e.orderId)return void t();const n={orderId:e.orderId};e.client.mutate({mutation:c.CancelOrderMutation,variables:n}),t()}),resetOrder:()=>{e.orderId=null},resetModel:t}}).actions(e=>{const t=(0,a.flow)(function*(){if(!e.deliveryAddress||!e.deliveryAddress.gps)return void(e.notDeliveryLocation=!1);const{latitude:t,longitude:n}=e.deliveryAddress.gps,r={branchId:e.currentBranch.id,latitude:t,longitude:n},o=yield e.client.query({query:c.ValidateLocationQuery,variables:r});e.notDeliveryLocation=!o.data.resolveLocation.inDeliveryLocation});return{useLocation(n){e.deliveryAddress=n,t()},clearLocation(){e.deliveryAddress=void 0}}}).actions(e=>({selectBranch(t){e.branchId=t},userIsCalling(t){e.call=t},updateFormValues(t,n){e.values=Object.assign({deliveryType:t.deliveryType},o.default.pick(t,Object.keys(n))),e.log("updated values: %j",e.values)},updateFromVam(t){e.vamCustomer=t,e.log("vam customer: %j",t)},updateFormWithFakeValues(){e.fakeValues={firstName:u.faker.name.firstName(),lastName:u.faker.name.lastName(),email:u.faker.internet.email(),phone:u.faker.phone.phoneNumberFormat(3).replace(/\s/g,""),phonePrefix:"+420",note:u.faker.lorem.sentence().slice(0,49)},e.fakeAddress={state:"",city:"Hradec Kr\xe1lov\xe9",street:"Opletalova",houseNumber:"334/2",gps:{latitude:50.2129839,longitude:15.8342836}}}}));function p(){return{orderId:null,call:void 0,values:{deliveryType:i.DeliveryTypeEnum.Messenger,phone:void 0,email:void 0,firstName:void 0,lastName:void 0,note:void 0},fakeAddress:void 0,fakeValues:void 0,deliveryAddress:void 0,vamCustomer:null,notDeliveryLocation:!1}}function f({latitude:e,longitude:t}){return{latitude:e,longitude:t}}t.CreateOrderModel=d},6427:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"faker",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(5848))&&r.__esModule?r:{default:r};o.default.locale="cz"},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.appConfig=void 0;const r={fallbackLanguage:"en",supportedLanguages:["cs","sk","en","pl","de"],endpoint:"https://be.dev.admin.c2e.deep-vision.cloud",persistenceKey:"admin@local",pageTitleSuffix:"LOCAL",sentryDSN:""};t.appConfig=r,Object.assign(r,{endpoint:"https://c2e-p1.deep-vision.cloud",persistenceKey:"admin@prod",pageTitleSuffix:"Spe\u0258dlo",sentryDSN:"https://8838fede172840779e9f26fed441e44c@sentry.io/1354462"})},7474:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderModel=void 0;var r=n(27),o=n(7475),a=n(7483),i=n(7486);const u=r.types.model("Order",{list:r.types.optional(o.OrderListModel,{}),map:r.types.optional(a.OrderMapModel,{}),state:r.types.optional(i.OrderStateModel,{})});t.OrderModel=u},7475:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.OrderListModel=void 0;var r=n(11),o=n(27),a=n(5819),i=n(171);const u=n(30).BaseModel.named("OrderList").props({branches:o.types.optional(o.types.array(o.types.string),[]),collapsedCategories:o.types.optional(o.types.array(o.types.string),[i.OrderStateCategoryEnum.Finished])}).views(e=>({get branchesFilter(){return e.branches.length?Array.from(e.branches):[]},get hasBranchFilter(){return e.branches.length>0},get isSingleBranchSelected(){return 1===e.branches.length},get firstBranchId(){return 1===e.branches.length?e.branches[0]:null},get orderMap(){return(0,o.getParent)(e).map}})).actions(e=>({clearBranchFilter(){e.branches.clear()},setBranchFilter(t){e.branches.replace(t)},panMapToOrder(t){e.orderMap.panToOrder(t.id)}})).extend(t=>{const n=r.observable.set();return{views:{isOrderDetailOpen:e=>n.has(e),isCategoryCollapsed:e=>t.collapsedCategories.includes(e)},actions:{toggleOrderDetail(e){n.has(e)?n.delete(e):n.add(e)},toggleCategoryCollapse(e){const n=t.collapsedCategories.indexOf(e);n>=0?t.collapsedCategories.splice(n,1):t.collapsedCategories.push(e)},focusOrderDetail(t){n.has(t)||n.add(t),e(()=>{a.scroller.scrollTo(`order-${t}`,{smooth:"easeInOutQuart",containerId:"order-list",absolute:!0,offset:-140})})},observerOrderDetail:n.observe.bind(n)}}});t.OrderListModel=u}).call(this,n(230).setImmediate)},7483:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMapModel=void 0;var r=n(132),o=n(5667),a=n(7485),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const u=o.MapModel.named("OrderMap").volatile(()=>({activeDriverId:null})).actions(e=>({panToOrder(t){return i(this,void 0,void 0,function*(){if(!e.mapRef)return;const{data:n}=yield e.client.query({query:a.OrderLocationQuery,variables:{orderId:t}});n&&n.order.gps&&e.mapRef.panTo((0,r.gpsToLatLng)(n.order.gps))})},panToBranch(t){return i(this,void 0,void 0,function*(){const{data:n}=yield e.client.query({query:a.OrderBranchLocationQuery,variables:{branchId:t}});e.mapRef&&n&&e.mapRef.panTo((0,r.gpsToLatLng)(n.companyBranch.gps))})},activateDriver(t,n){e.activeDriverId=t,e.mapRef&&e.mapRef.panTo((0,r.gpsToLatLng)(n))}}));t.OrderMapModel=u},7485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderLocationQuery=t.OrderBranchLocationQuery=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(102);const i=o.default`
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
`;t.OrderLocationQuery=u},7486:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderStateModel=void 0;var r=n(171),o=n(30),a=n(5805),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const u=o.BaseModel.named("OrderState").views(e=>({})).actions(e=>({updateOrderState(t,n){return i(this,void 0,void 0,function*(){const r={orderId:t,state:n};yield e.client.mutate({mutation:a.UpdateOrderStateMutation,variables:r})})},cancelOrder(e){return i(this,void 0,void 0,function*(){alert("Cancel order")})}})).actions(e=>({deliverOrder:t=>e.updateOrderState(t,r.OrderStateEnum.OnWay),sendTimeNotification(t,n){return i(this,void 0,void 0,function*(){const r={orderId:t,minutes:n};yield e.client.mutate({mutation:a.SendOrderNotificationMutation,variables:r})})},selectDriver(t,n){return i(this,void 0,void 0,function*(){const r={orderId:t,driverId:n};yield e.client.mutate({mutation:a.SelectOrderDriverMutation,variables:r})})},removeDriver(t){return i(this,void 0,void 0,function*(){const n={orderDriverId:t};yield e.client.mutate({mutation:a.RemoveOrderDriverMutation,variables:n})})}}));t.OrderStateModel=u},7493:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StatisticsModel=void 0;var r=n(104),o=n(27),a=n(30),i=n(5849),u=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const s=a.BaseModel.named("Statistics").props({branches:o.types.optional(o.types.array(o.types.string),[]),closureBranch:o.types.maybeNull(o.types.string)}).volatile(e=>({dateTimeFrom:(0,r.startOfDay)(new Date),dateTimeTo:(0,r.endOfDay)(new Date)})).views(e=>({get branchesFilter(){return e.branches.length>0?Array.from(e.branches):e.root.user.branchesId},get hasBranchFilter(){return e.branches.length>0}})).actions(e=>({updateFilter(t){e.dateTimeFrom=new Date(t.dateTimeFrom),e.dateTimeTo=new Date(t.dateTimeTo)},clearBranchFilter(){e.branches.clear()},setBranchFilter(t){e.branches.replace(t)},setClosureBranch(t){e.closureBranch=t},createClosure(){return u(this,void 0,void 0,function*(){if(e.closureBranch){const t={companyBranchId:e.closureBranch};return e.client.mutate({mutation:i.CreateFinancialReport,variables:t,refetchQueries:["GClosureReportQuery"]})}throw new Error("Tried to create a closure without branch selected")})}}));t.StatisticsModel=s},7494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsModel=void 0;var r=n(27),o=n(53),a=n(30),i=n(5820),u=n(7784);const s=a.BaseModel.named("Settings").props({selectedBranchId:r.types.maybe(r.types.string),businessHours:r.types.optional(i.BusinessHoursModel,{}),menu:r.types.optional(u.MenuModel,{})}).views(e=>({get branchId(){return e.selectedBranchId||o.RM.head(e.root.user.branchesId)},get queryProps(){const e=this.branchId;return e?{fetchPolicy:"cache-and-network",variables:{branchId:e}}:{skip:!0}},getQueryProps(e){const t=this.branchId;return t?{variables:Object.assign({branchId:t},e)}:{skip:!0}}})).actions(e=>({selectBranch(t){e.selectedBranchId=t}}));t.SettingsModel=s},7783:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeleteSpecificBusinessHour=t.CreateSpecificBusinessHour=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(5850);const i=o.default`
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
`;t.DeleteSpecificBusinessHour=u},7784:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuModel=void 0;var r=n(27),o=n(7785),a=n(5821),i=n(5822),u=n(7787);const s=o.SettingsBaseModel.named("Menu").props({category:r.types.optional(a.MenuCategoryModel,{}),recipe:r.types.optional(i.MenuRecipeModel,{}),stock:r.types.optional(u.MenuStockModel,{})});t.MenuModel=s},7785:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsBaseModel=void 0;var r=n(27);const o=n(30).BaseModel.named("SettingsBase").views(e=>({get settings(){return(0,r.getParent)(e)}}));t.SettingsBaseModel=o},7786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuCategoryDeleteMutation=t.MenuCategoryVisibility=t.MenuCategoryUpdateMutation=t.MenuCategoryCreateMutation=t.SortMenuCategoryMutation=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(5851);const i=o.default`
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
`;t.MenuCategoryCreateMutation=u;const s=o.default`
  mutation GMenuCategoryUpdate(
    $categoryId: ID!
    $input: InputWareCategoryUpdate!
  ) {
    updateWareCategory(id: $categoryId, wareCategory: $input) {
      ...GMenuCategoryForm
    }
  }
  ${a.MenuCategoryFormFragment}
`;t.MenuCategoryUpdateMutation=s;const l=o.default`
  mutation GMenuCategoryVisibility($categoryId: ID!, $visible: Boolean!) {
    updateWareCategory(id: $categoryId, wareCategory: { enabled: $visible }) {
      id
      visible: enabled
    }
  }
`;t.MenuCategoryVisibility=l;const c=o.default`
  mutation GMenuCategoryDelete($categoryId: ID!) {
    destroyWareCategory(id: $categoryId) {
      id
    }
  }
`;t.MenuCategoryDeleteMutation=c},7787:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuStockModel=void 0;var r=n(160),o=n(5825),a=n(269),i=n(5766),u=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const s=a.MenuBaseModel.named("MenuStock").actions(e=>({createItem(t){const n={stockItem:Object.assign({companyBranch:e.branchId},l(t))};return(0,r.getQueryErrors)(e.client.mutate({mutation:i.MenuStockCreateMutation,variables:n,refetchQueries:[{query:o.MenuStockListQuery,variables:{branchId:e.branchId}}]}))},updateItem(t){const n={stockId:t.id,stockItem:Object.assign({},l(t))};return(0,r.getQueryErrors)(e.client.mutate({mutation:i.MenuStockUpdateMutation,variables:n}))},deleteItem(t){return u(this,void 0,void 0,function*(){const n={stockId:t};yield e.client.mutate({mutation:i.MenuStockDeleteMutation,variables:n,refetchQueries:[{query:o.MenuStockListQuery,variables:{branchId:e.branchId}}]})})}}));function l(e){return{code:e.code,label:e.nameLabel,note:e.note,plu:e.plu,allergens:e.allergens,wareUnit:e.wareUnit,allowNegative:e.allowNegative}}t.MenuStockModel=s},7788:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZoneModel=void 0;var r=n(27),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(182)),a=n(107),i=n(132),u=n(53),s=n(30),l=n(7789),c=n(7790);var d=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const p=s.BaseModel.named("Zone").props({map:r.types.optional(l.ZoneMapModel,{}),brandId:r.types.maybeNull(r.types.string)}).volatile(()=>({branch:null})).views(e=>({get brand(){return e.brandId&&e.root.user.brands.find(u.RM.propEq("id",e.brandId))||null},get hasBranchFilter(){return null!==e.branch},get branchFilterId(){return null===e.branch?null:e.branch.id},get branchFilterPredicate(){return e.branch?o.propEq("id",e.branch.id):null===this.brand?()=>!1:o.pathSatisfies(o.equals(this.brand.id),["brand","id"])},get zoneFilterPredicate(){return null!==e.branch?o.pathSatisfies(o.equals(e.branch.id),["companyBranch","id"]):null===this.brand?()=>!1:o.pathSatisfies(o.equals(this.brand.id),["companyBranch","brand","id"])},get branches(){return e.root.user.branches}})).actions(e=>({setBranchFilter(t){e.branch=t,e.brandId=t.brand.id,e.map.panToBranch(t)},setBrandFilter(t,n){e.brandId=t.id,e.branch&&e.branch.brand.id===t.id||(e.branch=1===n.length&&u.RM.head(n)||null)},clearBranchFilter(){e.branch=null},clearBrandFilter(){e.brandId=null,e.branch=null}})).actions(e=>({createZone:(0,r.flow)(function*(t){if(null===e.branch)throw new a.VError("Called createZone without branch being set");const n=(0,i.generatePolygon)({center:e.branch.gps,metersRadius:1e3,pointsCount:5}),r={branchId:e.branch.id,points:n},{data:o}=yield e.client.mutate({mutation:c.CreateZoneMutation,variables:r,updateQueries:{GZones:(e,{mutationResult:t})=>{const n=t.data.createZone;return n?Object.assign({},e,{zones:e.zones.concat(n)}):e}}});if(o){t(o.createZone.id)}}),saveZone(t,n){return d(this,void 0,void 0,function*(){const r={zoneId:t,update:{name:n.name,enabled:n.enabled,companyBranch:n.companyBranch.id,zoneColor:n.zoneColor.id,minimalOrderPrice:{value:Number(n.minimalOrderPrice.value)||0},priceRangeRules:n.priceRangeRules.map(m).filter(o.reject(o.pathEq(["price","value"],null))),geoPolygon:e.map.currentZonePoints||void 0}};yield e.client.mutate({mutation:c.UpdateZoneMutation,variables:r,updateQueries:{GZones:(e,{mutationResult:n})=>{const r=e.zones.findIndex(o.propEq("id",t)),a=n.data.updateZone;return Object.assign({},e,{zones:o.update(r,a,e.zones)})}}}),e.map.clearZonePoints()})},destroyZone(t){if(!t)return;const n={zoneId:t};e.client.mutate({mutation:c.DestroyZoneMutation,variables:n,updateQueries:{GZones:e=>Object.assign({},e,{zones:o.reject(o.propEq("id",t),e.zones)})}})},changeZonePriority:(0,r.flow)(function*(t,n,r){if(!t||n===r)return;const o=n-r,a={zoneId:t.id,offset:o};yield e.client.mutate({mutation:c.UpdateZonePriorityMutation,variables:a,optimisticResponse:{__typename:"Mutation",updateZonePriority:{__typename:"Zone",id:t.id,priority:t.priority+o}}})})}));function f(e){if(null===e)return null;const t=Number(e);return Number.isNaN(t)?null:t}function m(e){return{price:{value:f(e.price.value)},toPrice:{value:f(e.toPrice.value)||-1}}}t.ZoneModel=p},7789:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ZoneMapModel=void 0;var r=n(132),o=n(5667),a=n(295),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const u=o.MapModel.named("ZoneMap").volatile(()=>({currentZonePoints:null})).actions(e=>({updateZonePoints(t){e.currentZonePoints=t},clearZonePoints(){e.currentZonePoints=null},panToZone(t){return i(this,void 0,void 0,function*(){const{data:n}=yield e.client.query({query:a.ZoneLocationQuery,variables:{zoneId:t}});if(n){const{zone:{companyBranch:{gps:t}}}=n;e.mapRef&&e.mapRef.panTo((0,r.gpsToLatLng)(t))}})},panToBranch(t){return i(this,void 0,void 0,function*(){e.mapRef&&e.mapRef.panTo((0,r.gpsToLatLng)(t.gps))})}}));t.ZoneMapModel=u},7790:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DestroyZoneMutation=t.UpdateZonePriorityMutation=t.UpdateZoneMutation=t.CreateZoneMutation=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r},a=n(295);const i=o.default`
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
`;t.UpdateZoneMutation=u;const s=o.default`
  mutation GUpdateZonePriority($zoneId: ID!, $offset: Int!) {
    updateZonePriority(zone: $zoneId, offset: $offset) {
      id
      priority
    }
  }
`;t.UpdateZonePriorityMutation=s;const l=o.default`
  mutation GDestroyZone($zoneId: ID!) {
    destroyZone(id: $zoneId) {
      id
    }
  }
`;t.DestroyZoneMutation=l},7797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorContainer=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(7830),i=n(101);t.ErrorContainer=(({children:e,prod:t=!1})=>t?o.default.createElement(a.ProductionErrorBoundary,{dispatchErrorReporting:e=>{(0,i.reportRenderingError)(e.error,e.info)}},e):o.default.createElement(a.DeveloperErrorBoundary,null,e))},78:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.detectLanguage=function(){const e=new a.LocaleResolver([new a.NavigatorDetector],[new a.LanguageOnlyTransformer]).getLocales();return(0,d.logLang)("detected languages %s",e.join("; ")),e.find(e=>c.appConfig.supportedLanguages.includes(e))||c.appConfig.fallbackLanguage},t.changeLanguage=function(e){return g(this,void 0,void 0,function*(){return c.appConfig.supportedLanguages.includes(e)?(yield Promise.all([function(e){return g(this,void 0,void 0,function*(){let t;t=yield n(6420)(`./${e}/messages.js`),y.load({[e]:t}),(0,d.logLang)("loaded catalog %s",e)})}(e),(0,f.changeNumeralLocale)(e),(0,p.changeMomentLocale)(e)]),y.activate(e),(0,d.logLang)("changed to %s",e),!0):((0,d.logLang)("language %s is not supported"),!1)})},t.I18nManager=t.i18n=void 0;var r=n(288),o=n(130),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(6380)),i=n(100),u=m(n(0)),s=m(n(105)),l=n(99),c=n(74),d=n(55),p=n(6416),f=n(6418);function m(e){return e&&e.__esModule?e:{default:e}}var g=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};const y=(0,r.setupI18n)();t.i18n=y;t.I18nManager=(({children:e})=>{const{user:t}=(0,l.useRoot)();return(0,i.useObserver)(()=>t.language?u.default.createElement(o.I18nProvider,{language:t.language,i18n:y},u.default.Children.only(e)):u.default.createElement(s.default,null))})},7808:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Routing=void 0;var r=f(n(0)),o=n(25),a=f(n(105)),i=n(7809),u=n(282),s=n(311),l=n(7823),c=n(7824),d=n(7825),p=n(284);function f(e){return e&&e.__esModule?e:{default:e}}const m=r.default.lazy(()=>Promise.all([n.e(0),n.e(170)]).then(n.t.bind(null,7840,7))),g=r.default.lazy(()=>n.e(171).then(n.t.bind(null,7841,7))),y=r.default.lazy(()=>n.e(172).then(n.t.bind(null,7842,7))),v=r.default.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(160),n.e(173)]).then(n.t.bind(null,7843,7))),h=r.default.lazy(()=>Promise.all([n.e(0),n.e(2),n.e(161),n.e(174)]).then(n.t.bind(null,7844,7))),b=r.default.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(161),n.e(175)]).then(n.t.bind(null,7845,7))),M=r.default.lazy(()=>n.e(176).then(n.t.bind(null,7846,7)));t.Routing=(()=>r.default.createElement(r.default.Suspense,{fallback:r.default.createElement(a.default,null)},r.default.createElement(l.LogRoute,null),r.default.createElement(c.RedirectAfterLogin,null),r.default.createElement(o.Switch,null,r.default.createElement(s.LazyRoute,{path:"/login",exact:!0,component:m}),r.default.createElement(s.LazyRoute,{path:"/recovery/:token",exact:!0,component:g}),r.default.createElement(s.LazyRoute,{path:"/register/:token",exact:!0,component:g}),r.default.createElement(p.SecureRoute,{path:"/",exact:!0,component:y}),r.default.createElement(p.SecureRoute,{path:"/order",component:v}),r.default.createElement(p.SecureRoute,{path:"/settings",component:h}),r.default.createElement(p.SecureRoute,{path:"/overview",component:b}),r.default.createElement(s.LazyRoute,{path:"/support",component:M}),r.default.createElement(o.Route,{path:"/error",component:i.ErrorPage}),r.default.createElement(o.Route,{path:"/logout",component:d.RedirectAfterLogout}),r.default.createElement(o.Route,{component:u.NotFoundPage}))))},7809:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorPage=void 0;var r=n(130),o=n(279),a=c(n(0)),i=c(n(51)),u=n(5798),s=n(78),l=n(5800);function c(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"IconStyled"})`
  margin-top: 2rem;
  color: #d39f40;
  text-align: center;
`;t.ErrorPage=(e=>a.default.createElement(l.FullPageLayout,{width:15,pageTitle:s.i18n._("Application error"),useBackButton:!0},a.default.createElement(u.Card,null,a.default.createElement("h3",null,a.default.createElement(r.Trans,{id:"We are sorry, but there is an internal error in the app. Our team was notified and will fix this soon."}),a.default.createElement(d,null,a.default.createElement(o.Warning,{style:{fontSize:"5rem"}}))))))},7817:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SoundControl=void 0,n(7818);var r=s(n(0)),o=s(n(51)),a=n(5794),i=n(52),u=n(103);function s(e){return e&&e.__esModule?e:{default:e}}const l=o.default.div.withConfig({displayName:"SoundControlContainerStyled"})`
  position: relative;
`,c=(0,o.default)(a.TouchButton).withConfig({displayName:"SoundButtonStyled"})`
  height: ${i.Spacing.ButtonHeight};
  width: ${i.Spacing.ButtonHeight};
  position: absolute;
  right: 0;
  top: 0;
`;t.SoundControl=class extends r.default.Component{constructor(){super(...arguments),this.state={playPreview:!1}}render(){return r.default.createElement(u.WithRoot,{observe:!0,render:({user:e})=>r.default.createElement(l,null,r.default.createElement(c,{color:e.soundEnabled?i.Colors.green:i.Colors.red,iconName:e.soundEnabled?"volume_up":"volume_off",iconSize:2,onClick:()=>{e.controlSound(!e.soundEnabled)}}))})}}},7820:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LogoutWidget=void 0;var r=d(n(0)),o=n(172),a=d(n(51)),i=n(173),u=n(103),s=n(78),l=n(52),c=n(7821);function d(e){return e&&e.__esModule?e:{default:e}}const p=a.default.div.withConfig({displayName:"LogoutWidgetStyled"})`
  margin-left: 1rem;
  color: ${l.Colors.greyLight};
  &:hover {
    color: ${l.Colors.white};
  }
`,f=a.default.span.withConfig({displayName:"LoggedUserNameStyled"})`
  color: ${l.Colors.greyLight};
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
`;t.LogoutWidget=(()=>r.default.createElement(u.WithRoot,{render:({auth:e})=>r.default.createElement(c.QueryLogoutWidget,{variables:{id:e.userId},renderLoading:()=>null,render:({user:e})=>r.default.createElement(p,{"data-testid":"logout-widget"},r.default.createElement(o.Link,{to:"/logout"},r.default.createElement(f,null,function(e){return e?`${e.firstName} ${e.lastName}`:s.i18n._("Not logged in")}(e)),r.default.createElement(m,null,r.default.createElement(i.Icon,{iconName:"exit_to_app"}))))})}))},7821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryLogoutWidget=void 0;var r,o=(r=n(23))&&r.__esModule?r:{default:r};const a=(0,n(79).buildQuery)(o.default`
  query GLogoutWidget($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
    }
  }
`);t.QueryLogoutWidget=a},7822:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HomeButton=void 0;var r=c(n(175)),o=c(n(0)),a=n(25),i=n(172),u=c(n(51)),s=n(173),l=n(52);function c(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};const f=e=>t=>(0,r.default)(t.color).alpha(e).string(),m=u.default.button.withConfig({displayName:"HomeButtonStyled"})`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 ${l.Radiuses.Button} 0 !important;
  height: ${l.Spacing.ButtonHeight};
  width: ${l.Spacing.ButtonHeight};
  margin: 0;
  padding: 0.2rem;
  border: none;
  border-radius: ${l.Radiuses.Button};
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
`;t.HomeButton=(e=>{var{color:t=l.Colors.greyMiddle,iconColor:n=l.Colors.white,goBack:r=!1,backRoute:u}=e,c=p(e,["color","iconColor","goBack","backRoute"]);return r?o.default.createElement(a.Route,null,({history:e})=>o.default.createElement(m,d({color:t,onClick:()=>{u?e.push(u):e.goBack()}},c),o.default.createElement(s.Icon,{iconName:"chevron_left",color:n,fontSize:2.2}))):o.default.createElement(i.Link,{to:"/"},o.default.createElement(m,d({color:t},c),o.default.createElement(s.Icon,{iconName:"home",color:n,fontSize:2.2})))})},7823:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LogRoute=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(25),i=n(55);t.LogRoute=(e=>o.default.createElement(a.Route,null,({location:e})=>((0,i.logRouting)("at %s",e.pathname),null)))},7824:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RedirectAfterLogin=void 0;var r=s(n(155)),o=n(11),a=s(n(0)),i=n(25),u=n(103);function s(e){return e&&e.__esModule?e:{default:e}}const l=(0,r.default)("routing");t.RedirectAfterLogin=(()=>a.default.createElement(i.Route,{children:({location:e,history:t})=>a.default.createElement(u.WithRoot,{render:n=>{if(!n.auth.isAuthenticatedUser){const r=e.state&&e.state.origin||"/",a=()=>n.auth.isAuthenticated,i=()=>{t.replace(r)};(0,o.when)(a,i),l("will redirect to %s when auth",r)}return null}})}))},7825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RedirectAfterLogout=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(25),i=n(103),u=n(5778);t.RedirectAfterLogout=(()=>o.default.createElement(i.WithRoot,{observe:!1,render:e=>e.auth.isAuthenticated?(e.auth.invalidate(),o.default.createElement(u.RedirectToLogin,{useOrigin:!1})):o.default.createElement(a.Redirect,{to:"/"})}))},7826:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(5852),i=n(172);t.Router=(({children:e})=>o.default.createElement(a.Provider,null,({handleGetUserConfirm:t})=>o.default.createElement(i.BrowserRouter,{getUserConfirmation:t},e)))},7827:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeProvider=void 0;var r,o=n(131),a=(r=n(0))&&r.__esModule?r:{default:r};t.ThemeProvider=(({children:e})=>{const t=(0,o.createMuiTheme)({typography:{useNextVariants:!0}});return a.default.createElement(o.MuiThemeProvider,{theme:t},e)})},7828:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateSnack=g,t.UpdateHandler=void 0;var r=n(131),o=n(7829),a=n(104),i=n(100),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),s=n(55),l=n(5810),c=n(5812),d=n(78),p=n(271);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function g(e){const{onConfirm:t,onCancel:n,getNow:o}=e,i=m(e,["onConfirm","onCancel","getNow"]),[s]=(0,u.useState)(()=>o()+e.autoHideDuration),l=(0,c.useTimer)({interval:c.SECOND,enabled:!0,getNow:o}),g=(0,a.formatDistanceStrict)(s,l);return u.default.createElement(r.Snackbar,f({open:!0,anchorOrigin:{vertical:"top",horizontal:"center"},classes:{root:p.snackStyles.variantInfo},message:u.default.createElement("span",{"data-testid":"message"},d.i18n._("Application will be restarted in {remainingSeconds} to apply available update.",{remainingSeconds:g})),disableWindowBlurListener:!0,action:[u.default.createElement(r.Button,{key:"later",color:"secondary",size:"small",role:"button","data-testid":"postpone-button",onClick:n},d.i18n._("Postpone update")),u.default.createElement(r.Button,{key:"confirm",color:"primary",size:"small",role:"button","data-testid":"confirm-button",onClick:t},d.i18n._("Restart now"))],onClose:n},i))}t.UpdateHandler=(({onRestart:e=(()=>window.location.reload()),autoUpdateDelay:t=20*c.SECOND,postponeTimeout:n=2*c.MINUTE,updateCheckInterval:r=1*c.HOUR,getNow:a=Date.now,children:d})=>{const p=(0,u.useRef)(null),f=(0,i.useObservable)({updatePending:!1,postponedAt:a()}),m=(0,u.useCallback)(t=>{"update-applied"===t.data&&((0,s.logMain)("restarting to apply update..."),e())},[]);(0,l.useEffectOnce)(()=>{let e;return o.serviceWorker.register({onInit:t=>{e=setInterval(()=>{(0,s.logMain)("checking for updates..."),t.update()},r),(0,s.logMain)("update handler initialized")},onUpdate:e=>{p.current=e,f.updatePending=!0,(0,s.logMain)("new update is available"),window.navigator.serviceWorker.addEventListener("message",m)}})(),()=>{window.navigator.serviceWorker.removeEventListener("message",m),e&&clearInterval(e)}});const y=(0,u.useCallback)(()=>{(0,s.logMain)("user postponed update"),f.updatePending=!1,setTimeout(()=>{(0,s.logMain)("reminding update to user again"),f.updatePending=!0},n)},[]),v=(0,u.useCallback)(()=>{f.updatePending=!1,p.current&&((0,s.logMain)("user confirmed update"),p.current.postMessage("apply-update"))},[]);return(0,i.useObserver)(()=>u.default.createElement(u.default.Fragment,null,f.updatePending?u.default.createElement(g,{autoHideDuration:t,onCancel:y,onConfirm:v,getNow:a}):null,d))})},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildQuery=function(e){return t=>{const n=(0,o.useRef)([]),r=(0,o.useCallback)(()=>{n.current.forEach(e=>e()),n.current.length=0},[]);(0,o.useEffect)(()=>(r(),r()),[n.current.length]);const{render:i,renderFragment:m,renderLoading:g=!0,renderError:y=!0,refetchOnConnectionLost:v=!1,children:h}=t,b=f(t,["render","renderFragment","renderLoading","renderError","refetchOnConnectionLost","children"]);return o.default.createElement(a.Query,p({query:e},b),e=>{if(e.loading){if("function"===typeof g)return g(e);if(!0===g)return o.default.createElement(s.Loading,null)}if(e.error)return(0,d.reportError)(e.error),(0,l.logError)(e.error),!0===y?o.default.createElement(u.Redirect,{to:"/error"}):null;if(v&&n.current.push((0,c.whenGoingOnline)(e.refetch)),e.data){if(m)return o.default.createElement(o.default.Fragment,null,m(e.data,e));if(i)return i(e.data,e)}return h||null})}},t.buildQueryHook=function(e){return t=>(0,i.useQuery)(e,{variables:t})};var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=n(291),i=n(280),u=n(25),s=((r=n(7487))&&r.__esModule,n(5807)),l=n(55),c=n(224),d=n(101);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithRoot=t.useRoot=t.RootProvider=void 0;var r,o=n(130),a=n(131),i=n(5816),u=n(5808),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),l=n(291),c=n(280),d=n(6330),p=n(6331),f=n(6371),m=n(5659),g=n(6377),y=(r=n(105))&&r.__esModule?r:{default:r},v=n(271);var h=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}s((r=r.apply(e,t||[])).next())})};t.RootProvider=(({children:e})=>{const[t,n]=(0,s.useState)(void 0),[r,u]=(0,s.useState)(!1);return(0,i.useAsyncEffect)(()=>h(void 0,void 0,void 0,function*(){const e=m.AuthModel.create({}),t=(0,p.createApolloClient)(e),r=g.RootModel.create({auth:e},{fetch:window.fetch,apolloClient:t});yield Promise.all(r.persistedModels.map(f.persistModel));try{yield r.user.initUser()}catch(o){o.networkError&&u(!0)}n(r)})),r?s.default.createElement(a.Snackbar,{anchorOrigin:{horizontal:"center",vertical:"top"},autoHideDuration:1/0,open:!0},s.default.createElement(a.SnackbarContent,{className:v.snackStyles.variantError,message:s.default.createElement(o.Trans,{id:"Communication with server has failed. Please retry the operation in a moment again."}),action:[s.default.createElement(a.Button,{key:"restart",onClick:()=>location.reload(),color:"secondary",size:"small",role:"button"},s.default.createElement(o.Trans,{id:"Restart application"}))]})):t?s.default.createElement(l.ApolloProvider,{client:t.client},s.default.createElement(c.ApolloProvider,{client:t.client},s.default.createElement(d.RootContext.Provider,{value:t},s.Children.only(e)))):s.default.createElement(y.default,null)});const b=()=>{const e=(0,s.useContext)(d.RootContext);if(!e)throw new Error("RootProvider missing in the tree");return e};t.useRoot=b;t.WithRoot=(({children:e,observe:t=!0})=>{const n=b();return!0===t?s.default.createElement(u.Observer,null,()=>e(n)):e(n)})}},[[6011,180,179]]]);
//# sourceMappingURL=main.c93adec0.chunk.js.map