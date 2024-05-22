function trekkingMania(input) {

    let numberOfGroups = Number(input[0]);
    
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    
    

    for(let i = 1 ; i < input.length ; i++){
    let CurHikersCount = Number(input[i]);
   
    

    if (CurHikersCount < 6) {
        group1 += CurHikersCount;
        
        
        
    }
    else if ( CurHikersCount < 13){
        group2 += CurHikersCount;

    }
        
    else if ( CurHikersCount < 26){
        group3 += CurHikersCount;
        
    }
    else if ( CurHikersCount < 41){
        group4 += CurHikersCount;
        
    }
    else {group5 += CurHikersCount;
        
    }


    }

let totalHikers = group1 + group2 + group3 + group4 + group5;
console.log(`${((group1 / totalHikers) * 100).toFixed(2)}%`);
console.log(`${((group2 / totalHikers) * 100).toFixed(2)}%`);
console.log(`${((group3 / totalHikers) * 100).toFixed(2)}%`);
console.log(`${((group4 / totalHikers) * 100).toFixed(2)}%`);
console.log(`${((group5 / totalHikers) * 100).toFixed(2)}%`);
    
}
trekkingMania (["5",

"25",

"41",

"31",

"250",

"6"])