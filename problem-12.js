const countDivisors = (n) => {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      if (n / i === i)
        // If divisors are equal, count only one
        count += 1;
      // Otherwise count both
      else count += 2;
    }
  }
  return count;
};

const TriangleNumberWithFiveDivisors = (n) => {
  let numberOfDivisiors = 0;
  let i = 0;
  while (numberOfDivisiors < n) {
    i++;
    numberOfDivisiors = countDivisors((i * (i + 1)) / 2);
  }
  return (i * (i + 1)) / 2;
};

module.exports = TriangleNumberWithFiveDivisors;
