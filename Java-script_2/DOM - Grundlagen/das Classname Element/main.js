"use strict";

let jumbo = document.querySelector(".jumbotron");
console.log(jumbo.className);

jumbo.className = "meine-Klasse";
console.log(jumbo.className);

jumbo.className += " lorem"

jumbo.className = jumbo.className.replace("lorem", "")

// mini Challenge
let nav = document.querySelector("#navigation > ul > li:first-of-type > a").className = "";
document.querySelector("#navigation > ul > li:nth-of-type(3) > a").className="active";
