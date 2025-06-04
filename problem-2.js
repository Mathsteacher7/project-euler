const findSumOfEvenFibonacci = (n) => {
  let sum = 0;
  let firstNumber = 1;
  let nextNumber = 1;
  while (nextNumber < n) {
    if (nextNumber % 2 === 0) sum += nextNumber;
    nextNumber += firstNumber;
    firstNumber = nextNumber - firstNumber;
  }
  return sum;
};

module.exports = findSumOfEvenFibonacci;
