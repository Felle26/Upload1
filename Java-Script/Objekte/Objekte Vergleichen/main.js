"use strict";

let auto_1 ={
    marke: "BMW",
    modell: "i8"
};

let auto_2 = {
    marke: "Tesla",
    modell: "X"
};

let auto_3 = {
    marke: "Tesla",
    modell: "X"
};

console.log(auto_1 == auto_2);
console.log(auto_2 == auto_3);
console.log(auto_3 == auto_3);

// 2 Objekte sind nur gleich wenn es die Gleichen Objekte sind  z.B. auto_1 == auto_1

console.log({} == {});

const autovergleich = function(fahrzeug1, fahrzeug2){
    if(fahrzeug1.marke == fahrzeug2.marke && fahrzeug1.modell == fahrzeug2.modell){
        return true
    }
    else {
        return false}
}

console.log(autovergleich(auto_2, auto_3));
console.log(autovergleich(auto_2, auto_2));
console.log(autovergleich(auto_1, auto_2));