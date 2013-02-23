define(['director','src/modules/Ingredients/boot','src/modules/sidebar/boot'], function(Director,Ingredients,Sidebar) {
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
            console.log("Entered Ingredients");
            //Initialize module
        };

        var routes = {
            '/ingredients': IngredientsRoute,
            '/books': [books, function() {
                console.log("An inline route handler.");
            }],
            '/books/view/:bookId': viewBook
        };

        console.log(Director);
        var router = Director.Router(routes);
        router.init();
        console.log("Router started");
    };

    return {
        initialize: initialize
    };

});