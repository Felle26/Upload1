"use strict";

let formular = document.querySelector("form");

formular.addEventListener("submit", e => {console.log(e);
e.preventDefault();
});

formular.addEventListener("reset", e => console.log(e)
)