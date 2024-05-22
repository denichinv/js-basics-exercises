function pool(input) {
    let peopleQty = Number(input[0]);
    let entryFee = Number(input[1]);
    let sunbedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    
    let sunbedsNeeded = Math.ceil(peopleQty * 0.75);
    let umbrellasNeeded = Math.ceil(peopleQty / 2);

   
    let totalEntryFee = peopleQty * entryFee;
    let totalSunbedPrice = sunbedsNeeded * sunbedPrice;
    let totalUmbrellaPrice = umbrellasNeeded * umbrellaPrice;

    
    let totalExpenses = totalEntryFee + totalSunbedPrice + totalUmbrellaPrice;

    console.log(`${totalExpenses.toFixed(2)} lv.`);
}
pool (["21",
    "5.50",
    "4.40",
    "6.20"])