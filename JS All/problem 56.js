function moveZeros(nums) {
  const result = new Array(nums.length).fill(0);
  let idx = 0;

  for (const n of nums) {
    if (n !== 0) {
      result[idx++] = n;
    }
  }

  return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));  // [1, 3, 12, 0, 0]
console.log(moveZeros([0, 0, 1]));         // [1, 0, 0]
console.log(moveZeros([]));                // []
console.log(moveZeros([0, 0, 0]));         // [0, 0, 0]
console.log(moveZeros([1, 2, 3]));         // [1, 2, 3]
console.log(moveZeros([-1, 0, -2, 0]));    // [-1, -2, 0, 0]