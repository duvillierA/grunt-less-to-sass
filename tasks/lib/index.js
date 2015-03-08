var fs = require('fs'),
  _ = require('lodash'),
  dir = __dirname + '/replacements/';

var replacements = function (options) {
  var filenames = fs.readdirSync(dir),
    excludes = options.excludes,
    customReplacements = options.replacements;

  return _.chain(filenames)
    .filter(function (filename) {
      return excludes.indexOf(filename.split('.js').join('')) === -1;
    })
    .map(function (filename) {
      return require(dir + filename);
    })
    .sortBy('order')
    .value()
    .concat(customReplacements);
};

module.exports = replacements;
