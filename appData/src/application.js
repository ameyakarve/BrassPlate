define(
[
    'jquery', 
    'router',
    'src/modules/sidebar/boot'
], function(
    $, 
    Router, 
    Sidebar
){
    var initialize = function() {
        Sidebar.initialize();
        Router.initialize();
    };
    return {
        initialize: initialize
    };
});