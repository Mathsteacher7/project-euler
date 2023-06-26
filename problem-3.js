const largestPrimeFactor = (n) => {
  let maxPrime = -1;

  while (n % 2 === 0) {
    maxPrime = 2;
    n /= 2;
  }

  while (n % 3 === 0) {
    maxPrime = 3;
    n /= 3;
  }

  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    while (n % i === 0) {
      maxPrime = i;
      n /= i;
    }
    while (n % (i + 2) === 0) {
      maxPrime = i + 2;
      n /= i + 2;
    }
  }

  if (n > 4) {
    maxPrime = n;
  }

  return maxPrime;
};

console.log(largestPrimeFactor(600851475143));
