'use strict';

var lib = require('./lib/index'),
  _ = require('lodash');

module.exports = function (grunt) {

  grunt.registerMultiTask('lessToSass', 'Convert Less to Sass files', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        excludes: [],
        replacements: []
      }),
      replacements = lib(options);

    this.files.forEach(function (file) {
      var contents = file.src.filter(function (filepath) {
        return grunt.file.exists(filepath);
      }).map(function (filepath) {
        var source = grunt.file.read(filepath);
        _.forEach(replacements, function (item) {
          source = source.replace(item.pattern, item.replacement);
        });
        return source;
      }).join('\n');
      grunt.file.write(file.dest, contents);
    });

    grunt.log.ok(this.files.length + ' files converted.');
  });

};
