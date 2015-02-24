module.exports = {
  convert: {
    files: [{
      expand: true,
      cwd: 'fixtures',
      src: ['*.less'],
      ext: '.scss',
      dest: 'results'
    }],
    options: {
      'default': false
    }
  },
  convert_variables_to_default: {
    files: [{
      expand: true,
      cwd: 'fixtures',
      src: ['default.less'],
      ext: '.scss',
      dest: 'results'
    }]
  }
};
