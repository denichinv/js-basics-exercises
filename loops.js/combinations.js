function combinations(input) {

let number = Number(input[0]);
let validComb = 0;

for (let a = 0; a <= number; a++) {

    for(let b = 0;b <= number; b++){
    
        for( let c = 0; c <= number ; c++){
          if( a+ b + c === number){

          validComb++
           

          }
            

        }


    }

}

console.log(validComb);
    
}
combinations(["25"])