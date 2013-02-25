/* ==========================================================
 * bootstrap-alert.js v2.3.0
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

define(["jquery"],function(){!function(t){var o='[data-dismiss="alert"]',i=function(i){t(i).on("click",o,this.close)};i.prototype.close=function(o){function i(){n.trigger("closed").remove()}var n,f=t(this),e=f.attr("data-target");e||(e=f.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,"")),n=t(e),o&&o.preventDefault(),n.length||(n=f.hasClass("alert")?f:f.parent()),n.trigger(o=t.Event("close")),o.isDefaultPrevented()||(n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.on(t.support.transition.end,i):i())};var n=t.fn.alert;t.fn.alert=function(o){return this.each(function(){var n=t(this),f=n.data("alert");f||n.data("alert",f=new i(this)),"string"==typeof o&&f[o].call(n)})},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.alert.data-api",o,i.prototype.close)}(window.jQuery)});