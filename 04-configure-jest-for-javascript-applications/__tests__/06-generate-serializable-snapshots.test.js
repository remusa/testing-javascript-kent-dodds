import '@testing-library/react'
import React from 'react'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../src/shared/calculator-display'
import {getFlyingSuperHeros} from '../src/super-heros'

describe('super heros', () => {
  test('returns super heros that can fly', () => {
    const flyingHeros = getFlyingSuperHeros()

    expect(flyingHeros).toMatchSnapshot()
  })
})

describe('CalculatorDisplay', () => {
  test('mounts', () => {
    const {container} = render(<CalculatorDisplay value="0" />)

    // RTL's render function returns its container property wrapping the component in a div
    // The rendered component can be obtained using container.firstChild
    console.log(container.innerHTML)
    console.log(container.firstChild.innerHTML)

    expect(container.firstChild.innerHTML).toMatchSnapshot()
  })
})
