define(["jquery"],function(){!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,i=n.data(),r=n.is("input")?"val":"html";t+="Text",i.resetText||n.data("resetText",n[r]()),n[r](i[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=function(n){return this.each(function(){var i=t(this),r=i.data("button"),o="object"==typeof n&&n;r||i.data("button",r=new e(this,o)),"toggle"==n?r.toggle():n&&r.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery)});