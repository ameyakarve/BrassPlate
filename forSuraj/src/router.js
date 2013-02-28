define([
    'director',
	'jquery',
	'mustache',
	'src/templates'
	], function(
        Director,
        $,
        Mustache,
        Templates
    ) {
    var initialize = function() {
        var renderSidebar = function()
        {
            $("#sidebar").html(Mustache.render(Templates.Sidebar.main,{}));
            $("#SidebarPanels").html(Mustache.render(Templates.Sidebar.item,Templates.Sidebar.paths));
        }
        var HomeRoute = function()
        {
            $("#content").html(Mustache.render(Templates.Home.main,{}));
            renderSidebar();
        };
        var IngredientsRoute = function()
        {
            $("#content").html(Mustache.render(Templates.Ingredients.main,{}));
            $("#IngredientsRight").html(Mustache.render(Templates.Ingredients.RightColumn,{}));
            renderSidebar();
        };
        
        var routes = {
            '/Home':HomeRoute,
            '/Ingredients':IngredientsRoute
        };

        var router = Director.Router(routes);
        console.log("Router started");
        console.log(Templates);
        router.init();
    };

    return {
        initialize: initialize
    };

});