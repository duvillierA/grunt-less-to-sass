module.exports = {
  modify: {
    src: [
      'tasks/**/*.js',
      'test/**/*.js',
    ],
    options: {
      config: '.jsbeautifyrc'
    }
  },

  verify: {
    src: [
      'tasks/**/*.js',
      'test/**/*.js',
    ],
    options: {
      mode: 'VERIFY_ONLY',
      config: '.jsbeautifyrc'
    }
  }
};
