const { subtract, sum } = require('./math')

test('sum adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10

  expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3)
  const expected = 4

  expect(result).toBe(expected)
})

// It should be apparent which test fails (we don't know whether the add or the substract function is broken)
// A testing framework should help developers identify which test is broken as quickly as possible by making helpful error messages

// This function takes a title and a callback that it tries to run
function test(title, callback) {
  // Because this test could throw an error, wrap it in a try-catch
  try {
    callback()

    // If it doesn't throws an error log the success message
    console.log(`✓ ${title}`)
  } catch (error) {
    // If it throws an error log the error message
    console.error(`✗ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        // because the error is thrown here, our stack trace indicates that this
        // is where the problem is, when the problem is actually with the code
        // we're evaluating
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEqual() {},
    toBeGreaterThan() {},
    // ...
  }
}
