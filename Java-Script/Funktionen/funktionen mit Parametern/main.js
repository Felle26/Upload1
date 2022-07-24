"use strict";
/*
const meine_funktion = function(parameter_1, parameter_2){
    auszuführender Code
};

meine_funktion(p_1, p_2);
*/
 let a = 42;
 let vor = "Sebastian";
 let nach = "Felsberg";


const log_die_zahl = function(x) //loggt die Zahl a ( 42 )
    {
        console.log(x)
    }

log_die_zahl(a)

const begruessung = function(n1, n2){ //die definiert nur das 2 Parameter vorhanden sind // Loggt den Namen als Template String
    let test1 = n1 // in funktion kann eine neue Variable Definiert werden
    let test2 = n2 // die muss aber nicht sein!
    console.log(`Hallo ${test1} ${test2} wie geht es dir!`)
}

begruessung(vor, nach)

let zahl1 = 10;
let zahl2 = 2;
let zahl3 = 5;
let zahl4 = 6;
let zahl5 = 15;

const grundrechnen = function(x,y){
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
    console.log("-----------------")
};

grundrechnen(zahl1, zahl2);
grundrechnen(zahl2, zahl3);
grundrechnen(zahl3, zahl4);
grundrechnen(zahl4, zahl5);
grundrechnen(zahl5, zahl1);

