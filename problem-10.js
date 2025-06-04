const sumOfPrimesUpToANumber = (n) => {
  let sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false; // 0 and 1 are not prime numbers

  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false; // multiples of i are not prime
      }
    }
  }

  let sumOfPrimes = 0;
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) {
      sumOfPrimes += i;
    }
  }

  return sumOfPrimes;
};

module.exports = sumOfPrimesUpToANumber;
