// ==========================================
// Copyright 2013 Twitter, Inc
// Licensed under The MIT License
// http://opensource.org/licenses/MIT
// ==========================================

define(["./compose","./utils"],function(e,t){function n(e){var t=e.tagName?e.tagName.toLowerCase():""+e,n=e.className?"."+e.className:"",r=t+n;return e.tagName?["'","'"].join(r):r}function r(e,t,r){var i,s,a,u,l,c,f,p;"function"==typeof r[r.length-1]&&(a=r.pop(),a=a.unbound||a),"object"==typeof r[r.length-1]&&r.pop(),2==r.length?(s=r[0],i=r[1]):(s=t.$node[0],i=r[0]),window.DEBUG&&(l=DEBUG.events.logFilter,f="all"==l.actions||l.actions.indexOf(e)>-1,c=function(e){return e.test?e:RegExp("^"+e.replace(/\*/g,".*")+"$")},p="all"==l.eventNames||l.eventNames.some(function(e){return c(e).test(i)}),f&&p&&console.info(o[e],e,"["+i+"]",n(s),t.constructor.describe,a&&(u=a.name||a.displayName)&&"->  "+u))}function i(){this.before("trigger",function(){r("trigger",this,t.toArray(arguments))}),this.before("on",function(){r("on",this,t.toArray(arguments))}),this.before("off",function(){r("off",this,t.toArray(arguments))})}var o={on:"<-",trigger:"->",off:"x "};return i});