define(["jquery","mustache","text!src/modules/Ingredients/templates/typeahead.txt","text!src/modules/Ingredients/templates/addItem.txt","underscore"],function(e,t,n,r,i){var o=function(){var t=(new Date).getTime();e.ajax({type:"GET",url:"api/addIngredient",data:"LASTTIMESTAMP=0&CACHEBANG="+t,success:function(t){e("#calculatorComponent").trigger({type:"dataReceived",returnData:t})},error:function(){}})},a=function(r,o){e("#formComponent").trigger({type:"setTimeStamp",timestamp:r}),e("#ingredientTypeahead").remove(),e("#inputWarning").remove(),e("#inputControls").html(t.render(n,{}));var a=i.map(o,function(e){return e.NAME});e("#ingredientTypeahead").typeahead({source:a,updater:function(t){var n=this.source.indexOf(t);return e("#calculatorComponent").trigger({type:"newItemAdded",item:t,index:n}),t},matcher:function(){return window.$("#warningGroup").removeClass("error"),window.$("#inputWarning").html(" "),!0}})},s=function(n,i){console.log(n),e("#itemList").append(t.render(r,{data:n,index:i})),e("#removeItem"+i).click(function(){e("#calculatorComponent").trigger({type:"itemRemoved",index:i})}),e("#itemQuantity"+i).on("input",function(){e("#calculatorComponent").trigger({type:"quantitiesChanged",index:i,removed:!1})})},u=function(){e("#warningGroup").addClass("error"),e("#inputWarning").html("This item is already present")},c=function(t){e("#addedItem"+t).remove(),e("#calculatorComponent").trigger({type:"quantitiesChanged",index:t,removed:!0})},l=function(){var t=e(".inputQuantity");return i.map(t,function(e){return isNaN(parseFloat(e.value))?0:0>parseFloat(e.value)?0:parseFloat(e.value)})},f=function(t){console.log(t),e("#totalPriceValue").html(t.toFixed(2))},p=function(t,n){var r=parseFloat(e("#itemQuantity"+t)[0].value);(0>r||isNaN(r))&&(r=0);var i=r*n;e("#itemValue"+t).html(i.toFixed(2))};return{CalculatorInit:o,CalculatorsetTypeAhead:a,CalculatoraddItem:s,CalculatoraddItemError:u,CalculatorremoveItem:c,CalculatorgetQuantityValues:l,CalculatorrenderTotalCost:f,CalculatorrenderTotalCostChange:p}});