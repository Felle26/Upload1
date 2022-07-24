"use strict";
//Gleichheit
console.log(42 == 42); // true
console.log(42 == 41); //false
console.log("------------------------")

//Ungleich
console.log(42 != 42); //false
console.log(42 != 41); // true
console.log("------------------------")

// groesser, kleiner als
console.log(42 > 42); //false
console.log(42 < 42); //false
console.log(42 > 40); // true
console.log(42 < 43); // true
console.log("------------------------")

// groesser, gleich / kleiner gleich
console.log(42 >= 42); // true
console.log(42 <= 42); // true
console.log(42 >= 43); //false
console.log(42 <= 40); //false
console.log("___________________");

//Typensicherheits vergleich z.B. String mit Zahl
console.log("42" === 42);
console.log("42" !== 42);