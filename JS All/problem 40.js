function diagonalSums(matrix) {
  const n = matrix.length;
  let main = 0;
  let secondary = 0;

  for (let i = 0; i < n; i++) {
    main += matrix[i][i];
    secondary += matrix[i][n - 1 - i];
  }

  return { main, secondary };
}

// Examples from the problem
console.log(diagonalSums([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // { main: 15, secondary: 15 }
console.log(diagonalSums([[1, 2], [3, 4]]));                   // { main: 5, secondary: 5 }

// Empty matrix
console.log(diagonalSums([]));                                 // { main: 0, secondary: 0 }

// 1x1: the single element is on both diagonals
console.log(diagonalSums([[7]]));                              // { main: 7, secondary: 7 }

// Different sums
console.log(diagonalSums([[1, 2], [3, 10]]));                  // { main: 11, secondary: 5 }
console.log(diagonalSums([[1, 0, 5], [0, 2, 0], [9, 0, 3]]));  // { main: 6, secondary: 16 }

// Negative numbers
console.log(diagonalSums([[-1, 2], [3, -4]]));                 // { main: -5, secondary: 5 }

// All zeros
console.log(diagonalSums([[0, 0], [0, 0]]));                   // { main: 0, secondary: 0 }

// 4x4 (even size, no shared center)
console.log(diagonalSums([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]));                                                           // { main: 34, secondary: 34 }

// Extreme values within constraints
console.log(diagonalSums([[1000, -1000], [-1000, 1000]]));     // { main: 2000, secondary: -2000 }

// Max size: 100x100 filled with 1s
const big = Array.from({ length: 100 }, () => Array(100).fill(1));
console.log(diagonalSums(big));                                // { main: 100, secondary: 100 }