function puppyCare(input) {

    let foodInKg = Number(input[0]);
    let foodInGrams = foodInKg * 1000;

    let totalFoodNeeded = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== "Adopted") {

        let food = Number(command)

        totalFoodNeeded += food;

        command = input[index];
        index++;
    }

    if (totalFoodNeeded <= foodInGrams){
        console.log(`Food is enough! Leftovers: ${foodInGrams - totalFoodNeeded} grams.`);
    }
    else {
        console.log(`Food is not enough. You need ${totalFoodNeeded - foodInGrams} grams more.`);
    }
    
}
puppyCare(["4"
,
"130"
,
"345"
,
"400"
,
"180"
,
"230"
,
"120"
,
"Adopted"])