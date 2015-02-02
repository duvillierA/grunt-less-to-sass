'use strict';

var replacements = require('./lib/replacements.js'),
  _ = require('lodash');

module.exports = function (grunt) {

  grunt.registerMultiTask('lessToSass', 'Convert Less to Sass files', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    // var options = this.options({

    // }),
    // var done = this.async();

    this.files.forEach(function (file) {
      var contents = file.src.filter(function (filepath) {
        // Remove nonexistent files (it's up to you to filter or warn here).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        var source = grunt.file.read(filepath);
        // Read and return the file's source.
        _.forEach(replacements, function (item) {
          source = source.replace(item.pattern, item.replacement);
        });
        return source;
      }).join('\n');

      // Write joined contents to destination filepath.
      grunt.file.write(file.dest, contents);
      // Print a success message.
      // grunt.log.writeln('File "' + file.dest + '" created.');
    });

    grunt.log.ok(this.files.length + ' Less files converted.');

    // done();
  });

};
