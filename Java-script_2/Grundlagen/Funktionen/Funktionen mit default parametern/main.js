"use strict";
const multiplizieren = function(a = 5,b = 10) {
    console.log(a);
    console.log(b);
    console.log(a*b);
}
let z1 = 42;
let z2 = 18;

multiplizieren(undefined, z2);

let vorname = "Sebastian";
let nachname = "Felsberg";
let alter = 35;

const begruessung = function(v = "Max",n = "Mustermann",a = 25){
    document.getElementById("test").innerHTML += `<p style = "font-size: 35px;">Hallo ${v} ${n} du bist ${a} Jahre alt, wie geht es dir!</p>`
}

begruessung(vorname, nachname,alter);
console.log("===================================");
begruessung();

begruessung(undefined, nachname, undefined);