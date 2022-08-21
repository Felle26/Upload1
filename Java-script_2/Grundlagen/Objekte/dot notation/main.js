"use strict";
let konto_1 = {
    iban: "DE170503515300042",
    bic: "WEASEPXXHK",
    inhaber_1: {
        Vorname: "Sebastian",
        Nachname: "Felsberg",
        alter: 35,
        geschlecht: "m"
    },
    kontostand: 3500,
    aktiv: true
};

let konto_2 = {
    inhaber_2: {
        Vorname: "Nicole",
        Nachname: "Fonfara",
        alter: 33,
        geschlecht: "w"
    },
    iban: "DE170503515300998",
    bic: "WEASEPXXHK",
    kontostand: 5000,
    aktiv: true
};

console.log(`${konto_1.inhaber_1.Vorname} ${konto_1.inhaber_1.Nachname} hat ${konto_1.kontostand} € auf seinem Konto`);

// Eigenschaften Setzen (Dot Notation)
konto_1.abhebelimit = 1000;

//Werte setzen bzw. ändern

konto_1.kontostand = 3000;

let auto = {
    Marke: "Kia",
    Modell: "I30",
    kraftstoff: "Benzin",
    Kilometerstand: 16500,
    Ausstattung: {
        navigationssystem: true,
        Klimananlage: true,
        Sitzheizung: true,
        Tempomat: true,
        Panoramadach: false
    },
    Zustand: "gebraucht",
    Preis: 136000
}

auto.ps = 800;
auto.Marke = "Mercedes-Benz"
auto.Modell = "AMG GT Coupe V8"

console.log(`Ein ${auto.Marke} ${auto.Modell} hat über ${auto.ps} PS.`)