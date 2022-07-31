"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Marcel",
    "Mia"
];

// includes(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt true zurück, wenn das
// Element gefunden wurde, bzw. false wenn es nicht gefunden wurde
// syntax: includes(Suchwert[, Startindex])
// nicht destruktiv

console.log(personen.includes("Mia",0)); //true, da ab startwert 0 gesucht wird
console.log(personen.includes("Marcel", 2)); //false, da erst ab 2 Index gesucht wirdt (Anna).
console.log(personen.includes("Hubert")); //false --- Hubert ist Nicht vorhanden

// indexOf(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt den Index der ersten Fundstelle
// zurück, wenn der Wert gefunden wurde, oder -1 wnn der wert nit in Array gefunden wurde
// Syntax: indexOf(Suchwert[, Startindex])
// nicht destruktiv

console.log(personen.indexOf("Sebastian")); //0
console.log(personen.indexOf("Sebastian",2)); //-1, da nach Index gesucht wird
console.log(personen.indexOf("Mia")); //4
console.log(personen.indexOf("Hubert")); // -1
console.log(personen.indexOf("Marcel"));

// lastIndexOf(): Durchsucht das Array ab einem Startindex rückwärts nach einem Wert und gibt dem Index der ersten Fundstelle
// zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
// Syntax: lastIndexOf(Suchwert[, Startindex])
// nicht destruktiv


console.log(personen.lastIndexOf("Mia")); // gibt den Wert 4 zurück
console.log(personen.lastIndexOf("Mia", 3)); // gibt den Wert -1 zurück da erst ab startindex 3 gesucht wird
console.log(personen.lastIndexOf("Hubert")); // -1
console.log(personen.lastIndexOf("Sebastian")); // 0
console.log(personen.lastIndexOf("Marcel")); // 4