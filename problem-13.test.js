const { sumLargeNumbers, bigNumbers } = require('./problem-13');

describe('sumLargeNumbers', () => {
  test('original problem test', () => {
    expect(sumLargeNumbers(bigNumbers)).toBe("5537376230");
  });
});
