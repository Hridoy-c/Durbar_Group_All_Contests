function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Examples from the problem
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));   // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6]));   // [1, 2, 3, 4, 5, 6]

// Edge cases
console.log(mergeSortedArrays([], []));                  // []
console.log(mergeSortedArrays([], [1, 2, 3]));           // [1, 2, 3]
console.log(mergeSortedArrays([1, 2, 3], []));           // [1, 2, 3]

// Duplicates
console.log(mergeSortedArrays([1, 2, 2], [2, 3]));       // [1, 2, 2, 2, 3]

// Negative numbers
console.log(mergeSortedArrays([-5, -1, 0], [-3, 2, 4])); // [-5, -3, -1, 0, 2, 4]

// Different lengths
console.log(mergeSortedArrays([1], [0, 2, 3, 4, 5]));   // [0, 1, 2, 3, 4, 5]

// Large values within constraints
console.log(mergeSortedArrays([-1e9, 1e9], [0]));       // [-1000000000, 0, 1000000000]

// Performance check with 10^5 elements each
const big1 = Array.from({ length: 100000 }, (_, k) => k * 2);
const big2 = Array.from({ length: 100000 }, (_, k) => k * 2 + 1);
console.time("big merge");
const merged = mergeSortedArrays(big1, big2);
console.timeEnd("big merge");
console.log(merged.length);                              // 200000
console.log(merged[0], merged[199999]);                  // 0 199999