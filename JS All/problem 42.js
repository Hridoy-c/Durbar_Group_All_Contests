function updateNotificationCount(initialCount, events) {
  let count = initialCount;

  for (const event of events) {
    const amount = event.count ?? 1;

    if (event.type === "ADD") {
      count += amount;
    } else if (event.type === "READ") {
      count = Math.max(0, count - amount);
    } else if (event.type === "CLEAR") {
      count = 0;
    }
  }

  return count;
}

console.log(updateNotificationCount(2, [{ type: "ADD", count: 3 }, { type: "READ", count: 1 }]));
console.log(updateNotificationCount(5, [{ type: "READ", count: 10 }, { type: "ADD", count: 2 }, { type: "CLEAR" }]));
console.log(updateNotificationCount(0, []));
console.log(updateNotificationCount(3, [{ type: "READ" }, { type: "READ" }, { type: "READ" }, { type: "READ" }]));
console.log(updateNotificationCount(0, [{ type: "ADD" }, { type: "ADD" }]));
console.log(updateNotificationCount(100000, [{ type: "ADD", count: 100000 }]));