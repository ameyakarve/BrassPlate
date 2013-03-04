// ==========================================
// Copyright 2013 Twitter, Inc
// Licensed under The MIT License
// http://opensource.org/licenses/MIT
// ==========================================

define(["./utils","./compose"],function(e,t){var n={around:function(t,n){return function(){var r=e.toArray(arguments);return n.apply(this,[t.bind(this)].concat(r))}},before:function(t,n){return this.around(t,function(){var t,r=e.toArray(arguments),i=r.shift();return t="function"==typeof n?n:n.obj[n.fnName],t.apply(this,r),i.apply(this,r)})},after:function(t,n){return this.around(t,function(){var t,r=e.toArray(arguments),i=r.shift(),o=(i.unbound||i).apply(this,r);return t="function"==typeof n?n:n.obj[n.fnName],t.apply(this,r),o})},withAdvice:function(){["before","after","around"].forEach(function(e){this[e]=function(r,i){t.unlockProperty(this,r,function(){return this[r]="function"==typeof this[r]?n[e](this[r],i):i})}},this)}};return n});