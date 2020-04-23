const path = require('path')

module.exports = {
  // Root directory where Jest will look for tests
  rootDir: path.join(__dirname, '..'),

  // To run Jest without jsdom, we use jest-environment-node
  // testEnvironment: 'jest-environment-node',
  // We are testing a browser app so it's useful to be explicit and make the tests be as close as reality as possible
  // NOTE: moved to jest.client.js
  // testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {
    // To fix the error from trying to import CSS files, configure Jest to resolve to a file we specify whenever if it ends with .css
    '\\.css$': require.resolve('./style-mock.js'),
    //
    '\\.module\\.css$': 'identity-obj-proxy',
  },

  // Setup configurations to be run before any test runs
  // NOTE: moved to jest.client.js
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // Use snapshot serializers like jest-emotion
  // NOTE: moved to jest.client.js
  /*
    snapshotSerializers: [
    // Replaces absolute paths with normalized paths. Useful when devs have different paths on their systems and there are differences in all snapshots.
    // 'jest-serializer-path',
    'jest-emotion',
  ],*/

  // Tell Jest to resolve custom module directories (the ones that use relative paths instead of absolute ones)
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    __dirname,
  ],

  // Setup test coverage ignoring setup files
  // Moved to: jest.config.js
  // collectCoverageFrom: ['**/src/**/*.js'],

  // Setup coverage threshold
  // NOTE: moved to jest.client.js
  /*coverageThreshold: {
    global: {
      statements: 15,
      branches: 10,
      functions: 15,
      lines: 15,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },*/

  // Watch only selected Jest projects
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
