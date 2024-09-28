/*=============== EXPANDED LIST ===============*/
const navExpand = document.getElementById('nav-expand'),
      navExpandList = document.getElementById('nav-expand-list'),
      navExpandIcon = document.getElementById('nav-expand-icon')

navExpand.addEventListener('click', () => {
   // Expand list
   navExpandList.classList.toggle('show-list')

   // Rotate icon
   navExpandIcon.classList.toggle('rotate-icon')
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

// Sélectionner les popups et les boutons
var popup = document.getElementById('popupForm');
var popupReser = document.getElementById('popupFormreservation');
var ReserBtn = document.getElementById('order__2');
var orderBtn = document.getElementById('order__1');

// Boutons de fermeture spécifiques pour chaque popup
var closeOrderBtn = document.getElementById('closeOrder'); // ID pour fermer la commande
var closeReservationBtn = document.getElementById('closeReservation'); // ID pour fermer la réservation

// Afficher la réservation pour le plat
ReserBtn.addEventListener('click', function() {
  popupReser.style.display = "block";
});

// Fermer la popup de réservation quand le bouton X est cliqué
closeReservationBtn.addEventListener('click', function() {
  popupReser.style.display = 'none';
});

// Afficher la popup de commande quand le bouton Commander est cliqué
orderBtn.addEventListener('click', function() {
  popup.style.display = "block";
});

// Fermer la popup de commande quand le bouton X est cliqué
closeOrderBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

// Fermer la popup si l'utilisateur clique en dehors du contenu
window.addEventListener('click', function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  } else if (event.target == popupReser) {
    popupReser.style.display = "none";
  }
});

// Sélectionner les éléments par classe
const quantityInputs = document.getElementsByClassName('quantity');
const totalInputs = document.getElementsByClassName('price');
const unitPrice = 2000; // Par exemple, le prix unitaire peut être défini ici

// Fonction pour calculer et afficher le montant total
function calculateTotal(index) {
    const quantity = parseInt(quantityInputs[index].value); // Récupérer la quantité entrée
    const total = quantity * unitPrice; // Calculer le montant total
    totalInputs[index].value = total; // Afficher le montant dans l'input total
}

// Ajouter un événement pour recalculer quand la quantité change
for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('input', function() {
        calculateTotal(i);  // Passer l'index de l'input pour les associer
    });
}

// Calculer le montant initial au chargement de la page
for (let i = 0; i < quantityInputs.length; i++) {
    calculateTotal(i);  // Calculer pour chaque entrée au chargement
}
