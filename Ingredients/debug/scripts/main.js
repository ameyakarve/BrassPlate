(function() {

  require.config({
    paths: {
      jquery: "vendor/jquery/jquery",
      underscore: "vendor/underscore/underscore",
      director: "vendor/director/director_AMD",
      shim: "vendor/es5-shim/es5-shim",
      sham: "vendor/es5-shim/es5-sham",
      router: "router",
      mustache: "vendor/mustache/mustache"
    }
  });

  require(["jquery", "shim", "sham", "vendor/flight/lib/compose", "vendor/flight/lib/registry", "vendor/flight/lib/advice", "vendor/flight/lib/logger", "app"], function($, shim, sham, compose, registry, advice, withLogging, App) {
    "use strict";
    compose.mixin(registry, [advice.withAdvice, withLogging]);
    return App.initialize();
  });

}).call(this);
