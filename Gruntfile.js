module.exports = function(grunt) {

	// configuracion del proyecto
	grunt.initConfig({

		// metadatos
		leerJson: grunt.file.readJSON('package.json'),
		banner: '/**\n' +
				'* <%= leerJson.name %> v<%= leerJson.version %> por @fizzvr\n' +
				'*/\n',
		// tarea de limpieza
		clean: [
			'./full-dist'
		],
		// tarea de distribucion JS y CSS minified
		frontendConfig: {
			srcWebroot: './src/public/',
			webroot: './out/'
		},
		frontend: {
			main: {
				css: {
					src: './src/public/css',
					dest: './full-dist/c'
				},
				js: {
					files: {
						'./full-dist/js/principal.js': [
							'./src/public/js/principal.js'
						],
						'./full-dist/js/piw.js': [
							'./src/public/js/piw.js'
						]
					}

				}
			}
		},
		// tarea de copia de los archivos bs3
		copy: {
			main: {
				files: [
				{
					expand: true,
					flatten: true,
					src: ["./src/public/vendor/css/*"],
					dest: 'full-dist/c/'
				},
				{
					expand: true,
					flatten: true,
					src: ["./src/public/vendor/fonts/glyphicons-halflings-regular.*"],
					dest: 'full-dist/fonts/'
				},
				{
					expand: true,
					flatten: true,
					src: ["./src/public/vendor/js/*"],
					dest: 'full-dist/j/'
				}
				]
			}
		},
		// tarea de compresion de los HTML
		htmlcompressor: {
			compile: {
				files: {
					'full-dist/index.html': 'out/index.html'
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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-frontend');
	grunt.loadNpmTasks('grunt-htmlcompressor');

	// distribucion JS y CSS
	grunt.registerTask('dist-jscss', ['frontend']);
	// distribucion de las fuentes
	grunt.registerTask('dist-fonts', ['copy']);
	// compresion HTML
	grunt.registerTask('comp-hmtl', ['htmlcompressor']);
	// distribucion FULL
	grunt.registerTask('dist-full', ['clean', 'dist-jscss', 'comp-hmtl']);
	// tarea por default
	grunt.registerTask('default', ['clean']);
};