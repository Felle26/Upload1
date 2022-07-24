"use strict";

let titel_1 = prompt("was war es?");
let typ_1 = prompt("Einnahme oder ausgabe?")
let betrag_1 = parseInt(prompt("Der Betrag in cent:"));
let datum_1= prompt("Wann war es , JJJJ-MM-TT")

console.log(`du hast ${titel_1}
dies war eine ${typ_1}
es kam ${betrag_1} und
du hast es am ${datum_1} getätigt`)

let titel_2 = prompt("was war es?");
let typ_2 = prompt("Einnahme oder ausgabe?")
let betrag_2 = parseInt(prompt("Der Betrag in cent:"));
let datum_2 = prompt("Wann war es , JJJJ-MM-TT")

console.log(`du hast ${titel_2}
dies war eine ${typ_2}
es kam ${betrag_2} ct und
du hast es am ${datum_2} getätigt`)


//Gesamt Bilanz
let Einnahme;
let ausgaben;
let bilanz;
bilanz = betrag_1 + betrag_2;

console.log(bilanz);

let positiv  = bilanz >=0;

console.log(`deine Bilanz ist ${positiv}`)