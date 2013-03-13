#global define
"use strict"
# Here, load the init components too. The header, sidebar etc
define ["jquery", "router", "modules/header"], ($, Router, Header) ->
  initialize = ->
    Router.initialize()
    Header.initialize()
  initialize: initialize
