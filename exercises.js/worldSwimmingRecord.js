function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeFor1mInSec = Number(input[2]);

     let additionalTime = Math.floor(distanceInM / 15) * 12.5 ; 
    let totalTime = (distanceInM * timeFor1mInSec) + additionalTime;

    if (recordInSec < totalTime) {
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`);

  
    } else { console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
        
    }


}
worldSwimmingRecord (["55555.67","3017","5.03"]);