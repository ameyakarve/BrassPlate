(function() {
  "use strict";

  define(["vendor/flight/lib/component", "modules/Ingredients/JqueryCalls"], function(component, jQueryCalls) {
    var Form;
    Form = function() {
      this.defaultAttrs({
        selectedItems: [],
        allItems: [],
        quantities: [],
        lastTimeStamp: 0
      });
      this.Init = function() {
        return jQueryCalls.FormInit();
      };
      return this.after("initialize", function() {
        this.Init();
        this.on("addFormSubmit", jQueryCalls.FormSubmitForm);
        this.on("dataReceived", jQueryCalls.FormReceiveFormData);
        return this.on("setTimeStamp", jQueryCalls.FormSetTimeStamp);
      });
    };
    return {
      formComponent: component(Form)
    };
  });

}).call(this);
