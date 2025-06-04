const { largestGridProduct, numbersGrid } = require('./problem-11');

describe('largestGridProduct', () => {
  test('original problem test', () => {
    expect(largestGridProduct(numbersGrid)).toBe(70600674);
  });
});
