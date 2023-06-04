const calaulateSum = (n) => {
  let sum = 0;
  for (let i = 3; i < n; i++) {
    if (i % 5 === 0 || i % 3 === 0) sum += i;
  }

  return sum;
};

console.log(calaulateSum(1000));
