const numOfPathsDP = require('./problem-15');

describe('numOfPathsDP', () => {
  test('original problem test', () => {
    expect(numOfPathsDP(20)).toBe(137846528820);
  });
});
