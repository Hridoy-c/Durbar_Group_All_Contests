function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

// Examples from the problem
console.log(isValidEmail("user@example.com"));        // true
console.log(isValidEmail("invalid.email@"));          // false

// Valid: allowed local-part characters
console.log(isValidEmail("john.doe_99-x@my-site.org")); // true
console.log(isValidEmail("a@b.co"));                  // true (minimum lengths)

// Invalid: empty or missing parts
console.log(isValidEmail(""));                        // false
console.log(isValidEmail("@example.com"));            // false (empty local part)
console.log(isValidEmail("user@.com"));               // false (empty domain)
console.log(isValidEmail("user@example"));            // false (no TLD)
console.log(isValidEmail("userexample.com"));         // false (no @)

// Invalid: TLD rules
console.log(isValidEmail("user@example.c"));          // false (TLD too short)
console.log(isValidEmail("user@example.c0m"));        // false (digit in TLD)

// Invalid: bad characters
console.log(isValidEmail("user name@example.com"));   // false (space)
console.log(isValidEmail("user@@example.com"));       // false (two @)
console.log(isValidEmail("us+er@example.com"));      // false (+ not allowed)
console.log(isValidEmail("user@exa_mple.com"));       // false (_ not allowed in domain)
console.log(isValidEmail("user@example.com "));       // false (trailing space)

// Strict spec: only one dot after the @
console.log(isValidEmail("user@mail.example.com"));   // false