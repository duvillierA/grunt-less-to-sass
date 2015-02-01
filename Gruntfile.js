'use strict';

var path = require('path');

module.exports = function (grunt) {

  // Validate the application JavaScript and JSON, standardise script formatting
  grunt.registerTask('validate', [
    'mochaTest',
    'jshint',
    'jsonlint',
    'jsbeautifier:modify'
  ]);

  //
  // Utility Tasks
  //

  grunt.registerTask('tidy', 'Run the jsbeautifier modify task', [
    'jsbeautifier:modify'
  ]);

  //
  // Main tasks
  //

  grunt.registerTask('default', 'Build the app for debugging', [
    'test',
    'build-contrib'
  ]);


};
