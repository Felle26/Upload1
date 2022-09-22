"use strict";

let z1 = 15;
let z2 = 30;

const multi = function (x, y) {

    return x * y;
};
let ergebnis = multi(z1, z2);

console.log(multi(z1, z2));

let ergebnis_2 = multi(ergebnis, ergebnis);

console.log(multi(ergebnis, ergebnis));

console.log(multi(multi(z1,z2), multi(z1,z2)))