const longestChain = (n) => {
  let lengths = new Array(n + 1).fill(0);
  let maxChainLength = 0;
  let startingNumber = 0;

  lengths[1] = 1; // We know that the sequence length for 1 is 1

  for (let i = 2; i <= n; i++) {
    let sequence = i;
    let k = 0;

    while (sequence !== 1 && sequence >= i) {
      k++;
      if (sequence % 2 === 0) {
        sequence = sequence / 2;
      } else {
        sequence = 3 * sequence + 1;
      }
    }

    // Store the calculated length of the sequence for the number i in the lengths array
    lengths[i] = lengths[sequence] + k;

    // If the length of the sequence for the number i is greater than the current maximum, update the maximum
    if (lengths[i] > maxChainLength) {
      maxChainLength = lengths[i];
      startingNumber = i;
    }
  }

  return startingNumber;
};

module.exports = longestChain;
