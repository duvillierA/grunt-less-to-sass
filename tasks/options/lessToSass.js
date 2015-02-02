module.exports = {
  convert: {
    files: [{
      expand: true,
      cwd: 'fixtures',
      src: ['*.less'],
      ext: '.scss',
      dest: '.tmp'
    }]
  }
};
