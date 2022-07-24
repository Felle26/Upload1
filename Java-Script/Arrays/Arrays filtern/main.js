"use strict";

let zahlen = [
    12, 8, 23, 34, 77 , 2, 25, 125, 15, 2500, 150, 20, 250, 50, 21, 9, 19
];
let newarr = zahlen.filter(function(e){
    if (e >=20){
        return true;
    }
    else {
        return false;
    }
});

let newarr_2 = zahlen.filter(function(e){
    if (e < 20){
        return true
    } else {
        return false;
    }
});
console.log(newarr_2) 
console.log(newarr);
console.log(zahlen);