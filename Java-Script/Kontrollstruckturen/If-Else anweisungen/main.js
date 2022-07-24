"use strict";
let alter = parseInt(prompt("Alter", "Dein Alter"));
const mindesalter = 18;

if(alter >= mindesalter){
    if(alter == mindesalter){
    console.log("Du bist gerade alt genug!");
    }
    else
    {
        console.log("Du bist alt genug!")};
}
else{
    console.log("Du bist zu jung!");
}
