"use strict";

let meine_map = new Map();

meine_map.set("Test", "Wert zur Eigenschaft Test");
meine_map.set(13, "Wert zur Eigenschaft 13")
console.log(meine_map.keys());

console.log(meine_map.values());

meine_map.set([], "Wert zur Eigenschaft []");
console.log(meine_map);

meine_map.set(function(){}, "Wert zur Eigenschaft function");
meine_map.set({}, "Wert zur Eigenschaft {}");
console.log(meine_map);

console.log(meine_map.get("Test"));
console.log(meine_map.get(13));
console.log(meine_map.get([]));
console.log(meine_map.get(function(){}));
console.log(meine_map.get({}));

console.log(meine_map.has(13));
console.log(meine_map.has(53));
console.log(meine_map.has([]));
console.log(meine_map.has({}));

console.log(meine_map.size);
meine_map.delete("Test");
console.log(meine_map);
meine_map.clear();
console.log(meine_map);