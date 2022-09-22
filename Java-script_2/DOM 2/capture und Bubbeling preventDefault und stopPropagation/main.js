"use strict";
let el_1 = document.querySelector("#navigation > ul > li:nth-of-type(1) > a");
let el_1_parent = el_1.parentElement;
let el_2 = document.querySelector("#navigation > ul > li:nth-of-type(2) > a");
let el_2_parent = el_2.parentElement;

el_1.addEventListener("click", e => {
    console.log("el_1 hat es mitbekommen")
    e.preventDefault();
});
el_1_parent.addEventListener("click", e => {
  console.log("el_1_parent hat es mitbekommen");
});
el_2.addEventListener("click", e=> {
  console.log("el_2 hat es mitbekommen");
  e.stopPropagation();
});
el_2_parent.addEventListener("click", e => {
  console.log("el_2_parent hat es mitbekommen");
});