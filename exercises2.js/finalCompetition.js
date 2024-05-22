function finalCompetition(input) {

    let totalDancers = Number(input[0]);
    let totalJudgePoints = Number(input[1]);
    let season = input[2];
    let location = input[3];

    let moneyWon = totalDancers * totalJudgePoints;
    let expences = 0;
    let moneyForCharity  = 0;
    let moneyPerDancer = 0;

    if (location === "Bulgaria"){


        switch (season) {
            case "winter":
                expences = moneyWon * 0.08;
                moneyWon -= expences;
                moneyForCharity = moneyWon * 0.75;
                moneyPerDancer = (moneyWon - moneyForCharity) / totalDancers;
                
                break;
        
            case "summer":
                expences = moneyWon * 0.05;
                moneyWon -= expences;
                moneyForCharity = moneyWon * 0.75;
                moneyPerDancer = (moneyWon - moneyForCharity) / totalDancers;
                break;
        }


    }else if (location === "Abroad"){

        moneyWon = moneyWon + (moneyWon * 0.5)

        switch (season) {
            case "winter":
                expences = moneyWon * 0.15;
                moneyWon -= expences;
                moneyForCharity = moneyWon * 0.75;
                moneyPerDancer = (moneyWon - moneyForCharity) / totalDancers;
                
                break;
        
            case "summer":
                expences = moneyWon * 0.1;
                moneyWon -= expences;
                moneyForCharity = moneyWon * 0.75;
                moneyPerDancer = (moneyWon - moneyForCharity) / totalDancers;
                break;
        }
    
    }
    console.log(`Charity - ${moneyForCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
finalCompetition(["25"
,
"98"
,
"winter"
,
"Bulgaria"])