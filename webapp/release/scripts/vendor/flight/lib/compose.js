"use strict";define(["./utils","../tools/debug/debug"],function(t,e){function n(t,e){if(o){var n=Object.create(null);Object.keys(t).forEach(function(i){if(0>s.indexOf(i)){var r=Object.getOwnPropertyDescriptor(t,i);r.writable=e,n[i]=r}}),Object.defineProperties(t,n)}}function i(t,e,n){var i;return o&&t.hasOwnProperty(e)?(i=Object.getOwnPropertyDescriptor(t,e).writable,Object.defineProperty(t,e,{writable:!0}),n.call(t),Object.defineProperty(t,e,{writable:i}),void 0):(n.call(t),void 0)}function r(t,e){t.mixedIn=t.hasOwnProperty("mixedIn")?t.mixedIn:[],e.forEach(function(e){-1==t.mixedIn.indexOf(e)&&(n(t,!1),e.call(t),t.mixedIn.push(e))}),n(t,!0)}var o=e.enabled&&!t.isEnumerable(Object,"getOwnPropertyDescriptor"),s=["mixedIn"];if(o)try{Object.getOwnPropertyDescriptor(Object,"keys")}catch(a){o=!1}return{mixin:r,unlockProperty:i}});