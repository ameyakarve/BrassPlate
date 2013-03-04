define(["jquery"],function(t){(function(){var e="0.8.1",i={isMsie:function(){return/msie [\w.]+/i.test(navigator.userAgent)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isArray:t.isArray,isFunction:t.isFunction,isObject:function(t){return t===Object(t)},isUndefined:function(t){return t===void 0},bind:t.proxy,bindAll:function(e){var n;for(var s in e)i.isFunction(n=e[s])&&(e[s]=t.proxy(n,e))},indexOf:function(t,e){for(var i=0;t.length>i;i++)if(t[i]===e)return i;return-1},each:t.each,map:t.map,filter:function(e,i){var n=[];return t.each(e,function(t,s){i(s,t,e)&&n.push(s)}),n},every:function(e,i){var n=!0;return e?(t.each(e,function(t,s){return(n=i.call(null,s,t,e))?void 0:!1}),!!n):n},mixin:t.extend,getUniqueId:function(){var t=0;return function(){return t++}}(),debounce:function(t,e,i){var n,s;return function(){var o,r,a=this,h=arguments;return o=function(){n=null,i||(s=t.apply(a,h))},r=i&&!n,clearTimeout(n),n=setTimeout(o,e),r&&(s=t.apply(a,h)),s}},throttle:function(t,e){var i,n,s,o,r,a;return r=0,a=function(){r=new Date,s=null,o=t.apply(i,n)},function(){var h=new Date,u=e-(h-r);return i=this,n=arguments,0>=u?(clearTimeout(s),s=null,r=h,o=t.apply(i,n)):s||(s=setTimeout(a,u)),o}},uniqueArray:function(t){for(var e={},i=[],n=0,s=t.length;s>n;++n)e.hasOwnProperty(t[n])||(i.push(t[n]),e[t[n]]=1);return i},tokenizeQuery:function(e){return t.trim(e).toLowerCase().split(/[\s]+/)},tokenizeText:function(e){return t.trim(e).toLowerCase().split(/[\s\-_]+/)},getProtocol:function(){return location.protocol},noop:function(){}},n=function(){var t=/\s+/;return{on:function(e,i){var n;if(!i)return this;for(this._callbacks=this._callbacks||{},e=e.split(t);n=e.shift();)this._callbacks[n]=this._callbacks[n]||[],this._callbacks[n].push(i);return this},trigger:function(e,i){var n,s;if(!this._callbacks)return this;for(e=e.split(t);n=e.shift();)if(s=this._callbacks[n])for(var o=0;s.length>o;o+=1)s[o].call(this,{type:n,data:i});return this}}}(),s=function(){function t(t){this.prefix=["__",t,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=RegExp("^"+this.prefix)}function e(){return(new Date).getTime()}function n(t){return JSON.stringify(i.isUndefined(t)?null:t)}function s(t){return JSON.parse(t)}var o,r=window.localStorage;return o=window.localStorage&&window.JSON?{_prefix:function(t){return this.prefix+t},_ttlKey:function(t){return this._prefix(t)+this.ttlKey},get:function(t){return this.isExpired(t)&&this.remove(t),s(r.getItem(this._prefix(t)))},set:function(t,s,o){return i.isNumber(o)?r.setItem(this._ttlKey(t),n(e()+o)):r.removeItem(this._ttlKey(t)),r.setItem(this._prefix(t),n(s))},remove:function(t){return r.removeItem(this._ttlKey(t)),r.removeItem(this._prefix(t)),this},clear:function(){var t,e,i=[],n=r.length;for(t=0;n>t;t++)(e=r.key(t)).match(this.keyMatcher)&&i.push(e.replace(this.keyMatcher,""));for(t=i.length;t--;)this.remove(i[t]);return this},isExpired:function(t){var n=s(r.getItem(this._ttlKey(t)));return i.isNumber(n)&&e()>n?!0:!1}}:{get:i.noop,set:i.noop,remove:i.noop,clear:i.noop,isExpired:i.noop},i.mixin(t.prototype,o),t}(),o=function(){function t(t){i.bindAll(this),t=t||{},this.sizeLimit=t.sizeLimit||10,this.cache={},this.cachedKeysByAge=[]}return i.mixin(t.prototype,{get:function(t){return this.cache[t]},set:function(t,e){var i;this.cachedKeysByAge.length===this.sizeLimit&&(i=this.cachedKeysByAge.shift(),delete this.cache[i]),this.cache[t]=e,this.cachedKeysByAge.push(t)}}),t}(),r=function(){function e(t){var e;i.bindAll(this),t=t||{},e=/^throttle$/i.test(t.rateLimitFn)?i.throttle:i.debounce,this.wait=t.wait||300,this.wildcard=t.wildcard||"%QUERY",this.maxConcurrentRequests=t.maxConcurrentRequests||6,this.concurrentRequests=0,this.onDeckRequestArgs=null,this.cache=new o,this.get=e(this.get,this.wait)}return i.mixin(e.prototype,{_incrementConcurrentRequests:function(){this.concurrentRequests++},_decrementConcurrentRequests:function(){this.concurrentRequests--},_belowConcurrentRequestsThreshold:function(){return this.concurrentRequests<this.maxConcurrentRequests},get:function(e,i,n){var s,o=this;e=e.replace(this.wildcard,encodeURIComponent(i||"")),(s=this.cache.get(e))?n&&n(s):this._belowConcurrentRequestsThreshold()?t.ajax({url:e,type:"GET",dataType:"json",beforeSend:function(){o._incrementConcurrentRequests()},success:function(t){n&&n(t),o.cache.set(e,t)},complete:function(){o._decrementConcurrentRequests(),o.onDeckRequestArgs&&(o.get.apply(o,o.onDeckRequestArgs),o.onDeckRequestArgs=null)}}):this.onDeckRequestArgs=[].slice.call(arguments,0)}}),e}(),a=function(){function n(t){i.bindAll(this),this.storage=new s(t.name),this.adjacencyList={},this.itemHash={},this.name=t.name,this.resetDataOnProtocolSwitch=t.resetDataOnProtocolSwitch||!1,this.queryUrl=t.remote,this.transport=t.transport,this.limit=t.limit||10,this._customMatcher=t.matcher||null,this._customRanker=t.ranker||null,this._ttl_ms=t.ttl_ms||2592e5,this.keys={version:"version",protocol:"protocol",itemHash:"itemHash",adjacencyList:"adjacencyList"},t.local&&this._processLocalData(t.local),t.prefetch&&this._loadPrefetchData(t.prefetch)}return i.mixin(n.prototype,{_processLocalData:function(t){t&&this._mergeProcessedData(this._processData(t))},_loadPrefetchData:function(n){function s(t){var n=o._processData(t),s=n.itemHash,r=n.adjacencyList;o.storage.set(o.keys.itemHash,s,o._ttl_ms),o.storage.set(o.keys.adjacencyList,r,o._ttl_ms),o.storage.set(o.keys.version,e,o._ttl_ms),o.storage.set(o.keys.protocol,i.getProtocol(),o._ttl_ms),o._mergeProcessedData(n)}var o=this,r=this.storage.get(this.keys.itemHash),a=this.storage.get(this.keys.adjacencyList),h=this.storage.get(this.keys.protocol),u=this.storage.get(this.keys.version),c=u!==e||h!==i.getProtocol();r&&a&&!c?this._mergeProcessedData({itemHash:r,adjacencyList:a}):t.getJSON(n).done(s)},_processData:function(t){var e={},n={};return i.each(t,function(t,s){var o;i.isString(s)&&(s={value:s,tokens:i.tokenizeText(s)}),s.tokens=i.map(s.tokens||[],function(t){return t.toLowerCase()}),e[o=i.getUniqueId(s.value)]=s,i.each(s.tokens,function(t,e){var s=e.charAt(0),r=n[s]||(n[s]=[o]);!~i.indexOf(r,o)&&r.push(o)})}),{itemHash:e,adjacencyList:n}},_mergeProcessedData:function(t){var e=this;i.mixin(this.itemHash,t.itemHash),i.each(t.adjacencyList,function(t,i){var n=e.adjacencyList[t];e.adjacencyList[t]=n?n.concat(i):i})},_getPotentiallyMatchingIds:function(e){var n=[],s=[];if(i.map(e,i.bind(function(t){var e=this.adjacencyList[t.charAt(0)];e&&s.push(e)},this)),1===s.length)return s[0];var o=[];t.each(s,function(t,e){o.push(e.length)});var r=i.indexOf(o,Math.min.apply(null,o))||0,a=s[r]||[];return n=i.map(a,function(t){var e=i.every(s,function(e){return i.indexOf(e,t)>-1});return e?t:void 0})},_getItemsFromIds:function(t){var e=[];return i.map(t,i.bind(function(t){var i=this.itemHash[t];i&&e.push(i)},this)),e},_matcher:function(t){if(this._customMatcher){var e=this._customMatcher;return function(t){return e(t)}}return function(e){var n=e.tokens,s=i.every(t,function(t){var e=i.filter(n,function(e){return 0===e.indexOf(t)});return e.length});return s?e:void 0}},_compareItems:function(t,e,i){var n=t.score_boost?t.score_boost:0,s=e.score_boost?e.score_boost:0,o=t.score?t.score:0,r=e.score?e.score:0;return i?e.weight+s-(t.weight+n):r+s-(o+n)},_ranker:function(t,e){if(this._customRanker)return this._customRanker(t,e);var i=t.weight&&0!==t.weight,n=e.weight&&0!==e.weight;return i&&!n?-1:n&&!i?1:i&&n?this._compareItems(t,e,!0):this._compareItems(t,e,!1)},_processRemoteSuggestions:function(t,e){var n=this;return function(s){i.each(s,function(t,s){var o=!1;return s=i.isString(s)?{value:s}:s,i.each(e,function(t,e){return s.value===e.value?(o=!0,!1):void 0}),!o&&e.push(s),e.length<n.limit}),t&&t(e)}},getSuggestions:function(t,e){var n=i.tokenizeQuery(t),s=this._getPotentiallyMatchingIds(n),o=this._getItemsFromIds(s),r=i.filter(o,this._matcher(n));r.sort(this._ranker),e&&e(r),r.length<this.limit&&this.queryUrl&&this.transport.get(this.queryUrl,t,this._processRemoteSuggestions(e,r))}}),n}(),h=function(){function e(e){var n=this;i.bindAll(this),this.specialKeyCodeMap={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},this.query="",this.$hint=t(e.hint),this.$input=t(e.input).on("blur",this._handleBlur).on("focus",this._handleFocus).on("keydown",this._handleSpecialKeyEvent),i.isMsie()?this.$input.on("keydown keypress cut paste",function(t){n.specialKeyCodeMap[t.which||t.keyCode]||setTimeout(n._compareQueryToInputValue,0)}):this.$input.on("input",this._compareQueryToInputValue),this.$overflowHelper=s(this.$input)}function s(e){return t("<span></span>").css({display:"none",position:"absolute",left:"-9999px",visibility:"hidden",whiteSpace:"nowrap",fontFamily:e.css("font-family"),fontSize:e.css("font-size"),fontStyle:e.css("font-style"),fontVariant:e.css("font-variant"),fontWeight:e.css("font-weight"),wordSpacing:e.css("word-spacing"),letterSpacing:e.css("letter-spacing"),textIndent:e.css("text-indent"),textRendering:e.css("text-rendering"),textTransform:e.css("text-transform")}).insertAfter(e)}function o(t,e){return t=(t||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ").toLowerCase(),e=(e||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ").toLowerCase(),t===e}return i.mixin(e.prototype,n,{_handleFocus:function(){this.trigger("focus")},_handleBlur:function(){this.trigger("blur")},_handleSpecialKeyEvent:function(t){var e=this.specialKeyCodeMap[t.which||t.keyCode];e&&this.trigger(e,t)},_compareQueryToInputValue:function(){var t=this.getInputValue(),e=o(this.query,t),i=e?this.query.length!==t.length:!1;i?this.trigger("whitespaceChange",{value:this.query}):e||this.trigger("queryChange",{value:this.query=t})},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},getInputValue:function(){return this.$input.val()},setInputValue:function(t,e){this.$input.val(t),e!==!0&&this._compareQueryToInputValue()},getHintValue:function(){return this.$hint.val()},setHintValue:function(t){this.$hint.val(t)},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},isOverflow:function(){return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>this.$input.width()},isCursorAtEnd:function(){var t,e=this.$input.val().length,n=this.$input[0].selectionStart;return i.isNumber(n)?n===e:document.selection?(t=document.selection.createRange(),t.moveStart("character",-e),e===t.text.length):!0}}),e}(),u=function(){function e(e){i.bindAll(this),this.isMouseOverDropdown,this.$menu=t(e.menu).on("mouseenter",this._handleMouseenter).on("mouseleave",this._handleMouseleave).on("mouseover",".tt-suggestions > .tt-suggestion",this._handleMouseover).on("click",".tt-suggestions > .tt-suggestion",this._handleSelection)}function s(t){var e=t.parents(".tt-suggestions").first();return{value:t.data("value"),query:e.data("query"),dataset:e.data("dataset"),data:e.data("suggestions")}}return i.mixin(e.prototype,n,{_handleMouseenter:function(){this.isMouseOverDropdown=!0},_handleMouseleave:function(){this.isMouseOverDropdown=!1},_handleMouseover:function(e){this._getSuggestions().removeClass("tt-is-under-cursor"),t(e.currentTarget).addClass("tt-is-under-cursor")},_handleSelection:function(e){this.trigger("select",s(t(e.currentTarget)))},_moveCursor:function(t){var e,i,n,s;if(this.$menu.hasClass("tt-is-open")){if(e=this._getSuggestions(),i=e.filter(".tt-is-under-cursor"),i.removeClass("tt-is-under-cursor"),n=e.index(i)+t,n=(n+1)%(e.length+1)-1,-1===n)return this.trigger("cursorOff"),void 0;-1>n&&(n=e.length-1),s=e.eq(n).addClass("tt-is-under-cursor"),this.trigger("cursorOn",{value:s.data("value")})}},_getSuggestions:function(){return this.$menu.find(".tt-suggestions > .tt-suggestion")},hideUnlessMouseIsOverDropdown:function(){this.isMouseOverDropdown||this.hide()},hide:function(){this.$menu.hasClass("tt-is-open")&&(this.$menu.removeClass("tt-is-open").find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"),this.trigger("hide"))},show:function(){this.$menu.hasClass("tt-is-open")||(this.$menu.addClass("tt-is-open"),this.trigger("show"))},isOpen:function(){return this.$menu.hasClass("tt-is-open")},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getSuggestionUnderCursor:function(){var t=this._getSuggestions().filter(".tt-is-under-cursor").first();return t.length>0?s(t):null},getFirstSuggestion:function(){var t=this._getSuggestions().first();return t.length>0?s(t):null},renderSuggestions:function(e,n,s){var o,r,a,h="tt-dataset-"+n.name,u=this.$menu.find("."+h);0===u.length&&(u=t('<li><ol class="tt-suggestions"></ol></li>').addClass(h).appendTo(this.$menu)),o=document.createElement("div"),r=document.createDocumentFragment(),this.clearSuggestions(n.name),s.length>0&&(this.$menu.removeClass("tt-is-empty"),i.each(s,function(t,e){o.innerHTML=n.template.render(e),a=o.firstChild,a.setAttribute("data-value",e.value),r.appendChild(a)})),u.find("> .tt-suggestions").data({query:e,dataset:n.name,suggestions:s}).append(r),this.trigger("suggestionsRender")},clearSuggestions:function(t){var e=t?this.$menu.find(".tt-dataset-"+t+" .tt-suggestions"):this.$menu.find(".tt-suggestions");e.empty(),0===this._getSuggestions().length&&this.$menu.addClass("tt-is-empty")}}),e}(),c=function(){function e(t){i.bindAll(this),this.$node=s(t.input),this.datasets=t.datasets,i.each(this.datasets,function(t,e){var i='<li class="tt-suggestion">%body</li>';e.template=e.template?e.engine.compile(i.replace("%body",e.template)):{render:function(t){return i.replace("%body","<p>"+t.value+"</p>")}}}),this.inputView=new h({input:this.$node.find(".tt-query"),hint:this.$node.find(".tt-hint")}),this.dropdownView=new u({menu:this.$node.find(".tt-dropdown-menu")}),this.dropdownView.on("select",this._handleSelection).on("cursorOn",this._clearHint).on("cursorOn",this._setInputValueToSuggestionUnderCursor).on("cursorOff",this._setInputValueToQuery).on("cursorOff",this._updateHint).on("suggestionsRender",this._updateHint).on("show",this._updateHint).on("hide",this._clearHint),this.inputView.on("focus",this._showDropdown).on("blur",this._hideDropdown).on("blur",this._setInputValueToQuery).on("enter",this._handleSelection).on("queryChange",this._clearHint).on("queryChange",this._clearSuggestions).on("queryChange",this._getSuggestions).on("whitespaceChange",this._updateHint).on("queryChange whitespaceChange",this._showDropdown).on("queryChange whitespaceChange",this._setLanguageDirection).on("esc",this._hideDropdown).on("esc",this._setInputValueToQuery).on("tab up down",this._managePreventDefault).on("up down",this._moveDropdownCursor).on("up down",this._showDropdown).on("tab left right",this._autocomplete)}function s(e){var i=t(e),n=t(o.hint).css({"background-color":i.css("background-color")});if(0===i.length)return null;try{!i.attr("dir")&&i.attr("dir","auto")}catch(s){}return i.attr({autocomplete:"off",spellcheck:!1}).addClass("tt-query").wrap(o.wrapper).parent().prepend(n).append(o.dropdown)}var o={wrapper:'<span class="twitter-typeahead"></span>',hint:'<input style="display:none;">',dropdown:'<ol class="tt-dropdown-menu tt-is-empty"></ol>'};return i.mixin(e.prototype,n,{_managePreventDefault:function(t){var e,i,n=t.data,s=!1;switch(t.type){case"tab":e=this.inputView.getHintValue(),i=this.inputView.getInputValue(),s=e&&e!==i;break;case"up":case"down":s=!n.shiftKey&&!n.ctrlKey&&!n.metaKey}s&&n.preventDefault()},_setLanguageDirection:function(){var t="tt-"+this.inputView.getLanguageDirection();this.$node.hasClass(t)||this.$node.removeClass("tt-ltr tt-rtl").addClass(t)},_updateHint:function(){var t,e,i,n,s=this.dropdownView.getFirstSuggestion(),o=s?s.value:null;o&&this.dropdownView.isOpen()&&!this.inputView.isOverflow()&&(t=this.inputView.getInputValue(),e=t.replace(/\s{2,}/g," ").replace(/^\s+/g,""),i=RegExp("^(?:"+e+")(.*$)","i"),n=i.exec(o),this.inputView.setHintValue(t+(n?n[1]:"")))},_clearHint:function(){this.inputView.setHintValue("")},_clearSuggestions:function(){this.dropdownView.clearSuggestions()},_setInputValueToQuery:function(){this.inputView.setInputValue(this.inputView.getQuery())},_setInputValueToSuggestionUnderCursor:function(t){var e=t.data;this.inputView.setInputValue(e.value,!0)},_showDropdown:function(){this.dropdownView.show()},_hideDropdown:function(t){this.dropdownView["blur"===t.type?"hideUnlessMouseIsOverDropdown":"hide"]()},_moveDropdownCursor:function(t){var e=t.data;e.shiftKey||e.ctrlKey||e.metaKey||this.dropdownView["up"===t.type?"moveCursorUp":"moveCursorDown"]()},_handleSelection:function(t){var e="select"===t.type,n=e?t.data:this.dropdownView.getSuggestionUnderCursor();n&&(this.inputView.setInputValue(n.value),e?this.inputView.focus():t.data.preventDefault(),e&&i.isMsie()?setTimeout(this.dropdownView.hide,0):this.dropdownView.hide())},_getSuggestions:function(){var t=this,e=this.inputView.getQuery();i.each(this.datasets,function(i,n){n.getSuggestions(e,function(i){t._renderSuggestions(e,n,i)})})},_renderSuggestions:function(t,e,i){t===this.inputView.getQuery()&&(i=i.slice(0,e.limit),this.dropdownView.renderSuggestions(t,e,i))},_autocomplete:function(t){var e,i,n,s;("right"!==t.type&&"left"!==t.type||(e=this.inputView.isCursorAtEnd(),i="ltr"===this.inputView.getLanguageDirection()?"left"===t.type:"right"===t.type,e&&!i))&&(n=this.inputView.getQuery(),s=this.inputView.getHintValue(),""!==s&&n!==s&&this.inputView.setInputValue(s))}}),e}();(function(){function e(t){return o[t]?o[t].apply(this,[].slice.call(arguments,1)):o.initialize.apply(this,arguments)}function n(t){u=t}var s,o,h={},u={};jQuery.fn.typeahead=e,e.configureTransport=n,o={initialize:function(n){var o={};if(n=i.isArray(n)?n:[n],0===n.length)throw Error("no datasets provided");return delete e.configureTransport,s=s||new r(u),i.each(n,function(t,e){var n,r=e.name=e.name||i.getUniqueId();if(h[r])n=h[r];else{if(e.limit=e.limit||5,e.template=e.template,e.engine=e.engine,e.template&&!e.engine)throw Error("no template engine specified for "+r);n=h[r]=new a({name:e.name,limit:e.limit,local:e.local,prefetch:e.prefetch,ttl_ms:e.ttl_ms,remote:e.remote,matcher:e.matcher,ranker:e.ranker,transport:s})}o[r]={name:e.name,limit:e.limit,template:e.template,engine:e.engine,getSuggestions:n.getSuggestions}}),this.each(function(){t(this).data({typeahead:new c({input:this,datasets:o})})})}}})()})()});