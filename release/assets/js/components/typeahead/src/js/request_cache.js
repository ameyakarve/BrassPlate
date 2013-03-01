/*
 * typeahead.js
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

var RequestCache=function(){function e(e){utils.bindAll(this),e=e||{},this.sizeLimit=e.sizeLimit||10,this.cache={},this.cachedKeysByAge=[]}return utils.mixin(e.prototype,{get:function(e){return this.cache[e]},set:function(e,t){var n;this.cachedKeysByAge.length===this.sizeLimit&&(n=this.cachedKeysByAge.shift(),delete this.cache[n]),this.cache[e]=t,this.cachedKeysByAge.push(e)}}),e}();