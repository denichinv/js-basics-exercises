function skiTrip(input) {
    let daysStay = Number(input[0] - 1);
    let type = input[1];
    let feedback = input[2];

    let price = 0;

    switch (type) {
        case "room for one person": 
         
         price = 18 * daysStay;


        break;

        case "apartment":
            if (daysStay < 10){
                price = (25 * daysStay) * 0.7;
                
    


            }
            else if ( daysStay <= 15){ 
                price = (25 * daysStay) * 0.65;

                
            }
            else {
                price = (25 * daysStay) * 0.5;
            }


        break;

        case "president apartment":
            if (daysStay < 10){
                price = (35 * daysStay) * 0.9;


            }
            else if ( daysStay <= 15){
                price = (35 * daysStay) * 0.85;


            }
            else {
                price = (35 * daysStay) * 0.8;
            }

        break;


    }

    if (feedback === "positive"){
        price *= 1.25;
    }
    else { price *= 0.9;}


    console.log(price.toFixed(2));


    
}
skiTrip (["30",

"president apartment",

"negative"])