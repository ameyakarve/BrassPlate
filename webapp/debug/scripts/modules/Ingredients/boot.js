(function() {
  "use strict";

  define([], function() {
    var Initialize;
    Initialize = function() {
      return require(["modules/Ingredients/Calculator", "modules/Ingredients/Form"], function(Calculator, Form) {
        Calculator.calculatorComponent.attachTo("#calculatorComponent");
        return Form.formComponent.attachTo("#formComponent");
      });
    };
    return {
      initialize: Initialize
    };
  });

}).call(this);
