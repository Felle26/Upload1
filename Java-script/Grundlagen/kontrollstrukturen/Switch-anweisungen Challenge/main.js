"use strict";

let produkt = "Brot";

switch (produkt){
    case "apfel":
    case "Milch":
        console.log("0,79€");
        break;
    case "Schokolade":
    case "Chips":
        console.log("0,99€");
        break;
    case "Brot":
        console.log("1,89");
        break;
    default:
        console.log(`Produkt ${produkt} wurde nicht gefunden`);
}