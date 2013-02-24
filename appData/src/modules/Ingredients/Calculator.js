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
			this.attr.lastTimeStamp = event.returnData.lastTimeStamp;
			this.attr.allItems = this.attr.allItems.concat(event.returnData.updatedData);	
			if(!(event.returnData.init))
			{
				if(event.returnData.addedStatus.success)
				{
					//Launch success alert with code
				}
				else
				{
					//Launch fail alert with code
				}
			}
			
			jQueryCalls.setTypeAhead(this.attr.lastTimeStamp,this.attr.allItems);
		};
		this.addItem = function(event)
		{
			if (this.attr.selectedItems.indexOf(event.index) == -1) {
				var index = event.index;
				var data = this.attr.allItems[index];
				this.attr.selectedItems.push(event.index);
				jQueryCalls.addItem(data,index);
			}
			else
			{
				jQueryCalls.addItemError()
			}
		};
		this.removeItem = function(event)
		{
			var index = this.attr.selectedItems.indexOf(event.index);
            this.attr.selectedItems.splice(index, 1);
            jQueryCalls.removeItem(event.index);
		};
		this.setQuantities = function(event)
		{
			var values = jQueryCalls.getQuantityValues();
            var sum = 0;
            for (var i = 0; i < this.attr.selectedItems.length; i++) {

                var index = this.attr.selectedItems[i];
                var price = this.attr.allItems[index].PRICE;
                var add = price * values[i];
                if (!isNaN(add)) sum += add;
            }
            console.log(sum);
			jQueryCalls.renderTotalCost(sum);
			if(!event.removed) {
                jQueryCalls.renderTotalCostChange(event.index,this.attr.allItems[event.index].PRICE);
            }
		};
		this.Init = function()
		{
			this.attr.selectedItems = [];
			this.attr.allItems = [];
			this.attr.quantities=[];
			this.attr.lastTimeStamp = 0;
		};
        this.after("initialize", function() {
			this.Init();
			this.on("nextDependencyLoaded",jQueryCalls.Init);
			this.on("dataReceived",this.setData);
			this.on("newItemAdded",this.addItem);
			this.on("itemRemoved",this.removeItem);
			this.on("quantitiesChanged", this.setQuantities);
        });
    }
	return {calculatorComponent:component(Ingredients)};

});
