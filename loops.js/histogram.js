function histogram(input) {
    let numbersCount = Number(input[0]);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (i = 1 ; i <= numbersCount; i++){
     let curNum = Number(input[i]);
    
     if( curNum < 200){
        count1++;

     }
     else if (curNum < 400){
        count2++
     }
     else if (curNum < 600){
        count3++
     }
     else if (curNum < 800){
        count4++
     }
     else {
        count5++
     }

        }
        let percent1 = (count1/ numbersCount) * 100;
        let percent2 = (count2/ numbersCount) * 100;
        let percent3 = (count3/ numbersCount) * 100;
        let percent4 = (count4/ numbersCount) * 100;
        let percent5 = (count5/ numbersCount) * 100;
        
        console.log(`${percent1.toFixed(2)}% `);
        console.log(`${percent2.toFixed(2)}% `);
        console.log(`${percent3.toFixed(2)}% `);
        console.log(`${percent4.toFixed(2)}% `);
        console.log(`${percent5.toFixed(2)}% `);
}
histogram (["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])