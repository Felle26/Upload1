"use strict";

let datum = new Date();
console.log(datum);
console.log(Date.now());

console.log(datum.getHours() + ":" + datum.getMinutes() + " Uhr")

let e= new Date(1660778547705);

console.log(e)

let f= new Date("Sep 16 2022 06:00:00 GMT+0200")

console.log(f)

let g= new Date("jan 05 2018 06:00:00 GMT+0200")

console.log(g)

//new Date(Jahr, monat-index[Tag[Stunde,[Minute,[Sekunde[millisekunde]]]]])

let h = new Date(2012, 0, 6, 15, 15, 15, 155)

console.log(h)