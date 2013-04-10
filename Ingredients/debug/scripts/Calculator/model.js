(function() {
  "use strict";

  define(["vendor/flight/lib/component", "Calculator/operations", "Calculator/view"], function(defineComponent, operations, view) {
    var topBar;
    topBar = function() {
      this.defaultAttrs({
        Items: [],
        Uids: []
      });
      return this.after("initialize", function() {
        this.renderInit();
        this.on(document.getElementById("calculatorAdd"), "typeahead:selected", this.addItem);
        this.on("changed", this.changeItem);
        this.on("removed", this.removeItem);
        return this.attr.items = [];
      });
    };
    return defineComponent(topBar, operations, view);
  });

}).call(this);
