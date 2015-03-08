module.exports = {
  convert: {
    files: [{
      expand: true,
      cwd: 'test/fixtures',
      src: ['*.less'],
      ext: '.scss',
      dest: 'test/expected'
    }],
    options: {
      excludes: ['default']
    }
  },
  convert_variables_to_default: {
    files: [{
      expand: true,
      cwd: 'test/fixtures',
      src: ['default.less'],
      ext: '.scss',
      dest: 'test/expected'
    }]
  }
};
