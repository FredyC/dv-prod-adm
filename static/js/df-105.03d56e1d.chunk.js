(this.webpackJsonpspeedlo=this.webpackJsonpspeedlo||[]).push([[49],{1072:function(u,e,t){"use strict";function n(u){return u.replace(/sekuntia?/,"sekunnin")}function o(u){return u.replace(/minuuttia?/,"minuutin")}function i(u){return u.replace(/tuntia?/,"tunnin")}function r(u){return u.replace(/(kuukausi|kuukautta)/,"kuukauden")}function s(u){return u.replace(/(vuosi|vuotta)/,"vuoden")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(u,e,t){t=t||{};var n=a[u],o=1===e?n.one:n.other.replace("{{count}}",e);if(t.addSuffix)return t.comparison>0?n.futureTense(o)+" kuluttua":o+" sitten";return o};var a={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:n},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:n},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(u){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:o},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:o},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:i},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:i},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(u){return u.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:r},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:r},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:s},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:s},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:s},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:s}};u.exports=e.default}}]);
//# sourceMappingURL=df-105.03d56e1d.chunk.js.map