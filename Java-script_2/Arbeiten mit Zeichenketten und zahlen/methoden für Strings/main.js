"use strict";

let s = " Lorem ipsum dolor sit amet ipsum. ";

console.log(s.length)
console.log(s.indexOf("ipsum"))
console.log(s.indexOf("ipsum" , 20))
console.log(s.lastIndexOf("ipsum"))
console.log(s.lastIndexOf("ipsum", 20))
console.log(s.includes("sit"))
console.log(s.includes("sitt"));
console.log(s.toLowerCase());
console.log(s.toUpperCase());
//console.log(s.trim());
//console.log(s.trimEnd())
console.log(s.repeat(5));

let regex = /i\w{4}/g;

console.log(s.search(regex));
console.log(s.replace(regex, "opsum"));
console.log(s);
console.log(s.match(regex));