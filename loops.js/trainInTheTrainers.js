function trainInTheTrainers(input) {
    
let judges = Number(input[0]);
let index = 1;
let command = input[index];
index++;

let totalGradeSum = 0;
let totalGradeCount = 0;

while (command !== 'Finish'){
    let presentationName = command;
    let presentationGradeSum = 0;
    
    for(let curJudge = 1; curJudge <= judges; curJudge++){
        let grade = Number(input[index]);
        index++;
        presentationGradeSum += grade
    }
  
    let averageGrade = presentationGradeSum / judges;
    console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
     
    totalGradeSum += averageGrade;
    totalGradeCount++;

    command = input[index];
    index++;
}

let averageGradeTotal = totalGradeSum / totalGradeCount;
console.log(`Student's final assessment is ${averageGradeTotal.toFixed(2)}.`);

}

trainInTheTrainers(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])