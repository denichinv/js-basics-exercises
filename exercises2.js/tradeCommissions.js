function tradeCommissions(input) {
    let city = input[0];
    let salesVolume = Number(input[1]);
    let result = 0;

    if (salesVolume < 0 || isNaN(salesVolume)) {
        console.log('error');
    } else if (salesVolume <= 500 || salesVolume === 0) {
        switch (city) {
            case "Sofia": result = 0.05 * salesVolume; break;
            case "Varna": result = 0.045 * salesVolume; break;
            case "Plovdiv": result = 0.055 * salesVolume; break;
            default: console.log('error');
        }
    } else if (salesVolume <= 1000) {
        switch (city) {
            case "Sofia": result = 0.07 * salesVolume; break;
            case "Varna": result = 0.075 * salesVolume; break;
            case "Plovdiv": result = 0.08 * salesVolume; break;
            default: console.log('error');
        }
    } else if (salesVolume <= 10000) {
        switch (city) {
            case "Sofia": result = 0.08 * salesVolume; break;
            case "Varna": result = 0.1 * salesVolume; break;
            case "Plovdiv": result = 0.12 * salesVolume; break;
            default: console.log('error');
        }
    } else if (salesVolume > 10000) {
        switch (city) {
            case "Sofia": result = 0.12 * salesVolume; break;
            case "Varna": result = 0.13 * salesVolume; break;
            case "Plovdiv": result = 0.145 * salesVolume; break;
            default: console.log('error');
        }
    }

    if (result !== 0) {
        console.log(result.toFixed(2));
    }
}

tradeCommissions(["Plovdwiv", "-499.99"]);