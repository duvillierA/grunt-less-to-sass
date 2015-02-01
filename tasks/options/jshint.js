module.exports = {

  app: {
    src: [
      'test/**/*.js',
    ],
    options: {
      jshintrc: '.node.jshintrc'
    }
  },

  tooling: {
    src: [
      'Gruntfile.js',
      'tasks/**/*.js'
    ],
    options: {
      jshintrc: '.node.jshintrc'
    }
  }
};
