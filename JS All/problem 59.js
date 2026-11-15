function groupConsecutiveRanges(numbers) {
  if (numbers.length === 0) return [];

  // Duplicate bad diye sort kori (original array change kori na)
  const sorted = [...new Set(numbers)].sort((a, b) => a - b);
  const result = [];

  let start = sorted[0];
  let prev = sorted[0];

  for (let i = 1; i <= sorted.length; i++) {
    const curr = sorted[i];

    // Range shesh hole (consecutive na, ba array shesh)
    if (curr !== prev + 1) {
      result.push(start === prev ? `${start}` : `${start}-${prev}`);
      start = curr;
    }

    prev = curr;
  }

  return result;
}

console.log(groupConsecutiveRanges([1, 2, 3, 7, 8]));       // ["1-3", "7-8"]
console.log(groupConsecutiveRanges([10, 1, 2, 5, 6, 7]));   // ["1-2", "5-7", "10"]
console.log(groupConsecutiveRanges([]));                    // []
console.log(groupConsecutiveRanges([5]));                   // ["5"]
console.log(groupConsecutiveRanges([3, 1, 2]));             // ["1-3"]
console.log(groupConsecutiveRanges([1, 1, 2, 2, 3]));       // ["1-3"]
console.log(groupConsecutiveRanges([-2, -1, 0, 1]));        // ["-2-1"]
console.log(groupConsecutiveRanges([1, 3, 5]));             // ["1", "3", "5"]