function lunchBreak (input) {
    let  seriesName = input[0];
    let  episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let timeForLunch = breakLength * 1/8 ;
    let timeForRelax = breakLength * 1/4 ; 
    let remainingTime = breakLength - timeForLunch - timeForRelax;

    if (remainingTime < episodeLength) {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeLength - remainingTime)} more minutes.`);
        
    } else { console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(remainingTime - episodeLength)} minutes free time.`);
        
    }

    
}   
lunchBreak (["Game of Thrones","60","96"])