#global define
"use strict"
define ["jquery", "mustache", "text!flightComponents/navBar/main.html", "flightComponents/navBar/navList"], ($, Mustache, mainTemplate, navList) ->
  view = ->
    @renderInit = ->
      $("#navBar").html(Mustache.render(mainTemplate, navList));
      console.log("Navbar rendered", navList)
  view
