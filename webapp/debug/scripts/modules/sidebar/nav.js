(function() {
  "use strict";

  define(["vendor/flight/lib/component"], function(component) {
    var NavBar;
    NavBar = function() {
      return this.after("initialize", function() {});
    };
    return {
      navbarComponent: component(NavBar)
    };
  });

}).call(this);
