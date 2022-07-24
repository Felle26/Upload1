"use strict";

let vorname = "Sebastian";
let nachname = "Felsberg";
let alter = 35;

let name = vorname + " " + nachname;

console.log(name);

// `` backticks 
// Template Strings ${hier die Variable}

let begruessung = `Hallo ${name}!`;
console.log(begruessung);

let zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)!`;

console.log(zusammenfassung);

let mehrzeiliger_template_string = `Hallo ${name}!
Du bist ${alter} Jahre alt
und in 10 Jahren bist du ${alter + 10} Jahre alt.
Wie geht es dir?`

console.log(mehrzeiliger_template_string);