    function fitnessCentre(input) {

        let numberOfVisitors = Number(input[0]);
        let chestCounter = 0;
        let backCounter = 0;
        let legsCounter = 0;
        let absCounter = 0;
        let proteinShakeCounter = 0;
        let proteinBarCounter = 0;

        let trained = 0;
        let visited = 0;




        for (let index = 1; index <= numberOfVisitors; index++) {
            let curStatus = input[index];

            switch (curStatus) {
                case "Chest":
                    chestCounter++
                    trained++
                    break;
            
                case "Back":
                    backCounter++
                    trained++
                    break;

                case "Abs": 
                    absCounter++
                    trained++
                    break;
                
                case "Legs":
                    legsCounter++
                    trained++
                    break;
                
                case "Protein shake":
                    proteinShakeCounter++
                    visited++
                    break;

                case "Protein bar":
                    proteinBarCounter++
                    visited++
                    break;
            }

            
            
        }
        let percentTrained = (trained / numberOfVisitors) * 100;
        let percentVisited = (visited /numberOfVisitors) * 100;
        
        
    console.log(`${backCounter} - back`);

    console.log(`${chestCounter} - chest`);

    console.log(`${legsCounter} - legs`);

    console.log(`${absCounter} - abs`);

    console.log(`${proteinShakeCounter} - protein shake`);


    console.log(`${proteinBarCounter} - protein bar`);

    console.log(`${percentTrained.toFixed(2)}% - work out`);
    console.log( `${percentVisited.toFixed(2)}% - protein`);
        
    }
fitnessCentre(["7"
,
"Chest"
,
"Back"
,
"Legs"
,
"Legs"
,
"Abs"
,
"Protein shake"
,
"Protein bar"])