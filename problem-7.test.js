const findNthPrime = require('./problem-7');

describe('findNthPrime', () => {
  test('original problem test', () => {
    expect(findNthPrime(10001)).toBe(104743);
  });
});
