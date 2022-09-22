"use strict";
let mein_array= [
    "Sebastian",
    "Mia",
    "Peter",
    "Mark",
];

let mein_objekt ={
    name: "Mustermann",
    vorname: "Max",
    alter: 26
};

console.log(mein_array);
console.log(mein_objekt);

for(let eigenschaft in mein_array){
    console.log(eigenschaft);
};

for (let eigenschaft in mein_objekt) {
    
    console.log(eigenschaft, mein_objekt[eigenschaft]); //funktioniert aber nich gut
    
};

for (let werte of mein_array) {
    console.log(werte);
};

// for (let werte of mein_objekt) { geht nicht da einfache objekte nicht iterierbar sind
//     console.log(werte);
// };


