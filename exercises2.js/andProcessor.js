function andProcessor(input) {

    let processorQty = Number(input[0]);
    let workersQty = Number(input[1]);
    let workingDays  = Number(input[2]);

    let totalWorkingHours = workersQty * workingDays * 8;
    let processorMade = Math.floor(totalWorkingHours / 3)
    let profit = 0;

    if(processorMade >= processorQty){
         profit = (processorMade - processorQty) * 110.1
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);

    }else { profit = (processorQty - processorMade) * 110.1;
    console.log(`Losses: -> ${profit.toFixed(2)} BGN`);}



    
}
andProcessor (["500"
,
"8"
,
"20"])