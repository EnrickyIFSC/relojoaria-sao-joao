let open = document.getElementById("burger-button");
let menu = document.getElementById("main-menu");
open.addEventListener("click", () => {
  open.style.display = "none";
  menu.classList.toggle("show");
})

let close = document.getElementById("close-button");
close.addEventListener("click", () => {
  menu.classList.toggle("show");
  open.style.display = "block";
})