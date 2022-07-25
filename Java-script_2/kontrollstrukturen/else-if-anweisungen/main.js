"use strict";
// if(bedingung){
//     Code, der ausgeführt wird wenn die bedingung erfüllt ist(true)
// } else{
//     code, der ausgeführt wid wenn die bedingung nicht erfüllt ist(false)
// }


// if(bedingung){
//     Code, der ausgeführt wird wenn die bedingung 1 erfüllt ist(true)
// }else if(bedingung2){
//     Code, der ausgeführt wird wenn die bedingung 2 erfüllt ist(true)
// }else if(bedingung3){
//     Code, der ausgeführt wird wenn die bedingung 3 erfüllt ist(true)
// } else{
//     code, der ausgeführt wid wenn die bedingung nicht erfüllt ist(false)
// }

let Benutzerangabe = parseInt(prompt("wie alt bist du"));
let mindestAlter = 18;
if (Benutzerangabe === mindestAlter) {
    document.getElementById("test").innerHTML += `<p id="gerade"> mit ${Benutzerangabe} Jahren bist du gerade alt genug!</p>`

} else if (Benutzerangabe > mindestAlter) {
    document.getElementById("test").innerHTML += `<p id="alt"> mit ${Benutzerangabe} Jahren bist du alt genug!</p>`
} else {
    document.getElementById("test").innerHTML += `<p id="jung">mit ${Benutzerangabe} Jahren bist du zu jung!</p>`
};