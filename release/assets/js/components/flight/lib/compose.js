// ==========================================
// Copyright 2013 Twitter, Inc
// Licensed under The MIT License
// http://opensource.org/licenses/MIT
// ==========================================

define(["./utils","../tools/debug/debug"],function(e,t){function n(e,t){if(o){var n=Object.create(null);Object.keys(e).forEach(function(r){if(0>s.indexOf(r)){var i=Object.getOwnPropertyDescriptor(e,r);i.writable=t,n[r]=i}}),Object.defineProperties(e,n)}}function r(e,t,n){var r;return o&&e.hasOwnProperty(t)?(r=Object.getOwnPropertyDescriptor(e,t).writable,Object.defineProperty(e,t,{writable:!0}),n.call(e),Object.defineProperty(e,t,{writable:r}),void 0):(n.call(e),void 0)}function i(e,t){e.mixedIn=e.hasOwnProperty("mixedIn")?e.mixedIn:[],t.forEach(function(t){-1==e.mixedIn.indexOf(t)&&(n(e,!1),t.call(e),e.mixedIn.push(t))}),n(e,!0)}var o=t.enabled&&!e.isEnumerable(Object,"getOwnPropertyDescriptor"),s=["mixedIn"];if(o)try{Object.getOwnPropertyDescriptor(Object,"keys")}catch(a){o=!1}return{mixin:i,unlockProperty:r}});