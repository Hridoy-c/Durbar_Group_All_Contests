function isValidBDMobile(phoneNumber) {
  const pattern = /^(?:\+?88)?01[3-9]\d{8}$/;
  return pattern.test(phoneNumber);
}

// Examples from the problem
console.log(isValidBDMobile("01712345678"));      // true
console.log(isValidBDMobile("+8801987654321"));   // true

// Valid: all three formats
console.log(isValidBDMobile("8801712345678"));    // true
console.log(isValidBDMobile("01312345678"));      // true (operator digit 3)
console.log(isValidBDMobile("01912345678"));      // true (operator digit 9)

// Invalid: operator digit must be 3-9
console.log(isValidBDMobile("01012345678"));      // false
console.log(isValidBDMobile("01112345678"));      // false
console.log(isValidBDMobile("01212345678"));      // false
console.log(isValidBDMobile("+8801212345678"));   // false

// Invalid: wrong length
console.log(isValidBDMobile("0171234567"));       // false (10 digits)
console.log(isValidBDMobile("017123456789"));     // false (12 digits)
console.log(isValidBDMobile("+880171234567"));    // false (too short)
console.log(isValidBDMobile("+88017123456789"));  // false (too long)

// Invalid: bad prefix
console.log(isValidBDMobile("+8701712345678"));   // false
console.log(isValidBDMobile("+88001712345678"));  // false
console.log(isValidBDMobile("+01712345678"));     // false (+ without 88)
console.log(isValidBDMobile("1712345678"));       // false (missing leading 0)
console.log(isValidBDMobile("88+01712345678"));   // false (+ in wrong place)
console.log(isValidBDMobile("++8801712345678"));  // false

// Invalid: non-digit characters
console.log(isValidBDMobile("017-1234-5678"));    // false
console.log(isValidBDMobile("0171234567a"));      // false
console.log(isValidBDMobile(" 01712345678"));     // false (leading space)
console.log(isValidBDMobile("01712345678 "));     // false (trailing space)
console.log(isValidBDMobile("01712345678\n"));    // false (trailing newline)

// Empty string
console.log(isValidBDMobile(""));                 // false