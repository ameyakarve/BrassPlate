(function() {
  "use strict";

  define(["director", "modules/Ingredients/boot", "modules/sidebar/boot", "jquery", "mustache", "vendor/flight/lib/component", "templates"], function(Director, Ingredients, Sidebar, $, Mustache, component, Templates) {
    var initialize;
    initialize = function() {
      var AboutRoute, HomeRoute, IngredientsRoute, router, routes;
      IngredientsRoute = function() {
        component.teardownAll();
        $("#content").html(Mustache.render(Templates.IngredientsTemplate));
        Ingredients.initialize();
        return Sidebar.toggleNavbar("#nav3");
      };
      HomeRoute = function() {
        component.teardownAll();
        $("#content").empty();
        return Sidebar.toggleNavbar("#nav1");
      };
      AboutRoute = function() {
        component.teardownAll();
        Sidebar.toggleNavbar("#nav2");
        return $("#content").empty();
      };
      routes = {
        "/ingredients": IngredientsRoute,
        "/about": AboutRoute,
        "/home": HomeRoute
      };
      router = Director.Router(routes);
      return router.init();
    };
    return {
      initialize: initialize
    };
  });

}).call(this);
