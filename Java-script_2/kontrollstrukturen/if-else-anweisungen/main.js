"use strict";

let Benutzerangabe = parseInt(prompt("wie alt bist du"));
let mindestAlter = 18;
if (Benutzerangabe >= mindestAlter) {
    if (Benutzerangabe === mindestAlter) {
        document.getElementById("test").innerHTML += `<p id="gerade"> mit ${Benutzerangabe} Jahren bist du gerade alt genug!</p>`
    }
    else {
        document.getElementById("test").innerHTML += `<p id="alt"> mit ${Benutzerangabe} Jahren bist du alt genug!</p>`
    }

}
else {
    document.getElementById("test").innerHTML += `<p id="jung">mit ${Benutzerangabe} Jahren bist du zu jung!</p>`
}


// if(false){
//     console.log("If wurde ausgeführt!")
// }
// else{
//     console.log("Else wurde ausgeführt!")
// }