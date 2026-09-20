function classifyPassword(password) {
  // TODO

    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let number = /[0-9]/;
    let specialChar = /[!@#$%^&*]/;

    let conditionsMet = [upperCase, lowerCase, number, specialChar]
        .filter((regex) => regex.test(password)).length;
        console.log(conditionsMet);

    if (password.length >= 8 && conditionsMet === 4) {
        return "Strong";
    } else if (password.length >= 6 && conditionsMet >= 2) {
        return "Medium";
    } else {
        return "Weak";
    }

}

console.log(classifyPassword("Password1!")); // "Strong"
console.log(classifyPassword("pass123")); // "Medium"
console.log(classifyPassword("abc123ABC!")); // "Strong"    