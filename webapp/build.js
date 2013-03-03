{
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
