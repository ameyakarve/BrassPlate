#global define
"use strict"
define ["jquery", "vendor/bootstrap/bootstrap-alert", "vendor/bootstrap/bootstrap-button", "vendor/bootstrap/bootstrap-modal", "vendor/bootstrap/bootstrap-combined", "vendor/twitter-typeahead/typeahead", "mustache", "underscore"], ($, Alert, Button, Modal, Combined, Typeahead, Mustache, _) ->
  FormInit = ->
    $("#addNewIngredientFormModal").modal
      show: false
      keyboard: false

    $("#addNewIngredientButton").click ->
      $("#addNewIngredientFormModal").modal "show"

    $("#addIngredientFormSubmit").click ->
      $("#formComponent").trigger type: "addFormSubmit"
      $("#addIngredientFormSubmit").button "loading"
      $("#addIngredientModalClose").button "loading"
      $("#addIngredientFormClear").button "loading"

    $("#calculatorComponent").trigger type: "nextDependencyLoaded"

  FormSubmitForm = ->
    formData = $("#addIngredientmodalForm").serialize()
    cachebang = new Date().getTime()
    formData += "&CACHEBANG=" + cachebang
    $.ajax
      type: "GET"
      url: "api/addIngredient"
      data: formData
      success: (data) ->
        $("#formComponent").trigger
          type: "dataReceived"
          returnData: data


      error: ->
        console.log "Error in request"


  FormSetTimeStamp = (event) ->
    $("#formTimeStamp").val event.timestamp

  FormReceiveFormData = (event) ->
    unless event.returnData.init
      console.log event
      $("#calculatorComponent").trigger
        type: "dataReceived"
        returnData: event.returnData

      $("#addIngredientFormSubmit").button "reset"
      $("#addIngredientModalClose").button "reset"
      $("#addIngredientFormClear").button "reset"
      if event.returnData.addedStatus.success
        $("#formAlertArea").html Mustache.render(Combined.formSuccess)
        $("#ingredientBoxSuccessAlert").alert()
      else
        $("#formAlertArea").html Mustache.render(Combined.formError)
        $("#ingredientBoxErrorAlert").alert()
    else

  CalculatorsetTypeAhead = ->
    $("#ingredientTypeahead").remove()
    $("#inputWarning").remove()
    $("#inputControls").html Mustache.render(Combined.typeAhead, {})
    $("#ingredientTypeahead").typeahead prefetch: "api/typeaheadHackInit"

  
  #moar stuff to be added here
  CalculatoraddItem = (data, index) ->
    console.log data
    $("#itemList").append Mustache.render(Combined.addItem,
      data: data
      index: index
    )
    $("#removeItem" + index).click ->
      $("#calculatorComponent").trigger
        type: "itemRemoved"
        index: index


    $("#itemQuantity" + index).on "input", ->
      $("#calculatorComponent").trigger
        type: "quantitiesChanged"
        index: index
        removed: false



  CalculatoraddItemError = ->
    $("#warningGroup").addClass "error"
    $("#inputWarning").html "This item is already present"

  CalculatorremoveItem = (index) ->
    $("#addedItem" + index).remove()
    $("#calculatorComponent").trigger
      type: "quantitiesChanged"
      index: index
      removed: true


  CalculatorgetQuantityValues = ->
    dom = $(".inputQuantity")
    _.map dom, (item) ->
      if isNaN(parseFloat(item.value))
        0
      else if parseFloat(item.value) < 0
        0
      else
        parseFloat item.value


  CalculatorrenderTotalCost = (cost) ->
    console.log cost
    $("#totalPriceValue").html cost.toFixed(2)

  CalculatorrenderTotalCostChange = (index, price) ->
    thisVal = parseFloat($("#itemQuantity" + index)[0].value)
    thisVal = 0  if thisVal < 0 or isNaN(thisVal)
    cost = thisVal * price
    $("#itemValue" + index).html cost.toFixed(2)

  FormInit: FormInit
  FormSubmitForm: FormSubmitForm
  FormReceiveFormData: FormReceiveFormData
  FormSetTimeStamp: FormSetTimeStamp
  CalculatorsetTypeAhead: CalculatorsetTypeAhead
  CalculatoraddItem: CalculatoraddItem
  CalculatoraddItemError: CalculatoraddItemError
  CalculatorremoveItem: CalculatorremoveItem
  CalculatorgetQuantityValues: CalculatorgetQuantityValues
  CalculatorrenderTotalCost: CalculatorrenderTotalCost
  CalculatorrenderTotalCostChange: CalculatorrenderTotalCostChange
