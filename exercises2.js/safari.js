
function safari(input) {
    let budget = Number(input[0]);
    let fuelNeededL = Number(input[1]);
    let dayOfTheWeek = input[2];

    let fuelPrice = fuelNeededL * 2.1;
    let totalExpenses = fuelPrice + 100;
    let discount = 0;

    if (dayOfTheWeek === "Sunday") {
        discount = totalExpenses * 0.2;
        totalExpenses -= discount;
    } else if (dayOfTheWeek === "Saturday") {
        discount = totalExpenses * 0.1;
        totalExpenses -= discount;
    }

    if (budget < totalExpenses) {
        console.log(`Not enough money! Money needed: ${(totalExpenses - budget).toFixed(2)} lv.`);
    } else {
        console.log(`Safari time! Money left: ${(budget - totalExpenses).toFixed(2)} lv.`);
    }
}

safari(["1000"
,
"10"
,
"Sunday"])