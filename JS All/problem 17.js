function compressCharacters(str) {
    let result = '';
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (j < str.length && str[j] === str[i]) j++;

    const run = j - i;
    result += str[i] + (run > 1 ? run : '');
    i = j;
  }

  return result;
}
console.log(compressCharacters("aaabbc"));
// "a2b2c2"

console.log(compressCharacters("hello"));
// "abc"

console.log(compressCharacters("aaaa"));
// "a4"

console.log(compressCharacters("a"));
// "a"

console.log(compressCharacters(""));
// ""