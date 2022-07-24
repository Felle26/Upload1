"use strict";

let produkt = "Brot";

switch(produkt){
    case "Brot":
        console.log("1,89€");
        break;
    case "Milch":
    case "Apfel":
        console.log("0,79€");
        break;
    case "Schokolade":
    case "Chips":
        console.log("0,99€");
        break;
    default:
        console.log(`Das Produkt, ${produkt}, wurde nicht gefunden`);
        break;
};

let wert = "ausgabe";
let bilanz = 500;
let zahlung = 100;

switch(wert){
    case "einnahme":
        console.log(bilanz + zahlung);
        break;
    case "ausgabe":
        console.log(bilanz - zahlung);
        break;
    default:
        console.log(`${wert} <- ist nicht definiert`);
        break;

}