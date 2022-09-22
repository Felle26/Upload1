"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein_listenelement");
let a = document.createElement("a");
a.setAttribute("id", "mein_anker");
a.setAttribute("href", "#");
let text = document.createTextNode("Element");
a.appendChild(text);
li.appendChild(a);

console.log(li);

let liste = document.querySelector("#navigation > ul");
// liste.appendChild(li);
//liste.insertAdjacentElement("beforebegin", li);
liste.insertAdjacentElement("afterbegin", li);
//liste.insertAdjacentElement("beforeend", li);
//liste.insertAdjacentElement("afterend", li);
let domstring = "<li id=\"mein-listenelement\"><a id=\"mein-ankerelement\" href=\"#\">AdjacentHTML</a></li>"
liste.insertAdjacentHTML("beforeend", domstring)

let text1 = "lorem ipsum dolor sit amet."

liste.insertAdjacentText("beforebegin", text1)

// beforebegin,
// afterbegin,
// beforeend,
// afterend
// funktioniert mit allen insertAdjacent... , ...Text, ...HTML, ... Element.
//Parameter 1: Position
// Parameter 2: Element, ein Domstring, oder text


