/* README : http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_
    background: url("${img-buttons-dir};/loaders/default.gif");
  TO =====>
    background: url('#{$img-buttons-dir};/loaders/default.gif');
*/
module.exports = {
  pattern: /\$\{(.+)\}/gi,
  replacement: '#{$$$1}',
  order: 3
};
