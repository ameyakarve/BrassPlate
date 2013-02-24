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
		formData+="&CACHEBANG="+cachebang;
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
	var SetTimeStamp = function(event)
	{
		//console.log(event.timestamp);
		$("#formTimeStamp").val(event.timestamp);
	};
	
	var ReceiveFormData = function(event)
	{
		
		if(!(event.returnData.init))
		{
			console.log(event);
			$("#calculatorComponent").trigger({
				type:"dataReceived",
				returnData:event.returnData
			});
			$("#addIngredientFormSubmit").button("reset");
			$("#addIngredientModalClose").button("reset");
			$("#addIngredientFormClear").button("reset");
			if(event.returnData.addedStatus.success)
			{
				$("#formAlertArea").html(Mustache.render(formSuccessTemplate));
				$("#ingredientBoxSuccessAlert").alert();
			}
			else
			{
				$("#formAlertArea").html(Mustache.render(formErrorTemplate));
				$("#ingredientBoxErrorAlert").alert();
			}
			
		}
		else
		{
			
		}
	};
	return{
		Init:Init,
		SubmitForm:SubmitForm,
		ReceiveFormData:ReceiveFormData,
		SetTimeStamp:SetTimeStamp
		};
});