import '@testing-library/react'
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'
import React from 'react'
import { dark } from '../src/themes'

function render(ui, options) {
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

function Wrapper({children}) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>
}

Wrapper.propTypes = {
  children: PropTypes.node,
}

export * from '@testing-library/react'
export { render, }

