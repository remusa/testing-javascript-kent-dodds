const { subtractAsync, sumAsync } = require('./math')

// To run tests with the available globals without having to import them:
// node --require ./setup-globals.js 06-provide-testing-helpers-as-globals.js

test('sum async', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10

  expect(result).toBe(expected)
})

test('subtract async', async () => {
  const result = await subtractAsync(10, 7)
  const expected = 3

  expect(result).toBe(expected)
})
