define([],function(){function e(){return""===u.hash||"#"===u.hash}function t(e,t){for(var n=0;e.length>n;n+=1)if(t(e[n],n,e)===!1)return}function n(e){for(var t=[],n=0,r=e.length;r>n;n++)t=t.concat(e[n]);return t}function r(e,t,n){if(!e.length)return n();var r=0;(function i(){t(e[r],function(t){t||t===!1?(n(t),n=function(){}):(r+=1,r===e.length?n():i())})})()}function i(e,t,n){n=e;for(var r in t)if(t.hasOwnProperty(r)&&(n=t[r](e),n!==e))break;return n===e?"([._a-zA-Z0-9-]+)":n}function o(e,t){for(var n,r=0,o="";n=e.substr(r).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/);)r=n.index+n[0].length,n[0]=n[0].replace(/^\*/,"([_.()!\\ %@&a-zA-Z0-9-]+)"),o+=e.substr(0,n.index)+n[0];e=o+=e.substr(r);var s,a=e.match(/:([^\/]+)/gi);if(a){s=a.length;for(var u=0;s>u;u++)e=e.replace(a[u],i(a[u],t))}return e}function a(e,t,n,r){var i,o=0,s=0,a=0,n=""+(n||"("),r=""+(r||")");for(i=0;e.length>i;i++){var u=e[i];if(u.indexOf(n,o)>u.indexOf(r,o)||~u.indexOf(n,o)&&!~u.indexOf(r,o)||!~u.indexOf(n,o)&&~u.indexOf(r,o)){if(s=u.indexOf(n,o),a=u.indexOf(r,o),~s&&!~a||!~s&&~a){var l=e.slice(0,(i||1)+1).join(t);e=[l].concat(e.slice((i||1)+1))}o=(a>s?a:s)+1,i=0}else o=0}return e}Array.prototype.filter||(Array.prototype.filter=function(e,t){for(var n,r=[],i=0,o=this.length;o>i;i++)i in this&&e.call(t,n=this[i],i,this)&&r.push(n);return r}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});var u=document.location,l={mode:"modern",hash:u.hash,history:!1,check:function(){var e=u.hash;e!=this.hash&&(this.hash=e,this.onHashChanged())},fire:function(){"modern"===this.mode?this.history===!0?window.onpopstate():window.onhashchange():this.onHashChanged()},init:function(e,t){function n(e){for(var t=0,n=c.listeners.length;n>t;t++)c.listeners[t](e)}var r=this;if(this.history=t,c.listeners||(c.listeners=[]),"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7))this.history===!0?setTimeout(function(){window.onpopstate=n},500):window.onhashchange=n,this.mode="modern";else{var i=document.createElement("iframe");i.id="state-frame",i.style.display="none",document.body.appendChild(i),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){"location"===event.propertyName&&r.check()}),window.setInterval(function(){r.check()},50),this.onHashChanged=n,this.mode="legacy"}return c.listeners.push(e),this.mode},destroy:function(e){if(c&&c.listeners)for(var t=c.listeners,n=t.length-1;n>=0;n--)t[n]===e&&t.splice(n,1)},setHash:function(e){return"legacy"===this.mode&&this.writeFrame(e),this.history===!0?(window.history.pushState({},document.title,e),this.fire()):u.hash="/"===e[0]?e:"/"+e,this},writeFrame:function(e){var t=document.getElementById("state-frame"),n=t.contentDocument||t.contentWindow.document;n.open(),n.write("<script>_hash = '"+e+"'; onload = parent.listener.syncHash;<script>"),n.close()},syncHash:function(){var e=this._hash;return e!=u.hash&&(u.hash=e),this},onHashChanged:function(){}},c=c=function(e){return this instanceof c?(this.params={},this.routes={},this.methods=["on","once","after","before"],this.scope=[],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.historySupport=null!=(null!=window.history?window.history.pushState:null),this.configure(),this.mount(e||{}),void 0):new c(e)};return c.prototype.init=function(t){var n=this;if(this.handler=function(e){var t=e&&e.newURL||window.location.hash,r=n.history===!0?n.getPath():t.replace(/.*#/,"");n.dispatch("on",r)},l.init(this.handler,this.history),this.history===!1)e()&&t?u.hash=t:e()||n.dispatch("on",u.hash.replace(/^#/,""));else{var r=e()&&t?t:e()?null:u.hash.replace(/^#/,"");r&&window.history.replaceState({},document.title,r),(r||this.run_in_init===!0)&&this.handler()}return this},c.prototype.explode=function(){var e=this.history===!0?this.getPath():u.hash;return"/"===e.charAt(1)&&(e=e.slice(1)),e.slice(1,e.length).split("/")},c.prototype.setRoute=function(e,t,n){var r=this.explode();return"number"==typeof e&&"string"==typeof t?r[e]=t:"string"==typeof n?r.splice(e,t,s):r=[e],l.setHash(r.join("/")),r},c.prototype.insertEx=function(e,t,n,r){return"once"===e&&(e="on",n=function(e){var t=!1;return function(){return t?void 0:(t=!0,e.apply(this,arguments))}}(n)),this._insert(e,t,n,r)},c.prototype.getRoute=function(e){var t=e;if("number"==typeof e)t=this.explode()[e];else if("string"==typeof e){var n=this.explode();t=n.indexOf(e)}else t=this.explode();return t},c.prototype.destroy=function(){return l.destroy(this.handler),this},c.prototype.getPath=function(){var e=window.location.pathname;return"/"!==e.substr(0,1)&&(e="/"+e),e},c.prototype.configure=function(e){e=e||{};for(var t=0;this.methods.length>t;t++)this._methods[this.methods[t]]=!0;return this.recurse=e.recurse||this.recurse||!1,this.async=e.async||!1,this.delimiter=e.delimiter||"/",this.strict=e.strict===void 0?!0:e.strict,this.notfound=e.notfound,this.resource=e.resource,this.history=e.html5history&&this.historySupport||!1,this.run_in_init=this.history===!0&&e.run_handler_in_init!==!1,this.every={after:e.after||null,before:e.before||null,on:e.on||null},this},c.prototype.param=function(e,t){":"!==e[0]&&(e=":"+e);var n=RegExp(e,"g");this.params[e]=function(e){return e.replace(n,t.source||t)}},c.prototype.on=c.prototype.route=function(e,t,n){var r=this;return n||"function"!=typeof t||(n=t,t=e,e="on"),Array.isArray(t)?t.forEach(function(t){r.on(e,t,n)}):(t.source&&(t=t.source.replace(/\\\//gi,"/")),Array.isArray(e)?e.forEach(function(e){r.on(e.toLowerCase(),t,n)}):(t=t.split(RegExp(this.delimiter)),t=a(t,this.delimiter),this.insert(e,this.scope.concat(t),n),void 0))},c.prototype.dispatch=function(e,t,n){function r(){o.last=s.after,o.invoke(o.runlist(s),o,n)}var i,o=this,s=this.traverse(e,t,this.routes,""),a=this._invoked;return this._invoked=!0,s&&0!==s.length?("forward"===this.recurse&&(s=s.reverse()),i=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last],i&&i.length>0&&a?(this.async?this.invoke(i,this,r):(this.invoke(i,this),r()),!0):(r(),!0)):(this.last=[],"function"==typeof this.notfound&&this.invoke([this.notfound],{method:e,path:t},n),!1)},c.prototype.invoke=function(e,n,i){var o=this;this.async?r(e,function s(t,i){return Array.isArray(t)?r(t,s,i):("function"==typeof t&&t.apply(n,e.captures.concat(i)),void 0)},function(){i&&i.apply(n,arguments)}):t(e,function s(r){return Array.isArray(r)?t(r,s):"function"==typeof r?r.apply(n,e.captures||[]):("string"==typeof r&&o.resource&&o.resource[r].apply(n,e.captures||[]),void 0)})},c.prototype.traverse=function(e,t,n,r,i){function o(e){function t(e){for(var n=[],r=0;e.length>r;r++)n[r]=Array.isArray(e[r])?t(e[r]):e[r];return n}function n(e){for(var t=e.length-1;t>=0;t--)Array.isArray(e[t])?(n(e[t]),0===e[t].length&&e.splice(t,1)):i(e[t])||e.splice(t,1)}if(!i)return e;var r=t(e);return r.matched=e.matched,r.captures=e.captures,r.after=e.after.filter(i),n(r),r}var s,a,u,l,c=[];if(t===this.delimiter&&n[e])return l=[[n.before,n[e]].filter(Boolean)],l.after=[n.after].filter(Boolean),l.matched=!0,l.captures=[],o(l);for(var f in n)if(n.hasOwnProperty(f)&&(!this._methods[f]||this._methods[f]&&"object"==typeof n[f]&&!Array.isArray(n[f]))){if(s=a=r+this.delimiter+f,this.strict||(a+="["+this.delimiter+"]?"),u=t.match(RegExp("^"+a)),!u)continue;if(u[0]&&u[0]==t&&n[f][e])return l=[[n[f].before,n[f][e]].filter(Boolean)],l.after=[n[f].after].filter(Boolean),l.matched=!0,l.captures=u.slice(1),this.recurse&&n===this.routes&&(l.push([n.before,n.on].filter(Boolean)),l.after=l.after.concat([n.after].filter(Boolean))),o(l);if(l=this.traverse(e,t,n[f],s),l.matched)return l.length>0&&(c=c.concat(l)),this.recurse&&(c.push([n[f].before,n[f].on].filter(Boolean)),l.after=l.after.concat([n[f].after].filter(Boolean)),n===this.routes&&(c.push([n.before,n.on].filter(Boolean)),l.after=l.after.concat([n.after].filter(Boolean)))),c.matched=!0,c.captures=l.captures,c.after=l.after,o(c)}return!1},c.prototype.insert=function(e,t,n,r){var i,s,a,u,l;if(t=t.filter(function(e){return e&&e.length>0}),r=r||this.routes,l=t.shift(),/\:|\*/.test(l)&&!/\\d|\\w/.test(l)&&(l=o(l,this.params)),t.length>0)return r[l]=r[l]||{},this.insert(e,t,n,r[l]);if(l||t.length||r!==this.routes){if(s=typeof r[l],a=Array.isArray(r[l]),r[l]&&!a&&"object"==s)switch(i=typeof r[l][e]){case"function":return r[l][e]=[r[l][e],n],void 0;case"object":return r[l][e].push(n),void 0;case"undefined":return r[l][e]=n,void 0}else if("undefined"==s)return u={},u[e]=n,r[l]=u,void 0;throw Error("Invalid route context: "+s)}switch(i=typeof r[e]){case"function":return r[e]=[r[e],n],void 0;case"object":return r[e].push(n),void 0;case"undefined":return r[e]=n,void 0}},c.prototype.extend=function(e){function t(e){r._methods[e]=!0,r[e]=function(){var t=1===arguments.length?[e,""]:[e];r.on.apply(r,t.concat(Array.prototype.slice.call(arguments)))}}var n,r=this,i=e.length;for(n=0;i>n;n++)t(e[n])},c.prototype.runlist=function(e){var t=this.every&&this.every.before?[this.every.before].concat(n(e)):n(e);return this.every&&this.every.on&&t.push(this.every.on),t.captures=e.captures,t.source=e.source,t},c.prototype.mount=function(e,t){function n(t,n){var i=t,o=t.split(r.delimiter),s=typeof e[t],u=""===o[0]||!r._methods[o[0]],l=u?"on":i;return u&&(i=i.slice((i.match(RegExp(r.delimiter))||[""])[0].length),o.shift()),u&&"object"===s&&!Array.isArray(e[t])?(n=n.concat(o),r.mount(e[t],n),void 0):(u&&(n=n.concat(i.split(r.delimiter)),n=a(n,r.delimiter)),r.insert(l,n,e[t]),void 0)}if(e&&"object"==typeof e&&!Array.isArray(e)){var r=this;t=t||[],Array.isArray(t)||(t=t.split(r.delimiter));for(var i in e)e.hasOwnProperty(i)&&n(i,t.slice(0))}},{Router:c}});