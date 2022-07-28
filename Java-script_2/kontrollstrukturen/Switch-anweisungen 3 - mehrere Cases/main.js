"use strict";

let essen = "Hummer";

switch (essen) {
    case "Nudeln":
    case "Pizza":
    case "Steak":
        console.log("das mag ich");
        break;
    case "Fisch":
    case "Kaviar":
    case "Hummer":
        console.log("das mag ich nicht");
        break;
    default:
        console.log(`Ich kenne ${essen} nicht`);
        break;
}