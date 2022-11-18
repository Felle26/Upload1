"use strict";

// Element mit css querySelector auswählen

console.log(document.querySelector("body > #navigation > ul"));

let qs_2 = document.querySelector(".jumbotron");
console.log(qs_2);

let qs_3 = document.querySelector(".test");
console.log(qs_3);

console.log(document.querySelectorAll("section"))

//  let qs_4 = document.querySelector("%67§ >"); <-- kein valider Selektor von CSS.


// Element mit css-selektoren auswählen

let qsa_1 = document.querySelectorAll("body > #navigation > ul > li > a");

console.log(qsa_1);

let qsa_2 = document.querySelectorAll(".test");
console.log(qsa_2);

console.log(qsa_2.length == 0);

console.log(document.querySelectorAll("section"));

// let qsa_3 = document.querySelectorAll("%67§ >")