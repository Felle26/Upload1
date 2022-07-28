"use strict";

let auto = {
    marke: "BMW"
};
//Eigenschaften hinzufügen
auto.marke = "Tesla"

//Eigenschaften hinzufügen

auto.Modell = "Model 3";
auto.ps = 450;
auto["Farbe"] = "rot";


//Eigenschaften Entfernen
delete auto.Farbe;

console.log(auto)