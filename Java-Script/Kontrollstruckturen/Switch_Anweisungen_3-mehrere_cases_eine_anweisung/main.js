"use strict";
let essen = "Nudeln";

switch(essen){
    case "Nudeln":
    case "Pizza":
    case "Steak":
        console.log("Das mag ich!");
        break;

    case "Fisch":
    case "Hummer":
    case "Kaviar":
        console.log("Das mag ich nicht!");
        break;
    default:
        console.log(`Ich kenne ${essen} nicht!`);
        break;
}