function trip (input){

    let budget = Number (input [0]);
    let season = (input [1]);
    
    let amountSpend = 0;
    
    
    if (budget >= 0 && budget <= 100){
    
       var place = 'Bulgaria';
    
        if (season === 'summer'){
    
            amountSpend = budget * 0.3;
            var type = 'Camp';
    
        }else if (season === 'winter'){
    
            amountSpend = budget * 0.7;
            var type = 'Hotel';
    
        }
    }else if (budget > 100 && budget <= 1000){
    
        var place = 'Balkans';
    
        if (season === 'summer'){
    
            amountSpend = budget * 0.4;
            var type = 'Camp';
    
        }else if (season === 'winter'){
    
            amountSpend = budget * 0.8;
           var type = 'Hotel';
    
        }
    }else if (budget > 1000){

        var place = 'Europe';
        amountSpend = budget * 0.9;
        var type = 'Hotel';
    }
    
    console.log(`Somewhere in ${place}`);
    console.log(`${type} - ${amountSpend.toFixed (2)}`);
    
    }