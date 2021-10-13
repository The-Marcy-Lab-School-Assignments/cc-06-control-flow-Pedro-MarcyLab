//1
function sumOfThreeAndFive(){
    sum = 0
    for(let i = 1; i < 1000; i++){
        if(i % 3 === 0 || i % 5 ===0){
            sum += i;
        }
        
    }
    return sum

   
  
}

function greaterNum(x,y){
  if(x > y){
      return x
  } 
  else if (y > x){
     return y
    } else{
      return "both integers are equal"
  }
}
console.log(greaterNum(6,9))

function oddAndEvenInFifteen(){
  
}

function sortThreeNums(){
  
}



 console.log(sumOfThreeAndFive())


