function building(input) {
    let levels = Number(input[0]);
    let roomNum = Number(input[1]);

    for (let i = levels; i > 0; i--) {
        let currentRow = " ";
        for (let a = 0; a < roomNum; a++) {


            if (i === levels) {
                currentRow += `L${i}${a} `;
            }
            else if (i % 2 === 0) {
                currentRow += `O${i}${a} `;
            }
            else { currentRow += `A${i}${a} `; }



        }
      console.log(currentRow);

    }


  


}
building(["9",

    "5"])