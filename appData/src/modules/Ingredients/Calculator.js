define(
	[
		'assets/js/components/flight/lib/component', 
		'assets/js/components/bootstrap/js/bootstrap-typeahead', 
		'assets/js/components/underscore/underscore', 
		'mustache'
	],

function(component, typeAhead, Underscore, Mustache) {
    function Ingredients() {
        this.defaultAttrs({
            selectedItems: [],
            allItems: [],
            quantities: [],
            lastTimeStamp:0
        });
        
        this.after("initialize", function() {
		
        });
    }
	return {calculatorComponent:component(Ingredients)};

});
