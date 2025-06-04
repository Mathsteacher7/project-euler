const specialPythagoreanTriplet = (n) => {
  for (let i = 1; i < n / 3; i++) {
    for (let j = i + 1; j < n / 2; j++) {
      const k = n - i - j;
      if (Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) {
        return i * j * k;
      }
    }
  }
  return null;
};

module.exports = specialPythagoreanTriplet;
