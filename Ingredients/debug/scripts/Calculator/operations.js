(function() {
  "use strict";

  define(['jquery', 'underscore'], function($, _) {
    var operations;
    operations = function() {
      this.init = function() {
        return console.log($);
      };
      this.addItem = function(event) {
        var calculatorItem, data, id, selector;
        data = event.originalEvent.detail.data[0];
        if (_.contains(this.attr.Uids, data.uid)) {
          console.log('duplicate data');
        } else {
          id = _.uniqueId('calculatorRow');
          this.attr.Uids.push(data.uid);
          this.renderItem(data, id);
          calculatorItem = {
            uid: data.uid,
            name: data.value,
            quantity: 0,
            price: data.price,
            id: id,
            totalCost: function(quantity, price) {
              return quantity * price;
            }
          };
          this.attr.Items.push(calculatorItem);
          this.trigger('changed');
        }
        selector = "#calculatorInput" + id;
        if (warn) {
          return $(selector).addClass('warning');
        } else {
          return $(selector).removeClass('warning');
        }
      };
      this.changeItem = function() {
        var calculatorDOMs, calculatorQuantities, element, index, _i, _len,
          _this = this;
        console.log('changed input');
        calculatorDOMs = $('#calculatorItems .input-block-level');
        calculatorQuantities = _.map(calculatorDOMs, function(item) {
          var value, warning;
          value = $(item).first().attr("value");
          if (typeof value === "string") {
            value = parseFloat(value);
          }
          warning = false;
          if (isNaN(value)) {
            value = 0;
          }
          if (value < 0) {
            value = 0;
          }
          return value;
        });
        for (index = _i = 0, _len = calculatorQuantities.length; _i < _len; index = ++_i) {
          element = calculatorQuantities[index];
          this.attr.Items[index].quantity = element;
        }
        return this.renderChanged(_.map(this.attr.Items, function(item) {
          return {
            total: item.price * item.quantity,
            id: item.id
          };
        }));
      };
      return this.removeItem = function(event) {
        var _this = this;
        this.attr.Items = _.reject(this.attr.Items, function(num) {
          if (num.id === event.id) {
            _this.attr.Uids = _.reject(_this.attr.Uids, function(n) {
              return n === num.uid;
            });
            return true;
          }
          return false;
        });
        console.log(this.attr.Items, this.attr.Uids);
        $('#' + event.id).remove();
        return this.trigger('changed');
      };
    };
    return operations;
  });

}).call(this);
