define([
    'flight/lib/component',
    'bootstrap/js/bootstrap-modal',
    'bootstrap/js/bootstrap-button',
    'bootstrap/js/bootstrap-alert',
    'mustache/mustache'

    ],function(component,Modal,Button,Alert,Mustache){
        return component(Form);
        function Form()
        {
            this.initfunction = function()
            {
                window.$("#ingredientsComponent").trigger({type:"nextDependencyLoaded"});
                console.log("Dependency sent");
                window.$("#addNewIngredientFormModal").modal({show:false,keyboard:false});
                window.$("#addNewIngredientButton").click(function(){
                    window.$('#addNewIngredientFormModal').modal('show');
                });
                window.$("#addIngredientFormSubmit").click(function(){
                    window.$("#addIngredientComponent").trigger({type:"addFormSubmit"});
                    window.$("#addIngredientFormSubmit").button("loading");
                    window.$("#addIngredientModalClose").button("loading");
                    window.$("#addIngredientFormClear").button("loading");
                    
                    
                });
                window.$("#ingredientBoxSuccessAlert").alert('close');
                window.$("#ingredientBoxErrorAlert").alert('close');
                //window.$("#ingredientBoxSuccessAlertClose").click(function(){window.$("#ingredientBoxSuccessAlert").close();});
                //window.$("#ingredientBoxErrorAlertClose").click(function(){window.$("#ingredientBoxErrorAlert").close();});
            };
            this.submitForm = function()
            {
              console.log("Form submit call made");
              var formData = window.$("#addIngredientmodalForm").serialize();
              window.$.ajax({
                  type:"GET",
                  url:"api/addIngredient",
                  data:formData,
                  success:function(data){
                      window.$("#addIngredientComponent").trigger({
                          type:"dataReceived",
                          returnData:data
                      });
                  },
                  error:function(data){console.log("Error in request")}
              });
            };
            this.formSent = function(event)
            {
                if(event.returnData.success)
                {
                    var data = event.returnData.data;
                    window.$("#ingredientsComponent").trigger({
                        type:"newDataToBeAdded",
                        returnData:data
                    });
                    window.$("#addIngredientFormSubmit").button("reset");
                    window.$("#addIngredientModalClose").button("reset");
                    window.$("#addIngredientFormClear").button("reset");
                    window.$("#ingredientBoxSuccessAlert").alert();
                    console.log("HERE");
                
                    
                }
                else
                {
                    
                }
            };
            this.setTimeStamp = function(event)
            {
                window.$("#formTimeStamp").val(event.timeStamp);
                console.log(event);
                console.log("Received trigger");
            };
            this.after("initialize", function() {
                this.on("addFormSubmit",this.submitForm);
                this.on("dataReceived",this.formSent);
                this.on("setTimeStamp",this.setTimeStamp);
                this.initfunction();
                
            });
        }
});