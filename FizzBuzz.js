//print number from 1 to 100 ok 
//for every number divisible by 3 say fizz instead of the number
//for every number divisible by 5 say buzz instead of the number
//for every number divisible by 3 and 5, say fizzbuzz instead of the number


function fizzBuzz(someNumber){
    
    var output = "";
  
  if(someNumber%3 == 0 && someNumber%5 == 0){
     output = "FizzBuzz";
     return output;
  }
  else if(someNumber%3 == 0){
    output = "Fizz";
    return output;
  }
  else if(someNumber%5 == 0){
    output = "Buzz";
    return output;
  }
  else{
    return someNumber;
  }

}

var i = 1;

while(i < 101){
  var result = fizzBuzz(i);
  console.log(result);
  i++;
}