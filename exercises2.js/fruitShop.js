function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let qty = Number(input[2]);

    let finalResult = 0;

    if (day === 'Saturday' || day === 'Sunday') {
        switch (product) {
            case "banana": finalResult = qty * 2.7; break;
            case "apple": finalResult = qty * 1.25; break;
            case "orange": finalResult = qty * 0.90; break;
            case "grapefruit": finalResult = qty * 1.6; break;
            case "kiwi": finalResult = qty * 3; break;
            case "pineapple": finalResult = qty * 5.6; break;
            case "grapes": finalResult = qty * 4.2; break;
            default: console.log('error'); break;
        }
    } else if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (product) {
            case "banana": finalResult = qty * 2.5; break;
            case "apple": finalResult = qty * 1.20; break;
            case "orange": finalResult = qty * 0.85; break;
            case "grapefruit": finalResult = qty * 1.45; break;
            case "kiwi": finalResult = qty * 2.7; break;
            case "pineapple": finalResult = qty * 5.5; break;
            case "grapes": finalResult = qty * 3.85; break;
            default: console.log('error'); break;
        }
    } else {
        console.log('error');
    }

    if (finalResult !== 0) {
        console.log(finalResult.toFixed(2));
    }
}



fruitShop(["apple", "work", "2"]);