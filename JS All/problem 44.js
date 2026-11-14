function rankStudents(students) {
  const sorted = [...students].sort((a, b) => b.score - a.score);

  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    const rank =
      i > 0 && sorted[i].score === sorted[i - 1].score
        ? result[i - 1].rank
        : i + 1;

    result.push({ ...sorted[i], rank });
  }

  return result;
}

console.log(rankStudents([
  { name: "Alice", score: 90 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 85 }
]));

console.log(rankStudents([
  { name: "Eva", score: 100 },
  { name: "Frank", score: 100 },
  { name: "Grace", score: 100 }
]));

console.log(rankStudents([]));

console.log(rankStudents([{ name: "Solo", score: 50 }]));

console.log(rankStudents([
  { name: "A", score: 80 },
  { name: "B", score: 90 },
  { name: "C", score: 90 },
  { name: "D", score: 90 },
  { name: "E", score: 70 }
]));