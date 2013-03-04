(function() {
  "use strict";

  define(["jquery", "router", "modules/sidebar/boot"], function($, Router, Sidebar) {
    var initialize;
    initialize = function() {
      Sidebar.initialize();
      return Router.initialize();
    };
    return {
      initialize: initialize
    };
  });

}).call(this);
