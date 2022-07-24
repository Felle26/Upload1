"use strict";

let konto_1 = { //ein Objekt
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


let konto_2 = {
    iban: "DE170556151535",
    bic: "WEASEPSXHG",
    inhaber: {
        vorname: "Maria",
        nachname: "Musterfrau",
        geschlecht: "weiblich",
        alter: 22
    },
    kontostand: 2400,
    aktiv: true
};

// Werte auslesen (dot-notation)

let wert_1 = konto_1.iban;

let wert_2 = konto_2.bic;

let wert_3 = konto_1.inhaber.vorname;

console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat ${konto_1.kontostand}€ auf seinem Konto`);

//Eigenschaften setzen

konto_1.abhebelimit = 1000;
konto_1.inhaber.zu_jung = false;


//Werte setzen bzw veränder

konto_1.kontostand = 2000;

// console.log(konto_1);

let fahrzeug = {
    marke: "Skoda",
    modell: "fabia",
    kraftstoffart: "Benzin",
    kilometerstand: 26154,
    ausstattung:{
        Navi: true,
        klima: true,
        sitzheizung: true,
        tempomat: true,
        panoramadach: false
    },
    zustand: "gebraucht",
    preis: 15700
};

fahrzeug.ps = 150;
fahrzeug.modell = "Octavia";

console.log(`Ein ${fahrzeug.marke} ${fahrzeug.modell} hat ${fahrzeug.ps}PS.`);