'use strict';

var lib = require('./lib/index');

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
        return [grunt.file.read(filepath)].concat(replacements).reduce(function (source, item) {
          return source.replace(item.pattern, item.replacement);
        });
      }).join('\n');
      grunt.file.write(file.dest, contents);
    });

    grunt.log.ok(this.files.length + ' files converted.');
  });

};
