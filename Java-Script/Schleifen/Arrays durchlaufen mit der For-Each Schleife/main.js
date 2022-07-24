"use strict";

let Zahlen = [5, 10, 56, 48, 7, 35, 3, 90, 105];
/*
console.log(Zahlen);
for(let i = 0; i < Zahlen.length; i++){
    console.log(Zahlen[i]);
}
*/
/*
let meine_funktion = function(e) {
    console.log(e);
}
Zahlen.forEach(meine_funktion);
*/

Zahlen.forEach(function(e) {
    console.log(`Zahl: ${e}`);
});