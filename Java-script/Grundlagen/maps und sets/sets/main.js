"use strict";
let mein_set = new Set();
console.log(mein_set);

mein_set.add(15);
mein_set.add("Test");
mein_set.add("13")
mein_set.add([]);
mein_set.add(function() {});
mein_set.add(function () { });
mein_set.add("Test"); // wird abgelehnt durch strickten vergleich
mein_set.add([]);
mein_set.add({});
mein_set.add({});
mein_set.delete("Test");
// mein_set.clear();

console.log(mein_set.size);

console.log(mein_set.has(7+7+1));
console.log(mein_set.has("Test"));
console.log(mein_set.has("13"));
console.log(mein_set.has([]));
console.log(mein_set.has({}));
console.log(mein_set.has(function() {}));
console.log(mein_set.has("13"));