#global define
"use strict"
define ["jquery", "mustache", "vendor/twitter-typeahead/typeahead", "text!Calculator/ingredient.html"], ($, Mustache, Typeahead, ingredientTemplate) ->
  view = ->
    @renderInit = ->
      console.log("Entered view")
      #Set typeahead
      $("#calculatorAdd").typeahead({
      	name: "calculatorTypeahead", 
      	prefetch: "scripts/Calculator/localdata.json"
      	})
    @renderItem = (data)->
    	$("#calculatorItems").append(Mustache.render(ingredientTemplate,{data: data}));
    	console.log ingredientTemplate
    	console.log Mustache.render(ingredientTemplate, data)
  view
