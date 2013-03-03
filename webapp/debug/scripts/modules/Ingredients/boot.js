/*global define require*/
'use strict';
define([], function () {
    var Initialize = function () {
        require(['modules/Ingredients/Calculator', 'modules/Ingredients/Form'], function (Calculator, Form) {
            Calculator.calculatorComponent.attachTo('#calculatorComponent');
            Form.formComponent.attachTo('#formComponent');
        });
    };
    return {
        initialize: Initialize
    };
});
