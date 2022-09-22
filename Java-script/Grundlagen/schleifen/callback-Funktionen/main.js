"use strict";
/*
 let function_1 = function(){
    console.log("Ich bin funktion 1");
 };
*/  
 let function_2 = function(f){
    console.log("Ich bin funktion 2");
    f();
 };

 //function_2(function_1);

 function_2(function(){console.log("Ich bin funktion 1")});