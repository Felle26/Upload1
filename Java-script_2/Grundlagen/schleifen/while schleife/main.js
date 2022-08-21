"use strict";

// while (bedingung){
//     // ... Anweisung
// }
let x = 0
while (x <= 15){
    console.log(`While: ${x}`)
    x++ // x+=1
};

//endlos schleifen bringen Browser zum absturz

// let y = 0;

// while (y >=0)
// {
//     console.log("Test!")
// };

let z = 0;

while(z <10){
    z++;
    if (z==5){
        continue;
    } else if (z == 7){
       break;
    };
    console.log(z);
};