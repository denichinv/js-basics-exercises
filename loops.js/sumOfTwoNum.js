function sumOfTwoNum(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);
  let magicNum = Number(input[2]);

  let comb = 0;
  let isFound = false;

  for( let startNum = firstNum; startNum <= secondNum; startNum++ ){
      
    for( let endNum = firstNum; endNum <= secondNum; endNum++ ){
    comb++
   let sum = startNum + endNum
    if(sum === magicNum){
       

        console.log(`Combination N:${comb} (${startNum} + ${endNum} = ${magicNum})`);
 isFound = true

     break; }
    
    

    }
 
if(isFound){break;}
    
}

if(!isFound){
    console.log(`${comb} combinations - neither equals ${magicNum}`);
 }
}
sumOfTwoNum(["1",

"10",

"5"])