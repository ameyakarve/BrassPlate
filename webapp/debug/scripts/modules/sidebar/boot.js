(function() {
  "use strict";

  define([], function() {
    var initialize, toggleNavbar;
    initialize = function() {
      return require(["jquery", "mustache", "templates", "modules/sidebar/nav"], function($, Mustache, Templates, NavBar) {
        $("#sidebar").html(Mustache.render(Templates.sidebarTemplate, {}));
        return NavBar.navbarComponent.attachTo("#navbar");
      });
    };
    toggleNavbar = function(current) {
      return require(["jquery", "mustache", "templates", "modules/sidebar/nav"], function($) {
        $("li.active").each(function() {
          return $(this).removeClass("active");
        });
        return $(current).addClass("active");
      });
    };
    return {
      initialize: initialize,
      toggleNavbar: toggleNavbar
    };
  });

}).call(this);
