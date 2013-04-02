(function() {
  "use strict";

  define(['jquery', 'underscore'], function($, _) {
    var operations;
    operations = function() {
      this.init = function() {
        return console.log($);
      };
      this.addItem = function(event) {
        var calculatorItem, data;
        data = event.originalEvent.detail.data[0];
        if (_.contains(this.attr.Uids, data.uid)) {
          return console.log('duplicate data');
        } else {
          this.attr.Uids.push(data.uid);
          this.renderItem(data);
          calculatorItem = {
            uid: data.uid,
            name: data.value,
            quantity: 0,
            price: data.price,
            totalCost: function(quantity, price) {
              return quantity * price;
            }
          };
          return this.attr.Items.push(calculatorItem);
        }
      };
      return this.changeItem = function() {
        return console.log('changed input');
      };
    };
    return operations;
  });

}).call(this);
