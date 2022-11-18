"use strict";
let nav = document.querySelector("#navigation");
console.log(nav)

//nav.remove()

let jumbo = document.querySelectorAll(".jumbotron");

console.log(jumbo)

jumbo.forEach(function(e){
    e.remove();
});

