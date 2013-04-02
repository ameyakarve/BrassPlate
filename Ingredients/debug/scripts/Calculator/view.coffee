#global define
"use strict"
define ["jquery", "mustache", "vendor/typeahead.js/dist/typeahead", "text!Calculator/ingredient.html", "text!Calculator/ingredientDropdown.html"], ($, Mustache, Typeahead, ingredientTemplate, ingredientDropdownTemplate) ->
  view = ->
    @renderInit = ->
      console.log("Entered view") 
      #Set typeahead
      $("#calculatorAdd").typeahead({
        name: "calculatorTypeahead", 
        prefetch: "scripts/Calculator/localdata.json"
        })
    @renderItem = (data)->
      id = _.uniqueId 'calculatorRow'
      options = 
        data: data
        id: id
      if data.quantity
        console.log 'I need a dropdown'
        $('#calculatorItems').append Mustache.render ingredientDropdownTemplate, options
      else
        console.log 'Box is fine', ingredientTemplate
        $('#calculatorItems').append Mustache.render ingredientTemplate, options
      $('#'+ id + ' input').first().on 'input onchange', ->
        require ['jquery'], ($) ->
          $('#calculator').trigger type: 'changed'
  view