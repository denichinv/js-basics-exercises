function numPow (input) {

    let power = Number(input[0]);

    for (n = 0 ; n <= power ;n++ ){
        if(n % 2 === 0){
            console.log(Math.pow(2, n));

        }
   

    }
    
}
numPow(["10"]);