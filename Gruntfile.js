'use strict';

var path = require('path');

module.exports = function (grunt) {

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Load all tasks and their configurations
  require('load-grunt-config')(grunt, {
    config: {
      pkg: require('./package.json'),
      buildDest: '.tmp'
    },
    configPath: path.join(process.cwd(), 'tasks/options'),
    init: true
  });

  grunt.registerTask('tidy', 'Run the jsbeautifier modify task', [
    'jsbeautifier:modify'
  ]);

  grunt.registerTask('test', [
    'mochaTest',
    'jshint',
    'jsonlint',
    'jsbeautifier:modify',
    'sass'
  ]);

  grunt.registerTask('default', 'launch the task', [
    'clean',
    'lessToSass',
    'test'
  ]);


};

