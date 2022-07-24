"use strict";

let vorname = "Sebastian";
let nachname = "Felsberg";
let alter = 35;

let name = vorname + " " + nachname;

console.log(name);

let zusammenfassung = name + " (" + alter + " Jahre)";
console.log(zusammenfassung)

let einzeiliger_string = "das ist ein eizeiliger String";

let mehrzeiliger_string = "Ich will diesen string" +
"\t in der nächsten Zeile fortsetzen"+
"\n \t  und wenn ich will,"+                // \n steht für einen Zeilenumbruch
"\n kann es auch noch weiter gehen.";       // \t steht für ein Tabulatur bzw. einrückung

console.log(mehrzeiliger_string);