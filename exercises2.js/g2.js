function solve(input) {

    let locations = Number(input[0]);
    let index = 1;
    
    for (let l = 1; l < locations; l++) {
        let expectedAvrgYield = Number(input[index++]);
        let days = Number(input[index++]);
        let yield = 0;
        for (let d = 0; d < days; d++) {
            let currentYield = Number(input[index++]);
            yield += currentYield;
        }
        let avrgPerLocation = (yield / days);
        let diff = Math.abs(avrgPerLocation - expectedAvrgYield);
        if (avrgPerLocation < expectedAvrgYield) {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        } else {
            console.log(`Good job! Average gold per day: ${avrgPerLocation.toFixed(2)}.`);
        }
    }
}
(["2"
,
"10"
,
"3"
,
"10"
,
"10"
,
"11"
,
"20"
,
"2"
,
"20"
,
"10"])