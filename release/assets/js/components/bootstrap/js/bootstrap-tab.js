/* ========================================================
 * bootstrap-tab.js v2.3.0
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
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
 * ======================================================== */

!function(t){var e=function(e){this.element=t(e)};e.prototype={constructor:e,show:function(){var e,n,i,s=this.element,o=s.closest("ul:not(.dropdown-menu)"),a=s.attr("data-target");a||(a=s.attr("href"),a=a&&a.replace(/.*(?=#[^\s]*$)/,"")),s.parent("li").hasClass("active")||(e=o.find(".active:last a")[0],i=t.Event("show",{relatedTarget:e}),s.trigger(i),i.isDefaultPrevented()||(n=t(a),this.activate(s.parent("li"),o),this.activate(n,n.parent(),function(){s.trigger({type:"shown",relatedTarget:e})})))},activate:function(e,n,i){function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var o=n.find("> .active"),a=i&&t.support.transition&&o.hasClass("fade");a?o.one(t.support.transition.end,s):s(),o.removeClass("in")}};var n=t.fn.tab;t.fn.tab=function(n){return this.each(function(){var i=t(this),s=i.data("tab");s||i.data("tab",s=new e(this)),"string"==typeof n&&s[n]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery);