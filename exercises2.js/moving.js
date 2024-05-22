function moving(input) {
    let width = Number(input[0]);
    let height = Number(input[1]);
    let length = Number(input[2]);

    let totalVolume = width * height * length;

    index = 3;
    command = input[index];
    index++

    while (command !== "Done") {
    let boxesCount = Number(command);

    totalVolume -= boxesCount; 
     
    if( totalVolume <= 0){
        console.log(`No more free space! You need ${Math.abs(totalVolume)} Cubic meters more.`);
     break;}

   command = input[index];
   index++;

}
if (command === "Done") {
    console.log(`${totalVolume} Cubic meters left.`);
    
}
}
moving(["10","1","2","4","6","Done"])