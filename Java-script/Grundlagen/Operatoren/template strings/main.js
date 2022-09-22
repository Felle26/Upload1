"use strict";

let vorname = prompt("Dein Vorname");
let nachname = prompt("Dein Nachname");
let alter = prompt("Wie alt bist du");

let begruessung = `Hallo ${vorname} ${nachname} dein Alter beträgt: ${alter} Jahre`;
console.log(begruessung);



let mehrzeiliger_template_string = `Hallo ${vorname} ${nachname}!
du bist alter Jahre alt!
Wie geht es dir?`;

console.log(mehrzeiliger_template_string);



let mehrzeiliger_template_string1 = `Hallo ${vorname} ${nachname}!`+
`du bist alter Jahre alt!`+
`Wie geht es dir?`;

console.log(mehrzeiliger_template_string1);