"use strict";
// const meineFunktion = function(parameter1, parameter2) {

// };

// meineFunktion();

const logDieZahl = function (a) {
    console.log(a);
};

logDieZahl(356);
let vorname = "Sebastian";
let nachname = "Felsberg";


const begruessung = function (v, n) {
    console.log(`Hallo ${v} ${n},
    wie geht es dir?`);
};

begruessung(vorname, nachname);

let zahl1 = 5;
let zalh2 = 2;

const grundrechnen = function (x, y) {
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y); // in 5 passt 2x2 hinein 1 bleibt übrig
    document.getElementById(test).innerhtml += `<h1>Test</h1>`
};

grundrechnen(zahl1, zalh2);