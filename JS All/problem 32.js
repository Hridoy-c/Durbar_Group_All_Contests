function calculateCartTotal(items, taxRate) {
  const subtotal = items.reduce((sum, { price, quantity, discount }) => {
    return sum + price * quantity * (1 - discount / 100);
  }, 0);

  const total = subtotal * (1 + taxRate / 100);

  return Math.round((total + Number.EPSILON) * 100) / 100;
}

// Examples from the problem
console.log(calculateCartTotal([
  { price: 100, quantity: 2, discount: 10 },
  { price: 50, quantity: 1, discount: 0 }
], 10)); // 253

console.log(calculateCartTotal([
  { price: 19.99, quantity: 3, discount: 15 }
], 8)); // 55.05

// Empty cart
console.log(calculateCartTotal([], 10)); // 0

// 100% discount
console.log(calculateCartTotal([
  { price: 80, quantity: 2, discount: 100 }
], 10)); // 0

// No discount, no tax
console.log(calculateCartTotal([
  { price: 10, quantity: 3, discount: 0 }
], 0)); // 30

// Floating-point trap (0.1 * 3 = 0.30000000000000004)
console.log(calculateCartTotal([
  { price: 0.1, quantity: 3, discount: 0 }
], 0)); // 0.3

// Fractional tax rate
console.log(calculateCartTotal([
  { price: 9.99, quantity: 1, discount: 0 }
], 8.25)); // 10.81

// Multiple items with mixed discounts
console.log(calculateCartTotal([
  { price: 25, quantity: 4, discount: 20 },   // 80
  { price: 12.5, quantity: 2, discount: 0 }   // 25
], 5)); // 110.25

// Zero quantity item is ignored
console.log(calculateCartTotal([
  { price: 100, quantity: 0, discount: 0 },
  { price: 20, quantity: 1, discount: 0 }
], 10)); // 22