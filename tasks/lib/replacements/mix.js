module.exports = {
  pattern: /(shade|tint)+\((.*),\s?([\d%]+)\)/gmi,
  replacement: function (match, method, color2, weight) {
    var color1 = method === 'shade' ? '#000000' : '#FFFFFF';
    return 'mix(' + color1 + ', ' + color2 + ', ' + weight + ')';
  },
  order: 3
};
