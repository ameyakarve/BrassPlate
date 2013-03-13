#global define
"use strict"
define ["director", "jquery", "mustache", "vendor/flight/lib/component", "templates"], (Director, $, Mustache, component, Templates) ->
  initialize = ->
    HomeRoute = ->
      #do something for the default route

    routes =
      "/": HomeRoute

    router = Director.Router(routes)
    router.init('/')

  initialize: initialize
