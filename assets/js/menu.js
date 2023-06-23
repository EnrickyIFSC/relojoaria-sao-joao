const openButton = document.getElementById("burger-button");
const menu = document.getElementById("main-menu");
const closeButton = document.getElementById("close-button");

function toggleMenu() {
  menu.classList.toggle("show");
  openButton.style.display = menu.classList.contains("show") ? "none" : "block";
}

openButton.addEventListener("click", toggleMenu);

document.addEventListener("click", (event) => {
  const isMenuVisible = menu.classList.contains("show");

  if (!isMenuVisible || event.target === openButton) {
    return;
  }

  if (!menu.contains(event.target) || event.target === closeButton) {
    toggleMenu();
  }
});