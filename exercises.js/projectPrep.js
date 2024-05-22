function projectPrep(input){
    let name = (input[0]);
    let numberOfProjects = Number(input[1]);

    console.log(`The architect ${name} will need ${numberOfProjects * 3} hours to complete ${numberOfProjects} project/s.`);

}
projectPrep(["George ", "4 "])