module.exports = {
  pattern: /(\$.+):(.+);/g,
  replacement: '$1:$2 !default;',
  order: 1
};
