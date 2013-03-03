#global define require
"use strict"
define [], ->
  Initialize = ->
    require ["modules/Ingredients/Calculator", "modules/Ingredients/Form"], (Calculator, Form) ->
      Calculator.calculatorComponent.attachTo "#calculatorComponent"
      Form.formComponent.attachTo "#formComponent"


  initialize: Initialize
