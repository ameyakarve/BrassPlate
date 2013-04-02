(function() {
  "use strict";

  define(["jquery", "mustache", "vendor/typeahead.js/dist/typeahead", "text!Calculator/ingredient.html", "text!Calculator/ingredientDropdown.html"], function($, Mustache, Typeahead, ingredientTemplate, ingredientDropdownTemplate) {
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
        var id, options;
        id = _.uniqueId('calculatorRow');
        options = {
          data: data,
          id: id
        };
        if (data.quantity) {
          console.log('I need a dropdown');
          $('#calculatorItems').append(Mustache.render(ingredientDropdownTemplate, options));
        } else {
          console.log('Box is fine', ingredientTemplate);
          $('#calculatorItems').append(Mustache.render(ingredientTemplate, options));
        }
        return $('#' + id + ' input').first().on('input onchange', function() {
          return require(['jquery'], function($) {
            return $('#calculator').trigger({
              type: 'changed'
            });
          });
        });
      };
    };
    return view;
  });

}).call(this);
