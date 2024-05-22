function NumDivisible (input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;

    for (let n = num1; n <= num2 ; n++) {
        if(n % 9 === 0){
         sum += n ;
        }
     }
     console.log(`The sum: ${sum}`);

    for (let n = num1; n <= num2 ; n++) {
       if(n % 9 === 0){
        console.log(n);
       }
    }

    
}
NumDivisible (["100", "200"])