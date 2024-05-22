function sumNumbers(input) {
    let goalNum = Number(input[0]);
    let sum = 0;
    let index = 1;
    let currNumber = Number(input[index])


    while (sum < goalNum) {
        sum += currNumber
        index++
        currNumber = Number(input[index])
    }
    console.log(sum);



}
sumNumbers(["100", "10", "20", "30", "40"])