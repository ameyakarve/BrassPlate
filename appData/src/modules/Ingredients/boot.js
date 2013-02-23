define(['mustache', 'text!src/modules/Ingredients/templates/init.txt', 'jquery'
//components, template
], function(Mustache, Template, $) {
    var Initialize = function() {
        $("#content").html(Mustache.render(Template));
    };
    return {
        initialize: Initialize
    };
});