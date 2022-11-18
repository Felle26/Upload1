"use strict";

let meine_Variable = "Sebastian";

let mein_Objekt = {
    zahl: 5000
};

const meine_funktion = function(v, o){
    v="Dennis";
    o.zahl = 2500;
};

meine_funktion(meine_Variable, mein_Objekt);

console.log(meine_Variable);
console.log(mein_Objekt.zahl);

// call-by-value (dt.: Übergabe als Wert): gilt für Primitive Datentypen (Strings, Numbers, Bools)
// call-by-reference (dt.: Übergabe als Verweis/Rückverweis) gilt für komplexere Datentypen(Objekte, Funktionen, Arrays)

let konto = {
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

const Einzahlen = function(konto){
    let betrag = parseInt(prompt(`Wieviel möchtest du einzahlen ${konto.inhaber_1.Vorname}?`))
    konto.kontostand = konto.kontostand + betrag;

    console.log(`${konto.inhaber_1.Vorname} du hast ${betrag}€
    auf dein Konto mit der
    Iban: ${konto.iban}
    eingezahlt, 
    Dein Kontostand beträgt: ${konto.kontostand} €`)
};

const abheben = function (konto) {
    let betrag = parseInt(prompt(`Wieviel möchtest du abheben ${konto.inhaber_1.Vorname}?`))
    konto.kontostand = konto.kontostand - betrag;

    console.log(`${konto.inhaber_1.Vorname} du hast ${betrag}€
    von deinem Konto mit der
    Iban: ${konto.iban}
    abgehoben
    Dein Kontostand beträgt: ${konto.kontostand} €`)
};

Einzahlen(konto);

abheben(konto);