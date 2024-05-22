function graduation(input) {
   let name = input[0] ;
   let grade = 1;
   let CurrGrade = Number(input[grade]);
   let gradeSum = 0;
   let excluded = 0; 

   while (grade <= 12){
    
CurrGrade = Number(input[grade]);
gradeSum += CurrGrade
grade++ 
    if(CurrGrade < 4 ){
        excluded++
    }
    if(excluded > 1){
        console.log(`${name} has been excluded at ${grade - 2} grade`);
    return;}
    
    
    

   }
  
   console.log(`${name} graduated. Average grade: ${(gradeSum / 12).toFixed(2)}`);
   
}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])