/*global module:false*/
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'dist/bundle.js': ['app/browser.js']
        },
        options: {
          transform: ['babelify']
        }
      }
    },
    less: {
      dist: {
        files: {
          'dist/bundle.css': ['app.less']
        }
      }
    },
    copy: {
      dist: {
        files: {
          'dist/': ['fonts/*']
        },
        options: {
          expand: true
        }
      }
    },
    watch: {
      browserify: {
        files: 'app/browser.js',
        tasks: ['browserify'],
        livereload: true
      },
      less: {
        files: 'app.less',
        tasks: ['less'],
        livereload: true
      },
      copy: {
        files: 'fonts/*',
        tasks: ['copy'],
        livereload: true
      }

    }
  });


  // Default task.
  grunt.registerTask('default', ['watch']);

};
