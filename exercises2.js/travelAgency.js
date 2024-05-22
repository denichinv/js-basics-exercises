function travelAgency(input) {
    let city = input[0];
    let equipmentType = input[1];
    let isVip = input[2];
    let daysStay = Number(input[3]);

    let priceForStay = 0;
    

    if (daysStay <= 0) {
        console.log("Days must be positive number!");
        return
    }
    if (city !== "Bansko" && city !==  'Borovets' && city !== "Varna" && city !== "Burgas"){
                console.log("Invalid input!");
            return;  } 
        if ( equipmentType !== 'noEquipment' && equipmentType !==  "withEquipment" && equipmentType !== "noBreakfast" &&
        equipmentType !==  "withBreakfast") {
            console.log("Invalid input!");
            return;  } 
    if (daysStay > 7){
        daysStay -= 1 
    }

    switch (city) {
        case "Bansko":
        case "Borovets":
            switch (equipmentType) {
                case "noEquipment":
                    priceForStay = daysStay * 80;
                    if (isVip === "yes") {
                        priceForStay *= 0.95;
                    }

                    break;

                case "withEquipment":
                    priceForStay = daysStay * 100;
                    if (isVip === "yes") {
                        priceForStay *= 0.9;
                    }

                    break;

                

            }


            break;

        case "Varna":
        case "Burgas":



            switch (equipmentType) {
                

                case "noBreakfast":
                    priceForStay = daysStay * 100;
                    if (isVip === "yes") {
                        priceForStay *= 0.93;
                    }
                    break;

                case "withBreakfast":
                    priceForStay = daysStay * 130;
                    if (isVip === "yes") {
                        priceForStay *= 0.87;
                    }


                    break;}
                    break; 

            

    }

    
               
            
            
console.log(`The price is ${priceForStay.toFixed(2)}lv! Have a nice time!`);
            
}

    travelAgency(["Burgas"
        ,
        "noBreakfast"
        ,
        "no"
        ,
        "4"])