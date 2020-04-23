
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import AutoScalingText from '../src/shared/auto-scaling-text'

test('renders', () => {
  ReactDOMServer.renderToString(<AutoScalingText />)
})
