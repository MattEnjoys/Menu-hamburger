// Sélectionne l'élément avec la classe "menu-hamburger" et le stocke dans une constante "menuHamburger"
const menuHamburger = document.querySelector(".menu-hamburger");

// Sélectionne l'élément avec la classe "nav-links" et le stocke dans une constante "navLinks"
const navLinks = document.querySelector(".nav-links");

// Ajoute un écouteur d'événement de clic à l'élément "menuHamburger"
menuHamburger.addEventListener("click", () => {
    // Ajoute ou supprime la classe "mobile-menu" à l'élément "navLinks" lorsque le menu hamburger est cliqué
    navLinks.classList.toggle("mobile-menu");
});

// Sélectionne tous les éléments <li> à l'intérieur des éléments avec la classe "links" et les stocke dans une variable "links"
let links = document.querySelectorAll(".navbar li");

// Définition de la fonction "reset"
function reset() {
    // Parcourt tous les éléments "li" dans la liste "links" avec une boucle forEach
    links.forEach((li) => {
        // Supprime la classe "active" de chaque élément "li"
        li.classList.remove("active");
    });
}

// Ajoute un écouteur d'événement de clic à chaque élément "li" de la liste "links"
links.forEach((li) => {
    li.addEventListener("click", () => {
        // Appelle la fonction "reset" pour réinitialiser tous les éléments "li"
        reset();
        // Ajoute la classe "active" à l'élément "li" cliqué
        li.classList.add("active");
    });
});
