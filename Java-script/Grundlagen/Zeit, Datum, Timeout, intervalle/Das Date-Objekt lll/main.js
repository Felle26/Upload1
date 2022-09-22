"use strict";

let d = new Date();
console.log(d);
d.toLocaleString

console.log(d.toLocaleString());

let de_DE = new Date();

console.log(de_DE.toLocaleString("de-DE",)); //BCP 47 Sprachschema
console.log(de_DE.toLocaleString("en-US"));

let optionen = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
};

console.log(de_DE.toLocaleString("de-DE", optionen));

console.log(
  de_DE.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "long",
  })
);

console.log(
  de_DE.toLocaleTimeString("de-DE", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  })
);