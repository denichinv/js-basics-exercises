function vowelsSum(input) {
    let word = input[0];

    let points = 0;

    for (let index = 0; index < word.length; index++) {
        let currentSymbol = word[index];

        switch (currentSymbol) {

            case 'a': points += 1; break;
            case 'e': points += 2; break;
            case 'i': points += 3; break;
            case 'o': points += 4; break;
            case 'u': points += 5; break;
        }
        

    }
    console.log(points);

}
vowelsSum(["bamboo"]);