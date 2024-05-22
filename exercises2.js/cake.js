function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);

    let cakePieces = length * width;
    
    let index = 2 ; 
    let command = input[index]
    index++

    while (command !== "STOP") {
        let piecesTaken = Number(command)

        cakePieces -= piecesTaken
     if (cakePieces <= 0){
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);

      break;}
        command =input[index]
    index++
        
    }

    
      if(command === "STOP")  {


        console.log(`${cakePieces} pieces are left.`);
      }

    
    
}
cake(["10","2","2","4","6","STOP"])