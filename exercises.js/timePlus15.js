function timePlus15 (input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime = hour * 60 + minutes + 15 ;

    let newHour = Math.trunc(totalTime / 60);
    let newMins = totalTime % 60 ;

    if (newHour === 24)
{
    newHour = 0;

}
if (newMins < 10) {
    console.log(`${newHour}:0${newMins}`);
    
} else { 
    console.log(`${newHour}:${newMins}`);
    
}


    
}
timePlus15((["1","46"]))