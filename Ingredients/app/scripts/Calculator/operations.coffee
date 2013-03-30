# global define 
"use strict"
define ['jquery', 'underscore'], ($, _)->
  operations = ->
    @init = ->
      console.log $
    @addItem = (event) ->
    	if (_.contains(_.pluck(@attr.Items,'uid'), event.returnData.uid))
            console.log("Item already exists")
        else
            @attr.Items.push(event.returnData)
            @renderItem(event.returnData)
  operations

