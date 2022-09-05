"use strict";

let jumbo = document.querySelector(".jumbotron")
console.log(jumbo)

let class_list = jumbo.classList

console.log(class_list)
//Klassen hinzufügen
jumbo.classList.add("meine-klasse");
//klassen Löschen
jumbo.classList.remove("jumbotron");
//Klassen hinzufügen
jumbo.classList.replace("meine-klasse", "deine-klasse");
//Klassen Togglen (an - aus schalten)
console.log(jumbo.classList.contains("jumbotron"));
console.log(jumbo.classList.contains("deine-klasse"));
jumbo.classList.toggle("auch-eine-klasse");
jumbo.classList.toggle("auch-eine-klasse");