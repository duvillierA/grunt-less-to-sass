module.exports = {
  pattern: /(shade|tint)+\((.*),\s?([\d%]+)\)/gmi,
  replacement: 'mix(#000000, $2, $3)',
  order: 3
};
