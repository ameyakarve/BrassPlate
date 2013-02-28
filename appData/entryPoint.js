require.config({
  paths: {
    jquery: 'assets/js/components/jquery/jquery.min',
    underscore: 'assets/js/components/underscore/underscore-min',
    director: 'assets/js/components/director/build/director_AMD',
    shim:'assets/js/components/es5-shim/es5-shim.min',
    sham:'assets/js/components/es5-shim/es5-sham.min',
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
          'src/application'
        ],

        function($,shim,sham,compose, registry, advice, withLogging,App) {
          compose.mixin(registry, [advice.withAdvice, withLogging]);
          App.initialize();
        }
      );