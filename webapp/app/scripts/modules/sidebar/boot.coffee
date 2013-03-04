#global define
"use strict"
define [], ->
  initialize = ->
    require ["jquery", "mustache", "templates", "modules/sidebar/nav"], ($, Mustache, Templates, NavBar) ->
      $("#sidebar").html Mustache.render(Templates.sidebarTemplate, {})
      NavBar.navbarComponent.attachTo "#navbar"


  toggleNavbar = (current) ->
    
    #Look for children here
    require ["jquery", "mustache", "templates", "modules/sidebar/nav"], ($) ->
      $("li.active").each ->
        $(this).removeClass "active"

      $(current).addClass "active"


  initialize: initialize
  toggleNavbar: toggleNavbar
