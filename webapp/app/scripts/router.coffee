#global define
"use strict"
define ["director", "modules/Ingredients/boot", "modules/sidebar/boot", "jquery", "mustache", "vendor/flight/lib/component", "templates"], (Director, Ingredients, Sidebar, $, Mustache, component, Templates) ->
  initialize = ->
    IngredientsRoute = ->
      component.teardownAll()
      $("#content").html Mustache.render(Templates.IngredientsTemplate)
      Ingredients.initialize()
      Sidebar.toggleNavbar "#nav3"

    HomeRoute = ->
      component.teardownAll()
      $("#content").empty()
      Sidebar.toggleNavbar "#nav1"

    AboutRoute = ->
      component.teardownAll()
      Sidebar.toggleNavbar "#nav2"
      $("#content").empty()

    routes =
      "/ingredients": IngredientsRoute
      "/about": AboutRoute
      "/home": HomeRoute

    router = Director.Router(routes)
    router.init()

  initialize: initialize
