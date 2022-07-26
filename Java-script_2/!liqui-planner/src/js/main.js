"use strict";

let Einnahme = 0;
let ausgaben = 0;
let bilanz = 0;
const euro = 100;

let titel,
    typ,
    betrag,
    datum;

const eintrag_erfassen = function () {
    titel = prompt("was war es?");
    typ = prompt("e oder a");
    betrag = parseInt(prompt("Der Betrag in cent:"));
    datum = prompt("Wann war es , JJJJ-MM-TT");
}

const eintrag_ausgeben = function (titel, typ, betrag, datum) {
        return (`Titel: ${titel}
    Typ: ${typ}
    Betrag: ${betrag / euro} €
    Datum ${datum}`)
};

const eintrag_mit_gesamtbilanz_verrechnen = function (typ, betrag) {
    if (typ === "e") {
        Einnahme = Einnahme + betrag;
        bilanz = bilanz + betrag;
    } else if (typ === "a") {
        ausgaben = ausgaben + betrag
        bilanz = bilanz - betrag;
    } else {
        console.log(`${typ} ist nicht definiert`)
    }
};

const gesamt_bilanz_ausgeben = function (Einnahme, ausgaben, bilanz) {
        console.log(`Einnahmen: ${Einnahme / euro}€
    Ausgaben: ${ausgaben / euro}€
    Bilanz: ${bilanz / euro}€
    Deine Bilanz ist positiv: ${bilanz >= 0}`
    );
};

const eintrag_hinzufuegen = function(){
    eintrag_erfassen();
    console.log(eintrag_ausgeben(titel, typ, betrag, datum));
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    gesamt_bilanz_ausgeben(Einnahme, ausgaben, bilanz);
};

eintrag_hinzufuegen();
eintrag_hinzufuegen();
eintrag_hinzufuegen();