module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'app/assets/styles',
      src: ['*.scss'],
      ext: '.css',
      dest: '.public/styles'
    }]
  }
};
