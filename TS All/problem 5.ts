function calculateRemainingMoneyConst(totalMoney : number, cakeCost: number, donutCost : number) : number {
    const moneyAfterCake = totalMoney - cakeCost;   
    const donutCount = Math.floor(moneyAfterCake / donutCost);
    return moneyAfterCake - (donutCount * donutCost);

}
 console.log(calculateRemainingMoneyConst(100, 20, 10));
 console.log(calculateRemainingMoneyConst(50, 30, 7));