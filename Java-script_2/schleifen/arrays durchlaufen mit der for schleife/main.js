"use strict";

let personen = [
    "Peter",
    "Anna",
    "Mark",
    "Sebastian",
    "Mia",
    "Test",
    "Hubert"
];
//.lenght gibt die länge des arrays an
for(let i = 0; i<personen.length; i++){
    
    console.log(`Hallo ${personen[i]}`)
};
console.log("Ende der for Schleife");

for(let i = personen.length - 1; i >= 0; i--){
    console.log(`Tschüss ${personen[i]}`)
};
