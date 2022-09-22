"use strict";
//Bedingung? Ausruck_1 : Ausdruck_2

// if(Bedingung){
//     Ausdruck_1
// } else {
//     Ausdruck_2
// };

let meine_zahl = 42;

// IdleDeadline(meine_zahl > 10){
//     console.log("größer als 10")
// } else {
//     console.log("kleiner als 10")
// }
console.log(meine_zahl > 10 ? "Größer als 10!": "Kleiner als 10!")

let geschlecht = 0;
console.log(`Hallo ${geschlecht ? "Frau" : "Herr"} Mustermann!`);

let fuehrerschein = true;

// const fuehrerschein_kontrolle = function(){
//     if(fuehrerschein){
//         return "darf Auto fahren!"
//     }else{
//         return"Darf nicht Auto fahren!"
//     }
// };
const fuehrerschein_kontrolle = function(){
    return fuehrerschein ? "darf Auto Fahren!" : "Darf nicht auto fahren!";
}
console.log(fuehrerschein_kontrolle());

let erdbeschleunigung = 15.2;
let panik = false;
erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung = 9.81): (panik =false, erdbeschleunigung = 9.81);

console.log(erdbeschleunigung)
console.log(panik);

let farbe = "orange";

// if(farbe === "rot"){
//     console.log("Ich mag Rot!");
// }else if(farbe ==="blau"){
//     console.log("Ich mag Blau!");
// } else if( farbe === "grün"){
//     console.log("Grün mag ich nicht so");
// } else{
//     console.log(`zur Farbe ${farbe} habe ich keine Meinung`);
// }

console.log(farbe === "rot"
  ? "Ich mag Rot!"
  : farbe === "blau"
  ? "Ich mag Blau!"
  : farbe === "grün"
  ? "Ich mag Grün!"
  : `zur Farbe ${farbe} habe ich keine Meinung`)