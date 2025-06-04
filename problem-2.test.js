const findSumOfEvenFibonacci = require('./problem-2');

describe('findSumOfEvenFibonacci', () => {
  test('should return the correct sum for even Fibonacci numbers below 4,000,000', () => {
    expect(findSumOfEvenFibonacci(4000000)).toBe(4613732);
  });

  test('should return the correct sum for even Fibonacci numbers below 10', () => {
    expect(findSumOfEvenFibonacci(10)).toBe(10);
  });

  test('should return 0 when no even Fibonacci numbers are below N (e.g., N=2)', () => {
    expect(findSumOfEvenFibonacci(2)).toBe(0);
  });

  test('should return the correct sum when only the first even Fibonacci number is included (e.g., N=3)', () => {
    expect(findSumOfEvenFibonacci(3)).toBe(2);
  });
});
