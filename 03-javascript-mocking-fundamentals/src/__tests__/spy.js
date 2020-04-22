const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  // spyOn replaces the function passed with an empty mock function
  jest.spyOn(utils, 'getWinner')
  // here we pass an implementation to the mock function (because it was empty)
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])

  // cleanup
  utils.getWinner.mockRestore()
})
