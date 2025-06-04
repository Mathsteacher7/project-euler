const smallestMultiple = require('./problem-5');

describe('smallestMultiple', () => {
  test('original problem test', () => {
    expect(smallestMultiple(20)).toBe(232792560);
  });
});
