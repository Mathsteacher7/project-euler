const findSumOfEvenFibonacci = () => {
  let sum = 0;
  let firstNumber = 1;
  let nextNumber = 1;
  while (nextNumber < 4000000) {
    if (nextNumber % 2 === 0) sum += nextNumber;
    nextNumber += firstNumber;
    firstNumber = nextNumber - firstNumber;
  }
  return sum;
};

console.log(findSumOfEvenFibonacci());
