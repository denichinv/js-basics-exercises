function pcStore(input) {
    let processorPriceDollars = Number(input[0]);
    let videoCardPriceDollars = Number(input[1]);
    let ramMemoryPriceDollars = Number(input[2]);
    let ramMemoryQty = Number(input[3]);
    let discount = Number(input[4]);

    let processorPriceLeva = processorPriceDollars * 1.57;
    let videoCardPriceLeva = videoCardPriceDollars * 1.57;
    let totalRamMemoryPriceLeva = (ramMemoryPriceDollars * ramMemoryQty) * 1.57;

    let processorDiscount = processorPriceLeva * discount;
    let videoCardDiscount = videoCardPriceLeva * discount;

    let discountedProcessor = processorPriceLeva - processorDiscount;
    let discountedVideoCard = videoCardPriceLeva - videoCardDiscount;

    let totatExpences = totalRamMemoryPriceLeva + discountedProcessor + discountedVideoCard;
    console.log(`Money needed - ${totatExpences.toFixed(2)} leva.`);
    
}
pcStore(["500", "200", "80", "2", "0.05"])