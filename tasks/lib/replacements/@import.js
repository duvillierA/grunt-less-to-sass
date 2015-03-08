/* @IMPORT
  @import "*.less";
  TO =====>
  @import "*";
 */
module.exports = {
  pattern: /\@import\s*["|'](.*).less["|']/gi,
  replacement: function (match, filepath) {
    return '@import \'' + filepath + '\'';
  },
  order: 2
};
