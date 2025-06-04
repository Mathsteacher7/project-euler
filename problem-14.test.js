const longestChain = require('./problem-14');

describe('longestChain', () => {
  test('original problem test', () => {
    expect(longestChain(1000000)).toBe(837799);
  });
});
