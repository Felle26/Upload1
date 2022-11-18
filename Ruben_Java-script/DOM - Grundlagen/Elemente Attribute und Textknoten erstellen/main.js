"use strict";
// Element erstellen
let div = document.createElement("div");


//Attribut erstellen
let attr = document.createAttribute("id");

attr.value="meine_id"

div.setAttributeNode(attr);

console.log(div);

console.log(attr);

//Attribut erstellen und hinzufügen
div.setAttribute("class", "meine_klasse")

console.log(div);

let text = document.createTextNode("lorem ipsum dolor sit amet.")

console.log(text)