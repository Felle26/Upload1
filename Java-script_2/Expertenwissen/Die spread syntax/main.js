"use strict";

// für Funktionen

let meine_zahlen = [44, 51, 36, 52, 7];
const addieren= function(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
// addieren(meine_zahlen[0], meine_zahlen[1], meine_zahlen[2], meine_zahlen[3], meine_zahlen[4]

addieren(...meine_zahlen);

let kleines_array = ["Apfel", "Banane", "Kiwi"];

// let großes_array = [kleines_array[0], kleines_array[1], kleines_array[2],"Orange","Weintraube"];
let großes_array = [...kleines_array, "Orange", "Weintraube"]
console.log(großes_array)


//für Objekte
let kleines_objekt = {
    name: "ein Objekt",
    groesse : 2,
    objekt: true
}

let grosses_objekt ={
    ...kleines_objekt,
    betreff: "Spread-Syntax",
    datum: new Date()
}
console.log(grosses_objekt);

//für Instanzen von Objekten
let datumswerte = [2020, 5, 14];
// let datum = new Date(datumswerte[0],datumswerte[1], datumswerte[2]);
let datum = new Date(...datumswerte)
console.log(datum);