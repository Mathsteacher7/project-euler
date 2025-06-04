const { biggestProductOfThirteenDigits, numberWithDigits } = require('./problem-8');

describe('biggestProductOfThirteenDigits', () => {
  test('original problem test', () => {
    expect(biggestProductOfThirteenDigits(numberWithDigits)).toBe(23514624000);
  });
});
