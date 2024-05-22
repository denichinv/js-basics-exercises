function cleverLily(input) {
    let age = Number(input[0]);
    let laudryPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    
    let savedMoney = 0;
    let moneyGiven = 10;
    

    for( startAge = 1; startAge <= age ; startAge++){
    
        if (startAge % 2 === 0 ) { 
            savedMoney += moneyGiven - 1;
            moneyGiven += 10; 
            

            
        }else{
            savedMoney += toyPrice
        }

    }
    if(savedMoney >= laudryPrice){
        console.log(`Yes! ${(savedMoney - laudryPrice).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(laudryPrice - savedMoney).toFixed(2)}`);
    }
}
cleverLily(["10",

"170.00",

"6"])