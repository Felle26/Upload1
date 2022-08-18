"use strict";

let minimum = 40;
let maximum = 60;


const zufallszahl = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

console.log(zufallszahl(minimum, maximum));
