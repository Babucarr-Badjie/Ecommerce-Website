// Toggle the navbar menu bar
const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector("#navbar");
const closeMenuBar = document.querySelector("#close-menu");

if (menuBar) {
  menuBar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}
if (closeMenuBar) {
  closeMenuBar.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
