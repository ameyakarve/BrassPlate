"use strict";define([],function(){var t=[],e=100,n={isDomObj:function(t){return!(!t.nodeType&&t!==window)},toArray:function(e,n){return t.slice.call(e,n)},merge:function(){var t=this.toArray(arguments);return t.unshift({}),t[t.length-1]===!0&&(t.pop(),t.unshift(!0)),$.extend.apply(void 0,t)},push:function(t,e,n){return t&&Object.keys(e||{}).forEach(function(i){if(t[i]&&n)throw Error("utils.push attempted to overwrite '"+i+"' while running in protected mode");"object"==typeof t[i]&&"object"==typeof e[i]?this.push(t[i],e[i]):t[i]=e[i]},this),t},isEnumerable:function(t,e){return Object.keys(t).indexOf(e)>-1},compose:function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},uniqueArray:function(t){for(var e={},n=[],i=0,r=t.length;r>i;++i)e.hasOwnProperty(t[i])||(n.push(t[i]),e[t[i]]=1);return n},debounce:function(t,n,i){"number"!=typeof n&&(n=e);var r,o;return function(){var e=this,s=arguments,a=function(){r=null,i||(o=t.apply(e,s))},u=i&&!r;return clearTimeout(r),r=setTimeout(a,n),u&&(o=t.apply(e,s)),o}},throttle:function(t,n){"number"!=typeof n&&(n=e);var i,r,o,s,a,u,c=this.debounce(function(){a=s=!1},n);return function(){i=this,r=arguments;var e=function(){o=null,a&&(u=t.apply(i,r)),c()};return o||(o=setTimeout(e,n)),s?a=!0:(s=!0,u=t.apply(i,r)),c(),u}},countThen:function(t,e){return function(){return--t?void 0:e.apply(this,arguments)}},delegate:function(t){return function(e,n){var i,r=$(e.target);Object.keys(t).forEach(function(o){return(i=r.closest(o)).length?(n=n||{},n.el=i[0],t[o].apply(this,[e,n])):void 0},this)}}};return n});