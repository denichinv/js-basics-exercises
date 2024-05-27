


let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = true;

let age = 19; 


if(isEarly && age > 18){
    raceNumber += 1000;
    console.log(`Your race starts at 9:30 am and you will race with NUMBER:${raceNumber}`)
}
else if (!isEarly && age > 18){
    console.log(`Your race starts at 11:00 am and you will race with NUMBER:${raceNumber}`)
}
else if (age < 18 ){
    console.log(`Your race starts at 12:30 am and you will race with NUMBER:${raceNumber}`)
}

