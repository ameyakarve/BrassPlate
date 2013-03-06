#global define
"use strict"
define ["jquery", "router", "modules/sidebar/boot"], ($, Router, Sidebar) ->
  initialize = ->
    Sidebar.initialize()
    Router.initialize()
  initialize: initialize
