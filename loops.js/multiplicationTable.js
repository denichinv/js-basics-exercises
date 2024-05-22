function multiplicationTable (input) {
    let number = Number(input[0]);

    for( num = 1; num <= 10; num++){

    console.log(`${num} * ${number} = ${num * number}`);
    }
    
}
multiplicationTable(["5"])