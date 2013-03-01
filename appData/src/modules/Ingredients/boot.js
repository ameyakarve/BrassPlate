define([], function() {
    var Initialize = function() {
        require(['src/modules/Ingredients/Calculator', 'src/modules/Ingredients/Form'], function(Calculator, Form) {
            Calculator.calculatorComponent.attachTo("#calculatorComponent");
            Form.formComponent.attachTo("#formComponent");
        });
    };
    return {
        initialize: Initialize
    };
});