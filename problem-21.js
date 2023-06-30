const sumOfProperDivisors = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (num / i !== i) {
        sum += num / i;
      }
    }
  }
  return sum;
};

const findAmicableNumbers = (limit) => {
  const amicableNumbers = [];
  for (let i = 2; i < limit; i++) {
    let divisorSum = sumOfProperDivisors(i);
    if (
      divisorSum < limit &&
      i !== divisorSum &&
      i === sumOfProperDivisors(divisorSum)
    ) {
      amicableNumbers.push(i);
    }
  }
  return amicableNumbers.reduce((sum, current) => sum + current, 0);
};

console.log(findAmicableNumbers(10000));
