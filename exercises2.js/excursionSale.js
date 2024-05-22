function excursionSale(input) {

let SeaExcursions = Number(input[0]);
let mountainExcursions = Number(input[1]);

let income = 0;
let SeaExcursionsCounter = 0 ;
let mountainExcursionsCounter = 0;

let index = 2; 
let command = input[index];
index++;

while (command !== "Stop") {

    switch (command) {
        case "sea": 
            
            if (SeaExcursionsCounter < SeaExcursions) {
                 income += 680;
            SeaExcursionsCounter++
            }

            break;
    
        case "mountain":
            
            if (mountainExcursionsCounter < mountainExcursions) {
                income += 499;
            mountainExcursionsCounter++ 
                
            }

            break;
    }
if (mountainExcursionsCounter === mountainExcursions && SeaExcursionsCounter === SeaExcursions) {
        console.log(" Good job! Everything is sold.");
        console.log(`Profit: ${income} leva.`);
        return;
    }
    
    command = input[index];
    index++;
    
}

        console.log(`Profit: ${income} leva.`);
 


    
}
excursionSale(["2"
,
"2"
,
"sea"
,
"mountain"
,
"sea"
,
"sea"
,
"mountain"])