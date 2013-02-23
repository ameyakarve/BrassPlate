define([
	'mustache', 
	'text!src/modules/Ingredients/templates/init.txt', 
	'jquery',
	'src/modules/Ingredients/Calculator',
	'src/modules/Ingredients/Form'
//components, template
], function(Mustache, Template, $, Calculator,Form) {
    var Initialize = function() {
        $("#content").html(Mustache.render(Template));
		Calculator.calculatorComponent.attachTo("#calculatorComponent");
		Form.formComponent.attachTo("#formComponent");
    };
    return {
        initialize: Initialize
    };
});