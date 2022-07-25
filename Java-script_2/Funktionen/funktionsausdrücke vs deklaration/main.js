"use strict";
//==================
// Funktionsausdruck
//==================

//const ist sicherer als let
const f1 = function () {
    console.log("Funktion 1");
};

f1();

let f2 = function () {
    console.log("Funktion 2");
};

f2();

f2 = function(){
    console.log("Funktions 2 neu");
};

f2();


//==================
// Funktionsdeklarationen (werden gehoistet)
//==================

function f3(){
    console.log("Funktion 3");
};

f3();