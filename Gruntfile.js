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

	grunt.loadNpmTasks('grunt-frontend');
	grunt.loadNpmTasks('grunt-htmlcompressor');

	// Default task.
	grunt.registerTask('default', ['frontend']);
	grunt.registerTask('release', ['default','htmlcompressor']);
};