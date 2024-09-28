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