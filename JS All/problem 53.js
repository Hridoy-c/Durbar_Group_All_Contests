function isAlmostPalindrome(s) {
  const isPal = (l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPal(left + 1, right) || isPal(left, right - 1);
    }
    left++;
    right--;
  }

  return true;
}

console.log(isAlmostPalindrome("abca"));     // true
console.log(isAlmostPalindrome("abc"));      // false
console.log(isAlmostPalindrome(""));         // true
console.log(isAlmostPalindrome("a"));        // true
console.log(isAlmostPalindrome("aba"));      // true
console.log(isAlmostPalindrome("abcdba"));   // true
console.log(isAlmostPalindrome("abcdefg"));  // false