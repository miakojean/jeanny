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

function capitalizeFirstLetter(inputField) {
    inputField.value = inputField.value
      .toLowerCase()
      .replace(/(^|\s)\S/g, function(letter) {
        return letter.toUpperCase();
      });
}

// Sélectionner les champs Nom et Prénoms
const nomInput = document.getElementById('nom');
const prenomsInput = document.getElementById('Prenoms');

// Ajouter des écouteurs d'événement pour la modification des champs
nomInput.addEventListener('input', function() {
    capitalizeFirstLetter(nomInput);
});

prenomsInput.addEventListener('input', function() {
    capitalizeFirstLetter(prenomsInput);
});

const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const errorSpan = document.getElementById('password-error');

function checkPasswords() {
    if (password1.value !== password2.value) {
      errorSpan.style.display = 'block';  // Affiche le message d'erreur
    } else {
      errorSpan.style.display = 'none';  // Cache le message d'erreur
    }
}

// Ajouter des écouteurs d'événements pour surveiller les changements dans les deux champs
password1.addEventListener('input', checkPasswords);
password2.addEventListener('input', checkPasswords);

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