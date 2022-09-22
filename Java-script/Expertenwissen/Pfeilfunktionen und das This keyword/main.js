"use strict";

// this referenziert das Objekt in dessen Kontext es aufgerufen wird
let person_1 = {
    Vorname: "Anna",
    Nachname: "Musterfrau",
    Alter: 26,

    meine_methode() {
        console.log(this);
    }
    
};
// durch Nutzung vin this innerhalb einer Funktion "fällt das this aus dem Kontext"
//in Strict-Mode ist es undefiened
// ohne Strict-Mode bezieht es sich auf das window-Objekt
person_1.meine_methode();

let person_2 = {
    Vorname: "Anna",
    Nachname: "Musterfrau",
    Alter: 26,
    meine_methode() {const meine_funktion = function(){console.log(this);}
    meine_funktion();
    }
}

person_2.meine_methode();

// Pfeil-Funktionen erhalten den Kontext zum Objekt in dem sie erstellt werden
let person_3 = {
  Vorname: "Anna",
  Nachname: "Musterfrau",
  Alter: 26,
  meine_methode() {
    const meine_funktion = () => console.log(this);
    meine_funktion();
  },
};

person_3.meine_methode()