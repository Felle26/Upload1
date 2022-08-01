"use strict";
let mein_objekt = {
    name: "Mustermann",
    vorname: "Max",
    alter: 26
}
//so bitte nicht
// for(let e in mein_objekt){
//     console.log(mein_objekt[e]);
// }

let paare = Object.entries(mein_objekt);
console.log(paare)

for(let paar of paare) {
    for(let e of paar){
        console.log(e);
    }
    
}



console.log("----========----")
let eigenschaft = Object.keys(mein_objekt);
for (let e of eigenschaft){
    console.log(e)
};
console.log("----========----")
let werte = Object.values(mein_objekt);
console.log(werte);

console.log("----========----") //for of schleife
for(let e of werte){
    console.log(e);
};
console.log("----========----") //foreach schleife
werte.forEach(function(e){ console.log(e)});

for(let e in werte){ // for in schleife
    console.log(werte[e]);
};






console.log("----========----")

for (let e of Object.keys(mein_objekt)) {
    console.log(e)
};
console.log("----========----")


console.log("----========----") //for of schleife
for (let e of Object.values(mein_objekt)) {
    console.log(e);
};
console.log("----========----") //foreach schleife
werte.forEach(function (e) { console.log(e) });

for (let e in werte) { // for in schleife
    console.log(werte[e]);
};