"use strict";
let auto_1 = {
    marke: "BMW",
    modell: "i8"
};

let auto_2 = {
    marke: "Tesla",
    modell: "X"
}

let auto_3 = {
    marke: "Tesla",
    modell: "X"
}

console.log(auto_1 == auto_2);
console.log(auto_2 == auto_3);

function vergleich(first, second){
    console.log(`Vergleich von ${first.marke} ${first.modell} und ${second.marke} ${second.modell}`)
    console.log("========================================")
    if(first.marke == second.marke && first.modell == second.modell){
        return true;
    }else{
        return false;
    }
};

console.log(vergleich(auto_1, auto_2));
console.log(vergleich(auto_2, auto_3));
console.log(vergleich(auto_3, auto_1));
console.log(vergleich(auto_2, auto_2));