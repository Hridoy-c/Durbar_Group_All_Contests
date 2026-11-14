function reconcileInventory(initialInventory, transactions) {
  const inventory = { ...initialInventory };

  for (const { productId, type, quantity } of transactions) {
    const current = inventory[productId] ?? 0;

    if (type === "in") {
      inventory[productId] = current + quantity;
    } else if (type === "out") {
      inventory[productId] = Math.max(0, current - quantity);
    }
  }

  return inventory;
}

console.log(reconcileInventory(
  { apple: 10, banana: 5 },
  [
    { productId: "apple", quantity: 3, type: "in" },
    { productId: "banana", quantity: 2, type: "out" }
  ]
));

console.log(reconcileInventory(
  { orange: 2 },
  [
    { productId: "orange", quantity: 2, type: "out" },
    { productId: "grape", quantity: 7, type: "in" }
  ]
));

console.log(reconcileInventory({}, []));

console.log(reconcileInventory(
  { apple: 1 },
  [{ productId: "apple", quantity: 100, type: "out" }]
));

console.log(reconcileInventory(
  {},
  [{ productId: "kiwi", quantity: 5, type: "out" }]
));

console.log(reconcileInventory(
  { Apple: 1 },
  [{ productId: "apple", quantity: 4, type: "in" }]
));

const original = { apple: 10 };
reconcileInventory(original, [{ productId: "apple", quantity: 5, type: "in" }]);
console.log(original);