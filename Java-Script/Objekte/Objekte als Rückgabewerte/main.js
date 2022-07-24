"use strict";

let Person = {
    vorname: "Max",
    Nachname: "Mustermann",
    Alter: 18

};

const person_verarbeiten = function(p){

    return{
        n: `${p.vorname} ${p.Nachname}`,
        z: `${p.vorname} ${p.Nachname} (${p.Alter} Jahre)`,
        b: `Hallo ${p.vorname} ${p.Nachname}!`
    };
};



console.log(person_verarbeiten(Person));