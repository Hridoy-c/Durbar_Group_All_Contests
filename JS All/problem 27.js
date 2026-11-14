function commonSkills(skills1, skills2) {
  // TODO: Return shared skills lowercased, deduplicated, and sorted
  const set2 = new Set(skills2.map((s) => s.toLowerCase()));
  const shared = new Set();

  for (const skill of skills1) {
    const lower = skill.toLowerCase();
    if (set2.has(lower)) shared.add(lower);
  }

  return [...shared].sort();
}

// Example 1
console.log(commonSkills(["JS", "React", "Node"], ["react", "css", "js"]));
// ["js", "react"]

// Example 2: no overlap
console.log(commonSkills(["Python", "SQL"], ["Java", "C++"]));
// []

// Empty arrays
console.log(commonSkills([], []));
// []
console.log(commonSkills(["JS"], []));
// []

// Duplicates in both arrays
console.log(commonSkills(["JS", "js", "JS"], ["Js", "JS"]));
// ["js"]

// Mixed case, output is sorted
console.log(commonSkills(["Zig", "Go", "AWS"], ["aws", "GO", "zig"]));
// ["aws", "go", "zig"]

// Punctuation in skill names
console.log(commonSkills(["C++", "C#", "Node.js"], ["c#", "c++", "NODE.JS"]));
// ["c#", "c++", "node.js"]

// Identical arrays
console.log(commonSkills(["SQL", "CSS"], ["sql", "css"]));
// ["css", "sql"]