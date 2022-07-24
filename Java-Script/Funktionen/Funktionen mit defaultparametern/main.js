"use strict";

const uebergabefunktion = function(x, y = 10){ //default Parameter über die funtion mitgeben
    console.log(x*y)
    console.log(y)
    console.log(x)
};

let x = 15;
let y = 10;

uebergabefunktion(x);

const namenuebergabe = function(vor = "Max", nach ="Mustermann", alter = 18) {
    console.log(`Hallo ${vor} ${nach}, ich habe gehört du bist ${alter} Jahre alt,
    deswegen lass uns ein Spiel spielen`);
}

let prename = "Sebastian";
let lastname = "Felsberg";
let age = 35;

namenuebergabe();
namenuebergabe(prename, lastname, age);
namenuebergabe(undefined,lastname,age) //undefined gibt den definierten wert heraus, ausser es ist kein Wert definiert, danach undefiened