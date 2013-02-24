define(
	[
		'jquery',
		'mustache',
		'text!src/modules/Ingredients/templates/typeahead.txt',
		'text!src/modules/Ingredients/templates/addItem.txt',
		'underscore'
	], function($, Mustache, TypeaheadTemplate,AddItemTemplate,_){
	
	
	var Init = function()
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
	var setTypeAhead = function(timestamp,data)
	{
		$("#formComponent").trigger({
			type:"setTimeStamp",
			timestamp:timestamp
		});
		$("#ingredientTypeahead").remove();
        $("#inputWarning").remove();
        $("#inputControls").html(Mustache.render(TypeaheadTemplate,{}));
        var names = _.map(data,function(num){return num.NAME;});
		$("#ingredientTypeahead").typeahead({
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
		});
	};
	var addItem = function(data,index)
	{
		console.log(data);
		var id = "addedItem" + index;
		$("#itemList").append(Mustache.render(AddItemTemplate,{data:data,index:index}));		
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
	var addItemError = function()
	{
		$("#warningGroup").addClass("error");
		$("#inputWarning").html("This item is already present");
	};
	var removeItem = function(index)
	{
		$("#addedItem" + index).remove();
		$("#calculatorComponent").trigger({
                type: "quantitiesChanged",
                index: index,
                removed: true
            });
	};
	var getQuantityValues = function()
	{
		var dom = $(".inputQuantity");
		return (_.map(dom, function(item) {
			if (isNaN(parseFloat(item.value))) return 0;
			else if (parseFloat(item.value) < 0) return 0;
			else return parseFloat(item.value);
		}));
			
	};
	var renderTotalCost = function(cost)
	{
		console.log(cost);
		$("#totalPriceValue").html(cost.toFixed(2));
	};
	var renderTotalCostChange = function(index,price)
	{
		var thisVal = parseFloat($("#itemQuantity" + index)[0].value);
		if (thisVal < 0 || isNaN(thisVal)) thisVal = 0;
		var cost = thisVal * price;
		$("#itemValue" + index).html(cost.toFixed(2));
	};
	return {
		Init:Init, 
		setTypeAhead:setTypeAhead,
		addItem:addItem,
		addItemError:addItemError,
		removeItem:removeItem,
		getQuantityValues:getQuantityValues,
		renderTotalCost:renderTotalCost,
		renderTotalCostChange:renderTotalCostChange
		};
	}
);