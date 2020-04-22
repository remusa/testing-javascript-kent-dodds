import {getFormattedValue} from './src/utils';

test('formats the value', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0');
});

// Jest uses jsdom by default giving access to the "window" object
// Jest can be configured to run only on the  browser or node via jest.config.js
console.log(window);
