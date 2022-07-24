"use strict";

let personen = [
    "Peter",
    "Anna",
    "Mark",
    "Maximilian",
    "Mia",
    "Hubert",
    "Sebastian"
];

for (let i = 0; i < personen.length; i++){
    console.log(`Hallo ${personen[i]}!`);
}
console.log("=================================")

for( let i = personen.length -1; i >= 0; i--){
    console.log(`Tschüss ${personen[i]}!`);
}