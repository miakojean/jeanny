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

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  interval: 500,
});

// about container
ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidePerView: "auto",
  spaceBetween: 30,
});

// Sélectionne la popup et le bouton
var popup = document.getElementById('popupForm');
var orderBtn = document.getElementById('order__1');
var closeBtn = document.getElementsByClassName('close')[0];

// Afficher la popup quand le bouton Commander est cliqué
orderBtn.addEventListener('click', function() {
  popup.style.display = "block";
});

// Fermer la popup quand le bouton X est cliqué
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

// Fermer la popup si l'utilisateur clique en dehors du contenu
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
});

// Prix unitaire fixe
const unitPrice = 2000; // Par exemple, 500 unités de monnaie

// Sélectionner les éléments
const quantityInput = document.getElementById('quantity');
const totalInput = document.getElementById('total');

// Fonction pour calculer et afficher le montant total
function calculateTotal() {
    const quantity = parseInt(quantityInput.value); // Récupérer la quantité entrée
    const total = quantity * unitPrice; // Calculer le montant total
    totalInput.value = total; // Afficher le montant dans l'input total
}
// Ajouter un événement pour recalculer quand la quantité change
quantityInput.addEventListener('input', calculateTotal);

// Calculer le montant initial au chargement de la page
calculateTotal();


