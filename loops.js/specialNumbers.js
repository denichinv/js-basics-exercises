function specialNumbers(input){

    let n = Number(input[0]);
    

    let result = "";

    for (let startNum =1111; startNum <= 9999 ; startNum++) {
        let startNumAsString = startNum.toString()
        let isSpecial = true;
        for(index = 0; index < startNumAsString.length; index++){
            let currentDigit = Number(startNumAsString[index]);

          if(n % currentDigit !== 0){
            isSpecial = false
            break;
          }

        }
        if (isSpecial){
            result += `${startNumAsString} `
        }
    }
console.log(result);

}
specialNumbers(["3"])