function removeDuplicates(str) {
  const seen = new Set();
  let result = "";

  for (const ch of str) {
    if (!seen.has(ch)) {
      seen.add(ch);
      result += ch;
    }
  }

  return result;
}

console.log(removeDuplicates("hello"));        // "helo"
console.log(removeDuplicates("programming"));  // "progamin"
console.log(removeDuplicates(""));             // ""
console.log(removeDuplicates("aaaa"));         // "a"
console.log(removeDuplicates("abc"));          // "abc"
console.log(removeDuplicates("aAbB"));         // "aAbB"
console.log(removeDuplicates("a b a b"));      // "a b"