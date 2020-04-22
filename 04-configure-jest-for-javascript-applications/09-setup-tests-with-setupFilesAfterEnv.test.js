import '@testing-library/react'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from './src/calculator'

test('renders', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
