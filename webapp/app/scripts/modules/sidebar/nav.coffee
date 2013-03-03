#global define
"use strict"
define ["vendor/flight/lib/component"], (component) ->
  NavBar = ->
    @after "initialize", ->

  navbarComponent: component(NavBar)
