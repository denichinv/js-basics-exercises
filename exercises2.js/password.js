function password(input) {
    let username = input[0];
    let pass = input[1];
    index = 2;
    currpass = input[index];


    while(currpass !== pass){
        currpass = input[index]
        index++
    }

    console.log(`Welcome ${username}!`);

    
    
}
password(["Nakov",

"1234",

"Pass",

"1324",

"1234"])