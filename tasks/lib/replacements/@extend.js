/* README EXTEND : http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend
  .classname;
   TO =====>
   @extend .classname;
 */
module.exports = {
  pattern: /\.([[a-zA-Z-_]*)\s*;/gi,
  replacement: '@extend .$1;',
  order: 2
};
