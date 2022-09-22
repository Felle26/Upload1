"use strict";
// normale Funktion:
//const multiplizieren = function(a , b) { return a * b;};

// Regel 1: function-Keyword wird durch => nach Parametern ersetzt
//const multiplizieren = ( a , b ) => { return a * b; };

// Regel 2: wenn die Kogik der Funktion aus nur einem Ausdruck besteht, kann man die {} weglassen
// Regel 3: wenn es sich sogar nur um eine return-Anweisung handelt kann auch das return wegelassen werden

//Testausgabe:
const multiplizieren = (a , b) => a * b;
console.log(multiplizieren(5,10));

//Normale Funktion:
//const begruessung = function(name){return`Hallo ${name}`;};

// Regel 4: wenn nur ein Parameter übergeben wird, können die {} weggelassen werden

//Testausgabe
const begruessung = name => `Hallo ${name}`
console.log(begruessung("Max"))

// Normale funktion
// const sinn_des_lebens = function(){return 42};

// Regel 5: wenn keine Parameter übergeben werden, müssen leere () gesetzt werden
const sinn_des_lebens = () => 42;

console.log(sinn_des_lebens())


//Praxisbeispiel: Pfeilfunktionen sind super Praktisch z.B. in Call-Back-Funktionen
// wie sie die forEach()-Methode erwartet
let einkaufliste = [
    "Brot",
    "Käse",
    "Tomaten",
    "Butter",
    "Eier",
    "Orangensaft"
];
// Normale Funktion:
// einkaufliste.forEach(function(e) {
//     console.log(e);
// })

//Pfeil-Funktion:
einkaufliste.forEach((e) => console.log(e))

let addieren = (a,b,c) => a +b+ c;

console.log(addieren(5,7, 7))