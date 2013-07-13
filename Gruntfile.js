module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		frontendConfig: {
			srcWebroot: './src/files',
			webroot: './out'
		},
		frontend: {
			main: {
				css: {
					src: './src/files/css',
					dest: './final/c'
				},
				js: {
					files: {
						'./final/j/principal.js': [
						'./src/files/js/codiguito.js'
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

	grunt.loadNpmTasks('grunt-frontend');
	grunt.loadNpmTasks('grunt-htmlcompressor');

	// Default task.
	grunt.registerTask('default', ['frontend','htmlcompressor']);
};