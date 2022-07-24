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

// Werte auslesen (bracket-notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);

let wert_2 = konto_1["inhaber"]["geschlecht"];
console.log(wert_2);

//Eigenschaften setzen (bracket-notation)

konto_2["abhebelimit"] = 1000;
console.log(konto_2);

//Werte setzen bzw veränder(bracket-notation)

konto_1["kontostand"] = 2000;
console.log(konto_1["kontostand"]);

// Warum sollten wir die Bracket notation jemals verwenden?
let eigenschaft = "iban";
let wert_3 = konto_1[eigenschaft];

console.log(wert_3);
//schnappt euch Fahrzeug-Objekt aus letzter Lektion
// fügt Eigenschaft "PS" hinzu
// verändert das Modell des Fahrzeuges
// gebt Template-String "Ein ... ... hat ...PS." aus
//(einer der Werte soll über einen String in einer Variable ausgelesen werden)

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

fahrzeug["PS"] = 150;
fahrzeug["modell"] = "Octavia Kombi";

let z1 = "marke";
let mark = fahrzeug[z1]

console.log(`Ein ${fahrzeug[z1]} ${fahrzeug["modell"]} hat ${fahrzeug["PS"]}PS.`);