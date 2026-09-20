function isAnagram(s1, s2) {
const count = {};

  for (const ch of s1.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') count[ch] = (count[ch] || 0) + 1;
  }

  for (const ch of s2.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      if (!count[ch]) return false; 
      count[ch]--;
    }
  }

  return Object.values(count).every(n => n === 0);

}

console.log(isAnagram("listen", "silent")); 
// true

console.log(isAnagram("Hello", "world")); 
// false

console.log(isAnagram("A decimal point", "I'm a dot in place")); 
// true