/* README : http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_
    background: url("${dir}/${path}");
  TO =====>
    background: url('#{$dir}/#{$path}');
*/
module.exports = {
  pattern: /\${([^}]+)\}/gi,
  replacement: '#{$$$1}',
  order: 3
};
// /\$\{([^}]+)\}
