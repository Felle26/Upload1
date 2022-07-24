"use strict";

let konto = { //ein Objekt
    iban: "DE1714915871234",
    bic: "WEASEPSXHG",
    inhaber: {
        vorname: "Max",
        nachname: "Mustermann",
        geschlecht: "männlich",
        alter: 24
    },
    kontostand: 3500,
    aktiv: true,
        einzahlen(e){
        this.kontostand += e;
    },
        abheben(a){
        this.kontostand -= a;
}
};
konto.einzahlen(1000);

console.log(konto.kontostand);




//Chalenge
let Person = {
    vorname: "Max",
    Nachname: "Mustermann",
    Alter: 18,
    persontest(){
        return{
            n: `${this.vorname} ${this.Nachname}`,
            z: `${this.vorname} ${this.Nachname} (${this.Alter} Jahre)`,
            b: `Hallo ${this.vorname} ${this.Nachname}!`
    };
    }
};
console.log(Person.persontest());

//const person_verarbeiten = function(p){
