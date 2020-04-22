import '@testing-library/react';
import React from 'react';
import {render} from '@testing-library/react';

import AutoScalingText from './src/shared/auto-scaling-text';

test('renders', () => {
  render(<AutoScalingText />);
});
