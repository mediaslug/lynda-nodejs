module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ["*.js", "lib/*.js", "test/*.js"],
			options: {
				esnext: true,
				globals: {
					jQuery: true
				}
			}
		},
		less: {
			production: {
				files: {
					"public/css/styles.css": ["less/*.less"]
				}
			}
		},

		autoprefixer: {
			single_file: {
				src: "public/css/styles.css",
				dest: "public/css/styles.css"
			}
		}
	});

	// add the plugins so we can use them
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");



	grunt.registerTask('css', ['less', 'autoprefixer']);
	grunt.registerTask("default", ["jshint", 'css']);
};