/* README INCLUDING MIXINS : http://sass-lang.com/documentation/file.SASS_REFERENCE.html#including_a_mixin
   .border-radius-bottomleft(@size)
   TO =====>
   @include border-radius-bottomleft($size)
 */
module.exports = {
  pattern: /(\s+)\.([\w\-]*)\s*\((.*)\);/gi,
  replacement: '$1@include $2($3);',
  order: 2
};
