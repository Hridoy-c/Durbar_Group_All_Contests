function groupStudentsByGradeBand(students) {
  // TODO: Implement this function
  const groups = { A: [], B: [], C: [], F: [] };

  for (const student of students) {
    const { marks } = student;

    if (marks >= 80) groups.A.push(student);
    else if (marks >= 70) groups.B.push(student);
    else if (marks >= 60) groups.C.push(student);
    else groups.F.push(student);
  }

  return groups;
}

// Example 1
console.log(
  groupStudentsByGradeBand([
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 58 },
    { name: "David", marks: 91 },
  ])
);
// { A: [Alice, David], B: [Bob], C: [], F: [Charlie] }

// Example 2
console.log(
  groupStudentsByGradeBand([
    { name: "Eve", marks: 65 },
    { name: "Frank", marks: 60 },
  ])
);
// { A: [], B: [], C: [Eve, Frank], F: [] }

// Empty input
console.log(groupStudentsByGradeBand([]));
// { A: [], B: [], C: [], F: [] }

// Boundaries: 80, 79, 70, 69, 60, 59
console.log(
  groupStudentsByGradeBand([
    { name: "P", marks: 80 },
    { name: "Q", marks: 79 },
    { name: "R", marks: 70 },
    { name: "S", marks: 69 },
    { name: "T", marks: 60 },
    { name: "U", marks: 59 },
  ])
);
// { A: [P], B: [Q, R], C: [S, T], F: [U] }

// Extremes: 100 and 0
console.log(
  groupStudentsByGradeBand([
    { name: "Max", marks: 100 },
    { name: "Min", marks: 0 },
  ])
);
// { A: [Max], B: [], C: [], F: [Min] }

// Everyone in one band, order preserved
console.log(
  groupStudentsByGradeBand([
    { name: "X", marks: 50 },
    { name: "Y", marks: 10 },
    { name: "Z", marks: 30 },
  ])
);
// { A: [], B: [], C: [], F: [X, Y, Z] }