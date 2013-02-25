define([
	'src/modules/Ingredients/Calculator',
	'src/modules/Ingredients/Form'
], function(Calculator,Form) {
    var Initialize = function() {
        Calculator.calculatorComponent.attachTo("#calculatorComponent");
		Form.formComponent.attachTo("#formComponent");
    };
    return {
        initialize: Initialize
    };
});