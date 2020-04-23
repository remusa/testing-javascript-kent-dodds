const path = require('path')

module.exports = {
  ...require('./jest-common'),
  displayName: 'client',
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.js'],
  // Setup configurations to be run before any test runs
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // Use snapshot serializers like jest-emotion
  snapshotSerializers: [
    // Replaces absolute paths with normalized paths. Useful when devs have different paths on their systems and there are differences in all snapshots.
    // 'jest-serializer-path',
    'jest-emotion',
  ],

  // Setup coverage threshold
  // Moved to: jest.config.js
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
}
