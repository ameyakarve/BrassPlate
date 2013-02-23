define(
	[
		'assets/js/components/flight/lib/component', 
		'assets/js/components/underscore/underscore', 
		'jquery',
		'mustache', 
		'src/modules/Ingredients/FormJqueryCalls'
	],

function(component, Underscore, $, Mustache, jQueryCalls) {
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
        });
    }
	return {formComponent:component(Form)};

});
