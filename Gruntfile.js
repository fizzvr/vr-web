module.exports = function(grunt) {

	// configuracion del proyecto
	grunt.initConfig({

		// metadatos
		leerJson: grunt.file.readJSON('package.json'),
		banner: '/**\n' +
				'* <%= leerJson.name %> v<%= leerJson.version %> por @fizzvr\n' +
				'*/\n',
		// tarea de distribucion JS y CSS minified
		frontendConfig: {
			srcWebroot: 'src/public/',
			webroot: 'out/'
		},
		frontend: {
			produccion: {
				css: {
					src: 'src/public/css/',
					dest: 'out/cvr/'
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
		// tarea de copia de los archivos 3rd party desde bower
		copy: {
			main: {
				files: [
				//bootstrap bower list --path
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/js/bootstrap.min.js"],
					dest: './out/bs3/js'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/css/bootstrap.min.css",
						"bower_components/bootstrap/dist/css/bootstrap-theme.min.css"],
					dest: './out/bs3/css'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/fonts/*"],
					dest: './out/bs3/fonts'
				},
				//jquery bower list --path
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery/jquery.min.js",
					"bower_components/jquery/jquery.min.map"],
					dest: './out/jvr/act/'
				},
				//flexslider bower list --path
				{
					expand: true,
					flatten: true,
					src: ["bower_components/flexslider/flexslider.css",
					"bower_components/flexslider/jquery.flexslider.js"],
					dest: './out/fs/'
				},
				{
					expand: true,
					flatten: true,
					src:["bower_components/flexslider/fonts/*"],
					dest: './out/fs/fonts/'
				}
				]
			}
		},
		validation: {
			options: {
				reset: true
			},
			files: {
				src:['out/**/*.html']
			}
	    }
		/*compress: {
      		target: {
        			files: {
          				'pack/<%= pkg.name %>.v<%= pkg.version %>.zip': ['prod/**']
        			}
      			}
    	}*/
	});

	// carga de los plugins para el proyecto
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-html-validation');
	grunt.loadNpmTasks('grunt-frontend');

	// validar html
	grunt.registerTask('validar-html', ['validation']);
	// distribucion JS y CSS
	grunt.registerTask('dist-jscss', ['frontend']);
	// distribucion de los activos
	grunt.registerTask('dist-activos', ['copy']);
	// distribucion FULL
	grunt.registerTask('dist-full', ['dist-jscss', 'dist-activos']);
	// tarea por default
	grunt.registerTask('default', ['dist-full']);
};
