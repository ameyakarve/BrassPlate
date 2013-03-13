#global define
"use strict"
define ["jquery", "mustache", "text!flightComponents/topBar/main.html"], ($, Mustache, mainTemplate) ->
  view = ->
    @renderInit = ->
      $("#topBar").html(Mustache.render(mainTemplate));
  view
