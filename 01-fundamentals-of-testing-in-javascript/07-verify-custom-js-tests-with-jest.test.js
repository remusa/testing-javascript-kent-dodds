const { subtractAsync, sumAsync } = require('./math')

// The created API is very similar to Jest, which can be run by using:
// npx jest
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
