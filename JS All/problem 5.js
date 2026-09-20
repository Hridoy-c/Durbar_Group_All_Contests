// function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {

//     let total = Math.floor((totalMoney - cakeCost) / donutCost)
//     console.log(total)

//     let cake = totalMoney - cakeCost
//     console.log(cake)

//     let remaining =  Math.floor((total * donutCost) - cake)
//     console.log(remaining)



// }

// console.log(calculateRemainingMoney(100, 20, 10));
// console.log(calculateRemainingMoney(50, 30, 7));


function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
    const moneyAfterCake = totalMoney - cakeCost;
    const donutCount = Math.floor(moneyAfterCake / donutCost);
    return moneyAfterCake - (donutCount * donutCost);
}

console.log(calculateRemainingMoney(100, 20, 10));      // expect 0
console.log(calculateRemainingMoney(50, 30, 7));         // expect 6
console.log(calculateRemainingMoney(20, 20, 5));         // cake uses exact amount, expect 0
console.log(calculateRemainingMoney(25, 20, 10));        // can't afford any donuts, expect 5
console.log(calculateRemainingMoney(1000000000, 1, 3));  // large numbers
console.log(calculateRemainingMoney(7, 5, 100));  