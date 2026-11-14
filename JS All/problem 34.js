function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Examples from the problem
console.log(gcd(12, 18));          // 6
console.log(gcd(7, 13));           // 1

// Zero cases
console.log(gcd(0, 0));            // 0
console.log(gcd(0, 5));            // 5
console.log(gcd(5, 0));            // 5

// One divides the other
console.log(gcd(10, 5));           // 5
console.log(gcd(5, 10));           // 5

// Same numbers
console.log(gcd(9, 9));            // 9

// One is 1
console.log(gcd(1, 1000000000));   // 1

// Coprime large numbers
console.log(gcd(999999937, 1000000000)); // 1

// Large values within constraints
console.log(gcd(1000000000, 500000000)); // 500000000
console.log(gcd(1000000000, 1000000000)); // 1000000000
console.log(gcd(123456789, 987654321));  // 9

// Powers of two
console.log(gcd(1024, 4096));      // 1024