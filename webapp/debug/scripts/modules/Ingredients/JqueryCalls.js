(function() {
  "use strict";

  define(["jquery", "vendor/bootstrap/bootstrap-alert", "vendor/bootstrap/bootstrap-button", "vendor/bootstrap/bootstrap-modal", "vendor/bootstrap/bootstrap-combined", "vendor/twitter-typeahead/typeahead", "mustache", "underscore"], function($, Alert, Button, Modal, Combined, Typeahead, Mustache, _) {
    var CalculatoraddItem, CalculatoraddItemError, CalculatorgetQuantityValues, CalculatorremoveItem, CalculatorrenderTotalCost, CalculatorrenderTotalCostChange, CalculatorsetTypeAhead, FormInit, FormReceiveFormData, FormSetTimeStamp, FormSubmitForm;
    FormInit = function() {
      $("#addNewIngredientFormModal").modal({
        show: false,
        keyboard: false
      });
      $("#addNewIngredientButton").click(function() {
        return $("#addNewIngredientFormModal").modal("show");
      });
      $("#addIngredientFormSubmit").click(function() {
        $("#formComponent").trigger({
          type: "addFormSubmit"
        });
        $("#addIngredientFormSubmit").button("loading");
        $("#addIngredientModalClose").button("loading");
        return $("#addIngredientFormClear").button("loading");
      });
      return $("#calculatorComponent").trigger({
        type: "nextDependencyLoaded"
      });
    };
    FormSubmitForm = function() {
      var cachebang, formData;
      formData = $("#addIngredientmodalForm").serialize();
      cachebang = new Date().getTime();
      formData += "&CACHEBANG=" + cachebang;
      return $.ajax({
        type: "GET",
        url: "api/addIngredient",
        data: formData,
        success: function(data) {
          return $("#formComponent").trigger({
            type: "dataReceived",
            returnData: data
          });
        },
        error: function() {
          return console.log("Error in request");
        }
      });
    };
    FormSetTimeStamp = function(event) {
      return $("#formTimeStamp").val(event.timestamp);
    };
    FormReceiveFormData = function(event) {
      if (!event.returnData.init) {
        console.log(event);
        $("#calculatorComponent").trigger({
          type: "dataReceived",
          returnData: event.returnData
        });
        $("#addIngredientFormSubmit").button("reset");
        $("#addIngredientModalClose").button("reset");
        $("#addIngredientFormClear").button("reset");
        if (event.returnData.addedStatus.success) {
          $("#formAlertArea").html(Mustache.render(Combined.formSuccess));
          return $("#ingredientBoxSuccessAlert").alert();
        } else {
          $("#formAlertArea").html(Mustache.render(Combined.formError));
          return $("#ingredientBoxErrorAlert").alert();
        }
      } else {

      }
    };
    CalculatorsetTypeAhead = function() {
      $("#ingredientTypeahead").remove();
      $("#inputWarning").remove();
      $("#inputControls").html(Mustache.render(Combined.typeAhead, {}));
      return $("#ingredientTypeahead").typeahead({
        prefetch: "api/typeaheadHackInit"
      });
    };
    CalculatoraddItem = function(data, index) {
      console.log(data);
      $("#itemList").append(Mustache.render(Combined.addItem, {
        data: data,
        index: index
      }));
      $("#removeItem" + index).click(function() {
        return $("#calculatorComponent").trigger({
          type: "itemRemoved",
          index: index
        });
      });
      return $("#itemQuantity" + index).on("input", function() {
        return $("#calculatorComponent").trigger({
          type: "quantitiesChanged",
          index: index,
          removed: false
        });
      });
    };
    CalculatoraddItemError = function() {
      $("#warningGroup").addClass("error");
      return $("#inputWarning").html("This item is already present");
    };
    CalculatorremoveItem = function(index) {
      $("#addedItem" + index).remove();
      return $("#calculatorComponent").trigger({
        type: "quantitiesChanged",
        index: index,
        removed: true
      });
    };
    CalculatorgetQuantityValues = function() {
      var dom;
      dom = $(".inputQuantity");
      return _.map(dom, function(item) {
        if (isNaN(parseFloat(item.value))) {
          return 0;
        } else if (parseFloat(item.value) < 0) {
          return 0;
        } else {
          return parseFloat(item.value);
        }
      });
    };
    CalculatorrenderTotalCost = function(cost) {
      console.log(cost);
      return $("#totalPriceValue").html(cost.toFixed(2));
    };
    CalculatorrenderTotalCostChange = function(index, price) {
      var cost, thisVal;
      thisVal = parseFloat($("#itemQuantity" + index)[0].value);
      if (thisVal < 0 || isNaN(thisVal)) {
        thisVal = 0;
      }
      cost = thisVal * price;
      return $("#itemValue" + index).html(cost.toFixed(2));
    };
    return {
      FormInit: FormInit,
      FormSubmitForm: FormSubmitForm,
      FormReceiveFormData: FormReceiveFormData,
      FormSetTimeStamp: FormSetTimeStamp,
      CalculatorsetTypeAhead: CalculatorsetTypeAhead,
      CalculatoraddItem: CalculatoraddItem,
      CalculatoraddItemError: CalculatoraddItemError,
      CalculatorremoveItem: CalculatorremoveItem,
      CalculatorgetQuantityValues: CalculatorgetQuantityValues,
      CalculatorrenderTotalCost: CalculatorrenderTotalCost,
      CalculatorrenderTotalCostChange: CalculatorrenderTotalCostChange
    };
  });

}).call(this);
