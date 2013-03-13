#global define
"use strict"
define ["flightComponents/topBar/model", "flightComponents/navBar/model"], (topBar, navBar) ->
  initialize = ->
    topBar.attachTo("#topBar")
    navBar.attachTo("#navBar")
  initialize: initialize
