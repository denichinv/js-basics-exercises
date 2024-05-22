function areaOfFigures(input){ 
    let figures = input[0];
    let area = Number(input[1])
    let recArea = Number(input[2])
     if (figures === 'square'){
        console.log(area * area)
     } else if( figures === 'rectangle') {
      console.log(area * recArea)
     } else if(figures === 'circle') {
      console.log((area*area)*Math.PI)
     } else if(figures === 'triangle') {
      console.log((area * recArea) / 2) 
     } else {
       console.log('')
     }
    }
areaOfFigures (["triangle", "4.5", "20"]);