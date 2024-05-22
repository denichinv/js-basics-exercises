function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let qty = Number(input[2]);

    let finalResult = 0

    if (city === 'Sofia') {
        switch (product) {
            case 'coffee': finalResult = qty * 0.5; break;
            case 'water': finalResult = qty * 0.8; break;
            case 'beer': finalResult = qty * 1.2; break;
            case 'sweets': finalResult = qty * 1.45; break;
            case 'peanuts': finalResult = qty * 1.60; break;

        }


    }
    else if (city === 'Varna') {

        switch (product) {
            case 'coffee': finalResult = qty * 0.45; break;
            case 'water': finalResult = qty * 0.7; break;
            case 'beer': finalResult = qty * 1.10; break;
            case 'sweets': finalResult = qty * 1.35; break;
            case 'peanuts': finalResult = qty * 1.55; break;

        }


    }
    else if (city === "Plovdiv") {

        switch (product) {
            case 'coffee': finalResult = qty * 0.4; break;
            case 'water': finalResult = qty * 0.7; break;
            case 'beer': finalResult = qty * 1.15; break;
            case 'sweets': finalResult = qty * 1.30; break;
            case 'peanuts': finalResult = qty * 1.50; break;

        }

    }
    console.log(finalResult);
}
smallShop(["peanuts", "varna", "10"])

