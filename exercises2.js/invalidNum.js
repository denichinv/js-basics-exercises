function invalidNum(input) {

    let num = Number(input[0]);

    if ( num >= 100 && num <= 200 || num === 0 ) {
        
    }
    else {console.log('invalid');}
}
invalidNum (["103"]);

// Дадено число е валидно, ако е в диапазона [100…200]
//  или е 0. Да се напише функция, която приема аргумент цяло число, 
// и печата "invalid" ако въведеното число не е валидно.