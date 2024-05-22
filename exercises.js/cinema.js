function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let income = 0;

    switch (type){
        case "Premiere": income = 12 * cols * rows; break;
        case "Normal": income = 7.50 * cols * rows; break;
        case "Discount":income = 5 * cols * rows; break;

    }
    console.log(income.toFixed(2));
    
    
}
cinema(["Premiere","10","12"])