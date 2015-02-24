/* @IMPORT
  @import "*.less";
  TO =====>
  @import "*";
 */
module.exports = {
  pattern: /\@import\s*"(.*).less"/gi,
  replacement: '@import "$1"',
  order: 2
};
