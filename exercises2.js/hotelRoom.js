function hotelRoom(input) {
    let month = input[0];
    let nightsStay = Number(input[1]);

    let studio = 0;
    let apartment = 0;
    let resultStudio = 0; 
    let resultApartment = 0; 

    switch (month) {
        case "May":
        case "October":
            studio = 50;
            apartment = 65;
            if (nightsStay > 7 && nightsStay < 14) {
                resultStudio = (nightsStay * studio) * 0.95;
                resultApartment = apartment * nightsStay;
            } else if (nightsStay > 14) {
                resultStudio = (nightsStay * studio) * 0.7;
                resultApartment = (nightsStay * apartment) * 0.9;
            } else {
                resultStudio = studio * nightsStay;
                resultApartment = apartment * nightsStay;
            }
            break;
        case "June":
        case "September":
            studio = 75.2;
            apartment = 68.7;
            if (nightsStay > 14) {
                resultStudio = (nightsStay * studio) * 0.8;
                resultApartment = (nightsStay * apartment) * 0.9;
            } else {
                resultStudio = studio * nightsStay;
                resultApartment = apartment * nightsStay;
            }
            break;
        case "July":
        case "August":
            studio = 76;
            apartment = 77;
            if (nightsStay > 14) {
                resultApartment = (nightsStay * apartment) * 0.9;
                resultStudio = nightsStay * studio;
            } else {
                resultApartment = apartment * nightsStay;
                resultStudio = studio * nightsStay;
            }
            break;
    }

    console.log(`Apartment: ${resultApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${resultStudio.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);