"use strict";

let waren = [
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    [
        "Mischbrot",
        "Weißbrot",
        "Vollkornbrot"
    ]
]
for(let i = 0; i < waren.length; i++){
    for(let j =0; j< waren[i].length; j++){
        console.log(waren[i][j])
    };
};
let familie = [[
    [
        [
            [
                "Sebastian",
                "Nicole",
                "Elisabeth",
                "Hubert"
            ],
            [
                "Ramona",
                "Andreas"
            ]
]
]
]];
console.log(familie)

for(let i = 0; i<familie.length; i++){
    for(let j=0; j<familie[i].length; j++){
        for(let k=0; k<=familie[i][j].length; k++){
            console.log(familie[i][j][k]);
        };
    }
}