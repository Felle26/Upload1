"use strict";

console.log(Math)
//Kreisfläche berechnen

//a = PI * r^2
let r = prompt("Gib deinen Radius an:")
let a = Math.PI * Math.pow(r, 2);

console.log(a)

//runden

console.log(Math.round(a)); //abrunden

console.log(Math.floor(a));

console.log(Math.ceil(a)); // aufrunden

//Nachkommastellen

let a_nachkommastellen = a.toFixed(3)

console.log(a_nachkommastellen);

//Strings in Zahlen umwandeln

console.log(parseFloat(a_nachkommastellen));

console.log(parseInt(a_nachkommastellen));






