function tenisRanklist(input) {
    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let points = 0;
    let wins = 0;

    for (let i = 0; i < tournamentCount; i++) {
        let curTournament = input[i + 2];

        switch (curTournament) {
            case "F": 
                points += 1200; 
                break;
            case "SF": 
                points += 720; 
                break;
            case "W": 
                points += 2000;
                wins++;
                break;
        }
    }

    let totalPoints = initialPoints + points;
    let winPercent = (wins / tournamentCount) * 100;
    let averagePoints = points / tournamentCount;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winPercent.toFixed(2)}%`);
}

tenisRanklist(



"1400",

"F",

"SF",

"W",

"W",

"SF")