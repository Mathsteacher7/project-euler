const TriangleNumberWithFiveDivisors = require('./problem-12');

describe('TriangleNumberWithFiveDivisors', () => {
  test('original problem test', () => {
    expect(TriangleNumberWithFiveDivisors(500)).toBe(76576500);
  });
});
