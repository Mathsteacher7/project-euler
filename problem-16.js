const sumOfPowerDigits = () => {
  const power = BigInt(2) ** BigInt(1000);
  let sum = 0;
  for (let digit of power.toString()) {
    sum += Number(digit);
  }
  return sum;
};

module.exports = sumOfPowerDigits;
