console.log("Entered RequireMain");
requirejs.config({
    // baseUrl: ''
    shim: {
    'underscore/underscore': {
      exports: '_'
    }
}});
require(
        [
          'flight/lib/compose',
          'flight/lib/registry',
          'flight/lib/advice',
          'flight/lib/logger',
          'flight/tools/debug/debug',
          'jquery/jquery',
          'es5-shim/es5-shim',
          'es5-shim/es5-sham'
        ],
        function(compose, registry, advice, withLogging, debug,$) {
            debug.enable(true);
            compose.mixin(registry, [advice.withAdvice, withLogging]);
            console.log("Flight Loaded");
            require(['flightModules/ingredientCalculator/boot/init'], function(initialize) 
            {
                initialize();
            });
            return $;
        }
    );