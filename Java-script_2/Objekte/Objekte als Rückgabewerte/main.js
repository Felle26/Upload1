"use strict";
let person = {
    vorname: "Sebastian",
    nachname: "Felsberg",
    alter: 35
};

const person_verarbeiten = function(p){
    return {
        n: `${p.vorname} ${p.nachname}`,
        z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
        b: `Hallo ${p.vorname} ${p.nachname}!`
    };
};

console.log(person_verarbeiten(person));