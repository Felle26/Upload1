"use strict";
// const addieren = function(array){
//     let Summe = 0;
//     array.forEach(e => Summe += e);
//     return Summe;
// };
const addieren = function (...summanden) {
  let Summe = 0;
  summanden.forEach((e) => (Summe += e));
  return Summe;
};
console.log(addieren(23, 23, 41, 64, 9, 109));

const personen_addieren = function(name_1, name_2, ...punkte){
    let summe = 0
    punkte.forEach(e => summe +=e)
 return `${name_1} und ${name_2} haben zusammen ${summe} gesammelt!`
};

console.log(personen_addieren("jan", "Mona", 56, 89, 13, 67, 98, 100));