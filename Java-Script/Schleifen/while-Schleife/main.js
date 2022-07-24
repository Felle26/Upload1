"use strict";

//while (Bedingung){
    //Anweisung
//};


let i = 0;
while (i < 5)
{
    i++;
    console.log(`While: ${i}`);
    //i++;
}

// i = 1    0 console.log  
// i = 2    1 wenn i++
// i = 3    2 nach
// i = 4    3 dem
// i = 5    4 Console-log statt findet

/*let y = 0;
// diese Schleife wird endlos ausgeführt!!
while (y < 5) {
     
    console.log("Test"); 
}*/


let z = 0;

while( z <10)
{
    z++;
    if ( z == 5 ) 
    {
    continue;
    } 
    else if ( z == 7 )
    {
        break;
    }
    console.log(z);
}

console.log("Abbruch");