module.exports = {
  pattern: /spin\((.+),(.+)\)/gi,
  replacement: 'adjust-hue($1,$2)',
  order: 3
};
