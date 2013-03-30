(function() {
  "use strict";

  define(["vendor/flight/lib/component", "Calculator/operations", "Calculator/view"], function(defineComponent, operations, view) {
    var topBar;
    topBar = function() {
      this.defaultAttrs({
        Items: []
      });
      return this.after("initialize", function() {
        this.renderInit();
        this.on(document.getElementById("calculatorAdd"), "twitterTypeaheadEvent", this.addItem);
        return console.log("Attached to DOM");
      });
    };
    return defineComponent(topBar, operations, view);
  });

}).call(this);
