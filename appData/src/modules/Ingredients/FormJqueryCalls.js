define([
	'jquery',
	'assets/js/components/bootstrap/js/bootstrap-modal',
	'assets/js/components/bootstrap/js/bootstrap-button',
	'assets/js/components/bootstrap/js/bootstrap-alert',
	'mustache',
	'text!src/modules/Ingredients/templates/formError.txt',
	'text!src/modules/Ingredients/templates/formSuccess.txt'
	],function($,Modal,Button,Alert,Mustache,formErrorTemplate,formSuccessTemplate){
	var Init = function()
	{
		$("#addNewIngredientFormModal").modal({show:false,keyboard:false});
		$("#addNewIngredientButton").click(function(){
			$('#addNewIngredientFormModal').modal('show');
		});
		$("#addIngredientFormSubmit").click(function(){
			$("#formComponent").trigger({type:"addFormSubmit"});
			$("#addIngredientFormSubmit").button("loading");
			$("#addIngredientModalClose").button("loading");
			$("#addIngredientFormClear").button("loading");
		});
        $("#calculatorComponent").trigger({type:"nextDependencyLoaded"});     
	};
	var SubmitForm = function()
	{
		var formData = $("#addIngredientmodalForm").serialize();
		var cachebang = new Date().getTime();
		formData+="&CACHEBANG="+cahcebang;
		$.ajax({
			type:"GET",
			url:"api/addIngredient",
			data:formData,
			success:function(data){
				$("#formComponent").trigger({
				  type:"dataReceived",
				  returnData:data
				});
			},
			error:function(data){console.log("Error in request")}
		});
	};
	var ReceiveFormData = function(event)
	{
		if(event.returnData.success)
		{
			var data = event.returnData.data;
			$("#calculatorComponent").trigger({
				type:"newDataToBeAdded",
				returnData:data
			});
			$("#addIngredientFormSubmit").button("reset");
			$("#addIngredientModalClose").button("reset");
			$("#addIngredientFormClear").button("reset");
			$("#formAlertArea").html(Mustache.render(formSuccessTemplate));
			$("#ingredientBoxSuccessAlert").alert();
		}
		else
		{
			
		}
	};
	return{
		Init:Init,
		SubmitForm:SubmitForm,
		ReceiveFormData:ReceiveFormData
		};
});