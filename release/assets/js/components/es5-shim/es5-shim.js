// Copyright 2009-2012 by contributors, MIT License

(function(t){"function"==typeof define?define(t):"function"==typeof YUI?YUI.add("es5",t):t()})(function(){Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError("Function.prototype.bind called on incompatible "+e);var n=h.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=e.prototype;var r=new o,s=e.apply(r,n.concat(h.call(arguments)));return Object(s)===s?s:r}return e.apply(t,n.concat(h.call(arguments)))};return i});var t,e,n,i,o,r=Function.prototype.call,s=Array.prototype,a=Object.prototype,h=s.slice,c=r.bind(a.toString),u=r.bind(a.hasOwnProperty);if((o=u(a,"__defineGetter__"))&&(t=r.bind(a.__defineGetter__),e=r.bind(a.__defineSetter__),n=r.bind(a.__lookupGetter__),i=r.bind(a.__lookupSetter__)),Array.isArray||(Array.isArray=function(t){return"[object Array]"==c(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e=b(this),n=arguments[1],i=-1,o=e.length>>>0;if("[object Function]"!=c(t))throw new TypeError;for(;o>++i;)i in e&&t.call(n,e[i],i,e)}),Array.prototype.map||(Array.prototype.map=function(t){var e=b(this),n=e.length>>>0,i=Array(n),o=arguments[1];if("[object Function]"!=c(t))throw new TypeError(t+" is not a function");for(var r=0;n>r;r++)r in e&&(i[r]=t.call(o,e[r],r,e));return i}),Array.prototype.filter||(Array.prototype.filter=function(t){var e,n=b(this),i=n.length>>>0,o=[],r=arguments[1];if("[object Function]"!=c(t))throw new TypeError(t+" is not a function");for(var s=0;i>s;s++)s in n&&(e=n[s],t.call(r,e,s,n)&&o.push(e));return o}),Array.prototype.every||(Array.prototype.every=function(t){var e=b(this),n=e.length>>>0,i=arguments[1];if("[object Function]"!=c(t))throw new TypeError(t+" is not a function");for(var o=0;n>o;o++)if(o in e&&!t.call(i,e[o],o,e))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){var e=b(this),n=e.length>>>0,i=arguments[1];if("[object Function]"!=c(t))throw new TypeError(t+" is not a function");for(var o=0;n>o;o++)if(o in e&&t.call(i,e[o],o,e))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e=b(this),n=e.length>>>0;if("[object Function]"!=c(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,o=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in e){i=e[o++];break}if(++o>=n)throw new TypeError("reduce of empty array with no initial value")}for(;n>o;o++)o in e&&(i=t.call(void 0,i,e[o],o,e));return i}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var e=b(this),n=e.length>>>0;if("[object Function]"!=c(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var i,o=n-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in e){i=e[o--];break}if(0>--o)throw new TypeError("reduceRight of empty array with no initial value")}do o in this&&(i=t.call(void 0,i,e[o],o,e));while(o--);return i}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=b(this),n=e.length>>>0;if(!n)return-1;var i=0;for(arguments.length>1&&(i=g(arguments[1])),i=i>=0?i:Math.max(0,n+i);n>i;i++)if(i in e&&e[i]===t)return i;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){var e=b(this),n=e.length>>>0;if(!n)return-1;var i=n-1;for(arguments.length>1&&(i=Math.min(i,g(arguments[1]))),i=i>=0?i:n-Math.abs(i);i>=0;i--)if(i in e&&t===e[i])return i;return-1}),!Object.keys){var f=!0,l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=l.length;for(var d in{toString:null})f=!1;Object.keys=function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var e=[];for(var n in t)u(t,n)&&e.push(n);if(f)for(var i=0,o=p;o>i;i++){var r=l[i];u(t,r)&&e.push(r)}return e}}Date.prototype.toISOString&&-1!==new Date(-621987552e5).toISOString().indexOf("-000001")||(Date.prototype.toISOString=function(){var t,e,n,i;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(t=[this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],i=this.getUTCFullYear(),i=(0>i?"-":i>9999?"+":"")+("00000"+Math.abs(i)).slice(i>=0&&9999>=i?-4:-6),e=t.length;e--;)n=t[e],10>n&&(t[e]="0"+n);return i+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}),Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError("toISOString property is not callable");return this.toISOString()}),Date.parse&&864e13===Date.parse("+275760-09-13T00:00:00.000Z")||(Date=function(t){var e=function e(n,i,o,r,s,a,h){var c=arguments.length;if(this instanceof t){var u=1==c&&n+""===n?new t(e.parse(n)):c>=7?new t(n,i,o,r,s,a,h):c>=6?new t(n,i,o,r,s,a):c>=5?new t(n,i,o,r,s):c>=4?new t(n,i,o,r):c>=3?new t(n,i,o):c>=2?new t(n,i):c>=1?new t(n):new t;return u.constructor=e,u}return t.apply(this,arguments)},n=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(?:Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");for(var i in t)e[i]=t[i];return e.now=t.now,e.UTC=t.UTC,e.prototype=t.prototype,e.prototype.constructor=e,e.parse=function(e){var i=n.exec(e);if(i){i.shift();for(var o=1;7>o;o++)i[o]=+(i[o]||(3>o?1:0)),1==o&&i[o]--;var r=+i.pop(),s=+i.pop(),a=i.pop(),h=0;if(a){if(s>23||r>59)return 0/0;h=6e4*(60*s+r)*("+"==a?-1:1)}var c=+i[0];return c>=0&&99>=c?(i[0]=c+400,t.UTC.apply(this,i)+h-126227808e5):t.UTC.apply(this,i)+h}return t.parse.apply(this,arguments)},e}(Date));var y="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||y.trim()){y="["+y+"]";var v=RegExp("^"+y+y+"*"),m=RegExp(y+y+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return(this+"").replace(v,"").replace(m,"")}}var g=function(t){return t=+t,t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t},w="a"!="a"[0],b=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return w&&"string"==typeof t&&t?t.split(""):Object(t)}});