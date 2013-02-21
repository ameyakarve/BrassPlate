define(
    [
        'flightModules/ingredientCalculator/app/Ingredients'
        //all module definitions go here
    ],
    function(Ingredients){
        function initialize()
        {
            Ingredients.attachTo("#ingredientsComponent");
            console.log("Booted app with all dependencies");
        }
        return initialize;
    }
);