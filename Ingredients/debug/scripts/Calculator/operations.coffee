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
        id = _.uniqueId 'calculatorRow'
        @attr.Uids.push data.uid
        @renderItem data, id
        calculatorItem = 
          uid: data.uid
          name: data.value
          quantity: 0
          price: data.price
          id: id
          totalCost: (quantity, price) ->
            quantity*price
        @attr.Items.push(calculatorItem)
        @trigger 'changed'
      selector = "#calculatorInput" + id
      if(warn)
        $(selector).addClass 'warning'
      else 
        $(selector).removeClass 'warning'

    @changeItem = () ->
      console.log 'changed input'
      calculatorDOMs = $('#calculatorItems .input-block-level')
      calculatorQuantities = _.map calculatorDOMs, (item) =>
        value = $(item).first().attr("value")
        if typeof value == "string" then value = parseFloat value
        warning = false
        if isNaN value 
          value = 0
        if value < 0 
          value = 0
        value
      for element, index in calculatorQuantities
        @attr.Items[index].quantity = element
      @renderChanged _.map @attr.Items, (item) ->
        total: item.price * item.quantity
        id: item.id


    @removeItem = (event) ->
      @attr.Items = _.reject @attr.Items, (num) =>
        if(num.id == event.id) 
          @attr.Uids = _.reject @attr.Uids, (n) =>
            n == num.uid
          return true
        false
      console.log @attr.Items, @attr.Uids
      $('#'+event.id).remove()
      @trigger 'changed'
  operations

