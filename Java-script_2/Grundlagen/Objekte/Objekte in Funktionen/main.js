"use strict";

let konto_1 = {
    iban: "DE170503515300042",
    bic: "WEASEPXXHK",
    inhaber: {
        Vorname: "Sebastian",
        Nachname: "Felsberg",
        alter: 35,
        geschlecht: "m"
    },
    kontostand: 3500,
    aktiv: true
};

let konto_2 = {
    inhaber: {
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

const kontostandAusgeben = function(x){
    console.log(`${x.inhaber.Vorname} ${x.inhaber.Nachname} hat ${x.kontostand} € auf dem Konto`);
};

kontostandAusgeben(konto_1);
kontostandAusgeben(konto_2);

const einzahlung = function(konto){
    let betrag = parseInt(prompt(`Wieviel möchtest zu einzahlen ${konto.inhaber.Vorname}?`));
    konto.kontostand = konto.kontostand + betrag;

    console.log(konto["kontostand"]);

};

einzahlung(konto_1);
einzahlung(konto_2);

const abheben = function (konto) {
    let betrag = parseInt(prompt(`Wieviel möchtest zu abheben ${konto.inhaber.Vorname}?`));
    if(betrag > 500){
        console.log("Der Betrag überschreitet 500€, bitte gib einen geringeren Betrag an!");
        abheben(konto);
    }else{
    konto.kontostand = konto.kontostand - betrag;

    console.log(konto["kontostand"]);
    }
};

abheben(konto_1);
abheben(konto_2);