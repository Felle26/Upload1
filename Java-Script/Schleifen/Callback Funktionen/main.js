"use strict";
/*
let funktion_1 = function(){
    console.log("Ich bin Funktion 1!");


};*/

let funktion_2 = function(f){
    f();
    console.log("Ich bin Funktion 2!");
    
};

//funktion_2(funktion_1);

funktion_2
(
    function()
    {
    console.log("Ich bin Funktion 1!");
    }
);