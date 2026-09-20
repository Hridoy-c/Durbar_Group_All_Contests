function titleCaseSentence(str) {
  // TODO: Implement this function
    return str
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(titleCaseSentence("hello world"));        // "Hello World"
console.log(titleCaseSentence("a short sentence"));   // "A Short Sentence"
console.log(titleCaseSentence("  hELLO   wORLD  "));  // "Hello World"
console.log(titleCaseSentence(""));  