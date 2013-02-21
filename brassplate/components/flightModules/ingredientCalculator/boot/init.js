define(
    [
        'flightModules/ingredientCalculator/app/Ingredients',
        'mustache/mustache',
        'text!templates/ingredientCalculator/mainLeftPane.txt',
        'text!templates/ingredientCalculator/sidebarTemplate.txt',
        'text!templates/ingredientCalculator/footer.txt',
        'text!templates/ingredientCalculator/hiddenstuff.txt'
        //all module definitions go here
    ],
    function(
        Ingredients,
        Mustache,
        mainLeftPaneTemplate,
        sidebarTemplate,
        footerTemplate,
        hiddenStuffTemplate
    ){
        function initialize()
        {
            window.$("#wrapper_inner").html(Mustache.render(mainLeftPaneTemplate,{}));
            window.$("#sidebar").html(Mustache.render(sidebarTemplate,{}));    
            window.$("#footer").html(Mustache.render(footerTemplate,{}));    
            window.$("#footer").html(Mustache.render(hiddenStuffTemplate,{}));  
            Ingredients.attachTo("#ingredientsComponent");
        }
        return initialize;
    }
);