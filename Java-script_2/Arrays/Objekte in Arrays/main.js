"use strict";

// let auto_1 = {
//     marke: "Hyundai",
//     modell: "i30",
//     farbe: "rot"
// };

// let auto_2 = {
//     marke: "Ford",
//     modell: "Fiesta ST",
//     farbe: "schwarz"
// };

// let auto_3 = {
//     marke: "VW",
//     modell: "Golf GTI",
//     farbe: "blau"
// };

// let autos = [
//     auto_1,
//     auto_2,
//     auto_3
// ]

let autos = [
    {
        marke: "Hyundai",
        modell: "i30",
        farbe: "rot"
    },
    {
        marke: "Ford",
        modell: "Fiesta ST",
        farbe: "schwarz"
    },
    {
        marke: "VW",
        modell: "Golf GTI",
        farbe: "blau"
    }

]

console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

console.log(autos[0]["marke"]);
console.log(autos[0].modell);
console.log(autos[0].farbe);

console.log(autos[1].marke);
console.log(autos[1].modell);
console.log(autos[1].farbe);

console.log(autos[2].marke);
console.log(autos[2].modell);
console.log(autos[2].farbe);


// let waren = [
//     [
//         "Äpfel",
//         "Birnen",
//         "Bananen"
//     ],
//     [
//         "Möhren",
//         "Sellerie",
//         "Kohl"],
//     [
//         "Mischbrot",
//         "Weißbrot",
//         "Vollkornbrot"
//     ]
// ]
let waren = {
    obst: [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    gemuese: [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    brot:[
        "Mischbrot",
        "Weißbrot",
        "Vollkornbrot"
    ]
}

console.log(waren)

console.log(waren.obst[0])
console.log(waren.obst[1])
console.log(waren.obst[2])

console.log(waren.gemuese[0])
console.log(waren.gemuese[1])
console.log(waren.gemuese[2])

console.log(waren.brot[0])
console.log(waren.brot[1])
console.log(waren.brot[2])