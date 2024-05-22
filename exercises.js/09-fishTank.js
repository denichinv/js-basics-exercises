// Дължина в см – цяло число в интервала [10 … 500]
// 2. Широчина в см – цяло число в интервала [10 … 300]
// 3. Височина в см – цяло число в интервала [10… 200]
// 4. Процент – реално число в интервала [0.000 … 100.000]

function fishTank(input){
    let lengthInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percent = Number(input[3] / 100);
    
let volumeOfTank = lengthInCm * widthInCm * heightInCm
let volumeLitres = volumeOfTank / 1000
let neededWater = volumeLitres * (1 - percent)

console.log(neededWater);


}
fishTank(["85 ","75 ","47 ","17 "])