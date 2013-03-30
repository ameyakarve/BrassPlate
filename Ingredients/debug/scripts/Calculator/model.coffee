# global define 
"use strict"
define ["vendor/flight/lib/component", "Calculator/operations", "Calculator/view"], (defineComponent, operations,view) ->
  topBar = ->
    @defaultAttrs(Items:[])
    @after "initialize", ->
    	@renderInit()
    	@on(document.getElementById("calculatorAdd"), "twitterTypeaheadEvent", @addItem)
    	#working; rsender new children etc for above
    	#@on change
    	#@on remove
    	console.log("Attached to DOM")

  defineComponent topBar, operations, view

