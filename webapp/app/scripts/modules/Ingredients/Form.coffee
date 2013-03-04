#global define
"use strict"
define ["vendor/flight/lib/component", "modules/Ingredients/JqueryCalls"], (component, jQueryCalls) ->
  Form = ->
    @defaultAttrs
      selectedItems: []
      allItems: []
      quantities: []
      lastTimeStamp: 0

    @Init = ->
      jQueryCalls.FormInit()

    @after "initialize", ->
      @Init()
      @on "addFormSubmit", jQueryCalls.FormSubmitForm
      @on "dataReceived", jQueryCalls.FormReceiveFormData
      @on "setTimeStamp", jQueryCalls.FormSetTimeStamp

  formComponent: component(Form)
