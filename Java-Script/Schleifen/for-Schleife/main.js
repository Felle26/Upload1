"use strict";

let x = 0; // Zähvariable

while( x<5) //bedingung
{
    
    console.log(x);
    x++;
}

console.log("==============================================")
//for ( Zählvariable; Bedingung; Anweisung){
//    Code
//}

for (let i = 0; i < 5; i++) {
    if (i == 3){
        continue;
    } else if(i == 4){
        break;
    }
    console.log(i);
}

console.log("for Schleife beendet!");


//vorsicht vor Endlosschleifen
//for (let j = 0; j>=0; j++){
    //...
//}