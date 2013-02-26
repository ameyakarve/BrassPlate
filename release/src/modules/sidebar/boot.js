define([
    'jquery',
    'mustache',
    'src/templates',
	'src/modules/sidebar/nav'
    ],function($,Mustache,Templates,NavBar){
        var initialize = function()
        {
            $("#sidebar").html(Mustache.render(Templates.sidebarTemplate,{}));
			NavBar.navbarComponent.attachTo("#navbar");
        };
		var toggleNavbar = function(current)
		{
			$("li.active").each(function( index ) {
				$(this).removeClass("active");
			});
			$(current).addClass("active");
		};
        return {initialize:initialize,toggleNavbar:toggleNavbar};
    });