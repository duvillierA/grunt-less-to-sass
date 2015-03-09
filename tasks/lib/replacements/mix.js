module.exports = {
  pattern: /(shade|tint)\(([^,]+),\s?([\d%]+)\)/gi,
  replacement: function (match, method, color2, weight) {
    var color1 = method === 'shade' ? '#000000' : '#ffffff';
    return 'mix(' + [color1, color2, weight].join(', ') + ')';
  },
  order: 3
};
