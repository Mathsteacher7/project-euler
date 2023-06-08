const sumSquareDifference = (n) => {
  const squareOfSum = Math.pow(((1 + n) / 2) * n, 2);
  const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
  return squareOfSum - sumOfSquares;
};

console.log(sumSquareDifference(100));
