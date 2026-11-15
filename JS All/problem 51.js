function compareVersions(version1, version2) {
  const a = version1.split(".");
  const b = version2.split(".");
  const len = Math.max(a.length, b.length);

  for (let i = 0; i < len; i++) {
    const x = i < a.length ? parseInt(a[i], 10) : 0;
    const y = i < b.length ? parseInt(b[i], 10) : 0;

    if (x > y) return 1;
    if (x < y) return -1;
  }

  return 0;
}

console.log(compareVersions("1.10", "1.2"));      // 1
console.log(compareVersions("1.0.1", "1"));       // 1
console.log(compareVersions("1.0", "1"));         // 0
console.log(compareVersions("1.01", "1.001"));    // 0
console.log(compareVersions("0.1", "1.1"));       // -1
console.log(compareVersions("1.0.0.0", "1"));     // 0