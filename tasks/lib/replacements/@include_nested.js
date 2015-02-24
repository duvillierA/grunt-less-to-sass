/* NESTED INCLUDING MIXINS
    #gradient  >  @include vertical($primaryColor, $secondaryColor);
    #grid > @include gu($rtl);
  TO =====>
    @include gradient-vertical($primaryColor, $secondaryColor);
    @include grid-gu($rtl);
*/
module.exports = {
  pattern: /(\s*)\#([\w\-]*)\s*>\s*\@include\s+(.*);/gi,
  replacement: '$1@include $2-$3;',
  order: 2
};
