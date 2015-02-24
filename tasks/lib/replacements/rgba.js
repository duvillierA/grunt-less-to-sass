/* README : http://sass-lang.com/documentation/Sass/Script/Functions.html#rgba-instance_method
    box-shadow: 0 0 5px fade(@inputBorderFocus, 40%);
  TO =====>
    box-shadow: 0 0 5px rgba(@inputBorderFocus, (40/100));
*/
module.exports = {
  pattern: /fade\((.*),\s?([\d]+)\%\)/gmi,
  replacement: 'rgba($1, ($2/100))',
  order: 3
};
