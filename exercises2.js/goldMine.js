function goldMine(input) {
    let numberOfLocations = Number(input[0]);
    let totaldigged = 0;
    let average = 0;
    let index = 1
    
     

    for(l = 1; l <= numberOfLocations; l++){
        let expectedDigg = Number(input[index]);
        index++
    
        let days = Number(input[index]);
        index++

        totaldigged = 0
        
        for(currDay = 1; currDay <= days; currDay++){
            

         let digg = Number(input[index])

         

         totaldigged += digg;
         index++
        
        
        }
        average = totaldigged /days 
        if(average >= expectedDigg ){
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
        }
        else {
            console.log(`You need ${(expectedDigg - average).toFixed(2)} gold.`);
        }
      
    }
    
}
goldMine(["2"
,
"10"
,
"3"
,
"10"
,
"10"
,
"11"
,
"20"
,
"2"
,
"20"
,
"10"])