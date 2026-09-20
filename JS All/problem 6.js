function convertToCamelCase(sentence) {
    let arr  = sentence.split(' ');
    let camelCase = arr.map((item, inx)=>{
        if(inx === 0){
            return item.toLowerCase();
        }else{
            return item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
    })

    return camelCase.join('');
}

console.log(convertToCamelCase("hello world"));
console.log(convertToCamelCase("java script is fun"));