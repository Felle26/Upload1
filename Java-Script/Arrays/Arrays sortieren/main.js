"use strict";

//let zahlen = [
//    1, 20, 2000, 1000000, 50
//];


//let neu_sortiert = zahlen.sort()

//console.log(zahlen);

// Die sort()-Methode für Arrays wandelt Elemente des Arrays standardmäßig in Strings um und vergleicht diese

let worte= ["Array", "Wahnsinn", "Mangel", "Abspann"];

let worte_neu = worte.sort();
console.log(worte_neu);

// Für das sortieren von Zahlen-Arrays sollte deshalb eine Vergleichsfunktion genutzt werden
// Ist Rückgabewert der Vergleichsfunktion < 0, wird auf einen niedrigeren Index als b gesetzt
// Ist Rückgabewert der Vergleichsfunktion > 0, wird a auf einen höheren Index als b gesetzt
// Ist Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist
// return a - b sortiert in aufsteigender Reihenfolge
// return b - a sortiert in absteigender Reihenfolge

let zahlen = [1, 20, 2000, 1000000, 50];

let zahlen_neu = zahlen.sort(function(a, b){
    return a - b; 
});

console.log(zahlen_neu);  //erwartet 1, 20, 50, 2000, 1000000

let zahlen_neu2 = zahlen.sort(function(a, b){
    return b - a; 
});

console.log(zahlen_neu2); //erwartet 1000000, 2000, 50, 1