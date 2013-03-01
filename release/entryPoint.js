// Copyright 2009-2012 by contributors, MIT License
// vim: ts=4 sts=4 sw=4 expandtab

// ==========================================
// Copyright 2013 Twitter, Inc
// Licensed under The MIT License
// http://opensource.org/licenses/MIT
// ==========================================

//implementation lifted from underscore.js (c) 2009-2012 Jeremy Ashkenas

(function(t){"function"==typeof define?define("shim",t):"function"==typeof YUI?YUI.add("es5",t):t()})(function(){Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError("Function.prototype.bind called on incompatible "+e);var n=c.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=e.prototype;var o=new i,s=e.apply(o,n.concat(c.call(arguments)));return Object(s)===s?s:o}return e.apply(t,n.concat(c.call(arguments)))};return r});var t,e,n,r,i,o=Function.prototype.call,s=Array.prototype,a=Object.prototype,c=s.slice,u=o.bind(a.toString),l=o.bind(a.hasOwnProperty);if((i=l(a,"__defineGetter__"))&&(t=o.bind(a.__defineGetter__),e=o.bind(a.__defineSetter__),n=o.bind(a.__lookupGetter__),r=o.bind(a.__lookupSetter__)),Array.isArray||(Array.isArray=function(t){return"[object Array]"==u(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e=w(this),n=arguments[1],r=-1,i=e.length>>>0;if("[object Function]"!=u(t))throw new TypeError;for(;i>++r;)r in e&&t.call(n,e[r],r,e)}),Array.prototype.map||(Array.prototype.map=function(t){var e=w(this),n=e.length>>>0,r=Array(n),i=arguments[1];if("[object Function]"!=u(t))throw new TypeError(t+" is not a function");for(var o=0;n>o;o++)o in e&&(r[o]=t.call(i,e[o],o,e));return r}),Array.prototype.filter||(Array.prototype.filter=function(t){var e,n=w(this),r=n.length>>>0,i=[],o=arguments[1];if("[object Function]"!=u(t))throw new TypeError(t+" is not a function");for(var s=0;r>s;s++)s in n&&(e=n[s],t.call(o,e,s,n)&&i.push(e));return i}),Array.prototype.every||(Array.prototype.every=function(t){var e=w(this),n=e.length>>>0,r=arguments[1];if("[object Function]"!=u(t))throw new TypeError(t+" is not a function");for(var i=0;n>i;i++)if(i in e&&!t.call(r,e[i],i,e))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){var e=w(this),n=e.length>>>0,r=arguments[1];if("[object Function]"!=u(t))throw new TypeError(t+" is not a function");for(var i=0;n>i;i++)if(i in e&&t.call(r,e[i],i,e))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e=w(this),n=e.length>>>0;if("[object Function]"!=u(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var r,i=0;if(arguments.length>=2)r=arguments[1];else for(;;){if(i in e){r=e[i++];break}if(++i>=n)throw new TypeError("reduce of empty array with no initial value")}for(;n>i;i++)i in e&&(r=t.call(void 0,r,e[i],i,e));return r}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var e=w(this),n=e.length>>>0;if("[object Function]"!=u(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var r,i=n-1;if(arguments.length>=2)r=arguments[1];else for(;;){if(i in e){r=e[i--];break}if(0>--i)throw new TypeError("reduceRight of empty array with no initial value")}do i in this&&(r=t.call(void 0,r,e[i],i,e));while(i--);return r}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=w(this),n=e.length>>>0;if(!n)return-1;var r=0;for(arguments.length>1&&(r=g(arguments[1])),r=r>=0?r:Math.max(0,n+r);n>r;r++)if(r in e&&e[r]===t)return r;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){var e=w(this),n=e.length>>>0;if(!n)return-1;var r=n-1;for(arguments.length>1&&(r=Math.min(r,g(arguments[1]))),r=r>=0?r:n-Math.abs(r);r>=0;r--)if(r in e&&t===e[r])return r;return-1}),!Object.keys){var f=!0,h=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=h.length;for(var d in{toString:null})f=!1;Object.keys=function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var e=[];for(var n in t)l(t,n)&&e.push(n);if(f)for(var r=0,i=p;i>r;r++){var o=h[r];l(t,o)&&e.push(o)}return e}}Date.prototype.toISOString&&-1!==new Date(-621987552e5).toISOString().indexOf("-000001")||(Date.prototype.toISOString=function(){var t,e,n,r;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(t=[this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],r=this.getUTCFullYear(),r=(0>r?"-":r>9999?"+":"")+("00000"+Math.abs(r)).slice(r>=0&&9999>=r?-4:-6),e=t.length;e--;)n=t[e],10>n&&(t[e]="0"+n);return r+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}),Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError("toISOString property is not callable");return this.toISOString()}),Date.parse&&864e13===Date.parse("+275760-09-13T00:00:00.000Z")||(Date=function(t){var e=function e(n,r,i,o,s,a,c){var u=arguments.length;if(this instanceof t){var l=1==u&&n+""===n?new t(e.parse(n)):u>=7?new t(n,r,i,o,s,a,c):u>=6?new t(n,r,i,o,s,a):u>=5?new t(n,r,i,o,s):u>=4?new t(n,r,i,o):u>=3?new t(n,r,i):u>=2?new t(n,r):u>=1?new t(n):new t;return l.constructor=e,l}return t.apply(this,arguments)},n=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(?:Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");for(var r in t)e[r]=t[r];return e.now=t.now,e.UTC=t.UTC,e.prototype=t.prototype,e.prototype.constructor=e,e.parse=function(e){var r=n.exec(e);if(r){r.shift();for(var i=1;7>i;i++)r[i]=+(r[i]||(3>i?1:0)),1==i&&r[i]--;var o=+r.pop(),s=+r.pop(),a=r.pop(),c=0;if(a){if(s>23||o>59)return 0/0;c=6e4*(60*s+o)*("+"==a?-1:1)}var u=+r[0];return u>=0&&99>=u?(r[0]=u+400,t.UTC.apply(this,r)+c-126227808e5):t.UTC.apply(this,r)+c}return t.parse.apply(this,arguments)},e}(Date));var y="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||y.trim()){y="["+y+"]";var m=RegExp("^"+y+y+"*"),v=RegExp(y+y+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return(this+"").replace(m,"").replace(v,"")}}var g=function(t){return t=+t,t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t},b="a"!="a"[0],w=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return b&&"string"==typeof t&&t?t.split(""):Object(t)}}),function(t){"function"==typeof define?define("sham",t):"function"==typeof YUI?YUI.add("es5-sham",t):t()}(function(){function t(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(e){}}if(Object.getPrototypeOf||(Object.getPrototypeOf=function(t){return t.__proto__||(t.constructor?t.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var e="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(t,n){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(e+t);if(owns(t,n)){var r={enumerable:!0,configurable:!0};if(supportsAccessors){var i=t.__proto__;t.__proto__=prototypeOfObject;var o=lookupGetter(t,n),s=lookupSetter(t,n);if(t.__proto__=i,o||s)return o&&(r.get=o),s&&(r.set=s),r}return r.value=t[n],r}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)}),Object.create||(Object.create=function(t,e){var n;if(null===t)n={__proto__:null};else{if("object"!=typeof t)throw new TypeError("typeof prototype["+typeof t+"] != 'object'");var r=function(){};r.prototype=t,n=new r,n.__proto__=t}return void 0!==e&&Object.defineProperties(n,e),n}),Object.defineProperty){var n=t({}),r="undefined"==typeof document||t(document.createElement("div"));if(!n||!r)var i=Object.defineProperty}if(!Object.defineProperty||i){var o="Property description must be an object: ",s="Object.defineProperty called on non-object: ",a="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(t,e,n){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(s+t);if("object"!=typeof n&&"function"!=typeof n||null===n)throw new TypeError(o+n);if(i)try{return i.call(Object,t,e,n)}catch(r){}if(owns(n,"value"))if(supportsAccessors&&(lookupGetter(t,e)||lookupSetter(t,e))){var c=t.__proto__;t.__proto__=prototypeOfObject,delete t[e],t[e]=n.value,t.__proto__=c}else t[e]=n.value;else{if(!supportsAccessors)throw new TypeError(a);owns(n,"get")&&defineGetter(t,e,n.get),owns(n,"set")&&defineSetter(t,e,n.set)}return t}}Object.defineProperties||(Object.defineProperties=function(t,e){for(var n in e)owns(e,n)&&"__proto__"!=n&&Object.defineProperty(t,n,e[n]);return t}),Object.seal||(Object.seal=function(t){return t}),Object.freeze||(Object.freeze=function(t){return t});try{Object.freeze(function(){})}catch(c){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(t){return t}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)!==t)throw new TypeError;for(var e="";owns(t,e);)e+="?";t[e]=!0;var n=owns(t,e);return delete t[e],n})}),define("{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/utils",[],function(){var t=[],e=100,n={isDomObj:function(t){return!(!t.nodeType&&t!==window)},toArray:function(e,n){return t.slice.call(e,n)},merge:function(){var t=this.toArray(arguments);return t.unshift({}),t[t.length-1]===!0&&(t.pop(),t.unshift(!0)),$.extend.apply(void 0,t)},push:function(t,e,n){return t&&Object.keys(e||{}).forEach(function(r){if(t[r]&&n)throw Error("utils.push attempted to overwrite '"+r+"' while running in protected mode");"object"==typeof t[r]&&"object"==typeof e[r]?this.push(t[r],e[r]):t[r]=e[r]},this),t},isEnumerable:function(t,e){return Object.keys(t).indexOf(e)>-1},compose:function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},uniqueArray:function(t){for(var e={},n=[],r=0,i=t.length;i>r;++r)e.hasOwnProperty(t[r])||(n.push(t[r]),e[t[r]]=1);return n},debounce:function(t,n,r){"number"!=typeof n&&(n=e);var i,o;return function(){var e=this,s=arguments,a=function(){i=null,r||(o=t.apply(e,s))},c=r&&!i;return clearTimeout(i),i=setTimeout(a,n),c&&(o=t.apply(e,s)),o}},throttle:function(t,n){"number"!=typeof n&&(n=e);var r,i,o,s,a,c,u=this.debounce(function(){a=s=!1},n);return function(){r=this,i=arguments;var e=function(){o=null,a&&(c=t.apply(r,i)),u()};return o||(o=setTimeout(e,n)),s?a=!0:(s=!0,c=t.apply(r,i)),u(),c}},countThen:function(t,e){return function(){return--t?void 0:e.apply(this,arguments)}},delegate:function(t){return function(e,n){var r,i=$(e.target);Object.keys(t).forEach(function(o){return(r=i.closest(o)).length?(n=n||{},n.el=r[0],t[o].apply(this,[e,n])):void 0},this)}}};return n}),define("{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/registry",["./utils"],function(t){function e(e,n){var r,i,o;return n=t.toArray(n),"function"==typeof n[n.length-1]&&(o=n.pop()),"object"==typeof n[n.length-1]&&n.pop(),2==n.length?(r=n[0],i=n[1]):(r=e.node,i=n[0]),{element:r,type:i,callback:o}}function n(t,e){return t.element==e.element&&t.type==e.type&&(null==e.callback||t.callback==e.callback)}function r(){function r(t){this.component=t,this.instances=[],this.addInstance=function(t){this.throwIfInstanceExistsOnNode(t);var e=new i(t);return this.instances.push(e),e},this.throwIfInstanceExistsOnNode=function(t){this.instances.forEach(function(e){if(e.instance.$node[0]===t.$node[0])throw Error("Instance of "+t.constructor+" already exists on node "+t.$node[0])})},this.removeInstance=function(t){var e=this.instances.filter(function(e){return e.instance==t})[0],n=this.instances.indexOf(e);n>-1&&this.instances.splice(n,1),this.instances.length||o.removeComponentInfo(this)}}function i(t){this.instance=t,this.events=[],this.addTrigger=function(){},this.addBind=function(t){this.events.push(t),o.events.push(t)},this.removeBind=function(t){for(var e,r=0;e=this.events[r];r++)n(e,t)&&this.events.splice(r,1)}}var o=this;(this.reset=function(){this.components=[],this.allInstances=[],this.events=[]}).call(this),this.addInstance=function(t){var e=this.findComponentInfo(t);e||(e=new r(t.constructor),this.components.push(e));var n=e.addInstance(t);return this.allInstances.push(n),e},this.removeInstance=function(t){var e,n=this.findInstanceInfo(t),r=this.findComponentInfo(t);r.removeInstance(t);var e=this.allInstances.indexOf(n);e>-1&&this.allInstances.splice(e,1)},this.removeComponentInfo=function(t){var e=this.components.indexOf(t);e>-1&&this.components.splice(e,1)},this.findComponentInfo=function(t){for(var e,n=t.attachTo?t:t.constructor,r=0;e=this.components[r];r++)if(e.component===n)return e;return null},this.findInstanceInfo=function(t){var e;e=t.node?function(e){return e.instance===t}:function(e){return e.instance.node===t};var n=this.allInstances.filter(e);return n.length?t.node?n[0]:n:t.node?null:[]},this.trigger=function(){var t=e(this,arguments),n=o.findInstanceInfo(this);n&&n.addTrigger(t)},this.on=function(n){var r,i=t.toArray(arguments,1),s=o.findInstanceInfo(this);if(s){r=n.apply(null,i),r&&(i[i.length-1]=r);var a=e(this,i);s.addBind(a)}},this.off=function(){var t=e(this,arguments),n=o.findInstanceInfo(this);n&&n.removeBind(t)},this.teardown=function(){o.removeInstance(this)},this.withRegistration=function(){this.before("initialize",function(){o.addInstance(this)}),this.after("trigger",o.trigger),this.around("on",o.on),this.after("off",o.off),this.after("teardown",{obj:o,fnName:"teardown"})}}return new r}),define("{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/tools/debug/debug",["../../lib/registry","../../lib/utils"],function(){function t(e,n,r){var r=r||{},i=r.obj||window,o=r.path||(i==window?"window":""),s=Object.keys(i);s.forEach(function(r){(p[e]||e)(n,i,r)&&console.log([o,".",r].join(""),"->",["(",typeof i[r],")"].join(""),i[r]),"[object Object]"==Object.prototype.toString.call(i[r])&&i[r]!=i&&-1==o.split(".").indexOf(r)&&t(e,n,{obj:i[r],path:[o,r].join(".")})})}function e(e,n,r,i){n&&typeof r!=n?console.error([r,"must be",n].join(" ")):t(e,r,i)}function n(t,n){e("name","string",t,n)}function r(t,n){e("nameContains","string",t,n)}function i(t,n){e("type","function",t,n)}function o(t,n){e("value",null,t,n)}function s(t,n){e("valueCoerced",null,t,n)}function a(e,n){t(e,null,n)}function c(){var t=[].slice.call(arguments,0);h.eventNames.length||(h.eventNames="all"),h.actions=t.length?t:"all"}function u(){var t=[].slice.call(arguments,0);h.actions.length||(h.actions="all"),h.eventNames=t.length?t:"all"}function l(){h.actions=[],h.eventNames=[]}function f(){h.actions="all",h.eventNames="all"}var h,p={name:function(t,e,n){return t==n},nameContains:function(t,e,n){return n.indexOf(t)>-1},type:function(t,e,n){return e[n]instanceof t},value:function(t,e,n){return e[n]===t},valueCoerced:function(t,e,n){return e[n]==t}},d="all";return h={actions:d,eventNames:d},{enable:function(t){this.enabled=!!t,t&&window.console&&(console.info("Booting in DEBUG mode"),console.info("You can filter event logging with DEBUG.events.logAll/logNone/logByName/logByAction")),window.DEBUG=this},find:{byName:n,byNameContains:r,byType:i,byValue:o,byValueCoerced:s,custom:a},events:{logFilter:h,logByAction:c,logByName:u,logAll:f,logNone:l}}}),define("{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/compose",["./utils","../tools/debug/debug"],function(t,e){function n(t,e){if(o){var n=Object.create(null);Object.keys(t).forEach(function(r){if(0>s.indexOf(r)){var i=Object.getOwnPropertyDescriptor(t,r);i.writable=e,n[r]=i}}),Object.defineProperties(t,n)}}function r(t,e,n){var r;return o&&t.hasOwnProperty(e)?(r=Object.getOwnPropertyDescriptor(t,e).writable,Object.defineProperty(t,e,{writable:!0}),n.call(t),Object.defineProperty(t,e,{writable:r}),void 0):(n.call(t),void 0)}function i(t,e){t.mixedIn=t.hasOwnProperty("mixedIn")?t.mixedIn:[],e.forEach(function(e){-1==t.mixedIn.indexOf(e)&&(n(t,!1),e.call(t),t.mixedIn.push(e))}),n(t,!0)}var o=e.enabled&&!t.isEnumerable(Object,"getOwnPropertyDescriptor"),s=["mixedIn"];if(o)try{Object.getOwnPropertyDescriptor(Object,"keys")}catch(a){o=!1}return{mixin:i,unlockProperty:r}}),define("{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/advice",["./utils","./compose"],function(t,e){var n={around:function(e,n){return function(){var r=t.toArray(arguments);return n.apply(this,[e.bind(this)].concat(r))}},before:function(e,n){return this.around(e,function(){var e,r=t.toArray(arguments),i=r.shift();return e="function"==typeof n?n:n.obj[n.fnName],e.apply(this,r),i.apply(this,r)})},after:function(e,n){return this.around(e,function(){var e,r=t.toArray(arguments),i=r.shift(),o=(i.unbound||i).apply(this,r);return e="function"==typeof n?n:n.obj[n.fnName],e.apply(this,r),o})},withAdvice:function(){["before","after","around"].forEach(function(t){this[t]=function(r,i){e.unlockProperty(this,r,function(){return this[r]="function"==typeof this[r]?n[t](this[r],i):i})}},this)}};return n}),define("{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/logger",["./compose","./utils"],function(t,e){function n(t){var e=t.tagName?t.tagName.toLowerCase():""+t,n=t.className?"."+t.className:"",r=e+n;return t.tagName?["'","'"].join(r):r}function r(t,e,r){var i,s,a,c,u,l,f,h;"function"==typeof r[r.length-1]&&(a=r.pop(),a=a.unbound||a),"object"==typeof r[r.length-1]&&r.pop(),2==r.length?(s=r[0],i=r[1]):(s=e.$node[0],i=r[0]),window.DEBUG&&(u=DEBUG.events.logFilter,f="all"==u.actions||u.actions.indexOf(t)>-1,l=function(t){return t.test?t:RegExp("^"+t.replace(/\*/g,".*")+"$")},h="all"==u.eventNames||u.eventNames.some(function(t){return l(t).test(i)}),f&&h&&console.info(o[t],t,"["+i+"]",n(s),e.constructor.describe,a&&(c=a.name||a.displayName)&&"->  "+c))}function i(){this.before("trigger",function(){r("trigger",this,e.toArray(arguments))}),this.before("on",function(){r("on",this,e.toArray(arguments))}),this.before("off",function(){r("off",this,e.toArray(arguments))})}var o={on:"<-",trigger:"->",off:"x "};return i}),define("director",[],function(){function t(){return""===c.hash||"#"===c.hash}function e(t,e){for(var n=0;t.length>n;n+=1)if(e(t[n],n,t)===!1)return}function n(t){for(var e=[],n=0,r=t.length;r>n;n++)e=e.concat(t[n]);return e}function r(t,e,n){if(!t.length)return n();var r=0;(function i(){e(t[r],function(e){e||e===!1?(n(e),n=function(){}):(r+=1,r===t.length?n():i())})})()}function i(t,e,n){n=t;for(var r in e)if(e.hasOwnProperty(r)&&(n=e[r](t),n!==t))break;return n===t?"([._a-zA-Z0-9-]+)":n}function o(t,e){for(var n,r=0,o="";n=t.substr(r).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/);)r=n.index+n[0].length,n[0]=n[0].replace(/^\*/,"([_.()!\\ %@&a-zA-Z0-9-]+)"),o+=t.substr(0,n.index)+n[0];t=o+=t.substr(r);var s,a=t.match(/:([^\/]+)/gi);if(a){s=a.length;for(var c=0;s>c;c++)t=t.replace(a[c],i(a[c],e))}return t}function a(t,e,n,r){var i,o=0,s=0,a=0,n=""+(n||"("),r=""+(r||")");for(i=0;t.length>i;i++){var c=t[i];if(c.indexOf(n,o)>c.indexOf(r,o)||~c.indexOf(n,o)&&!~c.indexOf(r,o)||!~c.indexOf(n,o)&&~c.indexOf(r,o)){if(s=c.indexOf(n,o),a=c.indexOf(r,o),~s&&!~a||!~s&&~a){var u=t.slice(0,(i||1)+1).join(e);t=[u].concat(t.slice((i||1)+1))}o=(a>s?a:s)+1,i=0}else o=0}return t}Array.prototype.filter||(Array.prototype.filter=function(t,e){for(var n,r=[],i=0,o=this.length;o>i;i++)i in this&&t.call(e,n=this[i],i,this)&&r.push(n);return r}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var c=document.location,u={mode:"modern",hash:c.hash,history:!1,check:function(){var t=c.hash;t!=this.hash&&(this.hash=t,this.onHashChanged())},fire:function(){"modern"===this.mode?this.history===!0?window.onpopstate():window.onhashchange():this.onHashChanged()},init:function(t,e){function n(t){for(var e=0,n=l.listeners.length;n>e;e++)l.listeners[e](t)}var r=this;if(this.history=e,l.listeners||(l.listeners=[]),"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7))this.history===!0?setTimeout(function(){window.onpopstate=n},500):window.onhashchange=n,this.mode="modern";else{var i=document.createElement("iframe");i.id="state-frame",i.style.display="none",document.body.appendChild(i),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){"location"===event.propertyName&&r.check()}),window.setInterval(function(){r.check()},50),this.onHashChanged=n,this.mode="legacy"}return l.listeners.push(t),this.mode},destroy:function(t){if(l&&l.listeners)for(var e=l.listeners,n=e.length-1;n>=0;n--)e[n]===t&&e.splice(n,1)},setHash:function(t){return"legacy"===this.mode&&this.writeFrame(t),this.history===!0?(window.history.pushState({},document.title,t),this.fire()):c.hash="/"===t[0]?t:"/"+t,this},writeFrame:function(t){var e=document.getElementById("state-frame"),n=e.contentDocument||e.contentWindow.document;n.open(),n.write("<script>_hash = '"+t+"'; onload = parent.listener.syncHash;<script>"),n.close()},syncHash:function(){var t=this._hash;return t!=c.hash&&(c.hash=t),this},onHashChanged:function(){}},l=l=function(t){return this instanceof l?(this.params={},this.routes={},this.methods=["on","once","after","before"],this.scope=[],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.historySupport=null!=(null!=window.history?window.history.pushState:null),this.configure(),this.mount(t||{}),void 0):new l(t)};return l.prototype.init=function(e){var n=this;if(this.handler=function(t){var e=t&&t.newURL||window.location.hash,r=n.history===!0?n.getPath():e.replace(/.*#/,"");n.dispatch("on",r)},u.init(this.handler,this.history),this.history===!1)t()&&e?c.hash=e:t()||n.dispatch("on",c.hash.replace(/^#/,""));else{var r=t()&&e?e:t()?null:c.hash.replace(/^#/,"");r&&window.history.replaceState({},document.title,r),(r||this.run_in_init===!0)&&this.handler()}return this},l.prototype.explode=function(){var t=this.history===!0?this.getPath():c.hash;return"/"===t.charAt(1)&&(t=t.slice(1)),t.slice(1,t.length).split("/")},l.prototype.setRoute=function(t,e,n){var r=this.explode();return"number"==typeof t&&"string"==typeof e?r[t]=e:"string"==typeof n?r.splice(t,e,s):r=[t],u.setHash(r.join("/")),r},l.prototype.insertEx=function(t,e,n,r){return"once"===t&&(t="on",n=function(t){var e=!1;return function(){return e?void 0:(e=!0,t.apply(this,arguments))}}(n)),this._insert(t,e,n,r)},l.prototype.getRoute=function(t){var e=t;if("number"==typeof t)e=this.explode()[t];else if("string"==typeof t){var n=this.explode();e=n.indexOf(t)}else e=this.explode();return e},l.prototype.destroy=function(){return u.destroy(this.handler),this},l.prototype.getPath=function(){var t=window.location.pathname;return"/"!==t.substr(0,1)&&(t="/"+t),t},l.prototype.configure=function(t){t=t||{};for(var e=0;this.methods.length>e;e++)this._methods[this.methods[e]]=!0;return this.recurse=t.recurse||this.recurse||!1,this.async=t.async||!1,this.delimiter=t.delimiter||"/",this.strict=t.strict===void 0?!0:t.strict,this.notfound=t.notfound,this.resource=t.resource,this.history=t.html5history&&this.historySupport||!1,this.run_in_init=this.history===!0&&t.run_handler_in_init!==!1,this.every={after:t.after||null,before:t.before||null,on:t.on||null},this},l.prototype.param=function(t,e){":"!==t[0]&&(t=":"+t);var n=RegExp(t,"g");this.params[t]=function(t){return t.replace(n,e.source||e)}},l.prototype.on=l.prototype.route=function(t,e,n){var r=this;return n||"function"!=typeof e||(n=e,e=t,t="on"),Array.isArray(e)?e.forEach(function(e){r.on(t,e,n)}):(e.source&&(e=e.source.replace(/\\\//gi,"/")),Array.isArray(t)?t.forEach(function(t){r.on(t.toLowerCase(),e,n)}):(e=e.split(RegExp(this.delimiter)),e=a(e,this.delimiter),this.insert(t,this.scope.concat(e),n),void 0))},l.prototype.dispatch=function(t,e,n){function r(){o.last=s.after,o.invoke(o.runlist(s),o,n)}var i,o=this,s=this.traverse(t,e,this.routes,""),a=this._invoked;return this._invoked=!0,s&&0!==s.length?("forward"===this.recurse&&(s=s.reverse()),i=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last],i&&i.length>0&&a?(this.async?this.invoke(i,this,r):(this.invoke(i,this),r()),!0):(r(),!0)):(this.last=[],"function"==typeof this.notfound&&this.invoke([this.notfound],{method:t,path:e},n),!1)},l.prototype.invoke=function(t,n,i){var o=this;this.async?r(t,function s(e,i){return Array.isArray(e)?r(e,s,i):("function"==typeof e&&e.apply(n,t.captures.concat(i)),void 0)},function(){i&&i.apply(n,arguments)}):e(t,function s(r){return Array.isArray(r)?e(r,s):"function"==typeof r?r.apply(n,t.captures||[]):("string"==typeof r&&o.resource&&o.resource[r].apply(n,t.captures||[]),void 0)})},l.prototype.traverse=function(t,e,n,r,i){function o(t){function e(t){for(var n=[],r=0;t.length>r;r++)n[r]=Array.isArray(t[r])?e(t[r]):t[r];return n}function n(t){for(var e=t.length-1;e>=0;e--)Array.isArray(t[e])?(n(t[e]),0===t[e].length&&t.splice(e,1)):i(t[e])||t.splice(e,1)}if(!i)return t;var r=e(t);return r.matched=t.matched,r.captures=t.captures,r.after=t.after.filter(i),n(r),r}var s,a,c,u,l=[];if(e===this.delimiter&&n[t])return u=[[n.before,n[t]].filter(Boolean)],u.after=[n.after].filter(Boolean),u.matched=!0,u.captures=[],o(u);for(var f in n)if(n.hasOwnProperty(f)&&(!this._methods[f]||this._methods[f]&&"object"==typeof n[f]&&!Array.isArray(n[f]))){if(s=a=r+this.delimiter+f,this.strict||(a+="["+this.delimiter+"]?"),c=e.match(RegExp("^"+a)),!c)continue;if(c[0]&&c[0]==e&&n[f][t])return u=[[n[f].before,n[f][t]].filter(Boolean)],u.after=[n[f].after].filter(Boolean),u.matched=!0,u.captures=c.slice(1),this.recurse&&n===this.routes&&(u.push([n.before,n.on].filter(Boolean)),u.after=u.after.concat([n.after].filter(Boolean))),o(u);if(u=this.traverse(t,e,n[f],s),u.matched)return u.length>0&&(l=l.concat(u)),this.recurse&&(l.push([n[f].before,n[f].on].filter(Boolean)),u.after=u.after.concat([n[f].after].filter(Boolean)),n===this.routes&&(l.push([n.before,n.on].filter(Boolean)),u.after=u.after.concat([n.after].filter(Boolean)))),l.matched=!0,l.captures=u.captures,l.after=u.after,o(l)}return!1},l.prototype.insert=function(t,e,n,r){var i,s,a,c,u;if(e=e.filter(function(t){return t&&t.length>0}),r=r||this.routes,u=e.shift(),/\:|\*/.test(u)&&!/\\d|\\w/.test(u)&&(u=o(u,this.params)),e.length>0)return r[u]=r[u]||{},this.insert(t,e,n,r[u]);if(u||e.length||r!==this.routes){if(s=typeof r[u],a=Array.isArray(r[u]),r[u]&&!a&&"object"==s)switch(i=typeof r[u][t]){case"function":return r[u][t]=[r[u][t],n],void 0;case"object":return r[u][t].push(n),void 0;case"undefined":return r[u][t]=n,void 0}else if("undefined"==s)return c={},c[t]=n,r[u]=c,void 0;throw Error("Invalid route context: "+s)}switch(i=typeof r[t]){case"function":return r[t]=[r[t],n],void 0;case"object":return r[t].push(n),void 0;case"undefined":return r[t]=n,void 0}},l.prototype.extend=function(t){function e(t){r._methods[t]=!0,r[t]=function(){var e=1===arguments.length?[t,""]:[t];r.on.apply(r,e.concat(Array.prototype.slice.call(arguments)))}}var n,r=this,i=t.length;for(n=0;i>n;n++)e(t[n])},l.prototype.runlist=function(t){var e=this.every&&this.every.before?[this.every.before].concat(n(t)):n(t);return this.every&&this.every.on&&e.push(this.every.on),e.captures=t.captures,e.source=t.source,e},l.prototype.mount=function(t,e){function n(e,n){var i=e,o=e.split(r.delimiter),s=typeof t[e],c=""===o[0]||!r._methods[o[0]],u=c?"on":i;return c&&(i=i.slice((i.match(RegExp(r.delimiter))||[""])[0].length),o.shift()),c&&"object"===s&&!Array.isArray(t[e])?(n=n.concat(o),r.mount(t[e],n),void 0):(c&&(n=n.concat(i.split(r.delimiter)),n=a(n,r.delimiter)),r.insert(u,n,t[e]),void 0)}if(t&&"object"==typeof t&&!Array.isArray(t)){var r=this;e=e||[],Array.isArray(e)||(e=e.split(r.delimiter));for(var i in t)t.hasOwnProperty(i)&&n(i,e.slice(0))}},{Router:l}}),define("src/modules/Ingredients/boot",[],function(){var t=function(){require(["src/modules/Ingredients/Calculator","src/modules/Ingredients/Form"],function(t,e){t.calculatorComponent.attachTo("#calculatorComponent"),e.formComponent.attachTo("#formComponent")})};return{initialize:t}}),define("src/modules/sidebar/boot",[],function(){var t=function(){require(["jquery","mustache","src/templates","src/modules/sidebar/nav"],function(t,e,n,r){t("#sidebar").html(e.render(n.sidebarTemplate,{})),r.navbarComponent.attachTo("#navbar")})},e=function(t){require(["jquery","mustache","src/templates","src/modules/sidebar/nav"],function(e){e("li.active").each(function(){e(this).removeClass("active")}),e(t).addClass("active")})};return{initialize:t,toggleNavbar:e}}),define("{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/component",["./advice","./utils","./compose","./registry"],function(t,e,n,r){function i(t){t.events.slice().forEach(function(t){var e=[t.type];t.element&&e.unshift(t.element),"function"==typeof t.callback&&e.push(t.callback),this.off.apply(this,e)},t.instance)}function o(){this.trigger("componentTearDown"),i(r.findInstanceInfo(this))}function s(){var t=r.findComponentInfo(this);t&&t.instances.slice().forEach(function(t){t.instance.teardown()})}function a(t,e){try{window.postMessage(e,"*")}catch(n){throw console.log("unserializable data for event",t,":",e),Error(["The event",t,"on component",this.describe,"was triggered with non-serializable data"].join(" "))}}function c(){this.trigger=function(){var t,n,r,i,o,s=e.toArray(arguments),c=s[s.length-1];"string"==typeof c||c&&c.defaultBehavior||(r=s.pop()),t=2==s.length?$(s.shift()):this.$node,i=s[0],i.defaultBehavior&&(o=i.defaultBehavior,i=$.Event(i.type)),n=i.type||i,window.DEBUG&&window.postMessage&&a.call(this,n,r),"object"==typeof this.attr.eventData&&(r=$.extend(!0,{},this.attr.eventData,r));var u=t.trigger(i||n,r);return o&&!i.isDefaultPrevented()&&(this[o]||o).call(this),u},this.on=function(){var t,n,r,i,o=e.toArray(arguments);if(i="object"==typeof o[o.length-1]?e.delegate(this.resolveDelegateRules(o.pop())):o.pop(),t=2==o.length?$(o.shift()):this.$node,n=o[0],"function"!=typeof i&&"object"!=typeof i)throw Error("Unable to bind to '"+n+"' because the given callback is not a function or an object");return r=i.bind(this),r.target=i,i.guid&&(r.guid=i.guid),t.on(n,r),i.guid=r.guid,r},this.off=function(){var t,n,r,i=e.toArray(arguments);return"function"==typeof i[i.length-1]&&(r=i.pop()),t=2==i.length?$(i.shift()):this.$node,n=i[0],t.off(n,r)},this.resolveDelegateRules=function(t){var e={};return Object.keys(t).forEach(function(n){if(!this.attr.hasOwnProperty(n))throw Error('Component "'+this.describe+'" wants to listen on "'+n+'" but no such attribute was defined.');e[this.attr[n]]=t[n]},this),e},this.defaultAttrs=function(t){e.push(this.defaults,t,!0)||(this.defaults=t)},this.select=function(t){return this.$node.find(this.attr[t])},this.initialize=$.noop,this.teardown=o}function u(t){if(!t)throw Error("Component needs to be attachTo'd a jQuery object, native node or selector string");var n=e.merge.apply(e,e.toArray(arguments,1));$(t).each(function(t,e){new this(e,n)}.bind(this))}function l(){function i(t,n){var r={},i=0;if(!t)throw Error("Component needs a node");t.jquery?(this.node=t[0],this.$node=t):(this.node=t,this.$node=$(t)),this.describe=this.constructor.describe,this.bind=function(t){var n;if(t.uuid&&(n=r[t.uuid]))return n;var o=e.toArray(arguments,1);return o.unshift(this),n=t.bind.apply(t,o),n.target=t,t.uuid=i++,r[t.uuid]=n,n},this.attr=e.merge(this.defaults,n),this.defaults&&Object.keys(this.defaults).forEach(function(t){if(null===this.defaults[t]&&null===this.attr[t])throw Error('Required attribute "'+t+'" not specified in attachTo for component "'+this.describe+'".')},this),this.initialize.call(this,n||{}),this.trigger("componentInitialized")}var o=e.toArray(arguments);return i.toString=function(){var t=o.map(function(t){if($.browser.msie){var e=(""+t).match(f);return e&&e[1]?e[1]:""}return t.name}).join(", ").replace(h,"");return t},i.describe=""+i,i.attachTo=u,i.teardownAll=s,o.unshift(c,t.withAdvice,r.withRegistration),n.mixin(i.prototype,o),i}var f=/function (.*?)\s?\(/,h=/\s\,/g;return l.teardownAll=function(){r.components.slice().forEach(function(t){t.component.teardownAll()
}),r.reset()},l}),define("src/templates",{IngredientsTemplate:"<div class='row-fluid' id='calculatorComponent'> <h4>Ingredients calculator</h4> <div class='row-fluid'> <div class='row-fluid itemTopRow'> <div class='span7 itemName'>Item Name</div> <div class='span1 itemName'>Price</div> <div class='span1 itemName'>Quantity</div> <div class='span1 itemName'>Unit</div> <div class='span2 itemValue'>Total price</div> </div> </div> <div class='row-fluid' id='itemList'></div> <div class='row-fluid'> <div class='row-fluid itemBottomRow'> <div class='span9 itemName'>Total</div> <div class='span1 offset1 itemValue' id='totalPriceValue'>0.00</div> </div> </div> <form> <fieldset> <h4>Add a new Ingredient</h4> <label>Ingredient Name</label> <div class='control-group' id='warningGroup'> <div class='controls' id='inputControls'></div> </div> </fieldset> </form> </div> <div class='row-fluid' id='formComponent'> <a class='btn btn-success' id='addNewIngredientButton'> <i class='icon-plus-sign icon-white'></i></a>&nbsp;&nbsp;Can't find an item in your list? Why not add another? <div class='modal hide fade' id='addNewIngredientFormModal'> <div class='modal-header'> <button id='addIngredientModalClose' type='button' class='close' data-dismiss='modal' aria-hidden='true' data-loading-text='&times;'>&times;</button> <h3>Add a new Ingredient</h3> </div> <div class='modal-body'> <form id='addIngredientmodalForm'> <fieldset> <div class='row-fluid'> <div class='row-fluid' id='formAlertArea'> </div> <label>Item Name</label> <input name='NAME' class='input-block-level' placeholder='Item Name' type='text'> <label>Brand</label> <input name='BRAND' class='input-block-level' placeholder='Brand' type='text'> <label>Unit</label> <input name='UNIT' class='input-block-level' placeholder='Unit' type='text'> <label>Unit Cost</label> <input name='PRICE' class='input-block-level' placeholder='Unit Cost' type='number'> <input id='formTimeStamp' type='hidden' name='LASTTIMESTAMP' value=0> </div> </fieldset> </form> </div> <div class='modal-footer'> <button id='addIngredientFormSubmit' type='button' class='btn btn-primary' data-loading-text='Adding...'>Add</button> </div> </div>",sidebarTemplate:"<div class='row-fluid'> <div class='span12' id='navbar'> <ul class='nav nav-tabs nav-stacked' id='navbarUl'> <li class='active' id='nav1'> <a href='#/home'><i class='icon-home icon-black'></i>&nbsp;&nbsp;Home</a> </li> <li id='nav2'> <a href='#/about'><i class='icon-question-sign icon-black'></i>&nbsp;&nbsp;About Us</a> </li> <li id='nav3'> <a href='#/ingredients'><i class='icon-list-alt icon-black'></i>&nbsp;&nbsp;Ingredients</a> </li> </ul> </div> </div>"}),define("router",["director","src/modules/Ingredients/boot","src/modules/sidebar/boot","jquery","mustache","{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/component","src/templates"],function(t,e,n,r,i,o,s){var a=function(){var a=function(){o.teardownAll(),r("#content").html(i.render(s.IngredientsTemplate)),e.initialize(),n.toggleNavbar("#nav3")},c=function(){o.teardownAll(),r("#content").html(" "),n.toggleNavbar("#nav1")},u={"/ingredients":a,"":c,"/home":c},l=t.Router(u);l.init()};return{initialize:a}}),define("src/application",["jquery","router","src/modules/sidebar/boot"],function(t,e,n){var r=function(){n.initialize(),e.initialize()};return{initialize:r}}),require.config({paths:{jquery:"{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/jquery/jquery.min",underscore:"{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/underscore/underscore-min",director:"{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/director/build/director_AMD",shim:"{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/es5-shim/es5-shim.min",sham:"{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/es5-shim/es5-sham.min",router:"src/router",mustache:"{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/mustache/mustache"}}),require(["jquery","shim","sham","{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/compose","{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/registry","{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/advice","{
  "name": "node-example",
  "version": "0.0.1",
  "scripts": {
    "start": "node web"
  },
  "dependencies": {
    "express": "latest",
    "stylus":"latest",
    "nib":"latest",
    "bower":"latest",
    "jade":"latest",
    "less":"latest",
    "recess":"latest",
    "connect":"latest",
    "uglify-js":"latest",
    "jshint":"latest",
    "gzippo":"latest"
  },
  "engines": {
    "node": "0.8.x",
    "npm": "1.1.x"
  }
assets/js/releaseComponents/flight/lib/logger","src/application"],function(t,e,n,r,i,o,s,a){r.mixin(i,[o.withAdvice,s]),a.initialize()}),define("entryPoint",function(){});