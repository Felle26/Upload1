"use strict";

let auto = {
    marke: "Skoda"
};

//Eigenschaft ändern

auto.marke = "Peugeot";

console.log(auto);

//Eigenschaft hinzufügen
auto.modell = "RCZ"; //dot
auto.farbe = "rot"; //dot
auto["PS"] = 150; //backet
console.log(auto);

// Eigenschaften entfernen
delete auto.farbe;
console.log(auto);