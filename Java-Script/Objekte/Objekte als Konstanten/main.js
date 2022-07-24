"use strict";

let person = {
    name: "Max",
    Nachname: "Mustermann",
    alter: 21,
    };
person.haarfarbe = "blond";
console.log(person.haarfarbe);

const p1 = {
    name: "Hubert",
    Nachname: "pubert",
    alter: 91
};

p1.haare= "lang";
console.log(p1.haare);

// p1 = "Diese Neu Definition funktioniert nicht";


//Objekte können als constant defininert werden, nur nicht die definition geändert werden
//also es können werte zu den Objekten hinzu gefügt werden, 
//aber aus einen objekt kann kein string werden.