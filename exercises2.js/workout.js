function workout(input) {
    let days = Number(input[0]);
    let totalKilometers = Number(input[1]);
    let requiredKilometers = 1000;
    let kilometersCounter = totalKilometers;

    for (let i = 2; i < input.length; i++) {
        let percentIncrease = Number(input[i]);
        let increaseAmount = (percentIncrease / 100) * totalKilometers;
        totalKilometers += increaseAmount;
        kilometersCounter += totalKilometers;
    }

    if (kilometersCounter >= requiredKilometers) {
        console.log(`You've done a great job running ${Math.ceil(kilometersCounter - requiredKilometers)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(requiredKilometers - kilometersCounter)} more kilometers`);
    }
}

workout(["5"
,
"30"
,
"10"
,
"15"
,
"20"
,
"5"
,
"12"])