(function() {
  "use strict";

  define(['jquery', 'underscore'], function($, _) {
    var operations;
    operations = function() {
      this.init = function() {
        return console.log($);
      };
      return this.addItem = function(event) {
        if (_.contains(_.pluck(this.attr.Items, 'uid'), event.returnData.uid)) {
          return console.log("Item already exists");
        } else {
          this.attr.Items.push(event.returnData);
          return this.renderItem(event.returnData);
        }
      };
    };
    return operations;
  });

}).call(this);
