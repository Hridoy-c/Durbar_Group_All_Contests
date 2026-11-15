function minRemovalsToBalance(s) {
  let open = 0;     // ekhono match hoy ni emon '(' er songkha
  let removals = 0; // match chhara ')' jegulo remove korte hobe

  for (const ch of s) {
    if (ch === "(") {
      open++;
    } else if (open > 0) {
      open--;       // ')' ekta '(' er shathe match holo
    } else {
      removals++;   // match korar moto '(' nei, tai ')' remove
    }
  }

  // shesh-e je '(' gulo match pay ni, segulo-o remove korte hobe
  return removals + open;
}

console.log(minRemovalsToBalance("()()"));    // 0
console.log(minRemovalsToBalance("())("));    // 2
console.log(minRemovalsToBalance(""));        // 0
console.log(minRemovalsToBalance("((("));     // 3
console.log(minRemovalsToBalance(")))"));     // 3
console.log(minRemovalsToBalance(")("));      // 2
console.log(minRemovalsToBalance("(()"));     // 1
console.log(minRemovalsToBalance("(())))("));  // 3