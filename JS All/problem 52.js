function findBalancedSplit(nums) {
  const total = nums.reduce((sum, n) => sum + n, 0);
  let left = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    if (left === total - left) return i;
  }

  return -1;
}

console.log(findBalancedSplit([1, 5, 2, 4]));    // 1
console.log(findBalancedSplit([1, 2, 3, 6]));    // 2
console.log(findBalancedSplit([1, 2, 3]));       // -1
console.log(findBalancedSplit([5]));             // -1
console.log(findBalancedSplit([]));              // -1
console.log(findBalancedSplit([0, 0]));          // 0
console.log(findBalancedSplit([2, -2, 0, 0]));   // 1