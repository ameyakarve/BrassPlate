/* ============================================================
 * bootstrap-button.js v2.3.0
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
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
 * ============================================================ */

define(["jquery"],function(){!function(t){var o=function(o,n){this.$element=t(o),this.options=t.extend({},t.fn.button.defaults,n)};o.prototype.setState=function(t){var o="disabled",n=this.$element,e=n.data(),i=n.is("input")?"val":"html";t+="Text",e.resetText||n.data("resetText",n[i]()),n[i](e[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(o).attr(o,o):n.removeClass(o).removeAttr(o)},0)},o.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var e=t(this),i=e.data("button"),a="object"==typeof n&&n;i||e.data("button",i=new o(this,a)),"toggle"==n?i.toggle():n&&i.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=o,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(o){var n=t(o.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery)});