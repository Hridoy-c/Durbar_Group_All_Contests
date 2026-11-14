function simulateTicketQueue(commands) {
  // TODO
  const queue = [];
  const served = [];

  for (const command of commands) {
    if (command === "serve") {
      if (queue.length > 0) served.push(queue.shift());
      continue;
    }

    const spaceIndex = command.indexOf(" ");
    const action = command.slice(0, spaceIndex);
    const name = command.slice(spaceIndex + 1);

    if (action === "join") {
      if (!queue.includes(name)) queue.push(name);
    } else if (action === "leave") {
      const index = queue.indexOf(name);
      if (index !== -1) queue.splice(index, 1);
    }
  }

  return { queue, served };
}
// Example 1
console.log(
  simulateTicketQueue(["join Rafi", "join Sara", "serve", "join Alex", "leave Sara", "serve"])
);
// { queue: [], served: ["Rafi", "Alex"] }

// Example 2
console.log(
  simulateTicketQueue(["serve", "join Bob", "join Bob", "leave Alice", "join Alice", "serve"])
);
// { queue: ["Alice"], served: ["Bob"] }

// Empty commands
console.log(simulateTicketQueue([]));
// { queue: [], served: [] }

// Serve on an empty queue does nothing
console.log(simulateTicketQueue(["serve", "serve"]));
// { queue: [], served: [] }

// A served person can join again
console.log(simulateTicketQueue(["join A", "serve", "join A"]));
// { queue: ["A"], served: ["A"] }

// Leave someone in the middle, order of others is kept
console.log(simulateTicketQueue(["join A", "join B", "join C", "leave B"]));
// { queue: ["A", "C"], served: [] }

// Names are case-sensitive
console.log(simulateTicketQueue(["join bob", "join Bob", "leave BOB"]));
// { queue: ["bob", "Bob"], served: [] }

// Leave after being served is ignored
console.log(simulateTicketQueue(["join A", "join B", "serve", "leave A"]));
// { queue: ["B"], served: ["A"] }

// Serving in order
console.log(simulateTicketQueue(["join A", "join B", "join C", "serve", "serve"]));
// { queue: ["C"], served: ["A", "B"] }