const factorial = (n) => {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
};

const sumOfDigits = (n) => {
  return n
    .toString()
    .split("")
    .reduce((sum, current) => sum + Number(current), 0);
};

console.log(sumOfDigits(factorial(100)));
