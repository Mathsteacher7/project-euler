const specialPythagoreanTriplet = require('./problem-9');

describe('specialPythagoreanTriplet', () => {
  test('original problem test', () => {
    expect(specialPythagoreanTriplet(1000)).toBe(31875000);
  });
});
