function miningRig(input) {

    let priceForVideoCard = Number(input[0]);
    let priceForTransmiter = Number(input[1]);
    let priceForElectricityPerCard = Number(input[2]);
    let profitPerCard = Number(input[3]);

    let totalCardPrice = priceForVideoCard * 13;
    let totalTransmiterPrice =priceForTransmiter * 13;
    let totalExpences = totalCardPrice + totalTransmiterPrice + 1000;
    let totalVideoCardProfit = (profitPerCard - priceForElectricityPerCard) * 13;

    let returnSpentPrice = totalExpences / totalVideoCardProfit;

    console.log(totalExpences);
    console.log(Math.ceil(returnSpentPrice));
    
}
miningRig(["800",
"10",
"0.32",
"6.4"])