define([
	'director',
	'src/modules/Ingredients/boot',
	'src/modules/sidebar/boot',
	'jquery',
	'mustache',
	'assets/js/components/flight/lib/component',
	'src/templates'
	], function(
        Director,
        Ingredients,
        Sidebar,
        $,
        Mustache,
        component,
        Templates
    ) {
    var initialize = function() {
        var IngredientsRoute = function()
        {
            component.teardownAll();
			$("#content").html(Mustache.render(Templates.IngredientsTemplate));
			Ingredients.initialize();
			Sidebar.toggleNavbar("#nav3");
        };
		var HomeRoute = function()
        {
            component.teardownAll();
            $("#content").html(" ");
            Sidebar.toggleNavbar("#nav1");
        };
		var AboutRoute = function()
        {
            component.teardownAll();
			Sidebar.toggleNavbar("#nav2");
            $("#content").html(" ");
        };
		
        var routes = {
            '/ingredients': IngredientsRoute,
            '': HomeRoute,
			'/home':HomeRoute
        };

        var router = Director.Router(routes);
        router.init();
    };

    return {
        initialize: initialize
    };

});