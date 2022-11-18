"use strict";
//Attribute setzen
document.querySelector(".jumbotron").setAttribute("lang", "de")
//Attribute entfernen
document.querySelector("head > meta:nth-of-type(3)").removeAttribute("content")
//Attribute auslesen
console.log(document.querySelector("html").getAttribute("lang"));
// Attribute abfragen
console.log(document.querySelector("head > link").hasAttribute("rel"))
console.log(document.querySelector("head > link").hasAttribute("type"));
