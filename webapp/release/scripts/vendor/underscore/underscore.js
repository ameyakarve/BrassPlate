(function(){var t=this,e=t._,n={},i=Array.prototype,o=Object.prototype,r=Function.prototype,s=i.push,a=i.slice,u=i.concat,c=o.toString,l=o.hasOwnProperty,h=i.forEach,f=i.map,p=i.reduce,d=i.reduceRight,m=i.filter,g=i.every,v=i.some,y=i.indexOf,w=i.lastIndexOf,b=Array.isArray,$=Object.keys,x=r.bind,C=function(t){return t instanceof C?t:this instanceof C?(this._wrapped=t,void 0):new C(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=C),exports._=C):t._=C,C.VERSION="1.4.4";var k=C.each=C.forEach=function(t,e,i){if(null!=t)if(h&&t.forEach===h)t.forEach(e,i);else if(t.length===+t.length){for(var o=0,r=t.length;r>o;o++)if(e.call(i,t[o],o,t)===n)return}else for(var s in t)if(C.has(t,s)&&e.call(i,t[s],s,t)===n)return};C.map=C.collect=function(t,e,n){var i=[];return null==t?i:f&&t.map===f?t.map(e,n):(k(t,function(t,o,r){i[i.length]=e.call(n,t,o,r)}),i)};var _="Reduce of empty array with no initial value";C.reduce=C.foldl=C.inject=function(t,e,n,i){var o=arguments.length>2;if(null==t&&(t=[]),p&&t.reduce===p)return i&&(e=C.bind(e,i)),o?t.reduce(e,n):t.reduce(e);if(k(t,function(t,r,s){o?n=e.call(i,n,t,r,s):(n=t,o=!0)}),!o)throw new TypeError(_);return n},C.reduceRight=C.foldr=function(t,e,n,i){var o=arguments.length>2;if(null==t&&(t=[]),d&&t.reduceRight===d)return i&&(e=C.bind(e,i)),o?t.reduceRight(e,n):t.reduceRight(e);var r=t.length;if(r!==+r){var s=C.keys(t);r=s.length}if(k(t,function(a,u,c){u=s?s[--r]:--r,o?n=e.call(i,n,t[u],u,c):(n=t[u],o=!0)}),!o)throw new TypeError(_);return n},C.find=C.detect=function(t,e,n){var i;return j(t,function(t,o,r){return e.call(n,t,o,r)?(i=t,!0):void 0}),i},C.filter=C.select=function(t,e,n){var i=[];return null==t?i:m&&t.filter===m?t.filter(e,n):(k(t,function(t,o,r){e.call(n,t,o,r)&&(i[i.length]=t)}),i)},C.reject=function(t,e,n){return C.filter(t,function(t,i,o){return!e.call(n,t,i,o)},n)},C.every=C.all=function(t,e,i){e||(e=C.identity);var o=!0;return null==t?o:g&&t.every===g?t.every(e,i):(k(t,function(t,r,s){return(o=o&&e.call(i,t,r,s))?void 0:n}),!!o)};var j=C.some=C.any=function(t,e,i){e||(e=C.identity);var o=!1;return null==t?o:v&&t.some===v?t.some(e,i):(k(t,function(t,r,s){return o||(o=e.call(i,t,r,s))?n:void 0}),!!o)};C.contains=C.include=function(t,e){return null==t?!1:y&&t.indexOf===y?-1!=t.indexOf(e):j(t,function(t){return t===e})},C.invoke=function(t,e){var n=a.call(arguments,2),i=C.isFunction(e);return C.map(t,function(t){return(i?e:t[e]).apply(t,n)})},C.pluck=function(t,e){return C.map(t,function(t){return t[e]})},C.where=function(t,e,n){return C.isEmpty(e)?n?null:[]:C[n?"find":"filter"](t,function(t){for(var n in e)if(e[n]!==t[n])return!1;return!0})},C.findWhere=function(t,e){return C.where(t,e,!0)},C.max=function(t,e,n){if(!e&&C.isArray(t)&&t[0]===+t[0]&&65535>t.length)return Math.max.apply(Math,t);if(!e&&C.isEmpty(t))return-1/0;var i={computed:-1/0,value:-1/0};return k(t,function(t,o,r){var s=e?e.call(n,t,o,r):t;s>=i.computed&&(i={value:t,computed:s})}),i.value},C.min=function(t,e,n){if(!e&&C.isArray(t)&&t[0]===+t[0]&&65535>t.length)return Math.min.apply(Math,t);if(!e&&C.isEmpty(t))return 1/0;var i={computed:1/0,value:1/0};return k(t,function(t,o,r){var s=e?e.call(n,t,o,r):t;i.computed>s&&(i={value:t,computed:s})}),i.value},C.shuffle=function(t){var e,n=0,i=[];return k(t,function(t){e=C.random(n++),i[n-1]=i[e],i[e]=t}),i};var T=function(t){return C.isFunction(t)?t:function(e){return e[t]}};C.sortBy=function(t,e,n){var i=T(e);return C.pluck(C.map(t,function(t,e,o){return{value:t,index:e,criteria:i.call(n,t,e,o)}}).sort(function(t,e){var n=t.criteria,i=e.criteria;if(n!==i){if(n>i||void 0===n)return 1;if(i>n||void 0===i)return-1}return t.index<e.index?-1:1}),"value")};var E=function(t,e,n,i){var o={},r=T(e||C.identity);return k(t,function(e,s){var a=r.call(n,e,s,t);i(o,a,e)}),o};C.groupBy=function(t,e,n){return E(t,e,n,function(t,e,n){(C.has(t,e)?t[e]:t[e]=[]).push(n)})},C.countBy=function(t,e,n){return E(t,e,n,function(t,e){C.has(t,e)||(t[e]=0),t[e]++})},C.sortedIndex=function(t,e,n,i){n=null==n?C.identity:T(n);for(var o=n.call(i,e),r=0,s=t.length;s>r;){var a=r+s>>>1;o>n.call(i,t[a])?r=a+1:s=a}return r},C.toArray=function(t){return t?C.isArray(t)?a.call(t):t.length===+t.length?C.map(t,C.identity):C.values(t):[]},C.size=function(t){return null==t?0:t.length===+t.length?t.length:C.keys(t).length},C.first=C.head=C.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:a.call(t,0,e)},C.initial=function(t,e,n){return a.call(t,0,t.length-(null==e||n?1:e))},C.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:a.call(t,Math.max(t.length-e,0))},C.rest=C.tail=C.drop=function(t,e,n){return a.call(t,null==e||n?1:e)},C.compact=function(t){return C.filter(t,C.identity)};var O=function(t,e,n){return k(t,function(t){C.isArray(t)?e?s.apply(n,t):O(t,e,n):n.push(t)}),n};C.flatten=function(t,e){return O(t,e,[])},C.without=function(t){return C.difference(t,a.call(arguments,1))},C.uniq=C.unique=function(t,e,n,i){C.isFunction(e)&&(i=n,n=e,e=!1);var o=n?C.map(t,n,i):t,r=[],s=[];return k(o,function(n,i){(e?i&&s[s.length-1]===n:C.contains(s,n))||(s.push(n),r.push(t[i]))}),r},C.union=function(){return C.uniq(u.apply(i,arguments))},C.intersection=function(t){var e=a.call(arguments,1);return C.filter(C.uniq(t),function(t){return C.every(e,function(e){return C.indexOf(e,t)>=0})})},C.difference=function(t){var e=u.apply(i,a.call(arguments,1));return C.filter(t,function(t){return!C.contains(e,t)})},C.zip=function(){for(var t=a.call(arguments),e=C.max(C.pluck(t,"length")),n=Array(e),i=0;e>i;i++)n[i]=C.pluck(t,""+i);return n},C.object=function(t,e){if(null==t)return{};for(var n={},i=0,o=t.length;o>i;i++)e?n[t[i]]=e[i]:n[t[i][0]]=t[i][1];return n},C.indexOf=function(t,e,n){if(null==t)return-1;var i=0,o=t.length;if(n){if("number"!=typeof n)return i=C.sortedIndex(t,e),t[i]===e?i:-1;i=0>n?Math.max(0,o+n):n}if(y&&t.indexOf===y)return t.indexOf(e,n);for(;o>i;i++)if(t[i]===e)return i;return-1},C.lastIndexOf=function(t,e,n){if(null==t)return-1;var i=null!=n;if(w&&t.lastIndexOf===w)return i?t.lastIndexOf(e,n):t.lastIndexOf(e);for(var o=i?n:t.length;o--;)if(t[o]===e)return o;return-1},C.range=function(t,e,n){1>=arguments.length&&(e=t||0,t=0),n=arguments[2]||1;for(var i=Math.max(Math.ceil((e-t)/n),0),o=0,r=Array(i);i>o;)r[o++]=t,t+=n;return r},C.bind=function(t,e){if(t.bind===x&&x)return x.apply(t,a.call(arguments,1));var n=a.call(arguments,2);return function(){return t.apply(e,n.concat(a.call(arguments)))}},C.partial=function(t){var e=a.call(arguments,1);return function(){return t.apply(this,e.concat(a.call(arguments)))}},C.bindAll=function(t){var e=a.call(arguments,1);return 0===e.length&&(e=C.functions(t)),k(e,function(e){t[e]=C.bind(t[e],t)}),t},C.memoize=function(t,e){var n={};return e||(e=C.identity),function(){var i=e.apply(this,arguments);return C.has(n,i)?n[i]:n[i]=t.apply(this,arguments)}},C.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},C.defer=function(t){return C.delay.apply(C,[t,1].concat(a.call(arguments,1)))},C.throttle=function(t,e){var n,i,o,r,s=0,a=function(){s=new Date,o=null,r=t.apply(n,i)};return function(){var u=new Date,c=e-(u-s);return n=this,i=arguments,0>=c?(clearTimeout(o),o=null,s=u,r=t.apply(n,i)):o||(o=setTimeout(a,c)),r}},C.debounce=function(t,e,n){var i,o;return function(){var r=this,s=arguments,a=function(){i=null,n||(o=t.apply(r,s))},u=n&&!i;return clearTimeout(i),i=setTimeout(a,e),u&&(o=t.apply(r,s)),o}},C.once=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},C.wrap=function(t,e){return function(){var n=[t];return s.apply(n,arguments),e.apply(this,n)}},C.compose=function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},C.after=function(t,e){return 0>=t?e():function(){return 1>--t?e.apply(this,arguments):void 0}},C.keys=$||function(t){if(t!==Object(t))throw new TypeError("Invalid object");var e=[];for(var n in t)C.has(t,n)&&(e[e.length]=n);return e},C.values=function(t){var e=[];for(var n in t)C.has(t,n)&&e.push(t[n]);return e},C.pairs=function(t){var e=[];for(var n in t)C.has(t,n)&&e.push([n,t[n]]);return e},C.invert=function(t){var e={};for(var n in t)C.has(t,n)&&(e[t[n]]=n);return e},C.functions=C.methods=function(t){var e=[];for(var n in t)C.isFunction(t[n])&&e.push(n);return e.sort()},C.extend=function(t){return k(a.call(arguments,1),function(e){if(e)for(var n in e)t[n]=e[n]}),t},C.pick=function(t){var e={},n=u.apply(i,a.call(arguments,1));return k(n,function(n){n in t&&(e[n]=t[n])}),e},C.omit=function(t){var e={},n=u.apply(i,a.call(arguments,1));for(var o in t)C.contains(n,o)||(e[o]=t[o]);return e},C.defaults=function(t){return k(a.call(arguments,1),function(e){if(e)for(var n in e)null==t[n]&&(t[n]=e[n])}),t},C.clone=function(t){return C.isObject(t)?C.isArray(t)?t.slice():C.extend({},t):t},C.tap=function(t,e){return e(t),t};var S=function(t,e,n,i){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof C&&(t=t._wrapped),e instanceof C&&(e=e._wrapped);var o=c.call(t);if(o!=c.call(e))return!1;switch(o){case"[object String]":return t==e+"";case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var r=n.length;r--;)if(n[r]==t)return i[r]==e;n.push(t),i.push(e);var s=0,a=!0;if("[object Array]"==o){if(s=t.length,a=s==e.length)for(;s--&&(a=S(t[s],e[s],n,i)););}else{var u=t.constructor,l=e.constructor;if(u!==l&&!(C.isFunction(u)&&u instanceof u&&C.isFunction(l)&&l instanceof l))return!1;for(var h in t)if(C.has(t,h)&&(s++,!(a=C.has(e,h)&&S(t[h],e[h],n,i))))break;if(a){for(h in e)if(C.has(e,h)&&!s--)break;a=!s}}return n.pop(),i.pop(),a};C.isEqual=function(t,e){return S(t,e,[],[])},C.isEmpty=function(t){if(null==t)return!0;if(C.isArray(t)||C.isString(t))return 0===t.length;for(var e in t)if(C.has(t,e))return!1;return!0},C.isElement=function(t){return!(!t||1!==t.nodeType)},C.isArray=b||function(t){return"[object Array]"==c.call(t)},C.isObject=function(t){return t===Object(t)},k(["Arguments","Function","String","Number","Date","RegExp"],function(t){C["is"+t]=function(e){return c.call(e)=="[object "+t+"]"}}),C.isArguments(arguments)||(C.isArguments=function(t){return!(!t||!C.has(t,"callee"))}),C.isFunction=function(t){return"function"==typeof t},C.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},C.isNaN=function(t){return C.isNumber(t)&&t!=+t},C.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==c.call(t)},C.isNull=function(t){return null===t},C.isUndefined=function(t){return void 0===t},C.has=function(t,e){return l.call(t,e)},C.noConflict=function(){return t._=e,this},C.identity=function(t){return t},C.times=function(t,e,n){for(var i=Array(t),o=0;t>o;o++)i[o]=e.call(n,o);return i},C.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))};var A={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};A.unescape=C.invert(A.escape);var D={escape:RegExp("["+C.keys(A.escape).join("")+"]","g"),unescape:RegExp("("+C.keys(A.unescape).join("|")+")","g")};C.each(["escape","unescape"],function(t){C[t]=function(e){return null==e?"":(""+e).replace(D[t],function(e){return A[t][e]})}}),C.result=function(t,e){if(null==t)return null;var n=t[e];return C.isFunction(n)?n.call(t):n},C.mixin=function(t){k(C.functions(t),function(e){var n=C[e]=t[e];C.prototype[e]=function(){var t=[this._wrapped];return s.apply(t,arguments),R.call(this,n.apply(C,t))}})};var q=0;C.uniqueId=function(t){var e=++q+"";return t?t+e:e},C.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var P=/(.)^/,I={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},M=/\\|'|\r|\n|\t|\u2028|\u2029/g;C.template=function(t,e,n){var i;n=C.defaults({},n,C.templateSettings);var o=RegExp([(n.escape||P).source,(n.interpolate||P).source,(n.evaluate||P).source].join("|")+"|$","g"),r=0,s="__p+='";t.replace(o,function(e,n,i,o,a){return s+=t.slice(r,a).replace(M,function(t){return"\\"+I[t]}),n&&(s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),i&&(s+="'+\n((__t=("+i+"))==null?'':__t)+\n'"),o&&(s+="';\n"+o+"\n__p+='"),r=a+e.length,e}),s+="';\n",n.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{i=Function(n.variable||"obj","_",s)}catch(a){throw a.source=s,a}if(e)return i(e,C);var u=function(t){return i.call(this,t,C)};return u.source="function("+(n.variable||"obj")+"){\n"+s+"}",u},C.chain=function(t){return C(t).chain()};var R=function(t){return this._chain?C(t).chain():t};C.mixin(C),k(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=i[t];C.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!=t&&"splice"!=t||0!==n.length||delete n[0],R.call(this,n)}}),k(["concat","join","slice"],function(t){var e=i[t];C.prototype[t]=function(){return R.call(this,e.apply(this._wrapped,arguments))}}),C.extend(C.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return C})}).call(this);