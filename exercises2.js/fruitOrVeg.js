function fruitOrVeg(input) {
    let type = input[0];

    switch (type) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log('fruit');
            break;

        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log('fruit');
            break;

        default : console.log('unknown');    

    }



}
fruitOrVeg(["banana"])