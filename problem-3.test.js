const largestPrimeFactor = require('./problem-3');

describe('largestPrimeFactor', () => {
  test('original problem test', () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
  });
});
