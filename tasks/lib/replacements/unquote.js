module.exports = {
  pattern: /~"(.*)"/gi,
  replacement: 'unquote("$1")',
  order: 3
};
