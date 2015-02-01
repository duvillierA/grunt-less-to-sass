const UNIT_TEST_TIMEOUT = 100; // ms

module.exports = {
  app: {
    src: [
      'test/unit/**/*.test.js'
    ],
    options: {
      timeout: UNIT_TEST_TIMEOUT,
      ignoreLeaks: false,
      clearRequireCache: true,
      ui: 'bdd',
      reporter: 'spec',
      bail: true
    }
  },
};
