"use strict";


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
    aktiv: true,
    Einzahlen(){
        let betrag = parseInt(prompt(`Wieviel möchtest du einzahlen ${this.inhaber_1.Vorname}?`))
        this.kontostand += + betrag;

        console.log(`${this.inhaber_1.Vorname} du hast ${betrag}€
    auf dein Konto mit der
    Iban: ${this.iban}
    eingezahlt, 
    Dein Kontostand beträgt: ${this.kontostand} €`)
    },
    abheben(){
        let betrag = parseInt(prompt(`Wieviel möchtest du abheben ${this.inhaber_1.Vorname}?`))
        this.kontostand -= betrag;

        console.log(`${this.inhaber_1.Vorname} du hast ${betrag}€
    von deinem Konto mit der
    Iban: ${this.iban}
    abgehoben
    Dein Kontostand beträgt: ${this.kontostand} €`)
    }
};

//konto.Einzahlen();

//konto.abheben();


let person = {
    vorname: "Sebastian",
    nachname: "Felsberg",
    alter: 35,
    person_verarbeiten(){
        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            b: `Hallo ${this.vorname} ${this.nachname}!`
        };
    }
};
 console.log(person.person_verarbeiten());