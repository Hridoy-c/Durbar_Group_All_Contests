function countNumberProperties(numbers: number[]): string {

    let even = 0;
    let negative = 0;
    let odd = 0;
    let positive = 0;   

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]; 
        if(element % 2 === 0){
            even++;
        } else {
            odd++;
            }

        if(element > 0){
            positive++;
        } else{
            negative++;
        }
    }

    return `Even: ${even}, Odd: ${odd}, Positive: ${positive}, Negative: ${negative}`; 

}


console.log(countNumberProperties([-5,0,3,-4,1]))
console.log(countNumberProperties([2,4,6,8,10]))