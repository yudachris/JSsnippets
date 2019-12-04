/*99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.*/

function beer(){

    for(i=99; i>-1; i--){
    
    if(i === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.")
    }
    else{
        var x = i-1;
        if(x === 0){
            x = "no";
        }
        console.log(i+" bottles of beer on the wall, "+i+" bottles of beer. \nTake one down and pass it around, "+ x +" bottles of beer on the wall.")
    }
    }

}

beer();