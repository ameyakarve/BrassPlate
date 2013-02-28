//Lots of surgery needed here
define(
	[
		'assets/js/components/flight/lib/component', 
		'src/modules/Ingredients/JqueryCalls',
        'underscore'
	],

function(
    component, 
    jQueryCalls,
    _
    ){
    function Ingredients() {
        this.defaultAttrs({
            selectedItems: [],
            quantities: []
        });
		this.Init = function()
		{
			this.attr.selectedItems = [];
			this.attr.quantities=[];
		};
        this.addData = function(event)
        {
            console.log(event);
            var data = event.originalEvent.detail.data.returnData;
            var value = event.originalEvent.detail.value;
            var values = _.pluck(data,'value');
            console.log(values);
            /*var UID = data.uid;
            var UIDs = _.pluck(this.attr.selectedItems,'uid');
            console.log(UIDs,UID);
            if(_.contains(UIDs,UID))
            {
                console.log("Value found!");
                
            }
            else
            {
                this.attr.selectedItems.push(data);
                console.log(data,"pushed");
            }*/
            //If Data is already present, send fail; else send data to selectedItems
        };
        this.after("initialize", function() {
			this.Init();
			this.on("nextDependencyLoaded",jQueryCalls.CalculatorsetTypeAhead);
            this.on("dataAdded",this.addData);
        });
    }
	return {calculatorComponent:component(Ingredients)};

});
