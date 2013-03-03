(function() {
  "use strict";

  define(["vendor/flight/lib/component", "modules/Ingredients/JqueryCalls", "underscore"], function(component, jQueryCalls, _) {
    var Ingredients;
    Ingredients = function() {
      this.defaultAttrs({
        selectedItems: [],
        quantities: []
      });
      this.Init = function() {
        this.attr.selectedItems = [];
        return this.attr.quantities = [];
      };
      this.addData = function(event) {
        var UID, UIDs, data, detail, index, value, values;
        detail = event.originalEvent.detail.returnData;
        data = detail.data;
        value = detail.value;
        values = _.pluck(data, "value");
        index = values.indexOf(value);
        if (index !== -1) {
          UID = data[index].uid;
          UIDs = _.pluck(this.attr.selectedItems, "uid");
          if (_.contains(UIDs, UID)) {
            return console.log("Value found!");
          } else {
            return this.attr.selectedItems.push(data[index]);
          }
        }
      };
      return this.after("initialize", function() {
        this.Init();
        this.on("nextDependencyLoaded", jQueryCalls.CalculatorsetTypeAhead);
        return this.on("dataAdded", this.addData);
      });
    };
    return {
      calculatorComponent: component(Ingredients)
    };
  });

}).call(this);
