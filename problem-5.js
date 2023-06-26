const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a % b);
  }
};

const leastCommonMultilple = (a, b) => {
  return (a * b) / greatestCommonDivisor(a, b);
};

const smallestMultiple = (n) => {
  let maxLCM = 1;

  for (let i = 2; i <= n; i++) {
    maxLCM = leastCommonMultilple(maxLCM, i);
  }

  return maxLCM;
};

console.log(smallestMultiple(20));
