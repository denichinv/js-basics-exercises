function catFood(input) {
    let catQty = Number(input[0]);

    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;

    totalFoodNeeded = 0;


    for(currCat = 1; currCat <= catQty; currCat++){
        let foodInGrams = Number(input[currCat])
        
         totalFoodNeeded += foodInGrams;

        if(foodInGrams >= 100 && foodInGrams < 200){
            groupOne++
        }
        else if (foodInGrams < 300 ) { 
            groupTwo++
        }
        else if ( foodInGrams < 400){
            groupThree++
        }

    }

    let totalFoodInKg = totalFoodNeeded / 1000;
    let foodPricePerDay = (totalFoodInKg * 12.45).toFixed(2)

    console.log(`Group 1: ${groupOne} cats.`)

   console.log(`Group 2: ${groupTwo} cats.`)

    console.log(`Group 3: ${groupThree} cats.`)

   console.log(`Price for food per day: ${foodPricePerDay} lv.`)

     
}
catFood (["6"
,
"102"
,
"236"
,
"123"
,
"399"
,
"342"
,
"222"])