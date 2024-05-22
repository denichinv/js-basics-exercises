function gozzilaVsKong(input) {
   let movieBudget = Number(input[0]);
   let actorsCount = Number(input[1]);
   let clothesPerActor = Number(input[2]);
   
   let decor = movieBudget * 0.1;
   

    totalClothesPrice = actorsCount * clothesPerActor

    if (actorsCount > 150){
        discount = 0.1 * totalClothesPrice;
        totalClothesPrice = totalClothesPrice - discount;
    }

    let totalMoneySpent = totalClothesPrice + decor;

 if (movieBudget >= totalMoneySpent) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${(movieBudget - totalMoneySpent).toFixed(2)} leva left.`);
 } else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalMoneySpent - movieBudget).toFixed(2)} leva more.`);
    
 }
}
gozzilaVsKong (["9587.88",

"222",

"55.68"]);