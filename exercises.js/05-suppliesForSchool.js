// Цена на пакетите химикали => 2 * 5.80 = 11.60 лв.
//  Цена на пакетите маркери => 3 * 7.20 = 21.60 лв. 
//  Цена на препарата => 4 * 1.20 = 4.80 лв. 
//  Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв. 25% = 0.25 
//  Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 л

function suppliesForSchool (input) {
let packOfPens = Number(input[0]) ;
let packOfMarkers = Number(input[1]);
let boardCleanerL = Number(input[2]);
let discountPercent = Number(input[3]);
let discount = discountPercent / 100; 


let packOfPensPrice = packOfPens * 5.80;
let packOfMarkersPrice = packOfMarkers * 7.20;
let boardCleanerLPrice = boardCleanerL * 1.20;
let allMaterialsCost = packOfMarkersPrice + packOfPensPrice + boardCleanerLPrice;

let priceWithDiscount = allMaterialsCost - (allMaterialsCost * discount);

console.log(priceWithDiscount);
}

suppliesForSchool (["2 ","3 ", "4 ", "25 "])