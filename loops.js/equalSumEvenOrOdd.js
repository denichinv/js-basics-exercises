function equalSumEvenOrOdd(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let curNumStr = curNum.toString();

        let oddPossitonSum = 0;
        let evenPositionSum = 0;

        for (i = 0; i < curNumStr.length; i++) {
            let digit = Number(curNumStr[i]);

            if (i % 2 === 0) {
                evenPositionSum += digit;

            } else {
                oddPossitonSum += digit;
            }


        }

        if (evenPositionSum === oddPossitonSum) {
            result += curNumStr + ' ';
        }

    }
    console.log(result);
}
equalSumEvenOrOdd(["100000",

    "100050"])