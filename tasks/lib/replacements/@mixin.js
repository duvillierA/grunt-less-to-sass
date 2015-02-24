/* README MIXINS : http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins
  .border-radius-bottomleft (@size) {
   TO =====>
   @mixin border-radius-bottomleft($size) {
 */
module.exports = {
  pattern: /\.([\w\-]*)\s*\((.*)\)\s*\{/gi,
  replacement: '@mixin $1($2){',
  order: 2
};
