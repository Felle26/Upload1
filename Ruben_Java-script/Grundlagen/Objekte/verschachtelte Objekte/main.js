"use strict";

// let iban = "DE170503515300042";
// let bic = "WEASEPXXHK";
// let kontostand = 3500;
// let aktiv = true;

//Konto Inhaber


//Konten
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

console.log(konto_1);

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

console.log(konto_2);

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
    Preis: 15000
}
console.log(auto);