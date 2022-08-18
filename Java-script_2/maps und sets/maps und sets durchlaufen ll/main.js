"use strict";

let meine_map = new Map();

meine_map.set("Test", "wert der Eigenschaft Test");
meine_map.set(13, "Wert der Eigenschaft 13");
meine_map.set([], "wert zur Eigesnchaft Array");
meine_map.set({}, "Wert zur Eigesnchaft {}");
meine_map.set(function(){}, "Wert zur Function")

let mein_set = new Set();
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add([]);
mein_set.add(function(){});

// console.log(meine_map.entries())
// console.log(meine_map.values())
// console.log(meine_map.keys())

for( let [wert, eigenschaft] of meine_map.entries()){
    console.log(wert)
    console.log(eigenschaft)
};

// for(let wert of meine_map.values()){
//     console.log(wert)
// }
// for (let eigenschaft of meine_map.keys()){
//     console.log(eigenschaft)
// }

for (let werte of mein_set.values()){
    console.log(werte);
}