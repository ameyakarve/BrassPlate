(function(){"use strict";define(["jquery","vendor/bootstrap/bootstrap-alert","vendor/bootstrap/bootstrap-button","vendor/bootstrap/bootstrap-modal","vendor/bootstrap/bootstrap-combined","vendor/twitter-typeahead/typeahead","mustache","underscore"],function(t,e,n,i,r,o,s,a){var u,c,l,f,h,p,d,m,g,v,y;return m=function(){return t("#addNewIngredientFormModal").modal({show:!1,keyboard:!1}),t("#addNewIngredientButton").click(function(){return t("#addNewIngredientFormModal").modal("show")}),t("#addIngredientFormSubmit").click(function(){return t("#formComponent").trigger({type:"addFormSubmit"}),t("#addIngredientFormSubmit").button("loading"),t("#addIngredientModalClose").button("loading"),t("#addIngredientFormClear").button("loading")}),t("#calculatorComponent").trigger({type:"nextDependencyLoaded"})},y=function(){var e,n;return n=t("#addIngredientmodalForm").serialize(),e=(new Date).getTime(),n+="&CACHEBANG="+e,t.ajax({type:"GET",url:"api/addIngredient",data:n,success:function(e){return t("#formComponent").trigger({type:"dataReceived",returnData:e})},error:function(){return console.log("Error in request")}})},v=function(e){return t("#formTimeStamp").val(e.timestamp)},g=function(e){return e.returnData.init?void 0:(console.log(e),t("#calculatorComponent").trigger({type:"dataReceived",returnData:e.returnData}),t("#addIngredientFormSubmit").button("reset"),t("#addIngredientModalClose").button("reset"),t("#addIngredientFormClear").button("reset"),e.returnData.addedStatus.success?(t("#formAlertArea").html(s.render(r.formSuccess)),t("#ingredientBoxSuccessAlert").alert()):(t("#formAlertArea").html(s.render(r.formError)),t("#ingredientBoxErrorAlert").alert()))},d=function(){return t("#ingredientTypeahead").remove(),t("#inputWarning").remove(),t("#inputControls").html(s.render(r.typeAhead,{})),t("#ingredientTypeahead").typeahead({prefetch:"api/typeaheadHackInit"})},u=function(e,n){return console.log(e),t("#itemList").append(s.render(r.addItem,{data:e,index:n})),t("#removeItem"+n).click(function(){return t("#calculatorComponent").trigger({type:"itemRemoved",index:n})}),t("#itemQuantity"+n).on("input",function(){return t("#calculatorComponent").trigger({type:"quantitiesChanged",index:n,removed:!1})})},c=function(){return t("#warningGroup").addClass("error"),t("#inputWarning").html("This item is already present")},f=function(e){return t("#addedItem"+e).remove(),t("#calculatorComponent").trigger({type:"quantitiesChanged",index:e,removed:!0})},l=function(){var e;return e=t(".inputQuantity"),a.map(e,function(t){return isNaN(parseFloat(t.value))?0:0>parseFloat(t.value)?0:parseFloat(t.value)})},h=function(e){return console.log(e),t("#totalPriceValue").html(e.toFixed(2))},p=function(e,n){var i,r;return r=parseFloat(t("#itemQuantity"+e)[0].value),(0>r||isNaN(r))&&(r=0),i=r*n,t("#itemValue"+e).html(i.toFixed(2))},{FormInit:m,FormSubmitForm:y,FormReceiveFormData:g,FormSetTimeStamp:v,CalculatorsetTypeAhead:d,CalculatoraddItem:u,CalculatoraddItemError:c,CalculatorremoveItem:f,CalculatorgetQuantityValues:l,CalculatorrenderTotalCost:h,CalculatorrenderTotalCostChange:p}})}).call(this);