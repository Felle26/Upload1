"use strict";
let zahlen =[12,23,34,77,2,32,9,55,43,11,1];
let kleiner_als = [];
let groesser_als = [];

zahlen.forEach(function(i){
    
    if(i <=20){
        kleiner_als.push(i);
    }else{
        groesser_als.push(i)
    };
    
});

console.log(kleiner_als);
console.log(groesser_als); //--- funktioniert^^


let kleinerGleich = zahlen.filter(function(e){
    if(e <=20){
        return true;
    } else{
        return false;
    }
});

console.log(kleinerGleich);