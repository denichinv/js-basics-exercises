function bonusPoints (input){
    let points = Number(input[0]);
    let bonus = 0;

    if(points <= 100){ 
        bonus = 5;
         }
    else if (points <= 1000){
        bonus = points * 0.2;
    }
    else  {
        bonus = points * 0.1;
     }
    if (points % 2 === 0 ) {
        bonus = bonus + 1;}
     else if (points % 10 === 5){
    bonus = bonus + 2 ;
}
    
console.log(bonus);
console.log(points + bonus);
}

bonusPoints(["20"]);

// Ако числото е до 100 включително, бонус точките са 5.
//  Ако числото е по-голямо от 100, бонус точките са 20% от числото.
//  Ако числото е по-голямо от 1000, бонус точките са 10% от числото.