function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = []; // index rakhi, jader next greater ekhono pai ni

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const idx = stack.pop();
      result[idx] = nums[i];
    }
    stack.push(i);
  }

  return result;
}

console.log(nextGreaterElement([4, 5, 2, 25]));    // [5, 25, 25, -1]
console.log(nextGreaterElement([13, 7, 6, 12]));   // [-1, 12, 12, -1]
console.log(nextGreaterElement([]));               // []
console.log(nextGreaterElement([5]));              // [-1]
console.log(nextGreaterElement([3, 3, 3]));        // [-1, -1, -1]
console.log(nextGreaterElement([1, 2, 3, 4]));     // [2, 3, 4, -1]
console.log(nextGreaterElement([4, 3, 2, 1]));     // [-1, -1, -1, -1]