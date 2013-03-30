#global define
"use strict"
define ["jquery", "mustache", "text!flightComponents/Order/main.html"], ($, Mustache, mainTemplate) ->
  view = ->
    @renderInit = ->
      $("#content").html(Mustache.render(mainTemplate));
  view
