import '@testing-library/react'
import React from 'react'
import {render} from '@testing-library/react'

// Serialize emotion classes
import {createSerializer} from 'jest-emotion'
import * as emotion from '@emotion/core'

import CalculatorDisplay from './src/calculator-display'

// we extend expect's snapshot serialisers for only this file with an emotion
// serialiser
expect.addSnapshotSerializer(createSerializer(emotion))

describe('CalculatorDisplay', () => {
  test('mounts', () => {
    const {container} = render(<CalculatorDisplay value="0" />)

    // if we inspect the snapshot created here, before applying any serialisers:
    expect(container.firstChild).toMatchSnapshot()
    // we get
    // <div class="css-x3s1ao e1wu5x6z0">
    //  ...
    // The class generated by emotion will be different every time we change the
    // css, and so our snapshot will keep changing, but we'll get no value from
    // it.
    // What we can do is use snapshot serialisers to output something more
    // valuable to us, such as the actual css

    // With the emotion serialiser in place, we now get a far more information
    // snapshot
    /*
      .emotion-0 {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-size: 6em;
        line-height: 130px;
        position: relative;
      }

      <div
        class="emotion-0 emotion-1"
      >
    */
  })
})
