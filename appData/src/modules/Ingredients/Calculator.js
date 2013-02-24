define(
	[
		'assets/js/components/flight/lib/component', 
		'assets/js/components/bootstrap/js/bootstrap-typeahead', 
		'mustache',
		'src/modules/Ingredients/CalculatorJqueryCalls'
	],

function(component, typeAhead, Mustache, jQueryCalls) {
    function Ingredients() {
        this.defaultAttrs({
            selectedItems: [],
            allItems: [],
            quantities: [],
            lastTimeStamp:0
        });
        this.setData = function(event)
		{
			console.log(event.returnData);
			if(event.returnData.init)
			{
				//Initial config
				this.attr.lastTimeStamp = event.returnData.lastTimeStamp;
				this.attr.allItems = this.attr.allItems.concat(event.returnData.updatedData);
				console.log(this.attr.allItems);
			}
			else
			{
				//data added
			}
			jQueryCalls.setTypeAhead(this.attr.lastTimeStamp,this.attr.allItems);
		};
        this.after("initialize", function() {
			this.on("nextDependencyLoaded",jQueryCalls.Init);
			this.on("dataReceived",this.setData);
        });
    }
	return {calculatorComponent:component(Ingredients)};

});
