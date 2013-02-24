define(
	[
		'jquery',
		'mustache',
		'text!src/modules/Ingredients/templates/typeahead.txt'
	], function($, Mustache, TypeaheadTemplate){
	
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
            
		/*
		var names = _.map(data,function(num){return num.NAME;});
		$("#ingredientTypeahead").typeahead({
			source: names,
			updater: function(item) {
				var index = this.source.indexOf(item);
				window.$("#ingredientsComponent").trigger({
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
	};
	return {Init:Init, setTypeAhead:setTypeAhead};
	}
);