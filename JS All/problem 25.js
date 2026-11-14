function findRainfallPeaks(rainfall) {
  // TODO: implement
  const peaks = [];

  for (let i = 1; i < rainfall.length - 1; i++) {
    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
      peaks.push(i + 1); // convert 0-based index to 1-based day number
    }
  }

  return peaks;
}

// Example 1
console.log(findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]));
// [2, 5]

// Example 2
console.log(findRainfallPeaks([1, 2, 3, 2, 1]));
// [3]

// Empty array
console.log(findRainfallPeaks([]));
// []

// Too short to have a peak
console.log(findRainfallPeaks([5]));
// []
console.log(findRainfallPeaks([1, 9]));
// []

// Plateau: equal neighbors are not strictly lower
console.log(findRainfallPeaks([1, 5, 5, 1]));
// []

// Flat data
console.log(findRainfallPeaks([4, 4, 4, 4]));
// []

// Edges are higher but never count
console.log(findRainfallPeaks([9, 1, 9]));
// []

// Consecutive peaks separated by a valley
console.log(findRainfallPeaks([1, 3, 1, 3, 1]));
// [2, 4]

// Strictly increasing, no peaks
console.log(findRainfallPeaks([1, 2, 3, 4, 5]));
// []