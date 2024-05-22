function basketballEquipment (input){
    let yearlyMembership = Number(input[0]);
    let basketballShoes = yearlyMembership - (yearlyMembership * 0.4);
    let basketballJersey = basketballShoes - (basketballShoes * 0.2);
    let basketballBall = basketballJersey / 4 ;
    let basketballAccessoaries = basketballBall / 5;
    
    console.log(yearlyMembership + basketballShoes + basketballJersey + basketballBall + basketballAccessoaries);




}
basketballEquipment(["365"])