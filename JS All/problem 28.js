function swapKeysAndValues(obj) {
  // Your code here
  const swapped = {};

  for (const key in obj) {
    swapped[obj[key]] = key;
  }

  return swapped;
}
// Example 1
console.log(swapKeysAndValues({ a: "x", b: "y" }));
// { x: "a", y: "b" }

// Example 2: duplicate values, later key wins
console.log(swapKeysAndValues({ a: "x", b: "x" }));
// { x: "b" }

// Empty object
console.log(swapKeysAndValues({}));
// {}

// Numeric values become string keys
console.log(swapKeysAndValues({ a: 1, b: 2 }));
// { "1": "a", "2": "b" }

// Number and string that match collide
console.log(swapKeysAndValues({ a: 1, b: "1" }));
// { "1": "b" }

// Three keys share a value
console.log(swapKeysAndValues({ a: "z", b: "z", c: "z" }));
// { z: "c" }

// Integer-like keys are iterated first, in ascending order
console.log(swapKeysAndValues({ b: "x", 1: "x" }));
// { x: "b" }  (key "1" is processed first, then "b" overwrites it)

// Values are strings after the swap
console.log(typeof swapKeysAndValues({ 5: "k" }).k);
// "string"