const inpWrap = document.querySelector('.input__group');/* On déclare une variable*/
const input = document.querySelector('.inp__anim');/* On déclare une variable*/
const validation = document.querySelector('.input__group span');/* On déclare une variable*/

/* On va créér un évènement */

input.addEventListener('input', function(e){
    /*console.log(e.target.value);*/
    if(e.target.value !== ""){
        e.target.parentNode.classList.add('active-input');
    } else if (e.target.value === ""){
        e.target.parentNode.classList.remove('active-input');
    }

    if(e.target.value.includes('$')){
        /*console.log("Erreur!!");*/
        input.classList.add('.erreur');
        validation.classList.add('visible');
    } else {
        input.classList.remove('.erreur');
        validation.classList.remove('visible');
    }
})