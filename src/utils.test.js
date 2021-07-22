import { replaceCamelWithSpaces } from './utils';

describe('spaces before camel-case letters', () => {
  test('works for no inner capital letters', () => {
		expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('works for one inner capital letters', () => {
		expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('works for multiple inner capital letters', () => {
		expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});