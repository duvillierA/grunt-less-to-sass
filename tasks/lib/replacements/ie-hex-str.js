/*
  README : http://sass-lang.com/documentation/Sass/Script/Functions.html#ie_hex_str-instance_method
*/
module.exports = {
  pattern: /e\(%\("progid:DXImageTransform\.Microsoft\.gradient\(startColorstr='%d', endColorstr='%d', GradientType=(\d)\)",(.*),(.*)\)\);/gi,
  replacement: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str($2)}\', endColorstr=\'#{ie-hex-str($3)}\', GradientType=$1);',
  order: 3
};
