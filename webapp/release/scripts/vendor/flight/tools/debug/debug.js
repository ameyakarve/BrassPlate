"use strict";define(["../../lib/registry","../../lib/utils"],function(){function t(e,n,i){var i=i||{},r=i.obj||window,o=i.path||(r==window?"window":""),s=Object.keys(r);s.forEach(function(i){(d[e]||e)(n,r,i)&&console.log([o,".",i].join(""),"->",["(",typeof r[i],")"].join(""),r[i]),"[object Object]"==Object.prototype.toString.call(r[i])&&r[i]!=r&&-1==o.split(".").indexOf(i)&&t(e,n,{obj:r[i],path:[o,i].join(".")})})}function e(e,n,i,r){n&&typeof i!=n?console.error([i,"must be",n].join(" ")):t(e,i,r)}function n(t,n){e("name","string",t,n)}function i(t,n){e("nameContains","string",t,n)}function r(t,n){e("type","function",t,n)}function o(t,n){e("value",null,t,n)}function s(t,n){e("valueCoerced",null,t,n)}function a(e,n){t(e,null,n)}function u(){var t=[].slice.call(arguments,0);h.eventNames.length||(h.eventNames="all"),h.actions=t.length?t:"all"}function c(){var t=[].slice.call(arguments,0);h.actions.length||(h.actions="all"),h.eventNames=t.length?t:"all"}function l(){h.actions=[],h.eventNames=[]}function f(){h.actions="all",h.eventNames="all"}var h,d={name:function(t,e,n){return t==n},nameContains:function(t,e,n){return n.indexOf(t)>-1},type:function(t,e,n){return e[n]instanceof t},value:function(t,e,n){return e[n]===t},valueCoerced:function(t,e,n){return e[n]==t}},p="all";return h={actions:p,eventNames:p},{enable:function(t){this.enabled=!!t,t&&window.console&&(console.info("Booting in DEBUG mode"),console.info("You can filter event logging with DEBUG.events.logAll/logNone/logByName/logByAction")),window.DEBUG=this},find:{byName:n,byNameContains:i,byType:r,byValue:o,byValueCoerced:s,custom:a},events:{logFilter:h,logByAction:u,logByName:c,logAll:f,logNone:l}}});