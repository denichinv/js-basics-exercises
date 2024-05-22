function depositCalculor(input) {
let depositedSum = Number(input[0]);
let depositTerm = Number(input[1]);
let annualInterestRate = Number(input[2]);
let annualInterestDecimal = annualInterestRate / 100;
let sum = depositedSum + depositTerm * ((depositedSum * annualInterestDecimal) / 12);
console.log(sum);
}
depositCalculor(["200", "3","5.7"]);