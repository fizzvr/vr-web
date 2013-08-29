module.exports = function(grunt) {

	// configuracion del proyecto
	grunt.initConfig({

		// metadatos
		leerJson: grunt.file.readJSON('package.json'),
		banner: '/**\n' +
				'* <%= leerJson.name %> v<%= leerJson.version %> por @fizzvr\n' +
				'*/\n',
		// grunt-contrib-clean plugin configuracion
		clean: [
			'./final',
			'./out'
		],
		// grunt-frontend plugin configuracion
		frontendConfig: {
			srcWebroot: './src/public/',
			webroot: './out/'
		},
		frontend: {
			main: {
				css: {
					src: './src/public/css',
					dest: './final/css'
				},
				js: {
					files: {
						'./final/js/principal.js': [
							'./src/public/js/principal.js'
						],
						'./final/js/piw.js': [
							'./src/public/js/piw.js'
						]
					}

				}
			}
		},
		htmlcompressor: {
			compile: {
				files: {
					'final/index.html': 'out/index.html'
				},
				options: {
					type: 'html',
					preserveServerScript: true
				}
			}
		}
	});

	// carga de los plugins para el proyecto
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-frontend');
	grunt.loadNpmTasks('grunt-htmlcompressor');

	// distribucion JS y CSS
	grunt.registerTask('dist-jscss', ['frontend']);
	// compresion HTML
	grunt.registerTask('comp-hmtl', ['htmlcompressor']);
	// distribucion FULL
	grunt.registerTask('dist', ['clean', 'dist-jscss', 'comp-hmtl']);
	// tarea por default
	grunt.registerTask('default', ['dist']);
};