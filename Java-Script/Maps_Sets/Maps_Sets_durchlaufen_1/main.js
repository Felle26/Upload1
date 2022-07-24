"use strict";
let meine_map = new Map()

meine_map.set("Test", "Wert der Eigeschaft Test");
meine_map.set(13, "Wert der Eigenschaft 13");
meine_map.set([], "Wert zur Eigeschaft []");
meine_map.set({}, "Wert zur Eigeschaft {}");
meine_map.set(function(){}, "Wert zur Eigeschaft function");
console.log(meine_map);

let mein_set = new Set();

mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add({});
mein_set.add(function(){});

console.log(mein_set);