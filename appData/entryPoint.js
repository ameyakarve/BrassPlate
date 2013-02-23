require.config({
  paths: {
    jquery: 'assets/js/components/jquery/jquery',
    underscore: 'assets/js/components/underscore/underscore',
    director: 'assets/js/components/director/build/director_AMD',
    shim:'assets/js/components/es5-shim/es5-shim',
    sham:'assets/js/components/es5-shim/es5-sham',
    router:'src/router',
    mustache:'assets/js/components/mustache/mustache',
    compose:'assets/js/components/flight/lib/compose',
    registry:'assets/js/components/flight/lib/registry',
    advice:'assets/js/components/flight/lib/advice',
    logger:'assets/js/components/flight/lib/logger',
    debug:'assets/js/components/flight/tools/debug/debug',
          
  }
});
require(
        [
          'jquery',
          'shim',
          'sham',
          'compose',
          'registry',
          'advice',
          'logger',
          'debug',
          'src/application'
        ],

        function($,shim,sham,compose, registry, advice, withLogging, debug,App) {
          debug.enable(true);
          console.log("Started");
          compose.mixin(registry, [advice.withAdvice, withLogging]);
          console.log("Compose");
          App.initialize();
         
          console.log("Initial config done");
        }
      );
