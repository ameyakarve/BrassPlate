'use strict';
module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'debug'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/**/*.js',
                '!<%= yeoman.app %>/scripts/vendor/**/*.js',
                '!<%= yeoman.app %>/scripts/text.js',
                'test/spec/{,*/}*.js'
            ]
        },
        coffee: {
            dist: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '**/*.coffee',
                    dest: '<%= yeoman.dist %>/scripts',
                    ext: '.js'
                }]
            }
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'scripts/',
                    appDir: 'debug/',
                    mainConfigFile: 'debug/scripts/main.js',
                    optimize: 'uglify2',
                    optimizeCss: 'standard.keepLines',
                    dir: 'release',
                    modules: [
                        {
                            name: 'main',
                            exclude: [
                                'jquery',
                                'mustache'
                            ]
                        },
                        {
                            name: 'modules/Ingredients/Calculator',
                            exclude: [
                                'jquery',
                                'mustache',
                                'underscore',
                                'vendor/flight/lib/component'
                            ]
                        }
                    ],
                    removeCombined: false,
                    stubModules: [
                        'text'
                    ],
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                }

            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/img'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/output.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/**/*.css'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '**'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'coffee',
        'imagemin',
        'copy'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'build'
    ]);
};