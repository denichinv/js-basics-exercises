function substitute(input) {

    let changescount = 0;

    for (let k = firstNum; k <= 8; k++) {

        for (let l = 9; l <= secondNum; l++) {

            for (let m = thirdNum; m <= 8; m++) {

                for (let n = 9; n <= forthNum; n++) {

                    if (k % 2 === 0 && l % 2 !== 0 && m % 2 === 0 && n % 2 !== 0 && (k !== m || l !== n)) {
                        console.log(`${k}${l} - ${m}${n}`);
                        changescount++
                    }
                    else if (k === m && l === n) {
                        console.log("Cannot change the same player.");
                    }

                }

            }


        }

        if (changescount === 6) {

            return;
        }
    }

}
substitute(["7"
    ,
    "6"
    ,
    "8"
    ,
    "5"])