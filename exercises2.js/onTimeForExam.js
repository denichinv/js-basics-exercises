function onTimeForExam(input) {
    let hourOfExam = Number(input[0]);
    let MinOfExam = Number(input[1]);
    let HourOfArrival = Number(input[2]);
    let MinOfArrival = Number(input[3]);

    let totalTimeOfExam = (hourOfExam * 60) + MinOfExam;
    let totalTimeOfArrival = (HourOfArrival * 60) + MinOfArrival;

    let totalDiffTime = Math.abs(totalTimeOfExam - totalTimeOfArrival)
    let totalDiffHour = Math.floor(totalDiffTime / 60);
    let totalDiffMin = totalDiffTime % 60;




    if (totalTimeOfArrival === totalTimeOfExam) {
        console.log('On time');
    }

    else if (totalTimeOfExam < totalTimeOfArrival) {
        console.log('Late');

        if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes after the start`);
        } else {
            if (totalDiffMin < 10) {
                console.log(`${totalDiffHour}:0${totalDiffMin} hours after the start`);
            } else {
                console.log(`${totalDiffHour}:${totalDiffMin} hours after the start`);
            }
        }
    } else {
        if(totalDiffTime <= 30 ) {
            console.log('On time');
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            console.log('Early');

            if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            if (totalDiffMin < 10) {
                console.log(`${totalDiffHour}:0${totalDiffMin} hours before the start`);
            } else {
                console.log(`${totalDiffHour}:${totalDiffMin} hours before the start`);
            }
        }
    }

}
}





onTimeForExam(["9", "30", "9", "50"]);