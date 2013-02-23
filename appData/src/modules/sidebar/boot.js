define([
    'jquery',
    'mustache',
    'text!src/modules/sidebar/templates/init.txt',
	'src/modules/sidebar/nav'
    ],function($,Mustache,Template,NavBar){
        var initialize = function()
        {
            $("#sidebar").html(Mustache.render(Template,{}));
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