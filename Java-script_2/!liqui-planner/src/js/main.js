"use strict";

let Haushaltsbuch = {
    euro: 100,
    gesamt_bilanz:{
        bilanz: 0,
        einnahmen: 0,
        ausgaben:0
    },
    neuer_eintrag: {
        titel:"lohn",
        typ: "e",
        betrag: 0,
        datum: 0
    },
    eintrag_erfassen() {
        this.neuer_eintrag.titel = prompt("was war es?");
        this.neuer_eintrag.typ = prompt("e oder a");
        this.neuer_eintrag.betrag = parseInt(prompt("Der Betrag in cent:"));
        this.neuer_eintrag.datum = prompt("Wann war es , JJJJ-MM-TT");
    },
    eintrag_ausgeben() {
        return (`Titel: ${this.neuer_eintrag.titel}
    Typ: ${this.neuer_eintrag.typ}
    Betrag: ${this.neuer_eintrag.betrag / this.euro} €
    Datum ${this.neuer_eintrag.datum}`)
    },
    eintrag_mit_gesamtbilanz_verrechnen() {
        if (this.neuer_eintrag.typ === "e") {
            this.gesamt_bilanz.einnahmen += this.neuer_eintrag.betrag;
            this.gesamt_bilanz.bilanz += this.neuer_eintrag.betrag;
        } else if (this.neuer_eintrag.typ === "a") {
            this.gesamt_bilanz.ausgaben += this.neuer_eintrag.betrag;
            this.gesamt_bilanz.bilanz -= this.neuer_eintrag.betrag;
        } else {
            console.log(`${this.neuer_eintrag.typ} ist nicht definiert`)
        }
    },
    gesamt_bilanz_ausgeben() {
        console.log(`Einnahmen: ${this.gesamt_bilanz.einnahmen / this.euro}€
    Ausgaben: ${this.gesamt_bilanz.ausgaben / this.euro}€
    Bilanz: ${this.gesamt_bilanz.bilanz / this.euro}€
    Deine Bilanz ist positiv: ${this.gesamt_bilanz.bilanz >= 0}`
        );
    },
    eintrag_hinzufuegen() {
        this.eintrag_erfassen();
        console.log(this.eintrag_ausgeben(this.eintrag_erfassen.titel, this.eintrag_erfassen.typ, this.eintrag_erfassen.betrag, this.eintrag_erfassen.datum));
        this.eintrag_mit_gesamtbilanz_verrechnen(this.eintrag_erfassen.typ, this.eintrag_erfassen.betrag);
        this.gesamt_bilanz_ausgeben(this.gesamt_bilanz.einnahmen, this.gesamt_bilanz.ausgaben, this.gesamt_bilanz.bilanz);
    }
};

Haushaltsbuch.eintrag_hinzufuegen()
Haushaltsbuch.eintrag_hinzufuegen()