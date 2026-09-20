function countWordFrequencies(sentence) {
  // TODO: Implement this function
  const counts = {};
  const words = sentence.toLowerCase().match(/[a-z0-9]+/g) || [];

  for (const word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }

  return counts;
}

console.log(countWordFrequencies("Hello world, hello!"));
// { hello: 2, world: 1 }

console.log(countWordFrequencies("The quick brown fox jumps over the lazy dog."));
// { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }

console.log(countWordFrequencies(""));
// {}