module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'test/expected',
      src: ['*.scss'],
      ext: '.css',
      dest: '.tmp'
    }]
  }
};
