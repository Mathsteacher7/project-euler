const calaulateSum = require('./problem-1');

describe('calaulateSum', () => {
  test('should return the correct sum for multiples of 3 or 5 below 1000', () => {
    expect(calaulateSum(1000)).toBe(233168);
  });

  test('should return the correct sum for multiples of 3 or 5 below 10', () => {
    expect(calaulateSum(10)).toBe(23);
  });

  test('should return 0 when there are no multiples of 3 or 5 below the input', () => {
    expect(calaulateSum(3)).toBe(0);
  });

  test('should return the correct sum when the input is a multiple of 3', () => {
    expect(calaulateSum(4)).toBe(3);
  });

  test('should return the correct sum when the input is a multiple of 5', () => {
    expect(calaulateSum(6)).toBe(8);
  });
});
