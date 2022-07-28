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

//Werte auslesen (Bracket Notation)

let Wert_1 = konto_1["iban"];

console.log(Wert_1);

let Wert_2 = konto_1["inhaber_1"]["geschlecht"];

console.log(Wert_2);

// Eigenschaften Setzen (Bracket Notation)

konto_2["abhebelimit"] = 2000;

console.log(konto_2)

//Werte setzen bzw. ändern

konto_1["kontostand"] = 3000;

console.log(konto_1["kontostand"]);

//Wieso Bracket Notation?
 let Eigenschaften = "iban";
 let Wert_3 =konto_1[Eigenschaften];

 console.log(Wert_3);


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


let FahrzeugMarke = "Marke";
let FahrzeugModell = "Modell";

auto[FahrzeugMarke] = "Mercedes-Benz";
auto[FahrzeugModell] = "GT Coupe V8";

auto["PS"] = 800;

console.log(`Ein ${auto["Marke"]} ${auto["Modell"]} hat über ${auto["PS"]} PS!`)