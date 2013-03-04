{
    baseUrl:"../appData",
    mainConfigFile:'../appData/entryPoint.js',
    dir: "../release",
    optimize:"uglify2",
    modules: [
        { name: "entryPoint",
            exclude:[
                'jquery',
                'mustache'
            ]
        },
        { name: "src/modules/Ingredients/Calculator",
            exclude:[
                'jquery',
                'mustache',
                'assets/js/components/flight/lib/component',
                'underscore'
            ]
        },
        { name: "src/modules/Ingredients/Form",
            excludeShallow:[
                'jquery',
                'assets/js/components/flight/lib/component',
                'mustache',
                'underscore'
            ]
        }
    ],
    removeCombined:false,
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