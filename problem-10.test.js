const sumOfPrimesUpToANumber = require('./problem-10');

describe('sumOfPrimesUpToANumber', () => {
  test('original problem test', () => {
    expect(sumOfPrimesUpToANumber(2000000)).toBe(142913828922);
  });
});
