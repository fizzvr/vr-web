module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    // myGRUNT: COPIAR[PROVEEDORES]+ DISTRIBUIR[JS&CSS] + VALIDAR[HTML]
	grunt.initConfig({
		// metadatos
		leerJson: grunt.file.readJSON('package.json'),
		banner: '/**\n' +
				'* <%= leerJson.name %> v<%= leerJson.version %> por @fizzvr\n' +
				'*/\n',
        //--------------------
        // COPIAR[PROVEEDORES]
		// tarea de copia de los archivos 3rd party desde bower --- bower list --path
        //--------------------
		copy: {
			main: {
				files: [
				// //bauserif - fuente
				// {
				// 	expand: true,
				// 	flatten: true,
				// 	src: ["./src/public/css/bauserif.*"],
				// 	dest: './out/cvr/'
				// },
				//jquery - indispensable
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery/dist/jquery.min.js",
					"bower_components/jquery/dist/jquery.min.map"],
					dest: '../fizzvr.github.io/act/jquery/'
				},
				//bootstrap - responsive
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/js/bootstrap.min.js"],
					dest: '../fizzvr.github.io/act/bs3/'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/css/bootstrap.min.css",
						"bower_components/bootstrap/dist/css/bootstrap-theme.min.css"],
					dest: '../fizzvr.github.io/act/bs3/css/'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/fonts/*"],
					dest: '../fizzvr.github.io/act/bs3/fonts/'
				},
				//flexslider - slider de imágenes
				{
					expand: true,
					flatten: true,
					src: ["bower_components/flexslider/jquery.flexslider.js",
                          "bower_components/flexslider/flexslider.css"],
					dest: '../fizzvr.github.io/act/fs/'
				},
				{
					expand: true,
					flatten: true,
					src:["bower_components/flexslider/fonts/*"],
					dest: '../fizzvr.github.io/act/fs/fonts/'
				},
				//prettyPhoto - caja de imagenes
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery-prettyPhoto/js/jquery.prettyPhoto.js"],
					dest: '../fizzvr.github.io/act/pp/'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery-prettyPhoto/css/*"],
					dest: '../fizzvr.github.io/act/pp/css/'
				},
				{
					expand: true,
					cwd: 'bower_components/jquery-prettyPhoto/images/prettyPhoto/',
					src: ['**'],
					dest: '../fizzvr.github.io/act/pp/images/prettyPhoto/'
				},
                //font-awesome - iconos, fuente
				{
				    expand: true,
					cwd: 'bower_components/font-awesome/css/',
					src: ['**'],
					dest: '../fizzvr.github.io/act/fa/css/'
				},
				{
					expand: true,
					flatten: true,
					src:["bower_components/font-awesome/fonts/*"],
					dest: '../fizzvr.github.io/act/fa/fonts/'
				},
                //lazy load - imagenes
				{
				    expand: true,
                    flatten: true,
					src: ['bower_components/jquery.lazyload/*.js'],
					dest: '../fizzvr.github.io/act/ll/'
				},
                // TODO: isotope - Filter & sort magical layouts
//				{
//				    expand: true,
//                    flatten: true,
//					src: ['bower_components/isotope/dist/isotope.pkgd.min.js'],
//					dest: '../fizzvr.github.io/act/is/'
//				},
                //maplace - interactuar con google maps
				{
				    expand: true,
                    flatten: true,
					src: ['bower_components/maplace.js/src/*.min.js'],
					dest: '../fizzvr.github.io/act/ma/'
				},
                {
                    expand: true,
                    flatten: true,
                    src : ['bower_components/jquery-easing-original/jquery.easing.min.js'],
                    dest: '../fizzvr.github.io/act/ea/'
                }
				]
			}
		},
        //--------------------
        // DISTRIBUIR[JS&CSS]
		// tarea de distribucion JS
        //--------------------
        uglify: {
            main: {
                // task options
                options: {
                    banner: '/*\n'+
                   '* <%= leerJson.name %> - <%= leerJson.url %>\n' +
                   '*\n' +
                   '* Copyright (c) 2015 <%= leerJson.author %> \n' +
                   '* bajo licencia MIT \n' +
                   '* Para todo los dettalles y documentación: \n' +
                   '* <%= leerJson.homepage %> \n' +
                   '* <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>\n' +
                   '*/\n\n',
                    preserveComments: 'some'
                },
                files: {
                    '../fizzvr.github.io/jvr/vr1.min.js': ['src/public/js/jvr1.js']
                }
            }
        },
       // tarea de distribucion CSS
        csso: {
           main: {
               options: {
                    banner: '/*\n'+
                   '* <%= leerJson.name %> - <%= leerJson.url %>\n' +
                   '*\n' +
                   '* Copyright (c) 2015 <%= leerJson.author %> \n' +
                   '* bajo licencia MIT \n' +
                   '* Para todo los dettalles y documentación: \n' +
                   '* <%= leerJson.homepage %> \n' +
                   '* <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>\n' +
                   '*/\n\n'
                },
                files: {
                  '../fizzvr.github.io/cvr/vr1.min.css': ['src/public/css/cvr1.css']
                }
            }
        },
        //--------------------
        // VALIDAR[HTML]
		// validacion HTML
        //--------------------
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
	grunt.registerTask('dist-jscss', ['uglify', 'csso']);
	// distribucion de los activos
	grunt.registerTask('dist-activos', ['copy']);
	// distribucion FULL
	grunt.registerTask('dist-full', ['dist-activos', 'dist-jscss']);
    // Travis
	grunt.registerTask('travis', ['dist-jscss']);
	// tarea por default
	grunt.registerTask('default', ['dist-full']);
};
