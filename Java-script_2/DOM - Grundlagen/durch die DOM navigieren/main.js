"use strict";

let ul = document.querySelector("#navigation > ul")
//console.log(nav)

// Kindelemente

let child_nodes = ul.childNodes; // alle Kindelemente inkl. Text und Kommentarknoten
let children = ul.children; // alle Kindelemente exkl. Text und Kommentarknoten
let first_child = ul.firstChild; // erstes Kindelement inkl. Text und Kommentarknoten
let last_child = ul.lastChild; // letztes Kindelement inkl. Text und Kommentarknoten
let first_el_child = ul.firstElementChild // erstes Kindelement exkl. Text und Kommentarknoten
let last_el_child = ul.lastElementChild // letztes Kindelement exkl. Text und Kommentarknoten

// Geschwister Elemente

let next_sibling = ul.nextSibling; // nächstes Geschwisterelement inkl. Text und Kommentarknoten
let prev_sibling = ul.previousSibling; // vorheriges Geschwisterelement inkl. Text und Kommentarknoten
let next_el_sibling = ul.firstElementChild.nextElementSibling;//nächstes Geschwisterelement exkl. Text und Kommentarknoten
let prev_el_sibling = ul.lastElementChild.previousElementSibling;//letztes Geschwisterelement exkl. Text und Kommentarknoten

// Elternelemte auswählen

let parent_element = ul.parentElement;console.log(child_nodes);

//Allgemeines Navigieren

let anker = ul.querySelectorAll("li > a");

console.log(children);
console.log(first_child);
console.log(last_child);
console.log(first_el_child);
console.log(last_el_child);


console.log(next_sibling);
console.log(prev_sibling);
console.log(next_el_sibling);
console.log(prev_el_sibling);

console.log(parent_element);


console.log(anker);