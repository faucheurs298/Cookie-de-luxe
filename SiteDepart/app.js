// Boutons equipements

// On récupère un tableau (liste en Python) de tous les éléments
// de classe .btn-modale
const btns = document.querySelectorAll('.btn-modale');
// On récupère la div pour afficher l'image cliquée
const modaleEquipement = document.querySelector('.bloc-modale');
// On récupère la balise img de ce div
const imgIndex = document.querySelector('.bloc-modale img');

// Pour chaque bouton dans la variable btns
btns.forEach(btn => {
    // On écoute l'évènement onclick sur le bouton
    btn.addEventListener('click', (e) => {
        // On modifie le nom de l'image à afficher dans la balise img
        imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
        // On applique la classe active-modale pour la div
        modaleEquipement.classList.add('active-modale');
    })
})

// Pour la fermeture, il suffit de cliquer n'importe où (et y compris la croix)
modaleEquipement.addEventListener('click', () => {
    // On enlève la classe active-modale pour la div
    modaleEquipement.classList.remove('active-modale');
})


// Animation barre de navigation

// On récupère le conteneur de navigation (nav)
const nav = document.querySelector('nav');

// On écoute l'évènement "scroll"
window.addEventListener('scroll', () => {
    // Si on scroll plus de 30 pixels sur Y, on applique le style anim-nav
    if(window.scrollY > 30) {
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }

})