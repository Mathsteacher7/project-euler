const largestPalindormeProduct = () => {
  let largestPalindrom = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      const product = j * i;
      if (product < largestPalindrom) break;
      const reversedProduct = product.toString().split("").reverse().join("");
      if (product === Number(reversedProduct)) {
        largestPalindrom = product;
      }
    }
  }
  return largestPalindrom;
};

console.log(largestPalindormeProduct());
