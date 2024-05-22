function MaxNumber(input) {
    let index = 0;
    let currNum = input[index];
    let MaxNum = 99999999999999;
    
    while (currNum !== 'Stop'){
        let rowAsNum = Number(currNum);

        if (rowAsNum < MaxNum ) {
            MaxNum = rowAsNum;
            
        }
        index++
        currNum = input[index];

    }
    console.log(MaxNum);
}
MaxNumber(["100","99","80","70","Stop"])