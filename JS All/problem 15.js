function repeatedDigitSum(n) {
  // TODO: Implement this function

  while (n >= 10) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        n = sum;
    }

    return n;


}

console.log(repeatedDigitSum(9875)); // 2
console.log(repeatedDigitSum(123));  // 6
console.log(repeatedDigitSum(0));  