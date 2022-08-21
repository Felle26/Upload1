"use strict";
//Gültigkeitsbereich: Bereiche in dem man zugriff auf eine Variable hat

//globale Variable: wird außerhalb aller Codeblöcke definiert und ist von überall zugänglich
//Lokale Variable: wird innerhalb eines Codeblocks definiert und ist nur in diesem verfügbar
let variable_1 = "variable 1";

const meine_funktion = function() {
    let variable_2 = "variable 2"; 
    console.log(variable_1);
    console.log(variable_2);
    if(true){
        let variable_3 = "variable 3";
        console.log(variable_3);
        console.log(variable_2);
        console.log(variable_1);
    }
};

meine_funktion();
