"use strict";define(["./utils","./compose"],function(t,e){var n={around:function(e,n){return function(){var i=t.toArray(arguments);return n.apply(this,[e.bind(this)].concat(i))}},before:function(e,n){return this.around(e,function(){var e,i=t.toArray(arguments),r=i.shift();return e="function"==typeof n?n:n.obj[n.fnName],e.apply(this,i),r.apply(this,i)})},after:function(e,n){return this.around(e,function(){var e,i=t.toArray(arguments),r=i.shift(),o=(r.unbound||r).apply(this,i);return e="function"==typeof n?n:n.obj[n.fnName],e.apply(this,i),o})},withAdvice:function(){["before","after","around"].forEach(function(t){this[t]=function(i,r){e.unlockProperty(this,i,function(){return this[i]="function"==typeof this[i]?n[t](this[i],r):r})}},this)}};return n});