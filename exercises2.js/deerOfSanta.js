function deerOfSanta(input) {

    let daysSantaMissing = Number(input[0]);
    let totalFoodInKg = Number(input[1]);
    let firstDeerFood = Number(input[2]);
    let secondDeerFood = Number(input[3]);
    let thirdDeerFood = Number(input[4]);

    let firstDeerFoodNeeded = daysSantaMissing * firstDeerFood;
    let secondDeerFoodNeeded = daysSantaMissing * secondDeerFood;
    let thirdDeerFoodNeeded = daysSantaMissing * thirdDeerFood;

    let totalFoodNeeded = firstDeerFoodNeeded + secondDeerFoodNeeded + thirdDeerFoodNeeded;

    if (totalFoodInKg >= totalFoodNeeded) {
        console.log(`${Math.floor(totalFoodInKg - totalFoodNeeded)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(totalFoodNeeded - totalFoodInKg)} more kilos of food are needed.`);
    }
    
}
deerOfSanta (["2", "10", "1", "1", "2"])