"use strict";


let meine_map = new Map();

meine_map.set("Test", "wert der Eigenschaft Test");
meine_map.set(13, "Wert der Eigenschaft 13");
meine_map.set([], "wert zur Eigesnchaft Array");
meine_map.set({}, "Wert zur Eigesnchaft {}");
meine_map.set(function(){}, "Wert zur Function")

console.log(meine_map);

let mein_set = new Set();
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add([]);
mein_set.add(function(){});
console.log(mein_set);

meine_map.forEach(function(w, e, m){
    console.log(e);
    console.log(w);
})

mein_set.forEach(function(v, NULL, set){
    console.log(v)
});

for(let paar of meine_map){
    console.log(paar);
}

for (let [Eigenschaft, wert] of meine_map){
    console.log("---------------------")
    console.log(Eigenschaft)
    console.log(wert);
}

for(let wert of mein_set){
    console.log(wert);
}
