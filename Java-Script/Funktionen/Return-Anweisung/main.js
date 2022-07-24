"use strict";

let x = 15;
let y = 10;

const multiplizieren = function(a,b){
    return a * b;
} //anweisungen die nach return geschrieben ist wird nicht
console.log(multiplizieren(x,y));
let ergebnis = multiplizieren(x,y);
let ergebnis_2 = multiplizieren(ergebnis, ergebnis);
console.log(ergebnis_2)

console.log(ergebnis);