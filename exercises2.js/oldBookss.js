function oldBooks(input) {
    let bookNeeded = input[0];
    let index = 1;
    let currBook = input[index]
    index++
    let booksChecked = 0; 
   
    while (currBook !== "No More Books"){
         

        if (currBook === bookNeeded){
            console.log(`You checked ${booksChecked } books and found it.`);
         break;}
        booksChecked++

        
        currBook = input[index];
        index++

    }
     if(currBook === "No More Books"){
        console.log('The book you search is not here!');
        console.log(`You checked ${booksChecked} books.`);
     }
    
    
}
oldBooks (["Troy",

"Stronger",

"Life Style",

"Troy"])