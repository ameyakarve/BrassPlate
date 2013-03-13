# global define 
"use strict"
define ["vendor/flight/lib/component", "flightComponents/topBar/operations", "flightComponents/topBar/view"], (defineComponent, operations,view) ->
  topBar = ->
    @after "initialize", ->
      @renderInit()

  defineComponent topBar, operations, view

