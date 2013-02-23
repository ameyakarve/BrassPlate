require.config({
  paths: {
    jquery: 'assets/js/components/jquery/jquery',
    underscore: 'assets/js/components/underscore/underscore',
    director: 'assets/js/components/director/build/director_AMD',
    shim:'assets/js/components/es5-shim/es5-shim',
    sham:'assets/js/components/es5-shim/es5-sham',
    router:'src/router',
    mustache:'assets/js/components/mustache/mustache'  
  }
});
require(
        [
          'jquery',
          'shim',
          'sham',
          'assets/js/components/flight/lib/compose',
          'assets/js/components/flight/lib/registry',
          'assets/js/components/flight/lib/advice',
          'assets/js/components/flight/lib/logger',
          'assets/js/components/flight/tools/debug/debug',
          'src/application'
        ],

        function($,shim,sham,compose, registry, advice, withLogging, debug,App) {
          debug.enable(true);
          compose.mixin(registry, [advice.withAdvice, withLogging]);
          App.initialize();
        }
      );