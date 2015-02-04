'use strict';

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      dev: {
        options: {
          node: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true
          }
        },
        src: ['Gruntfile.js', 'greet.js', 'test/**/*.js']
      }
    },

    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    }
  });
  grunt.registerTask('test', ['simplemocha']);
  grunt.registerTask('syntax', ['jshint']);
  grunt.registerTask('default', ['test', 'syntax']);
};