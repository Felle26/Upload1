"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];

console.log(personen[1]);

personen[1] = "Pia";

console.log(personen);

// push(): Fügt ein Element am Ende des Arrays hinzu ( und gibt die neue Größe des Arrays zurück)
// destruktiv

personen.push("Max");

console.log(personen);

//pop(): Entfernt das letze Elemebt aus den Array ( und gibt es zurück)
// destruktiv

console.log(personen.pop());

console.log(personen);

//unshift() Fügt ein Element am Anfang des Arrays hinzu (- und gibt die neue Größe des Arrays zurück)
//destruktiv

console.log(personen.unshift("Max"));
console.log(personen);

//shift(): Entfernt das erste Element aus dem Array ( und gibt es zurück)
//destruktiv

console.log(personen.shift());
console.log(personen);

