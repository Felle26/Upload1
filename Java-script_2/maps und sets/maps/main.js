"use strict";

let meine_map = new Map();


meine_map.set("Test", "Wert zur Eigenschaft Test");
meine_map.set(13, "Wert zur Eigenschaft 13")
meine_map.set([], "wert zur Eigenschaft Array")
meine_map.set(function(){}, "Wert zur Eigenschaft Funktion")
meine_map.set({}, "wert zur eigenschaft {}")

console.log(meine_map.get("Test"));
console.log(meine_map.get(13));
console.log(meine_map.get([]));
console.log(meine_map.get(function(){}));
console.log(meine_map.get({}));


console.log(meine_map.has(13));
console.log(meine_map.has(15));
console.log(meine_map.has({}));
console.log(meine_map.has([]));



;

console.log(meine_map.size);