define(['director','src/modules/Ingredients/boot','src/modules/sidebar/boot','jquery'], function(Director,Ingredients,Sidebar,$) {
    var initialize = function() {
        var author = function() {
            console.log("author");
        },
        books = function() {
            console.log("books");
        },
        viewBook = function(bookId) {
            console.log("viewBook: bookId is populated: " + bookId);
        };
        
        var IngredientsRoute = function()
        {
            Ingredients.initialize();
			Sidebar.toggleNavbar("#nav3");
        };
		var HomeRoute = function()
        {
            Sidebar.toggleNavbar("#nav1");
			$("#content").html(" ");
        };
		var AboutRoute = function()
        {
            $("#content").html(" ");
			Sidebar.toggleNavbar("#nav2");
        };
		
        var routes = {
            '/ingredients': IngredientsRoute,
            '': HomeRoute,
			'/home':HomeRoute,
			'/about':AboutRoute,
            '/books/view/:bookId': viewBook
        };

        var router = Director.Router(routes);
        router.init();
    };

    return {
        initialize: initialize
    };

});