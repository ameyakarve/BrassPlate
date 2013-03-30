(function() {
  'use strict';

  define(["jquery", "mustache", "Calculator/model", "text!Calculator/main.html"], function($, Mustache, Calculator, CalculatorTemplate) {
    var initialize;
    initialize = function() {
      console.log("Initialized all components");
      $("#calculator").html(Mustache.render(CalculatorTemplate));
      return Calculator.attachTo("#calculator");
    };
    return {
      initialize: initialize
    };
  });

}).call(this);
