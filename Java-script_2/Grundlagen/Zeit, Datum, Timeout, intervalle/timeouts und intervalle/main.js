"use strict";

// setTimeout(callback-funktion, zeitspanne[, parameter1, parameter2,..., parametern])

// console.log("los!");
// setTimeout(function(){
//     console.log("fertig")
// }, 2000);


//setTimeout(code-string, zeitspanne)

// console.log("Auf-Gehts!");
// console.log(setTimeout("console.log(\"Fertig\")", 2000))

// clearTimeout(1)

console.log("start!");

setInterval(function(){
    console.log("1 Sekunde ist um!")
}, 1000)

setInterval("console.log(`Eine Sekunde ist um!!`)", 1000)

// clearInterval(2);