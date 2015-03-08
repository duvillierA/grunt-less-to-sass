var fs = require('fs'),
  _ = require('lodash'),
  dir = __dirname + '/replacements/';

var replacements = function (options) {
  var filenames = fs.readdirSync(dir);

  var results = filenames.filter(function (filename) {
    return options.excludes.indexOf(filename.split('.js').join('')) === -1;
  }).map(function (filename) {
    return require(dir + filename);
  }).concat(options.replacements);

  return _.sortBy(results, 'order');
};

module.exports = replacements;
