function findSecondLargestUnique(numbers) {
  // TODO: Implement this function
  let unique = [...new Set(numbers)];

  if(unique.length < 2) return null;

  unique.sort((a, b) => b - a);

  return unique[1];
}

console.log(findSecondLargestUnique([10,5,20,5,15]));
console.log(findSecondLargestUnique([3,3,3]));