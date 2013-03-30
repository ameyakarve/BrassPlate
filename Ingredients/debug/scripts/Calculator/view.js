(function() {
  "use strict";

  define(["jquery", "mustache", "vendor/twitter-typeahead/typeahead", "text!Calculator/ingredient.html"], function($, Mustache, Typeahead, ingredientTemplate) {
    var view;
    view = function() {
      this.renderInit = function() {
        console.log("Entered view");
        return $("#calculatorAdd").typeahead({
          name: "calculatorTypeahead",
          prefetch: "scripts/Calculator/localdata.json"
        });
      };
      return this.renderItem = function(data) {
        $("#calculatorItems").append(Mustache.render(ingredientTemplate, {
          data: data
        }));
        console.log(ingredientTemplate);
        return console.log(Mustache.render(ingredientTemplate, data));
      };
    };
    return view;
  });

}).call(this);
