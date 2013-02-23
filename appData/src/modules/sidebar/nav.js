define([
    'assets/js/components/flight/lib/Component',
    'jquery',
    'mustache'
    ],function(Component,$,Mustache){
        
        
		function NavBar()
        {
            this.setNavBehaviour = function()
            {
                console.log($);
            };
            this.after("initialize", function() {
                this.setNavBehaviour();
            });
        }
		return {navbarComponent:Component(NavBar)};
    });