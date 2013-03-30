'use strict';
#define some components, write function
define ["jquery", "mustache", "Calculator/model", "text!Calculator/main.html"], ($, Mustache, Calculator, CalculatorTemplate)->
	initialize = ->
		console.log("Initialized all components")
		$("#calculator").html(Mustache.render(CalculatorTemplate))
		Calculator.attachTo("#calculator")
		#render initial part, then attach to the DOM
	initialize: initialize