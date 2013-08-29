module.exports = function(grunt) {

	// configuracion del proyecto
	grunt.initConfig({

		// metadatos
		leerJson: grunt.file.readJSON('package.json'),
		banner: '/**\n' +
				'* <%= leerJson.name %> v<%= leerJson.version %> por @fizzvr\n' +
				'*/\n',
		// grunt-frontend plugin configuracion
		frontendConfig: {
			srcWebroot: './src/files',
			webroot: './out'
		},
		frontend: {
			main: {
				css: {
					src: './src/files/css',
					dest: './final/css'
				},
				js: {
					files: {
						'./final/js/principal.js': [
							'./src/files/js/principal.js'
						],
						'./final/js/piw.js': [
							'./src/files/js/piw.js'
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
	grunt.loadNpmTasks('grunt-frontend');
	grunt.loadNpmTasks('grunt-htmlcompressor');

	// distribucion JS y CSS
	grunt.registerTask('dist-jscss', ['frontend']);
	// compresion HTML
	grunt.registerTask('comp-hmtl', ['htmlcompressor']);
};