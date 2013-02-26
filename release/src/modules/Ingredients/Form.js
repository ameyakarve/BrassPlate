define(
	[
		'assets/js/components/flight/lib/component',  
		'src/modules/Ingredients/JqueryCalls'
	],

function(component, jQueryCalls) {
    function Form() {
        this.defaultAttrs({
            selectedItems: [],
            allItems: [],
            quantities: [],
            lastTimeStamp:0
        });
        this.Init = function()
		{
			jQueryCalls.FormInit();
		};
        this.after("initialize", function() {
			this.Init();
			this.on("addFormSubmit",jQueryCalls.FormSubmitForm);
            this.on("dataReceived",jQueryCalls.FormReceiveFormData);    
			this.on("setTimeStamp",jQueryCalls.FormSetTimeStamp);
        });
    }
	return {formComponent:component(Form)};

});
