require.config({
  paths: {
    jquery: 'assets/js/components/jquery/jquery.min',
    director: 'assets/js/components/director/build/director_AMD',
    router:'src/router',
    mustache:'assets/js/components/mustache/mustache'
  }
});
require(
        [
          'jquery',
          'src/application'
        ],

        function($,App) {
          App.initialize();
        }
      );