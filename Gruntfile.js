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
			'./out'
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
					dest: './out/cvr'
				},
				js: {
					files: {
						'./out/jvr/vrweb.js': [
							'./src/public/js/plugins.js',
							'./src/public/js/jsvr.js'
						]
					}

				}
			}
		},
		// tarea de copia de los archivos 3rd party
		copy: {
			main: {
				files: [
				{
					expand: true,
					flatten: true,
					src: ["./src/public/js/activos/*"],
					dest: './out/jvr/act'
				}
				]
			}
		},
		// tarea de compresion de los HTML
		/*htmlcompressor: {
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
		compress: {
      		target: {
        			files: {
          				'pack/<%= pkg.name %>.v<%= pkg.version %>.zip': ['prod/**']
        			}
      			}
    	}*/
	});

	// carga de los plugins para el proyecto
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-frontend');
	// grunt.loadNpmTasks('grunt-htmlcompressor');

	// distribucion JS y CSS
	grunt.registerTask('dist-jscss', ['frontend']);
	// distribucion de los activos
	grunt.registerTask('dist-activos', ['copy']);
	// compresion HTML
	// grunt.registerTask('comp-hmtl', ['htmlcompressor']);
	// distribucion FULL
	grunt.registerTask('dist-full', ['dist-jscss', 'dist-activos']);
	// tarea por default
	grunt.registerTask('default', ['dist-full']);
};