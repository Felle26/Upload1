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

const kontostand_ausgeben = function(x) {
    console.log(`${x.inhaber.vorname} ${x.inhaber.nachname} hat ${x.kontostand}€ auf dem Konto.`)
};

kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);

let ausgaben_1 = 300;
let ausgaben_2 = 500;
const abheben = function(x,y) {
    console.log(`${x.inhaber.vorname} ${x.inhaber.nachname} hatte ${x.kontostand}€auf dem Konto
    die ausgaben belaufen sich auf: ${y}€
    der neue Kontostand beträgt: ${x.kontostand - y}€`)
};

abheben(konto_1,ausgaben_1);
abheben(konto_2,ausgaben_2);