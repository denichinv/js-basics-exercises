function accountBalance(input) {
    let index = 0;
    let sumDeposit = input[index]
    let balance = 0;

    while(sumDeposit !== "NoMoreMoney"){
       let depositAsNumber = Number(sumDeposit)  
     
       if(depositAsNumber < 0){
        console.log("Invalid operation!");
       break;
     } 
       console.log(`Increase: ${depositAsNumber.toFixed(2)}`);
       
       balance += depositAsNumber;
       index++ ;
       sumDeposit = input[index];
        
      
    

}
console.log(`Total: ${balance.toFixed(2)}`);

    
}
accountBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"])