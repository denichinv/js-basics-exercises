function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishersQty = Number(input[2]);

    let boatRent = 0;
    let discount = 0;


    switch (season) {
        case "Spring": boatRent = 3000; break;
        case "Summer": boatRent = 4200; break;
        case "Autumn": boatRent = 4200; break;
        case "Winter": boatRent = 2600; break;

    }
    if (fishersQty <= 6) {
        discount = boatRent *  0.1;
        boatRent -= discount;
    }
    else if (fishersQty <= 11) {
        discount = boatRent * 0.15;
        boatRent -= discount;
    }
    else if (fishersQty >= 12) {
        discount = boatRent * 0.25;
        boatRent -= discount;
    }

    if (fishersQty % 2 === 0 && season !== "Autumn") {
        discount = boatRent * 0.05;
        boatRent -= discount;
    }
    if (budget >= boatRent){
        console.log(`Yes! You have ${(budget - boatRent).toFixed(2)} leva left.`);
    }
   else {
    console.log(`Not enough money! You need ${(boatRent - budget).toFixed(2)} leva.`);
   }

}
fishingBoat(["3600", "Autumn", "6"]);