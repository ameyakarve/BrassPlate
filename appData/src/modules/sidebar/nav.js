define([
    'component',
    'jquery',
    'mustache'
    ],function(Component,$,Mustache){
        return Component(NavBar);
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
    });