(function(){define("vendor/bootstrap/bootstrap-alert",["jquery"],function(){!function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){i.trigger("closed").remove()}var i,r=t(this),o=r.attr("data-target");o||(o=r.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),i=t(o),e&&e.preventDefault(),i.length||(i=r.hasClass("alert")?r:r.parent()),i.trigger(e=t.Event("close")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.on(t.support.transition.end,n):n())};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),r=i.data("alert");r||i.data("alert",r=new n(this)),"string"==typeof e&&r[e].call(i)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery)}),define("vendor/bootstrap/bootstrap-button",["jquery"],function(){!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,i=n.data(),r=n.is("input")?"val":"html";t+="Text",i.resetText||n.data("resetText",n[r]()),n[r](i[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),r=i.data("button"),o="object"==typeof n&&n;r||i.data("button",r=new e(this,o)),"toggle"==n?r.toggle():n&&r.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery)}),define("vendor/bootstrap/bootstrap-modal",["jquery"],function(){!function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault(),e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()}};var n=t.fn.modal;t.fn.modal=function(n){return this.each(function(){var i=t(this),r=i.data("modal"),o=t.extend({},t.fn.modal.defaults,i.data(),"object"==typeof n&&n);r||i.data("modal",r=new e(this,o)),"string"==typeof n?r[n]():o.show&&r.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),i=n.attr("href"),r=t(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),o=r.data("modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},r.data(),n.data());e.preventDefault(),r.modal(o).one("hide",function(){n.focus()})})}(window.jQuery)}),define("vendor/bootstrap/bootstrap-combined",["jquery"],function(){return!function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault(),e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()}};var n=t.fn.modal;t.fn.modal=function(n){return this.each(function(){var i=t(this),r=i.data("modal"),o=t.extend({},t.fn.modal.defaults,i.data(),"object"==typeof n&&n);r||i.data("modal",r=new e(this,o)),"string"==typeof n?r[n]():o.show&&r.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),i=n.attr("href"),r=t(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),o=r.data("modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},r.data(),n.data());e.preventDefault(),r.modal(o).one("hide",function(){n.focus()})})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,i=n.data(),r=n.is("input")?"val":"html";t+="Text",i.resetText||n.data("resetText",n[r]()),n[r](i[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),r=i.data("button"),o="object"==typeof n&&n;r||i.data("button",r=new e(this,o)),"toggle"==n?r.toggle():n&&r.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){i.trigger("closed").remove()}var i,r=t(this),o=r.attr("data-target");o||(o=r.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),i=t(o),e&&e.preventDefault(),i.length||(i=r.hasClass("alert")?r:r.parent()),i.trigger(e=t.Event("close")),e.isDefaultPrevented()||(i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.on(t.support.transition.end,n):n())};var i=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var i=t(this),r=i.data("alert");r||i.data("alert",r=new n(this)),"string"==typeof e&&r[e].call(i)})},t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.alert.data-api",e,n.prototype.close)}(window.jQuery),{addItem:'<div class="row-fluid itemRow" id="addedItem{{index}}"><div class="span7 itemName">{{data.NAME}}</div><div class="span1 itemName">{{data.PRICE}}</div><div class="span1"><input id="itemQuantity{{index}}" class="inputQuantity input-block-level" type="number" value=0></div><div class="span1 itemName">{{data.UNIT}}</div><div class="span1 itemValue" id="itemValue{{index}}">0.00</div><div class="span1 itemRemove"><a class="btn btn-danger" id="removeItem{{index}}"><i class="icon-remove-circle icon-black"></i></a></div></div>',typeAhead:'<input class="input-large" type="text" id="ingredientTypeahead" placeholder="Start typing ingredient name" /> <span class="help-inline itemName" id="inputWarning"></span>',formSuccess:'<div class="alert alert-block" id="ingredientBoxSuccessAlert">You can haz succesz <a class="close" data-dismiss="alert" id="ingredientBoxSuccessAlertClose">&times;</a> </div>',formError:'<div class="alert alert-block alert-error" id="ingredientBoxErrorAlert">You can haz error	<a class="close" data-dismiss="alert" id="ingredientBoxErrorAlertClose">&times;</a></div>'}}),define("vendor/twitter-typeahead/typeahead",["jquery"],function(t){(function(){var e="0.8.1",n={isMsie:function(){return/msie [\w.]+/i.test(navigator.userAgent)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isArray:t.isArray,isFunction:t.isFunction,isObject:function(t){return t===Object(t)},isUndefined:function(t){return t===void 0},bind:t.proxy,bindAll:function(e){var i;for(var r in e)n.isFunction(i=e[r])&&(e[r]=t.proxy(i,e))},indexOf:function(t,e){for(var n=0;t.length>n;n++)if(t[n]===e)return n;return-1},each:t.each,map:t.map,filter:function(e,n){var i=[];return t.each(e,function(t,r){n(r,t,e)&&i.push(r)}),i},every:function(e,n){var i=!0;return e?(t.each(e,function(t,r){return(i=n.call(null,r,t,e))?void 0:!1}),!!i):i},mixin:t.extend,getUniqueId:function(){var t=0;return function(){return t++}}(),debounce:function(t,e,n){var i,r;return function(){var o,s,a=this,u=arguments;return o=function(){i=null,n||(r=t.apply(a,u))},s=n&&!i,clearTimeout(i),i=setTimeout(o,e),s&&(r=t.apply(a,u)),r}},throttle:function(t,e){var n,i,r,o,s,a;return s=0,a=function(){s=new Date,r=null,o=t.apply(n,i)},function(){var u=new Date,l=e-(u-s);return n=this,i=arguments,0>=l?(clearTimeout(r),r=null,s=u,o=t.apply(n,i)):r||(r=setTimeout(a,l)),o}},uniqueArray:function(t){for(var e={},n=[],i=0,r=t.length;r>i;++i)e.hasOwnProperty(t[i])||(n.push(t[i]),e[t[i]]=1);return n},tokenizeQuery:function(e){return t.trim(e).toLowerCase().split(/[\s]+/)},tokenizeText:function(e){return t.trim(e).toLowerCase().split(/[\s\-_]+/)},getProtocol:function(){return location.protocol},noop:function(){}},i=function(){var t=/\s+/;return{on:function(e,n){var i;if(!n)return this;for(this._callbacks=this._callbacks||{},e=e.split(t);i=e.shift();)this._callbacks[i]=this._callbacks[i]||[],this._callbacks[i].push(n);return this},trigger:function(e,n){var i,r;if(!this._callbacks)return this;for(e=e.split(t);i=e.shift();)if(r=this._callbacks[i])for(var o=0;r.length>o;o+=1)r[o].call(this,{type:i,data:n});return this}}}(),r=function(){function t(t){this.prefix=["__",t,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=RegExp("^"+this.prefix)}function e(){return(new Date).getTime()}function i(t){return JSON.stringify(n.isUndefined(t)?null:t)}function r(t){return JSON.parse(t)}var o,s=window.localStorage;return o=window.localStorage&&window.JSON?{_prefix:function(t){return this.prefix+t},_ttlKey:function(t){return this._prefix(t)+this.ttlKey},get:function(t){return this.isExpired(t)&&this.remove(t),r(s.getItem(this._prefix(t)))},set:function(t,r,o){return n.isNumber(o)?s.setItem(this._ttlKey(t),i(e()+o)):s.removeItem(this._ttlKey(t)),s.setItem(this._prefix(t),i(r))},remove:function(t){return s.removeItem(this._ttlKey(t)),s.removeItem(this._prefix(t)),this},clear:function(){var t,e,n=[],i=s.length;for(t=0;i>t;t++)(e=s.key(t)).match(this.keyMatcher)&&n.push(e.replace(this.keyMatcher,""));for(t=n.length;t--;)this.remove(n[t]);return this},isExpired:function(t){var i=r(s.getItem(this._ttlKey(t)));return n.isNumber(i)&&e()>i?!0:!1}}:{get:n.noop,set:n.noop,remove:n.noop,clear:n.noop,isExpired:n.noop},n.mixin(t.prototype,o),t}(),o=function(){function t(t){n.bindAll(this),t=t||{},this.sizeLimit=t.sizeLimit||10,this.cache={},this.cachedKeysByAge=[]}return n.mixin(t.prototype,{get:function(t){return this.cache[t]},set:function(t,e){var n;this.cachedKeysByAge.length===this.sizeLimit&&(n=this.cachedKeysByAge.shift(),delete this.cache[n]),this.cache[t]=e,this.cachedKeysByAge.push(t)}}),t}(),s=function(){function e(t){var e;n.bindAll(this),t=t||{},e=/^throttle$/i.test(t.rateLimitFn)?n.throttle:n.debounce,this.wait=t.wait||300,this.wildcard=t.wildcard||"%QUERY",this.maxConcurrentRequests=t.maxConcurrentRequests||6,this.concurrentRequests=0,this.onDeckRequestArgs=null,this.cache=new o,this.get=e(this.get,this.wait)}return n.mixin(e.prototype,{_incrementConcurrentRequests:function(){this.concurrentRequests++},_decrementConcurrentRequests:function(){this.concurrentRequests--},_belowConcurrentRequestsThreshold:function(){return this.concurrentRequests<this.maxConcurrentRequests},get:function(e,n,i){var r,o=this;e=e.replace(this.wildcard,encodeURIComponent(n||"")),(r=this.cache.get(e))?i&&i(r):this._belowConcurrentRequestsThreshold()?t.ajax({url:e,type:"GET",dataType:"json",beforeSend:function(){o._incrementConcurrentRequests()},success:function(t){i&&i(t),o.cache.set(e,t)},complete:function(){o._decrementConcurrentRequests(),o.onDeckRequestArgs&&(o.get.apply(o,o.onDeckRequestArgs),o.onDeckRequestArgs=null)}}):this.onDeckRequestArgs=[].slice.call(arguments,0)}}),e}(),a=function(){function i(t){n.bindAll(this),this.storage=new r(t.name),this.adjacencyList={},this.itemHash={},this.name=t.name,this.resetDataOnProtocolSwitch=t.resetDataOnProtocolSwitch||!1,this.queryUrl=t.remote,this.transport=t.transport,this.limit=t.limit||10,this._customMatcher=t.matcher||null,this._customRanker=t.ranker||null,this._ttl_ms=t.ttl_ms||2592e5,this.keys={version:"version",protocol:"protocol",itemHash:"itemHash",adjacencyList:"adjacencyList"},t.local&&this._processLocalData(t.local),t.prefetch&&this._loadPrefetchData(t.prefetch)}return n.mixin(i.prototype,{_processLocalData:function(t){t&&this._mergeProcessedData(this._processData(t))},_loadPrefetchData:function(i){function r(t){var i=o._processData(t),r=i.itemHash,s=i.adjacencyList;o.storage.set(o.keys.itemHash,r,o._ttl_ms),o.storage.set(o.keys.adjacencyList,s,o._ttl_ms),o.storage.set(o.keys.version,e,o._ttl_ms),o.storage.set(o.keys.protocol,n.getProtocol(),o._ttl_ms),o._mergeProcessedData(i)}var o=this,s=this.storage.get(this.keys.itemHash),a=this.storage.get(this.keys.adjacencyList),u=this.storage.get(this.keys.protocol),l=this.storage.get(this.keys.version),d=l!==e||u!==n.getProtocol();s&&a&&!d?this._mergeProcessedData({itemHash:s,adjacencyList:a}):t.getJSON(i).done(r)},_processData:function(t){var e={},i={};return n.each(t,function(t,r){var o;n.isString(r)&&(r={value:r,tokens:n.tokenizeText(r)}),r.tokens=n.map(r.tokens||[],function(t){return t.toLowerCase()}),e[o=n.getUniqueId(r.value)]=r,n.each(r.tokens,function(t,e){var r=e.charAt(0),s=i[r]||(i[r]=[o]);!~n.indexOf(s,o)&&s.push(o)})}),{itemHash:e,adjacencyList:i}},_mergeProcessedData:function(t){var e=this;n.mixin(this.itemHash,t.itemHash),n.each(t.adjacencyList,function(t,n){var i=e.adjacencyList[t];e.adjacencyList[t]=i?i.concat(n):n})},_getPotentiallyMatchingIds:function(e){var i=[],r=[];if(n.map(e,n.bind(function(t){var e=this.adjacencyList[t.charAt(0)];e&&r.push(e)},this)),1===r.length)return r[0];var o=[];t.each(r,function(t,e){o.push(e.length)});var s=n.indexOf(o,Math.min.apply(null,o))||0,a=r[s]||[];return i=n.map(a,function(t){var e=n.every(r,function(e){return n.indexOf(e,t)>-1});return e?t:void 0})},_getItemsFromIds:function(t){var e=[];return n.map(t,n.bind(function(t){var n=this.itemHash[t];n&&e.push(n)},this)),e},_matcher:function(t){if(this._customMatcher){var e=this._customMatcher;return function(t){return e(t)}}return function(e){var i=e.tokens,r=n.every(t,function(t){var e=n.filter(i,function(e){return 0===e.indexOf(t)});return e.length});return r?e:void 0}},_compareItems:function(t,e,n){var i=t.score_boost?t.score_boost:0,r=e.score_boost?e.score_boost:0,o=t.score?t.score:0,s=e.score?e.score:0;return n?e.weight+r-(t.weight+i):s+r-(o+i)},_ranker:function(t,e){if(this._customRanker)return this._customRanker(t,e);var n=t.weight&&0!==t.weight,i=e.weight&&0!==e.weight;return n&&!i?-1:i&&!n?1:n&&i?this._compareItems(t,e,!0):this._compareItems(t,e,!1)},_processRemoteSuggestions:function(t,e){var i=this;return function(r){n.each(r,function(t,r){var o=!1;return r=n.isString(r)?{value:r}:r,n.each(e,function(t,e){return r.value===e.value?(o=!0,!1):void 0}),!o&&e.push(r),e.length<i.limit}),t&&t(e)}},getSuggestions:function(t,e){var i=n.tokenizeQuery(t),r=this._getPotentiallyMatchingIds(i),o=this._getItemsFromIds(r),s=n.filter(o,this._matcher(i));s.sort(this._ranker),e&&e(s),s.length<this.limit&&this.queryUrl&&this.transport.get(this.queryUrl,t,this._processRemoteSuggestions(e,s))}}),i}(),u=function(){function e(e){var i=this;n.bindAll(this),this.specialKeyCodeMap={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},this.query="",this.$hint=t(e.hint),this.$input=t(e.input).on("blur",this._handleBlur).on("focus",this._handleFocus).on("keydown",this._handleSpecialKeyEvent),n.isMsie()?this.$input.on("keydown keypress cut paste",function(t){i.specialKeyCodeMap[t.which||t.keyCode]||setTimeout(i._compareQueryToInputValue,0)}):this.$input.on("input",this._compareQueryToInputValue),this.$overflowHelper=r(this.$input)}function r(e){return t("<span></span>").css({display:"none",position:"absolute",left:"-9999px",visibility:"hidden",whiteSpace:"nowrap",fontFamily:e.css("font-family"),fontSize:e.css("font-size"),fontStyle:e.css("font-style"),fontVariant:e.css("font-variant"),fontWeight:e.css("font-weight"),wordSpacing:e.css("word-spacing"),letterSpacing:e.css("letter-spacing"),textIndent:e.css("text-indent"),textRendering:e.css("text-rendering"),textTransform:e.css("text-transform")}).insertAfter(e)}function o(t,e){return t=(t||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ").toLowerCase(),e=(e||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ").toLowerCase(),t===e}return n.mixin(e.prototype,i,{_handleFocus:function(){this.trigger("focus")},_handleBlur:function(){this.trigger("blur")},_handleSpecialKeyEvent:function(t){var e=this.specialKeyCodeMap[t.which||t.keyCode];e&&this.trigger(e,t)},_compareQueryToInputValue:function(){var t=this.getInputValue(),e=o(this.query,t),n=e?this.query.length!==t.length:!1;n?this.trigger("whitespaceChange",{value:this.query}):e||this.trigger("queryChange",{value:this.query=t})},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},getInputValue:function(){return this.$input.val()},setInputValue:function(t,e){this.$input.val(t),e!==!0&&this._compareQueryToInputValue()},getHintValue:function(){return this.$hint.val()},setHintValue:function(t){this.$hint.val(t)},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},isOverflow:function(){return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>this.$input.width()},isCursorAtEnd:function(){var t,e=this.$input.val().length,i=this.$input[0].selectionStart;return n.isNumber(i)?i===e:document.selection?(t=document.selection.createRange(),t.moveStart("character",-e),e===t.text.length):!0}}),e}(),l=function(){function e(e){n.bindAll(this),this.isMouseOverDropdown,this.$menu=t(e.menu).on("mouseenter",this._handleMouseenter).on("mouseleave",this._handleMouseleave).on("mouseover",".tt-suggestions > .tt-suggestion",this._handleMouseover).on("click",".tt-suggestions > .tt-suggestion",this._handleSelection)}function r(t){var e=t.parents(".tt-suggestions").first();return{value:t.data("value"),query:e.data("query"),dataset:e.data("dataset"),data:e.data("suggestions")}}return n.mixin(e.prototype,i,{_handleMouseenter:function(){this.isMouseOverDropdown=!0},_handleMouseleave:function(){this.isMouseOverDropdown=!1},_handleMouseover:function(e){this._getSuggestions().removeClass("tt-is-under-cursor"),t(e.currentTarget).addClass("tt-is-under-cursor")},_handleSelection:function(e){this.trigger("select",r(t(e.currentTarget)))},_moveCursor:function(t){var e,n,i,r;if(this.$menu.hasClass("tt-is-open")){if(e=this._getSuggestions(),n=e.filter(".tt-is-under-cursor"),n.removeClass("tt-is-under-cursor"),i=e.index(n)+t,i=(i+1)%(e.length+1)-1,-1===i)return this.trigger("cursorOff"),void 0;-1>i&&(i=e.length-1),r=e.eq(i).addClass("tt-is-under-cursor"),this.trigger("cursorOn",{value:r.data("value")})}},_getSuggestions:function(){return this.$menu.find(".tt-suggestions > .tt-suggestion")},hideUnlessMouseIsOverDropdown:function(){this.isMouseOverDropdown||this.hide()},hide:function(){this.$menu.hasClass("tt-is-open")&&(this.$menu.removeClass("tt-is-open").find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"),this.trigger("hide"))},show:function(){this.$menu.hasClass("tt-is-open")||(this.$menu.addClass("tt-is-open"),this.trigger("show"))},isOpen:function(){return this.$menu.hasClass("tt-is-open")},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getSuggestionUnderCursor:function(){var t=this._getSuggestions().filter(".tt-is-under-cursor").first();return t.length>0?r(t):null},getFirstSuggestion:function(){var t=this._getSuggestions().first();return t.length>0?r(t):null},renderSuggestions:function(e,i,r){var o,s,a,u="tt-dataset-"+i.name,l=this.$menu.find("."+u);0===l.length&&(l=t('<li><ol class="tt-suggestions"></ol></li>').addClass(u).appendTo(this.$menu)),o=document.createElement("div"),s=document.createDocumentFragment(),this.clearSuggestions(i.name),r.length>0&&(this.$menu.removeClass("tt-is-empty"),n.each(r,function(t,e){o.innerHTML=i.template.render(e),a=o.firstChild,a.setAttribute("data-value",e.value),s.appendChild(a)})),l.find("> .tt-suggestions").data({query:e,dataset:i.name,suggestions:r}).append(s),this.trigger("suggestionsRender")},clearSuggestions:function(t){var e=t?this.$menu.find(".tt-dataset-"+t+" .tt-suggestions"):this.$menu.find(".tt-suggestions");e.empty(),0===this._getSuggestions().length&&this.$menu.addClass("tt-is-empty")}}),e}(),d=function(){function e(t){n.bindAll(this),this.$node=r(t.input),this.datasets=t.datasets,n.each(this.datasets,function(t,e){var n='<li class="tt-suggestion">%body</li>';e.template=e.template?e.engine.compile(n.replace("%body",e.template)):{render:function(t){return n.replace("%body","<p>"+t.value+"</p>")}}}),this.inputView=new u({input:this.$node.find(".tt-query"),hint:this.$node.find(".tt-hint")}),this.dropdownView=new l({menu:this.$node.find(".tt-dropdown-menu")}),this.dropdownView.on("select",this._handleSelection).on("cursorOn",this._clearHint).on("cursorOn",this._setInputValueToSuggestionUnderCursor).on("cursorOff",this._setInputValueToQuery).on("cursorOff",this._updateHint).on("suggestionsRender",this._updateHint).on("show",this._updateHint).on("hide",this._clearHint),this.inputView.on("focus",this._showDropdown).on("blur",this._hideDropdown).on("blur",this._setInputValueToQuery).on("enter",this._handleSelection).on("queryChange",this._clearHint).on("queryChange",this._clearSuggestions).on("queryChange",this._getSuggestions).on("whitespaceChange",this._updateHint).on("queryChange whitespaceChange",this._showDropdown).on("queryChange whitespaceChange",this._setLanguageDirection).on("esc",this._hideDropdown).on("esc",this._setInputValueToQuery).on("tab up down",this._managePreventDefault).on("up down",this._moveDropdownCursor).on("up down",this._showDropdown).on("tab left right",this._autocomplete)}function r(e){var n=t(e),i=t(o.hint).css({"background-color":n.css("background-color")});if(0===n.length)return null;try{!n.attr("dir")&&n.attr("dir","auto")}catch(r){}return n.attr({autocomplete:"off",spellcheck:!1}).addClass("tt-query").wrap(o.wrapper).parent().prepend(i).append(o.dropdown)}var o={wrapper:'<span class="twitter-typeahead"></span>',hint:'<input style="display:none;">',dropdown:'<ol class="tt-dropdown-menu tt-is-empty"></ol>'};return n.mixin(e.prototype,i,{_managePreventDefault:function(t){var e,n,i=t.data,r=!1;switch(t.type){case"tab":e=this.inputView.getHintValue(),n=this.inputView.getInputValue(),r=e&&e!==n;break;case"up":case"down":r=!i.shiftKey&&!i.ctrlKey&&!i.metaKey}r&&i.preventDefault()},_setLanguageDirection:function(){var t="tt-"+this.inputView.getLanguageDirection();this.$node.hasClass(t)||this.$node.removeClass("tt-ltr tt-rtl").addClass(t)},_updateHint:function(){var t,e,n,i,r=this.dropdownView.getFirstSuggestion(),o=r?r.value:null;o&&this.dropdownView.isOpen()&&!this.inputView.isOverflow()&&(t=this.inputView.getInputValue(),e=t.replace(/\s{2,}/g," ").replace(/^\s+/g,""),n=RegExp("^(?:"+e+")(.*$)","i"),i=n.exec(o),this.inputView.setHintValue(t+(i?i[1]:"")))},_clearHint:function(){this.inputView.setHintValue("")},_clearSuggestions:function(){this.dropdownView.clearSuggestions()},_setInputValueToQuery:function(){this.inputView.setInputValue(this.inputView.getQuery())},_setInputValueToSuggestionUnderCursor:function(t){var e=t.data;this.inputView.setInputValue(e.value,!0)},_showDropdown:function(){this.dropdownView.show()},_hideDropdown:function(t){this.dropdownView["blur"===t.type?"hideUnlessMouseIsOverDropdown":"hide"]()},_moveDropdownCursor:function(t){var e=t.data;e.shiftKey||e.ctrlKey||e.metaKey||this.dropdownView["up"===t.type?"moveCursorUp":"moveCursorDown"]()},_handleSelection:function(t){var e="select"===t.type,i=e?t.data:this.dropdownView.getSuggestionUnderCursor();i&&(this.inputView.setInputValue(i.value),e?this.inputView.focus():t.data.preventDefault(),e&&n.isMsie()?setTimeout(this.dropdownView.hide,0):this.dropdownView.hide())},_getSuggestions:function(){var t=this,e=this.inputView.getQuery();n.each(this.datasets,function(n,i){i.getSuggestions(e,function(n){t._renderSuggestions(e,i,n)})})},_renderSuggestions:function(t,e,n){t===this.inputView.getQuery()&&(n=n.slice(0,e.limit),this.dropdownView.renderSuggestions(t,e,n))},_autocomplete:function(t){var e,n,i,r;("right"!==t.type&&"left"!==t.type||(e=this.inputView.isCursorAtEnd(),n="ltr"===this.inputView.getLanguageDirection()?"left"===t.type:"right"===t.type,e&&!n))&&(i=this.inputView.getQuery(),r=this.inputView.getHintValue(),""!==r&&i!==r&&this.inputView.setInputValue(r))}}),e}();(function(){function e(t){return o[t]?o[t].apply(this,[].slice.call(arguments,1)):o.initialize.apply(this,arguments)}function i(t){l=t}var r,o,u={},l={};jQuery.fn.typeahead=e,e.configureTransport=i,o={initialize:function(i){var o={};if(i=n.isArray(i)?i:[i],0===i.length)throw Error("no datasets provided");return delete e.configureTransport,r=r||new s(l),n.each(i,function(t,e){var i,s=e.name=e.name||n.getUniqueId();if(u[s])i=u[s];else{if(e.limit=e.limit||5,e.template=e.template,e.engine=e.engine,e.template&&!e.engine)throw Error("no template engine specified for "+s);i=u[s]=new a({name:e.name,limit:e.limit,local:e.local,prefetch:e.prefetch,ttl_ms:e.ttl_ms,remote:e.remote,matcher:e.matcher,ranker:e.ranker,transport:r})}o[s]={name:e.name,limit:e.limit,template:e.template,engine:e.engine,getSuggestions:i.getSuggestions}}),this.each(function(){t(this).data({typeahead:new d({input:this,datasets:o})})})}}})()})()}),function(){"use strict";define("modules/Ingredients/JqueryCalls",["jquery","vendor/bootstrap/bootstrap-alert","vendor/bootstrap/bootstrap-button","vendor/bootstrap/bootstrap-modal","vendor/bootstrap/bootstrap-combined","vendor/twitter-typeahead/typeahead","mustache","underscore"],function(t,e,n,i,r,o,s,a){var u,l,d,c,h,p,m,f,g,v,y;return f=function(){return t("#addNewIngredientFormModal").modal({show:!1,keyboard:!1}),t("#addNewIngredientButton").click(function(){return t("#addNewIngredientFormModal").modal("show")}),t("#addIngredientFormSubmit").click(function(){return t("#formComponent").trigger({type:"addFormSubmit"}),t("#addIngredientFormSubmit").button("loading"),t("#addIngredientModalClose").button("loading"),t("#addIngredientFormClear").button("loading")}),t("#calculatorComponent").trigger({type:"nextDependencyLoaded"})},y=function(){var e,n;return n=t("#addIngredientmodalForm").serialize(),e=(new Date).getTime(),n+="&CACHEBANG="+e,t.ajax({type:"GET",url:"api/addIngredient",data:n,success:function(e){return t("#formComponent").trigger({type:"dataReceived",returnData:e})},error:function(){return console.log("Error in request")}})},v=function(e){return t("#formTimeStamp").val(e.timestamp)},g=function(e){return e.returnData.init?void 0:(console.log(e),t("#calculatorComponent").trigger({type:"dataReceived",returnData:e.returnData}),t("#addIngredientFormSubmit").button("reset"),t("#addIngredientModalClose").button("reset"),t("#addIngredientFormClear").button("reset"),e.returnData.addedStatus.success?(t("#formAlertArea").html(s.render(r.formSuccess)),t("#ingredientBoxSuccessAlert").alert()):(t("#formAlertArea").html(s.render(r.formError)),t("#ingredientBoxErrorAlert").alert()))
},m=function(){return t("#ingredientTypeahead").remove(),t("#inputWarning").remove(),t("#inputControls").html(s.render(r.typeAhead,{})),t("#ingredientTypeahead").typeahead({prefetch:"api/typeaheadHackInit"})},u=function(e,n){return console.log(e),t("#itemList").append(s.render(r.addItem,{data:e,index:n})),t("#removeItem"+n).click(function(){return t("#calculatorComponent").trigger({type:"itemRemoved",index:n})}),t("#itemQuantity"+n).on("input",function(){return t("#calculatorComponent").trigger({type:"quantitiesChanged",index:n,removed:!1})})},l=function(){return t("#warningGroup").addClass("error"),t("#inputWarning").html("This item is already present")},c=function(e){return t("#addedItem"+e).remove(),t("#calculatorComponent").trigger({type:"quantitiesChanged",index:e,removed:!0})},d=function(){var e;return e=t(".inputQuantity"),a.map(e,function(t){return isNaN(parseFloat(t.value))?0:0>parseFloat(t.value)?0:parseFloat(t.value)})},h=function(e){return console.log(e),t("#totalPriceValue").html(e.toFixed(2))},p=function(e,n){var i,r;return r=parseFloat(t("#itemQuantity"+e)[0].value),(0>r||isNaN(r))&&(r=0),i=r*n,t("#itemValue"+e).html(i.toFixed(2))},{FormInit:f,FormSubmitForm:y,FormReceiveFormData:g,FormSetTimeStamp:v,CalculatorsetTypeAhead:m,CalculatoraddItem:u,CalculatoraddItemError:l,CalculatorremoveItem:c,CalculatorgetQuantityValues:d,CalculatorrenderTotalCost:h,CalculatorrenderTotalCostChange:p}})}.call(this),function(){"use strict";define("modules/Ingredients/Calculator",["vendor/flight/lib/component","modules/Ingredients/JqueryCalls","underscore"],function(t,e,n){var i;return i=function(){return this.defaultAttrs({selectedItems:[],quantities:[]}),this.Init=function(){return this.attr.selectedItems=[],this.attr.quantities=[]},this.addData=function(t){var e,i,r,o,s,a,u;return o=t.originalEvent.detail.returnData,r=o.data,a=o.value,u=n.pluck(r,"value"),s=u.indexOf(a),-1!==s?(e=r[s].uid,i=n.pluck(this.attr.selectedItems,"uid"),n.contains(i,e)?console.log("Value found!"):this.attr.selectedItems.push(r[s])):void 0},this.after("initialize",function(){return this.Init(),this.on("nextDependencyLoaded",e.CalculatorsetTypeAhead),this.on("dataAdded",this.addData)})},{calculatorComponent:t(i)}})}.call(this)})();