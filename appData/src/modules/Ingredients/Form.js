define(
	[
		'assets/js/components/flight/lib/component', 
		'jquery',
		'mustache', 
		'src/modules/Ingredients/FormJqueryCalls'
	],

function(component,  $, Mustache, jQueryCalls) {
    function Form() {
        this.defaultAttrs({
            selectedItems: [],
            allItems: [],
            quantities: [],
            lastTimeStamp:0
        });
        this.Init = function()
		{
			jQueryCalls.Init();
			//Set Modals
			//Set click() for button
			//Set click() for submit
			//Send trigger
		};
        this.after("initialize", function() {
			this.Init();
			this.on("addFormSubmit",jQueryCalls.SubmitForm);
            this.on("dataReceived",jQueryCalls.ReceiveFormData);    
			this.on("setTimeStamp",jQueryCalls.SetTimeStamp);
        });
    }
	return {formComponent:component(Form)};

});
