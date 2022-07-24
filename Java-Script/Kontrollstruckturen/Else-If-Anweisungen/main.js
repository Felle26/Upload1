"use strict";

let alter = parseInt(prompt("Alter", "Dein Alter"));
const mindesalter = 18;

/*
if(Bedingung){
    Code der ausgeführt wird, wenn die Bedingung erfüllt (true) ist
} else if(Bedingung2){
    Code der ausgeführt wird, wenn die Bedingung2 erfüllt (true) ist
} else if(Bedingung3){
    Code der ausgeführt wird, wenn die Bedingung3 erfüllt (true) ist
}
else{
    Code der ausgeführt wir wenn keine der bedingungen erfüllt ist
}
*/

/*if(alter >= mindesalter){
    if(alter == mindesalter){
    console.log("Du bist gerade alt genug!");               funktioniert, aber schlechter verständlich
    }
    else
    {
        console.log("Du bist alt genug!")};
}
else{
    console.log("Du bist zu jung!");
}*/


if (alter > mindesalter){
    console.log("Du bist älter!")
} else if(alter == mindesalter){
    console.log("du bist gleich alt!")
}else if(alter == 17){
    console.log("ich drück mal ein auge zu")
}else{
    console.log("Du bist zu jung")
}