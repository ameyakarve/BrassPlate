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
      this.renderChanged = function(Items) {
        var i, sum, _i, _len;
        sum = 0;
        for (_i = 0, _len = Items.length; _i < _len; _i++) {
          i = Items[_i];
          $("#calculatorTotal" + i.id).html(i.total);
          sum += i.total;
        }
        return $("#calculatorTotalAll").html(sum);
      };
      return this.renderItem = function(data, id) {
        var options,
          _this = this;
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
        $('#' + id + ' input').first().on('input onchange', function() {
          return require(['jquery'], function($) {
            return $('#calculator').trigger({
              type: 'changed'
            });
          });
        });
        $('#' + id + ' select').first().change(function() {
          return require(['jquery'], function($) {
            return $('#calculator').trigger({
              type: 'changed'
            });
          });
        });
        return $('#calculatorRemove' + id).on('click', function() {
          return require(['jquery'], function($) {
            options = {
              type: 'removed',
              id: id
            };
            return $('#calculator').trigger(options);
          });
        });
      };
    };
    return view;
  });

}).call(this);
