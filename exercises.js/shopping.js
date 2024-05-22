function shopping (input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ramMemory = Number(input[3]);

    let videocardsPrice = videocards * 250 ;
    let processorsPrice = (videocardsPrice * 0.35) * processors;
    let ramMemoryPrice = (videocardsPrice * 0.1) * ramMemory;

    let totalPrice = videocardsPrice + processorsPrice + ramMemoryPrice;

    if (videocards > processors) { 
        discount = 0.15 * totalPrice;
        totalPrice = totalPrice - discount;

    }
    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
        
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}
shopping (["900","2","1","3"]);