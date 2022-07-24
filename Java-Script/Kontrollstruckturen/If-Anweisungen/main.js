"use strict";
let betrag1 = 15;
let ausgabe = "Ausgabe";
let betrag2 = 1;

let alter = parseInt(prompt("Alter", "Dein Alter"));
const mindesalter = 18


if (alter >= mindesalter){
    console.log("Du darfst das Spiel kaufen!")
}
else{
    console.log("Du bist zu jung um dir das Spiel zu kaufen")
}


if (betrag1 <= betrag2) 
    {
        console.log("Stimmt")
    }

if (ausgabe == "Ausgabe")
    {
        betrag1 = betrag1*-1
        console.log(betrag1)
    }