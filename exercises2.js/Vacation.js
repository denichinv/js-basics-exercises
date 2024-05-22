function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let currMoney = Number(input[1]);

    let dayCounter = 0;

    let index = 2;
    let command = input[index];
    index++
    let moneyAction = Number(input[index]);
    index++ 

    
    while (moneyNeeded > currMoney){
     
    if (command === "spend") {
        currMoney -= moneyAction;
        if (currMoney < 0){
            currMoney = 0;
        }
        dayCounter++
}else if (command === "save"){
    currMoney += moneyAction;
    dayCounter++;
}else if (dayCounter >= 5){
    console.log("You can't save the money.");
    console.log(dayCounter);
    break;

}
    
    command = input[index];
    index++
    moneyAction = Number(input[index]);
    index++ 
    }

    if(currMoney >= moneyNeeded){
        console.log(`You saved the money for ${dayCounter} days.`);
    }


    
}
vacation(["2000","1000","spend","1200","save","2000"])