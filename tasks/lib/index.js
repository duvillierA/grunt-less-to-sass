var fs = require('fs'),
  _ = require('lodash'),
  dir = __dirname + '/replacements/';

var replacements = function (options) {
  var filenames = fs.readdirSync(dir);
  return _.sortBy(_.filter(filenames, function (filename) {
    return options[filename.split('.js')[0]] !== false;
  }).map(function (item) {
    return require(dir + item);
  }), 'order');
};

module.exports = replacements;
