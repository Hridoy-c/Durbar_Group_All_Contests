function chunkArray(arr, size) {
  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

// Examples from the problem
console.log(chunkArray([1, 2, 3, 4, 5], 2));          // [[1, 2], [3, 4], [5]]
console.log(chunkArray(["a", "b", "c", "d"], 2));     // [["a", "b"], ["c", "d"]]

// Empty array
console.log(chunkArray([], 3));                       // []

// Size 1: every element is its own chunk
console.log(chunkArray([1, 2, 3], 1));                // [[1], [2], [3]]

// Size equals array length
console.log(chunkArray([1, 2, 3], 3));                // [[1, 2, 3]]

// Size larger than array length
console.log(chunkArray([1, 2, 3], 10));               // [[1, 2, 3]]

// Uneven split with a larger remainder
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));    // [[1, 2, 3], [4, 5, 6], [7]]

// Mixed types
console.log(chunkArray([1, "a", true, null, undefined], 2)); // [[1, "a"], [true, null], [undefined]]

// Original array is not mutated
const original = [1, 2, 3, 4];
chunkArray(original, 2);
console.log(original);                                // [1, 2, 3, 4]

// Performance check with 10^4 elements
const big = Array.from({ length: 10000 }, (_, k) => k);
console.time("big chunk");
const result = chunkArray(big, 7);
console.timeEnd("big chunk");
console.log(result.length);                           // 1429
console.log(result[result.length - 1]);               // [9996, 9997, 9998, 9999]