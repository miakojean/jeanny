const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll(".input_field");

  inputs.forEach(function(inputField) {
      inputField.addEventListener("input", function() {
          if (inputField.value.trim() !== "") {
              inputField.classList.add("filled");
          } else {
              inputField.classList.remove("filled");
          }
      });
  });
});