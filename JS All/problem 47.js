function findFreeTime(bookedIntervals, workingHours) {
  const [dayStart, dayEnd] = workingHours;
  const sorted = [...bookedIntervals].sort((a, b) => a[0] - b[0]);

  const free = [];
  let cursor = dayStart;

  for (const [start, end] of sorted) {
    if (end <= cursor) continue;
    if (start >= dayEnd) break;

    if (start > cursor) {
      free.push([cursor, start]);
    }
    cursor = Math.max(cursor, end);
  }

  if (cursor < dayEnd) {
    free.push([cursor, dayEnd]);
  }

  return free;
}

console.log(JSON.stringify(findFreeTime([[10, 12], [14, 16]], [9, 17])));
console.log(JSON.stringify(findFreeTime([[10, 12], [14, 16], [11, 15]], [9, 17])));
console.log(JSON.stringify(findFreeTime([], [9, 17])));
console.log(JSON.stringify(findFreeTime([[8, 18]], [9, 17])));
console.log(JSON.stringify(findFreeTime([[7, 10], [16, 20]], [9, 17])));
console.log(JSON.stringify(findFreeTime([[9, 11], [11, 13]], [9, 17])));
console.log(JSON.stringify(findFreeTime([[1, 5], [18, 20]], [9, 17])));