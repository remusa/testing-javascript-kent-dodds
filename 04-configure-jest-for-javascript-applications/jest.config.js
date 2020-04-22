module.exports = {
  // To run Jest without jsdom, we use jest-environment-node
  // testEnvironment: 'jest-environment-node',
  // We are testing a browser app so it's useful to be explicit and make the tests be as close as reality as possible
  testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {
    // To fix the error from trying to import CSS files, configure Jest to resolve to a file we specify whenever if it ends with .css
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
};
