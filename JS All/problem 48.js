function maxTasks(tasks) {
  const sorted = [...tasks].sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastFinish = -Infinity;

  for (const [start, finish] of sorted) {
    if (start >= lastFinish) {
      count++;
      lastFinish = finish;
    }
  }

  return count;
}

console.log(maxTasks([[1, 4], [2, 3], [3, 5], [7, 9]]));
console.log(maxTasks([[1, 2], [2, 3], [3, 4]]));
console.log(maxTasks([]));
console.log(maxTasks([[1, 10]]));
console.log(maxTasks([[1, 10], [2, 3], [4, 5], [6, 7]]));
console.log(maxTasks([[1, 5], [2, 6], [3, 7]]));
console.log(maxTasks([[-5, -1], [-1, 3], [3, 8]]));
console.log(maxTasks([[1, 3], [1, 3], [1, 3]]));