function oscars(input) {
    let actorName = input[0];
    let points = Number(input[1]);
    let juryCount = Number(input[2]);
 
    for (let i = 3; i < input.length; i += 2) {
        let curJury = input[i];
        let curPoints = Number(input[i + 1]);
 
        points += curJury.length * curPoints / 2;
        if (points > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }
    }
    if (points <= 1250.5) {
        let neededPoints = 1250.5 - points;
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])