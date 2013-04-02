# global define 
"use strict"
define ['jquery', 'underscore'], ($, _)->
  operations = ->
    @init = ->
      console.log $
    @addItem = (event) ->
      data = event.originalEvent.detail.data[0]
      if _.contains @attr.Uids, data.uid 
        console.log 'duplicate data'
      else
        @attr.Uids.push data.uid
        @renderItem data
        calculatorItem = 
          uid: data.uid
          name: data.value
          quantity: 0
          price: data.price
          totalCost: (quantity, price) ->
            quantity*price
        @attr.Items.push(calculatorItem)
    @changeItem = () ->
      console.log 'changed input'
  operations

