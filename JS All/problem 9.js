function findLongestWord(sentence) {
  let words = sentence.match(/[a-zA-Z0-9]+/g) || [];

    if (words.length === 0) return "";

    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Hello world, how are you today?"));