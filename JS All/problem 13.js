function isPalindrome(str) {
  // TODO: Implement this function
   let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let palindrome = "";
    for (let i = cleaned.length - 1; i >= 0; i--) {
        palindrome += cleaned[i];
    }

    return palindrome === cleaned;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true    
console.log(isPalindrome("hello")); // false