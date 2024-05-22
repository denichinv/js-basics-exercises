function pastryShop(input) {
    let pastryType = input[0];
    let orderQty = Number(input[1]);
    let dayOfTheMonth = Number(input[2]);

    let pastry = 0;

    
    let discountedPrice = 0;
    

    switch (pastryType) {
        case "Cake":

            if (dayOfTheMonth <= 15) {
                pastry = 24;


            } else {
                pastry = 28.7;

            }

            break;

        case "Souffle":
            if (dayOfTheMonth <= 15) {
                pastry = 6.66;


            } else {
                pastry = 9.8;

            }

            break;

        case "Baklava":
            if (dayOfTheMonth <= 15) {
                pastry = 12.6;


            } else {
                pastry = 16.98;

            }

            break;
    }

    let total = pastry * orderQty;
    
    if (dayOfTheMonth <= 22 ){
        if (total >= 100 && total < 200) {
            discountedPrice = total * 0.85;
            total = discountedPrice
            
        } else if ( total > 200){
            discountedPrice = total * 0.75;
            total = discountedPrice
        }
        
    }
    if (dayOfTheMonth <= 15){
        total *= 0.9;

    }

    console.log(total.toFixed(2));
}
pastryShop(["Cake"
    ,
    "10"
    ,
    "15"])