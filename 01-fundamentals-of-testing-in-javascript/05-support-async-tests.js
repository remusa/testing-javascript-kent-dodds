const { subtractAsync, sumAsync } = require('./math')

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

// The original function will return passing tests because they return a Promise immediately, but throw an UnhandledRejectionPromise after running because when the 'expect' runs it will reject that Promise
// Fix: make the 'test' function 'async', and 'await' the response from the callback.
// This will work for both asynchronous and synchronous tests because async functions will return a solved Promise.
async function test(title, callback) {
  try {
    await callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✗ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
  }
}
