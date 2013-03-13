# global define 
"use strict"
define ["vendor/flight/lib/component", "flightComponents/navBar/operations", "flightComponents/navBar/view"], (defineComponent, operations,view) ->
  navBar = ->
    @after "initialize", ->
      @renderInit()

  defineComponent navBar, operations, view

