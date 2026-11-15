function findMajorityElement(nums) {
  let candidate = null;
  let count = 0;

  // Phase 1: Boyer-Moore voting diye candidate khuji
  for (const n of nums) {
    if (count === 0) candidate = n;
    count += n === candidate ? 1 : -1;
  }

  // Phase 2: candidate sotti n/2 er beshi bar ache kina verify kori
  let freq = 0;
  for (const n of nums) {
    if (n === candidate) freq++;
  }

  return freq > nums.length / 2 ? candidate : null;
}

console.log(findMajorityElement([3, 2, 3]));              // 3
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]));  // 2
console.log(findMajorityElement([1, 2, 3]));              // null
console.log(findMajorityElement([]));                     // null
console.log(findMajorityElement([5]));                    // 5
console.log(findMajorityElement([1, 1, 2, 2]));           // null
console.log(findMajorityElement([-1, -1, -1, 2]));        // -1