import '@testing-library/react';
import React from 'react';
import {render} from '@testing-library/react';

import AutoScalingText from './src/shared/auto-scaling-text';

test('renders', () => {
  const {container} = render(<AutoScalingText />);
  // Mock CSS modules with identity-obj-proxy in Jest's moduleNameMapper to show classNames
  console.log(container.innerHTML);
});
