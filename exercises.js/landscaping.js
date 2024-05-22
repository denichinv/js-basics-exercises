function landscaping (input) {
let squareM = Number(input[0]);

let greeningOfTheYard = squareM * 7.61;
let discount = greeningOfTheYard * 0.18;
let finalPrice = greeningOfTheYard - discount;


console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);


}
landscaping(["550"]);