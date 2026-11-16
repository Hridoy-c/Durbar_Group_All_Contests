function convertToCamelCases(sentence: string): string{
    const arr  = sentence.split(' ');
    const camelCase = arr.map((item, inx)=>{
        if(inx === 0){
            return item.toLowerCase();
        }else{
            return item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
    })

    return camelCase.join('');

    }

console.log(convertToCamelCases("hello world"));
console.log(convertToCamelCases("java script is fun"));