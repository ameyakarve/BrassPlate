#global define
"use strict"
define ["flightComponents/Order/model","text!flightComponents/Order/main.html", "jquery", "mustache" ], (Order, orderTemplate, $, Mustache) ->
  initialize = ->
    $("#content").html(Mustache.render(orderTemplate))
    Order.attachTo("#orderComponent")
  initialize: initialize
