function zooFoodExpences (input){
    let dogFoodQty = Number(input[0]);
let catFoodQty = Number (input[1]);

let dogFoodExpences = dogFoodQty * 2.50;
let catFoodExpences = catFoodQty * 4;

let zooFoodExpences = catFoodExpences + dogFoodExpences

console.log(zooFoodExpences);





}
zooFoodExpences (["5", "4"])