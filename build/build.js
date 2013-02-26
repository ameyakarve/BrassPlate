{
    baseUrl:"../appData",
    mainConfigFile:'../appData/entryPoint.js',
    dir: "../release",
    optimize:"none",
    modules: [
        { name: "src/dummy"}
    ],
    stubModules:['text'],
    paths: {
    jquery: 'assets/js/components/jquery/jquery',
    underscore: 'assets/js/components/underscore/underscore',
    director: 'assets/js/components/director/build/director_AMD',
    shim:'assets/js/components/es5-shim/es5-shim',
    sham:'assets/js/components/es5-shim/es5-sham',
    router:'src/router',
    mustache:'assets/js/components/mustache/mustache',
    text:'text'
  }
}