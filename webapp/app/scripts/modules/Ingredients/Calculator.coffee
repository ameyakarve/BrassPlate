#global define
"use strict"
define ["vendor/flight/lib/component", "modules/Ingredients/JqueryCalls", "underscore"], (component, jQueryCalls, _) ->
  Ingredients = ->
    @defaultAttrs
      selectedItems: []
      quantities: []

    @Init = ->
      @attr.selectedItems = []
      @attr.quantities = []

    @addData = (event) ->
      detail = event.originalEvent.detail.returnData
      data = detail.data
      value = detail.value
      values = _.pluck(data, "value")
      index = values.indexOf(value)
      if index isnt -1
        UID = data[index].uid
        UIDs = _.pluck(@attr.selectedItems, "uid")
        if _.contains(UIDs, UID)
          console.log "Value found!"
        else
          @attr.selectedItems.push data[index]

    @after "initialize", ->
      @Init()
      @on "nextDependencyLoaded", jQueryCalls.CalculatorsetTypeAhead
      @on "dataAdded", @addData

  calculatorComponent: component(Ingredients)
