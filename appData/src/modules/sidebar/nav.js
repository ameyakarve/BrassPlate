define([
    'assets/js/components/flight/lib/component',
    'jquery',
    'mustache'
    ],function(Component,$,Mustache){
        
        
		function NavBar()
        {
            this.after("initialize", function() {
			
            });
        }
		return {navbarComponent:Component(NavBar)};
    });