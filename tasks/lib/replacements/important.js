/*
    ($rtl, 0) !important;
  TO =====>
    ($rtl, 0 !important);
*/
module.exports = {
  pattern: /\((.*)\)\s*(!important)/gi,
  replacement: '($1 !important)',
  order: 1
};
