'use strict';

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jshint: {
      dev: {
        options: {
          jshintrc: '.jshintrc',
        },
      src: ['Gruntfile.js', 'greet.js', 'test/**/*.js']
      }
    },
    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      files: ['**/*', '.gitignore', '!package.json', '.jshintrc'],
      tasks: ['jshint', 'simplemocha']
    },
    jscs: {
      all: {
        options: {
          "standard": "google"
        },
        files: {
          src: ['Gruntfile.js', 'greet.js', 'test/**/*.js']
        }
      }
    }
  });
  grunt.registerTask('test', ['simplemocha']);
  grunt.registerTask('syntax', ['jshint']);
  grunt.registerTask('spy', ['watch']);
  grunt.registerTask('default', ['test', 'syntax']);
};