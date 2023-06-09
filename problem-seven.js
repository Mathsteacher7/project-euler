const findNthPrime = (n) => {
  let size = Math.max(n * Math.log(n) * 2, n); // creating a size that will be big enought to find the number we want
  size = Math.floor(size);
  const sieve = new Array(size + 1);
  sieve.fill(true); // starting with all number are prime
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= size; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= size; j += i) {
        sieve[j] = false; // multiples of i are not prime
      }
    }
  }

  let primeCount = 0;
  let nthPrime = -1;
  for (let i = 2; i <= size; i++) {
    if (sieve[i]) {
      primeCount++;
      if (primeCount === n) {
        nthPrime = i;
        break;
      }
    }
  }

  return nthPrime;
};

console.log(findNthPrime(10001));
