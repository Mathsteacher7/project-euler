const calaulateSum = () => {
  let sum = 0;
  for (let i = 3; i < 1000; i++) {
    if (i % 5 === 0 || i % 3 === 0) sum += i;
  }

  return sum;
};

console.log(calaulateSum());
