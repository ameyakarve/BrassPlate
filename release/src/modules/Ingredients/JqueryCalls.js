define([
	'jquery',
	'assets/js/components/bootstrap/js/bootstrap-combined',
	'assets/js/typeahead/dist/typeahead',
	'mustache',
	'underscore',
    ],function($,Combined,Typeahead,Mustache,_){
	var FormInit = function()
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
	var FormSubmitForm = function()
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
	var FormSetTimeStamp = function(event)
	{
		$("#formTimeStamp").val(event.timestamp);
	};
	
	var FormReceiveFormData = function(event)
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
				$("#formAlertArea").html(Mustache.render(Combined.formSuccess));
				$("#ingredientBoxSuccessAlert").alert();
			}
			else
			{
				$("#formAlertArea").html(Mustache.render(Combined.formError));
				$("#ingredientBoxErrorAlert").alert();
			}
			
		}
		else
		{
			
		}
	};
	var CalculatorInit = function()
	{
		var cachebang = new Date().getTime();
		$.ajax({
			type:"GET",
			url:"api/addIngredient",
			data:"LASTTIMESTAMP=0&CACHEBANG="+cachebang,
			success:function(data){
				$("#calculatorComponent").trigger({
					type:"dataReceived",
					returnData:data
				});
			},
			error:function(){}
		});
	};
	var CalculatorsetTypeAhead = function(timestamp,data)
	{
		$("#formComponent").trigger({
			type:"setTimeStamp",
			timestamp:timestamp
		});
		$("#ingredientTypeahead").remove();
        $("#inputWarning").remove();
        $("#inputControls").html(Mustache.render(Combined.typeAhead,{}));
		var names = _.map(data,function(num){
            return {
                value:num.NAME,
                tokens:[num.NAME],
                callback:"Test"
            };
        });
		/*$("#ingredientTypeahead").typeahead({
			source: names,
			updater: function(item) {
				var index = this.source.indexOf(item);
				$("#calculatorComponent").trigger({
					type: "newItemAdded",
					item: item,
					index: index
				});
				return item;
			},
			matcher: function(item) {
				window.$("#warningGroup").removeClass("error");
				window.$("#inputWarning").html(" ");
				return true;
			}
		});*/
		$("#ingredientTypeahead").typeahead(
            {
                local:names
            });
	};
	var CalculatoraddItem = function(data,index)
	{
		console.log(data);
		var id = "addedItem" + index;
		$("#itemList").append(Mustache.render(Combined.addItem,{data:data,index:index}));		
		$("#removeItem" + index).click(function() {
			$("#calculatorComponent").trigger({
				type: "itemRemoved",
				index: index
			});
		});
		$("#itemQuantity" + index).on("input", function() {
			$("#calculatorComponent").trigger({
				type: "quantitiesChanged",
				index: index,
				removed: false
			});
		});
		
	};
	var CalculatoraddItemError = function()
	{
		$("#warningGroup").addClass("error");
		$("#inputWarning").html("This item is already present");
	};
	var CalculatorremoveItem = function(index)
	{
		$("#addedItem" + index).remove();
		$("#calculatorComponent").trigger({
                type: "quantitiesChanged",
                index: index,
                removed: true
            });
	};
	var CalculatorgetQuantityValues = function()
	{
		var dom = $(".inputQuantity");
		return (_.map(dom, function(item) {
			if (isNaN(parseFloat(item.value))) return 0;
			else if (parseFloat(item.value) < 0) return 0;
			else return parseFloat(item.value);
		}));
			
	};
	var CalculatorrenderTotalCost = function(cost)
	{
		console.log(cost);
		$("#totalPriceValue").html(cost.toFixed(2));
	};
	var CalculatorrenderTotalCostChange = function(index,price)
	{
		var thisVal = parseFloat($("#itemQuantity" + index)[0].value);
		if (thisVal < 0 || isNaN(thisVal)) thisVal = 0;
		var cost = thisVal * price;
		$("#itemValue" + index).html(cost.toFixed(2));
	};
	
	return{
		FormInit:FormInit,
		FormSubmitForm:FormSubmitForm,
		FormReceiveFormData:FormReceiveFormData,
		FormSetTimeStamp:FormSetTimeStamp,
		CalculatorInit:CalculatorInit, 
		CalculatorsetTypeAhead:CalculatorsetTypeAhead,
		CalculatoraddItem:CalculatoraddItem,
		CalculatoraddItemError:CalculatoraddItemError,
		CalculatorremoveItem:CalculatorremoveItem,
		CalculatorgetQuantityValues:CalculatorgetQuantityValues,
		CalculatorrenderTotalCost:CalculatorrenderTotalCost,
		CalculatorrenderTotalCostChange:CalculatorrenderTotalCostChange
		};
});