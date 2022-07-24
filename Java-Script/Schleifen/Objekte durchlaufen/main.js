
"use strict";

let Mein_Objekt = {
    name: "Mustermann",
    vorname: "Max",
    Alter: 35
};
// so bitte nicht !
//for (let e in Mein_Objekt){
//    console.log(Mein_Objekt[e]);
//}

let paare = Object.entries(Mein_Objekt);
console.log(paare);

for (let paar of paare){
    console.log(paar);
    for ( let e of paar){
        console.log(e);
    }
}

console.log("==========================");

let eigenschaften = Object.keys(Mein_Objekt); // gibt die Eigenschaften zurück
console.log(eigenschaften);

for (let e of Object.values(Mein_Objekt)){
    console.log(e);
}
for (let e of Object.keys(Mein_Objekt)){
    console.log(e);
}