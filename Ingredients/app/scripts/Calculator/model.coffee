# global define 
"use strict"
define ["vendor/flight/lib/component", "Calculator/operations", "Calculator/view"], (defineComponent, operations,view) ->
  topBar = ->
    @defaultAttrs(Items:[], Uids:[])
    @after "initialize", ->
        @renderInit()
        @on document.getElementById("calculatorAdd"), "typeahead:selected", @addItem
        @on "changed", @changeItem
        @on "removed", @removeItem
        @attr.items = []

  defineComponent topBar, operations, view

