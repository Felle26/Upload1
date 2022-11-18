"use strict";

// appendChild() fügt ein Element als letztes Kind Element in ein Elternelement ein

// sytax: elternelement.appenChild(Kindelement);
// Existiert das Kindelement im Elternelement bereits, wird es entfernt und stattdessen als
// letztes Kindelement wieder angefügt

let div = document.createElement("div");
div.setAttribute("id", "meine_id");
div.setAttribute("class", "meine_klasse");

let text = document.createTextNode("lorem ipsum dolor sit amet.");
//console.log(text)

div.appendChild(text);

let jumbo = document.querySelector(".jumbotron > section");

jumbo.appendChild(div);

let li = document.querySelector("#navigation > ul > li");
let ul = document.querySelector("#navigation > ul");

ul.appendChild(li);