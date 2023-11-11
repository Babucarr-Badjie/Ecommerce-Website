// Toggle the navbar menu bar
const menuBar = document.querySelector("#hamburger-menu");
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

// Toggle plus & minus Buttons
const inputField = document.querySelector("#input-field");
const plusButtons = document.querySelector(".increase-btn");
const minusButtons = document.querySelector(".decrease-btn");

minusButtons.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 1;
  inputField.value = currentValue - 1;
});

plusButtons.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 1;
  inputField.value = currentValue + 1;
});
