"use strict";

//Bilanz

let Einnahme = 0;
let ausgaben = 0;
let bilanz = 0;


//Eintrag 1

let titel_1 = prompt("was war es?");
let typ_1 = prompt("e oder a");
let betrag_1 = parseInt(prompt("Der Betrag in cent:"));
let datum_1= prompt("Wann war es , JJJJ-MM-TT");
const euro = 100;

// if anweisung

if(typ_1 === "e"){
    Einnahme = Einnahme + betrag_1
}else if(typ_1 === "a"){
    ausgaben = ausgaben + betrag_1
} else {
    console.log(`${typ_1} ist nicht definiert`)
};

console.log(`du hast ${titel_1}
dies war eine ${typ_1}
es kam ${betrag_1 /euro} € und
du hast es am ${datum_1} getätigt`);


//Eintrag 2

let titel_2 = prompt("was war es?");
let typ_2 = prompt("e oder a");
let betrag_2 = parseInt(prompt("Der Betrag in cent:"));
let datum_2 = prompt("Wann war es , JJJJ-MM-TT")

// if anweisung

if (typ_2 === "e") {
    Einnahme = Einnahme + betrag_2
} else if (typ_2 === "a") {
    ausgaben = ausgaben + betrag_2
} else {
    console.log(`${typ_2} ist nicht definiert`)
};

console.log(`du hast ${titel_2}
dies war eine ${typ_2}
es kam ${betrag_2 /euro} € und
du hast es am ${datum_2} getätigt`);

//Log der Einnahmen und Ausgaben in ct

console.log(Einnahme);
console.log(ausgaben);

//ausrechnen der Bilanz und loggen der Bilanz

bilanz = Einnahme - ausgaben;

console.log(`Dein Kontostand beträgt ${bilanz / euro} €`);

let positiv  = bilanz >=0;

console.log(`deine Bilanz ist Positiv: ${positiv}`);