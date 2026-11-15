function checkMathOperationForNine(a: number, b: number): string {
    if(a+b === 9 || a-b === 9 || a*b === 9 || a/b === 9){
        return "Nine";
    }else{
        return "Nein";
    }


}

console.log(checkMathOperationForNine(5, 4));
console.log(checkMathOperationForNine(10, 1));
console.log(checkMathOperationForNine(3, 3));
console.log(checkMathOperationForNine(2, 6));
