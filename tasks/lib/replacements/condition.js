/* README CONDITIONS : http://sass-lang.com/documentation/file.SASS_REFERENCE.html#control_directives
  .border-radius-left (@rtl, @size) when (@rtl = false) {
    .border-radius-topleft (@size);
    .border-radius-bottomleft (@size);
  };
  TO =====>
  @if $rtl = false {
    @mixin border-radius-left($rtl, $size){
      @include border-radius-topleft($size);
      @include border-radius-bottomleft($size);
    };
  };
 */
module.exports = {
  pattern: /\.([\w-_]*)\s*\((.*)\)\s*when\s*\((.*)=(.*)\)\s*\{(\s*)([^}]+)}[;]?/gi,
  replacement: '@if $3==$4 {$5@mixin $1($2){$5$6}}',
  order: 1
};
