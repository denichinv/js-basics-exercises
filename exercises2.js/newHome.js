function newHome(input) {
    let flowers = input[0];
    let flowersQty = Number(input[1]);
    let budget = Number(input[2]);

    let flowersPrice = 0;
    let discount = 0;

 switch (flowers){
    case"Roses": flowersPrice = 5 * flowersQty;
    if (flowersQty > 80) {
        discount = 0.1 * flowersPrice;
        flowersPrice -= discount;
    };break;
    case"Dahlias": flowersPrice = 3.8 * flowersQty;
    if (flowersQty > 90) {
        discount = 0.15 * flowersPrice;
        flowersPrice -= discount ;
    };break; 
    case"Tulips": flowersPrice = 2.8 * flowersQty;
    if (flowersQty > 80) {
        discount =  flowersPrice * 0.15 ;
        flowersPrice -= discount  ;
    };break;
    case "Narcissus": flowersPrice = 3 * flowersQty;
    if (flowersQty < 120) {
        
        flowersPrice *= 1.15; 
    };break;
    case "Gladiolus": flowersPrice = 2.5 * flowersQty;
    if (flowersQty < 80) {
        
        flowersPrice *= 1.2;
    };break;
    
 }
 if( budget >= flowersPrice){
 console.log(`Hey, you have a great garden with ${flowersQty} ${flowers} and ${(budget - flowersPrice).toFixed(2)} leva left.`);
 } else {
    console.log(`Not enough money, you need ${(flowersPrice - budget).toFixed(2)} leva more.`);
 }
    
}
newHome(["Gladiolus","64","160"]);