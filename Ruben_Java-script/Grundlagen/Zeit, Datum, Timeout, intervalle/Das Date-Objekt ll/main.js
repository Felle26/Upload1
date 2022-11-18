"use strict";
let d = new Date();

d.setFullYear(1996);
d.setMonth(0);
d.setDate(16);

d.setHours(15);
d.setMinutes(35);
d.setSeconds(59);
d.setMilliseconds(111);
console.log(d);

console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDay())
console.log(d.getTime())
console.log(d.getDate())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())


let d_utc = new Date()
d_utc.setUTCFullYear(1996)
d_utc.setUTCMonth(0)
d_utc.setUTCDate(16)

d_utc.setUTCHours(15)
d_utc.setUTCMinutes(35)
d_utc.setUTCSeconds(59)
d_utc.setUTCMilliseconds(111)

console.log(d_utc)

let d_unix = new Date();
d_unix.setTime(1999656111111);

console.log(d_unix)