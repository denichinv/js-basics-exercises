function sumOfNum(input) {

    let sum = input[0];
    curNum = 0;

    for(i = 0; i < sum.length; i++){
        curNum += Number(sum[i])

        
    }
   
    console.log(`The sum of the digits is:${curNum}`);
}
sumOfNum(["1234"])