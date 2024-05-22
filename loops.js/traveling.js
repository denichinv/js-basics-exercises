function traveling(input) {
    
   
    let index = 0; 
    let command = input[index]
    

    while ( command !== 'End'){
        let destination = command
        index++
        let moneyNeeded = Number(input[index]);
        index++
         let savings = 0;
       
       while (savings < moneyNeeded){
        
         let moneyDeposit = Number(input[index])
         
        savings += moneyDeposit
        index++
         
    }
     if (savings>= moneyNeeded  ){
        console.log(`Going to ${destination}!`);
     }



 
    
        command = input[index]
       
  
    }



    
}
traveling(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])