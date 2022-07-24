"use strict";

let meine_variable = "Sebastian";
let mein_objekt = {
    zahl: 5000,
    gewinn: 3000
};
console.log(meine_variable, mein_objekt);

const meine_funktion = function(v, o){
    v = "Nicole";
    o.zahl = 2000;
    console.log(v, o.zahl);
};

meine_funktion(meine_variable, mein_objekt);
console.log(meine_variable, mein_objekt.zahl);

// call-by-value(dt.: Übergabe als Wert): gilt für primitive Datentypen ( String, Number, Boolean)
// call by-reference(dt.: Übergabe als Verweis / Rückverweis): gilt für komplexere Datentypen (Objekte, Funktionen, Arrays)

let konto = { //ein Objekt
    iban: "DE1714915871234",
    bic: "WEASEPSXHG",
    inhaber: {
        vorname: "Max",
        nachname: "Mustermann",
        geschlecht: "männlich",
        alter: 24
    },
    kontostand: 3500,
    aktiv: true
};

let einzahlen = 500;
let abheben = 600;

const geld_einzahlen = function(konto, x){
 console.log(konto.kontostand += x);

};

const geld_abheben = function(konto, x){
console.log(konto.kontostand -= x);
};

geld_einzahlen(konto, einzahlen);
geld_abheben(konto, abheben);