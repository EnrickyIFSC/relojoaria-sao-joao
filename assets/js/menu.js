const openButton = document.getElementById("burger-button");
const menu = document.getElementById("main-menu");

openButton.addEventListener("click", () => {
  openButton.style.display = "none";
  menu.classList.toggle("show");
})

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => {
  menu.classList.toggle("show");
  openButton.style.display = "block";
})