/*

the fibonacci is a series of number where the next number is the sum of 2 preceeding numbers. for example 0,1,1,2,3,5,8,13,21,34.
create a function that output an array which contains the series depending on user input of how many numbers should be inside.

*/
function fibonacciGenerator(n){
    
    var series = []

    for(var i = 0; i<n ; i++){
        
        if(series.length === 0 || series.length === 1){
            series.push(i);
        }
        else if(series.length > 1){
            var toPush = series[i-1] + series[i-2];
            series.push(toPush);
        }   
    }
    
    return series;
}

var x = prompt("input how many numbers you want to line up.");
var result = fibonacciGenerator(x);

console.log(result);
