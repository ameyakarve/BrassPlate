# global define 
"use strict"
define ["vendor/flight/lib/component", "flightComponents/Order/operations", "flightComponents/Order/view"], (defineComponent, operations,view) ->
  Order = ->
    @after "initialize", ->
      

  defineComponent Order, operations, view

