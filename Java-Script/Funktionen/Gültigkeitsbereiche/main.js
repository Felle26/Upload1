"use strict";


//Gültigkeits bereicht ist der bereicht in dem man Zugriff auf eine Variable hat

// Globale Variablen:   Wird ausserhalb von Code Blöcken definiert und ist von überall zugängling
//                      Ein CodeBlock ist zwischen {} und auch in allem Codeblocks indem sie enthalten
//                      sind verfügbar
// Lokale Variablen:    wird innerhalb eines Codeblocks definiert und ist nur in diesem verfügbar

// Globaler Gültigkeisbereicht: variable_1
    //Lokaler Gütigkeisbereicht 1: variable_2
        //Lokaler Gültigkeisbereich 1.1: variable_3
    //Lokaer Gültigkeisbereicht 2: Variable_4

let variable_1 ="Variable 1";

const meine_funktion = function(){
    let variable_2 = "variable 2";

    if(true){
        let variable_3 = "Variable 3";
        console.log(variable_1);
        console.log(variable_2);
        console.log(variable_3);
    };


    console.log(variable_1);
    console.log(variable_2);
    //console.log(variable_3); <-- hier nicht deklariert
};

meine_funktion();
console.log(variable_1);
// console.log(variable_2); <-- hier nicht deklariert

if(true){
    let Variable_4 = "variable 4";
    console.log(Variable_4);
};