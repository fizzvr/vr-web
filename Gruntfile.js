module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    // myGRUNT: COPIAR[PROVEEDORES]+ DISTRIBUIR[JS&CSS] + VALIDAR[HTML]
	// configuracion del proyecto
	grunt.initConfig({
		// metadatos
		leerJson: grunt.file.readJSON('package.json'),
		banner: '/**\n' +
				'* <%= leerJson.name %> v<%= leerJson.version %> por @fizzvr\n' +
				'*/\n',
		frontend: {
           force: false,
           srcWebroot: './src/public',
           webroot: './out',
        },
		// tarea de copia de los archivos 3rd party desde bower --- bower list --path
		copy: {
			main: {
				files: [
				//bauserif - fuente
				{
					expand: true,
					flatten: true,
					src: ["./src/public/css/tipo/bauserif.*"],
					dest: './out/cvr'
				},
				//jquery - indispensable
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery/dist/jquery.min.js",
					"bower_components/jquery/dist/jquery.min.map"],
					dest: './out/act/jquery/'
				},
				//bootstrap - responsive
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/js/bootstrap.min.js"],
					dest: './out/act/bs3/'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/css/bootstrap.min.css",
						"bower_components/bootstrap/dist/css/bootstrap-theme.min.css"],
					dest: './out/act/bs3/css/'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/fonts/*"],
					dest: './out/act/bs3/fonts/'
				},
				//flexslider - slider de imágenes
				{
					expand: true,
					flatten: true,
					src: ["bower_components/flexslider/jquery.flexslider.js",
                          "bower_components/flexslider/flexslider.css"],
					dest: './out/act/fs/'
				},
				{
					expand: true,
					flatten: true,
					src:["bower_components/flexslider/fonts/*"],
					dest: './out/act/fs/fonts/'
				},
				//prettyPhoto - caja de imagenes
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery-prettyPhoto/js/jquery.prettyPhoto.js"],
					dest: './out/act/pp/'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery-prettyPhoto/css/*"],
					dest: './out/act/pp/css/'
				},
				{
					expand: true,
					cwd: 'bower_components/jquery-prettyPhoto/images/prettyPhoto/',
					src: ['**'],
					dest: './out/act/pp/images/prettyPhoto/'
				},
				//pace - barra de carga
				{
					expand: true,
					flatten: true,
					src: ["bower_components/pace/pace.js"],
					dest: './out/act/pace/'
				},
                //octicons - iconos, fuente acerca de github
				{
				    expand: true,
					cwd: 'bower_components/octicons/octicons/',
					src: ['**'],
					dest: './out/act/oc/'
				},
                //animsition - trancisiones css
				{
				    expand: true,
                    flatten: true,
					src: ['bower_components/animsition/dist/js/jquery.animsition.min.js',
                          'bower_components/animsition/dist/css/animsition.min.css'],
					dest: './out/act/an/'
				}

				]
			}
		},
		// tarea de distribucion JS
        'frontend-js': {
            main: {
                // task options
                options: {
                    // Minify JS
                    minify: true,

                    // config for UglifyJS
                    uglify: {}
                },

                files: {
                    'out/jvr/vrweb.js': [
                        'src/public/js/jsvr.js'
                    ]
                }
            }
        },
        // tarea de distribucion CSS
        'frontend-css': {
            main: {
                options: {
                    // inline @imports
                    inline: true,

                    // rewrite all url() to versioned ones.
                    // the `rewriteScheme` is used to create versioned URL
                    rewriteUrl: true,

                    // minify CSS
                    minify: true
                },
                files: [
                    {src: 'src/public/css/cssvr.css', dest: 'out/cvr/cssvr.css'}
                ]
            }
        },
		// validacion HTML
		validation: {
			options: {
				reset: true,
                relaxerror: ['Attribute width not allowed on element a at this point.']
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

	// validar html
	grunt.registerTask('validar-html', ['validation']);

	// distribucion JS y CSS
	grunt.registerTask('dist-jscss', ['frontend-js', 'frontend-css']);

	// distribucion de los activos
	grunt.registerTask('dist-activos', ['copy']);

	// distribucion FULL
	grunt.registerTask('dist-full', ['dist-activos', 'dist-jscss']);

    // Travis
	grunt.registerTask('travis', ['dist-jscss', 'validar-html']);

	// tarea por default
	grunt.registerTask('default', ['dist-full']);
};
