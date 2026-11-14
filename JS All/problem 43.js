function countFilesInFolder(structure) {
  let total = 0;

  for (const item of structure) {
    if (item.type === "file") {
      total += 1;
    } else if (item.type === "folder") {
      total += countFilesInFolder(item.children ?? []);
    }
  }

  return total;
}

const structure1 = [
  { name: "document.txt", type: "file" },
  { name: "images", type: "folder", children: [
    { name: "photo1.jpg", type: "file" },
    { name: "photo2.png", type: "file" }
  ]},
  { name: "report.pdf", type: "file" }
];

const structure2 = [
  { name: "src", type: "folder", children: [
    { name: "index.js", type: "file" },
    { name: "components", type: "folder", children: [
      { name: "Button.js", type: "file" },
      { name: "Header.js", type: "file" }
    ]}
  ]},
  { name: "package.json", type: "file" },
  { name: "empty_folder", type: "folder", children: [] }
];

console.log(countFilesInFolder(structure1));
console.log(countFilesInFolder(structure2));
console.log(countFilesInFolder([]));
console.log(countFilesInFolder([{ name: "a", type: "folder", children: [] }]));
console.log(countFilesInFolder([{ name: "a", type: "folder", children: [{ name: "b", type: "folder", children: [{ name: "c.txt", type: "file" }] }] }]));