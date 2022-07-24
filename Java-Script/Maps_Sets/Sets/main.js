"use strict";

let mein_set = new Set();

mein_set.add(5);
mein_set.add(15);
mein_set.add(function(){});
mein_set.add(function(){});
mein_set.add("Test");
mein_set.add("Test"); // es kann kein Duplikat hinzugefügt werden
mein_set.add([]);
mein_set.add([]);
mein_set.add({});
mein_set.add({});

//{} === {} <--false
//[] === [] <--true


console.log(mein_set);
console.log(mein_set.has("Test")); //True
console.log(mein_set.has("Beispiel")); //false
console.log(mein_set.has({})); //false
console.log(mein_set.has([])); //false
console.log(mein_set.size); //9
console.log(mein_set.has(2+3)); // true

console.log(mein_set.delete(5)); // es gibt true zurück
console.log(mein_set.delete(5)); // Wert ist nicht verfügbar es gibt false zurück