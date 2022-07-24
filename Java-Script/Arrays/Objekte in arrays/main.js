/*"use strict";

let Auto_1 = 
{
    marke: "Hyundai",
    modell: "i30",
    farbe: "rot"
};

let Auto_2 =
{
    marke: "Ford",
    modell: "Fiesta ST",
    farbe: "schwarz"
};

let Auto_3 =
{
    marke: "VW",
    modell: "Golf R32",
    farbe: "Blau"
};

let Autos = [
    Auto_1, 
    Auto_2,
    Auto_3
];*/

let Autos = [
    {
        marke: "Hyundai",
        modell: "i30",
        farbe: "rot"
    },
    {
        marke: "Ford",
        modell: "Fiesta ST",
        farbe: "Schwarz"
    },
    {
        marke: "VW",
        modell: "Golf R32",
        farbe: "Blau"
    }
];

console.log(Autos);

console.log(Autos[0]);
console.log(Autos[1]);
console.log(Autos[2]);

console.log(Autos[0]["marke"]); // Bracket Notation
console.log(Autos[0].modell);   // Auch per Dot Notation
console.log(Autos[0].farbe);

console.log(Autos[1].marke);
console.log(Autos[1].modell);
console.log(Autos[1].farbe);

console.log(Autos[2].marke);
console.log(Autos[2].modell);
console.log(Autos[2].farbe);


/*
let Waren = 
[
    [
    "Äpfel", 
    "Birenen", 
    "Bananen"
    ],
    [
    "Möhren", 
    "Rotkohl", 
    "Sellerie"
    ],
    [
    "Roggenmischbrot", 
    "Weißbrot", 
    "Pumpernickel"
    ]
]
*/

let Waren = {
Obst:[ "Äpfel", 
"Birenen", 
"Bananen"] ,
Gemuese:[ "Möhren", 
"Rotkohl", 
"Sellerie"] ,
Brot: [
    "Roggenmischbrot", 
    "Weißbrot", 
    "Pumpernickel"
]
};

console.log(Waren.Obst);
console.log(Waren.Gemuese);
console.log(Waren.Brot);

console.log(Waren.Obst[0]);
console.log(Waren.Obst[1]);
console.log(Waren.Obst[2]);

console.log(Waren.Gemuese[0]);
console.log(Waren.Gemuese[1]);
console.log(Waren.Gemuese[2]);

console.log(Waren.Brot[0]);
console.log(Waren.Brot[1]);
console.log(Waren.Brot[2]);