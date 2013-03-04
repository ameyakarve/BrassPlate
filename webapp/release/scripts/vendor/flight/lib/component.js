"use strict";define(["./advice","./utils","./compose","./registry"],function(t,e,n,i){function r(t){t.events.slice().forEach(function(t){var e=[t.type];t.element&&e.unshift(t.element),"function"==typeof t.callback&&e.push(t.callback),this.off.apply(this,e)},t.instance)}function o(){this.trigger("componentTearDown"),r(i.findInstanceInfo(this))}function s(){var t=i.findComponentInfo(this);t&&t.instances.slice().forEach(function(t){t.instance.teardown()})}function a(t,e){try{window.postMessage(e,"*")}catch(n){throw console.log("unserializable data for event",t,":",e),Error(["The event",t,"on component",this.describe,"was triggered with non-serializable data"].join(" "))}}function u(){this.trigger=function(){var t,n,i,r,o,s=e.toArray(arguments),u=s[s.length-1];"string"==typeof u||u&&u.defaultBehavior||(i=s.pop()),t=2==s.length?$(s.shift()):this.$node,r=s[0],r.defaultBehavior&&(o=r.defaultBehavior,r=$.Event(r.type)),n=r.type||r,window.DEBUG&&window.postMessage&&a.call(this,n,i),"object"==typeof this.attr.eventData&&(i=$.extend(!0,{},this.attr.eventData,i));var c=t.trigger(r||n,i);return o&&!r.isDefaultPrevented()&&(this[o]||o).call(this),c},this.on=function(){var t,n,i,r,o=e.toArray(arguments);if(r="object"==typeof o[o.length-1]?e.delegate(this.resolveDelegateRules(o.pop())):o.pop(),t=2==o.length?$(o.shift()):this.$node,n=o[0],"function"!=typeof r&&"object"!=typeof r)throw Error("Unable to bind to '"+n+"' because the given callback is not a function or an object");return i=r.bind(this),i.target=r,r.guid&&(i.guid=r.guid),t.on(n,i),r.guid=i.guid,i},this.off=function(){var t,n,i,r=e.toArray(arguments);return"function"==typeof r[r.length-1]&&(i=r.pop()),t=2==r.length?$(r.shift()):this.$node,n=r[0],t.off(n,i)},this.resolveDelegateRules=function(t){var e={};return Object.keys(t).forEach(function(n){if(!this.attr.hasOwnProperty(n))throw Error('Component "'+this.describe+'" wants to listen on "'+n+'" but no such attribute was defined.');e[this.attr[n]]=t[n]},this),e},this.defaultAttrs=function(t){e.push(this.defaults,t,!0)||(this.defaults=t)},this.select=function(t){return this.$node.find(this.attr[t])},this.initialize=$.noop,this.teardown=o}function c(t){if(!t)throw Error("Component needs to be attachTo'd a jQuery object, native node or selector string");var n=e.merge.apply(e,e.toArray(arguments,1));$(t).each(function(t,e){new this(e,n)}.bind(this))}function l(){function r(t,n){var i={},r=0;if(!t)throw Error("Component needs a node");t.jquery?(this.node=t[0],this.$node=t):(this.node=t,this.$node=$(t)),this.describe=this.constructor.describe,this.bind=function(t){var n;if(t.uuid&&(n=i[t.uuid]))return n;var o=e.toArray(arguments,1);return o.unshift(this),n=t.bind.apply(t,o),n.target=t,t.uuid=r++,i[t.uuid]=n,n},this.attr=e.merge(this.defaults,n),this.defaults&&Object.keys(this.defaults).forEach(function(t){if(null===this.defaults[t]&&null===this.attr[t])throw Error('Required attribute "'+t+'" not specified in attachTo for component "'+this.describe+'".')},this),this.initialize.call(this,n||{}),this.trigger("componentInitialized")}var o=e.toArray(arguments);return r.toString=function(){var t=o.map(function(t){if($.browser.msie){var e=(""+t).match(h);return e&&e[1]?e[1]:""}return t.name}).join(", ").replace(f,"");return t},r.describe=""+r,r.attachTo=c,r.teardownAll=s,o.unshift(u,t.withAdvice,i.withRegistration),n.mixin(r.prototype,o),r}var h=/function (.*?)\s?\(/,f=/\s\,/g;return l.teardownAll=function(){i.components.slice().forEach(function(t){t.component.teardownAll()}),i.reset()},l});