module.exports = {

  test: {
    src: [
      'test/**/*.js',
    ],
    options: {
      jshintrc: '.jshintrc'
    }
  },

  tooling: {
    src: [
      'Gruntfile.js',
      'tasks/**/*.js'
    ],
    options: {
      jshintrc: '.jshintrc'
    }
  }
};
