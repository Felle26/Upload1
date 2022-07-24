"use strict";

let Mein_Array = [
    1,
    2,
    3,
    4,
    "Hubert und Pubert"
];

let Mein_Objekt = {
    Name: "Max",
    Nachname: "Mustermann",
    Alter: 32};

    console.log(Mein_Array);
    console.log(Mein_Objekt);

for (let e in Mein_Array) {
    console.log(e);
}

for (let e in Mein_Objekt) {    // e gibt in meinem Objekt die Eigenschaften wieder
    //console.log(`${e}: ${Mein_Objekt[e]}`); //Mein_Objekt[e] gibt den Werte der Eigenschaften wieder
    //console.log(Mein_Objekt[e]); // funktioniert aber es gibt bessere Methoden
}

for (let e of Mein_Array){
    console.log(e);}

    //for (let e of Mein_Objekt){
    //    console.log(e);}          Objekte sind nicht Iterierbar

    let arr= [
        {
            name: "Half-Life",
            rel: 1998,
            crit: "Ein Meisterwerk"
        },
        {
            name: "Eldenring",
            rel: 2022,
            crit: "Spiel des Jahres 2022"
        }
    ]

    for (let e of arr){ // dies gibt das Objekt in array Wieder mit "in" gibt es den wert des Arrays wieder also 0, 1, ....
        console.log(e);
    }