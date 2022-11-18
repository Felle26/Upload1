"use strict";

let jumbo = document.querySelector(".jumbotron");
jumbo.addEventListener("click", e => {
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target);
}
)

jumbo.addEventListener("dblclick", e => {
    console.log("DBLCLICK");
    console.log(e)
})

jumbo.addEventListener("mousedown", e => {
    console.log("mousedown");
    console.log(e)
})

jumbo.addEventListener("mouseup",e => {
  console.log("MouseUP");
  console.log(e);
});
jumbo.addEventListener("mouseover", (e) => {
  console.log("mouseover");
  console.log(e);
});

jumbo.addEventListener("mouseout", (e) => {
  console.log("mouseout");
  console.log(e);
});