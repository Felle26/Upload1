"use strict";

document.addEventListener("keydown", e => {
    if(e.key === "@"){
        console.log("das @ wurde gedrückt");
    }
});

document.addEventListener("keyup", e=>{
    if(e.key === "p"){
        console.log("das p wurde gedrückt")
    }
});

document.addEventListener("keypress", e =>{
    if(e.key === ":"){
        console.log("das : wurde gedrückt")
    }
})