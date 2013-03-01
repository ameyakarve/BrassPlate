define([], function() {
    var initialize = function() {
        require(['jquery', 'mustache', 'src/templates', 'src/modules/sidebar/nav'],

        function($, Mustache, Templates, NavBar) {
            $("#sidebar").html(Mustache.render(Templates.sidebarTemplate, {}));
            NavBar.navbarComponent.attachTo("#navbar");
        });

    };
    var toggleNavbar = function(current) {
        //Look for children here
        require(['jquery', 'mustache', 'src/templates', 'src/modules/sidebar/nav'],

        function($) {
            $("li.active").each(function(index) {
                $(this).removeClass("active");
            });
            $(current).addClass("active");
        });
    };
    return {
        initialize: initialize,
        toggleNavbar: toggleNavbar
    };
});