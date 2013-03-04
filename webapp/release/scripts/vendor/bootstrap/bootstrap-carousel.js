!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(e){var n=this.getActiveIndex(),i=this;if(!(e>this.$items.length-1||0>e))return this.sliding?this.$element.one("slid",function(){i.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(e,n){var i,o=this.$element.find(".item.active"),s=n||o[e](),r=this.interval,a="next"==e?"left":"right",c="next"==e?"first":"last",u=this;if(this.sliding=!0,r&&this.pause(),s=s.length?s:this.$element.find(".item")[c](),i=t.Event("slide",{relatedTarget:s[0],direction:a}),!s.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(u.$indicators.children()[u.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(i),i.isDefaultPrevented())return;s.addClass(e),s[0].offsetWidth,o.addClass(a),s.addClass(a),this.$element.one(t.support.transition.end,function(){s.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger("slid")},0)})}else{if(this.$element.trigger(i),i.isDefaultPrevented())return;o.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return r&&this.cycle(),this}}};var n=t.fn.carousel;t.fn.carousel=function(n){return this.each(function(){var i=t(this),o=i.data("carousel"),s=t.extend({},t.fn.carousel.defaults,"object"==typeof n&&n),r="string"==typeof n?n:s.slide;o||i.data("carousel",o=new e(this,s)),"number"==typeof n?o.to(n):r?o[r]():s.interval&&o.pause().cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var n,i,o=t(this),s=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),r=t.extend({},s.data(),o.data());s.carousel(r),(i=o.attr("data-slide-to"))&&s.data("carousel").pause().to(i).cycle(),e.preventDefault()})}(window.jQuery);