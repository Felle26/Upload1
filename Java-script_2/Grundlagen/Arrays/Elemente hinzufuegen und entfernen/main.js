"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];
personen[1] = "Pia";
console.log(personen[1]);
console.log(personen);

//push(): Fügt ein Element am Ende des Arrays hinzu( und gibt die neue Größe des Arrays zurück)
//destruktiv

personen.push("Max");
console.log(personen);

//pop(); Entfernt das letzte Element aus dem Array (und gibt es zurück)
// destruktiv

personen.pop();
console.log(personen);

//unshift(): Fügt ein Element am Anfang des Arrays hinzu (und gibt die neue Größe des Arrays zurück)
//destruktiv

personen.unshift("Hubert");
console.log(personen);

//shift(): entfernt das erste Element aus dem Array /und gibt es zurück)
//destruktiv

personen.shift();
console.log(personen)