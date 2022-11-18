"use strict";

let zahlen = [1,20,2000,1000000,50];

let sortiert = zahlen.sort();
console.log(sortiert);

let worte = ["zahl", "wahnsinn", "Mangel", "Abspann"]

let worte_neu = worte.sort();
console.log(worte_neu);

let zahlen_neu = zahlen.sort(function(a,b){
    return a - b; // vergleicht a-b und sortiert aufsteigend || bei b-a sortiert absteigend
})
console.log(zahlen_neu);