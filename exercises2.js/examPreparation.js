function examPrep(input) {
    let AllowedBadGrades = Number(input[0]);
    
    let index = 1;
    let text = input[index];
    index++ ;
    let grade = Number(input[index]);
    index++ ;

 let grades = 0;
    let badGrades = 0;
    let combinedGrades = 0;
    let lastExercise = " ";

    while (text !== "Enough" ) {
    grades++
    combinedGrades+= grade 
    lastExercise = text
        if (grade <= 4){
         badGrades++
        }
        if (badGrades === AllowedBadGrades){
            console.log(`You need a break, ${badGrades} poor grades.`);
         break;}
        
    text = input[index];
    index++ ;
    grade = Number(input[index]);
   index++ ;

    }
    let averageGrades = combinedGrades / grades
    if (text === "Enough"){
        console.log(`Average score: ${averageGrades.toFixed(2)}`);
        console.log(`Number of problems: ${grades}`);
        console.log(`Last problem: ${lastExercise}`);
     }

    
}
examPrep(["3","Money","6","Story","4","SpringTime","5","Bus","6","Enough"])