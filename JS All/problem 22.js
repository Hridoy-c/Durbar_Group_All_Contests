function formatAttendanceReport(students) {
  return students.map(({ name, present, total }) => {
    const percent = Math.round((present / total) * 100);

    let status;
    if (percent >= 90) status = "Excellent";
    else if (percent >= 75) status = "Good";
    else status = "At Risk";

    return `${name}: ${present}/${total} (${percent}%) - ${status}`;
  });
}


console.log(formatAttendanceReport([{ name: "Rafi", present: 18, total: 20 }]));

console.log(
  formatAttendanceReport([
    { name: "Lina", present: 15, total: 20 },
    { name: "Sam", present: 12, total: 20 },
  ])
);

console.log(formatAttendanceReport([]));
console.log(formatAttendanceReport([{ name: "Edge", present: 179, total: 200 }]));

console.log(formatAttendanceReport([{ name: "Edge2", present: 149, total: 200 }]));

console.log(formatAttendanceReport([{ name: "Zed", present: 0, total: 10 }]));