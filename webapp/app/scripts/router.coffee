#global define
"use strict"
define ["director", "jquery", "mustache", "vendor/flight/lib/component", "templates", "modules/Order"], (Director, $, Mustache, component, Templates, Order) ->
  initialize = ->
    HomeRoute = ->
      #do something for the default route
    AboutRoute = ->
      #About route stuff goes here
      console.log("About Route initiated");
    OrderRoute = ->
      #Order Route goes here
      console.log("Order Route Initialized")
      Order.initialize()

    routes =
      "/": HomeRoute
      "/About": AboutRoute
      "/Order": OrderRoute

    router = Director.Router(routes)
    router.init('/')

  initialize: initialize
