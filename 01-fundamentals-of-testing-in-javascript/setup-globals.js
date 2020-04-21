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

// Make helpers globally available
global.test = test
global.expect = expect

// To run tests with these globals available:
// node --require ./setup-globals.js 06-provide-testing-helpers-as-globals.js
