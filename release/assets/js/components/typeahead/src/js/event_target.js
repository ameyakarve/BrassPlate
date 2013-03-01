/*
 * typeahead.js
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

var EventTarget=function(){var e=/\s+/;return{on:function(t,n){var r;if(!n)return this;for(this._callbacks=this._callbacks||{},t=t.split(e);r=t.shift();)this._callbacks[r]=this._callbacks[r]||[],this._callbacks[r].push(n);return this},trigger:function(t,n){var r,i;if(!this._callbacks)return this;for(t=t.split(e);r=t.shift();)if(i=this._callbacks[r])for(var o=0;i.length>o;o+=1)i[o].call(this,{type:r,data:n});return this}}}();