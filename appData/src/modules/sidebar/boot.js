define([
    'jquery',
    'mustache',
    'text!src/modules/sidebar/templates/init.txt',
    ],function($,Mustache,Template){
        var initialize = function()
        {
            $("#sidebar").html(Mustache.render(Template,{}));
            //NavBar.attachTo("#navbar");
            console.log("Sidebar attached");
        };
        return {initialize:initialize};
    });