// Count Number Properties

function countNumberProperties(numbers) {
  // TODO: Implement this function
  let even = 0;
  let negative = 0;
  let odd = 0;
  let positive = 0;

    for (let item of numbers) {
    if (item % 2 === 0) {
      even++;
    } else {
      odd++;
    }

    if (item > 0) {
      positive++;
    } else if (item < 0) {
      negative++;
    }
  }
   
  


  return {
    even,
    negative,
    odd,
    positive
  }
}


console.log(countNumberProperties([-5,0,3,-4,1]))
console.log(countNumberProperties([2,4,6,8,10]))