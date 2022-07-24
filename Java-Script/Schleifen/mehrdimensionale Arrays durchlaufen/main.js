"use strict";

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
    ],
    [
    "Klopapier",
    "Taschentücher",
    "Binden",
    "Tampons"
    ]
]

for(let i = 0; i < Waren.length; i++)       // 1. for Schleife Greift den Index des Array´s ab
{
    for (let j = 0; j<Waren[i].length; j++)
    {                                       // 2. for Schleife greift das Array im 1. Array ab
        console.log(Waren[i][j]);
    }
}
 // Übung 3 Dimensionales Arrays durchlaufen lassen
let spiele = [
    [
        [
        "Mensch Ärgere Dich nicht",
        "Dame",
        "Mühle"
        ],
        [
        "Spiel des Lebens",
        "Outburst",
        "Rappel Zappel"
        ],
        [
        "Plitsch Platsch Pinguin",
        "Bravo Traube"
        ]
    ],
    [
        [
        "Halo",
        "Forza MotorSport",
        "MS Flight Simulator"
        ],
        [
        "Gran Turismo",
        "God of War",
        "God Eater"    
        ],
        [
        "Mario Kart",
        "Mario Land",
        "Zelda"
        ]
    ],
    [
        [
        "Half-Life",
        "Opposing Force",
        "Blue Shift"
        ],
        [
        "Half-Life 2",
        "Episode 1",
        "Episode 2"
        ],
        [
        "Outlast",
        "Outlast 2",
        "Outlast Whistleblower"]
    ],
];

for(let i=0; i<spiele.length; i++) // Dies geht die erste Stufe des Arrays durch
{
    for(let j=0; j<spiele[i].length; j++) // Dies geht die 2. Stufe des Arrays durch mit dem Wert I Welches im 1, Lauf erstellt wurde
    {
        for(let k=0; k<spiele[i][j].length; k++) // Dies geht die 3. Stufe des Array durch mit dem Wert i welches im 1. Lauf erstellt wurde, sowie den wert j, welches im 2. Lauf erstellt wurde
        {
            console.log(spiele[i][j][k]); // Dies gibt den Wert k pro loop
        }
       
    }
}
