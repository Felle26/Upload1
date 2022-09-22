"use strict";
// while schleife:
// let x = 0 <-- Zählvariable
// while (x <= 15) { <--Bedingung
//     console.log(`While: ${x}`) <-- Code
//     x++ // x+=1
// };

// for(zählvariable; bedingung; anweisung für die Variable){
//     Code
// };

for (let i = 0; i<15; i++){
    if(i == 3){
        continue;
    } else if (i ==9){
        break;
    }
    console.log(i);
};

console.log("Die for schleife ist beendet")