function reverseEachWord(str) {

    let split = str.split(' ');
    console.log(split);
    let reverse = split.map((item) => item.split('').reverse().join(''));   

    return reverse.join(' ');
  // TODO: Implement this function
}

console.log(reverseEachWord("hello world"));
console.log(reverseEachWord("JavaScript is fun"));