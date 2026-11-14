function longestIncreasingStreak(nums) {
  if (nums.length === 0) return 0;

  let longest = 1;
  let current = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current++;
      if (current > longest) longest = current;
    } else {
      current = 1;
    }
  }

  return longest;
}

// Examples from the problem
console.log(longestIncreasingStreak([1, 2, 3, 1, 2]));   // 3
console.log(longestIncreasingStreak([5, 4, 3, 2, 1]));   // 1

// Empty and single element
console.log(longestIncreasingStreak([]));                // 0
console.log(longestIncreasingStreak([7]));               // 1

// Entire array is increasing
console.log(longestIncreasingStreak([1, 2, 3, 4, 5]));   // 5

// Equal neighbors break the streak (must be strictly greater)
console.log(longestIncreasingStreak([2, 2, 2, 2]));      // 1
console.log(longestIncreasingStreak([1, 2, 2, 3]));      // 2

// Longest streak at the end
console.log(longestIncreasingStreak([5, 1, 2, 3, 4]));   // 4

// Longest streak in the middle
console.log(longestIncreasingStreak([9, 1, 2, 3, 0]));   // 3

// Multiple streaks of equal length
console.log(longestIncreasingStreak([1, 2, 0, 1, 2]));   // 2

// Negative numbers
console.log(longestIncreasingStreak([-5, -3, -1, -2, 0])); // 3

// Extreme values within constraints
console.log(longestIncreasingStreak([-1e9, 0, 1e9]));    // 3

// Performance check with 10^5 elements
const big = Array.from({ length: 100000 }, (_, k) => k);
console.time("big streak");
console.log(longestIncreasingStreak(big));               // 100000
console.timeEnd("big streak");