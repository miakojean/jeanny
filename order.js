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