function findFirstUniqueChar(s) {
    let count = {};

    for(let i = 0;i<s.length;i++){
        let char = s[i];
        count[char] = (count[char] || 0) + 1;

    }
   
    for(let i = 0;i<s.length;i++){
        let char = s[i];
        if(count[char] === 1){
            return char;
        }
    }
    return -1;
   
    
}

console.log(findFirstUniqueChar("aabbcdeff")); 
console.log(findFirstUniqueChar("leetcode")); // expect "e"
console.log(findFirstUniqueChar("loveleetcode")); // expect "l"
console.log(findFirstUniqueChar("aabb")); // expect ""