define(["../../lib/registry","../../lib/utils"],function(){function t(e,n,i){var i=i||{},o=i.obj||window,r=i.path||(o==window?"window":""),s=Object.keys(o);s.forEach(function(i){(p[e]||e)(n,o,i)&&console.log([r,".",i].join(""),"->",["(",typeof o[i],")"].join(""),o[i]),"[object Object]"==Object.prototype.toString.call(o[i])&&o[i]!=o&&-1==r.split(".").indexOf(i)&&t(e,n,{obj:o[i],path:[r,i].join(".")})})}function e(e,n,i,o){n&&typeof i!=n?console.error([i,"must be",n].join(" ")):t(e,i,o)}function n(t,n){e("name","string",t,n)}function i(t,n){e("nameContains","string",t,n)}function o(t,n){e("type","function",t,n)}function r(t,n){e("value",null,t,n)}function s(t,n){e("valueCoerced",null,t,n)}function a(e,n){t(e,null,n)}function h(){var t=[].slice.call(arguments,0);l.eventNames.length||(l.eventNames="all"),l.actions=t.length?t:"all"}function c(){var t=[].slice.call(arguments,0);l.actions.length||(l.actions="all"),l.eventNames=t.length?t:"all"}function u(){l.actions=[],l.eventNames=[]}function f(){l.actions="all",l.eventNames="all"}var l,p={name:function(t,e,n){return t==n},nameContains:function(t,e,n){return n.indexOf(t)>-1},type:function(t,e,n){return e[n]instanceof t},value:function(t,e,n){return e[n]===t},valueCoerced:function(t,e,n){return e[n]==t}},d="all";return l={actions:d,eventNames:d},{enable:function(t){this.enabled=!!t,t&&window.console&&(console.info("Booting in DEBUG mode"),console.info("You can filter event logging with DEBUG.events.logAll/logNone/logByName/logByAction")),window.DEBUG=this},find:{byName:n,byNameContains:i,byType:o,byValue:r,byValueCoerced:s,custom:a},events:{logFilter:l,logByAction:h,logByName:c,logAll:f,logNone:u}}});